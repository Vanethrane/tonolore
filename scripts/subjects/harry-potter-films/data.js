/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "harry-potter-films",
        "name": "Harry Potter films",
        "type": "topic",
        "short_description": "Hogwarts on screen, house lore visuals, and the decade-long adaptation of Rowling’s saga.",
        "description": "Hogwarts on screen, house lore visuals, and the decade-long adaptation of Rowling’s saga. This Ton-o-Lore subject maps people, places, events, and ideas tied to Harry Potter films so readers can follow long-tail connections across movies."
    },
    {
        "slug": "harry-potter-films-figures",
        "name": "Harry Potter films figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Harry Potter films.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Harry Potter films."
    },
    {
        "slug": "harry-potter-films-world",
        "name": "Harry Potter films world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Harry Potter films.",
        "description": "Geography, institutions, and periodization that give Harry Potter films its encyclopedia shape."
    },
    {
        "slug": "harry-potter-films-places",
        "name": "Harry Potter films places",
        "type": "place",
        "short_description": "Locations and geographies that frame Harry Potter films.",
        "description": "Places, regions, and built sites that give Harry Potter films its map — where events and figures concentrate."
    },
    {
        "slug": "harry-potter-films-events",
        "name": "Harry Potter films events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Harry Potter films.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Harry Potter films timeline."
    },
    {
        "slug": "harry-potter-films-objects",
        "name": "Harry Potter films objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Harry Potter films.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Harry Potter films."
    },
    {
        "slug": "harry-potter-films-factions",
        "name": "Harry Potter films factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Harry Potter films.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Harry Potter films."
    },
    {
        "slug": "harry-potter-films-concepts",
        "name": "Harry Potter films concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Harry Potter films.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Harry Potter films readable as a lore graph."
    },
    {
        "slug": "harry-potter-films-eras",
        "name": "Harry Potter films eras",
        "type": "event",
        "short_description": "Periodization for Harry Potter films.",
        "description": "Named eras and phases that help readers track how Harry Potter films changes across time."
    },
    {
        "slug": "harry-potter-films-works",
        "name": "Harry Potter films works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Harry Potter films.",
        "description": "Primary works and adaptations through which most audiences encounter Harry Potter films."
    },
    {
        "slug": "harry-potter-films-symbols",
        "name": "Harry Potter films symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Harry Potter films.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Harry Potter films."
    },
    {
        "slug": "harry-potter-films-controversies",
        "name": "Harry Potter films controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Harry Potter films.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Harry Potter films argumentative."
    },
    {
        "slug": "harry-potter-films-sources",
        "name": "Harry Potter films sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Harry Potter films.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Harry Potter films."
    },
    {
        "slug": "harry-potter-films-geography",
        "name": "Harry Potter films geography",
        "type": "place",
        "short_description": "Broader geographic framing for Harry Potter films.",
        "description": "Regions, routes, and spatial systems that situate Harry Potter films beyond single named places."
    },
    {
        "slug": "harry-potter-films-legacy",
        "name": "Harry Potter films legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Harry Potter films.",
        "description": "How Harry Potter films continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "harry-potter-films-practices",
        "name": "Harry Potter films practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Harry Potter films.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Harry Potter films."
    },
    {
        "slug": "harry-potter-films-entry-1",
        "name": "Harry Potter films entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-2",
        "name": "Harry Potter films entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-3",
        "name": "Harry Potter films entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-4",
        "name": "Harry Potter films entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-5",
        "name": "Harry Potter films entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-6",
        "name": "Harry Potter films entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-7",
        "name": "Harry Potter films entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-8",
        "name": "Harry Potter films entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-9",
        "name": "Harry Potter films entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-10",
        "name": "Harry Potter films entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-11",
        "name": "Harry Potter films entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-12",
        "name": "Harry Potter films entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-13",
        "name": "Harry Potter films entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-14",
        "name": "Harry Potter films entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-15",
        "name": "Harry Potter films entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-16",
        "name": "Harry Potter films entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-17",
        "name": "Harry Potter films entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-18",
        "name": "Harry Potter films entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-19",
        "name": "Harry Potter films entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-20",
        "name": "Harry Potter films entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-21",
        "name": "Harry Potter films entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-22",
        "name": "Harry Potter films entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-23",
        "name": "Harry Potter films entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "harry-potter-films-entry-24",
        "name": "Harry Potter films entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Harry Potter films.",
        "description": "A supporting encyclopedia entry in the Harry Potter films subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "harry-potter-films",
        "harry-potter-films-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "harry-potter-films",
        "harry-potter-films-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "harry-potter-films",
        "harry-potter-films-places",
        "contains",
        "Harry Potter films places is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-events",
        "contains",
        "Harry Potter films events is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-objects",
        "contains",
        "Harry Potter films objects & artifacts is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-factions",
        "contains",
        "Harry Potter films factions & groups is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-concepts",
        "contains",
        "Harry Potter films concepts is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-eras",
        "contains",
        "Harry Potter films eras is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-works",
        "contains",
        "Harry Potter films works & media is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-symbols",
        "contains",
        "Harry Potter films symbols is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-controversies",
        "contains",
        "Harry Potter films controversies is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-sources",
        "contains",
        "Harry Potter films sources is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-geography",
        "contains",
        "Harry Potter films geography is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-legacy",
        "contains",
        "Harry Potter films legacy is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-practices",
        "contains",
        "Harry Potter films practices is a primary trailhead under Harry Potter films.",
        0.88,
        0.82
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-1",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-2",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-3",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-4",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-5",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-6",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-7",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-8",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-9",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-10",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-11",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-12",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-13",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-14",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-15",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-16",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-17",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-18",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-19",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-20",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-21",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-22",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-23",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ],
    [
        "harry-potter-films",
        "harry-potter-films-entry-24",
        "contains",
        "Supporting entry under Harry Potter films.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
