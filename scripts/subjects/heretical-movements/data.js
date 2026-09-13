/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "heretical-movements",
        "name": "Heretical movements & religious mysteries",
        "type": "topic",
        "short_description": "Banned doctrines, mystery cults, underground churches, and the conflicts that made orthodoxy visible.",
        "description": "Banned doctrines, mystery cults, underground churches, and the conflicts that made orthodoxy visible. This Ton-o-Lore subject maps people, places, events, and ideas tied to Heretical movements & religious mysteries so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "heretical-movements-figures",
        "name": "Heretical movements & religious mysteries figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Heretical movements & religious mysteries.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Heretical movements & religious mysteries."
    },
    {
        "slug": "heretical-movements-world",
        "name": "Heretical movements & religious mysteries world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Heretical movements & religious mysteries.",
        "description": "Geography, institutions, and periodization that give Heretical movements & religious mysteries its encyclopedia shape."
    },
    {
        "slug": "heretical-movements-places",
        "name": "Heretical movements & religious mysteries places",
        "type": "place",
        "short_description": "Locations and geographies that frame Heretical movements & religious mysteries.",
        "description": "Places, regions, and built sites that give Heretical movements & religious mysteries its map — where events and figures concentrate."
    },
    {
        "slug": "heretical-movements-events",
        "name": "Heretical movements & religious mysteries events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Heretical movements & religious mysteries.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Heretical movements & religious mysteries timeline."
    },
    {
        "slug": "heretical-movements-objects",
        "name": "Heretical movements & religious mysteries objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Heretical movements & religious mysteries.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Heretical movements & religious mysteries."
    },
    {
        "slug": "heretical-movements-factions",
        "name": "Heretical movements & religious mysteries factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Heretical movements & religious mysteries.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Heretical movements & religious mysteries."
    },
    {
        "slug": "heretical-movements-concepts",
        "name": "Heretical movements & religious mysteries concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Heretical movements & religious mysteries.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Heretical movements & religious mysteries readable as a lore graph."
    },
    {
        "slug": "heretical-movements-eras",
        "name": "Heretical movements & religious mysteries eras",
        "type": "event",
        "short_description": "Periodization for Heretical movements & religious mysteries.",
        "description": "Named eras and phases that help readers track how Heretical movements & religious mysteries changes across time."
    },
    {
        "slug": "heretical-movements-works",
        "name": "Heretical movements & religious mysteries works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Heretical movements & religious mysteries.",
        "description": "Primary works and adaptations through which most audiences encounter Heretical movements & religious mysteries."
    },
    {
        "slug": "heretical-movements-symbols",
        "name": "Heretical movements & religious mysteries symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Heretical movements & religious mysteries.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Heretical movements & religious mysteries."
    },
    {
        "slug": "heretical-movements-controversies",
        "name": "Heretical movements & religious mysteries controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Heretical movements & religious mysteries.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Heretical movements & religious mysteries argumentative."
    },
    {
        "slug": "heretical-movements-sources",
        "name": "Heretical movements & religious mysteries sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Heretical movements & religious mysteries.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Heretical movements & religious mysteries."
    },
    {
        "slug": "heretical-movements-geography",
        "name": "Heretical movements & religious mysteries geography",
        "type": "place",
        "short_description": "Broader geographic framing for Heretical movements & religious mysteries.",
        "description": "Regions, routes, and spatial systems that situate Heretical movements & religious mysteries beyond single named places."
    },
    {
        "slug": "heretical-movements-legacy",
        "name": "Heretical movements & religious mysteries legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Heretical movements & religious mysteries.",
        "description": "How Heretical movements & religious mysteries continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "heretical-movements-practices",
        "name": "Heretical movements & religious mysteries practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Heretical movements & religious mysteries.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Heretical movements & religious mysteries."
    },
    {
        "slug": "heretical-movements-entry-1",
        "name": "Heretical movements & religious mysteries entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-2",
        "name": "Heretical movements & religious mysteries entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-3",
        "name": "Heretical movements & religious mysteries entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-4",
        "name": "Heretical movements & religious mysteries entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-5",
        "name": "Heretical movements & religious mysteries entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-6",
        "name": "Heretical movements & religious mysteries entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-7",
        "name": "Heretical movements & religious mysteries entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-8",
        "name": "Heretical movements & religious mysteries entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-9",
        "name": "Heretical movements & religious mysteries entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-10",
        "name": "Heretical movements & religious mysteries entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-11",
        "name": "Heretical movements & religious mysteries entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-12",
        "name": "Heretical movements & religious mysteries entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-13",
        "name": "Heretical movements & religious mysteries entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-14",
        "name": "Heretical movements & religious mysteries entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-15",
        "name": "Heretical movements & religious mysteries entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-16",
        "name": "Heretical movements & religious mysteries entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-17",
        "name": "Heretical movements & religious mysteries entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-18",
        "name": "Heretical movements & religious mysteries entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-19",
        "name": "Heretical movements & religious mysteries entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-20",
        "name": "Heretical movements & religious mysteries entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-21",
        "name": "Heretical movements & religious mysteries entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-22",
        "name": "Heretical movements & religious mysteries entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-23",
        "name": "Heretical movements & religious mysteries entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "heretical-movements-entry-24",
        "name": "Heretical movements & religious mysteries entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Heretical movements & religious mysteries.",
        "description": "A supporting encyclopedia entry in the Heretical movements & religious mysteries subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "heretical-movements",
        "heretical-movements-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "heretical-movements",
        "heretical-movements-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "heretical-movements",
        "heretical-movements-places",
        "contains",
        "Heretical movements & religious mysteries places is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-events",
        "contains",
        "Heretical movements & religious mysteries events is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-objects",
        "contains",
        "Heretical movements & religious mysteries objects & artifacts is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-factions",
        "contains",
        "Heretical movements & religious mysteries factions & groups is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-concepts",
        "contains",
        "Heretical movements & religious mysteries concepts is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-eras",
        "contains",
        "Heretical movements & religious mysteries eras is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-works",
        "contains",
        "Heretical movements & religious mysteries works & media is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-symbols",
        "contains",
        "Heretical movements & religious mysteries symbols is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-controversies",
        "contains",
        "Heretical movements & religious mysteries controversies is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-sources",
        "contains",
        "Heretical movements & religious mysteries sources is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-geography",
        "contains",
        "Heretical movements & religious mysteries geography is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-legacy",
        "contains",
        "Heretical movements & religious mysteries legacy is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-practices",
        "contains",
        "Heretical movements & religious mysteries practices is a primary trailhead under Heretical movements & religious mysteries.",
        0.88,
        0.82
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-1",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-2",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-3",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-4",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-5",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-6",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-7",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-8",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-9",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-10",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-11",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-12",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-13",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-14",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-15",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-16",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-17",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-18",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-19",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-20",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-21",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-22",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-23",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ],
    [
        "heretical-movements",
        "heretical-movements-entry-24",
        "contains",
        "Supporting entry under Heretical movements & religious mysteries.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
