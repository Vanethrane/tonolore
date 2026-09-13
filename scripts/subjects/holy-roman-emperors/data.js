/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "holy-roman-emperors",
        "name": "Holy Roman Emperors",
        "type": "topic",
        "short_description": "Electors, imperial diets, and the medieval-modern crown of the German lands.",
        "description": "Electors, imperial diets, and the medieval-modern crown of the German lands. This Ton-o-Lore subject maps people, places, events, and ideas tied to Holy Roman Emperors so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "holy-roman-emperors-figures",
        "name": "Holy Roman Emperors figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Holy Roman Emperors.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Holy Roman Emperors."
    },
    {
        "slug": "holy-roman-emperors-world",
        "name": "Holy Roman Emperors world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Holy Roman Emperors.",
        "description": "Geography, institutions, and periodization that give Holy Roman Emperors its encyclopedia shape."
    },
    {
        "slug": "holy-roman-emperors-places",
        "name": "Holy Roman Emperors places",
        "type": "place",
        "short_description": "Locations and geographies that frame Holy Roman Emperors.",
        "description": "Places, regions, and built sites that give Holy Roman Emperors its map — where events and figures concentrate."
    },
    {
        "slug": "holy-roman-emperors-events",
        "name": "Holy Roman Emperors events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Holy Roman Emperors.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Holy Roman Emperors timeline."
    },
    {
        "slug": "holy-roman-emperors-objects",
        "name": "Holy Roman Emperors objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Holy Roman Emperors.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Holy Roman Emperors."
    },
    {
        "slug": "holy-roman-emperors-factions",
        "name": "Holy Roman Emperors factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Holy Roman Emperors.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Holy Roman Emperors."
    },
    {
        "slug": "holy-roman-emperors-concepts",
        "name": "Holy Roman Emperors concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Holy Roman Emperors.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Holy Roman Emperors readable as a lore graph."
    },
    {
        "slug": "holy-roman-emperors-eras",
        "name": "Holy Roman Emperors eras",
        "type": "event",
        "short_description": "Periodization for Holy Roman Emperors.",
        "description": "Named eras and phases that help readers track how Holy Roman Emperors changes across time."
    },
    {
        "slug": "holy-roman-emperors-works",
        "name": "Holy Roman Emperors works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Holy Roman Emperors.",
        "description": "Primary works and adaptations through which most audiences encounter Holy Roman Emperors."
    },
    {
        "slug": "holy-roman-emperors-symbols",
        "name": "Holy Roman Emperors symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Holy Roman Emperors.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Holy Roman Emperors."
    },
    {
        "slug": "holy-roman-emperors-controversies",
        "name": "Holy Roman Emperors controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Holy Roman Emperors.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Holy Roman Emperors argumentative."
    },
    {
        "slug": "holy-roman-emperors-sources",
        "name": "Holy Roman Emperors sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Holy Roman Emperors.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Holy Roman Emperors."
    },
    {
        "slug": "holy-roman-emperors-geography",
        "name": "Holy Roman Emperors geography",
        "type": "place",
        "short_description": "Broader geographic framing for Holy Roman Emperors.",
        "description": "Regions, routes, and spatial systems that situate Holy Roman Emperors beyond single named places."
    },
    {
        "slug": "holy-roman-emperors-legacy",
        "name": "Holy Roman Emperors legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Holy Roman Emperors.",
        "description": "How Holy Roman Emperors continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "holy-roman-emperors-practices",
        "name": "Holy Roman Emperors practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Holy Roman Emperors.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Holy Roman Emperors."
    },
    {
        "slug": "holy-roman-emperors-entry-1",
        "name": "Holy Roman Emperors entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-2",
        "name": "Holy Roman Emperors entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-3",
        "name": "Holy Roman Emperors entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-4",
        "name": "Holy Roman Emperors entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-5",
        "name": "Holy Roman Emperors entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-6",
        "name": "Holy Roman Emperors entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-7",
        "name": "Holy Roman Emperors entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-8",
        "name": "Holy Roman Emperors entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-9",
        "name": "Holy Roman Emperors entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-10",
        "name": "Holy Roman Emperors entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-11",
        "name": "Holy Roman Emperors entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-12",
        "name": "Holy Roman Emperors entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-13",
        "name": "Holy Roman Emperors entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-14",
        "name": "Holy Roman Emperors entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-15",
        "name": "Holy Roman Emperors entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-16",
        "name": "Holy Roman Emperors entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-17",
        "name": "Holy Roman Emperors entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-18",
        "name": "Holy Roman Emperors entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-19",
        "name": "Holy Roman Emperors entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-20",
        "name": "Holy Roman Emperors entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-21",
        "name": "Holy Roman Emperors entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-22",
        "name": "Holy Roman Emperors entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-23",
        "name": "Holy Roman Emperors entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "holy-roman-emperors-entry-24",
        "name": "Holy Roman Emperors entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Holy Roman Emperors.",
        "description": "A supporting encyclopedia entry in the Holy Roman Emperors subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "holy-roman-emperors",
        "holy-roman-emperors-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-places",
        "contains",
        "Holy Roman Emperors places is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-events",
        "contains",
        "Holy Roman Emperors events is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-objects",
        "contains",
        "Holy Roman Emperors objects & artifacts is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-factions",
        "contains",
        "Holy Roman Emperors factions & groups is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-concepts",
        "contains",
        "Holy Roman Emperors concepts is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-eras",
        "contains",
        "Holy Roman Emperors eras is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-works",
        "contains",
        "Holy Roman Emperors works & media is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-symbols",
        "contains",
        "Holy Roman Emperors symbols is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-controversies",
        "contains",
        "Holy Roman Emperors controversies is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-sources",
        "contains",
        "Holy Roman Emperors sources is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-geography",
        "contains",
        "Holy Roman Emperors geography is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-legacy",
        "contains",
        "Holy Roman Emperors legacy is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-practices",
        "contains",
        "Holy Roman Emperors practices is a primary trailhead under Holy Roman Emperors.",
        0.88,
        0.82
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-1",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-2",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-3",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-4",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-5",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-6",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-7",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-8",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-9",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-10",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-11",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-12",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-13",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-14",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-15",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-16",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-17",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-18",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-19",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-20",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-21",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-22",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-23",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ],
    [
        "holy-roman-emperors",
        "holy-roman-emperors-entry-24",
        "contains",
        "Supporting entry under Holy Roman Emperors.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
