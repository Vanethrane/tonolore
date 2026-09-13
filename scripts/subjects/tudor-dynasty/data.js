/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tudor-dynasty",
        "name": "Tudor dynasty",
        "type": "topic",
        "short_description": "Henry VIII to Elizabeth I — succession crises, reformation, and England’s most dramatized royals.",
        "description": "Henry VIII to Elizabeth I — succession crises, reformation, and England’s most dramatized royals. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tudor dynasty so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "tudor-dynasty-figures",
        "name": "Tudor dynasty figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tudor dynasty.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tudor dynasty."
    },
    {
        "slug": "tudor-dynasty-world",
        "name": "Tudor dynasty world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tudor dynasty.",
        "description": "Geography, institutions, and periodization that give Tudor dynasty its encyclopedia shape."
    },
    {
        "slug": "tudor-dynasty-places",
        "name": "Tudor dynasty places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tudor dynasty.",
        "description": "Places, regions, and built sites that give Tudor dynasty its map — where events and figures concentrate."
    },
    {
        "slug": "tudor-dynasty-events",
        "name": "Tudor dynasty events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tudor dynasty.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tudor dynasty timeline."
    },
    {
        "slug": "tudor-dynasty-objects",
        "name": "Tudor dynasty objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tudor dynasty.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tudor dynasty."
    },
    {
        "slug": "tudor-dynasty-factions",
        "name": "Tudor dynasty factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tudor dynasty.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tudor dynasty."
    },
    {
        "slug": "tudor-dynasty-concepts",
        "name": "Tudor dynasty concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tudor dynasty.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tudor dynasty readable as a lore graph."
    },
    {
        "slug": "tudor-dynasty-eras",
        "name": "Tudor dynasty eras",
        "type": "event",
        "short_description": "Periodization for Tudor dynasty.",
        "description": "Named eras and phases that help readers track how Tudor dynasty changes across time."
    },
    {
        "slug": "tudor-dynasty-works",
        "name": "Tudor dynasty works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tudor dynasty.",
        "description": "Primary works and adaptations through which most audiences encounter Tudor dynasty."
    },
    {
        "slug": "tudor-dynasty-symbols",
        "name": "Tudor dynasty symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tudor dynasty.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tudor dynasty."
    },
    {
        "slug": "tudor-dynasty-controversies",
        "name": "Tudor dynasty controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tudor dynasty.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tudor dynasty argumentative."
    },
    {
        "slug": "tudor-dynasty-sources",
        "name": "Tudor dynasty sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tudor dynasty.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tudor dynasty."
    },
    {
        "slug": "tudor-dynasty-geography",
        "name": "Tudor dynasty geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tudor dynasty.",
        "description": "Regions, routes, and spatial systems that situate Tudor dynasty beyond single named places."
    },
    {
        "slug": "tudor-dynasty-legacy",
        "name": "Tudor dynasty legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tudor dynasty.",
        "description": "How Tudor dynasty continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tudor-dynasty-practices",
        "name": "Tudor dynasty practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Tudor dynasty.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Tudor dynasty."
    },
    {
        "slug": "tudor-dynasty-entry-1",
        "name": "Tudor dynasty entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-2",
        "name": "Tudor dynasty entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-3",
        "name": "Tudor dynasty entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-4",
        "name": "Tudor dynasty entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-5",
        "name": "Tudor dynasty entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-6",
        "name": "Tudor dynasty entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-7",
        "name": "Tudor dynasty entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-8",
        "name": "Tudor dynasty entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-9",
        "name": "Tudor dynasty entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-10",
        "name": "Tudor dynasty entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-11",
        "name": "Tudor dynasty entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-12",
        "name": "Tudor dynasty entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-13",
        "name": "Tudor dynasty entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-14",
        "name": "Tudor dynasty entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-15",
        "name": "Tudor dynasty entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-16",
        "name": "Tudor dynasty entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-17",
        "name": "Tudor dynasty entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-18",
        "name": "Tudor dynasty entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-19",
        "name": "Tudor dynasty entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-20",
        "name": "Tudor dynasty entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-21",
        "name": "Tudor dynasty entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-22",
        "name": "Tudor dynasty entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-23",
        "name": "Tudor dynasty entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tudor-dynasty-entry-24",
        "name": "Tudor dynasty entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tudor dynasty.",
        "description": "A supporting encyclopedia entry in the Tudor dynasty subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tudor-dynasty",
        "tudor-dynasty-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-places",
        "contains",
        "Tudor dynasty places is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-events",
        "contains",
        "Tudor dynasty events is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-objects",
        "contains",
        "Tudor dynasty objects & artifacts is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-factions",
        "contains",
        "Tudor dynasty factions & groups is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-concepts",
        "contains",
        "Tudor dynasty concepts is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-eras",
        "contains",
        "Tudor dynasty eras is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-works",
        "contains",
        "Tudor dynasty works & media is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-symbols",
        "contains",
        "Tudor dynasty symbols is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-controversies",
        "contains",
        "Tudor dynasty controversies is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-sources",
        "contains",
        "Tudor dynasty sources is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-geography",
        "contains",
        "Tudor dynasty geography is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-legacy",
        "contains",
        "Tudor dynasty legacy is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-practices",
        "contains",
        "Tudor dynasty practices is a primary trailhead under Tudor dynasty.",
        0.88,
        0.82
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-1",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-2",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-3",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-4",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-5",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-6",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-7",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-8",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-9",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-10",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-11",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-12",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-13",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-14",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-15",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-16",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-17",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-18",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-19",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-20",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-21",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-22",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-23",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ],
    [
        "tudor-dynasty",
        "tudor-dynasty-entry-24",
        "contains",
        "Supporting entry under Tudor dynasty.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
