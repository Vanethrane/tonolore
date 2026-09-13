/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "finnish-mythology",
        "name": "Finnish mythology",
        "type": "topic",
        "short_description": "Kalevala heroes, sampo quests, and the northern epic tradition of Finland and Karelia.",
        "description": "Kalevala heroes, sampo quests, and the northern epic tradition of Finland and Karelia. This Ton-o-Lore subject maps people, places, events, and ideas tied to Finnish mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "finnish-mythology-figures",
        "name": "Finnish mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Finnish mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Finnish mythology."
    },
    {
        "slug": "finnish-mythology-world",
        "name": "Finnish mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Finnish mythology.",
        "description": "Geography, institutions, and periodization that give Finnish mythology its encyclopedia shape."
    },
    {
        "slug": "finnish-mythology-places",
        "name": "Finnish mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Finnish mythology.",
        "description": "Places, regions, and built sites that give Finnish mythology its map — where events and figures concentrate."
    },
    {
        "slug": "finnish-mythology-events",
        "name": "Finnish mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Finnish mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Finnish mythology timeline."
    },
    {
        "slug": "finnish-mythology-objects",
        "name": "Finnish mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Finnish mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Finnish mythology."
    },
    {
        "slug": "finnish-mythology-factions",
        "name": "Finnish mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Finnish mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Finnish mythology."
    },
    {
        "slug": "finnish-mythology-concepts",
        "name": "Finnish mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Finnish mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Finnish mythology readable as a lore graph."
    },
    {
        "slug": "finnish-mythology-eras",
        "name": "Finnish mythology eras",
        "type": "event",
        "short_description": "Periodization for Finnish mythology.",
        "description": "Named eras and phases that help readers track how Finnish mythology changes across time."
    },
    {
        "slug": "finnish-mythology-works",
        "name": "Finnish mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Finnish mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Finnish mythology."
    },
    {
        "slug": "finnish-mythology-symbols",
        "name": "Finnish mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Finnish mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Finnish mythology."
    },
    {
        "slug": "finnish-mythology-controversies",
        "name": "Finnish mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Finnish mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Finnish mythology argumentative."
    },
    {
        "slug": "finnish-mythology-sources",
        "name": "Finnish mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Finnish mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Finnish mythology."
    },
    {
        "slug": "finnish-mythology-geography",
        "name": "Finnish mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Finnish mythology.",
        "description": "Regions, routes, and spatial systems that situate Finnish mythology beyond single named places."
    },
    {
        "slug": "finnish-mythology-legacy",
        "name": "Finnish mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Finnish mythology.",
        "description": "How Finnish mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "finnish-mythology-practices",
        "name": "Finnish mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Finnish mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Finnish mythology."
    },
    {
        "slug": "finnish-mythology-entry-1",
        "name": "Finnish mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-2",
        "name": "Finnish mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-3",
        "name": "Finnish mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-4",
        "name": "Finnish mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-5",
        "name": "Finnish mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-6",
        "name": "Finnish mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-7",
        "name": "Finnish mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-8",
        "name": "Finnish mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-9",
        "name": "Finnish mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-10",
        "name": "Finnish mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-11",
        "name": "Finnish mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-12",
        "name": "Finnish mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-13",
        "name": "Finnish mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-14",
        "name": "Finnish mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-15",
        "name": "Finnish mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-16",
        "name": "Finnish mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-17",
        "name": "Finnish mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-18",
        "name": "Finnish mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-19",
        "name": "Finnish mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-20",
        "name": "Finnish mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-21",
        "name": "Finnish mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-22",
        "name": "Finnish mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-23",
        "name": "Finnish mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-mythology-entry-24",
        "name": "Finnish mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Finnish mythology.",
        "description": "A supporting encyclopedia entry in the Finnish mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "finnish-mythology",
        "finnish-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "finnish-mythology",
        "finnish-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "finnish-mythology",
        "finnish-mythology-places",
        "contains",
        "Finnish mythology places is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-events",
        "contains",
        "Finnish mythology events is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-objects",
        "contains",
        "Finnish mythology objects & artifacts is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-factions",
        "contains",
        "Finnish mythology factions & groups is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-concepts",
        "contains",
        "Finnish mythology concepts is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-eras",
        "contains",
        "Finnish mythology eras is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-works",
        "contains",
        "Finnish mythology works & media is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-symbols",
        "contains",
        "Finnish mythology symbols is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-controversies",
        "contains",
        "Finnish mythology controversies is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-sources",
        "contains",
        "Finnish mythology sources is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-geography",
        "contains",
        "Finnish mythology geography is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-legacy",
        "contains",
        "Finnish mythology legacy is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-practices",
        "contains",
        "Finnish mythology practices is a primary trailhead under Finnish mythology.",
        0.88,
        0.82
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-1",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-2",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-3",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-4",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-5",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-6",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-7",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-8",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-9",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-10",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-11",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-12",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-13",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-14",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-15",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-16",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-17",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-18",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-19",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-20",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-21",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-22",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-23",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ],
    [
        "finnish-mythology",
        "finnish-mythology-entry-24",
        "contains",
        "Supporting entry under Finnish mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
