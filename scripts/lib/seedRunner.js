/**
 * Generic subject seeder.
 *
 * Usage pattern for any subject (One Piece, Star Wars, Basketball, …):
 *
 *   const subject = require("../subjects/one-piece");
 *   await seedSubject(subject);
 *
 * By default, thin/stub entity blurbs are filled with multi-paragraph
 * Fandom/Wikipedia leads before insert (see richDescriptions.js).
 * Pass { skipRichIntros: true } to skip that network pass.
 *
 * Subject shape:
 * {
 *   id, name, rootSlug, theme?,
 *   copyright?: { title, body },
 *   entities: [{ slug, name, type, short_description, description, evidence?, aliases?, parentSlug? }],
 *   relationships: [[from, to, type, title, strength?, discoveryScore?], ...]
 * }
 */

const path = require("path");
const { Client } = require(path.join(__dirname, "../../server/node_modules/pg"));
const { DATABASE_URL } = require("../../server/src/config/env");
const { EXTRA_RELATIONSHIP_TYPES } = require("./relationshipLabels");
const { inferEntityKind } = require("./entityTypeLabel");
const {
    expandMentions,
    dedupeEntities,
    dedupeRelationships
} = require("./expandMentions");
const { ensureRichDescriptions } = require("./richDescriptions");

async function ensureRelationshipTypes(client) {
    for (const value of EXTRA_RELATIONSHIP_TYPES) {
        await client.query(
            `ALTER TYPE relationship_type ADD VALUE IF NOT EXISTS '${value}'`
        );
    }
}

async function ensureUrlParentColumn(client) {
    await client.query(`
        ALTER TABLE entities
        ADD COLUMN IF NOT EXISTS url_parent_id UUID
            REFERENCES entities(id)
            ON DELETE SET NULL
    `);
}

async function ensureImageColumns(client) {
    await client.query(`
        ALTER TABLE entities
        ADD COLUMN IF NOT EXISTS image_source TEXT
    `);
    await client.query(`
        ALTER TABLE entities
        ADD COLUMN IF NOT EXISTS image_credit TEXT
    `);
    await client.query(`
        ALTER TABLE entities
        ADD COLUMN IF NOT EXISTS image_license TEXT
    `);
    await client.query(`
        ALTER TABLE entities
        ADD COLUMN IF NOT EXISTS image_usage TEXT
    `);
    await client.query(`
        ALTER TABLE entities
        ADD COLUMN IF NOT EXISTS image_alt TEXT
    `);
}

function attachSubjectMetadata(entities, subject) {
    return entities.map((entity) => {
        const priorMeta =
            typeof entity.metadata === "string"
                ? JSON.parse(entity.metadata || "{}")
                : entity.metadata || {};
        const aliases = [
            ...new Set(
                [...(entity.aliases || []), ...(priorMeta.aliases || [])]
                    .map((alias) => String(alias || "").trim())
                    .filter(Boolean)
            )
        ];

        return {
            ...entity,
            evidence: entity.evidence || "documented",
            metadata: {
                canon: priorMeta.canon !== false,
                universe: subject.id,
                theme: subject.theme || subject.id,
                ...priorMeta,
                aliases
            }
        };
    });
}

function resolveParents(entities, subject) {
    const bySlug = new Map(entities.map((e) => [e.slug, e]));
    const rootSlug = subject.rootSlug;

    return entities.map((entity) => {
        if (entity.slug === rootSlug) {
            return { ...entity, parentSlug: null };
        }

        if (entity.parentSlug && bySlug.has(entity.parentSlug)) {
            return entity;
        }

        // Default: nest every subject entity under the subject root.
        if (bySlug.has(rootSlug)) {
            return { ...entity, parentSlug: rootSlug };
        }

        return { ...entity, parentSlug: null };
    });
}

async function seedSubject(subject, options = {}) {
    if (!subject?.id || !subject?.rootSlug) {
        throw new Error("Subject requires id and rootSlug.");
    }

    let entities = dedupeEntities(subject.entities || []);

    // Every seed fills thin/stub blurbs with multi-paragraph wiki leads
    // before Postgres insert, so generatePages never ships empty pages.
    if (!options.skipRichIntros) {
        const rich = await ensureRichDescriptions(subject.id, entities, {
            silent: options.silent,
            limit: options.richIntroLimit || null,
            dryRun: Boolean(options.dryRun)
        });
        entities = rich.entities;
        if (!options.silent) {
            console.log(
                `[seed] rich descriptions: filled ${rich.filled}/${rich.attempted}` +
                    (rich.missing ? `, still thin ${rich.missing}` : "")
            );
        }
    }

    entities = attachSubjectMetadata(entities, subject);
    entities = resolveParents(entities, subject);

    let relationships = dedupeRelationships(subject.relationships || []);

    const mentionOptions =
        entities.length > 800
            ? {
                  // For huge subjects, only scan hand-authored / canon pages
                  // for mentions of the wider graph (keeps seeding fast).
                  onlyFromSlugs: entities
                      .filter(
                          (entity) =>
                              entity.metadata?.discovered !== true &&
                              entity.metadata?.source !== "wikidata" &&
                              entity.metadata?.source !== "wikipedia-category"
                      )
                      .map((entity) => entity.slug)
              }
            : {};

    const mentionPass = expandMentions(entities, relationships, mentionOptions);
    relationships = dedupeRelationships(mentionPass.relationships);

    const client = new Client({ connectionString: DATABASE_URL });
    await client.connect();

    try {
        await ensureRelationshipTypes(client);
        await ensureUrlParentColumn(client);
        await ensureImageColumns(client);
        await client.query("BEGIN");

        const entityIds = {};

        for (const item of entities) {
            const metadata = {
                ...(item.metadata || {}),
                kind:
                    item.metadata?.kind ||
                    item.kind ||
                    inferEntityKind(item)
            };

            const result = await client.query(
                `
                INSERT INTO entities (
                    slug,
                    name,
                    type,
                    evidence,
                    short_description,
                    description,
                    wikipedia_url,
                    wikidata_id,
                    image_url,
                    image_source,
                    image_credit,
                    image_license,
                    image_usage,
                    image_alt,
                    metadata
                )
                VALUES (
                    $1,
                    $2,
                    $3::entity_type,
                    $4::evidence_level,
                    $5,
                    $6,
                    $7,
                    $8,
                    $9,
                    $10,
                    $11,
                    $12,
                    $13,
                    $14,
                    $15
                )
                ON CONFLICT (slug)
                DO UPDATE SET
                    name = EXCLUDED.name,
                    type = EXCLUDED.type,
                    evidence = EXCLUDED.evidence,
                    short_description = EXCLUDED.short_description,
                    description = EXCLUDED.description,
                    wikipedia_url = COALESCE(EXCLUDED.wikipedia_url, entities.wikipedia_url),
                    wikidata_id = COALESCE(EXCLUDED.wikidata_id, entities.wikidata_id),
                    image_url = EXCLUDED.image_url,
                    image_source = EXCLUDED.image_source,
                    image_credit = EXCLUDED.image_credit,
                    image_license = EXCLUDED.image_license,
                    image_usage = EXCLUDED.image_usage,
                    image_alt = EXCLUDED.image_alt,
                    metadata = EXCLUDED.metadata,
                    updated_at = NOW()
                RETURNING id, slug
                `,
                [
                    item.slug,
                    item.name,
                    item.type,
                    item.evidence,
                    item.short_description,
                    item.description,
                    item.wikipedia_url || null,
                    item.wikidata_id || null,
                    item.image_url || null,
                    item.image_source || null,
                    item.image_credit || null,
                    item.image_license || null,
                    item.image_usage || null,
                    item.image_alt || null,
                    JSON.stringify(metadata)
                ]
            );

            entityIds[item.slug] = result.rows[0].id;
        }

        // Assign URL parents after all IDs exist.
        for (const item of entities) {
            const parentId = item.parentSlug
                ? entityIds[item.parentSlug] || null
                : null;

            await client.query(
                `
                UPDATE entities
                SET url_parent_id = $2,
                    updated_at = NOW()
                WHERE id = $1
                `,
                [entityIds[item.slug], parentId]
            );
        }

        const ids = Object.values(entityIds);

        await client.query(
            `
            DELETE FROM relationships
            WHERE from_entity_id = ANY($1::uuid[])
               OR to_entity_id = ANY($1::uuid[])
            `,
            [ids]
        );

        for (const rel of relationships) {
            const from = rel[0];
            const to = rel[1];
            const relationship = rel[2];
            const title = rel[3];
            const strength = rel[4] ?? 0.95;
            const discoveryScore = rel[5] ?? 0.9;
            const explanation = rel[6] || null;

            if (!entityIds[from]) {
                throw new Error(`Missing FROM entity in relationship: ${from}`);
            }

            if (!entityIds[to]) {
                throw new Error(`Missing TO entity in relationship: ${to}`);
            }

            await client.query(
                `
                INSERT INTO relationships (
                    from_entity_id,
                    to_entity_id,
                    relationship,
                    title,
                    explanation,
                    strength,
                    discovery_score
                )
                VALUES (
                    $1,
                    $2,
                    $3::relationship_type,
                    $4,
                    $5,
                    $6,
                    $7
                )
                ON CONFLICT (
                    from_entity_id,
                    to_entity_id,
                    relationship
                )
                DO UPDATE SET
                    title = EXCLUDED.title,
                    explanation = COALESCE(EXCLUDED.explanation, relationships.explanation),
                    strength = EXCLUDED.strength,
                    discovery_score = EXCLUDED.discovery_score,
                    updated_at = NOW()
                `,
                [
                    entityIds[from],
                    entityIds[to],
                    relationship,
                    title,
                    explanation,
                    strength,
                    discoveryScore
                ]
            );
        }

        await client.query("COMMIT");

        const summary = {
            subject: subject.id,
            entities: entities.length,
            relationships: relationships.length,
            mentionEdgesAdded: mentionPass.added,
            mentionPairsAlreadyLinked: mentionPass.skippedPairs
        };

        if (!options.silent) {
            console.log("");
            console.log("==============================================");
            console.log(` Ton-o-Lore — ${subject.name.toUpperCase()} SEED`);
            console.log("==============================================");
            console.log(`Entities:           ${summary.entities}`);
            console.log(`Relationships:      ${summary.relationships}`);
            console.log(`Mention edges new:  ${summary.mentionEdgesAdded}`);
            console.log(`Mentions already linked: ${summary.mentionPairsAlreadyLinked}`);
            console.log("==============================================");
            console.log("");
        }

        return summary;
    } catch (error) {
        await client.query("ROLLBACK");
        throw error;
    } finally {
        await client.end();
    }
}

module.exports = {
    seedSubject,
    attachSubjectMetadata,
    resolveParents
};
