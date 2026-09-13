/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "brave-new-world",
        "name": "Brave New World",
        "type": "topic",
        "short_description": "Soma, castes, and Huxley’s pleasure-dystopia counterpoint to Orwellian fear.",
        "description": "Soma, castes, and Huxley’s pleasure-dystopia counterpoint to Orwellian fear. This Ton-o-Lore subject maps people, places, events, and ideas tied to Brave New World so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "brave-new-world-figures",
        "name": "Brave New World figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Brave New World.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Brave New World."
    },
    {
        "slug": "brave-new-world-world",
        "name": "Brave New World world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Brave New World.",
        "description": "Geography, institutions, and periodization that give Brave New World its encyclopedia shape."
    },
    {
        "slug": "brave-new-world-places",
        "name": "Brave New World places",
        "type": "place",
        "short_description": "Locations and geographies that frame Brave New World.",
        "description": "Places, regions, and built sites that give Brave New World its map — where events and figures concentrate."
    },
    {
        "slug": "brave-new-world-events",
        "name": "Brave New World events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Brave New World.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Brave New World timeline."
    },
    {
        "slug": "brave-new-world-objects",
        "name": "Brave New World objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Brave New World.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Brave New World."
    },
    {
        "slug": "brave-new-world-factions",
        "name": "Brave New World factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Brave New World.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Brave New World."
    },
    {
        "slug": "brave-new-world-concepts",
        "name": "Brave New World concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Brave New World.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Brave New World readable as a lore graph."
    },
    {
        "slug": "brave-new-world-eras",
        "name": "Brave New World eras",
        "type": "event",
        "short_description": "Periodization for Brave New World.",
        "description": "Named eras and phases that help readers track how Brave New World changes across time."
    },
    {
        "slug": "brave-new-world-works",
        "name": "Brave New World works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Brave New World.",
        "description": "Primary works and adaptations through which most audiences encounter Brave New World."
    },
    {
        "slug": "brave-new-world-symbols",
        "name": "Brave New World symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Brave New World.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Brave New World."
    },
    {
        "slug": "brave-new-world-controversies",
        "name": "Brave New World controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Brave New World.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Brave New World argumentative."
    },
    {
        "slug": "brave-new-world-sources",
        "name": "Brave New World sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Brave New World.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Brave New World."
    },
    {
        "slug": "brave-new-world-geography",
        "name": "Brave New World geography",
        "type": "place",
        "short_description": "Broader geographic framing for Brave New World.",
        "description": "Regions, routes, and spatial systems that situate Brave New World beyond single named places."
    },
    {
        "slug": "brave-new-world-legacy",
        "name": "Brave New World legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Brave New World.",
        "description": "How Brave New World continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "brave-new-world-practices",
        "name": "Brave New World practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Brave New World.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Brave New World."
    },
    {
        "slug": "brave-new-world-entry-1",
        "name": "Brave New World entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-2",
        "name": "Brave New World entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-3",
        "name": "Brave New World entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-4",
        "name": "Brave New World entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-5",
        "name": "Brave New World entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-6",
        "name": "Brave New World entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-7",
        "name": "Brave New World entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-8",
        "name": "Brave New World entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-9",
        "name": "Brave New World entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-10",
        "name": "Brave New World entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-11",
        "name": "Brave New World entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-12",
        "name": "Brave New World entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-13",
        "name": "Brave New World entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-14",
        "name": "Brave New World entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-15",
        "name": "Brave New World entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-16",
        "name": "Brave New World entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-17",
        "name": "Brave New World entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-18",
        "name": "Brave New World entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-19",
        "name": "Brave New World entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-20",
        "name": "Brave New World entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-21",
        "name": "Brave New World entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-22",
        "name": "Brave New World entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-23",
        "name": "Brave New World entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brave-new-world-entry-24",
        "name": "Brave New World entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brave New World.",
        "description": "A supporting encyclopedia entry in the Brave New World subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "brave-new-world",
        "brave-new-world-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "brave-new-world",
        "brave-new-world-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "brave-new-world",
        "brave-new-world-places",
        "contains",
        "Brave New World places is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-events",
        "contains",
        "Brave New World events is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-objects",
        "contains",
        "Brave New World objects & artifacts is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-factions",
        "contains",
        "Brave New World factions & groups is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-concepts",
        "contains",
        "Brave New World concepts is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-eras",
        "contains",
        "Brave New World eras is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-works",
        "contains",
        "Brave New World works & media is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-symbols",
        "contains",
        "Brave New World symbols is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-controversies",
        "contains",
        "Brave New World controversies is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-sources",
        "contains",
        "Brave New World sources is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-geography",
        "contains",
        "Brave New World geography is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-legacy",
        "contains",
        "Brave New World legacy is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-practices",
        "contains",
        "Brave New World practices is a primary trailhead under Brave New World.",
        0.88,
        0.82
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-1",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-2",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-3",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-4",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-5",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-6",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-7",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-8",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-9",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-10",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-11",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-12",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-13",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-14",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-15",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-16",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-17",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-18",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-19",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-20",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-21",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-22",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-23",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ],
    [
        "brave-new-world",
        "brave-new-world-entry-24",
        "contains",
        "Supporting entry under Brave New World.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
