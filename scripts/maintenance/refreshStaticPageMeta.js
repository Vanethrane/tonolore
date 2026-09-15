/**
 * Refresh meta_title / meta_description inside docs/data/pages/*.json
 * (no DB required) then optionally rewrite SEO shells.
 *
 *   node scripts/maintenance/refreshStaticPageMeta.js
 *   node scripts/maintenance/refreshStaticPageMeta.js --shells --limit=2000
 */

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const {
    buildMetaTitle,
    buildMetaDescription,
    truncateMeta
} = require("../generate/pages/pageSeoContent");

const root = path.join(__dirname, "..", "..");
const pagesDir = path.join(root, "docs", "data", "pages");

function walk(dir, out = []) {
    if (!fs.existsSync(dir)) {
        return out;
    }
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walk(full, out);
        } else if (entry.isFile() && entry.name.endsWith(".json")) {
            out.push(full);
        }
    }
    return out;
}

function main() {
    const argv = process.argv.slice(2);
    const writeShells = argv.includes("--shells");
    const limitRaw = argv.find((arg) => arg.startsWith("--limit="));
    const limit = limitRaw
        ? Number(limitRaw.slice("--limit=".length)) || null
        : null;

    let files = walk(pagesDir);
    if (limit) {
        files = files.slice(0, limit);
    }

    let updated = 0;
    for (const file of files) {
        let payload;
        try {
            payload = JSON.parse(fs.readFileSync(file, "utf8"));
        } catch {
            continue;
        }
        const entity = payload.entity || {};
        const subject = payload.subject || {
            name: entity.universe,
            id: entity.universe
        };
        if (!entity.name) {
            continue;
        }
        const title = buildMetaTitle(entity, subject);
        const description = buildMetaDescription(
            entity,
            payload.connections || [],
            subject
        );
        if (!payload.page) {
            payload.page = {};
        }
        const beforeTitle = payload.page.meta_title;
        const beforeDesc = payload.page.meta_description;
        payload.page.meta_title = title;
        payload.page.meta_description = truncateMeta(description, 155);
        if (
            beforeTitle === payload.page.meta_title &&
            beforeDesc === payload.page.meta_description
        ) {
            continue;
        }
        fs.writeFileSync(file, JSON.stringify(payload));
        updated += 1;
    }

    console.log(`Updated meta on ${updated}/${files.length} page JSON files`);

    if (writeShells) {
        const args = [path.join(__dirname, "writeSeoPageShells.js")];
        if (limit) {
            args.push(`--limit=${limit}`);
        }
        const run = spawnSync(process.execPath, args, {
            cwd: root,
            stdio: "inherit"
        });
        process.exit(run.status || 0);
    }
}

main();
