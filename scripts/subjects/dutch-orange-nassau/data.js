/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dutch-orange-nassau",
        "name": "House of Orange-Nassau",
        "type": "topic",
        "short_description": "Stadtholders to kings, and the dynasty that defines the modern Netherlands.",
        "description": "Stadtholders to kings, and the dynasty that defines the modern Netherlands. This Ton-o-Lore subject maps people, places, events, and ideas tied to House of Orange-Nassau so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "dutch-orange-nassau-figures",
        "name": "House of Orange-Nassau figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to House of Orange-Nassau.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring House of Orange-Nassau."
    },
    {
        "slug": "dutch-orange-nassau-world",
        "name": "House of Orange-Nassau world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame House of Orange-Nassau.",
        "description": "Geography, institutions, and periodization that give House of Orange-Nassau its encyclopedia shape."
    },
    {
        "slug": "dutch-orange-nassau-places",
        "name": "House of Orange-Nassau places",
        "type": "place",
        "short_description": "Locations and geographies that frame House of Orange-Nassau.",
        "description": "Places, regions, and built sites that give House of Orange-Nassau its map — where events and figures concentrate."
    },
    {
        "slug": "dutch-orange-nassau-events",
        "name": "House of Orange-Nassau events",
        "type": "event",
        "short_description": "Turning points and dated episodes in House of Orange-Nassau.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the House of Orange-Nassau timeline."
    },
    {
        "slug": "dutch-orange-nassau-objects",
        "name": "House of Orange-Nassau objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to House of Orange-Nassau.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through House of Orange-Nassau."
    },
    {
        "slug": "dutch-orange-nassau-factions",
        "name": "House of Orange-Nassau factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside House of Orange-Nassau.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in House of Orange-Nassau."
    },
    {
        "slug": "dutch-orange-nassau-concepts",
        "name": "House of Orange-Nassau concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize House of Orange-Nassau.",
        "description": "Keywords, doctrines, systems, and abstract forces that make House of Orange-Nassau readable as a lore graph."
    },
    {
        "slug": "dutch-orange-nassau-eras",
        "name": "House of Orange-Nassau eras",
        "type": "event",
        "short_description": "Periodization for House of Orange-Nassau.",
        "description": "Named eras and phases that help readers track how House of Orange-Nassau changes across time."
    },
    {
        "slug": "dutch-orange-nassau-works",
        "name": "House of Orange-Nassau works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry House of Orange-Nassau.",
        "description": "Primary works and adaptations through which most audiences encounter House of Orange-Nassau."
    },
    {
        "slug": "dutch-orange-nassau-symbols",
        "name": "House of Orange-Nassau symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with House of Orange-Nassau.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside House of Orange-Nassau."
    },
    {
        "slug": "dutch-orange-nassau-controversies",
        "name": "House of Orange-Nassau controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in House of Orange-Nassau.",
        "description": "Debates, rival canons, scandals, and contested facts that keep House of Orange-Nassau argumentative."
    },
    {
        "slug": "dutch-orange-nassau-sources",
        "name": "House of Orange-Nassau sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into House of Orange-Nassau.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify House of Orange-Nassau."
    },
    {
        "slug": "dutch-orange-nassau-geography",
        "name": "House of Orange-Nassau geography",
        "type": "place",
        "short_description": "Broader geographic framing for House of Orange-Nassau.",
        "description": "Regions, routes, and spatial systems that situate House of Orange-Nassau beyond single named places."
    },
    {
        "slug": "dutch-orange-nassau-legacy",
        "name": "House of Orange-Nassau legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of House of Orange-Nassau.",
        "description": "How House of Orange-Nassau continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dutch-orange-nassau-practices",
        "name": "House of Orange-Nassau practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in House of Orange-Nassau.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in House of Orange-Nassau."
    },
    {
        "slug": "dutch-orange-nassau-entry-1",
        "name": "House of Orange-Nassau entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-2",
        "name": "House of Orange-Nassau entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-3",
        "name": "House of Orange-Nassau entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-4",
        "name": "House of Orange-Nassau entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-5",
        "name": "House of Orange-Nassau entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-6",
        "name": "House of Orange-Nassau entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-7",
        "name": "House of Orange-Nassau entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-8",
        "name": "House of Orange-Nassau entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-9",
        "name": "House of Orange-Nassau entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-10",
        "name": "House of Orange-Nassau entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-11",
        "name": "House of Orange-Nassau entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-12",
        "name": "House of Orange-Nassau entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-13",
        "name": "House of Orange-Nassau entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-14",
        "name": "House of Orange-Nassau entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-15",
        "name": "House of Orange-Nassau entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-16",
        "name": "House of Orange-Nassau entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-17",
        "name": "House of Orange-Nassau entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-18",
        "name": "House of Orange-Nassau entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-19",
        "name": "House of Orange-Nassau entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-20",
        "name": "House of Orange-Nassau entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-21",
        "name": "House of Orange-Nassau entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-22",
        "name": "House of Orange-Nassau entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-23",
        "name": "House of Orange-Nassau entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dutch-orange-nassau-entry-24",
        "name": "House of Orange-Nassau entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of Orange-Nassau.",
        "description": "A supporting encyclopedia entry in the House of Orange-Nassau subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-places",
        "contains",
        "House of Orange-Nassau places is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-events",
        "contains",
        "House of Orange-Nassau events is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-objects",
        "contains",
        "House of Orange-Nassau objects & artifacts is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-factions",
        "contains",
        "House of Orange-Nassau factions & groups is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-concepts",
        "contains",
        "House of Orange-Nassau concepts is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-eras",
        "contains",
        "House of Orange-Nassau eras is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-works",
        "contains",
        "House of Orange-Nassau works & media is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-symbols",
        "contains",
        "House of Orange-Nassau symbols is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-controversies",
        "contains",
        "House of Orange-Nassau controversies is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-sources",
        "contains",
        "House of Orange-Nassau sources is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-geography",
        "contains",
        "House of Orange-Nassau geography is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-legacy",
        "contains",
        "House of Orange-Nassau legacy is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-practices",
        "contains",
        "House of Orange-Nassau practices is a primary trailhead under House of Orange-Nassau.",
        0.88,
        0.82
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-1",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-2",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-3",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-4",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-5",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-6",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-7",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-8",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-9",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-10",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-11",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-12",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-13",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-14",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-15",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-16",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-17",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-18",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-19",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-20",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-21",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-22",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-23",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ],
    [
        "dutch-orange-nassau",
        "dutch-orange-nassau-entry-24",
        "contains",
        "Supporting entry under House of Orange-Nassau.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
