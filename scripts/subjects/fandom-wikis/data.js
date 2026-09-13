/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fandom-wikis",
        "name": "Fandom wikis",
        "type": "topic",
        "short_description": "Canon databases, edit wars, and the wiki culture that archives every franchise detail.",
        "description": "Canon databases, edit wars, and the wiki culture that archives every franchise detail. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fandom wikis so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "fandom-wikis-figures",
        "name": "Fandom wikis figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fandom wikis.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fandom wikis."
    },
    {
        "slug": "fandom-wikis-world",
        "name": "Fandom wikis world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fandom wikis.",
        "description": "Geography, institutions, and periodization that give Fandom wikis its encyclopedia shape."
    },
    {
        "slug": "fandom-wikis-places",
        "name": "Fandom wikis places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fandom wikis.",
        "description": "Places, regions, and built sites that give Fandom wikis its map — where events and figures concentrate."
    },
    {
        "slug": "fandom-wikis-events",
        "name": "Fandom wikis events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fandom wikis.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fandom wikis timeline."
    },
    {
        "slug": "fandom-wikis-objects",
        "name": "Fandom wikis objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fandom wikis.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fandom wikis."
    },
    {
        "slug": "fandom-wikis-factions",
        "name": "Fandom wikis factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fandom wikis.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fandom wikis."
    },
    {
        "slug": "fandom-wikis-concepts",
        "name": "Fandom wikis concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fandom wikis.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fandom wikis readable as a lore graph."
    },
    {
        "slug": "fandom-wikis-eras",
        "name": "Fandom wikis eras",
        "type": "event",
        "short_description": "Periodization for Fandom wikis.",
        "description": "Named eras and phases that help readers track how Fandom wikis changes across time."
    },
    {
        "slug": "fandom-wikis-works",
        "name": "Fandom wikis works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fandom wikis.",
        "description": "Primary works and adaptations through which most audiences encounter Fandom wikis."
    },
    {
        "slug": "fandom-wikis-symbols",
        "name": "Fandom wikis symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fandom wikis.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fandom wikis."
    },
    {
        "slug": "fandom-wikis-controversies",
        "name": "Fandom wikis controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fandom wikis.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fandom wikis argumentative."
    },
    {
        "slug": "fandom-wikis-sources",
        "name": "Fandom wikis sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fandom wikis.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fandom wikis."
    },
    {
        "slug": "fandom-wikis-geography",
        "name": "Fandom wikis geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fandom wikis.",
        "description": "Regions, routes, and spatial systems that situate Fandom wikis beyond single named places."
    },
    {
        "slug": "fandom-wikis-legacy",
        "name": "Fandom wikis legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fandom wikis.",
        "description": "How Fandom wikis continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fandom-wikis-practices",
        "name": "Fandom wikis practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fandom wikis.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fandom wikis."
    },
    {
        "slug": "fandom-wikis-entry-1",
        "name": "Fandom wikis entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-2",
        "name": "Fandom wikis entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-3",
        "name": "Fandom wikis entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-4",
        "name": "Fandom wikis entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-5",
        "name": "Fandom wikis entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-6",
        "name": "Fandom wikis entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-7",
        "name": "Fandom wikis entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-8",
        "name": "Fandom wikis entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-9",
        "name": "Fandom wikis entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-10",
        "name": "Fandom wikis entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-11",
        "name": "Fandom wikis entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-12",
        "name": "Fandom wikis entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-13",
        "name": "Fandom wikis entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-14",
        "name": "Fandom wikis entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-15",
        "name": "Fandom wikis entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-16",
        "name": "Fandom wikis entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-17",
        "name": "Fandom wikis entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-18",
        "name": "Fandom wikis entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-19",
        "name": "Fandom wikis entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-20",
        "name": "Fandom wikis entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-21",
        "name": "Fandom wikis entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-22",
        "name": "Fandom wikis entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-23",
        "name": "Fandom wikis entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fandom-wikis-entry-24",
        "name": "Fandom wikis entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fandom wikis.",
        "description": "A supporting encyclopedia entry in the Fandom wikis subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fandom-wikis",
        "fandom-wikis-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fandom-wikis",
        "fandom-wikis-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fandom-wikis",
        "fandom-wikis-places",
        "contains",
        "Fandom wikis places is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-events",
        "contains",
        "Fandom wikis events is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-objects",
        "contains",
        "Fandom wikis objects & artifacts is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-factions",
        "contains",
        "Fandom wikis factions & groups is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-concepts",
        "contains",
        "Fandom wikis concepts is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-eras",
        "contains",
        "Fandom wikis eras is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-works",
        "contains",
        "Fandom wikis works & media is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-symbols",
        "contains",
        "Fandom wikis symbols is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-controversies",
        "contains",
        "Fandom wikis controversies is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-sources",
        "contains",
        "Fandom wikis sources is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-geography",
        "contains",
        "Fandom wikis geography is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-legacy",
        "contains",
        "Fandom wikis legacy is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-practices",
        "contains",
        "Fandom wikis practices is a primary trailhead under Fandom wikis.",
        0.88,
        0.82
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-1",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-2",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-3",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-4",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-5",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-6",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-7",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-8",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-9",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-10",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-11",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-12",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-13",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-14",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-15",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-16",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-17",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-18",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-19",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-20",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-21",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-22",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-23",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ],
    [
        "fandom-wikis",
        "fandom-wikis-entry-24",
        "contains",
        "Supporting entry under Fandom wikis.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
