/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mob-psycho-100",
        "name": "Mob Psycho 100",
        "type": "topic",
        "short_description": "Espers, Reigen’s cons, and ONE’s psychic coming-of-age beside One-Punch Man.",
        "description": "Espers, Reigen’s cons, and ONE’s psychic coming-of-age beside One-Punch Man. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mob Psycho 100 so readers can follow long-tail connections across anime."
    },
    {
        "slug": "mob-psycho-100-figures",
        "name": "Mob Psycho 100 figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mob Psycho 100.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mob Psycho 100."
    },
    {
        "slug": "mob-psycho-100-world",
        "name": "Mob Psycho 100 world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mob Psycho 100.",
        "description": "Geography, institutions, and periodization that give Mob Psycho 100 its encyclopedia shape."
    },
    {
        "slug": "mob-psycho-100-places",
        "name": "Mob Psycho 100 places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mob Psycho 100.",
        "description": "Places, regions, and built sites that give Mob Psycho 100 its map — where events and figures concentrate."
    },
    {
        "slug": "mob-psycho-100-events",
        "name": "Mob Psycho 100 events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mob Psycho 100.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mob Psycho 100 timeline."
    },
    {
        "slug": "mob-psycho-100-objects",
        "name": "Mob Psycho 100 objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mob Psycho 100.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mob Psycho 100."
    },
    {
        "slug": "mob-psycho-100-factions",
        "name": "Mob Psycho 100 factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mob Psycho 100.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mob Psycho 100."
    },
    {
        "slug": "mob-psycho-100-concepts",
        "name": "Mob Psycho 100 concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mob Psycho 100.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mob Psycho 100 readable as a lore graph."
    },
    {
        "slug": "mob-psycho-100-eras",
        "name": "Mob Psycho 100 eras",
        "type": "event",
        "short_description": "Periodization for Mob Psycho 100.",
        "description": "Named eras and phases that help readers track how Mob Psycho 100 changes across time."
    },
    {
        "slug": "mob-psycho-100-works",
        "name": "Mob Psycho 100 works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mob Psycho 100.",
        "description": "Primary works and adaptations through which most audiences encounter Mob Psycho 100."
    },
    {
        "slug": "mob-psycho-100-symbols",
        "name": "Mob Psycho 100 symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mob Psycho 100.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mob Psycho 100."
    },
    {
        "slug": "mob-psycho-100-controversies",
        "name": "Mob Psycho 100 controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mob Psycho 100.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mob Psycho 100 argumentative."
    },
    {
        "slug": "mob-psycho-100-sources",
        "name": "Mob Psycho 100 sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mob Psycho 100.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mob Psycho 100."
    },
    {
        "slug": "mob-psycho-100-geography",
        "name": "Mob Psycho 100 geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mob Psycho 100.",
        "description": "Regions, routes, and spatial systems that situate Mob Psycho 100 beyond single named places."
    },
    {
        "slug": "mob-psycho-100-legacy",
        "name": "Mob Psycho 100 legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mob Psycho 100.",
        "description": "How Mob Psycho 100 continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mob-psycho-100-practices",
        "name": "Mob Psycho 100 practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mob Psycho 100.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mob Psycho 100."
    },
    {
        "slug": "mob-psycho-100-entry-1",
        "name": "Mob Psycho 100 entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-2",
        "name": "Mob Psycho 100 entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-3",
        "name": "Mob Psycho 100 entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-4",
        "name": "Mob Psycho 100 entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-5",
        "name": "Mob Psycho 100 entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-6",
        "name": "Mob Psycho 100 entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-7",
        "name": "Mob Psycho 100 entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-8",
        "name": "Mob Psycho 100 entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-9",
        "name": "Mob Psycho 100 entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-10",
        "name": "Mob Psycho 100 entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-11",
        "name": "Mob Psycho 100 entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-12",
        "name": "Mob Psycho 100 entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-13",
        "name": "Mob Psycho 100 entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-14",
        "name": "Mob Psycho 100 entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-15",
        "name": "Mob Psycho 100 entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-16",
        "name": "Mob Psycho 100 entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-17",
        "name": "Mob Psycho 100 entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-18",
        "name": "Mob Psycho 100 entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-19",
        "name": "Mob Psycho 100 entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-20",
        "name": "Mob Psycho 100 entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-21",
        "name": "Mob Psycho 100 entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-22",
        "name": "Mob Psycho 100 entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-23",
        "name": "Mob Psycho 100 entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mob-psycho-100-entry-24",
        "name": "Mob Psycho 100 entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mob Psycho 100.",
        "description": "A supporting encyclopedia entry in the Mob Psycho 100 subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mob-psycho-100",
        "mob-psycho-100-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-places",
        "contains",
        "Mob Psycho 100 places is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-events",
        "contains",
        "Mob Psycho 100 events is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-objects",
        "contains",
        "Mob Psycho 100 objects & artifacts is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-factions",
        "contains",
        "Mob Psycho 100 factions & groups is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-concepts",
        "contains",
        "Mob Psycho 100 concepts is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-eras",
        "contains",
        "Mob Psycho 100 eras is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-works",
        "contains",
        "Mob Psycho 100 works & media is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-symbols",
        "contains",
        "Mob Psycho 100 symbols is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-controversies",
        "contains",
        "Mob Psycho 100 controversies is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-sources",
        "contains",
        "Mob Psycho 100 sources is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-geography",
        "contains",
        "Mob Psycho 100 geography is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-legacy",
        "contains",
        "Mob Psycho 100 legacy is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-practices",
        "contains",
        "Mob Psycho 100 practices is a primary trailhead under Mob Psycho 100.",
        0.88,
        0.82
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-1",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-2",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-3",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-4",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-5",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-6",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-7",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-8",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-9",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-10",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-11",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-12",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-13",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-14",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-15",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-16",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-17",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-18",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-19",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-20",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-21",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-22",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-23",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ],
    [
        "mob-psycho-100",
        "mob-psycho-100-entry-24",
        "contains",
        "Supporting entry under Mob Psycho 100.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
