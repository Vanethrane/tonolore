/**
 * Scaffold expansion-category subject packages (15 categories × 3 subjects).
 *
 *   node scripts/maintenance/scaffoldExpansionSubjects.js
 */

const fs = require("fs");
const path = require("path");
const {
    allExpansionSubjects
} = require("../subjects/expansionCatalog");

const root = path.join(__dirname, "..", "..");
const subjectsDir = path.join(root, "scripts", "subjects");
const cssPath = path.join(root, "client", "src", "expansionSubjectThemes.css");

function writeIfMissing(filePath, contents) {
    if (fs.existsSync(filePath)) {
        return false;
    }
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, contents);
    return true;
}

function packageIndex(subject) {
    return `/**
 * ${subject.name} — ${subject.categoryLabel} subject package.
 */

const path = require("path");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "${subject.id}",
        name: "${subject.name}",
        rootSlug: "${subject.id}",
        theme: "${subject.id}",
        categories: ["${subject.categoryId}"],
        copyright: {
            title: "${subject.name} is not owned by Ton-o-Lore.",
            body:
                "${subject.name}, related names, marks, and materials are the property of ${subject.rights}. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "${subject.id}": ["${subject.name}"]
    },
    parents: {}
});
`;
}

function packageData(subject) {
    return `/**
 * Seed graph for ${subject.name} (${subject.categoryLabel}).
 */

const entities = [
    {
        slug: "${subject.id}",
        name: "${subject.name}",
        type: "topic",
        short_description: ${JSON.stringify(subject.blurb)},
        description: ${JSON.stringify(
            `${subject.blurb} This Ton-o-Lore subject maps people, places, events, and ideas tied to ${subject.name} so readers can follow long-tail connections across ${subject.categoryLabel.toLowerCase()}.`
        )}
    },
    {
        slug: "${subject.id}-figures",
        name: "${subject.name} figures",
        type: "topic",
        short_description: "People, characters, and named forces central to ${subject.name}.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring ${subject.name}."
    },
    {
        slug: "${subject.id}-world",
        name: "${subject.name} world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame ${subject.name}.",
        description:
            "Geography, institutions, and periodization that give ${subject.name} its encyclopedia shape."
    }
];

const relationships = [
    [
        "${subject.id}",
        "${subject.id}-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "${subject.id}",
        "${subject.id}-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
`;
}

function themeCss(subject) {
    const accent = subject.accent || "#3db8a0";
    return `
/* ---------- ${subject.name} ---------- */
.theme-${subject.id} {
    --accent: ${accent};
    --accent-soft: color-mix(in srgb, ${accent} 18%, transparent);
    --warm: #e0c878;
    background:
        radial-gradient(ellipse 45% 35% at 12% -5%, color-mix(in srgb, ${accent} 22%, transparent), transparent 55%),
        linear-gradient(180deg, #141018 0%, #0c0a10 60%, #08060a 100%);
}
.theme-${subject.id} .hero h1 { color: #f2efe8; }
.theme-${subject.id} .eyebrow,
.theme-${subject.id} .connection-type { color: ${accent}; }
.theme-${subject.id} .follow,
.theme-${subject.id} .content a,
.theme-${subject.id} .entity-link { color: ${accent}; }
.subject-card.theme-preview-${subject.id} {
    border-color: color-mix(in srgb, ${accent} 42%, transparent);
    background: linear-gradient(155deg, color-mix(in srgb, ${accent} 12%, #121018), #0a0a0e);
}
.subject-card.theme-preview-${subject.id} .connection-type,
.subject-card.theme-preview-${subject.id} .follow { color: ${accent}; }
`;
}

let created = 0;
const cssChunks = ["/* Expansion category subject themes */\n"];

for (const subject of allExpansionSubjects()) {
    const dir = path.join(subjectsDir, subject.id);
    if (writeIfMissing(path.join(dir, "index.js"), packageIndex(subject))) {
        created += 1;
    }
    writeIfMissing(path.join(dir, "data.js"), packageData(subject));
    cssChunks.push(themeCss(subject));
}

fs.writeFileSync(cssPath, cssChunks.join("\n"));
console.log(
    `Scaffolded ${created} new packages (${allExpansionSubjects().length} total). Wrote ${path.relative(root, cssPath)}`
);
