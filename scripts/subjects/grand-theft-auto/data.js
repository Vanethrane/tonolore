/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "grand-theft-auto",
        "name": "Grand Theft Auto",
        "type": "topic",
        "short_description": "Satire cities, radio lore, and the open-world crime sandbox that remade mainstream gaming.",
        "description": "Satire cities, radio lore, and the open-world crime sandbox that remade mainstream gaming. This Ton-o-Lore subject maps people, places, events, and ideas tied to Grand Theft Auto so readers can follow long-tail connections across video games."
    },
    {
        "slug": "grand-theft-auto-figures",
        "name": "Grand Theft Auto figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Grand Theft Auto.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Grand Theft Auto."
    },
    {
        "slug": "grand-theft-auto-world",
        "name": "Grand Theft Auto world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Grand Theft Auto.",
        "description": "Geography, institutions, and periodization that give Grand Theft Auto its encyclopedia shape."
    },
    {
        "slug": "grand-theft-auto-places",
        "name": "Grand Theft Auto places",
        "type": "place",
        "short_description": "Locations and geographies that frame Grand Theft Auto.",
        "description": "Places, regions, and built sites that give Grand Theft Auto its map — where events and figures concentrate."
    },
    {
        "slug": "grand-theft-auto-events",
        "name": "Grand Theft Auto events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Grand Theft Auto.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Grand Theft Auto timeline."
    },
    {
        "slug": "grand-theft-auto-objects",
        "name": "Grand Theft Auto objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Grand Theft Auto.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Grand Theft Auto."
    },
    {
        "slug": "grand-theft-auto-factions",
        "name": "Grand Theft Auto factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Grand Theft Auto.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Grand Theft Auto."
    },
    {
        "slug": "grand-theft-auto-concepts",
        "name": "Grand Theft Auto concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Grand Theft Auto.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Grand Theft Auto readable as a lore graph."
    },
    {
        "slug": "grand-theft-auto-eras",
        "name": "Grand Theft Auto eras",
        "type": "event",
        "short_description": "Periodization for Grand Theft Auto.",
        "description": "Named eras and phases that help readers track how Grand Theft Auto changes across time."
    },
    {
        "slug": "grand-theft-auto-works",
        "name": "Grand Theft Auto works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Grand Theft Auto.",
        "description": "Primary works and adaptations through which most audiences encounter Grand Theft Auto."
    },
    {
        "slug": "grand-theft-auto-symbols",
        "name": "Grand Theft Auto symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Grand Theft Auto.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Grand Theft Auto."
    },
    {
        "slug": "grand-theft-auto-controversies",
        "name": "Grand Theft Auto controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Grand Theft Auto.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Grand Theft Auto argumentative."
    },
    {
        "slug": "grand-theft-auto-sources",
        "name": "Grand Theft Auto sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Grand Theft Auto.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Grand Theft Auto."
    },
    {
        "slug": "grand-theft-auto-geography",
        "name": "Grand Theft Auto geography",
        "type": "place",
        "short_description": "Broader geographic framing for Grand Theft Auto.",
        "description": "Regions, routes, and spatial systems that situate Grand Theft Auto beyond single named places."
    },
    {
        "slug": "grand-theft-auto-legacy",
        "name": "Grand Theft Auto legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Grand Theft Auto.",
        "description": "How Grand Theft Auto continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "grand-theft-auto-practices",
        "name": "Grand Theft Auto practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Grand Theft Auto.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Grand Theft Auto."
    },
    {
        "slug": "grand-theft-auto-entry-1",
        "name": "Grand Theft Auto entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-2",
        "name": "Grand Theft Auto entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-3",
        "name": "Grand Theft Auto entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-4",
        "name": "Grand Theft Auto entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-5",
        "name": "Grand Theft Auto entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-6",
        "name": "Grand Theft Auto entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-7",
        "name": "Grand Theft Auto entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-8",
        "name": "Grand Theft Auto entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-9",
        "name": "Grand Theft Auto entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-10",
        "name": "Grand Theft Auto entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-11",
        "name": "Grand Theft Auto entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-12",
        "name": "Grand Theft Auto entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-13",
        "name": "Grand Theft Auto entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-14",
        "name": "Grand Theft Auto entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-15",
        "name": "Grand Theft Auto entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-16",
        "name": "Grand Theft Auto entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-17",
        "name": "Grand Theft Auto entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-18",
        "name": "Grand Theft Auto entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-19",
        "name": "Grand Theft Auto entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-20",
        "name": "Grand Theft Auto entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-21",
        "name": "Grand Theft Auto entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-22",
        "name": "Grand Theft Auto entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-23",
        "name": "Grand Theft Auto entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grand-theft-auto-entry-24",
        "name": "Grand Theft Auto entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grand Theft Auto.",
        "description": "A supporting encyclopedia entry in the Grand Theft Auto subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "grand-theft-auto",
        "grand-theft-auto-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-places",
        "contains",
        "Grand Theft Auto places is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-events",
        "contains",
        "Grand Theft Auto events is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-objects",
        "contains",
        "Grand Theft Auto objects & artifacts is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-factions",
        "contains",
        "Grand Theft Auto factions & groups is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-concepts",
        "contains",
        "Grand Theft Auto concepts is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-eras",
        "contains",
        "Grand Theft Auto eras is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-works",
        "contains",
        "Grand Theft Auto works & media is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-symbols",
        "contains",
        "Grand Theft Auto symbols is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-controversies",
        "contains",
        "Grand Theft Auto controversies is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-sources",
        "contains",
        "Grand Theft Auto sources is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-geography",
        "contains",
        "Grand Theft Auto geography is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-legacy",
        "contains",
        "Grand Theft Auto legacy is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-practices",
        "contains",
        "Grand Theft Auto practices is a primary trailhead under Grand Theft Auto.",
        0.88,
        0.82
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-1",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-2",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-3",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-4",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-5",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-6",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-7",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-8",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-9",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-10",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-11",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-12",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-13",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-14",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-15",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-16",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-17",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-18",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-19",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-20",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-21",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-22",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-23",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ],
    [
        "grand-theft-auto",
        "grand-theft-auto-entry-24",
        "contains",
        "Supporting entry under Grand Theft Auto.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
