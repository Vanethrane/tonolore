/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dungeons-and-dragons",
        "name": "Dungeons & Dragons",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Wizards of the Coast's tabletop fantasy RPG of dice, classes, and shared worlds.",
        "description": "Dungeons & Dragons is the tabletop role-playing game published by Wizards of the Coast, spanning editions from Gary Gygax and Dave Arneson's original rules through modern fifth edition play across the Forgotten Realms, Greyhawk, and countless homebrew campaigns.",
        "aliases": []
    },
    {
        "slug": "wizards-of-the-coast",
        "name": "Wizards of the Coast",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of Dungeons & Dragons and Magic: The Gathering.",
        "description": "Wizards of the Coast (WotC) publishes Dungeons & Dragons, curates official settings such as the Forgotten Realms, and supports play through books, D&D Beyond, and organized play programs.",
        "aliases": []
    },
    {
        "slug": "hasbro",
        "name": "Hasbro",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Parent company of Wizards of the Coast.",
        "description": "Hasbro owns Wizards of the Coast, placing Dungeons & Dragons within a broader portfolio of games and entertainment brands.",
        "aliases": []
    },
    {
        "slug": "gary-gygax",
        "name": "Gary Gygax",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Co-creator of Dungeons & Dragons.",
        "description": "Gary Gygax co-designed Dungeons & Dragons with Dave Arneson, shaping its classes, monsters, and dungeon-delving structure that defined modern tabletop RPGs.",
        "aliases": []
    },
    {
        "slug": "dave-arneson",
        "name": "Dave Arneson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Co-creator who brought open-world play to D&D.",
        "description": "Dave Arneson co-created Dungeons & Dragons, contributing the Blackmoor campaign's freeform exploration that helped birth the hobby.",
        "aliases": []
    },
    {
        "slug": "ed-greenwood",
        "name": "Ed Greenwood",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of the Forgotten Realms.",
        "description": "Ed Greenwood created the Forgotten Realms setting, building Faerûn, Waterdeep, and the lore that became D&D's flagship world.",
        "aliases": []
    },
    {
        "slug": "r-a-salvatore",
        "name": "R. A. Salvatore",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Novelist who popularized Drizzt Do'Urden.",
        "description": "R. A. Salvatore's Forgotten Realms novels, especially the Icewind Dale and Legend of Drizzt series, made Drizzt Do'Urden one of D&D's most recognizable heroes.",
        "aliases": []
    },
    {
        "slug": "original-dungeons-dragons",
        "name": "Original Dungeons & Dragons (1974)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "The first published D&D rules set.",
        "description": "Original Dungeons & Dragons (1974) packaged Gygax and Arneson's fantasy wargame into a boxed RPG that launched the tabletop hobby.",
        "aliases": []
    },
    {
        "slug": "advanced-dungeons-dragons",
        "name": "Advanced Dungeons & Dragons",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Expanded AD&D rules line of the 1970s–80s.",
        "description": "Advanced Dungeons & Dragons refined classes, spells, and monsters into a structured rules line that dominated early D&D play.",
        "aliases": []
    },
    {
        "slug": "dnd-fifth-edition",
        "name": "Dungeons & Dragons 5th Edition",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Current streamlined edition of D&D.",
        "description": "Dungeons & Dragons 5th Edition emphasizes accessible rules, bounded accuracy, and modular play, supported by the Player's Handbook and ongoing adventure publications.",
        "aliases": []
    },
    {
        "slug": "players-handbook",
        "name": "Player's Handbook",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Core player rules for character creation.",
        "description": "The Player's Handbook defines D&D character classes, races, spells, and equipment—the foundation text for building adventurers in official play.",
        "aliases": []
    },
    {
        "slug": "forgotten-realms",
        "name": "Forgotten Realms",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Flagship D&D campaign setting of Faerûn.",
        "description": "The Forgotten Realms is Wizards' primary D&D setting, a high-fantasy world of Faerûn where Waterdeep, the Sword Coast, and Baldur's Gate anchor countless adventures.",
        "aliases": []
    },
    {
        "slug": "greyhawk",
        "name": "Greyhawk",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Classic Oerth-based setting of early D&D.",
        "description": "Greyhawk is the campaign world on Oerth where Gygax's Castle Greyhawk and early D&D lore helped establish dungeons, deities, and iconic artifacts.",
        "aliases": []
    },
    {
        "slug": "faerun",
        "name": "Faerûn",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Continent at the heart of the Forgotten Realms.",
        "description": "Faerûn is the continental heart of the Forgotten Realms, home to Waterdeep, Candlekeep, the Sword Coast, and the cities that define modern D&D fiction.",
        "aliases": []
    },
    {
        "slug": "waterdeep",
        "name": "Waterdeep",
        "type": "place",
        "evidence": "fiction",
        "short_description": "City of Splendors on the Sword Coast.",
        "description": "Waterdeep is the bustling City of Splendors on the Sword Coast, a hub of trade, intrigue, and adventuring guilds in the Forgotten Realms.",
        "aliases": []
    },
    {
        "slug": "sword-coast",
        "name": "Sword Coast",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Western Faerûn frontier of coastal cities.",
        "description": "The Sword Coast is the western Faerûn frontier of walled cities, wild frontiers, and famous adventure sites stretching from Luskan toward Baldur's Gate.",
        "aliases": []
    },
    {
        "slug": "baldurs-gate",
        "name": "Baldur's Gate",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Coastal city and adventure hub on the Sword Coast.",
        "description": "Baldur's Gate is a major Sword Coast city whose name anchors classic D&D adventures and video-game adaptations as a gateway to Faerûn intrigue.",
        "aliases": []
    },
    {
        "slug": "dragonlance",
        "name": "Dragonlance",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Krynn setting of the War of the Lance.",
        "description": "Dragonlance is the Krynn setting of the War of the Lance novels and modules, known for heroic companions, dragon armies, and the world-shaping Cataclysm.",
        "aliases": []
    },
    {
        "slug": "planescape",
        "name": "Planescape",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Multiverse setting of Sigil and the planes.",
        "description": "Planescape explores D&D's Outer Planes and the city of Sigil, framing cosmology, factions, and adventures that cross worlds and philosophies.",
        "aliases": []
    },
    {
        "slug": "ravenloft",
        "name": "Ravenloft",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Gothic horror Domains of Dread setting.",
        "description": "Ravenloft is D&D's gothic horror setting of mist-shrouded Domains of Dread, where darklords such as Strahd rule isolated nightmare realms.",
        "aliases": []
    },
    {
        "slug": "oerth",
        "name": "Oerth",
        "type": "place",
        "evidence": "fiction",
        "short_description": "World of the Greyhawk setting.",
        "description": "Oerth is the world of Greyhawk, where the Flanaess continent and Castle Greyhawk anchor early D&D history and deity lore.",
        "aliases": []
    },
    {
        "slug": "candlekeep",
        "name": "Candlekeep",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Fortress-library of lore on the Sword Coast.",
        "description": "Candlekeep is the great fortress-library on the Sword Coast, where sages preserve tomes and adventurers seek knowledge tied to Faerûn's deepest secrets.",
        "aliases": []
    },
    {
        "slug": "drizzt-do-urden",
        "name": "Drizzt Do'Urden",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Renegade drow ranger of the Forgotten Realms.",
        "description": "Drizzt Do'Urden is a drow ranger who rejected Lolth's Underdark society, becoming a surface hero alongside Guenhwyvar in R. A. Salvatore's novels.",
        "aliases": []
    },
    {
        "slug": "elminster",
        "name": "Elminster",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sage of Shadowdale and iconic Realms archmage.",
        "description": "Elminster of Shadowdale is the pipe-smoking archmage and Chosen of Mystra whose counsel and schemes weave through Forgotten Realms history.",
        "aliases": []
    },
    {
        "slug": "dungeon-master",
        "name": "Dungeon Master",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Referee who runs a D&D game.",
        "description": "The Dungeon Master (DM) narrates the world, adjudicates rules, and portrays NPCs and monsters so players can explore shared fantasy stories.",
        "aliases": []
    },
    {
        "slug": "alignment-system",
        "name": "Alignment",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Moral and ethical axes for characters.",
        "description": "D&D's alignment system charts lawful–chaotic and good–evil axes, giving shorthand for character ethics across editions and settings.",
        "aliases": []
    },
    {
        "slug": "character-class",
        "name": "Character class",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Archetype defining abilities and role.",
        "description": "Character classes such as fighter, wizard, and cleric define a PC's capabilities, progression, and party role in D&D adventures.",
        "aliases": []
    },
    {
        "slug": "dnd-beyond",
        "name": "D&D Beyond",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Official digital toolset for D&D.",
        "description": "D&D Beyond is Wizards' digital platform for character sheets, rules lookup, and licensed content tied to fifth edition play.",
        "aliases": []
    },
    {
        "slug": "drow",
        "name": "Drow",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Underdark elves tied to Lolth's faith.",
        "description": "Drow are dark elves of the Underdark whose matriarchal society worships Lolth, making Drizzt's exile a defining Realms story.",
        "aliases": []
    },
    {
        "slug": "lolth",
        "name": "Lolth",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Spider Queen goddess of the drow.",
        "description": "Lolth, the Spider Queen, is the chaotic evil goddess of drow who demands betrayal and survival in the depths beneath Faerûn.",
        "aliases": []
    },
    {
        "slug": "mystra",
        "name": "Mystra",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Goddess of the Weave and arcane magic.",
        "description": "Mystra governs the Weave of arcane magic in the Forgotten Realms, choosing Chosen such as Elminster to safeguard spellcasting.",
        "aliases": []
    },
    {
        "slug": "torm",
        "name": "Torm",
        "type": "person",
        "evidence": "fiction",
        "short_description": "God of duty and righteous paladins.",
        "description": "Torm is the god of duty and loyalty in Faerûn, patron of paladins who swear oaths against tyranny and corruption.",
        "aliases": []
    },
    {
        "slug": "vecna",
        "name": "Vecna",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lich-god of secrets and forbidden lore.",
        "description": "Vecna is the undead arch-lich whose hand and eye artifacts embody betrayal and hidden knowledge across D&D's multiverse.",
        "aliases": []
    },
    {
        "slug": "dungeons-and-dragons-figures",
        "name": "Dungeons & Dragons figures",
        "type": "topic",
        "short_description": "People and named forces central to Dungeons & Dragons.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Dungeons & Dragons."
    },
    {
        "slug": "dungeons-and-dragons-places",
        "name": "Dungeons & Dragons places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dungeons & Dragons.",
        "description": "Places, regions, and built sites that give Dungeons & Dragons its map — where events and figures concentrate."
    },
    {
        "slug": "dungeons-and-dragons-events",
        "name": "Dungeons & Dragons events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dungeons & Dragons.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dungeons & Dragons timeline."
    },
    {
        "slug": "dungeons-and-dragons-objects",
        "name": "Dungeons & Dragons objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dungeons & Dragons.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dungeons & Dragons."
    },
    {
        "slug": "dungeons-and-dragons-factions",
        "name": "Dungeons & Dragons factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dungeons & Dragons.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dungeons & Dragons."
    },
    {
        "slug": "dungeons-and-dragons-concepts",
        "name": "Dungeons & Dragons concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dungeons & Dragons.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dungeons & Dragons readable as a lore graph."
    },
    {
        "slug": "dungeons-and-dragons-eras",
        "name": "Dungeons & Dragons eras",
        "type": "event",
        "short_description": "Periodization for Dungeons & Dragons.",
        "description": "Named eras and phases that help readers track how Dungeons & Dragons changes across time."
    }
];

const relationships = [
    [
        "gary-gygax",
        "dungeons-and-dragons",
        "created",
        "Gary Gygax co-created Dungeons & Dragons.",
        0.99,
        0.99
    ],
    [
        "dave-arneson",
        "dungeons-and-dragons",
        "created",
        "Dave Arneson co-created Dungeons & Dragons.",
        0.99,
        0.99
    ],
    [
        "gary-gygax",
        "greyhawk",
        "created",
        "Gygax developed Greyhawk as his home campaign.",
        0.97,
        0.95
    ],
    [
        "ed-greenwood",
        "forgotten-realms",
        "created",
        "Ed Greenwood created the Forgotten Realms.",
        0.99,
        0.98
    ],
    [
        "r-a-salvatore",
        "drizzt-do-urden",
        "created",
        "Salvatore's novels defined Drizzt Do'Urden.",
        0.98,
        0.97
    ],
    [
        "wizards-of-the-coast",
        "dungeons-and-dragons",
        "publishes",
        "Wizards of the Coast publishes D&D.",
        0.99,
        0.99
    ],
    [
        "hasbro",
        "wizards-of-the-coast",
        "contains",
        "Hasbro owns Wizards of the Coast.",
        0.98,
        0.96
    ],
    [
        "wizards-of-the-coast",
        "dnd-beyond",
        "produced",
        "Wizards operates D&D Beyond.",
        0.96,
        0.93
    ],
    [
        "wizards-of-the-coast",
        "forgotten-realms",
        "publishes",
        "WotC publishes Forgotten Realms material.",
        0.97,
        0.95
    ],
    [
        "original-dungeons-dragons",
        "dungeons-and-dragons",
        "part_of",
        "The 1974 rules began the D&D line.",
        0.99,
        0.98
    ],
    [
        "advanced-dungeons-dragons",
        "dungeons-and-dragons",
        "part_of",
        "AD&D is a major historical edition.",
        0.98,
        0.96
    ],
    [
        "dnd-fifth-edition",
        "dungeons-and-dragons",
        "part_of",
        "5e is the current D&D edition.",
        0.99,
        0.99
    ],
    [
        "players-handbook",
        "dnd-fifth-edition",
        "part_of",
        "The Player's Handbook is core to 5e.",
        0.98,
        0.97
    ],
    [
        "forgotten-realms",
        "dungeons-and-dragons",
        "part_of",
        "The Realms are D&D's flagship setting.",
        0.98,
        0.97
    ],
    [
        "greyhawk",
        "dungeons-and-dragons",
        "part_of",
        "Greyhawk is a classic D&D setting.",
        0.97,
        0.95
    ],
    [
        "dragonlance",
        "dungeons-and-dragons",
        "part_of",
        "Dragonlance is an official D&D setting.",
        0.96,
        0.94
    ],
    [
        "planescape",
        "dungeons-and-dragons",
        "part_of",
        "Planescape explores D&D's planes.",
        0.95,
        0.92
    ],
    [
        "ravenloft",
        "dungeons-and-dragons",
        "part_of",
        "Ravenloft is D&D's horror setting.",
        0.96,
        0.93
    ],
    [
        "faerun",
        "forgotten-realms",
        "located_in",
        "Faerûn is the Realms' main continent.",
        0.99,
        0.98
    ],
    [
        "waterdeep",
        "sword-coast",
        "located_in",
        "Waterdeep lies on the Sword Coast.",
        0.98,
        0.96
    ],
    [
        "baldurs-gate",
        "sword-coast",
        "located_in",
        "Baldur's Gate is a Sword Coast city.",
        0.98,
        0.96
    ],
    [
        "candlekeep",
        "sword-coast",
        "located_in",
        "Candlekeep stands on the Sword Coast.",
        0.97,
        0.94
    ],
    [
        "sword-coast",
        "faerun",
        "located_in",
        "The Sword Coast is western Faerûn.",
        0.98,
        0.96
    ],
    [
        "oerth",
        "greyhawk",
        "located_in",
        "Greyhawk adventures take place on Oerth.",
        0.97,
        0.95
    ],
    [
        "drizzt-do-urden",
        "drow",
        "member_of",
        "Drizzt was born a drow of Menzoberranzan.",
        0.98,
        0.96
    ],
    [
        "drizzt-do-urden",
        "forgotten-realms",
        "located_in",
        "Drizzt's stories unfold in the Realms.",
        0.98,
        0.96
    ],
    [
        "drizzt-do-urden",
        "lolth",
        "opposed_by",
        "Drizzt rejected Lolth's faith.",
        0.97,
        0.95
    ],
    [
        "elminster",
        "forgotten-realms",
        "located_in",
        "Elminster operates across Faerûn.",
        0.97,
        0.95
    ],
    [
        "elminster",
        "mystra",
        "connected_to",
        "Elminster is a Chosen of Mystra.",
        0.96,
        0.93
    ],
    [
        "drow",
        "lolth",
        "connected_to",
        "Drow society centers on Lolth's church.",
        0.97,
        0.95
    ],
    [
        "dungeon-master",
        "dungeons-and-dragons",
        "part_of",
        "The DM runs D&D sessions.",
        0.99,
        0.98
    ],
    [
        "alignment-system",
        "dungeons-and-dragons",
        "part_of",
        "Alignment is a core D&D concept.",
        0.96,
        0.93
    ],
    [
        "character-class",
        "players-handbook",
        "records",
        "The PHB defines official classes.",
        0.97,
        0.95
    ],
    [
        "baldurs-gate",
        "forgotten-realms",
        "related_to",
        "Baldur's Gate anchors Realms adventures and adaptations.",
        0.95,
        0.92
    ],
    [
        "vecna",
        "dungeons-and-dragons",
        "related_to",
        "Vecna's artifacts appear across D&D settings.",
        0.94,
        0.9
    ],
    [
        "torm",
        "forgotten-realms",
        "related_to",
        "Torm is a major Faerûnian deity.",
        0.95,
        0.91
    ],
    [
        "dungeons-and-dragons",
        "dungeons-and-dragons-figures",
        "contains",
        "Dungeons & Dragons figures is a primary trailhead under Dungeons & Dragons.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-dragons",
        "dungeons-and-dragons-places",
        "contains",
        "Dungeons & Dragons places is a primary trailhead under Dungeons & Dragons.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-dragons",
        "dungeons-and-dragons-events",
        "contains",
        "Dungeons & Dragons events is a primary trailhead under Dungeons & Dragons.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-dragons",
        "dungeons-and-dragons-objects",
        "contains",
        "Dungeons & Dragons objects & artifacts is a primary trailhead under Dungeons & Dragons.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-dragons",
        "dungeons-and-dragons-factions",
        "contains",
        "Dungeons & Dragons factions & groups is a primary trailhead under Dungeons & Dragons.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-dragons",
        "dungeons-and-dragons-concepts",
        "contains",
        "Dungeons & Dragons concepts is a primary trailhead under Dungeons & Dragons.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-dragons",
        "dungeons-and-dragons-eras",
        "contains",
        "Dungeons & Dragons eras is a primary trailhead under Dungeons & Dragons.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
