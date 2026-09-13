/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dungeons-and-daddies",
        "name": "Dungeons & Daddies",
        "type": "topic",
        "short_description": "Actual-play comedy with serialized emotional arcs and a fiercely loyal tabletop-audio fandom.",
        "description": "Actual-play comedy with serialized emotional arcs and a fiercely loyal tabletop-audio fandom. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dungeons & Daddies so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "dungeons-and-daddies-figures",
        "name": "Dungeons & Daddies figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dungeons & Daddies.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dungeons & Daddies."
    },
    {
        "slug": "dungeons-and-daddies-world",
        "name": "Dungeons & Daddies world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dungeons & Daddies.",
        "description": "Geography, institutions, and periodization that give Dungeons & Daddies its encyclopedia shape."
    },
    {
        "slug": "dungeons-and-daddies-places",
        "name": "Dungeons & Daddies places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dungeons & Daddies.",
        "description": "Places, regions, and built sites that give Dungeons & Daddies its map — where events and figures concentrate."
    },
    {
        "slug": "dungeons-and-daddies-events",
        "name": "Dungeons & Daddies events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dungeons & Daddies.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dungeons & Daddies timeline."
    },
    {
        "slug": "dungeons-and-daddies-objects",
        "name": "Dungeons & Daddies objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dungeons & Daddies.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dungeons & Daddies."
    },
    {
        "slug": "dungeons-and-daddies-factions",
        "name": "Dungeons & Daddies factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dungeons & Daddies.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dungeons & Daddies."
    },
    {
        "slug": "dungeons-and-daddies-concepts",
        "name": "Dungeons & Daddies concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dungeons & Daddies.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dungeons & Daddies readable as a lore graph."
    },
    {
        "slug": "dungeons-and-daddies-eras",
        "name": "Dungeons & Daddies eras",
        "type": "event",
        "short_description": "Periodization for Dungeons & Daddies.",
        "description": "Named eras and phases that help readers track how Dungeons & Daddies changes across time."
    },
    {
        "slug": "dungeons-and-daddies-works",
        "name": "Dungeons & Daddies works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dungeons & Daddies.",
        "description": "Primary works and adaptations through which most audiences encounter Dungeons & Daddies."
    },
    {
        "slug": "dungeons-and-daddies-symbols",
        "name": "Dungeons & Daddies symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dungeons & Daddies.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dungeons & Daddies."
    },
    {
        "slug": "dungeons-and-daddies-controversies",
        "name": "Dungeons & Daddies controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dungeons & Daddies.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dungeons & Daddies argumentative."
    },
    {
        "slug": "dungeons-and-daddies-sources",
        "name": "Dungeons & Daddies sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dungeons & Daddies.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dungeons & Daddies."
    },
    {
        "slug": "dungeons-and-daddies-geography",
        "name": "Dungeons & Daddies geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dungeons & Daddies.",
        "description": "Regions, routes, and spatial systems that situate Dungeons & Daddies beyond single named places."
    },
    {
        "slug": "dungeons-and-daddies-legacy",
        "name": "Dungeons & Daddies legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dungeons & Daddies.",
        "description": "How Dungeons & Daddies continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dungeons-and-daddies-practices",
        "name": "Dungeons & Daddies practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dungeons & Daddies.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dungeons & Daddies."
    },
    {
        "slug": "dungeons-and-daddies-entry-1",
        "name": "Dungeons & Daddies entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-2",
        "name": "Dungeons & Daddies entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-3",
        "name": "Dungeons & Daddies entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-4",
        "name": "Dungeons & Daddies entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-5",
        "name": "Dungeons & Daddies entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-6",
        "name": "Dungeons & Daddies entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-7",
        "name": "Dungeons & Daddies entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-8",
        "name": "Dungeons & Daddies entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-9",
        "name": "Dungeons & Daddies entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-10",
        "name": "Dungeons & Daddies entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-11",
        "name": "Dungeons & Daddies entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-12",
        "name": "Dungeons & Daddies entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-13",
        "name": "Dungeons & Daddies entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-14",
        "name": "Dungeons & Daddies entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-15",
        "name": "Dungeons & Daddies entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-16",
        "name": "Dungeons & Daddies entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-17",
        "name": "Dungeons & Daddies entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-18",
        "name": "Dungeons & Daddies entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-19",
        "name": "Dungeons & Daddies entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-20",
        "name": "Dungeons & Daddies entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-21",
        "name": "Dungeons & Daddies entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-22",
        "name": "Dungeons & Daddies entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-23",
        "name": "Dungeons & Daddies entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dungeons-and-daddies-entry-24",
        "name": "Dungeons & Daddies entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dungeons & Daddies.",
        "description": "A supporting encyclopedia entry in the Dungeons & Daddies subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-places",
        "contains",
        "Dungeons & Daddies places is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-events",
        "contains",
        "Dungeons & Daddies events is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-objects",
        "contains",
        "Dungeons & Daddies objects & artifacts is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-factions",
        "contains",
        "Dungeons & Daddies factions & groups is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-concepts",
        "contains",
        "Dungeons & Daddies concepts is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-eras",
        "contains",
        "Dungeons & Daddies eras is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-works",
        "contains",
        "Dungeons & Daddies works & media is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-symbols",
        "contains",
        "Dungeons & Daddies symbols is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-controversies",
        "contains",
        "Dungeons & Daddies controversies is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-sources",
        "contains",
        "Dungeons & Daddies sources is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-geography",
        "contains",
        "Dungeons & Daddies geography is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-legacy",
        "contains",
        "Dungeons & Daddies legacy is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-practices",
        "contains",
        "Dungeons & Daddies practices is a primary trailhead under Dungeons & Daddies.",
        0.88,
        0.82
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-1",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-2",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-3",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-4",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-5",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-6",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-7",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-8",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-9",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-10",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-11",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-12",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-13",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-14",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-15",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-16",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-17",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-18",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-19",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-20",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-21",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-22",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-23",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ],
    [
        "dungeons-and-daddies",
        "dungeons-and-daddies-entry-24",
        "contains",
        "Supporting entry under Dungeons & Daddies.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
