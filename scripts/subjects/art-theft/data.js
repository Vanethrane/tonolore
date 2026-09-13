/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "art-theft",
        "name": "Art theft",
        "type": "topic",
        "short_description": "Heists, forgeries, and the black market for paintings that museums still hunt.",
        "description": "Heists, forgeries, and the black market for paintings that museums still hunt. This Ton-o-Lore subject maps people, places, events, and ideas tied to Art theft so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "art-theft-figures",
        "name": "Art theft figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Art theft.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Art theft."
    },
    {
        "slug": "art-theft-world",
        "name": "Art theft world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Art theft.",
        "description": "Geography, institutions, and periodization that give Art theft its encyclopedia shape."
    },
    {
        "slug": "art-theft-places",
        "name": "Art theft places",
        "type": "place",
        "short_description": "Locations and geographies that frame Art theft.",
        "description": "Places, regions, and built sites that give Art theft its map — where events and figures concentrate."
    },
    {
        "slug": "art-theft-events",
        "name": "Art theft events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Art theft.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Art theft timeline."
    },
    {
        "slug": "art-theft-objects",
        "name": "Art theft objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Art theft.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Art theft."
    },
    {
        "slug": "art-theft-factions",
        "name": "Art theft factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Art theft.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Art theft."
    },
    {
        "slug": "art-theft-concepts",
        "name": "Art theft concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Art theft.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Art theft readable as a lore graph."
    },
    {
        "slug": "art-theft-eras",
        "name": "Art theft eras",
        "type": "event",
        "short_description": "Periodization for Art theft.",
        "description": "Named eras and phases that help readers track how Art theft changes across time."
    },
    {
        "slug": "art-theft-works",
        "name": "Art theft works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Art theft.",
        "description": "Primary works and adaptations through which most audiences encounter Art theft."
    },
    {
        "slug": "art-theft-symbols",
        "name": "Art theft symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Art theft.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Art theft."
    },
    {
        "slug": "art-theft-controversies",
        "name": "Art theft controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Art theft.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Art theft argumentative."
    },
    {
        "slug": "art-theft-sources",
        "name": "Art theft sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Art theft.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Art theft."
    },
    {
        "slug": "art-theft-geography",
        "name": "Art theft geography",
        "type": "place",
        "short_description": "Broader geographic framing for Art theft.",
        "description": "Regions, routes, and spatial systems that situate Art theft beyond single named places."
    },
    {
        "slug": "art-theft-legacy",
        "name": "Art theft legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Art theft.",
        "description": "How Art theft continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "art-theft-practices",
        "name": "Art theft practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Art theft.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Art theft."
    },
    {
        "slug": "art-theft-entry-1",
        "name": "Art theft entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-2",
        "name": "Art theft entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-3",
        "name": "Art theft entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-4",
        "name": "Art theft entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-5",
        "name": "Art theft entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-6",
        "name": "Art theft entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-7",
        "name": "Art theft entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-8",
        "name": "Art theft entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-9",
        "name": "Art theft entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-10",
        "name": "Art theft entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-11",
        "name": "Art theft entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-12",
        "name": "Art theft entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-13",
        "name": "Art theft entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-14",
        "name": "Art theft entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-15",
        "name": "Art theft entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-16",
        "name": "Art theft entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-17",
        "name": "Art theft entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-18",
        "name": "Art theft entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-19",
        "name": "Art theft entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-20",
        "name": "Art theft entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-21",
        "name": "Art theft entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-22",
        "name": "Art theft entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-23",
        "name": "Art theft entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-theft-entry-24",
        "name": "Art theft entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art theft.",
        "description": "A supporting encyclopedia entry in the Art theft subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "art-theft",
        "art-theft-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "art-theft",
        "art-theft-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "art-theft",
        "art-theft-places",
        "contains",
        "Art theft places is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-events",
        "contains",
        "Art theft events is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-objects",
        "contains",
        "Art theft objects & artifacts is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-factions",
        "contains",
        "Art theft factions & groups is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-concepts",
        "contains",
        "Art theft concepts is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-eras",
        "contains",
        "Art theft eras is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-works",
        "contains",
        "Art theft works & media is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-symbols",
        "contains",
        "Art theft symbols is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-controversies",
        "contains",
        "Art theft controversies is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-sources",
        "contains",
        "Art theft sources is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-geography",
        "contains",
        "Art theft geography is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-legacy",
        "contains",
        "Art theft legacy is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-practices",
        "contains",
        "Art theft practices is a primary trailhead under Art theft.",
        0.88,
        0.82
    ],
    [
        "art-theft",
        "art-theft-entry-1",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-2",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-3",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-4",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-5",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-6",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-7",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-8",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-9",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-10",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-11",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-12",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-13",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-14",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-15",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-16",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-17",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-18",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-19",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-20",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-21",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-22",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-23",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ],
    [
        "art-theft",
        "art-theft-entry-24",
        "contains",
        "Supporting entry under Art theft.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
