/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "voynich-manuscript",
        "name": "Voynich manuscript",
        "type": "topic",
        "short_description": "Unreadable script, botanical oddities, and the medieval codex that resists decipherment.",
        "description": "Unreadable script, botanical oddities, and the medieval codex that resists decipherment. This Ton-o-Lore subject maps people, places, events, and ideas tied to Voynich manuscript so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "voynich-manuscript-figures",
        "name": "Voynich manuscript figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Voynich manuscript.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Voynich manuscript."
    },
    {
        "slug": "voynich-manuscript-world",
        "name": "Voynich manuscript world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Voynich manuscript.",
        "description": "Geography, institutions, and periodization that give Voynich manuscript its encyclopedia shape."
    },
    {
        "slug": "voynich-manuscript-places",
        "name": "Voynich manuscript places",
        "type": "place",
        "short_description": "Locations and geographies that frame Voynich manuscript.",
        "description": "Places, regions, and built sites that give Voynich manuscript its map — where events and figures concentrate."
    },
    {
        "slug": "voynich-manuscript-events",
        "name": "Voynich manuscript events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Voynich manuscript.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Voynich manuscript timeline."
    },
    {
        "slug": "voynich-manuscript-objects",
        "name": "Voynich manuscript objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Voynich manuscript.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Voynich manuscript."
    },
    {
        "slug": "voynich-manuscript-factions",
        "name": "Voynich manuscript factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Voynich manuscript.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Voynich manuscript."
    },
    {
        "slug": "voynich-manuscript-concepts",
        "name": "Voynich manuscript concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Voynich manuscript.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Voynich manuscript readable as a lore graph."
    },
    {
        "slug": "voynich-manuscript-eras",
        "name": "Voynich manuscript eras",
        "type": "event",
        "short_description": "Periodization for Voynich manuscript.",
        "description": "Named eras and phases that help readers track how Voynich manuscript changes across time."
    },
    {
        "slug": "voynich-manuscript-works",
        "name": "Voynich manuscript works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Voynich manuscript.",
        "description": "Primary works and adaptations through which most audiences encounter Voynich manuscript."
    },
    {
        "slug": "voynich-manuscript-symbols",
        "name": "Voynich manuscript symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Voynich manuscript.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Voynich manuscript."
    },
    {
        "slug": "voynich-manuscript-controversies",
        "name": "Voynich manuscript controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Voynich manuscript.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Voynich manuscript argumentative."
    },
    {
        "slug": "voynich-manuscript-sources",
        "name": "Voynich manuscript sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Voynich manuscript.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Voynich manuscript."
    },
    {
        "slug": "voynich-manuscript-geography",
        "name": "Voynich manuscript geography",
        "type": "place",
        "short_description": "Broader geographic framing for Voynich manuscript.",
        "description": "Regions, routes, and spatial systems that situate Voynich manuscript beyond single named places."
    },
    {
        "slug": "voynich-manuscript-legacy",
        "name": "Voynich manuscript legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Voynich manuscript.",
        "description": "How Voynich manuscript continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "voynich-manuscript-practices",
        "name": "Voynich manuscript practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Voynich manuscript.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Voynich manuscript."
    },
    {
        "slug": "voynich-manuscript-entry-1",
        "name": "Voynich manuscript entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-2",
        "name": "Voynich manuscript entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-3",
        "name": "Voynich manuscript entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-4",
        "name": "Voynich manuscript entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-5",
        "name": "Voynich manuscript entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-6",
        "name": "Voynich manuscript entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-7",
        "name": "Voynich manuscript entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-8",
        "name": "Voynich manuscript entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-9",
        "name": "Voynich manuscript entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-10",
        "name": "Voynich manuscript entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-11",
        "name": "Voynich manuscript entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-12",
        "name": "Voynich manuscript entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-13",
        "name": "Voynich manuscript entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-14",
        "name": "Voynich manuscript entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-15",
        "name": "Voynich manuscript entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-16",
        "name": "Voynich manuscript entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-17",
        "name": "Voynich manuscript entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-18",
        "name": "Voynich manuscript entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-19",
        "name": "Voynich manuscript entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-20",
        "name": "Voynich manuscript entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-21",
        "name": "Voynich manuscript entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-22",
        "name": "Voynich manuscript entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-23",
        "name": "Voynich manuscript entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voynich-manuscript-entry-24",
        "name": "Voynich manuscript entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voynich manuscript.",
        "description": "A supporting encyclopedia entry in the Voynich manuscript subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "voynich-manuscript",
        "voynich-manuscript-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-places",
        "contains",
        "Voynich manuscript places is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-events",
        "contains",
        "Voynich manuscript events is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-objects",
        "contains",
        "Voynich manuscript objects & artifacts is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-factions",
        "contains",
        "Voynich manuscript factions & groups is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-concepts",
        "contains",
        "Voynich manuscript concepts is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-eras",
        "contains",
        "Voynich manuscript eras is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-works",
        "contains",
        "Voynich manuscript works & media is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-symbols",
        "contains",
        "Voynich manuscript symbols is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-controversies",
        "contains",
        "Voynich manuscript controversies is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-sources",
        "contains",
        "Voynich manuscript sources is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-geography",
        "contains",
        "Voynich manuscript geography is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-legacy",
        "contains",
        "Voynich manuscript legacy is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-practices",
        "contains",
        "Voynich manuscript practices is a primary trailhead under Voynich manuscript.",
        0.88,
        0.82
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-1",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-2",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-3",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-4",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-5",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-6",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-7",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-8",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-9",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-10",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-11",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-12",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-13",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-14",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-15",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-16",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-17",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-18",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-19",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-20",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-21",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-22",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-23",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ],
    [
        "voynich-manuscript",
        "voynich-manuscript-entry-24",
        "contains",
        "Supporting entry under Voynich manuscript.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
