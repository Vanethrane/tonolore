/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hittite-mythology",
        "name": "Hittite mythology",
        "type": "topic",
        "short_description": "Anatolian storm gods, Kumarbi cycles, and the imperial archives of Hattusa.",
        "description": "Anatolian storm gods, Kumarbi cycles, and the imperial archives of Hattusa. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hittite mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "hittite-mythology-figures",
        "name": "Hittite mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hittite mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hittite mythology."
    },
    {
        "slug": "hittite-mythology-world",
        "name": "Hittite mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hittite mythology.",
        "description": "Geography, institutions, and periodization that give Hittite mythology its encyclopedia shape."
    },
    {
        "slug": "hittite-mythology-places",
        "name": "Hittite mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hittite mythology.",
        "description": "Places, regions, and built sites that give Hittite mythology its map — where events and figures concentrate."
    },
    {
        "slug": "hittite-mythology-events",
        "name": "Hittite mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hittite mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hittite mythology timeline."
    },
    {
        "slug": "hittite-mythology-objects",
        "name": "Hittite mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hittite mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hittite mythology."
    },
    {
        "slug": "hittite-mythology-factions",
        "name": "Hittite mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hittite mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hittite mythology."
    },
    {
        "slug": "hittite-mythology-concepts",
        "name": "Hittite mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hittite mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hittite mythology readable as a lore graph."
    },
    {
        "slug": "hittite-mythology-eras",
        "name": "Hittite mythology eras",
        "type": "event",
        "short_description": "Periodization for Hittite mythology.",
        "description": "Named eras and phases that help readers track how Hittite mythology changes across time."
    },
    {
        "slug": "hittite-mythology-works",
        "name": "Hittite mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hittite mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Hittite mythology."
    },
    {
        "slug": "hittite-mythology-symbols",
        "name": "Hittite mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hittite mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hittite mythology."
    },
    {
        "slug": "hittite-mythology-controversies",
        "name": "Hittite mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hittite mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hittite mythology argumentative."
    },
    {
        "slug": "hittite-mythology-sources",
        "name": "Hittite mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hittite mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hittite mythology."
    },
    {
        "slug": "hittite-mythology-geography",
        "name": "Hittite mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hittite mythology.",
        "description": "Regions, routes, and spatial systems that situate Hittite mythology beyond single named places."
    },
    {
        "slug": "hittite-mythology-legacy",
        "name": "Hittite mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hittite mythology.",
        "description": "How Hittite mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hittite-mythology-practices",
        "name": "Hittite mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hittite mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hittite mythology."
    },
    {
        "slug": "hittite-mythology-entry-1",
        "name": "Hittite mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-2",
        "name": "Hittite mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-3",
        "name": "Hittite mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-4",
        "name": "Hittite mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-5",
        "name": "Hittite mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-6",
        "name": "Hittite mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-7",
        "name": "Hittite mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-8",
        "name": "Hittite mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-9",
        "name": "Hittite mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-10",
        "name": "Hittite mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-11",
        "name": "Hittite mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-12",
        "name": "Hittite mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-13",
        "name": "Hittite mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-14",
        "name": "Hittite mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-15",
        "name": "Hittite mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-16",
        "name": "Hittite mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-17",
        "name": "Hittite mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-18",
        "name": "Hittite mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-19",
        "name": "Hittite mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-20",
        "name": "Hittite mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-21",
        "name": "Hittite mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-22",
        "name": "Hittite mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-23",
        "name": "Hittite mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hittite-mythology-entry-24",
        "name": "Hittite mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hittite mythology.",
        "description": "A supporting encyclopedia entry in the Hittite mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hittite-mythology",
        "hittite-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hittite-mythology",
        "hittite-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hittite-mythology",
        "hittite-mythology-places",
        "contains",
        "Hittite mythology places is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-events",
        "contains",
        "Hittite mythology events is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-objects",
        "contains",
        "Hittite mythology objects & artifacts is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-factions",
        "contains",
        "Hittite mythology factions & groups is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-concepts",
        "contains",
        "Hittite mythology concepts is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-eras",
        "contains",
        "Hittite mythology eras is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-works",
        "contains",
        "Hittite mythology works & media is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-symbols",
        "contains",
        "Hittite mythology symbols is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-controversies",
        "contains",
        "Hittite mythology controversies is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-sources",
        "contains",
        "Hittite mythology sources is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-geography",
        "contains",
        "Hittite mythology geography is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-legacy",
        "contains",
        "Hittite mythology legacy is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-practices",
        "contains",
        "Hittite mythology practices is a primary trailhead under Hittite mythology.",
        0.88,
        0.82
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-1",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-2",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-3",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-4",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-5",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-6",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-7",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-8",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-9",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-10",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-11",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-12",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-13",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-14",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-15",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-16",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-17",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-18",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-19",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-20",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-21",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-22",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-23",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ],
    [
        "hittite-mythology",
        "hittite-mythology-entry-24",
        "contains",
        "Supporting entry under Hittite mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
