/**
 * Dungeons & Dragons subject package — Wizards of the Coast tabletop RPG.
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
        id: "dungeons-and-dragons",
        name: "Dungeons & Dragons",
        rootSlug: "dungeons-and-dragons",
        theme: "dungeons-and-dragons",
        copyright: {
            title: "Dungeons & Dragons is not owned by Ton-o-Lore.",
            body:
                "Dungeons & Dragons, its characters, settings, artwork, logos, and related intellectual property are the property of their respective rights holders, including Wizards of the Coast, Hasbro, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "dungeons-and-dragons": ["D&D", "DnD", "Dungeons and Dragons"],
        "wizards-of-the-coast": ["WotC", "Wizards"],
        hasbro: ["Hasbro Inc."],
        "gary-gygax": ["E. Gary Gygax", "Gygax"],
        "dave-arneson": ["Dave Arneson", "Arneson"],
        "ed-greenwood": ["Ed Greenwood", "Greenwood"],
        "r-a-salvatore": ["RA Salvatore", "Bob Salvatore", "R.A. Salvatore"],
        "original-dungeons-dragons": ["OD&D", "1974 D&D", "Original D&D"],
        "advanced-dungeons-dragons": ["AD&D", "Advanced D&D"],
        "dnd-fifth-edition": ["5e", "D&D 5e", "Fifth Edition", "5th Edition"],
        "players-handbook": ["PHB", "Player's Handbook 5e"],
        "forgotten-realms": ["FR", "The Realms", "Forgotten Realms setting"],
        greyhawk: ["World of Greyhawk", "Oerth setting"],
        faerun: ["Faerun", "Faerûn continent"],
        waterdeep: ["City of Splendors", "Waterdeep city"],
        "sword-coast": ["The Sword Coast", "Western Faerûn"],
        "baldurs-gate": ["Baldur's Gate city", "BG"],
        dragonlance: ["Krynn", "Dragonlance setting"],
        planescape: ["Planescape setting", "Sigil"],
        ravenloft: ["Domains of Dread", "Ravenloft setting"],
        oerth: ["World of Oerth"],
        candlekeep: ["Candlekeep library"],
        "drizzt-do-urden": ["Drizzt", "Drizzt Do Urden"],
        elminster: ["Elminster of Shadowdale", "Elminster Aumar"],
        "dungeon-master": ["DM", "Dungeon Master role", "Game Master"],
        "alignment-system": ["Alignment", "D&D alignment"],
        "character-class": ["Class", "D&D class", "PC class"],
        "dnd-beyond": ["DDB", "D&D Beyond platform"],
        drow: ["Dark elves", "Drow elves"],
        lolth: ["Lolth the Spider Queen", "Spider Queen"],
        mystra: ["Mystra goddess", "Goddess of Magic"],
        torm: ["Torm the True", "Torm god"],
        vecna: ["Vecna the Arch-Lich", "Lord Vecna"]
    },
    parents: {
        "wizards-of-the-coast": "hasbro",
        "original-dungeons-dragons": "dungeons-and-dragons",
        "advanced-dungeons-dragons": "dungeons-and-dragons",
        "dnd-fifth-edition": "dungeons-and-dragons",
        "players-handbook": "dnd-fifth-edition",
        "forgotten-realms": "dungeons-and-dragons",
        greyhawk: "dungeons-and-dragons",
        dragonlance: "dungeons-and-dragons",
        planescape: "dungeons-and-dragons",
        ravenloft: "dungeons-and-dragons",
        faerun: "forgotten-realms",
        "sword-coast": "faerun",
        waterdeep: "sword-coast",
        "baldurs-gate": "sword-coast",
        candlekeep: "sword-coast",
        oerth: "greyhawk",
        "drizzt-do-urden": "drow",
        elminster: "forgotten-realms",
        drow: "forgotten-realms",
        lolth: "forgotten-realms",
        mystra: "forgotten-realms",
        torm: "forgotten-realms",
        vecna: "dungeons-and-dragons",
        "dnd-beyond": "wizards-of-the-coast",
        "dungeon-master": "dungeons-and-dragons",
        "alignment-system": "dungeons-and-dragons",
        "character-class": "dungeons-and-dragons"
    }
});
