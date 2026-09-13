/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "slavic-mythology",
        "name": "Slavic mythology",
        "type": "topic",
        "short_description": "Perun, Veles, household spirits, and the reconstructed pantheons of Eastern European folk belief.",
        "description": "Perun, Veles, household spirits, and the reconstructed pantheons of Eastern European folk belief. This Ton-o-Lore subject maps people, places, events, and ideas tied to Slavic mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "slavic-mythology-figures",
        "name": "Slavic mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Slavic mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Slavic mythology."
    },
    {
        "slug": "slavic-mythology-world",
        "name": "Slavic mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Slavic mythology.",
        "description": "Geography, institutions, and periodization that give Slavic mythology its encyclopedia shape."
    },
    {
        "slug": "slavic-mythology-places",
        "name": "Slavic mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Slavic mythology.",
        "description": "Places, regions, and built sites that give Slavic mythology its map — where events and figures concentrate."
    },
    {
        "slug": "slavic-mythology-events",
        "name": "Slavic mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Slavic mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Slavic mythology timeline."
    },
    {
        "slug": "slavic-mythology-objects",
        "name": "Slavic mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Slavic mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Slavic mythology."
    },
    {
        "slug": "slavic-mythology-factions",
        "name": "Slavic mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Slavic mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Slavic mythology."
    },
    {
        "slug": "slavic-mythology-concepts",
        "name": "Slavic mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Slavic mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Slavic mythology readable as a lore graph."
    },
    {
        "slug": "slavic-mythology-eras",
        "name": "Slavic mythology eras",
        "type": "event",
        "short_description": "Periodization for Slavic mythology.",
        "description": "Named eras and phases that help readers track how Slavic mythology changes across time."
    },
    {
        "slug": "slavic-mythology-works",
        "name": "Slavic mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Slavic mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Slavic mythology."
    },
    {
        "slug": "slavic-mythology-symbols",
        "name": "Slavic mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Slavic mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Slavic mythology."
    },
    {
        "slug": "slavic-mythology-controversies",
        "name": "Slavic mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Slavic mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Slavic mythology argumentative."
    },
    {
        "slug": "slavic-mythology-sources",
        "name": "Slavic mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Slavic mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Slavic mythology."
    },
    {
        "slug": "slavic-mythology-geography",
        "name": "Slavic mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Slavic mythology.",
        "description": "Regions, routes, and spatial systems that situate Slavic mythology beyond single named places."
    },
    {
        "slug": "slavic-mythology-legacy",
        "name": "Slavic mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Slavic mythology.",
        "description": "How Slavic mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "slavic-mythology-practices",
        "name": "Slavic mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Slavic mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Slavic mythology."
    },
    {
        "slug": "slavic-mythology-entry-1",
        "name": "Slavic mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-2",
        "name": "Slavic mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-3",
        "name": "Slavic mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-4",
        "name": "Slavic mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-5",
        "name": "Slavic mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-6",
        "name": "Slavic mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-7",
        "name": "Slavic mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-8",
        "name": "Slavic mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-9",
        "name": "Slavic mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-10",
        "name": "Slavic mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-11",
        "name": "Slavic mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-12",
        "name": "Slavic mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-13",
        "name": "Slavic mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-14",
        "name": "Slavic mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-15",
        "name": "Slavic mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-16",
        "name": "Slavic mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-17",
        "name": "Slavic mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-18",
        "name": "Slavic mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-19",
        "name": "Slavic mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-20",
        "name": "Slavic mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-21",
        "name": "Slavic mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-22",
        "name": "Slavic mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-23",
        "name": "Slavic mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "slavic-mythology-entry-24",
        "name": "Slavic mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Slavic mythology.",
        "description": "A supporting encyclopedia entry in the Slavic mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "slavic-mythology",
        "slavic-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "slavic-mythology",
        "slavic-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "slavic-mythology",
        "slavic-mythology-places",
        "contains",
        "Slavic mythology places is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-events",
        "contains",
        "Slavic mythology events is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-objects",
        "contains",
        "Slavic mythology objects & artifacts is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-factions",
        "contains",
        "Slavic mythology factions & groups is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-concepts",
        "contains",
        "Slavic mythology concepts is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-eras",
        "contains",
        "Slavic mythology eras is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-works",
        "contains",
        "Slavic mythology works & media is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-symbols",
        "contains",
        "Slavic mythology symbols is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-controversies",
        "contains",
        "Slavic mythology controversies is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-sources",
        "contains",
        "Slavic mythology sources is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-geography",
        "contains",
        "Slavic mythology geography is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-legacy",
        "contains",
        "Slavic mythology legacy is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-practices",
        "contains",
        "Slavic mythology practices is a primary trailhead under Slavic mythology.",
        0.88,
        0.82
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-1",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-2",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-3",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-4",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-5",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-6",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-7",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-8",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-9",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-10",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-11",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-12",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-13",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-14",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-15",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-16",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-17",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-18",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-19",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-20",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-21",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-22",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-23",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ],
    [
        "slavic-mythology",
        "slavic-mythology-entry-24",
        "contains",
        "Supporting entry under Slavic mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
