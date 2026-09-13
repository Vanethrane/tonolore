/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mesopotamian-mythology",
        "name": "Mesopotamian mythology",
        "type": "topic",
        "short_description": "Gilgamesh, Enuma Elish, and the temple pantheons of Sumer, Akkad, Babylon, and Assyria.",
        "description": "Gilgamesh, Enuma Elish, and the temple pantheons of Sumer, Akkad, Babylon, and Assyria. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mesopotamian mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "mesopotamian-mythology-figures",
        "name": "Mesopotamian mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mesopotamian mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mesopotamian mythology."
    },
    {
        "slug": "mesopotamian-mythology-world",
        "name": "Mesopotamian mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mesopotamian mythology.",
        "description": "Geography, institutions, and periodization that give Mesopotamian mythology its encyclopedia shape."
    },
    {
        "slug": "mesopotamian-mythology-places",
        "name": "Mesopotamian mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mesopotamian mythology.",
        "description": "Places, regions, and built sites that give Mesopotamian mythology its map — where events and figures concentrate."
    },
    {
        "slug": "mesopotamian-mythology-events",
        "name": "Mesopotamian mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mesopotamian mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mesopotamian mythology timeline."
    },
    {
        "slug": "mesopotamian-mythology-objects",
        "name": "Mesopotamian mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mesopotamian mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mesopotamian mythology."
    },
    {
        "slug": "mesopotamian-mythology-factions",
        "name": "Mesopotamian mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mesopotamian mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mesopotamian mythology."
    },
    {
        "slug": "mesopotamian-mythology-concepts",
        "name": "Mesopotamian mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mesopotamian mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mesopotamian mythology readable as a lore graph."
    },
    {
        "slug": "mesopotamian-mythology-eras",
        "name": "Mesopotamian mythology eras",
        "type": "event",
        "short_description": "Periodization for Mesopotamian mythology.",
        "description": "Named eras and phases that help readers track how Mesopotamian mythology changes across time."
    },
    {
        "slug": "mesopotamian-mythology-works",
        "name": "Mesopotamian mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mesopotamian mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Mesopotamian mythology."
    },
    {
        "slug": "mesopotamian-mythology-symbols",
        "name": "Mesopotamian mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mesopotamian mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mesopotamian mythology."
    },
    {
        "slug": "mesopotamian-mythology-controversies",
        "name": "Mesopotamian mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mesopotamian mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mesopotamian mythology argumentative."
    },
    {
        "slug": "mesopotamian-mythology-sources",
        "name": "Mesopotamian mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mesopotamian mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mesopotamian mythology."
    },
    {
        "slug": "mesopotamian-mythology-geography",
        "name": "Mesopotamian mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mesopotamian mythology.",
        "description": "Regions, routes, and spatial systems that situate Mesopotamian mythology beyond single named places."
    },
    {
        "slug": "mesopotamian-mythology-legacy",
        "name": "Mesopotamian mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mesopotamian mythology.",
        "description": "How Mesopotamian mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mesopotamian-mythology-practices",
        "name": "Mesopotamian mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mesopotamian mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mesopotamian mythology."
    },
    {
        "slug": "mesopotamian-mythology-entry-1",
        "name": "Mesopotamian mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-2",
        "name": "Mesopotamian mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-3",
        "name": "Mesopotamian mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-4",
        "name": "Mesopotamian mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-5",
        "name": "Mesopotamian mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-6",
        "name": "Mesopotamian mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-7",
        "name": "Mesopotamian mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-8",
        "name": "Mesopotamian mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-9",
        "name": "Mesopotamian mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-10",
        "name": "Mesopotamian mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-11",
        "name": "Mesopotamian mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-12",
        "name": "Mesopotamian mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-13",
        "name": "Mesopotamian mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-14",
        "name": "Mesopotamian mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-15",
        "name": "Mesopotamian mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-16",
        "name": "Mesopotamian mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-17",
        "name": "Mesopotamian mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-18",
        "name": "Mesopotamian mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-19",
        "name": "Mesopotamian mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-20",
        "name": "Mesopotamian mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-21",
        "name": "Mesopotamian mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-22",
        "name": "Mesopotamian mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-23",
        "name": "Mesopotamian mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mesopotamian-mythology-entry-24",
        "name": "Mesopotamian mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mesopotamian mythology.",
        "description": "A supporting encyclopedia entry in the Mesopotamian mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-places",
        "contains",
        "Mesopotamian mythology places is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-events",
        "contains",
        "Mesopotamian mythology events is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-objects",
        "contains",
        "Mesopotamian mythology objects & artifacts is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-factions",
        "contains",
        "Mesopotamian mythology factions & groups is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-concepts",
        "contains",
        "Mesopotamian mythology concepts is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-eras",
        "contains",
        "Mesopotamian mythology eras is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-works",
        "contains",
        "Mesopotamian mythology works & media is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-symbols",
        "contains",
        "Mesopotamian mythology symbols is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-controversies",
        "contains",
        "Mesopotamian mythology controversies is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-sources",
        "contains",
        "Mesopotamian mythology sources is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-geography",
        "contains",
        "Mesopotamian mythology geography is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-legacy",
        "contains",
        "Mesopotamian mythology legacy is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-practices",
        "contains",
        "Mesopotamian mythology practices is a primary trailhead under Mesopotamian mythology.",
        0.88,
        0.82
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-1",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-2",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-3",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-4",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-5",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-6",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-7",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-8",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-9",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-10",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-11",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-12",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-13",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-14",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-15",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-16",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-17",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-18",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-19",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-20",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-21",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-22",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-23",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ],
    [
        "mesopotamian-mythology",
        "mesopotamian-mythology-entry-24",
        "contains",
        "Supporting entry under Mesopotamian mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
