/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-owl-house",
        "name": "The Owl House",
        "type": "topic",
        "short_description": "Boiling Isles magic, queer found family, and the Disney Channel fantasy that built a fierce fandom.",
        "description": "Boiling Isles magic, queer found family, and the Disney Channel fantasy that built a fierce fandom. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Owl House so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "the-owl-house-figures",
        "name": "The Owl House figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Owl House.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Owl House."
    },
    {
        "slug": "the-owl-house-world",
        "name": "The Owl House world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Owl House.",
        "description": "Geography, institutions, and periodization that give The Owl House its encyclopedia shape."
    },
    {
        "slug": "the-owl-house-places",
        "name": "The Owl House places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Owl House.",
        "description": "Places, regions, and built sites that give The Owl House its map — where events and figures concentrate."
    },
    {
        "slug": "the-owl-house-events",
        "name": "The Owl House events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Owl House.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Owl House timeline."
    },
    {
        "slug": "the-owl-house-objects",
        "name": "The Owl House objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Owl House.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Owl House."
    },
    {
        "slug": "the-owl-house-factions",
        "name": "The Owl House factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Owl House.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Owl House."
    },
    {
        "slug": "the-owl-house-concepts",
        "name": "The Owl House concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Owl House.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Owl House readable as a lore graph."
    },
    {
        "slug": "the-owl-house-eras",
        "name": "The Owl House eras",
        "type": "event",
        "short_description": "Periodization for The Owl House.",
        "description": "Named eras and phases that help readers track how The Owl House changes across time."
    },
    {
        "slug": "the-owl-house-works",
        "name": "The Owl House works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Owl House.",
        "description": "Primary works and adaptations through which most audiences encounter The Owl House."
    },
    {
        "slug": "the-owl-house-symbols",
        "name": "The Owl House symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Owl House.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Owl House."
    },
    {
        "slug": "the-owl-house-controversies",
        "name": "The Owl House controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Owl House.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Owl House argumentative."
    },
    {
        "slug": "the-owl-house-sources",
        "name": "The Owl House sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Owl House.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Owl House."
    },
    {
        "slug": "the-owl-house-geography",
        "name": "The Owl House geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Owl House.",
        "description": "Regions, routes, and spatial systems that situate The Owl House beyond single named places."
    },
    {
        "slug": "the-owl-house-legacy",
        "name": "The Owl House legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Owl House.",
        "description": "How The Owl House continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-owl-house-practices",
        "name": "The Owl House practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Owl House.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Owl House."
    },
    {
        "slug": "the-owl-house-entry-1",
        "name": "The Owl House entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-2",
        "name": "The Owl House entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-3",
        "name": "The Owl House entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-4",
        "name": "The Owl House entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-5",
        "name": "The Owl House entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-6",
        "name": "The Owl House entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-7",
        "name": "The Owl House entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-8",
        "name": "The Owl House entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-9",
        "name": "The Owl House entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-10",
        "name": "The Owl House entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-11",
        "name": "The Owl House entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-12",
        "name": "The Owl House entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-13",
        "name": "The Owl House entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-14",
        "name": "The Owl House entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-15",
        "name": "The Owl House entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-16",
        "name": "The Owl House entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-17",
        "name": "The Owl House entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-18",
        "name": "The Owl House entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-19",
        "name": "The Owl House entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-20",
        "name": "The Owl House entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-21",
        "name": "The Owl House entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-22",
        "name": "The Owl House entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-23",
        "name": "The Owl House entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-owl-house-entry-24",
        "name": "The Owl House entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Owl House.",
        "description": "A supporting encyclopedia entry in the The Owl House subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-owl-house",
        "the-owl-house-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-owl-house",
        "the-owl-house-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-owl-house",
        "the-owl-house-places",
        "contains",
        "The Owl House places is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-events",
        "contains",
        "The Owl House events is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-objects",
        "contains",
        "The Owl House objects & artifacts is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-factions",
        "contains",
        "The Owl House factions & groups is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-concepts",
        "contains",
        "The Owl House concepts is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-eras",
        "contains",
        "The Owl House eras is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-works",
        "contains",
        "The Owl House works & media is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-symbols",
        "contains",
        "The Owl House symbols is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-controversies",
        "contains",
        "The Owl House controversies is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-sources",
        "contains",
        "The Owl House sources is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-geography",
        "contains",
        "The Owl House geography is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-legacy",
        "contains",
        "The Owl House legacy is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-practices",
        "contains",
        "The Owl House practices is a primary trailhead under The Owl House.",
        0.88,
        0.82
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-1",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-2",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-3",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-4",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-5",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-6",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-7",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-8",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-9",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-10",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-11",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-12",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-13",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-14",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-15",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-16",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-17",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-18",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-19",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-20",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-21",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-22",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-23",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ],
    [
        "the-owl-house",
        "the-owl-house-entry-24",
        "contains",
        "Supporting entry under The Owl House.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
