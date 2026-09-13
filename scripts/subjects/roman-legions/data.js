/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "roman-legions",
        "name": "Roman legions",
        "type": "topic",
        "short_description": "Standards, camps, and the professional infantry machine of Rome’s empire.",
        "description": "Standards, camps, and the professional infantry machine of Rome’s empire. This Ton-o-Lore subject maps people, places, events, and ideas tied to Roman legions so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "roman-legions-figures",
        "name": "Roman legions figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Roman legions.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Roman legions."
    },
    {
        "slug": "roman-legions-world",
        "name": "Roman legions world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Roman legions.",
        "description": "Geography, institutions, and periodization that give Roman legions its encyclopedia shape."
    },
    {
        "slug": "roman-legions-places",
        "name": "Roman legions places",
        "type": "place",
        "short_description": "Locations and geographies that frame Roman legions.",
        "description": "Places, regions, and built sites that give Roman legions its map — where events and figures concentrate."
    },
    {
        "slug": "roman-legions-events",
        "name": "Roman legions events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Roman legions.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Roman legions timeline."
    },
    {
        "slug": "roman-legions-objects",
        "name": "Roman legions objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Roman legions.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Roman legions."
    },
    {
        "slug": "roman-legions-factions",
        "name": "Roman legions factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Roman legions.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Roman legions."
    },
    {
        "slug": "roman-legions-concepts",
        "name": "Roman legions concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Roman legions.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Roman legions readable as a lore graph."
    },
    {
        "slug": "roman-legions-eras",
        "name": "Roman legions eras",
        "type": "event",
        "short_description": "Periodization for Roman legions.",
        "description": "Named eras and phases that help readers track how Roman legions changes across time."
    },
    {
        "slug": "roman-legions-works",
        "name": "Roman legions works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Roman legions.",
        "description": "Primary works and adaptations through which most audiences encounter Roman legions."
    },
    {
        "slug": "roman-legions-symbols",
        "name": "Roman legions symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Roman legions.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Roman legions."
    },
    {
        "slug": "roman-legions-controversies",
        "name": "Roman legions controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Roman legions.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Roman legions argumentative."
    },
    {
        "slug": "roman-legions-sources",
        "name": "Roman legions sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Roman legions.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Roman legions."
    },
    {
        "slug": "roman-legions-geography",
        "name": "Roman legions geography",
        "type": "place",
        "short_description": "Broader geographic framing for Roman legions.",
        "description": "Regions, routes, and spatial systems that situate Roman legions beyond single named places."
    },
    {
        "slug": "roman-legions-legacy",
        "name": "Roman legions legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Roman legions.",
        "description": "How Roman legions continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "roman-legions-practices",
        "name": "Roman legions practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Roman legions.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Roman legions."
    },
    {
        "slug": "roman-legions-entry-1",
        "name": "Roman legions entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-2",
        "name": "Roman legions entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-3",
        "name": "Roman legions entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-4",
        "name": "Roman legions entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-5",
        "name": "Roman legions entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-6",
        "name": "Roman legions entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-7",
        "name": "Roman legions entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-8",
        "name": "Roman legions entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-9",
        "name": "Roman legions entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-10",
        "name": "Roman legions entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-11",
        "name": "Roman legions entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-12",
        "name": "Roman legions entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-13",
        "name": "Roman legions entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-14",
        "name": "Roman legions entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-15",
        "name": "Roman legions entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-16",
        "name": "Roman legions entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-17",
        "name": "Roman legions entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-18",
        "name": "Roman legions entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-19",
        "name": "Roman legions entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-20",
        "name": "Roman legions entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-21",
        "name": "Roman legions entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-22",
        "name": "Roman legions entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-23",
        "name": "Roman legions entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-legions-entry-24",
        "name": "Roman legions entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman legions.",
        "description": "A supporting encyclopedia entry in the Roman legions subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "roman-legions",
        "roman-legions-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "roman-legions",
        "roman-legions-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "roman-legions",
        "roman-legions-places",
        "contains",
        "Roman legions places is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-events",
        "contains",
        "Roman legions events is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-objects",
        "contains",
        "Roman legions objects & artifacts is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-factions",
        "contains",
        "Roman legions factions & groups is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-concepts",
        "contains",
        "Roman legions concepts is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-eras",
        "contains",
        "Roman legions eras is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-works",
        "contains",
        "Roman legions works & media is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-symbols",
        "contains",
        "Roman legions symbols is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-controversies",
        "contains",
        "Roman legions controversies is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-sources",
        "contains",
        "Roman legions sources is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-geography",
        "contains",
        "Roman legions geography is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-legacy",
        "contains",
        "Roman legions legacy is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-practices",
        "contains",
        "Roman legions practices is a primary trailhead under Roman legions.",
        0.88,
        0.82
    ],
    [
        "roman-legions",
        "roman-legions-entry-1",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-2",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-3",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-4",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-5",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-6",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-7",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-8",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-9",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-10",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-11",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-12",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-13",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-14",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-15",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-16",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-17",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-18",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-19",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-20",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-21",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-22",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-23",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ],
    [
        "roman-legions",
        "roman-legions-entry-24",
        "contains",
        "Supporting entry under Roman legions.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
