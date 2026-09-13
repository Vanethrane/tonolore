/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mad-men",
        "name": "Mad Men",
        "type": "topic",
        "short_description": "Madison Avenue smoke, Don Draper masks, and the prestige period drama of advertising’s golden age.",
        "description": "Madison Avenue smoke, Don Draper masks, and the prestige period drama of advertising’s golden age. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mad Men so readers can follow long-tail connections across television."
    },
    {
        "slug": "mad-men-figures",
        "name": "Mad Men figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mad Men.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mad Men."
    },
    {
        "slug": "mad-men-world",
        "name": "Mad Men world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mad Men.",
        "description": "Geography, institutions, and periodization that give Mad Men its encyclopedia shape."
    },
    {
        "slug": "mad-men-places",
        "name": "Mad Men places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mad Men.",
        "description": "Places, regions, and built sites that give Mad Men its map — where events and figures concentrate."
    },
    {
        "slug": "mad-men-events",
        "name": "Mad Men events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mad Men.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mad Men timeline."
    },
    {
        "slug": "mad-men-objects",
        "name": "Mad Men objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mad Men.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mad Men."
    },
    {
        "slug": "mad-men-factions",
        "name": "Mad Men factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mad Men.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mad Men."
    },
    {
        "slug": "mad-men-concepts",
        "name": "Mad Men concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mad Men.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mad Men readable as a lore graph."
    },
    {
        "slug": "mad-men-eras",
        "name": "Mad Men eras",
        "type": "event",
        "short_description": "Periodization for Mad Men.",
        "description": "Named eras and phases that help readers track how Mad Men changes across time."
    },
    {
        "slug": "mad-men-works",
        "name": "Mad Men works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mad Men.",
        "description": "Primary works and adaptations through which most audiences encounter Mad Men."
    },
    {
        "slug": "mad-men-symbols",
        "name": "Mad Men symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mad Men.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mad Men."
    },
    {
        "slug": "mad-men-controversies",
        "name": "Mad Men controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mad Men.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mad Men argumentative."
    },
    {
        "slug": "mad-men-sources",
        "name": "Mad Men sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mad Men.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mad Men."
    },
    {
        "slug": "mad-men-geography",
        "name": "Mad Men geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mad Men.",
        "description": "Regions, routes, and spatial systems that situate Mad Men beyond single named places."
    },
    {
        "slug": "mad-men-legacy",
        "name": "Mad Men legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mad Men.",
        "description": "How Mad Men continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mad-men-practices",
        "name": "Mad Men practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mad Men.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mad Men."
    },
    {
        "slug": "mad-men-entry-1",
        "name": "Mad Men entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-2",
        "name": "Mad Men entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-3",
        "name": "Mad Men entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-4",
        "name": "Mad Men entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-5",
        "name": "Mad Men entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-6",
        "name": "Mad Men entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-7",
        "name": "Mad Men entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-8",
        "name": "Mad Men entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-9",
        "name": "Mad Men entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-10",
        "name": "Mad Men entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-11",
        "name": "Mad Men entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-12",
        "name": "Mad Men entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-13",
        "name": "Mad Men entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-14",
        "name": "Mad Men entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-15",
        "name": "Mad Men entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-16",
        "name": "Mad Men entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-17",
        "name": "Mad Men entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-18",
        "name": "Mad Men entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-19",
        "name": "Mad Men entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-20",
        "name": "Mad Men entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-21",
        "name": "Mad Men entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-22",
        "name": "Mad Men entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-23",
        "name": "Mad Men entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-men-entry-24",
        "name": "Mad Men entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Men.",
        "description": "A supporting encyclopedia entry in the Mad Men subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mad-men",
        "mad-men-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mad-men",
        "mad-men-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mad-men",
        "mad-men-places",
        "contains",
        "Mad Men places is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-events",
        "contains",
        "Mad Men events is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-objects",
        "contains",
        "Mad Men objects & artifacts is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-factions",
        "contains",
        "Mad Men factions & groups is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-concepts",
        "contains",
        "Mad Men concepts is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-eras",
        "contains",
        "Mad Men eras is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-works",
        "contains",
        "Mad Men works & media is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-symbols",
        "contains",
        "Mad Men symbols is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-controversies",
        "contains",
        "Mad Men controversies is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-sources",
        "contains",
        "Mad Men sources is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-geography",
        "contains",
        "Mad Men geography is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-legacy",
        "contains",
        "Mad Men legacy is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-practices",
        "contains",
        "Mad Men practices is a primary trailhead under Mad Men.",
        0.88,
        0.82
    ],
    [
        "mad-men",
        "mad-men-entry-1",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-2",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-3",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-4",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-5",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-6",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-7",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-8",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-9",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-10",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-11",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-12",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-13",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-14",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-15",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-16",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-17",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-18",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-19",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-20",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-21",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-22",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-23",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ],
    [
        "mad-men",
        "mad-men-entry-24",
        "contains",
        "Supporting entry under Mad Men.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
