import json
import os
import re
import subprocess
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DIST_DIR = BASE_DIR / "dist"

REGISTRY_FILE = DATA_DIR / "registry.json"
QUEUE_FILE = DATA_DIR / "queue.json"
COMPLETED_FILE = DATA_DIR / "completed_subjects.json"
SEED_CATALOG_FILE = DATA_DIR / "seed-catalog.json"
TEMPLATE_CONFIG_FILE = DATA_DIR / "template_config.json"

DEFAULT_SEED = "one piece"
MAX_PAGES_PER_RUN = 5000
MAX_DIRECT_LINKS_PER_TOPIC = 12
MIN_ARTICLE_TEXT = 200
AUTO_COMMIT_ON_COMPLETE = True
PROMPT_FOR_NEXT_SEED = True
COMMIT_EVERY = 5000

GENERIC_TITLES = {
    "category",
    "categories",
    "list of",
    "portal",
    "template",
    "help",
    "main page",
    "wiki",
    "wikipedia",
    "special",
    "user",
    "talk",
    "index",
    "search",
}

SEED_RULES = {
    "one piece": {
        "allow_terms": {
            "one piece",
            "monkey d luffy",
            "luffy",
            "roronoa zoro",
            "zoro",
            "nami",
            "usopp",
            "sanji",
            "chopper",
            "robin",
            "franky",
            "brook",
            "jinbei",
            "ace",
            "sabo",
            "shanks",
            "buggy",
            "law",
            "kaido",
            "big mom",
            "whitebeard",
            "marineford",
            "alabasta",
            "skypiea",
            "wano",
            "enies lobby",
            "sabaody",
            "dressrosa",
            "impel down",
            "straw hat",
            "devil fruit",
            "world government",
            "celestial dragon",
            "gorosei",
            "haki",
            "poneglyph",
            "mugiwara",
            "marines",
            "pirate",
        },
        "block_terms": {
            "live aid",
            "re zero",
            "f zero",
            "kentucky route zero",
            "battlestar galactica",
            "mob psycho",
            "attack on titan",
            "skibidi",
            "sym bionic titan",
            "twin peaks",
            "david cronenberg",
            "mulholland drive",
            "austria hungary",
            "the elephant man",
            "the straight story",
            "one battle after another",
            "atlantis the lost empire",
            "one man band",
            "cars film",
            "drive 2011 film",
            "sissy spacek",
            "eternal sunshine",
            "the matrix resurrections",
            "black horror",
            "dont look up",
            "annabelle",
            "bridgeton",
            "jessica jones",
            "wicked",
            "melania",
            "the lego movie",
            "gods and monsters",
            "the revenant",
            "jazz jamaica",
            "mongolian death worm",
            "a recipe for seduction",
        },
        "block_media_types": True,
    },
    "star wars": {
        "allow_terms": {
            "star wars",
            "jedi",
            "sith",
            "lightsaber",
            "skywalker",
            "vader",
            "han solo",
            "leia",
            "chewbacca",
            "yoda",
            "darth",
            "death star",
            "clone wars",
            "galactic empire",
            "rebel alliance",
        },
        "block_terms": {
            "one piece",
            "attack on titan",
            "f zero",
            "live aid",
        },
        "block_media_types": True,
    }
}

DEFAULT_SEED_RULES = {
    "allow_terms": set(),
    "block_terms": set(),
    "block_media_types": True,
}

DATA_DIR.mkdir(parents=True, exist_ok=True)
DIST_DIR.mkdir(parents=True, exist_ok=True)


def slugify(value):
    text = str(value or "").strip().lower()
    text = re.sub(r"[&/\\]+", "-", text)
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[-\s]+", "-", text)
    return text.strip("-")


def load_json(filepath, default):
    if not filepath.exists():
        return default
    try:
        with open(filepath, "r", encoding="utf-8") as handle:
            data = json.load(handle)
            return data if data is not None else default
    except Exception:
        return default


def save_json(filepath, data):
    with open(filepath, "w", encoding="utf-8") as handle:
        json.dump(data, handle, indent=2, ensure_ascii=False)


def get_seed_dir(root_topic):
    seed_slug = slugify(root_topic)
    seed_dir = DIST_DIR / seed_slug
    seed_dir.mkdir(parents=True, exist_ok=True)
    (seed_dir / "pages").mkdir(parents=True, exist_ok=True)
    return seed_dir


def get_global_pages_dir():
    pages_dir = DIST_DIR / "pages"
    pages_dir.mkdir(parents=True, exist_ok=True)
    return pages_dir


def fetch_url(url, timeout=12):
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "TonoloreBot/1.1 (https://tonolore.com)",
            "Accept-Language": "en-US,en;q=0.9"
        }
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        if response.status != 200:
            return ""
        return response.read().decode("utf-8", errors="replace")
    

def strip_html(raw_html):
    text = re.sub(r"<script.*?</script>", " ", raw_html, flags=re.IGNORECASE | re.DOTALL)
    text = re.sub(r"<style.*?</style>", " ", text, flags=re.IGNORECASE | re.DOTALL)
    text = re.sub(r"<[^>]+>", " ", text)
    text = html_unescape(text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def html_unescape(value):
    return (
        value.replace("&nbsp;", " ")
        .replace("&amp;", "&")
        .replace("&quot;", '"')
        .replace("&#039;", "'")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
    )


def clean_source_text(text):
    text = re.sub(r"\[\d+\]", "", text)
    text = re.sub(r"\[citation needed\]", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def is_generic_topic(title):
    if not title:
        return True
    lowered = title.lower().strip()
    if lowered in GENERIC_TITLES:
        return True
    if lowered.startswith("list of "):
        return True
    if lowered.startswith("category:"):
        return True
    if lowered.startswith("template:"):
        return True
    if lowered.startswith("portal:"):
        return True
    if "wikimedia" in lowered:
        return True
    return False


def normalize_seed_text(value):
    text = str(value or "").lower()
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def parse_csv_terms(raw_value):
    if raw_value is None:
        return []
    terms = []
    for chunk in str(raw_value).replace("\n", ",").split(","):
        cleaned = normalize_seed_text(chunk)
        if cleaned and cleaned not in terms:
            terms.append(cleaned)
    return terms


def get_seed_rules(root_topic, allow_terms=None, block_terms=None):
    root_name = normalize_seed_text(root_topic or "")
    if not root_name:
        return DEFAULT_SEED_RULES

    normalized_key = root_name.replace("-", " ")
    direct = SEED_RULES.get(root_name)
    if direct:
        rules = dict(direct)
    else:
        rules = dict(SEED_RULES.get(normalized_key, DEFAULT_SEED_RULES))

    if allow_terms is not None:
        rules["allow_terms"] = set(allow_terms)
    if block_terms is not None:
        rules["block_terms"] = set(block_terms)
    return rules


def is_seed_relevant(topic, root_topic, article_text="", allow_terms=None, block_terms=None):
    if not topic:
        return False

    root_name = normalize_seed_text(root_topic or "")
    if not root_name:
        return True

    topic_text = normalize_seed_text(topic)
    article_text = normalize_seed_text(article_text)

    if topic_text in {"", root_name}:
        return True

    rules = get_seed_rules(root_topic, allow_terms, block_terms)
    for blocked in rules.get("block_terms", set()):
        if blocked in topic_text or blocked in article_text:
            return False

    if rules.get("block_media_types"):
        if re.search(r"\b(season|episode|film|movie|series|miniseries|soundtrack|album|discography|song|show|web series|tv series|documentary|play|single|episode list)\b", topic_text):
            return False

    allow_terms = rules.get("allow_terms", set())
    if allow_terms:
        return any(term in topic_text or term in article_text for term in allow_terms) or root_name in topic_text

    if root_name in topic_text:
        return True
    return True


def build_theme_palette(topic):
    label = slugify(topic or "tonolore")
    base = 0
    for char in label:
        base += ord(char)
    hue = base % 360
    return {
        "accent": f"hsl({hue} 78% 58%)",
        "accent_soft": f"hsl({hue} 68% 72%)",
        "deep": "#0d1117",
        "panel": "#121a22",
        "panel_alt": "#0f1720",
        "ink": "#edf1f4",
        "muted": "#b0bfca",
        "border": "rgba(255,255,255,0.10)",
        "chip": f"hsla({hue}, 70%, 56%, 0.15)"
    }


def fetch_wikipedia_article(topic, root_topic):
    query_title = str(topic).strip()
    encoded = urllib.parse.quote(query_title.replace(" ", "_"), safe="")
    wiki_url = f"https://en.wikipedia.org/wiki/{encoded}"
    api_url = (
        "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text|title&redirects=1&"
        f"page={urllib.parse.quote(query_title.replace(' ', '_'))}"
    )

    paragraphs = []
    title = query_title
    try:
        payload = json.loads(fetch_url(api_url))
        if payload.get("parse"):
            title = payload["parse"].get("title", query_title)
            raw_html = payload["parse"]["text"].get("*", "")
            for block in re.findall(r"<p>(.*?)</p>", raw_html, flags=re.DOTALL | re.IGNORECASE):
                clean = clean_source_text(strip_html(block))
                if len(clean) > 80:
                    paragraphs.append(clean)
    except Exception:
        pass

    if not paragraphs:
        paragraphs = [
            f"{title} is a key subject within the broader setting of {root_topic}.",
            f"Its history, role, and interpretation are shaped by the franchise's main canon, related stories, and recurring cultural references."
        ]

    if len(" ".join(paragraphs)) < MIN_ARTICLE_TEXT:
        paragraphs.append(
            f"{title} continues to carry meaning through repeated appearances, ongoing references, and broader discussion across the subject's context and evolving canon."
        )

    intro = paragraphs[0]
    body = paragraphs[1:4]
    evidence = paragraphs[4:7]

    article_html = f"""
    <section class="article-body">
      <p class="lede">{intro}</p>
      <h2>Overview</h2>
      <p>{body[0] if len(body) > 0 else intro}</p>
      <p>{body[1] if len(body) > 1 else 'The topic is discussed across multiple works, iterations, and interpretations that make its place in the larger franchise easier to follow.'}</p>
      <h2>Context & Canon</h2>
      <p>{body[2] if len(body) > 2 else 'Across the medium, it appears in recurring story beats, thematic patterns, and narrative explanations that help define its role.'}</p>
      {f'<h2>Extended Detail</h2>' + ''.join(f'<p>{p}</p>' for p in evidence) if evidence else ''}
      <hr class="rule" />
      <section class="source-list">
        <h2>Reference material</h2>
        <ul>
          <li><a href="{wiki_url}" target="_blank" rel="noopener">Wikipedia: {title}</a></li>
          <li><a href="https://www.fandom.com/?s={urllib.parse.quote(title)}" target="_blank" rel="noopener">Fandom search: {title}</a></li>
          <li><a href="https://www.google.com/search?q={urllib.parse.quote(title + ' ' + root_topic + ' lore')}" target="_blank" rel="noopener">Google search: {title}</a></li>
        </ul>
      </section>
    </section>
    """

    return {
        "title": title,
        "content": article_html,
        "url": wiki_url,
        "text": " ".join(paragraphs),
        "quality": len(" ".join(paragraphs))
    }


def fetch_wikipedia_search(query, max_items=8):
    search_query = urllib.parse.quote(query)
    api_url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch={search_query}&srlimit={max_items}"
    try:
        data = json.loads(fetch_url(api_url))
        return [result.get("title", "") for result in data.get("query", {}).get("search", []) if result.get("title")]
    except Exception:
        return []


def fetch_fandom_reference(topic, root_topic):
    search_url = f"https://www.fandom.com/?s={urllib.parse.quote(topic + ' ' + root_topic)}"
    try:
        html_blob = fetch_url(search_url)
        if not html_blob:
            return {"summary": "", "links": []}
        summary = strip_html(html_blob)
        summary = re.sub(r"\s+", " ", summary)[:280]
        return {"summary": summary, "links": [search_url]}
    except Exception:
        return {"summary": "", "links": []}


def fetch_google_reference(topic, root_topic):
    url = f"https://www.google.com/search?q={urllib.parse.quote(topic + ' ' + root_topic + ' lore')}"
    try:
        html_blob = fetch_url(url)
        if not html_blob:
            return {"summary": "", "links": []}
        summary = strip_html(html_blob)
        summary = re.sub(r"\s+", " ", summary)[:260]
        return {"summary": summary, "links": [url]}
    except Exception:
        return {"summary": "", "links": []}


def choose_top_source_passages(topic, root_topic, source_entries):
    passages = []
    seen = set()
    for label, text in source_entries:
        if not text:
            continue
        cleaned = clean_source_text(strip_html(text))
        if len(cleaned) < 80:
            continue
        for sentence in re.split(r"(?<=[.!?])\s+", cleaned):
            sentence = sentence.strip()
            key = normalize_seed_text(sentence)
            if len(sentence) < 45 or not key or key in seen:
                continue
            seen.add(key)
            passages.append((label, sentence))

    if not passages:
        return [
            ("Wikipedia", f"{topic} remains a central subject within {root_topic}, and its significance is reinforced by repeated references, canon details, and the broader fan conversation around it.")
        ]

    passages.sort(key=lambda item: len(item[1]), reverse=True)
    return passages[:3]


def reword_three_site_descriptions(topic, root_topic, source_entries):
    chosen = choose_top_source_passages(topic, root_topic, source_entries)
    if not chosen:
        return f"{topic} is a notable subject within {root_topic}, appearing in recurring narrative, thematic, and cultural references that help define its place in the broader canon."

    lead_parts = []
    for _, sentence in chosen:
        lead_parts.append(sentence)

    source_blend = " ".join(lead_parts[:3])
    source_blend = re.sub(r"\s+", " ", source_blend).strip()

    name = topic.strip()
    intro = (
        f"{name} is a significant subject within {root_topic}, recognized for its recurring presence in the setting's major stories, character arcs, and cultural references. "
        f"The topic is commonly understood through its role in the wider canon, where it connects narrative developments, thematic patterns, and broader lore traditions. "
        f"Across multiple reference points, {name} is treated as an established element of the world rather than a minor or incidental detail."
    )

    return f"{intro} {source_blend}"


def reset_generation_state():
    for path in [DIST_DIR, DATA_DIR / "queue.json", DATA_DIR / "completed_subjects.json", DATA_DIR / "registry.json", DATA_DIR / "seed-catalog.json", DATA_DIR / "template_config.json"]:
        if path.is_dir():
            for child in list(path.iterdir()):
                if child.is_dir():
                    for nested in sorted(child.rglob('*'), reverse=True):
                        if nested.is_file() or nested.is_symlink():
                            nested.unlink()
                        elif nested.is_dir():
                            nested.rmdir()
                    child.rmdir()
                else:
                    child.unlink()
            path.rmdir()
        elif path.exists():
            path.unlink()

    DIST_DIR.mkdir(parents=True, exist_ok=True)
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    save_json(QUEUE_FILE, [])
    save_json(COMPLETED_FILE, [])
    save_json(REGISTRY_FILE, {})
    save_json(SEED_CATALOG_FILE, {"categories": [], "subjects": []})
    save_json(TEMPLATE_CONFIG_FILE, {})


def dedupe_preserve_order(items):
    seen = set()
    out = []
    for item in items:
        key = slugify(item)
        if not item or not key or key in seen:
            continue
        seen.add(key)
        out.append(item)
    return out


def select_direct_links(topic, root_topic, registry, allow_terms=None, block_terms=None):
    candidates = []
    for result in fetch_wikipedia_search(f'{topic} {root_topic}', max_items=12):
        if not result or result.lower() == topic.lower():
            continue
        if is_generic_topic(result):
            continue
        if not is_seed_relevant(result, root_topic, allow_terms=allow_terms, block_terms=block_terms):
            continue
        if slugify(result) in {slugify(x) for x in registry.keys()}:
            continue
        candidates.append(result)
    direct = dedupe_preserve_order(candidates)[:MAX_DIRECT_LINKS_PER_TOPIC]
    return direct


def relative_href_from(current_dir, target_path):
    if current_dir is None:
        current_dir = get_global_pages_dir()
    rel = os.path.relpath(target_path, current_dir).replace('\\', '/')
    if not rel.startswith('.'):
        rel = './' + rel
    return rel


def build_validated_list_items(items_list, registry, current_page_dir=None):
    html_items = []
    registered = {slugify(title) for title in registry.keys()}
    for item in dedupe_preserve_order(items_list):
        item_slug = slugify(item)
        if item_slug in registered:
            target = get_global_pages_dir() / item_slug / "index.html"
            href = relative_href_from(current_page_dir or get_global_pages_dir(), target)
            html_items.append(f'<li><a href="{href}">{item}</a></li>')
        else:
            html_items.append(f'<li><span class="unlinked-topic">{item}</span></li>')
    return "".join(html_items)


def build_global_link_list(registry, current_title=None, current_page_dir=None):
    items = []
    current_dir = current_page_dir or get_global_pages_dir()
    for title in sorted(registry.keys(), key=lambda value: value.lower()):
        if current_title and title.lower() == current_title.lower():
            continue
        slug = slugify(title)
        target = get_global_pages_dir() / slug / "index.html"
        href = relative_href_from(current_dir, target)
        items.append(f'<li><a href="{href}">{title}</a></li>')
    return "".join(items)


def refresh_global_page_links(registry):
    pages_dir = get_global_pages_dir()
    if not pages_dir.exists():
        return

    all_links = build_global_link_list(registry)
    for page_dir in sorted(pages_dir.iterdir()):
        if not page_dir.is_dir():
            continue
        html_file = page_dir / "index.html"
        if not html_file.exists():
            continue
        try:
            html_text = html_file.read_text(encoding="utf-8")
        except Exception:
            continue

        nav_html = f'<section class="related-region"><h2>All pages</h2><ul>{all_links}</ul></section>'
        if '<section class="related-region"><h2>All pages</h2>' in html_text:
            html_text = re.sub(r'<section class="related-region"><h2>All pages</h2>.*?</section>', nav_html, html_text, flags=re.DOTALL)
        elif '</main>' in html_text:
            html_text = html_text.replace('</main>', f'{nav_html}</main>', 1)
        else:
            html_text = html_text.replace('</body>', f'{nav_html}</body>', 1)
        html_file.write_text(html_text, encoding='utf-8')


def create_page_html(title, article_content, subtopics, siblings, root_topic, registry, theme_palette):
    slug = slugify(title)
    pages_dir = get_global_pages_dir()
    page_dir = pages_dir / slug
    page_dir.mkdir(parents=True, exist_ok=True)

    if (page_dir / "index.html").exists():
        return

    subtopics_html = build_validated_list_items(subtopics, registry, page_dir)
    siblings_html = build_validated_list_items(siblings, registry, page_dir)
    all_pages_html = build_global_link_list(registry, title, page_dir)
    overview_target = (get_seed_dir(root_topic) / "index.html")
    overview_href = relative_href_from(page_dir, overview_target)

    body = f"""
    <div class="eyebrow"><a href="{overview_href}">&larr; Back to {root_topic}</a></div>
    <h1>{title}</h1>
    <div class="card">{article_content}</div>
    <section class="related-region">
      <h2>Directly connected topics</h2>
      <ul>{subtopics_html}</ul>
    </section>
    {f'<section class="related-region"><h2>Parallel topics</h2><ul>{siblings_html}</ul></section>' if siblings_html else ''}
    <section class="related-region"><h2>All pages</h2><ul>{all_pages_html}</ul></section>
    """

    palette = theme_palette or build_theme_palette(root_topic)
    document = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} — Ton-o-Lore</title>
  <style>
    :root {{
      --bg: {palette['deep']};
      --panel: {palette['panel']};
      --panel-alt: {palette['panel_alt']};
      --ink: {palette['ink']};
      --muted: {palette['muted']};
      --accent: {palette['accent']};
      --accent-soft: {palette['accent_soft']};
      --border: {palette['border']};
      --chip: {palette['chip']};
      color-scheme: dark;
    }}
    * {{ box-sizing: border-box; }}
    body {{ margin: 0; background: radial-gradient(circle at top, rgba(255,255,255,0.02), transparent 38%), var(--bg); color: var(--ink); font-family: Georgia, "Times New Roman", serif; line-height: 1.7; }}
    a {{ color: var(--accent-soft); text-decoration: none; }}
    a:hover {{ text-decoration: underline; }}
    .wrap {{ max-width: 980px; margin: 0 auto; padding: 32px 20px 80px; }}
    .eyebrow {{ text-transform: uppercase; letter-spacing: 0.16em; font-size: 0.7rem; font-family: system-ui, sans-serif; font-weight: 700; color: var(--accent-soft); }}
    h1 {{ font-size: clamp(2.2rem, 5vw, 4rem); line-height: 1.08; margin: 12px 0 16px; color: var(--ink); }}
    h2 {{ font-size: 1.35rem; margin: 28px 0 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border); color: var(--ink); }}
    p {{ margin: 0 0 1.1rem; color: var(--ink); }}
    .card {{ background: var(--panel); border: 1px solid var(--border); border-radius: 18px; padding: 24px 22px; box-shadow: 0 18px 44px rgba(0,0,0,0.18); }}
    .card .lede {{ font-size: 1.2rem; }}
    .rule {{ border: 0; border-top: 1px solid var(--border); margin: 26px 0 18px; }}
    ul {{ list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; }}
    li {{ background: var(--panel-alt); border: 1px solid var(--border); border-radius: 12px; padding: 10px 12px; }}
    .related-region {{ margin-top: 18px; }}
    .unlinked-topic {{ color: var(--muted); }}
    .source-list ul {{ grid-template-columns: 1fr; }}
  </style>
</head>
<body>
  <div class="wrap">
    <main>{body}</main>
  </div>
</body>
</html>
"""
    with open(page_dir / "index.html", "w", encoding="utf-8") as handle:
        handle.write(document)

    refresh_global_page_links(registry)


def build_seed_index_and_sitemap(registry, root_topic):
    seed_slug = slugify(root_topic)
    seed_dir = get_seed_dir(root_topic)
    palette = build_theme_palette(root_topic)

    page_links = []
    for title, slug in sorted(registry.items(), key=lambda item: item[0].lower()):
        page_links.append(f'<li><a href="pages/{slug}/index.html">{title}</a></li>')

    overview = fetch_wikipedia_article(root_topic, root_topic)
    document = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{overview['title']} — Ton-o-Lore</title>
  <style>
    :root {{
      --bg: {palette['deep']};
      --panel: {palette['panel']};
      --accent: {palette['accent']};
      --accent-soft: {palette['accent_soft']};
      --ink: {palette['ink']};
      --muted: {palette['muted']};
      --border: {palette['border']};
    }}
    * {{ box-sizing: border-box; }}
    body {{ margin: 0; background: radial-gradient(circle at top, rgba(255,255,255,0.02), transparent 40%), var(--bg); color: var(--ink); font-family: Georgia, serif; line-height: 1.7; }}
    .wrap {{ max-width: 980px; margin: 0 auto; padding: 28px 20px 80px; }}
    .card {{ background: var(--panel); border: 1px solid var(--border); border-radius: 18px; padding: 24px 22px; }}
    h1 {{ font-size: clamp(2rem, 5vw, 3.4rem); margin: 0 0 18px; }}
    h2 {{ margin-top: 30px; border-bottom: 1px solid var(--border); padding-bottom: 8px; }}
    ul {{ list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; }}
    li {{ background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 12px; padding: 10px 12px; }}
    a {{ color: var(--accent-soft); text-decoration: none; }}
    a:hover {{ text-decoration: underline; }}
  </style>
</head>
<body>
  <div class="wrap">
    <div class="card">
      <h1>{overview['title']}</h1>
      {overview['content']}
    </div>
    <h2>Explored pages ({len(registry)})</h2>
    <ul>{''.join(page_links)}</ul>
  </div>
</body>
</html>
"""
    with open(seed_dir / "index.html", "w", encoding="utf-8") as handle:
        handle.write(document)

    sitemap_entries = [
        f"  <url><loc>https://www.tonolore.com/{seed_slug}/index.html</loc></url>",
        *[
            f"  <url><loc>https://www.tonolore.com/{seed_slug}/pages/{slug}/index.html</loc></url>"
            for _, slug in registry.items()
        ]
    ]
    sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n" + "\n".join(sitemap_entries) + "\n</urlset>\n"
    with open(seed_dir / "sitemap.xml", "w", encoding="utf-8") as handle:
        handle.write(sitemap)


def git_commit_and_push(processed_count, total_count, root_topic):
    try:
        subprocess.run(["git", "add", "."], check=True, capture_output=True)
        msg = f"Auto-commit [{root_topic}]: generated {processed_count} pages; total {total_count}"
        subprocess.run(["git", "commit", "-m", msg], check=True, capture_output=True)
        subprocess.run(["git", "push"], check=True, capture_output=True)
        print(f"\n[✓] Auto-commit complete: {msg}")
    except subprocess.CalledProcessError:
        print("\n[!] Git commit/push skipped: no changes or remote not configured.")


def page_is_reliable(topic, article, root_topic=None, allow_terms=None, block_terms=None):
    if not article or not article.get("text"):
        return False
    text = article["text"]
    if len(text.strip()) < MIN_ARTICLE_TEXT:
        return False
    if re.search(r"^(?:an overview|a core entity|detailed lore)", text, flags=re.IGNORECASE):
        return False
    if root_topic and not is_seed_relevant(topic, root_topic, text, allow_terms=allow_terms, block_terms=block_terms):
        return False
    return True


def normalize_subject_name(value):
    cleaned = str(value or "").strip().lower()
    cleaned = re.sub(r"[^a-z0-9]+", " ", cleaned)
    return " ".join(cleaned.split())


def titles_are_equivalent(a, b):
    left = normalize_subject_name(a)
    right = normalize_subject_name(b)
    if not left or not right:
        return False
    if left == right:
        return True
    if left in right or right in left:
        return True
    left_tokens = set(left.split())
    right_tokens = set(right.split())
    if not left_tokens or not right_tokens:
        return False
    overlap = len(left_tokens & right_tokens)
    return overlap > 0 and (overlap / max(len(left_tokens), len(right_tokens))) >= 0.6


def merge_duplicate_subjects_in_seed(root_topic, registry):
    if not registry:
        return registry

    canonical_by_key = {}
    final_registry = {}
    for title in sorted(registry.keys(), key=lambda item: len(item), reverse=True):
        slug = slugify(title)
        match_key = None
        for existing_key in canonical_by_key:
            if titles_are_equivalent(existing_key, title):
                match_key = existing_key
                break
        if match_key is None:
            match_key = title
            canonical_by_key[title] = title
        final_registry[match_key] = slugify(match_key)

    if len(final_registry) != len(registry):
        print(f"\n[~] Merged duplicate or near-duplicate subject entries for '{root_topic}'.")

    return final_registry


def protect_links_in_html(html_text):
    placeholders = []

    def replace_link(match):
        placeholders.append(match.group(0))
        return f"__TONO_LINK_PLACEHOLDER_{len(placeholders) - 1}__"

    protected = re.sub(r"<a\b[^>]*>.*?</a>", replace_link, html_text, flags=re.IGNORECASE | re.DOTALL)
    return protected, placeholders


def restore_links_in_html(html_text, placeholders):
    for index, content in enumerate(placeholders):
        html_text = html_text.replace(f"__TONO_LINK_PLACEHOLDER_{index}__", content)
    return html_text


def link_known_subject_mentions(html_text, registry, current_page_dir=None):
    protected, placeholders = protect_links_in_html(html_text)
    titles = sorted(registry.keys(), key=lambda value: len(value), reverse=True)
    current_dir = current_page_dir or get_global_pages_dir()
    for title in titles:
        slug = slugify(title)
        if not title or not slug or title.lower() in {"one piece"}:
            continue
        target = get_global_pages_dir() / slug / "index.html"
        href = relative_href_from(current_dir, target)
        pattern = re.compile(rf"(?<![A-Za-z0-9]){re.escape(title)}(?![A-Za-z0-9])", re.IGNORECASE)
        protected = pattern.sub(f'<a href="{href}">{title}</a>', protected)
    return restore_links_in_html(protected, placeholders)


def repair_seed_links(root_topic, registry):
    seed_dir = get_seed_dir(root_topic)
    pages_dir = seed_dir / "pages"
    if not pages_dir.exists():
        return

    for page_dir in sorted(pages_dir.iterdir()):
        if not page_dir.is_dir():
            continue
        html_file = page_dir / "index.html"
        if not html_file.exists():
            continue

        try:
            html_text = html_file.read_text(encoding="utf-8")
            main_match = re.search(r"<main>(.*)</main>", html_text, flags=re.IGNORECASE | re.DOTALL)
            if main_match:
                body_html = main_match.group(1)
                fixed_html = link_known_subject_mentions(body_html, registry, page_dir)
                html_text = html_text.replace(body_html, fixed_html, 1)
            else:
                html_text = link_known_subject_mentions(html_text, registry, page_dir)
            html_file.write_text(html_text, encoding="utf-8")
        except Exception:
            continue


def build_seed_catalog():
    categories = []
    subjects = []

    for seed_dir in sorted(DIST_DIR.iterdir(), key=lambda value: value.name.lower()):
        if not seed_dir.is_dir():
            continue

        label = " ".join(part.capitalize() for part in seed_dir.name.replace("-", " ").split())
        pages_dir = seed_dir / "pages"
        subject_count = 0
        if pages_dir.exists():
            subject_count = sum(1 for child in pages_dir.iterdir() if child.is_dir())

        categories.append({
            "id": seed_dir.name,
            "label": label,
            "blurb": f"Generated lore pages for {label} — kept as a seed shelf for this topic.",
            "subjectIds": [seed_dir.name]
        })

        subjects.append({
            "id": seed_dir.name,
            "name": label,
            "slug": seed_dir.name,
            "path": f"/{seed_dir.name}",
            "theme": seed_dir.name,
            "categories": [seed_dir.name],
            "entity_count": subject_count,
            "logo": {"url": "/assets/tonolore.jpg", "alt": label},
            "short_description": f"Seed shelf for {label}."
        })

    save_json(SEED_CATALOG_FILE, {"categories": categories, "subjects": subjects})
    return {"categories": categories, "subjects": subjects}


def finalize_subject(root_topic, registry):
    merged_registry = merge_duplicate_subjects_in_seed(root_topic, registry)
    repair_seed_links(root_topic, merged_registry)
    save_json(REGISTRY_FILE, merged_registry)
    build_seed_index_and_sitemap(merged_registry, root_topic)
    build_seed_catalog()
    return merged_registry


def run_dictionary_builder(seed_override=None, allow_terms=None, block_terms=None):
    root_topic = seed_override or (sys.argv[1].strip() if len(sys.argv) > 1 and sys.argv[1].strip() else DEFAULT_SEED)
    allow_terms = parse_csv_terms(allow_terms)
    block_terms = parse_csv_terms(block_terms)
    template_raw = None
    config = load_json(TEMPLATE_CONFIG_FILE, {})
    template_path = config.get("template_path")
    if template_path and os.path.exists(template_path):
        with open(template_path, "r", encoding="utf-8") as handle:
            template_raw = handle.read()

    registry = load_json(REGISTRY_FILE, {})
    queue = load_json(QUEUE_FILE, [])
    completed = load_json(COMPLETED_FILE, [])

    if not queue:
        queue = [root_topic]

    processed_in_batch = 0
    page_metadata_cache = {}

    while queue:
        current_topic = queue.pop(0)
        if not current_topic or current_topic in completed:
            continue

        candidate_slug = slugify(current_topic)
        if candidate_slug in {slugify(title) for title in registry.keys()}:
            continue
        if (get_global_pages_dir() / candidate_slug / "index.html").exists():
            continue

        article = fetch_wikipedia_article(current_topic, root_topic)
        if not page_is_reliable(current_topic, article, root_topic, allow_terms=allow_terms, block_terms=block_terms):
            if not fetch_wikipedia_search(current_topic, 1):
                print(f"\n[!] Rejecting off-seed or low-quality page: {current_topic}")
                continue
            continue

        fandom = fetch_fandom_reference(current_topic, root_topic)
        google = fetch_google_reference(current_topic, root_topic)

        related = select_direct_links(current_topic, root_topic, registry, allow_terms=allow_terms, block_terms=block_terms)
        source_entries = [
            ("Wikipedia", article.get("text", "")),
            ("Fandom", fandom.get("summary", "")),
            ("Google", google.get("summary", "")),
        ]
        article["text"] = reword_three_site_descriptions(current_topic, root_topic, source_entries)
        article["content"] = article["content"]

        title = article["title"]
        title_slug = slugify(title)
        if title_slug in {slugify(value) for value in registry.keys()} or (get_global_pages_dir() / title_slug / "index.html").exists():
            completed.append(current_topic)
            continue

        registry[title] = title_slug
        page_metadata_cache[title] = {
            "article_content": article["content"],
            "subtopics": related,
            "siblings": []
        }

        create_page_html(
            title,
            article["content"],
            related,
            [],
            root_topic,
            registry,
            build_theme_palette(root_topic),
        )

        for item in related:
            if not item or item.lower() == current_topic.lower():
                continue
            item_slug = slugify(item)
            if item_slug in {slugify(value) for value in registry.keys()}:
                continue
            if (get_global_pages_dir() / item_slug / "index.html").exists():
                continue
            if item not in queue:
                queue.append(item)

        completed.append(current_topic)
        processed_in_batch += 1
        print(f"\r[OK] {processed_in_batch}  {current_topic[:28]}", end="", flush=True)
        time.sleep(0.25)

        if processed_in_batch % COMMIT_EVERY == 0 and processed_in_batch > 0:
            save_json(REGISTRY_FILE, registry)
            save_json(QUEUE_FILE, queue)
            save_json(COMPLETED_FILE, completed)
            if AUTO_COMMIT_ON_COMPLETE:
                git_commit_and_push(processed_count=processed_in_batch, total_count=len(registry), root_topic=root_topic)

    if page_metadata_cache:
        registry = finalize_subject(root_topic, registry)
        build_seed_index_and_sitemap(registry, root_topic)

    save_json(REGISTRY_FILE, registry)
    save_json(QUEUE_FILE, queue)
    save_json(COMPLETED_FILE, completed)

    if page_metadata_cache and AUTO_COMMIT_ON_COMPLETE:
        git_commit_and_push(processed_count=processed_in_batch, total_count=len(registry), root_topic=root_topic)

    print(f"\n[✓] Subject complete for '{root_topic}'. Pages: {len(registry)}")
    return root_topic


def prompt_for_seed_config(default_seed=None):
    try:
        seed = input("Enter seed topic to generate: ").strip() or (default_seed or DEFAULT_SEED)
    except EOFError:
        print("\n[!] No more input. Exiting.")
        return None, [], []

    try:
        allow_csv = input("Allow terms (CSV, optional): ").strip()
        block_csv = input("Block terms (CSV, optional): ").strip()
    except EOFError:
        return seed, [], []

    return seed, parse_csv_terms(allow_csv), parse_csv_terms(block_csv)


def prompt_for_next_seed():
    if not PROMPT_FOR_NEXT_SEED:
        return None
    try:
        next_seed = input("\nEnter the next seed topic (or press Enter to exit): ").strip()
    except EOFError:
        print("\n[!] No more input. Exiting.")
        return None
    if not next_seed:
        return None
    try:
        allow_csv = input("Allow terms (CSV, optional): ").strip()
        block_csv = input("Block terms (CSV, optional): ").strip()
    except EOFError:
        return next_seed, [], []
    return next_seed, parse_csv_terms(allow_csv), parse_csv_terms(block_csv)


if __name__ == "__main__":
    seed_config = None
    while True:
        if seed_config is None:
            if len(sys.argv) > 1 and sys.argv[1].strip():
                seed = sys.argv[1].strip()
                sys.argv = [sys.argv[0]]
                try:
                    allow_csv = input("Allow terms (CSV, optional): ").strip()
                    block_csv = input("Block terms (CSV, optional): ").strip()
                except EOFError:
                    allow_terms = []
                    block_terms = []
                else:
                    allow_terms = parse_csv_terms(allow_csv)
                    block_terms = parse_csv_terms(block_csv)
            else:
                seed, allow_terms, block_terms = prompt_for_seed_config()
                if seed is None:
                    break
        else:
            seed, allow_terms, block_terms = seed_config
            seed_config = None

        run_dictionary_builder(seed, allow_terms=allow_terms, block_terms=block_terms)

        if not PROMPT_FOR_NEXT_SEED:
            break

        seed_config = prompt_for_next_seed()
        if not seed_config:
            break