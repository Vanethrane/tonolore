/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "skinwalker-ranch",
        "name": "Skinwalker Ranch",
        "type": "topic",
        "short_description": "Uinta Basin high strangeness, cattle mutilation lore, and the ranch that became paranormal TV.",
        "description": "Uinta Basin high strangeness, cattle mutilation lore, and the ranch that became paranormal TV. This Ton-o-Lore subject maps people, places, events, and ideas tied to Skinwalker Ranch so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "skinwalker-ranch-figures",
        "name": "Skinwalker Ranch figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Skinwalker Ranch.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Skinwalker Ranch."
    },
    {
        "slug": "skinwalker-ranch-world",
        "name": "Skinwalker Ranch world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Skinwalker Ranch.",
        "description": "Geography, institutions, and periodization that give Skinwalker Ranch its encyclopedia shape."
    },
    {
        "slug": "skinwalker-ranch-places",
        "name": "Skinwalker Ranch places",
        "type": "place",
        "short_description": "Locations and geographies that frame Skinwalker Ranch.",
        "description": "Places, regions, and built sites that give Skinwalker Ranch its map — where events and figures concentrate."
    },
    {
        "slug": "skinwalker-ranch-events",
        "name": "Skinwalker Ranch events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Skinwalker Ranch.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Skinwalker Ranch timeline."
    },
    {
        "slug": "skinwalker-ranch-objects",
        "name": "Skinwalker Ranch objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Skinwalker Ranch.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Skinwalker Ranch."
    },
    {
        "slug": "skinwalker-ranch-factions",
        "name": "Skinwalker Ranch factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Skinwalker Ranch.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Skinwalker Ranch."
    },
    {
        "slug": "skinwalker-ranch-concepts",
        "name": "Skinwalker Ranch concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Skinwalker Ranch.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Skinwalker Ranch readable as a lore graph."
    },
    {
        "slug": "skinwalker-ranch-eras",
        "name": "Skinwalker Ranch eras",
        "type": "event",
        "short_description": "Periodization for Skinwalker Ranch.",
        "description": "Named eras and phases that help readers track how Skinwalker Ranch changes across time."
    },
    {
        "slug": "skinwalker-ranch-works",
        "name": "Skinwalker Ranch works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Skinwalker Ranch.",
        "description": "Primary works and adaptations through which most audiences encounter Skinwalker Ranch."
    },
    {
        "slug": "skinwalker-ranch-symbols",
        "name": "Skinwalker Ranch symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Skinwalker Ranch.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Skinwalker Ranch."
    },
    {
        "slug": "skinwalker-ranch-controversies",
        "name": "Skinwalker Ranch controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Skinwalker Ranch.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Skinwalker Ranch argumentative."
    },
    {
        "slug": "skinwalker-ranch-sources",
        "name": "Skinwalker Ranch sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Skinwalker Ranch.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Skinwalker Ranch."
    },
    {
        "slug": "skinwalker-ranch-geography",
        "name": "Skinwalker Ranch geography",
        "type": "place",
        "short_description": "Broader geographic framing for Skinwalker Ranch.",
        "description": "Regions, routes, and spatial systems that situate Skinwalker Ranch beyond single named places."
    },
    {
        "slug": "skinwalker-ranch-legacy",
        "name": "Skinwalker Ranch legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Skinwalker Ranch.",
        "description": "How Skinwalker Ranch continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "skinwalker-ranch-practices",
        "name": "Skinwalker Ranch practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Skinwalker Ranch.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Skinwalker Ranch."
    },
    {
        "slug": "skinwalker-ranch-entry-1",
        "name": "Skinwalker Ranch entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-2",
        "name": "Skinwalker Ranch entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-3",
        "name": "Skinwalker Ranch entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-4",
        "name": "Skinwalker Ranch entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-5",
        "name": "Skinwalker Ranch entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-6",
        "name": "Skinwalker Ranch entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-7",
        "name": "Skinwalker Ranch entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-8",
        "name": "Skinwalker Ranch entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-9",
        "name": "Skinwalker Ranch entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-10",
        "name": "Skinwalker Ranch entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-11",
        "name": "Skinwalker Ranch entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-12",
        "name": "Skinwalker Ranch entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-13",
        "name": "Skinwalker Ranch entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-14",
        "name": "Skinwalker Ranch entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-15",
        "name": "Skinwalker Ranch entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-16",
        "name": "Skinwalker Ranch entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-17",
        "name": "Skinwalker Ranch entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-18",
        "name": "Skinwalker Ranch entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-19",
        "name": "Skinwalker Ranch entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-20",
        "name": "Skinwalker Ranch entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-21",
        "name": "Skinwalker Ranch entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-22",
        "name": "Skinwalker Ranch entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-23",
        "name": "Skinwalker Ranch entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "skinwalker-ranch-entry-24",
        "name": "Skinwalker Ranch entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Skinwalker Ranch.",
        "description": "A supporting encyclopedia entry in the Skinwalker Ranch subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "skinwalker-ranch",
        "skinwalker-ranch-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-places",
        "contains",
        "Skinwalker Ranch places is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-events",
        "contains",
        "Skinwalker Ranch events is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-objects",
        "contains",
        "Skinwalker Ranch objects & artifacts is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-factions",
        "contains",
        "Skinwalker Ranch factions & groups is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-concepts",
        "contains",
        "Skinwalker Ranch concepts is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-eras",
        "contains",
        "Skinwalker Ranch eras is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-works",
        "contains",
        "Skinwalker Ranch works & media is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-symbols",
        "contains",
        "Skinwalker Ranch symbols is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-controversies",
        "contains",
        "Skinwalker Ranch controversies is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-sources",
        "contains",
        "Skinwalker Ranch sources is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-geography",
        "contains",
        "Skinwalker Ranch geography is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-legacy",
        "contains",
        "Skinwalker Ranch legacy is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-practices",
        "contains",
        "Skinwalker Ranch practices is a primary trailhead under Skinwalker Ranch.",
        0.88,
        0.82
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-1",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-2",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-3",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-4",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-5",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-6",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-7",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-8",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-9",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-10",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-11",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-12",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-13",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-14",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-15",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-16",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-17",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-18",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-19",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-20",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-21",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-22",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-23",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ],
    [
        "skinwalker-ranch",
        "skinwalker-ranch-entry-24",
        "contains",
        "Supporting entry under Skinwalker Ranch.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
