/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "homecoming-podcast",
        "name": "Homecoming (podcast)",
        "type": "topic",
        "short_description": "Scripted thriller audio that proved fiction podcasts could feel like prestige TV.",
        "description": "Scripted thriller audio that proved fiction podcasts could feel like prestige TV. This Ton-o-Lore subject maps people, places, events, and ideas tied to Homecoming (podcast) so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "homecoming-podcast-figures",
        "name": "Homecoming (podcast) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Homecoming (podcast).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Homecoming (podcast)."
    },
    {
        "slug": "homecoming-podcast-world",
        "name": "Homecoming (podcast) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Homecoming (podcast).",
        "description": "Geography, institutions, and periodization that give Homecoming (podcast) its encyclopedia shape."
    },
    {
        "slug": "homecoming-podcast-places",
        "name": "Homecoming (podcast) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Homecoming (podcast).",
        "description": "Places, regions, and built sites that give Homecoming (podcast) its map — where events and figures concentrate."
    },
    {
        "slug": "homecoming-podcast-events",
        "name": "Homecoming (podcast) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Homecoming (podcast).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Homecoming (podcast) timeline."
    },
    {
        "slug": "homecoming-podcast-objects",
        "name": "Homecoming (podcast) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Homecoming (podcast).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Homecoming (podcast)."
    },
    {
        "slug": "homecoming-podcast-factions",
        "name": "Homecoming (podcast) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Homecoming (podcast).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Homecoming (podcast)."
    },
    {
        "slug": "homecoming-podcast-concepts",
        "name": "Homecoming (podcast) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Homecoming (podcast).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Homecoming (podcast) readable as a lore graph."
    },
    {
        "slug": "homecoming-podcast-eras",
        "name": "Homecoming (podcast) eras",
        "type": "event",
        "short_description": "Periodization for Homecoming (podcast).",
        "description": "Named eras and phases that help readers track how Homecoming (podcast) changes across time."
    },
    {
        "slug": "homecoming-podcast-works",
        "name": "Homecoming (podcast) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Homecoming (podcast).",
        "description": "Primary works and adaptations through which most audiences encounter Homecoming (podcast)."
    },
    {
        "slug": "homecoming-podcast-symbols",
        "name": "Homecoming (podcast) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Homecoming (podcast).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Homecoming (podcast)."
    },
    {
        "slug": "homecoming-podcast-controversies",
        "name": "Homecoming (podcast) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Homecoming (podcast).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Homecoming (podcast) argumentative."
    },
    {
        "slug": "homecoming-podcast-sources",
        "name": "Homecoming (podcast) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Homecoming (podcast).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Homecoming (podcast)."
    },
    {
        "slug": "homecoming-podcast-geography",
        "name": "Homecoming (podcast) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Homecoming (podcast).",
        "description": "Regions, routes, and spatial systems that situate Homecoming (podcast) beyond single named places."
    },
    {
        "slug": "homecoming-podcast-legacy",
        "name": "Homecoming (podcast) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Homecoming (podcast).",
        "description": "How Homecoming (podcast) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "homecoming-podcast-practices",
        "name": "Homecoming (podcast) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Homecoming (podcast).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Homecoming (podcast)."
    },
    {
        "slug": "homecoming-podcast-entry-1",
        "name": "Homecoming (podcast) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-2",
        "name": "Homecoming (podcast) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-3",
        "name": "Homecoming (podcast) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-4",
        "name": "Homecoming (podcast) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-5",
        "name": "Homecoming (podcast) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-6",
        "name": "Homecoming (podcast) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-7",
        "name": "Homecoming (podcast) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-8",
        "name": "Homecoming (podcast) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-9",
        "name": "Homecoming (podcast) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-10",
        "name": "Homecoming (podcast) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-11",
        "name": "Homecoming (podcast) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-12",
        "name": "Homecoming (podcast) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-13",
        "name": "Homecoming (podcast) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-14",
        "name": "Homecoming (podcast) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-15",
        "name": "Homecoming (podcast) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-16",
        "name": "Homecoming (podcast) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-17",
        "name": "Homecoming (podcast) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-18",
        "name": "Homecoming (podcast) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-19",
        "name": "Homecoming (podcast) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-20",
        "name": "Homecoming (podcast) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-21",
        "name": "Homecoming (podcast) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-22",
        "name": "Homecoming (podcast) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-23",
        "name": "Homecoming (podcast) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "homecoming-podcast-entry-24",
        "name": "Homecoming (podcast) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Homecoming (podcast).",
        "description": "A supporting encyclopedia entry in the Homecoming (podcast) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "homecoming-podcast",
        "homecoming-podcast-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-places",
        "contains",
        "Homecoming (podcast) places is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-events",
        "contains",
        "Homecoming (podcast) events is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-objects",
        "contains",
        "Homecoming (podcast) objects & artifacts is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-factions",
        "contains",
        "Homecoming (podcast) factions & groups is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-concepts",
        "contains",
        "Homecoming (podcast) concepts is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-eras",
        "contains",
        "Homecoming (podcast) eras is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-works",
        "contains",
        "Homecoming (podcast) works & media is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-symbols",
        "contains",
        "Homecoming (podcast) symbols is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-controversies",
        "contains",
        "Homecoming (podcast) controversies is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-sources",
        "contains",
        "Homecoming (podcast) sources is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-geography",
        "contains",
        "Homecoming (podcast) geography is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-legacy",
        "contains",
        "Homecoming (podcast) legacy is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-practices",
        "contains",
        "Homecoming (podcast) practices is a primary trailhead under Homecoming (podcast).",
        0.88,
        0.82
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-1",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-2",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-3",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-4",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-5",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-6",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-7",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-8",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-9",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-10",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-11",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-12",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-13",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-14",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-15",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-16",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-17",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-18",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-19",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-20",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-21",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-22",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-23",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ],
    [
        "homecoming-podcast",
        "homecoming-podcast-entry-24",
        "contains",
        "Supporting entry under Homecoming (podcast).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
