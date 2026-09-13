/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "magic-the-gathering",
        "name": "Magic: The Gathering",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Wizards of the Coast's multiverse trading card game.",
        "description": "Magic: The Gathering is Wizards of the Coast's collectible card game set across a vast multiverse of planes, where planeswalkers wield magic through mana and color philosophies.",
        "aliases": []
    },
    {
        "slug": "wizards-of-the-coast",
        "name": "Wizards of the Coast",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of Magic: The Gathering.",
        "description": "Wizards of the Coast designs and publishes Magic: The Gathering sets, organized play, and the lore of Dominaria, Ravnica, Phyrexia, and countless other planes.",
        "aliases": []
    },
    {
        "slug": "planeswalkers",
        "name": "Planeswalkers",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Mages who can travel between planes.",
        "description": "Planeswalkers are rare beings with a spark that lets them walk between planes of the Magic multiverse, shaping wars from Dominaria to Ravnica and beyond.",
        "aliases": []
    },
    {
        "slug": "multiverse",
        "name": "Magic multiverse",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Network of planes connected by the Blind Eternities.",
        "description": "The Magic multiverse is the collection of infinite planes—each a self-contained world—linked by the Blind Eternities and traversed by planeswalkers.",
        "aliases": []
    },
    {
        "slug": "mana",
        "name": "Mana",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Magical energy drawn from lands and sources.",
        "description": "Mana is the magical energy mages channel to cast spells, commonly expressed through five colors and the lands that produce them.",
        "aliases": []
    },
    {
        "slug": "color-pie",
        "name": "Color pie",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Philosophical framework of Magic's five colors.",
        "description": "The color pie defines how white, blue, black, red, and green magic express distinct philosophies, strengths, and weaknesses across the game and its stories.",
        "aliases": []
    },
    {
        "slug": "the-mending",
        "name": "The Mending",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Event that weakened planeswalker sparks.",
        "description": "The Mending was a multiversal healing that closed rifts in Dominaria but diminished planeswalker power, reshaping how walkers like Jace and Chandra operate.",
        "aliases": []
    },
    {
        "slug": "dominaria",
        "name": "Dominaria",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Magic's central hub world of ancient history.",
        "description": "Dominaria is one of Magic's oldest and most storied planes, scarred by Phyrexian invasions, time rifts, and the birthplace of much of the game's foundational lore.",
        "aliases": []
    },
    {
        "slug": "ravnica",
        "name": "Ravnica",
        "type": "place",
        "evidence": "fiction",
        "short_description": "City-covered plane ruled by ten guilds.",
        "description": "Ravnica is a vast urban plane where ten guilds—Azorius, Golgari, Dimir, and others—govern a labyrinthine city-world central to many Magic storylines.",
        "aliases": []
    },
    {
        "slug": "phyrexia",
        "name": "Phyrexia",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Machine-horror plane of compleated perfection.",
        "description": "Phyrexia is a nightmarish plane of oil, metal, and ideological corruption, seeking to compleat other worlds and spread its vision of perfect unity through invasion.",
        "aliases": []
    },
    {
        "slug": "zendikar",
        "name": "Zendikar",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Adventure-rich plane of rising Eldrazi threat.",
        "description": "Zendikar is a volatile plane of floating hedrons and dangerous landscapes, where ancient Eldrazi titans once slumbered before planeswalkers intervened.",
        "aliases": []
    },
    {
        "slug": "jace-beleren",
        "name": "Jace Beleren",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Blue-minded planeswalker and mind mage.",
        "description": "Jace Beleren is a brilliant but troubled planeswalker whose telepathy and memory magic made him a key strategist of the Gatewatch and a voice in Ravnica's crises.",
        "aliases": []
    },
    {
        "slug": "chandra-nalaar",
        "name": "Chandra Nalaar",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fiery red planeswalker pyromancer.",
        "description": "Chandra Nalaar is an impulsive pyromancer planeswalker whose passion and combat magic drove her from rebellion on Kaladesh to the Gatewatch's battles.",
        "aliases": []
    },
    {
        "slug": "liliana-vess",
        "name": "Liliana Vess",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Black-aligned necromancer planeswalker.",
        "description": "Liliana Vess is a centuries-old necromancer planeswalker bound by demonic contracts, whose power and guilt shadowed Gatewatch campaigns and Phyrexian wars.",
        "aliases": []
    },
    {
        "slug": "garruk-wildspeaker",
        "name": "Garruk Wildspeaker",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Green planeswalker hunter of great beasts.",
        "description": "Garruk Wildspeaker is a towering hunter planeswalker who tracks monstrous prey across planes, later corrupted by black magic before seeking redemption.",
        "aliases": []
    },
    {
        "slug": "nicol-bolas",
        "name": "Nicol Bolas",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ancient dragon planeswalker schemer.",
        "description": "Nicol Bolas is an elder dragon planeswalker whose millennia of schemes culminated in the War of the Spark on Ravnica, opposing the Gatewatch and mortal planes.",
        "aliases": []
    },
    {
        "slug": "gideon-jura",
        "name": "Gideon Jura",
        "type": "person",
        "evidence": "fiction",
        "short_description": "White-aligned soldier planeswalker of the Gatewatch.",
        "description": "Gideon Jura is a steadfast warrior planeswalker who helped found the Gatewatch, sacrificing himself during the War of the Spark to protect Ravnica.",
        "aliases": []
    },
    {
        "slug": "nissa-revane",
        "name": "Nissa Revane",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Green elf planeswalker attuned to Zendikar.",
        "description": "Nissa Revane is an elf planeswalker whose bond with Zendikar's land and leylines made her a founding member of the Gatewatch against Eldrazi and later threats.",
        "aliases": []
    },
    {
        "slug": "ajani-goldmane",
        "name": "Ajani Goldmane",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Leonin white planeswalker mentor.",
        "description": "Ajani Goldmane is a leonin planeswalker who mentors others in justice and courage, joining Gatewatch efforts and confronting Nicol Bolas on multiple planes.",
        "aliases": []
    },
    {
        "slug": "teferi",
        "name": "Teferi",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Time-magic planeswalker of Dominaria.",
        "description": "Teferi is a Dominarian planeswalker master of temporal magic whose exile during the Phyrexian invasion and return after the Mending shaped the plane's recovery.",
        "aliases": []
    },
    {
        "slug": "karn",
        "name": "Karn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Silver golem planeswalker creator of Mirrodin.",
        "description": "Karn is a silver golem planeswalker who created Mirrodin and later carried a Phyrexian oil curse, making him central to both Dominaria's history and Phyrexia's spread.",
        "aliases": []
    },
    {
        "slug": "elspeth-tirel",
        "name": "Elspeth Tirel",
        "type": "person",
        "evidence": "fiction",
        "short_description": "White knight planeswalker of Theros and beyond.",
        "description": "Elspeth Tirel is a valorous planeswalker who fought on Theros and in the Multiverse against Phyrexia, embodying hope amid repeated cycles of death and return.",
        "aliases": []
    },
    {
        "slug": "gatewatch",
        "name": "The Gatewatch",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Planeswalker coalition against multiversal threats.",
        "description": "The Gatewatch is an alliance of planeswalkers—including Jace, Chandra, Gideon, Nissa, and Liliana—formed to oppose Nicol Bolas, Eldrazi, and later Phyrexian invasion.",
        "aliases": []
    },
    {
        "slug": "phyrexians",
        "name": "Phyrexians",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Compleated armies of Phyrexian ideology.",
        "description": "Phyrexians are oil-twisted beings and machines who serve Phyrexia's gospel of perfection, invading planes from Mirrodin/New Phyrexia outward across the multiverse.",
        "aliases": []
    },
    {
        "slug": "azorius-senate",
        "name": "Azorius Senate",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Ravnica guild of law and bureaucracy.",
        "description": "The Azorius Senate is Ravnica's guild of lawmakers and judges, enforcing order from the guildpact halls that Jace and the Gatewatch navigated during Bolas's schemes.",
        "aliases": []
    },
    {
        "slug": "golgari-swarm",
        "name": "Golgari Swarm",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Ravnica guild of rot and reclamation.",
        "description": "The Golgari Swarm is Ravnica's guild of decay and renewal, ruling undercity networks whose spores and necromancy intersect with Ravnican politics and war.",
        "aliases": []
    },
    {
        "slug": "dimir-guild",
        "name": "House Dimir",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Secret Ravnica guild of espionage.",
        "description": "House Dimir is Ravnica's hidden guild of spies and illusionists, manipulating information from the shadows while the plane's visible guilds govern above.",
        "aliases": []
    },
    {
        "slug": "war-of-the-spark",
        "name": "War of the Spark",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Ravnica battle where Bolas sought godhood.",
        "description": "The War of the Spark was Nicol Bolas's attempt to ascend on Ravnica by harvesting planeswalker sparks, culminating in Gatewatch resistance and Gideon's sacrifice.",
        "aliases": []
    },
    {
        "slug": "phyrexian-invasion",
        "name": "Phyrexian invasion of the Multiverse",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Cross-plane assault by New Phyrexia.",
        "description": "The Phyrexian invasion of the Multiverse is the coordinated campaign by New Phyrexia to compleat countless planes, drawing planeswalkers like Elspeth into a multiversal war.",
        "aliases": []
    },
    {
        "slug": "magic-the-gathering-card-game",
        "name": "Magic: The Gathering (card game)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Core tabletop and digital card game product.",
        "description": "Magic: The Gathering the card game is the tabletop and digital product through which players encounter sets, formats, and storylines from Dominaria to Phyrexia.",
        "aliases": []
    },
    {
        "slug": "commander-format",
        "name": "Commander",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Popular multiplayer Magic format.",
        "description": "Commander is a multiplayer Magic format built around legendary creatures and 100-card decks, widely played in casual and organized communities worldwide.",
        "aliases": []
    },
    {
        "slug": "magic-the-gathering-figures",
        "name": "Magic: The Gathering figures",
        "type": "topic",
        "short_description": "People and named forces central to Magic: The Gathering.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Magic: The Gathering."
    },
    {
        "slug": "magic-the-gathering-places",
        "name": "Magic: The Gathering places",
        "type": "place",
        "short_description": "Locations and geographies that frame Magic: The Gathering.",
        "description": "Places, regions, and built sites that give Magic: The Gathering its map — where events and figures concentrate."
    },
    {
        "slug": "magic-the-gathering-events",
        "name": "Magic: The Gathering events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Magic: The Gathering.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Magic: The Gathering timeline."
    },
    {
        "slug": "magic-the-gathering-objects",
        "name": "Magic: The Gathering objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Magic: The Gathering.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Magic: The Gathering."
    },
    {
        "slug": "magic-the-gathering-factions",
        "name": "Magic: The Gathering factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Magic: The Gathering.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Magic: The Gathering."
    },
    {
        "slug": "magic-the-gathering-concepts",
        "name": "Magic: The Gathering concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Magic: The Gathering.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Magic: The Gathering readable as a lore graph."
    },
    {
        "slug": "magic-the-gathering-eras",
        "name": "Magic: The Gathering eras",
        "type": "event",
        "short_description": "Periodization for Magic: The Gathering.",
        "description": "Named eras and phases that help readers track how Magic: The Gathering changes across time."
    },
    {
        "slug": "magic-the-gathering-works",
        "name": "Magic: The Gathering works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Magic: The Gathering.",
        "description": "Primary works and adaptations through which most audiences encounter Magic: The Gathering."
    },
    {
        "slug": "magic-the-gathering-symbols",
        "name": "Magic: The Gathering symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Magic: The Gathering.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Magic: The Gathering."
    }
];

const relationships = [
    [
        "wizards-of-the-coast",
        "magic-the-gathering",
        "publishes",
        "Wizards publishes Magic: The Gathering.",
        0.99,
        0.99
    ],
    [
        "wizards-of-the-coast",
        "magic-the-gathering-card-game",
        "produced",
        "Wizards produces the Magic card game.",
        0.98,
        0.97
    ],
    [
        "magic-the-gathering-card-game",
        "magic-the-gathering",
        "part_of",
        "The card game is the primary Magic product.",
        0.99,
        0.98
    ],
    [
        "commander-format",
        "magic-the-gathering-card-game",
        "part_of",
        "Commander is a Magic format.",
        0.97,
        0.94
    ],
    [
        "planeswalkers",
        "multiverse",
        "connected_to",
        "Planeswalkers traverse the multiverse.",
        0.99,
        0.98
    ],
    [
        "mana",
        "color-pie",
        "related_to",
        "Mana channels the philosophies of the color pie.",
        0.97,
        0.94
    ],
    [
        "the-mending",
        "dominaria",
        "occurred_at",
        "The Mending healed Dominaria's time rifts.",
        0.96,
        0.93
    ],
    [
        "the-mending",
        "planeswalkers",
        "influenced",
        "The Mending weakened planeswalker sparks.",
        0.97,
        0.95
    ],
    [
        "jace-beleren",
        "planeswalkers",
        "member_of",
        "Jace is a planeswalker.",
        0.99,
        0.98
    ],
    [
        "chandra-nalaar",
        "planeswalkers",
        "member_of",
        "Chandra is a planeswalker.",
        0.99,
        0.98
    ],
    [
        "liliana-vess",
        "planeswalkers",
        "member_of",
        "Liliana is a planeswalker.",
        0.99,
        0.98
    ],
    [
        "garruk-wildspeaker",
        "planeswalkers",
        "member_of",
        "Garruk is a planeswalker.",
        0.99,
        0.98
    ],
    [
        "nicol-bolas",
        "planeswalkers",
        "member_of",
        "Nicol Bolas is an elder dragon planeswalker.",
        0.99,
        0.98
    ],
    [
        "gideon-jura",
        "planeswalkers",
        "member_of",
        "Gideon is a planeswalker.",
        0.98,
        0.96
    ],
    [
        "nissa-revane",
        "planeswalkers",
        "member_of",
        "Nissa is a planeswalker.",
        0.98,
        0.96
    ],
    [
        "ajani-goldmane",
        "planeswalkers",
        "member_of",
        "Ajani is a planeswalker.",
        0.98,
        0.96
    ],
    [
        "teferi",
        "planeswalkers",
        "member_of",
        "Teferi is a planeswalker.",
        0.98,
        0.96
    ],
    [
        "karn",
        "planeswalkers",
        "member_of",
        "Karn is a planeswalker.",
        0.98,
        0.96
    ],
    [
        "elspeth-tirel",
        "planeswalkers",
        "member_of",
        "Elspeth is a planeswalker.",
        0.98,
        0.96
    ],
    [
        "jace-beleren",
        "gatewatch",
        "member_of",
        "Jace helped lead the Gatewatch.",
        0.98,
        0.96
    ],
    [
        "chandra-nalaar",
        "gatewatch",
        "member_of",
        "Chandra fought with the Gatewatch.",
        0.98,
        0.96
    ],
    [
        "liliana-vess",
        "gatewatch",
        "member_of",
        "Liliana served with the Gatewatch.",
        0.97,
        0.94
    ],
    [
        "garruk-wildspeaker",
        "gatewatch",
        "related_to",
        "Garruk allied with Gatewatch efforts before his corruption.",
        0.93,
        0.88
    ],
    [
        "gideon-jura",
        "gatewatch",
        "member_of",
        "Gideon co-founded the Gatewatch.",
        0.99,
        0.98
    ],
    [
        "nissa-revane",
        "gatewatch",
        "member_of",
        "Nissa was a founding Gatewatch member.",
        0.98,
        0.96
    ],
    [
        "ajani-goldmane",
        "gatewatch",
        "member_of",
        "Ajani joined Gatewatch battles.",
        0.97,
        0.94
    ],
    [
        "gatewatch",
        "nicol-bolas",
        "opposed_by",
        "The Gatewatch formed to stop Nicol Bolas.",
        0.98,
        0.96
    ],
    [
        "dominaria",
        "multiverse",
        "part_of",
        "Dominaria is a plane in the multiverse.",
        0.99,
        0.98
    ],
    [
        "ravnica",
        "multiverse",
        "part_of",
        "Ravnica is a plane in the multiverse.",
        0.99,
        0.98
    ],
    [
        "phyrexia",
        "multiverse",
        "part_of",
        "Phyrexia is a plane in the multiverse.",
        0.99,
        0.98
    ],
    [
        "zendikar",
        "multiverse",
        "part_of",
        "Zendikar is a plane in the multiverse.",
        0.98,
        0.96
    ],
    [
        "teferi",
        "dominaria",
        "located_in",
        "Teferi is closely tied to Dominaria.",
        0.97,
        0.94
    ],
    [
        "karn",
        "dominaria",
        "related_to",
        "Karn's history spans Dominaria and Mirrodin.",
        0.96,
        0.93
    ],
    [
        "karn",
        "phyrexia",
        "connected_to",
        "Karn's oil curse linked him to Phyrexia.",
        0.97,
        0.95
    ],
    [
        "nissa-revane",
        "zendikar",
        "located_in",
        "Nissa's bond centers on Zendikar.",
        0.97,
        0.94
    ],
    [
        "azorius-senate",
        "ravnica",
        "located_in",
        "The Azorius Senate governs on Ravnica.",
        0.98,
        0.96
    ],
    [
        "golgari-swarm",
        "ravnica",
        "located_in",
        "The Golgari rule Ravnica's undercity.",
        0.98,
        0.96
    ],
    [
        "dimir-guild",
        "ravnica",
        "located_in",
        "House Dimir operates secretly on Ravnica.",
        0.98,
        0.96
    ],
    [
        "jace-beleren",
        "ravnica",
        "involved",
        "Jace became the Living Guildpact on Ravnica.",
        0.96,
        0.93
    ],
    [
        "phyrexians",
        "phyrexia",
        "member_of",
        "Phyrexians serve Phyrexian ideology.",
        0.99,
        0.98
    ],
    [
        "phyrexian-invasion",
        "phyrexia",
        "caused",
        "New Phyrexia launched the multiversal invasion.",
        0.98,
        0.96
    ],
    [
        "phyrexian-invasion",
        "multiverse",
        "occurred_at",
        "The invasion struck planes across the multiverse.",
        0.98,
        0.96
    ],
    [
        "elspeth-tirel",
        "phyrexian-invasion",
        "involved",
        "Elspeth fought in the Phyrexian war.",
        0.97,
        0.94
    ],
    [
        "nicol-bolas",
        "war-of-the-spark",
        "involved",
        "Bolas orchestrated the War of the Spark.",
        0.99,
        0.98
    ],
    [
        "war-of-the-spark",
        "ravnica",
        "occurred_at",
        "The War of the Spark was fought on Ravnica.",
        0.99,
        0.98
    ],
    [
        "gideon-jura",
        "war-of-the-spark",
        "involved",
        "Gideon died during the War of the Spark.",
        0.98,
        0.96
    ],
    [
        "gatewatch",
        "war-of-the-spark",
        "involved",
        "The Gatewatch fought in the War of the Spark.",
        0.98,
        0.96
    ],
    [
        "magic-the-gathering",
        "magic-the-gathering-figures",
        "contains",
        "Magic: The Gathering figures is a primary trailhead under Magic: The Gathering.",
        0.88,
        0.82
    ],
    [
        "magic-the-gathering",
        "magic-the-gathering-places",
        "contains",
        "Magic: The Gathering places is a primary trailhead under Magic: The Gathering.",
        0.88,
        0.82
    ],
    [
        "magic-the-gathering",
        "magic-the-gathering-events",
        "contains",
        "Magic: The Gathering events is a primary trailhead under Magic: The Gathering.",
        0.88,
        0.82
    ],
    [
        "magic-the-gathering",
        "magic-the-gathering-objects",
        "contains",
        "Magic: The Gathering objects & artifacts is a primary trailhead under Magic: The Gathering.",
        0.88,
        0.82
    ],
    [
        "magic-the-gathering",
        "magic-the-gathering-factions",
        "contains",
        "Magic: The Gathering factions & groups is a primary trailhead under Magic: The Gathering.",
        0.88,
        0.82
    ],
    [
        "magic-the-gathering",
        "magic-the-gathering-concepts",
        "contains",
        "Magic: The Gathering concepts is a primary trailhead under Magic: The Gathering.",
        0.88,
        0.82
    ],
    [
        "magic-the-gathering",
        "magic-the-gathering-eras",
        "contains",
        "Magic: The Gathering eras is a primary trailhead under Magic: The Gathering.",
        0.88,
        0.82
    ],
    [
        "magic-the-gathering",
        "magic-the-gathering-works",
        "contains",
        "Magic: The Gathering works & media is a primary trailhead under Magic: The Gathering.",
        0.88,
        0.82
    ],
    [
        "magic-the-gathering",
        "magic-the-gathering-symbols",
        "contains",
        "Magic: The Gathering symbols is a primary trailhead under Magic: The Gathering.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
