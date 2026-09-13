/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "famous-unsolved-crimes",
        "name": "Famous unsolved crimes",
        "type": "topic",
        "short_description": "Open cases, suspects, theories, evidence trails, and the mysteries that refuse closure.",
        "description": "Open cases, suspects, theories, evidence trails, and the mysteries that refuse closure. This Ton-o-Lore subject maps people, places, events, and ideas tied to Famous unsolved crimes so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "famous-unsolved-crimes-figures",
        "name": "Famous unsolved crimes figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Famous unsolved crimes.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Famous unsolved crimes."
    },
    {
        "slug": "famous-unsolved-crimes-world",
        "name": "Famous unsolved crimes world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Famous unsolved crimes.",
        "description": "Geography, institutions, and periodization that give Famous unsolved crimes its encyclopedia shape."
    },
    {
        "slug": "famous-unsolved-crimes-places",
        "name": "Famous unsolved crimes places",
        "type": "place",
        "short_description": "Locations and geographies that frame Famous unsolved crimes.",
        "description": "Places, regions, and built sites that give Famous unsolved crimes its map — where events and figures concentrate."
    },
    {
        "slug": "famous-unsolved-crimes-events",
        "name": "Famous unsolved crimes events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Famous unsolved crimes.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Famous unsolved crimes timeline."
    },
    {
        "slug": "famous-unsolved-crimes-objects",
        "name": "Famous unsolved crimes objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Famous unsolved crimes.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Famous unsolved crimes."
    },
    {
        "slug": "famous-unsolved-crimes-factions",
        "name": "Famous unsolved crimes factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Famous unsolved crimes.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Famous unsolved crimes."
    },
    {
        "slug": "famous-unsolved-crimes-concepts",
        "name": "Famous unsolved crimes concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Famous unsolved crimes.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Famous unsolved crimes readable as a lore graph."
    },
    {
        "slug": "famous-unsolved-crimes-eras",
        "name": "Famous unsolved crimes eras",
        "type": "event",
        "short_description": "Periodization for Famous unsolved crimes.",
        "description": "Named eras and phases that help readers track how Famous unsolved crimes changes across time."
    },
    {
        "slug": "famous-unsolved-crimes-works",
        "name": "Famous unsolved crimes works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Famous unsolved crimes.",
        "description": "Primary works and adaptations through which most audiences encounter Famous unsolved crimes."
    },
    {
        "slug": "famous-unsolved-crimes-symbols",
        "name": "Famous unsolved crimes symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Famous unsolved crimes.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Famous unsolved crimes."
    },
    {
        "slug": "famous-unsolved-crimes-controversies",
        "name": "Famous unsolved crimes controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Famous unsolved crimes.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Famous unsolved crimes argumentative."
    },
    {
        "slug": "famous-unsolved-crimes-sources",
        "name": "Famous unsolved crimes sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Famous unsolved crimes.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Famous unsolved crimes."
    },
    {
        "slug": "famous-unsolved-crimes-geography",
        "name": "Famous unsolved crimes geography",
        "type": "place",
        "short_description": "Broader geographic framing for Famous unsolved crimes.",
        "description": "Regions, routes, and spatial systems that situate Famous unsolved crimes beyond single named places."
    },
    {
        "slug": "famous-unsolved-crimes-legacy",
        "name": "Famous unsolved crimes legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Famous unsolved crimes.",
        "description": "How Famous unsolved crimes continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "famous-unsolved-crimes-practices",
        "name": "Famous unsolved crimes practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Famous unsolved crimes.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Famous unsolved crimes."
    },
    {
        "slug": "famous-unsolved-crimes-entry-1",
        "name": "Famous unsolved crimes entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-2",
        "name": "Famous unsolved crimes entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-3",
        "name": "Famous unsolved crimes entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-4",
        "name": "Famous unsolved crimes entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-5",
        "name": "Famous unsolved crimes entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-6",
        "name": "Famous unsolved crimes entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-7",
        "name": "Famous unsolved crimes entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-8",
        "name": "Famous unsolved crimes entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-9",
        "name": "Famous unsolved crimes entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-10",
        "name": "Famous unsolved crimes entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-11",
        "name": "Famous unsolved crimes entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-12",
        "name": "Famous unsolved crimes entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-13",
        "name": "Famous unsolved crimes entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-14",
        "name": "Famous unsolved crimes entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-15",
        "name": "Famous unsolved crimes entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-16",
        "name": "Famous unsolved crimes entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-17",
        "name": "Famous unsolved crimes entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-18",
        "name": "Famous unsolved crimes entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-19",
        "name": "Famous unsolved crimes entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-20",
        "name": "Famous unsolved crimes entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-21",
        "name": "Famous unsolved crimes entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-22",
        "name": "Famous unsolved crimes entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-23",
        "name": "Famous unsolved crimes entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-unsolved-crimes-entry-24",
        "name": "Famous unsolved crimes entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous unsolved crimes.",
        "description": "A supporting encyclopedia entry in the Famous unsolved crimes subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-places",
        "contains",
        "Famous unsolved crimes places is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-events",
        "contains",
        "Famous unsolved crimes events is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-objects",
        "contains",
        "Famous unsolved crimes objects & artifacts is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-factions",
        "contains",
        "Famous unsolved crimes factions & groups is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-concepts",
        "contains",
        "Famous unsolved crimes concepts is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-eras",
        "contains",
        "Famous unsolved crimes eras is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-works",
        "contains",
        "Famous unsolved crimes works & media is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-symbols",
        "contains",
        "Famous unsolved crimes symbols is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-controversies",
        "contains",
        "Famous unsolved crimes controversies is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-sources",
        "contains",
        "Famous unsolved crimes sources is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-geography",
        "contains",
        "Famous unsolved crimes geography is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-legacy",
        "contains",
        "Famous unsolved crimes legacy is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-practices",
        "contains",
        "Famous unsolved crimes practices is a primary trailhead under Famous unsolved crimes.",
        0.88,
        0.82
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-1",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-2",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-3",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-4",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-5",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-6",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-7",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-8",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-9",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-10",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-11",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-12",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-13",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-14",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-15",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-16",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-17",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-18",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-19",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-20",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-21",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-22",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-23",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ],
    [
        "famous-unsolved-crimes",
        "famous-unsolved-crimes-entry-24",
        "contains",
        "Supporting entry under Famous unsolved crimes.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
