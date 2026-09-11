/**
 * Teenage Mutant Ninja Turtles subject package — Mirage Studios' ninja turtle heroes.
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
        id: "teenage-mutant-ninja-turtles",
        name: "Teenage Mutant Ninja Turtles",
        rootSlug: "teenage-mutant-ninja-turtles",
        theme: "teenage-mutant-ninja-turtles",
        copyright: {
            title: "Teenage Mutant Ninja Turtles is not owned by Ton-o-Lore.",
            body:
                "Teenage Mutant Ninja Turtles, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Kevin Eastman, Peter Laird, Viacom, Nickelodeon, Paramount Pictures, Mirage Studios, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "teenage-mutant-ninja-turtles": ["TMNT", "Ninja Turtles", "Teenage Mutant Ninja Turtles franchise"],
        "kevin-eastman": ["Eastman", "Kevin Eastman co-creator"],
        "peter-laird": ["Laird", "Peter Laird co-creator"],
        "mirage-studios": ["Mirage", "Mirage Comics"],
        nickelodeon: ["Nick", "Nickelodeon TMNT"],
        "paramount-pictures": ["Paramount", "Paramount TMNT films"],
        "tmnt-mirage-comic": ["Mirage comic", "original TMNT comic", "TMNT #1"],
        "tmnt-1987-cartoon": ["1987 cartoon", "original TMNT cartoon"],
        "tmnt-2012-series": ["2012 TMNT", "Nickelodeon 2012 series"],
        "tmnt-mutant-mayhem": ["Mutant Mayhem", "TMNT Mutant Mayhem film"],
        "foot-clan": ["Foot", "Foot Soldiers"],
        kraang: ["The Kraang", "Kraang aliens"],
        "new-york-city": ["NYC", "New York"],
        "turtle-lair": ["Sewer lair", "Turtles' lair"],
        "dimension-x": ["Dimension X portal world"],
        mutagen: ["Ooze", "mutagenic ooze"],
        ninjutsu: ["ninja arts", "ninja training"],
        "turtle-power": ["Turtle Power!", "heroic turtle spirit"],
        leonardo: ["Leo", "Leonardo turtle"],
        raphael: ["Raph", "Raphael turtle"],
        donatello: ["Donnie", "Donatello turtle"],
        michelangelo: ["Mikey", "Michelangelo turtle"],
        "master-splinter": ["Splinter", "Hamato Yoshi"],
        shredder: ["Oroku Saki", "The Shredder"],
        "april-oneil": ["April", "April O'Neil"],
        "casey-jones": ["Casey", "Casey Jones vigilante"],
        krang: ["Krang brain", "Krang warlord"],
        bebop: ["Bebop warthog"],
        rocksteady: ["Rocksteady rhino"],
        karai: ["Karai Foot Clan"],
        leatherhead: ["Leatherhead alligator"],
        "baxter-stockman": ["Baxter", "Baxter Stockman scientist"]
    },
    parents: {
        "tmnt-mirage-comic": "teenage-mutant-ninja-turtles",
        "tmnt-1987-cartoon": "teenage-mutant-ninja-turtles",
        "tmnt-2012-series": "teenage-mutant-ninja-turtles",
        "tmnt-mutant-mayhem": "teenage-mutant-ninja-turtles",
        "turtle-lair": "new-york-city",
        "master-splinter": "turtle-lair",
        leonardo: "turtle-lair",
        raphael: "turtle-lair",
        donatello: "turtle-lair",
        michelangelo: "turtle-lair",
        shredder: "foot-clan",
        karai: "foot-clan",
        bebop: "foot-clan",
        rocksteady: "foot-clan",
        "baxter-stockman": "foot-clan",
        "foot-clan": "new-york-city",
        krang: "dimension-x",
        kraang: "dimension-x",
        leatherhead: "new-york-city"
    }
});
