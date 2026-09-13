/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "al-capone-era",
        "name": "Al Capone era",
        "type": "topic",
        "short_description": "Chicago Outfit, tax cases, and the Prohibition kingpin who personified gangster America.",
        "description": "Chicago Outfit, tax cases, and the Prohibition kingpin who personified gangster America. This Ton-o-Lore subject maps people, places, events, and ideas tied to Al Capone era so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "al-capone-era-figures",
        "name": "Al Capone era figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Al Capone era.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Al Capone era."
    },
    {
        "slug": "al-capone-era-world",
        "name": "Al Capone era world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Al Capone era.",
        "description": "Geography, institutions, and periodization that give Al Capone era its encyclopedia shape."
    },
    {
        "slug": "al-capone-era-places",
        "name": "Al Capone era places",
        "type": "place",
        "short_description": "Locations and geographies that frame Al Capone era.",
        "description": "Places, regions, and built sites that give Al Capone era its map — where events and figures concentrate."
    },
    {
        "slug": "al-capone-era-events",
        "name": "Al Capone era events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Al Capone era.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Al Capone era timeline."
    },
    {
        "slug": "al-capone-era-objects",
        "name": "Al Capone era objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Al Capone era.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Al Capone era."
    },
    {
        "slug": "al-capone-era-factions",
        "name": "Al Capone era factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Al Capone era.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Al Capone era."
    },
    {
        "slug": "al-capone-era-concepts",
        "name": "Al Capone era concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Al Capone era.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Al Capone era readable as a lore graph."
    },
    {
        "slug": "al-capone-era-eras",
        "name": "Al Capone era eras",
        "type": "event",
        "short_description": "Periodization for Al Capone era.",
        "description": "Named eras and phases that help readers track how Al Capone era changes across time."
    },
    {
        "slug": "al-capone-era-works",
        "name": "Al Capone era works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Al Capone era.",
        "description": "Primary works and adaptations through which most audiences encounter Al Capone era."
    },
    {
        "slug": "al-capone-era-symbols",
        "name": "Al Capone era symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Al Capone era.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Al Capone era."
    },
    {
        "slug": "al-capone-era-controversies",
        "name": "Al Capone era controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Al Capone era.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Al Capone era argumentative."
    },
    {
        "slug": "al-capone-era-sources",
        "name": "Al Capone era sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Al Capone era.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Al Capone era."
    },
    {
        "slug": "al-capone-era-geography",
        "name": "Al Capone era geography",
        "type": "place",
        "short_description": "Broader geographic framing for Al Capone era.",
        "description": "Regions, routes, and spatial systems that situate Al Capone era beyond single named places."
    },
    {
        "slug": "al-capone-era-legacy",
        "name": "Al Capone era legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Al Capone era.",
        "description": "How Al Capone era continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "al-capone-era-practices",
        "name": "Al Capone era practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Al Capone era.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Al Capone era."
    },
    {
        "slug": "al-capone-era-entry-1",
        "name": "Al Capone era entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-2",
        "name": "Al Capone era entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-3",
        "name": "Al Capone era entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-4",
        "name": "Al Capone era entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-5",
        "name": "Al Capone era entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-6",
        "name": "Al Capone era entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-7",
        "name": "Al Capone era entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-8",
        "name": "Al Capone era entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-9",
        "name": "Al Capone era entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-10",
        "name": "Al Capone era entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-11",
        "name": "Al Capone era entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-12",
        "name": "Al Capone era entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-13",
        "name": "Al Capone era entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-14",
        "name": "Al Capone era entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-15",
        "name": "Al Capone era entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-16",
        "name": "Al Capone era entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-17",
        "name": "Al Capone era entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-18",
        "name": "Al Capone era entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-19",
        "name": "Al Capone era entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-20",
        "name": "Al Capone era entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-21",
        "name": "Al Capone era entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-22",
        "name": "Al Capone era entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-23",
        "name": "Al Capone era entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "al-capone-era-entry-24",
        "name": "Al Capone era entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Al Capone era.",
        "description": "A supporting encyclopedia entry in the Al Capone era subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "al-capone-era",
        "al-capone-era-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "al-capone-era",
        "al-capone-era-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "al-capone-era",
        "al-capone-era-places",
        "contains",
        "Al Capone era places is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-events",
        "contains",
        "Al Capone era events is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-objects",
        "contains",
        "Al Capone era objects & artifacts is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-factions",
        "contains",
        "Al Capone era factions & groups is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-concepts",
        "contains",
        "Al Capone era concepts is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-eras",
        "contains",
        "Al Capone era eras is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-works",
        "contains",
        "Al Capone era works & media is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-symbols",
        "contains",
        "Al Capone era symbols is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-controversies",
        "contains",
        "Al Capone era controversies is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-sources",
        "contains",
        "Al Capone era sources is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-geography",
        "contains",
        "Al Capone era geography is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-legacy",
        "contains",
        "Al Capone era legacy is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-practices",
        "contains",
        "Al Capone era practices is a primary trailhead under Al Capone era.",
        0.88,
        0.82
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-1",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-2",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-3",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-4",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-5",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-6",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-7",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-8",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-9",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-10",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-11",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-12",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-13",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-14",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-15",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-16",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-17",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-18",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-19",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-20",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-21",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-22",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-23",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ],
    [
        "al-capone-era",
        "al-capone-era-entry-24",
        "contains",
        "Supporting entry under Al Capone era.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
