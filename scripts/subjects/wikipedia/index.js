/**
 * Wikipedia — Internet culture subject package.
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
        id: "wikipedia",
        name: "Wikipedia",
        rootSlug: "wikipedia",
        theme: "wikipedia",
        categories: ["internet-culture"],
        copyright: {
            title: "Wikipedia is not owned by Ton-o-Lore.",
            body:
                "Wikipedia, related names, marks, and materials are the property of Wikimedia Foundation / contributors (CC licenses). Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        wikipedia: ["Wikipedia", "WP"],
        "jimmy-wales": ["Jimbo", "Jimbo Wales", "Wales"],
        "larry-sanger": ["Sanger"],
        "ward-cunningham": ["Cunningham"],
        nupedia: ["Nupedia"],
        bomis: ["Bomis, Inc."],
        wiki: ["wiki wiki", "WikiWikiWeb"],
        mediawiki: ["MediaWiki"],
        "english-wikipedia": ["enwiki", "en.wikipedia", "English WP"],
        "wikimedia-foundation": ["WMF", "Wikimedia"],
        "wikimedia-commons": ["Commons", "WMC"],
        wikidata: ["Wikidata", "WD"],
        "cc-by-sa": ["CC-BY-SA", "Creative Commons Attribution-ShareAlike"],
        "five-pillars": ["5P", "Wikipedia:Five pillars"],
        "neutral-point-of-view": ["NPOV", "neutral POV"],
        "no-original-research": ["NOR", "WP:NOR"],
        verifiability: ["WP:V", "verifiable"],
        "citation-culture": ["citation needed", "[citation needed]"],
        "reliable-sources": ["RS", "WP:RS"],
        notability: ["WP:N", "GNG"],
        "featured-article": ["FA", "featured articles"],
        "arbitration-committee": ["ArbCom", "Arbitration Committee"],
        wikipedian: ["Wikipedians", "editor"],
        usemodwiki: ["UseMod", "UseModWiki"],
        deletionism: ["inclusionism", "deletionist", "inclusionist"],
        "talk-page": ["talk pages", "discussion page"],
        "interlanguage-links": ["sitelinks", "interwiki links"]
    },
    parents: {
        nupedia: "wikipedia",
        "english-wikipedia": "wikipedia",
        "five-pillars": "english-wikipedia",
        "neutral-point-of-view": "five-pillars",
        "no-original-research": "five-pillars",
        verifiability: "five-pillars",
        "citation-culture": "verifiability",
        "reliable-sources": "verifiability",
        "featured-article": "english-wikipedia",
        "arbitration-committee": "english-wikipedia",
        "wikimedia-commons": "wikimedia-foundation",
        wikidata: "wikimedia-foundation",
        mediawiki: "wikipedia",
        usemodwiki: "wikipedia",
        "talk-page": "english-wikipedia",
        "interlanguage-links": "wikidata",
        deletionism: "notability",
        "jimmy-wales": "wikimedia-foundation",
        "larry-sanger": "nupedia"
    }
});
