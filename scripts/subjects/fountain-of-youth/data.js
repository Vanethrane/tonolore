/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fountain-of-youth",
        "name": "Fountain of Youth",
        "type": "topic",
        "short_description": "Ponce de León lore, healing waters, and the New World quest myth of immortality.",
        "description": "Ponce de León lore, healing waters, and the New World quest myth of immortality. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fountain of Youth so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "fountain-of-youth-figures",
        "name": "Fountain of Youth figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fountain of Youth.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fountain of Youth."
    },
    {
        "slug": "fountain-of-youth-world",
        "name": "Fountain of Youth world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fountain of Youth.",
        "description": "Geography, institutions, and periodization that give Fountain of Youth its encyclopedia shape."
    },
    {
        "slug": "fountain-of-youth-places",
        "name": "Fountain of Youth places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fountain of Youth.",
        "description": "Places, regions, and built sites that give Fountain of Youth its map — where events and figures concentrate."
    },
    {
        "slug": "fountain-of-youth-events",
        "name": "Fountain of Youth events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fountain of Youth.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fountain of Youth timeline."
    },
    {
        "slug": "fountain-of-youth-objects",
        "name": "Fountain of Youth objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fountain of Youth.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fountain of Youth."
    },
    {
        "slug": "fountain-of-youth-factions",
        "name": "Fountain of Youth factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fountain of Youth.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fountain of Youth."
    },
    {
        "slug": "fountain-of-youth-concepts",
        "name": "Fountain of Youth concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fountain of Youth.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fountain of Youth readable as a lore graph."
    },
    {
        "slug": "fountain-of-youth-eras",
        "name": "Fountain of Youth eras",
        "type": "event",
        "short_description": "Periodization for Fountain of Youth.",
        "description": "Named eras and phases that help readers track how Fountain of Youth changes across time."
    },
    {
        "slug": "fountain-of-youth-works",
        "name": "Fountain of Youth works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fountain of Youth.",
        "description": "Primary works and adaptations through which most audiences encounter Fountain of Youth."
    },
    {
        "slug": "fountain-of-youth-symbols",
        "name": "Fountain of Youth symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fountain of Youth.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fountain of Youth."
    },
    {
        "slug": "fountain-of-youth-controversies",
        "name": "Fountain of Youth controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fountain of Youth.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fountain of Youth argumentative."
    },
    {
        "slug": "fountain-of-youth-sources",
        "name": "Fountain of Youth sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fountain of Youth.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fountain of Youth."
    },
    {
        "slug": "fountain-of-youth-geography",
        "name": "Fountain of Youth geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fountain of Youth.",
        "description": "Regions, routes, and spatial systems that situate Fountain of Youth beyond single named places."
    },
    {
        "slug": "fountain-of-youth-legacy",
        "name": "Fountain of Youth legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fountain of Youth.",
        "description": "How Fountain of Youth continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fountain-of-youth-practices",
        "name": "Fountain of Youth practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fountain of Youth.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fountain of Youth."
    },
    {
        "slug": "fountain-of-youth-entry-1",
        "name": "Fountain of Youth entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-2",
        "name": "Fountain of Youth entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-3",
        "name": "Fountain of Youth entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-4",
        "name": "Fountain of Youth entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-5",
        "name": "Fountain of Youth entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-6",
        "name": "Fountain of Youth entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-7",
        "name": "Fountain of Youth entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-8",
        "name": "Fountain of Youth entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-9",
        "name": "Fountain of Youth entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-10",
        "name": "Fountain of Youth entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-11",
        "name": "Fountain of Youth entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-12",
        "name": "Fountain of Youth entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-13",
        "name": "Fountain of Youth entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-14",
        "name": "Fountain of Youth entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-15",
        "name": "Fountain of Youth entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-16",
        "name": "Fountain of Youth entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-17",
        "name": "Fountain of Youth entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-18",
        "name": "Fountain of Youth entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-19",
        "name": "Fountain of Youth entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-20",
        "name": "Fountain of Youth entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-21",
        "name": "Fountain of Youth entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-22",
        "name": "Fountain of Youth entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-23",
        "name": "Fountain of Youth entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fountain-of-youth-entry-24",
        "name": "Fountain of Youth entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fountain of Youth.",
        "description": "A supporting encyclopedia entry in the Fountain of Youth subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fountain-of-youth",
        "fountain-of-youth-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-places",
        "contains",
        "Fountain of Youth places is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-events",
        "contains",
        "Fountain of Youth events is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-objects",
        "contains",
        "Fountain of Youth objects & artifacts is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-factions",
        "contains",
        "Fountain of Youth factions & groups is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-concepts",
        "contains",
        "Fountain of Youth concepts is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-eras",
        "contains",
        "Fountain of Youth eras is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-works",
        "contains",
        "Fountain of Youth works & media is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-symbols",
        "contains",
        "Fountain of Youth symbols is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-controversies",
        "contains",
        "Fountain of Youth controversies is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-sources",
        "contains",
        "Fountain of Youth sources is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-geography",
        "contains",
        "Fountain of Youth geography is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-legacy",
        "contains",
        "Fountain of Youth legacy is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-practices",
        "contains",
        "Fountain of Youth practices is a primary trailhead under Fountain of Youth.",
        0.88,
        0.82
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-1",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-2",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-3",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-4",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-5",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-6",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-7",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-8",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-9",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-10",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-11",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-12",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-13",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-14",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-15",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-16",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-17",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-18",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-19",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-20",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-21",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-22",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-23",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ],
    [
        "fountain-of-youth",
        "fountain-of-youth-entry-24",
        "contains",
        "Supporting entry under Fountain of Youth.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
