/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "off-broadway",
        "name": "Off-Broadway",
        "type": "topic",
        "short_description": "Intimate houses, experimental runs, and the New York stage ecosystem beyond the big marquees.",
        "description": "Intimate houses, experimental runs, and the New York stage ecosystem beyond the big marquees. This Ton-o-Lore subject maps people, places, events, and ideas tied to Off-Broadway so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "off-broadway-figures",
        "name": "Off-Broadway figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Off-Broadway.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Off-Broadway."
    },
    {
        "slug": "off-broadway-world",
        "name": "Off-Broadway world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Off-Broadway.",
        "description": "Geography, institutions, and periodization that give Off-Broadway its encyclopedia shape."
    },
    {
        "slug": "off-broadway-places",
        "name": "Off-Broadway places",
        "type": "place",
        "short_description": "Locations and geographies that frame Off-Broadway.",
        "description": "Places, regions, and built sites that give Off-Broadway its map — where events and figures concentrate."
    },
    {
        "slug": "off-broadway-events",
        "name": "Off-Broadway events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Off-Broadway.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Off-Broadway timeline."
    },
    {
        "slug": "off-broadway-objects",
        "name": "Off-Broadway objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Off-Broadway.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Off-Broadway."
    },
    {
        "slug": "off-broadway-factions",
        "name": "Off-Broadway factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Off-Broadway.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Off-Broadway."
    },
    {
        "slug": "off-broadway-concepts",
        "name": "Off-Broadway concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Off-Broadway.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Off-Broadway readable as a lore graph."
    },
    {
        "slug": "off-broadway-eras",
        "name": "Off-Broadway eras",
        "type": "event",
        "short_description": "Periodization for Off-Broadway.",
        "description": "Named eras and phases that help readers track how Off-Broadway changes across time."
    },
    {
        "slug": "off-broadway-works",
        "name": "Off-Broadway works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Off-Broadway.",
        "description": "Primary works and adaptations through which most audiences encounter Off-Broadway."
    },
    {
        "slug": "off-broadway-symbols",
        "name": "Off-Broadway symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Off-Broadway.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Off-Broadway."
    },
    {
        "slug": "off-broadway-controversies",
        "name": "Off-Broadway controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Off-Broadway.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Off-Broadway argumentative."
    },
    {
        "slug": "off-broadway-sources",
        "name": "Off-Broadway sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Off-Broadway.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Off-Broadway."
    },
    {
        "slug": "off-broadway-geography",
        "name": "Off-Broadway geography",
        "type": "place",
        "short_description": "Broader geographic framing for Off-Broadway.",
        "description": "Regions, routes, and spatial systems that situate Off-Broadway beyond single named places."
    },
    {
        "slug": "off-broadway-legacy",
        "name": "Off-Broadway legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Off-Broadway.",
        "description": "How Off-Broadway continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "off-broadway-practices",
        "name": "Off-Broadway practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Off-Broadway.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Off-Broadway."
    },
    {
        "slug": "off-broadway-entry-1",
        "name": "Off-Broadway entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-2",
        "name": "Off-Broadway entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-3",
        "name": "Off-Broadway entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-4",
        "name": "Off-Broadway entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-5",
        "name": "Off-Broadway entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-6",
        "name": "Off-Broadway entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-7",
        "name": "Off-Broadway entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-8",
        "name": "Off-Broadway entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-9",
        "name": "Off-Broadway entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-10",
        "name": "Off-Broadway entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-11",
        "name": "Off-Broadway entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-12",
        "name": "Off-Broadway entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-13",
        "name": "Off-Broadway entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-14",
        "name": "Off-Broadway entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-15",
        "name": "Off-Broadway entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-16",
        "name": "Off-Broadway entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-17",
        "name": "Off-Broadway entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-18",
        "name": "Off-Broadway entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-19",
        "name": "Off-Broadway entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-20",
        "name": "Off-Broadway entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-21",
        "name": "Off-Broadway entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-22",
        "name": "Off-Broadway entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-23",
        "name": "Off-Broadway entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "off-broadway-entry-24",
        "name": "Off-Broadway entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Off-Broadway.",
        "description": "A supporting encyclopedia entry in the Off-Broadway subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "off-broadway",
        "off-broadway-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "off-broadway",
        "off-broadway-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "off-broadway",
        "off-broadway-places",
        "contains",
        "Off-Broadway places is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-events",
        "contains",
        "Off-Broadway events is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-objects",
        "contains",
        "Off-Broadway objects & artifacts is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-factions",
        "contains",
        "Off-Broadway factions & groups is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-concepts",
        "contains",
        "Off-Broadway concepts is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-eras",
        "contains",
        "Off-Broadway eras is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-works",
        "contains",
        "Off-Broadway works & media is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-symbols",
        "contains",
        "Off-Broadway symbols is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-controversies",
        "contains",
        "Off-Broadway controversies is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-sources",
        "contains",
        "Off-Broadway sources is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-geography",
        "contains",
        "Off-Broadway geography is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-legacy",
        "contains",
        "Off-Broadway legacy is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-practices",
        "contains",
        "Off-Broadway practices is a primary trailhead under Off-Broadway.",
        0.88,
        0.82
    ],
    [
        "off-broadway",
        "off-broadway-entry-1",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-2",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-3",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-4",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-5",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-6",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-7",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-8",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-9",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-10",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-11",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-12",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-13",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-14",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-15",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-16",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-17",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-18",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-19",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-20",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-21",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-22",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-23",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ],
    [
        "off-broadway",
        "off-broadway-entry-24",
        "contains",
        "Supporting entry under Off-Broadway.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
