/**
 * Norse mythology — Mythology subject package.
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
        id: "norse-mythology",
        name: "Norse mythology",
        rootSlug: "norse-mythology",
        theme: "norse-mythology",
        categories: ["mythology"],
        copyright: {
            title: "Norse mythology is not owned by Ton-o-Lore.",
            body:
                "Norse mythology, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "norse-mythology": ["Norse mythology", "Northern mythology", "Eddic mythology"],
        yggdrasil: ["Yggdrasill", "World Tree"],
        asgard: ["Asgardr", "Asaheim"],
        midgard: ["Midgardr", "Middle-earth"],
        jotunheim: ["Jotunheimr", "Utgard"],
        helheim: ["Hel", "Niflhel"],
        valhalla: ["Valholl", "Hall of the Slain"],
        bifrost: ["Bifrost", "Asbru", "rainbow bridge"],
        aesir: ["the Aesir", "Ases"],
        vanir: ["the Vanir"],
        odin: ["Othinn", "Woden", "Allfather"],
        thor: ["Thorr", "Donar"],
        freyja: ["Freya", "Freyia"],
        freyr: ["Frey", "Yngvi"],
        loki: ["Loptr", "Hvedrungr"],
        baldur: ["Baldr", "Balder"],
        frigg: ["Frigga", "Frija"],
        hel: ["Hela"],
        heimdall: ["Heimdallr", "Rig"],
        tyr: ["Tir", "Tiw"],
        valkyries: ["Valkyrjur", "the Valkyries"],
        fenrir: ["Fenrisulfr", "Fenris"],
        jormungandr: ["Jormungand", "Midgard Serpent", "World Serpent"],
        surtr: ["Surt", "Surtr of Muspell"],
        mjolnir: ["Mjollnir", "Thor's hammer"],
        "poetic-edda": ["Elder Edda", "Codex Regius poems"],
        "prose-edda": ["Younger Edda", "Snorra Edda"],
        "snorri-sturluson": ["Snorri"],
        ragnarok: ["Ragnarokr", "Twilight of the Gods"],
        "death-of-baldur": ["Baldr's death", "mistletoe killing"]
    },
    parents: {
        odin: "aesir",
        thor: "aesir",
        frigg: "aesir",
        baldur: "aesir",
        tyr: "aesir",
        heimdall: "aesir",
        freyja: "vanir",
        freyr: "vanir",
        valhalla: "asgard",
        bifrost: "asgard",
        hel: "helheim",
        mjolnir: "thor",
        asgard: "yggdrasil",
        midgard: "yggdrasil",
        jotunheim: "yggdrasil",
        helheim: "yggdrasil"
    }
});
