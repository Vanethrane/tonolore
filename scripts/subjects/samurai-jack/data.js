/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "samurai-jack",
        "name": "Samurai Jack",
        "type": "topic",
        "short_description": "Time-displaced warrior, Aku, and Genndy Tartakovsky’s cinematic silent-action epic.",
        "description": "Time-displaced warrior, Aku, and Genndy Tartakovsky’s cinematic silent-action epic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Samurai Jack so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "samurai-jack-figures",
        "name": "Samurai Jack figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Samurai Jack.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Samurai Jack."
    },
    {
        "slug": "samurai-jack-world",
        "name": "Samurai Jack world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Samurai Jack.",
        "description": "Geography, institutions, and periodization that give Samurai Jack its encyclopedia shape."
    },
    {
        "slug": "samurai-jack-places",
        "name": "Samurai Jack places",
        "type": "place",
        "short_description": "Locations and geographies that frame Samurai Jack.",
        "description": "Places, regions, and built sites that give Samurai Jack its map — where events and figures concentrate."
    },
    {
        "slug": "samurai-jack-events",
        "name": "Samurai Jack events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Samurai Jack.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Samurai Jack timeline."
    },
    {
        "slug": "samurai-jack-objects",
        "name": "Samurai Jack objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Samurai Jack.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Samurai Jack."
    },
    {
        "slug": "samurai-jack-factions",
        "name": "Samurai Jack factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Samurai Jack.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Samurai Jack."
    },
    {
        "slug": "samurai-jack-concepts",
        "name": "Samurai Jack concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Samurai Jack.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Samurai Jack readable as a lore graph."
    },
    {
        "slug": "samurai-jack-eras",
        "name": "Samurai Jack eras",
        "type": "event",
        "short_description": "Periodization for Samurai Jack.",
        "description": "Named eras and phases that help readers track how Samurai Jack changes across time."
    },
    {
        "slug": "samurai-jack-works",
        "name": "Samurai Jack works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Samurai Jack.",
        "description": "Primary works and adaptations through which most audiences encounter Samurai Jack."
    },
    {
        "slug": "samurai-jack-symbols",
        "name": "Samurai Jack symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Samurai Jack.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Samurai Jack."
    },
    {
        "slug": "samurai-jack-controversies",
        "name": "Samurai Jack controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Samurai Jack.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Samurai Jack argumentative."
    },
    {
        "slug": "samurai-jack-sources",
        "name": "Samurai Jack sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Samurai Jack.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Samurai Jack."
    },
    {
        "slug": "samurai-jack-geography",
        "name": "Samurai Jack geography",
        "type": "place",
        "short_description": "Broader geographic framing for Samurai Jack.",
        "description": "Regions, routes, and spatial systems that situate Samurai Jack beyond single named places."
    },
    {
        "slug": "samurai-jack-legacy",
        "name": "Samurai Jack legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Samurai Jack.",
        "description": "How Samurai Jack continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "samurai-jack-practices",
        "name": "Samurai Jack practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Samurai Jack.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Samurai Jack."
    },
    {
        "slug": "samurai-jack-entry-1",
        "name": "Samurai Jack entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-2",
        "name": "Samurai Jack entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-3",
        "name": "Samurai Jack entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-4",
        "name": "Samurai Jack entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-5",
        "name": "Samurai Jack entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-6",
        "name": "Samurai Jack entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-7",
        "name": "Samurai Jack entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-8",
        "name": "Samurai Jack entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-9",
        "name": "Samurai Jack entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-10",
        "name": "Samurai Jack entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-11",
        "name": "Samurai Jack entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-12",
        "name": "Samurai Jack entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-13",
        "name": "Samurai Jack entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-14",
        "name": "Samurai Jack entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-15",
        "name": "Samurai Jack entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-16",
        "name": "Samurai Jack entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-17",
        "name": "Samurai Jack entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-18",
        "name": "Samurai Jack entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-19",
        "name": "Samurai Jack entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-20",
        "name": "Samurai Jack entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-21",
        "name": "Samurai Jack entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-22",
        "name": "Samurai Jack entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-23",
        "name": "Samurai Jack entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-jack-entry-24",
        "name": "Samurai Jack entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Jack.",
        "description": "A supporting encyclopedia entry in the Samurai Jack subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "samurai-jack",
        "samurai-jack-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "samurai-jack",
        "samurai-jack-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "samurai-jack",
        "samurai-jack-places",
        "contains",
        "Samurai Jack places is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-events",
        "contains",
        "Samurai Jack events is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-objects",
        "contains",
        "Samurai Jack objects & artifacts is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-factions",
        "contains",
        "Samurai Jack factions & groups is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-concepts",
        "contains",
        "Samurai Jack concepts is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-eras",
        "contains",
        "Samurai Jack eras is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-works",
        "contains",
        "Samurai Jack works & media is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-symbols",
        "contains",
        "Samurai Jack symbols is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-controversies",
        "contains",
        "Samurai Jack controversies is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-sources",
        "contains",
        "Samurai Jack sources is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-geography",
        "contains",
        "Samurai Jack geography is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-legacy",
        "contains",
        "Samurai Jack legacy is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-practices",
        "contains",
        "Samurai Jack practices is a primary trailhead under Samurai Jack.",
        0.88,
        0.82
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-1",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-2",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-3",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-4",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-5",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-6",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-7",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-8",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-9",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-10",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-11",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-12",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-13",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-14",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-15",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-16",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-17",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-18",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-19",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-20",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-21",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-22",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-23",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ],
    [
        "samurai-jack",
        "samurai-jack-entry-24",
        "contains",
        "Supporting entry under Samurai Jack.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
