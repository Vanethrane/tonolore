/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mass-effect",
        "name": "Mass Effect",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "BioWare's space RPG of Shepard, the Citadel, and the Reapers.",
        "description": "Mass Effect is BioWare's science-fiction franchise about Commander Shepard, the Normandy, Spectres, and a galaxy threatened by the Reapers across Citadel space and beyond.",
        "aliases": []
    },
    {
        "slug": "bioware",
        "name": "BioWare",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio that created Mass Effect.",
        "description": "BioWare developed the Mass Effect trilogy and Andromeda, defining Shepard's war against the Reapers and the politics of the Citadel Council.",
        "aliases": []
    },
    {
        "slug": "electronic-arts",
        "name": "Electronic Arts",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of Mass Effect titles.",
        "description": "Electronic Arts (EA) publishes Mass Effect and owns BioWare, releasing the trilogy, Legendary Edition, and later entries.",
        "aliases": []
    },
    {
        "slug": "mass-effect-trilogy",
        "name": "Mass Effect trilogy",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original three games following Shepard.",
        "description": "The Mass Effect trilogy follows Commander Shepard from Eden Prime through the Reaper War across Mass Effect, Mass Effect 2, and Mass Effect 3.",
        "aliases": []
    },
    {
        "slug": "mass-effect-legendary-edition",
        "name": "Mass Effect Legendary Edition",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Remastered collection of the trilogy.",
        "description": "Mass Effect Legendary Edition remasters the original trilogy with updated visuals and consolidated single-player content.",
        "aliases": []
    },
    {
        "slug": "mass-effect-andromeda",
        "name": "Mass Effect: Andromeda",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Andromeda Initiative spin-off RPG.",
        "description": "Mass Effect: Andromeda shifts the setting to the Andromeda galaxy and the Initiative's search for a new home.",
        "aliases": []
    },
    {
        "slug": "commander-shepard",
        "name": "Commander Shepard",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Spectre protagonist of the trilogy.",
        "description": "Commander Shepard is the Alliance officer and Citadel Spectre who uncovers the Reaper threat and rallies the galaxy aboard the Normandy.",
        "aliases": []
    },
    {
        "slug": "garrus-vakarian",
        "name": "Garrus Vakarian",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Turian sharpshooter and Normandy crewmate.",
        "description": "Garrus Vakarian is a turian C-Sec investigator turned vigilante who becomes one of Shepard's closest allies.",
        "aliases": []
    },
    {
        "slug": "liara-tsoni",
        "name": "Liara T'Soni",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Asari archaeologist and Prothean expert.",
        "description": "Liara T'Soni is an asari scientist whose Prothean research and later information network aid Shepard against the Reapers.",
        "aliases": []
    },
    {
        "slug": "tali-zorah",
        "name": "Tali'Zorah",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Quarian engineer of the Migrant Fleet.",
        "description": "Tali'Zorah nar Rayya is a quarian engineer who joins Shepard, bridging the geth conflict and her people's exile.",
        "aliases": []
    },
    {
        "slug": "illusive-man",
        "name": "The Illusive Man",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Leader of Cerberus.",
        "description": "The Illusive Man directs Cerberus from the shadows, funding Shepard's return while pursuing human dominance and Reaper tech.",
        "aliases": []
    },
    {
        "slug": "david-anderson",
        "name": "David Anderson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Alliance admiral and Shepard's mentor.",
        "description": "David Anderson is an Alliance officer who champions Shepard's Spectre candidacy and later leads Earth's resistance.",
        "aliases": []
    },
    {
        "slug": "saren-arterius",
        "name": "Saren Arterius",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Rogue Spectre serving Sovereign.",
        "description": "Saren Arterius is a turian Spectre corrupted by Sovereign, sparking Shepard's first campaign against the Reapers.",
        "aliases": []
    },
    {
        "slug": "mordin-solus",
        "name": "Mordin Solus",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Salarian scientist on the Normandy.",
        "description": "Mordin Solus is a salarian geneticist whose work on the genophage and loyalty to Shepard define key trilogy choices.",
        "aliases": []
    },
    {
        "slug": "jeff-moreau",
        "name": "Jeff \"Joker\" Moreau",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Normandy's ace pilot.",
        "description": "Jeff \"Joker\" Moreau pilots the Normandy with unmatched skill despite brittle bone disease, staying with Shepard through the war.",
        "aliases": []
    },
    {
        "slug": "udina",
        "name": "Donnel Udina",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Human diplomat on the Citadel Council.",
        "description": "Donnel Udina is humanity's ambitious Citadel representative, often clashing with Anderson and Shepard over politics.",
        "aliases": []
    },
    {
        "slug": "normandy",
        "name": "SSV Normandy",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Stealth frigate of Shepard's crew.",
        "description": "The SSV Normandy (later Normandy SR-2) is the stealth frigate that carries Shepard's squad across the galaxy.",
        "aliases": []
    },
    {
        "slug": "citadel",
        "name": "The Citadel",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Massive station seat of galactic politics.",
        "description": "The Citadel is a vast deep-space station housing the Council, C-Sec, and the diplomatic heart of Citadel space.",
        "aliases": []
    },
    {
        "slug": "mass-relay",
        "name": "Mass relay",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Prothean FTL network between star systems.",
        "description": "Mass relays are enormous Prothean devices that fling ships across the galaxy and form the backbone of interstellar travel.",
        "aliases": []
    },
    {
        "slug": "omega",
        "name": "Omega",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Lawless station in the Terminus Systems.",
        "description": "Omega is a brutal Terminus station of mercenaries and crime, ruled in part by Aria T'Loak and visited by Shepard's crew.",
        "aliases": []
    },
    {
        "slug": "thessia",
        "name": "Thessia",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Asari homeworld.",
        "description": "Thessia is the asari homeworld, rich in culture and eezo, and a major front in the Reaper War.",
        "aliases": []
    },
    {
        "slug": "eden-prime",
        "name": "Eden Prime",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Human colony where the trilogy begins.",
        "description": "Eden Prime is the human colony attacked by geth and Saren at the opening of Mass Effect.",
        "aliases": []
    },
    {
        "slug": "spectres",
        "name": "Spectres",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Council special operatives above local law.",
        "description": "Spectres are elite agents of the Citadel Council granted extraordinary authority to preserve galactic stability.",
        "aliases": []
    },
    {
        "slug": "reapers",
        "name": "Reapers",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Ancient machine race that harvests civilizations.",
        "description": "The Reapers are enormous synthetic-organic warships that cull advanced life in cyclic harvests across galactic history.",
        "aliases": []
    },
    {
        "slug": "geth",
        "name": "Geth",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Networked AIs who rebelled against the quarians.",
        "description": "The geth are networked synthetic intelligences created by the quarians, later split between heretic followers of the Reapers and true geth.",
        "aliases": []
    },
    {
        "slug": "quarians",
        "name": "Quarians",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Nomadic creators of the geth.",
        "description": "Quarians are a suited, ship-bound people of the Migrant Fleet, exiled after the geth uprising.",
        "aliases": []
    },
    {
        "slug": "turians",
        "name": "Turians",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Militaristic Council species.",
        "description": "Turians are a disciplined Council species known for military service, including Spectres like Saren and allies like Garrus.",
        "aliases": []
    },
    {
        "slug": "asari",
        "name": "Asari",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Long-lived Council species of biotics.",
        "description": "Asari are a long-lived, biotic-strong Council species whose culture and diplomacy shape Citadel politics; Liara is among them.",
        "aliases": []
    },
    {
        "slug": "krogan",
        "name": "Krogan",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Hardy warriors constrained by the genophage.",
        "description": "Krogan are resilient warriors whose population was limited by the salarian genophage after the Krogan Rebellions.",
        "aliases": []
    },
    {
        "slug": "cerberus",
        "name": "Cerberus",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Pro-human black-ops network.",
        "description": "Cerberus is a covert pro-human organization led by the Illusive Man, rebuilding the Normandy and clashing with Shepard's ideals.",
        "aliases": []
    },
    {
        "slug": "systems-alliance",
        "name": "Systems Alliance",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Human military and government in space.",
        "description": "The Systems Alliance is humanity's interstellar military and political body, fielding Shepard and the original Normandy.",
        "aliases": []
    },
    {
        "slug": "citadel-council",
        "name": "Citadel Council",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Ruling body of Citadel space.",
        "description": "The Citadel Council is the asari-, turian-, and salarian-led government that grants Spectre status and arbitrates galactic law.",
        "aliases": []
    },
    {
        "slug": "protheans",
        "name": "Protheans",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Fallen civilization that left the relays and Citadel.",
        "description": "The Protheans were an ancient empire wiped out by the Reapers, leaving ruins, beacons, and the mass-relay network.",
        "aliases": []
    },
    {
        "slug": "sovereign",
        "name": "Sovereign",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Reaper who corrupts Saren.",
        "description": "Sovereign is a Reaper vanguard that manipulates Saren and assaults the Citadel in the first Mass Effect game.",
        "aliases": []
    },
    {
        "slug": "mass-effect-figures",
        "name": "Mass Effect figures",
        "type": "topic",
        "short_description": "People and named forces central to Mass Effect.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Mass Effect."
    },
    {
        "slug": "mass-effect-places",
        "name": "Mass Effect places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mass Effect.",
        "description": "Places, regions, and built sites that give Mass Effect its map — where events and figures concentrate."
    },
    {
        "slug": "mass-effect-events",
        "name": "Mass Effect events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mass Effect.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mass Effect timeline."
    },
    {
        "slug": "mass-effect-objects",
        "name": "Mass Effect objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mass Effect.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mass Effect."
    },
    {
        "slug": "mass-effect-factions",
        "name": "Mass Effect factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mass Effect.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mass Effect."
    },
    {
        "slug": "mass-effect-concepts",
        "name": "Mass Effect concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mass Effect.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mass Effect readable as a lore graph."
    }
];

const relationships = [
    [
        "bioware",
        "mass-effect",
        "created",
        "BioWare created Mass Effect.",
        0.99,
        0.99
    ],
    [
        "bioware",
        "mass-effect-trilogy",
        "produced",
        "BioWare developed the Mass Effect trilogy.",
        0.99,
        0.98
    ],
    [
        "electronic-arts",
        "mass-effect",
        "publishes",
        "EA publishes Mass Effect.",
        0.97,
        0.94
    ],
    [
        "electronic-arts",
        "bioware",
        "contains",
        "BioWare is an EA studio.",
        0.96,
        0.93
    ],
    [
        "mass-effect-trilogy",
        "mass-effect",
        "part_of",
        "The trilogy is the core of Mass Effect.",
        0.99,
        0.99
    ],
    [
        "mass-effect-legendary-edition",
        "mass-effect",
        "part_of",
        "Legendary Edition collects the trilogy.",
        0.97,
        0.95
    ],
    [
        "mass-effect-trilogy",
        "mass-effect-legendary-edition",
        "adapted_into",
        "The trilogy was remastered as Legendary Edition.",
        0.95,
        0.91
    ],
    [
        "commander-shepard",
        "spectres",
        "member_of",
        "Shepard is a Citadel Spectre.",
        0.99,
        0.98
    ],
    [
        "commander-shepard",
        "systems-alliance",
        "member_of",
        "Shepard serves the Systems Alliance.",
        0.98,
        0.96
    ],
    [
        "commander-shepard",
        "normandy",
        "leads",
        "Shepard commands the Normandy's missions.",
        0.98,
        0.97
    ],
    [
        "commander-shepard",
        "reapers",
        "opposed_by",
        "Shepard leads the fight against the Reapers.",
        0.99,
        0.98
    ],
    [
        "saren-arterius",
        "spectres",
        "member_of",
        "Saren was a Spectre before going rogue.",
        0.97,
        0.94
    ],
    [
        "saren-arterius",
        "sovereign",
        "supports",
        "Saren serves Sovereign's agenda.",
        0.98,
        0.96
    ],
    [
        "sovereign",
        "reapers",
        "member_of",
        "Sovereign is a Reaper.",
        0.99,
        0.98
    ],
    [
        "commander-shepard",
        "saren-arterius",
        "opposed_by",
        "Shepard hunts the rogue Spectre Saren.",
        0.98,
        0.96
    ],
    [
        "garrus-vakarian",
        "turians",
        "member_of",
        "Garrus is turian.",
        0.98,
        0.95
    ],
    [
        "garrus-vakarian",
        "commander-shepard",
        "supports",
        "Garrus fights beside Shepard.",
        0.98,
        0.96
    ],
    [
        "liara-tsoni",
        "asari",
        "member_of",
        "Liara is asari.",
        0.98,
        0.95
    ],
    [
        "liara-tsoni",
        "commander-shepard",
        "supports",
        "Liara aids Shepard against the Reapers.",
        0.98,
        0.96
    ],
    [
        "tali-zorah",
        "quarians",
        "member_of",
        "Tali is quarian.",
        0.99,
        0.97
    ],
    [
        "tali-zorah",
        "commander-shepard",
        "supports",
        "Tali joins Shepard's crew.",
        0.98,
        0.96
    ],
    [
        "jeff-moreau",
        "normandy",
        "uses",
        "Joker pilots the Normandy.",
        0.99,
        0.97
    ],
    [
        "illusive-man",
        "cerberus",
        "leads",
        "The Illusive Man leads Cerberus.",
        0.99,
        0.98
    ],
    [
        "david-anderson",
        "systems-alliance",
        "member_of",
        "Anderson is an Alliance officer.",
        0.98,
        0.95
    ],
    [
        "david-anderson",
        "commander-shepard",
        "supports",
        "Anderson mentors and backs Shepard.",
        0.97,
        0.94
    ],
    [
        "spectres",
        "citadel-council",
        "part_of",
        "Spectres answer to the Citadel Council.",
        0.97,
        0.94
    ],
    [
        "citadel-council",
        "citadel",
        "located_in",
        "The Council governs from the Citadel.",
        0.98,
        0.96
    ],
    [
        "mass-relay",
        "protheans",
        "created_by",
        "Mass relays are Prothean (Reaper-influenced) infrastructure.",
        0.96,
        0.93
    ],
    [
        "geth",
        "quarians",
        "opposed_by",
        "The geth rebelled against their quarian creators.",
        0.97,
        0.95
    ],
    [
        "reapers",
        "protheans",
        "opposed_by",
        "The Reapers destroyed the Prothean empire.",
        0.98,
        0.96
    ],
    [
        "liara-tsoni",
        "protheans",
        "seeks",
        "Liara studies Prothean ruins and beacons.",
        0.96,
        0.93
    ],
    [
        "thessia",
        "asari",
        "located_in",
        "Thessia is the asari homeworld.",
        0.98,
        0.95
    ],
    [
        "eden-prime",
        "systems-alliance",
        "located_in",
        "Eden Prime is an Alliance colony.",
        0.96,
        0.92
    ],
    [
        "omega",
        "citadel",
        "related_to",
        "Omega lies outside Citadel control in the Terminus.",
        0.93,
        0.88
    ],
    [
        "krogan",
        "citadel-council",
        "related_to",
        "Krogan history is bound to Council wars and the genophage.",
        0.94,
        0.9
    ],
    [
        "mass-effect",
        "mass-effect-figures",
        "contains",
        "Mass Effect figures is a primary trailhead under Mass Effect.",
        0.88,
        0.82
    ],
    [
        "mass-effect",
        "mass-effect-places",
        "contains",
        "Mass Effect places is a primary trailhead under Mass Effect.",
        0.88,
        0.82
    ],
    [
        "mass-effect",
        "mass-effect-events",
        "contains",
        "Mass Effect events is a primary trailhead under Mass Effect.",
        0.88,
        0.82
    ],
    [
        "mass-effect",
        "mass-effect-objects",
        "contains",
        "Mass Effect objects & artifacts is a primary trailhead under Mass Effect.",
        0.88,
        0.82
    ],
    [
        "mass-effect",
        "mass-effect-factions",
        "contains",
        "Mass Effect factions & groups is a primary trailhead under Mass Effect.",
        0.88,
        0.82
    ],
    [
        "mass-effect",
        "mass-effect-concepts",
        "contains",
        "Mass Effect concepts is a primary trailhead under Mass Effect.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
