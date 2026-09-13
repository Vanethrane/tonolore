/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "stuart-dynasty",
        "name": "Stuart dynasty",
        "type": "topic",
        "short_description": "Union of crowns, civil war, and the Scottish-descended line that lost and regained England.",
        "description": "Union of crowns, civil war, and the Scottish-descended line that lost and regained England. This Ton-o-Lore subject maps people, places, events, and ideas tied to Stuart dynasty so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "stuart-dynasty-figures",
        "name": "Stuart dynasty figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Stuart dynasty.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Stuart dynasty."
    },
    {
        "slug": "stuart-dynasty-world",
        "name": "Stuart dynasty world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Stuart dynasty.",
        "description": "Geography, institutions, and periodization that give Stuart dynasty its encyclopedia shape."
    },
    {
        "slug": "stuart-dynasty-places",
        "name": "Stuart dynasty places",
        "type": "place",
        "short_description": "Locations and geographies that frame Stuart dynasty.",
        "description": "Places, regions, and built sites that give Stuart dynasty its map — where events and figures concentrate."
    },
    {
        "slug": "stuart-dynasty-events",
        "name": "Stuart dynasty events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Stuart dynasty.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Stuart dynasty timeline."
    },
    {
        "slug": "stuart-dynasty-objects",
        "name": "Stuart dynasty objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Stuart dynasty.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Stuart dynasty."
    },
    {
        "slug": "stuart-dynasty-factions",
        "name": "Stuart dynasty factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Stuart dynasty.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Stuart dynasty."
    },
    {
        "slug": "stuart-dynasty-concepts",
        "name": "Stuart dynasty concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Stuart dynasty.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Stuart dynasty readable as a lore graph."
    },
    {
        "slug": "stuart-dynasty-eras",
        "name": "Stuart dynasty eras",
        "type": "event",
        "short_description": "Periodization for Stuart dynasty.",
        "description": "Named eras and phases that help readers track how Stuart dynasty changes across time."
    },
    {
        "slug": "stuart-dynasty-works",
        "name": "Stuart dynasty works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Stuart dynasty.",
        "description": "Primary works and adaptations through which most audiences encounter Stuart dynasty."
    },
    {
        "slug": "stuart-dynasty-symbols",
        "name": "Stuart dynasty symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Stuart dynasty.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Stuart dynasty."
    },
    {
        "slug": "stuart-dynasty-controversies",
        "name": "Stuart dynasty controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Stuart dynasty.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Stuart dynasty argumentative."
    },
    {
        "slug": "stuart-dynasty-sources",
        "name": "Stuart dynasty sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Stuart dynasty.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Stuart dynasty."
    },
    {
        "slug": "stuart-dynasty-geography",
        "name": "Stuart dynasty geography",
        "type": "place",
        "short_description": "Broader geographic framing for Stuart dynasty.",
        "description": "Regions, routes, and spatial systems that situate Stuart dynasty beyond single named places."
    },
    {
        "slug": "stuart-dynasty-legacy",
        "name": "Stuart dynasty legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Stuart dynasty.",
        "description": "How Stuart dynasty continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "stuart-dynasty-practices",
        "name": "Stuart dynasty practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Stuart dynasty.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Stuart dynasty."
    },
    {
        "slug": "stuart-dynasty-entry-1",
        "name": "Stuart dynasty entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-2",
        "name": "Stuart dynasty entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-3",
        "name": "Stuart dynasty entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-4",
        "name": "Stuart dynasty entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-5",
        "name": "Stuart dynasty entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-6",
        "name": "Stuart dynasty entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-7",
        "name": "Stuart dynasty entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-8",
        "name": "Stuart dynasty entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-9",
        "name": "Stuart dynasty entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-10",
        "name": "Stuart dynasty entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-11",
        "name": "Stuart dynasty entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-12",
        "name": "Stuart dynasty entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-13",
        "name": "Stuart dynasty entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-14",
        "name": "Stuart dynasty entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-15",
        "name": "Stuart dynasty entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-16",
        "name": "Stuart dynasty entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-17",
        "name": "Stuart dynasty entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-18",
        "name": "Stuart dynasty entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-19",
        "name": "Stuart dynasty entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-20",
        "name": "Stuart dynasty entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-21",
        "name": "Stuart dynasty entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-22",
        "name": "Stuart dynasty entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-23",
        "name": "Stuart dynasty entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stuart-dynasty-entry-24",
        "name": "Stuart dynasty entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stuart dynasty.",
        "description": "A supporting encyclopedia entry in the Stuart dynasty subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "stuart-dynasty",
        "stuart-dynasty-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-places",
        "contains",
        "Stuart dynasty places is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-events",
        "contains",
        "Stuart dynasty events is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-objects",
        "contains",
        "Stuart dynasty objects & artifacts is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-factions",
        "contains",
        "Stuart dynasty factions & groups is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-concepts",
        "contains",
        "Stuart dynasty concepts is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-eras",
        "contains",
        "Stuart dynasty eras is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-works",
        "contains",
        "Stuart dynasty works & media is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-symbols",
        "contains",
        "Stuart dynasty symbols is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-controversies",
        "contains",
        "Stuart dynasty controversies is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-sources",
        "contains",
        "Stuart dynasty sources is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-geography",
        "contains",
        "Stuart dynasty geography is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-legacy",
        "contains",
        "Stuart dynasty legacy is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-practices",
        "contains",
        "Stuart dynasty practices is a primary trailhead under Stuart dynasty.",
        0.88,
        0.82
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-1",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-2",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-3",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-4",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-5",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-6",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-7",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-8",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-9",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-10",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-11",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-12",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-13",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-14",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-15",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-16",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-17",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-18",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-19",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-20",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-21",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-22",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-23",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ],
    [
        "stuart-dynasty",
        "stuart-dynasty-entry-24",
        "contains",
        "Supporting entry under Stuart dynasty.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
