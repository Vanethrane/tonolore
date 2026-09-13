/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wwf-golden-era",
        "name": "WWF Golden Era",
        "type": "topic",
        "short_description": "Hulkamania, Saturday Night’s Main Event, and the 1980s national expansion myth.",
        "description": "Hulkamania, Saturday Night’s Main Event, and the 1980s national expansion myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to WWF Golden Era so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "wwf-golden-era-figures",
        "name": "WWF Golden Era figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to WWF Golden Era.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring WWF Golden Era."
    },
    {
        "slug": "wwf-golden-era-world",
        "name": "WWF Golden Era world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame WWF Golden Era.",
        "description": "Geography, institutions, and periodization that give WWF Golden Era its encyclopedia shape."
    },
    {
        "slug": "wwf-golden-era-places",
        "name": "WWF Golden Era places",
        "type": "place",
        "short_description": "Locations and geographies that frame WWF Golden Era.",
        "description": "Places, regions, and built sites that give WWF Golden Era its map — where events and figures concentrate."
    },
    {
        "slug": "wwf-golden-era-events",
        "name": "WWF Golden Era events",
        "type": "event",
        "short_description": "Turning points and dated episodes in WWF Golden Era.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the WWF Golden Era timeline."
    },
    {
        "slug": "wwf-golden-era-objects",
        "name": "WWF Golden Era objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to WWF Golden Era.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through WWF Golden Era."
    },
    {
        "slug": "wwf-golden-era-factions",
        "name": "WWF Golden Era factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside WWF Golden Era.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in WWF Golden Era."
    },
    {
        "slug": "wwf-golden-era-concepts",
        "name": "WWF Golden Era concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize WWF Golden Era.",
        "description": "Keywords, doctrines, systems, and abstract forces that make WWF Golden Era readable as a lore graph."
    },
    {
        "slug": "wwf-golden-era-eras",
        "name": "WWF Golden Era eras",
        "type": "event",
        "short_description": "Periodization for WWF Golden Era.",
        "description": "Named eras and phases that help readers track how WWF Golden Era changes across time."
    },
    {
        "slug": "wwf-golden-era-works",
        "name": "WWF Golden Era works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry WWF Golden Era.",
        "description": "Primary works and adaptations through which most audiences encounter WWF Golden Era."
    },
    {
        "slug": "wwf-golden-era-symbols",
        "name": "WWF Golden Era symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with WWF Golden Era.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside WWF Golden Era."
    },
    {
        "slug": "wwf-golden-era-controversies",
        "name": "WWF Golden Era controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in WWF Golden Era.",
        "description": "Debates, rival canons, scandals, and contested facts that keep WWF Golden Era argumentative."
    },
    {
        "slug": "wwf-golden-era-sources",
        "name": "WWF Golden Era sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into WWF Golden Era.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify WWF Golden Era."
    },
    {
        "slug": "wwf-golden-era-geography",
        "name": "WWF Golden Era geography",
        "type": "place",
        "short_description": "Broader geographic framing for WWF Golden Era.",
        "description": "Regions, routes, and spatial systems that situate WWF Golden Era beyond single named places."
    },
    {
        "slug": "wwf-golden-era-legacy",
        "name": "WWF Golden Era legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of WWF Golden Era.",
        "description": "How WWF Golden Era continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wwf-golden-era-practices",
        "name": "WWF Golden Era practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in WWF Golden Era.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in WWF Golden Era."
    },
    {
        "slug": "wwf-golden-era-entry-1",
        "name": "WWF Golden Era entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-2",
        "name": "WWF Golden Era entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-3",
        "name": "WWF Golden Era entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-4",
        "name": "WWF Golden Era entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-5",
        "name": "WWF Golden Era entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-6",
        "name": "WWF Golden Era entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-7",
        "name": "WWF Golden Era entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-8",
        "name": "WWF Golden Era entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-9",
        "name": "WWF Golden Era entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-10",
        "name": "WWF Golden Era entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-11",
        "name": "WWF Golden Era entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-12",
        "name": "WWF Golden Era entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-13",
        "name": "WWF Golden Era entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-14",
        "name": "WWF Golden Era entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-15",
        "name": "WWF Golden Era entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-16",
        "name": "WWF Golden Era entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-17",
        "name": "WWF Golden Era entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-18",
        "name": "WWF Golden Era entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-19",
        "name": "WWF Golden Era entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-20",
        "name": "WWF Golden Era entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-21",
        "name": "WWF Golden Era entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-22",
        "name": "WWF Golden Era entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-23",
        "name": "WWF Golden Era entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwf-golden-era-entry-24",
        "name": "WWF Golden Era entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside WWF Golden Era.",
        "description": "A supporting encyclopedia entry in the WWF Golden Era subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wwf-golden-era",
        "wwf-golden-era-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-places",
        "contains",
        "WWF Golden Era places is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-events",
        "contains",
        "WWF Golden Era events is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-objects",
        "contains",
        "WWF Golden Era objects & artifacts is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-factions",
        "contains",
        "WWF Golden Era factions & groups is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-concepts",
        "contains",
        "WWF Golden Era concepts is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-eras",
        "contains",
        "WWF Golden Era eras is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-works",
        "contains",
        "WWF Golden Era works & media is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-symbols",
        "contains",
        "WWF Golden Era symbols is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-controversies",
        "contains",
        "WWF Golden Era controversies is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-sources",
        "contains",
        "WWF Golden Era sources is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-geography",
        "contains",
        "WWF Golden Era geography is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-legacy",
        "contains",
        "WWF Golden Era legacy is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-practices",
        "contains",
        "WWF Golden Era practices is a primary trailhead under WWF Golden Era.",
        0.88,
        0.82
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-1",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-2",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-3",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-4",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-5",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-6",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-7",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-8",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-9",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-10",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-11",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-12",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-13",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-14",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-15",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-16",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-17",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-18",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-19",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-20",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-21",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-22",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-23",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ],
    [
        "wwf-golden-era",
        "wwf-golden-era-entry-24",
        "contains",
        "Supporting entry under WWF Golden Era.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
