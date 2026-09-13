/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chicago-musical",
        "name": "Chicago (musical)",
        "type": "topic",
        "short_description": "Jazz-age murderesses, Fosse style, and the cynical showbiz satire that keeps returning to the stage.",
        "description": "Jazz-age murderesses, Fosse style, and the cynical showbiz satire that keeps returning to the stage. This Ton-o-Lore subject maps people, places, events, and ideas tied to Chicago (musical) so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "chicago-musical-figures",
        "name": "Chicago (musical) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Chicago (musical).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Chicago (musical)."
    },
    {
        "slug": "chicago-musical-world",
        "name": "Chicago (musical) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Chicago (musical).",
        "description": "Geography, institutions, and periodization that give Chicago (musical) its encyclopedia shape."
    },
    {
        "slug": "chicago-musical-places",
        "name": "Chicago (musical) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chicago (musical).",
        "description": "Places, regions, and built sites that give Chicago (musical) its map — where events and figures concentrate."
    },
    {
        "slug": "chicago-musical-events",
        "name": "Chicago (musical) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chicago (musical).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chicago (musical) timeline."
    },
    {
        "slug": "chicago-musical-objects",
        "name": "Chicago (musical) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chicago (musical).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chicago (musical)."
    },
    {
        "slug": "chicago-musical-factions",
        "name": "Chicago (musical) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chicago (musical).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chicago (musical)."
    },
    {
        "slug": "chicago-musical-concepts",
        "name": "Chicago (musical) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chicago (musical).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chicago (musical) readable as a lore graph."
    },
    {
        "slug": "chicago-musical-eras",
        "name": "Chicago (musical) eras",
        "type": "event",
        "short_description": "Periodization for Chicago (musical).",
        "description": "Named eras and phases that help readers track how Chicago (musical) changes across time."
    },
    {
        "slug": "chicago-musical-works",
        "name": "Chicago (musical) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chicago (musical).",
        "description": "Primary works and adaptations through which most audiences encounter Chicago (musical)."
    },
    {
        "slug": "chicago-musical-symbols",
        "name": "Chicago (musical) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chicago (musical).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chicago (musical)."
    },
    {
        "slug": "chicago-musical-controversies",
        "name": "Chicago (musical) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chicago (musical).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chicago (musical) argumentative."
    },
    {
        "slug": "chicago-musical-sources",
        "name": "Chicago (musical) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chicago (musical).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chicago (musical)."
    },
    {
        "slug": "chicago-musical-geography",
        "name": "Chicago (musical) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chicago (musical).",
        "description": "Regions, routes, and spatial systems that situate Chicago (musical) beyond single named places."
    },
    {
        "slug": "chicago-musical-legacy",
        "name": "Chicago (musical) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Chicago (musical).",
        "description": "How Chicago (musical) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "chicago-musical-practices",
        "name": "Chicago (musical) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Chicago (musical).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Chicago (musical)."
    },
    {
        "slug": "chicago-musical-entry-1",
        "name": "Chicago (musical) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-2",
        "name": "Chicago (musical) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-3",
        "name": "Chicago (musical) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-4",
        "name": "Chicago (musical) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-5",
        "name": "Chicago (musical) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-6",
        "name": "Chicago (musical) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-7",
        "name": "Chicago (musical) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-8",
        "name": "Chicago (musical) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-9",
        "name": "Chicago (musical) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-10",
        "name": "Chicago (musical) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-11",
        "name": "Chicago (musical) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-12",
        "name": "Chicago (musical) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-13",
        "name": "Chicago (musical) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-14",
        "name": "Chicago (musical) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-15",
        "name": "Chicago (musical) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-16",
        "name": "Chicago (musical) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-17",
        "name": "Chicago (musical) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-18",
        "name": "Chicago (musical) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-19",
        "name": "Chicago (musical) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-20",
        "name": "Chicago (musical) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-21",
        "name": "Chicago (musical) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-22",
        "name": "Chicago (musical) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-23",
        "name": "Chicago (musical) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chicago-musical-entry-24",
        "name": "Chicago (musical) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chicago (musical).",
        "description": "A supporting encyclopedia entry in the Chicago (musical) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "chicago-musical",
        "chicago-musical-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "chicago-musical",
        "chicago-musical-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "chicago-musical",
        "chicago-musical-places",
        "contains",
        "Chicago (musical) places is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-events",
        "contains",
        "Chicago (musical) events is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-objects",
        "contains",
        "Chicago (musical) objects & artifacts is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-factions",
        "contains",
        "Chicago (musical) factions & groups is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-concepts",
        "contains",
        "Chicago (musical) concepts is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-eras",
        "contains",
        "Chicago (musical) eras is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-works",
        "contains",
        "Chicago (musical) works & media is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-symbols",
        "contains",
        "Chicago (musical) symbols is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-controversies",
        "contains",
        "Chicago (musical) controversies is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-sources",
        "contains",
        "Chicago (musical) sources is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-geography",
        "contains",
        "Chicago (musical) geography is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-legacy",
        "contains",
        "Chicago (musical) legacy is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-practices",
        "contains",
        "Chicago (musical) practices is a primary trailhead under Chicago (musical).",
        0.88,
        0.82
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-1",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-2",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-3",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-4",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-5",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-6",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-7",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-8",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-9",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-10",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-11",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-12",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-13",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-14",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-15",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-16",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-17",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-18",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-19",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-20",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-21",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-22",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-23",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ],
    [
        "chicago-musical",
        "chicago-musical-entry-24",
        "contains",
        "Supporting entry under Chicago (musical).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
