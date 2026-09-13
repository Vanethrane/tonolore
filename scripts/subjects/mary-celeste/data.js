/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mary-celeste",
        "name": "Mary Celeste",
        "type": "topic",
        "short_description": "Abandoned brigantine, untouched cargo, and the ghost-ship mystery that still invites theories.",
        "description": "Abandoned brigantine, untouched cargo, and the ghost-ship mystery that still invites theories. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mary Celeste so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "mary-celeste-figures",
        "name": "Mary Celeste figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mary Celeste.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mary Celeste."
    },
    {
        "slug": "mary-celeste-world",
        "name": "Mary Celeste world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mary Celeste.",
        "description": "Geography, institutions, and periodization that give Mary Celeste its encyclopedia shape."
    },
    {
        "slug": "mary-celeste-places",
        "name": "Mary Celeste places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mary Celeste.",
        "description": "Places, regions, and built sites that give Mary Celeste its map — where events and figures concentrate."
    },
    {
        "slug": "mary-celeste-events",
        "name": "Mary Celeste events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mary Celeste.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mary Celeste timeline."
    },
    {
        "slug": "mary-celeste-objects",
        "name": "Mary Celeste objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mary Celeste.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mary Celeste."
    },
    {
        "slug": "mary-celeste-factions",
        "name": "Mary Celeste factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mary Celeste.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mary Celeste."
    },
    {
        "slug": "mary-celeste-concepts",
        "name": "Mary Celeste concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mary Celeste.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mary Celeste readable as a lore graph."
    },
    {
        "slug": "mary-celeste-eras",
        "name": "Mary Celeste eras",
        "type": "event",
        "short_description": "Periodization for Mary Celeste.",
        "description": "Named eras and phases that help readers track how Mary Celeste changes across time."
    },
    {
        "slug": "mary-celeste-works",
        "name": "Mary Celeste works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mary Celeste.",
        "description": "Primary works and adaptations through which most audiences encounter Mary Celeste."
    },
    {
        "slug": "mary-celeste-symbols",
        "name": "Mary Celeste symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mary Celeste.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mary Celeste."
    },
    {
        "slug": "mary-celeste-controversies",
        "name": "Mary Celeste controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mary Celeste.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mary Celeste argumentative."
    },
    {
        "slug": "mary-celeste-sources",
        "name": "Mary Celeste sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mary Celeste.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mary Celeste."
    },
    {
        "slug": "mary-celeste-geography",
        "name": "Mary Celeste geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mary Celeste.",
        "description": "Regions, routes, and spatial systems that situate Mary Celeste beyond single named places."
    },
    {
        "slug": "mary-celeste-legacy",
        "name": "Mary Celeste legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mary Celeste.",
        "description": "How Mary Celeste continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mary-celeste-practices",
        "name": "Mary Celeste practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mary Celeste.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mary Celeste."
    },
    {
        "slug": "mary-celeste-entry-1",
        "name": "Mary Celeste entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-2",
        "name": "Mary Celeste entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-3",
        "name": "Mary Celeste entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-4",
        "name": "Mary Celeste entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-5",
        "name": "Mary Celeste entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-6",
        "name": "Mary Celeste entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-7",
        "name": "Mary Celeste entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-8",
        "name": "Mary Celeste entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-9",
        "name": "Mary Celeste entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-10",
        "name": "Mary Celeste entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-11",
        "name": "Mary Celeste entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-12",
        "name": "Mary Celeste entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-13",
        "name": "Mary Celeste entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-14",
        "name": "Mary Celeste entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-15",
        "name": "Mary Celeste entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-16",
        "name": "Mary Celeste entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-17",
        "name": "Mary Celeste entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-18",
        "name": "Mary Celeste entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-19",
        "name": "Mary Celeste entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-20",
        "name": "Mary Celeste entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-21",
        "name": "Mary Celeste entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-22",
        "name": "Mary Celeste entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-23",
        "name": "Mary Celeste entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mary-celeste-entry-24",
        "name": "Mary Celeste entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mary Celeste.",
        "description": "A supporting encyclopedia entry in the Mary Celeste subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mary-celeste",
        "mary-celeste-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mary-celeste",
        "mary-celeste-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mary-celeste",
        "mary-celeste-places",
        "contains",
        "Mary Celeste places is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-events",
        "contains",
        "Mary Celeste events is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-objects",
        "contains",
        "Mary Celeste objects & artifacts is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-factions",
        "contains",
        "Mary Celeste factions & groups is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-concepts",
        "contains",
        "Mary Celeste concepts is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-eras",
        "contains",
        "Mary Celeste eras is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-works",
        "contains",
        "Mary Celeste works & media is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-symbols",
        "contains",
        "Mary Celeste symbols is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-controversies",
        "contains",
        "Mary Celeste controversies is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-sources",
        "contains",
        "Mary Celeste sources is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-geography",
        "contains",
        "Mary Celeste geography is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-legacy",
        "contains",
        "Mary Celeste legacy is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-practices",
        "contains",
        "Mary Celeste practices is a primary trailhead under Mary Celeste.",
        0.88,
        0.82
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-1",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-2",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-3",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-4",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-5",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-6",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-7",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-8",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-9",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-10",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-11",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-12",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-13",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-14",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-15",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-16",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-17",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-18",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-19",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-20",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-21",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-22",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-23",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ],
    [
        "mary-celeste",
        "mary-celeste-entry-24",
        "contains",
        "Supporting entry under Mary Celeste.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
