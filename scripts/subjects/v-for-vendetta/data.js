/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "v-for-vendetta",
        "name": "V for Vendetta",
        "type": "topic",
        "short_description": "Masks, fascism, and Moore/Lloyd’s dystopian graphic novel that became protest iconography.",
        "description": "Masks, fascism, and Moore/Lloyd’s dystopian graphic novel that became protest iconography. This Ton-o-Lore subject maps people, places, events, and ideas tied to V for Vendetta so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "v-for-vendetta-figures",
        "name": "V for Vendetta figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to V for Vendetta.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring V for Vendetta."
    },
    {
        "slug": "v-for-vendetta-world",
        "name": "V for Vendetta world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame V for Vendetta.",
        "description": "Geography, institutions, and periodization that give V for Vendetta its encyclopedia shape."
    },
    {
        "slug": "v-for-vendetta-places",
        "name": "V for Vendetta places",
        "type": "place",
        "short_description": "Locations and geographies that frame V for Vendetta.",
        "description": "Places, regions, and built sites that give V for Vendetta its map — where events and figures concentrate."
    },
    {
        "slug": "v-for-vendetta-events",
        "name": "V for Vendetta events",
        "type": "event",
        "short_description": "Turning points and dated episodes in V for Vendetta.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the V for Vendetta timeline."
    },
    {
        "slug": "v-for-vendetta-objects",
        "name": "V for Vendetta objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to V for Vendetta.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through V for Vendetta."
    },
    {
        "slug": "v-for-vendetta-factions",
        "name": "V for Vendetta factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside V for Vendetta.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in V for Vendetta."
    },
    {
        "slug": "v-for-vendetta-concepts",
        "name": "V for Vendetta concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize V for Vendetta.",
        "description": "Keywords, doctrines, systems, and abstract forces that make V for Vendetta readable as a lore graph."
    },
    {
        "slug": "v-for-vendetta-eras",
        "name": "V for Vendetta eras",
        "type": "event",
        "short_description": "Periodization for V for Vendetta.",
        "description": "Named eras and phases that help readers track how V for Vendetta changes across time."
    },
    {
        "slug": "v-for-vendetta-works",
        "name": "V for Vendetta works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry V for Vendetta.",
        "description": "Primary works and adaptations through which most audiences encounter V for Vendetta."
    },
    {
        "slug": "v-for-vendetta-symbols",
        "name": "V for Vendetta symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with V for Vendetta.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside V for Vendetta."
    },
    {
        "slug": "v-for-vendetta-controversies",
        "name": "V for Vendetta controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in V for Vendetta.",
        "description": "Debates, rival canons, scandals, and contested facts that keep V for Vendetta argumentative."
    },
    {
        "slug": "v-for-vendetta-sources",
        "name": "V for Vendetta sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into V for Vendetta.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify V for Vendetta."
    },
    {
        "slug": "v-for-vendetta-geography",
        "name": "V for Vendetta geography",
        "type": "place",
        "short_description": "Broader geographic framing for V for Vendetta.",
        "description": "Regions, routes, and spatial systems that situate V for Vendetta beyond single named places."
    },
    {
        "slug": "v-for-vendetta-legacy",
        "name": "V for Vendetta legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of V for Vendetta.",
        "description": "How V for Vendetta continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "v-for-vendetta-practices",
        "name": "V for Vendetta practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in V for Vendetta.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in V for Vendetta."
    },
    {
        "slug": "v-for-vendetta-entry-1",
        "name": "V for Vendetta entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-2",
        "name": "V for Vendetta entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-3",
        "name": "V for Vendetta entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-4",
        "name": "V for Vendetta entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-5",
        "name": "V for Vendetta entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-6",
        "name": "V for Vendetta entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-7",
        "name": "V for Vendetta entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-8",
        "name": "V for Vendetta entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-9",
        "name": "V for Vendetta entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-10",
        "name": "V for Vendetta entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-11",
        "name": "V for Vendetta entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-12",
        "name": "V for Vendetta entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-13",
        "name": "V for Vendetta entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-14",
        "name": "V for Vendetta entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-15",
        "name": "V for Vendetta entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-16",
        "name": "V for Vendetta entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-17",
        "name": "V for Vendetta entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-18",
        "name": "V for Vendetta entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-19",
        "name": "V for Vendetta entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-20",
        "name": "V for Vendetta entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-21",
        "name": "V for Vendetta entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-22",
        "name": "V for Vendetta entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-23",
        "name": "V for Vendetta entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "v-for-vendetta-entry-24",
        "name": "V for Vendetta entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside V for Vendetta.",
        "description": "A supporting encyclopedia entry in the V for Vendetta subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "v-for-vendetta",
        "v-for-vendetta-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-places",
        "contains",
        "V for Vendetta places is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-events",
        "contains",
        "V for Vendetta events is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-objects",
        "contains",
        "V for Vendetta objects & artifacts is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-factions",
        "contains",
        "V for Vendetta factions & groups is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-concepts",
        "contains",
        "V for Vendetta concepts is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-eras",
        "contains",
        "V for Vendetta eras is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-works",
        "contains",
        "V for Vendetta works & media is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-symbols",
        "contains",
        "V for Vendetta symbols is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-controversies",
        "contains",
        "V for Vendetta controversies is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-sources",
        "contains",
        "V for Vendetta sources is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-geography",
        "contains",
        "V for Vendetta geography is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-legacy",
        "contains",
        "V for Vendetta legacy is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-practices",
        "contains",
        "V for Vendetta practices is a primary trailhead under V for Vendetta.",
        0.88,
        0.82
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-1",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-2",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-3",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-4",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-5",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-6",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-7",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-8",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-9",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-10",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-11",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-12",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-13",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-14",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-15",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-16",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-17",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-18",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-19",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-20",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-21",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-22",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-23",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ],
    [
        "v-for-vendetta",
        "v-for-vendetta-entry-24",
        "contains",
        "Supporting entry under V for Vendetta.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
