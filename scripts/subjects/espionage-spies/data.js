/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "espionage-spies",
        "name": "Espionage & spies",
        "type": "topic",
        "short_description": "Agencies, double agents, tradecraft, covert ops, and the people who lived between covers.",
        "description": "Agencies, double agents, tradecraft, covert ops, and the people who lived between covers. This Ton-o-Lore subject maps people, places, events, and ideas tied to Espionage & spies so readers can follow long-tail connections across history."
    },
    {
        "slug": "espionage-spies-figures",
        "name": "Espionage & spies figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Espionage & spies.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Espionage & spies."
    },
    {
        "slug": "espionage-spies-world",
        "name": "Espionage & spies world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Espionage & spies.",
        "description": "Geography, institutions, and periodization that give Espionage & spies its encyclopedia shape."
    },
    {
        "slug": "espionage-spies-places",
        "name": "Espionage & spies places",
        "type": "place",
        "short_description": "Locations and geographies that frame Espionage & spies.",
        "description": "Places, regions, and built sites that give Espionage & spies its map — where events and figures concentrate."
    },
    {
        "slug": "espionage-spies-events",
        "name": "Espionage & spies events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Espionage & spies.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Espionage & spies timeline."
    },
    {
        "slug": "espionage-spies-objects",
        "name": "Espionage & spies objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Espionage & spies.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Espionage & spies."
    },
    {
        "slug": "espionage-spies-factions",
        "name": "Espionage & spies factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Espionage & spies.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Espionage & spies."
    },
    {
        "slug": "espionage-spies-concepts",
        "name": "Espionage & spies concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Espionage & spies.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Espionage & spies readable as a lore graph."
    },
    {
        "slug": "espionage-spies-eras",
        "name": "Espionage & spies eras",
        "type": "event",
        "short_description": "Periodization for Espionage & spies.",
        "description": "Named eras and phases that help readers track how Espionage & spies changes across time."
    },
    {
        "slug": "espionage-spies-works",
        "name": "Espionage & spies works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Espionage & spies.",
        "description": "Primary works and adaptations through which most audiences encounter Espionage & spies."
    },
    {
        "slug": "espionage-spies-symbols",
        "name": "Espionage & spies symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Espionage & spies.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Espionage & spies."
    },
    {
        "slug": "espionage-spies-controversies",
        "name": "Espionage & spies controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Espionage & spies.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Espionage & spies argumentative."
    },
    {
        "slug": "espionage-spies-sources",
        "name": "Espionage & spies sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Espionage & spies.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Espionage & spies."
    },
    {
        "slug": "espionage-spies-geography",
        "name": "Espionage & spies geography",
        "type": "place",
        "short_description": "Broader geographic framing for Espionage & spies.",
        "description": "Regions, routes, and spatial systems that situate Espionage & spies beyond single named places."
    },
    {
        "slug": "espionage-spies-legacy",
        "name": "Espionage & spies legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Espionage & spies.",
        "description": "How Espionage & spies continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "espionage-spies-practices",
        "name": "Espionage & spies practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Espionage & spies.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Espionage & spies."
    },
    {
        "slug": "espionage-spies-entry-1",
        "name": "Espionage & spies entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-2",
        "name": "Espionage & spies entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-3",
        "name": "Espionage & spies entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-4",
        "name": "Espionage & spies entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-5",
        "name": "Espionage & spies entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-6",
        "name": "Espionage & spies entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-7",
        "name": "Espionage & spies entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-8",
        "name": "Espionage & spies entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-9",
        "name": "Espionage & spies entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-10",
        "name": "Espionage & spies entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-11",
        "name": "Espionage & spies entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-12",
        "name": "Espionage & spies entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-13",
        "name": "Espionage & spies entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-14",
        "name": "Espionage & spies entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-15",
        "name": "Espionage & spies entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-16",
        "name": "Espionage & spies entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-17",
        "name": "Espionage & spies entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-18",
        "name": "Espionage & spies entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-19",
        "name": "Espionage & spies entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-20",
        "name": "Espionage & spies entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-21",
        "name": "Espionage & spies entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-22",
        "name": "Espionage & spies entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-23",
        "name": "Espionage & spies entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "espionage-spies-entry-24",
        "name": "Espionage & spies entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Espionage & spies.",
        "description": "A supporting encyclopedia entry in the Espionage & spies subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "espionage-spies",
        "espionage-spies-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "espionage-spies",
        "espionage-spies-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "espionage-spies",
        "espionage-spies-places",
        "contains",
        "Espionage & spies places is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-events",
        "contains",
        "Espionage & spies events is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-objects",
        "contains",
        "Espionage & spies objects & artifacts is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-factions",
        "contains",
        "Espionage & spies factions & groups is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-concepts",
        "contains",
        "Espionage & spies concepts is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-eras",
        "contains",
        "Espionage & spies eras is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-works",
        "contains",
        "Espionage & spies works & media is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-symbols",
        "contains",
        "Espionage & spies symbols is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-controversies",
        "contains",
        "Espionage & spies controversies is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-sources",
        "contains",
        "Espionage & spies sources is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-geography",
        "contains",
        "Espionage & spies geography is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-legacy",
        "contains",
        "Espionage & spies legacy is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-practices",
        "contains",
        "Espionage & spies practices is a primary trailhead under Espionage & spies.",
        0.88,
        0.82
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-1",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-2",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-3",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-4",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-5",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-6",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-7",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-8",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-9",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-10",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-11",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-12",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-13",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-14",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-15",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-16",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-17",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-18",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-19",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-20",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-21",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-22",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-23",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ],
    [
        "espionage-spies",
        "espionage-spies-entry-24",
        "contains",
        "Supporting entry under Espionage & spies.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
