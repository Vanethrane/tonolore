/**
 * Warhammer Fantasy subject package — Games Workshop's Old World setting.
 */

const path = require("path");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "warhammer-fantasy",
        name: "Warhammer Fantasy",
        rootSlug: "warhammer-fantasy",
        theme: "warhammer-fantasy",
        copyright: {
            title: "Warhammer Fantasy is not owned by Ton-o-Lore.",
            body:
                "Warhammer Fantasy, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Games Workshop Limited and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. This subject covers the classic Old World setting, not Warhammer 40,000 or Age of Sigmar. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "warhammer-fantasy": ["Warhammer Fantasy Battle", "WHFB", "Old World Warhammer"],
        "games-workshop": ["GW", "Games Workshop Ltd"],
        "old-world": ["Warhammer Old World", "the Old World continent"],
        "chaos-gods": ["Ruinous Powers", "four Chaos Gods"],
        warpstone: ["warp stone"],
        "great-war-against-chaos": ["Great War against Chaos"],
        "end-times": ["End Times", "Warhammer End Times"],
        "the-empire": ["Empire of Man", "Empire of Sigmar"],
        chaos: ["Forces of Chaos", "Warriors of Chaos"],
        skaven: ["Skaven Under-Empire", "ratmen"],
        greenskins: ["Orcs and Goblins", "Orcs & Goblins"],
        "high-elves": ["High Elves of Ulthuan", "Asur"],
        dwarfs: ["Dwarfs of the Old World", "Dwarven holds"],
        bretonnia: ["Kingdom of Bretonnia"],
        "vampire-counts": ["Vampire Counts of Sylvania", "VC"],
        lizardmen: ["Lustria lizardmen"],
        kislev: ["Kingdom of Kislev"],
        "karl-franz": ["Emperor Karl Franz", "Karl Franz Emperor"],
        sigmar: ["Sigmar Heldenhammer", "God-King Sigmar"],
        "archaon-the-everchosen": ["Archaon", "Everchosen"],
        "grimgor-ironhide": ["Grimgor"],
        tyrion: ["Tyrion Defender of Ulthuan"],
        teclis: ["Teclis the Archmage"],
        thanquol: ["Grey Seer Thanquol"],
        ulthuan: ["Ulthuan isle"],
        altdorf: ["Altdorf capital"],
        middenheim: ["City of Middenheim"],
        sylvania: ["Province of Sylvania"],
        "colleges-of-magic": ["Imperial Colleges of Magic", "battle wizards"],
        "witch-hunters": ["Sigmarite witch hunters"]
    },
    parents: {
        "games-workshop": "warhammer-fantasy",
        "old-world": "warhammer-fantasy",
        "chaos-gods": "chaos",
        warpstone: "skaven",
        "great-war-against-chaos": "the-empire",
        "end-times": "warhammer-fantasy",
        "the-empire": "old-world",
        chaos: "old-world",
        skaven: "old-world",
        greenskins: "old-world",
        "high-elves": "old-world",
        dwarfs: "old-world",
        bretonnia: "old-world",
        "vampire-counts": "old-world",
        lizardmen: "old-world",
        kislev: "old-world",
        "karl-franz": "the-empire",
        sigmar: "the-empire",
        "archaon-the-everchosen": "chaos",
        "grimgor-ironhide": "greenskins",
        tyrion: "high-elves",
        teclis: "high-elves",
        thanquol: "skaven",
        ulthuan: "high-elves",
        altdorf: "the-empire",
        middenheim: "the-empire",
        sylvania: "the-empire",
        "colleges-of-magic": "the-empire",
        "witch-hunters": "the-empire"
    }
});
