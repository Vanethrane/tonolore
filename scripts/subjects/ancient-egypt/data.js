/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ancient-egypt",
        "name": "Ancient Egypt",
        "type": "topic",
        "short_description": "Pharaohs, dynasties, tombs, rituals, and Nile-state archaeology that still drive rediscovery lore.",
        "description": "Pharaohs, dynasties, tombs, rituals, and Nile-state archaeology that still drive rediscovery lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ancient Egypt so readers can follow long-tail connections across history."
    },
    {
        "slug": "ancient-egypt-figures",
        "name": "Ancient Egypt figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ancient Egypt.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ancient Egypt."
    },
    {
        "slug": "ancient-egypt-world",
        "name": "Ancient Egypt world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ancient Egypt.",
        "description": "Geography, institutions, and periodization that give Ancient Egypt its encyclopedia shape."
    },
    {
        "slug": "ancient-egypt-places",
        "name": "Ancient Egypt places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ancient Egypt.",
        "description": "Places, regions, and built sites that give Ancient Egypt its map — where events and figures concentrate."
    },
    {
        "slug": "ancient-egypt-events",
        "name": "Ancient Egypt events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ancient Egypt.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ancient Egypt timeline."
    },
    {
        "slug": "ancient-egypt-objects",
        "name": "Ancient Egypt objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ancient Egypt.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ancient Egypt."
    },
    {
        "slug": "ancient-egypt-factions",
        "name": "Ancient Egypt factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ancient Egypt.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ancient Egypt."
    },
    {
        "slug": "ancient-egypt-concepts",
        "name": "Ancient Egypt concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ancient Egypt.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ancient Egypt readable as a lore graph."
    },
    {
        "slug": "ancient-egypt-eras",
        "name": "Ancient Egypt eras",
        "type": "event",
        "short_description": "Periodization for Ancient Egypt.",
        "description": "Named eras and phases that help readers track how Ancient Egypt changes across time."
    },
    {
        "slug": "ancient-egypt-works",
        "name": "Ancient Egypt works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ancient Egypt.",
        "description": "Primary works and adaptations through which most audiences encounter Ancient Egypt."
    },
    {
        "slug": "ancient-egypt-symbols",
        "name": "Ancient Egypt symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ancient Egypt.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ancient Egypt."
    },
    {
        "slug": "ancient-egypt-controversies",
        "name": "Ancient Egypt controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ancient Egypt.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ancient Egypt argumentative."
    },
    {
        "slug": "ancient-egypt-sources",
        "name": "Ancient Egypt sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ancient Egypt.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ancient Egypt."
    },
    {
        "slug": "ancient-egypt-geography",
        "name": "Ancient Egypt geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ancient Egypt.",
        "description": "Regions, routes, and spatial systems that situate Ancient Egypt beyond single named places."
    },
    {
        "slug": "ancient-egypt-legacy",
        "name": "Ancient Egypt legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ancient Egypt.",
        "description": "How Ancient Egypt continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ancient-egypt-practices",
        "name": "Ancient Egypt practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ancient Egypt.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ancient Egypt."
    },
    {
        "slug": "ancient-egypt-entry-1",
        "name": "Ancient Egypt entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-2",
        "name": "Ancient Egypt entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-3",
        "name": "Ancient Egypt entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-4",
        "name": "Ancient Egypt entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-5",
        "name": "Ancient Egypt entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-6",
        "name": "Ancient Egypt entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-7",
        "name": "Ancient Egypt entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-8",
        "name": "Ancient Egypt entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-9",
        "name": "Ancient Egypt entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-10",
        "name": "Ancient Egypt entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-11",
        "name": "Ancient Egypt entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-12",
        "name": "Ancient Egypt entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-13",
        "name": "Ancient Egypt entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-14",
        "name": "Ancient Egypt entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-15",
        "name": "Ancient Egypt entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-16",
        "name": "Ancient Egypt entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-17",
        "name": "Ancient Egypt entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-18",
        "name": "Ancient Egypt entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-19",
        "name": "Ancient Egypt entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-20",
        "name": "Ancient Egypt entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-21",
        "name": "Ancient Egypt entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-22",
        "name": "Ancient Egypt entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-23",
        "name": "Ancient Egypt entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-egypt-entry-24",
        "name": "Ancient Egypt entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Egypt.",
        "description": "A supporting encyclopedia entry in the Ancient Egypt subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ancient-egypt",
        "ancient-egypt-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ancient-egypt",
        "ancient-egypt-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ancient-egypt",
        "ancient-egypt-places",
        "contains",
        "Ancient Egypt places is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-events",
        "contains",
        "Ancient Egypt events is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-objects",
        "contains",
        "Ancient Egypt objects & artifacts is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-factions",
        "contains",
        "Ancient Egypt factions & groups is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-concepts",
        "contains",
        "Ancient Egypt concepts is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-eras",
        "contains",
        "Ancient Egypt eras is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-works",
        "contains",
        "Ancient Egypt works & media is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-symbols",
        "contains",
        "Ancient Egypt symbols is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-controversies",
        "contains",
        "Ancient Egypt controversies is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-sources",
        "contains",
        "Ancient Egypt sources is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-geography",
        "contains",
        "Ancient Egypt geography is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-legacy",
        "contains",
        "Ancient Egypt legacy is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-practices",
        "contains",
        "Ancient Egypt practices is a primary trailhead under Ancient Egypt.",
        0.88,
        0.82
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-1",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-2",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-3",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-4",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-5",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-6",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-7",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-8",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-9",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-10",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-11",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-12",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-13",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-14",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-15",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-16",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-17",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-18",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-19",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-20",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-21",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-22",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-23",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ],
    [
        "ancient-egypt",
        "ancient-egypt-entry-24",
        "contains",
        "Supporting entry under Ancient Egypt.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
