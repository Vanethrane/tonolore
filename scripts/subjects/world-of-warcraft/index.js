/**
 * Warcraft subject package — Blizzard Entertainment's fantasy franchise.
 */

const path = require("path");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "world-of-warcraft",
        name: "Warcraft",
        rootSlug: "world-of-warcraft",
        theme: "world-of-warcraft",
        copyright: {
            title: "Warcraft is not owned by Ton-o-Lore.",
            body:
                "Warcraft, World of Warcraft, Azeroth, and related characters, artwork, logos, and intellectual property are the property of Blizzard Entertainment, Inc. and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Blizzard Entertainment or those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "world-of-warcraft": ["Warcraft", "WoW", "Warcraft franchise"],
        "blizzard-entertainment": ["Blizzard", "Blizzard Ent."],
        "warcraft-iii": ["WC3", "Reign of Chaos", "The Frozen Throne"],
        "world-of-warcraft-mmo": ["WoW", "World of Warcraft MMO"],
        azeroth: ["World of Azeroth"],
        "eastern-kingdoms": ["EK"],
        kalimdor: ["Continent of Kalimdor"],
        northrend: ["North"],
        draenor: ["Outland", "Alternate Draenor"],
        orgrimmar: ["Org"],
        stormwind: ["Stormwind City", "SW"],
        icecrown: ["Icecrown Citadel", "ICC"],
        alliance: ["Grand Alliance"],
        horde: ["New Horde", "The Horde"],
        "burning-legion": ["Legion", "The Legion"],
        scourge: ["Undead Scourge"],
        forsaken: ["Undead Forsaken"],
        "night-elves": ["Kaldorei", "Night Elf"],
        "orcs-of-azeroth": ["Orcs", "Orcish Horde"],
        titans: ["Pantheon", "Titan Pantheon"],
        sargeras: ["Dark Titan", "Fallen Titan"],
        thrall: ["Go'el", "Warchief Thrall"],
        "jaina-proudmoore": ["Jaina", "Lady Jaina"],
        "sylvanas-windrunner": ["Sylvanas", "Banshee Queen"],
        "illidan-stormrage": ["Illidan", "The Betrayer"],
        "arthas-menethil": ["Arthas", "Prince Arthas"],
        "lich-king": ["Lich King", "Jailer of the Damned"],
        "anduin-wrynn": ["Anduin", "King Anduin"],
        guldan: ["Guldan", "Gul'dan of Draenor"],
        kiljaeden: ["Kiljaeden", "The Deceiver"],
        frostmourne: ["Runeblade Frostmourne"],
        "dark-portal": ["The Portal", "Dark Portal of Azeroth"],
        "death-knights": ["Death Knight", "DK"]
    },
    parents: {
        "eastern-kingdoms": "azeroth",
        kalimdor: "azeroth",
        northrend: "azeroth",
        orgrimmar: "kalimdor",
        stormwind: "eastern-kingdoms",
        icecrown: "northrend",
        alliance: "azeroth",
        horde: "azeroth",
        forsaken: "horde",
        "night-elves": "alliance",
        "orcs-of-azeroth": "horde",
        scourge: "lich-king",
        "burning-legion": "sargeras",
        thrall: "horde",
        "jaina-proudmoore": "alliance",
        "sylvanas-windrunner": "forsaken",
        "anduin-wrynn": "stormwind",
        "arthas-menethil": "lich-king",
        "lich-king": "icecrown",
        guldan: "burning-legion",
        kiljaeden: "burning-legion",
        frostmourne: "lich-king",
        "death-knights": "scourge",
        "warcraft-iii": "world-of-warcraft",
        "world-of-warcraft-mmo": "world-of-warcraft"
    }
});
