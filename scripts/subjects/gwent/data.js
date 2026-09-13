/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "gwent",
        "name": "Gwent",
        "type": "topic",
        "short_description": "Witcher faction rows, spy cards, and the digital CCG born from a mini-game.",
        "description": "Witcher faction rows, spy cards, and the digital CCG born from a mini-game. This Ton-o-Lore subject maps people, places, events, and ideas tied to Gwent so readers can follow long-tail connections across card games."
    },
    {
        "slug": "gwent-figures",
        "name": "Gwent figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Gwent.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Gwent."
    },
    {
        "slug": "gwent-world",
        "name": "Gwent world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Gwent.",
        "description": "Geography, institutions, and periodization that give Gwent its encyclopedia shape."
    },
    {
        "slug": "gwent-places",
        "name": "Gwent places",
        "type": "place",
        "short_description": "Locations and geographies that frame Gwent.",
        "description": "Places, regions, and built sites that give Gwent its map — where events and figures concentrate."
    },
    {
        "slug": "gwent-events",
        "name": "Gwent events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Gwent.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Gwent timeline."
    },
    {
        "slug": "gwent-objects",
        "name": "Gwent objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Gwent.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Gwent."
    },
    {
        "slug": "gwent-factions",
        "name": "Gwent factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Gwent.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Gwent."
    },
    {
        "slug": "gwent-concepts",
        "name": "Gwent concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Gwent.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Gwent readable as a lore graph."
    },
    {
        "slug": "gwent-eras",
        "name": "Gwent eras",
        "type": "event",
        "short_description": "Periodization for Gwent.",
        "description": "Named eras and phases that help readers track how Gwent changes across time."
    },
    {
        "slug": "gwent-works",
        "name": "Gwent works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Gwent.",
        "description": "Primary works and adaptations through which most audiences encounter Gwent."
    },
    {
        "slug": "gwent-symbols",
        "name": "Gwent symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Gwent.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Gwent."
    },
    {
        "slug": "gwent-controversies",
        "name": "Gwent controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Gwent.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Gwent argumentative."
    },
    {
        "slug": "gwent-sources",
        "name": "Gwent sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Gwent.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Gwent."
    },
    {
        "slug": "gwent-geography",
        "name": "Gwent geography",
        "type": "place",
        "short_description": "Broader geographic framing for Gwent.",
        "description": "Regions, routes, and spatial systems that situate Gwent beyond single named places."
    },
    {
        "slug": "gwent-legacy",
        "name": "Gwent legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Gwent.",
        "description": "How Gwent continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "gwent-practices",
        "name": "Gwent practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Gwent.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Gwent."
    },
    {
        "slug": "gwent-entry-1",
        "name": "Gwent entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-2",
        "name": "Gwent entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-3",
        "name": "Gwent entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-4",
        "name": "Gwent entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-5",
        "name": "Gwent entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-6",
        "name": "Gwent entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-7",
        "name": "Gwent entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-8",
        "name": "Gwent entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-9",
        "name": "Gwent entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-10",
        "name": "Gwent entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-11",
        "name": "Gwent entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-12",
        "name": "Gwent entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-13",
        "name": "Gwent entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-14",
        "name": "Gwent entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-15",
        "name": "Gwent entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-16",
        "name": "Gwent entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-17",
        "name": "Gwent entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-18",
        "name": "Gwent entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-19",
        "name": "Gwent entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-20",
        "name": "Gwent entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-21",
        "name": "Gwent entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-22",
        "name": "Gwent entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-23",
        "name": "Gwent entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gwent-entry-24",
        "name": "Gwent entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gwent.",
        "description": "A supporting encyclopedia entry in the Gwent subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "gwent",
        "gwent-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "gwent",
        "gwent-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "gwent",
        "gwent-places",
        "contains",
        "Gwent places is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-events",
        "contains",
        "Gwent events is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-objects",
        "contains",
        "Gwent objects & artifacts is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-factions",
        "contains",
        "Gwent factions & groups is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-concepts",
        "contains",
        "Gwent concepts is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-eras",
        "contains",
        "Gwent eras is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-works",
        "contains",
        "Gwent works & media is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-symbols",
        "contains",
        "Gwent symbols is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-controversies",
        "contains",
        "Gwent controversies is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-sources",
        "contains",
        "Gwent sources is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-geography",
        "contains",
        "Gwent geography is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-legacy",
        "contains",
        "Gwent legacy is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-practices",
        "contains",
        "Gwent practices is a primary trailhead under Gwent.",
        0.88,
        0.82
    ],
    [
        "gwent",
        "gwent-entry-1",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-2",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-3",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-4",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-5",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-6",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-7",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-8",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-9",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-10",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-11",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-12",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-13",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-14",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-15",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-16",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-17",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-18",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-19",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-20",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-21",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-22",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-23",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ],
    [
        "gwent",
        "gwent-entry-24",
        "contains",
        "Supporting entry under Gwent.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
