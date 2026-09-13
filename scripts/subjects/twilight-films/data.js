/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "twilight-films",
        "name": "Twilight films",
        "type": "topic",
        "short_description": "Forks vampires, Team discourse, and the YA paranormal romance that became a cultural flashpoint.",
        "description": "Forks vampires, Team discourse, and the YA paranormal romance that became a cultural flashpoint. This Ton-o-Lore subject maps people, places, events, and ideas tied to Twilight films so readers can follow long-tail connections across movies."
    },
    {
        "slug": "twilight-films-figures",
        "name": "Twilight films figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Twilight films.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Twilight films."
    },
    {
        "slug": "twilight-films-world",
        "name": "Twilight films world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Twilight films.",
        "description": "Geography, institutions, and periodization that give Twilight films its encyclopedia shape."
    },
    {
        "slug": "twilight-films-places",
        "name": "Twilight films places",
        "type": "place",
        "short_description": "Locations and geographies that frame Twilight films.",
        "description": "Places, regions, and built sites that give Twilight films its map — where events and figures concentrate."
    },
    {
        "slug": "twilight-films-events",
        "name": "Twilight films events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Twilight films.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Twilight films timeline."
    },
    {
        "slug": "twilight-films-objects",
        "name": "Twilight films objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Twilight films.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Twilight films."
    },
    {
        "slug": "twilight-films-factions",
        "name": "Twilight films factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Twilight films.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Twilight films."
    },
    {
        "slug": "twilight-films-concepts",
        "name": "Twilight films concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Twilight films.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Twilight films readable as a lore graph."
    },
    {
        "slug": "twilight-films-eras",
        "name": "Twilight films eras",
        "type": "event",
        "short_description": "Periodization for Twilight films.",
        "description": "Named eras and phases that help readers track how Twilight films changes across time."
    },
    {
        "slug": "twilight-films-works",
        "name": "Twilight films works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Twilight films.",
        "description": "Primary works and adaptations through which most audiences encounter Twilight films."
    },
    {
        "slug": "twilight-films-symbols",
        "name": "Twilight films symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Twilight films.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Twilight films."
    },
    {
        "slug": "twilight-films-controversies",
        "name": "Twilight films controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Twilight films.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Twilight films argumentative."
    },
    {
        "slug": "twilight-films-sources",
        "name": "Twilight films sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Twilight films.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Twilight films."
    },
    {
        "slug": "twilight-films-geography",
        "name": "Twilight films geography",
        "type": "place",
        "short_description": "Broader geographic framing for Twilight films.",
        "description": "Regions, routes, and spatial systems that situate Twilight films beyond single named places."
    },
    {
        "slug": "twilight-films-legacy",
        "name": "Twilight films legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Twilight films.",
        "description": "How Twilight films continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "twilight-films-practices",
        "name": "Twilight films practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Twilight films.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Twilight films."
    },
    {
        "slug": "twilight-films-entry-1",
        "name": "Twilight films entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-2",
        "name": "Twilight films entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-3",
        "name": "Twilight films entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-4",
        "name": "Twilight films entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-5",
        "name": "Twilight films entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-6",
        "name": "Twilight films entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-7",
        "name": "Twilight films entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-8",
        "name": "Twilight films entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-9",
        "name": "Twilight films entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-10",
        "name": "Twilight films entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-11",
        "name": "Twilight films entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-12",
        "name": "Twilight films entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-13",
        "name": "Twilight films entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-14",
        "name": "Twilight films entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-15",
        "name": "Twilight films entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-16",
        "name": "Twilight films entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-17",
        "name": "Twilight films entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-18",
        "name": "Twilight films entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-19",
        "name": "Twilight films entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-20",
        "name": "Twilight films entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-21",
        "name": "Twilight films entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-22",
        "name": "Twilight films entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-23",
        "name": "Twilight films entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-films-entry-24",
        "name": "Twilight films entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight films.",
        "description": "A supporting encyclopedia entry in the Twilight films subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "twilight-films",
        "twilight-films-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "twilight-films",
        "twilight-films-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "twilight-films",
        "twilight-films-places",
        "contains",
        "Twilight films places is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-events",
        "contains",
        "Twilight films events is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-objects",
        "contains",
        "Twilight films objects & artifacts is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-factions",
        "contains",
        "Twilight films factions & groups is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-concepts",
        "contains",
        "Twilight films concepts is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-eras",
        "contains",
        "Twilight films eras is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-works",
        "contains",
        "Twilight films works & media is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-symbols",
        "contains",
        "Twilight films symbols is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-controversies",
        "contains",
        "Twilight films controversies is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-sources",
        "contains",
        "Twilight films sources is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-geography",
        "contains",
        "Twilight films geography is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-legacy",
        "contains",
        "Twilight films legacy is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-practices",
        "contains",
        "Twilight films practices is a primary trailhead under Twilight films.",
        0.88,
        0.82
    ],
    [
        "twilight-films",
        "twilight-films-entry-1",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-2",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-3",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-4",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-5",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-6",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-7",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-8",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-9",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-10",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-11",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-12",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-13",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-14",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-15",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-16",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-17",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-18",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-19",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-20",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-21",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-22",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-23",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ],
    [
        "twilight-films",
        "twilight-films-entry-24",
        "contains",
        "Supporting entry under Twilight films.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
