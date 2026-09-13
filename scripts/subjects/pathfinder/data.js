/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pathfinder",
        "name": "Pathfinder",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Paizo's fantasy RPG of Golarion, Adventure Paths, and the Pathfinder Society.",
        "description": "Pathfinder is Paizo's tabletop role-playing game set on Golarion, known for deep character options, serialized Adventure Paths, organized Pathfinder Society play, and the related Starfinder science-fantasy spinoff.",
        "aliases": []
    },
    {
        "slug": "paizo",
        "name": "Paizo",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of Pathfinder and Starfinder.",
        "description": "Paizo Publishing produces Pathfinder rulebooks, Adventure Paths, organized play, and the Starfinder RPG, building on decades of fantasy RPG design.",
        "aliases": []
    },
    {
        "slug": "jason-bulmahn",
        "name": "Jason Bulmahn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lead designer of Pathfinder's early editions.",
        "description": "Jason Bulmahn led design on Pathfinder First Edition, shaping its class archetypes, combat options, and compatibility with d20 fantasy expectations.",
        "aliases": []
    },
    {
        "slug": "eric-mona",
        "name": "Eric Mona",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Editor and world-builder of Golarion lore.",
        "description": "Eric Mona helped steer Paizo's setting bible and editorial direction, shaping Golarion's deities, nations, and Adventure Path continuity.",
        "aliases": []
    },
    {
        "slug": "pathfinder-first-edition",
        "name": "Pathfinder First Edition",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original Pathfinder RPG rules (2009).",
        "description": "Pathfinder First Edition launched Paizo's flagship RPG with expanded classes, feats, and a living Golarion campaign line tied to Adventure Paths.",
        "aliases": []
    },
    {
        "slug": "pathfinder-second-edition",
        "name": "Pathfinder Second Edition",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Streamlined successor with three-action combat.",
        "description": "Pathfinder Second Edition refines action economy, archetypes, and encounter math while continuing Golarion lore and Society-organized play.",
        "aliases": []
    },
    {
        "slug": "pathfinder-core-rulebook",
        "name": "Pathfinder Core Rulebook",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Foundation text for Pathfinder Second Edition.",
        "description": "The Pathfinder Core Rulebook presents 2e classes, ancestries, spells, and gamemaster guidance for running adventures on Golarion.",
        "aliases": []
    },
    {
        "slug": "starfinder",
        "name": "Starfinder",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Paizo's science-fantasy RPG spinoff.",
        "description": "Starfinder extends Paizo's design into a science-fantasy galaxy with starships, aliens, and magic-tech, spun from Golarion's distant future.",
        "aliases": []
    },
    {
        "slug": "pathfinder-society",
        "name": "Pathfinder Society",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Global organized play campaign.",
        "description": "The Pathfinder Society is Paizo's worldwide organized play program where agents undertake sanctioned scenarios that advance a shared metaplot.",
        "aliases": []
    },
    {
        "slug": "adventure-paths",
        "name": "Adventure Paths",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Serialized multi-volume campaign arcs.",
        "description": "Adventure Paths are Paizo's linked module series—monthly chapters forming full campaigns such as Rise of the Runelords across Golarion.",
        "aliases": []
    },
    {
        "slug": "rise-of-the-runelords",
        "name": "Rise of the Runelords",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Landmark Adventure Path in Varisia.",
        "description": "Rise of the Runelords is Paizo's inaugural Adventure Path, pitting heroes against ancient Thassilonian runelords in Varisia.",
        "aliases": []
    },
    {
        "slug": "golarion",
        "name": "Golarion",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Primary world of Pathfinder.",
        "description": "Golarion is Pathfinder's core planet, a patchwork of nations, gods, and ancient ruins from Absalom's cosmopolitan isle to Cheliax's infernal bargains.",
        "aliases": []
    },
    {
        "slug": "inner-sea",
        "name": "Inner Sea region",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Heart of Golarion around the Inner Sea.",
        "description": "The Inner Sea region is Golarion's political and cultural center, where Andoran, Cheliax, Taldor, and Absalom shape Age of Lost Omens events.",
        "aliases": []
    },
    {
        "slug": "absalom",
        "name": "Absalom",
        "type": "place",
        "evidence": "fiction",
        "short_description": "City at the center of the world.",
        "description": "Absalom is the grand city-isle at Golarion's heart, home to the Starstone, faction politics, and the Pathfinder Society's Grand Lodge.",
        "aliases": []
    },
    {
        "slug": "varisia",
        "name": "Varisia",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Frontier region of ancient Thassilon.",
        "description": "Varisia is a rugged northwestern region where Korvosan trade, Shoanti traditions, and Thassilonian ruins anchor early Adventure Paths.",
        "aliases": []
    },
    {
        "slug": "andoran",
        "name": "Andoran",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Democratic nation of liberty.",
        "description": "Andoran is Golarion's revolutionary republic, exporting Eagle Knights and ideals of freedom against tyranny and slavery.",
        "aliases": []
    },
    {
        "slug": "cheliax",
        "name": "Cheliax",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Infernal empire of devils and contracts.",
        "description": "Cheliax is a powerful infernal empire where House Thrune rules through diabolic pacts, shaping much of the Inner Sea's politics.",
        "aliases": []
    },
    {
        "slug": "valeros",
        "name": "Valeros",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fighter iconic of Pathfinder art and pregens.",
        "description": "Valeros is Pathfinder's sword-and-shield fighter iconic, appearing on covers and pregens as a straightforward heroic adventurer.",
        "aliases": []
    },
    {
        "slug": "merisiel",
        "name": "Merisiel",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Rogue iconic of Pathfinder branding.",
        "description": "Merisiel is the elven rogue iconic known for twin daggers and wary independence, featured across Pathfinder art and introductory adventures.",
        "aliases": []
    },
    {
        "slug": "seelah",
        "name": "Seelah",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Paladin iconic sworn to Iomedae.",
        "description": "Seelah is the paladin iconic devoted to Iomedae, embodying knightly virtue in Pathfinder pregens and organized play materials.",
        "aliases": []
    },
    {
        "slug": "kyra",
        "name": "Kyra",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Cleric iconic healer of the iconics.",
        "description": "Kyra is the cleric iconic who channels divine magic in pregens and art, often paired with other iconics in introductory scenarios.",
        "aliases": []
    },
    {
        "slug": "abadar",
        "name": "Abadar",
        "type": "person",
        "evidence": "fiction",
        "short_description": "God of cities, trade, and law.",
        "description": "Abadar is Golarion's god of civilization and commerce, patron of merchants, judges, and those who build ordered prosperity.",
        "aliases": []
    },
    {
        "slug": "torag",
        "name": "Torag",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dwarven god of forge and protection.",
        "description": "Torag is the dwarven deity of the forge and defense, revered by clans who hold mountains and craft against Golarion's threats.",
        "aliases": []
    },
    {
        "slug": "shelyn",
        "name": "Shelyn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Goddess of art, beauty, and love.",
        "description": "Shelyn inspires artists and lovers across Golarion, sister to Zon-Kuthon and a beacon of compassion amid divine tragedy.",
        "aliases": []
    },
    {
        "slug": "asmodeus",
        "name": "Asmodeus",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Prince of Darkness and patron of Cheliax.",
        "description": "Asmodeus is the archdevil worshiped as god of tyranny and contracts, central to Cheliax's infernal church and cosmic hierarchy.",
        "aliases": []
    },
    {
        "slug": "pharasma",
        "name": "Pharasma",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lady of Graves and judge of souls.",
        "description": "Pharasma judges the dead at the Boneyard, making her faith crucial to Golarion's cosmology and resurrection lore.",
        "aliases": []
    },
    {
        "slug": "goblins",
        "name": "Goblins",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Comic menace and mascot creatures of Pathfinder.",
        "description": "Goblins are small, chaotic raiders Paizo popularized as mascots—fire-loving troublemakers in pregens, comics, and introductory adventures.",
        "aliases": []
    },
    {
        "slug": "three-action-economy",
        "name": "Three-action economy",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "2e combat structure of three actions per turn.",
        "description": "Pathfinder Second Edition's three-action economy lets characters spend up to three actions per turn on strikes, spells, and movement, defining its tactical pace.",
        "aliases": []
    },
    {
        "slug": "archetypes",
        "name": "Archetypes",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Modular class options in Pathfinder 2e.",
        "description": "Archetypes in Pathfinder Second Edition graft new abilities onto classes, letting characters dabble in alchemist bombs, duelist feats, or Society training.",
        "aliases": []
    },
    {
        "slug": "age-of-lost-omens",
        "name": "Age of Lost Omens",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Current Golarion era after prophecy fails.",
        "description": "The Age of Lost Omens is Golarion's present era after Aroden's death shattered prophecy, opening Pathfinder Second Edition's revised timeline.",
        "aliases": []
    },
    {
        "slug": "grand-lodge",
        "name": "Grand Lodge",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Pathfinder Society headquarters in Absalom.",
        "description": "The Grand Lodge in Absalom houses the Pathfinder Society's leadership, archives, and venture-captain briefings for worldwide agents.",
        "aliases": []
    },
    {
        "slug": "pathfinder-figures",
        "name": "Pathfinder figures",
        "type": "topic",
        "short_description": "People and named forces central to Pathfinder.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Pathfinder."
    },
    {
        "slug": "pathfinder-places",
        "name": "Pathfinder places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pathfinder.",
        "description": "Places, regions, and built sites that give Pathfinder its map — where events and figures concentrate."
    },
    {
        "slug": "pathfinder-events",
        "name": "Pathfinder events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pathfinder.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pathfinder timeline."
    },
    {
        "slug": "pathfinder-objects",
        "name": "Pathfinder objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pathfinder.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pathfinder."
    },
    {
        "slug": "pathfinder-factions",
        "name": "Pathfinder factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pathfinder.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pathfinder."
    },
    {
        "slug": "pathfinder-concepts",
        "name": "Pathfinder concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pathfinder.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pathfinder readable as a lore graph."
    },
    {
        "slug": "pathfinder-eras",
        "name": "Pathfinder eras",
        "type": "event",
        "short_description": "Periodization for Pathfinder.",
        "description": "Named eras and phases that help readers track how Pathfinder changes across time."
    },
    {
        "slug": "pathfinder-works",
        "name": "Pathfinder works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pathfinder.",
        "description": "Primary works and adaptations through which most audiences encounter Pathfinder."
    },
    {
        "slug": "pathfinder-symbols",
        "name": "Pathfinder symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pathfinder.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pathfinder."
    }
];

const relationships = [
    [
        "paizo",
        "pathfinder",
        "publishes",
        "Paizo publishes Pathfinder.",
        0.99,
        0.99
    ],
    [
        "jason-bulmahn",
        "pathfinder-first-edition",
        "created",
        "Bulmahn led design on Pathfinder 1e.",
        0.97,
        0.95
    ],
    [
        "eric-mona",
        "golarion",
        "influenced",
        "Mona shaped Golarion's editorial lore.",
        0.94,
        0.9
    ],
    [
        "paizo",
        "starfinder",
        "publishes",
        "Paizo also publishes Starfinder.",
        0.97,
        0.94
    ],
    [
        "starfinder",
        "pathfinder",
        "related_to",
        "Starfinder is Paizo's sci-fi spinoff of Golarion's future.",
        0.93,
        0.88
    ],
    [
        "pathfinder-first-edition",
        "pathfinder",
        "part_of",
        "1e is the original Pathfinder line.",
        0.98,
        0.97
    ],
    [
        "pathfinder-second-edition",
        "pathfinder",
        "part_of",
        "2e is the current Pathfinder edition.",
        0.99,
        0.98
    ],
    [
        "pathfinder-core-rulebook",
        "pathfinder-second-edition",
        "part_of",
        "The Core Rulebook anchors 2e.",
        0.98,
        0.97
    ],
    [
        "pathfinder-first-edition",
        "pathfinder-second-edition",
        "preceded",
        "1e preceded Pathfinder 2e.",
        0.97,
        0.95
    ],
    [
        "pathfinder-society",
        "pathfinder",
        "part_of",
        "Society play is official Pathfinder organized play.",
        0.98,
        0.96
    ],
    [
        "pathfinder-society",
        "grand-lodge",
        "located_in",
        "The Society is headquartered at the Grand Lodge.",
        0.97,
        0.95
    ],
    [
        "grand-lodge",
        "absalom",
        "located_in",
        "The Grand Lodge stands in Absalom.",
        0.98,
        0.96
    ],
    [
        "adventure-paths",
        "pathfinder",
        "part_of",
        "Adventure Paths are Paizo's serialized campaigns.",
        0.98,
        0.97
    ],
    [
        "rise-of-the-runelords",
        "adventure-paths",
        "part_of",
        "Runelords is a flagship Adventure Path.",
        0.97,
        0.95
    ],
    [
        "rise-of-the-runelords",
        "varisia",
        "occurred_at",
        "Runelords unfolds across Varisia.",
        0.96,
        0.93
    ],
    [
        "golarion",
        "pathfinder",
        "part_of",
        "Golarion is Pathfinder's core setting.",
        0.99,
        0.99
    ],
    [
        "inner-sea",
        "golarion",
        "located_in",
        "The Inner Sea lies at Golarion's heart.",
        0.98,
        0.96
    ],
    [
        "absalom",
        "inner-sea",
        "located_in",
        "Absalom dominates the Inner Sea.",
        0.97,
        0.95
    ],
    [
        "andoran",
        "inner-sea",
        "located_in",
        "Andoran borders the Inner Sea.",
        0.96,
        0.93
    ],
    [
        "cheliax",
        "inner-sea",
        "located_in",
        "Cheliax is an Inner Sea power.",
        0.97,
        0.94
    ],
    [
        "varisia",
        "golarion",
        "located_in",
        "Varisia is a northwestern Golarion region.",
        0.96,
        0.93
    ],
    [
        "valeros",
        "pathfinder",
        "related_to",
        "Valeros is a Pathfinder iconic.",
        0.95,
        0.9
    ],
    [
        "merisiel",
        "pathfinder",
        "related_to",
        "Merisiel is a Pathfinder iconic.",
        0.95,
        0.9
    ],
    [
        "seelah",
        "pathfinder",
        "related_to",
        "Seelah is a Pathfinder iconic.",
        0.95,
        0.9
    ],
    [
        "kyra",
        "pathfinder",
        "related_to",
        "Kyra is a Pathfinder iconic.",
        0.95,
        0.9
    ],
    [
        "asmodeus",
        "cheliax",
        "connected_to",
        "Cheliax's state religion venerates Asmodeus.",
        0.97,
        0.95
    ],
    [
        "abadar",
        "absalom",
        "connected_to",
        "Abadar's faith thrives in mercantile Absalom.",
        0.93,
        0.88
    ],
    [
        "pharasma",
        "golarion",
        "related_to",
        "Pharasma judges souls across Golarion.",
        0.96,
        0.92
    ],
    [
        "torag",
        "golarion",
        "related_to",
        "Torag is a major dwarven deity of Golarion.",
        0.94,
        0.9
    ],
    [
        "shelyn",
        "golarion",
        "related_to",
        "Shelyn's faith spans Golarion's cultures.",
        0.93,
        0.88
    ],
    [
        "three-action-economy",
        "pathfinder-second-edition",
        "part_of",
        "2e combat uses three actions per turn.",
        0.98,
        0.96
    ],
    [
        "archetypes",
        "pathfinder-second-edition",
        "part_of",
        "Archetypes are a 2e character option.",
        0.97,
        0.95
    ],
    [
        "age-of-lost-omens",
        "golarion",
        "part_of",
        "The Age of Lost Omens is Golarion's current era.",
        0.96,
        0.93
    ],
    [
        "goblins",
        "pathfinder",
        "related_to",
        "Goblins are Pathfinder mascot creatures.",
        0.94,
        0.9
    ],
    [
        "pathfinder-society",
        "adventure-paths",
        "related_to",
        "Society scenarios complement Adventure Path lore.",
        0.91,
        0.86
    ],
    [
        "pathfinder",
        "pathfinder-figures",
        "contains",
        "Pathfinder figures is a primary trailhead under Pathfinder.",
        0.88,
        0.82
    ],
    [
        "pathfinder",
        "pathfinder-places",
        "contains",
        "Pathfinder places is a primary trailhead under Pathfinder.",
        0.88,
        0.82
    ],
    [
        "pathfinder",
        "pathfinder-events",
        "contains",
        "Pathfinder events is a primary trailhead under Pathfinder.",
        0.88,
        0.82
    ],
    [
        "pathfinder",
        "pathfinder-objects",
        "contains",
        "Pathfinder objects & artifacts is a primary trailhead under Pathfinder.",
        0.88,
        0.82
    ],
    [
        "pathfinder",
        "pathfinder-factions",
        "contains",
        "Pathfinder factions & groups is a primary trailhead under Pathfinder.",
        0.88,
        0.82
    ],
    [
        "pathfinder",
        "pathfinder-concepts",
        "contains",
        "Pathfinder concepts is a primary trailhead under Pathfinder.",
        0.88,
        0.82
    ],
    [
        "pathfinder",
        "pathfinder-eras",
        "contains",
        "Pathfinder eras is a primary trailhead under Pathfinder.",
        0.88,
        0.82
    ],
    [
        "pathfinder",
        "pathfinder-works",
        "contains",
        "Pathfinder works & media is a primary trailhead under Pathfinder.",
        0.88,
        0.82
    ],
    [
        "pathfinder",
        "pathfinder-symbols",
        "contains",
        "Pathfinder symbols is a primary trailhead under Pathfinder.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
