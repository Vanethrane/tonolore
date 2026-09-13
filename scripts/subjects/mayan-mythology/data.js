/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mayan-mythology",
        "name": "Mayan mythology",
        "type": "topic",
        "short_description": "Hero Twins, underworld Xibalba, and the Popol Vuh cycles of Maya sacred narrative.",
        "description": "Hero Twins, underworld Xibalba, and the Popol Vuh cycles of Maya sacred narrative. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mayan mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "mayan-mythology-figures",
        "name": "Mayan mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mayan mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mayan mythology."
    },
    {
        "slug": "mayan-mythology-world",
        "name": "Mayan mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mayan mythology.",
        "description": "Geography, institutions, and periodization that give Mayan mythology its encyclopedia shape."
    },
    {
        "slug": "mayan-mythology-places",
        "name": "Mayan mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mayan mythology.",
        "description": "Places, regions, and built sites that give Mayan mythology its map — where events and figures concentrate."
    },
    {
        "slug": "mayan-mythology-events",
        "name": "Mayan mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mayan mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mayan mythology timeline."
    },
    {
        "slug": "mayan-mythology-objects",
        "name": "Mayan mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mayan mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mayan mythology."
    },
    {
        "slug": "mayan-mythology-factions",
        "name": "Mayan mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mayan mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mayan mythology."
    },
    {
        "slug": "mayan-mythology-concepts",
        "name": "Mayan mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mayan mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mayan mythology readable as a lore graph."
    },
    {
        "slug": "mayan-mythology-eras",
        "name": "Mayan mythology eras",
        "type": "event",
        "short_description": "Periodization for Mayan mythology.",
        "description": "Named eras and phases that help readers track how Mayan mythology changes across time."
    },
    {
        "slug": "mayan-mythology-works",
        "name": "Mayan mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mayan mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Mayan mythology."
    },
    {
        "slug": "mayan-mythology-symbols",
        "name": "Mayan mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mayan mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mayan mythology."
    },
    {
        "slug": "mayan-mythology-controversies",
        "name": "Mayan mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mayan mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mayan mythology argumentative."
    },
    {
        "slug": "mayan-mythology-sources",
        "name": "Mayan mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mayan mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mayan mythology."
    },
    {
        "slug": "mayan-mythology-geography",
        "name": "Mayan mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mayan mythology.",
        "description": "Regions, routes, and spatial systems that situate Mayan mythology beyond single named places."
    },
    {
        "slug": "mayan-mythology-legacy",
        "name": "Mayan mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mayan mythology.",
        "description": "How Mayan mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mayan-mythology-practices",
        "name": "Mayan mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mayan mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mayan mythology."
    },
    {
        "slug": "mayan-mythology-entry-1",
        "name": "Mayan mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-2",
        "name": "Mayan mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-3",
        "name": "Mayan mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-4",
        "name": "Mayan mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-5",
        "name": "Mayan mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-6",
        "name": "Mayan mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-7",
        "name": "Mayan mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-8",
        "name": "Mayan mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-9",
        "name": "Mayan mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-10",
        "name": "Mayan mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-11",
        "name": "Mayan mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-12",
        "name": "Mayan mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-13",
        "name": "Mayan mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-14",
        "name": "Mayan mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-15",
        "name": "Mayan mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-16",
        "name": "Mayan mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-17",
        "name": "Mayan mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-18",
        "name": "Mayan mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-19",
        "name": "Mayan mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-20",
        "name": "Mayan mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-21",
        "name": "Mayan mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-22",
        "name": "Mayan mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-23",
        "name": "Mayan mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mayan-mythology-entry-24",
        "name": "Mayan mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mayan mythology.",
        "description": "A supporting encyclopedia entry in the Mayan mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mayan-mythology",
        "mayan-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mayan-mythology",
        "mayan-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mayan-mythology",
        "mayan-mythology-places",
        "contains",
        "Mayan mythology places is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-events",
        "contains",
        "Mayan mythology events is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-objects",
        "contains",
        "Mayan mythology objects & artifacts is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-factions",
        "contains",
        "Mayan mythology factions & groups is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-concepts",
        "contains",
        "Mayan mythology concepts is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-eras",
        "contains",
        "Mayan mythology eras is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-works",
        "contains",
        "Mayan mythology works & media is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-symbols",
        "contains",
        "Mayan mythology symbols is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-controversies",
        "contains",
        "Mayan mythology controversies is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-sources",
        "contains",
        "Mayan mythology sources is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-geography",
        "contains",
        "Mayan mythology geography is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-legacy",
        "contains",
        "Mayan mythology legacy is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-practices",
        "contains",
        "Mayan mythology practices is a primary trailhead under Mayan mythology.",
        0.88,
        0.82
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-1",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-2",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-3",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-4",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-5",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-6",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-7",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-8",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-9",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-10",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-11",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-12",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-13",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-14",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-15",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-16",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-17",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-18",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-19",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-20",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-21",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-22",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-23",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ],
    [
        "mayan-mythology",
        "mayan-mythology-entry-24",
        "contains",
        "Supporting entry under Mayan mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
