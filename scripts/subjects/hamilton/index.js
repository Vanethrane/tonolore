/**
 * Hamilton — Theater & musicals subject package.
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
        id: "hamilton",
        name: "Hamilton",
        rootSlug: "hamilton",
        theme: "hamilton",
        categories: ["theater"],
        copyright: {
            title: "Hamilton is not owned by Ton-o-Lore.",
            body:
                "Hamilton, related names, marks, and materials are the property of Lin-Manuel Miranda / respective producers and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        hamilton: ["Hamilton the musical", "Hamilton (Miranda)"],
        "lin-manuel-miranda": ["LMM", "Miranda"],
        "ron-chernow": ["Chernow"],
        "thomas-kail": ["Kail"],
        "alexander-hamilton-biography": ["Chernow's Hamilton", "Alexander Hamilton biography"],
        "hamilton-the-musical": ["Hamilton", "Hamilton: An American Musical"],
        "hamilton-mixtape": ["the Mixtape"],
        "the-public-theater": ["the Public", "Public Theater", "NYSF"],
        "richard-rodgers-theatre": ["the Richard Rodgers", "Rodgers Theatre"],
        "alexander-hamilton": ["Hamilton", "A. Ham"],
        "aaron-burr": ["Burr"],
        "george-washington": ["Washington", "General Washington"],
        "schuyler-sisters": ["Schuyler Sisters", "Angelica Eliza and Peggy"],
        "eliza-schuyler": ["Eliza", "Elizabeth Schuyler", "Eliza Hamilton"],
        "angelica-schuyler": ["Angelica", "Angelica Schuyler Church"],
        "peggy-schuyler": ["Peggy", "Margarita Schuyler"],
        "king-george": ["King George", "George III", "King George III"],
        "thomas-jefferson": ["Jefferson"],
        "james-madison": ["Madison"],
        "marquis-de-lafayette": ["Lafayette", "the Marquis"],
        "hercules-mulligan": ["Mulligan"],
        "john-laurens": ["Laurens"],
        "philip-hamilton": ["Philip"],
        "cabinet-battle": ["Cabinet Battle #1", "Cabinet Battles", "Cabinet Battle #2"],
        "my-shot": ["Not Throwing Away My Shot"],
        "the-room-where-it-happens": ["Room Where It Happens"],
        yorktown: ["Yorktown", "The World Turned Upside Down"],
        "ten-duel-commandments": ["the Ten Duel Commandments"],
        "leslie-odom-jr": ["Leslie Odom", "Odom"],
        "daveed-diggs": ["Diggs"],
        "phillipa-soo": ["Soo", "Philippa Soo"]
    },
    parents: {
        "hamilton-the-musical": "hamilton",
        "hamilton-mixtape": "hamilton",
        "eliza-schuyler": "schuyler-sisters",
        "angelica-schuyler": "schuyler-sisters",
        "peggy-schuyler": "schuyler-sisters",
        "cabinet-battle": "hamilton-the-musical",
        "my-shot": "hamilton-the-musical",
        "the-room-where-it-happens": "hamilton-the-musical",
        yorktown: "hamilton-the-musical",
        "ten-duel-commandments": "hamilton-the-musical"
    }
});
