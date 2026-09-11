/**
 * Magic: The Gathering subject package — Wizards of the Coast's multiverse TCG.
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
        id: "magic-the-gathering",
        name: "Magic: The Gathering",
        rootSlug: "magic-the-gathering",
        theme: "magic-the-gathering",
        copyright: {
            title: "Magic: The Gathering is not owned by Ton-o-Lore.",
            body:
                "Magic: The Gathering, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Wizards of the Coast, Hasbro, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "magic-the-gathering": ["MTG", "Magic", "Magic the Gathering franchise"],
        "wizards-of-the-coast": ["Wizards", "WotC"],
        planeswalkers: ["Planeswalker", "walker"],
        multiverse: ["Magic multiverse", "Blind Eternities"],
        mana: ["Magic mana"],
        "color-pie": ["five colors", "color philosophy"],
        "the-mending": ["Mending"],
        dominaria: ["Dominaria plane"],
        ravnica: ["Ravnica plane", "city of Ravnica"],
        phyrexia: ["New Phyrexia", "Phyrexian plane"],
        zendikar: ["Zendikar plane"],
        "jace-beleren": ["Jace"],
        "chandra-nalaar": ["Chandra"],
        "liliana-vess": ["Liliana"],
        "garruk-wildspeaker": ["Garruk"],
        "nicol-bolas": ["Bolas", "Nicol Bolas dragon"],
        "gideon-jura": ["Gideon"],
        "nissa-revane": ["Nissa"],
        "ajani-goldmane": ["Ajani"],
        teferi: ["Teferi planeswalker"],
        karn: ["Karn Liberated", "Karn silver golem"],
        "elspeth-tirel": ["Elspeth"],
        gatewatch: ["The Gatewatch", "Gatewatch coalition"],
        phyrexians: ["Phyrexian", "Phyrexian army"],
        "azorius-senate": ["Azorius", "Azorius guild"],
        "golgari-swarm": ["Golgari", "Golgari guild"],
        "dimir-guild": ["Dimir", "House Dimir guild"],
        "war-of-the-spark": ["War of the Spark event"],
        "phyrexian-invasion": ["Phyrexian war", "Multiverse invasion"],
        "magic-the-gathering-card-game": ["MTG card game", "Magic card game"],
        "commander-format": ["EDH", "Commander format"]
    },
    parents: {
        "wizards-of-the-coast": "magic-the-gathering",
        planeswalkers: "magic-the-gathering",
        multiverse: "magic-the-gathering",
        mana: "magic-the-gathering",
        "color-pie": "magic-the-gathering",
        "the-mending": "dominaria",
        dominaria: "multiverse",
        ravnica: "multiverse",
        phyrexia: "multiverse",
        zendikar: "multiverse",
        "jace-beleren": "planeswalkers",
        "chandra-nalaar": "planeswalkers",
        "liliana-vess": "planeswalkers",
        "garruk-wildspeaker": "planeswalkers",
        "nicol-bolas": "planeswalkers",
        "gideon-jura": "planeswalkers",
        "nissa-revane": "planeswalkers",
        "ajani-goldmane": "planeswalkers",
        teferi: "planeswalkers",
        karn: "planeswalkers",
        "elspeth-tirel": "planeswalkers",
        gatewatch: "planeswalkers",
        phyrexians: "phyrexia",
        "azorius-senate": "ravnica",
        "golgari-swarm": "ravnica",
        "dimir-guild": "ravnica",
        "war-of-the-spark": "ravnica",
        "phyrexian-invasion": "phyrexia",
        "magic-the-gathering-card-game": "magic-the-gathering",
        "commander-format": "magic-the-gathering-card-game"
    }
});
