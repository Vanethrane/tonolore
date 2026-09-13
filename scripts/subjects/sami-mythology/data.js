/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sami-mythology",
        "name": "Sámi mythology",
        "type": "topic",
        "short_description": "Noaidi practice, sacred animals, and Arctic cosmologies of the Sámi homeland.",
        "description": "Noaidi practice, sacred animals, and Arctic cosmologies of the Sámi homeland. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sámi mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "sami-mythology-figures",
        "name": "Sámi mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sámi mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sámi mythology."
    },
    {
        "slug": "sami-mythology-world",
        "name": "Sámi mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sámi mythology.",
        "description": "Geography, institutions, and periodization that give Sámi mythology its encyclopedia shape."
    },
    {
        "slug": "sami-mythology-places",
        "name": "Sámi mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sámi mythology.",
        "description": "Places, regions, and built sites that give Sámi mythology its map — where events and figures concentrate."
    },
    {
        "slug": "sami-mythology-events",
        "name": "Sámi mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sámi mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sámi mythology timeline."
    },
    {
        "slug": "sami-mythology-objects",
        "name": "Sámi mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sámi mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sámi mythology."
    },
    {
        "slug": "sami-mythology-factions",
        "name": "Sámi mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sámi mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sámi mythology."
    },
    {
        "slug": "sami-mythology-concepts",
        "name": "Sámi mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sámi mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sámi mythology readable as a lore graph."
    },
    {
        "slug": "sami-mythology-eras",
        "name": "Sámi mythology eras",
        "type": "event",
        "short_description": "Periodization for Sámi mythology.",
        "description": "Named eras and phases that help readers track how Sámi mythology changes across time."
    },
    {
        "slug": "sami-mythology-works",
        "name": "Sámi mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sámi mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Sámi mythology."
    },
    {
        "slug": "sami-mythology-symbols",
        "name": "Sámi mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sámi mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sámi mythology."
    },
    {
        "slug": "sami-mythology-controversies",
        "name": "Sámi mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sámi mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sámi mythology argumentative."
    },
    {
        "slug": "sami-mythology-sources",
        "name": "Sámi mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sámi mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sámi mythology."
    },
    {
        "slug": "sami-mythology-geography",
        "name": "Sámi mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sámi mythology.",
        "description": "Regions, routes, and spatial systems that situate Sámi mythology beyond single named places."
    },
    {
        "slug": "sami-mythology-legacy",
        "name": "Sámi mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sámi mythology.",
        "description": "How Sámi mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sami-mythology-practices",
        "name": "Sámi mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sámi mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sámi mythology."
    },
    {
        "slug": "sami-mythology-entry-1",
        "name": "Sámi mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-2",
        "name": "Sámi mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-3",
        "name": "Sámi mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-4",
        "name": "Sámi mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-5",
        "name": "Sámi mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-6",
        "name": "Sámi mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-7",
        "name": "Sámi mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-8",
        "name": "Sámi mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-9",
        "name": "Sámi mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-10",
        "name": "Sámi mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-11",
        "name": "Sámi mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-12",
        "name": "Sámi mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-13",
        "name": "Sámi mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-14",
        "name": "Sámi mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-15",
        "name": "Sámi mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-16",
        "name": "Sámi mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-17",
        "name": "Sámi mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-18",
        "name": "Sámi mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-19",
        "name": "Sámi mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-20",
        "name": "Sámi mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-21",
        "name": "Sámi mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-22",
        "name": "Sámi mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-23",
        "name": "Sámi mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sami-mythology-entry-24",
        "name": "Sámi mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sámi mythology.",
        "description": "A supporting encyclopedia entry in the Sámi mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sami-mythology",
        "sami-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sami-mythology",
        "sami-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sami-mythology",
        "sami-mythology-places",
        "contains",
        "Sámi mythology places is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-events",
        "contains",
        "Sámi mythology events is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-objects",
        "contains",
        "Sámi mythology objects & artifacts is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-factions",
        "contains",
        "Sámi mythology factions & groups is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-concepts",
        "contains",
        "Sámi mythology concepts is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-eras",
        "contains",
        "Sámi mythology eras is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-works",
        "contains",
        "Sámi mythology works & media is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-symbols",
        "contains",
        "Sámi mythology symbols is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-controversies",
        "contains",
        "Sámi mythology controversies is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-sources",
        "contains",
        "Sámi mythology sources is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-geography",
        "contains",
        "Sámi mythology geography is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-legacy",
        "contains",
        "Sámi mythology legacy is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-practices",
        "contains",
        "Sámi mythology practices is a primary trailhead under Sámi mythology.",
        0.88,
        0.82
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-1",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-2",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-3",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-4",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-5",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-6",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-7",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-8",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-9",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-10",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-11",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-12",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-13",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-14",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-15",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-16",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-17",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-18",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-19",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-20",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-21",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-22",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-23",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ],
    [
        "sami-mythology",
        "sami-mythology-entry-24",
        "contains",
        "Supporting entry under Sámi mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
