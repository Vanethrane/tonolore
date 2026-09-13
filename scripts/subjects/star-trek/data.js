/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "star-trek",
        "name": "Star Trek",
        "type": "topic",
        "short_description": "Federation ideals, ships, and series that defined optimistic space opera on screen.",
        "description": "Federation ideals, ships, and series that defined optimistic space opera on screen. This Ton-o-Lore subject maps people, places, events, and ideas tied to Star Trek so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "star-trek-figures",
        "name": "Star Trek figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Star Trek.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Star Trek."
    },
    {
        "slug": "star-trek-world",
        "name": "Star Trek world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Star Trek.",
        "description": "Geography, institutions, and periodization that give Star Trek its encyclopedia shape."
    },
    {
        "slug": "star-trek-places",
        "name": "Star Trek places",
        "type": "place",
        "short_description": "Locations and geographies that frame Star Trek.",
        "description": "Places, regions, and built sites that give Star Trek its map — where events and figures concentrate."
    },
    {
        "slug": "star-trek-events",
        "name": "Star Trek events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Star Trek.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Star Trek timeline."
    },
    {
        "slug": "star-trek-objects",
        "name": "Star Trek objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Star Trek.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Star Trek."
    },
    {
        "slug": "star-trek-factions",
        "name": "Star Trek factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Star Trek.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Star Trek."
    },
    {
        "slug": "star-trek-concepts",
        "name": "Star Trek concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Star Trek.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Star Trek readable as a lore graph."
    },
    {
        "slug": "star-trek-eras",
        "name": "Star Trek eras",
        "type": "event",
        "short_description": "Periodization for Star Trek.",
        "description": "Named eras and phases that help readers track how Star Trek changes across time."
    },
    {
        "slug": "star-trek-works",
        "name": "Star Trek works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Star Trek.",
        "description": "Primary works and adaptations through which most audiences encounter Star Trek."
    },
    {
        "slug": "star-trek-symbols",
        "name": "Star Trek symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Star Trek.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Star Trek."
    },
    {
        "slug": "star-trek-controversies",
        "name": "Star Trek controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Star Trek.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Star Trek argumentative."
    },
    {
        "slug": "star-trek-sources",
        "name": "Star Trek sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Star Trek.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Star Trek."
    },
    {
        "slug": "star-trek-geography",
        "name": "Star Trek geography",
        "type": "place",
        "short_description": "Broader geographic framing for Star Trek.",
        "description": "Regions, routes, and spatial systems that situate Star Trek beyond single named places."
    },
    {
        "slug": "star-trek-legacy",
        "name": "Star Trek legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Star Trek.",
        "description": "How Star Trek continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "star-trek-practices",
        "name": "Star Trek practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Star Trek.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Star Trek."
    },
    {
        "slug": "star-trek-entry-1",
        "name": "Star Trek entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-2",
        "name": "Star Trek entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-3",
        "name": "Star Trek entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-4",
        "name": "Star Trek entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-5",
        "name": "Star Trek entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-6",
        "name": "Star Trek entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-7",
        "name": "Star Trek entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-8",
        "name": "Star Trek entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-9",
        "name": "Star Trek entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-10",
        "name": "Star Trek entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-11",
        "name": "Star Trek entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-12",
        "name": "Star Trek entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-13",
        "name": "Star Trek entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-14",
        "name": "Star Trek entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-15",
        "name": "Star Trek entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-16",
        "name": "Star Trek entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-17",
        "name": "Star Trek entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-18",
        "name": "Star Trek entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-19",
        "name": "Star Trek entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-20",
        "name": "Star Trek entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-21",
        "name": "Star Trek entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-22",
        "name": "Star Trek entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-23",
        "name": "Star Trek entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-trek-entry-24",
        "name": "Star Trek entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Trek.",
        "description": "A supporting encyclopedia entry in the Star Trek subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "star-trek",
        "star-trek-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "star-trek",
        "star-trek-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "star-trek",
        "star-trek-places",
        "contains",
        "Star Trek places is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-events",
        "contains",
        "Star Trek events is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-objects",
        "contains",
        "Star Trek objects & artifacts is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-factions",
        "contains",
        "Star Trek factions & groups is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-concepts",
        "contains",
        "Star Trek concepts is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-eras",
        "contains",
        "Star Trek eras is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-works",
        "contains",
        "Star Trek works & media is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-symbols",
        "contains",
        "Star Trek symbols is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-controversies",
        "contains",
        "Star Trek controversies is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-sources",
        "contains",
        "Star Trek sources is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-geography",
        "contains",
        "Star Trek geography is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-legacy",
        "contains",
        "Star Trek legacy is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-practices",
        "contains",
        "Star Trek practices is a primary trailhead under Star Trek.",
        0.88,
        0.82
    ],
    [
        "star-trek",
        "star-trek-entry-1",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-2",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-3",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-4",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-5",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-6",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-7",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-8",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-9",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-10",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-11",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-12",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-13",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-14",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-15",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-16",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-17",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-18",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-19",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-20",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-21",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-22",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-23",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ],
    [
        "star-trek",
        "star-trek-entry-24",
        "contains",
        "Supporting entry under Star Trek.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
