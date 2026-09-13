/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nazca-lines",
        "name": "Nazca Lines",
        "type": "topic",
        "short_description": "Desert geoglyphs, aerial discovery, and the Andean ground drawings that invite cosmic theories.",
        "description": "Desert geoglyphs, aerial discovery, and the Andean ground drawings that invite cosmic theories. This Ton-o-Lore subject maps people, places, events, and ideas tied to Nazca Lines so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "nazca-lines-figures",
        "name": "Nazca Lines figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Nazca Lines.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Nazca Lines."
    },
    {
        "slug": "nazca-lines-world",
        "name": "Nazca Lines world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Nazca Lines.",
        "description": "Geography, institutions, and periodization that give Nazca Lines its encyclopedia shape."
    },
    {
        "slug": "nazca-lines-places",
        "name": "Nazca Lines places",
        "type": "place",
        "short_description": "Locations and geographies that frame Nazca Lines.",
        "description": "Places, regions, and built sites that give Nazca Lines its map — where events and figures concentrate."
    },
    {
        "slug": "nazca-lines-events",
        "name": "Nazca Lines events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Nazca Lines.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Nazca Lines timeline."
    },
    {
        "slug": "nazca-lines-objects",
        "name": "Nazca Lines objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Nazca Lines.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Nazca Lines."
    },
    {
        "slug": "nazca-lines-factions",
        "name": "Nazca Lines factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Nazca Lines.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Nazca Lines."
    },
    {
        "slug": "nazca-lines-concepts",
        "name": "Nazca Lines concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Nazca Lines.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Nazca Lines readable as a lore graph."
    },
    {
        "slug": "nazca-lines-eras",
        "name": "Nazca Lines eras",
        "type": "event",
        "short_description": "Periodization for Nazca Lines.",
        "description": "Named eras and phases that help readers track how Nazca Lines changes across time."
    },
    {
        "slug": "nazca-lines-works",
        "name": "Nazca Lines works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Nazca Lines.",
        "description": "Primary works and adaptations through which most audiences encounter Nazca Lines."
    },
    {
        "slug": "nazca-lines-symbols",
        "name": "Nazca Lines symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Nazca Lines.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Nazca Lines."
    },
    {
        "slug": "nazca-lines-controversies",
        "name": "Nazca Lines controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Nazca Lines.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Nazca Lines argumentative."
    },
    {
        "slug": "nazca-lines-sources",
        "name": "Nazca Lines sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Nazca Lines.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Nazca Lines."
    },
    {
        "slug": "nazca-lines-geography",
        "name": "Nazca Lines geography",
        "type": "place",
        "short_description": "Broader geographic framing for Nazca Lines.",
        "description": "Regions, routes, and spatial systems that situate Nazca Lines beyond single named places."
    },
    {
        "slug": "nazca-lines-legacy",
        "name": "Nazca Lines legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Nazca Lines.",
        "description": "How Nazca Lines continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "nazca-lines-practices",
        "name": "Nazca Lines practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Nazca Lines.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Nazca Lines."
    },
    {
        "slug": "nazca-lines-entry-1",
        "name": "Nazca Lines entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-2",
        "name": "Nazca Lines entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-3",
        "name": "Nazca Lines entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-4",
        "name": "Nazca Lines entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-5",
        "name": "Nazca Lines entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-6",
        "name": "Nazca Lines entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-7",
        "name": "Nazca Lines entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-8",
        "name": "Nazca Lines entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-9",
        "name": "Nazca Lines entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-10",
        "name": "Nazca Lines entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-11",
        "name": "Nazca Lines entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-12",
        "name": "Nazca Lines entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-13",
        "name": "Nazca Lines entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-14",
        "name": "Nazca Lines entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-15",
        "name": "Nazca Lines entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-16",
        "name": "Nazca Lines entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-17",
        "name": "Nazca Lines entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-18",
        "name": "Nazca Lines entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-19",
        "name": "Nazca Lines entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-20",
        "name": "Nazca Lines entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-21",
        "name": "Nazca Lines entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-22",
        "name": "Nazca Lines entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-23",
        "name": "Nazca Lines entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nazca-lines-entry-24",
        "name": "Nazca Lines entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nazca Lines.",
        "description": "A supporting encyclopedia entry in the Nazca Lines subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "nazca-lines",
        "nazca-lines-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "nazca-lines",
        "nazca-lines-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "nazca-lines",
        "nazca-lines-places",
        "contains",
        "Nazca Lines places is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-events",
        "contains",
        "Nazca Lines events is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-objects",
        "contains",
        "Nazca Lines objects & artifacts is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-factions",
        "contains",
        "Nazca Lines factions & groups is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-concepts",
        "contains",
        "Nazca Lines concepts is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-eras",
        "contains",
        "Nazca Lines eras is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-works",
        "contains",
        "Nazca Lines works & media is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-symbols",
        "contains",
        "Nazca Lines symbols is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-controversies",
        "contains",
        "Nazca Lines controversies is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-sources",
        "contains",
        "Nazca Lines sources is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-geography",
        "contains",
        "Nazca Lines geography is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-legacy",
        "contains",
        "Nazca Lines legacy is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-practices",
        "contains",
        "Nazca Lines practices is a primary trailhead under Nazca Lines.",
        0.88,
        0.82
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-1",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-2",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-3",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-4",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-5",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-6",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-7",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-8",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-9",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-10",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-11",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-12",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-13",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-14",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-15",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-16",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-17",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-18",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-19",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-20",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-21",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-22",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-23",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ],
    [
        "nazca-lines",
        "nazca-lines-entry-24",
        "contains",
        "Supporting entry under Nazca Lines.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
