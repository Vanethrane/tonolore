/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "kabuki",
        "name": "Kabuki",
        "type": "topic",
        "short_description": "Onnagata, mie poses, and the stylized popular theatre of Edo Japan.",
        "description": "Onnagata, mie poses, and the stylized popular theatre of Edo Japan. This Ton-o-Lore subject maps people, places, events, and ideas tied to Kabuki so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "kabuki-figures",
        "name": "Kabuki figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Kabuki.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Kabuki."
    },
    {
        "slug": "kabuki-world",
        "name": "Kabuki world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Kabuki.",
        "description": "Geography, institutions, and periodization that give Kabuki its encyclopedia shape."
    },
    {
        "slug": "kabuki-places",
        "name": "Kabuki places",
        "type": "place",
        "short_description": "Locations and geographies that frame Kabuki.",
        "description": "Places, regions, and built sites that give Kabuki its map — where events and figures concentrate."
    },
    {
        "slug": "kabuki-events",
        "name": "Kabuki events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Kabuki.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Kabuki timeline."
    },
    {
        "slug": "kabuki-objects",
        "name": "Kabuki objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Kabuki.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Kabuki."
    },
    {
        "slug": "kabuki-factions",
        "name": "Kabuki factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Kabuki.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Kabuki."
    },
    {
        "slug": "kabuki-concepts",
        "name": "Kabuki concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Kabuki.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Kabuki readable as a lore graph."
    },
    {
        "slug": "kabuki-eras",
        "name": "Kabuki eras",
        "type": "event",
        "short_description": "Periodization for Kabuki.",
        "description": "Named eras and phases that help readers track how Kabuki changes across time."
    },
    {
        "slug": "kabuki-works",
        "name": "Kabuki works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Kabuki.",
        "description": "Primary works and adaptations through which most audiences encounter Kabuki."
    },
    {
        "slug": "kabuki-symbols",
        "name": "Kabuki symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Kabuki.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Kabuki."
    },
    {
        "slug": "kabuki-controversies",
        "name": "Kabuki controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Kabuki.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Kabuki argumentative."
    },
    {
        "slug": "kabuki-sources",
        "name": "Kabuki sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Kabuki.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Kabuki."
    },
    {
        "slug": "kabuki-geography",
        "name": "Kabuki geography",
        "type": "place",
        "short_description": "Broader geographic framing for Kabuki.",
        "description": "Regions, routes, and spatial systems that situate Kabuki beyond single named places."
    },
    {
        "slug": "kabuki-legacy",
        "name": "Kabuki legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Kabuki.",
        "description": "How Kabuki continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "kabuki-practices",
        "name": "Kabuki practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Kabuki.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Kabuki."
    },
    {
        "slug": "kabuki-entry-1",
        "name": "Kabuki entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-2",
        "name": "Kabuki entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-3",
        "name": "Kabuki entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-4",
        "name": "Kabuki entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-5",
        "name": "Kabuki entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-6",
        "name": "Kabuki entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-7",
        "name": "Kabuki entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-8",
        "name": "Kabuki entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-9",
        "name": "Kabuki entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-10",
        "name": "Kabuki entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-11",
        "name": "Kabuki entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-12",
        "name": "Kabuki entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-13",
        "name": "Kabuki entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-14",
        "name": "Kabuki entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-15",
        "name": "Kabuki entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-16",
        "name": "Kabuki entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-17",
        "name": "Kabuki entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-18",
        "name": "Kabuki entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-19",
        "name": "Kabuki entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-20",
        "name": "Kabuki entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-21",
        "name": "Kabuki entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-22",
        "name": "Kabuki entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-23",
        "name": "Kabuki entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kabuki-entry-24",
        "name": "Kabuki entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kabuki.",
        "description": "A supporting encyclopedia entry in the Kabuki subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "kabuki",
        "kabuki-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "kabuki",
        "kabuki-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "kabuki",
        "kabuki-places",
        "contains",
        "Kabuki places is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-events",
        "contains",
        "Kabuki events is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-objects",
        "contains",
        "Kabuki objects & artifacts is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-factions",
        "contains",
        "Kabuki factions & groups is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-concepts",
        "contains",
        "Kabuki concepts is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-eras",
        "contains",
        "Kabuki eras is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-works",
        "contains",
        "Kabuki works & media is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-symbols",
        "contains",
        "Kabuki symbols is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-controversies",
        "contains",
        "Kabuki controversies is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-sources",
        "contains",
        "Kabuki sources is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-geography",
        "contains",
        "Kabuki geography is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-legacy",
        "contains",
        "Kabuki legacy is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-practices",
        "contains",
        "Kabuki practices is a primary trailhead under Kabuki.",
        0.88,
        0.82
    ],
    [
        "kabuki",
        "kabuki-entry-1",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-2",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-3",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-4",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-5",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-6",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-7",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-8",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-9",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-10",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-11",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-12",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-13",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-14",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-15",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-16",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-17",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-18",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-19",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-20",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-21",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-22",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-23",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ],
    [
        "kabuki",
        "kabuki-entry-24",
        "contains",
        "Supporting entry under Kabuki.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
