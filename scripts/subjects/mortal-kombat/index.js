/**
 * Mortal Kombat — Fighting games subject package.
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
        id: "mortal-kombat",
        name: "Mortal Kombat",
        rootSlug: "mortal-kombat",
        theme: "mortal-kombat",
        categories: ["fighting-games"],
        copyright: {
            title: "Mortal Kombat is not owned by Ton-o-Lore.",
            body:
                "Mortal Kombat, related names, marks, and materials are the property of NetherRealm / Warner Bros. / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "mortal-kombat": ["Mortal Kombat", "MK"],
        "liu-kang": ["Liu Kang", "Fire God Liu Kang"],
        raiden: ["Raiden", "Lord Raiden", "Rayden"],
        "kung-lao": ["Kung Lao"],
        "johnny-cage": ["Johnny Cage", "Cage"],
        "sonya-blade": ["Sonya", "Sonya Blade"],
        "shang-tsung": ["Shang Tsung"],
        scorpion: ["Scorpion", "Hanzo Hasashi"],
        "sub-zero": ["Sub-Zero", "Bi-Han", "Kuai Liang"],
        "shao-kahn": ["Shao Kahn", "Shao Kang", "Emperor Shao Kahn"],
        kitana: ["Kitana", "Princess Kitana"],
        mileena: ["Mileena"],
        sindel: ["Sindel", "Queen Sindel"],
        baraka: ["Baraka"],
        goro: ["Goro", "Prince Goro"],
        earthrealm: ["Earthrealm", "Earth Realm"],
        outworld: ["Outworld", "Out World"],
        netherrealm: ["Netherrealm", "Nether Realm", "Netherealm"],
        "lin-kuei": ["Lin Kuei", "Lin Kuei clan"],
        "shirai-ryu": ["Shirai Ryu", "Shirai Ryu clan"],
        "special-forces": ["Special Forces", "Outer World Investigation Agency"],
        "wu-shi-academy": ["Wu Shi Academy", "Wu Shi"],
        "kahn-coliseum": ["Kahn's Koliseum", "Shao Kahn's Arena", "Koliseum"],
        "elder-gods": ["Elder Gods", "The Elder Gods"],
        "mortal-kombat-tournament": ["Mortal Kombat tournament", "the tournament"],
        fatalities: ["Fatality", "Fatalities", "finishing move"],
        "mortal-kombat-1992": ["Mortal Kombat (1992)", "Mortal Kombat 1 (1992)", "MK1 1992", "original Mortal Kombat"],
        "mortal-kombat-11": ["Mortal Kombat 11", "MK11"],
        "mortal-kombat-1": ["Mortal Kombat 1", "MK1", "Mortal Kombat 1 (2023)"]
    },
    parents: {
        "liu-kang": "earthrealm",
        raiden: "earthrealm",
        "kung-lao": "earthrealm",
        "johnny-cage": "earthrealm",
        "sonya-blade": "special-forces",
        scorpion: "shirai-ryu",
        "sub-zero": "lin-kuei",
        "shao-kahn": "outworld",
        kitana: "outworld",
        mileena: "outworld",
        sindel: "outworld",
        baraka: "outworld",
        goro: "outworld",
        "shang-tsung": "outworld"
    }
});
