/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "protestant-reformation",
        "name": "Protestant Reformation",
        "type": "topic",
        "short_description": "Luther, Calvin, and the sixteenth-century schism that remade Western Christianity.",
        "description": "Luther, Calvin, and the sixteenth-century schism that remade Western Christianity. This Ton-o-Lore subject maps people, places, events, and ideas tied to Protestant Reformation so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "protestant-reformation-figures",
        "name": "Protestant Reformation figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Protestant Reformation.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Protestant Reformation."
    },
    {
        "slug": "protestant-reformation-world",
        "name": "Protestant Reformation world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Protestant Reformation.",
        "description": "Geography, institutions, and periodization that give Protestant Reformation its encyclopedia shape."
    },
    {
        "slug": "protestant-reformation-places",
        "name": "Protestant Reformation places",
        "type": "place",
        "short_description": "Locations and geographies that frame Protestant Reformation.",
        "description": "Places, regions, and built sites that give Protestant Reformation its map — where events and figures concentrate."
    },
    {
        "slug": "protestant-reformation-events",
        "name": "Protestant Reformation events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Protestant Reformation.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Protestant Reformation timeline."
    },
    {
        "slug": "protestant-reformation-objects",
        "name": "Protestant Reformation objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Protestant Reformation.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Protestant Reformation."
    },
    {
        "slug": "protestant-reformation-factions",
        "name": "Protestant Reformation factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Protestant Reformation.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Protestant Reformation."
    },
    {
        "slug": "protestant-reformation-concepts",
        "name": "Protestant Reformation concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Protestant Reformation.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Protestant Reformation readable as a lore graph."
    },
    {
        "slug": "protestant-reformation-eras",
        "name": "Protestant Reformation eras",
        "type": "event",
        "short_description": "Periodization for Protestant Reformation.",
        "description": "Named eras and phases that help readers track how Protestant Reformation changes across time."
    },
    {
        "slug": "protestant-reformation-works",
        "name": "Protestant Reformation works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Protestant Reformation.",
        "description": "Primary works and adaptations through which most audiences encounter Protestant Reformation."
    },
    {
        "slug": "protestant-reformation-symbols",
        "name": "Protestant Reformation symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Protestant Reformation.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Protestant Reformation."
    },
    {
        "slug": "protestant-reformation-controversies",
        "name": "Protestant Reformation controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Protestant Reformation.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Protestant Reformation argumentative."
    },
    {
        "slug": "protestant-reformation-sources",
        "name": "Protestant Reformation sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Protestant Reformation.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Protestant Reformation."
    },
    {
        "slug": "protestant-reformation-geography",
        "name": "Protestant Reformation geography",
        "type": "place",
        "short_description": "Broader geographic framing for Protestant Reformation.",
        "description": "Regions, routes, and spatial systems that situate Protestant Reformation beyond single named places."
    },
    {
        "slug": "protestant-reformation-legacy",
        "name": "Protestant Reformation legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Protestant Reformation.",
        "description": "How Protestant Reformation continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "protestant-reformation-practices",
        "name": "Protestant Reformation practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Protestant Reformation.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Protestant Reformation."
    },
    {
        "slug": "protestant-reformation-entry-1",
        "name": "Protestant Reformation entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-2",
        "name": "Protestant Reformation entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-3",
        "name": "Protestant Reformation entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-4",
        "name": "Protestant Reformation entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-5",
        "name": "Protestant Reformation entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-6",
        "name": "Protestant Reformation entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-7",
        "name": "Protestant Reformation entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-8",
        "name": "Protestant Reformation entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-9",
        "name": "Protestant Reformation entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-10",
        "name": "Protestant Reformation entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-11",
        "name": "Protestant Reformation entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-12",
        "name": "Protestant Reformation entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-13",
        "name": "Protestant Reformation entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-14",
        "name": "Protestant Reformation entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-15",
        "name": "Protestant Reformation entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-16",
        "name": "Protestant Reformation entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-17",
        "name": "Protestant Reformation entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-18",
        "name": "Protestant Reformation entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-19",
        "name": "Protestant Reformation entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-20",
        "name": "Protestant Reformation entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-21",
        "name": "Protestant Reformation entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-22",
        "name": "Protestant Reformation entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-23",
        "name": "Protestant Reformation entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "protestant-reformation-entry-24",
        "name": "Protestant Reformation entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Protestant Reformation.",
        "description": "A supporting encyclopedia entry in the Protestant Reformation subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "protestant-reformation",
        "protestant-reformation-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "protestant-reformation",
        "protestant-reformation-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "protestant-reformation",
        "protestant-reformation-places",
        "contains",
        "Protestant Reformation places is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-events",
        "contains",
        "Protestant Reformation events is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-objects",
        "contains",
        "Protestant Reformation objects & artifacts is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-factions",
        "contains",
        "Protestant Reformation factions & groups is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-concepts",
        "contains",
        "Protestant Reformation concepts is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-eras",
        "contains",
        "Protestant Reformation eras is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-works",
        "contains",
        "Protestant Reformation works & media is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-symbols",
        "contains",
        "Protestant Reformation symbols is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-controversies",
        "contains",
        "Protestant Reformation controversies is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-sources",
        "contains",
        "Protestant Reformation sources is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-geography",
        "contains",
        "Protestant Reformation geography is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-legacy",
        "contains",
        "Protestant Reformation legacy is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-practices",
        "contains",
        "Protestant Reformation practices is a primary trailhead under Protestant Reformation.",
        0.88,
        0.82
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-1",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-2",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-3",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-4",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-5",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-6",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-7",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-8",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-9",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-10",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-11",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-12",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-13",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-14",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-15",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-16",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-17",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-18",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-19",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-20",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-21",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-22",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-23",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ],
    [
        "protestant-reformation",
        "protestant-reformation-entry-24",
        "contains",
        "Supporting entry under Protestant Reformation.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
