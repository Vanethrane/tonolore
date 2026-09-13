/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-x-files",
        "name": "The X-Files",
        "type": "topic",
        "short_description": "Mulder and Scully, conspiracy mythology, and the 90s freak-of-the-week template.",
        "description": "Mulder and Scully, conspiracy mythology, and the 90s freak-of-the-week template. This Ton-o-Lore subject maps people, places, events, and ideas tied to The X-Files so readers can follow long-tail connections across television."
    },
    {
        "slug": "the-x-files-figures",
        "name": "The X-Files figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The X-Files.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The X-Files."
    },
    {
        "slug": "the-x-files-world",
        "name": "The X-Files world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The X-Files.",
        "description": "Geography, institutions, and periodization that give The X-Files its encyclopedia shape."
    },
    {
        "slug": "the-x-files-places",
        "name": "The X-Files places",
        "type": "place",
        "short_description": "Locations and geographies that frame The X-Files.",
        "description": "Places, regions, and built sites that give The X-Files its map — where events and figures concentrate."
    },
    {
        "slug": "the-x-files-events",
        "name": "The X-Files events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The X-Files.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The X-Files timeline."
    },
    {
        "slug": "the-x-files-objects",
        "name": "The X-Files objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The X-Files.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The X-Files."
    },
    {
        "slug": "the-x-files-factions",
        "name": "The X-Files factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The X-Files.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The X-Files."
    },
    {
        "slug": "the-x-files-concepts",
        "name": "The X-Files concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The X-Files.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The X-Files readable as a lore graph."
    },
    {
        "slug": "the-x-files-eras",
        "name": "The X-Files eras",
        "type": "event",
        "short_description": "Periodization for The X-Files.",
        "description": "Named eras and phases that help readers track how The X-Files changes across time."
    },
    {
        "slug": "the-x-files-works",
        "name": "The X-Files works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The X-Files.",
        "description": "Primary works and adaptations through which most audiences encounter The X-Files."
    },
    {
        "slug": "the-x-files-symbols",
        "name": "The X-Files symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The X-Files.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The X-Files."
    },
    {
        "slug": "the-x-files-controversies",
        "name": "The X-Files controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The X-Files.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The X-Files argumentative."
    },
    {
        "slug": "the-x-files-sources",
        "name": "The X-Files sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The X-Files.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The X-Files."
    },
    {
        "slug": "the-x-files-geography",
        "name": "The X-Files geography",
        "type": "place",
        "short_description": "Broader geographic framing for The X-Files.",
        "description": "Regions, routes, and spatial systems that situate The X-Files beyond single named places."
    },
    {
        "slug": "the-x-files-legacy",
        "name": "The X-Files legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The X-Files.",
        "description": "How The X-Files continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-x-files-practices",
        "name": "The X-Files practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The X-Files.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The X-Files."
    },
    {
        "slug": "the-x-files-entry-1",
        "name": "The X-Files entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-2",
        "name": "The X-Files entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-3",
        "name": "The X-Files entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-4",
        "name": "The X-Files entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-5",
        "name": "The X-Files entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-6",
        "name": "The X-Files entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-7",
        "name": "The X-Files entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-8",
        "name": "The X-Files entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-9",
        "name": "The X-Files entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-10",
        "name": "The X-Files entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-11",
        "name": "The X-Files entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-12",
        "name": "The X-Files entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-13",
        "name": "The X-Files entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-14",
        "name": "The X-Files entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-15",
        "name": "The X-Files entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-16",
        "name": "The X-Files entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-17",
        "name": "The X-Files entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-18",
        "name": "The X-Files entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-19",
        "name": "The X-Files entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-20",
        "name": "The X-Files entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-21",
        "name": "The X-Files entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-22",
        "name": "The X-Files entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-23",
        "name": "The X-Files entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-x-files-entry-24",
        "name": "The X-Files entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The X-Files.",
        "description": "A supporting encyclopedia entry in the The X-Files subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-x-files",
        "the-x-files-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-x-files",
        "the-x-files-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-x-files",
        "the-x-files-places",
        "contains",
        "The X-Files places is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-events",
        "contains",
        "The X-Files events is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-objects",
        "contains",
        "The X-Files objects & artifacts is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-factions",
        "contains",
        "The X-Files factions & groups is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-concepts",
        "contains",
        "The X-Files concepts is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-eras",
        "contains",
        "The X-Files eras is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-works",
        "contains",
        "The X-Files works & media is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-symbols",
        "contains",
        "The X-Files symbols is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-controversies",
        "contains",
        "The X-Files controversies is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-sources",
        "contains",
        "The X-Files sources is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-geography",
        "contains",
        "The X-Files geography is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-legacy",
        "contains",
        "The X-Files legacy is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-practices",
        "contains",
        "The X-Files practices is a primary trailhead under The X-Files.",
        0.88,
        0.82
    ],
    [
        "the-x-files",
        "the-x-files-entry-1",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-2",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-3",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-4",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-5",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-6",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-7",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-8",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-9",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-10",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-11",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-12",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-13",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-14",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-15",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-16",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-17",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-18",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-19",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-20",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-21",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-22",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-23",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ],
    [
        "the-x-files",
        "the-x-files-entry-24",
        "contains",
        "Supporting entry under The X-Files.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
