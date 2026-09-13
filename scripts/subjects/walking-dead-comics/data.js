/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "walking-dead-comics",
        "name": "The Walking Dead",
        "type": "topic",
        "short_description": "Kirkman’s zombie survival soap that spawned TV dominance from black-and-white pages.",
        "description": "Kirkman’s zombie survival soap that spawned TV dominance from black-and-white pages. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Walking Dead so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "walking-dead-comics-figures",
        "name": "The Walking Dead figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Walking Dead.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Walking Dead."
    },
    {
        "slug": "walking-dead-comics-world",
        "name": "The Walking Dead world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Walking Dead.",
        "description": "Geography, institutions, and periodization that give The Walking Dead its encyclopedia shape."
    },
    {
        "slug": "walking-dead-comics-places",
        "name": "The Walking Dead places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Walking Dead.",
        "description": "Places, regions, and built sites that give The Walking Dead its map — where events and figures concentrate."
    },
    {
        "slug": "walking-dead-comics-events",
        "name": "The Walking Dead events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Walking Dead.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Walking Dead timeline."
    },
    {
        "slug": "walking-dead-comics-objects",
        "name": "The Walking Dead objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Walking Dead.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Walking Dead."
    },
    {
        "slug": "walking-dead-comics-factions",
        "name": "The Walking Dead factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Walking Dead.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Walking Dead."
    },
    {
        "slug": "walking-dead-comics-concepts",
        "name": "The Walking Dead concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Walking Dead.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Walking Dead readable as a lore graph."
    },
    {
        "slug": "walking-dead-comics-eras",
        "name": "The Walking Dead eras",
        "type": "event",
        "short_description": "Periodization for The Walking Dead.",
        "description": "Named eras and phases that help readers track how The Walking Dead changes across time."
    },
    {
        "slug": "walking-dead-comics-works",
        "name": "The Walking Dead works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Walking Dead.",
        "description": "Primary works and adaptations through which most audiences encounter The Walking Dead."
    },
    {
        "slug": "walking-dead-comics-symbols",
        "name": "The Walking Dead symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Walking Dead.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Walking Dead."
    },
    {
        "slug": "walking-dead-comics-controversies",
        "name": "The Walking Dead controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Walking Dead.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Walking Dead argumentative."
    },
    {
        "slug": "walking-dead-comics-sources",
        "name": "The Walking Dead sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Walking Dead.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Walking Dead."
    },
    {
        "slug": "walking-dead-comics-geography",
        "name": "The Walking Dead geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Walking Dead.",
        "description": "Regions, routes, and spatial systems that situate The Walking Dead beyond single named places."
    },
    {
        "slug": "walking-dead-comics-legacy",
        "name": "The Walking Dead legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Walking Dead.",
        "description": "How The Walking Dead continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "walking-dead-comics-practices",
        "name": "The Walking Dead practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Walking Dead.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Walking Dead."
    },
    {
        "slug": "walking-dead-comics-entry-1",
        "name": "The Walking Dead entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-2",
        "name": "The Walking Dead entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-3",
        "name": "The Walking Dead entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-4",
        "name": "The Walking Dead entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-5",
        "name": "The Walking Dead entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-6",
        "name": "The Walking Dead entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-7",
        "name": "The Walking Dead entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-8",
        "name": "The Walking Dead entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-9",
        "name": "The Walking Dead entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-10",
        "name": "The Walking Dead entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-11",
        "name": "The Walking Dead entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-12",
        "name": "The Walking Dead entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-13",
        "name": "The Walking Dead entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-14",
        "name": "The Walking Dead entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-15",
        "name": "The Walking Dead entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-16",
        "name": "The Walking Dead entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-17",
        "name": "The Walking Dead entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-18",
        "name": "The Walking Dead entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-19",
        "name": "The Walking Dead entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-20",
        "name": "The Walking Dead entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-21",
        "name": "The Walking Dead entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-22",
        "name": "The Walking Dead entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-23",
        "name": "The Walking Dead entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "walking-dead-comics-entry-24",
        "name": "The Walking Dead entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Walking Dead.",
        "description": "A supporting encyclopedia entry in the The Walking Dead subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "walking-dead-comics",
        "walking-dead-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-places",
        "contains",
        "The Walking Dead places is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-events",
        "contains",
        "The Walking Dead events is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-objects",
        "contains",
        "The Walking Dead objects & artifacts is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-factions",
        "contains",
        "The Walking Dead factions & groups is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-concepts",
        "contains",
        "The Walking Dead concepts is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-eras",
        "contains",
        "The Walking Dead eras is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-works",
        "contains",
        "The Walking Dead works & media is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-symbols",
        "contains",
        "The Walking Dead symbols is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-controversies",
        "contains",
        "The Walking Dead controversies is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-sources",
        "contains",
        "The Walking Dead sources is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-geography",
        "contains",
        "The Walking Dead geography is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-legacy",
        "contains",
        "The Walking Dead legacy is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-practices",
        "contains",
        "The Walking Dead practices is a primary trailhead under The Walking Dead.",
        0.88,
        0.82
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-1",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-2",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-3",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-4",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-5",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-6",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-7",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-8",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-9",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-10",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-11",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-12",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-13",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-14",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-15",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-16",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-17",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-18",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-19",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-20",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-21",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-22",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-23",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ],
    [
        "walking-dead-comics",
        "walking-dead-comics-entry-24",
        "contains",
        "Supporting entry under The Walking Dead.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
