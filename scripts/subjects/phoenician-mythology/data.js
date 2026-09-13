/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "phoenician-mythology",
        "name": "Phoenician mythology",
        "type": "topic",
        "short_description": "Baal, Astarte, and Levantine maritime-city cults that linked Mediterranean sacred trade.",
        "description": "Baal, Astarte, and Levantine maritime-city cults that linked Mediterranean sacred trade. This Ton-o-Lore subject maps people, places, events, and ideas tied to Phoenician mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "phoenician-mythology-figures",
        "name": "Phoenician mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Phoenician mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Phoenician mythology."
    },
    {
        "slug": "phoenician-mythology-world",
        "name": "Phoenician mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Phoenician mythology.",
        "description": "Geography, institutions, and periodization that give Phoenician mythology its encyclopedia shape."
    },
    {
        "slug": "phoenician-mythology-places",
        "name": "Phoenician mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Phoenician mythology.",
        "description": "Places, regions, and built sites that give Phoenician mythology its map — where events and figures concentrate."
    },
    {
        "slug": "phoenician-mythology-events",
        "name": "Phoenician mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Phoenician mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Phoenician mythology timeline."
    },
    {
        "slug": "phoenician-mythology-objects",
        "name": "Phoenician mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Phoenician mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Phoenician mythology."
    },
    {
        "slug": "phoenician-mythology-factions",
        "name": "Phoenician mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Phoenician mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Phoenician mythology."
    },
    {
        "slug": "phoenician-mythology-concepts",
        "name": "Phoenician mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Phoenician mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Phoenician mythology readable as a lore graph."
    },
    {
        "slug": "phoenician-mythology-eras",
        "name": "Phoenician mythology eras",
        "type": "event",
        "short_description": "Periodization for Phoenician mythology.",
        "description": "Named eras and phases that help readers track how Phoenician mythology changes across time."
    },
    {
        "slug": "phoenician-mythology-works",
        "name": "Phoenician mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Phoenician mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Phoenician mythology."
    },
    {
        "slug": "phoenician-mythology-symbols",
        "name": "Phoenician mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Phoenician mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Phoenician mythology."
    },
    {
        "slug": "phoenician-mythology-controversies",
        "name": "Phoenician mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Phoenician mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Phoenician mythology argumentative."
    },
    {
        "slug": "phoenician-mythology-sources",
        "name": "Phoenician mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Phoenician mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Phoenician mythology."
    },
    {
        "slug": "phoenician-mythology-geography",
        "name": "Phoenician mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Phoenician mythology.",
        "description": "Regions, routes, and spatial systems that situate Phoenician mythology beyond single named places."
    },
    {
        "slug": "phoenician-mythology-legacy",
        "name": "Phoenician mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Phoenician mythology.",
        "description": "How Phoenician mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "phoenician-mythology-practices",
        "name": "Phoenician mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Phoenician mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Phoenician mythology."
    },
    {
        "slug": "phoenician-mythology-entry-1",
        "name": "Phoenician mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-2",
        "name": "Phoenician mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-3",
        "name": "Phoenician mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-4",
        "name": "Phoenician mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-5",
        "name": "Phoenician mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-6",
        "name": "Phoenician mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-7",
        "name": "Phoenician mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-8",
        "name": "Phoenician mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-9",
        "name": "Phoenician mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-10",
        "name": "Phoenician mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-11",
        "name": "Phoenician mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-12",
        "name": "Phoenician mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-13",
        "name": "Phoenician mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-14",
        "name": "Phoenician mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-15",
        "name": "Phoenician mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-16",
        "name": "Phoenician mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-17",
        "name": "Phoenician mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-18",
        "name": "Phoenician mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-19",
        "name": "Phoenician mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-20",
        "name": "Phoenician mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-21",
        "name": "Phoenician mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-22",
        "name": "Phoenician mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-23",
        "name": "Phoenician mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phoenician-mythology-entry-24",
        "name": "Phoenician mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Phoenician mythology.",
        "description": "A supporting encyclopedia entry in the Phoenician mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "phoenician-mythology",
        "phoenician-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-places",
        "contains",
        "Phoenician mythology places is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-events",
        "contains",
        "Phoenician mythology events is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-objects",
        "contains",
        "Phoenician mythology objects & artifacts is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-factions",
        "contains",
        "Phoenician mythology factions & groups is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-concepts",
        "contains",
        "Phoenician mythology concepts is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-eras",
        "contains",
        "Phoenician mythology eras is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-works",
        "contains",
        "Phoenician mythology works & media is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-symbols",
        "contains",
        "Phoenician mythology symbols is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-controversies",
        "contains",
        "Phoenician mythology controversies is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-sources",
        "contains",
        "Phoenician mythology sources is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-geography",
        "contains",
        "Phoenician mythology geography is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-legacy",
        "contains",
        "Phoenician mythology legacy is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-practices",
        "contains",
        "Phoenician mythology practices is a primary trailhead under Phoenician mythology.",
        0.88,
        0.82
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-1",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-2",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-3",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-4",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-5",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-6",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-7",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-8",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-9",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-10",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-11",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-12",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-13",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-14",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-15",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-16",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-17",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-18",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-19",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-20",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-21",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-22",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-23",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ],
    [
        "phoenician-mythology",
        "phoenician-mythology-entry-24",
        "contains",
        "Supporting entry under Phoenician mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
