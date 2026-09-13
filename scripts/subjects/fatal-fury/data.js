/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fatal-fury",
        "name": "Fatal Fury",
        "type": "topic",
        "short_description": "South Town, Bogard brothers, and the series that helped define SNK’s 1990s fighter myth.",
        "description": "South Town, Bogard brothers, and the series that helped define SNK’s 1990s fighter myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fatal Fury so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "fatal-fury-figures",
        "name": "Fatal Fury figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fatal Fury.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fatal Fury."
    },
    {
        "slug": "fatal-fury-world",
        "name": "Fatal Fury world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fatal Fury.",
        "description": "Geography, institutions, and periodization that give Fatal Fury its encyclopedia shape."
    },
    {
        "slug": "fatal-fury-places",
        "name": "Fatal Fury places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fatal Fury.",
        "description": "Places, regions, and built sites that give Fatal Fury its map — where events and figures concentrate."
    },
    {
        "slug": "fatal-fury-events",
        "name": "Fatal Fury events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fatal Fury.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fatal Fury timeline."
    },
    {
        "slug": "fatal-fury-objects",
        "name": "Fatal Fury objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fatal Fury.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fatal Fury."
    },
    {
        "slug": "fatal-fury-factions",
        "name": "Fatal Fury factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fatal Fury.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fatal Fury."
    },
    {
        "slug": "fatal-fury-concepts",
        "name": "Fatal Fury concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fatal Fury.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fatal Fury readable as a lore graph."
    },
    {
        "slug": "fatal-fury-eras",
        "name": "Fatal Fury eras",
        "type": "event",
        "short_description": "Periodization for Fatal Fury.",
        "description": "Named eras and phases that help readers track how Fatal Fury changes across time."
    },
    {
        "slug": "fatal-fury-works",
        "name": "Fatal Fury works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fatal Fury.",
        "description": "Primary works and adaptations through which most audiences encounter Fatal Fury."
    },
    {
        "slug": "fatal-fury-symbols",
        "name": "Fatal Fury symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fatal Fury.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fatal Fury."
    },
    {
        "slug": "fatal-fury-controversies",
        "name": "Fatal Fury controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fatal Fury.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fatal Fury argumentative."
    },
    {
        "slug": "fatal-fury-sources",
        "name": "Fatal Fury sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fatal Fury.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fatal Fury."
    },
    {
        "slug": "fatal-fury-geography",
        "name": "Fatal Fury geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fatal Fury.",
        "description": "Regions, routes, and spatial systems that situate Fatal Fury beyond single named places."
    },
    {
        "slug": "fatal-fury-legacy",
        "name": "Fatal Fury legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fatal Fury.",
        "description": "How Fatal Fury continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fatal-fury-practices",
        "name": "Fatal Fury practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fatal Fury.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fatal Fury."
    },
    {
        "slug": "fatal-fury-entry-1",
        "name": "Fatal Fury entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-2",
        "name": "Fatal Fury entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-3",
        "name": "Fatal Fury entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-4",
        "name": "Fatal Fury entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-5",
        "name": "Fatal Fury entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-6",
        "name": "Fatal Fury entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-7",
        "name": "Fatal Fury entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-8",
        "name": "Fatal Fury entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-9",
        "name": "Fatal Fury entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-10",
        "name": "Fatal Fury entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-11",
        "name": "Fatal Fury entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-12",
        "name": "Fatal Fury entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-13",
        "name": "Fatal Fury entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-14",
        "name": "Fatal Fury entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-15",
        "name": "Fatal Fury entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-16",
        "name": "Fatal Fury entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-17",
        "name": "Fatal Fury entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-18",
        "name": "Fatal Fury entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-19",
        "name": "Fatal Fury entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-20",
        "name": "Fatal Fury entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-21",
        "name": "Fatal Fury entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-22",
        "name": "Fatal Fury entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-23",
        "name": "Fatal Fury entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fatal-fury-entry-24",
        "name": "Fatal Fury entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fatal Fury.",
        "description": "A supporting encyclopedia entry in the Fatal Fury subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fatal-fury",
        "fatal-fury-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fatal-fury",
        "fatal-fury-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fatal-fury",
        "fatal-fury-places",
        "contains",
        "Fatal Fury places is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-events",
        "contains",
        "Fatal Fury events is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-objects",
        "contains",
        "Fatal Fury objects & artifacts is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-factions",
        "contains",
        "Fatal Fury factions & groups is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-concepts",
        "contains",
        "Fatal Fury concepts is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-eras",
        "contains",
        "Fatal Fury eras is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-works",
        "contains",
        "Fatal Fury works & media is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-symbols",
        "contains",
        "Fatal Fury symbols is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-controversies",
        "contains",
        "Fatal Fury controversies is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-sources",
        "contains",
        "Fatal Fury sources is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-geography",
        "contains",
        "Fatal Fury geography is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-legacy",
        "contains",
        "Fatal Fury legacy is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-practices",
        "contains",
        "Fatal Fury practices is a primary trailhead under Fatal Fury.",
        0.88,
        0.82
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-1",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-2",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-3",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-4",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-5",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-6",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-7",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-8",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-9",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-10",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-11",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-12",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-13",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-14",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-15",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-16",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-17",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-18",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-19",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-20",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-21",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-22",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-23",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ],
    [
        "fatal-fury",
        "fatal-fury-entry-24",
        "contains",
        "Supporting entry under Fatal Fury.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
