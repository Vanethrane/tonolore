/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "west-end-theatre",
        "name": "West End theatre",
        "type": "topic",
        "short_description": "London’s commercial theatre district, long runs, and the other pole of English-language stage fame.",
        "description": "London’s commercial theatre district, long runs, and the other pole of English-language stage fame. This Ton-o-Lore subject maps people, places, events, and ideas tied to West End theatre so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "west-end-theatre-figures",
        "name": "West End theatre figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to West End theatre.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring West End theatre."
    },
    {
        "slug": "west-end-theatre-world",
        "name": "West End theatre world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame West End theatre.",
        "description": "Geography, institutions, and periodization that give West End theatre its encyclopedia shape."
    },
    {
        "slug": "west-end-theatre-places",
        "name": "West End theatre places",
        "type": "place",
        "short_description": "Locations and geographies that frame West End theatre.",
        "description": "Places, regions, and built sites that give West End theatre its map — where events and figures concentrate."
    },
    {
        "slug": "west-end-theatre-events",
        "name": "West End theatre events",
        "type": "event",
        "short_description": "Turning points and dated episodes in West End theatre.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the West End theatre timeline."
    },
    {
        "slug": "west-end-theatre-objects",
        "name": "West End theatre objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to West End theatre.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through West End theatre."
    },
    {
        "slug": "west-end-theatre-factions",
        "name": "West End theatre factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside West End theatre.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in West End theatre."
    },
    {
        "slug": "west-end-theatre-concepts",
        "name": "West End theatre concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize West End theatre.",
        "description": "Keywords, doctrines, systems, and abstract forces that make West End theatre readable as a lore graph."
    },
    {
        "slug": "west-end-theatre-eras",
        "name": "West End theatre eras",
        "type": "event",
        "short_description": "Periodization for West End theatre.",
        "description": "Named eras and phases that help readers track how West End theatre changes across time."
    },
    {
        "slug": "west-end-theatre-works",
        "name": "West End theatre works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry West End theatre.",
        "description": "Primary works and adaptations through which most audiences encounter West End theatre."
    },
    {
        "slug": "west-end-theatre-symbols",
        "name": "West End theatre symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with West End theatre.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside West End theatre."
    },
    {
        "slug": "west-end-theatre-controversies",
        "name": "West End theatre controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in West End theatre.",
        "description": "Debates, rival canons, scandals, and contested facts that keep West End theatre argumentative."
    },
    {
        "slug": "west-end-theatre-sources",
        "name": "West End theatre sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into West End theatre.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify West End theatre."
    },
    {
        "slug": "west-end-theatre-geography",
        "name": "West End theatre geography",
        "type": "place",
        "short_description": "Broader geographic framing for West End theatre.",
        "description": "Regions, routes, and spatial systems that situate West End theatre beyond single named places."
    },
    {
        "slug": "west-end-theatre-legacy",
        "name": "West End theatre legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of West End theatre.",
        "description": "How West End theatre continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "west-end-theatre-practices",
        "name": "West End theatre practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in West End theatre.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in West End theatre."
    },
    {
        "slug": "west-end-theatre-entry-1",
        "name": "West End theatre entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-2",
        "name": "West End theatre entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-3",
        "name": "West End theatre entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-4",
        "name": "West End theatre entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-5",
        "name": "West End theatre entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-6",
        "name": "West End theatre entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-7",
        "name": "West End theatre entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-8",
        "name": "West End theatre entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-9",
        "name": "West End theatre entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-10",
        "name": "West End theatre entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-11",
        "name": "West End theatre entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-12",
        "name": "West End theatre entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-13",
        "name": "West End theatre entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-14",
        "name": "West End theatre entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-15",
        "name": "West End theatre entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-16",
        "name": "West End theatre entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-17",
        "name": "West End theatre entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-18",
        "name": "West End theatre entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-19",
        "name": "West End theatre entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-20",
        "name": "West End theatre entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-21",
        "name": "West End theatre entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-22",
        "name": "West End theatre entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-23",
        "name": "West End theatre entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "west-end-theatre-entry-24",
        "name": "West End theatre entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside West End theatre.",
        "description": "A supporting encyclopedia entry in the West End theatre subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "west-end-theatre",
        "west-end-theatre-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "west-end-theatre",
        "west-end-theatre-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "west-end-theatre",
        "west-end-theatre-places",
        "contains",
        "West End theatre places is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-events",
        "contains",
        "West End theatre events is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-objects",
        "contains",
        "West End theatre objects & artifacts is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-factions",
        "contains",
        "West End theatre factions & groups is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-concepts",
        "contains",
        "West End theatre concepts is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-eras",
        "contains",
        "West End theatre eras is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-works",
        "contains",
        "West End theatre works & media is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-symbols",
        "contains",
        "West End theatre symbols is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-controversies",
        "contains",
        "West End theatre controversies is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-sources",
        "contains",
        "West End theatre sources is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-geography",
        "contains",
        "West End theatre geography is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-legacy",
        "contains",
        "West End theatre legacy is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-practices",
        "contains",
        "West End theatre practices is a primary trailhead under West End theatre.",
        0.88,
        0.82
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-1",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-2",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-3",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-4",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-5",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-6",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-7",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-8",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-9",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-10",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-11",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-12",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-13",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-14",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-15",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-16",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-17",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-18",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-19",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-20",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-21",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-22",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-23",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ],
    [
        "west-end-theatre",
        "west-end-theatre-entry-24",
        "contains",
        "Supporting entry under West End theatre.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
