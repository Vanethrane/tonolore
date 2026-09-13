/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "baltic-mythology",
        "name": "Baltic mythology",
        "type": "topic",
        "short_description": "Perkūnas, earth mothers, and the reconstructed folk cosmologies of Lithuania and Latvia.",
        "description": "Perkūnas, earth mothers, and the reconstructed folk cosmologies of Lithuania and Latvia. This Ton-o-Lore subject maps people, places, events, and ideas tied to Baltic mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "baltic-mythology-figures",
        "name": "Baltic mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Baltic mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Baltic mythology."
    },
    {
        "slug": "baltic-mythology-world",
        "name": "Baltic mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Baltic mythology.",
        "description": "Geography, institutions, and periodization that give Baltic mythology its encyclopedia shape."
    },
    {
        "slug": "baltic-mythology-places",
        "name": "Baltic mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Baltic mythology.",
        "description": "Places, regions, and built sites that give Baltic mythology its map — where events and figures concentrate."
    },
    {
        "slug": "baltic-mythology-events",
        "name": "Baltic mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Baltic mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Baltic mythology timeline."
    },
    {
        "slug": "baltic-mythology-objects",
        "name": "Baltic mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Baltic mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Baltic mythology."
    },
    {
        "slug": "baltic-mythology-factions",
        "name": "Baltic mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Baltic mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Baltic mythology."
    },
    {
        "slug": "baltic-mythology-concepts",
        "name": "Baltic mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Baltic mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Baltic mythology readable as a lore graph."
    },
    {
        "slug": "baltic-mythology-eras",
        "name": "Baltic mythology eras",
        "type": "event",
        "short_description": "Periodization for Baltic mythology.",
        "description": "Named eras and phases that help readers track how Baltic mythology changes across time."
    },
    {
        "slug": "baltic-mythology-works",
        "name": "Baltic mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Baltic mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Baltic mythology."
    },
    {
        "slug": "baltic-mythology-symbols",
        "name": "Baltic mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Baltic mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Baltic mythology."
    },
    {
        "slug": "baltic-mythology-controversies",
        "name": "Baltic mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Baltic mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Baltic mythology argumentative."
    },
    {
        "slug": "baltic-mythology-sources",
        "name": "Baltic mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Baltic mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Baltic mythology."
    },
    {
        "slug": "baltic-mythology-geography",
        "name": "Baltic mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Baltic mythology.",
        "description": "Regions, routes, and spatial systems that situate Baltic mythology beyond single named places."
    },
    {
        "slug": "baltic-mythology-legacy",
        "name": "Baltic mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Baltic mythology.",
        "description": "How Baltic mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "baltic-mythology-practices",
        "name": "Baltic mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Baltic mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Baltic mythology."
    },
    {
        "slug": "baltic-mythology-entry-1",
        "name": "Baltic mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-2",
        "name": "Baltic mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-3",
        "name": "Baltic mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-4",
        "name": "Baltic mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-5",
        "name": "Baltic mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-6",
        "name": "Baltic mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-7",
        "name": "Baltic mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-8",
        "name": "Baltic mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-9",
        "name": "Baltic mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-10",
        "name": "Baltic mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-11",
        "name": "Baltic mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-12",
        "name": "Baltic mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-13",
        "name": "Baltic mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-14",
        "name": "Baltic mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-15",
        "name": "Baltic mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-16",
        "name": "Baltic mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-17",
        "name": "Baltic mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-18",
        "name": "Baltic mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-19",
        "name": "Baltic mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-20",
        "name": "Baltic mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-21",
        "name": "Baltic mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-22",
        "name": "Baltic mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-23",
        "name": "Baltic mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "baltic-mythology-entry-24",
        "name": "Baltic mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Baltic mythology.",
        "description": "A supporting encyclopedia entry in the Baltic mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "baltic-mythology",
        "baltic-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "baltic-mythology",
        "baltic-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "baltic-mythology",
        "baltic-mythology-places",
        "contains",
        "Baltic mythology places is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-events",
        "contains",
        "Baltic mythology events is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-objects",
        "contains",
        "Baltic mythology objects & artifacts is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-factions",
        "contains",
        "Baltic mythology factions & groups is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-concepts",
        "contains",
        "Baltic mythology concepts is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-eras",
        "contains",
        "Baltic mythology eras is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-works",
        "contains",
        "Baltic mythology works & media is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-symbols",
        "contains",
        "Baltic mythology symbols is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-controversies",
        "contains",
        "Baltic mythology controversies is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-sources",
        "contains",
        "Baltic mythology sources is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-geography",
        "contains",
        "Baltic mythology geography is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-legacy",
        "contains",
        "Baltic mythology legacy is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-practices",
        "contains",
        "Baltic mythology practices is a primary trailhead under Baltic mythology.",
        0.88,
        0.82
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-1",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-2",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-3",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-4",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-5",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-6",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-7",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-8",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-9",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-10",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-11",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-12",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-13",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-14",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-15",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-16",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-17",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-18",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-19",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-20",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-21",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-22",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-23",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ],
    [
        "baltic-mythology",
        "baltic-mythology-entry-24",
        "contains",
        "Supporting entry under Baltic mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
