/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "marvel",
        "name": "Marvel",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Marvel Comics universe of heroes, villains, and the MCU.",
        "description": "Marvel is the shared comic and screen universe built around Stan Lee, Jack Kirby, and Steve Ditko creations—the Avengers, X-Men, Fantastic Four, Guardians of the Galaxy, Spider-Man, and the Marvel Cinematic Universe.",
        "aliases": []
    },
    {
        "slug": "stan-lee",
        "name": "Stan Lee",
        "type": "person",
        "evidence": "documented",
        "short_description": "Co-creator of many Marvel icons.",
        "description": "Stan Lee co-created Spider-Man, the Fantastic Four, the X-Men, Iron Man, Thor, the Hulk, Doctor Strange, and countless other Marvel characters with artists including Jack Kirby and Steve Ditko.",
        "aliases": []
    },
    {
        "slug": "jack-kirby",
        "name": "Jack Kirby",
        "type": "person",
        "evidence": "documented",
        "short_description": "Artist-writer who co-created core Marvel mythos.",
        "description": "Jack Kirby co-created the Fantastic Four, the X-Men, the Avengers' founding cast, Black Panther, and much of Asgard and cosmic Marvel with Stan Lee.",
        "aliases": []
    },
    {
        "slug": "steve-ditko",
        "name": "Steve Ditko",
        "type": "person",
        "evidence": "documented",
        "short_description": "Co-creator of Spider-Man and Doctor Strange.",
        "description": "Steve Ditko co-created Spider-Man and Doctor Strange with Stan Lee, defining their early looks, supporting casts, and mystical tone.",
        "aliases": []
    },
    {
        "slug": "marvel-comics",
        "name": "Marvel Comics",
        "type": "organization",
        "evidence": "documented",
        "short_description": "Publisher of the Marvel Universe.",
        "description": "Marvel Comics publishes the shared universe of the Avengers, X-Men, Fantastic Four, Guardians of the Galaxy, and Spider-Man that feeds the MCU.",
        "aliases": []
    },
    {
        "slug": "mcu",
        "name": "Marvel Cinematic Universe",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Interconnected live-action Marvel film and TV franchise.",
        "description": "The Marvel Cinematic Universe (MCU) adapts Iron Man, Captain America, Thor, the Hulk, Black Panther, Doctor Strange, the Guardians of the Galaxy, and the Avengers into one shared screen saga.",
        "aliases": []
    },
    {
        "slug": "avengers",
        "name": "Avengers",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Earth's mightiest heroes team.",
        "description": "The Avengers unite Iron Man, Captain America, Thor, the Hulk, and later heroes against threats like Loki and Thanos, central to both comics and the MCU.",
        "aliases": []
    },
    {
        "slug": "x-men",
        "name": "X-Men",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Mutant team led from Xavier's school.",
        "description": "The X-Men are mutants who fight for coexistence, including Wolverine, while facing Magneto and anti-mutant prejudice across Marvel comics and adaptations.",
        "aliases": []
    },
    {
        "slug": "fantastic-four",
        "name": "Fantastic Four",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Marvel's first family of heroes.",
        "description": "The Fantastic Four—Reed, Sue, Johnny, and Ben—launch modern Marvel with cosmic powers and ties to New York City, the Silver Surfer, and cosmic threats.",
        "aliases": []
    },
    {
        "slug": "guardians-of-the-galaxy",
        "name": "Guardians of the Galaxy",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Cosmic misfit team of space heroes.",
        "description": "The Guardians of the Galaxy are a ragtag cosmic crew who clash with Thanos, Infinity Stones plots, and galactic empires in comics and the MCU.",
        "aliases": []
    },
    {
        "slug": "spider-man",
        "name": "Spider-Man",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Peter Parker's web-slinging Marvel hero.",
        "description": "Spider-Man is Peter Parker's alter ego, a New York City hero tied to Stan Lee and Steve Ditko's creation and often allied with the Avengers.",
        "aliases": []
    },
    {
        "slug": "iron-man",
        "name": "Iron Man",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Tony Stark in powered armor.",
        "description": "Iron Man is genius industrialist Tony Stark, a founding Avenger whose armor and MCU arc lead into Infinity Stones conflicts with Thanos.",
        "aliases": []
    },
    {
        "slug": "captain-america",
        "name": "Captain America",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Steve Rogers, super-soldier and Avenger.",
        "description": "Captain America is Steve Rogers, a World War II super-soldier who leads the Avengers and often partners with Iron Man and SHIELD.",
        "aliases": []
    },
    {
        "slug": "thor",
        "name": "Thor",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Asgardian god of thunder and Avenger.",
        "description": "Thor is the Asgardian prince who wields storm power, protects Midgard with the Avengers, and is bound to Loki and Asgard.",
        "aliases": []
    },
    {
        "slug": "hulk",
        "name": "Hulk",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bruce Banner's rage-powered alter ego.",
        "description": "The Hulk is Bruce Banner's gamma-spawned form, a founding Avenger whose strength reshapes battles from New York City to cosmic wars.",
        "aliases": []
    },
    {
        "slug": "doctor-strange",
        "name": "Doctor Strange",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sorcerer Supreme of Marvel Earth.",
        "description": "Doctor Strange is Stephen Strange, mystic guardian against dimensional threats, co-created by Stan Lee and Steve Ditko and key to MCU multiverse stories.",
        "aliases": []
    },
    {
        "slug": "black-panther",
        "name": "Black Panther",
        "type": "person",
        "evidence": "fiction",
        "short_description": "King and protector of Wakanda.",
        "description": "Black Panther is the mantle of Wakanda's ruler—most famously T'Challa—who defends the nation and joins the Avengers on the world stage.",
        "aliases": []
    },
    {
        "slug": "wolverine",
        "name": "Wolverine",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Adamantium-clawed X-Men mutant.",
        "description": "Wolverine is Logan, a regenerative mutant and X-Men mainstay whose claws and past define much of Marvel's mutant mythos.",
        "aliases": []
    },
    {
        "slug": "thanos",
        "name": "Thanos",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Titan obsessed with the Infinity Stones.",
        "description": "Thanos is the cosmic warlord who seeks the Infinity Stones to remake reality, opposing the Avengers and Guardians of the Galaxy.",
        "aliases": []
    },
    {
        "slug": "loki",
        "name": "Loki",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Asgardian trickster and Thor's brother.",
        "description": "Loki is the god of mischief from Asgard, rival and occasional ally to Thor, and a major Avengers antagonist in comics and the MCU.",
        "aliases": []
    },
    {
        "slug": "magneto",
        "name": "Magneto",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Master of magnetism; mutant ideologue.",
        "description": "Magneto is Erik Lehnsherr, a magnetic mutant whose war for mutant survival repeatedly pits him against the X-Men and Wolverine.",
        "aliases": []
    },
    {
        "slug": "nick-fury",
        "name": "Nick Fury",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Director of SHIELD and Avengers recruiter.",
        "description": "Nick Fury runs SHIELD, recruits Iron Man, Captain America, and others into the Avengers Initiative, and anchors Marvel's espionage side.",
        "aliases": []
    },
    {
        "slug": "deadpool",
        "name": "Deadpool",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Merc with a Mouth; regenerative antihero.",
        "description": "Deadpool is Wade Wilson, a fourth-wall-breaking mercenary tied to Marvel's mutant and X-Men adjacent stories.",
        "aliases": []
    },
    {
        "slug": "wakanda",
        "name": "Wakanda",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Technologically advanced African nation of the Black Panther.",
        "description": "Wakanda is the vibranium-rich kingdom protected by Black Panther, a center of Marvel geopolitics and MCU spectacle.",
        "aliases": []
    },
    {
        "slug": "asgard",
        "name": "Asgard",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Realm of Thor, Loki, and the Norse-inspired gods.",
        "description": "Asgard is the shining home of Thor and Loki, a cornerstone of Marvel's cosmic and mythic geography.",
        "aliases": []
    },
    {
        "slug": "new-york-city",
        "name": "New York City",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Hub for Spider-Man, Avengers, and Fantastic Four.",
        "description": "New York City is Marvel's primary street-level stage—home turf for Spider-Man, the Fantastic Four, and many Avengers battles.",
        "aliases": []
    },
    {
        "slug": "infinity-stones",
        "name": "Infinity Stones",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Six gems of near-absolute power.",
        "description": "The Infinity Stones are cosmic artifacts Thanos seeks; gathering them reshapes the Avengers, Guardians of the Galaxy, and MCU climax arcs.",
        "aliases": []
    },
    {
        "slug": "shield",
        "name": "S.H.I.E.L.D.",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Espionage agency behind the Avengers Initiative.",
        "description": "S.H.I.E.L.D. is the intelligence network led by Nick Fury that monitors enhanced threats and midwifes the Avengers.",
        "aliases": []
    },
    {
        "slug": "mutants",
        "name": "Mutants",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Homo superior; the X-Men's people.",
        "description": "Mutants are Marvel humans born with the X-gene—central to the X-Men, Wolverine, Magneto, and debates over coexistence.",
        "aliases": []
    },
    {
        "slug": "multiverse",
        "name": "Multiverse",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Branching realities across Marvel comics and MCU.",
        "description": "The Marvel Multiverse links alternate Earths, Spider-Man variants, Doctor Strange magic, and MCU crossover storytelling.",
        "aliases": []
    },
    {
        "slug": "marvel-figures",
        "name": "Marvel figures",
        "type": "topic",
        "short_description": "People and named forces central to Marvel.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Marvel."
    },
    {
        "slug": "marvel-places",
        "name": "Marvel places",
        "type": "place",
        "short_description": "Locations and geographies that frame Marvel.",
        "description": "Places, regions, and built sites that give Marvel its map — where events and figures concentrate."
    },
    {
        "slug": "marvel-events",
        "name": "Marvel events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Marvel.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Marvel timeline."
    },
    {
        "slug": "marvel-objects",
        "name": "Marvel objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Marvel.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Marvel."
    },
    {
        "slug": "marvel-factions",
        "name": "Marvel factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Marvel.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Marvel."
    },
    {
        "slug": "marvel-concepts",
        "name": "Marvel concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Marvel.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Marvel readable as a lore graph."
    },
    {
        "slug": "marvel-eras",
        "name": "Marvel eras",
        "type": "event",
        "short_description": "Periodization for Marvel.",
        "description": "Named eras and phases that help readers track how Marvel changes across time."
    },
    {
        "slug": "marvel-works",
        "name": "Marvel works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Marvel.",
        "description": "Primary works and adaptations through which most audiences encounter Marvel."
    },
    {
        "slug": "marvel-symbols",
        "name": "Marvel symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Marvel.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Marvel."
    },
    {
        "slug": "marvel-controversies",
        "name": "Marvel controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Marvel.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Marvel argumentative."
    }
];

const relationships = [
    [
        "stan-lee",
        "marvel",
        "created",
        "Stan Lee helped create the Marvel Universe.",
        0.99,
        0.99
    ],
    [
        "jack-kirby",
        "marvel",
        "created",
        "Jack Kirby co-created core Marvel mythos.",
        0.99,
        0.98
    ],
    [
        "steve-ditko",
        "spider-man",
        "created",
        "Steve Ditko co-created Spider-Man.",
        0.99,
        0.98
    ],
    [
        "steve-ditko",
        "doctor-strange",
        "created",
        "Steve Ditko co-created Doctor Strange.",
        0.98,
        0.96
    ],
    [
        "stan-lee",
        "spider-man",
        "created",
        "Stan Lee co-created Spider-Man.",
        0.99,
        0.98
    ],
    [
        "marvel-comics",
        "marvel",
        "produced",
        "Marvel Comics publishes the Marvel Universe.",
        0.99,
        0.97
    ],
    [
        "mcu",
        "marvel",
        "part_of",
        "The MCU adapts the Marvel Universe.",
        0.99,
        0.98
    ],
    [
        "avengers",
        "marvel",
        "part_of",
        "The Avengers are central to Marvel.",
        0.99,
        0.97
    ],
    [
        "x-men",
        "marvel",
        "part_of",
        "The X-Men are central to Marvel.",
        0.98,
        0.96
    ],
    [
        "fantastic-four",
        "marvel",
        "part_of",
        "The Fantastic Four launched modern Marvel.",
        0.98,
        0.96
    ],
    [
        "guardians-of-the-galaxy",
        "marvel",
        "part_of",
        "The Guardians are Marvel's cosmic team.",
        0.97,
        0.94
    ],
    [
        "iron-man",
        "avengers",
        "member_of",
        "Iron Man is a founding Avenger.",
        0.99,
        0.97
    ],
    [
        "captain-america",
        "avengers",
        "member_of",
        "Captain America leads and serves the Avengers.",
        0.99,
        0.97
    ],
    [
        "thor",
        "avengers",
        "member_of",
        "Thor fights with the Avengers.",
        0.98,
        0.96
    ],
    [
        "hulk",
        "avengers",
        "member_of",
        "The Hulk is a founding Avenger.",
        0.98,
        0.96
    ],
    [
        "black-panther",
        "avengers",
        "member_of",
        "Black Panther allies with the Avengers.",
        0.96,
        0.92
    ],
    [
        "spider-man",
        "avengers",
        "member_of",
        "Spider-Man has served with the Avengers.",
        0.95,
        0.9
    ],
    [
        "wolverine",
        "x-men",
        "member_of",
        "Wolverine is an X-Men mainstay.",
        0.99,
        0.97
    ],
    [
        "magneto",
        "mutants",
        "connected_to",
        "Magneto champions mutant survival.",
        0.98,
        0.95
    ],
    [
        "x-men",
        "mutants",
        "connected_to",
        "The X-Men defend mutantkind.",
        0.99,
        0.97
    ],
    [
        "black-panther",
        "wakanda",
        "leads",
        "Black Panther rules and protects Wakanda.",
        0.99,
        0.97
    ],
    [
        "thor",
        "asgard",
        "located_in",
        "Thor is prince of Asgard.",
        0.98,
        0.96
    ],
    [
        "loki",
        "asgard",
        "located_in",
        "Loki is of Asgard.",
        0.98,
        0.95
    ],
    [
        "loki",
        "thor",
        "opposed_by",
        "Loki and Thor are rival brothers.",
        0.97,
        0.94
    ],
    [
        "spider-man",
        "new-york-city",
        "located_in",
        "Spider-Man protects New York City.",
        0.98,
        0.95
    ],
    [
        "fantastic-four",
        "new-york-city",
        "located_in",
        "The Fantastic Four are based in New York City.",
        0.97,
        0.93
    ],
    [
        "thanos",
        "infinity-stones",
        "uses",
        "Thanos seeks the Infinity Stones.",
        0.99,
        0.98
    ],
    [
        "thanos",
        "avengers",
        "opposed_by",
        "Thanos wars against the Avengers.",
        0.99,
        0.97
    ],
    [
        "nick-fury",
        "shield",
        "leads",
        "Nick Fury directs S.H.I.E.L.D.",
        0.99,
        0.97
    ],
    [
        "shield",
        "avengers",
        "supports",
        "S.H.I.E.L.D. midwifes the Avengers.",
        0.97,
        0.94
    ],
    [
        "doctor-strange",
        "multiverse",
        "connected_to",
        "Doctor Strange guards multiversal threats.",
        0.96,
        0.92
    ],
    [
        "marvel",
        "marvel-figures",
        "contains",
        "Marvel figures is a primary trailhead under Marvel.",
        0.88,
        0.82
    ],
    [
        "marvel",
        "marvel-places",
        "contains",
        "Marvel places is a primary trailhead under Marvel.",
        0.88,
        0.82
    ],
    [
        "marvel",
        "marvel-events",
        "contains",
        "Marvel events is a primary trailhead under Marvel.",
        0.88,
        0.82
    ],
    [
        "marvel",
        "marvel-objects",
        "contains",
        "Marvel objects & artifacts is a primary trailhead under Marvel.",
        0.88,
        0.82
    ],
    [
        "marvel",
        "marvel-factions",
        "contains",
        "Marvel factions & groups is a primary trailhead under Marvel.",
        0.88,
        0.82
    ],
    [
        "marvel",
        "marvel-concepts",
        "contains",
        "Marvel concepts is a primary trailhead under Marvel.",
        0.88,
        0.82
    ],
    [
        "marvel",
        "marvel-eras",
        "contains",
        "Marvel eras is a primary trailhead under Marvel.",
        0.88,
        0.82
    ],
    [
        "marvel",
        "marvel-works",
        "contains",
        "Marvel works & media is a primary trailhead under Marvel.",
        0.88,
        0.82
    ],
    [
        "marvel",
        "marvel-symbols",
        "contains",
        "Marvel symbols is a primary trailhead under Marvel.",
        0.88,
        0.82
    ],
    [
        "marvel",
        "marvel-controversies",
        "contains",
        "Marvel controversies is a primary trailhead under Marvel.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
