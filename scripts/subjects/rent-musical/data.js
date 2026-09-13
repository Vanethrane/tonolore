/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "rent-musical",
        "name": "Rent",
        "type": "topic",
        "short_description": "East Village bohemians, rock score, and the 1990s AIDS-era musical that redefined Broadway youth.",
        "description": "East Village bohemians, rock score, and the 1990s AIDS-era musical that redefined Broadway youth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Rent so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "rent-musical-figures",
        "name": "Rent figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Rent.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Rent."
    },
    {
        "slug": "rent-musical-world",
        "name": "Rent world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Rent.",
        "description": "Geography, institutions, and periodization that give Rent its encyclopedia shape."
    },
    {
        "slug": "rent-musical-places",
        "name": "Rent places",
        "type": "place",
        "short_description": "Locations and geographies that frame Rent.",
        "description": "Places, regions, and built sites that give Rent its map — where events and figures concentrate."
    },
    {
        "slug": "rent-musical-events",
        "name": "Rent events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Rent.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Rent timeline."
    },
    {
        "slug": "rent-musical-objects",
        "name": "Rent objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Rent.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Rent."
    },
    {
        "slug": "rent-musical-factions",
        "name": "Rent factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Rent.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Rent."
    },
    {
        "slug": "rent-musical-concepts",
        "name": "Rent concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Rent.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Rent readable as a lore graph."
    },
    {
        "slug": "rent-musical-eras",
        "name": "Rent eras",
        "type": "event",
        "short_description": "Periodization for Rent.",
        "description": "Named eras and phases that help readers track how Rent changes across time."
    },
    {
        "slug": "rent-musical-works",
        "name": "Rent works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Rent.",
        "description": "Primary works and adaptations through which most audiences encounter Rent."
    },
    {
        "slug": "rent-musical-symbols",
        "name": "Rent symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Rent.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Rent."
    },
    {
        "slug": "rent-musical-controversies",
        "name": "Rent controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Rent.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Rent argumentative."
    },
    {
        "slug": "rent-musical-sources",
        "name": "Rent sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Rent.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Rent."
    },
    {
        "slug": "rent-musical-geography",
        "name": "Rent geography",
        "type": "place",
        "short_description": "Broader geographic framing for Rent.",
        "description": "Regions, routes, and spatial systems that situate Rent beyond single named places."
    },
    {
        "slug": "rent-musical-legacy",
        "name": "Rent legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Rent.",
        "description": "How Rent continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "rent-musical-practices",
        "name": "Rent practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Rent.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Rent."
    },
    {
        "slug": "rent-musical-entry-1",
        "name": "Rent entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-2",
        "name": "Rent entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-3",
        "name": "Rent entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-4",
        "name": "Rent entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-5",
        "name": "Rent entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-6",
        "name": "Rent entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-7",
        "name": "Rent entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-8",
        "name": "Rent entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-9",
        "name": "Rent entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-10",
        "name": "Rent entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-11",
        "name": "Rent entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-12",
        "name": "Rent entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-13",
        "name": "Rent entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-14",
        "name": "Rent entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-15",
        "name": "Rent entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-16",
        "name": "Rent entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-17",
        "name": "Rent entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-18",
        "name": "Rent entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-19",
        "name": "Rent entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-20",
        "name": "Rent entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-21",
        "name": "Rent entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-22",
        "name": "Rent entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-23",
        "name": "Rent entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rent-musical-entry-24",
        "name": "Rent entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rent.",
        "description": "A supporting encyclopedia entry in the Rent subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "rent-musical",
        "rent-musical-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "rent-musical",
        "rent-musical-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "rent-musical",
        "rent-musical-places",
        "contains",
        "Rent places is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-events",
        "contains",
        "Rent events is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-objects",
        "contains",
        "Rent objects & artifacts is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-factions",
        "contains",
        "Rent factions & groups is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-concepts",
        "contains",
        "Rent concepts is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-eras",
        "contains",
        "Rent eras is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-works",
        "contains",
        "Rent works & media is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-symbols",
        "contains",
        "Rent symbols is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-controversies",
        "contains",
        "Rent controversies is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-sources",
        "contains",
        "Rent sources is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-geography",
        "contains",
        "Rent geography is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-legacy",
        "contains",
        "Rent legacy is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-practices",
        "contains",
        "Rent practices is a primary trailhead under Rent.",
        0.88,
        0.82
    ],
    [
        "rent-musical",
        "rent-musical-entry-1",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-2",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-3",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-4",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-5",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-6",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-7",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-8",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-9",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-10",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-11",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-12",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-13",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-14",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-15",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-16",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-17",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-18",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-19",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-20",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-21",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-22",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-23",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ],
    [
        "rent-musical",
        "rent-musical-entry-24",
        "contains",
        "Supporting entry under Rent.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
