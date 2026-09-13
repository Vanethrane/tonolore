/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "robocop-franchise",
        "name": "RoboCop",
        "type": "topic",
        "short_description": "OMCP cyborg law, satirical dystopia, and Detroit’s armored future-cop myth.",
        "description": "OMCP cyborg law, satirical dystopia, and Detroit’s armored future-cop myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to RoboCop so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "robocop-franchise-figures",
        "name": "RoboCop figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to RoboCop.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring RoboCop."
    },
    {
        "slug": "robocop-franchise-world",
        "name": "RoboCop world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame RoboCop.",
        "description": "Geography, institutions, and periodization that give RoboCop its encyclopedia shape."
    },
    {
        "slug": "robocop-franchise-places",
        "name": "RoboCop places",
        "type": "place",
        "short_description": "Locations and geographies that frame RoboCop.",
        "description": "Places, regions, and built sites that give RoboCop its map — where events and figures concentrate."
    },
    {
        "slug": "robocop-franchise-events",
        "name": "RoboCop events",
        "type": "event",
        "short_description": "Turning points and dated episodes in RoboCop.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the RoboCop timeline."
    },
    {
        "slug": "robocop-franchise-objects",
        "name": "RoboCop objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to RoboCop.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through RoboCop."
    },
    {
        "slug": "robocop-franchise-factions",
        "name": "RoboCop factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside RoboCop.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in RoboCop."
    },
    {
        "slug": "robocop-franchise-concepts",
        "name": "RoboCop concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize RoboCop.",
        "description": "Keywords, doctrines, systems, and abstract forces that make RoboCop readable as a lore graph."
    },
    {
        "slug": "robocop-franchise-eras",
        "name": "RoboCop eras",
        "type": "event",
        "short_description": "Periodization for RoboCop.",
        "description": "Named eras and phases that help readers track how RoboCop changes across time."
    },
    {
        "slug": "robocop-franchise-works",
        "name": "RoboCop works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry RoboCop.",
        "description": "Primary works and adaptations through which most audiences encounter RoboCop."
    },
    {
        "slug": "robocop-franchise-symbols",
        "name": "RoboCop symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with RoboCop.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside RoboCop."
    },
    {
        "slug": "robocop-franchise-controversies",
        "name": "RoboCop controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in RoboCop.",
        "description": "Debates, rival canons, scandals, and contested facts that keep RoboCop argumentative."
    },
    {
        "slug": "robocop-franchise-sources",
        "name": "RoboCop sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into RoboCop.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify RoboCop."
    },
    {
        "slug": "robocop-franchise-geography",
        "name": "RoboCop geography",
        "type": "place",
        "short_description": "Broader geographic framing for RoboCop.",
        "description": "Regions, routes, and spatial systems that situate RoboCop beyond single named places."
    },
    {
        "slug": "robocop-franchise-legacy",
        "name": "RoboCop legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of RoboCop.",
        "description": "How RoboCop continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "robocop-franchise-practices",
        "name": "RoboCop practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in RoboCop.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in RoboCop."
    },
    {
        "slug": "robocop-franchise-entry-1",
        "name": "RoboCop entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-2",
        "name": "RoboCop entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-3",
        "name": "RoboCop entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-4",
        "name": "RoboCop entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-5",
        "name": "RoboCop entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-6",
        "name": "RoboCop entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-7",
        "name": "RoboCop entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-8",
        "name": "RoboCop entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-9",
        "name": "RoboCop entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-10",
        "name": "RoboCop entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-11",
        "name": "RoboCop entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-12",
        "name": "RoboCop entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-13",
        "name": "RoboCop entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-14",
        "name": "RoboCop entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-15",
        "name": "RoboCop entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-16",
        "name": "RoboCop entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-17",
        "name": "RoboCop entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-18",
        "name": "RoboCop entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-19",
        "name": "RoboCop entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-20",
        "name": "RoboCop entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-21",
        "name": "RoboCop entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-22",
        "name": "RoboCop entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-23",
        "name": "RoboCop entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robocop-franchise-entry-24",
        "name": "RoboCop entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside RoboCop.",
        "description": "A supporting encyclopedia entry in the RoboCop subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "robocop-franchise",
        "robocop-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "robocop-franchise",
        "robocop-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "robocop-franchise",
        "robocop-franchise-places",
        "contains",
        "RoboCop places is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-events",
        "contains",
        "RoboCop events is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-objects",
        "contains",
        "RoboCop objects & artifacts is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-factions",
        "contains",
        "RoboCop factions & groups is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-concepts",
        "contains",
        "RoboCop concepts is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-eras",
        "contains",
        "RoboCop eras is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-works",
        "contains",
        "RoboCop works & media is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-symbols",
        "contains",
        "RoboCop symbols is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-controversies",
        "contains",
        "RoboCop controversies is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-sources",
        "contains",
        "RoboCop sources is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-geography",
        "contains",
        "RoboCop geography is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-legacy",
        "contains",
        "RoboCop legacy is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-practices",
        "contains",
        "RoboCop practices is a primary trailhead under RoboCop.",
        0.88,
        0.82
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-1",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-2",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-3",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-4",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-5",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-6",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-7",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-8",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-9",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-10",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-11",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-12",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-13",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-14",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-15",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-16",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-17",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-18",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-19",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-20",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-21",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-22",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-23",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ],
    [
        "robocop-franchise",
        "robocop-franchise-entry-24",
        "contains",
        "Supporting entry under RoboCop.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
