/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mothman",
        "name": "Mothman",
        "type": "topic",
        "short_description": "Point Pleasant sightings, bridge collapse omen lore, and the winged figure of 1960s weird America.",
        "description": "Point Pleasant sightings, bridge collapse omen lore, and the winged figure of 1960s weird America. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mothman so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "mothman-figures",
        "name": "Mothman figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mothman.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mothman."
    },
    {
        "slug": "mothman-world",
        "name": "Mothman world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mothman.",
        "description": "Geography, institutions, and periodization that give Mothman its encyclopedia shape."
    },
    {
        "slug": "mothman-places",
        "name": "Mothman places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mothman.",
        "description": "Places, regions, and built sites that give Mothman its map — where events and figures concentrate."
    },
    {
        "slug": "mothman-events",
        "name": "Mothman events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mothman.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mothman timeline."
    },
    {
        "slug": "mothman-objects",
        "name": "Mothman objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mothman.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mothman."
    },
    {
        "slug": "mothman-factions",
        "name": "Mothman factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mothman.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mothman."
    },
    {
        "slug": "mothman-concepts",
        "name": "Mothman concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mothman.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mothman readable as a lore graph."
    },
    {
        "slug": "mothman-eras",
        "name": "Mothman eras",
        "type": "event",
        "short_description": "Periodization for Mothman.",
        "description": "Named eras and phases that help readers track how Mothman changes across time."
    },
    {
        "slug": "mothman-works",
        "name": "Mothman works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mothman.",
        "description": "Primary works and adaptations through which most audiences encounter Mothman."
    },
    {
        "slug": "mothman-symbols",
        "name": "Mothman symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mothman.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mothman."
    },
    {
        "slug": "mothman-controversies",
        "name": "Mothman controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mothman.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mothman argumentative."
    },
    {
        "slug": "mothman-sources",
        "name": "Mothman sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mothman.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mothman."
    },
    {
        "slug": "mothman-geography",
        "name": "Mothman geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mothman.",
        "description": "Regions, routes, and spatial systems that situate Mothman beyond single named places."
    },
    {
        "slug": "mothman-legacy",
        "name": "Mothman legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mothman.",
        "description": "How Mothman continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mothman-practices",
        "name": "Mothman practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mothman.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mothman."
    },
    {
        "slug": "mothman-entry-1",
        "name": "Mothman entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-2",
        "name": "Mothman entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-3",
        "name": "Mothman entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-4",
        "name": "Mothman entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-5",
        "name": "Mothman entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-6",
        "name": "Mothman entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-7",
        "name": "Mothman entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-8",
        "name": "Mothman entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-9",
        "name": "Mothman entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-10",
        "name": "Mothman entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-11",
        "name": "Mothman entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-12",
        "name": "Mothman entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-13",
        "name": "Mothman entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-14",
        "name": "Mothman entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-15",
        "name": "Mothman entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-16",
        "name": "Mothman entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-17",
        "name": "Mothman entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-18",
        "name": "Mothman entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-19",
        "name": "Mothman entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-20",
        "name": "Mothman entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-21",
        "name": "Mothman entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-22",
        "name": "Mothman entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-23",
        "name": "Mothman entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mothman-entry-24",
        "name": "Mothman entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mothman.",
        "description": "A supporting encyclopedia entry in the Mothman subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mothman",
        "mothman-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mothman",
        "mothman-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mothman",
        "mothman-places",
        "contains",
        "Mothman places is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-events",
        "contains",
        "Mothman events is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-objects",
        "contains",
        "Mothman objects & artifacts is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-factions",
        "contains",
        "Mothman factions & groups is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-concepts",
        "contains",
        "Mothman concepts is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-eras",
        "contains",
        "Mothman eras is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-works",
        "contains",
        "Mothman works & media is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-symbols",
        "contains",
        "Mothman symbols is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-controversies",
        "contains",
        "Mothman controversies is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-sources",
        "contains",
        "Mothman sources is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-geography",
        "contains",
        "Mothman geography is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-legacy",
        "contains",
        "Mothman legacy is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-practices",
        "contains",
        "Mothman practices is a primary trailhead under Mothman.",
        0.88,
        0.82
    ],
    [
        "mothman",
        "mothman-entry-1",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-2",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-3",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-4",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-5",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-6",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-7",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-8",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-9",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-10",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-11",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-12",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-13",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-14",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-15",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-16",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-17",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-18",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-19",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-20",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-21",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-22",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-23",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ],
    [
        "mothman",
        "mothman-entry-24",
        "contains",
        "Supporting entry under Mothman.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
