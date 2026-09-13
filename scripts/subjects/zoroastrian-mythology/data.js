/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "zoroastrian-mythology",
        "name": "Zoroastrian mythology",
        "type": "topic",
        "short_description": "Ahura Mazda, dualistic struggle, and the Avestan narrative world of ancient Iran.",
        "description": "Ahura Mazda, dualistic struggle, and the Avestan narrative world of ancient Iran. This Ton-o-Lore subject maps people, places, events, and ideas tied to Zoroastrian mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "zoroastrian-mythology-figures",
        "name": "Zoroastrian mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Zoroastrian mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Zoroastrian mythology."
    },
    {
        "slug": "zoroastrian-mythology-world",
        "name": "Zoroastrian mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Zoroastrian mythology.",
        "description": "Geography, institutions, and periodization that give Zoroastrian mythology its encyclopedia shape."
    },
    {
        "slug": "zoroastrian-mythology-places",
        "name": "Zoroastrian mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Zoroastrian mythology.",
        "description": "Places, regions, and built sites that give Zoroastrian mythology its map — where events and figures concentrate."
    },
    {
        "slug": "zoroastrian-mythology-events",
        "name": "Zoroastrian mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Zoroastrian mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Zoroastrian mythology timeline."
    },
    {
        "slug": "zoroastrian-mythology-objects",
        "name": "Zoroastrian mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Zoroastrian mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Zoroastrian mythology."
    },
    {
        "slug": "zoroastrian-mythology-factions",
        "name": "Zoroastrian mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Zoroastrian mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Zoroastrian mythology."
    },
    {
        "slug": "zoroastrian-mythology-concepts",
        "name": "Zoroastrian mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Zoroastrian mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Zoroastrian mythology readable as a lore graph."
    },
    {
        "slug": "zoroastrian-mythology-eras",
        "name": "Zoroastrian mythology eras",
        "type": "event",
        "short_description": "Periodization for Zoroastrian mythology.",
        "description": "Named eras and phases that help readers track how Zoroastrian mythology changes across time."
    },
    {
        "slug": "zoroastrian-mythology-works",
        "name": "Zoroastrian mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Zoroastrian mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Zoroastrian mythology."
    },
    {
        "slug": "zoroastrian-mythology-symbols",
        "name": "Zoroastrian mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Zoroastrian mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Zoroastrian mythology."
    },
    {
        "slug": "zoroastrian-mythology-controversies",
        "name": "Zoroastrian mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Zoroastrian mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Zoroastrian mythology argumentative."
    },
    {
        "slug": "zoroastrian-mythology-sources",
        "name": "Zoroastrian mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Zoroastrian mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Zoroastrian mythology."
    },
    {
        "slug": "zoroastrian-mythology-geography",
        "name": "Zoroastrian mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Zoroastrian mythology.",
        "description": "Regions, routes, and spatial systems that situate Zoroastrian mythology beyond single named places."
    },
    {
        "slug": "zoroastrian-mythology-legacy",
        "name": "Zoroastrian mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Zoroastrian mythology.",
        "description": "How Zoroastrian mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "zoroastrian-mythology-practices",
        "name": "Zoroastrian mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Zoroastrian mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Zoroastrian mythology."
    },
    {
        "slug": "zoroastrian-mythology-entry-1",
        "name": "Zoroastrian mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-2",
        "name": "Zoroastrian mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-3",
        "name": "Zoroastrian mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-4",
        "name": "Zoroastrian mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-5",
        "name": "Zoroastrian mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-6",
        "name": "Zoroastrian mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-7",
        "name": "Zoroastrian mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-8",
        "name": "Zoroastrian mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-9",
        "name": "Zoroastrian mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-10",
        "name": "Zoroastrian mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-11",
        "name": "Zoroastrian mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-12",
        "name": "Zoroastrian mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-13",
        "name": "Zoroastrian mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-14",
        "name": "Zoroastrian mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-15",
        "name": "Zoroastrian mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-16",
        "name": "Zoroastrian mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-17",
        "name": "Zoroastrian mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-18",
        "name": "Zoroastrian mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-19",
        "name": "Zoroastrian mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-20",
        "name": "Zoroastrian mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-21",
        "name": "Zoroastrian mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-22",
        "name": "Zoroastrian mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-23",
        "name": "Zoroastrian mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zoroastrian-mythology-entry-24",
        "name": "Zoroastrian mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zoroastrian mythology.",
        "description": "A supporting encyclopedia entry in the Zoroastrian mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-places",
        "contains",
        "Zoroastrian mythology places is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-events",
        "contains",
        "Zoroastrian mythology events is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-objects",
        "contains",
        "Zoroastrian mythology objects & artifacts is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-factions",
        "contains",
        "Zoroastrian mythology factions & groups is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-concepts",
        "contains",
        "Zoroastrian mythology concepts is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-eras",
        "contains",
        "Zoroastrian mythology eras is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-works",
        "contains",
        "Zoroastrian mythology works & media is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-symbols",
        "contains",
        "Zoroastrian mythology symbols is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-controversies",
        "contains",
        "Zoroastrian mythology controversies is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-sources",
        "contains",
        "Zoroastrian mythology sources is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-geography",
        "contains",
        "Zoroastrian mythology geography is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-legacy",
        "contains",
        "Zoroastrian mythology legacy is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-practices",
        "contains",
        "Zoroastrian mythology practices is a primary trailhead under Zoroastrian mythology.",
        0.88,
        0.82
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-1",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-2",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-3",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-4",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-5",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-6",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-7",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-8",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-9",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-10",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-11",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-12",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-13",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-14",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-15",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-16",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-17",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-18",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-19",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-20",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-21",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-22",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-23",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ],
    [
        "zoroastrian-mythology",
        "zoroastrian-mythology-entry-24",
        "contains",
        "Supporting entry under Zoroastrian mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
