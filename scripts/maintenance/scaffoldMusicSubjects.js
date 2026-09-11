/**
 * Scaffold 24 music subject packages (8 genres × 3) from musicCatalog.js.
 *
 *   node scripts/maintenance/scaffoldMusicSubjects.js
 */

const fs = require("fs");
const path = require("path");
const {
    MUSIC_GENRES,
    allMusicSubjects
} = require("../subjects/musicCatalog");

const root = path.join(__dirname, "..", "..");
const subjectsDir = path.join(root, "scripts", "subjects");
const cssPath = path.join(root, "client", "src", "musicSubjectThemes.css");

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
 * ${subject.name} — ${subject.genreLabel} subject package.
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
        categories: ["music"],
        musicGenre: "${subject.genreId}",
        copyright: {
            title: "${subject.name} is not owned by Ton-o-Lore.",
            body:
                "${subject.name}, related names, logos, recordings, and imagery are the property of ${subject.rights}. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
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
 * Seed graph for ${subject.name} (${subject.genreLabel}).
 */

const entities = [
    {
        slug: "${subject.id}",
        name: "${subject.name}",
        type: "topic",
        short_description: ${JSON.stringify(subject.blurb)},
        description: ${JSON.stringify(
            `${subject.blurb} This Ton-o-Lore subject maps people, works, places, and ideas tied to ${subject.name} so readers can follow long-tail connections across the ${subject.genreLabel.toLowerCase()} tradition.`
        )}
    },
    {
        slug: "${subject.id}-catalog",
        name: "${subject.name} catalog",
        type: "topic",
        short_description: "Core recordings and works associated with ${subject.name}.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter ${subject.name} in the ${subject.genreLabel.toLowerCase()} tradition."
    },
    {
        slug: "${subject.id}-era",
        name: "${subject.name} eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the ${subject.name} story.",
        description:
            "Periodization helps encyclopedia readers track how ${subject.name} changed sound, lineup, or public myth across decades of ${subject.genreLabel.toLowerCase()} history."
    }
];

const relationships = [
    [
        "${subject.id}",
        "${subject.id}-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "${subject.id}",
        "${subject.id}-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
`;
}

function themeCss(subject) {
    const accent = subject.accent;
    return `
/* ---------- ${subject.name} (${subject.genreLabel}) ---------- */
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
for (const subject of allMusicSubjects()) {
    const dir = path.join(subjectsDir, subject.id);
    const indexOk = writeIfMissing(
        path.join(dir, "index.js"),
        packageIndex(subject)
    );
    const dataOk = writeIfMissing(path.join(dir, "data.js"), packageData(subject));
    if (indexOk || dataOk) {
        created += 1;
        console.log(`scaff subject.id}`);
    } else {
        console.log(`skip (exists) ${subject.id}`);
    }
}

fs.writeFileSync(
    cssPath,
    `/* Auto-scaffolded music subject themes — 8 genres × 3 subjects */\n${allMusicSubjects()
        .map(themeCss)
        .join("\n")}`
);
console.log(`Wrote ${cssPath}`);
console.log(
    `Music scaffold complete: ${allMusicSubjects().length} subjects across ${MUSIC_GENRES.length} genres (${created} new packages).`
);
