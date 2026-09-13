/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "planet-money",
        "name": "Planet Money",
        "type": "topic",
        "short_description": "Economics explainers with narrative hooks that made markets listenable.",
        "description": "Economics explainers with narrative hooks that made markets listenable. This Ton-o-Lore subject maps people, places, events, and ideas tied to Planet Money so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "planet-money-figures",
        "name": "Planet Money figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Planet Money.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Planet Money."
    },
    {
        "slug": "planet-money-world",
        "name": "Planet Money world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Planet Money.",
        "description": "Geography, institutions, and periodization that give Planet Money its encyclopedia shape."
    },
    {
        "slug": "planet-money-places",
        "name": "Planet Money places",
        "type": "place",
        "short_description": "Locations and geographies that frame Planet Money.",
        "description": "Places, regions, and built sites that give Planet Money its map — where events and figures concentrate."
    },
    {
        "slug": "planet-money-events",
        "name": "Planet Money events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Planet Money.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Planet Money timeline."
    },
    {
        "slug": "planet-money-objects",
        "name": "Planet Money objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Planet Money.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Planet Money."
    },
    {
        "slug": "planet-money-factions",
        "name": "Planet Money factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Planet Money.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Planet Money."
    },
    {
        "slug": "planet-money-concepts",
        "name": "Planet Money concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Planet Money.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Planet Money readable as a lore graph."
    },
    {
        "slug": "planet-money-eras",
        "name": "Planet Money eras",
        "type": "event",
        "short_description": "Periodization for Planet Money.",
        "description": "Named eras and phases that help readers track how Planet Money changes across time."
    },
    {
        "slug": "planet-money-works",
        "name": "Planet Money works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Planet Money.",
        "description": "Primary works and adaptations through which most audiences encounter Planet Money."
    },
    {
        "slug": "planet-money-symbols",
        "name": "Planet Money symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Planet Money.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Planet Money."
    },
    {
        "slug": "planet-money-controversies",
        "name": "Planet Money controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Planet Money.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Planet Money argumentative."
    },
    {
        "slug": "planet-money-sources",
        "name": "Planet Money sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Planet Money.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Planet Money."
    },
    {
        "slug": "planet-money-geography",
        "name": "Planet Money geography",
        "type": "place",
        "short_description": "Broader geographic framing for Planet Money.",
        "description": "Regions, routes, and spatial systems that situate Planet Money beyond single named places."
    },
    {
        "slug": "planet-money-legacy",
        "name": "Planet Money legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Planet Money.",
        "description": "How Planet Money continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "planet-money-practices",
        "name": "Planet Money practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Planet Money.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Planet Money."
    },
    {
        "slug": "planet-money-entry-1",
        "name": "Planet Money entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-2",
        "name": "Planet Money entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-3",
        "name": "Planet Money entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-4",
        "name": "Planet Money entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-5",
        "name": "Planet Money entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-6",
        "name": "Planet Money entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-7",
        "name": "Planet Money entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-8",
        "name": "Planet Money entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-9",
        "name": "Planet Money entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-10",
        "name": "Planet Money entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-11",
        "name": "Planet Money entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-12",
        "name": "Planet Money entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-13",
        "name": "Planet Money entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-14",
        "name": "Planet Money entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-15",
        "name": "Planet Money entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-16",
        "name": "Planet Money entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-17",
        "name": "Planet Money entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-18",
        "name": "Planet Money entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-19",
        "name": "Planet Money entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-20",
        "name": "Planet Money entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-21",
        "name": "Planet Money entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-22",
        "name": "Planet Money entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-23",
        "name": "Planet Money entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "planet-money-entry-24",
        "name": "Planet Money entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Planet Money.",
        "description": "A supporting encyclopedia entry in the Planet Money subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "planet-money",
        "planet-money-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "planet-money",
        "planet-money-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "planet-money",
        "planet-money-places",
        "contains",
        "Planet Money places is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-events",
        "contains",
        "Planet Money events is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-objects",
        "contains",
        "Planet Money objects & artifacts is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-factions",
        "contains",
        "Planet Money factions & groups is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-concepts",
        "contains",
        "Planet Money concepts is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-eras",
        "contains",
        "Planet Money eras is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-works",
        "contains",
        "Planet Money works & media is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-symbols",
        "contains",
        "Planet Money symbols is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-controversies",
        "contains",
        "Planet Money controversies is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-sources",
        "contains",
        "Planet Money sources is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-geography",
        "contains",
        "Planet Money geography is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-legacy",
        "contains",
        "Planet Money legacy is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-practices",
        "contains",
        "Planet Money practices is a primary trailhead under Planet Money.",
        0.88,
        0.82
    ],
    [
        "planet-money",
        "planet-money-entry-1",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-2",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-3",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-4",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-5",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-6",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-7",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-8",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-9",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-10",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-11",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-12",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-13",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-14",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-15",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-16",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-17",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-18",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-19",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-20",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-21",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-22",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-23",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ],
    [
        "planet-money",
        "planet-money-entry-24",
        "contains",
        "Supporting entry under Planet Money.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
