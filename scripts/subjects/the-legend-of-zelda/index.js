/**
 * The Legend of Zelda subject package — Nintendo's adventure franchise.
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
        id: "the-legend-of-zelda",
        name: "The Legend of Zelda",
        rootSlug: "the-legend-of-zelda",
        theme: "the-legend-of-zelda",
        copyright: {
            title: "The Legend of Zelda is not owned by Ton-o-Lore.",
            body:
                "The Legend of Zelda, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Nintendo Co., Ltd. and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Nintendo or those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-legend-of-zelda": ["Zelda", "LoZ", "TLoZ", "Legend of Zelda"],
        "shigeru-miyamoto": ["Miyamoto"],
        "takashi-tezuka": ["Tezuka"],
        nintendo: ["Nintendo Co.", "Nintendo EPD"],
        link: ["Hero of Time", "Hero of the Wild"],
        zelda: ["Princess Zelda", "Hyrule's princess"],
        ganon: ["Demon King", "Calamity Ganon"],
        ganondorf: ["Ganondorf Dragmire", "Gerudo King"],
        navi: ["Hey Listen"],
        sheik: ["Sheik"],
        impa: ["Impa"],
        epona: ["Epona"],
        midna: ["Twilight Princess Midna"],
        hyrule: ["Kingdom of Hyrule"],
        "master-sword": ["Blade of Evil's Bane", "Sword of Evil's Bane"],
        triforce: ["Golden Power", "Triforce of the Goddesses"],
        "ocarina-of-time-item": ["Ocarina"],
        "hylian-shield": ["Hylian Shield"],
        "ocarina-of-time": ["OoT", "Ocarina of Time"],
        "a-link-to-the-past": ["ALttP", "Link to the Past"],
        "breath-of-the-wild": ["BotW", "Breath of the Wild"],
        "tears-of-the-kingdom": ["TotK", "Tears of the Kingdom"],
        "majoras-mask": ["MM", "Majora's Mask"],
        "twilight-princess": ["TP", "Twilight Princess"],
        koroks: ["Korok"],
        zora: ["Zoras"],
        goron: ["Gorons"],
        sheikah: ["Sheikah tribe"]
    },
    parents: {
        link: "hyrule",
        zelda: "hyrule",
        ganondorf: "gerudo-desert",
        ganon: "hyrule",
        navi: "ocarina-of-time",
        sheik: "zelda",
        impa: "sheikah",
        epona: "link",
        midna: "twilight-princess",
        "kakariko-village": "hyrule",
        "gerudo-desert": "hyrule",
        zora: "hyrule",
        goron: "hyrule",
        koroks: "hyrule",
        sheikah: "hyrule",
        hylians: "hyrule",
        "ocarina-of-time": "the-legend-of-zelda",
        "breath-of-the-wild": "the-legend-of-zelda",
        "tears-of-the-kingdom": "the-legend-of-zelda"
    }
});
