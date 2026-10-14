/**
 * Avatar: The Last Airbender — Western animation subject package.
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
        id: "avatar-the-last-airbender",
        name: "Avatar: The Last Airbender",
        rootSlug: "avatar-the-last-airbender",
        theme: "avatar-the-last-airbender",
        categories: ["western-animation"],
        copyright: {
            title: "Avatar: The Last Airbender is not owned by Ton-o-Lore.",
            body:
                "Avatar: The Last Airbender, related names, marks, and materials are the property of Nickelodeon / Paramount / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "avatar-the-last-airbender": ["ATLA", "Avatar", "The Last Airbender", "Avatar TLA"],
        "michael-dante-dimartino": ["DiMartino", "Mike DiMartino"],
        "bryan-konietzko": ["Konietzko", "Bryan"],
        "atla-series": ["Avatar series", "ATLA series", "Book Water Earth Fire"],
        "legend-of-korra": ["Korra", "LOK", "TLOK"],
        "the-gaang": ["Gaang", "Team Avatar"],
        "air-nomads": ["Air Nomad", "the airbenders"],
        "water-tribes": ["Water Tribe", "the Water Tribe"],
        "earth-kingdom": ["Earth Kingdom"],
        "fire-nation": ["Fire Nation"],
        "kyoshi-warriors": ["Kyoshi Warrior"],
        "ba-sing-se": ["Ba Sing Se", "the walled city"],
        "southern-water-tribe": ["South Pole", "Southern Tribe"],
        aang: ["the Avatar", "Avatar Aang"],
        katara: ["Katara of the Southern Water Tribe"],
        sokka: ["Sokka of the Southern Water Tribe"],
        "toph-bei-fong": ["Toph", "The Blind Bandit", "Toph Beifong"],
        zuko: ["Prince Zuko", "Lee"],
        iroh: ["Uncle Iroh", "Dragon of the West", "Mushi"],
        azula: ["Princess Azula"],
        ozai: ["Fire Lord Ozai", "the Phoenix King"],
        sozin: ["Fire Lord Sozin"],
        "avatar-roku": ["Roku"],
        appa: ["sky bison"],
        momo: ["winged lemur"],
        suki: ["Suki of Kyoshi Island"],
        korra: ["Avatar Korra"],
        "sozins-comet": ["the comet", "Sozin's Comet"],
        "avatar-state": ["the Avatar State"],
        "avatar-cycle": ["Avatar reincarnation", "the cycle"],
        energybending: ["energy-bending"]
    },
    parents: {
        aang: "the-gaang",
        katara: "the-gaang",
        sokka: "the-gaang",
        "toph-bei-fong": "the-gaang",
        appa: "the-gaang",
        momo: "the-gaang",
        zuko: "fire-nation",
        iroh: "fire-nation",
        azula: "fire-nation",
        ozai: "fire-nation",
        sozin: "fire-nation",
        "avatar-roku": "fire-nation",
        suki: "kyoshi-warriors",
        korra: "water-tribes",
        "southern-water-tribe": "water-tribes",
        "ba-sing-se": "earth-kingdom",
        "atla-series": "avatar-the-last-airbender",
        "legend-of-korra": "avatar-the-last-airbender"
    }
});
