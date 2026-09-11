/**
 * Invincible subject package — Robert Kirkman's superhero comic and Amazon series.
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
        id: "invincible",
        name: "Invincible",
        rootSlug: "invincible",
        theme: "invincible",
        copyright: {
            title: "Invincible is not owned by Ton-o-Lore.",
            body:
                "Invincible, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Robert Kirkman, Image Comics, Amazon Studios, Skybound Entertainment, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        invincible: ["Invincible franchise", "INV"],
        "robert-kirkman": ["Kirkman", "Robert Kirkman"],
        "image-comics": ["Image", "Image Comics publisher"],
        "amazon-studios": ["Amazon", "Prime Video Invincible"],
        "invincible-comic": ["Invincible comic book"],
        "invincible-tv-series": ["Invincible show", "Invincible animated series"],
        "guardians-massacre-arc": ["Guardians fight", "Omni-Man massacre"],
        "viltrumite-empire": ["Viltrum Empire", "Viltrumite regime"],
        viltrumites: ["Viltrumite", "Viltrumite race"],
        "global-defense-agency": ["GDA", "Global Defense Agency"],
        "guardians-of-the-globe": ["Guardians", "GoG"],
        "coalition-of-planets": ["Coalition", "CoP"],
        "earth-invincible": ["Earth", "Invincible Earth"],
        viltrum: ["Viltrum homeworld"],
        "gda-headquarters": ["GDA base", "GDA HQ"],
        "viltrumite-powers": ["Viltrumite abilities", "Viltrumite strength"],
        sequids: ["Sequid", "Sequid hive"],
        "mark-grayson": ["Mark", "Invincible hero"],
        "omni-man": ["Nolan Grayson", "Omni Man"],
        "atom-eve": ["Atom Eve", "Samantha Eve Wilkins"],
        "cecil-stedman": ["Cecil", "Cecil Stedman GDA"],
        immortal: ["The Immortal", "Guardian Immortal"],
        "red-rush": ["Red Rush speedster"],
        thragg: ["Grand Regent Thragg"],
        "allen-the-alien": ["Allen", "Allen the Alien"],
        robot: ["Robot Guardian", "Rudy Connors"],
        "battle-beast": ["Battle Beast warrior"],
        conquest: ["Conquest Viltrumite"],
        anissa: ["Anissa Viltrumite"],
        "monster-girl": ["Monster Girl", "Amanda Monster Girl"],
        darkwing: ["Darkwing hero"],
        "debbie-grayson": ["Debbie", "Deborah Grayson"],
        "mauler-twins": ["Mauler Twins villains"]
    },
    parents: {
        "invincible-comic": "invincible",
        "invincible-tv-series": "invincible",
        "guardians-massacre-arc": "invincible-comic",
        "mark-grayson": "viltrumites",
        "omni-man": "viltrumites",
        thragg: "viltrumite-empire",
        conquest: "viltrumite-empire",
        anissa: "viltrumite-empire",
        "viltrumite-empire": "viltrum",
        immortal: "guardians-of-the-globe",
        "red-rush": "guardians-of-the-globe",
        robot: "guardians-of-the-globe",
        "monster-girl": "guardians-of-the-globe",
        darkwing: "guardians-of-the-globe",
        "guardians-of-the-globe": "global-defense-agency",
        "cecil-stedman": "global-defense-agency",
        "global-defense-agency": "gda-headquarters",
        "gda-headquarters": "earth-invincible",
        "allen-the-alien": "coalition-of-planets",
        "debbie-grayson": "mark-grayson",
        "atom-eve": "earth-invincible"
    }
});
