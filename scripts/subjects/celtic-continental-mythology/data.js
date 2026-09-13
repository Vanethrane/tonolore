/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "celtic-continental-mythology",
        "name": "Continental Celtic mythology",
        "type": "topic",
        "short_description": "Gaulish deities, sacred groves, and the continental Celtic cults beyond Insular cycles.",
        "description": "Gaulish deities, sacred groves, and the continental Celtic cults beyond Insular cycles. This Ton-o-Lore subject maps people, places, events, and ideas tied to Continental Celtic mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "celtic-continental-mythology-figures",
        "name": "Continental Celtic mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Continental Celtic mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Continental Celtic mythology."
    },
    {
        "slug": "celtic-continental-mythology-world",
        "name": "Continental Celtic mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Continental Celtic mythology.",
        "description": "Geography, institutions, and periodization that give Continental Celtic mythology its encyclopedia shape."
    },
    {
        "slug": "celtic-continental-mythology-places",
        "name": "Continental Celtic mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Continental Celtic mythology.",
        "description": "Places, regions, and built sites that give Continental Celtic mythology its map — where events and figures concentrate."
    },
    {
        "slug": "celtic-continental-mythology-events",
        "name": "Continental Celtic mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Continental Celtic mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Continental Celtic mythology timeline."
    },
    {
        "slug": "celtic-continental-mythology-objects",
        "name": "Continental Celtic mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Continental Celtic mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Continental Celtic mythology."
    },
    {
        "slug": "celtic-continental-mythology-factions",
        "name": "Continental Celtic mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Continental Celtic mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Continental Celtic mythology."
    },
    {
        "slug": "celtic-continental-mythology-concepts",
        "name": "Continental Celtic mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Continental Celtic mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Continental Celtic mythology readable as a lore graph."
    },
    {
        "slug": "celtic-continental-mythology-eras",
        "name": "Continental Celtic mythology eras",
        "type": "event",
        "short_description": "Periodization for Continental Celtic mythology.",
        "description": "Named eras and phases that help readers track how Continental Celtic mythology changes across time."
    },
    {
        "slug": "celtic-continental-mythology-works",
        "name": "Continental Celtic mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Continental Celtic mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Continental Celtic mythology."
    },
    {
        "slug": "celtic-continental-mythology-symbols",
        "name": "Continental Celtic mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Continental Celtic mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Continental Celtic mythology."
    },
    {
        "slug": "celtic-continental-mythology-controversies",
        "name": "Continental Celtic mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Continental Celtic mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Continental Celtic mythology argumentative."
    },
    {
        "slug": "celtic-continental-mythology-sources",
        "name": "Continental Celtic mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Continental Celtic mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Continental Celtic mythology."
    },
    {
        "slug": "celtic-continental-mythology-geography",
        "name": "Continental Celtic mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Continental Celtic mythology.",
        "description": "Regions, routes, and spatial systems that situate Continental Celtic mythology beyond single named places."
    },
    {
        "slug": "celtic-continental-mythology-legacy",
        "name": "Continental Celtic mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Continental Celtic mythology.",
        "description": "How Continental Celtic mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "celtic-continental-mythology-practices",
        "name": "Continental Celtic mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Continental Celtic mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Continental Celtic mythology."
    },
    {
        "slug": "celtic-continental-mythology-entry-1",
        "name": "Continental Celtic mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-2",
        "name": "Continental Celtic mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-3",
        "name": "Continental Celtic mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-4",
        "name": "Continental Celtic mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-5",
        "name": "Continental Celtic mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-6",
        "name": "Continental Celtic mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-7",
        "name": "Continental Celtic mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-8",
        "name": "Continental Celtic mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-9",
        "name": "Continental Celtic mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-10",
        "name": "Continental Celtic mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-11",
        "name": "Continental Celtic mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-12",
        "name": "Continental Celtic mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-13",
        "name": "Continental Celtic mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-14",
        "name": "Continental Celtic mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-15",
        "name": "Continental Celtic mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-16",
        "name": "Continental Celtic mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-17",
        "name": "Continental Celtic mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-18",
        "name": "Continental Celtic mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-19",
        "name": "Continental Celtic mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-20",
        "name": "Continental Celtic mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-21",
        "name": "Continental Celtic mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-22",
        "name": "Continental Celtic mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-23",
        "name": "Continental Celtic mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "celtic-continental-mythology-entry-24",
        "name": "Continental Celtic mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Continental Celtic mythology.",
        "description": "A supporting encyclopedia entry in the Continental Celtic mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-places",
        "contains",
        "Continental Celtic mythology places is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-events",
        "contains",
        "Continental Celtic mythology events is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-objects",
        "contains",
        "Continental Celtic mythology objects & artifacts is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-factions",
        "contains",
        "Continental Celtic mythology factions & groups is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-concepts",
        "contains",
        "Continental Celtic mythology concepts is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-eras",
        "contains",
        "Continental Celtic mythology eras is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-works",
        "contains",
        "Continental Celtic mythology works & media is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-symbols",
        "contains",
        "Continental Celtic mythology symbols is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-controversies",
        "contains",
        "Continental Celtic mythology controversies is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-sources",
        "contains",
        "Continental Celtic mythology sources is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-geography",
        "contains",
        "Continental Celtic mythology geography is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-legacy",
        "contains",
        "Continental Celtic mythology legacy is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-practices",
        "contains",
        "Continental Celtic mythology practices is a primary trailhead under Continental Celtic mythology.",
        0.88,
        0.82
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-1",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-2",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-3",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-4",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-5",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-6",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-7",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-8",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-9",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-10",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-11",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-12",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-13",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-14",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-15",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-16",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-17",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-18",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-19",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-20",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-21",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-22",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-23",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ],
    [
        "celtic-continental-mythology",
        "celtic-continental-mythology-entry-24",
        "contains",
        "Supporting entry under Continental Celtic mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
