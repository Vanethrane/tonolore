/**
 * Detect and rewrite thin / broken encyclopedia copy into plain original prose
 * using Wikipedia + Fandom leads (paraphrased and restructured, not pasted).
 */

const { getExpandConfig } = require("./subjectExpandConfigs");
const { sleep, fetchWikitextIntros } = require("./fandomClient");
const { wikipediaQuery } = require("./wikiClient");
const {
    isStubDescription,
    isThinDescription,
    shortFromIntro,
    candidateTitles
} = require("./richDescriptions");
const { getSubjectMeta } = require("../subjects/registry");

const DISAMBIG_RE =
    /\b(may (also )?refer to|most commonly refers to|can refer to|is a term of|commonly refers to|disambiguation)\b/i;
const WIKI_MARKUP_RE =
    /(\{\||\{\{|\[\[|\]\]|\{\{|Category:|Infobox|class=\"wikitable\"|<ref\b)/i;
const INCOMPLETE_TAIL_RE =
    /(as follows:|differences from the manga(?: as follows)?:|may also refer to:|refer to:)\s*$/i;
const HOLE_RE = /\bin\s+\.|by\s+,|as\s+,|called\s+\.|titled\s+\./i;

function needsCopyPolish(text) {
    const value = String(text || "").trim();
    if (!value || value.length < 80) {
        return true;
    }
    if (isStubDescription(value) || isThinDescription(value)) {
        return true;
    }
    if (DISAMBIG_RE.test(value) || WIKI_MARKUP_RE.test(value)) {
        return true;
    }
    if (INCOMPLETE_TAIL_RE.test(value) || HOLE_RE.test(value)) {
        return true;
    }
    if (/^Wikipedia has an article on /i.test(value)) {
        return true;
    }
    if (/This Ton-o-Lore subject maps people, places/i.test(value)) {
        return true;
    }
    if (/A working index of the figures/i.test(value)) {
        return true;
    }
    return false;
}

function sanitizeSourceText(raw) {
    let text = String(raw || "")
        .replace(/\r\n/g, "\n")
        .replace(/\{\|[\s\S]*?\n\|\}/g, "\n")
        .replace(/\{\{[^{}]*\}\}/g, "")
        .replace(/\{\{[\s\S]*?\}\}/g, "")
        .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2")
        .replace(/\[\[([^\]]+)\]\]/g, "$1")
        .replace(/\[https?:\/\/[^\s\]]+\s+([^\]]+)\]/gi, "$1")
        .replace(/\[https?:\/\/[^\s\]]+\]/gi, "")
        .replace(/'{2,}/g, "")
        .replace(/<ref[\s\S]*?<\/ref>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/^Category:.+$/gim, "")
        .replace(/^\|.*$/gim, "")
        .replace(/\n{3,}/g, "\n\n")
        .replace(/[ \t]+/g, " ")
        .trim();

    // Drop incomplete trailing prompts / holes.
    text = text
        .split(/\n\n+/)
        .map((para) => para.trim())
        .filter(Boolean)
        .map((para) => {
            let p = para
                .replace(
                    /\s*(as follows:|differences from the manga(?: as follows)?:)\s*/gi,
                    ". "
                )
                .trim();
            p = p.replace(HOLE_RE, (match) => {
                if (/\bin\s+\./.test(match)) {
                    return "in this story.";
                }
                return "";
            });
            // Broken joins like "The oaths are According to..."
            p = p.replace(/\b(are|is|include|includes)\s+(?=According\b)/gi, ". ");
            p = p.replace(/\b(are|is|include|includes)\s*$/i, "").trim();
            p = p.replace(/\s{2,}/g, " ").replace(/\s+([,.])/g, "$1").trim();
            p = p.replace(/\.\s*\./g, ".").trim();
            // Remove sentences that still end mid-list.
            if (INCOMPLETE_TAIL_RE.test(p) || /:\s*$/.test(p) || /\b(are|is)\s*$/i.test(p)) {
                const parts = p.split(/(?<=[.!?])\s+/);
                while (
                    parts.length &&
                    (INCOMPLETE_TAIL_RE.test(parts[parts.length - 1]) ||
                        /:\s*$/.test(parts[parts.length - 1]) ||
                        /\b(are|is|include|includes)\s*$/i.test(
                            parts[parts.length - 1]
                        ) ||
                        parts[parts.length - 1].length < 20)
                ) {
                    parts.pop();
                }
                p = parts.join(" ").trim();
            }
            return p;
        })
        .filter((para) => para.length >= 40)
        .filter((para) => !DISAMBIG_RE.test(para))
        .filter((para) => !WIKI_MARKUP_RE.test(para))
        .join("\n\n");

    return text.trim();
}

function splitSentences(text) {
    return String(text || "")
        .replace(/\s+/g, " ")
        .split(/(?<=[.!?])\s+/)
        .map((part) => part.trim())
        .filter((part) => part.length > 20);
}

function tooSimilar(a, b) {
    const norm = (value) =>
        String(value || "")
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    const left = norm(a);
    const right = norm(b);
    if (!left || !right) {
        return false;
    }
    if (left === right) {
        return true;
    }
    const shorter = left.length <= right.length ? left : right;
    const longer = left.length <= right.length ? right : left;
    return longer.includes(shorter.slice(0, Math.min(120, shorter.length)));
}

function topicalEnough(text, name, subjectName) {
    const value = String(text || "").toLowerCase();
    if (!value) {
        return false;
    }
    const subjectBits = String(subjectName || "")
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((part) => part.length > 3);
    if (subjectBits.some((bit) => value.includes(bit))) {
        return true;
    }
    const nameBits = String(name || "")
        .toLowerCase()
        .split(/[^a-z0-9]+/)
        .filter((part) => part.length > 2);
    // Common-noun collision: short generic names need subject grounding.
    if (nameBits.length <= 1 && nameBits[0] && nameBits[0].length <= 6) {
        return subjectBits.some((bit) => value.includes(bit));
    }
    return true;
}

function reframeLead(name, subjectName, sentence) {
    let s = String(sentence || "").trim();
    if (!s) {
        return "";
    }

    const nameRe = new RegExp(
        `^${String(name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
        "i"
    );
    if (nameRe.test(s)) {
        if (
            !new RegExp(
                subjectName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                "i"
            ).test(s)
        ) {
            return `${s.replace(/\.$/, "")} — part of ${subjectName}.`;
        }
        return s;
    }

    // Avoid "In X, Name before ..." grammar traps; use a clean framing sentence.
    return `${name} belongs to ${subjectName}. ${s}`;
}

function composeOriginalBlurb({
    name,
    subjectName,
    typeLabel,
    wikiText,
    fandomText
}) {
    const wiki = sanitizeSourceText(wikiText);
    const fandom = sanitizeSourceText(fandomText);
    const ranked = [];
    if (fandom && fandom.length >= 80 && !DISAMBIG_RE.test(fandom)) {
        ranked.push(fandom);
    }
    if (
        wiki &&
        wiki.length >= 80 &&
        !DISAMBIG_RE.test(wiki) &&
        topicalEnough(wiki, name, subjectName)
    ) {
        ranked.push(wiki);
    }

    if (!ranked.length) {
        return null;
    }

    const primary = ranked[0];
    const secondary = ranked[1] || "";
    const primarySentences = splitSentences(primary).filter(
        (sentence) => !/:\s*$/.test(sentence) && !INCOMPLETE_TAIL_RE.test(sentence)
    );
    const secondarySentences = splitSentences(secondary).filter(
        (sentence) =>
            !/:\s*$/.test(sentence) &&
            !INCOMPLETE_TAIL_RE.test(sentence) &&
            !primarySentences.some((other) => tooSimilar(other, sentence)) &&
            topicalEnough(sentence, name, subjectName)
    );

    const leadSeed =
        primarySentences[0] ||
        `${name} is a ${typeLabel || "topic"} tied to ${subjectName}.`;
    const lead = reframeLead(name, subjectName, leadSeed);

    const support = [];
    for (const sentence of [
        ...primarySentences.slice(1, 4),
        ...secondarySentences.slice(0, 2)
    ]) {
        if (support.length >= 3) {
            break;
        }
        if (tooSimilar(lead, sentence)) {
            continue;
        }
        support.push(sentence);
    }

    if (!support.length) {
        support.push(
            `Readers usually meet ${name} through the people, places, and events connected around it in ${subjectName}.`
        );
    }

    const paragraphs = [lead, support.join(" ")].filter(Boolean);
    const joined = paragraphs.join("\n\n").trim();
    if (joined.length < 120 || needsCopyPolish(joined)) {
        return null;
    }
    return joined;
}

async function fetchWikipediaExtract(title) {
    if (!title) {
        return { text: "", url: null };
    }
    const data = await wikipediaQuery({
        titles: title,
        redirects: "1",
        prop: "extracts|info",
        explaintext: "1",
        exintro: "1",
        inprop: "url",
        exlimit: "1"
    });
    const page = Object.values(data.query?.pages || {})[0];
    if (!page || page.missing != null || !page.extract) {
        return { text: "", url: null };
    }
    return {
        text: String(page.extract).trim(),
        url: page.fullurl || `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`
    };
}

async function gatherSourceTexts(entity) {
    const meta =
        typeof entity.metadata === "string"
            ? JSON.parse(entity.metadata || "{}")
            : entity.metadata || {};
    const universe = meta.universe || null;
    const config = universe ? getExpandConfig(universe) : null;
    const host = config?.fandom?.host || null;

    const titles = candidateTitles(entity);
    if (meta.universe && entity.slug === meta.universe) {
        titles.unshift(
            `${entity.name} (franchise)`,
            `${entity.name} (film series)`,
            `${entity.name} (TV series)`,
            entity.name
        );
    }
    let wikiText = "";
    let wikiUrl = entity.wikipedia_url || null;
    for (const title of titles.slice(0, 3)) {
        try {
            const hit = await fetchWikipediaExtract(title);
            if (hit.text && hit.text.length >= 80 && !DISAMBIG_RE.test(hit.text)) {
                wikiText = hit.text;
                wikiUrl = hit.url || wikiUrl;
                break;
            }
        } catch (_) {
            /* try next title */
        }
        await sleep(200);
    }

    let fandomText = "";
    let fandomUrl = meta.fandom_url || null;
    if (host) {
        const fandomTitles = [
            meta.fandom_title,
            entity.name,
            ...titles
        ].filter(Boolean);
        try {
            const intros = await fetchWikitextIntros(
                host,
                [...new Set(fandomTitles)].slice(0, 4),
                2800
            );
            for (const title of fandomTitles) {
                const intro = intros.get(title);
                if (intro && intro.length >= 80 && !DISAMBIG_RE.test(intro)) {
                    fandomText = intro;
                    fandomUrl =
                        fandomUrl ||
                        `https://${host}/wiki/${encodeURIComponent(String(title).replace(/ /g, "_"))}`;
                    break;
                }
            }
        } catch (_) {
            /* keep wiki-only */
        }
    }

    return { wikiText, wikiUrl, fandomText, fandomUrl };
}

async function polishEntityCopy(entity) {
    const meta =
        typeof entity.metadata === "string"
            ? JSON.parse(entity.metadata || "{}")
            : { ...(entity.metadata || {}) };
    const universe = meta.universe || null;
    const subjectMeta = getSubjectMeta(universe) || {
        id: universe,
        name: universe
    };
    const subjectName = subjectMeta.name || universe || "this subject";

    if (!needsCopyPolish(entity.description) && !needsCopyPolish(entity.short_description)) {
        return null;
    }

    const sources = await gatherSourceTexts(entity);
    const description = composeOriginalBlurb({
        name: entity.name,
        subjectName,
        typeLabel: entity.type || meta.kind || "topic",
        wikiText: sources.wikiText,
        fandomText: sources.fandomText
    });

    if (!description) {
        // Cannot verify sources — strip broken unfinished copy rather than ship holes.
        const cleaned = sanitizeSourceText(entity.description);
        if (
            cleaned &&
            cleaned.length >= 120 &&
            !needsCopyPolish(cleaned) &&
            !DISAMBIG_RE.test(cleaned)
        ) {
            return {
                description: cleaned,
                short_description:
                    shortFromIntro(cleaned) || entity.short_description,
                wikipedia_url: sources.wikiUrl || entity.wikipedia_url || null,
                metadata: {
                    ...meta,
                    fandom_url: sources.fandomUrl || meta.fandom_url || null,
                    copy_polished_at: new Date().toISOString(),
                    copy_polish: "sanitized-only"
                }
            };
        }
        return {
            description: null,
            clearBroken: true,
            reason: "no-reliable-source"
        };
    }

    return {
        description,
        short_description: shortFromIntro(description),
        wikipedia_url: sources.wikiUrl || entity.wikipedia_url || null,
        metadata: {
            ...meta,
            fandom_url: sources.fandomUrl || meta.fandom_url || null,
            copy_polished_at: new Date().toISOString(),
            copy_polish: "multi-source-original"
        }
    };
}

module.exports = {
    needsCopyPolish,
    sanitizeSourceText,
    composeOriginalBlurb,
    polishEntityCopy,
    DISAMBIG_RE,
    WIKI_MARKUP_RE
};
