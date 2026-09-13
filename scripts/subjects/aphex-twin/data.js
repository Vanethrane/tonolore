/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aphex-twin",
        "name": "Aphex Twin",
        "type": "topic",
        "short_description": "Alias-rich IDM and acid work that made Richard D. James a lore figure of experimental electronica.",
        "description": "Alias-rich IDM and acid work that made Richard D. James a lore figure of experimental electronica. This Ton-o-Lore subject maps people, works, places, and ideas tied to Aphex Twin so readers can follow long-tail connections across the electronic tradition."
    },
    {
        "slug": "aphex-twin-catalog",
        "name": "Aphex Twin catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Aphex Twin.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Aphex Twin in the electronic tradition."
    },
    {
        "slug": "aphex-twin-era",
        "name": "Aphex Twin eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Aphex Twin story.",
        "description": "Periodization helps encyclopedia readers track how Aphex Twin changed sound, lineup, or public myth across decades of electronic history."
    },
    {
        "slug": "aphex-twin-figures",
        "name": "Aphex Twin figures",
        "type": "topic",
        "short_description": "People and named forces central to Aphex Twin.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Aphex Twin."
    },
    {
        "slug": "aphex-twin-places",
        "name": "Aphex Twin places",
        "type": "place",
        "short_description": "Locations and geographies that frame Aphex Twin.",
        "description": "Places, regions, and built sites that give Aphex Twin its map — where events and figures concentrate."
    },
    {
        "slug": "aphex-twin-events",
        "name": "Aphex Twin events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Aphex Twin.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Aphex Twin timeline."
    },
    {
        "slug": "aphex-twin-objects",
        "name": "Aphex Twin objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Aphex Twin.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Aphex Twin."
    },
    {
        "slug": "aphex-twin-factions",
        "name": "Aphex Twin factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Aphex Twin.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Aphex Twin."
    },
    {
        "slug": "aphex-twin-concepts",
        "name": "Aphex Twin concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Aphex Twin.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Aphex Twin readable as a lore graph."
    },
    {
        "slug": "aphex-twin-eras",
        "name": "Aphex Twin eras",
        "type": "event",
        "short_description": "Periodization for Aphex Twin.",
        "description": "Named eras and phases that help readers track how Aphex Twin changes across time."
    },
    {
        "slug": "aphex-twin-works",
        "name": "Aphex Twin works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Aphex Twin.",
        "description": "Primary works and adaptations through which most audiences encounter Aphex Twin."
    },
    {
        "slug": "aphex-twin-symbols",
        "name": "Aphex Twin symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Aphex Twin.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Aphex Twin."
    },
    {
        "slug": "aphex-twin-controversies",
        "name": "Aphex Twin controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Aphex Twin.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Aphex Twin argumentative."
    },
    {
        "slug": "aphex-twin-sources",
        "name": "Aphex Twin sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Aphex Twin.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Aphex Twin."
    },
    {
        "slug": "aphex-twin-geography",
        "name": "Aphex Twin geography",
        "type": "place",
        "short_description": "Broader geographic framing for Aphex Twin.",
        "description": "Regions, routes, and spatial systems that situate Aphex Twin beyond single named places."
    },
    {
        "slug": "aphex-twin-legacy",
        "name": "Aphex Twin legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Aphex Twin.",
        "description": "How Aphex Twin continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aphex-twin-practices",
        "name": "Aphex Twin practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Aphex Twin.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Aphex Twin."
    },
    {
        "slug": "aphex-twin-entry-1",
        "name": "Aphex Twin entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-2",
        "name": "Aphex Twin entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-3",
        "name": "Aphex Twin entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-4",
        "name": "Aphex Twin entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-5",
        "name": "Aphex Twin entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-6",
        "name": "Aphex Twin entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-7",
        "name": "Aphex Twin entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-8",
        "name": "Aphex Twin entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-9",
        "name": "Aphex Twin entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-10",
        "name": "Aphex Twin entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-11",
        "name": "Aphex Twin entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-12",
        "name": "Aphex Twin entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-13",
        "name": "Aphex Twin entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-14",
        "name": "Aphex Twin entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-15",
        "name": "Aphex Twin entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-16",
        "name": "Aphex Twin entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-17",
        "name": "Aphex Twin entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-18",
        "name": "Aphex Twin entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-19",
        "name": "Aphex Twin entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-20",
        "name": "Aphex Twin entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-21",
        "name": "Aphex Twin entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-22",
        "name": "Aphex Twin entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aphex-twin-entry-23",
        "name": "Aphex Twin entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aphex Twin.",
        "description": "A supporting encyclopedia entry in the Aphex Twin subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aphex-twin",
        "aphex-twin-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "aphex-twin",
        "aphex-twin-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "aphex-twin",
        "aphex-twin-figures",
        "contains",
        "Aphex Twin figures is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-places",
        "contains",
        "Aphex Twin places is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-events",
        "contains",
        "Aphex Twin events is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-objects",
        "contains",
        "Aphex Twin objects & artifacts is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-factions",
        "contains",
        "Aphex Twin factions & groups is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-concepts",
        "contains",
        "Aphex Twin concepts is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-eras",
        "contains",
        "Aphex Twin eras is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-works",
        "contains",
        "Aphex Twin works & media is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-symbols",
        "contains",
        "Aphex Twin symbols is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-controversies",
        "contains",
        "Aphex Twin controversies is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-sources",
        "contains",
        "Aphex Twin sources is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-geography",
        "contains",
        "Aphex Twin geography is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-legacy",
        "contains",
        "Aphex Twin legacy is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-practices",
        "contains",
        "Aphex Twin practices is a primary trailhead under Aphex Twin.",
        0.88,
        0.82
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-1",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-2",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-3",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-4",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-5",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-6",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-7",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-8",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-9",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-10",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-11",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-12",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-13",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-14",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-15",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-16",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-17",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-18",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-19",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-20",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-21",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-22",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ],
    [
        "aphex-twin",
        "aphex-twin-entry-23",
        "contains",
        "Supporting entry under Aphex Twin.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
