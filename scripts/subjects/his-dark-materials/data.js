/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "his-dark-materials",
        "name": "His Dark Materials",
        "type": "topic",
        "short_description": "Daemons, dust, and the anti-authoritarian multiverse epic of Lyra’s worlds.",
        "description": "Daemons, dust, and the anti-authoritarian multiverse epic of Lyra’s worlds. This Ton-o-Lore subject maps people, places, events, and ideas tied to His Dark Materials so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "his-dark-materials-figures",
        "name": "His Dark Materials figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to His Dark Materials.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring His Dark Materials."
    },
    {
        "slug": "his-dark-materials-world",
        "name": "His Dark Materials world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame His Dark Materials.",
        "description": "Geography, institutions, and periodization that give His Dark Materials its encyclopedia shape."
    },
    {
        "slug": "his-dark-materials-places",
        "name": "His Dark Materials places",
        "type": "place",
        "short_description": "Locations and geographies that frame His Dark Materials.",
        "description": "Places, regions, and built sites that give His Dark Materials its map — where events and figures concentrate."
    },
    {
        "slug": "his-dark-materials-events",
        "name": "His Dark Materials events",
        "type": "event",
        "short_description": "Turning points and dated episodes in His Dark Materials.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the His Dark Materials timeline."
    },
    {
        "slug": "his-dark-materials-objects",
        "name": "His Dark Materials objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to His Dark Materials.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through His Dark Materials."
    },
    {
        "slug": "his-dark-materials-factions",
        "name": "His Dark Materials factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside His Dark Materials.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in His Dark Materials."
    },
    {
        "slug": "his-dark-materials-concepts",
        "name": "His Dark Materials concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize His Dark Materials.",
        "description": "Keywords, doctrines, systems, and abstract forces that make His Dark Materials readable as a lore graph."
    },
    {
        "slug": "his-dark-materials-eras",
        "name": "His Dark Materials eras",
        "type": "event",
        "short_description": "Periodization for His Dark Materials.",
        "description": "Named eras and phases that help readers track how His Dark Materials changes across time."
    },
    {
        "slug": "his-dark-materials-works",
        "name": "His Dark Materials works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry His Dark Materials.",
        "description": "Primary works and adaptations through which most audiences encounter His Dark Materials."
    },
    {
        "slug": "his-dark-materials-symbols",
        "name": "His Dark Materials symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with His Dark Materials.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside His Dark Materials."
    },
    {
        "slug": "his-dark-materials-controversies",
        "name": "His Dark Materials controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in His Dark Materials.",
        "description": "Debates, rival canons, scandals, and contested facts that keep His Dark Materials argumentative."
    },
    {
        "slug": "his-dark-materials-sources",
        "name": "His Dark Materials sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into His Dark Materials.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify His Dark Materials."
    },
    {
        "slug": "his-dark-materials-geography",
        "name": "His Dark Materials geography",
        "type": "place",
        "short_description": "Broader geographic framing for His Dark Materials.",
        "description": "Regions, routes, and spatial systems that situate His Dark Materials beyond single named places."
    },
    {
        "slug": "his-dark-materials-legacy",
        "name": "His Dark Materials legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of His Dark Materials.",
        "description": "How His Dark Materials continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "his-dark-materials-practices",
        "name": "His Dark Materials practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in His Dark Materials.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in His Dark Materials."
    },
    {
        "slug": "his-dark-materials-entry-1",
        "name": "His Dark Materials entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-2",
        "name": "His Dark Materials entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-3",
        "name": "His Dark Materials entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-4",
        "name": "His Dark Materials entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-5",
        "name": "His Dark Materials entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-6",
        "name": "His Dark Materials entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-7",
        "name": "His Dark Materials entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-8",
        "name": "His Dark Materials entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-9",
        "name": "His Dark Materials entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-10",
        "name": "His Dark Materials entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-11",
        "name": "His Dark Materials entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-12",
        "name": "His Dark Materials entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-13",
        "name": "His Dark Materials entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-14",
        "name": "His Dark Materials entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-15",
        "name": "His Dark Materials entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-16",
        "name": "His Dark Materials entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-17",
        "name": "His Dark Materials entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-18",
        "name": "His Dark Materials entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-19",
        "name": "His Dark Materials entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-20",
        "name": "His Dark Materials entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-21",
        "name": "His Dark Materials entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-22",
        "name": "His Dark Materials entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-23",
        "name": "His Dark Materials entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "his-dark-materials-entry-24",
        "name": "His Dark Materials entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside His Dark Materials.",
        "description": "A supporting encyclopedia entry in the His Dark Materials subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "his-dark-materials",
        "his-dark-materials-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "his-dark-materials",
        "his-dark-materials-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "his-dark-materials",
        "his-dark-materials-places",
        "contains",
        "His Dark Materials places is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-events",
        "contains",
        "His Dark Materials events is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-objects",
        "contains",
        "His Dark Materials objects & artifacts is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-factions",
        "contains",
        "His Dark Materials factions & groups is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-concepts",
        "contains",
        "His Dark Materials concepts is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-eras",
        "contains",
        "His Dark Materials eras is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-works",
        "contains",
        "His Dark Materials works & media is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-symbols",
        "contains",
        "His Dark Materials symbols is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-controversies",
        "contains",
        "His Dark Materials controversies is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-sources",
        "contains",
        "His Dark Materials sources is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-geography",
        "contains",
        "His Dark Materials geography is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-legacy",
        "contains",
        "His Dark Materials legacy is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-practices",
        "contains",
        "His Dark Materials practices is a primary trailhead under His Dark Materials.",
        0.88,
        0.82
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-1",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-2",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-3",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-4",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-5",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-6",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-7",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-8",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-9",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-10",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-11",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-12",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-13",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-14",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-15",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-16",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-17",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-18",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-19",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-20",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-21",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-22",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-23",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ],
    [
        "his-dark-materials",
        "his-dark-materials-entry-24",
        "contains",
        "Supporting entry under His Dark Materials.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
