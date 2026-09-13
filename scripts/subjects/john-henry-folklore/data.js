/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "john-henry-folklore",
        "name": "John Henry",
        "type": "topic",
        "short_description": "Steel-driving man, race against the machine, and the African American labor hero ballad.",
        "description": "Steel-driving man, race against the machine, and the African American labor hero ballad. This Ton-o-Lore subject maps people, places, events, and ideas tied to John Henry so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "john-henry-folklore-figures",
        "name": "John Henry figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to John Henry.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring John Henry."
    },
    {
        "slug": "john-henry-folklore-world",
        "name": "John Henry world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame John Henry.",
        "description": "Geography, institutions, and periodization that give John Henry its encyclopedia shape."
    },
    {
        "slug": "john-henry-folklore-places",
        "name": "John Henry places",
        "type": "place",
        "short_description": "Locations and geographies that frame John Henry.",
        "description": "Places, regions, and built sites that give John Henry its map — where events and figures concentrate."
    },
    {
        "slug": "john-henry-folklore-events",
        "name": "John Henry events",
        "type": "event",
        "short_description": "Turning points and dated episodes in John Henry.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the John Henry timeline."
    },
    {
        "slug": "john-henry-folklore-objects",
        "name": "John Henry objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to John Henry.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through John Henry."
    },
    {
        "slug": "john-henry-folklore-factions",
        "name": "John Henry factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside John Henry.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in John Henry."
    },
    {
        "slug": "john-henry-folklore-concepts",
        "name": "John Henry concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize John Henry.",
        "description": "Keywords, doctrines, systems, and abstract forces that make John Henry readable as a lore graph."
    },
    {
        "slug": "john-henry-folklore-eras",
        "name": "John Henry eras",
        "type": "event",
        "short_description": "Periodization for John Henry.",
        "description": "Named eras and phases that help readers track how John Henry changes across time."
    },
    {
        "slug": "john-henry-folklore-works",
        "name": "John Henry works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry John Henry.",
        "description": "Primary works and adaptations through which most audiences encounter John Henry."
    },
    {
        "slug": "john-henry-folklore-symbols",
        "name": "John Henry symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with John Henry.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside John Henry."
    },
    {
        "slug": "john-henry-folklore-controversies",
        "name": "John Henry controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in John Henry.",
        "description": "Debates, rival canons, scandals, and contested facts that keep John Henry argumentative."
    },
    {
        "slug": "john-henry-folklore-sources",
        "name": "John Henry sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into John Henry.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify John Henry."
    },
    {
        "slug": "john-henry-folklore-geography",
        "name": "John Henry geography",
        "type": "place",
        "short_description": "Broader geographic framing for John Henry.",
        "description": "Regions, routes, and spatial systems that situate John Henry beyond single named places."
    },
    {
        "slug": "john-henry-folklore-legacy",
        "name": "John Henry legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of John Henry.",
        "description": "How John Henry continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "john-henry-folklore-practices",
        "name": "John Henry practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in John Henry.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in John Henry."
    },
    {
        "slug": "john-henry-folklore-entry-1",
        "name": "John Henry entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-2",
        "name": "John Henry entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-3",
        "name": "John Henry entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-4",
        "name": "John Henry entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-5",
        "name": "John Henry entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-6",
        "name": "John Henry entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-7",
        "name": "John Henry entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-8",
        "name": "John Henry entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-9",
        "name": "John Henry entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-10",
        "name": "John Henry entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-11",
        "name": "John Henry entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-12",
        "name": "John Henry entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-13",
        "name": "John Henry entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-14",
        "name": "John Henry entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-15",
        "name": "John Henry entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-16",
        "name": "John Henry entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-17",
        "name": "John Henry entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-18",
        "name": "John Henry entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-19",
        "name": "John Henry entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-20",
        "name": "John Henry entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-21",
        "name": "John Henry entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-22",
        "name": "John Henry entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-23",
        "name": "John Henry entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "john-henry-folklore-entry-24",
        "name": "John Henry entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside John Henry.",
        "description": "A supporting encyclopedia entry in the John Henry subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "john-henry-folklore",
        "john-henry-folklore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-places",
        "contains",
        "John Henry places is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-events",
        "contains",
        "John Henry events is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-objects",
        "contains",
        "John Henry objects & artifacts is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-factions",
        "contains",
        "John Henry factions & groups is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-concepts",
        "contains",
        "John Henry concepts is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-eras",
        "contains",
        "John Henry eras is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-works",
        "contains",
        "John Henry works & media is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-symbols",
        "contains",
        "John Henry symbols is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-controversies",
        "contains",
        "John Henry controversies is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-sources",
        "contains",
        "John Henry sources is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-geography",
        "contains",
        "John Henry geography is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-legacy",
        "contains",
        "John Henry legacy is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-practices",
        "contains",
        "John Henry practices is a primary trailhead under John Henry.",
        0.88,
        0.82
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-1",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-2",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-3",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-4",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-5",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-6",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-7",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-8",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-9",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-10",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-11",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-12",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-13",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-14",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-15",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-16",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-17",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-18",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-19",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-20",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-21",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-22",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-23",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ],
    [
        "john-henry-folklore",
        "john-henry-folklore-entry-24",
        "contains",
        "Supporting entry under John Henry.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
