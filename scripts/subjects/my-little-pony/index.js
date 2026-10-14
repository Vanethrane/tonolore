/**
 * My Little Pony — Toys & collectibles subject package.
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
        id: "my-little-pony",
        name: "My Little Pony",
        rootSlug: "my-little-pony",
        theme: "my-little-pony",
        categories: ["toys"],
        copyright: {
            title: "My Little Pony is not owned by Ton-o-Lore.",
            body:
                "My Little Pony, related names, marks, and materials are the property of Hasbro / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "my-little-pony": ["My Little Pony", "MLP", "My Little Ponies"],
        hasbro: ["Hasbro, Inc."],
        "bonnie-zacherle": ["Zacherle", "Bonnie Zacherle"],
        "lauren-faust": ["Faust"],
        "g1-my-little-pony": ["G1", "Generation 1", "original My Little Pony"],
        "friendship-is-magic": ["FiM", "MLP:FiM", "Friendship is Magic"],
        "equestria-girls": ["EQG", "Equestria Girls"],
        "a-new-generation": ["G5", "Generation 5", "MLP: ANG"],
        equestria: ["land of Equestria"],
        ponyville: ["Ponyville, Equestria"],
        canterlot: ["Canterlot Castle"],
        "crystal-empire": ["the Crystal Empire"],
        "mane-six": ["Mane 6", "the Mane Six"],
        "twilight-sparkle": ["Twilight", "Twi", "Princess Twilight"],
        "rainbow-dash": ["Dash", "RD", "Rainbow"],
        "pinkie-pie": ["Pinkie", "Pinkamena Diane Pie"],
        rarity: ["Rarity Belle"],
        fluttershy: ["Flutters"],
        applejack: ["AJ"],
        spike: ["Spike the Dragon"],
        "princess-celestia": ["Celestia", "Princess of the Sun"],
        "princess-luna": ["Luna", "Princess of the Night"],
        "nightmare-moon": ["Nightmare Moon", "NMM"],
        "princess-cadance": ["Cadance", "Cadence", "Princess Mi Amore Cadenza"],
        "starlight-glimmer": ["Starlight"],
        "sunset-shimmer": ["Sunset"],
        discord: ["Discord the Draconequus"],
        "elements-of-harmony": ["the Elements", "Elements"],
        "cutie-mark": ["cutie marks", "Cutie Mark"],
        "friendship-magic": ["magic of friendship", "friendship"]
    },
    parents: {
        "g1-my-little-pony": "my-little-pony",
        "friendship-is-magic": "my-little-pony",
        "equestria-girls": "my-little-pony",
        "a-new-generation": "my-little-pony",
        ponyville: "equestria",
        canterlot: "equestria",
        "crystal-empire": "equestria",
        "twilight-sparkle": "mane-six",
        "rainbow-dash": "mane-six",
        "pinkie-pie": "mane-six",
        rarity: "mane-six",
        fluttershy: "mane-six",
        applejack: "mane-six",
        spike: "mane-six",
        "princess-celestia": "canterlot",
        "princess-luna": "canterlot",
        "nightmare-moon": "princess-luna",
        "princess-cadance": "crystal-empire",
        "sunset-shimmer": "equestria-girls"
    }
});
