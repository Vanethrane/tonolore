const { query } = require("../db");

async function listRabbitHoles(req, res) {
    try {
        const limit = Math.min(Number(req.query.limit) || 20, 100);

        const result = await query(`
            SELECT
                rh.id,
                rh.slug,
                rh.title,
                rh.description,
                rh.depth,
                rh.weirdness_score,
                rh.obscurity_score,
                rh.evidence_score,
                rh.connection_score,
                rh.overall_score,
                rh.generated,
                e.slug AS starting_slug,
                e.name AS starting_name
            FROM rabbit_holes rh
            LEFT JOIN entities e
                ON e.id = rh.starting_entity_id
            ORDER BY rh.overall_score DESC NULLS LAST
            LIMIT $1
        `, [limit]);

        res.json({
            count: result.rows.length,
            rabbitHoles: result.rows
        });
    } catch (error) {
        console.error("List rabbit holes error:", error);

        res.status(500).json({
            error: "Failed to retrieve rabbit holes"
        });
    }
}

async function getRabbitHole(req, res) {
    try {
        const { slug } = req.params;

        const holeResult = await query(`
            SELECT
                rh.id,
                rh.slug,
                rh.title,
                rh.description,
                rh.depth,
                rh.weirdness_score,
                rh.obscurity_score,
                rh.evidence_score,
                rh.connection_score,
                rh.overall_score,
                rh.generated,
                e.slug AS starting_slug,
                e.name AS starting_name
            FROM rabbit_holes rh
            LEFT JOIN entities e
                ON e.id = rh.starting_entity_id
            WHERE rh.slug = $1
            LIMIT 1
        `, [slug]);

        if (holeResult.rows.length === 0) {
            return res.status(404).json({
                error: "Rabbit hole not found"
            });
        }

        const hole = holeResult.rows[0];

        const stepsResult = await query(`
            SELECT
                rhs.step_number,
                rhs.explanation,
                e.id AS entity_id,
                e.slug,
                e.name,
                e.type,
                e.short_description,
                e.evidence,
                r.relationship,
                r.title AS relationship_title
            FROM rabbit_hole_steps rhs
            JOIN entities e
                ON e.id = rhs.entity_id
            LEFT JOIN relationships r
                ON r.id = rhs.relationship_id
            WHERE rhs.rabbit_hole_id = $1
            ORDER BY rhs.step_number ASC
        `, [hole.id]);

        res.json({
            ...hole,
            steps: stepsResult.rows
        });
    } catch (error) {
        console.error("Get rabbit hole error:", error);

        res.status(500).json({
            error: "Failed to retrieve rabbit hole"
        });
    }
}

async function getNextStep(req, res) {
    try {
        const { slug } = req.params;

        const holeResult = await query(`
            SELECT id
            FROM rabbit_holes
            WHERE slug = $1
            LIMIT 1
        `, [slug]);

        if (holeResult.rows.length === 0) {
            return res.status(404).json({
                error: "Rabbit hole not found"
            });
        }

        const rabbitHoleId = holeResult.rows[0].id;

        const currentResult = await query(`
            SELECT entity_id, step_number
            FROM rabbit_hole_steps
            WHERE rabbit_hole_id = $1
            ORDER BY step_number DESC
            LIMIT 1
        `, [rabbitHoleId]);

        if (currentResult.rows.length === 0) {
            return res.json({
                current: null,
                candidates: []
            });
        }

        const current = currentResult.rows[0];

        const candidates = await query(`
            SELECT
                r.id AS relationship_id,
                r.relationship,
                r.title AS relationship_title,
                r.explanation,
                r.evidence AS relationship_evidence,
                r.strength,
                r.discovery_score,

                e.id AS entity_id,
                e.slug,
                e.name,
                e.type,
                e.short_description,
                e.evidence AS entity_evidence,
                e.image_url,

                (
                    COALESCE(r.discovery_score, 0) * 0.45 +
                    COALESCE(r.strength, 0) * 0.25 +
                    COALESCE(eds.curiosity_score, 0) * 0.10 +
                    COALESCE(eds.novelty_score, 0) * 0.10 +
                    COALESCE(eds.connection_score, 0) * 0.10
                ) AS next_score

            FROM relationships r

            JOIN entities e
                ON e.id = r.to_entity_id

            LEFT JOIN entity_discovery_scores eds
                ON eds.entity_id = e.id

            WHERE
                r.from_entity_id = $1

                AND e.id NOT IN (
                    SELECT entity_id
                    FROM rabbit_hole_steps
                    WHERE rabbit_hole_id = $2
                )

            ORDER BY next_score DESC NULLS LAST

            LIMIT 10
        `, [current.entity_id, rabbitHoleId]);

        res.json({
            current,
            candidates: candidates.rows
        });
    } catch (error) {
        console.error("Next rabbit-hole step error:", error);

        res.status(500).json({
            error: "Failed to determine next rabbit-hole step"
        });
    }
}

module.exports = {
    listRabbitHoles,
    getRabbitHole,
    getNextStep
};
