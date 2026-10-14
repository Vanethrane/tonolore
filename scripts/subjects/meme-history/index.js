/**
 * Meme history — Internet culture subject package.
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
        id: "meme-history",
        name: "Meme history",
        rootSlug: "meme-history",
        theme: "meme-history",
        categories: ["internet-culture"],
        copyright: {
            title: "Meme history is not owned by Ton-o-Lore.",
            body:
                "Meme history, related names, marks, and materials are the property of Public internet culture / respective creators and platforms. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "meme-history": ["Meme history", "internet memes", "meme"],
        "richard-dawkins": ["Dawkins"],
        "the-selfish-gene": ["Selfish Gene"],
        "know-your-meme": ["KYM", "KnowYourMeme"],
        "4chan": ["4chan.org", "/b/"],
        "something-awful": ["SA", "Something Awful forums"],
        ytmnd: ["YTMND", "You're The Man Now Dog"],
        "godwins-law": ["Godwin's Law", "Godwin"],
        "mike-godwin": ["Godwin"],
        "image-macro": ["image macros", "captioned image"],
        copypasta: ["copy-pasta", "copypastas"],
        "viral-video": ["viral videos"],
        "advice-animal": ["Advice Animals", "advice dog"],
        lolcats: ["LOLcats", "lolcat"],
        "i-can-has-cheezburger": ["ICHCB", "Cheezburger"],
        rickroll: ["rickroll", "rickrolling"],
        "rick-astley": ["Astley"],
        "never-gonna-give-you-up": ["NGYU", "Never Gonna Give You Up"],
        "pepe-the-frog": ["Pepe", "feels good man"],
        "matt-furie": ["Furie"],
        "boys-club": ["Boy's Club", "Boys Club"],
        doge: ["Doge", "such wow"],
        "nyan-cat": ["Nyan Cat", "Nyancat"],
        "keyboard-cat": ["Keyboard Cat", "Fatso"],
        "grumpy-cat": ["Grumpy Cat", "Tardar Sauce"],
        "bad-luck-brian": ["Bad Luck Brian"],
        "all-your-base": ["AYB", "All your base are belong to us"],
        "rage-comic": ["rage comics", "rage faces"],
        creepypasta: ["creepypastas"]
    },
    parents: {
        "the-selfish-gene": "richard-dawkins",
        "godwins-law": "mike-godwin",
        "image-macro": "meme-history",
        copypasta: "meme-history",
        "viral-video": "meme-history",
        lolcats: "image-macro",
        "advice-animal": "image-macro",
        "i-can-has-cheezburger": "lolcats",
        "bad-luck-brian": "advice-animal",
        "grumpy-cat": "lolcats",
        rickroll: "viral-video",
        "never-gonna-give-you-up": "rick-astley",
        "pepe-the-frog": "boys-club",
        "boys-club": "matt-furie",
        doge: "image-macro",
        "nyan-cat": "viral-video",
        "keyboard-cat": "viral-video",
        "rage-comic": "image-macro",
        creepypasta: "copypasta",
        "all-your-base": "meme-history"
    }
});
