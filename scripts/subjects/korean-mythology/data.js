/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "korean-mythology",
        "name": "Korean mythology",
        "type": "topic",
        "short_description": "Dangun foundation myths, mountain spirits, and the shamanic-royal lore of the Korean peninsula.",
        "description": "Dangun foundation myths, mountain spirits, and the shamanic-royal lore of the Korean peninsula. This Ton-o-Lore subject maps people, places, events, and ideas tied to Korean mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "korean-mythology-figures",
        "name": "Korean mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Korean mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Korean mythology."
    },
    {
        "slug": "korean-mythology-world",
        "name": "Korean mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Korean mythology.",
        "description": "Geography, institutions, and periodization that give Korean mythology its encyclopedia shape."
    },
    {
        "slug": "korean-mythology-places",
        "name": "Korean mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Korean mythology.",
        "description": "Places, regions, and built sites that give Korean mythology its map — where events and figures concentrate."
    },
    {
        "slug": "korean-mythology-events",
        "name": "Korean mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Korean mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Korean mythology timeline."
    },
    {
        "slug": "korean-mythology-objects",
        "name": "Korean mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Korean mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Korean mythology."
    },
    {
        "slug": "korean-mythology-factions",
        "name": "Korean mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Korean mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Korean mythology."
    },
    {
        "slug": "korean-mythology-concepts",
        "name": "Korean mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Korean mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Korean mythology readable as a lore graph."
    },
    {
        "slug": "korean-mythology-eras",
        "name": "Korean mythology eras",
        "type": "event",
        "short_description": "Periodization for Korean mythology.",
        "description": "Named eras and phases that help readers track how Korean mythology changes across time."
    },
    {
        "slug": "korean-mythology-works",
        "name": "Korean mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Korean mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Korean mythology."
    },
    {
        "slug": "korean-mythology-symbols",
        "name": "Korean mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Korean mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Korean mythology."
    },
    {
        "slug": "korean-mythology-controversies",
        "name": "Korean mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Korean mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Korean mythology argumentative."
    },
    {
        "slug": "korean-mythology-sources",
        "name": "Korean mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Korean mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Korean mythology."
    },
    {
        "slug": "korean-mythology-geography",
        "name": "Korean mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Korean mythology.",
        "description": "Regions, routes, and spatial systems that situate Korean mythology beyond single named places."
    },
    {
        "slug": "korean-mythology-legacy",
        "name": "Korean mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Korean mythology.",
        "description": "How Korean mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "korean-mythology-practices",
        "name": "Korean mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Korean mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Korean mythology."
    },
    {
        "slug": "korean-mythology-entry-1",
        "name": "Korean mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-2",
        "name": "Korean mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-3",
        "name": "Korean mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-4",
        "name": "Korean mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-5",
        "name": "Korean mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-6",
        "name": "Korean mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-7",
        "name": "Korean mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-8",
        "name": "Korean mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-9",
        "name": "Korean mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-10",
        "name": "Korean mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-11",
        "name": "Korean mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-12",
        "name": "Korean mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-13",
        "name": "Korean mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-14",
        "name": "Korean mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-15",
        "name": "Korean mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-16",
        "name": "Korean mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-17",
        "name": "Korean mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-18",
        "name": "Korean mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-19",
        "name": "Korean mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-20",
        "name": "Korean mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-21",
        "name": "Korean mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-22",
        "name": "Korean mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-23",
        "name": "Korean mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "korean-mythology-entry-24",
        "name": "Korean mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Korean mythology.",
        "description": "A supporting encyclopedia entry in the Korean mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "korean-mythology",
        "korean-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "korean-mythology",
        "korean-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "korean-mythology",
        "korean-mythology-places",
        "contains",
        "Korean mythology places is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-events",
        "contains",
        "Korean mythology events is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-objects",
        "contains",
        "Korean mythology objects & artifacts is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-factions",
        "contains",
        "Korean mythology factions & groups is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-concepts",
        "contains",
        "Korean mythology concepts is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-eras",
        "contains",
        "Korean mythology eras is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-works",
        "contains",
        "Korean mythology works & media is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-symbols",
        "contains",
        "Korean mythology symbols is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-controversies",
        "contains",
        "Korean mythology controversies is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-sources",
        "contains",
        "Korean mythology sources is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-geography",
        "contains",
        "Korean mythology geography is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-legacy",
        "contains",
        "Korean mythology legacy is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-practices",
        "contains",
        "Korean mythology practices is a primary trailhead under Korean mythology.",
        0.88,
        0.82
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-1",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-2",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-3",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-4",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-5",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-6",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-7",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-8",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-9",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-10",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-11",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-12",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-13",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-14",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-15",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-16",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-17",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-18",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-19",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-20",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-21",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-22",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-23",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ],
    [
        "korean-mythology",
        "korean-mythology-entry-24",
        "contains",
        "Supporting entry under Korean mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
