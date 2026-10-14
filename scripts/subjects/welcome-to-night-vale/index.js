/**
 * Welcome to Night Vale — Podcasts & audio subject package.
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
        id: "welcome-to-night-vale",
        name: "Welcome to Night Vale",
        rootSlug: "welcome-to-night-vale",
        theme: "welcome-to-night-vale",
        categories: ["podcasts"],
        copyright: {
            title: "Welcome to Night Vale is not owned by Ton-o-Lore.",
            body:
                "Welcome to Night Vale, related names, marks, and materials are the property of Night Vale Presents / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "welcome-to-night-vale": ["WTNV", "Night Vale", "Welcome to Night Vale podcast"],
        "joseph-fink": ["Fink"],
        "jeffrey-cranor": ["Cranor"],
        "cecil-baldwin": ["Baldwin"],
        "night-vale-presents": ["NVP"],
        "welcome-to-night-vale-show": ["WTNV show", "the podcast", "Night Vale the show"],
        "welcome-to-night-vale-novel": ["Night Vale novel", "the Night Vale book"],
        "a-story-about-you": ["A Story About You."],
        "night-vale": ["the town", "Night Vale, desert"],
        "desert-bluffs": ["Bluffs"],
        "night-vale-community-radio": ["NVCR", "community radio", "the station"],
        "cecil-palmer": ["Cecil", "Cecil Gershwin Palmer"],
        "carlos-the-scientist": ["Carlos", "perfect Carlos"],
        "old-woman-josie": ["Josie"],
        "intern-dana": ["Dana", "Dana Cardinal"],
        "tamika-flynn": ["Tamika"],
        "steve-carlsberg": ["Steve"],
        kevin: ["Kevin of Desert Bluffs"],
        "station-management": ["Management"],
        "city-council": ["the Council", "Night Vale City Council"],
        "sheriffs-secret-police": ["Secret Police", "SSP"],
        strexcorp: ["Strex", "StrexCorp Synernists"],
        "angels-of-night-vale": ["the angels", "Erikas"],
        "glow-cloud": ["Glow Cloud", "All Hail the Glow Cloud"],
        "the-dog-park": ["dog park"],
        "wheat-and-wheat-by-products": ["wheat and wheat byproducts"],
        "night-vale-interns": ["interns", "the interns"]
    },
    parents: {
        "welcome-to-night-vale-show": "welcome-to-night-vale",
        "welcome-to-night-vale-novel": "welcome-to-night-vale",
        "desert-bluffs": "welcome-to-night-vale",
        "cecil-palmer": "night-vale",
        "carlos-the-scientist": "night-vale",
        "old-woman-josie": "night-vale",
        "intern-dana": "night-vale",
        "tamika-flynn": "night-vale",
        "steve-carlsberg": "night-vale",
        "night-vale-community-radio": "night-vale",
        "station-management": "night-vale-community-radio",
        "city-council": "night-vale",
        "sheriffs-secret-police": "night-vale",
        "angels-of-night-vale": "night-vale",
        "glow-cloud": "night-vale",
        "the-dog-park": "night-vale",
        kevin: "desert-bluffs",
        strexcorp: "desert-bluffs"
    }
});
