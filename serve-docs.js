const fs = require("fs");
const http = require("http");
const path = require("path");
const { spawnSync } = require("child_process");

const root = __dirname;
const docsDir = path.join(root, "docs");
const defaultPort = Number(process.env.PORT || 4173);
const requestedPort = Number(process.argv[2] || defaultPort);
const port = Number.isFinite(requestedPort) && requestedPort > 0 ? requestedPort : defaultPort;

function log(message) {
  console.log(`[docs-preview] ${message}`);
}

function runExport() {
  log("Refreshing static docs from the database…");
  const result = spawnSync(
    process.execPath,
    [path.join(root, "scripts", "maintenance", "exportStaticSite.js"), "--html"],
    {
      cwd: root,
      stdio: "inherit",
      env: process.env,
    }
  );

  if (result.status !== 0) {
    console.error("Static export failed.");
    process.exit(result.status || 1);
  }
}

function mimeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
  };
  return map[ext] || "application/octet-stream";
}

function safeJoin(base, requestPath) {
  const normalized = requestPath.replace(/\\/g, "/");
  const safePath = path.posix.normalize(normalized).replace(/^\.\.?/, "");
  return path.join(base, safePath);
}

function serveStatic(req, res) {
  try {
    const urlPath = req.url.split("?")[0] || "/";
    const requestPath = urlPath === "/" ? "/index.html" : urlPath;
    const diskPath = safeJoin(docsDir, requestPath);

    if (!diskPath.startsWith(docsDir)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    if (!fs.existsSync(diskPath) || fs.statSync(diskPath).isDirectory()) {
      const fallback = path.join(docsDir, "index.html");
      if (fs.existsSync(fallback)) {
        const html = fs.readFileSync(fallback);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(html);
        return;
      }

      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const contents = fs.readFileSync(diskPath);
    res.writeHead(200, { "Content-Type": mimeFor(diskPath) });
    res.end(contents);
  } catch (error) {
    console.error(error);
    res.writeHead(500);
    res.end("Server error");
  }
}

if (!fs.existsSync(docsDir) || !fs.existsSync(path.join(docsDir, "index.html"))) {
  runExport();
} else {
  log("Using existing docs snapshot.");
}

const server = http.createServer(serveStatic);
server.listen(port, () => {
  log(`Static site is live at http://localhost:${port}/`);
  log(`Serving files from ${docsDir}`);
});

process.on("SIGINT", () => {
  log("Stopping docs preview server");
  server.close(() => process.exit(0));
});
