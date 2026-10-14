/**
 * Egyptian mythology — Mythology subject package.
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
        id: "egyptian-mythology",
        name: "Egyptian mythology",
        rootSlug: "egyptian-mythology",
        theme: "egyptian-mythology",
        categories: ["mythology"],
        copyright: {
            title: "Egyptian mythology is not owned by Ton-o-Lore.",
            body:
                "Egyptian mythology, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "egyptian-mythology": ["Egyptian mythology", "Kemetic mythology"],
        nile: ["iteru", "River Nile"],
        thebes: ["Waset", "Luxor"],
        memphis: ["Men-nefer", "Hut-ka-Ptah"],
        duat: ["Tuat", "netherworld"],
        karnak: ["Ipet-Sut", "Temple of Amun"],
        "pyramids-of-giza": ["Giza pyramids", "Great Pyramids"],
        "valley-of-the-kings": ["Ta-sekhet-maat", "KV"],
        ennead: ["Great Ennead", "Pesedjet"],
        ra: ["Re", "Amun-Ra", "Ra-Horakhty"],
        atum: ["Tem", "Ra-Atum"],
        osiris: ["Wesir", "Usir"],
        isis: ["Aset", "Iset"],
        set: ["Seth", "Sutekh"],
        horus: ["Heru", "Horus the Elder"],
        anubis: ["Inpu", "Anpu"],
        thoth: ["Djehuty", "Tehuti"],
        maat: ["Ma'at", "Mayet"],
        amun: ["Amen", "Amun-Ra"],
        hathor: ["Hut-Hor"],
        apep: ["Apophis", "Apepi"],
        pharaoh: ["nesu-biti", "king of Egypt"],
        "book-of-the-dead": ["Book of Coming Forth by Day", "rw nw prt m hrw"],
        "weighing-of-the-heart": ["Hall of Two Truths", "psychostasia"],
        "osiris-myth": ["Contendings of Horus and Seth"],
        "solar-barque": ["Mandjet", "Mesektet", "sun boat"],
        ammit: ["Ammut", "Devourer"],
        ptah: ["Pteh"],
        nephthys: ["Nebet-het"],
        "eye-of-horus": ["wedjat", "udjat"],
        "pyramid-texts": ["Pyramid Texts of Unas"]
    },
    parents: {
        atum: "ennead",
        osiris: "ennead",
        isis: "ennead",
        set: "ennead",
        nephthys: "ennead",
        karnak: "thebes",
        "valley-of-the-kings": "thebes",
        "weighing-of-the-heart": "duat",
        ammit: "duat",
        apep: "duat",
        "solar-barque": "ra",
        "pyramids-of-giza": "memphis",
        ptah: "memphis",
        "eye-of-horus": "horus"
    }
});
