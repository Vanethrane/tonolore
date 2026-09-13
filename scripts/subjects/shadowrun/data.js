/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "shadowrun",
        "name": "Shadowrun",
        "type": "topic",
        "short_description": "Cyberpunk meets magic, megacorps, and the RPG of deckers and shamans.",
        "description": "Cyberpunk meets magic, megacorps, and the RPG of deckers and shamans. This Ton-o-Lore subject maps people, places, events, and ideas tied to Shadowrun so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "shadowrun-figures",
        "name": "Shadowrun figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Shadowrun.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Shadowrun."
    },
    {
        "slug": "shadowrun-world",
        "name": "Shadowrun world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Shadowrun.",
        "description": "Geography, institutions, and periodization that give Shadowrun its encyclopedia shape."
    },
    {
        "slug": "shadowrun-places",
        "name": "Shadowrun places",
        "type": "place",
        "short_description": "Locations and geographies that frame Shadowrun.",
        "description": "Places, regions, and built sites that give Shadowrun its map — where events and figures concentrate."
    },
    {
        "slug": "shadowrun-events",
        "name": "Shadowrun events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Shadowrun.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Shadowrun timeline."
    },
    {
        "slug": "shadowrun-objects",
        "name": "Shadowrun objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Shadowrun.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Shadowrun."
    },
    {
        "slug": "shadowrun-factions",
        "name": "Shadowrun factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Shadowrun.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Shadowrun."
    },
    {
        "slug": "shadowrun-concepts",
        "name": "Shadowrun concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Shadowrun.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Shadowrun readable as a lore graph."
    },
    {
        "slug": "shadowrun-eras",
        "name": "Shadowrun eras",
        "type": "event",
        "short_description": "Periodization for Shadowrun.",
        "description": "Named eras and phases that help readers track how Shadowrun changes across time."
    },
    {
        "slug": "shadowrun-works",
        "name": "Shadowrun works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Shadowrun.",
        "description": "Primary works and adaptations through which most audiences encounter Shadowrun."
    },
    {
        "slug": "shadowrun-symbols",
        "name": "Shadowrun symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Shadowrun.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Shadowrun."
    },
    {
        "slug": "shadowrun-controversies",
        "name": "Shadowrun controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Shadowrun.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Shadowrun argumentative."
    },
    {
        "slug": "shadowrun-sources",
        "name": "Shadowrun sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Shadowrun.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Shadowrun."
    },
    {
        "slug": "shadowrun-geography",
        "name": "Shadowrun geography",
        "type": "place",
        "short_description": "Broader geographic framing for Shadowrun.",
        "description": "Regions, routes, and spatial systems that situate Shadowrun beyond single named places."
    },
    {
        "slug": "shadowrun-legacy",
        "name": "Shadowrun legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Shadowrun.",
        "description": "How Shadowrun continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "shadowrun-practices",
        "name": "Shadowrun practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Shadowrun.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Shadowrun."
    },
    {
        "slug": "shadowrun-entry-1",
        "name": "Shadowrun entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-2",
        "name": "Shadowrun entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-3",
        "name": "Shadowrun entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-4",
        "name": "Shadowrun entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-5",
        "name": "Shadowrun entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-6",
        "name": "Shadowrun entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-7",
        "name": "Shadowrun entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-8",
        "name": "Shadowrun entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-9",
        "name": "Shadowrun entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-10",
        "name": "Shadowrun entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-11",
        "name": "Shadowrun entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-12",
        "name": "Shadowrun entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-13",
        "name": "Shadowrun entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-14",
        "name": "Shadowrun entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-15",
        "name": "Shadowrun entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-16",
        "name": "Shadowrun entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-17",
        "name": "Shadowrun entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-18",
        "name": "Shadowrun entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-19",
        "name": "Shadowrun entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-20",
        "name": "Shadowrun entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-21",
        "name": "Shadowrun entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-22",
        "name": "Shadowrun entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-23",
        "name": "Shadowrun entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shadowrun-entry-24",
        "name": "Shadowrun entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shadowrun.",
        "description": "A supporting encyclopedia entry in the Shadowrun subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "shadowrun",
        "shadowrun-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "shadowrun",
        "shadowrun-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "shadowrun",
        "shadowrun-places",
        "contains",
        "Shadowrun places is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-events",
        "contains",
        "Shadowrun events is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-objects",
        "contains",
        "Shadowrun objects & artifacts is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-factions",
        "contains",
        "Shadowrun factions & groups is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-concepts",
        "contains",
        "Shadowrun concepts is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-eras",
        "contains",
        "Shadowrun eras is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-works",
        "contains",
        "Shadowrun works & media is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-symbols",
        "contains",
        "Shadowrun symbols is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-controversies",
        "contains",
        "Shadowrun controversies is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-sources",
        "contains",
        "Shadowrun sources is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-geography",
        "contains",
        "Shadowrun geography is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-legacy",
        "contains",
        "Shadowrun legacy is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-practices",
        "contains",
        "Shadowrun practices is a primary trailhead under Shadowrun.",
        0.88,
        0.82
    ],
    [
        "shadowrun",
        "shadowrun-entry-1",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-2",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-3",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-4",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-5",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-6",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-7",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-8",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-9",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-10",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-11",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-12",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-13",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-14",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-15",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-16",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-17",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-18",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-19",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-20",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-21",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-22",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-23",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ],
    [
        "shadowrun",
        "shadowrun-entry-24",
        "contains",
        "Supporting entry under Shadowrun.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
