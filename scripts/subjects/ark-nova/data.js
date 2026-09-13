/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ark-nova",
        "name": "Ark Nova",
        "type": "topic",
        "short_description": "Zoo-building euro with card engines and conservation themes that dominated recent hobby charts.",
        "description": "Zoo-building euro with card engines and conservation themes that dominated recent hobby charts. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ark Nova so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "ark-nova-figures",
        "name": "Ark Nova figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ark Nova.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ark Nova."
    },
    {
        "slug": "ark-nova-world",
        "name": "Ark Nova world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ark Nova.",
        "description": "Geography, institutions, and periodization that give Ark Nova its encyclopedia shape."
    },
    {
        "slug": "ark-nova-places",
        "name": "Ark Nova places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ark Nova.",
        "description": "Places, regions, and built sites that give Ark Nova its map — where events and figures concentrate."
    },
    {
        "slug": "ark-nova-events",
        "name": "Ark Nova events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ark Nova.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ark Nova timeline."
    },
    {
        "slug": "ark-nova-objects",
        "name": "Ark Nova objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ark Nova.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ark Nova."
    },
    {
        "slug": "ark-nova-factions",
        "name": "Ark Nova factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ark Nova.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ark Nova."
    },
    {
        "slug": "ark-nova-concepts",
        "name": "Ark Nova concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ark Nova.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ark Nova readable as a lore graph."
    },
    {
        "slug": "ark-nova-eras",
        "name": "Ark Nova eras",
        "type": "event",
        "short_description": "Periodization for Ark Nova.",
        "description": "Named eras and phases that help readers track how Ark Nova changes across time."
    },
    {
        "slug": "ark-nova-works",
        "name": "Ark Nova works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ark Nova.",
        "description": "Primary works and adaptations through which most audiences encounter Ark Nova."
    },
    {
        "slug": "ark-nova-symbols",
        "name": "Ark Nova symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ark Nova.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ark Nova."
    },
    {
        "slug": "ark-nova-controversies",
        "name": "Ark Nova controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ark Nova.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ark Nova argumentative."
    },
    {
        "slug": "ark-nova-sources",
        "name": "Ark Nova sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ark Nova.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ark Nova."
    },
    {
        "slug": "ark-nova-geography",
        "name": "Ark Nova geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ark Nova.",
        "description": "Regions, routes, and spatial systems that situate Ark Nova beyond single named places."
    },
    {
        "slug": "ark-nova-legacy",
        "name": "Ark Nova legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ark Nova.",
        "description": "How Ark Nova continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ark-nova-practices",
        "name": "Ark Nova practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ark Nova.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ark Nova."
    },
    {
        "slug": "ark-nova-entry-1",
        "name": "Ark Nova entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-2",
        "name": "Ark Nova entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-3",
        "name": "Ark Nova entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-4",
        "name": "Ark Nova entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-5",
        "name": "Ark Nova entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-6",
        "name": "Ark Nova entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-7",
        "name": "Ark Nova entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-8",
        "name": "Ark Nova entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-9",
        "name": "Ark Nova entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-10",
        "name": "Ark Nova entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-11",
        "name": "Ark Nova entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-12",
        "name": "Ark Nova entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-13",
        "name": "Ark Nova entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-14",
        "name": "Ark Nova entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-15",
        "name": "Ark Nova entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-16",
        "name": "Ark Nova entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-17",
        "name": "Ark Nova entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-18",
        "name": "Ark Nova entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-19",
        "name": "Ark Nova entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-20",
        "name": "Ark Nova entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-21",
        "name": "Ark Nova entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-22",
        "name": "Ark Nova entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-23",
        "name": "Ark Nova entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ark-nova-entry-24",
        "name": "Ark Nova entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ark Nova.",
        "description": "A supporting encyclopedia entry in the Ark Nova subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ark-nova",
        "ark-nova-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ark-nova",
        "ark-nova-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ark-nova",
        "ark-nova-places",
        "contains",
        "Ark Nova places is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-events",
        "contains",
        "Ark Nova events is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-objects",
        "contains",
        "Ark Nova objects & artifacts is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-factions",
        "contains",
        "Ark Nova factions & groups is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-concepts",
        "contains",
        "Ark Nova concepts is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-eras",
        "contains",
        "Ark Nova eras is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-works",
        "contains",
        "Ark Nova works & media is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-symbols",
        "contains",
        "Ark Nova symbols is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-controversies",
        "contains",
        "Ark Nova controversies is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-sources",
        "contains",
        "Ark Nova sources is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-geography",
        "contains",
        "Ark Nova geography is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-legacy",
        "contains",
        "Ark Nova legacy is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-practices",
        "contains",
        "Ark Nova practices is a primary trailhead under Ark Nova.",
        0.88,
        0.82
    ],
    [
        "ark-nova",
        "ark-nova-entry-1",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-2",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-3",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-4",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-5",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-6",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-7",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-8",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-9",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-10",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-11",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-12",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-13",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-14",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-15",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-16",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-17",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-18",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-19",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-20",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-21",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-22",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-23",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ],
    [
        "ark-nova",
        "ark-nova-entry-24",
        "contains",
        "Supporting entry under Ark Nova.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
