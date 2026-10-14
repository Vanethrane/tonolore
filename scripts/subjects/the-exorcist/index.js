/**
 * The Exorcist — Horror subject package.
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
        id: "the-exorcist",
        name: "The Exorcist",
        rootSlug: "the-exorcist",
        theme: "the-exorcist",
        categories: ["horror"],
        copyright: {
            title: "The Exorcist is not owned by Ton-o-Lore.",
            body:
                "The Exorcist, related names, marks, and materials are the property of Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-exorcist": ["Exorcist", "The Exorcist franchise"],
        "william-friedkin": ["Friedkin"],
        "william-peter-blatty": ["Blatty"],
        "linda-blair": ["Blair"],
        "max-von-sydow": ["von Sydow", "Max von Sydow"],
        "ellen-burstyn": ["Burstyn"],
        "jason-miller": ["Miller"],
        "the-exorcist-novel": ["The Exorcist book", "Exorcist novel"],
        "the-exorcist-1973": ["The Exorcist 1973", "The Exorcist (film)"],
        "the-exorcist-iii": ["Exorcist III", "The Exorcist 3", "Legion"],
        georgetown: ["Georgetown, D.C.", "Georgetown Washington"],
        "macneil-house": ["Prospect Street house", "the house"],
        nineveh: ["Iraq dig", "Hatra"],
        "macneil-family": ["The MacNeils"],
        jesuits: ["the Jesuits", "Society of Jesus"],
        "regan-macneil": ["Regan"],
        "chris-macneil": ["Chris"],
        "father-karras": ["Karras", "Damien Karras", "Father Damien Karras"],
        "father-merrin": ["Merrin", "Lankester Merrin", "Father Merrin"],
        "father-dmyer": ["Dyer", "Father Dyer"],
        pazuzu: ["the demon", "the devil"],
        "captain-howdy": ["Howdy"],
        "lieutenant-kinderman": ["Kinderman", "Lt. Kinderman"],
        "burke-dennings": ["Burke", "Dennings"],
        "sharon-spencer": ["Sharon"],
        "ouija-board": ["Ouija", "the board"],
        "the-exorcism": ["the rite", "Regan's exorcism"]
    },
    parents: {
        "regan-macneil": "macneil-family",
        "chris-macneil": "macneil-family",
        "sharon-spencer": "macneil-family",
        "father-karras": "jesuits",
        "father-merrin": "jesuits",
        "father-dmyer": "jesuits",
        "macneil-house": "georgetown",
        "lieutenant-kinderman": "georgetown",
        "captain-howdy": "pazuzu",
        "the-exorcist-novel": "the-exorcist",
        "the-exorcist-1973": "the-exorcist",
        "the-exorcist-iii": "the-exorcist"
    }
});
