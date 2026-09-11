/**
 * Turn relationship rows into readable shared-lore blurbs.
 * Skips useless "connected through shared lore" titles so every page
 * can explain *why* two entities are linked.
 */

function normalizeSpace(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
}

function isGenericSharedLoreTitle(title) {
    return /through shared lore\.?$/i.test(normalizeSpace(title));
}

function firstSentences(text, maxChars = 280) {
    const clean = normalizeSpace(text);
    if (!clean) return "";
    if (clean.length <= maxChars) return clean;

    const sliced = clean.slice(0, maxChars);
    const sentenceEnd = Math.max(
        sliced.lastIndexOf(". "),
        sliced.lastIndexOf("! "),
        sliced.lastIndexOf("? ")
    );
    if (sentenceEnd > 80) {
        return sliced.slice(0, sentenceEnd + 1).trim();
    }
    const space = sliced.lastIndexOf(" ");
    return `${(space > 60 ? sliced.slice(0, space) : sliced).trim()}…`;
}

/**
 * @param {object} connection - API/static connection row
 * @param {object} [opts]
 * @param {string} [opts.fromName] - page entity name
 * @param {(c: object) => string} [opts.relationshipLabel]
 */
function connectionLoreBlurb(connection, opts = {}) {
    if (!connection) return "";

    const fromName = opts.fromName || "This page";
    const labelFn =
        opts.relationshipLabel ||
        ((c) =>
            String(c.relationship || "connected_to").replace(/_/g, " "));
    const label = labelFn(connection);
    const other = connection.name || "another figure";

    const explanation = normalizeSpace(connection.explanation);
    if (explanation && !isGenericSharedLoreTitle(explanation)) {
        return explanation;
    }

    const title = normalizeSpace(connection.title);
    if (title && !isGenericSharedLoreTitle(title)) {
        return title;
    }

    const about = firstSentences(
        connection.short_description || connection.description || "",
        220
    );

    if (about) {
        return `${fromName} links to ${other} (${label}). ${about}`;
    }

    return `${fromName} and ${other} are mapped together in this lore graph (${label}) — open ${other} to keep following the trail.`;
}

/**
 * Build a seed title + explanation for a mention-derived edge.
 */
function buildMentionLore(entity, other) {
    const aboutOther = firstSentences(
        other.short_description || other.description || "",
        180
    );
    const aboutSelf = firstSentences(
        entity.short_description || entity.description || "",
        120
    );

    const title = `${entity.name} and ${other.name} appear together in mapped lore.`;
    let explanation = `${entity.name}'s entry mentions ${other.name}`;
    if (aboutOther) {
        explanation += ` — ${aboutOther}`;
    } else if (aboutSelf) {
        explanation += `. ${aboutSelf}`;
    } else {
        explanation +=
            ", so Ton-o-Lore records a shared-lore link readers can follow between the two pages.";
    }

    return {
        title,
        explanation: normalizeSpace(explanation)
    };
}

module.exports = {
    normalizeSpace,
    isGenericSharedLoreTitle,
    firstSentences,
    connectionLoreBlurb,
    buildMentionLore
};
