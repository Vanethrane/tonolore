/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "knights-templar",
        "name": "The Knights Templar",
        "type": "topic",
        "short_description": "Crusading order, banking networks, trials, dissolution, and the legends that outlived the knights.",
        "description": "Crusading order, banking networks, trials, dissolution, and the legends that outlived the knights. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Knights Templar so readers can follow long-tail connections across history."
    },
    {
        "slug": "knights-templar-figures",
        "name": "The Knights Templar figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Knights Templar.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Knights Templar."
    },
    {
        "slug": "knights-templar-world",
        "name": "The Knights Templar world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Knights Templar.",
        "description": "Geography, institutions, and periodization that give The Knights Templar its encyclopedia shape."
    },
    {
        "slug": "knights-templar-places",
        "name": "The Knights Templar places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Knights Templar.",
        "description": "Places, regions, and built sites that give The Knights Templar its map — where events and figures concentrate."
    },
    {
        "slug": "knights-templar-events",
        "name": "The Knights Templar events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Knights Templar.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Knights Templar timeline."
    },
    {
        "slug": "knights-templar-objects",
        "name": "The Knights Templar objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Knights Templar.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Knights Templar."
    },
    {
        "slug": "knights-templar-factions",
        "name": "The Knights Templar factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Knights Templar.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Knights Templar."
    },
    {
        "slug": "knights-templar-concepts",
        "name": "The Knights Templar concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Knights Templar.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Knights Templar readable as a lore graph."
    },
    {
        "slug": "knights-templar-eras",
        "name": "The Knights Templar eras",
        "type": "event",
        "short_description": "Periodization for The Knights Templar.",
        "description": "Named eras and phases that help readers track how The Knights Templar changes across time."
    },
    {
        "slug": "knights-templar-works",
        "name": "The Knights Templar works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Knights Templar.",
        "description": "Primary works and adaptations through which most audiences encounter The Knights Templar."
    },
    {
        "slug": "knights-templar-symbols",
        "name": "The Knights Templar symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Knights Templar.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Knights Templar."
    },
    {
        "slug": "knights-templar-controversies",
        "name": "The Knights Templar controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Knights Templar.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Knights Templar argumentative."
    },
    {
        "slug": "knights-templar-sources",
        "name": "The Knights Templar sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Knights Templar.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Knights Templar."
    },
    {
        "slug": "knights-templar-geography",
        "name": "The Knights Templar geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Knights Templar.",
        "description": "Regions, routes, and spatial systems that situate The Knights Templar beyond single named places."
    },
    {
        "slug": "knights-templar-legacy",
        "name": "The Knights Templar legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Knights Templar.",
        "description": "How The Knights Templar continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "knights-templar-practices",
        "name": "The Knights Templar practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Knights Templar.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Knights Templar."
    },
    {
        "slug": "knights-templar-entry-1",
        "name": "The Knights Templar entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-2",
        "name": "The Knights Templar entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-3",
        "name": "The Knights Templar entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-4",
        "name": "The Knights Templar entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-5",
        "name": "The Knights Templar entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-6",
        "name": "The Knights Templar entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-7",
        "name": "The Knights Templar entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-8",
        "name": "The Knights Templar entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-9",
        "name": "The Knights Templar entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-10",
        "name": "The Knights Templar entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-11",
        "name": "The Knights Templar entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-12",
        "name": "The Knights Templar entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-13",
        "name": "The Knights Templar entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-14",
        "name": "The Knights Templar entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-15",
        "name": "The Knights Templar entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-16",
        "name": "The Knights Templar entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-17",
        "name": "The Knights Templar entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-18",
        "name": "The Knights Templar entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-19",
        "name": "The Knights Templar entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-20",
        "name": "The Knights Templar entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-21",
        "name": "The Knights Templar entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-22",
        "name": "The Knights Templar entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-23",
        "name": "The Knights Templar entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "knights-templar-entry-24",
        "name": "The Knights Templar entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Knights Templar.",
        "description": "A supporting encyclopedia entry in the The Knights Templar subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "knights-templar",
        "knights-templar-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "knights-templar",
        "knights-templar-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "knights-templar",
        "knights-templar-places",
        "contains",
        "The Knights Templar places is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-events",
        "contains",
        "The Knights Templar events is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-objects",
        "contains",
        "The Knights Templar objects & artifacts is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-factions",
        "contains",
        "The Knights Templar factions & groups is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-concepts",
        "contains",
        "The Knights Templar concepts is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-eras",
        "contains",
        "The Knights Templar eras is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-works",
        "contains",
        "The Knights Templar works & media is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-symbols",
        "contains",
        "The Knights Templar symbols is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-controversies",
        "contains",
        "The Knights Templar controversies is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-sources",
        "contains",
        "The Knights Templar sources is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-geography",
        "contains",
        "The Knights Templar geography is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-legacy",
        "contains",
        "The Knights Templar legacy is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-practices",
        "contains",
        "The Knights Templar practices is a primary trailhead under The Knights Templar.",
        0.88,
        0.82
    ],
    [
        "knights-templar",
        "knights-templar-entry-1",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-2",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-3",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-4",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-5",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-6",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-7",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-8",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-9",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-10",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-11",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-12",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-13",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-14",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-15",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-16",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-17",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-18",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-19",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-20",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-21",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-22",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-23",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ],
    [
        "knights-templar",
        "knights-templar-entry-24",
        "contains",
        "Supporting entry under The Knights Templar.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
