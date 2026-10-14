/**
 * Silk Road — History subject package.
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
        id: "silk-road",
        name: "Silk Road",
        rootSlug: "silk-road",
        theme: "silk-road",
        categories: ["history"],
        copyright: {
            title: "Silk Road is not owned by Ton-o-Lore.",
            body:
                "Silk Road, related names, marks, and materials are the property of Public-domain historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "silk-road": ["Silk Road", "Silk Roads", "Seidenstrasse"],
        "overland-silk-road": ["overland route", "oasis road"],
        "maritime-silk-route": ["Maritime Silk Road", "spice and silk sea route"],
        "hexi-corridor": ["Hexi Corridor", "Gansu Corridor"],
        "taklamakan-desert": ["Taklamakan", "Taklimakan"],
        changan: ["Chang'an", "Xi'an", "Ch'ang-an"],
        dunhuang: ["Sha-chou", "Tun-huang"],
        kashgar: ["Kashi", "Shule"],
        samarkand: ["Marakanda", "Samarqand"],
        baghdad: ["Madinat al-Salam", "Abbasid Baghdad"],
        palmyra: ["Tadmor"],
        quanzhou: ["Zayton", "Zaitun", "Citong"],
        "mogao-caves": ["Caves of the Thousand Buddhas", "Mogao Grottoes"],
        "zhang-qian": ["Chang Ch'ien"],
        "emperor-wu-of-han": ["Han Wudi", "Emperor Wu"],
        "marco-polo": ["Polo"],
        "han-dynasty": ["Han empire", "Western Han"],
        sogdians: ["Sogdian merchants", "Sogdiana"],
        "mongol-empire": ["Mongol khanates", "Yeke Mongghol Ulus"],
        "pax-mongolica": ["Mongol peace"],
        "kushan-empire": ["Kushans", "Kušan"],
        silk: ["serica", "Chinese silk"],
        "camel-caravans": ["Bactrian caravans", "camel trains"],
        "buddhism-transmission": ["transmission of Buddhism", "Buddhist missions"],
        paper: ["Chinese paper"],
        "ferghana-horses": ["Heavenly Horses", "Dayuan horses"],
        yuezhi: ["Yueh-chih", "Rouzhi"],
        "parthian-empire": ["Arsacid Empire", "Parthia"],
        srivijaya: ["Srivijaya empire", "Palembang thalassocracy"],
        "dunhuang-manuscripts": ["Dunhuang library cave", "Stein manuscripts"]
    },
    parents: {
        "hexi-corridor": "overland-silk-road",
        "taklamakan-desert": "overland-silk-road",
        changan: "overland-silk-road",
        dunhuang: "hexi-corridor",
        kashgar: "overland-silk-road",
        samarkand: "overland-silk-road",
        palmyra: "overland-silk-road",
        "mogao-caves": "dunhuang",
        "dunhuang-manuscripts": "mogao-caves",
        quanzhou: "maritime-silk-route",
        srivijaya: "maritime-silk-route",
        "zhang-qian": "han-dynasty",
        "emperor-wu-of-han": "han-dynasty",
        sogdians: "samarkand",
        "pax-mongolica": "mongol-empire",
        "marco-polo": "pax-mongolica",
        "kushan-empire": "yuezhi"
    }
});
