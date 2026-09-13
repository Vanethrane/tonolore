/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "outkast",
        "name": "OutKast",
        "type": "topic",
        "short_description": "Atlanta duo whose Southern futurism and dual personas expanded what hip-hop albums could be.",
        "description": "Atlanta duo whose Southern futurism and dual personas expanded what hip-hop albums could be. This Ton-o-Lore subject maps people, works, places, and ideas tied to OutKast so readers can follow long-tail connections across the hip-hop tradition."
    },
    {
        "slug": "outkast-catalog",
        "name": "OutKast catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with OutKast.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter OutKast in the hip-hop tradition."
    },
    {
        "slug": "outkast-era",
        "name": "OutKast eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the OutKast story.",
        "description": "Periodization helps encyclopedia readers track how OutKast changed sound, lineup, or public myth across decades of hip-hop history."
    },
    {
        "slug": "outkast-figures",
        "name": "OutKast figures",
        "type": "topic",
        "short_description": "People and named forces central to OutKast.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring OutKast."
    },
    {
        "slug": "outkast-places",
        "name": "OutKast places",
        "type": "place",
        "short_description": "Locations and geographies that frame OutKast.",
        "description": "Places, regions, and built sites that give OutKast its map — where events and figures concentrate."
    },
    {
        "slug": "outkast-events",
        "name": "OutKast events",
        "type": "event",
        "short_description": "Turning points and dated episodes in OutKast.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the OutKast timeline."
    },
    {
        "slug": "outkast-objects",
        "name": "OutKast objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to OutKast.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through OutKast."
    },
    {
        "slug": "outkast-factions",
        "name": "OutKast factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside OutKast.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in OutKast."
    },
    {
        "slug": "outkast-concepts",
        "name": "OutKast concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize OutKast.",
        "description": "Keywords, doctrines, systems, and abstract forces that make OutKast readable as a lore graph."
    },
    {
        "slug": "outkast-eras",
        "name": "OutKast eras",
        "type": "event",
        "short_description": "Periodization for OutKast.",
        "description": "Named eras and phases that help readers track how OutKast changes across time."
    },
    {
        "slug": "outkast-works",
        "name": "OutKast works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry OutKast.",
        "description": "Primary works and adaptations through which most audiences encounter OutKast."
    },
    {
        "slug": "outkast-symbols",
        "name": "OutKast symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with OutKast.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside OutKast."
    },
    {
        "slug": "outkast-controversies",
        "name": "OutKast controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in OutKast.",
        "description": "Debates, rival canons, scandals, and contested facts that keep OutKast argumentative."
    },
    {
        "slug": "outkast-sources",
        "name": "OutKast sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into OutKast.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify OutKast."
    },
    {
        "slug": "outkast-geography",
        "name": "OutKast geography",
        "type": "place",
        "short_description": "Broader geographic framing for OutKast.",
        "description": "Regions, routes, and spatial systems that situate OutKast beyond single named places."
    },
    {
        "slug": "outkast-legacy",
        "name": "OutKast legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of OutKast.",
        "description": "How OutKast continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "outkast-practices",
        "name": "OutKast practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in OutKast.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in OutKast."
    },
    {
        "slug": "outkast-entry-1",
        "name": "OutKast entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-2",
        "name": "OutKast entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-3",
        "name": "OutKast entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-4",
        "name": "OutKast entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-5",
        "name": "OutKast entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-6",
        "name": "OutKast entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-7",
        "name": "OutKast entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-8",
        "name": "OutKast entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-9",
        "name": "OutKast entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-10",
        "name": "OutKast entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-11",
        "name": "OutKast entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-12",
        "name": "OutKast entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-13",
        "name": "OutKast entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-14",
        "name": "OutKast entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-15",
        "name": "OutKast entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-16",
        "name": "OutKast entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-17",
        "name": "OutKast entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-18",
        "name": "OutKast entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-19",
        "name": "OutKast entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-20",
        "name": "OutKast entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-21",
        "name": "OutKast entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-22",
        "name": "OutKast entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "outkast-entry-23",
        "name": "OutKast entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside OutKast.",
        "description": "A supporting encyclopedia entry in the OutKast subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "outkast",
        "outkast-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "outkast",
        "outkast-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "outkast",
        "outkast-figures",
        "contains",
        "OutKast figures is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-places",
        "contains",
        "OutKast places is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-events",
        "contains",
        "OutKast events is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-objects",
        "contains",
        "OutKast objects & artifacts is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-factions",
        "contains",
        "OutKast factions & groups is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-concepts",
        "contains",
        "OutKast concepts is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-eras",
        "contains",
        "OutKast eras is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-works",
        "contains",
        "OutKast works & media is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-symbols",
        "contains",
        "OutKast symbols is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-controversies",
        "contains",
        "OutKast controversies is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-sources",
        "contains",
        "OutKast sources is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-geography",
        "contains",
        "OutKast geography is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-legacy",
        "contains",
        "OutKast legacy is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-practices",
        "contains",
        "OutKast practices is a primary trailhead under OutKast.",
        0.88,
        0.82
    ],
    [
        "outkast",
        "outkast-entry-1",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-2",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-3",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-4",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-5",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-6",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-7",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-8",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-9",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-10",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-11",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-12",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-13",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-14",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-15",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-16",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-17",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-18",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-19",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-20",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-21",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-22",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ],
    [
        "outkast",
        "outkast-entry-23",
        "contains",
        "Supporting entry under OutKast.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
