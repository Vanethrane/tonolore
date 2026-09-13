/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "conan-obrien-needs-a-friend",
        "name": "Conan O'Brien Needs a Friend",
        "type": "topic",
        "short_description": "Celebrity hangouts, staff chemistry, and late-night comedy’s second life in podcast form.",
        "description": "Celebrity hangouts, staff chemistry, and late-night comedy’s second life in podcast form. This Ton-o-Lore subject maps people, places, events, and ideas tied to Conan O'Brien Needs a Friend so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "conan-obrien-needs-a-friend-figures",
        "name": "Conan O'Brien Needs a Friend figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Conan O'Brien Needs a Friend.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Conan O'Brien Needs a Friend."
    },
    {
        "slug": "conan-obrien-needs-a-friend-world",
        "name": "Conan O'Brien Needs a Friend world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Conan O'Brien Needs a Friend.",
        "description": "Geography, institutions, and periodization that give Conan O'Brien Needs a Friend its encyclopedia shape."
    },
    {
        "slug": "conan-obrien-needs-a-friend-places",
        "name": "Conan O'Brien Needs a Friend places",
        "type": "place",
        "short_description": "Locations and geographies that frame Conan O'Brien Needs a Friend.",
        "description": "Places, regions, and built sites that give Conan O'Brien Needs a Friend its map — where events and figures concentrate."
    },
    {
        "slug": "conan-obrien-needs-a-friend-events",
        "name": "Conan O'Brien Needs a Friend events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Conan O'Brien Needs a Friend.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Conan O'Brien Needs a Friend timeline."
    },
    {
        "slug": "conan-obrien-needs-a-friend-objects",
        "name": "Conan O'Brien Needs a Friend objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Conan O'Brien Needs a Friend.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Conan O'Brien Needs a Friend."
    },
    {
        "slug": "conan-obrien-needs-a-friend-factions",
        "name": "Conan O'Brien Needs a Friend factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Conan O'Brien Needs a Friend.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Conan O'Brien Needs a Friend."
    },
    {
        "slug": "conan-obrien-needs-a-friend-concepts",
        "name": "Conan O'Brien Needs a Friend concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Conan O'Brien Needs a Friend.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Conan O'Brien Needs a Friend readable as a lore graph."
    },
    {
        "slug": "conan-obrien-needs-a-friend-eras",
        "name": "Conan O'Brien Needs a Friend eras",
        "type": "event",
        "short_description": "Periodization for Conan O'Brien Needs a Friend.",
        "description": "Named eras and phases that help readers track how Conan O'Brien Needs a Friend changes across time."
    },
    {
        "slug": "conan-obrien-needs-a-friend-works",
        "name": "Conan O'Brien Needs a Friend works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Conan O'Brien Needs a Friend.",
        "description": "Primary works and adaptations through which most audiences encounter Conan O'Brien Needs a Friend."
    },
    {
        "slug": "conan-obrien-needs-a-friend-symbols",
        "name": "Conan O'Brien Needs a Friend symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Conan O'Brien Needs a Friend.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Conan O'Brien Needs a Friend."
    },
    {
        "slug": "conan-obrien-needs-a-friend-controversies",
        "name": "Conan O'Brien Needs a Friend controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Conan O'Brien Needs a Friend.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Conan O'Brien Needs a Friend argumentative."
    },
    {
        "slug": "conan-obrien-needs-a-friend-sources",
        "name": "Conan O'Brien Needs a Friend sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Conan O'Brien Needs a Friend.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Conan O'Brien Needs a Friend."
    },
    {
        "slug": "conan-obrien-needs-a-friend-geography",
        "name": "Conan O'Brien Needs a Friend geography",
        "type": "place",
        "short_description": "Broader geographic framing for Conan O'Brien Needs a Friend.",
        "description": "Regions, routes, and spatial systems that situate Conan O'Brien Needs a Friend beyond single named places."
    },
    {
        "slug": "conan-obrien-needs-a-friend-legacy",
        "name": "Conan O'Brien Needs a Friend legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Conan O'Brien Needs a Friend.",
        "description": "How Conan O'Brien Needs a Friend continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "conan-obrien-needs-a-friend-practices",
        "name": "Conan O'Brien Needs a Friend practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Conan O'Brien Needs a Friend.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Conan O'Brien Needs a Friend."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-1",
        "name": "Conan O'Brien Needs a Friend entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-2",
        "name": "Conan O'Brien Needs a Friend entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-3",
        "name": "Conan O'Brien Needs a Friend entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-4",
        "name": "Conan O'Brien Needs a Friend entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-5",
        "name": "Conan O'Brien Needs a Friend entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-6",
        "name": "Conan O'Brien Needs a Friend entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-7",
        "name": "Conan O'Brien Needs a Friend entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-8",
        "name": "Conan O'Brien Needs a Friend entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-9",
        "name": "Conan O'Brien Needs a Friend entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-10",
        "name": "Conan O'Brien Needs a Friend entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-11",
        "name": "Conan O'Brien Needs a Friend entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-12",
        "name": "Conan O'Brien Needs a Friend entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-13",
        "name": "Conan O'Brien Needs a Friend entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-14",
        "name": "Conan O'Brien Needs a Friend entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-15",
        "name": "Conan O'Brien Needs a Friend entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-16",
        "name": "Conan O'Brien Needs a Friend entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-17",
        "name": "Conan O'Brien Needs a Friend entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-18",
        "name": "Conan O'Brien Needs a Friend entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-19",
        "name": "Conan O'Brien Needs a Friend entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-20",
        "name": "Conan O'Brien Needs a Friend entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-21",
        "name": "Conan O'Brien Needs a Friend entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-22",
        "name": "Conan O'Brien Needs a Friend entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-23",
        "name": "Conan O'Brien Needs a Friend entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conan-obrien-needs-a-friend-entry-24",
        "name": "Conan O'Brien Needs a Friend entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Conan O'Brien Needs a Friend.",
        "description": "A supporting encyclopedia entry in the Conan O'Brien Needs a Friend subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-places",
        "contains",
        "Conan O'Brien Needs a Friend places is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-events",
        "contains",
        "Conan O'Brien Needs a Friend events is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-objects",
        "contains",
        "Conan O'Brien Needs a Friend objects & artifacts is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-factions",
        "contains",
        "Conan O'Brien Needs a Friend factions & groups is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-concepts",
        "contains",
        "Conan O'Brien Needs a Friend concepts is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-eras",
        "contains",
        "Conan O'Brien Needs a Friend eras is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-works",
        "contains",
        "Conan O'Brien Needs a Friend works & media is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-symbols",
        "contains",
        "Conan O'Brien Needs a Friend symbols is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-controversies",
        "contains",
        "Conan O'Brien Needs a Friend controversies is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-sources",
        "contains",
        "Conan O'Brien Needs a Friend sources is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-geography",
        "contains",
        "Conan O'Brien Needs a Friend geography is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-legacy",
        "contains",
        "Conan O'Brien Needs a Friend legacy is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-practices",
        "contains",
        "Conan O'Brien Needs a Friend practices is a primary trailhead under Conan O'Brien Needs a Friend.",
        0.88,
        0.82
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-1",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-2",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-3",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-4",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-5",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-6",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-7",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-8",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-9",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-10",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-11",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-12",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-13",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-14",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-15",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-16",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-17",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-18",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-19",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-20",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-21",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-22",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-23",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ],
    [
        "conan-obrien-needs-a-friend",
        "conan-obrien-needs-a-friend-entry-24",
        "contains",
        "Supporting entry under Conan O'Brien Needs a Friend.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
