/**
 * Rehome cross-IP guest entities under their creator franchise.
 *
 * - Moves stolen home-IP slugs (e.g. darkseid under mortal-kombat) back to DC/Marvel
 * - Creates guest appearance pages (`lex-luthor-in-mortal-kombat`) under the guest IP
 * - Links appearance ↔ canonical + crossover work
 * - Writes SPA redirects for old wrong paths
 * - Repairs stale pages.slug that don't match the url_parent chain
 *
 *   node scripts/maintenance/rehomeCrossIpGuests.js
 *   node scripts/maintenance/rehomeCrossIpGuests.js --dry-run
 */

require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { query, pool } = require("../../server/src/db");
const {
    CROSSOVER_GUEST_SUBJECTS,
    CROSSOVER_WORK_BY_GUEST,
    ownershipForSlug,
    appearanceSlug
} = require("../subjects/homeIpOwnership");

const ROOT = path.join(__dirname, "..", "..");
const DRY = process.argv.includes("--dry-run");

async function pagePathForEntity(entityId) {
    const result = await query(
        `
        WITH RECURSIVE chain AS (
            SELECT id, slug, url_parent_id, 0 AS d
            FROM entities WHERE id = $1
            UNION ALL
            SELECT x.id, x.slug, x.url_parent_id, c.d + 1
            FROM entities x
            JOIN chain c ON x.id = c.url_parent_id
            WHERE c.d < 16
        )
        SELECT '/' || string_agg(slug, '/' ORDER BY d DESC) AS path
        FROM chain
        `,
        [entityId]
    );
    return result.rows[0]?.path || null;
}

async function ensureEntity(slug, fields) {
    const existing = await query(`SELECT id, slug FROM entities WHERE slug = $1`, [
        slug
    ]);
    if (existing.rows[0]) {
        return existing.rows[0];
    }
    if (DRY) {
        console.log(`[dry] would create ${slug}`);
        return { id: null, slug };
    }
    const result = await query(
        `
        INSERT INTO entities (
            slug, name, type, evidence,
            short_description, description, metadata
        )
        VALUES (
            $1, $2, $3::entity_type, $4::evidence_level,
            $5, $6, $7::jsonb
        )
        RETURNING id, slug
        `,
        [
            slug,
            fields.name,
            fields.type || "topic",
            fields.evidence || "fiction",
            fields.short_description || fields.name,
            fields.description || fields.short_description || fields.name,
            JSON.stringify(fields.metadata || {})
        ]
    );
    return result.rows[0];
}

async function setParent(childId, parentSlug) {
    if (!childId || !parentSlug || DRY) {
        return;
    }
    const parent = await query(`SELECT id FROM entities WHERE slug = $1`, [
        parentSlug
    ]);
    if (!parent.rows[0]) {
        return;
    }
    await query(
        `UPDATE entities SET url_parent_id = $2, updated_at = NOW() WHERE id = $1`,
        [childId, parent.rows[0].id]
    );
}

async function link(fromSlug, toSlug, relationship, title, explanation) {
    if (DRY) {
        console.log(`[dry] link ${fromSlug} -[${relationship}]-> ${toSlug}`);
        return;
    }
    const from = await query(`SELECT id FROM entities WHERE slug = $1`, [fromSlug]);
    const to = await query(`SELECT id FROM entities WHERE slug = $1`, [toSlug]);
    if (!from.rows[0] || !to.rows[0]) {
        return;
    }
    await query(
        `
        INSERT INTO relationships (
            from_entity_id, to_entity_id, relationship, title, explanation,
            strength, discovery_score
        )
        VALUES ($1, $2, $3::relationship_type, $4, $5, 0.94, 0.9)
        ON CONFLICT (from_entity_id, to_entity_id, relationship)
        DO UPDATE SET
            title = EXCLUDED.title,
            explanation = COALESCE(EXCLUDED.explanation, relationships.explanation),
            updated_at = NOW()
        `,
        [
            from.rows[0].id,
            to.rows[0].id,
            relationship,
            title,
            explanation
        ]
    );
}

async function main() {
    const redirects = {};
    const touchedUniverses = new Set();
    let moved = 0;
    let appearances = 0;

    // 1) Find entities whose slug is owned by another universe.
    const guests = await query(
        `
        SELECT e.id, e.slug, e.name, e.type, e.evidence,
               e.short_description, e.description, e.metadata,
               e.metadata->>'universe' AS universe,
               p.slug AS page_path
        FROM entities e
        LEFT JOIN pages p ON p.entity_id = e.id AND p.status = 'published'
        WHERE e.metadata->>'universe' IS NOT NULL
        ORDER BY e.slug
        `
    );

    for (const row of guests.rows) {
        const own = ownershipForSlug(row.slug);
        if (!own) {
            continue;
        }
        const canonSlug = own.canonicalSlug || row.slug;
        const home = own.universe;
        const guestUniverse = row.universe;
        if (!guestUniverse || guestUniverse === home) {
            continue;
        }
        // Only reclaim from known crossover guest wikis (MK vs DC, etc.).
        // Never steal from peer franchises (norse-mythology, dnd, one-piece, …).
        if (!CROSSOVER_GUEST_SUBJECTS.has(guestUniverse)) {
            continue;
        }
        // Alias slug that should redirect to canonical home entity
        // (e.g. the-joker under MK while joker exists under DC).
        if (own.canonicalSlug && own.canonicalSlug !== row.slug) {
            const homeEntity = await query(
                `SELECT id, metadata->>'universe' AS universe FROM entities WHERE slug = $1`,
                [canonSlug]
            );
            if (homeEntity.rows[0]) {
                const appSlug = appearanceSlug(canonSlug, guestUniverse);
                const appName = `${row.name} (${guestUniverse})`;
                console.log(
                    `[alias] ${guestUniverse}/${row.slug} → appearance ${appSlug} + home ${canonSlug}`
                );
                if (!DRY) {
                    const clash = await query(
                        `SELECT id FROM entities WHERE slug = $1 AND id <> $2`,
                        [appSlug, row.id]
                    );
                    if (clash.rows[0]) {
                        // Appearance already exists — retire the alias guest row.
                        await link(
                            appSlug,
                            canonSlug,
                            "related_to",
                            `${row.name} in ${guestUniverse}`,
                            `Crossover appearance of ${canonSlug}; canonical page is under ${home}.`
                        );
                        await query(
                            `
                            UPDATE entities
                            SET slug = $2,
                                metadata = COALESCE(metadata, '{}'::jsonb)
                                    || jsonb_build_object(
                                        'retired', true,
                                        'redirect_to', $3::text,
                                        'universe', $4::text
                                    ),
                                updated_at = NOW()
                            WHERE id = $1
                            `,
                            [
                                row.id,
                                `obsolete-${row.slug}-${String(row.id).slice(0, 8)}`,
                                canonSlug,
                                guestUniverse
                            ]
                        );
                    } else {
                        // Retarget this alias row into an appearance entity.
                        await query(
                            `
                            UPDATE entities
                            SET slug = $2,
                                name = $3,
                                type = $4::entity_type,
                                metadata = COALESCE(metadata, '{}'::jsonb)
                                    || jsonb_build_object(
                                        'universe', $5::text,
                                        'appearance_of', $6::text,
                                        'home_universe', $7::text,
                                        'guest_universe', $5::text,
                                        'canon', false,
                                        'discovered', true,
                                        'home_ip', false
                                    ),
                                updated_at = NOW()
                            WHERE id = $1
                            `,
                            [
                                row.id,
                                appSlug,
                                appName,
                                own.type || row.type || "person",
                                guestUniverse,
                                canonSlug,
                                home
                            ]
                        );
                        const crossover =
                            CROSSOVER_WORK_BY_GUEST[guestUniverse] || guestUniverse;
                        await setParent(row.id, crossover);
                        await link(
                            appSlug,
                            canonSlug,
                            "related_to",
                            `${row.name} in ${guestUniverse}`,
                            `Crossover appearance of ${canonSlug}; canonical page is under ${home}.`
                        );
                        await link(
                            canonSlug,
                            appSlug,
                            "related_to",
                            `${row.name} crossover appearance`,
                            `Also appears in ${guestUniverse}.`
                        );
                        if (crossover !== guestUniverse) {
                            await link(
                                appSlug,
                                crossover,
                                "part_of",
                                `Part of ${crossover}`,
                                null
                            );
                            await link(
                                canonSlug,
                                crossover,
                                "related_to",
                                `Appears in ${crossover}`,
                                `${row.name} appears in the ${crossover} crossover.`
                            );
                        }
                    }
                }
                if (row.page_path) {
                    const homePath = await pagePathForEntity(homeEntity.rows[0].id);
                    if (homePath) {
                        redirects[row.page_path] = homePath;
                    }
                    redirects[`/${guestUniverse}/${row.slug}`] = homePath || `/${home}/${canonSlug}`;
                }
                appearances += 1;
                touchedUniverses.add(home);
                touchedUniverses.add(guestUniverse);
                continue;
            }
        }

        // Same slug living under wrong universe — move home, mint appearance.
        if (canonSlug === row.slug && guestUniverse !== home) {
            console.log(
                `[move] ${guestUniverse}/${row.slug} → ${home} (parent ${own.parentSlug})`
            );
            const appSlug = appearanceSlug(row.slug, guestUniverse);
            const guestDesc = row.description;
            const guestShort = row.short_description;

            if (!DRY) {
                // Create appearance copy under guest first (new slug).
                const app = await ensureEntity(appSlug, {
                    name: `${row.name} (${guestUniverse.replace(/-/g, " ")})`,
                    type: own.type || row.type || "person",
                    evidence: row.evidence || "fiction",
                    short_description: guestShort,
                    description:
                        guestDesc ||
                        `${row.name} crossover appearance within ${guestUniverse}.`,
                    metadata: {
                        universe: guestUniverse,
                        theme: guestUniverse,
                        appearance_of: canonSlug,
                        home_universe: home,
                        guest_universe: guestUniverse,
                        canon: false,
                        discovered: true,
                        home_ip: false
                    }
                });
                const crossover =
                    CROSSOVER_WORK_BY_GUEST[guestUniverse] || guestUniverse;
                if (app.id) {
                    await setParent(app.id, crossover);
                }

                // Reclaim canonical entity for home IP.
                await query(
                    `
                    UPDATE entities
                    SET type = $2::entity_type,
                        metadata = COALESCE(metadata, '{}'::jsonb)
                            || jsonb_build_object(
                                'universe', $3::text,
                                'theme', $3::text,
                                'home_ip', true,
                                'canon', true
                            )
                            - 'appearance_of'
                            - 'guest_universe'
                            - 'discovered',
                        updated_at = NOW()
                    WHERE id = $1
                    `,
                    [row.id, own.type || row.type || "person", home]
                );
                await setParent(row.id, own.parentSlug || home);

                await link(
                    appSlug,
                    canonSlug,
                    "related_to",
                    `${row.name} in ${guestUniverse}`,
                    `Crossover appearance; canonical page under ${home}.`
                );
                await link(
                    canonSlug,
                    appSlug,
                    "related_to",
                    `${row.name} crossover appearance`,
                    `Also appears in ${guestUniverse}.`
                );
                if (crossover !== guestUniverse) {
                    await link(
                        canonSlug,
                        crossover,
                        "related_to",
                        `Appears in ${crossover}`,
                        null
                    );
                    await link(appSlug, crossover, "part_of", null, null);
                }
            }

            const oldPath = row.page_path || `/${guestUniverse}/${row.slug}`;
            redirects[oldPath] = `/${home}/${own.parentSlug || home}/${row.slug}`
                .replace(/\/+/g, "/")
                .replace(/\/$/, "");
            // Prefer computed path after parent fix
            if (!DRY) {
                const newPath = await pagePathForEntity(row.id);
                if (newPath) {
                    redirects[oldPath] = newPath;
                    redirects[`/${guestUniverse}/${row.slug}`] = newPath;
                }
            }

            moved += 1;
            appearances += 1;
            touchedUniverses.add(home);
            touchedUniverses.add(guestUniverse);
        }
    }

    // 2) Repair stale page paths where pages.slug disagrees with url_parent chain
    //    and the published path is clearly under the wrong root.
    const stale = await query(
        `
        SELECT e.id, e.slug, e.metadata->>'universe' AS universe,
               p.id AS page_id, p.slug AS page_path
        FROM entities e
        JOIN pages p ON p.entity_id = e.id AND p.status = 'published'
        WHERE e.metadata->>'universe' IN ('dc', 'marvel')
           OR e.metadata->>'home_ip' = 'true'
        `
    );
    let repaired = 0;
    for (const row of stale.rows) {
        const correct = await pagePathForEntity(row.id);
        if (!correct || correct === row.page_path) {
            continue;
        }
        const pageRoot = String(row.page_path || "")
            .replace(/^\/+/, "")
            .split("/")[0];
        const universe = row.universe;
        // Only rewrite paths that clearly sat under a crossover guest or
        // absorbed satellite root — never yank pages off peer franchises
        // (norse-mythology, lego, dnd, zelda, one-piece, …).
        const repairableRoots = new Set([
            ...CROSSOVER_GUEST_SUBJECTS,
            "the-simpsons",
            "spider-man",
            "batman-comics",
            "superman-comics",
            "wonder-woman-comics",
            "green-lantern-comics",
            "aquaman-comics",
            "x-men",
            "wolverine-comics",
            "deadpool-comics",
            "ms-marvel-comics",
            "marvel-cinematic-universe"
        ]);
        if (!repairableRoots.has(pageRoot)) {
            continue;
        }
        if (pageRoot === universe) {
            continue;
        }
        console.log(`[path] ${row.slug}: ${row.page_path} → ${correct}`);
        redirects[row.page_path] = correct;
        if (!DRY) {
            await query(
                `
                UPDATE pages
                SET status = 'archived', updated_at = NOW()
                WHERE slug = $1 AND id <> $2
                `,
                [correct, row.page_id]
            );
            await query(
                `
                UPDATE pages
                SET slug = $2, updated_at = NOW()
                WHERE id = $1
                `,
                [row.page_id, correct]
            );
        }
        repaired += 1;
        touchedUniverses.add("dc");
        touchedUniverses.add("marvel");
    }

    // 3) Persist redirects for the SPA.
    const redirectPath = path.join(ROOT, "docs", "data", "path-redirects.json");
    const rootRedirectPath = path.join(ROOT, "data", "path-redirects.json");
    const payload = {
        generated_at: new Date().toISOString(),
        count: Object.keys(redirects).length,
        redirects
    };
    if (!DRY) {
        fs.mkdirSync(path.dirname(redirectPath), { recursive: true });
        fs.writeFileSync(redirectPath, JSON.stringify(payload, null, 2));
        fs.mkdirSync(path.dirname(rootRedirectPath), { recursive: true });
        fs.writeFileSync(rootRedirectPath, JSON.stringify(payload, null, 2));
    }
    console.log(
        `\n[rehome] moved=${moved} appearances=${appearances} pathRepairs=${repaired} redirects=${Object.keys(redirects).length}`
    );

    if (DRY) {
        return;
    }

    // 4) Re-seed DC (+ Marvel if touched) so core entities / LexCorp land correctly.
    for (const id of ["dc", "marvel", "mortal-kombat"]) {
        if (!touchedUniverses.has(id) && id !== "dc") {
            continue;
        }
        console.log(`\n[seed] ${id}`);
        const needle = `${path.sep}subjects${path.sep}${id}${path.sep}`;
        for (const key of Object.keys(require.cache)) {
            if (key.includes(needle) || key.includes("homeIpOwnership") || key.includes("mergeSubjectPackage")) {
                delete require.cache[key];
            }
        }
        const { seedSubject } = require("../lib/seedRunner");
        const subject = require(path.join(ROOT, "scripts", "subjects", id));
        await seedSubject(subject, { skipRichIntros: true });
        const gen = spawnSync(
            process.execPath,
            [
                path.join(ROOT, "scripts", "generate", "pages", "generatePages.js"),
                id,
                "--only-missing"
            ],
            { cwd: ROOT, stdio: "inherit", env: process.env }
        );
        if (gen.status !== 0) {
            console.warn(`[warn] generatePages ${id} exit ${gen.status}`);
        }
    }

    // Force regenerate key DC pages (lex-corp, lex-luthor, batman, darkseid).
    console.log("\n[generate] dc (full refresh for rehomed)");
    spawnSync(
        process.execPath,
        [
            path.join(ROOT, "scripts", "generate", "pages", "generatePages.js"),
            "dc"
        ],
        { cwd: ROOT, stdio: "inherit", env: process.env }
    );
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
