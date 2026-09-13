/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "conjuring-universe",
        "name": "The Conjuring Universe",
        "type": "topic",
        "short_description": "Warrens case files, shared hauntings, and the interconnected modern studio horror mythos.",
        "description": "Warrens case files, shared hauntings, and the interconnected modern studio horror mythos. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Conjuring Universe so readers can follow long-tail connections across horror."
    },
    {
        "slug": "conjuring-universe-figures",
        "name": "The Conjuring Universe figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Conjuring Universe.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Conjuring Universe."
    },
    {
        "slug": "conjuring-universe-world",
        "name": "The Conjuring Universe world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Conjuring Universe.",
        "description": "Geography, institutions, and periodization that give The Conjuring Universe its encyclopedia shape."
    },
    {
        "slug": "conjuring-universe-places",
        "name": "The Conjuring Universe places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Conjuring Universe.",
        "description": "Places, regions, and built sites that give The Conjuring Universe its map — where events and figures concentrate."
    },
    {
        "slug": "conjuring-universe-events",
        "name": "The Conjuring Universe events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Conjuring Universe.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Conjuring Universe timeline."
    },
    {
        "slug": "conjuring-universe-objects",
        "name": "The Conjuring Universe objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Conjuring Universe.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Conjuring Universe."
    },
    {
        "slug": "conjuring-universe-factions",
        "name": "The Conjuring Universe factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Conjuring Universe.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Conjuring Universe."
    },
    {
        "slug": "conjuring-universe-concepts",
        "name": "The Conjuring Universe concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Conjuring Universe.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Conjuring Universe readable as a lore graph."
    },
    {
        "slug": "conjuring-universe-eras",
        "name": "The Conjuring Universe eras",
        "type": "event",
        "short_description": "Periodization for The Conjuring Universe.",
        "description": "Named eras and phases that help readers track how The Conjuring Universe changes across time."
    },
    {
        "slug": "conjuring-universe-works",
        "name": "The Conjuring Universe works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Conjuring Universe.",
        "description": "Primary works and adaptations through which most audiences encounter The Conjuring Universe."
    },
    {
        "slug": "conjuring-universe-symbols",
        "name": "The Conjuring Universe symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Conjuring Universe.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Conjuring Universe."
    },
    {
        "slug": "conjuring-universe-controversies",
        "name": "The Conjuring Universe controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Conjuring Universe.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Conjuring Universe argumentative."
    },
    {
        "slug": "conjuring-universe-sources",
        "name": "The Conjuring Universe sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Conjuring Universe.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Conjuring Universe."
    },
    {
        "slug": "conjuring-universe-geography",
        "name": "The Conjuring Universe geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Conjuring Universe.",
        "description": "Regions, routes, and spatial systems that situate The Conjuring Universe beyond single named places."
    },
    {
        "slug": "conjuring-universe-legacy",
        "name": "The Conjuring Universe legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Conjuring Universe.",
        "description": "How The Conjuring Universe continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "conjuring-universe-practices",
        "name": "The Conjuring Universe practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Conjuring Universe.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Conjuring Universe."
    },
    {
        "slug": "conjuring-universe-entry-1",
        "name": "The Conjuring Universe entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-2",
        "name": "The Conjuring Universe entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-3",
        "name": "The Conjuring Universe entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-4",
        "name": "The Conjuring Universe entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-5",
        "name": "The Conjuring Universe entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-6",
        "name": "The Conjuring Universe entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-7",
        "name": "The Conjuring Universe entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-8",
        "name": "The Conjuring Universe entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-9",
        "name": "The Conjuring Universe entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-10",
        "name": "The Conjuring Universe entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-11",
        "name": "The Conjuring Universe entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-12",
        "name": "The Conjuring Universe entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-13",
        "name": "The Conjuring Universe entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-14",
        "name": "The Conjuring Universe entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-15",
        "name": "The Conjuring Universe entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-16",
        "name": "The Conjuring Universe entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-17",
        "name": "The Conjuring Universe entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-18",
        "name": "The Conjuring Universe entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-19",
        "name": "The Conjuring Universe entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-20",
        "name": "The Conjuring Universe entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-21",
        "name": "The Conjuring Universe entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-22",
        "name": "The Conjuring Universe entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-23",
        "name": "The Conjuring Universe entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "conjuring-universe-entry-24",
        "name": "The Conjuring Universe entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Conjuring Universe.",
        "description": "A supporting encyclopedia entry in the The Conjuring Universe subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "conjuring-universe",
        "conjuring-universe-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "conjuring-universe",
        "conjuring-universe-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "conjuring-universe",
        "conjuring-universe-places",
        "contains",
        "The Conjuring Universe places is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-events",
        "contains",
        "The Conjuring Universe events is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-objects",
        "contains",
        "The Conjuring Universe objects & artifacts is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-factions",
        "contains",
        "The Conjuring Universe factions & groups is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-concepts",
        "contains",
        "The Conjuring Universe concepts is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-eras",
        "contains",
        "The Conjuring Universe eras is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-works",
        "contains",
        "The Conjuring Universe works & media is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-symbols",
        "contains",
        "The Conjuring Universe symbols is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-controversies",
        "contains",
        "The Conjuring Universe controversies is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-sources",
        "contains",
        "The Conjuring Universe sources is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-geography",
        "contains",
        "The Conjuring Universe geography is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-legacy",
        "contains",
        "The Conjuring Universe legacy is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-practices",
        "contains",
        "The Conjuring Universe practices is a primary trailhead under The Conjuring Universe.",
        0.88,
        0.82
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-1",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-2",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-3",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-4",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-5",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-6",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-7",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-8",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-9",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-10",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-11",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-12",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-13",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-14",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-15",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-16",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-17",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-18",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-19",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-20",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-21",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-22",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-23",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ],
    [
        "conjuring-universe",
        "conjuring-universe-entry-24",
        "contains",
        "Supporting entry under The Conjuring Universe.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
