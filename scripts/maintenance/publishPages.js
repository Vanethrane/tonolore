/**
 * Copy client/dist → docs/ and repo root for GitHub Pages (www.tonolore.com).
 * Root copy is required while Pages source is branch `main` / folder `/`.
 *
 *   cd client && npm run build
 *   node scripts/maintenance/publishPages.js
 */

const fs = require("fs");
const path = require("path");

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

function publishTo(targetDir) {
    rmrf(targetDir);
    copyDir(dist, targetDir);
    fs.writeFileSync(path.join(targetDir, "CNAME"), "www.tonolore.com\n");
    fs.copyFileSync(
        path.join(targetDir, "index.html"),
        path.join(targetDir, "404.html")
    );
}

if (!fs.existsSync(path.join(dist, "index.html"))) {
    console.error(
        "Missing client/dist/index.html — run: cd client && npm run build"
    );
    process.exit(1);
}

publishTo(docs);

// Legacy Pages (main /) needs index.html at repo root.
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

console.log(
    "Published client/dist → docs/ and repo root (CNAME + 404.html SPA fallback)"
);