/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mario",
        "name": "Mario",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Nintendo's Super Mario franchise of platformers, karts, and the Mushroom Kingdom.",
        "description": "Mario is Nintendo's flagship multimedia franchise starring the plumber Mario, his brother Luigi, Princess Peach, and rivals like Bowser across platformers, Mario Kart, Mario Odyssey, and more.",
        "aliases": []
    },
    {
        "slug": "nintendo",
        "name": "Nintendo",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Japanese company that created and publishes Mario.",
        "description": "Nintendo created Mario and continues to develop and publish Super Mario games, spin-offs, and related media.",
        "aliases": []
    },
    {
        "slug": "shigeru-miyamoto",
        "name": "Shigeru Miyamoto",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of Mario and many Nintendo classics.",
        "description": "Shigeru Miyamoto created Mario, Donkey Kong, and The Legend of Zelda, shaping Nintendo's character-driven game design.",
        "aliases": []
    },
    {
        "slug": "super-mario-bros",
        "name": "Super Mario Bros.",
        "type": "work",
        "evidence": "fiction",
        "short_description": "1985 NES classic that defined the 2D Mario platformer.",
        "description": "Super Mario Bros. established side-scrolling levels, power-ups, Bowser's castles, and Mario's quest to rescue Princess Peach.",
        "aliases": []
    },
    {
        "slug": "mario-kart",
        "name": "Mario Kart",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Kart-racing series with items, tracks, and the Mario cast.",
        "description": "Mario Kart is Nintendo's racing spin-off where Mario, Luigi, Peach, Bowser, and others compete with bananas, shells, and power-ups.",
        "aliases": []
    },
    {
        "slug": "mario-odyssey",
        "name": "Super Mario Odyssey",
        "type": "work",
        "evidence": "fiction",
        "short_description": "3D adventure with Cappy, kingdoms, and Power Moons.",
        "description": "Super Mario Odyssey sends Mario across open kingdoms with Cappy, capturing foes and collecting Power Moons to stop Bowser's wedding plans.",
        "aliases": []
    },
    {
        "slug": "donkey-kong-arcade",
        "name": "Donkey Kong (arcade)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "1981 arcade game that introduced Jumpman, later Mario.",
        "description": "Donkey Kong introduced Jumpman — soon renamed Mario — climbing girders to rescue Pauline from Donkey Kong.",
        "aliases": []
    },
    {
        "slug": "mushroom-kingdom",
        "name": "Mushroom Kingdom",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Peach's realm of Toads, pipes, and Mario adventures.",
        "description": "The Mushroom Kingdom is Princess Peach's domain, home to Toads and the setting for many Super Mario Bros. and related games.",
        "aliases": []
    },
    {
        "slug": "peachs-castle",
        "name": "Peach's Castle",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Royal castle and hub of the Mushroom Kingdom.",
        "description": "Peach's Castle is the Mushroom Kingdom's landmark castle, often a hub world and frequent target of Bowser's kidnappings.",
        "aliases": []
    },
    {
        "slug": "bowsers-castle",
        "name": "Bowser's Castle",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Fire-and-lava fortress of the Koopa King.",
        "description": "Bowser's Castle is the Koopa King's fortress of lava, traps, and final confrontations across Mario games.",
        "aliases": []
    },
    {
        "slug": "new-donk-city",
        "name": "New Donk City",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Human city kingdom featured in Mario Odyssey.",
        "description": "New Donk City is a bustling metropolitan kingdom in Super Mario Odyssey, echoing classic Donkey Kong with Pauline as mayor.",
        "aliases": []
    },
    {
        "slug": "koopa-troop",
        "name": "Koopa Troop",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Bowser's army of Koopas, Goombas, and minions.",
        "description": "The Koopa Troop is Bowser's force of Koopa Troopas, Goombas, and other minions opposing Mario and the Mushroom Kingdom.",
        "aliases": []
    },
    {
        "slug": "power-stars",
        "name": "Power Stars",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Star collectibles that open paths in 3D Mario games.",
        "description": "Power Stars are crystalline collectibles in games like Super Mario 64 that unlock new courses and progress Mario's adventure.",
        "aliases": []
    },
    {
        "slug": "super-mushroom",
        "name": "Super Mushroom",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Classic power-up that makes Mario grow.",
        "description": "The Super Mushroom enlarges Mario into Super Mario, letting him take an extra hit and smash tougher blocks.",
        "aliases": []
    },
    {
        "slug": "fire-flower",
        "name": "Fire Flower",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Power-up that grants fireball attacks.",
        "description": "The Fire Flower turns Mario into Fire Mario, allowing him to throw fireballs at enemies.",
        "aliases": []
    },
    {
        "slug": "power-moons",
        "name": "Power Moons",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Moon-shaped collectibles in Mario Odyssey.",
        "description": "Power Moons fuel the Odyssey airship and mark objectives across kingdoms in Super Mario Odyssey.",
        "aliases": []
    },
    {
        "slug": "mario-character",
        "name": "Mario",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Nintendo's heroic plumber and franchise mascot.",
        "description": "Mario is an Italian plumber from the Mushroom Kingdom who leaps through levels, Kart races, and Odyssey kingdoms to stop Bowser and save Princess Peach.",
        "aliases": []
    },
    {
        "slug": "luigi",
        "name": "Luigi",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mario's taller, timid brother.",
        "description": "Luigi is Mario's brother, often the nervous co-hero in platformers, Luigi's Mansion, and Mario Kart.",
        "aliases": []
    },
    {
        "slug": "princess-peach",
        "name": "Princess Peach",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ruler of the Mushroom Kingdom.",
        "description": "Princess Peach rules the Mushroom Kingdom from her castle and is frequently kidnapped by Bowser, while also appearing as a playable ally.",
        "aliases": []
    },
    {
        "slug": "bowser",
        "name": "Bowser",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Koopa King and Mario's arch-rival.",
        "description": "Bowser is the King of the Koopas who schemes to conquer the Mushroom Kingdom and marry or capture Princess Peach.",
        "aliases": []
    },
    {
        "slug": "yoshi",
        "name": "Yoshi",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dinosaur companion who eats enemies and flutters.",
        "description": "Yoshi is a friendly dinosaur who carries Mario, eats foes, and stars in Yoshi's Island and other spin-offs.",
        "aliases": []
    },
    {
        "slug": "toad",
        "name": "Toad",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mushroom retainer of Peach's court.",
        "description": "Toad is a loyal Mushroom Kingdom attendant who aids Mario with tips, items, and occasional playable adventures.",
        "aliases": []
    },
    {
        "slug": "princess-daisy",
        "name": "Princess Daisy",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Princess of Sarasaland and Peach's friend.",
        "description": "Princess Daisy rules Sarasaland, debuted in Super Mario Land, and appears as a spirited playable character in sports and Kart games.",
        "aliases": []
    },
    {
        "slug": "wario",
        "name": "Wario",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Greedy anti-hero counterpart to Mario.",
        "description": "Wario is Mario's greedy doppelgänger who seeks treasure in Wario Land and WarioWare while rivaling Mario in Kart and sports.",
        "aliases": []
    },
    {
        "slug": "waluigi",
        "name": "Waluigi",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lanky rival counterpart to Luigi.",
        "description": "Waluigi is Luigi's tall, scheming rival who mainly appears in Mario Kart, tennis, and party games alongside Wario.",
        "aliases": []
    },
    {
        "slug": "donkey-kong",
        "name": "Donkey Kong",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ape who debuted opposing Jumpman and later allied in spin-offs.",
        "description": "Donkey Kong began as Mario's arcade foe and later headlines his own games while racing and adventuring with the Mario cast.",
        "aliases": []
    },
    {
        "slug": "rosalina",
        "name": "Rosalina",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Guardian of the Comet Observatory and Lumas.",
        "description": "Rosalina watches over the cosmos from the Comet Observatory with her Lumas and became a fan-favorite playable character in Mario Kart and smash titles.",
        "aliases": []
    },
    {
        "slug": "princess-pauline",
        "name": "Pauline",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mayor of New Donk City; original damsel from Donkey Kong.",
        "description": "Pauline was the woman Jumpman rescued in Donkey Kong and returns as mayor and singer of New Donk City in Super Mario Odyssey.",
        "aliases": []
    },
    {
        "slug": "bowser-jr",
        "name": "Bowser Jr.",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bowser's mischievous son.",
        "description": "Bowser Jr. helps his father's schemes, pilots the Junior Clown Car, and challenges Mario in games from Sunshine onward.",
        "aliases": []
    },
    {
        "slug": "toadette",
        "name": "Toadette",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Pink-spotted Toad and frequent co-star.",
        "description": "Toadette is a pink-spotted Toad who appears in spin-offs and as a playable character, sometimes partnering with Toad.",
        "aliases": []
    },
    {
        "slug": "mario-figures",
        "name": "Mario figures",
        "type": "topic",
        "short_description": "People and named forces central to Mario.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Mario."
    },
    {
        "slug": "mario-places",
        "name": "Mario places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mario.",
        "description": "Places, regions, and built sites that give Mario its map — where events and figures concentrate."
    },
    {
        "slug": "mario-events",
        "name": "Mario events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mario.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mario timeline."
    },
    {
        "slug": "mario-objects",
        "name": "Mario objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mario.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mario."
    },
    {
        "slug": "mario-factions",
        "name": "Mario factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mario.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mario."
    },
    {
        "slug": "mario-concepts",
        "name": "Mario concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mario.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mario readable as a lore graph."
    },
    {
        "slug": "mario-eras",
        "name": "Mario eras",
        "type": "event",
        "short_description": "Periodization for Mario.",
        "description": "Named eras and phases that help readers track how Mario changes across time."
    },
    {
        "slug": "mario-works",
        "name": "Mario works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mario.",
        "description": "Primary works and adaptations through which most audiences encounter Mario."
    },
    {
        "slug": "mario-symbols",
        "name": "Mario symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mario.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mario."
    },
    {
        "slug": "mario-controversies",
        "name": "Mario controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mario.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mario argumentative."
    }
];

const relationships = [
    [
        "nintendo",
        "mario",
        "produced",
        "Nintendo creates and publishes the Mario franchise.",
        0.99,
        0.99
    ],
    [
        "shigeru-miyamoto",
        "mario",
        "created",
        "Shigeru Miyamoto created Mario.",
        0.99,
        0.99
    ],
    [
        "shigeru-miyamoto",
        "donkey-kong-arcade",
        "created",
        "Miyamoto created Donkey Kong.",
        0.98,
        0.96
    ],
    [
        "nintendo",
        "super-mario-bros",
        "produced",
        "Nintendo published Super Mario Bros.",
        0.99,
        0.97
    ],
    [
        "super-mario-bros",
        "mario",
        "part_of",
        "Super Mario Bros. is a cornerstone Mario game.",
        0.99,
        0.98
    ],
    [
        "mario-kart",
        "mario",
        "part_of",
        "Mario Kart is a major Mario spin-off series.",
        0.98,
        0.96
    ],
    [
        "mario-odyssey",
        "mario",
        "part_of",
        "Mario Odyssey is a flagship 3D Mario adventure.",
        0.98,
        0.96
    ],
    [
        "donkey-kong-arcade",
        "mario",
        "part_of",
        "Donkey Kong introduced the character who became Mario.",
        0.97,
        0.94
    ],
    [
        "peachs-castle",
        "mushroom-kingdom",
        "located_in",
        "Peach's Castle stands in the Mushroom Kingdom.",
        0.99,
        0.97
    ],
    [
        "bowsers-castle",
        "koopa-troop",
        "located_in",
        "Bowser's Castle is the Koopa Troop's stronghold.",
        0.96,
        0.92
    ],
    [
        "new-donk-city",
        "mario-odyssey",
        "connected_to",
        "New Donk City is a featured kingdom in Odyssey.",
        0.97,
        0.94
    ],
    [
        "princess-peach",
        "mushroom-kingdom",
        "leads",
        "Princess Peach rules the Mushroom Kingdom.",
        0.99,
        0.97
    ],
    [
        "bowser",
        "koopa-troop",
        "leads",
        "Bowser leads the Koopa Troop.",
        0.99,
        0.98
    ],
    [
        "mario-character",
        "princess-peach",
        "supports",
        "Mario repeatedly rescues and aids Princess Peach.",
        0.98,
        0.96
    ],
    [
        "mario-character",
        "luigi",
        "connected_to",
        "Mario and Luigi are brothers and partners.",
        0.99,
        0.98
    ],
    [
        "mario-character",
        "bowser",
        "opposed_by",
        "Mario and Bowser are arch-rivals.",
        0.99,
        0.98
    ],
    [
        "bowser",
        "princess-peach",
        "opposed_by",
        "Bowser targets Princess Peach and her kingdom.",
        0.98,
        0.96
    ],
    [
        "mario-character",
        "yoshi",
        "supports",
        "Yoshi often carries and aids Mario.",
        0.96,
        0.93
    ],
    [
        "toad",
        "princess-peach",
        "supports",
        "Toad serves Princess Peach and the kingdom.",
        0.96,
        0.92
    ],
    [
        "bowser-jr",
        "bowser",
        "connected_to",
        "Bowser Jr. is Bowser's son and ally.",
        0.98,
        0.95
    ],
    [
        "wario",
        "mario-character",
        "opposed_by",
        "Wario rivals Mario for glory and gold.",
        0.96,
        0.92
    ],
    [
        "waluigi",
        "luigi",
        "opposed_by",
        "Waluigi is Luigi's sporting rival.",
        0.95,
        0.9
    ],
    [
        "donkey-kong",
        "mario-character",
        "connected_to",
        "Donkey Kong's history is tied to Mario since the arcade.",
        0.97,
        0.94
    ],
    [
        "rosalina",
        "power-stars",
        "connected_to",
        "Rosalina's cosmos is linked to stars and Lumas.",
        0.94,
        0.88
    ],
    [
        "princess-pauline",
        "new-donk-city",
        "leads",
        "Pauline is mayor of New Donk City.",
        0.97,
        0.94
    ],
    [
        "princess-pauline",
        "donkey-kong-arcade",
        "connected_to",
        "Pauline debuted as the damsel in Donkey Kong.",
        0.97,
        0.93
    ],
    [
        "super-mushroom",
        "mario-character",
        "uses",
        "Mario uses Super Mushrooms to grow stronger.",
        0.97,
        0.94
    ],
    [
        "fire-flower",
        "mario-character",
        "uses",
        "Mario uses Fire Flowers to throw fireballs.",
        0.97,
        0.94
    ],
    [
        "power-stars",
        "mario-character",
        "uses",
        "Mario collects Power Stars to progress.",
        0.96,
        0.92
    ],
    [
        "power-moons",
        "mario-odyssey",
        "connected_to",
        "Power Moons drive progress in Odyssey.",
        0.98,
        0.95
    ],
    [
        "mario",
        "mario-figures",
        "contains",
        "Mario figures is a primary trailhead under Mario.",
        0.88,
        0.82
    ],
    [
        "mario",
        "mario-places",
        "contains",
        "Mario places is a primary trailhead under Mario.",
        0.88,
        0.82
    ],
    [
        "mario",
        "mario-events",
        "contains",
        "Mario events is a primary trailhead under Mario.",
        0.88,
        0.82
    ],
    [
        "mario",
        "mario-objects",
        "contains",
        "Mario objects & artifacts is a primary trailhead under Mario.",
        0.88,
        0.82
    ],
    [
        "mario",
        "mario-factions",
        "contains",
        "Mario factions & groups is a primary trailhead under Mario.",
        0.88,
        0.82
    ],
    [
        "mario",
        "mario-concepts",
        "contains",
        "Mario concepts is a primary trailhead under Mario.",
        0.88,
        0.82
    ],
    [
        "mario",
        "mario-eras",
        "contains",
        "Mario eras is a primary trailhead under Mario.",
        0.88,
        0.82
    ],
    [
        "mario",
        "mario-works",
        "contains",
        "Mario works & media is a primary trailhead under Mario.",
        0.88,
        0.82
    ],
    [
        "mario",
        "mario-symbols",
        "contains",
        "Mario symbols is a primary trailhead under Mario.",
        0.88,
        0.82
    ],
    [
        "mario",
        "mario-controversies",
        "contains",
        "Mario controversies is a primary trailhead under Mario.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
