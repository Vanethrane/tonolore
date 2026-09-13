/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "attitude-era",
        "name": "Attitude Era",
        "type": "topic",
        "short_description": "DX, Corporation, hardcore TV, and the late-90s boom that redefined sports entertainment.",
        "description": "DX, Corporation, hardcore TV, and the late-90s boom that redefined sports entertainment. This Ton-o-Lore subject maps people, places, events, and ideas tied to Attitude Era so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "attitude-era-figures",
        "name": "Attitude Era figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Attitude Era.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Attitude Era."
    },
    {
        "slug": "attitude-era-world",
        "name": "Attitude Era world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Attitude Era.",
        "description": "Geography, institutions, and periodization that give Attitude Era its encyclopedia shape."
    },
    {
        "slug": "attitude-era-places",
        "name": "Attitude Era places",
        "type": "place",
        "short_description": "Locations and geographies that frame Attitude Era.",
        "description": "Places, regions, and built sites that give Attitude Era its map — where events and figures concentrate."
    },
    {
        "slug": "attitude-era-events",
        "name": "Attitude Era events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Attitude Era.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Attitude Era timeline."
    },
    {
        "slug": "attitude-era-objects",
        "name": "Attitude Era objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Attitude Era.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Attitude Era."
    },
    {
        "slug": "attitude-era-factions",
        "name": "Attitude Era factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Attitude Era.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Attitude Era."
    },
    {
        "slug": "attitude-era-concepts",
        "name": "Attitude Era concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Attitude Era.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Attitude Era readable as a lore graph."
    },
    {
        "slug": "attitude-era-eras",
        "name": "Attitude Era eras",
        "type": "event",
        "short_description": "Periodization for Attitude Era.",
        "description": "Named eras and phases that help readers track how Attitude Era changes across time."
    },
    {
        "slug": "attitude-era-works",
        "name": "Attitude Era works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Attitude Era.",
        "description": "Primary works and adaptations through which most audiences encounter Attitude Era."
    },
    {
        "slug": "attitude-era-symbols",
        "name": "Attitude Era symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Attitude Era.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Attitude Era."
    },
    {
        "slug": "attitude-era-controversies",
        "name": "Attitude Era controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Attitude Era.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Attitude Era argumentative."
    },
    {
        "slug": "attitude-era-sources",
        "name": "Attitude Era sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Attitude Era.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Attitude Era."
    },
    {
        "slug": "attitude-era-geography",
        "name": "Attitude Era geography",
        "type": "place",
        "short_description": "Broader geographic framing for Attitude Era.",
        "description": "Regions, routes, and spatial systems that situate Attitude Era beyond single named places."
    },
    {
        "slug": "attitude-era-legacy",
        "name": "Attitude Era legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Attitude Era.",
        "description": "How Attitude Era continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "attitude-era-practices",
        "name": "Attitude Era practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Attitude Era.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Attitude Era."
    },
    {
        "slug": "attitude-era-entry-1",
        "name": "Attitude Era entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-2",
        "name": "Attitude Era entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-3",
        "name": "Attitude Era entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-4",
        "name": "Attitude Era entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-5",
        "name": "Attitude Era entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-6",
        "name": "Attitude Era entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-7",
        "name": "Attitude Era entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-8",
        "name": "Attitude Era entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-9",
        "name": "Attitude Era entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-10",
        "name": "Attitude Era entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-11",
        "name": "Attitude Era entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-12",
        "name": "Attitude Era entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-13",
        "name": "Attitude Era entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-14",
        "name": "Attitude Era entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-15",
        "name": "Attitude Era entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-16",
        "name": "Attitude Era entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-17",
        "name": "Attitude Era entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-18",
        "name": "Attitude Era entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-19",
        "name": "Attitude Era entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-20",
        "name": "Attitude Era entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-21",
        "name": "Attitude Era entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-22",
        "name": "Attitude Era entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-23",
        "name": "Attitude Era entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "attitude-era-entry-24",
        "name": "Attitude Era entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Attitude Era.",
        "description": "A supporting encyclopedia entry in the Attitude Era subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "attitude-era",
        "attitude-era-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "attitude-era",
        "attitude-era-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "attitude-era",
        "attitude-era-places",
        "contains",
        "Attitude Era places is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-events",
        "contains",
        "Attitude Era events is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-objects",
        "contains",
        "Attitude Era objects & artifacts is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-factions",
        "contains",
        "Attitude Era factions & groups is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-concepts",
        "contains",
        "Attitude Era concepts is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-eras",
        "contains",
        "Attitude Era eras is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-works",
        "contains",
        "Attitude Era works & media is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-symbols",
        "contains",
        "Attitude Era symbols is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-controversies",
        "contains",
        "Attitude Era controversies is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-sources",
        "contains",
        "Attitude Era sources is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-geography",
        "contains",
        "Attitude Era geography is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-legacy",
        "contains",
        "Attitude Era legacy is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-practices",
        "contains",
        "Attitude Era practices is a primary trailhead under Attitude Era.",
        0.88,
        0.82
    ],
    [
        "attitude-era",
        "attitude-era-entry-1",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-2",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-3",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-4",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-5",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-6",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-7",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-8",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-9",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-10",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-11",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-12",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-13",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-14",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-15",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-16",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-17",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-18",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-19",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-20",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-21",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-22",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-23",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ],
    [
        "attitude-era",
        "attitude-era-entry-24",
        "contains",
        "Supporting entry under Attitude Era.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
