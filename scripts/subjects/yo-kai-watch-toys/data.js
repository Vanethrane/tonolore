/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "yo-kai-watch-toys",
        "name": "Yo-kai Watch toys",
        "type": "topic",
        "short_description": "Medal collecting, watch devices, and the yokai-toy multimedia push aimed at Pokémon’s lane.",
        "description": "Medal collecting, watch devices, and the yokai-toy multimedia push aimed at Pokémon’s lane. This Ton-o-Lore subject maps people, places, events, and ideas tied to Yo-kai Watch toys so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "yo-kai-watch-toys-figures",
        "name": "Yo-kai Watch toys figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Yo-kai Watch toys.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Yo-kai Watch toys."
    },
    {
        "slug": "yo-kai-watch-toys-world",
        "name": "Yo-kai Watch toys world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Yo-kai Watch toys.",
        "description": "Geography, institutions, and periodization that give Yo-kai Watch toys its encyclopedia shape."
    },
    {
        "slug": "yo-kai-watch-toys-places",
        "name": "Yo-kai Watch toys places",
        "type": "place",
        "short_description": "Locations and geographies that frame Yo-kai Watch toys.",
        "description": "Places, regions, and built sites that give Yo-kai Watch toys its map — where events and figures concentrate."
    },
    {
        "slug": "yo-kai-watch-toys-events",
        "name": "Yo-kai Watch toys events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Yo-kai Watch toys.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Yo-kai Watch toys timeline."
    },
    {
        "slug": "yo-kai-watch-toys-objects",
        "name": "Yo-kai Watch toys objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Yo-kai Watch toys.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Yo-kai Watch toys."
    },
    {
        "slug": "yo-kai-watch-toys-factions",
        "name": "Yo-kai Watch toys factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Yo-kai Watch toys.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Yo-kai Watch toys."
    },
    {
        "slug": "yo-kai-watch-toys-concepts",
        "name": "Yo-kai Watch toys concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Yo-kai Watch toys.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Yo-kai Watch toys readable as a lore graph."
    },
    {
        "slug": "yo-kai-watch-toys-eras",
        "name": "Yo-kai Watch toys eras",
        "type": "event",
        "short_description": "Periodization for Yo-kai Watch toys.",
        "description": "Named eras and phases that help readers track how Yo-kai Watch toys changes across time."
    },
    {
        "slug": "yo-kai-watch-toys-works",
        "name": "Yo-kai Watch toys works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Yo-kai Watch toys.",
        "description": "Primary works and adaptations through which most audiences encounter Yo-kai Watch toys."
    },
    {
        "slug": "yo-kai-watch-toys-symbols",
        "name": "Yo-kai Watch toys symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Yo-kai Watch toys.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Yo-kai Watch toys."
    },
    {
        "slug": "yo-kai-watch-toys-controversies",
        "name": "Yo-kai Watch toys controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Yo-kai Watch toys.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Yo-kai Watch toys argumentative."
    },
    {
        "slug": "yo-kai-watch-toys-sources",
        "name": "Yo-kai Watch toys sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Yo-kai Watch toys.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Yo-kai Watch toys."
    },
    {
        "slug": "yo-kai-watch-toys-geography",
        "name": "Yo-kai Watch toys geography",
        "type": "place",
        "short_description": "Broader geographic framing for Yo-kai Watch toys.",
        "description": "Regions, routes, and spatial systems that situate Yo-kai Watch toys beyond single named places."
    },
    {
        "slug": "yo-kai-watch-toys-legacy",
        "name": "Yo-kai Watch toys legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Yo-kai Watch toys.",
        "description": "How Yo-kai Watch toys continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "yo-kai-watch-toys-practices",
        "name": "Yo-kai Watch toys practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Yo-kai Watch toys.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Yo-kai Watch toys."
    },
    {
        "slug": "yo-kai-watch-toys-entry-1",
        "name": "Yo-kai Watch toys entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-2",
        "name": "Yo-kai Watch toys entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-3",
        "name": "Yo-kai Watch toys entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-4",
        "name": "Yo-kai Watch toys entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-5",
        "name": "Yo-kai Watch toys entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-6",
        "name": "Yo-kai Watch toys entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-7",
        "name": "Yo-kai Watch toys entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-8",
        "name": "Yo-kai Watch toys entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-9",
        "name": "Yo-kai Watch toys entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-10",
        "name": "Yo-kai Watch toys entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-11",
        "name": "Yo-kai Watch toys entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-12",
        "name": "Yo-kai Watch toys entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-13",
        "name": "Yo-kai Watch toys entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-14",
        "name": "Yo-kai Watch toys entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-15",
        "name": "Yo-kai Watch toys entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-16",
        "name": "Yo-kai Watch toys entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-17",
        "name": "Yo-kai Watch toys entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-18",
        "name": "Yo-kai Watch toys entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-19",
        "name": "Yo-kai Watch toys entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-20",
        "name": "Yo-kai Watch toys entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-21",
        "name": "Yo-kai Watch toys entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-22",
        "name": "Yo-kai Watch toys entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-23",
        "name": "Yo-kai Watch toys entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yo-kai-watch-toys-entry-24",
        "name": "Yo-kai Watch toys entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yo-kai Watch toys.",
        "description": "A supporting encyclopedia entry in the Yo-kai Watch toys subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-places",
        "contains",
        "Yo-kai Watch toys places is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-events",
        "contains",
        "Yo-kai Watch toys events is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-objects",
        "contains",
        "Yo-kai Watch toys objects & artifacts is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-factions",
        "contains",
        "Yo-kai Watch toys factions & groups is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-concepts",
        "contains",
        "Yo-kai Watch toys concepts is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-eras",
        "contains",
        "Yo-kai Watch toys eras is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-works",
        "contains",
        "Yo-kai Watch toys works & media is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-symbols",
        "contains",
        "Yo-kai Watch toys symbols is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-controversies",
        "contains",
        "Yo-kai Watch toys controversies is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-sources",
        "contains",
        "Yo-kai Watch toys sources is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-geography",
        "contains",
        "Yo-kai Watch toys geography is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-legacy",
        "contains",
        "Yo-kai Watch toys legacy is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-practices",
        "contains",
        "Yo-kai Watch toys practices is a primary trailhead under Yo-kai Watch toys.",
        0.88,
        0.82
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-1",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-2",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-3",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-4",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-5",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-6",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-7",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-8",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-9",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-10",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-11",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-12",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-13",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-14",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-15",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-16",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-17",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-18",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-19",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-20",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-21",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-22",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-23",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ],
    [
        "yo-kai-watch-toys",
        "yo-kai-watch-toys-entry-24",
        "contains",
        "Supporting entry under Yo-kai Watch toys.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
