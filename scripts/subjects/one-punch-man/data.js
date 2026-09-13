/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "one-punch-man",
        "name": "One-Punch Man",
        "type": "topic",
        "short_description": "Saitama’s boredom, Hero Association ranks, and the parody that became sincere spectacle.",
        "description": "Saitama’s boredom, Hero Association ranks, and the parody that became sincere spectacle. This Ton-o-Lore subject maps people, places, events, and ideas tied to One-Punch Man so readers can follow long-tail connections across anime."
    },
    {
        "slug": "one-punch-man-figures",
        "name": "One-Punch Man figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to One-Punch Man.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring One-Punch Man."
    },
    {
        "slug": "one-punch-man-world",
        "name": "One-Punch Man world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame One-Punch Man.",
        "description": "Geography, institutions, and periodization that give One-Punch Man its encyclopedia shape."
    },
    {
        "slug": "one-punch-man-places",
        "name": "One-Punch Man places",
        "type": "place",
        "short_description": "Locations and geographies that frame One-Punch Man.",
        "description": "Places, regions, and built sites that give One-Punch Man its map — where events and figures concentrate."
    },
    {
        "slug": "one-punch-man-events",
        "name": "One-Punch Man events",
        "type": "event",
        "short_description": "Turning points and dated episodes in One-Punch Man.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the One-Punch Man timeline."
    },
    {
        "slug": "one-punch-man-objects",
        "name": "One-Punch Man objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to One-Punch Man.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through One-Punch Man."
    },
    {
        "slug": "one-punch-man-factions",
        "name": "One-Punch Man factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside One-Punch Man.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in One-Punch Man."
    },
    {
        "slug": "one-punch-man-concepts",
        "name": "One-Punch Man concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize One-Punch Man.",
        "description": "Keywords, doctrines, systems, and abstract forces that make One-Punch Man readable as a lore graph."
    },
    {
        "slug": "one-punch-man-eras",
        "name": "One-Punch Man eras",
        "type": "event",
        "short_description": "Periodization for One-Punch Man.",
        "description": "Named eras and phases that help readers track how One-Punch Man changes across time."
    },
    {
        "slug": "one-punch-man-works",
        "name": "One-Punch Man works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry One-Punch Man.",
        "description": "Primary works and adaptations through which most audiences encounter One-Punch Man."
    },
    {
        "slug": "one-punch-man-symbols",
        "name": "One-Punch Man symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with One-Punch Man.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside One-Punch Man."
    },
    {
        "slug": "one-punch-man-controversies",
        "name": "One-Punch Man controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in One-Punch Man.",
        "description": "Debates, rival canons, scandals, and contested facts that keep One-Punch Man argumentative."
    },
    {
        "slug": "one-punch-man-sources",
        "name": "One-Punch Man sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into One-Punch Man.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify One-Punch Man."
    },
    {
        "slug": "one-punch-man-geography",
        "name": "One-Punch Man geography",
        "type": "place",
        "short_description": "Broader geographic framing for One-Punch Man.",
        "description": "Regions, routes, and spatial systems that situate One-Punch Man beyond single named places."
    },
    {
        "slug": "one-punch-man-legacy",
        "name": "One-Punch Man legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of One-Punch Man.",
        "description": "How One-Punch Man continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "one-punch-man-practices",
        "name": "One-Punch Man practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in One-Punch Man.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in One-Punch Man."
    },
    {
        "slug": "one-punch-man-entry-1",
        "name": "One-Punch Man entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-2",
        "name": "One-Punch Man entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-3",
        "name": "One-Punch Man entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-4",
        "name": "One-Punch Man entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-5",
        "name": "One-Punch Man entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-6",
        "name": "One-Punch Man entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-7",
        "name": "One-Punch Man entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-8",
        "name": "One-Punch Man entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-9",
        "name": "One-Punch Man entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-10",
        "name": "One-Punch Man entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-11",
        "name": "One-Punch Man entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-12",
        "name": "One-Punch Man entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-13",
        "name": "One-Punch Man entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-14",
        "name": "One-Punch Man entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-15",
        "name": "One-Punch Man entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-16",
        "name": "One-Punch Man entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-17",
        "name": "One-Punch Man entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-18",
        "name": "One-Punch Man entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-19",
        "name": "One-Punch Man entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-20",
        "name": "One-Punch Man entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-21",
        "name": "One-Punch Man entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-22",
        "name": "One-Punch Man entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-23",
        "name": "One-Punch Man entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-punch-man-entry-24",
        "name": "One-Punch Man entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside One-Punch Man.",
        "description": "A supporting encyclopedia entry in the One-Punch Man subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "one-punch-man",
        "one-punch-man-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "one-punch-man",
        "one-punch-man-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "one-punch-man",
        "one-punch-man-places",
        "contains",
        "One-Punch Man places is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-events",
        "contains",
        "One-Punch Man events is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-objects",
        "contains",
        "One-Punch Man objects & artifacts is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-factions",
        "contains",
        "One-Punch Man factions & groups is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-concepts",
        "contains",
        "One-Punch Man concepts is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-eras",
        "contains",
        "One-Punch Man eras is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-works",
        "contains",
        "One-Punch Man works & media is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-symbols",
        "contains",
        "One-Punch Man symbols is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-controversies",
        "contains",
        "One-Punch Man controversies is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-sources",
        "contains",
        "One-Punch Man sources is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-geography",
        "contains",
        "One-Punch Man geography is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-legacy",
        "contains",
        "One-Punch Man legacy is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-practices",
        "contains",
        "One-Punch Man practices is a primary trailhead under One-Punch Man.",
        0.88,
        0.82
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-1",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-2",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-3",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-4",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-5",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-6",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-7",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-8",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-9",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-10",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-11",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-12",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-13",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-14",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-15",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-16",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-17",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-18",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-19",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-20",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-21",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-22",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-23",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ],
    [
        "one-punch-man",
        "one-punch-man-entry-24",
        "contains",
        "Supporting entry under One-Punch Man.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
