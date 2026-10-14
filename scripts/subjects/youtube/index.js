/**
 * YouTube — Internet culture subject package.
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
        id: "youtube",
        name: "YouTube",
        rootSlug: "youtube",
        theme: "youtube",
        categories: ["internet-culture"],
        copyright: {
            title: "YouTube is not owned by Ton-o-Lore.",
            body:
                "YouTube, related names, marks, and materials are the property of Google / YouTube / respective creators and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        youtube: ["YouTube", "YT"],
        "chad-hurley": ["Hurley"],
        "steve-chen": ["Chen"],
        "jawed-karim": ["Karim", "jawed"],
        "me-at-the-zoo": ["Me at the zoo", "first YouTube video"],
        google: ["Google LLC", "Alphabet"],
        "susan-wojcicki": ["Wojcicki"],
        "google-adsense": ["AdSense"],
        "youtube-partner-program": ["YPP", "Partner Program", "monetization"],
        "youtube-algorithm": ["the algorithm", "YouTube recommendations"],
        "content-id": ["Content ID"],
        "youtube-premium": ["YouTube Red", "Premium"],
        "youtube-shorts": ["Shorts"],
        youtuber: ["YouTubers", "creator"],
        pewdiepie: ["PewDiePie", "Felix Kjellberg", "Pewds"],
        "t-series": ["T-Series"],
        vlog: ["video blog", "daily vlog"],
        "lets-play": ["Let's Play", "LP"],
        "youtube-poop": ["YTP", "YouTube Poop"],
        lonelygirl15: ["lonelygirl15", "Bree"],
        smosh: ["Smosh"],
        "youtube-rewind": ["Rewind"],
        "dislike-button": ["dislikes", "public dislikes"],
        "san-bruno": ["YouTube HQ", "San Bruno campus"],
        "san-diego-zoo": ["San Diego Zoo"],
        "play-button": ["Silver Play Button", "Gold Play Button"],
        "youtube-studio": ["Creator Studio", "YouTube Studio"],
        "copyright-strike": ["strikes", "three strikes"]
    },
    parents: {
        "chad-hurley": "youtube",
        "steve-chen": "youtube",
        "jawed-karim": "youtube",
        "me-at-the-zoo": "jawed-karim",
        "susan-wojcicki": "google",
        "google-adsense": "google",
        "youtube-partner-program": "youtube",
        "youtube-algorithm": "youtube",
        youtuber: "youtube-partner-program",
        pewdiepie: "youtuber",
        "lets-play": "youtuber",
        vlog: "youtuber",
        "youtube-poop": "youtube",
        lonelygirl15: "vlog",
        smosh: "youtuber",
        "youtube-shorts": "youtube-algorithm",
        "play-button": "youtube-partner-program",
        "content-id": "youtube",
        "copyright-strike": "content-id",
        "youtube-rewind": "youtube",
        "dislike-button": "youtube"
    }
});
