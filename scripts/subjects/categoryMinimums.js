/**
 * Ensure expansion categories reach a minimum subject count.
 * Applied in-memory when expansionCatalog loads; scaffold/registry see the fillers.
 */

const { EXPANSION_DEPTH_FILLERS } = require("./categoryDepthFillers");

// Legacy named fillers that predate the depth pack — keep so existing packages stay addressable.
const LEGACY_FILLERS = {
    mythology: [
        {
            id: "celtic-mythology",
            name: "Celtic mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#3a7a4a",
            blurb: "Tuatha Dé, Otherworld geography, and Insular cycles that feed modern fantasy language."
        },
        {
            id: "hindu-mythology",
            name: "Hindu mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#e07020",
            blurb: "Devas, avatars, epics, and cosmic cycles that structure South Asian sacred narrative."
        }
    ],
    horror: [
        {
            id: "dracula-lore",
            name: "Dracula lore",
            rights: "Public-domain Stoker text / respective modern rights holders",
            accent: "#8b0000",
            blurb: "Stoker's Count, adaptations, and the vampire template that still organizes horror bloodlines."
        },
        {
            id: "the-shining-lore",
            name: "The Shining",
            rights: "Warner Bros. / King estate / respective rights holders",
            accent: "#c45a2c",
            blurb: "Overlook Hotel, Torrance family, and adaptation variants of King's haunted isolation myth."
        }
    ],
    "western-animation": [
        {
            id: "spongebob-squarepants",
            name: "SpongeBob SquarePants",
            rights: "Nickelodeon / Paramount / respective rights holders",
            accent: "#f0d020",
            blurb: "Bikini Bottom characters, absurdist lore, and a kids' comedy that became enduring meme canon."
        },
        {
            id: "rick-and-morty",
            name: "Rick and Morty",
            rights: "Adult Swim / Warner Bros. / respective rights holders",
            accent: "#5ecf4a",
            blurb: "Multiverse family chaos, sci-fi parody arcs, and dense continuity jokes across seasons."
        }
    ],
    toys: [
        {
            id: "barbie",
            name: "Barbie",
            rights: "Mattel / respective rights holders",
            accent: "#e0459a",
            blurb: "Doll lines, careers, media worlds, and the fashion-toy mythology Mattel keeps expanding."
        },
        {
            id: "hot-wheels",
            name: "Hot Wheels",
            rights: "Mattel / respective rights holders",
            accent: "#e07020",
            blurb: "Die-cast cars, tracks, collector castings, and the racing fantasy attached to miniature metal."
        }
    ],
    wrestling: [
        {
            id: "wcw",
            name: "WCW",
            rights: "WWE / respective rights holders",
            accent: "#1a5a9a",
            blurb: "Monday Nitro, nWo, and the southern promotion that warred with WWF in the Attitude era."
        },
        {
            id: "ecw",
            name: "ECW",
            rights: "WWE / respective rights holders",
            accent: "#c8102e",
            blurb: "Hardcore wrestling, Philadelphia crowds, and the outlaw promotion absorbed into WWE lore."
        }
    ],
    culinary: [
        {
            id: "tea",
            name: "Tea",
            rights: "Public agricultural and trade history / respective brands and rights holders",
            accent: "#2d5a27",
            blurb: "Camellia sinensis, ceremonies, trade routes, and the drink cultures that organize daily ritual."
        },
        {
            id: "chocolate",
            name: "Chocolate",
            rights: "Public agricultural and trade history / respective brands and rights holders",
            accent: "#6f4e37",
            blurb: "Cacao origins, confectionery houses, and the sweet commodity that links Mesoamerica to global dessert lore."
        }
    ],
    transport: [
        {
            id: "motorcycle-history",
            name: "Motorcycle history",
            rights: "Public industrial history / respective manufacturers and rights holders",
            accent: "#8a2a2a",
            blurb: "Makes, racers, clubs, innovations, and the two-wheel culture that paralleled the automobile age."
        },
        {
            id: "steamship-history",
            name: "Steamship history",
            rights: "Public maritime and industrial history / respective companies and rights holders",
            accent: "#3a5a6a",
            blurb: "Ocean liners, packet ships, companies, routes, disasters, and the steam age that remade long-distance travel."
        }
    ],
    "built-environment": [
        {
            id: "skyscrapers",
            name: "Skyscrapers",
            rights: "Public architectural history / respective owners and rights holders",
            accent: "#5a6a7a",
            blurb: "Towers, architects, cities, height races, engineering feats, and the skyline lore of vertical cities."
        },
        {
            id: "bridges-engineering",
            name: "Bridges & civil engineering",
            rights: "Public engineering history / respective agencies and rights holders",
            accent: "#6a7a5a",
            blurb: "Spans, engineers, failures, rebuilds, and the crossings that reorganized cities and trade."
        },
        {
            id: "worlds-fairs",
            name: "World's fairs & expositions",
            rights: "Public historical record / respective organizers and rights holders",
            accent: "#c9a227",
            blurb: "Expositions, pavilions, inventions on display, cities remade for fairs, and the temporary architecture of spectacle."
        }
    ]
};

const CATEGORY_FILLERS = {};
for (const [categoryId, fillers] of Object.entries(EXPANSION_DEPTH_FILLERS)) {
    const legacy = LEGACY_FILLERS[categoryId] || [];
    const seen = new Set(fillers.map((row) => row.id));
    CATEGORY_FILLERS[categoryId] = [
        ...fillers,
        ...legacy.filter((row) => !seen.has(row.id))
    ];
}
for (const [categoryId, legacy] of Object.entries(LEGACY_FILLERS)) {
    if (!CATEGORY_FILLERS[categoryId]) {
        CATEGORY_FILLERS[categoryId] = legacy.slice();
    }
}

function applyCategoryMinimums(categories, minimum = 20) {
    for (const category of categories) {
        const fillers = CATEGORY_FILLERS[category.id] || [];
        const have = new Set(category.subjects.map((subject) => subject.id));
        for (const filler of fillers) {
            if (category.subjects.length >= minimum) {
                break;
            }
            if (have.has(filler.id)) {
                continue;
            }
            category.subjects.push(filler);
            have.add(filler.id);
        }
        if (category.subjects.length < minimum) {
            throw new Error(
                `Category ${category.id} still below ${minimum} subjects (${category.subjects.length}); add fillers.`
            );
        }
    }
    return categories;
}

module.exports = {
    CATEGORY_FILLERS,
    applyCategoryMinimums
};
