/**
 * Warhammer 40,000 subject package — Games Workshop's grimdark science-fantasy setting.
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
        id: "warhammer-40k",
        name: "Warhammer 40,000",
        rootSlug: "warhammer-40k",
        theme: "warhammer-40k",
        copyright: {
            title: "Warhammer 40,000 is not owned by Ton-o-Lore.",
            body:
                "Warhammer 40,000, Warhammer, the Imperium of Man, Space Marines, Chaos, and related characters, artwork, logos, and intellectual property are the property of Games Workshop Limited and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Games Workshop or those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "warhammer-40k": ["Warhammer 40K", "40K", "WH40K", "Warhammer 40000"],
        "games-workshop": ["GW", "Games Workshop Group"],
        "imperium-of-man": ["Imperium", "The Imperium"],
        "emperor-of-mankind": ["The Emperor", "God-Emperor", "Master of Mankind"],
        chaos: ["Ruinous Powers", "Chaos Undivided"],
        "chaos-gods": ["Ruinous Powers", "Dark Gods"],
        "space-marines": ["Adeptus Astartes", "Astartes", "Angels of Death"],
        ultramarines: ["Ultras"],
        "blood-angels": ["Sons of Sanguinius"],
        "black-legion": ["Sons of Horus", "Luna Wolves"],
        "adeptus-mechanicus": ["Mechanicus", "AdMech", "Machine Cult"],
        "adeptus-custodes": ["Custodes", "Custodian Guard"],
        "adepta-sororitas": ["Sisters of Battle", "Sororitas"],
        "astra-militarum": ["Imperial Guard", "Guard"],
        inquisition: ["Holy Ordos", "Inquisitors"],
        orks: ["Ork", "Greenskins"],
        aeldari: ["Eldar", "Aeldari Empire"],
        necrons: ["Necron", "Necrontyr"],
        tyranids: ["Tyranid", "Hive Fleets"],
        "tau-empire": ["Tau", "T'au", "Tau Empire"],
        primarchs: ["Primarch"],
        horus: ["Warmaster Horus", "Horus Lupercal", "Lupercal"],
        "roboute-guilliman": ["Guilliman", "Lord Commander Guilliman"],
        "abaddon-the-despoiler": ["Abaddon", "Ezekyle Abaddon", "Despoiler"],
        sanguinius: ["Great Angel"],
        warp: ["Immaterium", "Empyrean"],
        terra: ["Holy Terra", "Earth", "Throneworld"],
        mars: ["Red Planet", "Forge World Mars"],
        cadia: ["Cadian Gate"],
        "eye-of-terror": ["Eye"],
        "horus-heresy": ["Heresy", "The Heresy"],
        "great-crusade": ["Crusade"],
        astronomican: ["Beacon of the Astronomican"]
    },
    parents: {
        ultramarines: "space-marines",
        "blood-angels": "space-marines",
        "black-legion": "chaos",
        "adeptus-mechanicus": "imperium-of-man",
        "adeptus-custodes": "imperium-of-man",
        "adepta-sororitas": "imperium-of-man",
        "astra-militarum": "imperium-of-man",
        inquisition: "imperium-of-man",
        "space-marines": "imperium-of-man",
        horus: "primarchs",
        "roboute-guilliman": "primarchs",
        sanguinius: "primarchs",
        "chaos-gods": "chaos",
        "abaddon-the-despoiler": "black-legion",
        mars: "adeptus-mechanicus",
        terra: "imperium-of-man",
        cadia: "imperium-of-man",
        "eye-of-terror": "warp",
        astronomican: "terra"
    }
});
