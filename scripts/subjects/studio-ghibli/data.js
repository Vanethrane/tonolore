/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "studio-ghibli",
        "name": "Studio Ghibli",
        "type": "topic",
        "short_description": "Miyazaki–Takahata worlds, soft magic, and the studio that defined anime cinema abroad.",
        "description": "Miyazaki–Takahata worlds, soft magic, and the studio that defined anime cinema abroad. This Ton-o-Lore subject maps people, places, events, and ideas tied to Studio Ghibli so readers can follow long-tail connections across anime."
    },
    {
        "slug": "studio-ghibli-figures",
        "name": "Studio Ghibli figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Studio Ghibli.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Studio Ghibli."
    },
    {
        "slug": "studio-ghibli-world",
        "name": "Studio Ghibli world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Studio Ghibli.",
        "description": "Geography, institutions, and periodization that give Studio Ghibli its encyclopedia shape."
    },
    {
        "slug": "studio-ghibli-places",
        "name": "Studio Ghibli places",
        "type": "place",
        "short_description": "Locations and geographies that frame Studio Ghibli.",
        "description": "Places, regions, and built sites that give Studio Ghibli its map — where events and figures concentrate."
    },
    {
        "slug": "studio-ghibli-events",
        "name": "Studio Ghibli events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Studio Ghibli.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Studio Ghibli timeline."
    },
    {
        "slug": "studio-ghibli-objects",
        "name": "Studio Ghibli objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Studio Ghibli.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Studio Ghibli."
    },
    {
        "slug": "studio-ghibli-factions",
        "name": "Studio Ghibli factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Studio Ghibli.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Studio Ghibli."
    },
    {
        "slug": "studio-ghibli-concepts",
        "name": "Studio Ghibli concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Studio Ghibli.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Studio Ghibli readable as a lore graph."
    },
    {
        "slug": "studio-ghibli-eras",
        "name": "Studio Ghibli eras",
        "type": "event",
        "short_description": "Periodization for Studio Ghibli.",
        "description": "Named eras and phases that help readers track how Studio Ghibli changes across time."
    },
    {
        "slug": "studio-ghibli-works",
        "name": "Studio Ghibli works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Studio Ghibli.",
        "description": "Primary works and adaptations through which most audiences encounter Studio Ghibli."
    },
    {
        "slug": "studio-ghibli-symbols",
        "name": "Studio Ghibli symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Studio Ghibli.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Studio Ghibli."
    },
    {
        "slug": "studio-ghibli-controversies",
        "name": "Studio Ghibli controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Studio Ghibli.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Studio Ghibli argumentative."
    },
    {
        "slug": "studio-ghibli-sources",
        "name": "Studio Ghibli sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Studio Ghibli.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Studio Ghibli."
    },
    {
        "slug": "studio-ghibli-geography",
        "name": "Studio Ghibli geography",
        "type": "place",
        "short_description": "Broader geographic framing for Studio Ghibli.",
        "description": "Regions, routes, and spatial systems that situate Studio Ghibli beyond single named places."
    },
    {
        "slug": "studio-ghibli-legacy",
        "name": "Studio Ghibli legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Studio Ghibli.",
        "description": "How Studio Ghibli continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "studio-ghibli-practices",
        "name": "Studio Ghibli practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Studio Ghibli.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Studio Ghibli."
    },
    {
        "slug": "studio-ghibli-entry-1",
        "name": "Studio Ghibli entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-2",
        "name": "Studio Ghibli entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-3",
        "name": "Studio Ghibli entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-4",
        "name": "Studio Ghibli entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-5",
        "name": "Studio Ghibli entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-6",
        "name": "Studio Ghibli entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-7",
        "name": "Studio Ghibli entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-8",
        "name": "Studio Ghibli entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-9",
        "name": "Studio Ghibli entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-10",
        "name": "Studio Ghibli entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-11",
        "name": "Studio Ghibli entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-12",
        "name": "Studio Ghibli entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-13",
        "name": "Studio Ghibli entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-14",
        "name": "Studio Ghibli entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-15",
        "name": "Studio Ghibli entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-16",
        "name": "Studio Ghibli entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-17",
        "name": "Studio Ghibli entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-18",
        "name": "Studio Ghibli entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-19",
        "name": "Studio Ghibli entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-20",
        "name": "Studio Ghibli entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-21",
        "name": "Studio Ghibli entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-22",
        "name": "Studio Ghibli entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-23",
        "name": "Studio Ghibli entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "studio-ghibli-entry-24",
        "name": "Studio Ghibli entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Studio Ghibli.",
        "description": "A supporting encyclopedia entry in the Studio Ghibli subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "studio-ghibli",
        "studio-ghibli-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "studio-ghibli",
        "studio-ghibli-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "studio-ghibli",
        "studio-ghibli-places",
        "contains",
        "Studio Ghibli places is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-events",
        "contains",
        "Studio Ghibli events is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-objects",
        "contains",
        "Studio Ghibli objects & artifacts is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-factions",
        "contains",
        "Studio Ghibli factions & groups is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-concepts",
        "contains",
        "Studio Ghibli concepts is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-eras",
        "contains",
        "Studio Ghibli eras is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-works",
        "contains",
        "Studio Ghibli works & media is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-symbols",
        "contains",
        "Studio Ghibli symbols is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-controversies",
        "contains",
        "Studio Ghibli controversies is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-sources",
        "contains",
        "Studio Ghibli sources is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-geography",
        "contains",
        "Studio Ghibli geography is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-legacy",
        "contains",
        "Studio Ghibli legacy is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-practices",
        "contains",
        "Studio Ghibli practices is a primary trailhead under Studio Ghibli.",
        0.88,
        0.82
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-1",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-2",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-3",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-4",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-5",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-6",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-7",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-8",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-9",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-10",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-11",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-12",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-13",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-14",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-15",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-16",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-17",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-18",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-19",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-20",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-21",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-22",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-23",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ],
    [
        "studio-ghibli",
        "studio-ghibli-entry-24",
        "contains",
        "Supporting entry under Studio Ghibli.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
