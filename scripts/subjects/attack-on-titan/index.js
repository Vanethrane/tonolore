/**
 * Attack on Titan subject package — Hajime Isayama's manga and anime.
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
        id: "attack-on-titan",
        name: "Attack on Titan",
        rootSlug: "attack-on-titan",
        theme: "attack-on-titan",
        copyright: {
            title: "Attack on Titan is not owned by Ton-o-Lore.",
            body:
                "Attack on Titan (Shingeki no Kyojin), its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Hajime Isayama, Kodansha, WIT Studio, MAPPA, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "attack-on-titan": ["Shingeki no Kyojin", "SnK", "AoT", "進撃の巨人"],
        "hajime-isayama": ["Isayama", "Isayama Hajime"],
        "eren-yeager": ["Eren Jaeger", "Eren Yeager", "Eren"],
        "mikasa-ackerman": ["Mikasa"],
        "armin-arlert": ["Armin"],
        "levi-ackerman": ["Levi", "Captain Levi"],
        "erwin-smith": ["Erwin", "Commander Erwin"],
        "hange-zoe": ["Hange", "Hanji Zoe", "Hanji Zoë"],
        "zeke-yeager": ["Zeke", "Beast Titan", "Zeke Jaeger"],
        "reiner-braun": ["Reiner", "Armored Titan"],
        "annie-leonhart": ["Annie", "Female Titan"],
        "bertholdt-hoover": ["Bertholdt", "Bertolt Hoover", "Colossal Titan"],
        "historia-reiss": ["Historia", "Christa Lenz", "Christa"],
        "jean-kirschtein": ["Jean", "Jean Kirstein"],
        "sasha-blouse": ["Sasha", "Potato Girl"],
        "connie-springer": ["Connie"],
        "survey-corps": ["Scout Regiment", "Scouts", "Survey Corps"],
        "military-police": ["Military Police", "MP"],
        "warrior-unit": ["Warriors", "Marley Warriors"],
        paradis: ["Paradis", "Paradis Island"],
        marley: ["Marley"],
        "wall-maria": ["Maria"],
        "wall-rose": ["Rose"],
        "wall-sina": ["Sina"],
        shiganshina: ["Shiganshina"],
        titans: ["Titan", "Kyojin"],
        "founding-titan": ["Founding", "Coordinate"],
        "attack-titan": ["Attack"]
    },
    parents: {
        "eren-yeager": "survey-corps",
        "mikasa-ackerman": "survey-corps",
        "armin-arlert": "survey-corps",
        "levi-ackerman": "survey-corps",
        "erwin-smith": "survey-corps",
        "hange-zoe": "survey-corps",
        "jean-kirschtein": "survey-corps",
        "sasha-blouse": "survey-corps",
        "connie-springer": "survey-corps",
        "reiner-braun": "warrior-unit",
        "annie-leonhart": "warrior-unit",
        "bertholdt-hoover": "warrior-unit",
        "zeke-yeager": "warrior-unit",
        "founding-titan": "titans",
        "attack-titan": "titans",
        shiganshina: "wall-maria",
        "wall-maria": "paradis",
        "wall-rose": "paradis",
        "wall-sina": "paradis"
    }
});
