/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "jurassic-park",
        "name": "Jurassic Park",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Crichton's cloned dinosaurs and Spielberg's blockbuster park.",
        "description": "Jurassic Park is the franchise of cloned dinosaurs, beginning with Michael Crichton's novel and Steven Spielberg's film about InGen's park on Isla Nublar.",
        "aliases": []
    },
    {
        "slug": "michael-crichton",
        "name": "Michael Crichton",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Author of the Jurassic Park novels.",
        "description": "Michael Crichton wrote Jurassic Park and The Lost World, imagining InGen's genetic resurrection of dinosaurs and the chaos that follows.",
        "aliases": []
    },
    {
        "slug": "steven-spielberg",
        "name": "Steven Spielberg",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Director of the original Jurassic Park films.",
        "description": "Steven Spielberg directed Jurassic Park and The Lost World: Jurassic Park, defining the franchise's cinematic spectacle.",
        "aliases": []
    },
    {
        "slug": "universal-pictures",
        "name": "Universal Pictures",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio behind the Jurassic Park films.",
        "description": "Universal Pictures produces and distributes the Jurassic Park and Jurassic World films.",
        "aliases": []
    },
    {
        "slug": "jurassic-park-novel",
        "name": "Jurassic Park (novel)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Crichton's original techno-thriller novel.",
        "description": "The Jurassic Park novel follows InGen's dinosaur park on Isla Nublar as security fails and the animals take over.",
        "aliases": []
    },
    {
        "slug": "jurassic-park-film",
        "name": "Jurassic Park (1993 film)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Spielberg's landmark dinosaur adventure film.",
        "description": "The 1993 Jurassic Park film adapts Crichton's novel with groundbreaking effects, following Grant, Sattler, and Malcolm through the park's collapse.",
        "aliases": []
    },
    {
        "slug": "the-lost-world",
        "name": "The Lost World: Jurassic Park",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Sequel novel and film of Isla Sorna.",
        "description": "The Lost World shifts focus to Site B on Isla Sorna, where dinosaurs live without tourist infrastructure.",
        "aliases": []
    },
    {
        "slug": "jurassic-world",
        "name": "Jurassic World",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Reboot-era park film with Claire and Owen.",
        "description": "Jurassic World depicts a functioning dinosaur resort on Isla Nublar undone by the hybrid Indominus rex.",
        "aliases": []
    },
    {
        "slug": "jurassic-world-fallen-kingdom",
        "name": "Jurassic World: Fallen Kingdom",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Sequel of Nublar's eruption and mainland fallout.",
        "description": "Fallen Kingdom follows the rescue of dinosaurs from a volcanic Isla Nublar and the consequences of bringing them to the mainland.",
        "aliases": []
    },
    {
        "slug": "john-hammond",
        "name": "John Hammond",
        "type": "person",
        "evidence": "fiction",
        "short_description": "InGen founder who builds Jurassic Park.",
        "description": "John Hammond is the visionary founder of InGen who creates Jurassic Park, insisting the park can be controlled until it cannot.",
        "aliases": []
    },
    {
        "slug": "alan-grant",
        "name": "Dr. Alan Grant",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Paleontologist invited to endorse the park.",
        "description": "Dr. Alan Grant is a paleontologist drawn into Jurassic Park's crisis, confronting living dinosaurs he once only excavated.",
        "aliases": []
    },
    {
        "slug": "ellie-sattler",
        "name": "Dr. Ellie Sattler",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Paleobotanist and park consultant.",
        "description": "Dr. Ellie Sattler is a paleobotanist who joins the park tour and helps survivors navigate the island's dangers.",
        "aliases": []
    },
    {
        "slug": "ian-malcolm",
        "name": "Dr. Ian Malcolm",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Chaotician warning that life finds a way.",
        "description": "Dr. Ian Malcolm is a chaotician who predicts Jurassic Park's failure and becomes the franchise's wry Cassandra.",
        "aliases": []
    },
    {
        "slug": "robert-muldoon",
        "name": "Robert Muldoon",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Park game warden hunting raptors.",
        "description": "Robert Muldoon is Jurassic Park's seasoned game warden, wary of Velociraptors until the hunt turns.",
        "aliases": []
    },
    {
        "slug": "dennis-nedry",
        "name": "Dennis Nedry",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Saboteur who shuts down park security.",
        "description": "Dennis Nedry is the park programmer who disables security to steal embryos, triggering the park's collapse.",
        "aliases": []
    },
    {
        "slug": "claire-dearing",
        "name": "Claire Dearing",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Jurassic World operations manager turned activist.",
        "description": "Claire Dearing runs Jurassic World operations and later fights to protect dinosaurs after the resort falls.",
        "aliases": []
    },
    {
        "slug": "owen-grady",
        "name": "Owen Grady",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Raptor trainer and Jurassic World survivor.",
        "description": "Owen Grady trains Velociraptors for InGen and partners with Claire through Jurassic World's disasters.",
        "aliases": []
    },
    {
        "slug": "henry-wu",
        "name": "Dr. Henry Wu",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Chief geneticist behind InGen's dinosaurs.",
        "description": "Dr. Henry Wu is InGen's chief geneticist who engineers park dinosaurs and later hybrids like the Indominus rex.",
        "aliases": []
    },
    {
        "slug": "tyrannosaurus-rex",
        "name": "Tyrannosaurus rex",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Apex predator icon of the park.",
        "description": "The Tyrannosaurus rex is Jurassic Park's apex predator, from the classic breakout to later appearances across islands and films.",
        "aliases": []
    },
    {
        "slug": "velociraptor",
        "name": "Velociraptor",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Pack hunters that outthink fences.",
        "description": "Velociraptors are intelligent pack hunters central to the franchise's terror, from the kitchen sequence to Owen's trained pack.",
        "aliases": []
    },
    {
        "slug": "brachiosaurus",
        "name": "Brachiosaurus",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Towering sauropod of the first wonder.",
        "description": "The Brachiosaurus embodies the awe of Jurassic Park's first reveal as visitors see a living giant graze.",
        "aliases": []
    },
    {
        "slug": "indominus-rex",
        "name": "Indominus rex",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hybrid dinosaur that wrecks Jurassic World.",
        "description": "The Indominus rex is a genetically hybridized apex predator whose escape destroys Jurassic World's illusion of control.",
        "aliases": []
    },
    {
        "slug": "mosasaurus",
        "name": "Mosasaurus",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Marine reptile of the lagoon show.",
        "description": "The Mosasaurus is Jurassic World's lagoon spectacle, a massive marine hunter feeding on sharks for crowds.",
        "aliases": []
    },
    {
        "slug": "blue-raptor",
        "name": "Blue",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lead raptor of Owen's pack.",
        "description": "Blue is the alpha Velociraptor of Owen Grady's pack, surviving into later Jurassic World stories.",
        "aliases": []
    },
    {
        "slug": "isla-nublar",
        "name": "Isla Nublar",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Island home of Jurassic Park and Jurassic World.",
        "description": "Isla Nublar is the Central American island hosting Jurassic Park and later Jurassic World until disaster and eruption.",
        "aliases": []
    },
    {
        "slug": "isla-sorna",
        "name": "Isla Sorna",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Site B manufacturing island.",
        "description": "Isla Sorna is InGen's Site B, where dinosaurs were bred away from the tourist park and later roam wild.",
        "aliases": []
    },
    {
        "slug": "ingen",
        "name": "InGen",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "International Genetic Technologies.",
        "description": "InGen (International Genetic Technologies) clones dinosaurs for Jurassic Park under John Hammond's vision.",
        "aliases": []
    },
    {
        "slug": "masrani-global",
        "name": "Masrani Global Corporation",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Conglomerate that opens Jurassic World.",
        "description": "Masrani Global acquires InGen's legacy and opens Jurassic World as a corporate theme-park empire.",
        "aliases": []
    },
    {
        "slug": "control-room",
        "name": "Park control room",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Security hub of Jurassic Park.",
        "description": "The park control room monitors fences, power, and systems until Nedry's sabotage and cascading failures.",
        "aliases": []
    },
    {
        "slug": "visitor-center",
        "name": "Visitor Center",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Jurassic Park's main lodge and museum.",
        "description": "The Visitor Center introduces guests to InGen's cloning story and becomes a refuge during the first film's chaos.",
        "aliases": []
    },
    {
        "slug": "jurassic-park-figures",
        "name": "Jurassic Park figures",
        "type": "topic",
        "short_description": "People and named forces central to Jurassic Park.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Jurassic Park."
    },
    {
        "slug": "jurassic-park-places",
        "name": "Jurassic Park places",
        "type": "place",
        "short_description": "Locations and geographies that frame Jurassic Park.",
        "description": "Places, regions, and built sites that give Jurassic Park its map — where events and figures concentrate."
    },
    {
        "slug": "jurassic-park-events",
        "name": "Jurassic Park events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Jurassic Park.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Jurassic Park timeline."
    },
    {
        "slug": "jurassic-park-objects",
        "name": "Jurassic Park objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Jurassic Park.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Jurassic Park."
    },
    {
        "slug": "jurassic-park-factions",
        "name": "Jurassic Park factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Jurassic Park.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Jurassic Park."
    },
    {
        "slug": "jurassic-park-concepts",
        "name": "Jurassic Park concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Jurassic Park.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Jurassic Park readable as a lore graph."
    },
    {
        "slug": "jurassic-park-eras",
        "name": "Jurassic Park eras",
        "type": "event",
        "short_description": "Periodization for Jurassic Park.",
        "description": "Named eras and phases that help readers track how Jurassic Park changes across time."
    },
    {
        "slug": "jurassic-park-works",
        "name": "Jurassic Park works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Jurassic Park.",
        "description": "Primary works and adaptations through which most audiences encounter Jurassic Park."
    },
    {
        "slug": "jurassic-park-symbols",
        "name": "Jurassic Park symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Jurassic Park.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Jurassic Park."
    },
    {
        "slug": "jurassic-park-controversies",
        "name": "Jurassic Park controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Jurassic Park.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Jurassic Park argumentative."
    }
];

const relationships = [
    [
        "michael-crichton",
        "jurassic-park",
        "created",
        "Michael Crichton created Jurassic Park.",
        0.99,
        0.99
    ],
    [
        "michael-crichton",
        "jurassic-park-novel",
        "created",
        "Crichton wrote the Jurassic Park novel.",
        0.99,
        0.98
    ],
    [
        "steven-spielberg",
        "jurassic-park-film",
        "created",
        "Spielberg directed the 1993 Jurassic Park film.",
        0.99,
        0.98
    ],
    [
        "steven-spielberg",
        "the-lost-world",
        "created",
        "Spielberg directed The Lost World film.",
        0.96,
        0.92
    ],
    [
        "universal-pictures",
        "jurassic-park-film",
        "produced",
        "Universal released Jurassic Park.",
        0.97,
        0.94
    ],
    [
        "jurassic-park-novel",
        "jurassic-park",
        "part_of",
        "The novel begins the Jurassic Park franchise.",
        0.99,
        0.97
    ],
    [
        "jurassic-park-film",
        "jurassic-park",
        "part_of",
        "The 1993 film defines Jurassic Park.",
        0.99,
        0.97
    ],
    [
        "jurassic-park-novel",
        "jurassic-park-film",
        "adapted_into",
        "The novel was adapted into the 1993 film.",
        0.98,
        0.96
    ],
    [
        "the-lost-world",
        "jurassic-park",
        "part_of",
        "The Lost World continues Jurassic Park.",
        0.97,
        0.94
    ],
    [
        "jurassic-world",
        "jurassic-park",
        "part_of",
        "Jurassic World continues the franchise.",
        0.98,
        0.95
    ],
    [
        "jurassic-world-fallen-kingdom",
        "jurassic-world",
        "connected_to",
        "Fallen Kingdom sequels Jurassic World.",
        0.97,
        0.94
    ],
    [
        "john-hammond",
        "ingen",
        "leads",
        "Hammond founds and leads InGen's park vision.",
        0.98,
        0.96
    ],
    [
        "john-hammond",
        "jurassic-park-film",
        "involved",
        "Hammond hosts the park endorsement tour.",
        0.96,
        0.92
    ],
    [
        "alan-grant",
        "ellie-sattler",
        "supports",
        "Grant and Sattler work and survive together.",
        0.96,
        0.92
    ],
    [
        "ian-malcolm",
        "jurassic-park-film",
        "involved",
        "Malcolm warns that the park will fail.",
        0.97,
        0.94
    ],
    [
        "robert-muldoon",
        "velociraptor",
        "opposed_by",
        "Muldoon hunts and fears the raptors.",
        0.97,
        0.93
    ],
    [
        "dennis-nedry",
        "control-room",
        "involved",
        "Nedry sabotages park systems from within.",
        0.98,
        0.95
    ],
    [
        "claire-dearing",
        "jurassic-world",
        "involved",
        "Claire runs Jurassic World operations.",
        0.97,
        0.94
    ],
    [
        "owen-grady",
        "blue-raptor",
        "supports",
        "Owen trains and bonds with Blue.",
        0.98,
        0.95
    ],
    [
        "henry-wu",
        "indominus-rex",
        "created",
        "Wu engineers the Indominus rex.",
        0.98,
        0.96
    ],
    [
        "henry-wu",
        "ingen",
        "member_of",
        "Wu is InGen's chief geneticist.",
        0.97,
        0.94
    ],
    [
        "isla-nublar",
        "jurassic-park",
        "located_in",
        "Isla Nublar hosts the parks.",
        0.99,
        0.97
    ],
    [
        "isla-sorna",
        "the-lost-world",
        "located_in",
        "Isla Sorna is Site B in The Lost World.",
        0.98,
        0.95
    ],
    [
        "visitor-center",
        "isla-nublar",
        "located_in",
        "The Visitor Center stands on Isla Nublar.",
        0.97,
        0.93
    ],
    [
        "control-room",
        "isla-nublar",
        "located_in",
        "The control room is on Isla Nublar.",
        0.97,
        0.93
    ],
    [
        "tyrannosaurus-rex",
        "isla-nublar",
        "located_in",
        "The T. rex is the park's star predator.",
        0.97,
        0.94
    ],
    [
        "velociraptor",
        "isla-nublar",
        "located_in",
        "Raptors escape containment on Nublar.",
        0.97,
        0.94
    ],
    [
        "indominus-rex",
        "jurassic-world",
        "involved",
        "The Indominus destroys Jurassic World.",
        0.98,
        0.96
    ],
    [
        "mosasaurus",
        "jurassic-world",
        "involved",
        "The Mosasaurus headlines Jurassic World's lagoon.",
        0.96,
        0.92
    ],
    [
        "masrani-global",
        "jurassic-world",
        "produced",
        "Masrani opens Jurassic World.",
        0.97,
        0.94
    ],
    [
        "ingen",
        "masrani-global",
        "connected_to",
        "Masrani inherits InGen's dinosaur technology.",
        0.95,
        0.9
    ],
    [
        "jurassic-park",
        "jurassic-park-figures",
        "contains",
        "Jurassic Park figures is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ],
    [
        "jurassic-park",
        "jurassic-park-places",
        "contains",
        "Jurassic Park places is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ],
    [
        "jurassic-park",
        "jurassic-park-events",
        "contains",
        "Jurassic Park events is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ],
    [
        "jurassic-park",
        "jurassic-park-objects",
        "contains",
        "Jurassic Park objects & artifacts is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ],
    [
        "jurassic-park",
        "jurassic-park-factions",
        "contains",
        "Jurassic Park factions & groups is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ],
    [
        "jurassic-park",
        "jurassic-park-concepts",
        "contains",
        "Jurassic Park concepts is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ],
    [
        "jurassic-park",
        "jurassic-park-eras",
        "contains",
        "Jurassic Park eras is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ],
    [
        "jurassic-park",
        "jurassic-park-works",
        "contains",
        "Jurassic Park works & media is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ],
    [
        "jurassic-park",
        "jurassic-park-symbols",
        "contains",
        "Jurassic Park symbols is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ],
    [
        "jurassic-park",
        "jurassic-park-controversies",
        "contains",
        "Jurassic Park controversies is a primary trailhead under Jurassic Park.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
