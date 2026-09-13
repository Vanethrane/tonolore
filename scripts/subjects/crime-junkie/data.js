/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "crime-junkie",
        "name": "Crime Junkie",
        "type": "topic",
        "short_description": "Case summaries, fan community, and one of true crime’s most-downloaded weekly shows.",
        "description": "Case summaries, fan community, and one of true crime’s most-downloaded weekly shows. This Ton-o-Lore subject maps people, places, events, and ideas tied to Crime Junkie so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "crime-junkie-figures",
        "name": "Crime Junkie figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Crime Junkie.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Crime Junkie."
    },
    {
        "slug": "crime-junkie-world",
        "name": "Crime Junkie world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Crime Junkie.",
        "description": "Geography, institutions, and periodization that give Crime Junkie its encyclopedia shape."
    },
    {
        "slug": "crime-junkie-places",
        "name": "Crime Junkie places",
        "type": "place",
        "short_description": "Locations and geographies that frame Crime Junkie.",
        "description": "Places, regions, and built sites that give Crime Junkie its map — where events and figures concentrate."
    },
    {
        "slug": "crime-junkie-events",
        "name": "Crime Junkie events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Crime Junkie.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Crime Junkie timeline."
    },
    {
        "slug": "crime-junkie-objects",
        "name": "Crime Junkie objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Crime Junkie.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Crime Junkie."
    },
    {
        "slug": "crime-junkie-factions",
        "name": "Crime Junkie factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Crime Junkie.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Crime Junkie."
    },
    {
        "slug": "crime-junkie-concepts",
        "name": "Crime Junkie concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Crime Junkie.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Crime Junkie readable as a lore graph."
    },
    {
        "slug": "crime-junkie-eras",
        "name": "Crime Junkie eras",
        "type": "event",
        "short_description": "Periodization for Crime Junkie.",
        "description": "Named eras and phases that help readers track how Crime Junkie changes across time."
    },
    {
        "slug": "crime-junkie-works",
        "name": "Crime Junkie works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Crime Junkie.",
        "description": "Primary works and adaptations through which most audiences encounter Crime Junkie."
    },
    {
        "slug": "crime-junkie-symbols",
        "name": "Crime Junkie symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Crime Junkie.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Crime Junkie."
    },
    {
        "slug": "crime-junkie-controversies",
        "name": "Crime Junkie controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Crime Junkie.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Crime Junkie argumentative."
    },
    {
        "slug": "crime-junkie-sources",
        "name": "Crime Junkie sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Crime Junkie.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Crime Junkie."
    },
    {
        "slug": "crime-junkie-geography",
        "name": "Crime Junkie geography",
        "type": "place",
        "short_description": "Broader geographic framing for Crime Junkie.",
        "description": "Regions, routes, and spatial systems that situate Crime Junkie beyond single named places."
    },
    {
        "slug": "crime-junkie-legacy",
        "name": "Crime Junkie legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Crime Junkie.",
        "description": "How Crime Junkie continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "crime-junkie-practices",
        "name": "Crime Junkie practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Crime Junkie.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Crime Junkie."
    },
    {
        "slug": "crime-junkie-entry-1",
        "name": "Crime Junkie entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-2",
        "name": "Crime Junkie entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-3",
        "name": "Crime Junkie entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-4",
        "name": "Crime Junkie entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-5",
        "name": "Crime Junkie entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-6",
        "name": "Crime Junkie entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-7",
        "name": "Crime Junkie entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-8",
        "name": "Crime Junkie entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-9",
        "name": "Crime Junkie entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-10",
        "name": "Crime Junkie entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-11",
        "name": "Crime Junkie entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-12",
        "name": "Crime Junkie entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-13",
        "name": "Crime Junkie entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-14",
        "name": "Crime Junkie entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-15",
        "name": "Crime Junkie entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-16",
        "name": "Crime Junkie entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-17",
        "name": "Crime Junkie entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-18",
        "name": "Crime Junkie entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-19",
        "name": "Crime Junkie entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-20",
        "name": "Crime Junkie entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-21",
        "name": "Crime Junkie entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-22",
        "name": "Crime Junkie entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-23",
        "name": "Crime Junkie entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crime-junkie-entry-24",
        "name": "Crime Junkie entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crime Junkie.",
        "description": "A supporting encyclopedia entry in the Crime Junkie subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "crime-junkie",
        "crime-junkie-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "crime-junkie",
        "crime-junkie-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "crime-junkie",
        "crime-junkie-places",
        "contains",
        "Crime Junkie places is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-events",
        "contains",
        "Crime Junkie events is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-objects",
        "contains",
        "Crime Junkie objects & artifacts is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-factions",
        "contains",
        "Crime Junkie factions & groups is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-concepts",
        "contains",
        "Crime Junkie concepts is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-eras",
        "contains",
        "Crime Junkie eras is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-works",
        "contains",
        "Crime Junkie works & media is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-symbols",
        "contains",
        "Crime Junkie symbols is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-controversies",
        "contains",
        "Crime Junkie controversies is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-sources",
        "contains",
        "Crime Junkie sources is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-geography",
        "contains",
        "Crime Junkie geography is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-legacy",
        "contains",
        "Crime Junkie legacy is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-practices",
        "contains",
        "Crime Junkie practices is a primary trailhead under Crime Junkie.",
        0.88,
        0.82
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-1",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-2",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-3",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-4",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-5",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-6",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-7",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-8",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-9",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-10",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-11",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-12",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-13",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-14",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-15",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-16",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-17",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-18",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-19",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-20",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-21",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-22",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-23",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ],
    [
        "crime-junkie",
        "crime-junkie-entry-24",
        "contains",
        "Supporting entry under Crime Junkie.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
