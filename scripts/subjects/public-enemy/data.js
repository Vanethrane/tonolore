/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "public-enemy",
        "name": "Public Enemy",
        "type": "topic",
        "short_description": "Bomb-squad production and political storytelling that made hip-hop a public square.",
        "description": "Bomb-squad production and political storytelling that made hip-hop a public square. This Ton-o-Lore subject maps people, works, places, and ideas tied to Public Enemy so readers can follow long-tail connections across the hip-hop tradition."
    },
    {
        "slug": "public-enemy-catalog",
        "name": "Public Enemy catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Public Enemy.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Public Enemy in the hip-hop tradition."
    },
    {
        "slug": "public-enemy-era",
        "name": "Public Enemy eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Public Enemy story.",
        "description": "Periodization helps encyclopedia readers track how Public Enemy changed sound, lineup, or public myth across decades of hip-hop history."
    },
    {
        "slug": "public-enemy-figures",
        "name": "Public Enemy figures",
        "type": "topic",
        "short_description": "People and named forces central to Public Enemy.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Public Enemy."
    },
    {
        "slug": "public-enemy-places",
        "name": "Public Enemy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Public Enemy.",
        "description": "Places, regions, and built sites that give Public Enemy its map — where events and figures concentrate."
    },
    {
        "slug": "public-enemy-events",
        "name": "Public Enemy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Public Enemy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Public Enemy timeline."
    },
    {
        "slug": "public-enemy-objects",
        "name": "Public Enemy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Public Enemy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Public Enemy."
    },
    {
        "slug": "public-enemy-factions",
        "name": "Public Enemy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Public Enemy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Public Enemy."
    },
    {
        "slug": "public-enemy-concepts",
        "name": "Public Enemy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Public Enemy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Public Enemy readable as a lore graph."
    },
    {
        "slug": "public-enemy-eras",
        "name": "Public Enemy eras",
        "type": "event",
        "short_description": "Periodization for Public Enemy.",
        "description": "Named eras and phases that help readers track how Public Enemy changes across time."
    },
    {
        "slug": "public-enemy-works",
        "name": "Public Enemy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Public Enemy.",
        "description": "Primary works and adaptations through which most audiences encounter Public Enemy."
    },
    {
        "slug": "public-enemy-symbols",
        "name": "Public Enemy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Public Enemy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Public Enemy."
    },
    {
        "slug": "public-enemy-controversies",
        "name": "Public Enemy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Public Enemy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Public Enemy argumentative."
    },
    {
        "slug": "public-enemy-sources",
        "name": "Public Enemy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Public Enemy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Public Enemy."
    },
    {
        "slug": "public-enemy-geography",
        "name": "Public Enemy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Public Enemy.",
        "description": "Regions, routes, and spatial systems that situate Public Enemy beyond single named places."
    },
    {
        "slug": "public-enemy-legacy",
        "name": "Public Enemy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Public Enemy.",
        "description": "How Public Enemy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "public-enemy-practices",
        "name": "Public Enemy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Public Enemy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Public Enemy."
    },
    {
        "slug": "public-enemy-entry-1",
        "name": "Public Enemy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-2",
        "name": "Public Enemy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-3",
        "name": "Public Enemy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-4",
        "name": "Public Enemy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-5",
        "name": "Public Enemy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-6",
        "name": "Public Enemy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-7",
        "name": "Public Enemy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-8",
        "name": "Public Enemy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-9",
        "name": "Public Enemy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-10",
        "name": "Public Enemy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-11",
        "name": "Public Enemy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-12",
        "name": "Public Enemy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-13",
        "name": "Public Enemy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-14",
        "name": "Public Enemy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-15",
        "name": "Public Enemy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-16",
        "name": "Public Enemy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-17",
        "name": "Public Enemy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-18",
        "name": "Public Enemy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-19",
        "name": "Public Enemy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-20",
        "name": "Public Enemy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-21",
        "name": "Public Enemy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-22",
        "name": "Public Enemy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "public-enemy-entry-23",
        "name": "Public Enemy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Public Enemy.",
        "description": "A supporting encyclopedia entry in the Public Enemy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "public-enemy",
        "public-enemy-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "public-enemy",
        "public-enemy-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "public-enemy",
        "public-enemy-figures",
        "contains",
        "Public Enemy figures is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-places",
        "contains",
        "Public Enemy places is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-events",
        "contains",
        "Public Enemy events is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-objects",
        "contains",
        "Public Enemy objects & artifacts is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-factions",
        "contains",
        "Public Enemy factions & groups is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-concepts",
        "contains",
        "Public Enemy concepts is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-eras",
        "contains",
        "Public Enemy eras is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-works",
        "contains",
        "Public Enemy works & media is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-symbols",
        "contains",
        "Public Enemy symbols is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-controversies",
        "contains",
        "Public Enemy controversies is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-sources",
        "contains",
        "Public Enemy sources is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-geography",
        "contains",
        "Public Enemy geography is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-legacy",
        "contains",
        "Public Enemy legacy is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-practices",
        "contains",
        "Public Enemy practices is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-entry-1",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-2",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-3",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-4",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-5",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-6",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-7",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-8",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-9",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-10",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-11",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-12",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-13",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-14",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-15",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-16",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-17",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-18",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-19",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-20",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-21",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-22",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ],
    [
        "public-enemy",
        "public-enemy-entry-23",
        "contains",
        "Supporting entry under Public Enemy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
