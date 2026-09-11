/**
 * JoJo's Bizarre Adventure subject package — Hirohiko Araki's generational battle manga.
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
        id: "jojos-bizarre-adventure",
        name: "JoJo's Bizarre Adventure",
        rootSlug: "jojos-bizarre-adventure",
        theme: "jojos-bizarre-adventure",
        copyright: {
            title: "JoJo's Bizarre Adventure is not owned by Ton-o-Lore.",
            body:
                "JoJo's Bizarre Adventure, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Hirohiko Araki, Shueisha, David Production, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "jojos-bizarre-adventure": ["JoJo", "JJBA", "ジョジョの奇妙な冒険"],
        "hirohiko-araki": ["Araki", "荒木飛呂彦"],
        shueisha: ["集英社", "Jump Comics"],
        "david-production": ["DavidPro", "David Production studio"],
        "jojo-manga": ["JoJo manga"],
        "jojo-anime": ["JoJo anime", "JoJo TV anime"],
        "phantom-blood": ["Part 1", "JoJo Part 1"],
        "battle-tendency": ["Part 2", "JoJo Part 2"],
        "stardust-crusaders": ["Part 3", "JoJo Part 3", "SC"],
        "golden-wind": ["Part 5", "Vento Aureo", "JoJo Part 5"],
        stands: ["Stand", "スタンド"],
        hamon: ["Hamon", "Ripple", "Sendo"],
        "stone-mask": ["Stone Mask", "Aztec mask"],
        "stand-arrow": ["Stand Arrow", "Arrow"],
        "star-platinum": ["Star Platinum", "SP"],
        "the-world": ["Za Warudo", "DIO's Stand"],
        "gold-experience": ["Gold Experience", "GE"],
        passione: ["Passione mafia", "Italian mafia"],
        "speedwagon-foundation": ["SPW Foundation", "Speedwagon"],
        morioh: ["Morioh Town", "Duwang"],
        "egypt-dio": ["Cairo", "DIO's mansion"],
        naples: ["Napoli", "Naples Italy"],
        "jonathan-joestar": ["Jonathan", "JoJo Part 1"],
        "joseph-joestar": ["Joseph", "Old Joseph"],
        "jotaro-kujo": ["Jotaro", "JoJo Part 3"],
        "giorno-giovanna": ["Giorno", "JoJo Part 5"],
        "dio-brando": ["DIO", "Dio Brando"],
        "kujo-jolyne": ["Jolyne", "JoJo Part 6"],
        "robert-e-o-speedwagon": ["Speedwagon", "Robert E. O. Speedwagon"],
        "noriaki-kakyoin": ["Kakyoin", "Kakyoin Noriaki"],
        "jean-pierre-polnareff": ["Polnareff", "Jean Pierre Polnareff"],
        "bruno-bucciarati": ["Bucciarati", "Bruno Buccellati"],
        diavolo: ["The Boss", "King Crimson user"],
        "josuke-higashikata": ["Josuke", "JoJo Part 4"]
    },
    parents: {
        "jojo-manga": "jojos-bizarre-adventure",
        "jojo-anime": "jojos-bizarre-adventure",
        "phantom-blood": "jojo-manga",
        "battle-tendency": "jojo-manga",
        "stardust-crusaders": "jojo-manga",
        "golden-wind": "jojo-manga",
        "jonathan-joestar": "phantom-blood",
        "joseph-joestar": "battle-tendency",
        "jotaro-kujo": "stardust-crusaders",
        "giorno-giovanna": "golden-wind",
        "josuke-higashikata": "morioh",
        "noriaki-kakyoin": "stardust-crusaders",
        "jean-pierre-polnareff": "stardust-crusaders",
        "bruno-bucciarati": "passione",
        diavolo: "passione",
        "star-platinum": "stands",
        "the-world": "stands",
        "gold-experience": "stands",
        "stardust-crusaders": "egypt-dio",
        "golden-wind": "naples",
        morioh: "jojos-bizarre-adventure",
        "robert-e-o-speedwagon": "speedwagon-foundation",
        "kujo-jolyne": "jotaro-kujo"
    }
});
