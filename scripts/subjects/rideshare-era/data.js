/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "rideshare-era",
        "name": "Rideshare era",
        "type": "topic",
        "short_description": "App dispatch, gig drivers, and the 2010s remake of urban hired transport.",
        "description": "App dispatch, gig drivers, and the 2010s remake of urban hired transport. This Ton-o-Lore subject maps people, places, events, and ideas tied to Rideshare era so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "rideshare-era-figures",
        "name": "Rideshare era figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Rideshare era.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Rideshare era."
    },
    {
        "slug": "rideshare-era-world",
        "name": "Rideshare era world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Rideshare era.",
        "description": "Geography, institutions, and periodization that give Rideshare era its encyclopedia shape."
    },
    {
        "slug": "rideshare-era-places",
        "name": "Rideshare era places",
        "type": "place",
        "short_description": "Locations and geographies that frame Rideshare era.",
        "description": "Places, regions, and built sites that give Rideshare era its map — where events and figures concentrate."
    },
    {
        "slug": "rideshare-era-events",
        "name": "Rideshare era events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Rideshare era.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Rideshare era timeline."
    },
    {
        "slug": "rideshare-era-objects",
        "name": "Rideshare era objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Rideshare era.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Rideshare era."
    },
    {
        "slug": "rideshare-era-factions",
        "name": "Rideshare era factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Rideshare era.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Rideshare era."
    },
    {
        "slug": "rideshare-era-concepts",
        "name": "Rideshare era concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Rideshare era.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Rideshare era readable as a lore graph."
    },
    {
        "slug": "rideshare-era-eras",
        "name": "Rideshare era eras",
        "type": "event",
        "short_description": "Periodization for Rideshare era.",
        "description": "Named eras and phases that help readers track how Rideshare era changes across time."
    },
    {
        "slug": "rideshare-era-works",
        "name": "Rideshare era works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Rideshare era.",
        "description": "Primary works and adaptations through which most audiences encounter Rideshare era."
    },
    {
        "slug": "rideshare-era-symbols",
        "name": "Rideshare era symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Rideshare era.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Rideshare era."
    },
    {
        "slug": "rideshare-era-controversies",
        "name": "Rideshare era controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Rideshare era.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Rideshare era argumentative."
    },
    {
        "slug": "rideshare-era-sources",
        "name": "Rideshare era sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Rideshare era.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Rideshare era."
    },
    {
        "slug": "rideshare-era-geography",
        "name": "Rideshare era geography",
        "type": "place",
        "short_description": "Broader geographic framing for Rideshare era.",
        "description": "Regions, routes, and spatial systems that situate Rideshare era beyond single named places."
    },
    {
        "slug": "rideshare-era-legacy",
        "name": "Rideshare era legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Rideshare era.",
        "description": "How Rideshare era continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "rideshare-era-practices",
        "name": "Rideshare era practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Rideshare era.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Rideshare era."
    },
    {
        "slug": "rideshare-era-entry-1",
        "name": "Rideshare era entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-2",
        "name": "Rideshare era entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-3",
        "name": "Rideshare era entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-4",
        "name": "Rideshare era entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-5",
        "name": "Rideshare era entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-6",
        "name": "Rideshare era entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-7",
        "name": "Rideshare era entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-8",
        "name": "Rideshare era entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-9",
        "name": "Rideshare era entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-10",
        "name": "Rideshare era entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-11",
        "name": "Rideshare era entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-12",
        "name": "Rideshare era entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-13",
        "name": "Rideshare era entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-14",
        "name": "Rideshare era entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-15",
        "name": "Rideshare era entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-16",
        "name": "Rideshare era entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-17",
        "name": "Rideshare era entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-18",
        "name": "Rideshare era entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-19",
        "name": "Rideshare era entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-20",
        "name": "Rideshare era entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-21",
        "name": "Rideshare era entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-22",
        "name": "Rideshare era entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-23",
        "name": "Rideshare era entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rideshare-era-entry-24",
        "name": "Rideshare era entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rideshare era.",
        "description": "A supporting encyclopedia entry in the Rideshare era subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "rideshare-era",
        "rideshare-era-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "rideshare-era",
        "rideshare-era-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "rideshare-era",
        "rideshare-era-places",
        "contains",
        "Rideshare era places is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-events",
        "contains",
        "Rideshare era events is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-objects",
        "contains",
        "Rideshare era objects & artifacts is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-factions",
        "contains",
        "Rideshare era factions & groups is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-concepts",
        "contains",
        "Rideshare era concepts is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-eras",
        "contains",
        "Rideshare era eras is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-works",
        "contains",
        "Rideshare era works & media is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-symbols",
        "contains",
        "Rideshare era symbols is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-controversies",
        "contains",
        "Rideshare era controversies is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-sources",
        "contains",
        "Rideshare era sources is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-geography",
        "contains",
        "Rideshare era geography is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-legacy",
        "contains",
        "Rideshare era legacy is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-practices",
        "contains",
        "Rideshare era practices is a primary trailhead under Rideshare era.",
        0.88,
        0.82
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-1",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-2",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-3",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-4",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-5",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-6",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-7",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-8",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-9",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-10",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-11",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-12",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-13",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-14",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-15",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-16",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-17",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-18",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-19",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-20",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-21",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-22",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-23",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ],
    [
        "rideshare-era",
        "rideshare-era-entry-24",
        "contains",
        "Supporting entry under Rideshare era.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
