/**
 * Halloween — Horror subject package.
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
        id: "halloween-franchise",
        name: "Halloween",
        rootSlug: "halloween-franchise",
        theme: "halloween-franchise",
        categories: ["horror"],
        copyright: {
            title: "Halloween is not owned by Ton-o-Lore.",
            body:
                "Halloween, related names, marks, and materials are the property of Trancas / Miramax / Universal / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "halloween-franchise": ["Halloween", "Halloween franchise"],
        "john-carpenter": ["Carpenter"],
        "debra-hill": ["Hill"],
        "jamie-lee-curtis": ["Jamie Lee", "JLC"],
        "donald-pleasence": ["Pleasence"],
        "nick-castle": ["Castle"],
        "halloween-1978": ["Halloween 1978", "Halloween (film)", "The Night He Came Home"],
        "halloween-ii": ["Halloween 2", "Halloween II (1981)"],
        "halloween-2018": ["Halloween 2018", "Halloween (2018 film)"],
        "halloween-ends": ["Ends"],
        haddonfield: ["Haddonfield, Illinois"],
        "myers-house": ["Myers house", "the Myers house"],
        "smiths-grove-sanitarium": ["Smith's Grove", "Smiths Grove"],
        "myers-family": ["The Myers family"],
        "strode-family": ["The Strode family"],
        "michael-myers": ["Michael", "Myers", "The Boogeyman"],
        "the-shape": ["Shape"],
        "laurie-strode": ["Laurie"],
        "dr-sam-loomis": ["Loomis", "Dr. Loomis", "Sam Loomis"],
        "judith-myers": ["Judith"],
        "annie-brackett": ["Annie"],
        "lynda-van-der-klok": ["Lynda"],
        "karen-nelson": ["Karen"],
        "allyson-nelson": ["Allyson"],
        "sheriff-leigh-brackett": ["Sheriff Brackett", "Leigh Brackett"],
        "tommy-doyle": ["Tommy"],
        "kitchen-knife": ["Myers knife", "the knife"],
        "the-mask": ["Shape mask", "Myers mask"],
        "the-night-he-came-home": ["October 31 1978", "Halloween night 1978"]
    },
    parents: {
        "michael-myers": "myers-family",
        "judith-myers": "myers-family",
        "laurie-strode": "strode-family",
        "karen-nelson": "strode-family",
        "allyson-nelson": "strode-family",
        "annie-brackett": "haddonfield",
        "lynda-van-der-klok": "haddonfield",
        "tommy-doyle": "haddonfield",
        "sheriff-leigh-brackett": "haddonfield",
        "myers-house": "haddonfield",
        "the-shape": "michael-myers",
        "kitchen-knife": "michael-myers",
        "the-mask": "michael-myers",
        "dr-sam-loomis": "smiths-grove-sanitarium",
        "halloween-1978": "halloween-franchise",
        "halloween-ii": "halloween-franchise",
        "halloween-2018": "halloween-franchise",
        "halloween-ends": "halloween-franchise"
    }
});
