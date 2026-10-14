/**
 * Broadway — Theater & musicals subject package.
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
        id: "broadway",
        name: "Broadway",
        rootSlug: "broadway",
        theme: "broadway",
        categories: ["theater"],
        copyright: {
            title: "Broadway is not owned by Ton-o-Lore.",
            body:
                "Broadway, related names, marks, and materials are the property of Respective producers, leagues, and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        broadway: ["Broadway theatre", "Broadway theater"],
        "broadway-theatre-district": ["theatre district", "Theater District", "Broadway district"],
        "times-square": ["Times Sq", "the Crossroads of the World"],
        "forty-second-street": ["42nd Street", "42nd St"],
        "the-great-white-way": ["Great White Way"],
        tkts: ["TKTS booth", "TDF TKTS"],
        "shubert-organization": ["Shubert", "the Shuberts"],
        "shubert-theatre": ["the Shubert"],
        "actors-equity": ["Actors Equity", "AEA", "Equity"],
        "broadway-league": ["the League", "League of American Theatres"],
        jujamcyn: ["Jujamcyn Theaters", "Jujamcyn Theatres"],
        "nederlander-organization": ["Nederlander", "the Nederlanders"],
        "tony-awards": ["Tonys", "Tony Award", "Antoinette Perry Award"],
        "richard-rodgers-theatre": ["the Richard Rodgers", "46th Street Theatre"],
        "majestic-theatre": ["the Majestic"],
        "winter-garden-theatre": ["the Winter Garden"],
        "gershwin-theatre": ["the Gershwin", "Uris Theatre"],
        hamilton: ["Hamilton the musical", "Hamilton on Broadway"],
        "phantom-of-the-opera": ["Phantom", "POTO", "The Phantom of the Opera"],
        "a-chorus-line": ["Chorus Line"],
        "forty-second-street-musical": ["42nd Street", "42nd Street the musical"],
        wicked: ["Wicked the musical"],
        "the-lion-king": ["Lion King", "The Lion King musical"],
        "chicago-musical": ["Chicago", "Chicago the musical"],
        "les-miserables": ["Les Miz", "Les Mis"],
        cats: ["Cats the musical"],
        rent: ["Rent the musical"],
        "the-book-of-mormon": ["Book of Mormon"],
        oklahoma: ["Oklahoma", "Oklahoma!"],
        "west-side-story": ["West Side"],
        "production-contract": ["Equity Production Contract", "Broadway Production Contract"]
    },
    parents: {
        "broadway-theatre-district": "broadway",
        "times-square": "broadway-theatre-district",
        "forty-second-street": "broadway-theatre-district",
        tkts: "times-square",
        "shubert-theatre": "shubert-organization",
        "majestic-theatre": "shubert-organization",
        "winter-garden-theatre": "shubert-organization",
        "richard-rodgers-theatre": "nederlander-organization",
        "gershwin-theatre": "nederlander-organization",
        hamilton: "broadway",
        "phantom-of-the-opera": "broadway",
        "a-chorus-line": "broadway",
        "forty-second-street-musical": "broadway",
        wicked: "broadway",
        "the-lion-king": "broadway",
        "chicago-musical": "broadway",
        "les-miserables": "broadway",
        cats: "broadway",
        rent: "broadway",
        "the-book-of-mormon": "broadway",
        oklahoma: "broadway",
        "west-side-story": "broadway"
    }
});
