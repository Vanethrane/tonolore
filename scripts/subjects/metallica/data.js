/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "metallica",
        "name": "Metallica",
        "type": "topic",
        "short_description": "Thrash-to-arena titans whose catalog and fan culture dominate modern metal lore.",
        "description": "Thrash-to-arena titans whose catalog and fan culture dominate modern metal lore. This Ton-o-Lore subject maps people, works, places, and ideas tied to Metallica so readers can follow long-tail connections across the metal tradition."
    },
    {
        "slug": "metallica-catalog",
        "name": "Metallica catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Metallica.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Metallica in the metal tradition."
    },
    {
        "slug": "metallica-era",
        "name": "Metallica eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Metallica story.",
        "description": "Periodization helps encyclopedia readers track how Metallica changed sound, lineup, or public myth across decades of metal history."
    },
    {
        "slug": "metallica-figures",
        "name": "Metallica figures",
        "type": "topic",
        "short_description": "People and named forces central to Metallica.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Metallica."
    },
    {
        "slug": "metallica-places",
        "name": "Metallica places",
        "type": "place",
        "short_description": "Locations and geographies that frame Metallica.",
        "description": "Places, regions, and built sites that give Metallica its map — where events and figures concentrate."
    },
    {
        "slug": "metallica-events",
        "name": "Metallica events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Metallica.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Metallica timeline."
    },
    {
        "slug": "metallica-objects",
        "name": "Metallica objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Metallica.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Metallica."
    },
    {
        "slug": "metallica-factions",
        "name": "Metallica factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Metallica.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Metallica."
    },
    {
        "slug": "metallica-concepts",
        "name": "Metallica concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Metallica.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Metallica readable as a lore graph."
    },
    {
        "slug": "metallica-eras",
        "name": "Metallica eras",
        "type": "event",
        "short_description": "Periodization for Metallica.",
        "description": "Named eras and phases that help readers track how Metallica changes across time."
    },
    {
        "slug": "metallica-works",
        "name": "Metallica works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Metallica.",
        "description": "Primary works and adaptations through which most audiences encounter Metallica."
    },
    {
        "slug": "metallica-symbols",
        "name": "Metallica symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Metallica.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Metallica."
    },
    {
        "slug": "metallica-controversies",
        "name": "Metallica controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Metallica.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Metallica argumentative."
    },
    {
        "slug": "metallica-sources",
        "name": "Metallica sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Metallica.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Metallica."
    },
    {
        "slug": "metallica-geography",
        "name": "Metallica geography",
        "type": "place",
        "short_description": "Broader geographic framing for Metallica.",
        "description": "Regions, routes, and spatial systems that situate Metallica beyond single named places."
    },
    {
        "slug": "metallica-legacy",
        "name": "Metallica legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Metallica.",
        "description": "How Metallica continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "metallica-practices",
        "name": "Metallica practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Metallica.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Metallica."
    },
    {
        "slug": "metallica-entry-1",
        "name": "Metallica entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-2",
        "name": "Metallica entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-3",
        "name": "Metallica entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-4",
        "name": "Metallica entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-5",
        "name": "Metallica entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-6",
        "name": "Metallica entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-7",
        "name": "Metallica entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-8",
        "name": "Metallica entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-9",
        "name": "Metallica entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-10",
        "name": "Metallica entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-11",
        "name": "Metallica entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-12",
        "name": "Metallica entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-13",
        "name": "Metallica entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-14",
        "name": "Metallica entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-15",
        "name": "Metallica entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-16",
        "name": "Metallica entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-17",
        "name": "Metallica entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-18",
        "name": "Metallica entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-19",
        "name": "Metallica entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-20",
        "name": "Metallica entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-21",
        "name": "Metallica entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-22",
        "name": "Metallica entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "metallica-entry-23",
        "name": "Metallica entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Metallica.",
        "description": "A supporting encyclopedia entry in the Metallica subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "metallica",
        "metallica-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "metallica",
        "metallica-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "metallica",
        "metallica-figures",
        "contains",
        "Metallica figures is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-places",
        "contains",
        "Metallica places is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-events",
        "contains",
        "Metallica events is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-objects",
        "contains",
        "Metallica objects & artifacts is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-factions",
        "contains",
        "Metallica factions & groups is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-concepts",
        "contains",
        "Metallica concepts is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-eras",
        "contains",
        "Metallica eras is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-works",
        "contains",
        "Metallica works & media is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-symbols",
        "contains",
        "Metallica symbols is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-controversies",
        "contains",
        "Metallica controversies is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-sources",
        "contains",
        "Metallica sources is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-geography",
        "contains",
        "Metallica geography is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-legacy",
        "contains",
        "Metallica legacy is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-practices",
        "contains",
        "Metallica practices is a primary trailhead under Metallica.",
        0.88,
        0.82
    ],
    [
        "metallica",
        "metallica-entry-1",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-2",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-3",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-4",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-5",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-6",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-7",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-8",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-9",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-10",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-11",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-12",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-13",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-14",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-15",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-16",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-17",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-18",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-19",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-20",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-21",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-22",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ],
    [
        "metallica",
        "metallica-entry-23",
        "contains",
        "Supporting entry under Metallica.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
