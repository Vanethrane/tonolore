/**
 * Copy client/dist → docs/ (and repo root) for GitHub Pages, then overlay
 * static lore data (JSON + sitemap) when DATABASE_URL is available.
 *
 *   cd client && npm run build
 *   node scripts/maintenance/publishPages.js
 *
 * If DATABASE_URL is missing, existing docs/data + sitemap/robots are kept
 * so GitHub Actions does not wipe a previously exported snapshot.
 */

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const os = require("os");

const root = path.join(__dirname, "..", "..");
const dist = path.join(root, "client", "dist");
const docs = path.join(root, "docs");

function rmrf(target) {
    if (fs.existsSync(target)) {
        fs.rmSync(target, { recursive: true, force: true });
    }
}

function copyDir(from, to) {
    fs.mkdirSync(to, { recursive: true });
    for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
        const src = path.join(from, entry.name);
        const dest = path.join(to, entry.name);
        if (entry.isDirectory()) {
            copyDir(src, dest);
        } else {
            fs.copyFileSync(src, dest);
        }
    }
}

function stashStaticOverlay(fromDir) {
    const stash = {
        dir: fs.mkdtempSync(path.join(os.tmpdir(), "tonolore-static-")),
        names: []
    };

    for (const name of ["data", "category", "robots.txt", "sitemap.xml"]) {
        const src = path.join(fromDir, name);
        if (!fs.existsSync(src)) {
            continue;
        }
        const dest = path.join(stash.dir, name);
        const stat = fs.statSync(src);
        if (stat.isDirectory()) {
            copyDir(src, dest);
        } else {
            fs.copyFileSync(src, dest);
        }
        stash.names.push(name);
    }

    return stash;
}

function restoreStaticOverlay(stash, toDir) {
    for (const name of stash.names) {
        const src = path.join(stash.dir, name);
        const dest = path.join(toDir, name);
        rmrf(dest);
        const stat = fs.statSync(src);
        if (stat.isDirectory()) {
            copyDir(src, dest);
        } else {
            fs.copyFileSync(src, dest);
        }
    }
    rmrf(stash.dir);
}

function publishShell(targetDir, stash) {
    rmrf(targetDir);
    copyDir(dist, targetDir);
    fs.writeFileSync(path.join(targetDir, "CNAME"), "www.tonolore.com\n");
    fs.copyFileSync(
        path.join(targetDir, "index.html"),
        path.join(targetDir, "404.html")
    );
    if (stash?.names?.length) {
        restoreStaticOverlay(stash, targetDir);
    }
}

function mirrorToRoot() {
    for (const name of ["index.html", "404.html", "CNAME"]) {
        fs.copyFileSync(path.join(docs, name), path.join(root, name));
    }

    rmrf(path.join(root, "assets"));
    if (fs.existsSync(path.join(docs, "assets"))) {
        copyDir(path.join(docs, "assets"), path.join(root, "assets"));
    }

    for (const entry of fs.readdirSync(docs, { withFileTypes: true })) {
        if (
            entry.isFile() &&
            /\.(svg|png|ico|webmanifest|txt)$/i.test(entry.name) &&
            !["index.html", "404.html", "CNAME"].includes(entry.name)
        ) {
            fs.copyFileSync(
                path.join(docs, entry.name),
                path.join(root, entry.name)
            );
        }
    }

    for (const name of ["robots.txt", "sitemap.xml"]) {
        const src = path.join(docs, name);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(root, name));
        }
    }

    rmrf(path.join(root, "data"));
    if (fs.existsSync(path.join(docs, "data"))) {
        copyDir(path.join(docs, "data"), path.join(root, "data"));
    }

    rmrf(path.join(root, "category"));
    if (fs.existsSync(path.join(docs, "category"))) {
        copyDir(path.join(docs, "category"), path.join(root, "category"));
    }
}

if (!fs.existsSync(path.join(dist, "index.html"))) {
    console.error(
        "Missing client/dist/index.html — run: cd client && npm run build"
    );
    process.exit(1);
}

const skipExport = process.argv.includes("--skip-export");
const envPath = path.join(root, ".env");
const hasDb =
    Boolean(process.env.DATABASE_URL) ||
    (fs.existsSync(envPath) &&
        fs.readFileSync(envPath, "utf8").includes("DATABASE_URL="));

const stash = stashStaticOverlay(docs);
publishShell(docs, stash);

console.log(
    "Published client/dist → docs/ (preserved data/sitemap when present)"
);

if (!skipExport && hasDb) {
    console.log("Refreshing static lore export into docs/ …");
    const result = spawnSync(
        process.execPath,
        [path.join(__dirname, "exportStaticSite.js")],
        { stdio: "inherit", cwd: root, env: process.env }
    );
    if (result.status !== 0) {
        console.error(
            "Static export failed — keeping previously stashed overlay if any."
        );
        process.exit(result.status || 1);
    }
} else if (!skipExport) {
    console.warn(
        "No DATABASE_URL — reusing committed docs/data snapshot (if any)."
    );
}

mirrorToRoot();
console.log("Mirrored docs/ → repo root for legacy Pages source=/");
