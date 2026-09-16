/**
 * Lightweight MediaWiki client for Fandom wikis (no TextExtracts).
 * Used for fair-use identification thumbs + short plain-text intros.
 */

const https = require("https");
const { scrubWikiText, hasBrokenWikiProse } = require("./wikiPlainText");

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
                    if (res.statusCode === 429) {
                        reject(new Error(`HTTP 429 rate limited: ${url}`));
                        return;
                    }

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

function fandomApiUrl(wikiHost, params) {
    const search = new URLSearchParams({
        format: "json",
        ...params
    });

    // Wikipedia (and other Wikimedia) use /w/api.php; Fandom uses /api.php.
    const apiPath = /\.wikipedia\.org$/i.test(wikiHost)
        ? "/w/api.php"
        : "/api.php";

    return `https://${wikiHost}${apiPath}?${search.toString()}`;
}

async function fandomQuery(wikiHost, params) {
    return requestJson(fandomApiUrl(wikiHost, { action: "query", ...params }));
}

async function fandomParse(wikiHost, params) {
    return requestJson(fandomApiUrl(wikiHost, { action: "parse", ...params }));
}

/**
 * Collect all page titles in a category (ns=0 by default).
 * Optionally recurse into subcategories up to maxDepth.
 */
async function listCategoryMembers(
    wikiHost,
    categoryTitle,
    {
        maxPages = 5000,
        includeSubcats = false,
        maxDepth = 1,
        delayMs = 120,
        pageOnly = true
    } = {}
) {
    const root = categoryTitle.startsWith("Category:")
        ? categoryTitle
        : `Category:${categoryTitle}`;

    const seenCats = new Set();
    const pages = new Map();
    const queue = [{ title: root, depth: 0 }];

    while (queue.length > 0 && pages.size < maxPages) {
        const { title, depth } = queue.shift();
        if (seenCats.has(title)) {
            continue;
        }
        seenCats.add(title);

        let cont = null;

        do {
            const params = {
                list: "categorymembers",
                cmtitle: title,
                cmlimit: "500"
            };

            if (pageOnly && !includeSubcats) {
                params.cmtype = "page";
            }

            if (cont) {
                params.cmcontinue = cont;
            }

            const data = await fandomQuery(wikiHost, params);
            const members = data.query?.categorymembers || [];

            for (const member of members) {
                if (member.ns === 14 && includeSubcats && depth < maxDepth) {
                    queue.push({ title: member.title, depth: depth + 1 });
                    continue;
                }

                if (member.ns !== 0) {
                    continue;
                }

                if (!pages.has(member.title)) {
                    pages.set(member.title, member);
                }

                if (pages.size >= maxPages) {
                    break;
                }
            }

            cont = data.continue?.cmcontinue || null;
            if (cont) {
                await sleep(delayMs);
            }
        } while (cont && pages.size < maxPages);

        await sleep(delayMs);
    }

    return [...pages.values()];
}

/**
 * Batch pageimages + canonical URLs for up to ~40 titles.
 */
async function fetchPageIdentities(wikiHost, titles, thumbSize = 800) {
    if (!titles.length) {
        return new Map();
    }

    const data = await fandomQuery(wikiHost, {
        titles: titles.join("|"),
        redirects: "1",
        prop: "pageimages|info",
        piprop: "thumbnail|name",
        pithumbsize: String(thumbSize),
        inprop: "url"
    });

    const redirectTo = new Map();
    for (const row of data.query?.redirects || []) {
        redirectTo.set(row.from, row.to);
    }

    const byTitle = new Map();
    for (const page of Object.values(data.query?.pages || {})) {
        if (page.missing != null || page.invalid != null) {
            continue;
        }

        byTitle.set(page.title, {
            title: page.title,
            pageid: page.pageid,
            fullurl: page.fullurl || null,
            thumbnail: page.thumbnail?.source || null,
            pageimage: page.pageimage || null
        });
    }

    const out = new Map();
    for (const requested of titles) {
        const resolved = redirectTo.get(requested) || requested;
        const identity = byTitle.get(resolved);
        if (identity) {
            out.set(requested, { ...identity, requestedTitle: requested });
            if (resolved !== requested) {
                out.set(resolved, { ...identity, requestedTitle: requested });
            }
        }
    }

    return out;
}

function stripHtml(html) {
    return String(html || "")
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/\s+/g, " ")
        .trim();
}

/**
 * Prefer prose paragraphs from raw wikitext (skips templates / lists).
 * Returns 2�4 paragraphs joined with blank lines when available.
 */
function introFromWikitext(wikitext, maxChars = 3200) {
    const lines = String(wikitext || "")
        .replace(/<!--[\s\S]*?-->/g, "\n")
        .split("\n");
    const paragraphs = [];
    let buf = [];

    const flush = () => {
        const chunk = buf.join(" ").trim();
        if (chunk) {
            paragraphs.push(chunk);
        }
        buf = [];
    };

    for (const raw of lines) {
        const line = raw.trim();
        if (!line) {
            flush();
            continue;
        }
        if (
            line.startsWith("{{") ||
            line.startsWith("|") ||
            line.startsWith("}") ||
            line.startsWith("*") ||
            line.startsWith("#") ||
            line.startsWith(":") ||
            line.startsWith("[[File:") ||
            line.startsWith("[[Image:") ||
            line.startsWith("<!--") ||
            line.startsWith("__") ||
            line.startsWith("==")
        ) {
            flush();
            continue;
        }

        buf.push(line);
    }
    flush();

    const cleaned = paragraphs
        .map((p) => scrubWikiText(p).replace(/^:+/, "").trim())
        .filter((p) => {
            if (p.length < 40 || /^Redirect/i.test(p)) return false;
            if (/^The subject of this article/i.test(p)) return false;
            if (/\.(png|jpg|jpeg|gif|webp)\b/i.test(p)) return false;
            if (/Infobox/i.test(p) && p.length < 120) return false;
            if (/^is documented on /i.test(p)) return false;
            if (/DO\s+__NOT__/i.test(p)) return false;
            if (/REPLACE\s+.*\bIMAGES\b/i.test(p)) return false;
            if (/^For (the|other) .{0,80}see /i.test(p) && p.length < 100) {
                return false;
            }
            if (hasBrokenWikiProse(p)) return false;
            return true;
        });

    if (!cleaned.length) {
        return null;
    }

    const kept = [];
    let total = 0;
    for (const paragraph of cleaned) {
        if (kept.length >= 4) {
            break;
        }
        const nextLen = total + paragraph.length + (kept.length ? 2 : 0);
        if (nextLen > maxChars && kept.length >= 2) {
            break;
        }
        if (paragraph.length > maxChars && kept.length === 0) {
            const cut = paragraph.slice(0, maxChars);
            const lastStop = Math.max(
                cut.lastIndexOf(". "),
                cut.lastIndexOf("! "),
                cut.lastIndexOf("? ")
            );
            kept.push(
                lastStop > maxChars * 0.45
                    ? cut.slice(0, lastStop + 1)
                    : `${cut.trim()}�`
            );
            break;
        }
        kept.push(paragraph);
        total = nextLen;
    }

    const text = kept.join("\n\n").trim();
    return text.length >= 40 ? text : null;
}

async function fetchWikitextIntro(wikiHost, title, maxChars = 3200) {
    const data = await fandomParse(wikiHost, {
        page: title,
        prop: "wikitext",
        redirects: "1"
    });

    return introFromWikitext(data.parse?.wikitext?.["*"], maxChars);
}

/**
 * Batch-fetch lead intros via revisions (Fandom has no TextExtracts).
 * Returns Map<requestedTitle, introText>.
 */
async function fetchWikitextIntros(wikiHost, titles, maxChars = 3200) {
    const out = new Map();
    const unique = [
        ...new Set(
            (titles || [])
                .map((title) => String(title || "").replace(/\s+/g, " ").trim())
                .filter(Boolean)
        )
    ];
    if (!unique.length) {
        return out;
    }

    const data = await fandomQuery(wikiHost, {
        titles: unique.join("|"),
        redirects: "1",
        prop: "revisions",
        rvprop: "content",
        rvslots: "main"
    });

    const aliasToResolved = new Map();
    for (const title of unique) {
        aliasToResolved.set(title, title);
    }
    for (const row of data.query?.normalized || []) {
        aliasToResolved.set(row.from, row.to);
    }
    for (const row of data.query?.redirects || []) {
        aliasToResolved.set(row.from, row.to);
        for (const [from, to] of [...aliasToResolved.entries()]) {
            if (to === row.from) {
                aliasToResolved.set(from, row.to);
            }
        }
    }

    const introByResolved = new Map();
    for (const page of Object.values(data.query?.pages || {})) {
        if (page.missing != null || page.invalid != null) {
            continue;
        }
        const wikitext =
            page.revisions?.[0]?.slots?.main?.["*"] ||
            page.revisions?.[0]?.["*"] ||
            "";
        const intro = introFromWikitext(wikitext, maxChars);
        if (intro) {
            introByResolved.set(page.title, intro);
        }
    }

    for (const requested of unique) {
        const resolved = aliasToResolved.get(requested) || requested;
        const intro =
            introByResolved.get(resolved) || introByResolved.get(requested);
        if (intro) {
            out.set(requested, intro);
        }
    }

    return out;
}

module.exports = {
    requestJson,
    sleep,
    fandomQuery,
    fandomParse,
    listCategoryMembers,
    fetchPageIdentities,
    fetchWikitextIntro,
    fetchWikitextIntros,
    introFromWikitext,
    stripHtml
};
