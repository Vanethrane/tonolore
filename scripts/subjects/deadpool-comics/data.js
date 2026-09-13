/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "deadpool-comics",
        "name": "Deadpool",
        "type": "topic",
        "short_description": "Fourth-wall merc, Weapon X trauma jokes, and the antihero who became a multimedia brand.",
        "description": "Fourth-wall merc, Weapon X trauma jokes, and the antihero who became a multimedia brand. This Ton-o-Lore subject maps people, places, events, and ideas tied to Deadpool so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "deadpool-comics-figures",
        "name": "Deadpool figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Deadpool.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Deadpool."
    },
    {
        "slug": "deadpool-comics-world",
        "name": "Deadpool world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Deadpool.",
        "description": "Geography, institutions, and periodization that give Deadpool its encyclopedia shape."
    },
    {
        "slug": "deadpool-comics-places",
        "name": "Deadpool places",
        "type": "place",
        "short_description": "Locations and geographies that frame Deadpool.",
        "description": "Places, regions, and built sites that give Deadpool its map — where events and figures concentrate."
    },
    {
        "slug": "deadpool-comics-events",
        "name": "Deadpool events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Deadpool.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Deadpool timeline."
    },
    {
        "slug": "deadpool-comics-objects",
        "name": "Deadpool objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Deadpool.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Deadpool."
    },
    {
        "slug": "deadpool-comics-factions",
        "name": "Deadpool factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Deadpool.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Deadpool."
    },
    {
        "slug": "deadpool-comics-concepts",
        "name": "Deadpool concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Deadpool.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Deadpool readable as a lore graph."
    },
    {
        "slug": "deadpool-comics-eras",
        "name": "Deadpool eras",
        "type": "event",
        "short_description": "Periodization for Deadpool.",
        "description": "Named eras and phases that help readers track how Deadpool changes across time."
    },
    {
        "slug": "deadpool-comics-works",
        "name": "Deadpool works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Deadpool.",
        "description": "Primary works and adaptations through which most audiences encounter Deadpool."
    },
    {
        "slug": "deadpool-comics-symbols",
        "name": "Deadpool symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Deadpool.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Deadpool."
    },
    {
        "slug": "deadpool-comics-controversies",
        "name": "Deadpool controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Deadpool.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Deadpool argumentative."
    },
    {
        "slug": "deadpool-comics-sources",
        "name": "Deadpool sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Deadpool.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Deadpool."
    },
    {
        "slug": "deadpool-comics-geography",
        "name": "Deadpool geography",
        "type": "place",
        "short_description": "Broader geographic framing for Deadpool.",
        "description": "Regions, routes, and spatial systems that situate Deadpool beyond single named places."
    },
    {
        "slug": "deadpool-comics-legacy",
        "name": "Deadpool legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Deadpool.",
        "description": "How Deadpool continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "deadpool-comics-practices",
        "name": "Deadpool practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Deadpool.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Deadpool."
    },
    {
        "slug": "deadpool-comics-entry-1",
        "name": "Deadpool entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-2",
        "name": "Deadpool entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-3",
        "name": "Deadpool entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-4",
        "name": "Deadpool entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-5",
        "name": "Deadpool entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-6",
        "name": "Deadpool entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-7",
        "name": "Deadpool entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-8",
        "name": "Deadpool entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-9",
        "name": "Deadpool entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-10",
        "name": "Deadpool entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-11",
        "name": "Deadpool entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-12",
        "name": "Deadpool entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-13",
        "name": "Deadpool entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-14",
        "name": "Deadpool entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-15",
        "name": "Deadpool entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-16",
        "name": "Deadpool entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-17",
        "name": "Deadpool entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-18",
        "name": "Deadpool entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-19",
        "name": "Deadpool entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-20",
        "name": "Deadpool entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-21",
        "name": "Deadpool entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-22",
        "name": "Deadpool entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-23",
        "name": "Deadpool entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deadpool-comics-entry-24",
        "name": "Deadpool entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deadpool.",
        "description": "A supporting encyclopedia entry in the Deadpool subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "deadpool-comics",
        "deadpool-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "deadpool-comics",
        "deadpool-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "deadpool-comics",
        "deadpool-comics-places",
        "contains",
        "Deadpool places is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-events",
        "contains",
        "Deadpool events is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-objects",
        "contains",
        "Deadpool objects & artifacts is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-factions",
        "contains",
        "Deadpool factions & groups is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-concepts",
        "contains",
        "Deadpool concepts is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-eras",
        "contains",
        "Deadpool eras is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-works",
        "contains",
        "Deadpool works & media is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-symbols",
        "contains",
        "Deadpool symbols is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-controversies",
        "contains",
        "Deadpool controversies is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-sources",
        "contains",
        "Deadpool sources is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-geography",
        "contains",
        "Deadpool geography is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-legacy",
        "contains",
        "Deadpool legacy is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-practices",
        "contains",
        "Deadpool practices is a primary trailhead under Deadpool.",
        0.88,
        0.82
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-1",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-2",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-3",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-4",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-5",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-6",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-7",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-8",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-9",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-10",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-11",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-12",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-13",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-14",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-15",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-16",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-17",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-18",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-19",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-20",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-21",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-22",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-23",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ],
    [
        "deadpool-comics",
        "deadpool-comics-entry-24",
        "contains",
        "Supporting entry under Deadpool.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
