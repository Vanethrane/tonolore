/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dead-or-alive",
        "name": "Dead or Alive",
        "type": "topic",
        "short_description": "Counter systems, DOATEC conspiracy, and Team Ninja’s glamorous 3D fighter line.",
        "description": "Counter systems, DOATEC conspiracy, and Team Ninja’s glamorous 3D fighter line. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dead or Alive so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "dead-or-alive-figures",
        "name": "Dead or Alive figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dead or Alive.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dead or Alive."
    },
    {
        "slug": "dead-or-alive-world",
        "name": "Dead or Alive world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dead or Alive.",
        "description": "Geography, institutions, and periodization that give Dead or Alive its encyclopedia shape."
    },
    {
        "slug": "dead-or-alive-places",
        "name": "Dead or Alive places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dead or Alive.",
        "description": "Places, regions, and built sites that give Dead or Alive its map — where events and figures concentrate."
    },
    {
        "slug": "dead-or-alive-events",
        "name": "Dead or Alive events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dead or Alive.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dead or Alive timeline."
    },
    {
        "slug": "dead-or-alive-objects",
        "name": "Dead or Alive objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dead or Alive.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dead or Alive."
    },
    {
        "slug": "dead-or-alive-factions",
        "name": "Dead or Alive factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dead or Alive.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dead or Alive."
    },
    {
        "slug": "dead-or-alive-concepts",
        "name": "Dead or Alive concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dead or Alive.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dead or Alive readable as a lore graph."
    },
    {
        "slug": "dead-or-alive-eras",
        "name": "Dead or Alive eras",
        "type": "event",
        "short_description": "Periodization for Dead or Alive.",
        "description": "Named eras and phases that help readers track how Dead or Alive changes across time."
    },
    {
        "slug": "dead-or-alive-works",
        "name": "Dead or Alive works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dead or Alive.",
        "description": "Primary works and adaptations through which most audiences encounter Dead or Alive."
    },
    {
        "slug": "dead-or-alive-symbols",
        "name": "Dead or Alive symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dead or Alive.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dead or Alive."
    },
    {
        "slug": "dead-or-alive-controversies",
        "name": "Dead or Alive controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dead or Alive.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dead or Alive argumentative."
    },
    {
        "slug": "dead-or-alive-sources",
        "name": "Dead or Alive sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dead or Alive.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dead or Alive."
    },
    {
        "slug": "dead-or-alive-geography",
        "name": "Dead or Alive geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dead or Alive.",
        "description": "Regions, routes, and spatial systems that situate Dead or Alive beyond single named places."
    },
    {
        "slug": "dead-or-alive-legacy",
        "name": "Dead or Alive legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dead or Alive.",
        "description": "How Dead or Alive continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dead-or-alive-practices",
        "name": "Dead or Alive practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dead or Alive.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dead or Alive."
    },
    {
        "slug": "dead-or-alive-entry-1",
        "name": "Dead or Alive entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-2",
        "name": "Dead or Alive entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-3",
        "name": "Dead or Alive entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-4",
        "name": "Dead or Alive entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-5",
        "name": "Dead or Alive entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-6",
        "name": "Dead or Alive entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-7",
        "name": "Dead or Alive entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-8",
        "name": "Dead or Alive entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-9",
        "name": "Dead or Alive entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-10",
        "name": "Dead or Alive entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-11",
        "name": "Dead or Alive entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-12",
        "name": "Dead or Alive entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-13",
        "name": "Dead or Alive entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-14",
        "name": "Dead or Alive entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-15",
        "name": "Dead or Alive entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-16",
        "name": "Dead or Alive entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-17",
        "name": "Dead or Alive entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-18",
        "name": "Dead or Alive entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-19",
        "name": "Dead or Alive entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-20",
        "name": "Dead or Alive entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-21",
        "name": "Dead or Alive entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-22",
        "name": "Dead or Alive entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-23",
        "name": "Dead or Alive entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dead-or-alive-entry-24",
        "name": "Dead or Alive entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dead or Alive.",
        "description": "A supporting encyclopedia entry in the Dead or Alive subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dead-or-alive",
        "dead-or-alive-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dead-or-alive",
        "dead-or-alive-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dead-or-alive",
        "dead-or-alive-places",
        "contains",
        "Dead or Alive places is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-events",
        "contains",
        "Dead or Alive events is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-objects",
        "contains",
        "Dead or Alive objects & artifacts is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-factions",
        "contains",
        "Dead or Alive factions & groups is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-concepts",
        "contains",
        "Dead or Alive concepts is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-eras",
        "contains",
        "Dead or Alive eras is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-works",
        "contains",
        "Dead or Alive works & media is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-symbols",
        "contains",
        "Dead or Alive symbols is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-controversies",
        "contains",
        "Dead or Alive controversies is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-sources",
        "contains",
        "Dead or Alive sources is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-geography",
        "contains",
        "Dead or Alive geography is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-legacy",
        "contains",
        "Dead or Alive legacy is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-practices",
        "contains",
        "Dead or Alive practices is a primary trailhead under Dead or Alive.",
        0.88,
        0.82
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-1",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-2",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-3",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-4",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-5",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-6",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-7",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-8",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-9",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-10",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-11",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-12",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-13",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-14",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-15",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-16",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-17",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-18",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-19",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-20",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-21",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-22",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-23",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ],
    [
        "dead-or-alive",
        "dead-or-alive-entry-24",
        "contains",
        "Supporting entry under Dead or Alive.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
