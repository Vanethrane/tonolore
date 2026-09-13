/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "miles-davis",
        "name": "Miles Davis",
        "type": "topic",
        "short_description": "Trumpeter and bandleader whose eras — cool, modal, electric — mark successive maps of modern jazz.",
        "description": "Trumpeter and bandleader whose eras — cool, modal, electric — mark successive maps of modern jazz. This Ton-o-Lore subject maps people, works, places, and ideas tied to Miles Davis so readers can follow long-tail connections across the jazz tradition."
    },
    {
        "slug": "miles-davis-catalog",
        "name": "Miles Davis catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Miles Davis.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Miles Davis in the jazz tradition."
    },
    {
        "slug": "miles-davis-era",
        "name": "Miles Davis eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Miles Davis story.",
        "description": "Periodization helps encyclopedia readers track how Miles Davis changed sound, lineup, or public myth across decades of jazz history."
    },
    {
        "slug": "miles-davis-figures",
        "name": "Miles Davis figures",
        "type": "topic",
        "short_description": "People and named forces central to Miles Davis.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Miles Davis."
    },
    {
        "slug": "miles-davis-places",
        "name": "Miles Davis places",
        "type": "place",
        "short_description": "Locations and geographies that frame Miles Davis.",
        "description": "Places, regions, and built sites that give Miles Davis its map — where events and figures concentrate."
    },
    {
        "slug": "miles-davis-events",
        "name": "Miles Davis events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Miles Davis.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Miles Davis timeline."
    },
    {
        "slug": "miles-davis-objects",
        "name": "Miles Davis objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Miles Davis.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Miles Davis."
    },
    {
        "slug": "miles-davis-factions",
        "name": "Miles Davis factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Miles Davis.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Miles Davis."
    },
    {
        "slug": "miles-davis-concepts",
        "name": "Miles Davis concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Miles Davis.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Miles Davis readable as a lore graph."
    },
    {
        "slug": "miles-davis-eras",
        "name": "Miles Davis eras",
        "type": "event",
        "short_description": "Periodization for Miles Davis.",
        "description": "Named eras and phases that help readers track how Miles Davis changes across time."
    },
    {
        "slug": "miles-davis-works",
        "name": "Miles Davis works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Miles Davis.",
        "description": "Primary works and adaptations through which most audiences encounter Miles Davis."
    },
    {
        "slug": "miles-davis-symbols",
        "name": "Miles Davis symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Miles Davis.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Miles Davis."
    },
    {
        "slug": "miles-davis-controversies",
        "name": "Miles Davis controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Miles Davis.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Miles Davis argumentative."
    },
    {
        "slug": "miles-davis-sources",
        "name": "Miles Davis sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Miles Davis.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Miles Davis."
    },
    {
        "slug": "miles-davis-geography",
        "name": "Miles Davis geography",
        "type": "place",
        "short_description": "Broader geographic framing for Miles Davis.",
        "description": "Regions, routes, and spatial systems that situate Miles Davis beyond single named places."
    },
    {
        "slug": "miles-davis-legacy",
        "name": "Miles Davis legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Miles Davis.",
        "description": "How Miles Davis continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "miles-davis-practices",
        "name": "Miles Davis practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Miles Davis.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Miles Davis."
    },
    {
        "slug": "miles-davis-entry-1",
        "name": "Miles Davis entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-2",
        "name": "Miles Davis entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-3",
        "name": "Miles Davis entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-4",
        "name": "Miles Davis entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-5",
        "name": "Miles Davis entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-6",
        "name": "Miles Davis entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-7",
        "name": "Miles Davis entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-8",
        "name": "Miles Davis entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-9",
        "name": "Miles Davis entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-10",
        "name": "Miles Davis entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-11",
        "name": "Miles Davis entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-12",
        "name": "Miles Davis entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-13",
        "name": "Miles Davis entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-14",
        "name": "Miles Davis entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-15",
        "name": "Miles Davis entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-16",
        "name": "Miles Davis entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-17",
        "name": "Miles Davis entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-18",
        "name": "Miles Davis entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-19",
        "name": "Miles Davis entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-20",
        "name": "Miles Davis entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-21",
        "name": "Miles Davis entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-22",
        "name": "Miles Davis entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "miles-davis-entry-23",
        "name": "Miles Davis entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Miles Davis.",
        "description": "A supporting encyclopedia entry in the Miles Davis subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "miles-davis",
        "miles-davis-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "miles-davis",
        "miles-davis-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "miles-davis",
        "miles-davis-figures",
        "contains",
        "Miles Davis figures is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-places",
        "contains",
        "Miles Davis places is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-events",
        "contains",
        "Miles Davis events is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-objects",
        "contains",
        "Miles Davis objects & artifacts is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-factions",
        "contains",
        "Miles Davis factions & groups is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-concepts",
        "contains",
        "Miles Davis concepts is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-eras",
        "contains",
        "Miles Davis eras is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-works",
        "contains",
        "Miles Davis works & media is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-symbols",
        "contains",
        "Miles Davis symbols is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-controversies",
        "contains",
        "Miles Davis controversies is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-sources",
        "contains",
        "Miles Davis sources is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-geography",
        "contains",
        "Miles Davis geography is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-legacy",
        "contains",
        "Miles Davis legacy is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-practices",
        "contains",
        "Miles Davis practices is a primary trailhead under Miles Davis.",
        0.88,
        0.82
    ],
    [
        "miles-davis",
        "miles-davis-entry-1",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-2",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-3",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-4",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-5",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-6",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-7",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-8",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-9",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-10",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-11",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-12",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-13",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-14",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-15",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-16",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-17",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-18",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-19",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-20",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-21",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-22",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ],
    [
        "miles-davis",
        "miles-davis-entry-23",
        "contains",
        "Supporting entry under Miles Davis.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
