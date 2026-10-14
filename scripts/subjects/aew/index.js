/**
 * AEW — Pro wrestling subject package.
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
        id: "aew",
        name: "AEW",
        rootSlug: "aew",
        theme: "aew",
        categories: ["wrestling"],
        copyright: {
            title: "AEW is not owned by Ton-o-Lore.",
            body:
                "AEW, related names, marks, and materials are the property of All Elite Wrestling / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        aew: ["AEW", "All Elite Wrestling"],
        "tony-khan": ["Khan"],
        "the-elite": ["Elite", "The Elite (wrestling)"],
        "cody-rhodes": ["Cody", "The American Nightmare"],
        "kenny-omega": ["The Cleaner", "Omega"],
        "young-bucks": ["Young Bucks", "Matt and Nick Jackson"],
        "hangman-page": ["Hangman", "Adam Page", "Hangman Adam Page"],
        "maxwell-jacob-friedman": ["MJF", "Maxwell Jacob Friedman"],
        "jon-moxley": ["Moxley", "Mox", "Death Rider"],
        "bryan-danielson": ["Danielson", "American Dragon"],
        "will-ospreay": ["Ospreay"],
        "mercedes-mone": ["Mercedes Monet", "Sasha Banks"],
        "toni-storm": ["Timeless Toni Storm"],
        "cm-punk": ["Punk", "Best in the World"],
        "chris-jericho": ["Jericho", "Le Champion"],
        "aew-dynamite": ["Dynamite", "Wednesday Night Dynamite"],
        "aew-collision": ["Collision"],
        "all-in": ["All In 2018", "All In London"],
        "forbidden-door": ["The Forbidden Door"],
        "dailys-place": ["Daily's Place", "Daily's Place Amphitheater"]
    },
    parents: {
        "kenny-omega": "the-elite",
        "young-bucks": "the-elite",
        "aew-dynamite": "aew",
        "aew-collision": "aew",
        "double-or-nothing": "aew",
        "all-out": "aew",
        "full-gear": "aew",
        "revolution": "aew",
        "forbidden-door": "aew"
    }
});

