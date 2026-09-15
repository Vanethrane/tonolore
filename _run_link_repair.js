const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const root = process.cwd();
const reportPath = path.join(root, "_repair_report.json");
const logPath = path.join(root, "_repair_report.log");
function log(msg) {
  const line = "[" + new Date().toISOString() + "] " + msg;
  fs.appendFileSync(logPath, line + "\n");
  console.log(line);
}
function runNode(scriptRel) {
  log("RUN " + scriptRel);
  const r = spawnSync(process.execPath, [path.join(root, scriptRel)], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 50 * 1024 * 1024,
    env: process.env,
  });
  const out = ((r.stdout || "") + (r.stderr || "")).trim();
  if (out) log(out);
  log("EXIT " + scriptRel + " code=" + r.status);
  return { status: r.status, out };
}
function parseAuditJson(out) {
  const start = out.indexOf("{");
  const end = out.lastIndexOf("}");
  if (start < 0 || end < 0) return null;
  try { return JSON.parse(out.slice(start, end + 1)); } catch { return null; }
}
fs.writeFileSync(logPath, "");
log("START link repair pipeline");
const before = runNode("scripts/maintenance/auditBrokenLinksDry.js");
const beforeJson = parseAuditJson(before.out);
const dangling = runNode("scripts/maintenance/generateDanglingLinkPages.js");
const danglingOk = dangling.status === 0;
let exportRan = false;
let exportDoneLine = null;
const missingJson = beforeJson ? beforeJson.missingJson : null;
const missingShell = beforeJson ? beforeJson.missingShell : null;
if ((missingJson != null && missingJson > 0) || (missingShell != null && missingShell > 0)) {
  exportRan = true;
  const exp = runNode("scripts/maintenance/exportMissingStatic.js");
  const lines = exp.out.split(/\r?\n/);
  exportDoneLine = (lines.reverse().find((l) => /done/i.test(l)) || "").trim() || ("(exit=" + exp.status + ")");
}
const after = runNode("scripts/maintenance/auditBrokenLinksDry.js");
const afterJson = parseAuditJson(after.out);
const report = {
  before: beforeJson,
  beforeRaw: before.out.slice(0, 4000),
  danglingSucceeded: danglingOk,
  danglingOut: dangling.out.slice(0, 4000),
  exportRan: exportRan,
  exportDoneLine: exportDoneLine,
  after: afterJson,
  afterRaw: after.out.slice(0, 4000),
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
log("WROTE " + reportPath);
log("COMPLETE");
console.log(JSON.stringify(report, null, 2));
