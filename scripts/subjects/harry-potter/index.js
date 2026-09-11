const path = require("path");
const { entities: rawEntities, relationships: rawRelationships } = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: __dirname,
    meta: {
        id: "harry-potter",
        name: "Harry Potter",
        rootSlug: "harry-potter",
        theme: "harry-potter",
        copyright: {
            title: "Harry Potter is not owned by Ton-o-Lore.",
            body:
                "Harry Potter and all related names, characters, and imagery are trademarks of their respective rights holders, including J.K. Rowling and Warner Bros. Entertainment. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "harry-potter": ["Harry Potter", "HP"],
        "harry-james-potter": ["Harry", "The Boy Who Lived"],
        "hermione-granger": ["Hermione"],
        "ron-weasley": ["Ron"],
        "lord-voldemort": ["Voldemort", "Tom Riddle"],
        "albus-dumbledore": ["Dumbledore"],
        "severus-snape": ["Snape"],
        "jk-rowling": ["J.K. Rowling"],
        "deathly-hallows-objects": ["Deathly Hallows"],
        "order-of-the-phoenix-group": ["Order of the Phoenix"]
    },
    parents: {
        "harry-james-potter": "gryffindor",
        "hermione-granger": "gryffindor",
        "ron-weasley": "gryffindor",
        "ginny-weasley": "gryffindor",
        "neville-longbottom": "gryffindor",
        "draco-malfoy": "slytherin",
        "lord-voldemort": "death-eaters",
        "albus-dumbledore": "hogwarts",
        "minerva-mcgonagall": "hogwarts",
        "rubeus-hagrid": "hogwarts",
        "severus-snape": "hogwarts"
    }
});
