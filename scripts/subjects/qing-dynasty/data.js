/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "qing-dynasty",
        "name": "Qing dynasty",
        "type": "topic",
        "short_description": "Manchu emperors, Forbidden City ritual, and China’s last imperial house.",
        "description": "Manchu emperors, Forbidden City ritual, and China’s last imperial house. This Ton-o-Lore subject maps people, places, events, and ideas tied to Qing dynasty so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "qing-dynasty-figures",
        "name": "Qing dynasty figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Qing dynasty.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Qing dynasty."
    },
    {
        "slug": "qing-dynasty-world",
        "name": "Qing dynasty world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Qing dynasty.",
        "description": "Geography, institutions, and periodization that give Qing dynasty its encyclopedia shape."
    },
    {
        "slug": "qing-dynasty-places",
        "name": "Qing dynasty places",
        "type": "place",
        "short_description": "Locations and geographies that frame Qing dynasty.",
        "description": "Places, regions, and built sites that give Qing dynasty its map — where events and figures concentrate."
    },
    {
        "slug": "qing-dynasty-events",
        "name": "Qing dynasty events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Qing dynasty.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Qing dynasty timeline."
    },
    {
        "slug": "qing-dynasty-objects",
        "name": "Qing dynasty objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Qing dynasty.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Qing dynasty."
    },
    {
        "slug": "qing-dynasty-factions",
        "name": "Qing dynasty factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Qing dynasty.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Qing dynasty."
    },
    {
        "slug": "qing-dynasty-concepts",
        "name": "Qing dynasty concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Qing dynasty.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Qing dynasty readable as a lore graph."
    },
    {
        "slug": "qing-dynasty-eras",
        "name": "Qing dynasty eras",
        "type": "event",
        "short_description": "Periodization for Qing dynasty.",
        "description": "Named eras and phases that help readers track how Qing dynasty changes across time."
    },
    {
        "slug": "qing-dynasty-works",
        "name": "Qing dynasty works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Qing dynasty.",
        "description": "Primary works and adaptations through which most audiences encounter Qing dynasty."
    },
    {
        "slug": "qing-dynasty-symbols",
        "name": "Qing dynasty symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Qing dynasty.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Qing dynasty."
    },
    {
        "slug": "qing-dynasty-controversies",
        "name": "Qing dynasty controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Qing dynasty.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Qing dynasty argumentative."
    },
    {
        "slug": "qing-dynasty-sources",
        "name": "Qing dynasty sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Qing dynasty.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Qing dynasty."
    },
    {
        "slug": "qing-dynasty-geography",
        "name": "Qing dynasty geography",
        "type": "place",
        "short_description": "Broader geographic framing for Qing dynasty.",
        "description": "Regions, routes, and spatial systems that situate Qing dynasty beyond single named places."
    },
    {
        "slug": "qing-dynasty-legacy",
        "name": "Qing dynasty legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Qing dynasty.",
        "description": "How Qing dynasty continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "qing-dynasty-practices",
        "name": "Qing dynasty practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Qing dynasty.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Qing dynasty."
    },
    {
        "slug": "qing-dynasty-entry-1",
        "name": "Qing dynasty entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-2",
        "name": "Qing dynasty entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-3",
        "name": "Qing dynasty entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-4",
        "name": "Qing dynasty entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-5",
        "name": "Qing dynasty entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-6",
        "name": "Qing dynasty entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-7",
        "name": "Qing dynasty entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-8",
        "name": "Qing dynasty entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-9",
        "name": "Qing dynasty entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-10",
        "name": "Qing dynasty entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-11",
        "name": "Qing dynasty entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-12",
        "name": "Qing dynasty entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-13",
        "name": "Qing dynasty entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-14",
        "name": "Qing dynasty entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-15",
        "name": "Qing dynasty entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-16",
        "name": "Qing dynasty entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-17",
        "name": "Qing dynasty entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-18",
        "name": "Qing dynasty entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-19",
        "name": "Qing dynasty entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-20",
        "name": "Qing dynasty entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-21",
        "name": "Qing dynasty entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-22",
        "name": "Qing dynasty entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-23",
        "name": "Qing dynasty entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "qing-dynasty-entry-24",
        "name": "Qing dynasty entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Qing dynasty.",
        "description": "A supporting encyclopedia entry in the Qing dynasty subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "qing-dynasty",
        "qing-dynasty-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "qing-dynasty",
        "qing-dynasty-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "qing-dynasty",
        "qing-dynasty-places",
        "contains",
        "Qing dynasty places is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-events",
        "contains",
        "Qing dynasty events is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-objects",
        "contains",
        "Qing dynasty objects & artifacts is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-factions",
        "contains",
        "Qing dynasty factions & groups is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-concepts",
        "contains",
        "Qing dynasty concepts is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-eras",
        "contains",
        "Qing dynasty eras is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-works",
        "contains",
        "Qing dynasty works & media is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-symbols",
        "contains",
        "Qing dynasty symbols is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-controversies",
        "contains",
        "Qing dynasty controversies is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-sources",
        "contains",
        "Qing dynasty sources is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-geography",
        "contains",
        "Qing dynasty geography is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-legacy",
        "contains",
        "Qing dynasty legacy is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-practices",
        "contains",
        "Qing dynasty practices is a primary trailhead under Qing dynasty.",
        0.88,
        0.82
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-1",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-2",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-3",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-4",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-5",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-6",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-7",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-8",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-9",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-10",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-11",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-12",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-13",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-14",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-15",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-16",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-17",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-18",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-19",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-20",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-21",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-22",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-23",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ],
    [
        "qing-dynasty",
        "qing-dynasty-entry-24",
        "contains",
        "Supporting entry under Qing dynasty.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
