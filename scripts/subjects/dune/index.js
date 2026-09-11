/**
 * Dune subject package — Frank Herbert's desert-planet saga and adaptations.
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
        id: "dune",
        name: "Dune",
        rootSlug: "dune",
        theme: "dune",
        copyright: {
            title: "Dune is not owned by Ton-o-Lore.",
            body:
                "Dune, its characters, settings, logos, and related intellectual property are the property of their respective rights holders, including the estate of Frank Herbert, Legendary Pictures, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        dune: ["Dune franchise", "Dune universe"],
        "frank-herbert": ["Herbert", "Frank Patrick Herbert"],
        "brian-herbert": ["Brian"],
        "legendary-pictures": ["Legendary", "Legendary Entertainment"],
        "denis-villeneuve": ["Villeneuve"],
        "dune-novel": ["Dune book", "Dune 1965"],
        "dune-messiah": ["Messiah"],
        "dune-2021": ["Dune Part One", "Dune 2021", "Dune film"],
        "dune-part-two": ["Dune Part 2", "Dune 2", "Part Two"],
        "house-atreides": ["Atreides", "The Atreides"],
        "house-harkonnen": ["Harkonnen", "The Harkonnens"],
        "bene-gesserit": ["Bene Gesserit", "Sisterhood", "the witches"],
        "spacing-guild": ["Guild", "Navigators", "Guild Navigators"],
        fremen: ["The Fremen", "Fremen of Arrakis"],
        mentats: ["Mentat", "human computers"],
        "paul-atreides": ["Paul", "Usul", "Paul Muad'Dib"],
        "leto-atreides": ["Duke Leto", "Leto", "Leto I"],
        "lady-jessica": ["Jessica", "Reverend Mother Jessica"],
        chani: ["Chani Kynes", "Sihaya"],
        "baron-harkonnen": ["Baron", "Vladimir Harkonnen", "the Baron"],
        "duncan-idaho": ["Duncan", "Idaho"],
        stilgar: ["Stil"],
        "gurney-halleck": ["Gurney"],
        "thufir-hawat": ["Thufir", "Hawat"],
        "feyd-rautha": ["Feyd", "Feyd-Rautha"],
        "alia-atreides": ["Alia", "St. Alia of the Knife"],
        arrakis: ["Dune planet", "the desert planet"],
        caladan: ["Caladan"],
        "giedi-prime": ["Giedi"],
        "spice-melange": ["Spice", "melange", "the spice"],
        sandworms: ["Sandworm", "Maker", "worms of Arrakis"],
        "shai-hulud": ["Shai Hulud", "Old Man of the Desert", "Grandfather of the Desert"],
        "muad-dib": ["Muad Dib", "Muad'Dib"],
        "kwisatz-haderach": ["Kwisatz", "Shortening of the Way"],
        stillsuits: ["stillsuit", "Fremen stillsuit"]
    },
    parents: {
        "paul-atreides": "house-atreides",
        "leto-atreides": "house-atreides",
        "lady-jessica": "bene-gesserit",
        "duncan-idaho": "house-atreides",
        "gurney-halleck": "house-atreides",
        "thufir-hawat": "house-atreides",
        "alia-atreides": "house-atreides",
        "baron-harkonnen": "house-harkonnen",
        "feyd-rautha": "house-harkonnen",
        chani: "fremen",
        stilgar: "fremen",
        "muad-dib": "paul-atreides",
        "shai-hulud": "sandworms",
        sandworms: "arrakis",
        "spice-melange": "arrakis",
        fremen: "arrakis",
        "house-atreides": "caladan",
        "house-harkonnen": "giedi-prime",
        "dune-novel": "dune",
        "dune-2021": "dune",
        "dune-part-two": "dune"
    }
});
