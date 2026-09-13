/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "game-of-thrones",
        "name": "Game of Thrones",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "HBO fantasy saga of Westeros, adapted from A Song of Ice and Fire.",
        "description": "Game of Thrones is the HBO television adaptation of George R.R. Martin's A Song of Ice and Fire, charting the struggle for the Iron Throne, the return of dragons, and the threat beyond the Wall.",
        "aliases": []
    },
    {
        "slug": "a-song-of-ice-and-fire",
        "name": "A Song of Ice and Fire",
        "type": "work",
        "evidence": "fiction",
        "short_description": "George R.R. Martin's epic fantasy novel series.",
        "description": "A Song of Ice and Fire is George R.R. Martin's novel cycle that introduces Westeros, Essos, the great houses, and the looming conflict of ice and fire.",
        "aliases": []
    },
    {
        "slug": "george-rr-martin",
        "name": "George R.R. Martin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Author of A Song of Ice and Fire.",
        "description": "George R.R. Martin created A Song of Ice and Fire and served as a producer and creative voice on the Game of Thrones television series.",
        "aliases": []
    },
    {
        "slug": "hbo",
        "name": "HBO",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Network that produced Game of Thrones.",
        "description": "HBO produced and aired Game of Thrones, turning Martin's novels into a landmark fantasy television series.",
        "aliases": []
    },
    {
        "slug": "westeros",
        "name": "Westeros",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Continent of the Seven Kingdoms and the Wall.",
        "description": "Westeros is the western continent of the known world, home to the Seven Kingdoms, the Iron Throne, and the Wall that guards the realm.",
        "aliases": []
    },
    {
        "slug": "essos",
        "name": "Essos",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Vast eastern continent of Free Cities and Dothraki seas.",
        "description": "Essos stretches east of Westeros and holds Free Cities, Slaver's Bay, the Dothraki Sea, and Daenerys Targaryen's early rise.",
        "aliases": []
    },
    {
        "slug": "kings-landing",
        "name": "King's Landing",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Capital of the Seven Kingdoms and seat of the Iron Throne.",
        "description": "King's Landing is the capital city of the Seven Kingdoms, center of court intrigue and the Iron Throne's power.",
        "aliases": []
    },
    {
        "slug": "winterfell",
        "name": "Winterfell",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Ancestral castle of House Stark in the North.",
        "description": "Winterfell is the ancient seat of House Stark, heart of the North and home to Ned Stark's children.",
        "aliases": []
    },
    {
        "slug": "the-wall",
        "name": "The Wall",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Ice fortification manned by the Night's Watch.",
        "description": "The Wall is a colossal ice barrier in the far North, defended by the Night's Watch against wildlings and darker threats.",
        "aliases": []
    },
    {
        "slug": "dragonstone",
        "name": "Dragonstone",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Targaryen island fortress and ancestral outpost.",
        "description": "Dragonstone is the volcanic island castle of House Targaryen, later claimed by Stannis Baratheon and again by Daenerys.",
        "aliases": []
    },
    {
        "slug": "iron-throne",
        "name": "Iron Throne",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Seat of the ruler of the Seven Kingdoms.",
        "description": "The Iron Throne is forged from conquered swords and symbolizes rule over the Seven Kingdoms of Westeros.",
        "aliases": []
    },
    {
        "slug": "house-stark",
        "name": "House Stark",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Wardens of the North; direwolf sigil.",
        "description": "House Stark of Winterfell rules the North with the words Winter is Coming, bound to honor, the old gods, and direwolves.",
        "aliases": []
    },
    {
        "slug": "house-lannister",
        "name": "House Lannister",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Lords of Casterly Rock; lion sigil.",
        "description": "House Lannister of Casterly Rock is the wealthy western house whose words Hear Me Roar mask the motto A Lannister always pays his debts.",
        "aliases": []
    },
    {
        "slug": "house-targaryen",
        "name": "House Targaryen",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Dragonlords who once ruled Westeros.",
        "description": "House Targaryen conquered Westeros with dragons, ruled from the Iron Throne for centuries, and seeks restoration through Daenerys and other heirs.",
        "aliases": []
    },
    {
        "slug": "nights-watch",
        "name": "Night's Watch",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Sworn brotherhood defending the Wall.",
        "description": "The Night's Watch takes the black to guard the Wall and the realms of men from threats beyond, including wildlings and White Walkers.",
        "aliases": []
    },
    {
        "slug": "white-walkers",
        "name": "White Walkers",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Icy undead threat led by the Night King (show).",
        "description": "White Walkers — the Others of the books — raise the dead and march from the Lands of Always Winter to end the living.",
        "aliases": []
    },
    {
        "slug": "jon-snow",
        "name": "Jon Snow",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ned Stark's supposed bastard; later Lord Commander and claimant.",
        "description": "Jon Snow is raised at Winterfell as Ned Stark's bastard, joins the Night's Watch, and becomes central to the war against the dead and the game of thrones.",
        "aliases": []
    },
    {
        "slug": "daenerys-targaryen",
        "name": "Daenerys Targaryen",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mother of Dragons and Targaryen claimant.",
        "description": "Daenerys Targaryen survives exile in Essos, hatches three dragons, and sails to reclaim the Iron Throne for House Targaryen.",
        "aliases": []
    },
    {
        "slug": "tyrion-lannister",
        "name": "Tyrion Lannister",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Witty youngest Lannister; Hand to kings and queens.",
        "description": "Tyrion Lannister uses intellect and political skill to survive court hatred, serve as Hand, and navigate the wars of Westeros.",
        "aliases": []
    },
    {
        "slug": "arya-stark",
        "name": "Arya Stark",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Youngest Stark daughter turned assassin.",
        "description": "Arya Stark flees King's Landing after her father's fall, trains as a killer, and pursues a list of names across Westeros.",
        "aliases": []
    },
    {
        "slug": "sansa-stark",
        "name": "Sansa Stark",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Elder Stark daughter shaped by court and the North.",
        "description": "Sansa Stark endures captivity and political marriages before reclaiming power in the North as a hardened player of the game.",
        "aliases": []
    },
    {
        "slug": "cersei-lannister",
        "name": "Cersei Lannister",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Queen and later ruler clinging to the Iron Throne.",
        "description": "Cersei Lannister schemes to protect her children and power, ruling from King's Landing as a fierce Lannister queen.",
        "aliases": []
    },
    {
        "slug": "jaime-lannister",
        "name": "Jaime Lannister",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Kingslayer and twin brother to Cersei.",
        "description": "Jaime Lannister is the Kingsguard knight who killed Aerys Targaryen, bound to Cersei and slowly changed by war and captivity.",
        "aliases": []
    },
    {
        "slug": "eddard-stark",
        "name": "Eddard Stark",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lord of Winterfell and Hand of the King.",
        "description": "Eddard Ned Stark is the honorable Warden of the North whose investigation of court secrets sparks the War of the Five Kings.",
        "aliases": []
    },
    {
        "slug": "night-king",
        "name": "Night King",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Leader of the White Walkers in the television series.",
        "description": "The Night King commands the White Walkers and the army of the dead, embodying the existential threat from beyond the Wall.",
        "aliases": []
    },
    {
        "slug": "bran-stark",
        "name": "Bran Stark",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Stark son who becomes the Three-Eyed Raven.",
        "description": "Bran Stark is crippled early in the saga and journeys north to become the Three-Eyed Raven, keeper of memory and greenseeing.",
        "aliases": []
    },
    {
        "slug": "theon-greyjoy",
        "name": "Theon Greyjoy",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ward of Winterfell torn between Greyjoy and Stark.",
        "description": "Theon Greyjoy grows up at Winterfell as Ned Stark's ward, betrays the Starks, and endures captivity before seeking redemption.",
        "aliases": []
    },
    {
        "slug": "samwell-tarly",
        "name": "Samwell Tarly",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Night's Watch steward and Jon Snow's friend.",
        "description": "Samwell Tarly joins the Night's Watch, becomes Jon Snow's closest ally, and uncovers lore vital to fighting the dead.",
        "aliases": []
    },
    {
        "slug": "brienne-of-tarth",
        "name": "Brienne of Tarth",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sworn warrior loyal to the Starks' cause.",
        "description": "Brienne of Tarth is a formidable knight who swears to protect Stark daughters and uphold honor in a ruthless realm.",
        "aliases": []
    },
    {
        "slug": "petyr-baelish",
        "name": "Petyr Baelish",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Littlefinger; master of intrigue.",
        "description": "Petyr Baelish rises through the court by chaos and lies, manipulating houses until the Stark sisters end his game.",
        "aliases": []
    },
    {
        "slug": "game-of-thrones-figures",
        "name": "Game of Thrones figures",
        "type": "topic",
        "short_description": "People and named forces central to Game of Thrones.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Game of Thrones."
    },
    {
        "slug": "game-of-thrones-places",
        "name": "Game of Thrones places",
        "type": "place",
        "short_description": "Locations and geographies that frame Game of Thrones.",
        "description": "Places, regions, and built sites that give Game of Thrones its map — where events and figures concentrate."
    },
    {
        "slug": "game-of-thrones-events",
        "name": "Game of Thrones events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Game of Thrones.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Game of Thrones timeline."
    },
    {
        "slug": "game-of-thrones-objects",
        "name": "Game of Thrones objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Game of Thrones.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Game of Thrones."
    },
    {
        "slug": "game-of-thrones-factions",
        "name": "Game of Thrones factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Game of Thrones.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Game of Thrones."
    },
    {
        "slug": "game-of-thrones-concepts",
        "name": "Game of Thrones concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Game of Thrones.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Game of Thrones readable as a lore graph."
    },
    {
        "slug": "game-of-thrones-eras",
        "name": "Game of Thrones eras",
        "type": "event",
        "short_description": "Periodization for Game of Thrones.",
        "description": "Named eras and phases that help readers track how Game of Thrones changes across time."
    },
    {
        "slug": "game-of-thrones-works",
        "name": "Game of Thrones works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Game of Thrones.",
        "description": "Primary works and adaptations through which most audiences encounter Game of Thrones."
    },
    {
        "slug": "game-of-thrones-symbols",
        "name": "Game of Thrones symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Game of Thrones.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Game of Thrones."
    },
    {
        "slug": "game-of-thrones-controversies",
        "name": "Game of Thrones controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Game of Thrones.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Game of Thrones argumentative."
    }
];

const relationships = [
    [
        "george-rr-martin",
        "a-song-of-ice-and-fire",
        "created",
        "George R.R. Martin wrote A Song of Ice and Fire.",
        0.99,
        0.99
    ],
    [
        "george-rr-martin",
        "game-of-thrones",
        "created",
        "Martin created the world adapted as Game of Thrones.",
        0.98,
        0.97
    ],
    [
        "a-song-of-ice-and-fire",
        "game-of-thrones",
        "adapted_into",
        "The novels were adapted into Game of Thrones.",
        0.99,
        0.98
    ],
    [
        "hbo",
        "game-of-thrones",
        "produced",
        "HBO produced Game of Thrones.",
        0.99,
        0.98
    ],
    [
        "westeros",
        "game-of-thrones",
        "located_in",
        "Westeros is the primary setting of Game of Thrones.",
        0.99,
        0.97
    ],
    [
        "essos",
        "game-of-thrones",
        "located_in",
        "Essos is a major setting alongside Westeros.",
        0.97,
        0.94
    ],
    [
        "kings-landing",
        "westeros",
        "located_in",
        "King's Landing is in Westeros.",
        0.99,
        0.97
    ],
    [
        "winterfell",
        "westeros",
        "located_in",
        "Winterfell is in the North of Westeros.",
        0.99,
        0.97
    ],
    [
        "the-wall",
        "westeros",
        "located_in",
        "The Wall stands at the northern edge of Westeros.",
        0.99,
        0.97
    ],
    [
        "dragonstone",
        "westeros",
        "located_in",
        "Dragonstone lies off Westeros's coast.",
        0.98,
        0.95
    ],
    [
        "iron-throne",
        "kings-landing",
        "located_in",
        "The Iron Throne sits in King's Landing.",
        0.99,
        0.97
    ],
    [
        "house-stark",
        "winterfell",
        "located_in",
        "House Stark rules from Winterfell.",
        0.99,
        0.98
    ],
    [
        "house-lannister",
        "westeros",
        "located_in",
        "House Lannister is a great house of Westeros.",
        0.97,
        0.94
    ],
    [
        "house-targaryen",
        "dragonstone",
        "connected_to",
        "Dragonstone is the Targaryen ancestral seat.",
        0.97,
        0.94
    ],
    [
        "nights-watch",
        "the-wall",
        "located_in",
        "The Night's Watch defends the Wall.",
        0.99,
        0.98
    ],
    [
        "white-walkers",
        "the-wall",
        "opposed_by",
        "White Walkers threaten the realms south of the Wall.",
        0.98,
        0.96
    ],
    [
        "eddard-stark",
        "house-stark",
        "leads",
        "Ned Stark is lord of House Stark.",
        0.98,
        0.96
    ],
    [
        "jon-snow",
        "nights-watch",
        "member_of",
        "Jon Snow serves in the Night's Watch.",
        0.98,
        0.96
    ],
    [
        "jon-snow",
        "house-stark",
        "connected_to",
        "Jon Snow is raised among the Starks.",
        0.97,
        0.95
    ],
    [
        "daenerys-targaryen",
        "house-targaryen",
        "leads",
        "Daenerys claims leadership of House Targaryen.",
        0.98,
        0.96
    ],
    [
        "tyrion-lannister",
        "house-lannister",
        "member_of",
        "Tyrion is a Lannister.",
        0.99,
        0.97
    ],
    [
        "cersei-lannister",
        "house-lannister",
        "member_of",
        "Cersei is a Lannister.",
        0.99,
        0.97
    ],
    [
        "jaime-lannister",
        "house-lannister",
        "member_of",
        "Jaime is a Lannister.",
        0.99,
        0.97
    ],
    [
        "arya-stark",
        "house-stark",
        "member_of",
        "Arya is a Stark.",
        0.99,
        0.97
    ],
    [
        "sansa-stark",
        "house-stark",
        "member_of",
        "Sansa is a Stark.",
        0.99,
        0.97
    ],
    [
        "bran-stark",
        "house-stark",
        "member_of",
        "Bran is a Stark.",
        0.99,
        0.97
    ],
    [
        "night-king",
        "white-walkers",
        "leads",
        "The Night King leads the White Walkers.",
        0.98,
        0.96
    ],
    [
        "samwell-tarly",
        "nights-watch",
        "member_of",
        "Samwell serves the Night's Watch.",
        0.97,
        0.94
    ],
    [
        "cersei-lannister",
        "jaime-lannister",
        "connected_to",
        "Cersei and Jaime are twins and co-conspirators.",
        0.98,
        0.96
    ],
    [
        "daenerys-targaryen",
        "iron-throne",
        "connected_to",
        "Daenerys seeks the Iron Throne.",
        0.97,
        0.94
    ],
    [
        "game-of-thrones",
        "game-of-thrones-figures",
        "contains",
        "Game of Thrones figures is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ],
    [
        "game-of-thrones",
        "game-of-thrones-places",
        "contains",
        "Game of Thrones places is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ],
    [
        "game-of-thrones",
        "game-of-thrones-events",
        "contains",
        "Game of Thrones events is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ],
    [
        "game-of-thrones",
        "game-of-thrones-objects",
        "contains",
        "Game of Thrones objects & artifacts is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ],
    [
        "game-of-thrones",
        "game-of-thrones-factions",
        "contains",
        "Game of Thrones factions & groups is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ],
    [
        "game-of-thrones",
        "game-of-thrones-concepts",
        "contains",
        "Game of Thrones concepts is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ],
    [
        "game-of-thrones",
        "game-of-thrones-eras",
        "contains",
        "Game of Thrones eras is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ],
    [
        "game-of-thrones",
        "game-of-thrones-works",
        "contains",
        "Game of Thrones works & media is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ],
    [
        "game-of-thrones",
        "game-of-thrones-symbols",
        "contains",
        "Game of Thrones symbols is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ],
    [
        "game-of-thrones",
        "game-of-thrones-controversies",
        "contains",
        "Game of Thrones controversies is a primary trailhead under Game of Thrones.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
