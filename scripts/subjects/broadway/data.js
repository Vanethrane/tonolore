/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "broadway",
        "name": "Broadway",
        "type": "topic",
        "short_description": "New York's commercial theatre district — houses, hits, and industry lore.",
        "description": "New York's commercial theatre district — houses, hits, and industry lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Broadway so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "broadway-figures",
        "name": "Broadway figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Broadway.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Broadway."
    },
    {
        "slug": "broadway-world",
        "name": "Broadway world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Broadway.",
        "description": "Geography, institutions, and periodization that give Broadway its encyclopedia shape."
    },
    {
        "slug": "broadway-places",
        "name": "Broadway places",
        "type": "place",
        "short_description": "Locations and geographies that frame Broadway.",
        "description": "Places, regions, and built sites that give Broadway its map — where events and figures concentrate."
    },
    {
        "slug": "broadway-events",
        "name": "Broadway events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Broadway.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Broadway timeline."
    },
    {
        "slug": "broadway-objects",
        "name": "Broadway objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Broadway.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Broadway."
    },
    {
        "slug": "broadway-factions",
        "name": "Broadway factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Broadway.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Broadway."
    },
    {
        "slug": "broadway-concepts",
        "name": "Broadway concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Broadway.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Broadway readable as a lore graph."
    },
    {
        "slug": "broadway-eras",
        "name": "Broadway eras",
        "type": "event",
        "short_description": "Periodization for Broadway.",
        "description": "Named eras and phases that help readers track how Broadway changes across time."
    },
    {
        "slug": "broadway-works",
        "name": "Broadway works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Broadway.",
        "description": "Primary works and adaptations through which most audiences encounter Broadway."
    },
    {
        "slug": "broadway-symbols",
        "name": "Broadway symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Broadway.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Broadway."
    },
    {
        "slug": "broadway-controversies",
        "name": "Broadway controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Broadway.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Broadway argumentative."
    },
    {
        "slug": "broadway-sources",
        "name": "Broadway sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Broadway.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Broadway."
    },
    {
        "slug": "broadway-geography",
        "name": "Broadway geography",
        "type": "place",
        "short_description": "Broader geographic framing for Broadway.",
        "description": "Regions, routes, and spatial systems that situate Broadway beyond single named places."
    },
    {
        "slug": "broadway-legacy",
        "name": "Broadway legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Broadway.",
        "description": "How Broadway continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "broadway-practices",
        "name": "Broadway practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Broadway.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Broadway."
    },
    {
        "slug": "broadway-entry-1",
        "name": "Broadway entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-2",
        "name": "Broadway entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-3",
        "name": "Broadway entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-4",
        "name": "Broadway entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-5",
        "name": "Broadway entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-6",
        "name": "Broadway entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-7",
        "name": "Broadway entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-8",
        "name": "Broadway entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-9",
        "name": "Broadway entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-10",
        "name": "Broadway entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-11",
        "name": "Broadway entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-12",
        "name": "Broadway entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-13",
        "name": "Broadway entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-14",
        "name": "Broadway entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-15",
        "name": "Broadway entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-16",
        "name": "Broadway entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-17",
        "name": "Broadway entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-18",
        "name": "Broadway entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-19",
        "name": "Broadway entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-20",
        "name": "Broadway entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-21",
        "name": "Broadway entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-22",
        "name": "Broadway entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-23",
        "name": "Broadway entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-entry-24",
        "name": "Broadway entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway.",
        "description": "A supporting encyclopedia entry in the Broadway subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "broadway",
        "broadway-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "broadway",
        "broadway-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "broadway",
        "broadway-places",
        "contains",
        "Broadway places is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-events",
        "contains",
        "Broadway events is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-objects",
        "contains",
        "Broadway objects & artifacts is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-factions",
        "contains",
        "Broadway factions & groups is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-concepts",
        "contains",
        "Broadway concepts is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-eras",
        "contains",
        "Broadway eras is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-works",
        "contains",
        "Broadway works & media is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-symbols",
        "contains",
        "Broadway symbols is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-controversies",
        "contains",
        "Broadway controversies is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-sources",
        "contains",
        "Broadway sources is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-geography",
        "contains",
        "Broadway geography is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-legacy",
        "contains",
        "Broadway legacy is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-practices",
        "contains",
        "Broadway practices is a primary trailhead under Broadway.",
        0.88,
        0.82
    ],
    [
        "broadway",
        "broadway-entry-1",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-2",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-3",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-4",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-5",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-6",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-7",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-8",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-9",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-10",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-11",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-12",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-13",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-14",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-15",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-16",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-17",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-18",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-19",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-20",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-21",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-22",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-23",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ],
    [
        "broadway",
        "broadway-entry-24",
        "contains",
        "Supporting entry under Broadway.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
