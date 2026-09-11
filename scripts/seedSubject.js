/**
 * Seed any subject by folder name under scripts/subjects/.
 *
 * Always ensures rich multi-paragraph descriptions before insert
 * (Fandom lead → Wikipedia extract). Opt out with --skip-rich-intros.
 *
 *   node scripts/seedSubject.js one-piece
 *   node scripts/seedSubject.js star-wars
 *   node scripts/seedSubject.js berserk --skip-rich-intros
 */

const path = require("path");
const { seedSubject } = require("./lib/seedRunner");

const argv = process.argv.slice(2);
const subjectId = argv.find((arg) => !arg.startsWith("--"));
const skipRichIntros = argv.includes("--skip-rich-intros");
const richIntroLimit = (() => {
    const raw = argv.find((arg) => arg.startsWith("--rich-limit="));
    return raw ? Number(raw.slice("--rich-limit=".length)) || null : null;
})();

if (!subjectId) {
    console.error(
        "Usage: node scripts/seedSubject.js <subject-id> [--skip-rich-intros] [--rich-limit=N]"
    );
    process.exit(1);
}

let subject;

try {
    subject = require(path.join(__dirname, "subjects", subjectId));
} catch (error) {
    console.error(`Could not load subject "${subjectId}".`);
    console.error(`Expected: scripts/subjects/${subjectId}/index.js`);
    console.error(error.message);
    process.exit(1);
}

seedSubject(subject, { skipRichIntros, richIntroLimit }).catch((error) => {
    console.error(`${subject.name || subjectId} seed failed:`);
    console.error(error);
    process.exit(1);
});
