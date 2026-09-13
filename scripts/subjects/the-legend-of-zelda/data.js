/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-legend-of-zelda",
        "name": "The Legend of Zelda",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Nintendo's epic of Link, Zelda, and the Triforce.",
        "description": "The Legend of Zelda is Nintendo's long-running adventure franchise following Link, Princess Zelda, and the struggle for the Triforce across eras of Hyrule.",
        "aliases": []
    },
    {
        "slug": "shigeru-miyamoto",
        "name": "Shigeru Miyamoto",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of The Legend of Zelda.",
        "description": "Shigeru Miyamoto created The Legend of Zelda with Takashi Tezuka, shaping Link's exploration, dungeons, and the mythology of Hyrule.",
        "aliases": []
    },
    {
        "slug": "takashi-tezuka",
        "name": "Takashi Tezuka",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Co-creator and longtime Zelda director/producer.",
        "description": "Takashi Tezuka co-created The Legend of Zelda and remained a key creative force across classic and modern entries.",
        "aliases": []
    },
    {
        "slug": "nintendo",
        "name": "Nintendo",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher and developer of The Legend of Zelda.",
        "description": "Nintendo develops and publishes The Legend of Zelda across consoles, from the NES original through Breath of the Wild and Tears of the Kingdom.",
        "aliases": []
    },
    {
        "slug": "link",
        "name": "Link",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hero of Hyrule across many eras.",
        "description": "Link is the silent hero of The Legend of Zelda, wielding the Master Sword against Ganon and restoring balance to Hyrule in each incarnation.",
        "aliases": []
    },
    {
        "slug": "zelda",
        "name": "Princess Zelda",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Princess of Hyrule and bearer of Wisdom.",
        "description": "Princess Zelda rules or protects Hyrule, often holding the Triforce of Wisdom and guiding Link against Ganon's rise.",
        "aliases": []
    },
    {
        "slug": "ganon",
        "name": "Ganon",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Beast form of the Demon King.",
        "description": "Ganon is the monstrous Demon King form associated with the Triforce of Power, repeatedly threatening Hyrule.",
        "aliases": []
    },
    {
        "slug": "ganondorf",
        "name": "Ganondorf",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gerudo king who becomes Ganon.",
        "description": "Ganondorf is the Gerudo king whose ambition for the Triforce transforms him into Ganon across multiple timelines.",
        "aliases": []
    },
    {
        "slug": "navi",
        "name": "Navi",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fairy companion in Ocarina of Time.",
        "description": "Navi is Link's fairy companion in Ocarina of Time, guiding him through Hyrule with her signature Hey, Listen.",
        "aliases": []
    },
    {
        "slug": "sheik",
        "name": "Sheik",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mysterious Sheikah ally who is Zelda in disguise.",
        "description": "Sheik appears in Ocarina of Time as a Sheikah warrior aiding Link; the identity is Princess Zelda in disguise.",
        "aliases": []
    },
    {
        "slug": "impa",
        "name": "Impa",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sheikah guardian of Princess Zelda.",
        "description": "Impa is a Sheikah attendant and protector of Zelda across several games, tied to Kakariko and Sheikah lore.",
        "aliases": []
    },
    {
        "slug": "epona",
        "name": "Epona",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Link's loyal horse.",
        "description": "Epona is Link's horse companion, first iconic in Ocarina of Time and recurring as his mount across Hyrule.",
        "aliases": []
    },
    {
        "slug": "midna",
        "name": "Midna",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Twilight Princess of the Twilight Realm.",
        "description": "Midna is the Twilight Princess who allies with Link in Twilight Princess to reclaim her realm from usurpers.",
        "aliases": []
    },
    {
        "slug": "hyrule",
        "name": "Hyrule",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Kingdom at the heart of the Zelda series.",
        "description": "Hyrule is the kingdom where most Zelda adventures unfold, home to Hylians, temples, and the cycle of hero, princess, and demon king.",
        "aliases": []
    },
    {
        "slug": "kakariko-village",
        "name": "Kakariko Village",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Sheikah-associated mountain village.",
        "description": "Kakariko Village is a recurring settlement tied to the Sheikah, often near death mountain routes and royal history.",
        "aliases": []
    },
    {
        "slug": "gerudo-desert",
        "name": "Gerudo Desert",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Homeland of the Gerudo people.",
        "description": "The Gerudo Desert is the arid homeland of the Gerudo and the origin of Ganondorf in several eras.",
        "aliases": []
    },
    {
        "slug": "hylians",
        "name": "Hylians",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Pointed-eared people of Hyrule.",
        "description": "Hylians are the people of Hyrule most often associated with Link and Zelda, marked by pointed ears and royal lineage myths.",
        "aliases": []
    },
    {
        "slug": "zora",
        "name": "Zora",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Aquatic people of rivers and domains.",
        "description": "The Zora are an aquatic people living in river domains, allied with Hyrule in many eras including Breath of the Wild.",
        "aliases": []
    },
    {
        "slug": "goron",
        "name": "Goron",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Rocky mountain people who eat rocks.",
        "description": "Gorons are durable mountain people who mine and eat rocks, recurring allies around Death Mountain.",
        "aliases": []
    },
    {
        "slug": "koroks",
        "name": "Koroks",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Leafy forest spirits descended from Kokiri.",
        "description": "Koroks are forest spirits scattered across Hyrule in Breath of the Wild and Tears of the Kingdom, hiding puzzles for Link.",
        "aliases": []
    },
    {
        "slug": "sheikah",
        "name": "Sheikah",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Shadow folk sworn to the royal family.",
        "description": "The Sheikah are a technologically gifted people devoted to Hyrule's royal family, creators of ancient tech and guardians.",
        "aliases": []
    },
    {
        "slug": "master-sword",
        "name": "Master Sword",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Blade of Evil's Bane.",
        "description": "The Master Sword is the legendary Blade of Evil's Bane that only a worthy hero can wield against Ganon.",
        "aliases": []
    },
    {
        "slug": "triforce",
        "name": "Triforce",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Golden relic of Power, Wisdom, and Courage.",
        "description": "The Triforce is the golden relic left by the goddesses, split into Power, Wisdom, and Courage and sought across the series.",
        "aliases": []
    },
    {
        "slug": "ocarina-of-time-item",
        "name": "Ocarina of Time",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Sacred instrument that manipulates time.",
        "description": "The Ocarina of Time is a royal instrument that opens time travel and sacred songs central to its namesake game.",
        "aliases": []
    },
    {
        "slug": "hylian-shield",
        "name": "Hylian Shield",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Iconic blue shield of the hero.",
        "description": "The Hylian Shield is Link's durable crest-bearing shield, a staple of defense across many Zelda games.",
        "aliases": []
    },
    {
        "slug": "ocarina-of-time",
        "name": "The Legend of Zelda: Ocarina of Time",
        "type": "work",
        "evidence": "fiction",
        "short_description": "3D landmark of Link's childhood and adult quest.",
        "description": "Ocarina of Time follows young Link across time against Ganondorf, defining 3D Zelda with Navi, Epona, and the Master Sword.",
        "aliases": []
    },
    {
        "slug": "a-link-to-the-past",
        "name": "The Legend of Zelda: A Link to the Past",
        "type": "work",
        "evidence": "fiction",
        "short_description": "SNES classic of Light and Dark Worlds.",
        "description": "A Link to the Past sends Link between Light and Dark Worlds to free Zelda and stop Ganon's return.",
        "aliases": []
    },
    {
        "slug": "breath-of-the-wild",
        "name": "The Legend of Zelda: Breath of the Wild",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Open-air rebirth of Hyrule exploration.",
        "description": "Breath of the Wild casts Link across a vast ruined Hyrule, freeing Divine Beasts and confronting Calamity Ganon.",
        "aliases": []
    },
    {
        "slug": "tears-of-the-kingdom",
        "name": "The Legend of Zelda: Tears of the Kingdom",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Sequel expanding skies, depths, and building.",
        "description": "Tears of the Kingdom continues Breath of the Wild's Hyrule with sky islands, depths, zonai tech, and Ganondorf's return.",
        "aliases": []
    },
    {
        "slug": "majoras-mask",
        "name": "The Legend of Zelda: Majora's Mask",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Three-day cycle adventure in Termina.",
        "description": "Majora's Mask follows Link in Termina through a three-day loop to stop the moon and Majora's mask.",
        "aliases": []
    },
    {
        "slug": "twilight-princess",
        "name": "The Legend of Zelda: Twilight Princess",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Twilight-shrouded quest with Midna.",
        "description": "Twilight Princess pairs Link with Midna against Zant and Ganondorf as twilight covers Hyrule.",
        "aliases": []
    },
    {
        "slug": "the-legend-of-zelda-figures",
        "name": "The Legend of Zelda figures",
        "type": "topic",
        "short_description": "People and named forces central to The Legend of Zelda.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring The Legend of Zelda."
    },
    {
        "slug": "the-legend-of-zelda-places",
        "name": "The Legend of Zelda places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Legend of Zelda.",
        "description": "Places, regions, and built sites that give The Legend of Zelda its map — where events and figures concentrate."
    },
    {
        "slug": "the-legend-of-zelda-events",
        "name": "The Legend of Zelda events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Legend of Zelda.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Legend of Zelda timeline."
    },
    {
        "slug": "the-legend-of-zelda-objects",
        "name": "The Legend of Zelda objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Legend of Zelda.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Legend of Zelda."
    },
    {
        "slug": "the-legend-of-zelda-factions",
        "name": "The Legend of Zelda factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Legend of Zelda.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Legend of Zelda."
    },
    {
        "slug": "the-legend-of-zelda-concepts",
        "name": "The Legend of Zelda concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Legend of Zelda.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Legend of Zelda readable as a lore graph."
    },
    {
        "slug": "the-legend-of-zelda-eras",
        "name": "The Legend of Zelda eras",
        "type": "event",
        "short_description": "Periodization for The Legend of Zelda.",
        "description": "Named eras and phases that help readers track how The Legend of Zelda changes across time."
    },
    {
        "slug": "the-legend-of-zelda-works",
        "name": "The Legend of Zelda works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Legend of Zelda.",
        "description": "Primary works and adaptations through which most audiences encounter The Legend of Zelda."
    },
    {
        "slug": "the-legend-of-zelda-symbols",
        "name": "The Legend of Zelda symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Legend of Zelda.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Legend of Zelda."
    }
];

const relationships = [
    [
        "shigeru-miyamoto",
        "the-legend-of-zelda",
        "created",
        "Miyamoto created The Legend of Zelda.",
        0.99,
        0.99
    ],
    [
        "takashi-tezuka",
        "the-legend-of-zelda",
        "created",
        "Tezuka co-created The Legend of Zelda.",
        0.98,
        0.96
    ],
    [
        "nintendo",
        "the-legend-of-zelda",
        "produced",
        "Nintendo develops and publishes Zelda.",
        0.99,
        0.98
    ],
    [
        "ocarina-of-time",
        "the-legend-of-zelda",
        "part_of",
        "Ocarina of Time is a landmark Zelda game.",
        0.99,
        0.97
    ],
    [
        "a-link-to-the-past",
        "the-legend-of-zelda",
        "part_of",
        "A Link to the Past is a classic Zelda game.",
        0.98,
        0.95
    ],
    [
        "breath-of-the-wild",
        "the-legend-of-zelda",
        "part_of",
        "Breath of the Wild is a modern Zelda game.",
        0.99,
        0.97
    ],
    [
        "tears-of-the-kingdom",
        "the-legend-of-zelda",
        "part_of",
        "Tears of the Kingdom continues the Wild era.",
        0.99,
        0.97
    ],
    [
        "majoras-mask",
        "the-legend-of-zelda",
        "part_of",
        "Majora's Mask is a Zelda adventure in Termina.",
        0.98,
        0.95
    ],
    [
        "twilight-princess",
        "the-legend-of-zelda",
        "part_of",
        "Twilight Princess is a Zelda game.",
        0.98,
        0.95
    ],
    [
        "tears-of-the-kingdom",
        "breath-of-the-wild",
        "connected_to",
        "Tears of the Kingdom sequels Breath of the Wild.",
        0.98,
        0.96
    ],
    [
        "link",
        "master-sword",
        "uses",
        "Link wields the Master Sword.",
        0.99,
        0.97
    ],
    [
        "link",
        "hylian-shield",
        "uses",
        "Link carries the Hylian Shield.",
        0.97,
        0.94
    ],
    [
        "link",
        "hyrule",
        "located_in",
        "Link's quests center on Hyrule.",
        0.98,
        0.95
    ],
    [
        "zelda",
        "hyrule",
        "leads",
        "Zelda is princess of Hyrule.",
        0.98,
        0.95
    ],
    [
        "zelda",
        "triforce",
        "uses",
        "Zelda often bears the Triforce of Wisdom.",
        0.97,
        0.94
    ],
    [
        "ganondorf",
        "ganon",
        "connected_to",
        "Ganondorf becomes Ganon.",
        0.99,
        0.98
    ],
    [
        "ganondorf",
        "triforce",
        "uses",
        "Ganondorf seeks the Triforce of Power.",
        0.98,
        0.96
    ],
    [
        "ganon",
        "link",
        "opposed_by",
        "Link opposes Ganon across eras.",
        0.99,
        0.97
    ],
    [
        "navi",
        "link",
        "supports",
        "Navi guides Link in Ocarina of Time.",
        0.97,
        0.94
    ],
    [
        "sheik",
        "zelda",
        "connected_to",
        "Sheik is Zelda's disguise.",
        0.98,
        0.96
    ],
    [
        "impa",
        "zelda",
        "supports",
        "Impa protects Zelda.",
        0.96,
        0.92
    ],
    [
        "epona",
        "link",
        "supports",
        "Epona is Link's horse.",
        0.97,
        0.93
    ],
    [
        "midna",
        "link",
        "supports",
        "Midna allies with Link in Twilight Princess.",
        0.97,
        0.93
    ],
    [
        "zora",
        "hyrule",
        "located_in",
        "Zora domains lie within Hyrule.",
        0.96,
        0.92
    ],
    [
        "goron",
        "hyrule",
        "located_in",
        "Gorons live in Hyrule's mountains.",
        0.96,
        0.92
    ],
    [
        "koroks",
        "hyrule",
        "located_in",
        "Koroks hide across Hyrule.",
        0.96,
        0.92
    ],
    [
        "sheikah",
        "hyrule",
        "located_in",
        "The Sheikah serve Hyrule's crown.",
        0.96,
        0.92
    ],
    [
        "gerudo-desert",
        "hyrule",
        "located_in",
        "The Gerudo Desert is part of Hyrule.",
        0.97,
        0.94
    ],
    [
        "kakariko-village",
        "hyrule",
        "located_in",
        "Kakariko Village is in Hyrule.",
        0.97,
        0.94
    ],
    [
        "ocarina-of-time-item",
        "ocarina-of-time",
        "connected_to",
        "The Ocarina is central to Ocarina of Time.",
        0.98,
        0.95
    ],
    [
        "master-sword",
        "triforce",
        "connected_to",
        "The Master Sword is bound to sealing evil tied to the Triforce cycle.",
        0.95,
        0.9
    ],
    [
        "the-legend-of-zelda",
        "the-legend-of-zelda-figures",
        "contains",
        "The Legend of Zelda figures is a primary trailhead under The Legend of Zelda.",
        0.88,
        0.82
    ],
    [
        "the-legend-of-zelda",
        "the-legend-of-zelda-places",
        "contains",
        "The Legend of Zelda places is a primary trailhead under The Legend of Zelda.",
        0.88,
        0.82
    ],
    [
        "the-legend-of-zelda",
        "the-legend-of-zelda-events",
        "contains",
        "The Legend of Zelda events is a primary trailhead under The Legend of Zelda.",
        0.88,
        0.82
    ],
    [
        "the-legend-of-zelda",
        "the-legend-of-zelda-objects",
        "contains",
        "The Legend of Zelda objects & artifacts is a primary trailhead under The Legend of Zelda.",
        0.88,
        0.82
    ],
    [
        "the-legend-of-zelda",
        "the-legend-of-zelda-factions",
        "contains",
        "The Legend of Zelda factions & groups is a primary trailhead under The Legend of Zelda.",
        0.88,
        0.82
    ],
    [
        "the-legend-of-zelda",
        "the-legend-of-zelda-concepts",
        "contains",
        "The Legend of Zelda concepts is a primary trailhead under The Legend of Zelda.",
        0.88,
        0.82
    ],
    [
        "the-legend-of-zelda",
        "the-legend-of-zelda-eras",
        "contains",
        "The Legend of Zelda eras is a primary trailhead under The Legend of Zelda.",
        0.88,
        0.82
    ],
    [
        "the-legend-of-zelda",
        "the-legend-of-zelda-works",
        "contains",
        "The Legend of Zelda works & media is a primary trailhead under The Legend of Zelda.",
        0.88,
        0.82
    ],
    [
        "the-legend-of-zelda",
        "the-legend-of-zelda-symbols",
        "contains",
        "The Legend of Zelda symbols is a primary trailhead under The Legend of Zelda.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
