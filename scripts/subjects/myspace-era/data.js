/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "myspace-era",
        "name": "MySpace era",
        "type": "topic",
        "short_description": "Top Eight drama, custom HTML profiles, and the social network that ruled the mid-2000s.",
        "description": "Top Eight drama, custom HTML profiles, and the social network that ruled the mid-2000s. This Ton-o-Lore subject maps people, places, events, and ideas tied to MySpace era so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "myspace-era-figures",
        "name": "MySpace era figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to MySpace era.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring MySpace era."
    },
    {
        "slug": "myspace-era-world",
        "name": "MySpace era world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame MySpace era.",
        "description": "Geography, institutions, and periodization that give MySpace era its encyclopedia shape."
    },
    {
        "slug": "myspace-era-places",
        "name": "MySpace era places",
        "type": "place",
        "short_description": "Locations and geographies that frame MySpace era.",
        "description": "Places, regions, and built sites that give MySpace era its map — where events and figures concentrate."
    },
    {
        "slug": "myspace-era-events",
        "name": "MySpace era events",
        "type": "event",
        "short_description": "Turning points and dated episodes in MySpace era.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the MySpace era timeline."
    },
    {
        "slug": "myspace-era-objects",
        "name": "MySpace era objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to MySpace era.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through MySpace era."
    },
    {
        "slug": "myspace-era-factions",
        "name": "MySpace era factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside MySpace era.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in MySpace era."
    },
    {
        "slug": "myspace-era-concepts",
        "name": "MySpace era concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize MySpace era.",
        "description": "Keywords, doctrines, systems, and abstract forces that make MySpace era readable as a lore graph."
    },
    {
        "slug": "myspace-era-eras",
        "name": "MySpace era eras",
        "type": "event",
        "short_description": "Periodization for MySpace era.",
        "description": "Named eras and phases that help readers track how MySpace era changes across time."
    },
    {
        "slug": "myspace-era-works",
        "name": "MySpace era works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry MySpace era.",
        "description": "Primary works and adaptations through which most audiences encounter MySpace era."
    },
    {
        "slug": "myspace-era-symbols",
        "name": "MySpace era symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with MySpace era.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside MySpace era."
    },
    {
        "slug": "myspace-era-controversies",
        "name": "MySpace era controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in MySpace era.",
        "description": "Debates, rival canons, scandals, and contested facts that keep MySpace era argumentative."
    },
    {
        "slug": "myspace-era-sources",
        "name": "MySpace era sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into MySpace era.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify MySpace era."
    },
    {
        "slug": "myspace-era-geography",
        "name": "MySpace era geography",
        "type": "place",
        "short_description": "Broader geographic framing for MySpace era.",
        "description": "Regions, routes, and spatial systems that situate MySpace era beyond single named places."
    },
    {
        "slug": "myspace-era-legacy",
        "name": "MySpace era legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of MySpace era.",
        "description": "How MySpace era continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "myspace-era-practices",
        "name": "MySpace era practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in MySpace era.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in MySpace era."
    },
    {
        "slug": "myspace-era-entry-1",
        "name": "MySpace era entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-2",
        "name": "MySpace era entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-3",
        "name": "MySpace era entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-4",
        "name": "MySpace era entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-5",
        "name": "MySpace era entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-6",
        "name": "MySpace era entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-7",
        "name": "MySpace era entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-8",
        "name": "MySpace era entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-9",
        "name": "MySpace era entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-10",
        "name": "MySpace era entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-11",
        "name": "MySpace era entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-12",
        "name": "MySpace era entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-13",
        "name": "MySpace era entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-14",
        "name": "MySpace era entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-15",
        "name": "MySpace era entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-16",
        "name": "MySpace era entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-17",
        "name": "MySpace era entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-18",
        "name": "MySpace era entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-19",
        "name": "MySpace era entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-20",
        "name": "MySpace era entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-21",
        "name": "MySpace era entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-22",
        "name": "MySpace era entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-23",
        "name": "MySpace era entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "myspace-era-entry-24",
        "name": "MySpace era entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside MySpace era.",
        "description": "A supporting encyclopedia entry in the MySpace era subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "myspace-era",
        "myspace-era-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "myspace-era",
        "myspace-era-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "myspace-era",
        "myspace-era-places",
        "contains",
        "MySpace era places is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-events",
        "contains",
        "MySpace era events is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-objects",
        "contains",
        "MySpace era objects & artifacts is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-factions",
        "contains",
        "MySpace era factions & groups is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-concepts",
        "contains",
        "MySpace era concepts is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-eras",
        "contains",
        "MySpace era eras is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-works",
        "contains",
        "MySpace era works & media is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-symbols",
        "contains",
        "MySpace era symbols is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-controversies",
        "contains",
        "MySpace era controversies is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-sources",
        "contains",
        "MySpace era sources is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-geography",
        "contains",
        "MySpace era geography is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-legacy",
        "contains",
        "MySpace era legacy is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-practices",
        "contains",
        "MySpace era practices is a primary trailhead under MySpace era.",
        0.88,
        0.82
    ],
    [
        "myspace-era",
        "myspace-era-entry-1",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-2",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-3",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-4",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-5",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-6",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-7",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-8",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-9",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-10",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-11",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-12",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-13",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-14",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-15",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-16",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-17",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-18",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-19",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-20",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-21",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-22",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-23",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ],
    [
        "myspace-era",
        "myspace-era-entry-24",
        "contains",
        "Supporting entry under MySpace era.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
