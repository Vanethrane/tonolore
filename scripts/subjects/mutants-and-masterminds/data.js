/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mutants-and-masterminds",
        "name": "Mutants & Masterminds",
        "type": "topic",
        "short_description": "Point-buy supers, PL scaling, and the flexible RPG toolkit for cape campaigns.",
        "description": "Point-buy supers, PL scaling, and the flexible RPG toolkit for cape campaigns. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mutants & Masterminds so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "mutants-and-masterminds-figures",
        "name": "Mutants & Masterminds figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mutants & Masterminds.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mutants & Masterminds."
    },
    {
        "slug": "mutants-and-masterminds-world",
        "name": "Mutants & Masterminds world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mutants & Masterminds.",
        "description": "Geography, institutions, and periodization that give Mutants & Masterminds its encyclopedia shape."
    },
    {
        "slug": "mutants-and-masterminds-places",
        "name": "Mutants & Masterminds places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mutants & Masterminds.",
        "description": "Places, regions, and built sites that give Mutants & Masterminds its map — where events and figures concentrate."
    },
    {
        "slug": "mutants-and-masterminds-events",
        "name": "Mutants & Masterminds events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mutants & Masterminds.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mutants & Masterminds timeline."
    },
    {
        "slug": "mutants-and-masterminds-objects",
        "name": "Mutants & Masterminds objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mutants & Masterminds.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mutants & Masterminds."
    },
    {
        "slug": "mutants-and-masterminds-factions",
        "name": "Mutants & Masterminds factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mutants & Masterminds.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mutants & Masterminds."
    },
    {
        "slug": "mutants-and-masterminds-concepts",
        "name": "Mutants & Masterminds concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mutants & Masterminds.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mutants & Masterminds readable as a lore graph."
    },
    {
        "slug": "mutants-and-masterminds-eras",
        "name": "Mutants & Masterminds eras",
        "type": "event",
        "short_description": "Periodization for Mutants & Masterminds.",
        "description": "Named eras and phases that help readers track how Mutants & Masterminds changes across time."
    },
    {
        "slug": "mutants-and-masterminds-works",
        "name": "Mutants & Masterminds works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mutants & Masterminds.",
        "description": "Primary works and adaptations through which most audiences encounter Mutants & Masterminds."
    },
    {
        "slug": "mutants-and-masterminds-symbols",
        "name": "Mutants & Masterminds symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mutants & Masterminds.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mutants & Masterminds."
    },
    {
        "slug": "mutants-and-masterminds-controversies",
        "name": "Mutants & Masterminds controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mutants & Masterminds.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mutants & Masterminds argumentative."
    },
    {
        "slug": "mutants-and-masterminds-sources",
        "name": "Mutants & Masterminds sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mutants & Masterminds.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mutants & Masterminds."
    },
    {
        "slug": "mutants-and-masterminds-geography",
        "name": "Mutants & Masterminds geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mutants & Masterminds.",
        "description": "Regions, routes, and spatial systems that situate Mutants & Masterminds beyond single named places."
    },
    {
        "slug": "mutants-and-masterminds-legacy",
        "name": "Mutants & Masterminds legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mutants & Masterminds.",
        "description": "How Mutants & Masterminds continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mutants-and-masterminds-practices",
        "name": "Mutants & Masterminds practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mutants & Masterminds.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mutants & Masterminds."
    },
    {
        "slug": "mutants-and-masterminds-entry-1",
        "name": "Mutants & Masterminds entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-2",
        "name": "Mutants & Masterminds entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-3",
        "name": "Mutants & Masterminds entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-4",
        "name": "Mutants & Masterminds entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-5",
        "name": "Mutants & Masterminds entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-6",
        "name": "Mutants & Masterminds entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-7",
        "name": "Mutants & Masterminds entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-8",
        "name": "Mutants & Masterminds entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-9",
        "name": "Mutants & Masterminds entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-10",
        "name": "Mutants & Masterminds entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-11",
        "name": "Mutants & Masterminds entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-12",
        "name": "Mutants & Masterminds entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-13",
        "name": "Mutants & Masterminds entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-14",
        "name": "Mutants & Masterminds entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-15",
        "name": "Mutants & Masterminds entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-16",
        "name": "Mutants & Masterminds entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-17",
        "name": "Mutants & Masterminds entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-18",
        "name": "Mutants & Masterminds entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-19",
        "name": "Mutants & Masterminds entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-20",
        "name": "Mutants & Masterminds entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-21",
        "name": "Mutants & Masterminds entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-22",
        "name": "Mutants & Masterminds entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-23",
        "name": "Mutants & Masterminds entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mutants-and-masterminds-entry-24",
        "name": "Mutants & Masterminds entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mutants & Masterminds.",
        "description": "A supporting encyclopedia entry in the Mutants & Masterminds subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-places",
        "contains",
        "Mutants & Masterminds places is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-events",
        "contains",
        "Mutants & Masterminds events is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-objects",
        "contains",
        "Mutants & Masterminds objects & artifacts is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-factions",
        "contains",
        "Mutants & Masterminds factions & groups is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-concepts",
        "contains",
        "Mutants & Masterminds concepts is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-eras",
        "contains",
        "Mutants & Masterminds eras is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-works",
        "contains",
        "Mutants & Masterminds works & media is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-symbols",
        "contains",
        "Mutants & Masterminds symbols is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-controversies",
        "contains",
        "Mutants & Masterminds controversies is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-sources",
        "contains",
        "Mutants & Masterminds sources is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-geography",
        "contains",
        "Mutants & Masterminds geography is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-legacy",
        "contains",
        "Mutants & Masterminds legacy is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-practices",
        "contains",
        "Mutants & Masterminds practices is a primary trailhead under Mutants & Masterminds.",
        0.88,
        0.82
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-1",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-2",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-3",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-4",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-5",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-6",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-7",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-8",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-9",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-10",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-11",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-12",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-13",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-14",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-15",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-16",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-17",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-18",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-19",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-20",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-21",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-22",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-23",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ],
    [
        "mutants-and-masterminds",
        "mutants-and-masterminds-entry-24",
        "contains",
        "Supporting entry under Mutants & Masterminds.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
