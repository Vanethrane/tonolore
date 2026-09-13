/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "evolution-natural-selection",
        "name": "Evolution & natural selection",
        "type": "topic",
        "short_description": "Darwin, Wallace, genetics, and the living tree of descent that organizes biology.",
        "description": "Darwin, Wallace, genetics, and the living tree of descent that organizes biology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Evolution & natural selection so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "evolution-natural-selection-figures",
        "name": "Evolution & natural selection figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Evolution & natural selection.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Evolution & natural selection."
    },
    {
        "slug": "evolution-natural-selection-world",
        "name": "Evolution & natural selection world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Evolution & natural selection.",
        "description": "Geography, institutions, and periodization that give Evolution & natural selection its encyclopedia shape."
    },
    {
        "slug": "evolution-natural-selection-places",
        "name": "Evolution & natural selection places",
        "type": "place",
        "short_description": "Locations and geographies that frame Evolution & natural selection.",
        "description": "Places, regions, and built sites that give Evolution & natural selection its map — where events and figures concentrate."
    },
    {
        "slug": "evolution-natural-selection-events",
        "name": "Evolution & natural selection events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Evolution & natural selection.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Evolution & natural selection timeline."
    },
    {
        "slug": "evolution-natural-selection-objects",
        "name": "Evolution & natural selection objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Evolution & natural selection.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Evolution & natural selection."
    },
    {
        "slug": "evolution-natural-selection-factions",
        "name": "Evolution & natural selection factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Evolution & natural selection.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Evolution & natural selection."
    },
    {
        "slug": "evolution-natural-selection-concepts",
        "name": "Evolution & natural selection concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Evolution & natural selection.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Evolution & natural selection readable as a lore graph."
    },
    {
        "slug": "evolution-natural-selection-eras",
        "name": "Evolution & natural selection eras",
        "type": "event",
        "short_description": "Periodization for Evolution & natural selection.",
        "description": "Named eras and phases that help readers track how Evolution & natural selection changes across time."
    },
    {
        "slug": "evolution-natural-selection-works",
        "name": "Evolution & natural selection works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Evolution & natural selection.",
        "description": "Primary works and adaptations through which most audiences encounter Evolution & natural selection."
    },
    {
        "slug": "evolution-natural-selection-symbols",
        "name": "Evolution & natural selection symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Evolution & natural selection.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Evolution & natural selection."
    },
    {
        "slug": "evolution-natural-selection-controversies",
        "name": "Evolution & natural selection controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Evolution & natural selection.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Evolution & natural selection argumentative."
    },
    {
        "slug": "evolution-natural-selection-sources",
        "name": "Evolution & natural selection sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Evolution & natural selection.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Evolution & natural selection."
    },
    {
        "slug": "evolution-natural-selection-geography",
        "name": "Evolution & natural selection geography",
        "type": "place",
        "short_description": "Broader geographic framing for Evolution & natural selection.",
        "description": "Regions, routes, and spatial systems that situate Evolution & natural selection beyond single named places."
    },
    {
        "slug": "evolution-natural-selection-legacy",
        "name": "Evolution & natural selection legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Evolution & natural selection.",
        "description": "How Evolution & natural selection continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "evolution-natural-selection-practices",
        "name": "Evolution & natural selection practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Evolution & natural selection.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Evolution & natural selection."
    },
    {
        "slug": "evolution-natural-selection-entry-1",
        "name": "Evolution & natural selection entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-2",
        "name": "Evolution & natural selection entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-3",
        "name": "Evolution & natural selection entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-4",
        "name": "Evolution & natural selection entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-5",
        "name": "Evolution & natural selection entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-6",
        "name": "Evolution & natural selection entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-7",
        "name": "Evolution & natural selection entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-8",
        "name": "Evolution & natural selection entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-9",
        "name": "Evolution & natural selection entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-10",
        "name": "Evolution & natural selection entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-11",
        "name": "Evolution & natural selection entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-12",
        "name": "Evolution & natural selection entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-13",
        "name": "Evolution & natural selection entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-14",
        "name": "Evolution & natural selection entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-15",
        "name": "Evolution & natural selection entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-16",
        "name": "Evolution & natural selection entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-17",
        "name": "Evolution & natural selection entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-18",
        "name": "Evolution & natural selection entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-19",
        "name": "Evolution & natural selection entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-20",
        "name": "Evolution & natural selection entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-21",
        "name": "Evolution & natural selection entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-22",
        "name": "Evolution & natural selection entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-23",
        "name": "Evolution & natural selection entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "evolution-natural-selection-entry-24",
        "name": "Evolution & natural selection entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Evolution & natural selection.",
        "description": "A supporting encyclopedia entry in the Evolution & natural selection subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "evolution-natural-selection",
        "evolution-natural-selection-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-places",
        "contains",
        "Evolution & natural selection places is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-events",
        "contains",
        "Evolution & natural selection events is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-objects",
        "contains",
        "Evolution & natural selection objects & artifacts is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-factions",
        "contains",
        "Evolution & natural selection factions & groups is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-concepts",
        "contains",
        "Evolution & natural selection concepts is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-eras",
        "contains",
        "Evolution & natural selection eras is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-works",
        "contains",
        "Evolution & natural selection works & media is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-symbols",
        "contains",
        "Evolution & natural selection symbols is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-controversies",
        "contains",
        "Evolution & natural selection controversies is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-sources",
        "contains",
        "Evolution & natural selection sources is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-geography",
        "contains",
        "Evolution & natural selection geography is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-legacy",
        "contains",
        "Evolution & natural selection legacy is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-practices",
        "contains",
        "Evolution & natural selection practices is a primary trailhead under Evolution & natural selection.",
        0.88,
        0.82
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-1",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-2",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-3",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-4",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-5",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-6",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-7",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-8",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-9",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-10",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-11",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-12",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-13",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-14",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-15",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-16",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-17",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-18",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-19",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-20",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-21",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-22",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-23",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ],
    [
        "evolution-natural-selection",
        "evolution-natural-selection-entry-24",
        "contains",
        "Supporting entry under Evolution & natural selection.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
