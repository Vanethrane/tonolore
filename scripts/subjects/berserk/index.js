/**
 * Berserk subject package — Kentaro Miura's dark fantasy manga.
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
        id: "berserk",
        name: "Berserk",
        rootSlug: "berserk",
        theme: "berserk",
        copyright: {
            title: "Berserk is not owned by Ton-o-Lore.",
            body:
                "Berserk, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Kentaro Miura, Kouji Mori, Studio Gaga, Hakusensha, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        berserk: ["Berserk manga", "ベルセルク"],
        "kentaro-miura": ["Kentarou Miura", "Miura", "Kentaro Miura"],
        "kouji-mori": ["Koji Mori", "Mori"],
        guts: ["Gattsu", "Black Swordsman", "The Black Swordsman"],
        griffith: ["Hawk of Light", "White Falcon", "Femto"],
        femto: ["Griffith", "Hawk of Darkness"],
        casca: ["Casca of the Hawks"],
        "skull-knight": ["Skull Knight", "Knight of Skeleton"],
        "brand-of-sacrifice": ["Brand", "Mark of Sacrifice"],
        behelit: ["Beherit", "Behelit"],
        "crimson-behelit": ["Egg of the King", "Crimson Beherit"],
        "berserker-armor": ["Berserk Armor", "Berserker's Armour"],
        dragonslayer: ["Dragon Slayer"],
        eclipse: ["Eclipse Ceremony", "The Eclipse"],
        "band-of-the-hawk": ["Band of the Falcon", "Hawks"],
        "new-band-of-the-falcon": ["Neo Band of the Falcon", "New Hawks"],
        "god-hand": ["Godhand", "Five Angels"],
        "nosferatu-zodd": ["Zodd", "Zodd the Immortal"],
        "golden-age-arc": ["Golden Age"],
        farnese: ["Farnese"],
        schierke: ["Shierke"]
    },
    parents: {
        guts: "guts-traveling-party",
        puck: "guts-traveling-party",
        isidro: "guts-traveling-party",
        farnese: "guts-traveling-party",
        serpico: "guts-traveling-party",
        schierke: "guts-traveling-party",
        casca: "band-of-the-hawk",
        judeau: "band-of-the-hawk",
        pippin: "band-of-the-hawk",
        corkus: "band-of-the-hawk",
        rickert: "band-of-the-hawk",
        gaston: "band-of-the-hawk",
        femto: "god-hand",
        void: "god-hand",
        slan: "god-hand",
        "nosferatu-zodd": "apostle",
        grunbeld: "new-band-of-the-falcon",
        wyald: "apostle",
        mozgus: "holy-see",
        "crimson-behelit": "behelit",
        "tower-of-conviction": "albion"
    }
});
