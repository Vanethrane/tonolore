import json
import os
import re
import subprocess
import time
import urllib.parse
import urllib.request
from pathlib import Path

BASE_DIR = Path(os.getcwd())
DATA_DIR = BASE_DIR / "data"
DIST_DIR = BASE_DIR / "dist"

REGISTRY_FILE = DATA_DIR / "registry.json"
QUEUE_FILE = DATA_DIR / "queue.json"
TEMPLATE_CONFIG_FILE = DATA_DIR / "template_config.json"

MAX_PAGES_PER_RUN = 1000
DEFAULT_SEED = "one piece"  # Set your main seed topic here

DATA_DIR.mkdir(parents=True, exist_ok=True)
DIST_DIR.mkdir(parents=True, exist_ok=True)


def get_seed_dir(root_topic):
    seed_slug = slugify(root_topic)
    seed_dir = DIST_DIR / seed_slug
    seed_dir.mkdir(parents=True, exist_ok=True)
    (seed_dir / "pages").mkdir(parents=True, exist_ok=True)
    return seed_dir


def load_json(filepath, default):
    if filepath.exists():
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                data = json.load(f)
                return data if data is not None else default
        except Exception:
            return default
    return default


def save_json(filepath, data):
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def slugify(text):
    text = text.lower()
    text = re.sub(r"[^\w\s-]", "", text)
    return re.sub(r"[-\s]+", "-", text).strip("-")


def get_or_prompt_template():
    config = load_json(TEMPLATE_CONFIG_FILE, {})
    if config.get("template_path") and os.path.exists(config["template_path"]):
        with open(config["template_path"], "r", encoding="utf-8") as f:
            return f.read()

    print("\n" + "=" * 60)
    print("TON-O-LORE TEMPLATE SELECTION")
    print("=" * 60)
    user_input = input("Enter path to format HTML file (or press Enter for default): ").strip()
    if user_input and os.path.exists(user_input):
        abs_path = os.path.abspath(user_input)
        with open(abs_path, "r", encoding="utf-8") as f:
            template_content = f.read()
        save_json(TEMPLATE_CONFIG_FILE, {"template_path": abs_path})
        return template_content

    return None


def clean_wiki_text(text):
    text = re.sub(r"\[\d+\]", "", text)
    text = re.sub(r"\[citation needed\]", "", text, flags=re.IGNORECASE)
    return text.strip()


def fetch_full_article(topic, root_topic):
    encoded_topic = urllib.parse.quote(topic.replace(" ", "_"), safe="")
    url = f"https://en.wikipedia.org/w/api.php?action=parse&page={encoded_topic}&prop=text|title&format=json&redirects=1"
    req = urllib.request.Request(url, headers={"User-Agent": "TonoloreBot/1.0 (https://tonolore.com)"})
    
    paragraphs = []
    page_title = topic
    wiki_url = f"https://en.wikipedia.org/wiki/{encoded_topic}"

    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                data = json.loads(response.read().decode("utf-8"))
                if "parse" in data:
                    page_title = data["parse"].get("title", topic)
                    raw_html = data["parse"]["text"]["*"]

                    p_matches = re.findall(r"<p>(.*?)</p>", raw_html, re.DOTALL)
                    for p in p_matches:
                        clean_p = re.sub(r"<[^>]+>", "", p)
                        clean_p = clean_wiki_text(clean_p)
                        if len(clean_p) > 60:
                            paragraphs.append(clean_p)
    except Exception:
        pass

    if not paragraphs:
        paragraphs = [
            f"{page_title} represents a core entity within the expansive universe of {root_topic}.",
            f"Detailed lore, mechanics, and history surrounding {page_title} span across various releases, media iterations, and canonical documentation."
        ]

    lead_paragraph = paragraphs[0] if len(paragraphs) > 0 else f"An overview of {page_title}."
    body_paragraphs_1 = paragraphs[1:3] if len(paragraphs) >= 3 else paragraphs[1:]
    body_paragraphs_2 = paragraphs[3:6] if len(paragraphs) >= 6 else []

    article_html = f"""
    <section class="article-body">
        <p class="lede">{lead_paragraph}</p>
        
        <h2>Overview & Background</h2>
        {"".join([f"<p>{p}</p>" for p in body_paragraphs_1])}
    """

    if body_paragraphs_2:
        article_html += f"""
        <h2>Lore & Canon Details</h2>
        {"".join([f"<p>{p}</p>" for p in body_paragraphs_2])}
        """

    fandom_search_url = f"https://www.fandom.com/?s={urllib.parse.quote(page_title)}"
    google_search_url = f"https://www.google.com/search?q={urllib.parse.quote(page_title + ' ' + root_topic + ' lore')}"

    article_html += f"""
        <hr style="border: 0; border-top: 1px solid rgba(232,228,219,0.12); margin: 40px 0 20px;" />
        <section class="sources-section">
            <h2 style="font-size: 1.1rem; color: #9a9488;">Sources & Reference Material</h2>
            <ul style="grid-template-columns: 1fr; gap: 6px;">
                <li style="background: transparent; border: none; padding: 0;">
                    <a href="{wiki_url}" target="_blank" rel="noopener">&rarr; Wikipedia Article: {page_title}</a>
                </li>
                <li style="background: transparent; border: none; padding: 0;">
                    <a href="{fandom_search_url}" target="_blank" rel="noopener">&rarr; Fandom Community Wiki Database</a>
                </li>
                <li style="background: transparent; border: none; padding: 0;">
                    <a href="{google_search_url}" target="_blank" rel="noopener">&rarr; Index & Search Results for {page_title}</a>
                </li>
            </ul>
        </section>
    </section>
    """

    return {
        "title": page_title,
        "content": article_html,
        "url": wiki_url
    }


def fetch_wikipedia_subtopics(query, max_items=8):
    search_url = f"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&format=json"
    req = urllib.request.Request(search_url, headers={"User-Agent": "TonoloreBot/1.0 (https://tonolore.com)"})
    subtopics = []
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                data = json.loads(response.read().decode("utf-8"))
                results = data.get("query", {}).get("search", [])
                for item in results[:max_items]:
                    subtopics.append(item["title"])
    except Exception:
        pass
    return subtopics


def discover_sibling_entities(entity_name, root_topic):
    siblings = []
    discovered = fetch_wikipedia_subtopics(f"{root_topic} games", max_items=10)
    for item in discovered:
        if item.lower() != entity_name.lower():
            siblings.append(item)
    return siblings[:5]


def build_validated_list_items(items_list, registry):
    html_items = []
    registered_slugs = set(registry.values())

    for item in items_list:
        item_slug = slugify(item)
        if item_slug in registered_slugs:
            html_items.append(f'<li><a href="../{item_slug}/index.html">{item}</a></li>')
        else:
            html_items.append(f'<li><span class="unlinked-topic">{item}</span></li>')
    return "".join(html_items)


def render_html_page(title, article_content, subtopics, siblings, root_topic, registry, template_raw=None):
    slug = slugify(title)
    seed_dir = get_seed_dir(root_topic)

    subtopics_html = build_validated_list_items(subtopics, registry)
    siblings_html = build_validated_list_items(siblings, registry)

    sibling_section = ""
    if siblings:
        sibling_section = f"""
        <section class="siblings">
            <h2>Related Franchises & Parallel Topics</h2>
            <ul>{siblings_html}</ul>
        </section>
        """

    body_content = f"""
    <div class="eyebrow"><a href="../../index.html">&larr; Back to {root_topic} Overview</a></div>
    <h1>{title}</h1>
    
    <div class="card">
        {article_content}
    </div>

    <section class="subtopics">
        <h2>Subtopics & Related Concepts</h2>
        <ul>{subtopics_html}</ul>
    </section>

    {sibling_section}
    """

    if template_raw:
        if "{{TITLE}}" in template_raw:
            html_content = template_raw.replace("{{TITLE}}", f"{title} — Ton-o-Lore")
        else:
            html_content = re.sub(r"<title>.*?</title>", f"<title>{title} — Ton-o-Lore</title>", template_raw, flags=re.IGNORECASE)

        if "{{CONTENT}}" in html_content:
            html_content = html_content.replace("{{CONTENT}}", body_content)
        else:
            html_content = re.sub(r"(<body[^>]*>)", r"\1\n" + body_content, html_content, flags=re.IGNORECASE)
    else:
        html_content = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>{title} — Ton-o-Lore</title>
<style>
  :root {{ color-scheme: dark; }}
  body {{ margin: 0; font-family: Georgia, serif; background: #0b0d10; color: #e8e4db; line-height: 1.65; }}
  a {{ color: #3db8a0; text-decoration: none; }}
  a:hover {{ text-decoration: underline; }}
  .wrap {{ width: min(920px, calc(100% - 40px)); margin: 0 auto; padding: 28px 0 72px; }}
  .eyebrow {{ text-transform: uppercase; letter-spacing: 0.14em; font-size: 0.72rem; color: #e0a45a; font-family: system-ui, sans-serif; font-weight: 700; }}
  h1 {{ font-size: clamp(2rem, 5vw, 3.4rem); margin: 10px 0 16px; color: #f2efe8; }}
  h2 {{ font-size: 1.45rem; margin: 36px 0 14px; border-bottom: 1px solid rgba(232,228,219,0.12); padding-bottom: 6px; }}
  .card {{ padding: 20px; border: 1px solid rgba(232,228,219,0.12); background: #12161c; margin-bottom: 24px; border-radius: 4px; }}
  ul {{ list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; }}
  li {{ background: #12161c; padding: 10px 14px; border: 1px solid rgba(232,228,219,0.12); border-radius: 4px; }}
  .unlinked-topic {{ color: #64748b; }}
</style>
</head>
<body>
<div class="wrap">
  <main>{body_content}</main>
</div>
</body>
</html>"""

    page_dir = seed_dir / "pages" / slug
    page_dir.mkdir(parents=True, exist_ok=True)
    with open(page_dir / "index.html", "w", encoding="utf-8") as f:
        f.write(html_content)


def build_seed_index_and_sitemap(registry, root_topic):
    seed_slug = slugify(root_topic)
    seed_dir = get_seed_dir(root_topic)

    seed_article = fetch_full_article(root_topic, root_topic)

    urls = []
    list_items = []

    urls.append(f"  <url><loc>https://www.tonolore.com/{seed_slug}/index.html</loc></url>")

    for title, slug in registry.items():
        urls.append(f"  <url><loc>https://www.tonolore.com/{seed_slug}/pages/{slug}/index.html</loc></url>")
        list_items.append(f'<li><a href="pages/{slug}/index.html">{title}</a></li>')

    sitemap_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\n{"\n".join(urls)}
</urlset>"""

    index_html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>{seed_article['title']} — Ton-o-Lore</title>
<style>
  :root {{ color-scheme: dark; }}
  body {{ margin: 0; font-family: Georgia, serif; background: #0b0d10; color: #e8e4db; line-height: 1.65; }}
  a {{ color: #3db8a0; text-decoration: none; }}
  a:hover {{ text-decoration: underline; }}
  .wrap {{ width: min(920px, calc(100% - 40px)); margin: 0 auto; padding: 28px 0 72px; }}
  h1 {{ font-size: clamp(2rem, 5vw, 3.4rem); color: #f2efe8; margin-top: 0; }}
  h2 {{ font-size: 1.45rem; margin: 36px 0 14px; border-bottom: 1px solid rgba(232,228,219,0.12); padding-bottom: 6px; }}
  .card {{ padding: 20px; border: 1px solid rgba(232,228,219,0.12); background: #12161c; margin-bottom: 24px; border-radius: 4px; }}
  ul {{ list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; }}
  li {{ background: #12161c; padding: 10px 14px; border: 1px solid rgba(232,228,219,0.12); border-radius: 4px; }}
</style>
</head>
<body>
<div class="wrap">
    <div class="card">
        <h1>{seed_article['title']}</h1>
        {seed_article['content']}
    </div>

    <h2>Explored Lore Pages ({len(registry)})</h2>
    <ul>
        {"".join(list_items)}
    </ul>
</div>
</body>
</html>"""

    with open(seed_dir / "sitemap.xml", "w", encoding="utf-8") as f:
        f.write(sitemap_xml)

    with open(seed_dir / "index.html", "w", encoding="utf-8") as f:
        f.write(index_html)


def re_render_existing_pages(page_metadata_cache, registry, root_topic, template_raw):
    for title, meta in page_metadata_cache.items():
        render_html_page(
            title,
            meta["article_content"],
            meta["subtopics"],
            meta["siblings"],
            root_topic,
            registry,
            template_raw,
        )


def git_commit_and_push(processed_count, total_count, root_topic):
    try:
        subprocess.run(["git", "add", "."], check=True, capture_output=True)
        msg = f"Auto-commit [{root_topic}]: Processed {processed_count} pages. Total: {total_count}"
        subprocess.run(["git", "commit", "-m", msg], check=True, capture_output=True)
        subprocess.run(["git", "push"], check=True, capture_output=True)
        print(f"\n[✓] Git pushed: '{msg}'")
    except subprocess.CalledProcessError:
        print("\n[!] Git commit/push skipped (no changes or remote not configured).")


def run_dictionary_builder():
    template_raw = get_or_prompt_template()
    registry = load_json(REGISTRY_FILE, {})
    queue = load_json(QUEUE_FILE, [])

    # Auto-seed when queue is empty or reset
    if not queue:
        print(f"[!] Queue empty. Seeding initial topic: '{DEFAULT_SEED}'")
        queue.append(DEFAULT_SEED)

    root_topic = DEFAULT_SEED
    processed_in_batch = 0

    page_metadata_cache = {}

    while queue and processed_in_batch < MAX_PAGES_PER_RUN:
        current_topic = queue.pop(0)
        slug = slugify(current_topic)

        if current_topic in registry or slug in registry.values():
            continue

        processed_in_batch += 1
        status = f"\r[CRAWLING] Seed: {root_topic} | Registry: {len(registry)} | Queue: {len(queue)} | Run: [{processed_in_batch}/{MAX_PAGES_PER_RUN}] | Active: {current_topic[:25]}"
        print(status.ljust(85), end="", flush=True)

        article = fetch_full_article(current_topic, root_topic)
        subtopics = fetch_wikipedia_subtopics(current_topic)
        siblings = discover_sibling_entities(current_topic, root_topic)

        registry[article["title"]] = slug

        page_metadata_cache[article["title"]] = {
            "article_content": article["content"],
            "subtopics": subtopics,
            "siblings": siblings,
        }

        render_html_page(
            article["title"],
            article["content"],
            subtopics,
            siblings,
            root_topic,
            registry,
            template_raw,
        )

        for item in subtopics + siblings:
            item_slug = slugify(item)
            if item not in registry and item_slug not in registry.values() and item not in queue:
                queue.append(item)

        time.sleep(0.5)

    if page_metadata_cache:
        print("\n[+] Updating existing links for newly generated pages...")
        re_render_existing_pages(page_metadata_cache, registry, root_topic, template_raw)

    save_json(REGISTRY_FILE, registry)
    save_json(QUEUE_FILE, queue)

    print(f"\n[✓] BATCH COMPLETE: Processed {processed_in_batch} pages for '{root_topic}'.")
    print(f"[+] Rebuilding hub index and sitemap.xml under dist/{slugify(root_topic)}/...")
    build_seed_index_and_sitemap(registry, root_topic)
    git_commit_and_push(processed_in_batch, len(registry), root_topic)


if __name__ == "__main__":
    run_dictionary_builder()