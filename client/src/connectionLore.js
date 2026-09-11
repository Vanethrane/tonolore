/**
 * Client-side shared-lore blurbs for connection cards and lists.
 */

import { entityTypeLabel } from "./entityTypeLabel";

export function normalizeSpace(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
}

export function isGenericSharedLoreTitle(title) {
    return /through shared lore\.?$/i.test(normalizeSpace(title));
}

export function firstSentences(text, maxChars = 280) {
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

export function connectionLoreBlurb(connection, opts = {}) {
    if (!connection) return "";

    const fromName = opts.fromName || "This page";
    const label =
        typeof opts.relationshipLabel === "function"
            ? opts.relationshipLabel(connection)
            : entityTypeLabel(connection);
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
