/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "famous-shipwrecks",
        "name": "Famous shipwrecks",
        "type": "topic",
        "short_description": "Lost vessels, cargoes, survivors, salvage races, and the underwater sites that keep pulling researchers back.",
        "description": "Lost vessels, cargoes, survivors, salvage races, and the underwater sites that keep pulling researchers back. This Ton-o-Lore subject maps people, places, events, and ideas tied to Famous shipwrecks so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "famous-shipwrecks-figures",
        "name": "Famous shipwrecks figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Famous shipwrecks.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Famous shipwrecks."
    },
    {
        "slug": "famous-shipwrecks-world",
        "name": "Famous shipwrecks world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Famous shipwrecks.",
        "description": "Geography, institutions, and periodization that give Famous shipwrecks its encyclopedia shape."
    },
    {
        "slug": "famous-shipwrecks-places",
        "name": "Famous shipwrecks places",
        "type": "place",
        "short_description": "Locations and geographies that frame Famous shipwrecks.",
        "description": "Places, regions, and built sites that give Famous shipwrecks its map — where events and figures concentrate."
    },
    {
        "slug": "famous-shipwrecks-events",
        "name": "Famous shipwrecks events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Famous shipwrecks.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Famous shipwrecks timeline."
    },
    {
        "slug": "famous-shipwrecks-objects",
        "name": "Famous shipwrecks objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Famous shipwrecks.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Famous shipwrecks."
    },
    {
        "slug": "famous-shipwrecks-factions",
        "name": "Famous shipwrecks factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Famous shipwrecks.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Famous shipwrecks."
    },
    {
        "slug": "famous-shipwrecks-concepts",
        "name": "Famous shipwrecks concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Famous shipwrecks.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Famous shipwrecks readable as a lore graph."
    },
    {
        "slug": "famous-shipwrecks-eras",
        "name": "Famous shipwrecks eras",
        "type": "event",
        "short_description": "Periodization for Famous shipwrecks.",
        "description": "Named eras and phases that help readers track how Famous shipwrecks changes across time."
    },
    {
        "slug": "famous-shipwrecks-works",
        "name": "Famous shipwrecks works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Famous shipwrecks.",
        "description": "Primary works and adaptations through which most audiences encounter Famous shipwrecks."
    },
    {
        "slug": "famous-shipwrecks-symbols",
        "name": "Famous shipwrecks symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Famous shipwrecks.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Famous shipwrecks."
    },
    {
        "slug": "famous-shipwrecks-controversies",
        "name": "Famous shipwrecks controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Famous shipwrecks.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Famous shipwrecks argumentative."
    },
    {
        "slug": "famous-shipwrecks-sources",
        "name": "Famous shipwrecks sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Famous shipwrecks.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Famous shipwrecks."
    },
    {
        "slug": "famous-shipwrecks-geography",
        "name": "Famous shipwrecks geography",
        "type": "place",
        "short_description": "Broader geographic framing for Famous shipwrecks.",
        "description": "Regions, routes, and spatial systems that situate Famous shipwrecks beyond single named places."
    },
    {
        "slug": "famous-shipwrecks-legacy",
        "name": "Famous shipwrecks legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Famous shipwrecks.",
        "description": "How Famous shipwrecks continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "famous-shipwrecks-practices",
        "name": "Famous shipwrecks practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Famous shipwrecks.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Famous shipwrecks."
    },
    {
        "slug": "famous-shipwrecks-entry-1",
        "name": "Famous shipwrecks entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-2",
        "name": "Famous shipwrecks entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-3",
        "name": "Famous shipwrecks entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-4",
        "name": "Famous shipwrecks entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-5",
        "name": "Famous shipwrecks entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-6",
        "name": "Famous shipwrecks entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-7",
        "name": "Famous shipwrecks entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-8",
        "name": "Famous shipwrecks entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-9",
        "name": "Famous shipwrecks entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-10",
        "name": "Famous shipwrecks entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-11",
        "name": "Famous shipwrecks entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-12",
        "name": "Famous shipwrecks entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-13",
        "name": "Famous shipwrecks entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-14",
        "name": "Famous shipwrecks entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-15",
        "name": "Famous shipwrecks entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-16",
        "name": "Famous shipwrecks entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-17",
        "name": "Famous shipwrecks entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-18",
        "name": "Famous shipwrecks entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-19",
        "name": "Famous shipwrecks entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-20",
        "name": "Famous shipwrecks entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-21",
        "name": "Famous shipwrecks entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-22",
        "name": "Famous shipwrecks entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-23",
        "name": "Famous shipwrecks entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "famous-shipwrecks-entry-24",
        "name": "Famous shipwrecks entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous shipwrecks.",
        "description": "A supporting encyclopedia entry in the Famous shipwrecks subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "famous-shipwrecks",
        "famous-shipwrecks-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-places",
        "contains",
        "Famous shipwrecks places is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-events",
        "contains",
        "Famous shipwrecks events is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-objects",
        "contains",
        "Famous shipwrecks objects & artifacts is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-factions",
        "contains",
        "Famous shipwrecks factions & groups is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-concepts",
        "contains",
        "Famous shipwrecks concepts is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-eras",
        "contains",
        "Famous shipwrecks eras is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-works",
        "contains",
        "Famous shipwrecks works & media is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-symbols",
        "contains",
        "Famous shipwrecks symbols is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-controversies",
        "contains",
        "Famous shipwrecks controversies is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-sources",
        "contains",
        "Famous shipwrecks sources is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-geography",
        "contains",
        "Famous shipwrecks geography is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-legacy",
        "contains",
        "Famous shipwrecks legacy is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-practices",
        "contains",
        "Famous shipwrecks practices is a primary trailhead under Famous shipwrecks.",
        0.88,
        0.82
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-1",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-2",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-3",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-4",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-5",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-6",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-7",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-8",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-9",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-10",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-11",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-12",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-13",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-14",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-15",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-16",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-17",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-18",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-19",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-20",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-21",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-22",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-23",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ],
    [
        "famous-shipwrecks",
        "famous-shipwrecks-entry-24",
        "contains",
        "Supporting entry under Famous shipwrecks.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
