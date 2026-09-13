/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cowboy-bebop",
        "name": "Cowboy Bebop",
        "type": "topic",
        "short_description": "Bounty hunters, jazz space noir, and the stylish episodic classic of late-90s anime.",
        "description": "Bounty hunters, jazz space noir, and the stylish episodic classic of late-90s anime. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cowboy Bebop so readers can follow long-tail connections across anime."
    },
    {
        "slug": "cowboy-bebop-figures",
        "name": "Cowboy Bebop figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cowboy Bebop.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cowboy Bebop."
    },
    {
        "slug": "cowboy-bebop-world",
        "name": "Cowboy Bebop world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cowboy Bebop.",
        "description": "Geography, institutions, and periodization that give Cowboy Bebop its encyclopedia shape."
    },
    {
        "slug": "cowboy-bebop-places",
        "name": "Cowboy Bebop places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cowboy Bebop.",
        "description": "Places, regions, and built sites that give Cowboy Bebop its map — where events and figures concentrate."
    },
    {
        "slug": "cowboy-bebop-events",
        "name": "Cowboy Bebop events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cowboy Bebop.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cowboy Bebop timeline."
    },
    {
        "slug": "cowboy-bebop-objects",
        "name": "Cowboy Bebop objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cowboy Bebop.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cowboy Bebop."
    },
    {
        "slug": "cowboy-bebop-factions",
        "name": "Cowboy Bebop factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cowboy Bebop.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cowboy Bebop."
    },
    {
        "slug": "cowboy-bebop-concepts",
        "name": "Cowboy Bebop concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cowboy Bebop.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cowboy Bebop readable as a lore graph."
    },
    {
        "slug": "cowboy-bebop-eras",
        "name": "Cowboy Bebop eras",
        "type": "event",
        "short_description": "Periodization for Cowboy Bebop.",
        "description": "Named eras and phases that help readers track how Cowboy Bebop changes across time."
    },
    {
        "slug": "cowboy-bebop-works",
        "name": "Cowboy Bebop works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cowboy Bebop.",
        "description": "Primary works and adaptations through which most audiences encounter Cowboy Bebop."
    },
    {
        "slug": "cowboy-bebop-symbols",
        "name": "Cowboy Bebop symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cowboy Bebop.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cowboy Bebop."
    },
    {
        "slug": "cowboy-bebop-controversies",
        "name": "Cowboy Bebop controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cowboy Bebop.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cowboy Bebop argumentative."
    },
    {
        "slug": "cowboy-bebop-sources",
        "name": "Cowboy Bebop sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cowboy Bebop.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cowboy Bebop."
    },
    {
        "slug": "cowboy-bebop-geography",
        "name": "Cowboy Bebop geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cowboy Bebop.",
        "description": "Regions, routes, and spatial systems that situate Cowboy Bebop beyond single named places."
    },
    {
        "slug": "cowboy-bebop-legacy",
        "name": "Cowboy Bebop legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cowboy Bebop.",
        "description": "How Cowboy Bebop continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cowboy-bebop-practices",
        "name": "Cowboy Bebop practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Cowboy Bebop.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Cowboy Bebop."
    },
    {
        "slug": "cowboy-bebop-entry-1",
        "name": "Cowboy Bebop entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-2",
        "name": "Cowboy Bebop entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-3",
        "name": "Cowboy Bebop entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-4",
        "name": "Cowboy Bebop entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-5",
        "name": "Cowboy Bebop entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-6",
        "name": "Cowboy Bebop entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-7",
        "name": "Cowboy Bebop entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-8",
        "name": "Cowboy Bebop entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-9",
        "name": "Cowboy Bebop entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-10",
        "name": "Cowboy Bebop entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-11",
        "name": "Cowboy Bebop entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-12",
        "name": "Cowboy Bebop entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-13",
        "name": "Cowboy Bebop entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-14",
        "name": "Cowboy Bebop entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-15",
        "name": "Cowboy Bebop entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-16",
        "name": "Cowboy Bebop entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-17",
        "name": "Cowboy Bebop entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-18",
        "name": "Cowboy Bebop entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-19",
        "name": "Cowboy Bebop entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-20",
        "name": "Cowboy Bebop entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-21",
        "name": "Cowboy Bebop entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-22",
        "name": "Cowboy Bebop entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-23",
        "name": "Cowboy Bebop entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cowboy-bebop-entry-24",
        "name": "Cowboy Bebop entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cowboy Bebop.",
        "description": "A supporting encyclopedia entry in the Cowboy Bebop subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cowboy-bebop",
        "cowboy-bebop-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-places",
        "contains",
        "Cowboy Bebop places is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-events",
        "contains",
        "Cowboy Bebop events is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-objects",
        "contains",
        "Cowboy Bebop objects & artifacts is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-factions",
        "contains",
        "Cowboy Bebop factions & groups is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-concepts",
        "contains",
        "Cowboy Bebop concepts is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-eras",
        "contains",
        "Cowboy Bebop eras is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-works",
        "contains",
        "Cowboy Bebop works & media is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-symbols",
        "contains",
        "Cowboy Bebop symbols is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-controversies",
        "contains",
        "Cowboy Bebop controversies is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-sources",
        "contains",
        "Cowboy Bebop sources is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-geography",
        "contains",
        "Cowboy Bebop geography is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-legacy",
        "contains",
        "Cowboy Bebop legacy is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-practices",
        "contains",
        "Cowboy Bebop practices is a primary trailhead under Cowboy Bebop.",
        0.88,
        0.82
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-1",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-2",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-3",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-4",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-5",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-6",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-7",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-8",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-9",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-10",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-11",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-12",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-13",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-14",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-15",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-16",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-17",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-18",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-19",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-20",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-21",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-22",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-23",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ],
    [
        "cowboy-bebop",
        "cowboy-bebop-entry-24",
        "contains",
        "Supporting entry under Cowboy Bebop.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
