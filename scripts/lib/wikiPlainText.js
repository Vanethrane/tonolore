/**
 * Expand / scrub MediaWiki & Fandom markup so leads never ship holes like
 * "Pikachu is an -type Pokémon who a" or "appears in .".
 */

function normalizeSpace(value) {
    return String(value || "")
        .replace(/\s+/g, " ")
        .trim();
}

/**
 * Expand simple {{templates}} into readable text before wholesale stripping.
 */
function expandWikiTemplates(text) {
    let value = String(text || "");

    for (let pass = 0; pass < 10; pass += 1) {
        const next = value.replace(/\{\{([^{}]+)\}\}/g, (_, inner) => {
            const parts = String(inner)
                .split("|")
                .map((part) => part.trim())
                .filter((part) => part.length > 0);
            if (!parts.length) {
                return "";
            }

            const rawName = parts[0];
            const name = rawName.split(":")[0].toLowerCase().trim();
            const positional = parts
                .slice(1)
                .filter((part) => !part.includes("="));
            const named = Object.fromEntries(
                parts
                    .slice(1)
                    .filter((part) => part.includes("="))
                    .map((part) => {
                        const idx = part.indexOf("=");
                        return [
                            part.slice(0, idx).trim().toLowerCase(),
                            part.slice(idx + 1).trim()
                        ];
                    })
            );

            // Pokémon / general type chips: {{type|Electric}}, {{t|Electric}}
            if (
                /^(t|type|typen|typep|typ|typeicon)$/i.test(name) ||
                /^type\s/i.test(name)
            ) {
                return (
                    named.type ||
                    named["1"] ||
                    positional[0] ||
                    positional[positional.length - 1] ||
                    ""
                );
            }

            // {{color|ff0000|Electric}} / {{colour|…|Text}}
            if (name === "color" || name === "colour") {
                return positional[positional.length - 1] || positional[0] || "";
            }

            // {{nihongo|English|Japanese|…}} → English
            if (
                name === "nihongo" ||
                name === "ruby-ja" ||
                name === "lang" ||
                name === "transl"
            ) {
                return positional[0] || "";
            }

            // {{p|Pikachu}} / {{Pokémon|Pikachu}} → display name
            if (
                name === "p" ||
                name === "pokemon" ||
                name === "pokémon" ||
                name === "pl"
            ) {
                return positional[0] || "";
            }

            // Gender / pronoun helpers often leave "who a"
            if (name === "gender" || name === "g" || name === "pronoun") {
                return positional[0] || named["1"] || "";
            }

            // Drop citation / navigation / hatnote templates entirely
            if (
                /^(cite|citation|refn|sfn|efn|harv|main|see also|for|about|hatnote|redirect|short description|DISPLAYTITLE|DEFAULTSORT|anchor|clear|toc|notelist|reflist|refs)$/i.test(
                    name
                ) ||
                name.startsWith("cite ")
            ) {
                return "";
            }

            // Generic: prefer first positional arg when present
            if (positional[0] && positional[0].length < 80) {
                return positional[0];
            }

            return "";
        });

        if (next === value) {
            break;
        }
        value = next;
    }

    return value;
}

function scrubWikiMarkup(text) {
    return expandWikiTemplates(text)
        .replace(/\r\n/g, "\n")
        .replace(/\{\|[\s\S]*?\n\|\}/g, "\n")
        .replace(/\{\{[^{}]*\}\}/g, "")
        .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, "$2")
        .replace(/\[\[([^\]]+)\]\]/g, "$1")
        .replace(/'{2,}/g, "")
        .replace(/<ref[\s\S]*?<\/ref>/gi, "")
        .replace(/<[^>]+>/g, "")
        .replace(/Category:[^\n]+/gi, "")
        .replace(/\[https?:\/\/[^\s\]]+\s+([^\]]+)\]/gi, "$1")
        .replace(/\[https?:\/\/[^\s\]]+\]/gi, "")
        .replace(/\{\{[^{}]{0,800}\}\}/g, "")
        .replace(
            /\{\{(?:cite|citation|refn|sfn|efn|web)[^\n}]{0,500}\}\}/gi,
            ""
        )
        .replace(
            /\{\{(?:cite|citation|refn|sfn|efn|web)\s*\|[^}\n]*url\s*=\s*https?:\/\/\S+/gi,
            ""
        )
        .replace(/\{\{[a-z][a-z\s_-]{0,40}\|[^\n}]{0,400}\}\}/gi, "")
        .replace(/\{\{[A-Za-z][A-Za-z0-9 _-]{0,80}\s*/g, "")
        .replace(/\}\}+/g, "");
}

/**
 * When "{{type|Electric}}" was stripped, later "Electric-type attacks"
 * often remains — reuse that label for "-type" holes.
 * Pass `hintText` (e.g. full description) when repairing a truncated short field.
 */
function inferMissingTypeLabel(text, hintText = "") {
    const blob = `${text || ""}\n${hintText || ""}`;
    const match = blob.match(/\b([A-Z][a-z]+(?:-[A-Z][a-z]+)?)-type\b/);
    return match ? match[1] : null;
}

/**
 * Repair residual grammar holes after markup removal.
 */
function scrubProseHoles(text, options = {}) {
    let value = String(text || "");
    const inferredType = inferMissingTypeLabel(value, options.hintText);

    if (inferredType) {
        value = value.replace(/\ban?\s+-types?\b/gi, () => {
            const useAn = /^[aeiou]/i.test(inferredType);
            return `${useAn ? "an" : "a"} ${inferredType}-type`;
        });
    }

    value = value
        // Still-missing: "is an -type Pokémon" → "is a Pokémon"
        .replace(
            /\b(is|was|are|were)\s+an?\s+-types?\s+/gi,
            (_, verb) => `${verb} a `
        )
        .replace(/\ban?\s+-types?\b/gi, "")
        // "appears in ." / "in ."
        .replace(/\bwho appears in\s*\./gi, "who appears in the series.")
        .replace(/\bappears in\s*\./gi, "appears in the series.")
        .replace(/\bin\s+\./gi, "in the series.")
        .replace(/\bof\s+\./gi, "of the series.")
        .replace(/\bfrom\s+\./gi, "from the series.")
        .replace(/\bby\s+,/gi, "by")
        .replace(/\bas\s+,/gi, "as")
        // "known as in Japan" / "known as in the original Japanese version"
        .replace(/\bknown as\s+in\b/gi, "known in")
        // Category: lines pasted into prose
        .replace(/\bCategory:"[^"]+"\s*/gi, "")
        .replace(/\bCategory:\s*[^\n<]*/gi, "")
        // Closed templates, then common unclosed cite crumbs
        .replace(/\{\{[^{}]{0,800}\}\}/g, "")
        .replace(
            /\{\{(?:cite|citation|refn|sfn|efn|web)[^\n}]{0,500}\}\}/gi,
            ""
        )
        .replace(
            /\{\{(?:cite|citation|refn|sfn|efn|web)\s*\|[^}\n]*url\s*=\s*https?:\/\/\S+/gi,
            ""
        )
        .replace(/\{\{[a-z][a-z\s_-]{0,40}\|[^\n}]{0,400}\}\}/gi, "")
        // Bare leftover opens like "{{Infobox Driver </p>"
        .replace(/\{\{[A-Za-z][A-Za-z0-9 _-]{0,80}\s*/g, "")
        .replace(/\}\}+/g, "")
        // "who a" dangling fragments
        .replace(/\bwho\s+a\b(?=\s*[.!,?]|$)/gi, "who is featured")
        .replace(/\bwho\s+a\s+(?=[A-Z])/g, "who is a ")
        // Empty paren / bracket leftovers
        .replace(/\(\s*\)/g, "")
        .replace(/\[\s*\]/g, "")
        .replace(/\s+([,.;:!?])/g, "$1")
        .replace(/([.!?]){2,}/g, "$1")
        .replace(/[^\S\n]{2,}/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

    // Collapse "a  Pokémon" after removals
    value = value.replace(/\ba\s+Pokémon/gi, "a Pokémon");
    value = value.replace(/\ban\s+Pokémon/gi, "a Pokémon");

    return value;
}

function scrubWikiText(text, options = {}) {
    return scrubProseHoles(scrubWikiMarkup(text), options);
}

function hasBrokenWikiProse(text) {
    const value = normalizeSpace(text);
    if (!value) {
        return false;
    }
    return (
        /\ban?\s+-types?\b/i.test(value) ||
        /\bappears in\s*\./i.test(value) ||
        /\b(?:in|of|from|by|as)\s+\./i.test(value) ||
        /\bwho\s+a\b/i.test(value) ||
        /\{\{|\}\}|\[\[|\]\]/i.test(value) ||
        /\bCategory:/i.test(value) ||
        /\bis documented on .+\.fandom\.com/i.test(value)
    );
}

module.exports = {
    expandWikiTemplates,
    scrubWikiMarkup,
    scrubProseHoles,
    scrubWikiText,
    hasBrokenWikiProse,
    inferMissingTypeLabel,
    normalizeSpace
};
