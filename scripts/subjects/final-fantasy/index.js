/**
 * Final Fantasy subject package — Square Enix's long-running RPG franchise.
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
        id: "final-fantasy",
        name: "Final Fantasy",
        rootSlug: "final-fantasy",
        theme: "final-fantasy",
        copyright: {
            title: "Final Fantasy is not owned by Ton-o-Lore.",
            body:
                "Final Fantasy, its characters, artwork, logos, and related intellectual property are the property of Square Enix Co., Ltd. and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Square Enix or those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "final-fantasy": ["FF", "Final Fantasy series"],
        "square-enix": ["Square Enix Holdings", "Square Soft", "Squaresoft"],
        "hironobu-sakaguchi": ["Sakaguchi"],
        "nobuo-uematsu": ["Uematsu"],
        "crystal-ff": ["Crystal", "Crystals", "Elemental crystals"],
        "chaos-ff": ["Chaos", "Fiend of Chaos"],
        chocobo: ["Chocobos", "Choco"],
        moogle: ["Moogles", "Mog"],
        "summons-ff": ["Espers", "Eidolons", "Aeons", "Guardian Forces"],
        "airship-ff": ["Airships", "Flying ship"],
        "cid-ff": ["Cid", "Cid Highwind"],
        "warrior-of-light": ["Warriors of Light", "WoL"],
        "final-fantasy-vii": ["FFVII", "FF7", "Final Fantasy 7"],
        "cloud-strife": ["Cloud"],
        sephiroth: ["One-Winged Angel"],
        "aerith-gainsborough": ["Aeris", "Aerith"],
        "tifa-lockhart": ["Tifa"],
        midgar: ["City of Midgar"],
        shinra: ["Shinra Inc.", "Shin-Ra", "Shinra Company"],
        lifestream: ["Mako", "Planet's life force"],
        materia: ["Magicite materia"],
        jenova: ["Calamity from the Skies", "Jenova Project"],
        "final-fantasy-vi": ["FFVI", "FF6", "Final Fantasy 6", "Final Fantasy III SNES"],
        "terra-branford": ["Tina", "Terra"],
        "kefka-palazzo": ["Kefka"],
        "final-fantasy-x": ["FFX", "FF10", "Final Fantasy 10"],
        tidus: ["Tidus of Zanarkand"],
        yuna: ["Lady Yuna"],
        "sin-spira": ["Sin"],
        spira: ["World of Spira"],
        "final-fantasy-xiv": ["FFXIV", "FF14", "A Realm Reborn"],
        eorzea: ["Realm of Eorzea"],
        "primals-ffxiv": ["Primal", "Eikons"]
    },
    parents: {
        "crystal-ff": "final-fantasy",
        "chaos-ff": "final-fantasy",
        chocobo: "final-fantasy",
        moogle: "final-fantasy",
        "summons-ff": "final-fantasy",
        "airship-ff": "final-fantasy",
        "cid-ff": "final-fantasy",
        "warrior-of-light": "final-fantasy",
        "final-fantasy-vii": "final-fantasy",
        "cloud-strife": "final-fantasy-vii",
        sephiroth: "final-fantasy-vii",
        "aerith-gainsborough": "final-fantasy-vii",
        "tifa-lockhart": "final-fantasy-vii",
        midgar: "final-fantasy-vii",
        shinra: "midgar",
        lifestream: "final-fantasy-vii",
        materia: "lifestream",
        jenova: "final-fantasy-vii",
        "final-fantasy-vi": "final-fantasy",
        "terra-branford": "final-fantasy-vi",
        "kefka-palazzo": "final-fantasy-vi",
        "final-fantasy-x": "final-fantasy",
        tidus: "final-fantasy-x",
        yuna: "final-fantasy-x",
        "sin-spira": "spira",
        spira: "final-fantasy-x",
        "final-fantasy-xiv": "final-fantasy",
        eorzea: "final-fantasy-xiv",
        "primals-ffxiv": "eorzea"
    }
});
