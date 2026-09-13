/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dracula-novel",
        "name": "Dracula (novel)",
        "type": "topic",
        "short_description": "Epistolary vampire hunt, Transylvania, and Stoker’s text that fixed the modern Count.",
        "description": "Epistolary vampire hunt, Transylvania, and Stoker’s text that fixed the modern Count. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dracula (novel) so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "dracula-novel-figures",
        "name": "Dracula (novel) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dracula (novel).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dracula (novel)."
    },
    {
        "slug": "dracula-novel-world",
        "name": "Dracula (novel) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dracula (novel).",
        "description": "Geography, institutions, and periodization that give Dracula (novel) its encyclopedia shape."
    },
    {
        "slug": "dracula-novel-places",
        "name": "Dracula (novel) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dracula (novel).",
        "description": "Places, regions, and built sites that give Dracula (novel) its map — where events and figures concentrate."
    },
    {
        "slug": "dracula-novel-events",
        "name": "Dracula (novel) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dracula (novel).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dracula (novel) timeline."
    },
    {
        "slug": "dracula-novel-objects",
        "name": "Dracula (novel) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dracula (novel).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dracula (novel)."
    },
    {
        "slug": "dracula-novel-factions",
        "name": "Dracula (novel) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dracula (novel).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dracula (novel)."
    },
    {
        "slug": "dracula-novel-concepts",
        "name": "Dracula (novel) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dracula (novel).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dracula (novel) readable as a lore graph."
    },
    {
        "slug": "dracula-novel-eras",
        "name": "Dracula (novel) eras",
        "type": "event",
        "short_description": "Periodization for Dracula (novel).",
        "description": "Named eras and phases that help readers track how Dracula (novel) changes across time."
    },
    {
        "slug": "dracula-novel-works",
        "name": "Dracula (novel) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dracula (novel).",
        "description": "Primary works and adaptations through which most audiences encounter Dracula (novel)."
    },
    {
        "slug": "dracula-novel-symbols",
        "name": "Dracula (novel) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dracula (novel).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dracula (novel)."
    },
    {
        "slug": "dracula-novel-controversies",
        "name": "Dracula (novel) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dracula (novel).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dracula (novel) argumentative."
    },
    {
        "slug": "dracula-novel-sources",
        "name": "Dracula (novel) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dracula (novel).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dracula (novel)."
    },
    {
        "slug": "dracula-novel-geography",
        "name": "Dracula (novel) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dracula (novel).",
        "description": "Regions, routes, and spatial systems that situate Dracula (novel) beyond single named places."
    },
    {
        "slug": "dracula-novel-legacy",
        "name": "Dracula (novel) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dracula (novel).",
        "description": "How Dracula (novel) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dracula-novel-practices",
        "name": "Dracula (novel) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dracula (novel).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dracula (novel)."
    },
    {
        "slug": "dracula-novel-entry-1",
        "name": "Dracula (novel) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-2",
        "name": "Dracula (novel) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-3",
        "name": "Dracula (novel) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-4",
        "name": "Dracula (novel) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-5",
        "name": "Dracula (novel) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-6",
        "name": "Dracula (novel) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-7",
        "name": "Dracula (novel) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-8",
        "name": "Dracula (novel) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-9",
        "name": "Dracula (novel) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-10",
        "name": "Dracula (novel) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-11",
        "name": "Dracula (novel) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-12",
        "name": "Dracula (novel) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-13",
        "name": "Dracula (novel) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-14",
        "name": "Dracula (novel) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-15",
        "name": "Dracula (novel) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-16",
        "name": "Dracula (novel) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-17",
        "name": "Dracula (novel) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-18",
        "name": "Dracula (novel) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-19",
        "name": "Dracula (novel) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-20",
        "name": "Dracula (novel) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-21",
        "name": "Dracula (novel) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-22",
        "name": "Dracula (novel) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-23",
        "name": "Dracula (novel) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dracula-novel-entry-24",
        "name": "Dracula (novel) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dracula (novel).",
        "description": "A supporting encyclopedia entry in the Dracula (novel) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dracula-novel",
        "dracula-novel-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dracula-novel",
        "dracula-novel-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dracula-novel",
        "dracula-novel-places",
        "contains",
        "Dracula (novel) places is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-events",
        "contains",
        "Dracula (novel) events is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-objects",
        "contains",
        "Dracula (novel) objects & artifacts is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-factions",
        "contains",
        "Dracula (novel) factions & groups is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-concepts",
        "contains",
        "Dracula (novel) concepts is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-eras",
        "contains",
        "Dracula (novel) eras is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-works",
        "contains",
        "Dracula (novel) works & media is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-symbols",
        "contains",
        "Dracula (novel) symbols is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-controversies",
        "contains",
        "Dracula (novel) controversies is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-sources",
        "contains",
        "Dracula (novel) sources is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-geography",
        "contains",
        "Dracula (novel) geography is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-legacy",
        "contains",
        "Dracula (novel) legacy is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-practices",
        "contains",
        "Dracula (novel) practices is a primary trailhead under Dracula (novel).",
        0.88,
        0.82
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-1",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-2",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-3",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-4",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-5",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-6",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-7",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-8",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-9",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-10",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-11",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-12",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-13",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-14",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-15",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-16",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-17",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-18",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-19",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-20",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-21",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-22",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-23",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ],
    [
        "dracula-novel",
        "dracula-novel-entry-24",
        "contains",
        "Supporting entry under Dracula (novel).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
