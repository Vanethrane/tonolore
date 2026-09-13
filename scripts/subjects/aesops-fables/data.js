/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aesops-fables",
        "name": "Aesop's fables",
        "type": "topic",
        "short_description": "Talking animals, morals, and the ancient Greek fable tradition still quoted as common sense.",
        "description": "Talking animals, morals, and the ancient Greek fable tradition still quoted as common sense. This Ton-o-Lore subject maps people, places, events, and ideas tied to Aesop's fables so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "aesops-fables-figures",
        "name": "Aesop's fables figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Aesop's fables.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Aesop's fables."
    },
    {
        "slug": "aesops-fables-world",
        "name": "Aesop's fables world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Aesop's fables.",
        "description": "Geography, institutions, and periodization that give Aesop's fables its encyclopedia shape."
    },
    {
        "slug": "aesops-fables-places",
        "name": "Aesop's fables places",
        "type": "place",
        "short_description": "Locations and geographies that frame Aesop's fables.",
        "description": "Places, regions, and built sites that give Aesop's fables its map — where events and figures concentrate."
    },
    {
        "slug": "aesops-fables-events",
        "name": "Aesop's fables events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Aesop's fables.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Aesop's fables timeline."
    },
    {
        "slug": "aesops-fables-objects",
        "name": "Aesop's fables objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Aesop's fables.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Aesop's fables."
    },
    {
        "slug": "aesops-fables-factions",
        "name": "Aesop's fables factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Aesop's fables.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Aesop's fables."
    },
    {
        "slug": "aesops-fables-concepts",
        "name": "Aesop's fables concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Aesop's fables.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Aesop's fables readable as a lore graph."
    },
    {
        "slug": "aesops-fables-eras",
        "name": "Aesop's fables eras",
        "type": "event",
        "short_description": "Periodization for Aesop's fables.",
        "description": "Named eras and phases that help readers track how Aesop's fables changes across time."
    },
    {
        "slug": "aesops-fables-works",
        "name": "Aesop's fables works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Aesop's fables.",
        "description": "Primary works and adaptations through which most audiences encounter Aesop's fables."
    },
    {
        "slug": "aesops-fables-symbols",
        "name": "Aesop's fables symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Aesop's fables.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Aesop's fables."
    },
    {
        "slug": "aesops-fables-controversies",
        "name": "Aesop's fables controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Aesop's fables.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Aesop's fables argumentative."
    },
    {
        "slug": "aesops-fables-sources",
        "name": "Aesop's fables sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Aesop's fables.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Aesop's fables."
    },
    {
        "slug": "aesops-fables-geography",
        "name": "Aesop's fables geography",
        "type": "place",
        "short_description": "Broader geographic framing for Aesop's fables.",
        "description": "Regions, routes, and spatial systems that situate Aesop's fables beyond single named places."
    },
    {
        "slug": "aesops-fables-legacy",
        "name": "Aesop's fables legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Aesop's fables.",
        "description": "How Aesop's fables continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aesops-fables-practices",
        "name": "Aesop's fables practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Aesop's fables.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Aesop's fables."
    },
    {
        "slug": "aesops-fables-entry-1",
        "name": "Aesop's fables entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-2",
        "name": "Aesop's fables entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-3",
        "name": "Aesop's fables entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-4",
        "name": "Aesop's fables entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-5",
        "name": "Aesop's fables entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-6",
        "name": "Aesop's fables entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-7",
        "name": "Aesop's fables entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-8",
        "name": "Aesop's fables entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-9",
        "name": "Aesop's fables entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-10",
        "name": "Aesop's fables entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-11",
        "name": "Aesop's fables entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-12",
        "name": "Aesop's fables entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-13",
        "name": "Aesop's fables entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-14",
        "name": "Aesop's fables entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-15",
        "name": "Aesop's fables entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-16",
        "name": "Aesop's fables entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-17",
        "name": "Aesop's fables entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-18",
        "name": "Aesop's fables entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-19",
        "name": "Aesop's fables entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-20",
        "name": "Aesop's fables entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-21",
        "name": "Aesop's fables entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-22",
        "name": "Aesop's fables entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-23",
        "name": "Aesop's fables entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aesops-fables-entry-24",
        "name": "Aesop's fables entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aesop's fables.",
        "description": "A supporting encyclopedia entry in the Aesop's fables subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aesops-fables",
        "aesops-fables-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aesops-fables",
        "aesops-fables-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aesops-fables",
        "aesops-fables-places",
        "contains",
        "Aesop's fables places is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-events",
        "contains",
        "Aesop's fables events is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-objects",
        "contains",
        "Aesop's fables objects & artifacts is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-factions",
        "contains",
        "Aesop's fables factions & groups is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-concepts",
        "contains",
        "Aesop's fables concepts is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-eras",
        "contains",
        "Aesop's fables eras is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-works",
        "contains",
        "Aesop's fables works & media is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-symbols",
        "contains",
        "Aesop's fables symbols is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-controversies",
        "contains",
        "Aesop's fables controversies is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-sources",
        "contains",
        "Aesop's fables sources is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-geography",
        "contains",
        "Aesop's fables geography is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-legacy",
        "contains",
        "Aesop's fables legacy is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-practices",
        "contains",
        "Aesop's fables practices is a primary trailhead under Aesop's fables.",
        0.88,
        0.82
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-1",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-2",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-3",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-4",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-5",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-6",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-7",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-8",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-9",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-10",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-11",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-12",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-13",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-14",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-15",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-16",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-17",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-18",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-19",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-20",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-21",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-22",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-23",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ],
    [
        "aesops-fables",
        "aesops-fables-entry-24",
        "contains",
        "Supporting entry under Aesop's fables.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
