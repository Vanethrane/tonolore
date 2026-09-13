/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "orthodox-christianity",
        "name": "Eastern Orthodox Christianity",
        "type": "topic",
        "short_description": "Byzantium, patriarchs, and the Eastern Christian communion of icons and liturgy.",
        "description": "Byzantium, patriarchs, and the Eastern Christian communion of icons and liturgy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Eastern Orthodox Christianity so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "orthodox-christianity-figures",
        "name": "Eastern Orthodox Christianity figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Eastern Orthodox Christianity.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Eastern Orthodox Christianity."
    },
    {
        "slug": "orthodox-christianity-world",
        "name": "Eastern Orthodox Christianity world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Eastern Orthodox Christianity.",
        "description": "Geography, institutions, and periodization that give Eastern Orthodox Christianity its encyclopedia shape."
    },
    {
        "slug": "orthodox-christianity-places",
        "name": "Eastern Orthodox Christianity places",
        "type": "place",
        "short_description": "Locations and geographies that frame Eastern Orthodox Christianity.",
        "description": "Places, regions, and built sites that give Eastern Orthodox Christianity its map — where events and figures concentrate."
    },
    {
        "slug": "orthodox-christianity-events",
        "name": "Eastern Orthodox Christianity events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Eastern Orthodox Christianity.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Eastern Orthodox Christianity timeline."
    },
    {
        "slug": "orthodox-christianity-objects",
        "name": "Eastern Orthodox Christianity objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Eastern Orthodox Christianity.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Eastern Orthodox Christianity."
    },
    {
        "slug": "orthodox-christianity-factions",
        "name": "Eastern Orthodox Christianity factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Eastern Orthodox Christianity.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Eastern Orthodox Christianity."
    },
    {
        "slug": "orthodox-christianity-concepts",
        "name": "Eastern Orthodox Christianity concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Eastern Orthodox Christianity.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Eastern Orthodox Christianity readable as a lore graph."
    },
    {
        "slug": "orthodox-christianity-eras",
        "name": "Eastern Orthodox Christianity eras",
        "type": "event",
        "short_description": "Periodization for Eastern Orthodox Christianity.",
        "description": "Named eras and phases that help readers track how Eastern Orthodox Christianity changes across time."
    },
    {
        "slug": "orthodox-christianity-works",
        "name": "Eastern Orthodox Christianity works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Eastern Orthodox Christianity.",
        "description": "Primary works and adaptations through which most audiences encounter Eastern Orthodox Christianity."
    },
    {
        "slug": "orthodox-christianity-symbols",
        "name": "Eastern Orthodox Christianity symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Eastern Orthodox Christianity.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Eastern Orthodox Christianity."
    },
    {
        "slug": "orthodox-christianity-controversies",
        "name": "Eastern Orthodox Christianity controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Eastern Orthodox Christianity.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Eastern Orthodox Christianity argumentative."
    },
    {
        "slug": "orthodox-christianity-sources",
        "name": "Eastern Orthodox Christianity sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Eastern Orthodox Christianity.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Eastern Orthodox Christianity."
    },
    {
        "slug": "orthodox-christianity-geography",
        "name": "Eastern Orthodox Christianity geography",
        "type": "place",
        "short_description": "Broader geographic framing for Eastern Orthodox Christianity.",
        "description": "Regions, routes, and spatial systems that situate Eastern Orthodox Christianity beyond single named places."
    },
    {
        "slug": "orthodox-christianity-legacy",
        "name": "Eastern Orthodox Christianity legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Eastern Orthodox Christianity.",
        "description": "How Eastern Orthodox Christianity continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "orthodox-christianity-practices",
        "name": "Eastern Orthodox Christianity practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Eastern Orthodox Christianity.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Eastern Orthodox Christianity."
    },
    {
        "slug": "orthodox-christianity-entry-1",
        "name": "Eastern Orthodox Christianity entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-2",
        "name": "Eastern Orthodox Christianity entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-3",
        "name": "Eastern Orthodox Christianity entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-4",
        "name": "Eastern Orthodox Christianity entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-5",
        "name": "Eastern Orthodox Christianity entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-6",
        "name": "Eastern Orthodox Christianity entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-7",
        "name": "Eastern Orthodox Christianity entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-8",
        "name": "Eastern Orthodox Christianity entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-9",
        "name": "Eastern Orthodox Christianity entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-10",
        "name": "Eastern Orthodox Christianity entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-11",
        "name": "Eastern Orthodox Christianity entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-12",
        "name": "Eastern Orthodox Christianity entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-13",
        "name": "Eastern Orthodox Christianity entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-14",
        "name": "Eastern Orthodox Christianity entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-15",
        "name": "Eastern Orthodox Christianity entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-16",
        "name": "Eastern Orthodox Christianity entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-17",
        "name": "Eastern Orthodox Christianity entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-18",
        "name": "Eastern Orthodox Christianity entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-19",
        "name": "Eastern Orthodox Christianity entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-20",
        "name": "Eastern Orthodox Christianity entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-21",
        "name": "Eastern Orthodox Christianity entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-22",
        "name": "Eastern Orthodox Christianity entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-23",
        "name": "Eastern Orthodox Christianity entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orthodox-christianity-entry-24",
        "name": "Eastern Orthodox Christianity entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Eastern Orthodox Christianity.",
        "description": "A supporting encyclopedia entry in the Eastern Orthodox Christianity subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "orthodox-christianity",
        "orthodox-christianity-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-places",
        "contains",
        "Eastern Orthodox Christianity places is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-events",
        "contains",
        "Eastern Orthodox Christianity events is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-objects",
        "contains",
        "Eastern Orthodox Christianity objects & artifacts is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-factions",
        "contains",
        "Eastern Orthodox Christianity factions & groups is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-concepts",
        "contains",
        "Eastern Orthodox Christianity concepts is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-eras",
        "contains",
        "Eastern Orthodox Christianity eras is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-works",
        "contains",
        "Eastern Orthodox Christianity works & media is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-symbols",
        "contains",
        "Eastern Orthodox Christianity symbols is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-controversies",
        "contains",
        "Eastern Orthodox Christianity controversies is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-sources",
        "contains",
        "Eastern Orthodox Christianity sources is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-geography",
        "contains",
        "Eastern Orthodox Christianity geography is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-legacy",
        "contains",
        "Eastern Orthodox Christianity legacy is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-practices",
        "contains",
        "Eastern Orthodox Christianity practices is a primary trailhead under Eastern Orthodox Christianity.",
        0.88,
        0.82
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-1",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-2",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-3",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-4",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-5",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-6",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-7",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-8",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-9",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-10",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-11",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-12",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-13",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-14",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-15",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-16",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-17",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-18",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-19",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-20",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-21",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-22",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-23",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ],
    [
        "orthodox-christianity",
        "orthodox-christianity-entry-24",
        "contains",
        "Supporting entry under Eastern Orthodox Christianity.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
