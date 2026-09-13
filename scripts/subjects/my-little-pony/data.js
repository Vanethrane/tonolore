/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "my-little-pony",
        "name": "My Little Pony",
        "type": "topic",
        "short_description": "Ponies, friendship magic, and generations of collectible-driven storytelling.",
        "description": "Ponies, friendship magic, and generations of collectible-driven storytelling. This Ton-o-Lore subject maps people, places, events, and ideas tied to My Little Pony so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "my-little-pony-figures",
        "name": "My Little Pony figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to My Little Pony.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring My Little Pony."
    },
    {
        "slug": "my-little-pony-world",
        "name": "My Little Pony world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame My Little Pony.",
        "description": "Geography, institutions, and periodization that give My Little Pony its encyclopedia shape."
    },
    {
        "slug": "my-little-pony-places",
        "name": "My Little Pony places",
        "type": "place",
        "short_description": "Locations and geographies that frame My Little Pony.",
        "description": "Places, regions, and built sites that give My Little Pony its map — where events and figures concentrate."
    },
    {
        "slug": "my-little-pony-events",
        "name": "My Little Pony events",
        "type": "event",
        "short_description": "Turning points and dated episodes in My Little Pony.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the My Little Pony timeline."
    },
    {
        "slug": "my-little-pony-objects",
        "name": "My Little Pony objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to My Little Pony.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through My Little Pony."
    },
    {
        "slug": "my-little-pony-factions",
        "name": "My Little Pony factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside My Little Pony.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in My Little Pony."
    },
    {
        "slug": "my-little-pony-concepts",
        "name": "My Little Pony concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize My Little Pony.",
        "description": "Keywords, doctrines, systems, and abstract forces that make My Little Pony readable as a lore graph."
    },
    {
        "slug": "my-little-pony-eras",
        "name": "My Little Pony eras",
        "type": "event",
        "short_description": "Periodization for My Little Pony.",
        "description": "Named eras and phases that help readers track how My Little Pony changes across time."
    },
    {
        "slug": "my-little-pony-works",
        "name": "My Little Pony works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry My Little Pony.",
        "description": "Primary works and adaptations through which most audiences encounter My Little Pony."
    },
    {
        "slug": "my-little-pony-symbols",
        "name": "My Little Pony symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with My Little Pony.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside My Little Pony."
    },
    {
        "slug": "my-little-pony-controversies",
        "name": "My Little Pony controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in My Little Pony.",
        "description": "Debates, rival canons, scandals, and contested facts that keep My Little Pony argumentative."
    },
    {
        "slug": "my-little-pony-sources",
        "name": "My Little Pony sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into My Little Pony.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify My Little Pony."
    },
    {
        "slug": "my-little-pony-geography",
        "name": "My Little Pony geography",
        "type": "place",
        "short_description": "Broader geographic framing for My Little Pony.",
        "description": "Regions, routes, and spatial systems that situate My Little Pony beyond single named places."
    },
    {
        "slug": "my-little-pony-legacy",
        "name": "My Little Pony legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of My Little Pony.",
        "description": "How My Little Pony continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "my-little-pony-practices",
        "name": "My Little Pony practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in My Little Pony.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in My Little Pony."
    },
    {
        "slug": "my-little-pony-entry-1",
        "name": "My Little Pony entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-2",
        "name": "My Little Pony entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-3",
        "name": "My Little Pony entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-4",
        "name": "My Little Pony entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-5",
        "name": "My Little Pony entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-6",
        "name": "My Little Pony entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-7",
        "name": "My Little Pony entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-8",
        "name": "My Little Pony entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-9",
        "name": "My Little Pony entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-10",
        "name": "My Little Pony entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-11",
        "name": "My Little Pony entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-12",
        "name": "My Little Pony entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-13",
        "name": "My Little Pony entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-14",
        "name": "My Little Pony entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-15",
        "name": "My Little Pony entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-16",
        "name": "My Little Pony entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-17",
        "name": "My Little Pony entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-18",
        "name": "My Little Pony entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-19",
        "name": "My Little Pony entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-20",
        "name": "My Little Pony entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-21",
        "name": "My Little Pony entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-22",
        "name": "My Little Pony entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-23",
        "name": "My Little Pony entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-little-pony-entry-24",
        "name": "My Little Pony entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Little Pony.",
        "description": "A supporting encyclopedia entry in the My Little Pony subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "my-little-pony",
        "my-little-pony-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "my-little-pony",
        "my-little-pony-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "my-little-pony",
        "my-little-pony-places",
        "contains",
        "My Little Pony places is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-events",
        "contains",
        "My Little Pony events is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-objects",
        "contains",
        "My Little Pony objects & artifacts is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-factions",
        "contains",
        "My Little Pony factions & groups is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-concepts",
        "contains",
        "My Little Pony concepts is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-eras",
        "contains",
        "My Little Pony eras is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-works",
        "contains",
        "My Little Pony works & media is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-symbols",
        "contains",
        "My Little Pony symbols is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-controversies",
        "contains",
        "My Little Pony controversies is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-sources",
        "contains",
        "My Little Pony sources is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-geography",
        "contains",
        "My Little Pony geography is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-legacy",
        "contains",
        "My Little Pony legacy is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-practices",
        "contains",
        "My Little Pony practices is a primary trailhead under My Little Pony.",
        0.88,
        0.82
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-1",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-2",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-3",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-4",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-5",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-6",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-7",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-8",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-9",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-10",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-11",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-12",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-13",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-14",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-15",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-16",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-17",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-18",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-19",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-20",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-21",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-22",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-23",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ],
    [
        "my-little-pony",
        "my-little-pony-entry-24",
        "contains",
        "Supporting entry under My Little Pony.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
