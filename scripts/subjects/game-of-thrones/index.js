/**
 * Game of Thrones subject package — A Song of Ice and Fire / HBO.
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
        id: "game-of-thrones",
        name: "Game of Thrones",
        rootSlug: "game-of-thrones",
        theme: "game-of-thrones",
        copyright: {
            title: "Game of Thrones is not owned by Ton-o-Lore.",
            body:
                "Game of Thrones, A Song of Ice and Fire, and all related names, characters, artwork, logos, and intellectual property are the property of George R.R. Martin, HBO, Warner Bros. Discovery, and/or their respective rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "game-of-thrones": ["GoT", "Game of Thrones TV series"],
        "a-song-of-ice-and-fire": ["ASOIAF", "Song of Ice and Fire", "Ice and Fire"],
        "george-rr-martin": ["GRRM", "George Raymond Richard Martin", "George Martin"],
        hbo: ["Home Box Office", "HBO Entertainment"],
        westeros: ["Seven Kingdoms", "The Seven Kingdoms"],
        essos: ["The East"],
        "kings-landing": ["Kings Landing", "Capital"],
        winterfell: ["Winter Fell"],
        "the-wall": ["Wall", "Castle Black"],
        dragonstone: ["Dragon Stone"],
        "iron-throne": ["The Iron Throne"],
        "house-stark": ["Starks", "Stark"],
        "house-lannister": ["Lannisters", "Lannister"],
        "house-targaryen": ["Targaryens", "Targaryen"],
        "nights-watch": ["Night's Watch", "The Watch", "crows"],
        "white-walkers": ["Others", "The Others", "White Walker"],
        "jon-snow": ["Jon", "Aegon Targaryen", "Lord Snow"],
        "daenerys-targaryen": ["Daenerys", "Dany", "Khaleesi", "Mother of Dragons"],
        "tyrion-lannister": ["Tyrion", "The Imp", "Halfman"],
        "arya-stark": ["Arya"],
        "sansa-stark": ["Sansa"],
        "cersei-lannister": ["Cersei", "Queen Cersei"],
        "jaime-lannister": ["Jaime", "Kingslayer"],
        "eddard-stark": ["Ned Stark", "Ned", "Eddard"],
        "night-king": ["The Night King"],
        "bran-stark": ["Bran", "Three-Eyed Raven", "Brandon Stark"],
        "theon-greyjoy": ["Theon", "Reek"],
        "samwell-tarly": ["Sam", "Samwell", "Ser Piggy"],
        "brienne-of-tarth": ["Brienne", "Brienne the Beauty"],
        "petyr-baelish": ["Littlefinger", "Baelish", "Petyr"]
    },
    parents: {
        "eddard-stark": "house-stark",
        "arya-stark": "house-stark",
        "sansa-stark": "house-stark",
        "bran-stark": "house-stark",
        "jon-snow": "house-stark",
        "tyrion-lannister": "house-lannister",
        "cersei-lannister": "house-lannister",
        "jaime-lannister": "house-lannister",
        "daenerys-targaryen": "house-targaryen",
        "samwell-tarly": "nights-watch",
        "night-king": "white-walkers",
        winterfell: "house-stark",
        "kings-landing": "westeros",
        "the-wall": "westeros",
        dragonstone: "westeros",
        "iron-throne": "kings-landing"
    }
});
