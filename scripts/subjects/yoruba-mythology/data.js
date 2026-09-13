/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "yoruba-mythology",
        "name": "Yoruba mythology",
        "type": "topic",
        "short_description": "Orishas, Ifá divination, and the West African sacred system that crossed the Atlantic.",
        "description": "Orishas, Ifá divination, and the West African sacred system that crossed the Atlantic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Yoruba mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "yoruba-mythology-figures",
        "name": "Yoruba mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Yoruba mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Yoruba mythology."
    },
    {
        "slug": "yoruba-mythology-world",
        "name": "Yoruba mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Yoruba mythology.",
        "description": "Geography, institutions, and periodization that give Yoruba mythology its encyclopedia shape."
    },
    {
        "slug": "yoruba-mythology-places",
        "name": "Yoruba mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Yoruba mythology.",
        "description": "Places, regions, and built sites that give Yoruba mythology its map — where events and figures concentrate."
    },
    {
        "slug": "yoruba-mythology-events",
        "name": "Yoruba mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Yoruba mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Yoruba mythology timeline."
    },
    {
        "slug": "yoruba-mythology-objects",
        "name": "Yoruba mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Yoruba mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Yoruba mythology."
    },
    {
        "slug": "yoruba-mythology-factions",
        "name": "Yoruba mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Yoruba mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Yoruba mythology."
    },
    {
        "slug": "yoruba-mythology-concepts",
        "name": "Yoruba mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Yoruba mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Yoruba mythology readable as a lore graph."
    },
    {
        "slug": "yoruba-mythology-eras",
        "name": "Yoruba mythology eras",
        "type": "event",
        "short_description": "Periodization for Yoruba mythology.",
        "description": "Named eras and phases that help readers track how Yoruba mythology changes across time."
    },
    {
        "slug": "yoruba-mythology-works",
        "name": "Yoruba mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Yoruba mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Yoruba mythology."
    },
    {
        "slug": "yoruba-mythology-symbols",
        "name": "Yoruba mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Yoruba mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Yoruba mythology."
    },
    {
        "slug": "yoruba-mythology-controversies",
        "name": "Yoruba mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Yoruba mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Yoruba mythology argumentative."
    },
    {
        "slug": "yoruba-mythology-sources",
        "name": "Yoruba mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Yoruba mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Yoruba mythology."
    },
    {
        "slug": "yoruba-mythology-geography",
        "name": "Yoruba mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Yoruba mythology.",
        "description": "Regions, routes, and spatial systems that situate Yoruba mythology beyond single named places."
    },
    {
        "slug": "yoruba-mythology-legacy",
        "name": "Yoruba mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Yoruba mythology.",
        "description": "How Yoruba mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "yoruba-mythology-practices",
        "name": "Yoruba mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Yoruba mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Yoruba mythology."
    },
    {
        "slug": "yoruba-mythology-entry-1",
        "name": "Yoruba mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-2",
        "name": "Yoruba mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-3",
        "name": "Yoruba mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-4",
        "name": "Yoruba mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-5",
        "name": "Yoruba mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-6",
        "name": "Yoruba mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-7",
        "name": "Yoruba mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-8",
        "name": "Yoruba mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-9",
        "name": "Yoruba mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-10",
        "name": "Yoruba mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-11",
        "name": "Yoruba mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-12",
        "name": "Yoruba mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-13",
        "name": "Yoruba mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-14",
        "name": "Yoruba mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-15",
        "name": "Yoruba mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-16",
        "name": "Yoruba mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-17",
        "name": "Yoruba mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-18",
        "name": "Yoruba mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-19",
        "name": "Yoruba mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-20",
        "name": "Yoruba mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-21",
        "name": "Yoruba mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-22",
        "name": "Yoruba mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-23",
        "name": "Yoruba mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yoruba-mythology-entry-24",
        "name": "Yoruba mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yoruba mythology.",
        "description": "A supporting encyclopedia entry in the Yoruba mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "yoruba-mythology",
        "yoruba-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-places",
        "contains",
        "Yoruba mythology places is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-events",
        "contains",
        "Yoruba mythology events is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-objects",
        "contains",
        "Yoruba mythology objects & artifacts is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-factions",
        "contains",
        "Yoruba mythology factions & groups is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-concepts",
        "contains",
        "Yoruba mythology concepts is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-eras",
        "contains",
        "Yoruba mythology eras is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-works",
        "contains",
        "Yoruba mythology works & media is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-symbols",
        "contains",
        "Yoruba mythology symbols is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-controversies",
        "contains",
        "Yoruba mythology controversies is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-sources",
        "contains",
        "Yoruba mythology sources is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-geography",
        "contains",
        "Yoruba mythology geography is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-legacy",
        "contains",
        "Yoruba mythology legacy is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-practices",
        "contains",
        "Yoruba mythology practices is a primary trailhead under Yoruba mythology.",
        0.88,
        0.82
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-1",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-2",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-3",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-4",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-5",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-6",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-7",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-8",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-9",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-10",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-11",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-12",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-13",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-14",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-15",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-16",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-17",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-18",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-19",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-20",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-21",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-22",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-23",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ],
    [
        "yoruba-mythology",
        "yoruba-mythology-entry-24",
        "contains",
        "Supporting entry under Yoruba mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
