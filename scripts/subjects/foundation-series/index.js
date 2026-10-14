/**
 * Foundation — Science fiction subject package.
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
        id: "foundation-series",
        name: "Foundation",
        rootSlug: "foundation-series",
        theme: "foundation-series",
        categories: ["sci-fi"],
        copyright: {
            title: "Foundation is not owned by Ton-o-Lore.",
            body:
                "Foundation, related names, marks, and materials are the property of Estate of Isaac Asimov / Apple / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "foundation-series": ["Foundation", "Foundation saga", "Foundation universe"],
        "isaac-asimov": ["Asimov"],
        "david-s-goyer": ["Goyer", "David Goyer"],
        "apple-tv": ["Apple TV", "Apple TV Plus", "Apple"],
        "foundation-novel": ["Foundation book", "Foundation 1951"],
        "foundation-and-empire": ["Foundation & Empire"],
        "second-foundation-novel": ["Second Foundation book"],
        "foundation-apple": ["Foundation TV", "Foundation Apple", "Foundation series"],
        "first-foundation": ["the Foundation", "Terminus Foundation"],
        "second-foundation": ["the Second Foundation"],
        "galactic-empire": ["Empire", "the Empire"],
        terminus: ["Terminus planet"],
        trantor: ["the Imperial capital"],
        "time-vault": ["Seldon Vault", "the Vault"],
        psychohistory: ["psychohistorical science"],
        "seldon-plan": ["the Plan"],
        "encyclopedia-galactica": ["the Encyclopedia"],
        "first-crisis": ["Seldon Crisis", "the first Seldon Crisis"],
        "hari-seldon": ["Seldon", "Raven Seldon"],
        "gaal-dornick": ["Gaal"],
        "salvor-hardin": ["Hardin"],
        "hober-mallow": ["Mallow"],
        "the-mule": ["Mule"],
        "bayta-darell": ["Bayta"],
        "bel-riose": ["Riose"],
        "preem-palver": ["Palver", "First Speaker"],
        "r-daneel-olivaw": ["Daneel", "R. Daneel"],
        cleon: ["Emperor Cleon", "Brother Day"],
        demerzel: ["Eto Demerzel"],
        anacreon: ["Kingdom of Anacreon"]
    },
    parents: {
        "hari-seldon": "first-foundation",
        "gaal-dornick": "first-foundation",
        "salvor-hardin": "first-foundation",
        "hober-mallow": "first-foundation",
        "bayta-darell": "first-foundation",
        "preem-palver": "second-foundation",
        "bel-riose": "galactic-empire",
        cleon: "galactic-empire",
        demerzel: "galactic-empire",
        "first-foundation": "terminus",
        "second-foundation": "trantor",
        "time-vault": "terminus",
        "foundation-novel": "foundation-series",
        "foundation-and-empire": "foundation-series",
        "second-foundation-novel": "foundation-series",
        "foundation-apple": "foundation-series"
    }
});
