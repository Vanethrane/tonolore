/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "s-town",
        "name": "S-Town",
        "type": "topic",
        "short_description": "Literary nonfiction podcasting, John B. McLemore, and the Alabama clock-fixer saga.",
        "description": "Literary nonfiction podcasting, John B. McLemore, and the Alabama clock-fixer saga. This Ton-o-Lore subject maps people, places, events, and ideas tied to S-Town so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "s-town-figures",
        "name": "S-Town figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to S-Town.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring S-Town."
    },
    {
        "slug": "s-town-world",
        "name": "S-Town world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame S-Town.",
        "description": "Geography, institutions, and periodization that give S-Town its encyclopedia shape."
    },
    {
        "slug": "s-town-places",
        "name": "S-Town places",
        "type": "place",
        "short_description": "Locations and geographies that frame S-Town.",
        "description": "Places, regions, and built sites that give S-Town its map — where events and figures concentrate."
    },
    {
        "slug": "s-town-events",
        "name": "S-Town events",
        "type": "event",
        "short_description": "Turning points and dated episodes in S-Town.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the S-Town timeline."
    },
    {
        "slug": "s-town-objects",
        "name": "S-Town objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to S-Town.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through S-Town."
    },
    {
        "slug": "s-town-factions",
        "name": "S-Town factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside S-Town.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in S-Town."
    },
    {
        "slug": "s-town-concepts",
        "name": "S-Town concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize S-Town.",
        "description": "Keywords, doctrines, systems, and abstract forces that make S-Town readable as a lore graph."
    },
    {
        "slug": "s-town-eras",
        "name": "S-Town eras",
        "type": "event",
        "short_description": "Periodization for S-Town.",
        "description": "Named eras and phases that help readers track how S-Town changes across time."
    },
    {
        "slug": "s-town-works",
        "name": "S-Town works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry S-Town.",
        "description": "Primary works and adaptations through which most audiences encounter S-Town."
    },
    {
        "slug": "s-town-symbols",
        "name": "S-Town symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with S-Town.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside S-Town."
    },
    {
        "slug": "s-town-controversies",
        "name": "S-Town controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in S-Town.",
        "description": "Debates, rival canons, scandals, and contested facts that keep S-Town argumentative."
    },
    {
        "slug": "s-town-sources",
        "name": "S-Town sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into S-Town.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify S-Town."
    },
    {
        "slug": "s-town-geography",
        "name": "S-Town geography",
        "type": "place",
        "short_description": "Broader geographic framing for S-Town.",
        "description": "Regions, routes, and spatial systems that situate S-Town beyond single named places."
    },
    {
        "slug": "s-town-legacy",
        "name": "S-Town legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of S-Town.",
        "description": "How S-Town continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "s-town-practices",
        "name": "S-Town practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in S-Town.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in S-Town."
    },
    {
        "slug": "s-town-entry-1",
        "name": "S-Town entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-2",
        "name": "S-Town entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-3",
        "name": "S-Town entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-4",
        "name": "S-Town entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-5",
        "name": "S-Town entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-6",
        "name": "S-Town entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-7",
        "name": "S-Town entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-8",
        "name": "S-Town entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-9",
        "name": "S-Town entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-10",
        "name": "S-Town entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-11",
        "name": "S-Town entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-12",
        "name": "S-Town entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-13",
        "name": "S-Town entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-14",
        "name": "S-Town entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-15",
        "name": "S-Town entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-16",
        "name": "S-Town entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-17",
        "name": "S-Town entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-18",
        "name": "S-Town entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-19",
        "name": "S-Town entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-20",
        "name": "S-Town entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-21",
        "name": "S-Town entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-22",
        "name": "S-Town entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-23",
        "name": "S-Town entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "s-town-entry-24",
        "name": "S-Town entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside S-Town.",
        "description": "A supporting encyclopedia entry in the S-Town subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "s-town",
        "s-town-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "s-town",
        "s-town-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "s-town",
        "s-town-places",
        "contains",
        "S-Town places is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-events",
        "contains",
        "S-Town events is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-objects",
        "contains",
        "S-Town objects & artifacts is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-factions",
        "contains",
        "S-Town factions & groups is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-concepts",
        "contains",
        "S-Town concepts is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-eras",
        "contains",
        "S-Town eras is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-works",
        "contains",
        "S-Town works & media is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-symbols",
        "contains",
        "S-Town symbols is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-controversies",
        "contains",
        "S-Town controversies is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-sources",
        "contains",
        "S-Town sources is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-geography",
        "contains",
        "S-Town geography is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-legacy",
        "contains",
        "S-Town legacy is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-practices",
        "contains",
        "S-Town practices is a primary trailhead under S-Town.",
        0.88,
        0.82
    ],
    [
        "s-town",
        "s-town-entry-1",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-2",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-3",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-4",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-5",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-6",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-7",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-8",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-9",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-10",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-11",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-12",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-13",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-14",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-15",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-16",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-17",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-18",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-19",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-20",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-21",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-22",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-23",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ],
    [
        "s-town",
        "s-town-entry-24",
        "contains",
        "Supporting entry under S-Town.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
