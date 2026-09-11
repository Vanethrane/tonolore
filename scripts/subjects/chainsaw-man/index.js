/**
 * Chainsaw Man subject package — Tatsuki Fujimoto's devil-hunting manga.
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
        id: "chainsaw-man",
        name: "Chainsaw Man",
        rootSlug: "chainsaw-man",
        theme: "chainsaw-man",
        copyright: {
            title: "Chainsaw Man is not owned by Ton-o-Lore.",
            body:
                "Chainsaw Man, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Tatsuki Fujimoto, Shueisha, MAPPA, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "chainsaw-man": ["Chainsawman", "チェンソーマン", "CSM"],
        "tatsuki-fujimoto": ["Fujimoto", "藤本タツキ"],
        shueisha: ["集英社", "Jump Comics"],
        mappa: ["MAPPA studio"],
        "chainsaw-man-manga": ["CSM manga", "Chainsaw Man manga"],
        "chainsaw-man-anime": ["CSM anime", "Chainsaw Man TV anime"],
        "public-safety-arc": ["Part 1", "Public Safety saga"],
        "chainsaw-man-part-2": ["Part 2", "Academy arc", "School arc"],
        denji: ["Chainsaw Man", "Chainsaw Boy"],
        pochita: ["Pochita devil", "Chainsaw dog"],
        power: ["Power the Blood Fiend"],
        "aki-hayakawa": ["Aki", "Hayakawa Aki"],
        makima: ["Control Devil", "Makima-san"],
        kishibe: ["Master Kishibe"],
        reze: ["Bomb Girl", "Bomb Devil"],
        quanxi: ["First Devil Hunter"],
        "asa-mitaka": ["Asa", "Mitaka Asa"],
        yoru: ["War Devil", "Yoru the War Devil"],
        "angel-devil": ["Angel", "Angel Fiend"],
        beam: ["Shark Fiend", "Beam the Shark"],
        "kobeni-higashiyama": ["Kobeni"],
        "public-safety-devil-hunters": ["Public Safety", "PS devil hunters"],
        "devil-hunters": ["Devil Hunter", "devil hunting"],
        fiends: ["Fiend", "devil fiends"],
        "tokyo-devil-hunting": ["Tokyo", "CSM Tokyo"],
        hell: ["Devil Hell", "Hell dimension"],
        "devil-hunter-academy": ["Fourth East High", "Academy"],
        "devil-contracts": ["Devil contract", "contracts with devils"],
        "chainsaw-devil": ["Chainsaw Devil Pochita"],
        "control-devil": ["Makima devil", "Domination Devil"],
        "gun-devil": ["Gun Devil fragments", "Gun Devil body"]
    },
    parents: {
        "chainsaw-man-manga": "chainsaw-man",
        "chainsaw-man-anime": "chainsaw-man",
        "public-safety-arc": "chainsaw-man-manga",
        "chainsaw-man-part-2": "chainsaw-man-manga",
        denji: "public-safety-devil-hunters",
        "aki-hayakawa": "public-safety-devil-hunters",
        makima: "public-safety-devil-hunters",
        kishibe: "public-safety-devil-hunters",
        "kobeni-higashiyama": "public-safety-devil-hunters",
        "angel-devil": "public-safety-devil-hunters",
        beam: "public-safety-devil-hunters",
        power: "fiends",
        "public-safety-devil-hunters": "devil-hunters",
        pochita: "chainsaw-devil",
        reze: "denji",
        "asa-mitaka": "devil-hunter-academy",
        yoru: "asa-mitaka",
        "devil-hunter-academy": "tokyo-devil-hunting"
    }
});
