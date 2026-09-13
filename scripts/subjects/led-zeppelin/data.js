/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "led-zeppelin",
        "name": "Led Zeppelin",
        "type": "topic",
        "short_description": "Hard-rock architects whose riffs, folklore borrowings, and album lore still structure the genre.",
        "description": "Hard-rock architects whose riffs, folklore borrowings, and album lore still structure the genre. This Ton-o-Lore subject maps people, works, places, and ideas tied to Led Zeppelin so readers can follow long-tail connections across the rock tradition."
    },
    {
        "slug": "led-zeppelin-catalog",
        "name": "Led Zeppelin catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Led Zeppelin.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Led Zeppelin in the rock tradition."
    },
    {
        "slug": "led-zeppelin-era",
        "name": "Led Zeppelin eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Led Zeppelin story.",
        "description": "Periodization helps encyclopedia readers track how Led Zeppelin changed sound, lineup, or public myth across decades of rock history."
    },
    {
        "slug": "led-zeppelin-figures",
        "name": "Led Zeppelin figures",
        "type": "topic",
        "short_description": "People and named forces central to Led Zeppelin.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Led Zeppelin."
    },
    {
        "slug": "led-zeppelin-places",
        "name": "Led Zeppelin places",
        "type": "place",
        "short_description": "Locations and geographies that frame Led Zeppelin.",
        "description": "Places, regions, and built sites that give Led Zeppelin its map — where events and figures concentrate."
    },
    {
        "slug": "led-zeppelin-events",
        "name": "Led Zeppelin events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Led Zeppelin.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Led Zeppelin timeline."
    },
    {
        "slug": "led-zeppelin-objects",
        "name": "Led Zeppelin objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Led Zeppelin.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Led Zeppelin."
    },
    {
        "slug": "led-zeppelin-factions",
        "name": "Led Zeppelin factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Led Zeppelin.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Led Zeppelin."
    },
    {
        "slug": "led-zeppelin-concepts",
        "name": "Led Zeppelin concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Led Zeppelin.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Led Zeppelin readable as a lore graph."
    },
    {
        "slug": "led-zeppelin-eras",
        "name": "Led Zeppelin eras",
        "type": "event",
        "short_description": "Periodization for Led Zeppelin.",
        "description": "Named eras and phases that help readers track how Led Zeppelin changes across time."
    },
    {
        "slug": "led-zeppelin-works",
        "name": "Led Zeppelin works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Led Zeppelin.",
        "description": "Primary works and adaptations through which most audiences encounter Led Zeppelin."
    },
    {
        "slug": "led-zeppelin-symbols",
        "name": "Led Zeppelin symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Led Zeppelin.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Led Zeppelin."
    },
    {
        "slug": "led-zeppelin-controversies",
        "name": "Led Zeppelin controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Led Zeppelin.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Led Zeppelin argumentative."
    },
    {
        "slug": "led-zeppelin-sources",
        "name": "Led Zeppelin sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Led Zeppelin.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Led Zeppelin."
    },
    {
        "slug": "led-zeppelin-geography",
        "name": "Led Zeppelin geography",
        "type": "place",
        "short_description": "Broader geographic framing for Led Zeppelin.",
        "description": "Regions, routes, and spatial systems that situate Led Zeppelin beyond single named places."
    },
    {
        "slug": "led-zeppelin-legacy",
        "name": "Led Zeppelin legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Led Zeppelin.",
        "description": "How Led Zeppelin continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "led-zeppelin-practices",
        "name": "Led Zeppelin practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Led Zeppelin.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Led Zeppelin."
    },
    {
        "slug": "led-zeppelin-entry-1",
        "name": "Led Zeppelin entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-2",
        "name": "Led Zeppelin entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-3",
        "name": "Led Zeppelin entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-4",
        "name": "Led Zeppelin entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-5",
        "name": "Led Zeppelin entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-6",
        "name": "Led Zeppelin entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-7",
        "name": "Led Zeppelin entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-8",
        "name": "Led Zeppelin entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-9",
        "name": "Led Zeppelin entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-10",
        "name": "Led Zeppelin entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-11",
        "name": "Led Zeppelin entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-12",
        "name": "Led Zeppelin entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-13",
        "name": "Led Zeppelin entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-14",
        "name": "Led Zeppelin entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-15",
        "name": "Led Zeppelin entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-16",
        "name": "Led Zeppelin entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-17",
        "name": "Led Zeppelin entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-18",
        "name": "Led Zeppelin entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-19",
        "name": "Led Zeppelin entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-20",
        "name": "Led Zeppelin entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-21",
        "name": "Led Zeppelin entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-22",
        "name": "Led Zeppelin entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "led-zeppelin-entry-23",
        "name": "Led Zeppelin entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Led Zeppelin.",
        "description": "A supporting encyclopedia entry in the Led Zeppelin subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "led-zeppelin",
        "led-zeppelin-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "led-zeppelin",
        "led-zeppelin-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "led-zeppelin",
        "led-zeppelin-figures",
        "contains",
        "Led Zeppelin figures is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-places",
        "contains",
        "Led Zeppelin places is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-events",
        "contains",
        "Led Zeppelin events is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-objects",
        "contains",
        "Led Zeppelin objects & artifacts is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-factions",
        "contains",
        "Led Zeppelin factions & groups is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-concepts",
        "contains",
        "Led Zeppelin concepts is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-eras",
        "contains",
        "Led Zeppelin eras is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-works",
        "contains",
        "Led Zeppelin works & media is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-symbols",
        "contains",
        "Led Zeppelin symbols is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-controversies",
        "contains",
        "Led Zeppelin controversies is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-sources",
        "contains",
        "Led Zeppelin sources is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-geography",
        "contains",
        "Led Zeppelin geography is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-legacy",
        "contains",
        "Led Zeppelin legacy is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-practices",
        "contains",
        "Led Zeppelin practices is a primary trailhead under Led Zeppelin.",
        0.88,
        0.82
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-1",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-2",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-3",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-4",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-5",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-6",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-7",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-8",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-9",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-10",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-11",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-12",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-13",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-14",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-15",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-16",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-17",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-18",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-19",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-20",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-21",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-22",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ],
    [
        "led-zeppelin",
        "led-zeppelin-entry-23",
        "contains",
        "Supporting entry under Led Zeppelin.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
