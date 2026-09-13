/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bojack-horseman",
        "name": "BoJack Horseman",
        "type": "topic",
        "short_description": "Hollywood depression allegory, talking-animal satire, and prestige adult animation’s emotional peak.",
        "description": "Hollywood depression allegory, talking-animal satire, and prestige adult animation’s emotional peak. This Ton-o-Lore subject maps people, places, events, and ideas tied to BoJack Horseman so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "bojack-horseman-figures",
        "name": "BoJack Horseman figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to BoJack Horseman.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring BoJack Horseman."
    },
    {
        "slug": "bojack-horseman-world",
        "name": "BoJack Horseman world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame BoJack Horseman.",
        "description": "Geography, institutions, and periodization that give BoJack Horseman its encyclopedia shape."
    },
    {
        "slug": "bojack-horseman-places",
        "name": "BoJack Horseman places",
        "type": "place",
        "short_description": "Locations and geographies that frame BoJack Horseman.",
        "description": "Places, regions, and built sites that give BoJack Horseman its map — where events and figures concentrate."
    },
    {
        "slug": "bojack-horseman-events",
        "name": "BoJack Horseman events",
        "type": "event",
        "short_description": "Turning points and dated episodes in BoJack Horseman.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the BoJack Horseman timeline."
    },
    {
        "slug": "bojack-horseman-objects",
        "name": "BoJack Horseman objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to BoJack Horseman.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through BoJack Horseman."
    },
    {
        "slug": "bojack-horseman-factions",
        "name": "BoJack Horseman factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside BoJack Horseman.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in BoJack Horseman."
    },
    {
        "slug": "bojack-horseman-concepts",
        "name": "BoJack Horseman concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize BoJack Horseman.",
        "description": "Keywords, doctrines, systems, and abstract forces that make BoJack Horseman readable as a lore graph."
    },
    {
        "slug": "bojack-horseman-eras",
        "name": "BoJack Horseman eras",
        "type": "event",
        "short_description": "Periodization for BoJack Horseman.",
        "description": "Named eras and phases that help readers track how BoJack Horseman changes across time."
    },
    {
        "slug": "bojack-horseman-works",
        "name": "BoJack Horseman works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry BoJack Horseman.",
        "description": "Primary works and adaptations through which most audiences encounter BoJack Horseman."
    },
    {
        "slug": "bojack-horseman-symbols",
        "name": "BoJack Horseman symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with BoJack Horseman.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside BoJack Horseman."
    },
    {
        "slug": "bojack-horseman-controversies",
        "name": "BoJack Horseman controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in BoJack Horseman.",
        "description": "Debates, rival canons, scandals, and contested facts that keep BoJack Horseman argumentative."
    },
    {
        "slug": "bojack-horseman-sources",
        "name": "BoJack Horseman sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into BoJack Horseman.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify BoJack Horseman."
    },
    {
        "slug": "bojack-horseman-geography",
        "name": "BoJack Horseman geography",
        "type": "place",
        "short_description": "Broader geographic framing for BoJack Horseman.",
        "description": "Regions, routes, and spatial systems that situate BoJack Horseman beyond single named places."
    },
    {
        "slug": "bojack-horseman-legacy",
        "name": "BoJack Horseman legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of BoJack Horseman.",
        "description": "How BoJack Horseman continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bojack-horseman-practices",
        "name": "BoJack Horseman practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in BoJack Horseman.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in BoJack Horseman."
    },
    {
        "slug": "bojack-horseman-entry-1",
        "name": "BoJack Horseman entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-2",
        "name": "BoJack Horseman entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-3",
        "name": "BoJack Horseman entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-4",
        "name": "BoJack Horseman entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-5",
        "name": "BoJack Horseman entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-6",
        "name": "BoJack Horseman entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-7",
        "name": "BoJack Horseman entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-8",
        "name": "BoJack Horseman entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-9",
        "name": "BoJack Horseman entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-10",
        "name": "BoJack Horseman entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-11",
        "name": "BoJack Horseman entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-12",
        "name": "BoJack Horseman entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-13",
        "name": "BoJack Horseman entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-14",
        "name": "BoJack Horseman entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-15",
        "name": "BoJack Horseman entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-16",
        "name": "BoJack Horseman entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-17",
        "name": "BoJack Horseman entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-18",
        "name": "BoJack Horseman entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-19",
        "name": "BoJack Horseman entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-20",
        "name": "BoJack Horseman entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-21",
        "name": "BoJack Horseman entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-22",
        "name": "BoJack Horseman entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-23",
        "name": "BoJack Horseman entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bojack-horseman-entry-24",
        "name": "BoJack Horseman entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside BoJack Horseman.",
        "description": "A supporting encyclopedia entry in the BoJack Horseman subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bojack-horseman",
        "bojack-horseman-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bojack-horseman",
        "bojack-horseman-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bojack-horseman",
        "bojack-horseman-places",
        "contains",
        "BoJack Horseman places is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-events",
        "contains",
        "BoJack Horseman events is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-objects",
        "contains",
        "BoJack Horseman objects & artifacts is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-factions",
        "contains",
        "BoJack Horseman factions & groups is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-concepts",
        "contains",
        "BoJack Horseman concepts is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-eras",
        "contains",
        "BoJack Horseman eras is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-works",
        "contains",
        "BoJack Horseman works & media is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-symbols",
        "contains",
        "BoJack Horseman symbols is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-controversies",
        "contains",
        "BoJack Horseman controversies is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-sources",
        "contains",
        "BoJack Horseman sources is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-geography",
        "contains",
        "BoJack Horseman geography is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-legacy",
        "contains",
        "BoJack Horseman legacy is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-practices",
        "contains",
        "BoJack Horseman practices is a primary trailhead under BoJack Horseman.",
        0.88,
        0.82
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-1",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-2",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-3",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-4",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-5",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-6",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-7",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-8",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-9",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-10",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-11",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-12",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-13",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-14",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-15",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-16",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-17",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-18",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-19",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-20",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-21",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-22",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-23",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ],
    [
        "bojack-horseman",
        "bojack-horseman-entry-24",
        "contains",
        "Supporting entry under BoJack Horseman.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
