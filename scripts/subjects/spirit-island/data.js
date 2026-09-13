/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spirit-island",
        "name": "Spirit Island",
        "type": "topic",
        "short_description": "Co-op spirits defending an island from colonizers — inversion of settler board-game tropes.",
        "description": "Co-op spirits defending an island from colonizers — inversion of settler board-game tropes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Spirit Island so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "spirit-island-figures",
        "name": "Spirit Island figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Spirit Island.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Spirit Island."
    },
    {
        "slug": "spirit-island-world",
        "name": "Spirit Island world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Spirit Island.",
        "description": "Geography, institutions, and periodization that give Spirit Island its encyclopedia shape."
    },
    {
        "slug": "spirit-island-places",
        "name": "Spirit Island places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spirit Island.",
        "description": "Places, regions, and built sites that give Spirit Island its map — where events and figures concentrate."
    },
    {
        "slug": "spirit-island-events",
        "name": "Spirit Island events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spirit Island.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spirit Island timeline."
    },
    {
        "slug": "spirit-island-objects",
        "name": "Spirit Island objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spirit Island.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spirit Island."
    },
    {
        "slug": "spirit-island-factions",
        "name": "Spirit Island factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spirit Island.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spirit Island."
    },
    {
        "slug": "spirit-island-concepts",
        "name": "Spirit Island concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spirit Island.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spirit Island readable as a lore graph."
    },
    {
        "slug": "spirit-island-eras",
        "name": "Spirit Island eras",
        "type": "event",
        "short_description": "Periodization for Spirit Island.",
        "description": "Named eras and phases that help readers track how Spirit Island changes across time."
    },
    {
        "slug": "spirit-island-works",
        "name": "Spirit Island works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spirit Island.",
        "description": "Primary works and adaptations through which most audiences encounter Spirit Island."
    },
    {
        "slug": "spirit-island-symbols",
        "name": "Spirit Island symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spirit Island.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spirit Island."
    },
    {
        "slug": "spirit-island-controversies",
        "name": "Spirit Island controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spirit Island.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spirit Island argumentative."
    },
    {
        "slug": "spirit-island-sources",
        "name": "Spirit Island sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spirit Island.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spirit Island."
    },
    {
        "slug": "spirit-island-geography",
        "name": "Spirit Island geography",
        "type": "place",
        "short_description": "Broader geographic framing for Spirit Island.",
        "description": "Regions, routes, and spatial systems that situate Spirit Island beyond single named places."
    },
    {
        "slug": "spirit-island-legacy",
        "name": "Spirit Island legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Spirit Island.",
        "description": "How Spirit Island continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "spirit-island-practices",
        "name": "Spirit Island practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Spirit Island.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Spirit Island."
    },
    {
        "slug": "spirit-island-entry-1",
        "name": "Spirit Island entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-2",
        "name": "Spirit Island entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-3",
        "name": "Spirit Island entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-4",
        "name": "Spirit Island entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-5",
        "name": "Spirit Island entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-6",
        "name": "Spirit Island entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-7",
        "name": "Spirit Island entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-8",
        "name": "Spirit Island entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-9",
        "name": "Spirit Island entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-10",
        "name": "Spirit Island entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-11",
        "name": "Spirit Island entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-12",
        "name": "Spirit Island entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-13",
        "name": "Spirit Island entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-14",
        "name": "Spirit Island entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-15",
        "name": "Spirit Island entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-16",
        "name": "Spirit Island entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-17",
        "name": "Spirit Island entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-18",
        "name": "Spirit Island entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-19",
        "name": "Spirit Island entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-20",
        "name": "Spirit Island entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-21",
        "name": "Spirit Island entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-22",
        "name": "Spirit Island entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-23",
        "name": "Spirit Island entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spirit-island-entry-24",
        "name": "Spirit Island entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spirit Island.",
        "description": "A supporting encyclopedia entry in the Spirit Island subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "spirit-island",
        "spirit-island-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spirit-island",
        "spirit-island-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spirit-island",
        "spirit-island-places",
        "contains",
        "Spirit Island places is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-events",
        "contains",
        "Spirit Island events is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-objects",
        "contains",
        "Spirit Island objects & artifacts is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-factions",
        "contains",
        "Spirit Island factions & groups is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-concepts",
        "contains",
        "Spirit Island concepts is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-eras",
        "contains",
        "Spirit Island eras is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-works",
        "contains",
        "Spirit Island works & media is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-symbols",
        "contains",
        "Spirit Island symbols is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-controversies",
        "contains",
        "Spirit Island controversies is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-sources",
        "contains",
        "Spirit Island sources is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-geography",
        "contains",
        "Spirit Island geography is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-legacy",
        "contains",
        "Spirit Island legacy is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-practices",
        "contains",
        "Spirit Island practices is a primary trailhead under Spirit Island.",
        0.88,
        0.82
    ],
    [
        "spirit-island",
        "spirit-island-entry-1",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-2",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-3",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-4",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-5",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-6",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-7",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-8",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-9",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-10",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-11",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-12",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-13",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-14",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-15",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-16",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-17",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-18",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-19",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-20",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-21",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-22",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-23",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ],
    [
        "spirit-island",
        "spirit-island-entry-24",
        "contains",
        "Supporting entry under Spirit Island.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
