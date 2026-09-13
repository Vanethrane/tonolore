/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "marvel-cinematic-universe",
        "name": "Marvel Cinematic Universe",
        "type": "topic",
        "short_description": "Phases, Infinity Saga, and the interconnected blockbuster experiment that remade Hollywood.",
        "description": "Phases, Infinity Saga, and the interconnected blockbuster experiment that remade Hollywood. This Ton-o-Lore subject maps people, places, events, and ideas tied to Marvel Cinematic Universe so readers can follow long-tail connections across movies."
    },
    {
        "slug": "marvel-cinematic-universe-figures",
        "name": "Marvel Cinematic Universe figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Marvel Cinematic Universe.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Marvel Cinematic Universe."
    },
    {
        "slug": "marvel-cinematic-universe-world",
        "name": "Marvel Cinematic Universe world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Marvel Cinematic Universe.",
        "description": "Geography, institutions, and periodization that give Marvel Cinematic Universe its encyclopedia shape."
    },
    {
        "slug": "marvel-cinematic-universe-places",
        "name": "Marvel Cinematic Universe places",
        "type": "place",
        "short_description": "Locations and geographies that frame Marvel Cinematic Universe.",
        "description": "Places, regions, and built sites that give Marvel Cinematic Universe its map — where events and figures concentrate."
    },
    {
        "slug": "marvel-cinematic-universe-events",
        "name": "Marvel Cinematic Universe events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Marvel Cinematic Universe.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Marvel Cinematic Universe timeline."
    },
    {
        "slug": "marvel-cinematic-universe-objects",
        "name": "Marvel Cinematic Universe objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Marvel Cinematic Universe.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Marvel Cinematic Universe."
    },
    {
        "slug": "marvel-cinematic-universe-factions",
        "name": "Marvel Cinematic Universe factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Marvel Cinematic Universe.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Marvel Cinematic Universe."
    },
    {
        "slug": "marvel-cinematic-universe-concepts",
        "name": "Marvel Cinematic Universe concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Marvel Cinematic Universe.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Marvel Cinematic Universe readable as a lore graph."
    },
    {
        "slug": "marvel-cinematic-universe-eras",
        "name": "Marvel Cinematic Universe eras",
        "type": "event",
        "short_description": "Periodization for Marvel Cinematic Universe.",
        "description": "Named eras and phases that help readers track how Marvel Cinematic Universe changes across time."
    },
    {
        "slug": "marvel-cinematic-universe-works",
        "name": "Marvel Cinematic Universe works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Marvel Cinematic Universe.",
        "description": "Primary works and adaptations through which most audiences encounter Marvel Cinematic Universe."
    },
    {
        "slug": "marvel-cinematic-universe-symbols",
        "name": "Marvel Cinematic Universe symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Marvel Cinematic Universe.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Marvel Cinematic Universe."
    },
    {
        "slug": "marvel-cinematic-universe-controversies",
        "name": "Marvel Cinematic Universe controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Marvel Cinematic Universe.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Marvel Cinematic Universe argumentative."
    },
    {
        "slug": "marvel-cinematic-universe-sources",
        "name": "Marvel Cinematic Universe sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Marvel Cinematic Universe.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Marvel Cinematic Universe."
    },
    {
        "slug": "marvel-cinematic-universe-geography",
        "name": "Marvel Cinematic Universe geography",
        "type": "place",
        "short_description": "Broader geographic framing for Marvel Cinematic Universe.",
        "description": "Regions, routes, and spatial systems that situate Marvel Cinematic Universe beyond single named places."
    },
    {
        "slug": "marvel-cinematic-universe-legacy",
        "name": "Marvel Cinematic Universe legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Marvel Cinematic Universe.",
        "description": "How Marvel Cinematic Universe continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "marvel-cinematic-universe-practices",
        "name": "Marvel Cinematic Universe practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Marvel Cinematic Universe.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Marvel Cinematic Universe."
    },
    {
        "slug": "marvel-cinematic-universe-entry-1",
        "name": "Marvel Cinematic Universe entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-2",
        "name": "Marvel Cinematic Universe entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-3",
        "name": "Marvel Cinematic Universe entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-4",
        "name": "Marvel Cinematic Universe entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-5",
        "name": "Marvel Cinematic Universe entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-6",
        "name": "Marvel Cinematic Universe entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-7",
        "name": "Marvel Cinematic Universe entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-8",
        "name": "Marvel Cinematic Universe entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-9",
        "name": "Marvel Cinematic Universe entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-10",
        "name": "Marvel Cinematic Universe entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-11",
        "name": "Marvel Cinematic Universe entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-12",
        "name": "Marvel Cinematic Universe entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-13",
        "name": "Marvel Cinematic Universe entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-14",
        "name": "Marvel Cinematic Universe entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-15",
        "name": "Marvel Cinematic Universe entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-16",
        "name": "Marvel Cinematic Universe entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-17",
        "name": "Marvel Cinematic Universe entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-18",
        "name": "Marvel Cinematic Universe entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-19",
        "name": "Marvel Cinematic Universe entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-20",
        "name": "Marvel Cinematic Universe entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-21",
        "name": "Marvel Cinematic Universe entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-22",
        "name": "Marvel Cinematic Universe entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-23",
        "name": "Marvel Cinematic Universe entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-cinematic-universe-entry-24",
        "name": "Marvel Cinematic Universe entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Cinematic Universe.",
        "description": "A supporting encyclopedia entry in the Marvel Cinematic Universe subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-places",
        "contains",
        "Marvel Cinematic Universe places is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-events",
        "contains",
        "Marvel Cinematic Universe events is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-objects",
        "contains",
        "Marvel Cinematic Universe objects & artifacts is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-factions",
        "contains",
        "Marvel Cinematic Universe factions & groups is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-concepts",
        "contains",
        "Marvel Cinematic Universe concepts is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-eras",
        "contains",
        "Marvel Cinematic Universe eras is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-works",
        "contains",
        "Marvel Cinematic Universe works & media is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-symbols",
        "contains",
        "Marvel Cinematic Universe symbols is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-controversies",
        "contains",
        "Marvel Cinematic Universe controversies is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-sources",
        "contains",
        "Marvel Cinematic Universe sources is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-geography",
        "contains",
        "Marvel Cinematic Universe geography is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-legacy",
        "contains",
        "Marvel Cinematic Universe legacy is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-practices",
        "contains",
        "Marvel Cinematic Universe practices is a primary trailhead under Marvel Cinematic Universe.",
        0.88,
        0.82
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-1",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-2",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-3",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-4",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-5",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-6",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-7",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-8",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-9",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-10",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-11",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-12",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-13",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-14",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-15",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-16",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-17",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-18",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-19",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-20",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-21",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-22",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-23",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ],
    [
        "marvel-cinematic-universe",
        "marvel-cinematic-universe-entry-24",
        "contains",
        "Supporting entry under Marvel Cinematic Universe.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
