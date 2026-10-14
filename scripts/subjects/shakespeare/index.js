/**
 * Shakespeare — Theater & musicals subject package.
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
        id: "shakespeare",
        name: "Shakespeare",
        rootSlug: "shakespeare",
        theme: "shakespeare",
        categories: ["theater"],
        copyright: {
            title: "Shakespeare is not owned by Ton-o-Lore.",
            body:
                "Shakespeare, related names, marks, and materials are the property of Public-domain works / respective modern productions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        shakespeare: ["Shakespeare canon", "Shakespearean drama"],
        "william-shakespeare": ["Shakespeare", "the Bard", "Will Shakespeare"],
        "anne-hathaway": ["Anne Hathaway of Shottery"],
        "ben-jonson": ["Jonson", "Benjamin Jonson"],
        "stratford-upon-avon": ["Stratford", "Stratford on Avon"],
        "globe-theatre": ["the Globe", "Shakespeare's Globe"],
        "blackfriars-theatre": ["Blackfriars", "the Blackfriars"],
        "lord-chamberlains-men": ["Chamberlain's Men", "Lord Chamberlain's Men"],
        "kings-men": ["the King's Men"],
        "first-folio": ["F1", "1623 Folio", "Mr. William Shakespeares Comedies, Histories, & Tragedies"],
        sonnets: ["the Sonnets", "Shakespeare's Sonnets"],
        "shakespearean-tragedy": ["tragedy", "Shakespeare tragedy"],
        hamlet: ["The Tragedy of Hamlet", "Hamlet, Prince of Denmark"],
        "hamlet-prince": ["Prince Hamlet", "Hamlet"],
        ophelia: ["Ophelia of Denmark"],
        claudius: ["King Claudius"],
        macbeth: ["The Tragedy of Macbeth", "the Scottish play"],
        "macbeth-thane": ["Macbeth", "Thane of Glamis", "Thane of Cawdor"],
        "lady-macbeth": ["Lady M"],
        "romeo-and-juliet": ["Romeo & Juliet", "R&J"],
        romeo: ["Romeo Montague"],
        juliet: ["Juliet Capulet"],
        mercutio: ["Mercutio of Verona"],
        "the-tempest": ["Tempest"],
        prospero: ["Duke of Milan"],
        ariel: ["Ariel the spirit"],
        "king-lear": ["Lear"],
        lear: ["King Lear", "Lear"],
        cordelia: ["Cordelia of Britain"],
        othello: ["The Tragedy of Othello", "Othello, the Moor of Venice"],
        "othello-moor": ["Othello", "the Moor"],
        iago: ["Iago the ancient"],
        "a-midsummer-nights-dream": ["Midsummer", "MSND", "A Midsummer Night's Dream"],
        "henry-v": ["Henry the Fifth", "King Henry V"]
    },
    parents: {
        "william-shakespeare": "shakespeare",
        "hamlet-prince": "hamlet",
        ophelia: "hamlet",
        claudius: "hamlet",
        "macbeth-thane": "macbeth",
        "lady-macbeth": "macbeth",
        romeo: "romeo-and-juliet",
        juliet: "romeo-and-juliet",
        mercutio: "romeo-and-juliet",
        prospero: "the-tempest",
        ariel: "the-tempest",
        lear: "king-lear",
        cordelia: "king-lear",
        "othello-moor": "othello",
        iago: "othello",
        "kings-men": "lord-chamberlains-men",
        "globe-theatre": "shakespeare",
        "first-folio": "shakespeare"
    }
});
