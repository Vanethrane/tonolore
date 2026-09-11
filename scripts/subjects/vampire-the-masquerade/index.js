/**
 * Vampire: The Masquerade subject package — World of Darkness tabletop RPG.
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
        id: "vampire-the-masquerade",
        name: "Vampire: The Masquerade",
        rootSlug: "vampire-the-masquerade",
        theme: "vampire-the-masquerade",
        copyright: {
            title: "Vampire: The Masquerade is not owned by Ton-o-Lore.",
            body:
                "Vampire: The Masquerade, the World of Darkness, their characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Paradox Interactive, White Wolf Publishing, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "vampire-the-masquerade": ["VtM", "Vampire Masquerade", "Vampire the Masquerade"],
        "white-wolf": ["White Wolf Publishing", "WW"],
        "paradox-interactive": ["Paradox", "Paradox AB"],
        "mark-rein-hagen": ["Mark Rein-Hagen", "Rein-Hagen"],
        "world-of-darkness": ["WoD", "World of Darkness setting"],
        kindred: ["Vampires", "Cainites"],
        "the-masquerade": ["Masquerade", "Tradition of the Masquerade"],
        "the-embrace": ["Embrace", "Vampiric Embrace"],
        disciplines: ["Vampiric Disciplines", "Clan Disciplines"],
        "blood-bond": ["Blood bond", "Regnant bond"],
        coterie: ["Coterie group", "Player coterie"],
        prince: ["Prince of the city", "Camarilla Prince"],
        elysium: ["Elysium ground", "Elysium truce"],
        ghouls: ["Ghoul", "Revenants"],
        camarilla: ["The Camarilla", "Camarilla sect"],
        sabbat: ["The Sabbat", "Sabbat sect"],
        "anarch-movement": ["Anarchs", "Anarch Movement", "Anarch Revolt"],
        "second-inquisition": ["Second Inquisition hunters", "Inquisition"],
        clans: ["Vampire clans", "Clan"],
        brujah: ["Brujah clan"],
        gangrel: ["Gangrel clan"],
        malkavian: ["Malkavians", "Malkavian clan"],
        nosferatu: ["Nosferatu clan"],
        toreador: ["Toreador clan"],
        tremere: ["Tremere clan"],
        ventrue: ["Ventrue clan"],
        lasombra: ["Lasombra clan"],
        tzimisce: ["Tzimisce clan"],
        "banu-haqim": ["Banu Haqim clan", "Assamites", "Assamite clan"],
        caine: ["Cain", "Caine myth"],
        antediluvians: ["Antediluvian", "Clan founders"],
        jyhad: ["Jyhad", "Eternal Jyhad", "Great Jyhad"]
    },
    parents: {
        "white-wolf": "vampire-the-masquerade",
        "world-of-darkness": "vampire-the-masquerade",
        kindred: "vampire-the-masquerade",
        "the-masquerade": "camarilla",
        "the-embrace": "kindred",
        disciplines: "kindred",
        "blood-bond": "kindred",
        coterie: "vampire-the-masquerade",
        prince: "camarilla",
        elysium: "camarilla",
        ghouls: "kindred",
        camarilla: "vampire-the-masquerade",
        sabbat: "vampire-the-masquerade",
        "anarch-movement": "vampire-the-masquerade",
        "second-inquisition": "world-of-darkness",
        clans: "kindred",
        brujah: "clans",
        gangrel: "clans",
        malkavian: "clans",
        nosferatu: "clans",
        toreador: "clans",
        tremere: "clans",
        ventrue: "clans",
        lasombra: "clans",
        tzimisce: "clans",
        "banu-haqim": "clans",
        caine: "kindred",
        antediluvians: "clans",
        jyhad: "vampire-the-masquerade"
    }
});
