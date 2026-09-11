/**
 * Lightweight Wikipedia / Wikidata client for subject expansion
 * and fair-use identification thumbnails.
 */

const https = require("https");

const USER_AGENT =
    "Ton-o-Lore/1.0 (fan lore encyclopedia; educational; contact: local-dev)";

function requestJson(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(
            url,
            {
                headers: {
                    "User-Agent": USER_AGENT,
                    Accept: "application/json"
                }
            },
            (res) => {
                let body = "";

                res.on("data", (chunk) => {
                    body += chunk;
                });

                res.on("end", () => {
                    if (res.statusCode >= 400) {
                        reject(
                            new Error(
                                `HTTP ${res.statusCode} for ${url}: ${body.slice(0, 200)}`
                            )
                        );
                        return;
                    }

                    try {
                        resolve(JSON.parse(body));
                    } catch (error) {
                        reject(error);
                    }
                });
            }
        );

        req.on("error", reject);
    });
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sparql(query) {
    const url =
        "https://query.wikidata.org/sparql?format=json&query=" +
        encodeURIComponent(query);

    return requestJson(url);
}

async function wikipediaQuery(params) {
    const search = new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        ...params
    });

    return requestJson(
        `https://en.wikipedia.org/w/api.php?${search.toString()}`
    );
}

/**
 * Fair-use identification thumbnail from Wikipedia pageimages.
 * Low-res only; usage must be labeled fair_use_identification.
 */
async function fetchWikipediaIdentity(titleOrName) {
    const data = await wikipediaQuery({
        titles: titleOrName,
        prop: "pageimages|extracts|info",
        inprop: "url",
        pithumbsize: "360",
        piprop: "thumbnail|name|original",
        exintro: "1",
        explaintext: "1",
        redirects: "1"
    });

    const pages = data.query?.pages || {};
    const page = Object.values(pages)[0];

    if (!page || page.missing != null) {
        return null;
    }

    const thumbnail = page.thumbnail || null;

    return {
        title: page.title,
        pageid: page.pageid,
        wikipedia_url: page.fullurl || `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`,
        extract: page.extract || "",
        image: thumbnail
            ? {
                  image_url: thumbnail.source,
                  image_source: page.fullurl || `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`,
                  image_credit:
                      "Thumbnail via Wikipedia. Character art © Eiichiro Oda / Shueisha / Toei Animation (as applicable).",
                  image_license: "fair_use",
                  image_usage: "fair_use_identification",
                  image_alt: `Identification thumbnail for ${page.title}`
              }
            : null
    };
}

async function searchWikipediaTitles(search, limit = 8) {
    const data = await wikipediaQuery({
        list: "search",
        srsearch: search,
        srlimit: String(limit)
    });

    return (data.query?.search || []).map((row) => ({
        title: row.title,
        snippet: row.snippet,
        pageid: row.pageid
    }));
}

/**
 * Discover One Piece–related Wikidata items via narrative universe.
 */
async function discoverOnePieceWikidata(limit = 2000) {
    const query = `
SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
  ?item wdt:P1080 wd:Q16682047 .
  OPTIONAL { ?item wdt:P31 ?type . }
  OPTIONAL {
    ?enwikiSchema schema:about ?item ;
                  schema:isPartOf <https://en.wikipedia.org/> ;
                  schema:name ?enwiki .
  }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT ${Number(limit)}
`;

    const data = await sparql(query);
    const rows = data.results?.bindings || [];
    const byId = new Map();

    for (const row of rows) {
        const id = row.item.value.replace(
            "http://www.wikidata.org/entity/",
            ""
        );

        if (byId.has(id)) {
            continue;
        }

        byId.set(id, {
            wikidata_id: id,
            name: row.itemLabel?.value || "",
            description: row.itemDescription?.value || "",
            typeLabel: row.typeLabel?.value || "",
            enwiki: row.enwiki?.value || null
        });
    }

    return [...byId.values()];
}

function mapWikiType(typeLabel = "", description = "") {
    const hay = `${typeLabel} ${description}`.toLowerCase();

    if (/character|pirate|marine|person|fictional human/.test(hay)) {
        return "person";
    }
    if (/island|location|place|country|kingdom|sea|town|city/.test(hay)) {
        return "place";
    }
    if (/organization|crew|army|government|company|group/.test(hay)) {
        return "organization";
    }
    if (/arc|war|incident|battle|event/.test(hay)) {
        return "event";
    }
    if (/devil fruit|weapon|ship|object|artifact/.test(hay)) {
        return "object";
    }
    if (/manga|anime|film|series|work|media/.test(hay)) {
        return "work";
    }
    if (/concept|power|ability|haki/.test(hay)) {
        return "concept";
    }

    return "topic";
}

function slugify(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 80);
}

module.exports = {
    sparql,
    wikipediaQuery,
    fetchWikipediaIdentity,
    searchWikipediaTitles,
    discoverOnePieceWikidata,
    mapWikiType,
    slugify,
    sleep,
    USER_AGENT
};
