const { query } = require("../../../server/src/db");
const { relationshipLabel } = require("../../lib/relationshipLabels");
const { getSubjectMeta } = require("../../subjects/registry");
const {
    bestDescription,
    buildMetaTitle,
    buildMetaDescription,
    buildEntityContext,
    buildConnectionNarrative,
    buildSourcesBlock,
    buildUniqueDidYouKnow,
    scoreUniqueness
} = require("./pageSeoContent");
const { formatHubSummaries } = require("../../subjects/formatHubs");

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function buildFormatHubMenu(entity, subjectMeta = {}, pathLookup = null) {
    const root = subjectMeta.rootSlug || subjectMeta.id;
    if (!root || entity.slug !== root) {
        return "";
    }

    const hubs =
        subjectMeta.formatHubs?.length > 0
            ? subjectMeta.formatHubs
            : formatHubSummaries(subjectMeta.id || root);

    if (!hubs.length) {
        return "";
    }

    const items = hubs
        .map((hub) => {
            const segment = hub.urlSlug || hub.slug;
            let href = null;
            if (typeof pathLookup === "function") {
                href =
                    pathLookup(root, hub.slug) ||
                    pathLookup(root, segment);
            }
            if (!href) {
                href = `/${root}/${segment}`;
            }
            return `<li><a href="${href}" class="entity-link">${escapeHtml(hub.name)}</a></li>`;
        })
        .join("\n");

    return `
<section class="overview format-hubs">
    <h2>Explore by medium</h2>
    <p>
        Open the format-specific shelves — movies, games, manga, shows, and more —
        each with their own long-tail pages.
    </p>
    <ul class="format-hub-list">
        ${items}
    </ul>
</section>
`;
}

function pathSegment(entity) {
    const meta =
        typeof entity.metadata === "string"
            ? JSON.parse(entity.metadata || "{}")
            : entity.metadata || {};
    return meta.urlSlug || entity.slug;
}

/**
 * Build canonical paths from url_parent_id hierarchy.
 * Roots use /{slug}; children nest under parents.
 * Format hubs may set metadata.urlSlug for pretty segments
 * (entity slug star-wars-movies → URL /star-wars/movies).
 */
function buildPaths(entities) {
    const byId = new Map(entities.map((entity) => [entity.id, entity]));
    const cache = new Map();

    function getPath(entityId, visiting = new Set()) {
        if (cache.has(entityId)) {
            return cache.get(entityId);
        }

        const entity = byId.get(entityId);

        if (!entity) {
            return null;
        }

        if (visiting.has(entityId)) {
            throw new Error(`URL hierarchy cycle detected at ${entity.slug}`);
        }

        visiting.add(entityId);

        let path;
        const segment = pathSegment(entity);

        if (!entity.url_parent_id) {
            path = `/${entity.slug}`;
        } else {
            const parent = byId.get(entity.url_parent_id);

            if (!parent) {
                path = `/${entity.slug}`;
            } else {
                const parentPath = getPath(parent.id, visiting);
                path = `${parentPath}/${segment}`;
            }
        }

        visiting.delete(entityId);
        cache.set(entityId, path);

        return path;
    }

    for (const entity of entities) {
        getPath(entity.id);
    }

    return cache;
}

function entityLink(connection) {
    return `
        <a href="${connection.path}" class="entity-link">
            ${escapeHtml(connection.name)}
        </a>
    `;
}

function linkEntitiesInText(text, connections) {
    if (!text || !connections.length) {
        return escapeHtml(text);
    }

    const sorted = [...connections]
        .filter((c) => c.name && c.path && String(c.path).startsWith("/"))
        .sort((a, b) => b.name.length - a.name.length);

    let result = escapeHtml(text);
    const tokens = [];

    for (const connection of sorted) {
        const name = escapeHtml(connection.name);
        const pattern = new RegExp(
            `(?<![\\w])${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\w])`,
            "g"
        );

        result = result.replace(pattern, (match) => {
            const index = tokens.length;
            tokens.push(
                `<a href="${connection.path}" class="entity-link">${match}</a>`
            );
            // Placeholders cannot match entity-name regexes (no word chars only).
            return `\0L${index}\0`;
        });
    }

    return result.replace(/\0L(\d+)\0/g, (_, index) => tokens[Number(index)]);
}

function buildIntroduction(entity, connections = []) {
    const description =
        bestDescription(entity) ||
        `${entity.name} is part of a larger story worth exploring.`;

    const primaryConnections = connections
        .filter((connection) => connection.name)
        .sort((a, b) => {
            const scoreA =
                Number(a.discovery_score || 0) + Number(a.strength || 0);
            const scoreB =
                Number(b.discovery_score || 0) + Number(b.strength || 0);
            return scoreB - scoreA;
        })
        .slice(0, 6);

    const shortLead =
        entity.short_description &&
        bestDescription(entity) !== entity.short_description
            ? entity.short_description
            : description.slice(0, 280) + (description.length > 280 ? "…" : "");

    const linkedDescription = linkEntitiesInText(shortLead, connections);

    const connectionParagraph = primaryConnections.length
        ? `
    <p>
        Key threads from this canonical page lead to
        ${primaryConnections
            .map((connection, index) => {
                const link = `<a href="${connection.path}" class="entity-link"><strong>${escapeHtml(connection.name)}</strong></a>`;

            if (index === 0) {
                    return link;
            }

            if (index === primaryConnections.length - 1) {
                    return ` and ${link}`;
                }

                return `, ${link}`;
            })
            .join("")}.
        Each link is another long-tail path through the subject.
    </p>
`
        : "";

    return `
<section class="intro">
    <p class="lead">
        ${linkedDescription}
    </p>

    ${connectionParagraph}
</section>
`;
}

function buildOverview(entity, connections, subjectMeta = {}, pathLookup = null) {
    const universe = entity.metadata?.universe || subjectMeta.id;
    const custom = subjectMeta.overviewHtml;
    const pathFor = (slug) => {
        if (pathLookup) {
            const hit = pathLookup(universe, slug);
            if (hit && String(hit).startsWith(`/${universe}/`)) {
                return hit;
            }
        }
        const fromConnections = connections.find((c) => c.slug === slug);
        if (
            fromConnections?.path &&
            String(fromConnections.path).startsWith(`/${universe}/`)
        ) {
            return fromConnections.path;
        }
        // No silent flat fallback — that creates dead links when the slug
        // belongs to another subject or a deeper nested path is required.
        return null;
    };

    const link = (slug, label) => {
        const href = pathFor(slug);
        if (!href) {
            return `<strong>${label}</strong>`;
        }
        return `<a href="${href}" class="entity-link">${label}</a>`;
    };

    if (typeof custom === "function") {
        return custom(entity, connections, pathFor);
    }

    if (universe === "one-piece" && entity.slug === "one-piece") {
        return `
<section class="overview">
    <h2>What is One Piece?</h2>

    <p>
        <strong>One Piece</strong> is a Japanese manga series written and
        illustrated by ${link("eiichiro-oda", "Eiichiro Oda")}.
        It began serialization in
        ${link("weekly-shonen-jump", "Weekly Shonen Jump")}
        in 1997, later expanding into a long-running television anime produced by
        ${link("toei-animation", "Toei Animation")}
        and a live-action adaptation.
    </p>

    <p>
        The story follows
        ${link("monkey-d-luffy", "Monkey D. Luffy")},
        a young pirate whose dream is to become the Pirate King. Luffy sets
        out to find the legendary treasure called <strong>One Piece</strong>,
        assembling the
        ${link("straw-hat-pirates", "Straw Hat Pirates")}
        along the way.
    </p>

    <p>
        That search opens into a much larger web —
        ${link("gol-d-roger", "Gol D. Roger")},
        the ${link("void-century", "Void Century")},
        the ${link("poneglyphs", "Poneglyphs")},
        ${link("joy-boy", "Joy Boy")},
        and the ${link("world-government", "World Government")}.
    </p>
</section>
`;
    }

    if (universe === "star-wars" && entity.slug === "star-wars") {
        return `
<section class="overview">
    <h2>What is Star Wars?</h2>

    <p>
        <strong>Star Wars</strong> is a space-fantasy franchise created by
        ${link("george-lucas", "George Lucas")}
        and produced by
        ${link("lucasfilm", "Lucasfilm")}.
        It began with
        ${link("a-new-hope", "A New Hope")}
        in 1977 and expanded into prequels, sequels, and standalone stories.
    </p>

    <p>
        At its heart is
        ${link("the-force", "the Force")}
        and the conflict between the
        ${link("jedi-order", "Jedi Order")}
        and the
        ${link("sith", "Sith")} —
        from
        ${link("anakin-skywalker", "Anakin Skywalker")}
        and
        ${link("darth-vader", "Darth Vader")}
        to
        ${link("luke-skywalker", "Luke Skywalker")},
        ${link("leia-organa", "Leia Organa")},
        and
        ${link("rey", "Rey")}.
    </p>

    <p>
        Empires rise and fall around that struggle: the
        ${link("galactic-republic", "Galactic Republic")},
        the
        ${link("galactic-empire", "Galactic Empire")},
        the
        ${link("rebel-alliance", "Rebel Alliance")},
        the
        ${link("first-order", "First Order")},
        and the
        ${link("resistance", "Resistance")}.
    </p>
</section>
`;
    }

    if (universe === "five-nights-at-freddys" && entity.slug === "five-nights-at-freddys") {
    return `
<section class="overview">
    <h2>What is Five Nights at Freddy's?</h2>

    <p>
        <strong>Five Nights at Freddy's</strong> is a horror franchise created by
        ${link("scott-cawthon", "Scott Cawthon")}.
        It begins with night shifts at
        ${link("freddy-fazbears-pizza", "Freddy Fazbear's Pizza")},
        where animatronics like
        ${link("freddy-fazbear", "Freddy Fazbear")},
        ${link("bonnie", "Bonnie")},
        ${link("chica", "Chica")}, and
        ${link("foxy", "Foxy")}
        refuse to stay on stage.
    </p>

    <p>
        Behind the birthday parties is
        ${link("william-afton", "William Afton")},
        the
        ${link("missing-children-incident", "missing children incident")},
        and
        ${link("possession", "possession")}
        that turns mascots into vessels for revenge — from
        ${link("springtrap", "Springtrap")}
        to
        ${link("glitchtrap", "Glitchtrap")}.
    </p>

    <p>
        The story stretches across
        ${link("sister-location", "Sister Location")},
        ${link("security-breach", "Security Breach")},
        and the
        ${link("mega-pizzaplex", "Mega Pizzaplex")},
        always circling the same question: how do you close a restaurant that will not die?
    </p>
</section>
`;
    }

    if (universe === "harry-potter" && entity.slug === "harry-potter") {
        return `
<section class="overview">
    <h2>What is Harry Potter?</h2>
    <p>
        <strong>Harry Potter</strong> is the wizarding saga created by
        ${link("jk-rowling", "J.K. Rowling")},
        following
        ${link("harry-james-potter", "Harry Potter")},
        ${link("hermione-granger", "Hermione Granger")}, and
        ${link("ron-weasley", "Ron Weasley")}
        through
        ${link("hogwarts", "Hogwarts")}
        and the war against
        ${link("lord-voldemort", "Lord Voldemort")}.
    </p>
</section>
`;
    }

    if (universe === "pokemon" && entity.slug === "pokemon") {
        return `
<section class="overview">
    <h2>What is Pokémon?</h2>
    <p>
        <strong>Pokémon</strong> is the creature-collecting franchise from
        ${link("game-freak", "Game Freak")} and
        ${link("nintendo", "Nintendo")},
        where trainers like
        ${link("ash-ketchum", "Ash Ketchum")}
        partner with
        ${link("pikachu", "Pikachu")}
        across regions such as
        ${link("kanto", "Kanto")}.
    </p>
</section>
`;
    }

    if (universe === "lord-of-the-rings" && entity.slug === "lord-of-the-rings") {
        return `
<section class="overview">
    <h2>What is The Lord of the Rings?</h2>
    <p>
        <strong>The Lord of the Rings</strong> is
        ${link("jrr-tolkien", "J.R.R. Tolkien")}'s epic of
        ${link("frodo-baggins", "Frodo Baggins")},
        the
        ${link("fellowship-of-the-ring", "Fellowship")}, and the quest to destroy
        ${link("one-ring", "the One Ring")}
        forged by
        ${link("sauron", "Sauron")}
        in
        ${link("mordor", "Mordor")}.
    </p>
</section>
`;
    }

    if (universe === "cosmere" && entity.slug === "cosmere") {
        return `
<section class="overview">
    <h2>What is the Cosmere?</h2>
    <p>
        The <strong>Cosmere</strong> is
        ${link("brandon-sanderson", "Brandon Sanderson")}'s interconnected
        fantasy universe. Stories like
        ${link("mistborn", "Mistborn")} on
        ${link("scadrial", "Scadrial")} and
        ${link("the-stormlight-archive", "The Stormlight Archive")} on
        ${link("roshar", "Roshar")} share
        ${link("investiture", "Investiture")},
        ${link("shard", "Shards")} of
        ${link("adonalsium", "Adonalsium")}, and worldhoppers such as
        ${link("hoid", "Hoid")}.
    </p>
    <p>
        Follow
        ${link("kaladin", "Kaladin")},
        ${link("vin", "Vin")},
        ${link("dalinar-kholin", "Dalinar")}, and the gods of the
        ${link("shattering", "Shattering")}
        as the realms —
        ${link("physical-realm", "Physical")},
        ${link("cognitive-realm", "Cognitive")}, and
        ${link("spiritual-realm", "Spiritual")} —
        pull every planet into one map.
    </p>
</section>
`;
    }

    if (universe === "dragon-ball" && entity.slug === "dragon-ball") {
        return `
<section class="overview">
    <h2>What is Dragon Ball?</h2>
    <p>
        <strong>Dragon Ball</strong> is
        ${link("akira-toriyama", "Akira Toriyama")}'s martial-arts adventure following
        ${link("son-goku", "Son Goku")}, the wish-granting
        ${link("dragon-balls", "Dragon Balls")}, and battles that stretch from
        ${link("earth-dragon-ball", "Earth")} to
        ${link("namek", "Namek")} and beyond.
    </p>
    <p>
        Trace rivals like
        ${link("vegeta", "Vegeta")} and
        ${link("frieza", "Frieza")}, forms such as
        ${link("super-saiyan", "Super Saiyan")} and
        ${link("ultra-instinct", "Ultra Instinct")}, and series from
        ${link("dragon-ball-z", "Dragon Ball Z")} to
        ${link("dragon-ball-super", "Dragon Ball Super")}.
    </p>
</section>
`;
    }

    if (universe === "wheel-of-time" && entity.slug === "wheel-of-time") {
        return `
<section class="overview">
    <h2>What is The Wheel of Time?</h2>
    <p>
        <strong>The Wheel of Time</strong> is
        ${link("robert-jordan", "Robert Jordan")}'s epic of
        ${link("rand-althor", "Rand al'Thor")}, the
        ${link("dragon-reborn", "Dragon Reborn")}, and the turning of
        ${link("the-pattern", "the Pattern")} toward
        ${link("tarmon-gaidon", "Tarmon Gai'don")}.
    </p>
    <p>
        Follow
        ${link("mat-cauthon", "Mat")},
        ${link("perrin-aybara", "Perrin")},
        ${link("egwene-alvere", "Egwene")}, and
        ${link("nynaeve-almeara", "Nynaeve")}
        from the
        ${link("two-rivers", "Two Rivers")} through
        ${link("aes-sedai", "Aes Sedai")} politics, the
        ${link("one-power", "One Power")}, and the
        ${link("forsaken", "Forsaken")} who serve the
        ${link("dark-one", "Dark One")}.
    </p>
</section>
`;
    }

    if (universe === "berserk" && entity.slug === "berserk") {
        return `
<section class="overview">
    <h2>What is Berserk?</h2>
    <p>
        <strong>Berserk</strong> is
        ${link("kentaro-miura", "Kentaro Miura")}'s dark fantasy of
        ${link("guts", "Guts")}, the Black Swordsman, and his struggle against
        ${link("griffith", "Griffith")}, the
        ${link("god-hand", "God Hand")}, and
        ${link("causality", "causality")} itself.
    </p>
    <p>
        Trace the
        ${link("band-of-the-hawk", "Band of the Hawk")}, the
        ${link("eclipse", "Eclipse")}, the
        ${link("brand-of-sacrifice", "Brand of Sacrifice")}, and companions from
        ${link("casca", "Casca")} to
        ${link("schierke", "Schierke")} across Midland toward
        ${link("falconia", "Falconia")} and
        ${link("elfhelm", "Elfhelm")}.
    </p>
</section>
`;
    }

    return buildEntityContext(
        entity,
        connections,
        subjectMeta,
        linkEntitiesInText
    );
}

function buildConnectionSection(title, connections, showExamples = false) {
    if (!connections.length) {
        return "";
    }

    const examples = showExamples ? connections.slice(0, 3) : [];

    return `
<section class="topic-section">
    <details>
        <summary class="topic-summary">
            <span class="topic-title">${escapeHtml(title)}</span>
            <span class="topic-count">${connections.length}</span>
        </summary>

        ${
            examples.length
                ? `
        <div class="topic-examples">
            ${examples
                .map(
                    (connection) => `
                <a
                    href="${connection.path}"
                    class="connection"
                    data-relationship="${escapeHtml(relationshipLabel(connection))}"
                >
                    <strong>${escapeHtml(connection.name)}</strong>
                    <span>${escapeHtml(connection.short_description || "")}</span>
                </a>
            `
                )
                .join("")}
        </div>
        `
                : ""
        }

        <div class="topic-content">
            ${connections
                .map(
                    (connection) => `
                <div class="fact-card">
                    <div class="fact-label">
                        ${escapeHtml(relationshipLabel(connection))}
                    </div>

                    <h3>${entityLink(connection)}</h3>

                    ${
                        connection.title
                            ? `<p>${escapeHtml(connection.title)}</p>`
                            : ""
                    }

                    ${
                        connection.explanation
                            ? `<p>${escapeHtml(connection.explanation)}</p>`
                            : ""
                    }

                    ${
                        !connection.title && connection.short_description
                            ? `<p>${escapeHtml(connection.short_description)}</p>`
                            : ""
                    }
                </div>
            `
                )
                .join("")}
        </div>
    </details>
</section>
`;
}

function buildRelationshipGroups(connections) {
    const groups = new Map();

    for (const connection of connections) {
        const group = relationshipLabel(connection);

        if (!groups.has(group)) {
            groups.set(group, []);
        }

        groups.get(group).push(connection);
    }

    return [...groups.entries()].sort((a, b) => b[1].length - a[1].length);
}

function buildGraphSections(connections) {
    const groups = buildRelationshipGroups(connections);

    if (!groups.length) {
        return "";
    }

    return `
<section class="graph-section">
    <h2>Mapped connections</h2>

    <p class="section-intro">
        Every edge is another route through the subject. Expand a group
        to see how these threads fit together.
    </p>

    ${groups
        .map(([title, group], index) =>
            buildConnectionSection(title, group, index < 2)
        )
        .join("")}
</section>
`;
}

function buildContent(entity, connections, subjectMeta, pathLookup = null) {
    return [
        buildIntroduction(entity, connections),
        buildFormatHubMenu(entity, subjectMeta, pathLookup),
        buildOverview(entity, connections, subjectMeta, pathLookup),
        buildConnectionNarrative(entity, connections, linkEntitiesInText),
        buildGraphSections(connections),
        buildUniqueDidYouKnow(entity, connections, subjectMeta),
        buildSourcesBlock(entity)
    ].join("\n");
}

async function generatePage(entity, paths, subjectMeta = {}, pathLookup = null) {
    const connectionsResult = await query(
        `
        SELECT
            other.id,
            other.slug,
            other.name,
            other.type,
            other.short_description,
            r.relationship,
            r.title,
            r.explanation,
            r.discovery_score,
            r.strength,

            CASE
                WHEN r.from_entity_id = $1 THEN 'outgoing'
                ELSE 'incoming'
            END AS direction

        FROM relationships r

        JOIN entities other
            ON other.id = CASE
                WHEN r.from_entity_id = $1 THEN r.to_entity_id
                ELSE r.from_entity_id
            END

        WHERE
            r.from_entity_id = $1
            OR r.to_entity_id = $1

        ORDER BY
            (
                COALESCE(r.discovery_score, 0) * 0.6 +
                COALESCE(r.strength, 0) * 0.4
            ) DESC

        LIMIT 60
    `,
        [entity.id]
    );

    const meta =
        typeof entity.metadata === "string"
            ? JSON.parse(entity.metadata)
            : entity.metadata || {};
    const universe = meta.universe || subjectMeta.id || "topic";
    const resolvedSubjectMeta =
        subjectMeta?.id || subjectMeta?.name
            ? subjectMeta
            : getSubjectMeta(universe) || { id: universe };

    const connections = connectionsResult.rows.map((connection) => {
        const canonical = paths.get(connection.id);
        const path =
            canonical && String(canonical).startsWith("/")
                ? canonical
                : `/${universe}/${connection.slug}`;
        return {
        ...connection,
            path
        };
    });

    const entityWithMeta = { ...entity, metadata: meta };
    const content = buildContent(
        entityWithMeta,
        connections,
        resolvedSubjectMeta,
        pathLookup
    );

    const wordCount = content
        .replace(/<[^>]+>/g, " ")
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;

    const slug = paths.get(entity.id);

    if (!slug) {
        throw new Error(`No canonical path generated for ${entity.name}`);
    }

    const metaTitle = buildMetaTitle(entityWithMeta, resolvedSubjectMeta);
    const metaDescription = buildMetaDescription(
        entityWithMeta,
        connections,
        resolvedSubjectMeta
    );
    const uniqueness = scoreUniqueness({
        wordCount,
        connectionCount: connections.length,
        description: bestDescription(entityWithMeta)
    });
    const depthScore = Number(
        Math.min(1, connections.length / 20 + wordCount / 800).toFixed(3)
    );

    const result = await query(
        `
        INSERT INTO pages (
            entity_id,
            slug,
            title,
            meta_title,
            meta_description,
            page_type,
            content,
            status,
            word_count,
            depth_score,
            uniqueness_score,
            engagement_score,
            generation_version
        )
        VALUES (
            $1,
            $2,
            $3,
            $4,
            $5,
            'entity',
            $6,
            'published',
            $7,
            $8,
            $9,
            0.5,
            7
        )
        ON CONFLICT (slug)
        DO UPDATE SET
            entity_id = EXCLUDED.entity_id,
            title = EXCLUDED.title,
            meta_title = EXCLUDED.meta_title,
            meta_description = EXCLUDED.meta_description,
            content = EXCLUDED.content,
            word_count = EXCLUDED.word_count,
            depth_score = EXCLUDED.depth_score,
            uniqueness_score = EXCLUDED.uniqueness_score,
            generation_version = EXCLUDED.generation_version,
            updated_at = NOW()
        RETURNING id, slug
    `,
        [
        entity.id,
        slug,
        entity.name,
            metaTitle,
        metaDescription,
        content,
            wordCount,
            depthScore,
            uniqueness
        ]
    );

    return result.rows[0];
}

async function main() {
    const argv = process.argv.slice(2);
    const onlyMissing = argv.includes("--only-missing");
    const universeFilter =
        argv.find((arg) => arg !== "--only-missing" && !arg.startsWith("-")) ||
        null;

    const entitiesResult = await query(
        onlyMissing
            ? `
        SELECT e.*
        FROM entities e
        WHERE ($1::text IS NULL OR e.metadata->>'universe' = $1)
          AND NOT EXISTS (
              SELECT 1 FROM pages p WHERE p.entity_id = e.id
          )
        ORDER BY e.name
    `
            : `
        SELECT *
        FROM entities
        WHERE ($1::text IS NULL OR metadata->>'universe' = $1)
        ORDER BY name
    `,
        [universeFilter]
    );

    const entities = entitiesResult.rows;

    console.log(
        `Generating pages for ${entities.length} entities` +
            (universeFilter ? ` (universe: ${universeFilter})` : "") +
            (onlyMissing ? " [only-missing]" : "") +
            "..."
    );

    if (!entities.length) {
        console.log("Nothing to generate.");
        return;
    }

    // Paths need the full hierarchy, so load parents even when filtering.
    const allForPaths = universeFilter
        ? (
              await query(`
            SELECT *
            FROM entities
            ORDER BY name
        `)
          ).rows
        : entities;

    const paths = buildPaths(allForPaths);

    const pathByUniverseSlug = new Map();
    for (const entity of allForPaths) {
        const meta =
            typeof entity.metadata === "string"
                ? JSON.parse(entity.metadata || "{}")
                : entity.metadata || {};
        const universe = meta.universe || null;
        const path = paths.get(entity.id);
        if (universe && path && String(path).startsWith("/")) {
            pathByUniverseSlug.set(`${universe}::${entity.slug}`, path);
        }
    }

    const pathLookup = (universe, slug) => {
        const exact = pathByUniverseSlug.get(`${universe}::${slug}`);
        if (exact) {
            return exact;
        }

        // Prefer a nested path ending with /slug under this universe.
        let best = null;
        for (const [key, path] of pathByUniverseSlug) {
            if (!key.startsWith(`${universe}::`)) {
                continue;
            }
            if (path === `/${universe}/${slug}` || path.endsWith(`/${slug}`)) {
                if (!best || path.length > best.length) {
                    best = path;
                }
            }
        }
        return best;
    };

    // Drop stale page rows (flat slugs, old nests, duplicates) so only
    // canonical paths remain for these entities.
    const entityIds = entities.map((entity) => entity.id);
    if (entityIds.length) {
        // Drop stale duplicate page rows for entities being regenerated.
        // Only remove non-canonical slugs for those entity ids — never a
        // global content wipe (that can delete other subjects' pages).
        const canonicalRows = entities
            .map((entity) => ({
                id: entity.id,
                path: paths.get(entity.id)
            }))
            .filter((row) => row.path && String(row.path).startsWith("/"));

        if (canonicalRows.length) {
            await query(
                `
                DELETE FROM pages p
                WHERE p.entity_id = ANY($1::uuid[])
                  AND NOT (p.slug = ANY($2::text[]))
                `,
                [
                    canonicalRows.map((row) => row.id),
                    canonicalRows.map((row) => row.path)
                ]
            );
        }
    }

    const subjectMetaByUniverse = new Map();
    const concurrency = Math.max(
        1,
        Math.min(8, Number(process.env.PAGE_GEN_CONCURRENCY || 6))
    );

    for (let index = 0; index < entities.length; index += concurrency) {
        const batch = entities.slice(index, index + concurrency);

        await Promise.all(
            batch.map(async (entity) => {
                const meta =
                    typeof entity.metadata === "string"
                        ? JSON.parse(entity.metadata || "{}")
                        : entity.metadata || {};
                const universe = meta.universe || universeFilter || null;
                let subjectMeta = subjectMetaByUniverse.get(universe);

                if (!subjectMeta) {
                    subjectMeta = getSubjectMeta(universe) || { id: universe };
                    subjectMetaByUniverse.set(universe, subjectMeta);
                }

                const page = await generatePage(
                    entity,
                    paths,
                    subjectMeta,
                    pathLookup
                );
                console.log(`✓ ${entity.name} → ${page.slug}`);
            })
        );
    }

    console.log("\nPage generation complete.");
}

main().catch((error) => {
    console.error("\nPage generation failed:");
    console.error(error);
    process.exit(1);
});
