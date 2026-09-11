/**
 * BattleTech subject package — Inner Sphere mech warfare and Clan invasion lore.
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
        id: "battletech",
        name: "BattleTech",
        rootSlug: "battletech",
        theme: "battletech",
        copyright: {
            title: "BattleTech is not owned by Ton-o-Lore.",
            body:
                "BattleTech, MechWarrior, and related names, characters, artwork, logos, and intellectual property are the property of their respective rights holders, including Topps Company, Inc., Catalyst Game Labs, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        battletech: ["BattleTech franchise", "Classic BattleTech"],
        fasa: ["FASA Corporation"],
        "catalyst-game-labs": ["Catalyst", "CGL"],
        topps: ["Topps Company"],
        "inner-sphere": ["Inner Sphere region"],
        clans: ["The Clans", "Clan invaders"],
        battlemechs: ["BattleMech", "'Mechs", "Mechs"],
        "succession-wars": ["Succession War era"],
        "star-league": ["Star League era", "First Star League"],
        "house-steiner": ["House Steiner Lyran", "Lyran Commonwealth"],
        "house-davion": ["House Davion", "Federated Suns"],
        "house-liao": ["House Liao", "Capellan Confederation"],
        "house-kurita": ["House Kurita", "Draconis Combine"],
        "house-marik": ["House Marik", "Free Worlds League"],
        comstar: ["ComStar Order", "Com Star"],
        "clan-wolf": ["Wolf Clan"],
        "clan-jade-falcon": ["Jade Falcon Clan"],
        "clan-smoke-jaguar": ["Smoke Jaguar Clan"],
        "clan-ghost-bear": ["Ghost Bear Clan"],
        "hanse-davion": ["Hanse Davion First Prince"],
        "melissa-steiner-davion": ["Melissa Steiner", "Archon Melissa"],
        "ulric-kerensky": ["Ulric Kerensky ilKhan"],
        "natasha-kerensky": ["Natasha Kerensky Black Widow", "Black Widow Company"],
        "myndo-waterly": ["Primus Myndo Waterly"],
        "precentor-martial": ["Precentor Martial Focht", "Com Guard commander"],
        terra: ["Terra Earth", "Throneworld"],
        tharkad: ["Tharkad capital"],
        outreach: ["Outreach Hiring Hall"],
        "clan-invasion": ["Operation REVIVAL", "3050 invasion"],
        "battle-of-tukayyid": ["Tukayyid", "Tukayyid truce"],
        "fourth-succession-war": ["4th Succession War", "FSW 3028"],
        mechwarrior: ["MechWarrior games", "MechWarrior franchise"]
    },
    parents: {
        fasa: "battletech",
        "catalyst-game-labs": "battletech",
        topps: "battletech",
        "inner-sphere": "battletech",
        clans: "battletech",
        battlemechs: "battletech",
        "succession-wars": "inner-sphere",
        "star-league": "battletech",
        "house-steiner": "inner-sphere",
        "house-davion": "inner-sphere",
        "house-liao": "inner-sphere",
        "house-kurita": "inner-sphere",
        "house-marik": "inner-sphere",
        comstar: "inner-sphere",
        "clan-wolf": "clans",
        "clan-jade-falcon": "clans",
        "clan-smoke-jaguar": "clans",
        "clan-ghost-bear": "clans",
        "hanse-davion": "house-davion",
        "melissa-steiner-davion": "house-steiner",
        "ulric-kerensky": "clan-wolf",
        "natasha-kerensky": "clans",
        "myndo-waterly": "comstar",
        "precentor-martial": "comstar",
        terra: "inner-sphere",
        tharkad: "house-steiner",
        outreach: "inner-sphere",
        "clan-invasion": "clans",
        "battle-of-tukayyid": "clan-invasion",
        "fourth-succession-war": "succession-wars",
        mechwarrior: "battletech"
    }
});
