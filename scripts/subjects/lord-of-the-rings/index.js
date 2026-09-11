const { entities: rawEntities, relationships: rawRelationships } = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: __dirname,
    meta: {
        id: "lord-of-the-rings",
        name: "The Lord of the Rings",
        rootSlug: "lord-of-the-rings",
        theme: "lord-of-the-rings",
        copyright: {
            title: "The Lord of the Rings is not owned by Ton-o-Lore.",
            body:
                "The Lord of the Rings, The Hobbit, Middle-earth, and all related names and characters are trademarks of Middle-earth Enterprises, the Tolkien Estate, and/or their respective rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "lord-of-the-rings": ["LOTR", "Lord of the Rings", "Middle-earth"],
        "jrr-tolkien": ["Tolkien", "J.R.R. Tolkien"],
        "frodo-baggins": ["Frodo"],
        "samwise-gamgee": ["Sam", "Samwise"],
        gandalf: ["Gandalf the Grey", "Gandalf the White"],
        aragorn: ["Strider", "Elessar"],
        "one-ring": ["The Ring", "One Ring"],
        gollum: ["Sméagol", "Smeagol"],
        sauron: ["Dark Lord"],
        "merry-brandybuck": ["Merry"],
        "pippin-took": ["Pippin"]
    },
    parents: {
        "frodo-baggins": "shire",
        "samwise-gamgee": "shire",
        "bilbo-baggins": "shire",
        "merry-brandybuck": "fellowship-of-the-ring",
        "pippin-took": "fellowship-of-the-ring",
        aragorn: "fellowship-of-the-ring",
        legolas: "fellowship-of-the-ring",
        gimli: "fellowship-of-the-ring",
        boromir: "fellowship-of-the-ring",
        gandalf: "fellowship-of-the-ring",
        sauron: "mordor",
        saruman: "isengard",
        galadriel: "lothlorien",
        elrond: "rivendell"
    }
});
