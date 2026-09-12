/**
 * Scaffold sports subject packages (8 sports × 5 subjects) from sportsCatalog.js.
 * Each subject ships with at least 5 lore entries (root + 4 trailheads).
 *
 *   node scripts/maintenance/scaffoldSportsSubjects.js
 */

const fs = require("fs");
const path = require("path");
const { allSportsSubjects } = require("../subjects/sportsCatalog");

const root = path.join(__dirname, "..", "..");
const subjectsDir = path.join(root, "scripts", "subjects");
const cssPath = path.join(root, "client", "src", "sportsSubjectThemes.css");

function writeIfMissing(filePath, contents) {
    if (fs.existsSync(filePath)) {
        return false;
    }
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, contents);
    return true;
}

function overwrite(filePath, contents) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, contents);
}

function packageIndex(subject) {
    return `/**
 * ${subject.name} — ${subject.sportLabel} subject package.
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
        categories: ["sports"],
        sportsSport: "${subject.sportId}",
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
    const id = subject.id;
    const name = subject.name;
    const sport = subject.sportLabel;
    return `/**
 * Seed graph for ${name} (${sport}).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "${id}",
        name: ${JSON.stringify(name)},
        type: "topic",
        short_description: ${JSON.stringify(subject.blurb)},
        description: ${JSON.stringify(
            `${subject.blurb} This Ton-o-Lore subject maps people, places, events, and ideas tied to ${name} so readers can follow long-tail connections across ${sport.toLowerCase()}.`
        )}
    },
    {
        slug: "${id}-figures",
        name: ${JSON.stringify(`${name} figures`)},
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to ${name}.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring ${name}."
    },
    {
        slug: "${id}-teams",
        name: ${JSON.stringify(`${name} teams & clubs`)},
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to ${name}.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around ${name}."
    },
    {
        slug: "${id}-venues",
        name: ${JSON.stringify(`${name} venues`)},
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host ${name}.",
        description:
            "Places where ${name} is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "${id}-events",
        name: ${JSON.stringify(`${name} events`)},
        type: "event",
        short_description: "Seasons, finals, and landmark moments in ${name}.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about ${name}."
    },
    {
        slug: "${id}-rules",
        name: ${JSON.stringify(`${name} rules & format`)},
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for ${name}.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make ${name} legible as a sport."
    }
];

const relationships = [
    [
        "${id}",
        "${id}-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "${id}",
        "${id}-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "${id}",
        "${id}-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "${id}",
        "${id}-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "${id}",
        "${id}-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "${id}-figures",
        "${id}-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "${id}-events",
        "${id}-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
`;
}

function themeCss(subject) {
    const accent = subject.accent || "#2ecc71";
    return `
/* ---------- ${subject.name} (${subject.sportLabel}) ---------- */
.theme-${subject.id} {
    --accent: ${accent};
    --accent-soft: color-mix(in srgb, ${accent} 18%, transparent);
    --warm: #e0c878;
    background:
        radial-gradient(ellipse 45% 35% at 12% -5%, color-mix(in srgb, ${accent} 22%, transparent), transparent 55%),
        linear-gradient(180deg, #101814 0%, #0a100c 60%, #060a08 100%);
}
.theme-${subject.id} .hero h1 { color: #f2efe8; }
.theme-${subject.id} .eyebrow,
.theme-${subject.id} .connection-type { color: ${accent}; }
.theme-${subject.id} .follow,
.theme-${subject.id} .content a,
.theme-${subject.id} .entity-link { color: ${accent}; }
.subject-card.theme-preview-${subject.id} {
    border-color: color-mix(in srgb, ${accent} 42%, transparent);
    background: linear-gradient(155deg, color-mix(in srgb, ${accent} 12%, #101814), #0a0e0c);
}
.subject-card.theme-preview-${subject.id} .connection-type,
.subject-card.theme-preview-${subject.id} .follow { color: ${accent}; }
`;
}

let created = 0;
let refreshed = 0;
const cssChunks = [];

for (const subject of allSportsSubjects()) {
    const dir = path.join(subjectsDir, subject.id);
    const indexPath = path.join(dir, "index.js");
    const dataPath = path.join(dir, "data.js");

    if (!fs.existsSync(indexPath)) {
        writeIfMissing(indexPath, packageIndex(subject));
        overwrite(dataPath, packageData(subject));
        created += 1;
        console.log(`created ${subject.id}`);
    } else {
        // Ensure sports meta + at least 5-entry graph for existing packages.
        overwrite(indexPath, packageIndex(subject));
        overwrite(dataPath, packageData(subject));
        refreshed += 1;
        console.log(`refreshed ${subject.id}`);
    }
    cssChunks.push(themeCss(subject));
}

fs.writeFileSync(
    cssPath,
    `/* Auto-generated sports subject themes — do not hand-edit bulk blocks. */\n${cssChunks.join(
        "\n"
    )}`
);

console.log(
    `Sports scaffold done. created=${created} refreshed=${refreshed} themes=${cssPath}`
);
