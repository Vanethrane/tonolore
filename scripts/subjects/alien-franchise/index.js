/**
 * Alien — Horror subject package.
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
        id: "alien-franchise",
        name: "Alien",
        rootSlug: "alien-franchise",
        theme: "alien-franchise",
        categories: ["horror"],
        copyright: {
            title: "Alien is not owned by Ton-o-Lore.",
            body:
                "Alien, related names, marks, and materials are the property of 20th Century Studios / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "alien-franchise": ["Alien", "Alien franchise", "Aliens franchise"],
        "ridley-scott": ["Scott"],
        "james-cameron": ["Cameron"],
        "dan-obannon": ["O'Bannon", "Dan OBannon"],
        "hr-giger": ["Giger", "H.R. Giger", "HR Giger"],
        "sigourney-weaver": ["Weaver"],
        "alien-1979": ["Alien 1979", "Alien (film)"],
        "aliens-1986": ["Aliens 1986", "Aliens (film)"],
        prometheus: ["Prometheus (film)"],
        "alien-covenant": ["Covenant", "Alien Covenant"],
        "weyland-yutani": ["The Company", "Weyland Yutani", "WY"],
        "nostromo-crew": ["Nostromo crew", "the crew"],
        "colonial-marines": ["Marines", "USCM"],
        engineers: ["Space Jockeys", "the Engineers"],
        "lv-426": ["Acheron", "LV426"],
        nostromo: ["Nostromo", "USCSS Nostromo"],
        sulaco: ["Sulaco", "USS Sulaco"],
        "ellen-ripley": ["Ripley", "Warrant Officer Ripley"],
        dallas: ["Captain Dallas"],
        ash: ["Science Officer Ash"],
        "jones-the-cat": ["Jonesy", "Jones the cat"],
        "dwayne-hicks": ["Hicks", "Corporal Hicks"],
        bishop: ["Bishop android"],
        newt: ["Rebecca Jorden"],
        "peter-weyland": ["Weyland"],
        "david-8": ["David", "David 8"],
        xenomorph: ["Xeno", "the alien", "perfect organism"],
        facehugger: ["Face hugger"],
        chestburster: ["Chest burster"],
        "xenomorph-queen": ["Queen", "Alien Queen", "the Queen"]
    },
    parents: {
        "ellen-ripley": "nostromo-crew",
        dallas: "nostromo-crew",
        ash: "nostromo-crew",
        "jones-the-cat": "nostromo-crew",
        "dwayne-hicks": "colonial-marines",
        bishop: "colonial-marines",
        newt: "lv-426",
        "peter-weyland": "weyland-yutani",
        "david-8": "weyland-yutani",
        "nostromo-crew": "weyland-yutani",
        facehugger: "xenomorph",
        chestburster: "xenomorph",
        "xenomorph-queen": "xenomorph",
        "alien-1979": "alien-franchise",
        "aliens-1986": "alien-franchise",
        prometheus: "alien-franchise",
        "alien-covenant": "alien-franchise"
    }
});
