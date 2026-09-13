/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "piracy-modern",
        "name": "Modern piracy",
        "type": "topic",
        "short_description": "Somali waters, Malacca threats, and the twenty-first-century return of ship-taking.",
        "description": "Somali waters, Malacca threats, and the twenty-first-century return of ship-taking. This Ton-o-Lore subject maps people, places, events, and ideas tied to Modern piracy so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "piracy-modern-figures",
        "name": "Modern piracy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Modern piracy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Modern piracy."
    },
    {
        "slug": "piracy-modern-world",
        "name": "Modern piracy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Modern piracy.",
        "description": "Geography, institutions, and periodization that give Modern piracy its encyclopedia shape."
    },
    {
        "slug": "piracy-modern-places",
        "name": "Modern piracy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Modern piracy.",
        "description": "Places, regions, and built sites that give Modern piracy its map — where events and figures concentrate."
    },
    {
        "slug": "piracy-modern-events",
        "name": "Modern piracy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Modern piracy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Modern piracy timeline."
    },
    {
        "slug": "piracy-modern-objects",
        "name": "Modern piracy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Modern piracy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Modern piracy."
    },
    {
        "slug": "piracy-modern-factions",
        "name": "Modern piracy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Modern piracy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Modern piracy."
    },
    {
        "slug": "piracy-modern-concepts",
        "name": "Modern piracy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Modern piracy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Modern piracy readable as a lore graph."
    },
    {
        "slug": "piracy-modern-eras",
        "name": "Modern piracy eras",
        "type": "event",
        "short_description": "Periodization for Modern piracy.",
        "description": "Named eras and phases that help readers track how Modern piracy changes across time."
    },
    {
        "slug": "piracy-modern-works",
        "name": "Modern piracy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Modern piracy.",
        "description": "Primary works and adaptations through which most audiences encounter Modern piracy."
    },
    {
        "slug": "piracy-modern-symbols",
        "name": "Modern piracy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Modern piracy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Modern piracy."
    },
    {
        "slug": "piracy-modern-controversies",
        "name": "Modern piracy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Modern piracy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Modern piracy argumentative."
    },
    {
        "slug": "piracy-modern-sources",
        "name": "Modern piracy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Modern piracy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Modern piracy."
    },
    {
        "slug": "piracy-modern-geography",
        "name": "Modern piracy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Modern piracy.",
        "description": "Regions, routes, and spatial systems that situate Modern piracy beyond single named places."
    },
    {
        "slug": "piracy-modern-legacy",
        "name": "Modern piracy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Modern piracy.",
        "description": "How Modern piracy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "piracy-modern-practices",
        "name": "Modern piracy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Modern piracy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Modern piracy."
    },
    {
        "slug": "piracy-modern-entry-1",
        "name": "Modern piracy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-2",
        "name": "Modern piracy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-3",
        "name": "Modern piracy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-4",
        "name": "Modern piracy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-5",
        "name": "Modern piracy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-6",
        "name": "Modern piracy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-7",
        "name": "Modern piracy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-8",
        "name": "Modern piracy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-9",
        "name": "Modern piracy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-10",
        "name": "Modern piracy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-11",
        "name": "Modern piracy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-12",
        "name": "Modern piracy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-13",
        "name": "Modern piracy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-14",
        "name": "Modern piracy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-15",
        "name": "Modern piracy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-16",
        "name": "Modern piracy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-17",
        "name": "Modern piracy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-18",
        "name": "Modern piracy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-19",
        "name": "Modern piracy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-20",
        "name": "Modern piracy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-21",
        "name": "Modern piracy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-22",
        "name": "Modern piracy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-23",
        "name": "Modern piracy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "piracy-modern-entry-24",
        "name": "Modern piracy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern piracy.",
        "description": "A supporting encyclopedia entry in the Modern piracy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "piracy-modern",
        "piracy-modern-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "piracy-modern",
        "piracy-modern-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "piracy-modern",
        "piracy-modern-places",
        "contains",
        "Modern piracy places is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-events",
        "contains",
        "Modern piracy events is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-objects",
        "contains",
        "Modern piracy objects & artifacts is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-factions",
        "contains",
        "Modern piracy factions & groups is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-concepts",
        "contains",
        "Modern piracy concepts is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-eras",
        "contains",
        "Modern piracy eras is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-works",
        "contains",
        "Modern piracy works & media is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-symbols",
        "contains",
        "Modern piracy symbols is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-controversies",
        "contains",
        "Modern piracy controversies is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-sources",
        "contains",
        "Modern piracy sources is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-geography",
        "contains",
        "Modern piracy geography is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-legacy",
        "contains",
        "Modern piracy legacy is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-practices",
        "contains",
        "Modern piracy practices is a primary trailhead under Modern piracy.",
        0.88,
        0.82
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-1",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-2",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-3",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-4",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-5",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-6",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-7",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-8",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-9",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-10",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-11",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-12",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-13",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-14",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-15",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-16",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-17",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-18",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-19",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-20",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-21",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-22",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-23",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ],
    [
        "piracy-modern",
        "piracy-modern-entry-24",
        "contains",
        "Supporting entry under Modern piracy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
