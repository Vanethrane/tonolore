/**
 * Mario subject package — Nintendo Super Mario franchise.
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
        id: "mario",
        name: "Mario",
        rootSlug: "mario",
        theme: "mario",
        copyright: {
            title: "Mario is not owned by Ton-o-Lore.",
            body:
                "Mario, Super Mario, and all related names, characters, artwork, logos, and intellectual property are the property of Nintendo and/or their respective rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by Nintendo. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        mario: ["Super Mario", "Mario franchise", "Super Mario Bros franchise"],
        "mario-character": ["Jumpman", "Super Mario", "Mario Bros"],
        nintendo: ["Nintendo Co., Ltd.", "Nintendo of America"],
        "shigeru-miyamoto": ["Miyamoto", "Miyamoto Shigeru"],
        "super-mario-bros": ["SMB", "Super Mario Brothers"],
        "mario-kart": ["MarioKart", "MK"],
        "mario-odyssey": ["SMO", "Odyssey"],
        "donkey-kong-arcade": ["Donkey Kong", "DK arcade"],
        "mushroom-kingdom": ["Mushroom World"],
        "peachs-castle": ["Princess Peach's Castle", "Peach Castle"],
        "bowsers-castle": ["Koopa Castle", "Bowser Castle"],
        "new-donk-city": ["NDC", "New Donk"],
        "koopa-troop": ["Koopa Troopas", "Bowser's Army"],
        "power-stars": ["Power Star", "Stars"],
        "super-mushroom": ["Mushroom", "Super Mushroom power-up"],
        "fire-flower": ["Fire Mario"],
        "power-moons": ["Power Moon", "Moons"],
        luigi: ["Green Mario", "Baby Luigi"],
        "princess-peach": ["Peach", "Princess Toadstool"],
        bowser: ["King Koopa", "Koopa King"],
        yoshi: ["T. Yoshisaur Munchakoopas"],
        toad: ["Kinopio", "Mushroom Retainer"],
        "princess-daisy": ["Daisy"],
        wario: ["Wario Man"],
        waluigi: ["Waluigi"],
        "donkey-kong": ["DK", "Donkey Kong Jr."],
        rosalina: ["Rosetta"],
        "princess-pauline": ["Pauline", "Lady"],
        "bowser-jr": ["Bowser Junior", "Junior"],
        toadette: ["Toadette"]
    },
    parents: {
        "mario-character": "mushroom-kingdom",
        luigi: "mushroom-kingdom",
        "princess-peach": "mushroom-kingdom",
        toad: "mushroom-kingdom",
        toadette: "mushroom-kingdom",
        yoshi: "mushroom-kingdom",
        bowser: "koopa-troop",
        "bowser-jr": "koopa-troop",
        "peachs-castle": "mushroom-kingdom",
        "bowsers-castle": "koopa-troop",
        "princess-pauline": "new-donk-city",
        "super-mushroom": "super-mario-bros",
        "fire-flower": "super-mario-bros",
        "power-moons": "mario-odyssey"
    }
});
