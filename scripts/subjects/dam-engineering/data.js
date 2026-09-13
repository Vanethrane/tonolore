/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dam-engineering",
        "name": "Dam engineering",
        "type": "topic",
        "short_description": "Hydroelectric walls, displacement, and the mega-projects that remake rivers.",
        "description": "Hydroelectric walls, displacement, and the mega-projects that remake rivers. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dam engineering so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "dam-engineering-figures",
        "name": "Dam engineering figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dam engineering.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dam engineering."
    },
    {
        "slug": "dam-engineering-world",
        "name": "Dam engineering world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dam engineering.",
        "description": "Geography, institutions, and periodization that give Dam engineering its encyclopedia shape."
    },
    {
        "slug": "dam-engineering-places",
        "name": "Dam engineering places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dam engineering.",
        "description": "Places, regions, and built sites that give Dam engineering its map — where events and figures concentrate."
    },
    {
        "slug": "dam-engineering-events",
        "name": "Dam engineering events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dam engineering.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dam engineering timeline."
    },
    {
        "slug": "dam-engineering-objects",
        "name": "Dam engineering objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dam engineering.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dam engineering."
    },
    {
        "slug": "dam-engineering-factions",
        "name": "Dam engineering factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dam engineering.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dam engineering."
    },
    {
        "slug": "dam-engineering-concepts",
        "name": "Dam engineering concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dam engineering.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dam engineering readable as a lore graph."
    },
    {
        "slug": "dam-engineering-eras",
        "name": "Dam engineering eras",
        "type": "event",
        "short_description": "Periodization for Dam engineering.",
        "description": "Named eras and phases that help readers track how Dam engineering changes across time."
    },
    {
        "slug": "dam-engineering-works",
        "name": "Dam engineering works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dam engineering.",
        "description": "Primary works and adaptations through which most audiences encounter Dam engineering."
    },
    {
        "slug": "dam-engineering-symbols",
        "name": "Dam engineering symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dam engineering.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dam engineering."
    },
    {
        "slug": "dam-engineering-controversies",
        "name": "Dam engineering controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dam engineering.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dam engineering argumentative."
    },
    {
        "slug": "dam-engineering-sources",
        "name": "Dam engineering sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dam engineering.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dam engineering."
    },
    {
        "slug": "dam-engineering-geography",
        "name": "Dam engineering geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dam engineering.",
        "description": "Regions, routes, and spatial systems that situate Dam engineering beyond single named places."
    },
    {
        "slug": "dam-engineering-legacy",
        "name": "Dam engineering legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dam engineering.",
        "description": "How Dam engineering continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dam-engineering-practices",
        "name": "Dam engineering practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dam engineering.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dam engineering."
    },
    {
        "slug": "dam-engineering-entry-1",
        "name": "Dam engineering entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-2",
        "name": "Dam engineering entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-3",
        "name": "Dam engineering entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-4",
        "name": "Dam engineering entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-5",
        "name": "Dam engineering entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-6",
        "name": "Dam engineering entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-7",
        "name": "Dam engineering entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-8",
        "name": "Dam engineering entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-9",
        "name": "Dam engineering entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-10",
        "name": "Dam engineering entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-11",
        "name": "Dam engineering entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-12",
        "name": "Dam engineering entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-13",
        "name": "Dam engineering entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-14",
        "name": "Dam engineering entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-15",
        "name": "Dam engineering entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-16",
        "name": "Dam engineering entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-17",
        "name": "Dam engineering entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-18",
        "name": "Dam engineering entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-19",
        "name": "Dam engineering entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-20",
        "name": "Dam engineering entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-21",
        "name": "Dam engineering entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-22",
        "name": "Dam engineering entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-23",
        "name": "Dam engineering entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dam-engineering-entry-24",
        "name": "Dam engineering entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dam engineering.",
        "description": "A supporting encyclopedia entry in the Dam engineering subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dam-engineering",
        "dam-engineering-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dam-engineering",
        "dam-engineering-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dam-engineering",
        "dam-engineering-places",
        "contains",
        "Dam engineering places is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-events",
        "contains",
        "Dam engineering events is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-objects",
        "contains",
        "Dam engineering objects & artifacts is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-factions",
        "contains",
        "Dam engineering factions & groups is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-concepts",
        "contains",
        "Dam engineering concepts is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-eras",
        "contains",
        "Dam engineering eras is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-works",
        "contains",
        "Dam engineering works & media is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-symbols",
        "contains",
        "Dam engineering symbols is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-controversies",
        "contains",
        "Dam engineering controversies is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-sources",
        "contains",
        "Dam engineering sources is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-geography",
        "contains",
        "Dam engineering geography is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-legacy",
        "contains",
        "Dam engineering legacy is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-practices",
        "contains",
        "Dam engineering practices is a primary trailhead under Dam engineering.",
        0.88,
        0.82
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-1",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-2",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-3",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-4",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-5",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-6",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-7",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-8",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-9",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-10",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-11",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-12",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-13",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-14",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-15",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-16",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-17",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-18",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-19",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-20",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-21",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-22",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-23",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ],
    [
        "dam-engineering",
        "dam-engineering-entry-24",
        "contains",
        "Supporting entry under Dam engineering.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
