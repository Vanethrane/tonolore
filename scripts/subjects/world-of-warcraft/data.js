/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "world-of-warcraft",
        "name": "Warcraft",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Blizzard's fantasy franchise of Azeroth and beyond.",
        "description": "Warcraft is Blizzard Entertainment's fantasy franchise spanning real-time strategy games and World of Warcraft, chronicling the Horde, Alliance, Burning Legion, and the fate of Azeroth.",
        "aliases": []
    },
    {
        "slug": "blizzard-entertainment",
        "name": "Blizzard Entertainment",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Developer and publisher of Warcraft.",
        "description": "Blizzard Entertainment created Warcraft, Warcraft III, and World of Warcraft, expanding Azeroth through expansions, novels, and related media.",
        "aliases": []
    },
    {
        "slug": "warcraft-iii",
        "name": "Warcraft III",
        "type": "work",
        "evidence": "fiction",
        "short_description": "RTS that defined modern Warcraft lore.",
        "description": "Warcraft III: Reign of Chaos and The Frozen Throne tell of Thrall's Horde, the fall of Lordaeron, Illidan, Arthas, and the rise of the Lich King.",
        "aliases": []
    },
    {
        "slug": "world-of-warcraft-mmo",
        "name": "World of Warcraft",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Massively multiplayer online game set on Azeroth.",
        "description": "World of Warcraft is the MMO that continues Warcraft's story across Kalimdor, the Eastern Kingdoms, Outland, Northrend, and later worlds.",
        "aliases": []
    },
    {
        "slug": "azeroth",
        "name": "Azeroth",
        "type": "place",
        "evidence": "fiction",
        "short_description": "World of the Titans, Horde, and Alliance.",
        "description": "Azeroth is the world shaped by Titans and Worldsouls, home to the Alliance and Horde and the battleground against the Burning Legion and other cosmic threats.",
        "aliases": []
    },
    {
        "slug": "eastern-kingdoms",
        "name": "Eastern Kingdoms",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Eastern continent of humans, dwarves, and Forsaken.",
        "description": "The Eastern Kingdoms hold Stormwind, Lordaeron's ruins, Ironforge, and Undercity—heartlands of human kingdoms and Forsaken power.",
        "aliases": []
    },
    {
        "slug": "kalimdor",
        "name": "Kalimdor",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Western continent of orcs, night elves, and more.",
        "description": "Kalimdor is home to Orgrimmar, Darnassus's legacy, Thunder Bluff, and ancient night-elven lands after the Sundering.",
        "aliases": []
    },
    {
        "slug": "northrend",
        "name": "Northrend",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Frozen northern continent of the Lich King.",
        "description": "Northrend is the icy continent crowned by Icecrown Citadel, seat of the Lich King and focus of Wrath of the Lich King.",
        "aliases": []
    },
    {
        "slug": "draenor",
        "name": "Draenor",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Orcish homeworld later shattered into Outland.",
        "description": "Draenor is the orcs' original world, corrupted by the Burning Legion and torn apart into Outland after Ner'zhul's portals.",
        "aliases": []
    },
    {
        "slug": "orgrimmar",
        "name": "Orgrimmar",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Capital city of the orcish Horde on Kalimdor.",
        "description": "Orgrimmar is the fortress-capital founded by Thrall for the orcs on Durotar, long the political heart of the Horde.",
        "aliases": []
    },
    {
        "slug": "stormwind",
        "name": "Stormwind",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Capital of the human kingdom of Stormwind.",
        "description": "Stormwind City is the rebuilt capital of the Kingdom of Stormwind and a primary Alliance hub in the Eastern Kingdoms.",
        "aliases": []
    },
    {
        "slug": "icecrown",
        "name": "Icecrown",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Scourge citadel region of Northrend.",
        "description": "Icecrown is the glacier domain of the Scourge, dominated by Icecrown Citadel where Arthas ruled as the Lich King.",
        "aliases": []
    },
    {
        "slug": "alliance",
        "name": "Alliance",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Coalition of Stormwind, Ironforge, and allies.",
        "description": "The Alliance unites humans, dwarves, gnomes, night elves, and later allies against the Horde and greater threats to Azeroth.",
        "aliases": []
    },
    {
        "slug": "horde",
        "name": "Horde",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Coalition of orcs, trolls, tauren, Forsaken, and more.",
        "description": "The Horde, reshaped by Thrall, binds orcs, Darkspear trolls, tauren, Forsaken, and other peoples in uneasy fellowship on Azeroth.",
        "aliases": []
    },
    {
        "slug": "burning-legion",
        "name": "Burning Legion",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Demonic army bent on destroying worlds.",
        "description": "The Burning Legion is Sargeras's infinite demonic host that burns worlds to starve the Void, invading Azeroth again and again.",
        "aliases": []
    },
    {
        "slug": "scourge",
        "name": "Scourge",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Undead army of the Lich King.",
        "description": "The Scourge is the plague-born undead army created to soften Azeroth for the Legion, later ruled from Icecrown by the Lich King.",
        "aliases": []
    },
    {
        "slug": "forsaken",
        "name": "Forsaken",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Free-willed undead led by Sylvanas.",
        "description": "The Forsaken are undead who broke the Lich King's will, ruled for years by Sylvanas Windrunner from the Undercity.",
        "aliases": []
    },
    {
        "slug": "night-elves",
        "name": "Night Elves",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Kaldorei people of Kalimdor.",
        "description": "Night elves, or Kaldorei, are ancient guardians of Kalimdor whose destiny intertwines with Illidan, Tyrande, Malfurion, and the Legion.",
        "aliases": []
    },
    {
        "slug": "orcs-of-azeroth",
        "name": "Orcs",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Warrior people from Draenor who settled Azeroth.",
        "description": "Orcs came from Draenor through the Dark Portal, first as a demonic Horde and later as Thrall's redeemed people centered on Orgrimmar.",
        "aliases": []
    },
    {
        "slug": "titans",
        "name": "Titans",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "World-shaping Pantheon of Order.",
        "description": "Titans of the Pantheon shaped worlds and imprisoned Old Gods; their conflict with Sargeras frames much of Warcraft's cosmic lore.",
        "aliases": []
    },
    {
        "slug": "sargeras",
        "name": "Sargeras",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fallen Titan who founded the Burning Legion.",
        "description": "Sargeras, once a Titan champion, fell to despair and created the Burning Legion to scour life rather than risk Void corruption.",
        "aliases": []
    },
    {
        "slug": "thrall",
        "name": "Thrall",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Warchief who reforged the Horde.",
        "description": "Thrall, son of Durotan, freed the orcs from camps, founded Orgrimmar, and led the New Horde as shaman and Warchief.",
        "aliases": []
    },
    {
        "slug": "jaina-proudmoore",
        "name": "Jaina Proudmoore",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Archmage and Alliance stateswoman.",
        "description": "Jaina Proudmoore is a powerful mage who sought peace after the Third War, founded Theramore, and remains central to Alliance politics.",
        "aliases": []
    },
    {
        "slug": "sylvanas-windrunner",
        "name": "Sylvanas Windrunner",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Banshee Queen of the Forsaken.",
        "description": "Sylvanas Windrunner, once Ranger-General of Quel'Thalas, became the Banshee Queen leading the Forsaken within the Horde.",
        "aliases": []
    },
    {
        "slug": "illidan-stormrage",
        "name": "Illidan Stormrage",
        "type": "person",
        "evidence": "fiction",
        "short_description": "The Betrayer; demon hunter of legend.",
        "description": "Illidan Stormrage is a night-elf sorcerer turned demon hunter who fought the Legion on his own terms, from the Third War to the Tomb of Sargeras.",
        "aliases": []
    },
    {
        "slug": "arthas-menethil",
        "name": "Arthas Menethil",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Prince of Lordaeron who became the Lich King.",
        "description": "Arthas Menethil, prince of Lordaeron, took Frostmourne to save his people and became a death knight, then merged with Ner'zhul as the Lich King.",
        "aliases": []
    },
    {
        "slug": "lich-king",
        "name": "The Lich King",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dark lord of the Scourge on the Frozen Throne.",
        "description": "The Lich King is the master of the Scourge, first Ner'zhul bound in ice, then Arthas Menethil enthroned at Icecrown.",
        "aliases": []
    },
    {
        "slug": "anduin-wrynn",
        "name": "Anduin Wrynn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "King of Stormwind; son of Varian.",
        "description": "Anduin Wrynn inherits Stormwind's crown and strives for peace as Alliance high king through wars that shake Azeroth.",
        "aliases": []
    },
    {
        "slug": "guldan",
        "name": "Gul'dan",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Warlock who sold the orcs to the Legion.",
        "description": "Gul'dan is the first orc warlock, architect of the dark bargain with Kil'jaeden that corrupted the orcs and opened the path to Azeroth.",
        "aliases": []
    },
    {
        "slug": "kiljaeden",
        "name": "Kil'jaeden",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Demon lord who manipulated the orcs.",
        "description": "Kil'jaeden the Deceiver is a commander of the Burning Legion who corrupted the orcs of Draenor and schemed against Azeroth for ages.",
        "aliases": []
    },
    {
        "slug": "frostmourne",
        "name": "Frostmourne",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Runeblade that claimed Arthas's soul.",
        "description": "Frostmourne is the cursed runeblade that bound Arthas Menethil to the Lich King and became a symbol of the Scourge.",
        "aliases": []
    },
    {
        "slug": "dark-portal",
        "name": "Dark Portal",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Gateway between Azeroth and Draenor.",
        "description": "The Dark Portal, opened by Medivh and Gul'dan, linked Azeroth to Draenor and began the First War between orcs and humans.",
        "aliases": []
    },
    {
        "slug": "death-knights",
        "name": "Death Knights",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Rune-wielding undead warriors of the Scourge.",
        "description": "Death knights are heavy cavalry of undeath—first of the Scourge under Arthas, later including free-willed heroes who rebelled at Light's Hope.",
        "aliases": []
    },
    {
        "slug": "world-of-warcraft-figures",
        "name": "Warcraft figures",
        "type": "topic",
        "short_description": "People and named forces central to Warcraft.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Warcraft."
    },
    {
        "slug": "world-of-warcraft-places",
        "name": "Warcraft places",
        "type": "place",
        "short_description": "Locations and geographies that frame Warcraft.",
        "description": "Places, regions, and built sites that give Warcraft its map — where events and figures concentrate."
    },
    {
        "slug": "world-of-warcraft-events",
        "name": "Warcraft events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Warcraft.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Warcraft timeline."
    },
    {
        "slug": "world-of-warcraft-objects",
        "name": "Warcraft objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Warcraft.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Warcraft."
    },
    {
        "slug": "world-of-warcraft-factions",
        "name": "Warcraft factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Warcraft.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Warcraft."
    },
    {
        "slug": "world-of-warcraft-concepts",
        "name": "Warcraft concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Warcraft.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Warcraft readable as a lore graph."
    },
    {
        "slug": "world-of-warcraft-eras",
        "name": "Warcraft eras",
        "type": "event",
        "short_description": "Periodization for Warcraft.",
        "description": "Named eras and phases that help readers track how Warcraft changes across time."
    }
];

const relationships = [
    [
        "blizzard-entertainment",
        "world-of-warcraft",
        "created",
        "Blizzard Entertainment created Warcraft.",
        0.99,
        0.99
    ],
    [
        "warcraft-iii",
        "world-of-warcraft",
        "part_of",
        "Warcraft III is a cornerstone of the franchise.",
        0.98,
        0.96
    ],
    [
        "world-of-warcraft-mmo",
        "world-of-warcraft",
        "part_of",
        "The MMO continues the Warcraft story.",
        0.99,
        0.97
    ],
    [
        "azeroth",
        "world-of-warcraft",
        "part_of",
        "Azeroth is the primary world of Warcraft.",
        0.99,
        0.98
    ],
    [
        "eastern-kingdoms",
        "azeroth",
        "located_in",
        "The Eastern Kingdoms are on Azeroth.",
        0.98,
        0.95
    ],
    [
        "kalimdor",
        "azeroth",
        "located_in",
        "Kalimdor is on Azeroth.",
        0.98,
        0.95
    ],
    [
        "northrend",
        "azeroth",
        "located_in",
        "Northrend is on Azeroth.",
        0.97,
        0.94
    ],
    [
        "orgrimmar",
        "kalimdor",
        "located_in",
        "Orgrimmar stands on Kalimdor.",
        0.98,
        0.95
    ],
    [
        "stormwind",
        "eastern-kingdoms",
        "located_in",
        "Stormwind is in the Eastern Kingdoms.",
        0.98,
        0.95
    ],
    [
        "icecrown",
        "northrend",
        "located_in",
        "Icecrown is a region of Northrend.",
        0.98,
        0.95
    ],
    [
        "alliance",
        "azeroth",
        "located_in",
        "The Alliance is based on Azeroth.",
        0.97,
        0.94
    ],
    [
        "horde",
        "azeroth",
        "located_in",
        "The Horde is based on Azeroth.",
        0.97,
        0.94
    ],
    [
        "alliance",
        "stormwind",
        "connected_to",
        "Stormwind is a leading Alliance capital.",
        0.97,
        0.94
    ],
    [
        "horde",
        "orgrimmar",
        "connected_to",
        "Orgrimmar is a leading Horde capital.",
        0.97,
        0.94
    ],
    [
        "burning-legion",
        "sargeras",
        "member_of",
        "The Burning Legion serves Sargeras.",
        0.98,
        0.96
    ],
    [
        "sargeras",
        "titans",
        "connected_to",
        "Sargeras was once of the Titan Pantheon.",
        0.97,
        0.94
    ],
    [
        "scourge",
        "lich-king",
        "member_of",
        "The Scourge obeys the Lich King.",
        0.98,
        0.96
    ],
    [
        "forsaken",
        "horde",
        "member_of",
        "The Forsaken joined the Horde.",
        0.96,
        0.92
    ],
    [
        "orcs-of-azeroth",
        "horde",
        "member_of",
        "Orcs form the core of the Horde.",
        0.97,
        0.94
    ],
    [
        "thrall",
        "horde",
        "leads",
        "Thrall led and reshaped the Horde.",
        0.98,
        0.96
    ],
    [
        "thrall",
        "orgrimmar",
        "connected_to",
        "Thrall founded Orgrimmar.",
        0.97,
        0.94
    ],
    [
        "jaina-proudmoore",
        "alliance",
        "member_of",
        "Jaina is a major Alliance figure.",
        0.96,
        0.92
    ],
    [
        "sylvanas-windrunner",
        "forsaken",
        "leads",
        "Sylvanas led the Forsaken.",
        0.98,
        0.95
    ],
    [
        "illidan-stormrage",
        "night-elves",
        "connected_to",
        "Illidan is a night-elf of legend.",
        0.96,
        0.92
    ],
    [
        "illidan-stormrage",
        "burning-legion",
        "opposed_by",
        "Illidan wars against the Burning Legion.",
        0.97,
        0.94
    ],
    [
        "arthas-menethil",
        "lich-king",
        "connected_to",
        "Arthas becomes the Lich King.",
        0.99,
        0.98
    ],
    [
        "lich-king",
        "icecrown",
        "located_in",
        "The Lich King rules from Icecrown.",
        0.98,
        0.95
    ],
    [
        "arthas-menethil",
        "frostmourne",
        "uses",
        "Arthas wields Frostmourne.",
        0.98,
        0.96
    ],
    [
        "anduin-wrynn",
        "stormwind",
        "leads",
        "Anduin rules the Kingdom of Stormwind.",
        0.97,
        0.94
    ],
    [
        "guldan",
        "orcs-of-azeroth",
        "influenced",
        "Gul'dan corrupted the orcs for the Legion.",
        0.97,
        0.94
    ],
    [
        "guldan",
        "burning-legion",
        "member_of",
        "Gul'dan served the Burning Legion's designs.",
        0.96,
        0.92
    ],
    [
        "kiljaeden",
        "burning-legion",
        "member_of",
        "Kil'jaeden is a lord of the Burning Legion.",
        0.98,
        0.95
    ],
    [
        "dark-portal",
        "draenor",
        "connected_to",
        "The Dark Portal links to Draenor.",
        0.97,
        0.94
    ],
    [
        "dark-portal",
        "azeroth",
        "connected_to",
        "The Dark Portal opens onto Azeroth.",
        0.97,
        0.94
    ],
    [
        "world-of-warcraft",
        "world-of-warcraft-figures",
        "contains",
        "Warcraft figures is a primary trailhead under Warcraft.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft",
        "world-of-warcraft-places",
        "contains",
        "Warcraft places is a primary trailhead under Warcraft.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft",
        "world-of-warcraft-events",
        "contains",
        "Warcraft events is a primary trailhead under Warcraft.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft",
        "world-of-warcraft-objects",
        "contains",
        "Warcraft objects & artifacts is a primary trailhead under Warcraft.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft",
        "world-of-warcraft-factions",
        "contains",
        "Warcraft factions & groups is a primary trailhead under Warcraft.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft",
        "world-of-warcraft-concepts",
        "contains",
        "Warcraft concepts is a primary trailhead under Warcraft.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft",
        "world-of-warcraft-eras",
        "contains",
        "Warcraft eras is a primary trailhead under Warcraft.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
