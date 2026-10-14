/**
 * Journey to the West — Folklore & legend subject package.
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
        id: "journey-to-the-west",
        name: "Journey to the West",
        rootSlug: "journey-to-the-west",
        theme: "journey-to-the-west",
        categories: ["folklore"],
        copyright: {
            title: "Journey to the West is not owned by Ton-o-Lore.",
            body:
                "Journey to the West, related names, marks, and materials are the property of Public-domain classic / respective modern adaptations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "journey-to-the-west": ["Journey to the West", "Xiyouji", "Monkey"],
        "journey-to-the-west-novel": ["Xiyou ji", "Hsi-yu chi", "the hundred-chapter novel"],
        "wu-chengen": ["Wu Cheng'en", "Wu Chengen"],
        "xuanzang-historical": ["Xuanzang", "Hsuan-tsang", "Tripitaka (historical)"],
        "tang-pilgrimage": ["scripture pilgrimage", "the pilgrims"],
        changan: ["Chang'an", "Xi'an", "Tang capital"],
        "flower-fruit-mountain": ["Huaguo Shan", "Mount of Flowers and Fruit"],
        "water-curtain-cave": ["Shuilian Dong"],
        heaven: ["Celestial Court", "the Jade Emperor's Heaven"],
        "flaming-mountains": ["Huoyan Shan", "Flaming Mountain"],
        "thunderclap-monastery": ["Lei Yin Monastery", "Vulture Peak temple"],
        "western-heaven": ["Xitian", "the West"],
        "tang-sanzang": ["Tripitaka", "Tang Monk", "Xuanzang (novel)"],
        "sun-wukong": ["Monkey King", "Great Sage Equal to Heaven", "Sun Wukong"],
        "zhu-bajie": ["Pigsy", "Zhu Wuneng", "Eight Precepts Pig"],
        "sha-wujing": ["Sandy", "Sha Monk", "Friar Sand"],
        "white-dragon-horse": ["Bai Long Ma", "Dragon Horse", "Yu Long"],
        "jade-emperor": ["Yudi", "Jade Lord"],
        buddha: ["Tathagata", "Rulai", "Shakyamuni"],
        guanyin: ["Guanyin", "Kuan Yin", "Avalokiteshvara"],
        "emperor-taizong": ["Tang Taizong", "Li Shimin"],
        "golden-cudgel": ["Ruyi Jingu Bang", "Compliant Golden-Hooped Rod"],
        "tightening-fillet": ["gold fillet", "tight hoop", "jinguban"],
        "peaches-of-immortality": ["heavenly peaches", "Pantao"],
        "princess-iron-fan": ["Raksasi", "Iron Fan Princess"],
        "bull-demon-king": ["Bull King", "Taurus Demon"],
        "white-bone-demon": ["Baigujing", "White Bone Spirit"],
        "revolt-against-heaven": ["Havoc in Heaven", "war on Heaven"],
        "eighty-one-tribulations": ["81 tribulations", "nine nines"],
        "five-elements-mountain": ["Five Phases Mountain", "Wuxing Shan"],
        nezha: ["Nezha", "Nataku", "Third Lotus Prince"]
    },
    parents: {
        "tang-sanzang": "tang-pilgrimage",
        "sun-wukong": "tang-pilgrimage",
        "zhu-bajie": "tang-pilgrimage",
        "sha-wujing": "tang-pilgrimage",
        "white-dragon-horse": "tang-pilgrimage",
        "tightening-fillet": "tang-sanzang",
        "golden-cudgel": "sun-wukong",
        "water-curtain-cave": "flower-fruit-mountain",
        "jade-emperor": "heaven",
        "peaches-of-immortality": "heaven",
        "revolt-against-heaven": "heaven",
        "thunderclap-monastery": "western-heaven",
        buddha: "thunderclap-monastery",
        "princess-iron-fan": "flaming-mountains",
        "bull-demon-king": "flaming-mountains",
        "five-elements-mountain": "buddha",
        "wu-chengen": "journey-to-the-west-novel"
    }
});
