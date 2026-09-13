/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ms-marvel-comics",
        "name": "Ms. Marvel",
        "type": "topic",
        "short_description": "Kamala Khan, Jersey City, and the breakout Muslim-American teen hero of modern Marvel.",
        "description": "Kamala Khan, Jersey City, and the breakout Muslim-American teen hero of modern Marvel. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ms. Marvel so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "ms-marvel-comics-figures",
        "name": "Ms. Marvel figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ms. Marvel.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ms. Marvel."
    },
    {
        "slug": "ms-marvel-comics-world",
        "name": "Ms. Marvel world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ms. Marvel.",
        "description": "Geography, institutions, and periodization that give Ms. Marvel its encyclopedia shape."
    },
    {
        "slug": "ms-marvel-comics-places",
        "name": "Ms. Marvel places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ms. Marvel.",
        "description": "Places, regions, and built sites that give Ms. Marvel its map — where events and figures concentrate."
    },
    {
        "slug": "ms-marvel-comics-events",
        "name": "Ms. Marvel events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ms. Marvel.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ms. Marvel timeline."
    },
    {
        "slug": "ms-marvel-comics-objects",
        "name": "Ms. Marvel objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ms. Marvel.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ms. Marvel."
    },
    {
        "slug": "ms-marvel-comics-factions",
        "name": "Ms. Marvel factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ms. Marvel.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ms. Marvel."
    },
    {
        "slug": "ms-marvel-comics-concepts",
        "name": "Ms. Marvel concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ms. Marvel.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ms. Marvel readable as a lore graph."
    },
    {
        "slug": "ms-marvel-comics-eras",
        "name": "Ms. Marvel eras",
        "type": "event",
        "short_description": "Periodization for Ms. Marvel.",
        "description": "Named eras and phases that help readers track how Ms. Marvel changes across time."
    },
    {
        "slug": "ms-marvel-comics-works",
        "name": "Ms. Marvel works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ms. Marvel.",
        "description": "Primary works and adaptations through which most audiences encounter Ms. Marvel."
    },
    {
        "slug": "ms-marvel-comics-symbols",
        "name": "Ms. Marvel symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ms. Marvel.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ms. Marvel."
    },
    {
        "slug": "ms-marvel-comics-controversies",
        "name": "Ms. Marvel controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ms. Marvel.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ms. Marvel argumentative."
    },
    {
        "slug": "ms-marvel-comics-sources",
        "name": "Ms. Marvel sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ms. Marvel.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ms. Marvel."
    },
    {
        "slug": "ms-marvel-comics-geography",
        "name": "Ms. Marvel geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ms. Marvel.",
        "description": "Regions, routes, and spatial systems that situate Ms. Marvel beyond single named places."
    },
    {
        "slug": "ms-marvel-comics-legacy",
        "name": "Ms. Marvel legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ms. Marvel.",
        "description": "How Ms. Marvel continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ms-marvel-comics-practices",
        "name": "Ms. Marvel practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ms. Marvel.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ms. Marvel."
    },
    {
        "slug": "ms-marvel-comics-entry-1",
        "name": "Ms. Marvel entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-2",
        "name": "Ms. Marvel entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-3",
        "name": "Ms. Marvel entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-4",
        "name": "Ms. Marvel entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-5",
        "name": "Ms. Marvel entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-6",
        "name": "Ms. Marvel entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-7",
        "name": "Ms. Marvel entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-8",
        "name": "Ms. Marvel entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-9",
        "name": "Ms. Marvel entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-10",
        "name": "Ms. Marvel entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-11",
        "name": "Ms. Marvel entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-12",
        "name": "Ms. Marvel entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-13",
        "name": "Ms. Marvel entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-14",
        "name": "Ms. Marvel entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-15",
        "name": "Ms. Marvel entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-16",
        "name": "Ms. Marvel entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-17",
        "name": "Ms. Marvel entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-18",
        "name": "Ms. Marvel entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-19",
        "name": "Ms. Marvel entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-20",
        "name": "Ms. Marvel entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-21",
        "name": "Ms. Marvel entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-22",
        "name": "Ms. Marvel entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-23",
        "name": "Ms. Marvel entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ms-marvel-comics-entry-24",
        "name": "Ms. Marvel entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ms. Marvel.",
        "description": "A supporting encyclopedia entry in the Ms. Marvel subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ms-marvel-comics",
        "ms-marvel-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-places",
        "contains",
        "Ms. Marvel places is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-events",
        "contains",
        "Ms. Marvel events is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-objects",
        "contains",
        "Ms. Marvel objects & artifacts is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-factions",
        "contains",
        "Ms. Marvel factions & groups is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-concepts",
        "contains",
        "Ms. Marvel concepts is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-eras",
        "contains",
        "Ms. Marvel eras is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-works",
        "contains",
        "Ms. Marvel works & media is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-symbols",
        "contains",
        "Ms. Marvel symbols is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-controversies",
        "contains",
        "Ms. Marvel controversies is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-sources",
        "contains",
        "Ms. Marvel sources is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-geography",
        "contains",
        "Ms. Marvel geography is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-legacy",
        "contains",
        "Ms. Marvel legacy is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-practices",
        "contains",
        "Ms. Marvel practices is a primary trailhead under Ms. Marvel.",
        0.88,
        0.82
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-1",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-2",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-3",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-4",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-5",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-6",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-7",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-8",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-9",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-10",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-11",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-12",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-13",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-14",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-15",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-16",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-17",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-18",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-19",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-20",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-21",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-22",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-23",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ],
    [
        "ms-marvel-comics",
        "ms-marvel-comics-entry-24",
        "contains",
        "Supporting entry under Ms. Marvel.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
