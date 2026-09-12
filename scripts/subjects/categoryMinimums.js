/**
 * Ensure expansion (and similar) categories reach a minimum subject count.
 * Applied in-memory when expansionCatalog loads; scaffold/registry see the fillers.
 */

const CATEGORY_FILLERS = {
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
            accent: "#8b1a1a",
            blurb: "Hardcore Philadelphia wrestling, cult personas, and the extreme style that remapped 1990s indie myth."
        }
    ],
    "science-nature": [
        {
            id: "space-race",
            name: "Space Race",
            rights: "Public historical record / respective agencies and rights holders",
            accent: "#5b9cff",
            blurb: "Sputnik to Apollo — nations, rockets, crews, and the Cold War contest for orbital prestige."
        },
        {
            id: "volcanoes",
            name: "Volcanoes",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#c45a2c",
            blurb: "Eruptions, volcano types, famous peaks, and the geology that remakes landscapes overnight."
        }
    ],
    podcasts: [
        {
            id: "this-american-life",
            name: "This American Life",
            rights: "This American Life / WBEZ / respective rights holders",
            accent: "#e8c14a",
            blurb: "Theme-driven radio stories, Ira Glass's framing, and the template for narrative podcasting."
        },
        {
            id: "lore-podcast",
            name: "Lore (podcast)",
            rights: "Aaron Mahnke / respective rights holders",
            accent: "#6a4a7a",
            blurb: "Historical horror folklore episodes that bridge true oddities and campfire dread."
        }
    ],
    "internet-culture": [
        {
            id: "reddit",
            name: "Reddit",
            rights: "Reddit, Inc. / respective rights holders",
            accent: "#ff4500",
            blurb: "Subreddits, AMAs, upvote culture, and the forum graph that midwifed a decade of memes."
        },
        {
            id: "tiktok",
            name: "TikTok",
            rights: "ByteDance / respective rights holders",
            accent: "#00f2ea",
            blurb: "Short-form trends, sounds, creators, and the algorithmic folklore of the 2020s feed."
        }
    ],
    theater: [
        {
            id: "opera",
            name: "Opera",
            rights: "Public-domain repertoire / respective houses and rights holders",
            accent: "#c9a227",
            blurb: "Composers, houses, roles, and the sung drama tradition that still defines prestige stages."
        },
        {
            id: "greek-tragedy",
            name: "Greek tragedy",
            rights: "Public-domain classical tradition / respective modern rights holders",
            accent: "#8a6a3a",
            blurb: "Aeschylus, Sophocles, Euripides — choruses, fate, and the civic theater of Athens."
        }
    ],
    "fighting-games": [
        {
            id: "soulcalibur",
            name: "Soulcalibur",
            rights: "Bandai Namco / respective rights holders",
            accent: "#5b7cff",
            blurb: "Weapons fighters, Soul Edge mythology, and 3D arena combat lineages from Namco."
        },
        {
            id: "guilty-gear",
            name: "Guilty Gear",
            rights: "Arc System Works / respective rights holders",
            accent: "#e0456a",
            blurb: "Anime fighters, Gears lore, and the stylish 2D tradition Arc System keeps escalating."
        }
    ],
    "sci-fi": [
        {
            id: "babylon-5",
            name: "Babylon 5",
            rights: "Warner Bros. / respective rights holders",
            accent: "#5b9cff",
            blurb: "Five-year novel-for-TV space station politics, wars, and serialized myth-arc SF."
        },
        {
            id: "the-matrix",
            name: "The Matrix",
            rights: "Warner Bros. / respective rights holders",
            accent: "#3dbb2e",
            blurb: "Simulation philosophy, Zion, Agents, and the late-90s cyber-myth that remade action SF."
        }
    ],
    folklore: [
        {
            id: "beowulf",
            name: "Beowulf",
            rights: "Public-domain epic / respective modern adaptations and rights holders",
            accent: "#5a6a4a",
            blurb: "Geats, Grendel, dragons, and the Old English epic that anchors Northern heroic lore."
        }
    ],
    maritime: [
        {
            id: "whaling-history",
            name: "Whaling history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2a5a6a",
            blurb: "Whaleships, ports, crews, species, and the maritime industry that shaped coastal economies and myth."
        }
    ],
    crime: [
        {
            id: "prohibition-era",
            name: "Prohibition era",
            rights: "Public historical record / respective modern rights holders",
            accent: "#4a3a2a",
            blurb: "Speakeasies, bootleggers, G-men, and the dry-law underworld of 1920s America."
        },
        {
            id: "drug-cartels",
            name: "Drug cartels",
            rights: "Public historical and legal record / respective rights holders",
            accent: "#5a2a1a",
            blurb: "Organizations, routes, kingpins, and the transnational crime networks mapped in modern history."
        }
    ],
    military: [
        {
            id: "napoleonic-wars",
            name: "Napoleonic Wars",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a6a48",
            blurb: "Coalitions, battles, marshals, and the reshaping of Europe under Napoleon."
        },
        {
            id: "vietnam-war",
            name: "Vietnam War",
            rights: "Public historical record / respective modern rights holders",
            accent: "#4a5a3a",
            blurb: "Indochina conflict — forces, operations, politics, and the people caught in a long proxy war."
        }
    ],
    occult: [
        {
            id: "astrology-history",
            name: "Astrology history",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#6a4a8a",
            blurb: "Charts, houses, historical practitioners, and the sky-language that crossed courts and cultures."
        },
        {
            id: "demonology",
            name: "Demonology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#3a1a4a",
            blurb: "Grimoires, named spirits, classifications, and the scholarly-occult catalogs of demons."
        }
    ],
    royalty: [
        {
            id: "french-monarchy",
            name: "French monarchy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a8a",
            blurb: "Capetians to Bourbons — courts, revolutions, and the crown that defined continental kingship."
        },
        {
            id: "russian-romanovs",
            name: "Russian Romanovs",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8b1a1a",
            blurb: "Tsars, courts, Rasputin lore, revolution, and the dynasty that ended in 1918."
        },
        {
            id: "japanese-imperial-house",
            name: "Japanese imperial house",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Emperors, eras, Shinto court ritual, and the world's longest continuous monarchy tradition."
        }
    ],
    religion: [
        {
            id: "christianity-history",
            name: "Christianity history",
            rights: "Public historical and theological record / respective churches and rights holders",
            accent: "#8a7a4a",
            blurb: "Apostles, councils, denominations, saints, and the institutional spread of Christian tradition."
        },
        {
            id: "islam-history",
            name: "Islam history",
            rights: "Public historical and theological record / respective communities and rights holders",
            accent: "#2d5a27",
            blurb: "Prophetic origins, caliphates, schools, and the geographic expansion of Islamic civilization."
        },
        {
            id: "buddhism-history",
            name: "Buddhism history",
            rights: "Public historical and theological record / respective sanghas and rights holders",
            accent: "#c9a227",
            blurb: "Buddha, schools, transmission routes, and the practice lineages across Asia and the world."
        }
    ],
    disasters: [
        {
            id: "pompeii",
            name: "Pompeii",
            rights: "Public archaeological and historical record / respective institutions and rights holders",
            accent: "#c45a2c",
            blurb: "Vesuvius, buried cities, casts, and the Roman disaster that froze daily life in ash."
        },
        {
            id: "chernobyl",
            name: "Chernobyl",
            rights: "Public historical record / respective agencies and rights holders",
            accent: "#6a8a40",
            blurb: "Reactor disaster, exclusion zone, liquidators, and the nuclear accident that remapped risk lore."
        },
        {
            id: "black-death",
            name: "Black Death",
            rights: "Public historical and medical record / respective modern rights holders",
            accent: "#4a3a2a",
            blurb: "Plague waves, mortality, social upheaval, and the medieval pandemic that remade Europe."
        },
        {
            id: "hurricane-katrina",
            name: "Hurricane Katrina",
            rights: "Public historical record / respective agencies and rights holders",
            accent: "#1a5a7a",
            blurb: "Storm, levees, New Orleans, diaspora, and the 2005 catastrophe that exposed governance fault lines."
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
    ]
};

function applyCategoryMinimums(categories, minimum = 5) {
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
