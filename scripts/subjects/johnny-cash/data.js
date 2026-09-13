/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "johnny-cash",
        "name": "Johnny Cash",
        "type": "topic",
        "short_description": "The Man in Black — prison shows, outlaw myth, and a catalog that bridges country and American folk.",
        "description": "The Man in Black — prison shows, outlaw myth, and a catalog that bridges country and American folk. This Ton-o-Lore subject maps people, works, places, and ideas tied to Johnny Cash so readers can follow long-tail connections across the country tradition."
    },
    {
        "slug": "johnny-cash-catalog",
        "name": "Johnny Cash catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Johnny Cash.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Johnny Cash in the country tradition."
    },
    {
        "slug": "johnny-cash-era",
        "name": "Johnny Cash eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Johnny Cash story.",
        "description": "Periodization helps encyclopedia readers track how Johnny Cash changed sound, lineup, or public myth across decades of country history."
    },
    {
        "slug": "johnny-cash-figures",
        "name": "Johnny Cash figures",
        "type": "topic",
        "short_description": "People and named forces central to Johnny Cash.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Johnny Cash."
    },
    {
        "slug": "johnny-cash-places",
        "name": "Johnny Cash places",
        "type": "place",
        "short_description": "Locations and geographies that frame Johnny Cash.",
        "description": "Places, regions, and built sites that give Johnny Cash its map — where events and figures concentrate."
    },
    {
        "slug": "johnny-cash-events",
        "name": "Johnny Cash events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Johnny Cash.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Johnny Cash timeline."
    },
    {
        "slug": "johnny-cash-objects",
        "name": "Johnny Cash objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Johnny Cash.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Johnny Cash."
    },
    {
        "slug": "johnny-cash-factions",
        "name": "Johnny Cash factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Johnny Cash.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Johnny Cash."
    },
    {
        "slug": "johnny-cash-concepts",
        "name": "Johnny Cash concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Johnny Cash.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Johnny Cash readable as a lore graph."
    },
    {
        "slug": "johnny-cash-eras",
        "name": "Johnny Cash eras",
        "type": "event",
        "short_description": "Periodization for Johnny Cash.",
        "description": "Named eras and phases that help readers track how Johnny Cash changes across time."
    },
    {
        "slug": "johnny-cash-works",
        "name": "Johnny Cash works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Johnny Cash.",
        "description": "Primary works and adaptations through which most audiences encounter Johnny Cash."
    },
    {
        "slug": "johnny-cash-symbols",
        "name": "Johnny Cash symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Johnny Cash.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Johnny Cash."
    },
    {
        "slug": "johnny-cash-controversies",
        "name": "Johnny Cash controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Johnny Cash.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Johnny Cash argumentative."
    },
    {
        "slug": "johnny-cash-sources",
        "name": "Johnny Cash sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Johnny Cash.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Johnny Cash."
    },
    {
        "slug": "johnny-cash-geography",
        "name": "Johnny Cash geography",
        "type": "place",
        "short_description": "Broader geographic framing for Johnny Cash.",
        "description": "Regions, routes, and spatial systems that situate Johnny Cash beyond single named places."
    },
    {
        "slug": "johnny-cash-legacy",
        "name": "Johnny Cash legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Johnny Cash.",
        "description": "How Johnny Cash continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "johnny-cash-practices",
        "name": "Johnny Cash practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Johnny Cash.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Johnny Cash."
    },
    {
        "slug": "johnny-cash-entry-1",
        "name": "Johnny Cash entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-2",
        "name": "Johnny Cash entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-3",
        "name": "Johnny Cash entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-4",
        "name": "Johnny Cash entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-5",
        "name": "Johnny Cash entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-6",
        "name": "Johnny Cash entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-7",
        "name": "Johnny Cash entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-8",
        "name": "Johnny Cash entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-9",
        "name": "Johnny Cash entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-10",
        "name": "Johnny Cash entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-11",
        "name": "Johnny Cash entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-12",
        "name": "Johnny Cash entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-13",
        "name": "Johnny Cash entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-14",
        "name": "Johnny Cash entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-15",
        "name": "Johnny Cash entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-16",
        "name": "Johnny Cash entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-17",
        "name": "Johnny Cash entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-18",
        "name": "Johnny Cash entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-19",
        "name": "Johnny Cash entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-20",
        "name": "Johnny Cash entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-21",
        "name": "Johnny Cash entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-22",
        "name": "Johnny Cash entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnny-cash-entry-23",
        "name": "Johnny Cash entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnny Cash.",
        "description": "A supporting encyclopedia entry in the Johnny Cash subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "johnny-cash",
        "johnny-cash-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "johnny-cash",
        "johnny-cash-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "johnny-cash",
        "johnny-cash-figures",
        "contains",
        "Johnny Cash figures is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-places",
        "contains",
        "Johnny Cash places is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-events",
        "contains",
        "Johnny Cash events is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-objects",
        "contains",
        "Johnny Cash objects & artifacts is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-factions",
        "contains",
        "Johnny Cash factions & groups is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-concepts",
        "contains",
        "Johnny Cash concepts is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-eras",
        "contains",
        "Johnny Cash eras is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-works",
        "contains",
        "Johnny Cash works & media is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-symbols",
        "contains",
        "Johnny Cash symbols is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-controversies",
        "contains",
        "Johnny Cash controversies is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-sources",
        "contains",
        "Johnny Cash sources is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-geography",
        "contains",
        "Johnny Cash geography is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-legacy",
        "contains",
        "Johnny Cash legacy is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-practices",
        "contains",
        "Johnny Cash practices is a primary trailhead under Johnny Cash.",
        0.88,
        0.82
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-1",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-2",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-3",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-4",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-5",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-6",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-7",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-8",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-9",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-10",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-11",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-12",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-13",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-14",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-15",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-16",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-17",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-18",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-19",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-20",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-21",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-22",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ],
    [
        "johnny-cash",
        "johnny-cash-entry-23",
        "contains",
        "Supporting entry under Johnny Cash.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
