/**
 * Scaffold new card-game + board-game subject packages.
 *   node scripts/maintenance/scaffoldTabletopCardSubjects.js
 */

const fs = require("fs");
const path = require("path");
const {
    newCardGameSubjects,
    BOARD_GAME_SUBJECTS
} = require("../subjects/tabletopCardCatalog");

const root = path.join(__dirname, "..", "..");
const subjectsDir = path.join(root, "scripts", "subjects");
const cssPath = path.join(root, "client", "src", "tabletopCardThemes.css");

function writeIfMissing(filePath, contents) {
    if (fs.existsSync(filePath)) {
        return false;
    }
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, contents);
    return true;
}

function packageIndex(subject, categories) {
    return `/**
 * ${subject.name} subject package.
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
        categories: ${JSON.stringify(categories)},
        copyright: {
            title: "${subject.name} is not owned by Ton-o-Lore.",
            body:
                "${subject.name}, related names, logos, and game materials are the property of ${subject.rights}. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
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

function packageData(subject, kindLabel) {
    return `/**
 * Seed graph for ${subject.name} (${kindLabel}).
 */

const entities = [
    {
        slug: "${subject.id}",
        name: "${subject.name}",
        type: "topic",
        short_description: ${JSON.stringify(subject.blurb)},
        description: ${JSON.stringify(
            `${subject.blurb} This Ton-o-Lore subject maps people, places, products, and ideas tied to ${subject.name} so readers can follow long-tail connections across the ${kindLabel} hobby.`
        )}
    },
    {
        slug: "${subject.id}-rules",
        name: "${subject.name} rules & formats",
        type: "topic",
        short_description: "How ${subject.name} is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in ${subject.name}."
    },
    {
        slug: "${subject.id}-setting",
        name: "${subject.name} setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor ${subject.name}.",
        description:
            "The narrative frame around ${subject.name} — factions, places, and story hooks that make the table feel like a world."
    }
];

const relationships = [
    [
        "${subject.id}",
        "${subject.id}-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "${subject.id}",
        "${subject.id}-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
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

const toCreate = [
    ...newCardGameSubjects().map((s) => ({ ...s, cats: ["card-games"], kind: "card game" })),
    ...BOARD_GAME_SUBJECTS.map((s) => ({ ...s, cats: ["tabletop"], kind: "board game" }))
];

let created = 0;
const cssChunks = [];

for (const subject of toCreate) {
    const dir = path.join(subjectsDir, subject.id);
    const indexOk = writeIfMissing(
        path.join(dir, "index.js"),
        packageIndex(subject, subject.cats)
    );
    const dataOk = writeIfMissing(
        path.join(dir, "data.js"),
        packageData(subject, subject.kind)
    );
    cssChunks.push(themeCss(subject));
    if (indexOk || dataOk) {
        created += 1;
        console.log(`+ ${subject.id}`);
    } else {
        console.log(`= ${subject.id}`);
    }
}

fs.writeFileSync(
    cssPath,
    `/* Card game + board game subject themes */\n${cssChunks.join("\n")}`
);
console.log(`Wrote ${cssPath}`);
console.log(`Scaffolded ${created} new packages (${toCreate.length} total).`);
