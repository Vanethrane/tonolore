/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "under-night-in-birth",
        "name": "Under Night In-Birth",
        "type": "topic",
        "short_description": "Hollow Night, EXS powers, and the indie-rooted anime fighter with cult competitive depth.",
        "description": "Hollow Night, EXS powers, and the indie-rooted anime fighter with cult competitive depth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Under Night In-Birth so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "under-night-in-birth-figures",
        "name": "Under Night In-Birth figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Under Night In-Birth.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Under Night In-Birth."
    },
    {
        "slug": "under-night-in-birth-world",
        "name": "Under Night In-Birth world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Under Night In-Birth.",
        "description": "Geography, institutions, and periodization that give Under Night In-Birth its encyclopedia shape."
    },
    {
        "slug": "under-night-in-birth-places",
        "name": "Under Night In-Birth places",
        "type": "place",
        "short_description": "Locations and geographies that frame Under Night In-Birth.",
        "description": "Places, regions, and built sites that give Under Night In-Birth its map — where events and figures concentrate."
    },
    {
        "slug": "under-night-in-birth-events",
        "name": "Under Night In-Birth events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Under Night In-Birth.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Under Night In-Birth timeline."
    },
    {
        "slug": "under-night-in-birth-objects",
        "name": "Under Night In-Birth objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Under Night In-Birth.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Under Night In-Birth."
    },
    {
        "slug": "under-night-in-birth-factions",
        "name": "Under Night In-Birth factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Under Night In-Birth.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Under Night In-Birth."
    },
    {
        "slug": "under-night-in-birth-concepts",
        "name": "Under Night In-Birth concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Under Night In-Birth.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Under Night In-Birth readable as a lore graph."
    },
    {
        "slug": "under-night-in-birth-eras",
        "name": "Under Night In-Birth eras",
        "type": "event",
        "short_description": "Periodization for Under Night In-Birth.",
        "description": "Named eras and phases that help readers track how Under Night In-Birth changes across time."
    },
    {
        "slug": "under-night-in-birth-works",
        "name": "Under Night In-Birth works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Under Night In-Birth.",
        "description": "Primary works and adaptations through which most audiences encounter Under Night In-Birth."
    },
    {
        "slug": "under-night-in-birth-symbols",
        "name": "Under Night In-Birth symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Under Night In-Birth.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Under Night In-Birth."
    },
    {
        "slug": "under-night-in-birth-controversies",
        "name": "Under Night In-Birth controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Under Night In-Birth.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Under Night In-Birth argumentative."
    },
    {
        "slug": "under-night-in-birth-sources",
        "name": "Under Night In-Birth sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Under Night In-Birth.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Under Night In-Birth."
    },
    {
        "slug": "under-night-in-birth-geography",
        "name": "Under Night In-Birth geography",
        "type": "place",
        "short_description": "Broader geographic framing for Under Night In-Birth.",
        "description": "Regions, routes, and spatial systems that situate Under Night In-Birth beyond single named places."
    },
    {
        "slug": "under-night-in-birth-legacy",
        "name": "Under Night In-Birth legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Under Night In-Birth.",
        "description": "How Under Night In-Birth continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "under-night-in-birth-practices",
        "name": "Under Night In-Birth practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Under Night In-Birth.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Under Night In-Birth."
    },
    {
        "slug": "under-night-in-birth-entry-1",
        "name": "Under Night In-Birth entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-2",
        "name": "Under Night In-Birth entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-3",
        "name": "Under Night In-Birth entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-4",
        "name": "Under Night In-Birth entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-5",
        "name": "Under Night In-Birth entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-6",
        "name": "Under Night In-Birth entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-7",
        "name": "Under Night In-Birth entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-8",
        "name": "Under Night In-Birth entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-9",
        "name": "Under Night In-Birth entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-10",
        "name": "Under Night In-Birth entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-11",
        "name": "Under Night In-Birth entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-12",
        "name": "Under Night In-Birth entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-13",
        "name": "Under Night In-Birth entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-14",
        "name": "Under Night In-Birth entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-15",
        "name": "Under Night In-Birth entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-16",
        "name": "Under Night In-Birth entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-17",
        "name": "Under Night In-Birth entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-18",
        "name": "Under Night In-Birth entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-19",
        "name": "Under Night In-Birth entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-20",
        "name": "Under Night In-Birth entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-21",
        "name": "Under Night In-Birth entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-22",
        "name": "Under Night In-Birth entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-23",
        "name": "Under Night In-Birth entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "under-night-in-birth-entry-24",
        "name": "Under Night In-Birth entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Under Night In-Birth.",
        "description": "A supporting encyclopedia entry in the Under Night In-Birth subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "under-night-in-birth",
        "under-night-in-birth-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-places",
        "contains",
        "Under Night In-Birth places is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-events",
        "contains",
        "Under Night In-Birth events is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-objects",
        "contains",
        "Under Night In-Birth objects & artifacts is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-factions",
        "contains",
        "Under Night In-Birth factions & groups is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-concepts",
        "contains",
        "Under Night In-Birth concepts is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-eras",
        "contains",
        "Under Night In-Birth eras is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-works",
        "contains",
        "Under Night In-Birth works & media is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-symbols",
        "contains",
        "Under Night In-Birth symbols is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-controversies",
        "contains",
        "Under Night In-Birth controversies is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-sources",
        "contains",
        "Under Night In-Birth sources is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-geography",
        "contains",
        "Under Night In-Birth geography is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-legacy",
        "contains",
        "Under Night In-Birth legacy is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-practices",
        "contains",
        "Under Night In-Birth practices is a primary trailhead under Under Night In-Birth.",
        0.88,
        0.82
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-1",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-2",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-3",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-4",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-5",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-6",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-7",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-8",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-9",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-10",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-11",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-12",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-13",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-14",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-15",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-16",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-17",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-18",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-19",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-20",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-21",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-22",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-23",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ],
    [
        "under-night-in-birth",
        "under-night-in-birth-entry-24",
        "contains",
        "Supporting entry under Under Night In-Birth.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
