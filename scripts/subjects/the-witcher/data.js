/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-witcher",
        "name": "The Witcher",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Sapkowski's dark fantasy of witchers, politics, and destiny on the Continent.",
        "description": "The Witcher is Andrzej Sapkowski's fantasy saga of Geralt of Rivia, Ciri, and Yennefer, expanded by CD Projekt RED's games and later screen adaptations across the Continent's kingdoms and monsters.",
        "aliases": []
    },
    {
        "slug": "andrzej-sapkowski",
        "name": "Andrzej Sapkowski",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of The Witcher saga.",
        "description": "Andrzej Sapkowski wrote the Witcher short stories and novels that introduced Geralt, Ciri, Yennefer, and the politics of the Continent.",
        "aliases": []
    },
    {
        "slug": "cd-projekt",
        "name": "CD Projekt",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Polish holding company behind The Witcher games.",
        "description": "CD Projekt is the Polish company whose RED studio adapted Sapkowski's Witcher world into acclaimed video games.",
        "aliases": []
    },
    {
        "slug": "cd-projekt-red",
        "name": "CD Projekt RED",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio that developed The Witcher games.",
        "description": "CD Projekt RED developed The Witcher, The Witcher 2, and The Witcher 3: Wild Hunt, defining the franchise for many players.",
        "aliases": []
    },
    {
        "slug": "witcher-saga",
        "name": "The Witcher saga (books)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Sapkowski's short stories and novels.",
        "description": "The Witcher saga includes short-story collections and the novels that follow Geralt, Ciri, and the Northern Wars.",
        "aliases": []
    },
    {
        "slug": "the-witcher-3",
        "name": "The Witcher 3: Wild Hunt",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Open-world RPG of Ciri and the Wild Hunt.",
        "description": "The Witcher 3: Wild Hunt is CD Projekt RED's open-world RPG in which Geralt searches for Ciri while the Wild Hunt closes in.",
        "aliases": []
    },
    {
        "slug": "the-witcher-netflix",
        "name": "The Witcher (Netflix series)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Live-action series adaptation.",
        "description": "The Netflix Witcher series adapts Sapkowski's characters and stories for television, centering Geralt, Ciri, and Yennefer.",
        "aliases": []
    },
    {
        "slug": "geralt-of-rivia",
        "name": "Geralt of Rivia",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Witcher known as the White Wolf.",
        "description": "Geralt of Rivia is a School of the Wolf witcher who hunts monsters for coin, bound by destiny to Ciri and entangled with Yennefer and the Continent's wars.",
        "aliases": []
    },
    {
        "slug": "ciri",
        "name": "Ciri",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Princess of Cintra; Child of Surprise; Elder Blood.",
        "description": "Cirilla Fiona Elen Riannon — Ciri — is the princess of Cintra whose Elder Blood and Law of Surprise bond to Geralt draw empires and the Wild Hunt.",
        "aliases": []
    },
    {
        "slug": "yennefer",
        "name": "Yennefer of Vengerberg",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Powerful sorceress bound to Geralt.",
        "description": "Yennefer of Vengerberg is a formidable sorceress whose fraught love with Geralt and protectiveness toward Ciri shape the saga.",
        "aliases": []
    },
    {
        "slug": "triss-merigold",
        "name": "Triss Merigold",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sorceress ally of Geralt and the Lodge.",
        "description": "Triss Merigold is a Northern sorceress close to Geralt, active in Temeria's politics and later among the Lodge of Sorceresses.",
        "aliases": []
    },
    {
        "slug": "dandelion",
        "name": "Dandelion",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bard and chronicler of Geralt's deeds.",
        "description": "Dandelion (Jaskier) is a poet and Geralt's longtime friend who spreads songs of the White Wolf across the Continent.",
        "aliases": []
    },
    {
        "slug": "vesemir",
        "name": "Vesemir",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Oldest witcher of Kaer Morhen.",
        "description": "Vesemir is the veteran mentor of the School of the Wolf who trains young witchers at Kaer Morhen and guides Geralt as a father figure.",
        "aliases": []
    },
    {
        "slug": "emhyr-var-emreis",
        "name": "Emhyr var Emreis",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Emperor of Nilfgaard; Ciri's father.",
        "description": "Emhyr var Emreis rules Nilfgaard and seeks Ciri for dynasty and prophecy, driving much of the Continent's war.",
        "aliases": []
    },
    {
        "slug": "eskel",
        "name": "Eskel",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Witcher of the School of the Wolf.",
        "description": "Eskel is a scarred School of the Wolf witcher raised alongside Geralt at Kaer Morhen.",
        "aliases": []
    },
    {
        "slug": "lambert",
        "name": "Lambert",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Cynical witcher of Kaer Morhen.",
        "description": "Lambert is a sharp-tongued School of the Wolf witcher who winters at Kaer Morhen with Geralt and Vesemir.",
        "aliases": []
    },
    {
        "slug": "regis",
        "name": "Emiel Regis",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Higher vampire companion of Geralt.",
        "description": "Emiel Regis Rohellec Terzieff-Godefroy is a higher vampire who joins Geralt's company with wit, medicine, and hidden power.",
        "aliases": []
    },
    {
        "slug": "philippa-eilhart",
        "name": "Philippa Eilhart",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sorceress leader in Redanian intrigue.",
        "description": "Philippa Eilhart is a shapeshifting sorceress central to Redania's politics and the Lodge of Sorceresses.",
        "aliases": []
    },
    {
        "slug": "avallach",
        "name": "Avallac'h",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Aen Elle elf tied to Ciri and the Hunt.",
        "description": "Avallac'h is an Aen Elle sage who guides and manipulates Ciri's path across worlds and against the Wild Hunt.",
        "aliases": []
    },
    {
        "slug": "gaunter-odimm",
        "name": "Gaunter O'Dimm",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mysterious entity of deals and debts.",
        "description": "Gaunter O'Dimm, also called Master Mirror, is a supernatural bargainer encountered in The Witcher 3's Hearts of Stone story.",
        "aliases": []
    },
    {
        "slug": "the-continent",
        "name": "The Continent",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Primary setting of The Witcher world.",
        "description": "The Continent is the main landmass of Sapkowski's world, home to Northern Kingdoms, Nilfgaard, and countless monsters.",
        "aliases": []
    },
    {
        "slug": "kaer-morhen",
        "name": "Kaer Morhen",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Keep of the School of the Wolf.",
        "description": "Kaer Morhen is the ruined mountain fortress where School of the Wolf witchers train and winter.",
        "aliases": []
    },
    {
        "slug": "nilfgaard",
        "name": "Nilfgaard",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Southern empire under Emhyr var Emreis.",
        "description": "Nilfgaard is the expansive southern empire that invades the North, seeking power and Ciri.",
        "aliases": []
    },
    {
        "slug": "redania",
        "name": "Redania",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Northern kingdom of spies and sorceresses.",
        "description": "Redania is a powerful Northern Kingdom known for intelligence networks, Philippa's influence, and rivalry with Nilfgaard.",
        "aliases": []
    },
    {
        "slug": "cintra",
        "name": "Cintra",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Ciri's homeland, overrun by Nilfgaard.",
        "description": "Cintra is Ciri's royal home, shattered by Nilfgaard's invasion and central to her claim and destiny.",
        "aliases": []
    },
    {
        "slug": "novigrad",
        "name": "Novigrad",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Free city of trade, crime, and faith.",
        "description": "Novigrad is a wealthy free city of merchants, underworld bosses, and religious zeal on the Continent's coasts.",
        "aliases": []
    },
    {
        "slug": "skellige",
        "name": "Skellige",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Island clans of warriors and jarls.",
        "description": "Skellige is an archipelago of clan warriors whose politics and battles intertwine with Ciri and the Northern Wars.",
        "aliases": []
    },
    {
        "slug": "school-of-the-wolf",
        "name": "School of the Wolf",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Witcher school based at Kaer Morhen.",
        "description": "The School of the Wolf trains mutant monster hunters at Kaer Morhen, including Geralt, Vesemir, Eskel, and Lambert.",
        "aliases": []
    },
    {
        "slug": "wild-hunt",
        "name": "Wild Hunt",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Spectral riders seeking Ciri.",
        "description": "The Wild Hunt is a spectral cavalcade of Aen Elle warriors who hunt Ciri across worlds for her Elder Blood.",
        "aliases": []
    },
    {
        "slug": "lodge-of-sorceresses",
        "name": "Lodge of Sorceresses",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Secret circle of powerful mages.",
        "description": "The Lodge of Sorceresses is a covert alliance of sorceresses, including Philippa and Triss, shaping politics after the wars.",
        "aliases": []
    },
    {
        "slug": "witchers",
        "name": "Witchers",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Mutated monster hunters for hire.",
        "description": "Witchers are professionally trained mutants who take contracts against beasts, walking a lonely path between humans and monsters.",
        "aliases": []
    },
    {
        "slug": "elder-blood",
        "name": "Elder Blood",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Ancient elven lineage carried by Ciri.",
        "description": "Elder Blood is the rare genetic legacy that grants Ciri world-walking power and makes her the prize of empires and the Wild Hunt.",
        "aliases": []
    },
    {
        "slug": "law-of-surprise",
        "name": "Law of Surprise",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Custom that binds Ciri to Geralt.",
        "description": "The Law of Surprise awards a savior whatever the rescued does not yet expect — binding Ciri to Geralt as his Child of Surprise.",
        "aliases": []
    },
    {
        "slug": "the-witcher-figures",
        "name": "The Witcher figures",
        "type": "topic",
        "short_description": "People and named forces central to The Witcher.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring The Witcher."
    },
    {
        "slug": "the-witcher-places",
        "name": "The Witcher places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Witcher.",
        "description": "Places, regions, and built sites that give The Witcher its map — where events and figures concentrate."
    },
    {
        "slug": "the-witcher-events",
        "name": "The Witcher events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Witcher.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Witcher timeline."
    },
    {
        "slug": "the-witcher-objects",
        "name": "The Witcher objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Witcher.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Witcher."
    },
    {
        "slug": "the-witcher-factions",
        "name": "The Witcher factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Witcher.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Witcher."
    },
    {
        "slug": "the-witcher-concepts",
        "name": "The Witcher concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Witcher.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Witcher readable as a lore graph."
    },
    {
        "slug": "the-witcher-eras",
        "name": "The Witcher eras",
        "type": "event",
        "short_description": "Periodization for The Witcher.",
        "description": "Named eras and phases that help readers track how The Witcher changes across time."
    }
];

const relationships = [
    [
        "andrzej-sapkowski",
        "the-witcher",
        "created",
        "Andrzej Sapkowski created The Witcher saga.",
        0.99,
        0.99
    ],
    [
        "andrzej-sapkowski",
        "witcher-saga",
        "created",
        "Sapkowski wrote the Witcher books.",
        0.99,
        0.98
    ],
    [
        "cd-projekt-red",
        "the-witcher-3",
        "produced",
        "CD Projekt RED developed The Witcher 3.",
        0.98,
        0.96
    ],
    [
        "cd-projekt",
        "cd-projekt-red",
        "contains",
        "CD Projekt RED is part of CD Projekt.",
        0.97,
        0.94
    ],
    [
        "witcher-saga",
        "the-witcher",
        "part_of",
        "The books are the foundation of The Witcher.",
        0.99,
        0.99
    ],
    [
        "the-witcher-3",
        "the-witcher",
        "part_of",
        "The Witcher 3 is a major Witcher work.",
        0.98,
        0.96
    ],
    [
        "the-witcher-netflix",
        "the-witcher",
        "part_of",
        "The Netflix series adapts The Witcher.",
        0.97,
        0.94
    ],
    [
        "witcher-saga",
        "the-witcher-3",
        "adapted_into",
        "The books inspired CD Projekt RED's games.",
        0.96,
        0.93
    ],
    [
        "witcher-saga",
        "the-witcher-netflix",
        "adapted_into",
        "The books were adapted for Netflix.",
        0.96,
        0.93
    ],
    [
        "geralt-of-rivia",
        "school-of-the-wolf",
        "member_of",
        "Geralt is a School of the Wolf witcher.",
        0.99,
        0.98
    ],
    [
        "vesemir",
        "school-of-the-wolf",
        "leads",
        "Vesemir is the elder of Kaer Morhen's wolves.",
        0.96,
        0.92
    ],
    [
        "school-of-the-wolf",
        "witchers",
        "part_of",
        "The School of the Wolf is a witcher tradition.",
        0.97,
        0.94
    ],
    [
        "kaer-morhen",
        "school-of-the-wolf",
        "located_in",
        "The School of the Wolf is based at Kaer Morhen.",
        0.98,
        0.96
    ],
    [
        "ciri",
        "elder-blood",
        "connected_to",
        "Ciri carries the Elder Blood.",
        0.99,
        0.98
    ],
    [
        "ciri",
        "law-of-surprise",
        "connected_to",
        "Ciri is Geralt's Child of Surprise.",
        0.98,
        0.97
    ],
    [
        "geralt-of-rivia",
        "ciri",
        "connected_to",
        "Destiny binds Geralt and Ciri.",
        0.99,
        0.98
    ],
    [
        "geralt-of-rivia",
        "yennefer",
        "connected_to",
        "Geralt and Yennefer share a turbulent bond.",
        0.98,
        0.96
    ],
    [
        "yennefer",
        "ciri",
        "supports",
        "Yennefer protects and mentors Ciri.",
        0.97,
        0.95
    ],
    [
        "dandelion",
        "geralt-of-rivia",
        "supports",
        "Dandelion is Geralt's loyal friend.",
        0.97,
        0.94
    ],
    [
        "triss-merigold",
        "geralt-of-rivia",
        "supports",
        "Triss aids Geralt through wars and politics.",
        0.96,
        0.93
    ],
    [
        "triss-merigold",
        "lodge-of-sorceresses",
        "member_of",
        "Triss joins the Lodge of Sorceresses.",
        0.95,
        0.91
    ],
    [
        "philippa-eilhart",
        "lodge-of-sorceresses",
        "leads",
        "Philippa is central to the Lodge.",
        0.96,
        0.93
    ],
    [
        "emhyr-var-emreis",
        "nilfgaard",
        "leads",
        "Emhyr rules the Nilfgaardian Empire.",
        0.99,
        0.98
    ],
    [
        "emhyr-var-emreis",
        "ciri",
        "seeks",
        "Emhyr seeks Ciri for throne and prophecy.",
        0.98,
        0.96
    ],
    [
        "wild-hunt",
        "ciri",
        "seeks",
        "The Wild Hunt hunts Ciri for Elder Blood.",
        0.99,
        0.98
    ],
    [
        "avallach",
        "ciri",
        "supports",
        "Avallac'h guides Ciri against the Hunt.",
        0.96,
        0.93
    ],
    [
        "avallach",
        "wild-hunt",
        "opposed_by",
        "Avallac'h works against the Wild Hunt's claim.",
        0.95,
        0.91
    ],
    [
        "ciri",
        "cintra",
        "connected_to",
        "Ciri is heir of Cintra.",
        0.98,
        0.96
    ],
    [
        "nilfgaard",
        "cintra",
        "opposed_by",
        "Nilfgaard conquers Cintra.",
        0.97,
        0.94
    ],
    [
        "kaer-morhen",
        "the-continent",
        "located_in",
        "Kaer Morhen stands on the Continent.",
        0.97,
        0.93
    ],
    [
        "novigrad",
        "the-continent",
        "located_in",
        "Novigrad lies on the Continent.",
        0.97,
        0.93
    ],
    [
        "skellige",
        "the-continent",
        "located_in",
        "Skellige borders the Continent's seas.",
        0.96,
        0.92
    ],
    [
        "philippa-eilhart",
        "redania",
        "located_in",
        "Philippa schemes within Redania.",
        0.95,
        0.9
    ],
    [
        "regis",
        "geralt-of-rivia",
        "supports",
        "Regis journeys with Geralt's company.",
        0.96,
        0.92
    ],
    [
        "gaunter-odimm",
        "the-witcher-3",
        "connected_to",
        "Gaunter O'Dimm appears in Witcher 3's Hearts of Stone.",
        0.95,
        0.9
    ],
    [
        "the-witcher",
        "the-witcher-figures",
        "contains",
        "The Witcher figures is a primary trailhead under The Witcher.",
        0.88,
        0.82
    ],
    [
        "the-witcher",
        "the-witcher-places",
        "contains",
        "The Witcher places is a primary trailhead under The Witcher.",
        0.88,
        0.82
    ],
    [
        "the-witcher",
        "the-witcher-events",
        "contains",
        "The Witcher events is a primary trailhead under The Witcher.",
        0.88,
        0.82
    ],
    [
        "the-witcher",
        "the-witcher-objects",
        "contains",
        "The Witcher objects & artifacts is a primary trailhead under The Witcher.",
        0.88,
        0.82
    ],
    [
        "the-witcher",
        "the-witcher-factions",
        "contains",
        "The Witcher factions & groups is a primary trailhead under The Witcher.",
        0.88,
        0.82
    ],
    [
        "the-witcher",
        "the-witcher-concepts",
        "contains",
        "The Witcher concepts is a primary trailhead under The Witcher.",
        0.88,
        0.82
    ],
    [
        "the-witcher",
        "the-witcher-eras",
        "contains",
        "The Witcher eras is a primary trailhead under The Witcher.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
