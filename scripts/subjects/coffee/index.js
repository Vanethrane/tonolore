/**
 * Coffee — Food & drink subject package.
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
        id: "coffee",
        name: "Coffee",
        rootSlug: "coffee",
        theme: "coffee",
        categories: ["culinary"],
        copyright: {
            title: "Coffee is not owned by Ton-o-Lore.",
            body:
                "Coffee, related names, marks, and materials are the property of Public agricultural and trade history / respective brands and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        coffee: ["Coffee", "café"],
        ethiopia: ["Ethiopia", "Abyssinia"],
        yemen: ["Yemen", "Arabia Felix"],
        "coffea-arabica": ["arabica", "Arabica coffee"],
        "coffea-canephora": ["robusta", "Coffea robusta"],
        yirgacheffe: ["Yirgacheffe", "Yergacheffe"],
        sidama: ["Sidamo", "Sidama coffee"],
        mocha: ["Mocha", "Al-Mukha", "Mokha"],
        kaldi: ["Kaldi the goatherd"],
        espresso: ["espresso", "caffè espresso"],
        "espresso-machine": ["espresso machine", "Gaggia"],
        cappuccino: ["cappuccino"],
        "french-press": ["French press", "cafetière", "press pot"],
        "pour-over": ["pour over", "manual drip"],
        chemex: ["Chemex"],
        barista: ["baristas"],
        "latte-art": ["latte art"],
        "coffee-terroir": ["terroir", "taste of origin"],
        "third-wave-coffee": ["third wave", "third-wave"],
        "specialty-coffee": ["specialty", "SCA coffee"],
        starbucks: ["Starbucks Coffee"],
        "howard-schultz": ["Schultz"],
        seattle: ["Seattle"],
        "italian-bar": ["Italian espresso bar", "stand-up bar"],
        "vienna-coffee-house": ["Viennese café", "Kaffeehaus"],
        "turkish-coffee": ["Turkish coffee", "cezve coffee"],
        brazil: ["Brazil coffee"],
        colombia: ["Colombian coffee"],
        "blue-mountain": ["Jamaica Blue Mountain", "Blue Mountain coffee"],
        roasting: ["roast", "coffee roast"]
    },
    parents: {
        ethiopia: "coffee",
        yemen: "coffee",
        "coffea-arabica": "ethiopia",
        "coffea-canephora": "coffee",
        yirgacheffe: "ethiopia",
        sidama: "ethiopia",
        mocha: "yemen",
        kaldi: "ethiopia",
        espresso: "italian-bar",
        "espresso-machine": "espresso",
        cappuccino: "espresso",
        "french-press": "coffee",
        "pour-over": "third-wave-coffee",
        chemex: "pour-over",
        barista: "espresso",
        "latte-art": "barista",
        "coffee-terroir": "third-wave-coffee",
        "specialty-coffee": "third-wave-coffee",
        starbucks: "seattle",
        "howard-schultz": "starbucks",
        "blue-mountain": "coffea-arabica",
        roasting: "coffee"
    }
});
