/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aztec-mythology",
        "name": "Aztec mythology",
        "type": "topic",
        "short_description": "Mexica gods, suns of creation, and ritual calendars that still shape Mesoamerican myth study.",
        "description": "Mexica gods, suns of creation, and ritual calendars that still shape Mesoamerican myth study. This Ton-o-Lore subject maps people, places, events, and ideas tied to Aztec mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "aztec-mythology-figures",
        "name": "Aztec mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Aztec mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Aztec mythology."
    },
    {
        "slug": "aztec-mythology-world",
        "name": "Aztec mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Aztec mythology.",
        "description": "Geography, institutions, and periodization that give Aztec mythology its encyclopedia shape."
    },
    {
        "slug": "aztec-mythology-places",
        "name": "Aztec mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Aztec mythology.",
        "description": "Places, regions, and built sites that give Aztec mythology its map — where events and figures concentrate."
    },
    {
        "slug": "aztec-mythology-events",
        "name": "Aztec mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Aztec mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Aztec mythology timeline."
    },
    {
        "slug": "aztec-mythology-objects",
        "name": "Aztec mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Aztec mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Aztec mythology."
    },
    {
        "slug": "aztec-mythology-factions",
        "name": "Aztec mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Aztec mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Aztec mythology."
    },
    {
        "slug": "aztec-mythology-concepts",
        "name": "Aztec mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Aztec mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Aztec mythology readable as a lore graph."
    },
    {
        "slug": "aztec-mythology-eras",
        "name": "Aztec mythology eras",
        "type": "event",
        "short_description": "Periodization for Aztec mythology.",
        "description": "Named eras and phases that help readers track how Aztec mythology changes across time."
    },
    {
        "slug": "aztec-mythology-works",
        "name": "Aztec mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Aztec mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Aztec mythology."
    },
    {
        "slug": "aztec-mythology-symbols",
        "name": "Aztec mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Aztec mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Aztec mythology."
    },
    {
        "slug": "aztec-mythology-controversies",
        "name": "Aztec mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Aztec mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Aztec mythology argumentative."
    },
    {
        "slug": "aztec-mythology-sources",
        "name": "Aztec mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Aztec mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Aztec mythology."
    },
    {
        "slug": "aztec-mythology-geography",
        "name": "Aztec mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Aztec mythology.",
        "description": "Regions, routes, and spatial systems that situate Aztec mythology beyond single named places."
    },
    {
        "slug": "aztec-mythology-legacy",
        "name": "Aztec mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Aztec mythology.",
        "description": "How Aztec mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aztec-mythology-practices",
        "name": "Aztec mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Aztec mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Aztec mythology."
    },
    {
        "slug": "aztec-mythology-entry-1",
        "name": "Aztec mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-2",
        "name": "Aztec mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-3",
        "name": "Aztec mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-4",
        "name": "Aztec mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-5",
        "name": "Aztec mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-6",
        "name": "Aztec mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-7",
        "name": "Aztec mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-8",
        "name": "Aztec mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-9",
        "name": "Aztec mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-10",
        "name": "Aztec mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-11",
        "name": "Aztec mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-12",
        "name": "Aztec mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-13",
        "name": "Aztec mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-14",
        "name": "Aztec mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-15",
        "name": "Aztec mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-16",
        "name": "Aztec mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-17",
        "name": "Aztec mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-18",
        "name": "Aztec mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-19",
        "name": "Aztec mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-20",
        "name": "Aztec mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-21",
        "name": "Aztec mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-22",
        "name": "Aztec mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-23",
        "name": "Aztec mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-mythology-entry-24",
        "name": "Aztec mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec mythology.",
        "description": "A supporting encyclopedia entry in the Aztec mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aztec-mythology",
        "aztec-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aztec-mythology",
        "aztec-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aztec-mythology",
        "aztec-mythology-places",
        "contains",
        "Aztec mythology places is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-events",
        "contains",
        "Aztec mythology events is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-objects",
        "contains",
        "Aztec mythology objects & artifacts is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-factions",
        "contains",
        "Aztec mythology factions & groups is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-concepts",
        "contains",
        "Aztec mythology concepts is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-eras",
        "contains",
        "Aztec mythology eras is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-works",
        "contains",
        "Aztec mythology works & media is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-symbols",
        "contains",
        "Aztec mythology symbols is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-controversies",
        "contains",
        "Aztec mythology controversies is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-sources",
        "contains",
        "Aztec mythology sources is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-geography",
        "contains",
        "Aztec mythology geography is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-legacy",
        "contains",
        "Aztec mythology legacy is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-practices",
        "contains",
        "Aztec mythology practices is a primary trailhead under Aztec mythology.",
        0.88,
        0.82
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-1",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-2",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-3",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-4",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-5",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-6",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-7",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-8",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-9",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-10",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-11",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-12",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-13",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-14",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-15",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-16",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-17",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-18",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-19",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-20",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-21",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-22",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-23",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ],
    [
        "aztec-mythology",
        "aztec-mythology-entry-24",
        "contains",
        "Supporting entry under Aztec mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
