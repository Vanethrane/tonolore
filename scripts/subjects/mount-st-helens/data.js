/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mount-st-helens",
        "name": "Mount St. Helens",
        "type": "topic",
        "short_description": "1980 lateral blast, ash plume, and the Cascade eruption that became American volcano lore.",
        "description": "1980 lateral blast, ash plume, and the Cascade eruption that became American volcano lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mount St. Helens so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "mount-st-helens-figures",
        "name": "Mount St. Helens figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mount St. Helens.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mount St. Helens."
    },
    {
        "slug": "mount-st-helens-world",
        "name": "Mount St. Helens world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mount St. Helens.",
        "description": "Geography, institutions, and periodization that give Mount St. Helens its encyclopedia shape."
    },
    {
        "slug": "mount-st-helens-places",
        "name": "Mount St. Helens places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mount St. Helens.",
        "description": "Places, regions, and built sites that give Mount St. Helens its map — where events and figures concentrate."
    },
    {
        "slug": "mount-st-helens-events",
        "name": "Mount St. Helens events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mount St. Helens.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mount St. Helens timeline."
    },
    {
        "slug": "mount-st-helens-objects",
        "name": "Mount St. Helens objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mount St. Helens.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mount St. Helens."
    },
    {
        "slug": "mount-st-helens-factions",
        "name": "Mount St. Helens factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mount St. Helens.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mount St. Helens."
    },
    {
        "slug": "mount-st-helens-concepts",
        "name": "Mount St. Helens concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mount St. Helens.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mount St. Helens readable as a lore graph."
    },
    {
        "slug": "mount-st-helens-eras",
        "name": "Mount St. Helens eras",
        "type": "event",
        "short_description": "Periodization for Mount St. Helens.",
        "description": "Named eras and phases that help readers track how Mount St. Helens changes across time."
    },
    {
        "slug": "mount-st-helens-works",
        "name": "Mount St. Helens works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mount St. Helens.",
        "description": "Primary works and adaptations through which most audiences encounter Mount St. Helens."
    },
    {
        "slug": "mount-st-helens-symbols",
        "name": "Mount St. Helens symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mount St. Helens.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mount St. Helens."
    },
    {
        "slug": "mount-st-helens-controversies",
        "name": "Mount St. Helens controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mount St. Helens.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mount St. Helens argumentative."
    },
    {
        "slug": "mount-st-helens-sources",
        "name": "Mount St. Helens sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mount St. Helens.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mount St. Helens."
    },
    {
        "slug": "mount-st-helens-geography",
        "name": "Mount St. Helens geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mount St. Helens.",
        "description": "Regions, routes, and spatial systems that situate Mount St. Helens beyond single named places."
    },
    {
        "slug": "mount-st-helens-legacy",
        "name": "Mount St. Helens legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mount St. Helens.",
        "description": "How Mount St. Helens continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mount-st-helens-practices",
        "name": "Mount St. Helens practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mount St. Helens.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mount St. Helens."
    },
    {
        "slug": "mount-st-helens-entry-1",
        "name": "Mount St. Helens entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-2",
        "name": "Mount St. Helens entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-3",
        "name": "Mount St. Helens entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-4",
        "name": "Mount St. Helens entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-5",
        "name": "Mount St. Helens entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-6",
        "name": "Mount St. Helens entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-7",
        "name": "Mount St. Helens entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-8",
        "name": "Mount St. Helens entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-9",
        "name": "Mount St. Helens entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-10",
        "name": "Mount St. Helens entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-11",
        "name": "Mount St. Helens entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-12",
        "name": "Mount St. Helens entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-13",
        "name": "Mount St. Helens entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-14",
        "name": "Mount St. Helens entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-15",
        "name": "Mount St. Helens entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-16",
        "name": "Mount St. Helens entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-17",
        "name": "Mount St. Helens entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-18",
        "name": "Mount St. Helens entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-19",
        "name": "Mount St. Helens entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-20",
        "name": "Mount St. Helens entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-21",
        "name": "Mount St. Helens entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-22",
        "name": "Mount St. Helens entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-23",
        "name": "Mount St. Helens entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mount-st-helens-entry-24",
        "name": "Mount St. Helens entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount St. Helens.",
        "description": "A supporting encyclopedia entry in the Mount St. Helens subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mount-st-helens",
        "mount-st-helens-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mount-st-helens",
        "mount-st-helens-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mount-st-helens",
        "mount-st-helens-places",
        "contains",
        "Mount St. Helens places is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-events",
        "contains",
        "Mount St. Helens events is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-objects",
        "contains",
        "Mount St. Helens objects & artifacts is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-factions",
        "contains",
        "Mount St. Helens factions & groups is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-concepts",
        "contains",
        "Mount St. Helens concepts is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-eras",
        "contains",
        "Mount St. Helens eras is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-works",
        "contains",
        "Mount St. Helens works & media is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-symbols",
        "contains",
        "Mount St. Helens symbols is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-controversies",
        "contains",
        "Mount St. Helens controversies is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-sources",
        "contains",
        "Mount St. Helens sources is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-geography",
        "contains",
        "Mount St. Helens geography is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-legacy",
        "contains",
        "Mount St. Helens legacy is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-practices",
        "contains",
        "Mount St. Helens practices is a primary trailhead under Mount St. Helens.",
        0.88,
        0.82
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-1",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-2",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-3",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-4",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-5",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-6",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-7",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-8",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-9",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-10",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-11",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-12",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-13",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-14",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-15",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-16",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-17",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-18",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-19",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-20",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-21",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-22",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-23",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ],
    [
        "mount-st-helens",
        "mount-st-helens-entry-24",
        "contains",
        "Supporting entry under Mount St. Helens.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
