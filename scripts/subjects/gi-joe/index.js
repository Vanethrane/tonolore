/**
 * G.I. Joe — Toys & collectibles subject package.
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
        id: "gi-joe",
        name: "G.I. Joe",
        rootSlug: "gi-joe",
        theme: "gi-joe",
        categories: ["toys"],
        copyright: {
            title: "G.I. Joe is not owned by Ton-o-Lore.",
            body:
                "G.I. Joe, related names, marks, and materials are the property of Hasbro / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "gi-joe": ["G.I. Joe", "GI Joe", "GIJOE"],
        hasbro: ["Hasbro, Inc."],
        "larry-hama": ["Hama"],
        "original-gi-joe": ["12-inch G.I. Joe", "original G.I. Joe", "America's Movable Fighting Man"],
        "a-real-american-hero": ["ARAH", "Real American Hero", "G.I. Joe: A Real American Hero"],
        "marvel-gi-joe": ["Marvel G.I. Joe", "G.I. Joe comic"],
        "sunbow-gi-joe": ["Sunbow", "G.I. Joe cartoon"],
        "gi-joe-1982-launch": ["1982 relaunch", "ARAH launch"],
        "gi-joe-team": ["the Joes", "Joe team", "G.I. Joe (team)"],
        duke: ["Conrad S. Hauser", "First Sergeant Duke"],
        "snake-eyes": ["Snake-Eyes", "the silent commando"],
        scarlett: ["Shana O'Hara", "Shana M. O'Hara"],
        roadblock: ["Marvin F. Hinton"],
        flint: ["Dashiell R. Faireborn", "Warrant Officer Flint"],
        "lady-jaye": ["Lady Jaye", "Alison R. Hart-Burnett"],
        shipwreck: ["Hector X. Delgado"],
        "the-pit": ["Pit", "Joe HQ"],
        cobra: ["Cobra Command", "COBRA"],
        "cobra-commander": ["CC", "the Commander"],
        baroness: ["The Baroness", "Anastasia DeCobray"],
        destro: ["James McCullen", "James McCullen Destro"],
        "storm-shadow": ["Thomas Arashikage", "Tommy"],
        serpentor: ["the Cobra Emperor"],
        zartan: ["Dreadnok leader"],
        "dr-mindbender": ["Mindbender", "Doctor Mindbender"],
        "mars-armaments": ["M.A.R.S.", "MARS", "Military Armaments Research System"],
        "cobra-island": ["Cobra's island"],
        springfield: ["Cobra Springfield"],
        "file-cards": ["filecard", "file card", "dossier cards"],
        "yo-joe": ["Yo Joe", "Yo-Joe"]
    },
    parents: {
        "a-real-american-hero": "gi-joe",
        "original-gi-joe": "gi-joe",
        "marvel-gi-joe": "gi-joe",
        "sunbow-gi-joe": "gi-joe",
        duke: "gi-joe-team",
        "snake-eyes": "gi-joe-team",
        scarlett: "gi-joe-team",
        roadblock: "gi-joe-team",
        flint: "gi-joe-team",
        "lady-jaye": "gi-joe-team",
        shipwreck: "gi-joe-team",
        "the-pit": "gi-joe-team",
        "cobra-commander": "cobra",
        baroness: "cobra",
        destro: "cobra",
        "storm-shadow": "cobra",
        serpentor: "cobra",
        zartan: "cobra",
        "dr-mindbender": "cobra",
        "mars-armaments": "destro",
        "cobra-island": "cobra",
        springfield: "cobra"
    }
});
