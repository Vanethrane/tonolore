/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "minecraft",
        "name": "Minecraft",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Mojang's block-building sandbox of survival and creation.",
        "description": "Minecraft is a sandbox game of mining, crafting, and exploration across the Overworld, Nether, and The End, created by Markus Notch Persson and developed by Mojang.",
        "aliases": []
    },
    {
        "slug": "notch",
        "name": "Markus 'Notch' Persson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Original creator of Minecraft.",
        "description": "Markus 'Notch' Persson created Minecraft, releasing early builds that grew into the global sandbox phenomenon before Mojang's sale to Microsoft.",
        "aliases": []
    },
    {
        "slug": "jeb",
        "name": "Jens 'Jeb' Bergensten",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lead developer who succeeded Notch.",
        "description": "Jens 'Jeb' Bergensten became lead developer of Minecraft after Notch, guiding major updates and gameplay systems.",
        "aliases": []
    },
    {
        "slug": "mojang",
        "name": "Mojang Studios",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio that develops Minecraft.",
        "description": "Mojang Studios develops Minecraft and related titles, originally independent and later part of Microsoft.",
        "aliases": []
    },
    {
        "slug": "microsoft",
        "name": "Microsoft",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Parent company of Mojang Studios.",
        "description": "Microsoft acquired Mojang in 2014 and publishes Minecraft across platforms under Xbox Game Studios.",
        "aliases": []
    },
    {
        "slug": "steve",
        "name": "Steve",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Default male player character skin.",
        "description": "Steve is the classic default Minecraft player character, representing the player mining, crafting, and surviving in the world.",
        "aliases": []
    },
    {
        "slug": "alex",
        "name": "Alex",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Default female player character skin.",
        "description": "Alex is a default Minecraft player character skin introduced as an alternative starting look alongside Steve.",
        "aliases": []
    },
    {
        "slug": "overworld",
        "name": "Overworld",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Main dimension of biomes, villages, and mining.",
        "description": "The Overworld is Minecraft's primary dimension of forests, oceans, mountains, villages, caves, and the day-night survival loop.",
        "aliases": []
    },
    {
        "slug": "nether",
        "name": "The Nether",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Hellish dimension of lava, fortresses, and piglins.",
        "description": "The Nether is a dangerous dimension reached by portal, home to netherrack, fortresses, ancient debris, and unique mobs.",
        "aliases": []
    },
    {
        "slug": "the-end",
        "name": "The End",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Void dimension of Endermen and the Ender Dragon.",
        "description": "The End is a floating-island dimension where players face the Ender Dragon and explore outer End cities.",
        "aliases": []
    },
    {
        "slug": "villages",
        "name": "Villages",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Generated settlements of villagers and trades.",
        "description": "Villages are generated Overworld settlements with villagers, farms, and trading halls that shape mid-game progression.",
        "aliases": []
    },
    {
        "slug": "creeper",
        "name": "Creeper",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Silent exploding green mob.",
        "description": "The Creeper is Minecraft's iconic hostile mob that sneaks up on players and explodes, a accidental design turned franchise mascot.",
        "aliases": []
    },
    {
        "slug": "enderman",
        "name": "Enderman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Tall teleporting mob that carries blocks.",
        "description": "Endermen are tall neutral mobs that teleport, pick up blocks, and become hostile when looked at; they inhabit the Overworld and The End.",
        "aliases": []
    },
    {
        "slug": "ender-dragon",
        "name": "Ender Dragon",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Boss of The End.",
        "description": "The Ender Dragon is the boss of The End, fought on the central island and tied to completing the game's classic victory path.",
        "aliases": []
    },
    {
        "slug": "zombie",
        "name": "Zombie",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Common undead night mob.",
        "description": "Zombies are common hostile mobs that spawn in darkness, burn in sunlight, and can convert villagers.",
        "aliases": []
    },
    {
        "slug": "skeleton",
        "name": "Skeleton",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bow-wielding undead mob.",
        "description": "Skeletons are ranged undead mobs that shoot arrows and appear throughout the Overworld and Nether variants.",
        "aliases": []
    },
    {
        "slug": "villagers",
        "name": "Villagers",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Passive NPCs who trade and work jobs.",
        "description": "Villagers are passive NPCs with professions and trading economies, central to iron farms, trading halls, and village life.",
        "aliases": []
    },
    {
        "slug": "iron-golem",
        "name": "Iron Golem",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Village guardian built from iron.",
        "description": "Iron Golems defend villagers from hostile mobs and can be built by players from iron blocks and a carved pumpkin.",
        "aliases": []
    },
    {
        "slug": "piglin",
        "name": "Piglin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gold-obsessed Nether mob.",
        "description": "Piglins inhabit the Nether, barter for gold, and become hostile to players not wearing gold armor.",
        "aliases": []
    },
    {
        "slug": "warden",
        "name": "Warden",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Blind deep-dark boss-like guardian.",
        "description": "The Warden is a powerful blind mob summoned in the deep dark, hunting by sound and vibration rather than sight.",
        "aliases": []
    },
    {
        "slug": "diamonds",
        "name": "Diamonds",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Rare gem for top-tier tools and armor.",
        "description": "Diamonds are a rare Overworld ore used for strong tools, armor, and enchanting setups before netherite.",
        "aliases": []
    },
    {
        "slug": "redstone",
        "name": "Redstone",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Dust and components for circuits and machines.",
        "description": "Redstone enables electrical-like circuits, pistons, clocks, and complex machines across Minecraft engineering.",
        "aliases": []
    },
    {
        "slug": "netherite",
        "name": "Netherite",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Upgrade metal from ancient debris.",
        "description": "Netherite upgrades diamond gear using ancient debris from the Nether, offering fire resistance and higher durability.",
        "aliases": []
    },
    {
        "slug": "crafting-table",
        "name": "Crafting Table",
        "type": "object",
        "evidence": "fiction",
        "short_description": "3x3 crafting station for tools and blocks.",
        "description": "The crafting table expands crafting to a 3x3 grid, foundational to tools, armor, and building progression.",
        "aliases": []
    },
    {
        "slug": "survival",
        "name": "Survival mode",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Mode with health, hunger, and resource gathering.",
        "description": "Survival mode is Minecraft's core loop of gathering resources, managing health and hunger, and surviving mobs.",
        "aliases": []
    },
    {
        "slug": "creative",
        "name": "Creative mode",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Mode with infinite blocks and flight.",
        "description": "Creative mode grants unlimited resources and flight for building without survival constraints.",
        "aliases": []
    },
    {
        "slug": "hardcore",
        "name": "Hardcore mode",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Survival with permanent death.",
        "description": "Hardcore mode is Survival on hard difficulty with a single life; death ends the world as a playable survival save.",
        "aliases": []
    },
    {
        "slug": "enchanting",
        "name": "Enchanting",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Magic upgrades for tools, armor, and books.",
        "description": "Enchanting uses an enchanting table, lapis, and experience to add powerful effects to gear and books.",
        "aliases": []
    },
    {
        "slug": "minecraft-java",
        "name": "Minecraft: Java Edition",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original PC edition with redstone and mods culture.",
        "description": "Minecraft: Java Edition is the original PC version known for its modding scene, snapshots, and redstone complexity.",
        "aliases": []
    },
    {
        "slug": "minecraft-bedrock",
        "name": "Minecraft: Bedrock Edition",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Cross-platform edition on consoles, mobile, and Win10+.",
        "description": "Minecraft: Bedrock Edition unifies console, mobile, and Windows builds with cross-play and Marketplace content.",
        "aliases": []
    },
    {
        "slug": "minecon",
        "name": "Minecon",
        "type": "event",
        "evidence": "fiction",
        "short_description": "Official Minecraft community convention.",
        "description": "Minecon (and later Minecraft Live) is Mojang's celebration of updates, community builds, and franchise news.",
        "aliases": []
    },
    {
        "slug": "minecraft-figures",
        "name": "Minecraft figures",
        "type": "topic",
        "short_description": "People and named forces central to Minecraft.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Minecraft."
    },
    {
        "slug": "minecraft-places",
        "name": "Minecraft places",
        "type": "place",
        "short_description": "Locations and geographies that frame Minecraft.",
        "description": "Places, regions, and built sites that give Minecraft its map — where events and figures concentrate."
    },
    {
        "slug": "minecraft-events",
        "name": "Minecraft events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Minecraft.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Minecraft timeline."
    },
    {
        "slug": "minecraft-objects",
        "name": "Minecraft objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Minecraft.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Minecraft."
    },
    {
        "slug": "minecraft-factions",
        "name": "Minecraft factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Minecraft.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Minecraft."
    },
    {
        "slug": "minecraft-concepts",
        "name": "Minecraft concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Minecraft.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Minecraft readable as a lore graph."
    },
    {
        "slug": "minecraft-eras",
        "name": "Minecraft eras",
        "type": "event",
        "short_description": "Periodization for Minecraft.",
        "description": "Named eras and phases that help readers track how Minecraft changes across time."
    },
    {
        "slug": "minecraft-works",
        "name": "Minecraft works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Minecraft.",
        "description": "Primary works and adaptations through which most audiences encounter Minecraft."
    },
    {
        "slug": "minecraft-symbols",
        "name": "Minecraft symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Minecraft.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Minecraft."
    }
];

const relationships = [
    [
        "notch",
        "minecraft",
        "created",
        "Notch created Minecraft.",
        0.99,
        0.99
    ],
    [
        "jeb",
        "minecraft",
        "influenced",
        "Jeb led development after Notch.",
        0.97,
        0.94
    ],
    [
        "mojang",
        "minecraft",
        "produced",
        "Mojang develops Minecraft.",
        0.99,
        0.98
    ],
    [
        "microsoft",
        "mojang",
        "produced",
        "Microsoft acquired Mojang.",
        0.98,
        0.96
    ],
    [
        "microsoft",
        "minecraft",
        "produced",
        "Microsoft publishes Minecraft worldwide.",
        0.96,
        0.93
    ],
    [
        "minecraft-java",
        "minecraft",
        "part_of",
        "Java Edition is a core Minecraft edition.",
        0.99,
        0.97
    ],
    [
        "minecraft-bedrock",
        "minecraft",
        "part_of",
        "Bedrock Edition is a core Minecraft edition.",
        0.99,
        0.97
    ],
    [
        "minecon",
        "minecraft",
        "part_of",
        "Minecon celebrates Minecraft.",
        0.95,
        0.9
    ],
    [
        "steve",
        "minecraft",
        "connected_to",
        "Steve is a default Minecraft avatar.",
        0.97,
        0.94
    ],
    [
        "alex",
        "minecraft",
        "connected_to",
        "Alex is a default Minecraft avatar.",
        0.97,
        0.94
    ],
    [
        "overworld",
        "minecraft",
        "located_in",
        "The Overworld is Minecraft's main dimension.",
        0.99,
        0.97
    ],
    [
        "nether",
        "minecraft",
        "located_in",
        "The Nether is a Minecraft dimension.",
        0.99,
        0.97
    ],
    [
        "the-end",
        "minecraft",
        "located_in",
        "The End is a Minecraft dimension.",
        0.99,
        0.97
    ],
    [
        "villages",
        "overworld",
        "located_in",
        "Villages generate in the Overworld.",
        0.98,
        0.95
    ],
    [
        "creeper",
        "overworld",
        "located_in",
        "Creepers spawn in the Overworld.",
        0.97,
        0.94
    ],
    [
        "enderman",
        "the-end",
        "located_in",
        "Endermen are iconic to The End.",
        0.96,
        0.92
    ],
    [
        "ender-dragon",
        "the-end",
        "located_in",
        "The Ender Dragon rules The End.",
        0.99,
        0.97
    ],
    [
        "villagers",
        "villages",
        "located_in",
        "Villagers live in villages.",
        0.98,
        0.95
    ],
    [
        "iron-golem",
        "villages",
        "supports",
        "Iron Golems protect villages.",
        0.97,
        0.93
    ],
    [
        "piglin",
        "nether",
        "located_in",
        "Piglins inhabit the Nether.",
        0.98,
        0.95
    ],
    [
        "warden",
        "overworld",
        "located_in",
        "The Warden appears in the deep dark of the Overworld.",
        0.96,
        0.92
    ],
    [
        "diamonds",
        "survival",
        "uses",
        "Diamonds power mid-to-late Survival progression.",
        0.96,
        0.92
    ],
    [
        "redstone",
        "minecraft",
        "connected_to",
        "Redstone enables Minecraft automation.",
        0.97,
        0.94
    ],
    [
        "netherite",
        "nether",
        "connected_to",
        "Netherite comes from Nether ancient debris.",
        0.98,
        0.95
    ],
    [
        "crafting-table",
        "survival",
        "uses",
        "Crafting tables unlock Survival crafting.",
        0.97,
        0.93
    ],
    [
        "survival",
        "minecraft",
        "part_of",
        "Survival is a core Minecraft mode.",
        0.99,
        0.97
    ],
    [
        "creative",
        "minecraft",
        "part_of",
        "Creative is a core Minecraft mode.",
        0.99,
        0.97
    ],
    [
        "hardcore",
        "survival",
        "part_of",
        "Hardcore is a permanent-death Survival variant.",
        0.97,
        0.94
    ],
    [
        "enchanting",
        "survival",
        "connected_to",
        "Enchanting upgrades Survival gear.",
        0.96,
        0.92
    ],
    [
        "zombie",
        "villagers",
        "opposed_by",
        "Zombies can convert villagers into zombie villagers.",
        0.95,
        0.9
    ],
    [
        "minecraft",
        "minecraft-figures",
        "contains",
        "Minecraft figures is a primary trailhead under Minecraft.",
        0.88,
        0.82
    ],
    [
        "minecraft",
        "minecraft-places",
        "contains",
        "Minecraft places is a primary trailhead under Minecraft.",
        0.88,
        0.82
    ],
    [
        "minecraft",
        "minecraft-events",
        "contains",
        "Minecraft events is a primary trailhead under Minecraft.",
        0.88,
        0.82
    ],
    [
        "minecraft",
        "minecraft-objects",
        "contains",
        "Minecraft objects & artifacts is a primary trailhead under Minecraft.",
        0.88,
        0.82
    ],
    [
        "minecraft",
        "minecraft-factions",
        "contains",
        "Minecraft factions & groups is a primary trailhead under Minecraft.",
        0.88,
        0.82
    ],
    [
        "minecraft",
        "minecraft-concepts",
        "contains",
        "Minecraft concepts is a primary trailhead under Minecraft.",
        0.88,
        0.82
    ],
    [
        "minecraft",
        "minecraft-eras",
        "contains",
        "Minecraft eras is a primary trailhead under Minecraft.",
        0.88,
        0.82
    ],
    [
        "minecraft",
        "minecraft-works",
        "contains",
        "Minecraft works & media is a primary trailhead under Minecraft.",
        0.88,
        0.82
    ],
    [
        "minecraft",
        "minecraft-symbols",
        "contains",
        "Minecraft symbols is a primary trailhead under Minecraft.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
