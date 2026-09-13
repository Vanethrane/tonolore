/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "journey-to-the-west",
        "name": "Journey to the West",
        "type": "topic",
        "short_description": "Sun Wukong's pilgrimage epic — demons, disciples, and East Asian adventure canon.",
        "description": "Sun Wukong's pilgrimage epic — demons, disciples, and East Asian adventure canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Journey to the West so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "journey-to-the-west-figures",
        "name": "Journey to the West figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Journey to the West.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Journey to the West."
    },
    {
        "slug": "journey-to-the-west-world",
        "name": "Journey to the West world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Journey to the West.",
        "description": "Geography, institutions, and periodization that give Journey to the West its encyclopedia shape."
    },
    {
        "slug": "journey-to-the-west-places",
        "name": "Journey to the West places",
        "type": "place",
        "short_description": "Locations and geographies that frame Journey to the West.",
        "description": "Places, regions, and built sites that give Journey to the West its map — where events and figures concentrate."
    },
    {
        "slug": "journey-to-the-west-events",
        "name": "Journey to the West events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Journey to the West.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Journey to the West timeline."
    },
    {
        "slug": "journey-to-the-west-objects",
        "name": "Journey to the West objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Journey to the West.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Journey to the West."
    },
    {
        "slug": "journey-to-the-west-factions",
        "name": "Journey to the West factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Journey to the West.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Journey to the West."
    },
    {
        "slug": "journey-to-the-west-concepts",
        "name": "Journey to the West concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Journey to the West.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Journey to the West readable as a lore graph."
    },
    {
        "slug": "journey-to-the-west-eras",
        "name": "Journey to the West eras",
        "type": "event",
        "short_description": "Periodization for Journey to the West.",
        "description": "Named eras and phases that help readers track how Journey to the West changes across time."
    },
    {
        "slug": "journey-to-the-west-works",
        "name": "Journey to the West works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Journey to the West.",
        "description": "Primary works and adaptations through which most audiences encounter Journey to the West."
    },
    {
        "slug": "journey-to-the-west-symbols",
        "name": "Journey to the West symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Journey to the West.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Journey to the West."
    },
    {
        "slug": "journey-to-the-west-controversies",
        "name": "Journey to the West controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Journey to the West.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Journey to the West argumentative."
    },
    {
        "slug": "journey-to-the-west-sources",
        "name": "Journey to the West sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Journey to the West.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Journey to the West."
    },
    {
        "slug": "journey-to-the-west-geography",
        "name": "Journey to the West geography",
        "type": "place",
        "short_description": "Broader geographic framing for Journey to the West.",
        "description": "Regions, routes, and spatial systems that situate Journey to the West beyond single named places."
    },
    {
        "slug": "journey-to-the-west-legacy",
        "name": "Journey to the West legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Journey to the West.",
        "description": "How Journey to the West continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "journey-to-the-west-practices",
        "name": "Journey to the West practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Journey to the West.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Journey to the West."
    },
    {
        "slug": "journey-to-the-west-entry-1",
        "name": "Journey to the West entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-2",
        "name": "Journey to the West entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-3",
        "name": "Journey to the West entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-4",
        "name": "Journey to the West entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-5",
        "name": "Journey to the West entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-6",
        "name": "Journey to the West entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-7",
        "name": "Journey to the West entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-8",
        "name": "Journey to the West entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-9",
        "name": "Journey to the West entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-10",
        "name": "Journey to the West entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-11",
        "name": "Journey to the West entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-12",
        "name": "Journey to the West entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-13",
        "name": "Journey to the West entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-14",
        "name": "Journey to the West entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-15",
        "name": "Journey to the West entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-16",
        "name": "Journey to the West entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-17",
        "name": "Journey to the West entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-18",
        "name": "Journey to the West entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-19",
        "name": "Journey to the West entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-20",
        "name": "Journey to the West entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-21",
        "name": "Journey to the West entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-22",
        "name": "Journey to the West entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-23",
        "name": "Journey to the West entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "journey-to-the-west-entry-24",
        "name": "Journey to the West entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Journey to the West.",
        "description": "A supporting encyclopedia entry in the Journey to the West subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "journey-to-the-west",
        "journey-to-the-west-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-places",
        "contains",
        "Journey to the West places is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-events",
        "contains",
        "Journey to the West events is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-objects",
        "contains",
        "Journey to the West objects & artifacts is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-factions",
        "contains",
        "Journey to the West factions & groups is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-concepts",
        "contains",
        "Journey to the West concepts is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-eras",
        "contains",
        "Journey to the West eras is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-works",
        "contains",
        "Journey to the West works & media is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-symbols",
        "contains",
        "Journey to the West symbols is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-controversies",
        "contains",
        "Journey to the West controversies is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-sources",
        "contains",
        "Journey to the West sources is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-geography",
        "contains",
        "Journey to the West geography is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-legacy",
        "contains",
        "Journey to the West legacy is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-practices",
        "contains",
        "Journey to the West practices is a primary trailhead under Journey to the West.",
        0.88,
        0.82
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-1",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-2",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-3",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-4",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-5",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-6",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-7",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-8",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-9",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-10",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-11",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-12",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-13",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-14",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-15",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-16",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-17",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-18",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-19",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-20",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-21",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-22",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-23",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-entry-24",
        "contains",
        "Supporting entry under Journey to the West.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
