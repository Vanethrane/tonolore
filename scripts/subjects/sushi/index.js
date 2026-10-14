/**
 * Sushi — Food & drink subject package.
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
        id: "sushi",
        name: "Sushi",
        rootSlug: "sushi",
        theme: "sushi",
        categories: ["culinary"],
        copyright: {
            title: "Sushi is not owned by Ton-o-Lore.",
            body:
                "Sushi, related names, marks, and materials are the property of Japanese culinary tradition / respective chefs and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        sushi: ["Sushi", "zushi"],
        narezushi: ["narezushi", "fermented sushi"],
        "edomae-sushi": ["Edo-mae", "Edomae", "Edo-mae sushi"],
        "hanaya-yohei": ["Yohei", "Hanaya Yohei"],
        edo: ["Edo", "Yedo"],
        nigiri: ["nigiri-zushi", "nigirizushi"],
        maki: ["makizushi", "sushi roll", "norimaki"],
        "gunkan-maki": ["gunkan", "battleship roll"],
        sashimi: ["sashimi"],
        "sushi-rice": ["shari", "sumeshi", "vinegared rice"],
        "rice-vinegar": ["komezu", "awasezu"],
        nori: ["nori", "laver"],
        wasabi: ["wasabi", "Wasabia japonica"],
        "soy-sauce": ["shoyu", "soy"],
        gari: ["gari", "pickled ginger"],
        otoro: ["otoro", "o-toro", "fatty tuna"],
        "jiro-ono": ["Jiro", "Ono Jiro"],
        "sukiyabashi-jiro": ["Sukiyabashi Jiro", "Jiro's"],
        itamae: ["itamae", "sushi chef"],
        omakase: ["omakase"],
        tsukiji: ["Tsukiji", "Tsukiji Market"],
        toyosu: ["Toyosu", "Toyosu Market"],
        tokyo: ["Tokyo", "Tōkyō"],
        "kaiten-sushi": ["kaiten-zushi", "conveyor-belt sushi", "sushi-go-round"],
        "yoshiaki-shiraishi": ["Shiraishi"],
        "california-roll": ["California roll", "uramaki"],
        osaka: ["Osaka"],
        funazushi: ["funazushi", "funa-zushi"],
        tamago: ["tamago", "tamagoyaki"]
    },
    parents: {
        narezushi: "sushi",
        funazushi: "narezushi",
        "edomae-sushi": "sushi",
        edo: "tokyo",
        nigiri: "edomae-sushi",
        maki: "sushi",
        "gunkan-maki": "maki",
        "sushi-rice": "sushi",
        "rice-vinegar": "sushi-rice",
        "hanaya-yohei": "nigiri",
        "jiro-ono": "edomae-sushi",
        "sukiyabashi-jiro": "jiro-ono",
        itamae: "edomae-sushi",
        omakase: "itamae",
        tsukiji: "tokyo",
        toyosu: "tokyo",
        otoro: "nigiri",
        tamago: "nigiri",
        "kaiten-sushi": "osaka",
        "yoshiaki-shiraishi": "kaiten-sushi",
        "california-roll": "maki"
    }
});
