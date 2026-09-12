/**
 * Unique meta + body fragments for long-tail entity pages.
 */

const { connectionLoreBlurb } = require("../../lib/connectionLore");
const { entityTypeLabel } = require("../../lib/entityTypeLabel");

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function subjectDisplayName(subjectMeta, universe) {
    if (subjectMeta?.name) {
        return subjectMeta.name;
    }

    return String(universe || "Ton-o-Lore")
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

function typeLabel(typeOrEntity) {
    if (typeOrEntity && typeof typeOrEntity === "object") {
        return entityTypeLabel(typeOrEntity);
    }
    return entityTypeLabel({ type: typeOrEntity || "topic" });
}

function usesWhoHeading(entity) {
    const type = String(entity.type || "").toLowerCase();

    if (type === "person") {
        return true;
    }

    // Characters are sometimes typed more broadly (e.g. animatronics).
    const blob = `${entity.short_description || ""} ${entity.description || ""}`.toLowerCase();
    return /\b(fictional character|main character|title character)\b/.test(
        blob
    );
}

function normalizeSpace(value) {
    return String(value || "")
        .replace(/\s+/g, " ")
        .trim();
}

function isGenericStub(text) {
    const value = normalizeSpace(text).toLowerCase();

    if (!value || value.length < 28) {
        return true;
    }

    return (
        /^fictional (character|topic|place|organization|object|concept|work) from /.test(
            value
        ) ||
        /appears in the .+ universe\.?\s*fictional /.test(value) ||
        /^topic in this subject graph\.?$/.test(value) ||
        /is documented on .+\.fandom\.com\.?$/.test(value) ||
        /documented on (the )?one piece fandom wiki/.test(value) ||
        /documented on wookieepedia/.test(value)
    );
}

function descriptionParagraphs(text) {
    const raw = String(text || "").trim();
    if (!raw) {
        return [];
    }

    let parts = raw
        .split(/\n\n+/)
        .map((part) => normalizeSpace(part))
        .filter(Boolean);

    // Hand-authored / structured lore often needs more than four beats
    // (e.g. film-by-film adaptation notes). Auto-split walls of text stay
    // shorter so overview sections do not become a dump.
    const maxParts = parts.length > 1 ? 10 : 4;

    if (parts.length === 1 && parts[0].length > 420) {
        const sentences = parts[0].match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) || [
            parts[0]
        ];
        const rebuilt = [];
        let buf = "";
        for (const sentence of sentences) {
            const next = `${buf} ${sentence}`.trim();
            if (buf && next.length > 280) {
                rebuilt.push(buf);
                buf = sentence.trim();
            } else {
                buf = next;
            }
            if (rebuilt.length >= 3) {
                buf = [buf, ...sentences.slice(sentences.indexOf(sentence) + 1)]
                    .join(" ")
                    .trim();
                break;
            }
        }
        if (buf) {
            rebuilt.push(buf);
        }
        parts = rebuilt.filter(Boolean).slice(0, 4);
        return parts;
    }

    return parts.slice(0, maxParts);
}

function bestDescription(entity) {
    const longRaw = String(entity.description || "")
        .replace(/\r\n/g, "\n")
        .trim();
    const shortRaw = String(entity.short_description || "")
        .replace(/\r\n/g, "\n")
        .trim();

    if (longRaw && !isGenericStub(longRaw)) {
        return longRaw;
    }

    if (shortRaw && !isGenericStub(shortRaw)) {
        return shortRaw;
    }

    // Never ship "X is documented on wiki.fandom.com." stubs to HTML.
    return "";
}

function entityAliases(entity) {
    const meta =
        typeof entity.metadata === "string"
            ? JSON.parse(entity.metadata || "{}")
            : entity.metadata || {};

    return [
        ...new Set(
            (meta.aliases || [])
                .map((alias) => normalizeSpace(alias))
                .filter(
                    (alias) =>
                        alias &&
                        alias.toLowerCase() !==
                            String(entity.name || "").toLowerCase()
                )
        )
    ].slice(0, 8);
}

function truncateMeta(text, max = 158) {
    const value = normalizeSpace(text);

    if (value.length <= max) {
        return value;
    }

    const sliced = value.slice(0, max - 1);
    const boundary = Math.max(
        sliced.lastIndexOf(". "),
        sliced.lastIndexOf("; "),
        sliced.lastIndexOf(", "),
        sliced.lastIndexOf(" ")
    );

    return `${(boundary > 60 ? sliced.slice(0, boundary) : sliced).trim()}…`;
}

function rankConnections(connections) {
    return [...connections].sort((a, b) => {
        const scoreA =
            Number(a.discovery_score || 0) * 0.6 + Number(a.strength || 0) * 0.4;
        const scoreB =
            Number(b.discovery_score || 0) * 0.6 + Number(b.strength || 0) * 0.4;
        return scoreB - scoreA;
    });
}

function buildMetaTitle(entity, subjectMeta) {
    const subject = subjectDisplayName(
        subjectMeta,
        entity.metadata?.universe
    );
    const kind = typeLabel(entity.type);

    return `${entity.name} (${subject}) — ${kind}, lore & connections | Ton-o-Lore`;
}

function buildMetaDescription(entity, connections, subjectMeta) {
    const subject = subjectDisplayName(
        subjectMeta,
        entity.metadata?.universe
    );
    const description = bestDescription(entity);
    const top = rankConnections(connections)
        .slice(0, 4)
        .map((connection) => connection.name)
        .filter(Boolean);
    const aliases = entityAliases(entity).slice(0, 3);

    let lead;

    if (description) {
        lead = description;
    } else if (aliases.length) {
        lead = `${entity.name} (also known as ${aliases.join(", ")}) is a ${typeLabel(entity.type)} in ${subject}.`;
    } else {
        lead = `${entity.name} is a ${typeLabel(entity.type)} mapped in the ${subject} lore graph on Ton-o-Lore.`;
    }

    const trail = top.length
        ? ` Related pages: ${top.join(", ")}.`
        : ` Explore linked people, places, events, and ideas in ${subject}.`;

    return truncateMeta(`${lead}${trail}`);
}

function buildAliasesBlock(entity) {
    const aliases = entityAliases(entity);

    if (!aliases.length) {
        return "";
    }

    return `
    <p class="also-known-as">
        <strong>Also known as:</strong>
        ${aliases.map((alias) => escapeHtml(alias)).join(", ")}.
    </p>
`;
}

function buildConnectionNarrative(entity, connections, linkEntitiesInText) {
    const facts = rankConnections(connections)
        .filter((connection) => connection.name)
        .slice(0, 8);

    if (!facts.length) {
        return "";
    }

    const items = facts
        .map((connection) => {
            const label = entityTypeLabel(connection);
            const detail = connectionLoreBlurb(connection, {
                fromName: entity.name,
                relationshipLabel: entityTypeLabel
            });
            const href = connection.path || `/${connection.slug}`;

            return `
        <li>
            <strong>${escapeHtml(label)}:</strong>
            <a href="${href}" class="entity-link">${escapeHtml(connection.name)}</a>
            — ${linkEntitiesInText(detail, connections)}
        </li>`;
        })
        .join("");

    return `
<section class="connection-narrative">
    <h2>How ${escapeHtml(entity.name)} connects</h2>
    <p>
        These mapped links are unique to this page — each one is another
        long-tail route through the subject graph.
    </p>
    <ul>
        ${items}
    </ul>
</section>
`;
}

function buildEntityContext(entity, connections, subjectMeta, linkEntitiesInText) {
    const subject = subjectDisplayName(
        subjectMeta,
        entity.metadata?.universe
    );
    const description = bestDescription(entity);
    const kind = typeLabel(entity.type);
    const ranked = rankConnections(connections);
    const topNames = ranked
        .slice(0, 5)
        .map((connection) => connection.name)
        .filter(Boolean);
    const headingVerb = usesWhoHeading(entity) ? "Who is" : "What is";

    let body = description;
    if (!body) {
        const parts = [
            `${entity.name} is a ${kind} in the ${subject} subject on Ton-o-Lore.`,
            topNames.length
                ? `This page maps how ${entity.name} relates to ${topNames.join(", ")}, and it is meant to surface those links for readers following specific names and aliases through the graph.`
                : `This page is the canonical index entry for ${entity.name}, kept here so the name remains discoverable inside the ${subject} lore graph.`,
            ranked.length
                ? `${entity.name} currently connects to ${ranked.length} linked ${ranked.length === 1 ? "entity" : "entities"} on Ton-o-Lore, each one another route into the wider ${subject} map.`
                : `As more relationships are mapped, this ${entity.name} entry will accumulate the surrounding cast, places, and concepts that define its place in ${subject}.`
        ];
        body = parts.join("\n\n");
    }

    const paragraphs = descriptionParagraphs(body);
    const htmlParas = (paragraphs.length ? paragraphs : [body])
        .map(
            (paragraph) => `
    <p>
        ${linkEntitiesInText(paragraph, connections)}
    </p>`
        )
        .join("");

    return `
<section class="overview">
    <h2>${headingVerb} ${escapeHtml(entity.name)}?</h2>
    ${htmlParas}
    ${buildAliasesBlock(entity)}
</section>
`;
}

function buildSourcesBlock(entity) {
    const links = [];

    if (entity.wikipedia_url) {
        links.push(
            `<a href="${escapeHtml(entity.wikipedia_url)}" rel="nofollow noopener" target="_blank">Wikipedia</a>`
        );
    }

    const meta =
        typeof entity.metadata === "string"
            ? JSON.parse(entity.metadata || "{}")
            : entity.metadata || {};

    if (meta.fandom_url) {
        links.push(
            `<a href="${escapeHtml(meta.fandom_url)}" rel="nofollow noopener" target="_blank">Fandom wiki</a>`
        );
    }

    if (!links.length) {
        return "";
    }

    return `
<section class="sources">
    <h2>Sources &amp; further reading</h2>
    <p>${links.join(" · ")}</p>
</section>
`;
}

function buildUniqueDidYouKnow(entity, connections, subjectMeta) {
    const facts = [];
    const subject = subjectDisplayName(
        subjectMeta,
        entity.metadata?.universe
    );
    const aliases = entityAliases(entity);
    const ranked = rankConnections(connections);

    if (aliases.length) {
        facts.push(
            `${entity.name} is also referenced as ${aliases.slice(0, 3).join(", ")}.`
        );
    }

    for (const connection of ranked.slice(0, 4)) {
        if (connection.title) {
            facts.push(normalizeSpace(connection.title));
        } else if (connection.explanation) {
            facts.push(
                `${entityTypeLabel(connection)} ${connection.name}: ${normalizeSpace(connection.explanation)}`
            );
        }
    }

    if (entity.evidence_level || entity.evidence) {
        const level = String(
            entity.evidence_level || entity.evidence
        ).replace(/_/g, " ");
        facts.push(
            `Evidence around ${entity.name} is classified as ${level} on Ton-o-Lore.`
        );
    }

    if (ranked.length) {
        facts.push(
            `${entity.name} currently maps to ${ranked.length} linked entities inside ${subject}.`
        );
    }

    const unique = [...new Set(facts.map(normalizeSpace).filter(Boolean))].slice(
        0,
        6
    );

    if (!unique.length) {
        return "";
    }

    return `
<section class="did-you-know">
    <h2>Did you know?</h2>
    <ul>
        ${unique.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("")}
    </ul>
</section>
`;
}

function scoreUniqueness({ wordCount, connectionCount, description }) {
    const descScore = isGenericStub(description) ? 0.25 : Math.min(1, description.length / 400);
    const words = Math.min(1, wordCount / 350);
    const edges = Math.min(1, connectionCount / 12);

    return Number(((descScore * 0.45 + words * 0.35 + edges * 0.2)).toFixed(3));
}

module.exports = {
    bestDescription,
    buildMetaTitle,
    buildMetaDescription,
    buildEntityContext,
    buildConnectionNarrative,
    buildSourcesBlock,
    buildUniqueDidYouKnow,
    scoreUniqueness,
    subjectDisplayName,
    isGenericStub
};
