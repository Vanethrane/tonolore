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
PAGES_DIR = DIST_DIR / "pages"

REGISTRY_FILE = DATA_DIR / "registry.json"
QUEUE_FILE = DATA_DIR / "queue.json"
TEMPLATE_CONFIG_FILE = DATA_DIR / "template_config.json"

MAX_PAGES_PER_RUN = 100
DEFAULT_SEED = "Star Wars"

PAGES_DIR.mkdir(parents=True, exist_ok=True)
DATA_DIR.mkdir(parents=True, exist_ok=True)

def load_json(filepath, default):
    if filepath.exists():
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                return json.load(f)
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
    print("FORMAT PAGE SELECTION")
    print("=" * 60)
    print("Provide a reference HTML page to use as the visual format template.")
    print("Leave blank to use default modern dark theme.\n")

    user_input = input("Enter path to format HTML file (e.g. dist/pages/star-wars/index.html): ").strip()
    if user_input and os.path.exists(user_input):
        with open(user_input, "r", encoding="utf-8") as f:
            template_content = f.read()
        save_json(TEMPLATE_CONFIG_FILE, {"template_path": os.path.abspath(user_input)})
        print(f"[?] Successfully loaded template from: {user_input}\n")
        return template_content

    print("[!] No custom format page provided/found. Using default template.\n")
    return None

def fetch_wikipedia_summary(topic):
    # Strict URL encoding to prevent 404s on titles with parentheses like 'Rey (Star Wars)'
    encoded_topic = urllib.parse.quote(topic.replace(" ", "_"), safe="")
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{encoded_topic}"
    req = urllib.request.Request(url, headers={"User-Agent": "TonoloreBot/1.0 (https://tonolore.com)"})
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                data = json.loads(response.read().decode("utf-8"))
                extract = data.get("extract", "")
                if not extract:
                    extract = f"Summary overview for {data.get('title', topic)}."
                return {
                    "title": data.get("title", topic),
                    "extract": extract,
                    "url": data.get("content_urls", {}).get("desktop", {}).get("page", "")
                }
    except Exception:
        pass
    return {
        "title": topic,
        "extract": f"Detailed topic overview for {topic}.",
        "url": f"https://en.wikipedia.org/wiki/{urllib.parse.quote(topic.replace(' ', '_'))}"
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

def discover_sibling_entities(entity_name):
    siblings = []
    lego_match = re.search(r'\blego\b\s+(.+)', entity_name, re.IGNORECASE)
    if lego_match:
        discovered = fetch_wikipedia_subtopics("Lego video games list", max_items=12)
        for item in discovered:
            if "lego" in item.lower() and item.lower() != entity_name.lower():
                siblings.append(item)
        return siblings[:5]

    if ":" in entity_name or "the game" in entity_name.lower():
        base_brand = entity_name.split(":")[0].split(" - ")[0]
        discovered = fetch_wikipedia_subtopics(f"{base_brand} video games", max_items=10)
        for item in discovered:
            if item.lower() != entity_name.lower():
                siblings.append(item)
        return siblings[:5]

    return siblings[:5]

def render_html_page(title, extract, wiki_url, subtopics, siblings, template_raw=None):
    slug = slugify(title)
    subtopics_html = "".join([f'<li><a href="../{slugify(st)}/index.html">{st}</a></li>' for st in subtopics])
    siblings_html = "".join([f'<li><a href="../{slugify(sb)}/index.html">{sb}</a></li>' for sb in siblings])

    sibling_section = ""
    if siblings:
        sibling_section = f"""
        <section class="siblings">
            <h2>Related Franchises & Parallel Topics</h2>
            <ul>{siblings_html}</ul>
        </section>
        """

    if template_raw:
        html_content = template_raw
        html_content = re.sub(r"<title>.*?</title>", f"<title>{title} - Tonolore Dictionary</title>", html_content, flags=re.IGNORECASE)
        body_content = f"""
        <p><a href="../../index.html">&larr; Back to Directory Home</a></p>
        <div class="card">
            <h1>{title}</h1>
            <p>{extract}</p>
            {f'<p><a href="{wiki_url}" target="_blank" rel="noopener">Read full article on Wikipedia &rarr;</a></p>' if wiki_url else ''}
        </div>
        <section class="subtopics">
            <h2>Subtopics & Related Concepts</h2>
            <ul>{subtopics_html}</ul>
        </section>
        {sibling_section}
        """
        if "<body>" in html_content and "</body>" in html_content:
            head_part = html_content.split("<body>")[0]
            tail_part = html_content.split("</body>")[1]
            html_content = f"{head_part}<body>\n{body_content}\n</body>{tail_part}"
        else:
            html_content = body_content
    else:
        html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - Tonolore Dictionary</title>
    <style>
        body {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 0 20px; background: #0f172a; color: #f8fafc; }}
        a {{ color: #38bdf8; text-decoration: none; }}
        a:hover {{ text-decoration: underline; }}
        .card {{ background: #1e293b; padding: 2rem; border-radius: 8px; border: 1px solid #334155; margin-bottom: 2rem; }}
        h1 {{ color: #f1f5f9; margin-top: 0; }}
        h2 {{ color: #94a3b8; font-size: 1.2rem; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; }}
        ul {{ list-style: none; padding: 0; }}
        li {{ margin-bottom: 0.5rem; }}
    </style>
</head>
<body>
    <p><a href="../../index.html">&larr; Back to Directory Home</a></p>
    <div class="card">
        <h1>{title}</h1>
        <p>{extract}</p>
        {f'<p><a href="{wiki_url}" target="_blank" rel="noopener">Read full article on Wikipedia &rarr;</a></p>' if wiki_url else ''}
    </div>
    <section class="subtopics">
        <h2>Subtopics & Related Concepts</h2>
        <ul>{subtopics_html}</ul>
    </section>
    {sibling_section}
</body>
</html>"""

    page_dir = PAGES_DIR / slug
    page_dir.mkdir(parents=True, exist_ok=True)
    with open(page_dir / "index.html", "w", encoding="utf-8") as f:
        f.write(html_content)

def build_sitemap_and_index(registry):
    urls = []
    list_items = []
    for title, slug in registry.items():
        urls.append(f"  <url><loc>https://tonolore.com/pages/{slug}/index.html</loc></url>")
        list_items.append(f'<li><a href="pages/{slug}/index.html">{title}</a></li>')

    sitemap_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
\n{"\n".join(urls)}
</urlset>"""

    index_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tonolore Knowledge Registry</title>
    <style>
        body {{ font-family: sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; background: #0f172a; color: #f8fafc; }}
        a {{ color: #38bdf8; text-decoration: none; }}
        ul {{ list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }}
        li {{ background: #1e293b; padding: 10px; border-radius: 4px; border: 1px solid #334155; }}
    </style>
</head>
<body>
    <h1>Tonolore Knowledge Directory</h1>
    <p>Total Entries: {len(registry)}</p>
    <ul>
        {"".join(list_items)}
    </ul>
</body>
</html>"""

    with open(DIST_DIR / "sitemap.xml", "w", encoding="utf-8") as f:
        f.write(sitemap_xml)
    with open(DIST_DIR / "index.html", "w", encoding="utf-8") as f:
        f.write(index_html)

def git_commit_and_push(processed_count, total_count):
    try:
        subprocess.run(["git", "add", "."], check=True, capture_output=True)
        msg = f"Auto-commit: Batch update ({processed_count} pages). Total pages: {total_count}"
        subprocess.run(["git", "commit", "-m", msg], check=True, capture_output=True)
        subprocess.run(["git", "push"], check=True, capture_output=True)
        print(f"\n[?] Git pushed: '{msg}'")
    except subprocess.CalledProcessError:
        print("\n[!] Git commit/push skipped (no changes or remote not configured).")

def run_dictionary_builder():
    template_raw = get_or_prompt_template()
    registry = load_json(REGISTRY_FILE, {})
    queue = load_json(QUEUE_FILE, [DEFAULT_SEED])

    if not queue and not registry:
        queue.append(DEFAULT_SEED)

    processed_in_batch = 0

    while queue and processed_in_batch < MAX_PAGES_PER_RUN:
        current_topic = queue.pop(0)
        slug = slugify(current_topic)

        # If already in registry, discover its subtopics/siblings anyway so the queue stays populated
        if current_topic in registry or slug in registry.values():
            subtopics = fetch_wikipedia_subtopics(current_topic)
            siblings = discover_sibling_entities(current_topic)
            
            added_new = 0
            for item in subtopics + siblings:
                item_slug = slugify(item)
                if item not in registry and item_slug not in registry.values() and item not in queue:
                    queue.append(item)
                    added_new += 1
            
            if added_new > 0:
                print(f"[EXPANDING] '{current_topic}' already registered. Added {added_new} connected seeds to queue.")
            continue

        processed_in_batch += 1
        status = f"\r[CRAWLING] Registry: {len(registry)} | Queue: {len(queue)} | Run: [{processed_in_batch}/{MAX_PAGES_PER_RUN}] | Active: {current_topic[:20]}"
        print(status.ljust(80), end="", flush=True)

        page_data = fetch_wikipedia_summary(current_topic)
        subtopics = fetch_wikipedia_subtopics(current_topic)
        siblings = discover_sibling_entities(current_topic)

        render_html_page(page_data["title"], page_data["extract"], page_data["url"], subtopics, siblings, template_raw)
        registry[page_data["title"]] = slug

        # Append new subtopics and siblings to queue
        for item in subtopics + siblings:
            item_slug = slugify(item)
            if item not in registry and item_slug not in registry.values() and item not in queue:
                queue.append(item)

        time.sleep(0.5)

    save_json(REGISTRY_FILE, registry)
    save_json(QUEUE_FILE, queue)

    print(f"\n[✓] BATCH COMPLETE: Processed {processed_in_batch} pages.")
    print("[+] Rebuilding HTML index and sitemap.xml...")
    build_sitemap_and_index(registry)
    git_commit_and_push(processed_in_batch, len(registry))
if __name__ == "__main__":
    run_dictionary_builder()
