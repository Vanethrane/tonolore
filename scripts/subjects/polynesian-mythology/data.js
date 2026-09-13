/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "polynesian-mythology",
        "name": "Polynesian mythology",
        "type": "topic",
        "short_description": "Maui, voyaging gods, and oceanic cosmologies spanning Hawaii, Aotearoa, and the Pacific.",
        "description": "Maui, voyaging gods, and oceanic cosmologies spanning Hawaii, Aotearoa, and the Pacific. This Ton-o-Lore subject maps people, places, events, and ideas tied to Polynesian mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "polynesian-mythology-figures",
        "name": "Polynesian mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Polynesian mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Polynesian mythology."
    },
    {
        "slug": "polynesian-mythology-world",
        "name": "Polynesian mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Polynesian mythology.",
        "description": "Geography, institutions, and periodization that give Polynesian mythology its encyclopedia shape."
    },
    {
        "slug": "polynesian-mythology-places",
        "name": "Polynesian mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Polynesian mythology.",
        "description": "Places, regions, and built sites that give Polynesian mythology its map — where events and figures concentrate."
    },
    {
        "slug": "polynesian-mythology-events",
        "name": "Polynesian mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Polynesian mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Polynesian mythology timeline."
    },
    {
        "slug": "polynesian-mythology-objects",
        "name": "Polynesian mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Polynesian mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Polynesian mythology."
    },
    {
        "slug": "polynesian-mythology-factions",
        "name": "Polynesian mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Polynesian mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Polynesian mythology."
    },
    {
        "slug": "polynesian-mythology-concepts",
        "name": "Polynesian mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Polynesian mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Polynesian mythology readable as a lore graph."
    },
    {
        "slug": "polynesian-mythology-eras",
        "name": "Polynesian mythology eras",
        "type": "event",
        "short_description": "Periodization for Polynesian mythology.",
        "description": "Named eras and phases that help readers track how Polynesian mythology changes across time."
    },
    {
        "slug": "polynesian-mythology-works",
        "name": "Polynesian mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Polynesian mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Polynesian mythology."
    },
    {
        "slug": "polynesian-mythology-symbols",
        "name": "Polynesian mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Polynesian mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Polynesian mythology."
    },
    {
        "slug": "polynesian-mythology-controversies",
        "name": "Polynesian mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Polynesian mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Polynesian mythology argumentative."
    },
    {
        "slug": "polynesian-mythology-sources",
        "name": "Polynesian mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Polynesian mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Polynesian mythology."
    },
    {
        "slug": "polynesian-mythology-geography",
        "name": "Polynesian mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Polynesian mythology.",
        "description": "Regions, routes, and spatial systems that situate Polynesian mythology beyond single named places."
    },
    {
        "slug": "polynesian-mythology-legacy",
        "name": "Polynesian mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Polynesian mythology.",
        "description": "How Polynesian mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "polynesian-mythology-practices",
        "name": "Polynesian mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Polynesian mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Polynesian mythology."
    },
    {
        "slug": "polynesian-mythology-entry-1",
        "name": "Polynesian mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-2",
        "name": "Polynesian mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-3",
        "name": "Polynesian mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-4",
        "name": "Polynesian mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-5",
        "name": "Polynesian mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-6",
        "name": "Polynesian mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-7",
        "name": "Polynesian mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-8",
        "name": "Polynesian mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-9",
        "name": "Polynesian mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-10",
        "name": "Polynesian mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-11",
        "name": "Polynesian mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-12",
        "name": "Polynesian mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-13",
        "name": "Polynesian mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-14",
        "name": "Polynesian mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-15",
        "name": "Polynesian mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-16",
        "name": "Polynesian mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-17",
        "name": "Polynesian mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-18",
        "name": "Polynesian mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-19",
        "name": "Polynesian mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-20",
        "name": "Polynesian mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-21",
        "name": "Polynesian mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-22",
        "name": "Polynesian mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-23",
        "name": "Polynesian mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polynesian-mythology-entry-24",
        "name": "Polynesian mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polynesian mythology.",
        "description": "A supporting encyclopedia entry in the Polynesian mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "polynesian-mythology",
        "polynesian-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-places",
        "contains",
        "Polynesian mythology places is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-events",
        "contains",
        "Polynesian mythology events is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-objects",
        "contains",
        "Polynesian mythology objects & artifacts is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-factions",
        "contains",
        "Polynesian mythology factions & groups is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-concepts",
        "contains",
        "Polynesian mythology concepts is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-eras",
        "contains",
        "Polynesian mythology eras is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-works",
        "contains",
        "Polynesian mythology works & media is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-symbols",
        "contains",
        "Polynesian mythology symbols is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-controversies",
        "contains",
        "Polynesian mythology controversies is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-sources",
        "contains",
        "Polynesian mythology sources is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-geography",
        "contains",
        "Polynesian mythology geography is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-legacy",
        "contains",
        "Polynesian mythology legacy is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-practices",
        "contains",
        "Polynesian mythology practices is a primary trailhead under Polynesian mythology.",
        0.88,
        0.82
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-1",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-2",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-3",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-4",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-5",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-6",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-7",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-8",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-9",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-10",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-11",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-12",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-13",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-14",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-15",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-16",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-17",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-18",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-19",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-20",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-21",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-22",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-23",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ],
    [
        "polynesian-mythology",
        "polynesian-mythology-entry-24",
        "contains",
        "Supporting entry under Polynesian mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
