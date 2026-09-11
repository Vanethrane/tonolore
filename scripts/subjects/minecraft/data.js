/*
 * Minecraft subject data — Mojang's sandbox survival game.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "fiction", extras = {}) {
    entities.push({
        slug,
        name,
        type,
        evidence,
        short_description,
        description,
        aliases: extras.aliases || [],
        parentSlug: extras.parentSlug || undefined
    });
}

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

/* ---------- Root / creators ---------- */

entity(
    "minecraft",
    "Minecraft",
    "topic",
    "Mojang's block-building sandbox of survival and creation.",
    "Minecraft is a sandbox game of mining, crafting, and exploration across the Overworld, Nether, and The End, created by Markus Notch Persson and developed by Mojang."
);

entity(
    "notch",
    "Markus 'Notch' Persson",
    "person",
    "Original creator of Minecraft.",
    "Markus 'Notch' Persson created Minecraft, releasing early builds that grew into the global sandbox phenomenon before Mojang's sale to Microsoft."
);

entity(
    "jeb",
    "Jens 'Jeb' Bergensten",
    "person",
    "Lead developer who succeeded Notch.",
    "Jens 'Jeb' Bergensten became lead developer of Minecraft after Notch, guiding major updates and gameplay systems."
);

entity(
    "mojang",
    "Mojang Studios",
    "organization",
    "Studio that develops Minecraft.",
    "Mojang Studios develops Minecraft and related titles, originally independent and later part of Microsoft."
);

entity(
    "microsoft",
    "Microsoft",
    "organization",
    "Parent company of Mojang Studios.",
    "Microsoft acquired Mojang in 2014 and publishes Minecraft across platforms under Xbox Game Studios."
);

/* ---------- Characters / avatars ---------- */

entity(
    "steve",
    "Steve",
    "person",
    "Default male player character skin.",
    "Steve is the classic default Minecraft player character, representing the player mining, crafting, and surviving in the world."
);

entity(
    "alex",
    "Alex",
    "person",
    "Default female player character skin.",
    "Alex is a default Minecraft player character skin introduced as an alternative starting look alongside Steve."
);

/* ---------- Dimensions / places ---------- */

entity(
    "overworld",
    "Overworld",
    "place",
    "Main dimension of biomes, villages, and mining.",
    "The Overworld is Minecraft's primary dimension of forests, oceans, mountains, villages, caves, and the day-night survival loop."
);

entity(
    "nether",
    "The Nether",
    "place",
    "Hellish dimension of lava, fortresses, and piglins.",
    "The Nether is a dangerous dimension reached by portal, home to netherrack, fortresses, ancient debris, and unique mobs."
);

entity(
    "the-end",
    "The End",
    "place",
    "Void dimension of Endermen and the Ender Dragon.",
    "The End is a floating-island dimension where players face the Ender Dragon and explore outer End cities."
);

entity(
    "villages",
    "Villages",
    "place",
    "Generated settlements of villagers and trades.",
    "Villages are generated Overworld settlements with villagers, farms, and trading halls that shape mid-game progression."
);

/* ---------- Mobs ---------- */

entity(
    "creeper",
    "Creeper",
    "person",
    "Silent exploding green mob.",
    "The Creeper is Minecraft's iconic hostile mob that sneaks up on players and explodes, a accidental design turned franchise mascot."
);

entity(
    "enderman",
    "Enderman",
    "person",
    "Tall teleporting mob that carries blocks.",
    "Endermen are tall neutral mobs that teleport, pick up blocks, and become hostile when looked at; they inhabit the Overworld and The End."
);

entity(
    "ender-dragon",
    "Ender Dragon",
    "person",
    "Boss of The End.",
    "The Ender Dragon is the boss of The End, fought on the central island and tied to completing the game's classic victory path."
);

entity(
    "zombie",
    "Zombie",
    "person",
    "Common undead night mob.",
    "Zombies are common hostile mobs that spawn in darkness, burn in sunlight, and can convert villagers."
);

entity(
    "skeleton",
    "Skeleton",
    "person",
    "Bow-wielding undead mob.",
    "Skeletons are ranged undead mobs that shoot arrows and appear throughout the Overworld and Nether variants."
);

entity(
    "villagers",
    "Villagers",
    "person",
    "Passive NPCs who trade and work jobs.",
    "Villagers are passive NPCs with professions and trading economies, central to iron farms, trading halls, and village life."
);

entity(
    "iron-golem",
    "Iron Golem",
    "person",
    "Village guardian built from iron.",
    "Iron Golems defend villagers from hostile mobs and can be built by players from iron blocks and a carved pumpkin."
);

entity(
    "piglin",
    "Piglin",
    "person",
    "Gold-obsessed Nether mob.",
    "Piglins inhabit the Nether, barter for gold, and become hostile to players not wearing gold armor."
);

entity(
    "warden",
    "Warden",
    "person",
    "Blind deep-dark boss-like guardian.",
    "The Warden is a powerful blind mob summoned in the deep dark, hunting by sound and vibration rather than sight."
);

/* ---------- Items / concepts ---------- */

entity(
    "diamonds",
    "Diamonds",
    "object",
    "Rare gem for top-tier tools and armor.",
    "Diamonds are a rare Overworld ore used for strong tools, armor, and enchanting setups before netherite."
);

entity(
    "redstone",
    "Redstone",
    "object",
    "Dust and components for circuits and machines.",
    "Redstone enables electrical-like circuits, pistons, clocks, and complex machines across Minecraft engineering."
);

entity(
    "netherite",
    "Netherite",
    "object",
    "Upgrade metal from ancient debris.",
    "Netherite upgrades diamond gear using ancient debris from the Nether, offering fire resistance and higher durability."
);

entity(
    "crafting-table",
    "Crafting Table",
    "object",
    "3x3 crafting station for tools and blocks.",
    "The crafting table expands crafting to a 3x3 grid, foundational to tools, armor, and building progression."
);

entity(
    "survival",
    "Survival mode",
    "concept",
    "Mode with health, hunger, and resource gathering.",
    "Survival mode is Minecraft's core loop of gathering resources, managing health and hunger, and surviving mobs."
);

entity(
    "creative",
    "Creative mode",
    "concept",
    "Mode with infinite blocks and flight.",
    "Creative mode grants unlimited resources and flight for building without survival constraints."
);

entity(
    "hardcore",
    "Hardcore mode",
    "concept",
    "Survival with permanent death.",
    "Hardcore mode is Survival on hard difficulty with a single life; death ends the world as a playable survival save."
);

entity(
    "enchanting",
    "Enchanting",
    "concept",
    "Magic upgrades for tools, armor, and books.",
    "Enchanting uses an enchanting table, lapis, and experience to add powerful effects to gear and books."
);

/* ---------- Works / editions ---------- */

entity(
    "minecraft-java",
    "Minecraft: Java Edition",
    "work",
    "Original PC edition with redstone and mods culture.",
    "Minecraft: Java Edition is the original PC version known for its modding scene, snapshots, and redstone complexity."
);

entity(
    "minecraft-bedrock",
    "Minecraft: Bedrock Edition",
    "work",
    "Cross-platform edition on consoles, mobile, and Win10+.",
    "Minecraft: Bedrock Edition unifies console, mobile, and Windows builds with cross-play and Marketplace content."
);

entity(
    "minecon",
    "Minecon",
    "event",
    "Official Minecraft community convention.",
    "Minecon (and later Minecraft Live) is Mojang's celebration of updates, community builds, and franchise news."
);

/* ---------- Relationships ---------- */

rel("notch", "minecraft", "created", "Notch created Minecraft.", 0.99, 0.99);
rel("jeb", "minecraft", "influenced", "Jeb led development after Notch.", 0.97, 0.94);
rel("mojang", "minecraft", "produced", "Mojang develops Minecraft.", 0.99, 0.98);
rel("microsoft", "mojang", "produced", "Microsoft acquired Mojang.", 0.98, 0.96);
rel("microsoft", "minecraft", "produced", "Microsoft publishes Minecraft worldwide.", 0.96, 0.93);

rel("minecraft-java", "minecraft", "part_of", "Java Edition is a core Minecraft edition.", 0.99, 0.97);
rel("minecraft-bedrock", "minecraft", "part_of", "Bedrock Edition is a core Minecraft edition.", 0.99, 0.97);
rel("minecon", "minecraft", "part_of", "Minecon celebrates Minecraft.", 0.95, 0.9);

rel("steve", "minecraft", "connected_to", "Steve is a default Minecraft avatar.", 0.97, 0.94);
rel("alex", "minecraft", "connected_to", "Alex is a default Minecraft avatar.", 0.97, 0.94);

rel("overworld", "minecraft", "located_in", "The Overworld is Minecraft's main dimension.", 0.99, 0.97);
rel("nether", "minecraft", "located_in", "The Nether is a Minecraft dimension.", 0.99, 0.97);
rel("the-end", "minecraft", "located_in", "The End is a Minecraft dimension.", 0.99, 0.97);
rel("villages", "overworld", "located_in", "Villages generate in the Overworld.", 0.98, 0.95);

rel("creeper", "overworld", "located_in", "Creepers spawn in the Overworld.", 0.97, 0.94);
rel("enderman", "the-end", "located_in", "Endermen are iconic to The End.", 0.96, 0.92);
rel("ender-dragon", "the-end", "located_in", "The Ender Dragon rules The End.", 0.99, 0.97);
rel("villagers", "villages", "located_in", "Villagers live in villages.", 0.98, 0.95);
rel("iron-golem", "villages", "supports", "Iron Golems protect villages.", 0.97, 0.93);
rel("piglin", "nether", "located_in", "Piglins inhabit the Nether.", 0.98, 0.95);
rel("warden", "overworld", "located_in", "The Warden appears in the deep dark of the Overworld.", 0.96, 0.92);

rel("diamonds", "survival", "uses", "Diamonds power mid-to-late Survival progression.", 0.96, 0.92);
rel("redstone", "minecraft", "connected_to", "Redstone enables Minecraft automation.", 0.97, 0.94);
rel("netherite", "nether", "connected_to", "Netherite comes from Nether ancient debris.", 0.98, 0.95);
rel("crafting-table", "survival", "uses", "Crafting tables unlock Survival crafting.", 0.97, 0.93);
rel("survival", "minecraft", "part_of", "Survival is a core Minecraft mode.", 0.99, 0.97);
rel("creative", "minecraft", "part_of", "Creative is a core Minecraft mode.", 0.99, 0.97);
rel("hardcore", "survival", "part_of", "Hardcore is a permanent-death Survival variant.", 0.97, 0.94);
rel("enchanting", "survival", "connected_to", "Enchanting upgrades Survival gear.", 0.96, 0.92);
rel("zombie", "villagers", "opposed_by", "Zombies can convert villagers into zombie villagers.", 0.95, 0.9);

module.exports = { entities, relationships };
