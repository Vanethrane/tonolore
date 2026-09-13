/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "darkstalkers",
        "name": "Darkstalkers",
        "type": "topic",
        "short_description": "Midnight Bliss, monster cast, and Capcom’s gothic fighter that still defines anime-horror style.",
        "description": "Midnight Bliss, monster cast, and Capcom’s gothic fighter that still defines anime-horror style. This Ton-o-Lore subject maps people, places, events, and ideas tied to Darkstalkers so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "darkstalkers-figures",
        "name": "Darkstalkers figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Darkstalkers.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Darkstalkers."
    },
    {
        "slug": "darkstalkers-world",
        "name": "Darkstalkers world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Darkstalkers.",
        "description": "Geography, institutions, and periodization that give Darkstalkers its encyclopedia shape."
    },
    {
        "slug": "darkstalkers-places",
        "name": "Darkstalkers places",
        "type": "place",
        "short_description": "Locations and geographies that frame Darkstalkers.",
        "description": "Places, regions, and built sites that give Darkstalkers its map — where events and figures concentrate."
    },
    {
        "slug": "darkstalkers-events",
        "name": "Darkstalkers events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Darkstalkers.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Darkstalkers timeline."
    },
    {
        "slug": "darkstalkers-objects",
        "name": "Darkstalkers objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Darkstalkers.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Darkstalkers."
    },
    {
        "slug": "darkstalkers-factions",
        "name": "Darkstalkers factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Darkstalkers.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Darkstalkers."
    },
    {
        "slug": "darkstalkers-concepts",
        "name": "Darkstalkers concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Darkstalkers.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Darkstalkers readable as a lore graph."
    },
    {
        "slug": "darkstalkers-eras",
        "name": "Darkstalkers eras",
        "type": "event",
        "short_description": "Periodization for Darkstalkers.",
        "description": "Named eras and phases that help readers track how Darkstalkers changes across time."
    },
    {
        "slug": "darkstalkers-works",
        "name": "Darkstalkers works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Darkstalkers.",
        "description": "Primary works and adaptations through which most audiences encounter Darkstalkers."
    },
    {
        "slug": "darkstalkers-symbols",
        "name": "Darkstalkers symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Darkstalkers.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Darkstalkers."
    },
    {
        "slug": "darkstalkers-controversies",
        "name": "Darkstalkers controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Darkstalkers.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Darkstalkers argumentative."
    },
    {
        "slug": "darkstalkers-sources",
        "name": "Darkstalkers sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Darkstalkers.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Darkstalkers."
    },
    {
        "slug": "darkstalkers-geography",
        "name": "Darkstalkers geography",
        "type": "place",
        "short_description": "Broader geographic framing for Darkstalkers.",
        "description": "Regions, routes, and spatial systems that situate Darkstalkers beyond single named places."
    },
    {
        "slug": "darkstalkers-legacy",
        "name": "Darkstalkers legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Darkstalkers.",
        "description": "How Darkstalkers continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "darkstalkers-practices",
        "name": "Darkstalkers practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Darkstalkers.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Darkstalkers."
    },
    {
        "slug": "darkstalkers-entry-1",
        "name": "Darkstalkers entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-2",
        "name": "Darkstalkers entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-3",
        "name": "Darkstalkers entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-4",
        "name": "Darkstalkers entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-5",
        "name": "Darkstalkers entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-6",
        "name": "Darkstalkers entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-7",
        "name": "Darkstalkers entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-8",
        "name": "Darkstalkers entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-9",
        "name": "Darkstalkers entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-10",
        "name": "Darkstalkers entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-11",
        "name": "Darkstalkers entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-12",
        "name": "Darkstalkers entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-13",
        "name": "Darkstalkers entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-14",
        "name": "Darkstalkers entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-15",
        "name": "Darkstalkers entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-16",
        "name": "Darkstalkers entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-17",
        "name": "Darkstalkers entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-18",
        "name": "Darkstalkers entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-19",
        "name": "Darkstalkers entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-20",
        "name": "Darkstalkers entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-21",
        "name": "Darkstalkers entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-22",
        "name": "Darkstalkers entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-23",
        "name": "Darkstalkers entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "darkstalkers-entry-24",
        "name": "Darkstalkers entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Darkstalkers.",
        "description": "A supporting encyclopedia entry in the Darkstalkers subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "darkstalkers",
        "darkstalkers-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "darkstalkers",
        "darkstalkers-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "darkstalkers",
        "darkstalkers-places",
        "contains",
        "Darkstalkers places is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-events",
        "contains",
        "Darkstalkers events is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-objects",
        "contains",
        "Darkstalkers objects & artifacts is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-factions",
        "contains",
        "Darkstalkers factions & groups is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-concepts",
        "contains",
        "Darkstalkers concepts is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-eras",
        "contains",
        "Darkstalkers eras is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-works",
        "contains",
        "Darkstalkers works & media is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-symbols",
        "contains",
        "Darkstalkers symbols is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-controversies",
        "contains",
        "Darkstalkers controversies is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-sources",
        "contains",
        "Darkstalkers sources is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-geography",
        "contains",
        "Darkstalkers geography is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-legacy",
        "contains",
        "Darkstalkers legacy is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-practices",
        "contains",
        "Darkstalkers practices is a primary trailhead under Darkstalkers.",
        0.88,
        0.82
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-1",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-2",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-3",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-4",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-5",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-6",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-7",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-8",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-9",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-10",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-11",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-12",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-13",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-14",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-15",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-16",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-17",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-18",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-19",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-20",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-21",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-22",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-23",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ],
    [
        "darkstalkers",
        "darkstalkers-entry-24",
        "contains",
        "Supporting entry under Darkstalkers.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
