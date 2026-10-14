/**
 * NBA — Sports subject package.
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
        id: "nba",
        name: "NBA",
        rootSlug: "nba",
        theme: "nba",
        categories: ["sports"],
        copyright: {
            title: "NBA is not owned by Ton-o-Lore.",
            body:
                "NBA, related names, marks, and materials are the property of NBA / respective teams and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        nba: ["NBA", "National Basketball Association"],
        "david-stern": ["Stern", "Commissioner Stern"],
        "adam-silver": ["Silver", "Commissioner Silver"],
        "bill-russell": ["Russell", "Bill Russell"],
        "wilt-chamberlain": ["Wilt", "Wilt Chamberlain", "The Big Dipper"],
        "magic-johnson": ["Magic", "Earvin Johnson", "Magic Johnson"],
        "larry-bird": ["Bird", "Larry Legend", "Larry Bird"],
        "michael-jordan": ["Jordan", "MJ", "His Airness", "Michael Jordan"],
        "kobe-bryant": ["Kobe", "Black Mamba", "Kobe Bryant"],
        "shaquille-oneal": ["Shaq", "Shaquille O'Neal", "Diesel"],
        "tim-duncan": ["Duncan", "The Big Fundamental", "Tim Duncan"],
        "lebron-james": ["LeBron", "King James", "LeBron James"],
        "stephen-curry": ["Curry", "Steph", "Chef Curry", "Stephen Curry"],
        "boston-celtics": ["Celtics", "Boston Celtics", "Cs"],
        "los-angeles-lakers": ["Lakers", "Los Angeles Lakers", "LA Lakers"],
        "chicago-bulls": ["Bulls", "Chicago Bulls"],
        "golden-state-warriors": ["Warriors", "Dubs", "Golden State Warriors", "GSW"],
        "miami-heat": ["Heat", "Miami Heat"],
        "san-antonio-spurs": ["Spurs", "San Antonio Spurs"],
        "dream-team": ["Dream Team", "1992 Dream Team", "1992 Olympics"],
        "nba-finals": ["NBA Finals", "The Finals", "Finals"],
        "nba-draft": ["NBA draft", "the draft", "Draft Lottery"],
        "nba-all-star-game": ["All-Star Game", "NBA All-Star", "All-Star Weekend"],
        "madison-square-garden": ["MSG", "The Garden", "Madison Square Garden"],
        "boston-garden": ["Boston Garden", "The Garden (Boston)"],
        "united-center": ["United Center", "UC"],
        "larry-obrien-trophy": ["Larry O'Brien Trophy", "O'Brien Trophy", "NBA championship trophy"],
        "bulls-dynasty": ["Bulls dynasty", "Jordan era", "six titles"],
        "celtics-lakers-rivalry": ["Celtics-Lakers", "Celtics–Lakers rivalry", "Lakers-Celtics"],
        "three-point-revolution": ["three-point revolution", "pace and space", "3-point revolution"],
        "naismith-memorial-basketball-hall-of-fame": [
            "Basketball Hall of Fame",
            "Naismith Hall of Fame",
            "Springfield Hall of Fame"
        ]
    },
    parents: {
        "bill-russell": "boston-celtics",
        "larry-bird": "boston-celtics",
        "magic-johnson": "los-angeles-lakers",
        "kobe-bryant": "los-angeles-lakers",
        "shaquille-oneal": "los-angeles-lakers",
        "lebron-james": "los-angeles-lakers",
        "michael-jordan": "chicago-bulls",
        "stephen-curry": "golden-state-warriors",
        "tim-duncan": "san-antonio-spurs"
    }
});
