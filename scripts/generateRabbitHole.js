const { query } = require("../server/src/db");

function slugify(value) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

async function getEntity(slug) {
    const result = await query(`
        SELECT
            id,
            slug,
            name,
            type,
            short_description,
            evidence
        FROM entities
        WHERE slug = $1
        LIMIT 1
    `, [slug]);

    return result.rows[0] || null;
}

async function getCandidates(entityId, visited) {
    const result = await query(`
        SELECT
            r.id AS relationship_id,
            r.relationship,
            r.title AS relationship_title,
            r.explanation,
            r.strength,
            r.discovery_score,
            r.from_entity_id,
            r.to_entity_id,

            CASE
                WHEN r.from_entity_id = $1 THEN to_entity.id
                ELSE from_entity.id
            END AS candidate_id,

            CASE
                WHEN r.from_entity_id = $1 THEN to_entity.slug
                ELSE from_entity.slug
            END AS candidate_slug,

            CASE
                WHEN r.from_entity_id = $1 THEN to_entity.name
                ELSE from_entity.name
            END AS candidate_name,

            CASE
                WHEN r.from_entity_id = $1 THEN to_entity.type
                ELSE from_entity.type
            END AS candidate_type,

            CASE
                WHEN r.from_entity_id = $1 THEN to_entity.short_description
                ELSE from_entity.short_description
            END AS candidate_description,

            CASE
                WHEN r.from_entity_id = $1 THEN to_entity.evidence
                ELSE from_entity.evidence
            END AS candidate_evidence,

            COALESCE(ds.curiosity_score, 0.5) AS curiosity_score,
            COALESCE(ds.novelty_score, 0.5) AS novelty_score,
            COALESCE(ds.depth_score, 0.5) AS depth_score,
            COALESCE(ds.connection_score, 0.5) AS connection_score

        FROM relationships r

        JOIN entities from_entity
            ON from_entity.id = r.from_entity_id

        JOIN entities to_entity
            ON to_entity.id = r.to_entity_id

        LEFT JOIN entity_discovery_scores ds
            ON ds.entity_id = CASE
                WHEN r.from_entity_id = $1 THEN to_entity.id
                ELSE from_entity.id
            END

        WHERE
            (r.from_entity_id = $1 OR r.to_entity_id = $1)
            AND NOT (
                CASE
                    WHEN r.from_entity_id = $1 THEN to_entity.id
                    ELSE from_entity.id
                END = ANY($2::uuid[])
            )

        ORDER BY
            (
                COALESCE(r.discovery_score, 0.5) * 0.35 +
                r.strength * 0.20 +
                COALESCE(ds.curiosity_score, 0.5) * 0.20 +
                COALESCE(ds.novelty_score, 0.5) * 0.10 +
                COALESCE(ds.depth_score, 0.5) * 0.05 +
                COALESCE(ds.connection_score, 0.5) * 0.10
            ) DESC
    `, [entityId, visited]);

    return result.rows.map(row => ({
        entity: {
            id: row.candidate_id,
            slug: row.candidate_slug,
            name: row.candidate_name,
            type: row.candidate_type,
            short_description: row.candidate_description,
            evidence: row.candidate_evidence
        },
        relationship: {
            id: row.relationship_id,
            type: row.relationship,
            title: row.relationship_title,
            explanation: row.explanation,
            strength: Number(row.strength),
            discovery_score: Number(row.discovery_score)
        },
        score:
            Number(row.discovery_score || 0.5) * 0.35 +
            Number(row.strength || 0.5) * 0.20 +
            Number(row.curiosity_score || 0.5) * 0.20 +
            Number(row.novelty_score || 0.5) * 0.10 +
            Number(row.depth_score || 0.5) * 0.05 +
            Number(row.connection_score || 0.5) * 0.10
    }));
}
async function generateRabbitHole(startSlug, maxDepth = 8) {
    const start = await getEntity(startSlug);

    if (!start) {
        throw new Error(`Entity not found: ${startSlug}`);
    }

    const path = [];
    const visited = [start.id];

    let current = start;

    path.push({
        entity: start,
        relationship: null,
        score: 1
    });

    for (let depth = 1; depth < maxDepth; depth++) {
        const candidates = await getCandidates(current.id, visited);

        if (candidates.length === 0) {
            break;
        }

        /*
         * We don't always take candidate #1.
         *
         * A rabbit hole that is perfectly predictable isn't very interesting.
         * Pick from the strongest candidates with a small amount of variety.
         */
        const topCandidates = candidates.slice(0, Math.min(3, candidates.length));

        const selected =
            topCandidates[Math.floor(Math.random() * topCandidates.length)];

        const entity = selected.entity;

        if (!entity) {
            break;
        }

        path.push({
            entity,
            relationship: selected.relationship,
            score: Number(selected.score)
        });

        visited.push(entity.id);
        current = entity;
    }

    return path;
}

async function saveRabbitHole(startSlug, path) {
    const start = path[0].entity;

    const slug = `${slugify(start.name)}-rabbit-hole-${Date.now()}`;

    const scores = path.slice(1).map(step => step.score);

    const overallScore =
        scores.length > 0
            ? scores.reduce((sum, value) => sum + value, 0) / scores.length
            : 0.5;

    const depth = path.length;

    const weirdnessScore = Math.min(
        1,
        0.35 + (depth / 10) + Math.random() * 0.2
    );

    const obscurityScore = Math.min(
        1,
        0.25 + (depth / 12)
    );

    const evidenceScore =
        path.reduce((sum, step) => {
            if (step.entity.evidence === "documented") return sum + 1;
            if (step.entity.evidence === "well_supported") return sum + 0.85;
            if (step.entity.evidence === "likely") return sum + 0.65;
            if (step.entity.evidence === "disputed") return sum + 0.4;
            if (step.entity.evidence === "theory") return sum + 0.25;
            return sum + 0.5;
        }, 0) / path.length;

    const connectionScore =
        path.slice(1).reduce((sum, step) => {
            return sum + (step.relationship?.score || 0);
        }, 0) / Math.max(1, path.length - 1);

    const title =
        `${start.name}: ${path[path.length - 1].entity.name}`;

    const description =
        `A Ton-o-Lore rabbit hole beginning with ${start.name} and descending through ${depth} connected discoveries.`;

    const clientResult = await query(`
        INSERT INTO rabbit_holes (
            slug,
            title,
            description,
            starting_entity_id,
            depth,
            weirdness_score,
            obscurity_score,
            evidence_score,
            connection_score,
            overall_score,
            generated,
            generation_version
        )
        VALUES (
            $1, $2, $3, $4, $5,
            $6, $7, $8, $9, $10,
            true, 1
        )
        RETURNING id
    `, [
        slug,
        title,
        description,
        start.id,
        depth,
        weirdnessScore,
        obscurityScore,
        evidenceScore,
        connectionScore,
        overallScore
    ]);

    const rabbitHoleId = clientResult.rows[0].id;

    for (let i = 0; i < path.length; i++) {
        const step = path[i];

        await query(`
            INSERT INTO rabbit_hole_steps (
                rabbit_hole_id,
                step_number,
                entity_id,
                relationship_id,
                explanation
            )
            VALUES ($1, $2, $3, $4, $5)
        `, [
            rabbitHoleId,
            i + 1,
            step.entity.id,
            step.relationship?.relationship_id || null,
            step.relationship
                ? step.relationship.title
                : `You started with ${step.entity.name}.`
        ]);
    }

    return {
        id: rabbitHoleId,
        slug,
        title,
        depth,
        overallScore
    };
}

async function main() {
    const startSlug = process.argv[2] || "one-piece";
    const maxDepth = Number(process.argv[3]) || 8;

    console.log(`Generating rabbit hole from: ${startSlug}`);
    console.log(`Maximum depth: ${maxDepth}`);

    const path = await generateRabbitHole(startSlug, maxDepth);

    console.log("\nPATH:");

    path.forEach((step, index) => {
        if (index === 0) {
            console.log(`1. ${step.entity.name}`);
            return;
        }

        console.log(
            `${index + 1}. ${step.entity.name} ` +
            `[${step.relationship.type}] ` +
            `(score: ${step.score.toFixed(3)})`
        );
    });

    const rabbitHole = await saveRabbitHole(startSlug, path);

    console.log("\nCREATED:");
    console.log(`ID: ${rabbitHole.id}`);
    console.log(`Slug: ${rabbitHole.slug}`);
    console.log(`Depth: ${rabbitHole.depth}`);
    console.log(`Overall score: ${rabbitHole.overallScore.toFixed(3)}`);
}

main().catch(error => {
    console.error("\nRabbit-hole generation failed:");
    console.error(error);
    process.exit(1);
});




