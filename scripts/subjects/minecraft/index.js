/**
 * Minecraft subject package — Mojang's sandbox survival game.
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
        id: "minecraft",
        name: "Minecraft",
        rootSlug: "minecraft",
        theme: "minecraft",
        copyright: {
            title: "Minecraft is not owned by Ton-o-Lore.",
            body:
                "Minecraft, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Mojang Studios, Microsoft Corporation, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        minecraft: ["MC", "Minecraft game"],
        notch: ["Notch", "Markus Persson", "Markus Notch Persson"],
        jeb: ["Jeb", "Jens Bergensten"],
        mojang: ["Mojang", "Mojang AB", "Mojang Studios"],
        microsoft: ["MS", "Xbox Game Studios"],
        steve: ["Steve"],
        alex: ["Alex"],
        overworld: ["Overworld"],
        nether: ["Nether", "Hell dimension"],
        "the-end": ["End", "The End dimension"],
        creeper: ["Creepers"],
        enderman: ["Endermen"],
        "ender-dragon": ["Dragon", "Enderdragon"],
        villagers: ["Villager"],
        "iron-golem": ["Golem"],
        piglin: ["Piglins"],
        warden: ["The Warden"],
        diamonds: ["Diamond", "Diamond ore"],
        redstone: ["Redstone dust", "Redstone circuit"],
        netherite: ["Netherite ingot"],
        "crafting-table": ["Workbench", "Craft table"],
        survival: ["Survival"],
        creative: ["Creative"],
        hardcore: ["Hardcore"],
        "minecraft-java": ["Java Edition", "Java"],
        "minecraft-bedrock": ["Bedrock", "Bedrock Edition", "MCPE"]
    },
    parents: {
        steve: "minecraft",
        alex: "minecraft",
        creeper: "overworld",
        zombie: "overworld",
        skeleton: "overworld",
        villagers: "villages",
        "iron-golem": "villages",
        enderman: "the-end",
        "ender-dragon": "the-end",
        piglin: "nether",
        warden: "overworld",
        villages: "overworld",
        diamonds: "overworld",
        netherite: "nether",
        hardcore: "survival",
        "minecraft-java": "minecraft",
        "minecraft-bedrock": "minecraft"
    }
});
