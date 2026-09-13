/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "flash-games-era",
        "name": "Flash games era",
        "type": "topic",
        "short_description": "Newgrounds, browser portals, and the plugin playground that raised internet kids.",
        "description": "Newgrounds, browser portals, and the plugin playground that raised internet kids. This Ton-o-Lore subject maps people, places, events, and ideas tied to Flash games era so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "flash-games-era-figures",
        "name": "Flash games era figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Flash games era.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Flash games era."
    },
    {
        "slug": "flash-games-era-world",
        "name": "Flash games era world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Flash games era.",
        "description": "Geography, institutions, and periodization that give Flash games era its encyclopedia shape."
    },
    {
        "slug": "flash-games-era-places",
        "name": "Flash games era places",
        "type": "place",
        "short_description": "Locations and geographies that frame Flash games era.",
        "description": "Places, regions, and built sites that give Flash games era its map — where events and figures concentrate."
    },
    {
        "slug": "flash-games-era-events",
        "name": "Flash games era events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Flash games era.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Flash games era timeline."
    },
    {
        "slug": "flash-games-era-objects",
        "name": "Flash games era objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Flash games era.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Flash games era."
    },
    {
        "slug": "flash-games-era-factions",
        "name": "Flash games era factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Flash games era.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Flash games era."
    },
    {
        "slug": "flash-games-era-concepts",
        "name": "Flash games era concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Flash games era.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Flash games era readable as a lore graph."
    },
    {
        "slug": "flash-games-era-eras",
        "name": "Flash games era eras",
        "type": "event",
        "short_description": "Periodization for Flash games era.",
        "description": "Named eras and phases that help readers track how Flash games era changes across time."
    },
    {
        "slug": "flash-games-era-works",
        "name": "Flash games era works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Flash games era.",
        "description": "Primary works and adaptations through which most audiences encounter Flash games era."
    },
    {
        "slug": "flash-games-era-symbols",
        "name": "Flash games era symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Flash games era.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Flash games era."
    },
    {
        "slug": "flash-games-era-controversies",
        "name": "Flash games era controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Flash games era.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Flash games era argumentative."
    },
    {
        "slug": "flash-games-era-sources",
        "name": "Flash games era sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Flash games era.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Flash games era."
    },
    {
        "slug": "flash-games-era-geography",
        "name": "Flash games era geography",
        "type": "place",
        "short_description": "Broader geographic framing for Flash games era.",
        "description": "Regions, routes, and spatial systems that situate Flash games era beyond single named places."
    },
    {
        "slug": "flash-games-era-legacy",
        "name": "Flash games era legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Flash games era.",
        "description": "How Flash games era continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "flash-games-era-practices",
        "name": "Flash games era practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Flash games era.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Flash games era."
    },
    {
        "slug": "flash-games-era-entry-1",
        "name": "Flash games era entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-2",
        "name": "Flash games era entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-3",
        "name": "Flash games era entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-4",
        "name": "Flash games era entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-5",
        "name": "Flash games era entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-6",
        "name": "Flash games era entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-7",
        "name": "Flash games era entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-8",
        "name": "Flash games era entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-9",
        "name": "Flash games era entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-10",
        "name": "Flash games era entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-11",
        "name": "Flash games era entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-12",
        "name": "Flash games era entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-13",
        "name": "Flash games era entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-14",
        "name": "Flash games era entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-15",
        "name": "Flash games era entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-16",
        "name": "Flash games era entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-17",
        "name": "Flash games era entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-18",
        "name": "Flash games era entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-19",
        "name": "Flash games era entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-20",
        "name": "Flash games era entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-21",
        "name": "Flash games era entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-22",
        "name": "Flash games era entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-23",
        "name": "Flash games era entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "flash-games-era-entry-24",
        "name": "Flash games era entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Flash games era.",
        "description": "A supporting encyclopedia entry in the Flash games era subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "flash-games-era",
        "flash-games-era-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "flash-games-era",
        "flash-games-era-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "flash-games-era",
        "flash-games-era-places",
        "contains",
        "Flash games era places is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-events",
        "contains",
        "Flash games era events is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-objects",
        "contains",
        "Flash games era objects & artifacts is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-factions",
        "contains",
        "Flash games era factions & groups is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-concepts",
        "contains",
        "Flash games era concepts is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-eras",
        "contains",
        "Flash games era eras is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-works",
        "contains",
        "Flash games era works & media is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-symbols",
        "contains",
        "Flash games era symbols is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-controversies",
        "contains",
        "Flash games era controversies is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-sources",
        "contains",
        "Flash games era sources is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-geography",
        "contains",
        "Flash games era geography is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-legacy",
        "contains",
        "Flash games era legacy is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-practices",
        "contains",
        "Flash games era practices is a primary trailhead under Flash games era.",
        0.88,
        0.82
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-1",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-2",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-3",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-4",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-5",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-6",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-7",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-8",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-9",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-10",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-11",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-12",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-13",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-14",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-15",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-16",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-17",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-18",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-19",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-20",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-21",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-22",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-23",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ],
    [
        "flash-games-era",
        "flash-games-era-entry-24",
        "contains",
        "Supporting entry under Flash games era.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
