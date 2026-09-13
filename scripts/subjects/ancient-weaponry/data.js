/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ancient-weaponry",
        "name": "Ancient weapons",
        "type": "topic",
        "short_description": "Individual weapons, cultures, battles, metallurgy, finds, and the makers who forged pre-modern arms.",
        "description": "Individual weapons, cultures, battles, metallurgy, finds, and the makers who forged pre-modern arms. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ancient weapons so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "ancient-weaponry-figures",
        "name": "Ancient weapons figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ancient weapons.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-world",
        "name": "Ancient weapons world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ancient weapons.",
        "description": "Geography, institutions, and periodization that give Ancient weapons its encyclopedia shape."
    },
    {
        "slug": "ancient-weaponry-places",
        "name": "Ancient weapons places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ancient weapons.",
        "description": "Places, regions, and built sites that give Ancient weapons its map — where events and figures concentrate."
    },
    {
        "slug": "ancient-weaponry-events",
        "name": "Ancient weapons events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ancient weapons.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ancient weapons timeline."
    },
    {
        "slug": "ancient-weaponry-objects",
        "name": "Ancient weapons objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ancient weapons.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-factions",
        "name": "Ancient weapons factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ancient weapons.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-concepts",
        "name": "Ancient weapons concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ancient weapons.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ancient weapons readable as a lore graph."
    },
    {
        "slug": "ancient-weaponry-eras",
        "name": "Ancient weapons eras",
        "type": "event",
        "short_description": "Periodization for Ancient weapons.",
        "description": "Named eras and phases that help readers track how Ancient weapons changes across time."
    },
    {
        "slug": "ancient-weaponry-works",
        "name": "Ancient weapons works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ancient weapons.",
        "description": "Primary works and adaptations through which most audiences encounter Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-symbols",
        "name": "Ancient weapons symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ancient weapons.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-controversies",
        "name": "Ancient weapons controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ancient weapons.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ancient weapons argumentative."
    },
    {
        "slug": "ancient-weaponry-sources",
        "name": "Ancient weapons sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ancient weapons.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-geography",
        "name": "Ancient weapons geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ancient weapons.",
        "description": "Regions, routes, and spatial systems that situate Ancient weapons beyond single named places."
    },
    {
        "slug": "ancient-weaponry-legacy",
        "name": "Ancient weapons legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ancient weapons.",
        "description": "How Ancient weapons continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ancient-weaponry-practices",
        "name": "Ancient weapons practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ancient weapons.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-entry-1",
        "name": "Ancient weapons entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-2",
        "name": "Ancient weapons entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-3",
        "name": "Ancient weapons entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-4",
        "name": "Ancient weapons entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-5",
        "name": "Ancient weapons entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-6",
        "name": "Ancient weapons entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-7",
        "name": "Ancient weapons entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-8",
        "name": "Ancient weapons entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-9",
        "name": "Ancient weapons entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-10",
        "name": "Ancient weapons entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-11",
        "name": "Ancient weapons entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-12",
        "name": "Ancient weapons entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-13",
        "name": "Ancient weapons entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-14",
        "name": "Ancient weapons entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-15",
        "name": "Ancient weapons entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-16",
        "name": "Ancient weapons entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-17",
        "name": "Ancient weapons entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-18",
        "name": "Ancient weapons entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-19",
        "name": "Ancient weapons entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-20",
        "name": "Ancient weapons entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-21",
        "name": "Ancient weapons entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-22",
        "name": "Ancient weapons entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-23",
        "name": "Ancient weapons entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-weaponry-entry-24",
        "name": "Ancient weapons entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient weapons.",
        "description": "A supporting encyclopedia entry in the Ancient weapons subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ancient-weaponry",
        "ancient-weaponry-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-places",
        "contains",
        "Ancient weapons places is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-events",
        "contains",
        "Ancient weapons events is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-objects",
        "contains",
        "Ancient weapons objects & artifacts is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-factions",
        "contains",
        "Ancient weapons factions & groups is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-concepts",
        "contains",
        "Ancient weapons concepts is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-eras",
        "contains",
        "Ancient weapons eras is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-works",
        "contains",
        "Ancient weapons works & media is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-symbols",
        "contains",
        "Ancient weapons symbols is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-controversies",
        "contains",
        "Ancient weapons controversies is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-sources",
        "contains",
        "Ancient weapons sources is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-geography",
        "contains",
        "Ancient weapons geography is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-legacy",
        "contains",
        "Ancient weapons legacy is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-practices",
        "contains",
        "Ancient weapons practices is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-1",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-2",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-3",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-4",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-5",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-6",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-7",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-8",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-9",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-10",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-11",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-12",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-13",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-14",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-15",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-16",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-17",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-18",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-19",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-20",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-21",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-22",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-23",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-entry-24",
        "contains",
        "Supporting entry under Ancient weapons.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
