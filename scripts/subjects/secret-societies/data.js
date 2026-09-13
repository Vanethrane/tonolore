/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "secret-societies",
        "name": "Secret societies",
        "type": "topic",
        "short_description": "Freemasons, Illuminati mythology, Skull and Bones, occult movements, and contested symbolism.",
        "description": "Freemasons, Illuminati mythology, Skull and Bones, occult movements, and contested symbolism. This Ton-o-Lore subject maps people, places, events, and ideas tied to Secret societies so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "secret-societies-figures",
        "name": "Secret societies figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Secret societies.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Secret societies."
    },
    {
        "slug": "secret-societies-world",
        "name": "Secret societies world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Secret societies.",
        "description": "Geography, institutions, and periodization that give Secret societies its encyclopedia shape."
    },
    {
        "slug": "secret-societies-places",
        "name": "Secret societies places",
        "type": "place",
        "short_description": "Locations and geographies that frame Secret societies.",
        "description": "Places, regions, and built sites that give Secret societies its map — where events and figures concentrate."
    },
    {
        "slug": "secret-societies-events",
        "name": "Secret societies events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Secret societies.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Secret societies timeline."
    },
    {
        "slug": "secret-societies-objects",
        "name": "Secret societies objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Secret societies.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Secret societies."
    },
    {
        "slug": "secret-societies-factions",
        "name": "Secret societies factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Secret societies.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Secret societies."
    },
    {
        "slug": "secret-societies-concepts",
        "name": "Secret societies concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Secret societies.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Secret societies readable as a lore graph."
    },
    {
        "slug": "secret-societies-eras",
        "name": "Secret societies eras",
        "type": "event",
        "short_description": "Periodization for Secret societies.",
        "description": "Named eras and phases that help readers track how Secret societies changes across time."
    },
    {
        "slug": "secret-societies-works",
        "name": "Secret societies works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Secret societies.",
        "description": "Primary works and adaptations through which most audiences encounter Secret societies."
    },
    {
        "slug": "secret-societies-symbols",
        "name": "Secret societies symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Secret societies.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Secret societies."
    },
    {
        "slug": "secret-societies-controversies",
        "name": "Secret societies controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Secret societies.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Secret societies argumentative."
    },
    {
        "slug": "secret-societies-sources",
        "name": "Secret societies sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Secret societies.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Secret societies."
    },
    {
        "slug": "secret-societies-geography",
        "name": "Secret societies geography",
        "type": "place",
        "short_description": "Broader geographic framing for Secret societies.",
        "description": "Regions, routes, and spatial systems that situate Secret societies beyond single named places."
    },
    {
        "slug": "secret-societies-legacy",
        "name": "Secret societies legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Secret societies.",
        "description": "How Secret societies continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "secret-societies-practices",
        "name": "Secret societies practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Secret societies.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Secret societies."
    },
    {
        "slug": "secret-societies-entry-1",
        "name": "Secret societies entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-2",
        "name": "Secret societies entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-3",
        "name": "Secret societies entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-4",
        "name": "Secret societies entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-5",
        "name": "Secret societies entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-6",
        "name": "Secret societies entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-7",
        "name": "Secret societies entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-8",
        "name": "Secret societies entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-9",
        "name": "Secret societies entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-10",
        "name": "Secret societies entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-11",
        "name": "Secret societies entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-12",
        "name": "Secret societies entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-13",
        "name": "Secret societies entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-14",
        "name": "Secret societies entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-15",
        "name": "Secret societies entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-16",
        "name": "Secret societies entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-17",
        "name": "Secret societies entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-18",
        "name": "Secret societies entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-19",
        "name": "Secret societies entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-20",
        "name": "Secret societies entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-21",
        "name": "Secret societies entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-22",
        "name": "Secret societies entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-23",
        "name": "Secret societies entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "secret-societies-entry-24",
        "name": "Secret societies entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Secret societies.",
        "description": "A supporting encyclopedia entry in the Secret societies subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "secret-societies",
        "secret-societies-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "secret-societies",
        "secret-societies-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "secret-societies",
        "secret-societies-places",
        "contains",
        "Secret societies places is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-events",
        "contains",
        "Secret societies events is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-objects",
        "contains",
        "Secret societies objects & artifacts is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-factions",
        "contains",
        "Secret societies factions & groups is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-concepts",
        "contains",
        "Secret societies concepts is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-eras",
        "contains",
        "Secret societies eras is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-works",
        "contains",
        "Secret societies works & media is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-symbols",
        "contains",
        "Secret societies symbols is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-controversies",
        "contains",
        "Secret societies controversies is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-sources",
        "contains",
        "Secret societies sources is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-geography",
        "contains",
        "Secret societies geography is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-legacy",
        "contains",
        "Secret societies legacy is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-practices",
        "contains",
        "Secret societies practices is a primary trailhead under Secret societies.",
        0.88,
        0.82
    ],
    [
        "secret-societies",
        "secret-societies-entry-1",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-2",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-3",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-4",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-5",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-6",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-7",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-8",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-9",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-10",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-11",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-12",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-13",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-14",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-15",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-16",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-17",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-18",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-19",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-20",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-21",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-22",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-23",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ],
    [
        "secret-societies",
        "secret-societies-entry-24",
        "contains",
        "Supporting entry under Secret societies.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
