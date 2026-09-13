/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "human-anatomy",
        "name": "Human anatomy",
        "type": "topic",
        "short_description": "Systems, organs, and the mapped body that medical science keeps refining.",
        "description": "Systems, organs, and the mapped body that medical science keeps refining. This Ton-o-Lore subject maps people, places, events, and ideas tied to Human anatomy so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "human-anatomy-figures",
        "name": "Human anatomy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Human anatomy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Human anatomy."
    },
    {
        "slug": "human-anatomy-world",
        "name": "Human anatomy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Human anatomy.",
        "description": "Geography, institutions, and periodization that give Human anatomy its encyclopedia shape."
    },
    {
        "slug": "human-anatomy-places",
        "name": "Human anatomy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Human anatomy.",
        "description": "Places, regions, and built sites that give Human anatomy its map — where events and figures concentrate."
    },
    {
        "slug": "human-anatomy-events",
        "name": "Human anatomy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Human anatomy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Human anatomy timeline."
    },
    {
        "slug": "human-anatomy-objects",
        "name": "Human anatomy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Human anatomy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Human anatomy."
    },
    {
        "slug": "human-anatomy-factions",
        "name": "Human anatomy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Human anatomy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Human anatomy."
    },
    {
        "slug": "human-anatomy-concepts",
        "name": "Human anatomy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Human anatomy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Human anatomy readable as a lore graph."
    },
    {
        "slug": "human-anatomy-eras",
        "name": "Human anatomy eras",
        "type": "event",
        "short_description": "Periodization for Human anatomy.",
        "description": "Named eras and phases that help readers track how Human anatomy changes across time."
    },
    {
        "slug": "human-anatomy-works",
        "name": "Human anatomy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Human anatomy.",
        "description": "Primary works and adaptations through which most audiences encounter Human anatomy."
    },
    {
        "slug": "human-anatomy-symbols",
        "name": "Human anatomy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Human anatomy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Human anatomy."
    },
    {
        "slug": "human-anatomy-controversies",
        "name": "Human anatomy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Human anatomy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Human anatomy argumentative."
    },
    {
        "slug": "human-anatomy-sources",
        "name": "Human anatomy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Human anatomy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Human anatomy."
    },
    {
        "slug": "human-anatomy-geography",
        "name": "Human anatomy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Human anatomy.",
        "description": "Regions, routes, and spatial systems that situate Human anatomy beyond single named places."
    },
    {
        "slug": "human-anatomy-legacy",
        "name": "Human anatomy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Human anatomy.",
        "description": "How Human anatomy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "human-anatomy-practices",
        "name": "Human anatomy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Human anatomy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Human anatomy."
    },
    {
        "slug": "human-anatomy-entry-1",
        "name": "Human anatomy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-2",
        "name": "Human anatomy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-3",
        "name": "Human anatomy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-4",
        "name": "Human anatomy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-5",
        "name": "Human anatomy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-6",
        "name": "Human anatomy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-7",
        "name": "Human anatomy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-8",
        "name": "Human anatomy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-9",
        "name": "Human anatomy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-10",
        "name": "Human anatomy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-11",
        "name": "Human anatomy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-12",
        "name": "Human anatomy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-13",
        "name": "Human anatomy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-14",
        "name": "Human anatomy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-15",
        "name": "Human anatomy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-16",
        "name": "Human anatomy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-17",
        "name": "Human anatomy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-18",
        "name": "Human anatomy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-19",
        "name": "Human anatomy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-20",
        "name": "Human anatomy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-21",
        "name": "Human anatomy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-22",
        "name": "Human anatomy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-23",
        "name": "Human anatomy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "human-anatomy-entry-24",
        "name": "Human anatomy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Human anatomy.",
        "description": "A supporting encyclopedia entry in the Human anatomy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "human-anatomy",
        "human-anatomy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "human-anatomy",
        "human-anatomy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "human-anatomy",
        "human-anatomy-places",
        "contains",
        "Human anatomy places is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-events",
        "contains",
        "Human anatomy events is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-objects",
        "contains",
        "Human anatomy objects & artifacts is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-factions",
        "contains",
        "Human anatomy factions & groups is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-concepts",
        "contains",
        "Human anatomy concepts is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-eras",
        "contains",
        "Human anatomy eras is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-works",
        "contains",
        "Human anatomy works & media is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-symbols",
        "contains",
        "Human anatomy symbols is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-controversies",
        "contains",
        "Human anatomy controversies is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-sources",
        "contains",
        "Human anatomy sources is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-geography",
        "contains",
        "Human anatomy geography is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-legacy",
        "contains",
        "Human anatomy legacy is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-practices",
        "contains",
        "Human anatomy practices is a primary trailhead under Human anatomy.",
        0.88,
        0.82
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-1",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-2",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-3",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-4",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-5",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-6",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-7",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-8",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-9",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-10",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-11",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-12",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-13",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-14",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-15",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-16",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-17",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-18",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-19",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-20",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-21",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-22",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-23",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ],
    [
        "human-anatomy",
        "human-anatomy-entry-24",
        "contains",
        "Supporting entry under Human anatomy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
