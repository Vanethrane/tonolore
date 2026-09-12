/**
 * Extra home-page categories (beyond the core media shelves).
 * Each category ships with exactly 3 starter subjects.
 */

const EXPANSION_CATEGORIES = [
    {
        id: "mythology",
        label: "Mythology",
        blurb: "Gods, heroes, and cosmologies that still structure modern storytelling.",
        accent: "#c9a227",
        subjects: [
            {
                id: "greek-mythology",
                name: "Greek mythology",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#d4b45a",
                blurb: "Olympians, heroes, and underworld geography that seeded Western fantasy language."
            },
            {
                id: "norse-mythology",
                name: "Norse mythology",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#6a8cff",
                blurb: "Aesir, giants, and Ragnarök cycles mapped from the Eddas into modern pop myth."
            },
            {
                id: "egyptian-mythology",
                name: "Egyptian mythology",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#e0a020",
                blurb: "Netjeru, afterlife courts, and Nile cosmology that keep returning in fiction and ritual study."
            }
        ]
    },
    {
        id: "history",
        label: "History",
        blurb: "Empires, wars, and trade routes with dense people-and-place graphs.",
        accent: "#b87333",
        subjects: [
            {
                id: "ancient-rome",
                name: "Ancient Rome",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#c45a3a",
                blurb: "Republic to empire — senators, legions, and cities that still organize civic myth."
            },
            {
                id: "world-war-ii",
                name: "World War II",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#5a6a48",
                blurb: "Theatres, alliances, and technologies of the mid-20th-century global war."
            },
            {
                id: "silk-road",
                name: "Silk Road",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#c9a05a",
                blurb: "Overland and maritime corridors that moved goods, faiths, and stories across Eurasia."
            }
        ]
    },
    {
        id: "horror",
        label: "Horror",
        blurb: "Monsters, slashers, and dread franchises built to haunt the culture.",
        accent: "#8b1a1a",
        subjects: [
            {
                id: "halloween-franchise",
                name: "Halloween",
                rights: "Trancas / Miramax / Universal / respective rights holders",
                accent: "#ff6a00",
                blurb: "Michael Myers and Haddonfield — the slasher calendar's most durable myth."
            },
            {
                id: "alien-franchise",
                name: "Alien",
                rights: "20th Century Studios / Disney / respective rights holders",
                accent: "#4a7a3a",
                blurb: "Xenomorphs, Weyland-Yutani, and space-horror design that redefined the genre."
            },
            {
                id: "the-exorcist",
                name: "The Exorcist",
                rights: "Warner Bros. / respective rights holders",
                accent: "#6a4a2a",
                blurb: "Possession cinema and Catholic dread that still set the possession-horror template."
            }
        ]
    },
    {
        id: "western-animation",
        label: "Western animation",
        blurb: "Studios and series outside Japanese anime with deep character maps.",
        accent: "#5b9cff",
        subjects: [
            {
                id: "avatar-the-last-airbender",
                name: "Avatar: The Last Airbender",
                rights: "Nickelodeon / Paramount / respective rights holders",
                accent: "#e07020",
                blurb: "Bending nations, Avatars, and a coming-of-age war story that became a modern classic."
            },
            {
                id: "adventure-time",
                name: "Adventure Time",
                rights: "Cartoon Network / Warner Bros. / respective rights holders",
                accent: "#5ec4d8",
                blurb: "Ooo's post-apocalyptic candy kingdoms and emotional lore across a sprawling series."
            },
            {
                id: "pixar",
                name: "Pixar",
                rights: "Pixar / Disney / respective rights holders",
                accent: "#00a8e8",
                blurb: "Studio storytelling worlds — toys, monsters, cars, and emotional architecture in CGI."
            }
        ]
    },
    {
        id: "toys",
        label: "Toys & collectibles",
        blurb: "Play lines and collectible myths that spilled into media empires.",
        accent: "#e0456a",
        subjects: [
            {
                id: "lego",
                name: "LEGO",
                rights: "The LEGO Group / respective rights holders",
                accent: "#e8c14a",
                blurb: "Brick systems, themes, and licensed worlds built from modular plastic canon."
            },
            {
                id: "gi-joe",
                name: "G.I. Joe",
                rights: "Hasbro / respective rights holders",
                accent: "#3a6a3a",
                blurb: "A Real American Hero — factions, file cards, and toy-to-cartoon lore."
            },
            {
                id: "my-little-pony",
                name: "My Little Pony",
                rights: "Hasbro / respective rights holders",
                accent: "#d48cff",
                blurb: "Ponies, friendship magic, and generations of collectible-driven storytelling."
            }
        ]
    },
    {
        id: "wrestling",
        label: "Pro wrestling",
        blurb: "Promotions, personas, and kayfabe histories told as living soap opera.",
        accent: "#e03535",
        subjects: [
            {
                id: "wwe",
                name: "WWE",
                rights: "WWE / TKO / respective rights holders",
                accent: "#d4af37",
                blurb: "Sports entertainment's global promotion — titles, brands, and decades of character lore."
            },
            {
                id: "aew",
                name: "AEW",
                rights: "All Elite Wrestling / respective rights holders",
                accent: "#c4a000",
                blurb: "All Elite Wrestling — factions, PPV mythmaking, and the modern U.S. alternative."
            },
            {
                id: "njpw",
                name: "NJPW",
                rights: "New Japan Pro-Wrestling / Bushiroad / respective rights holders",
                accent: "#c8102e",
                blurb: "New Japan's strong style — IWGP lineages, factions, and international crossovers."
            }
        ]
    },
    {
        id: "science-nature",
        label: "Science & nature",
        blurb: "Discoveries, expeditions, and natural histories with encyclopedia depth.",
        accent: "#3db8a0",
        subjects: [
            {
                id: "nasa",
                name: "NASA",
                rights: "NASA / U.S. government works / respective partners",
                accent: "#0b3d91",
                blurb: "Missions, centers, and spacecraft that map the public story of U.S. spaceflight."
            },
            {
                id: "dinosaurs",
                name: "Dinosaurs",
                rights: "Public-domain paleontology / respective museums and rights holders",
                accent: "#6a8a3a",
                blurb: "Clades, formations, and discoveries that keep rewriting deep-time life."
            },
            {
                id: "oceanography",
                name: "Oceanography",
                rights: "Public-domain science / respective institutions and rights holders",
                accent: "#1a6a8a",
                blurb: "Currents, trenches, and vessels that chart the planet's connected seas."
            }
        ]
    },
    {
        id: "podcasts",
        label: "Podcasts & audio",
        blurb: "Serialized audio worlds — fiction, actual play, and documentary myth.",
        accent: "#9b59b6",
        subjects: [
            {
                id: "critical-role",
                name: "Critical Role",
                rights: "Critical Role / respective rights holders",
                accent: "#a020f0",
                blurb: "Actual-play campaigns that became a multimedia fantasy franchise."
            },
            {
                id: "welcome-to-night-vale",
                name: "Welcome to Night Vale",
                rights: "Night Vale Presents / respective rights holders",
                accent: "#5a3a8a",
                blurb: "A desert community radio fiction of conspiracies, angels, and small-town weird."
            },
            {
                id: "serial-podcast",
                name: "Serial",
                rights: "Serial Productions / New York Times / respective rights holders",
                accent: "#c45a2c",
                blurb: "The investigative podcast that remapped true-crime audio storytelling."
            }
        ]
    },
    {
        id: "internet-culture",
        label: "Internet culture",
        blurb: "Platforms, memes, and online commons that became modern folklore.",
        accent: "#3498db",
        subjects: [
            {
                id: "wikipedia",
                name: "Wikipedia",
                rights: "Wikimedia Foundation / contributors (CC licenses)",
                accent: "#eaecf0",
                blurb: "The collaborative encyclopedia — policies, projects, and knowledge-graph culture."
            },
            {
                id: "youtube",
                name: "YouTube",
                rights: "Google / YouTube / respective creators and rights holders",
                accent: "#ff0000",
                blurb: "Creator economies, genres, and platform lore from vlogs to algorithmic fame."
            },
            {
                id: "meme-history",
                name: "Meme history",
                rights: "Public internet culture / respective creators and platforms",
                accent: "#f0a020",
                blurb: "Image macros, copypasta, and viral forms tracked as vernacular folklore."
            }
        ]
    },
    {
        id: "theater",
        label: "Theater & musicals",
        blurb: "Stages, scores, and dramatic canons that travel from page to performance.",
        accent: "#e8c14a",
        subjects: [
            {
                id: "shakespeare",
                name: "Shakespeare",
                rights: "Public-domain works / respective modern productions and rights holders",
                accent: "#c9a227",
                blurb: "Plays, characters, and performance traditions around William Shakespeare's canon."
            },
            {
                id: "broadway",
                name: "Broadway",
                rights: "Respective producers, leagues, and rights holders",
                accent: "#e03570",
                blurb: "New York's commercial theatre district — houses, hits, and industry lore."
            },
            {
                id: "hamilton",
                name: "Hamilton",
                rights: "Lin-Manuel Miranda / respective producers and rights holders",
                accent: "#3a5a40",
                blurb: "The hip-hop history musical that remixed Founding-era biography for the stage."
            }
        ]
    },
    {
        id: "fighting-games",
        label: "Fighting games",
        blurb: "Competitive fighters with deep cast lore and tournament culture.",
        accent: "#e07020",
        subjects: [
            {
                id: "street-fighter",
                name: "Street Fighter",
                rights: "Capcom / respective rights holders",
                accent: "#e8a020",
                blurb: "World warriors, combos, and Capcom's flagship fighting-game universe."
            },
            {
                id: "mortal-kombat",
                name: "Mortal Kombat",
                rights: "NetherRealm / Warner Bros. / respective rights holders",
                accent: "#8b0000",
                blurb: "Outworld tournaments, fatalities, and decades of multiverse reboot lore."
            },
            {
                id: "tekken",
                name: "Tekken",
                rights: "Bandai Namco / respective rights holders",
                accent: "#c8102e",
                blurb: "The King of Iron Fist Tournament — Mishima drama and 3D fighter mythology."
            }
        ]
    },
    {
        id: "sci-fi",
        label: "Science fiction",
        blurb: "Futures, first contacts, and speculative franchises beyond a single medium.",
        accent: "#5b7cff",
        subjects: [
            {
                id: "star-trek",
                name: "Star Trek",
                rights: "Paramount / CBS / respective rights holders",
                accent: "#5b9cff",
                blurb: "Federation ideals, ships, and series that defined optimistic space opera on screen."
            },
            {
                id: "blade-runner",
                name: "Blade Runner",
                rights: "Warner Bros. / Alcon / respective rights holders",
                accent: "#c45a2c",
                blurb: "Replicants, neon noir, and Philip K. Dick-rooted futures of memory and personhood."
            },
            {
                id: "foundation-series",
                name: "Foundation",
                rights: "Estate of Isaac Asimov / Apple / respective rights holders",
                accent: "#6a4cff",
                blurb: "Psychohistory, empires, and Asimov's long-arc future history across books and screen."
            }
        ]
    },
    {
        id: "folklore",
        label: "Folklore & legend",
        blurb: "Folk heroes and cycle tales that keep getting retold across media.",
        accent: "#6a8a4a",
        subjects: [
            {
                id: "arthurian-legend",
                name: "Arthurian legend",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#5a7a9a",
                blurb: "Camelot, the Round Table, and Grail quests across medieval and modern retellings."
            },
            {
                id: "robin-hood",
                name: "Robin Hood",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#2d5a27",
                blurb: "Sherwood outlawry, merry men, and redistribution myths in English folklore."
            },
            {
                id: "journey-to-the-west",
                name: "Journey to the West",
                rights: "Public-domain classic / respective modern adaptations and rights holders",
                accent: "#c43030",
                blurb: "Sun Wukong's pilgrimage epic — demons, disciples, and East Asian adventure canon."
            }
        ]
    },
    {
        id: "culinary",
        label: "Food & drink",
        blurb: "Cuisines, staples, and drink cultures with geographic and craft lore.",
        accent: "#e07040",
        subjects: [
            {
                id: "coffee",
                name: "Coffee",
                rights: "Public agricultural and trade history / respective brands and rights holders",
                accent: "#6f4e37",
                blurb: "Beans, brewing traditions, and café cultures from origin to specialty."
            },
            {
                id: "sushi",
                name: "Sushi",
                rights: "Japanese culinary tradition / respective chefs and rights holders",
                accent: "#e8e4db",
                blurb: "Vinegared rice cuisine — regional styles, craft lineages, and global adaptation."
            },
            {
                id: "wine",
                name: "Wine",
                rights: "Public viticultural tradition / respective estates and rights holders",
                accent: "#722f37",
                blurb: "Terroir, appellations, and tasting cultures that organize wine as living geography."
            }
        ]
    }
];

function expansionSubjectIds() {
    return EXPANSION_CATEGORIES.flatMap((category) =>
        category.subjects.map((subject) => subject.id)
    );
}

function allExpansionSubjects() {
    return EXPANSION_CATEGORIES.flatMap((category) =>
        category.subjects.map((subject) => ({
            ...subject,
            categoryId: category.id,
            categoryLabel: category.label
        }))
    );
}

function categoryEntriesForCatalog() {
    return EXPANSION_CATEGORIES.map((category) => ({
        id: category.id,
        label: category.label,
        blurb: category.blurb
    }));
}

function subjectCategoryMap() {
    return Object.fromEntries(
        allExpansionSubjects().map((subject) => [
            subject.id,
            [subject.categoryId]
        ])
    );
}

module.exports = {
    EXPANSION_CATEGORIES,
    expansionSubjectIds,
    allExpansionSubjects,
    categoryEntriesForCatalog,
    subjectCategoryMap
};
