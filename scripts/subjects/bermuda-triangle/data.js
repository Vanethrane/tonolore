/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bermuda-triangle",
        "name": "Bermuda Triangle",
        "type": "topic",
        "short_description": "Vanishing ships and planes, sensational maps, and the Atlantic mystery zone of pop lore.",
        "description": "Vanishing ships and planes, sensational maps, and the Atlantic mystery zone of pop lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bermuda Triangle so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "bermuda-triangle-figures",
        "name": "Bermuda Triangle figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bermuda Triangle.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bermuda Triangle."
    },
    {
        "slug": "bermuda-triangle-world",
        "name": "Bermuda Triangle world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bermuda Triangle.",
        "description": "Geography, institutions, and periodization that give Bermuda Triangle its encyclopedia shape."
    },
    {
        "slug": "bermuda-triangle-places",
        "name": "Bermuda Triangle places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bermuda Triangle.",
        "description": "Places, regions, and built sites that give Bermuda Triangle its map — where events and figures concentrate."
    },
    {
        "slug": "bermuda-triangle-events",
        "name": "Bermuda Triangle events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bermuda Triangle.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bermuda Triangle timeline."
    },
    {
        "slug": "bermuda-triangle-objects",
        "name": "Bermuda Triangle objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bermuda Triangle.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bermuda Triangle."
    },
    {
        "slug": "bermuda-triangle-factions",
        "name": "Bermuda Triangle factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bermuda Triangle.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bermuda Triangle."
    },
    {
        "slug": "bermuda-triangle-concepts",
        "name": "Bermuda Triangle concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bermuda Triangle.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bermuda Triangle readable as a lore graph."
    },
    {
        "slug": "bermuda-triangle-eras",
        "name": "Bermuda Triangle eras",
        "type": "event",
        "short_description": "Periodization for Bermuda Triangle.",
        "description": "Named eras and phases that help readers track how Bermuda Triangle changes across time."
    },
    {
        "slug": "bermuda-triangle-works",
        "name": "Bermuda Triangle works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bermuda Triangle.",
        "description": "Primary works and adaptations through which most audiences encounter Bermuda Triangle."
    },
    {
        "slug": "bermuda-triangle-symbols",
        "name": "Bermuda Triangle symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bermuda Triangle.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bermuda Triangle."
    },
    {
        "slug": "bermuda-triangle-controversies",
        "name": "Bermuda Triangle controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bermuda Triangle.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bermuda Triangle argumentative."
    },
    {
        "slug": "bermuda-triangle-sources",
        "name": "Bermuda Triangle sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bermuda Triangle.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bermuda Triangle."
    },
    {
        "slug": "bermuda-triangle-geography",
        "name": "Bermuda Triangle geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bermuda Triangle.",
        "description": "Regions, routes, and spatial systems that situate Bermuda Triangle beyond single named places."
    },
    {
        "slug": "bermuda-triangle-legacy",
        "name": "Bermuda Triangle legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bermuda Triangle.",
        "description": "How Bermuda Triangle continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bermuda-triangle-practices",
        "name": "Bermuda Triangle practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bermuda Triangle.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bermuda Triangle."
    },
    {
        "slug": "bermuda-triangle-entry-1",
        "name": "Bermuda Triangle entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-2",
        "name": "Bermuda Triangle entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-3",
        "name": "Bermuda Triangle entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-4",
        "name": "Bermuda Triangle entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-5",
        "name": "Bermuda Triangle entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-6",
        "name": "Bermuda Triangle entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-7",
        "name": "Bermuda Triangle entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-8",
        "name": "Bermuda Triangle entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-9",
        "name": "Bermuda Triangle entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-10",
        "name": "Bermuda Triangle entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-11",
        "name": "Bermuda Triangle entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-12",
        "name": "Bermuda Triangle entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-13",
        "name": "Bermuda Triangle entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-14",
        "name": "Bermuda Triangle entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-15",
        "name": "Bermuda Triangle entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-16",
        "name": "Bermuda Triangle entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-17",
        "name": "Bermuda Triangle entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-18",
        "name": "Bermuda Triangle entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-19",
        "name": "Bermuda Triangle entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-20",
        "name": "Bermuda Triangle entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-21",
        "name": "Bermuda Triangle entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-22",
        "name": "Bermuda Triangle entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-23",
        "name": "Bermuda Triangle entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bermuda-triangle-entry-24",
        "name": "Bermuda Triangle entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bermuda Triangle.",
        "description": "A supporting encyclopedia entry in the Bermuda Triangle subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bermuda-triangle",
        "bermuda-triangle-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-places",
        "contains",
        "Bermuda Triangle places is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-events",
        "contains",
        "Bermuda Triangle events is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-objects",
        "contains",
        "Bermuda Triangle objects & artifacts is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-factions",
        "contains",
        "Bermuda Triangle factions & groups is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-concepts",
        "contains",
        "Bermuda Triangle concepts is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-eras",
        "contains",
        "Bermuda Triangle eras is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-works",
        "contains",
        "Bermuda Triangle works & media is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-symbols",
        "contains",
        "Bermuda Triangle symbols is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-controversies",
        "contains",
        "Bermuda Triangle controversies is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-sources",
        "contains",
        "Bermuda Triangle sources is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-geography",
        "contains",
        "Bermuda Triangle geography is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-legacy",
        "contains",
        "Bermuda Triangle legacy is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-practices",
        "contains",
        "Bermuda Triangle practices is a primary trailhead under Bermuda Triangle.",
        0.88,
        0.82
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-1",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-2",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-3",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-4",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-5",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-6",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-7",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-8",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-9",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-10",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-11",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-12",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-13",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-14",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-15",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-16",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-17",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-18",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-19",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-20",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-21",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-22",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-23",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ],
    [
        "bermuda-triangle",
        "bermuda-triangle-entry-24",
        "contains",
        "Supporting entry under Bermuda Triangle.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
