/**
 * Serial — Podcasts & audio subject package.
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
        id: "serial-podcast",
        name: "Serial",
        rootSlug: "serial-podcast",
        theme: "serial-podcast",
        categories: ["podcasts"],
        copyright: {
            title: "Serial is not owned by Ton-o-Lore.",
            body:
                "Serial, related names, marks, and materials are the property of Serial Productions / New York Times / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "serial-podcast": ["Serial", "Serial the podcast"],
        "sarah-koenig": ["Koenig"],
        "julie-snyder": ["Snyder"],
        "ira-glass": ["Glass"],
        "serial-productions": ["Serial Productions LLC"],
        "this-american-life": ["TAL", "This American Life"],
        wbez: ["WBEZ Chicago"],
        "the-new-york-times": ["NYT", "New York Times", "the Times"],
        "true-crime-podcast-form": ["true crime podcast", "serialized true crime"],
        "serial-2014-debut": ["Serial debut", "October 2014"],
        "serial-season-1": ["Season 1", "S1", "the Adnan season"],
        "adnan-syed": ["Adnan"],
        "hae-min-lee": ["Hae", "Hae Min"],
        "jay-wilds": ["Jay"],
        "asia-mcclain": ["Asia"],
        "rabia-chaudry": ["Rabia"],
        baltimore: ["Baltimore, Maryland"],
        "woodlawn-high-school": ["Woodlawn", "Woodlawn High"],
        "leakin-park": ["Leakin"],
        "cell-tower-evidence": ["cell records", "cell site evidence", "AT&T records"],
        "adnan-conviction-vacated": ["vacatur", "Syed vacatur"],
        "serial-season-2": ["Season 2", "S2", "the Bergdahl season"],
        "bowe-bergdahl": ["Bergdahl", "Bowe"],
        "serial-season-3": ["Season 3", "S3", "the Cleveland season"],
        "cleveland-justice-center": ["Justice Center", "Cuyahoga County Justice Center"],
        "undisclosed-podcast": ["Undisclosed"],
        "koenig-narration": ["Koenig's voice", "first-person Serial"]
    },
    parents: {
        "serial-season-1": "serial-podcast",
        "serial-season-2": "serial-podcast",
        "serial-season-3": "serial-podcast",
        "adnan-syed": "baltimore",
        "hae-min-lee": "baltimore",
        "jay-wilds": "baltimore",
        "asia-mcclain": "baltimore",
        "woodlawn-high-school": "baltimore",
        "leakin-park": "baltimore"
    }
});
