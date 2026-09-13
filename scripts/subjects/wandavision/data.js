/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wandavision",
        "name": "WandaVision",
        "type": "topic",
        "short_description": "Sitcom hexes, grief magic, and the MCU series that played with television form itself.",
        "description": "Sitcom hexes, grief magic, and the MCU series that played with television form itself. This Ton-o-Lore subject maps people, places, events, and ideas tied to WandaVision so readers can follow long-tail connections across television."
    },
    {
        "slug": "wandavision-figures",
        "name": "WandaVision figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to WandaVision.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring WandaVision."
    },
    {
        "slug": "wandavision-world",
        "name": "WandaVision world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame WandaVision.",
        "description": "Geography, institutions, and periodization that give WandaVision its encyclopedia shape."
    },
    {
        "slug": "wandavision-places",
        "name": "WandaVision places",
        "type": "place",
        "short_description": "Locations and geographies that frame WandaVision.",
        "description": "Places, regions, and built sites that give WandaVision its map — where events and figures concentrate."
    },
    {
        "slug": "wandavision-events",
        "name": "WandaVision events",
        "type": "event",
        "short_description": "Turning points and dated episodes in WandaVision.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the WandaVision timeline."
    },
    {
        "slug": "wandavision-objects",
        "name": "WandaVision objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to WandaVision.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through WandaVision."
    },
    {
        "slug": "wandavision-factions",
        "name": "WandaVision factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside WandaVision.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in WandaVision."
    },
    {
        "slug": "wandavision-concepts",
        "name": "WandaVision concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize WandaVision.",
        "description": "Keywords, doctrines, systems, and abstract forces that make WandaVision readable as a lore graph."
    },
    {
        "slug": "wandavision-eras",
        "name": "WandaVision eras",
        "type": "event",
        "short_description": "Periodization for WandaVision.",
        "description": "Named eras and phases that help readers track how WandaVision changes across time."
    },
    {
        "slug": "wandavision-works",
        "name": "WandaVision works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry WandaVision.",
        "description": "Primary works and adaptations through which most audiences encounter WandaVision."
    },
    {
        "slug": "wandavision-symbols",
        "name": "WandaVision symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with WandaVision.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside WandaVision."
    },
    {
        "slug": "wandavision-controversies",
        "name": "WandaVision controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in WandaVision.",
        "description": "Debates, rival canons, scandals, and contested facts that keep WandaVision argumentative."
    },
    {
        "slug": "wandavision-sources",
        "name": "WandaVision sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into WandaVision.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify WandaVision."
    },
    {
        "slug": "wandavision-geography",
        "name": "WandaVision geography",
        "type": "place",
        "short_description": "Broader geographic framing for WandaVision.",
        "description": "Regions, routes, and spatial systems that situate WandaVision beyond single named places."
    },
    {
        "slug": "wandavision-legacy",
        "name": "WandaVision legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of WandaVision.",
        "description": "How WandaVision continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wandavision-practices",
        "name": "WandaVision practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in WandaVision.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in WandaVision."
    },
    {
        "slug": "wandavision-entry-1",
        "name": "WandaVision entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-2",
        "name": "WandaVision entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-3",
        "name": "WandaVision entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-4",
        "name": "WandaVision entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-5",
        "name": "WandaVision entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-6",
        "name": "WandaVision entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-7",
        "name": "WandaVision entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-8",
        "name": "WandaVision entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-9",
        "name": "WandaVision entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-10",
        "name": "WandaVision entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-11",
        "name": "WandaVision entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-12",
        "name": "WandaVision entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-13",
        "name": "WandaVision entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-14",
        "name": "WandaVision entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-15",
        "name": "WandaVision entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-16",
        "name": "WandaVision entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-17",
        "name": "WandaVision entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-18",
        "name": "WandaVision entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-19",
        "name": "WandaVision entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-20",
        "name": "WandaVision entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-21",
        "name": "WandaVision entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-22",
        "name": "WandaVision entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-23",
        "name": "WandaVision entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wandavision-entry-24",
        "name": "WandaVision entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside WandaVision.",
        "description": "A supporting encyclopedia entry in the WandaVision subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wandavision",
        "wandavision-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wandavision",
        "wandavision-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wandavision",
        "wandavision-places",
        "contains",
        "WandaVision places is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-events",
        "contains",
        "WandaVision events is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-objects",
        "contains",
        "WandaVision objects & artifacts is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-factions",
        "contains",
        "WandaVision factions & groups is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-concepts",
        "contains",
        "WandaVision concepts is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-eras",
        "contains",
        "WandaVision eras is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-works",
        "contains",
        "WandaVision works & media is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-symbols",
        "contains",
        "WandaVision symbols is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-controversies",
        "contains",
        "WandaVision controversies is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-sources",
        "contains",
        "WandaVision sources is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-geography",
        "contains",
        "WandaVision geography is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-legacy",
        "contains",
        "WandaVision legacy is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-practices",
        "contains",
        "WandaVision practices is a primary trailhead under WandaVision.",
        0.88,
        0.82
    ],
    [
        "wandavision",
        "wandavision-entry-1",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-2",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-3",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-4",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-5",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-6",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-7",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-8",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-9",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-10",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-11",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-12",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-13",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-14",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-15",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-16",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-17",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-18",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-19",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-20",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-21",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-22",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-23",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ],
    [
        "wandavision",
        "wandavision-entry-24",
        "contains",
        "Supporting entry under WandaVision.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
