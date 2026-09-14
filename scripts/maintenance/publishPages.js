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

function ensureCatalogInDocs() {
    // CI / local publish must ship catalog + search with the Pages artifact.
    // Prefer freshest files already under docs/; fill gaps from repo-root data/.
    const docsData = path.join(docs, "data");
    const rootData = path.join(root, "data");
    fs.mkdirSync(docsData, { recursive: true });

    for (const name of ["subjects.json", "search-index.json"]) {
        const docsFile = path.join(docsData, name);
        const rootFile = path.join(rootData, name);
        if (fs.existsSync(docsFile)) {
            continue;
        }
        if (fs.existsSync(rootFile)) {
            fs.copyFileSync(rootFile, docsFile);
            console.log(`Filled docs/data/${name} from repo-root data/`);
        }
    }

    for (const name of ["robots.txt", "sitemap.xml"]) {
        const docsFile = path.join(docs, name);
        const rootFile = path.join(root, name);
        if (!fs.existsSync(docsFile) && fs.existsSync(rootFile)) {
            fs.copyFileSync(rootFile, docsFile);
            console.log(`Filled docs/${name} from repo root`);
        }
    }
    if (fs.existsSync(root)) {
        for (const entry of fs.readdirSync(root)) {
            if (!/^sitemap-\d+\.xml$/i.test(entry)) {
                continue;
            }
            const docsFile = path.join(docs, entry);
            const rootFile = path.join(root, entry);
            if (!fs.existsSync(docsFile) && fs.existsSync(rootFile)) {
                fs.copyFileSync(rootFile, docsFile);
                console.log(`Filled docs/${entry} from repo root`);
            }
        }
    }

    const docsCategory = path.join(docs, "category");
    const rootCategory = path.join(root, "category");
    if (!fs.existsSync(docsCategory) && fs.existsSync(rootCategory)) {
        copyDir(rootCategory, docsCategory);
        console.log("Filled docs/category/ from repo root");
    }
}

function stashStaticOverlay(fromDir) {
    const stash = {
        dir: fs.mkdtempSync(path.join(os.tmpdir(), "tonolore-static-")),
        names: []
    };

    const overlayNames = ["data", "category", "robots.txt", "sitemap.xml"];
    for (const entry of fs.readdirSync(fromDir)) {
        if (/^sitemap-\d+\.xml$/i.test(entry)) {
            overlayNames.push(entry);
        }
    }

    for (const name of overlayNames) {
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
    for (const entry of fs.readdirSync(docs)) {
        if (!/^sitemap-\d+\.xml$/i.test(entry)) {
            continue;
        }
        fs.copyFileSync(path.join(docs, entry), path.join(root, entry));
    }
    for (const entry of fs.readdirSync(root)) {
        if (
            /^sitemap-\d+\.xml$/i.test(entry) &&
            !fs.existsSync(path.join(docs, entry))
        ) {
            fs.unlinkSync(path.join(root, entry));
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

    // Subject / hub SPA shells (one-piece/index.html, etc.)
    for (const entry of fs.readdirSync(docs, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            continue;
        }
        if (
            ["assets", "data", "category", "node_modules"].includes(entry.name)
        ) {
            continue;
        }
        const src = path.join(docs, entry.name);
        const dest = path.join(root, entry.name);
        if (!fs.existsSync(path.join(src, "index.html"))) {
            continue;
        }
        rmrf(dest);
        copyDir(src, dest);
    }
}

if (!fs.existsSync(path.join(dist, "index.html"))) {
    console.error(
        "Missing client/dist/index.html — run: cd client && npm run build"
    );
    process.exit(1);
}

const skipExport = process.argv.includes("--skip-export");
const skipShells = process.argv.includes("--skip-shells");
const envPath = path.join(root, ".env");
const hasDb =
    Boolean(process.env.DATABASE_URL) ||
    (fs.existsSync(envPath) &&
        fs.readFileSync(envPath, "utf8").includes("DATABASE_URL="));

ensureCatalogInDocs();
const stash = stashStaticOverlay(docs);
publishShell(docs, stash);
fs.writeFileSync(path.join(docs, ".nojekyll"), "");

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

const subjectsPath = path.join(docs, "data", "subjects.json");
if (!fs.existsSync(subjectsPath)) {
    console.error(
        "docs/data/subjects.json is missing after publish — home/search will hang on GitHub Pages."
    );
    process.exit(1);
}

// Keep search shards complete after export/publish (meta + /data/search/shards).
if (hasDb && !process.argv.includes("--skip-search-index")) {
    console.log("Rebuilding sharded search index…");
    const searchRebuild = spawnSync(
        process.execPath,
        [path.join(__dirname, "rebuildSearchIndex.js")],
        { stdio: "inherit", cwd: root, env: process.env }
    );
    if (searchRebuild.status !== 0) {
        console.error("Search index rebuild failed.");
        process.exit(searchRebuild.status || 1);
    }
}

const searchMetaPath = path.join(docs, "data", "search-index.json");
const searchShardDir = path.join(docs, "data", "search", "shards");
if (
    !fs.existsSync(searchMetaPath) ||
    !fs.existsSync(searchShardDir) ||
    fs.readdirSync(searchShardDir).filter((n) => n.endsWith(".json")).length < 1
) {
    console.error(
        "docs/data/search-index.json or search/shards missing — site search will fail on GitHub Pages."
    );
    process.exit(1);
}

if (!skipShells) {
    console.log("Writing SPA route shells…");
    const shells = spawnSync(
        process.execPath,
        [path.join(__dirname, "writeSpaRouteShells.js")],
        { stdio: "inherit", cwd: root, env: process.env }
    );
    if (shells.status !== 0) {
        console.error("SPA shell write failed.");
        process.exit(shells.status || 1);
    }

    console.log("Writing SEO-tagged page shells…");
    const seoShells = spawnSync(
        process.execPath,
        [path.join(__dirname, "writeSeoPageShells.js")],
        { stdio: "inherit", cwd: root, env: process.env }
    );
    if (seoShells.status !== 0) {
        console.error("SEO shell write failed.");
        process.exit(seoShells.status || 1);
    }
}

mirrorToRoot();
fs.writeFileSync(path.join(root, ".nojekyll"), "");
console.log("Mirrored docs/ → repo root for legacy Pages source=/");
