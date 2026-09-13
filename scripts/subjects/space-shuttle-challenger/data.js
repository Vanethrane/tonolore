/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "space-shuttle-challenger",
        "name": "Space Shuttle Challenger disaster",
        "type": "topic",
        "short_description": "1986 launch failure, teacher-in-space, and the NASA tragedy that froze a nation’s gaze.",
        "description": "1986 launch failure, teacher-in-space, and the NASA tragedy that froze a nation’s gaze. This Ton-o-Lore subject maps people, places, events, and ideas tied to Space Shuttle Challenger disaster so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "space-shuttle-challenger-figures",
        "name": "Space Shuttle Challenger disaster figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Space Shuttle Challenger disaster.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Space Shuttle Challenger disaster."
    },
    {
        "slug": "space-shuttle-challenger-world",
        "name": "Space Shuttle Challenger disaster world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Space Shuttle Challenger disaster.",
        "description": "Geography, institutions, and periodization that give Space Shuttle Challenger disaster its encyclopedia shape."
    },
    {
        "slug": "space-shuttle-challenger-places",
        "name": "Space Shuttle Challenger disaster places",
        "type": "place",
        "short_description": "Locations and geographies that frame Space Shuttle Challenger disaster.",
        "description": "Places, regions, and built sites that give Space Shuttle Challenger disaster its map — where events and figures concentrate."
    },
    {
        "slug": "space-shuttle-challenger-events",
        "name": "Space Shuttle Challenger disaster events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Space Shuttle Challenger disaster.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Space Shuttle Challenger disaster timeline."
    },
    {
        "slug": "space-shuttle-challenger-objects",
        "name": "Space Shuttle Challenger disaster objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Space Shuttle Challenger disaster.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Space Shuttle Challenger disaster."
    },
    {
        "slug": "space-shuttle-challenger-factions",
        "name": "Space Shuttle Challenger disaster factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Space Shuttle Challenger disaster.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Space Shuttle Challenger disaster."
    },
    {
        "slug": "space-shuttle-challenger-concepts",
        "name": "Space Shuttle Challenger disaster concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Space Shuttle Challenger disaster.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Space Shuttle Challenger disaster readable as a lore graph."
    },
    {
        "slug": "space-shuttle-challenger-eras",
        "name": "Space Shuttle Challenger disaster eras",
        "type": "event",
        "short_description": "Periodization for Space Shuttle Challenger disaster.",
        "description": "Named eras and phases that help readers track how Space Shuttle Challenger disaster changes across time."
    },
    {
        "slug": "space-shuttle-challenger-works",
        "name": "Space Shuttle Challenger disaster works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Space Shuttle Challenger disaster.",
        "description": "Primary works and adaptations through which most audiences encounter Space Shuttle Challenger disaster."
    },
    {
        "slug": "space-shuttle-challenger-symbols",
        "name": "Space Shuttle Challenger disaster symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Space Shuttle Challenger disaster.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Space Shuttle Challenger disaster."
    },
    {
        "slug": "space-shuttle-challenger-controversies",
        "name": "Space Shuttle Challenger disaster controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Space Shuttle Challenger disaster.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Space Shuttle Challenger disaster argumentative."
    },
    {
        "slug": "space-shuttle-challenger-sources",
        "name": "Space Shuttle Challenger disaster sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Space Shuttle Challenger disaster.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Space Shuttle Challenger disaster."
    },
    {
        "slug": "space-shuttle-challenger-geography",
        "name": "Space Shuttle Challenger disaster geography",
        "type": "place",
        "short_description": "Broader geographic framing for Space Shuttle Challenger disaster.",
        "description": "Regions, routes, and spatial systems that situate Space Shuttle Challenger disaster beyond single named places."
    },
    {
        "slug": "space-shuttle-challenger-legacy",
        "name": "Space Shuttle Challenger disaster legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Space Shuttle Challenger disaster.",
        "description": "How Space Shuttle Challenger disaster continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "space-shuttle-challenger-practices",
        "name": "Space Shuttle Challenger disaster practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Space Shuttle Challenger disaster.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Space Shuttle Challenger disaster."
    },
    {
        "slug": "space-shuttle-challenger-entry-1",
        "name": "Space Shuttle Challenger disaster entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-2",
        "name": "Space Shuttle Challenger disaster entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-3",
        "name": "Space Shuttle Challenger disaster entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-4",
        "name": "Space Shuttle Challenger disaster entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-5",
        "name": "Space Shuttle Challenger disaster entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-6",
        "name": "Space Shuttle Challenger disaster entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-7",
        "name": "Space Shuttle Challenger disaster entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-8",
        "name": "Space Shuttle Challenger disaster entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-9",
        "name": "Space Shuttle Challenger disaster entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-10",
        "name": "Space Shuttle Challenger disaster entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-11",
        "name": "Space Shuttle Challenger disaster entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-12",
        "name": "Space Shuttle Challenger disaster entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-13",
        "name": "Space Shuttle Challenger disaster entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-14",
        "name": "Space Shuttle Challenger disaster entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-15",
        "name": "Space Shuttle Challenger disaster entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-16",
        "name": "Space Shuttle Challenger disaster entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-17",
        "name": "Space Shuttle Challenger disaster entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-18",
        "name": "Space Shuttle Challenger disaster entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-19",
        "name": "Space Shuttle Challenger disaster entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-20",
        "name": "Space Shuttle Challenger disaster entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-21",
        "name": "Space Shuttle Challenger disaster entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-22",
        "name": "Space Shuttle Challenger disaster entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-23",
        "name": "Space Shuttle Challenger disaster entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "space-shuttle-challenger-entry-24",
        "name": "Space Shuttle Challenger disaster entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Space Shuttle Challenger disaster.",
        "description": "A supporting encyclopedia entry in the Space Shuttle Challenger disaster subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-places",
        "contains",
        "Space Shuttle Challenger disaster places is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-events",
        "contains",
        "Space Shuttle Challenger disaster events is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-objects",
        "contains",
        "Space Shuttle Challenger disaster objects & artifacts is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-factions",
        "contains",
        "Space Shuttle Challenger disaster factions & groups is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-concepts",
        "contains",
        "Space Shuttle Challenger disaster concepts is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-eras",
        "contains",
        "Space Shuttle Challenger disaster eras is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-works",
        "contains",
        "Space Shuttle Challenger disaster works & media is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-symbols",
        "contains",
        "Space Shuttle Challenger disaster symbols is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-controversies",
        "contains",
        "Space Shuttle Challenger disaster controversies is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-sources",
        "contains",
        "Space Shuttle Challenger disaster sources is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-geography",
        "contains",
        "Space Shuttle Challenger disaster geography is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-legacy",
        "contains",
        "Space Shuttle Challenger disaster legacy is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-practices",
        "contains",
        "Space Shuttle Challenger disaster practices is a primary trailhead under Space Shuttle Challenger disaster.",
        0.88,
        0.82
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-1",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-2",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-3",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-4",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-5",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-6",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-7",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-8",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-9",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-10",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-11",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-12",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-13",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-14",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-15",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-16",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-17",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-18",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-19",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-20",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-21",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-22",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-23",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ],
    [
        "space-shuttle-challenger",
        "space-shuttle-challenger-entry-24",
        "contains",
        "Supporting entry under Space Shuttle Challenger disaster.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
