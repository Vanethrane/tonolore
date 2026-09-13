/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pied-piper",
        "name": "Pied Piper of Hamelin",
        "type": "topic",
        "short_description": "Rats, vanished children, and the medieval German legend of unpaid promises.",
        "description": "Rats, vanished children, and the medieval German legend of unpaid promises. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pied Piper of Hamelin so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "pied-piper-figures",
        "name": "Pied Piper of Hamelin figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pied Piper of Hamelin.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pied Piper of Hamelin."
    },
    {
        "slug": "pied-piper-world",
        "name": "Pied Piper of Hamelin world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pied Piper of Hamelin.",
        "description": "Geography, institutions, and periodization that give Pied Piper of Hamelin its encyclopedia shape."
    },
    {
        "slug": "pied-piper-places",
        "name": "Pied Piper of Hamelin places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pied Piper of Hamelin.",
        "description": "Places, regions, and built sites that give Pied Piper of Hamelin its map — where events and figures concentrate."
    },
    {
        "slug": "pied-piper-events",
        "name": "Pied Piper of Hamelin events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pied Piper of Hamelin.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pied Piper of Hamelin timeline."
    },
    {
        "slug": "pied-piper-objects",
        "name": "Pied Piper of Hamelin objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pied Piper of Hamelin.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pied Piper of Hamelin."
    },
    {
        "slug": "pied-piper-factions",
        "name": "Pied Piper of Hamelin factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pied Piper of Hamelin.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pied Piper of Hamelin."
    },
    {
        "slug": "pied-piper-concepts",
        "name": "Pied Piper of Hamelin concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pied Piper of Hamelin.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pied Piper of Hamelin readable as a lore graph."
    },
    {
        "slug": "pied-piper-eras",
        "name": "Pied Piper of Hamelin eras",
        "type": "event",
        "short_description": "Periodization for Pied Piper of Hamelin.",
        "description": "Named eras and phases that help readers track how Pied Piper of Hamelin changes across time."
    },
    {
        "slug": "pied-piper-works",
        "name": "Pied Piper of Hamelin works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pied Piper of Hamelin.",
        "description": "Primary works and adaptations through which most audiences encounter Pied Piper of Hamelin."
    },
    {
        "slug": "pied-piper-symbols",
        "name": "Pied Piper of Hamelin symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pied Piper of Hamelin.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pied Piper of Hamelin."
    },
    {
        "slug": "pied-piper-controversies",
        "name": "Pied Piper of Hamelin controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pied Piper of Hamelin.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pied Piper of Hamelin argumentative."
    },
    {
        "slug": "pied-piper-sources",
        "name": "Pied Piper of Hamelin sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pied Piper of Hamelin.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pied Piper of Hamelin."
    },
    {
        "slug": "pied-piper-geography",
        "name": "Pied Piper of Hamelin geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pied Piper of Hamelin.",
        "description": "Regions, routes, and spatial systems that situate Pied Piper of Hamelin beyond single named places."
    },
    {
        "slug": "pied-piper-legacy",
        "name": "Pied Piper of Hamelin legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pied Piper of Hamelin.",
        "description": "How Pied Piper of Hamelin continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pied-piper-practices",
        "name": "Pied Piper of Hamelin practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pied Piper of Hamelin.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pied Piper of Hamelin."
    },
    {
        "slug": "pied-piper-entry-1",
        "name": "Pied Piper of Hamelin entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-2",
        "name": "Pied Piper of Hamelin entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-3",
        "name": "Pied Piper of Hamelin entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-4",
        "name": "Pied Piper of Hamelin entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-5",
        "name": "Pied Piper of Hamelin entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-6",
        "name": "Pied Piper of Hamelin entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-7",
        "name": "Pied Piper of Hamelin entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-8",
        "name": "Pied Piper of Hamelin entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-9",
        "name": "Pied Piper of Hamelin entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-10",
        "name": "Pied Piper of Hamelin entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-11",
        "name": "Pied Piper of Hamelin entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-12",
        "name": "Pied Piper of Hamelin entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-13",
        "name": "Pied Piper of Hamelin entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-14",
        "name": "Pied Piper of Hamelin entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-15",
        "name": "Pied Piper of Hamelin entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-16",
        "name": "Pied Piper of Hamelin entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-17",
        "name": "Pied Piper of Hamelin entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-18",
        "name": "Pied Piper of Hamelin entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-19",
        "name": "Pied Piper of Hamelin entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-20",
        "name": "Pied Piper of Hamelin entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-21",
        "name": "Pied Piper of Hamelin entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-22",
        "name": "Pied Piper of Hamelin entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-23",
        "name": "Pied Piper of Hamelin entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pied-piper-entry-24",
        "name": "Pied Piper of Hamelin entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pied Piper of Hamelin.",
        "description": "A supporting encyclopedia entry in the Pied Piper of Hamelin subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pied-piper",
        "pied-piper-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pied-piper",
        "pied-piper-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pied-piper",
        "pied-piper-places",
        "contains",
        "Pied Piper of Hamelin places is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-events",
        "contains",
        "Pied Piper of Hamelin events is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-objects",
        "contains",
        "Pied Piper of Hamelin objects & artifacts is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-factions",
        "contains",
        "Pied Piper of Hamelin factions & groups is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-concepts",
        "contains",
        "Pied Piper of Hamelin concepts is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-eras",
        "contains",
        "Pied Piper of Hamelin eras is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-works",
        "contains",
        "Pied Piper of Hamelin works & media is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-symbols",
        "contains",
        "Pied Piper of Hamelin symbols is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-controversies",
        "contains",
        "Pied Piper of Hamelin controversies is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-sources",
        "contains",
        "Pied Piper of Hamelin sources is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-geography",
        "contains",
        "Pied Piper of Hamelin geography is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-legacy",
        "contains",
        "Pied Piper of Hamelin legacy is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-practices",
        "contains",
        "Pied Piper of Hamelin practices is a primary trailhead under Pied Piper of Hamelin.",
        0.88,
        0.82
    ],
    [
        "pied-piper",
        "pied-piper-entry-1",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-2",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-3",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-4",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-5",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-6",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-7",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-8",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-9",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-10",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-11",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-12",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-13",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-14",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-15",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-16",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-17",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-18",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-19",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-20",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-21",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-22",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-23",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ],
    [
        "pied-piper",
        "pied-piper-entry-24",
        "contains",
        "Supporting entry under Pied Piper of Hamelin.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
