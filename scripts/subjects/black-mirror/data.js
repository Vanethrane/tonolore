/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "black-mirror",
        "name": "Black Mirror",
        "type": "topic",
        "short_description": "Anthology tech dread, social media nightmares, and the modern Twilight Zone of digital life.",
        "description": "Anthology tech dread, social media nightmares, and the modern Twilight Zone of digital life. This Ton-o-Lore subject maps people, places, events, and ideas tied to Black Mirror so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "black-mirror-figures",
        "name": "Black Mirror figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Black Mirror.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Black Mirror."
    },
    {
        "slug": "black-mirror-world",
        "name": "Black Mirror world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Black Mirror.",
        "description": "Geography, institutions, and periodization that give Black Mirror its encyclopedia shape."
    },
    {
        "slug": "black-mirror-places",
        "name": "Black Mirror places",
        "type": "place",
        "short_description": "Locations and geographies that frame Black Mirror.",
        "description": "Places, regions, and built sites that give Black Mirror its map — where events and figures concentrate."
    },
    {
        "slug": "black-mirror-events",
        "name": "Black Mirror events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Black Mirror.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Black Mirror timeline."
    },
    {
        "slug": "black-mirror-objects",
        "name": "Black Mirror objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Black Mirror.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Black Mirror."
    },
    {
        "slug": "black-mirror-factions",
        "name": "Black Mirror factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Black Mirror.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Black Mirror."
    },
    {
        "slug": "black-mirror-concepts",
        "name": "Black Mirror concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Black Mirror.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Black Mirror readable as a lore graph."
    },
    {
        "slug": "black-mirror-eras",
        "name": "Black Mirror eras",
        "type": "event",
        "short_description": "Periodization for Black Mirror.",
        "description": "Named eras and phases that help readers track how Black Mirror changes across time."
    },
    {
        "slug": "black-mirror-works",
        "name": "Black Mirror works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Black Mirror.",
        "description": "Primary works and adaptations through which most audiences encounter Black Mirror."
    },
    {
        "slug": "black-mirror-symbols",
        "name": "Black Mirror symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Black Mirror.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Black Mirror."
    },
    {
        "slug": "black-mirror-controversies",
        "name": "Black Mirror controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Black Mirror.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Black Mirror argumentative."
    },
    {
        "slug": "black-mirror-sources",
        "name": "Black Mirror sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Black Mirror.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Black Mirror."
    },
    {
        "slug": "black-mirror-geography",
        "name": "Black Mirror geography",
        "type": "place",
        "short_description": "Broader geographic framing for Black Mirror.",
        "description": "Regions, routes, and spatial systems that situate Black Mirror beyond single named places."
    },
    {
        "slug": "black-mirror-legacy",
        "name": "Black Mirror legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Black Mirror.",
        "description": "How Black Mirror continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "black-mirror-practices",
        "name": "Black Mirror practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Black Mirror.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Black Mirror."
    },
    {
        "slug": "black-mirror-entry-1",
        "name": "Black Mirror entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-2",
        "name": "Black Mirror entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-3",
        "name": "Black Mirror entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-4",
        "name": "Black Mirror entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-5",
        "name": "Black Mirror entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-6",
        "name": "Black Mirror entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-7",
        "name": "Black Mirror entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-8",
        "name": "Black Mirror entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-9",
        "name": "Black Mirror entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-10",
        "name": "Black Mirror entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-11",
        "name": "Black Mirror entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-12",
        "name": "Black Mirror entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-13",
        "name": "Black Mirror entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-14",
        "name": "Black Mirror entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-15",
        "name": "Black Mirror entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-16",
        "name": "Black Mirror entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-17",
        "name": "Black Mirror entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-18",
        "name": "Black Mirror entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-19",
        "name": "Black Mirror entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-20",
        "name": "Black Mirror entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-21",
        "name": "Black Mirror entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-22",
        "name": "Black Mirror entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-23",
        "name": "Black Mirror entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "black-mirror-entry-24",
        "name": "Black Mirror entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Black Mirror.",
        "description": "A supporting encyclopedia entry in the Black Mirror subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "black-mirror",
        "black-mirror-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "black-mirror",
        "black-mirror-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "black-mirror",
        "black-mirror-places",
        "contains",
        "Black Mirror places is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-events",
        "contains",
        "Black Mirror events is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-objects",
        "contains",
        "Black Mirror objects & artifacts is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-factions",
        "contains",
        "Black Mirror factions & groups is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-concepts",
        "contains",
        "Black Mirror concepts is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-eras",
        "contains",
        "Black Mirror eras is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-works",
        "contains",
        "Black Mirror works & media is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-symbols",
        "contains",
        "Black Mirror symbols is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-controversies",
        "contains",
        "Black Mirror controversies is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-sources",
        "contains",
        "Black Mirror sources is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-geography",
        "contains",
        "Black Mirror geography is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-legacy",
        "contains",
        "Black Mirror legacy is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-practices",
        "contains",
        "Black Mirror practices is a primary trailhead under Black Mirror.",
        0.88,
        0.82
    ],
    [
        "black-mirror",
        "black-mirror-entry-1",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-2",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-3",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-4",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-5",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-6",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-7",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-8",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-9",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-10",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-11",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-12",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-13",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-14",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-15",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-16",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-17",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-18",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-19",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-20",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-21",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-22",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-23",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ],
    [
        "black-mirror",
        "black-mirror-entry-24",
        "contains",
        "Supporting entry under Black Mirror.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
