/**
 * Doctor Who subject package — BBC's time-travel science fiction series.
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
        id: "doctor-who",
        name: "Doctor Who",
        rootSlug: "doctor-who",
        theme: "doctor-who",
        copyright: {
            title: "Doctor Who is not owned by Ton-o-Lore.",
            body:
                "Doctor Who, its characters, logos, and related intellectual property are the property of their respective rights holders, including the BBC and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "doctor-who": ["Dr Who", "Dr. Who", "Who"],
        bbc: ["British Broadcasting Corporation", "the BBC"],
        "sydney-newman": ["Newman"],
        "russell-t-davies": ["RTD", "Russell Davies"],
        "doctor-who-tv": ["Doctor Who series", "Doctor Who television"],
        "the-doctor": ["Doctor", "Dr. Who", "Theta Sigma", "The Oncoming Storm"],
        tardis: ["TARDIS", "Time And Relative Dimension In Space", "police box"],
        "time-lords": ["Time Lord", "Gallifreyans"],
        gallifrey: ["Homeworld"],
        regeneration: ["Regenerations", "regenerate"],
        companions: ["Companion", "Doctor's companions"],
        "sonic-screwdriver": ["sonic", "screwdriver"],
        "time-war": ["Last Great Time War", "Time War", "Great Time War"],
        "rose-tyler": ["Rose"],
        "clara-oswald": ["Clara", "Impossible Girl", "Oswin Oswald"],
        "donna-noble": ["Donna", "DoctorDonna"],
        "sarah-jane-smith": ["Sarah Jane", "Sarah Jane Smith"],
        "amy-pond": ["Amy", "Amelia Pond"],
        "martha-jones": ["Martha"],
        daleks: ["Dalek", "Kaleds"],
        davros: ["Davros of Skaro"],
        cybermen: ["Cyberman", "Cybermen of Mondas"],
        "the-master": ["Master", "Missy", "Harold Saxon"],
        "weeping-angels": ["Weeping Angel", "Lonely Assassins"],
        unit: ["U.N.I.T.", "Unified Intelligence Taskforce", "United Nations Intelligence Taskforce"],
        "captain-jack-harkness": ["Captain Jack", "Jack Harkness"],
        "river-song": ["River", "Melody Pond"],
        skaro: ["Dalek homeworld"],
        earth: ["Terra", "Sol 3"],
        torchwood: ["Torchwood Institute"],
        "bad-wolf": ["Bad Wolf Bay"],
        "time-vortex": ["Vortex", "Space-Time Vortex"]
    },
    parents: {
        "the-doctor": "time-lords",
        "the-master": "time-lords",
        "time-lords": "gallifrey",
        "rose-tyler": "companions",
        "clara-oswald": "companions",
        "donna-noble": "companions",
        "sarah-jane-smith": "companions",
        "amy-pond": "companions",
        "martha-jones": "companions",
        daleks: "skaro",
        davros: "skaro",
        unit: "earth",
        torchwood: "earth",
        "captain-jack-harkness": "torchwood",
        tardis: "the-doctor",
        "sonic-screwdriver": "the-doctor",
        "doctor-who-tv": "doctor-who",
        "bad-wolf": "rose-tyler"
    }
});
