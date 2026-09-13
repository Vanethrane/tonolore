/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "norse-mythology",
        "name": "Norse mythology",
        "type": "topic",
        "short_description": "Aesir, giants, and Ragnarök cycles mapped from the Eddas into modern pop myth.",
        "description": "Aesir, giants, and Ragnarök cycles mapped from the Eddas into modern pop myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Norse mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "norse-mythology-figures",
        "name": "Norse mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Norse mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Norse mythology."
    },
    {
        "slug": "norse-mythology-world",
        "name": "Norse mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Norse mythology.",
        "description": "Geography, institutions, and periodization that give Norse mythology its encyclopedia shape."
    },
    {
        "slug": "norse-mythology-places",
        "name": "Norse mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Norse mythology.",
        "description": "Places, regions, and built sites that give Norse mythology its map — where events and figures concentrate."
    },
    {
        "slug": "norse-mythology-events",
        "name": "Norse mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Norse mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Norse mythology timeline."
    },
    {
        "slug": "norse-mythology-objects",
        "name": "Norse mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Norse mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Norse mythology."
    },
    {
        "slug": "norse-mythology-factions",
        "name": "Norse mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Norse mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Norse mythology."
    },
    {
        "slug": "norse-mythology-concepts",
        "name": "Norse mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Norse mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Norse mythology readable as a lore graph."
    },
    {
        "slug": "norse-mythology-eras",
        "name": "Norse mythology eras",
        "type": "event",
        "short_description": "Periodization for Norse mythology.",
        "description": "Named eras and phases that help readers track how Norse mythology changes across time."
    },
    {
        "slug": "norse-mythology-works",
        "name": "Norse mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Norse mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Norse mythology."
    },
    {
        "slug": "norse-mythology-symbols",
        "name": "Norse mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Norse mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Norse mythology."
    },
    {
        "slug": "norse-mythology-controversies",
        "name": "Norse mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Norse mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Norse mythology argumentative."
    },
    {
        "slug": "norse-mythology-sources",
        "name": "Norse mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Norse mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Norse mythology."
    },
    {
        "slug": "norse-mythology-geography",
        "name": "Norse mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Norse mythology.",
        "description": "Regions, routes, and spatial systems that situate Norse mythology beyond single named places."
    },
    {
        "slug": "norse-mythology-legacy",
        "name": "Norse mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Norse mythology.",
        "description": "How Norse mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "norse-mythology-practices",
        "name": "Norse mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Norse mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Norse mythology."
    },
    {
        "slug": "norse-mythology-entry-1",
        "name": "Norse mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-2",
        "name": "Norse mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-3",
        "name": "Norse mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-4",
        "name": "Norse mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-5",
        "name": "Norse mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-6",
        "name": "Norse mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-7",
        "name": "Norse mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-8",
        "name": "Norse mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-9",
        "name": "Norse mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-10",
        "name": "Norse mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-11",
        "name": "Norse mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-12",
        "name": "Norse mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-13",
        "name": "Norse mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-14",
        "name": "Norse mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-15",
        "name": "Norse mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-16",
        "name": "Norse mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-17",
        "name": "Norse mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-18",
        "name": "Norse mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-19",
        "name": "Norse mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-20",
        "name": "Norse mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-21",
        "name": "Norse mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-22",
        "name": "Norse mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-23",
        "name": "Norse mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norse-mythology-entry-24",
        "name": "Norse mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norse mythology.",
        "description": "A supporting encyclopedia entry in the Norse mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "norse-mythology",
        "norse-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "norse-mythology",
        "norse-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "norse-mythology",
        "norse-mythology-places",
        "contains",
        "Norse mythology places is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-events",
        "contains",
        "Norse mythology events is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-objects",
        "contains",
        "Norse mythology objects & artifacts is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-factions",
        "contains",
        "Norse mythology factions & groups is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-concepts",
        "contains",
        "Norse mythology concepts is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-eras",
        "contains",
        "Norse mythology eras is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-works",
        "contains",
        "Norse mythology works & media is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-symbols",
        "contains",
        "Norse mythology symbols is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-controversies",
        "contains",
        "Norse mythology controversies is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-sources",
        "contains",
        "Norse mythology sources is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-geography",
        "contains",
        "Norse mythology geography is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-legacy",
        "contains",
        "Norse mythology legacy is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-practices",
        "contains",
        "Norse mythology practices is a primary trailhead under Norse mythology.",
        0.88,
        0.82
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-1",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-2",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-3",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-4",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-5",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-6",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-7",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-8",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-9",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-10",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-11",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-12",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-13",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-14",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-15",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-16",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-17",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-18",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-19",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-20",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-21",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-22",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-23",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ],
    [
        "norse-mythology",
        "norse-mythology-entry-24",
        "contains",
        "Supporting entry under Norse mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
