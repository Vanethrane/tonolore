/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "kraftwerk",
        "name": "Kraftwerk",
        "type": "topic",
        "short_description": "Düsseldorf pioneers who framed the man-machine ideal for generations of electronic music.",
        "description": "Düsseldorf pioneers who framed the man-machine ideal for generations of electronic music. This Ton-o-Lore subject maps people, works, places, and ideas tied to Kraftwerk so readers can follow long-tail connections across the electronic tradition."
    },
    {
        "slug": "kraftwerk-catalog",
        "name": "Kraftwerk catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Kraftwerk.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Kraftwerk in the electronic tradition."
    },
    {
        "slug": "kraftwerk-era",
        "name": "Kraftwerk eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Kraftwerk story.",
        "description": "Periodization helps encyclopedia readers track how Kraftwerk changed sound, lineup, or public myth across decades of electronic history."
    },
    {
        "slug": "kraftwerk-figures",
        "name": "Kraftwerk figures",
        "type": "topic",
        "short_description": "People and named forces central to Kraftwerk.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Kraftwerk."
    },
    {
        "slug": "kraftwerk-places",
        "name": "Kraftwerk places",
        "type": "place",
        "short_description": "Locations and geographies that frame Kraftwerk.",
        "description": "Places, regions, and built sites that give Kraftwerk its map — where events and figures concentrate."
    },
    {
        "slug": "kraftwerk-events",
        "name": "Kraftwerk events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Kraftwerk.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Kraftwerk timeline."
    },
    {
        "slug": "kraftwerk-objects",
        "name": "Kraftwerk objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Kraftwerk.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Kraftwerk."
    },
    {
        "slug": "kraftwerk-factions",
        "name": "Kraftwerk factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Kraftwerk.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Kraftwerk."
    },
    {
        "slug": "kraftwerk-concepts",
        "name": "Kraftwerk concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Kraftwerk.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Kraftwerk readable as a lore graph."
    },
    {
        "slug": "kraftwerk-eras",
        "name": "Kraftwerk eras",
        "type": "event",
        "short_description": "Periodization for Kraftwerk.",
        "description": "Named eras and phases that help readers track how Kraftwerk changes across time."
    },
    {
        "slug": "kraftwerk-works",
        "name": "Kraftwerk works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Kraftwerk.",
        "description": "Primary works and adaptations through which most audiences encounter Kraftwerk."
    },
    {
        "slug": "kraftwerk-symbols",
        "name": "Kraftwerk symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Kraftwerk.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Kraftwerk."
    },
    {
        "slug": "kraftwerk-controversies",
        "name": "Kraftwerk controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Kraftwerk.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Kraftwerk argumentative."
    },
    {
        "slug": "kraftwerk-sources",
        "name": "Kraftwerk sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Kraftwerk.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Kraftwerk."
    },
    {
        "slug": "kraftwerk-geography",
        "name": "Kraftwerk geography",
        "type": "place",
        "short_description": "Broader geographic framing for Kraftwerk.",
        "description": "Regions, routes, and spatial systems that situate Kraftwerk beyond single named places."
    },
    {
        "slug": "kraftwerk-legacy",
        "name": "Kraftwerk legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Kraftwerk.",
        "description": "How Kraftwerk continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "kraftwerk-practices",
        "name": "Kraftwerk practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Kraftwerk.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Kraftwerk."
    },
    {
        "slug": "kraftwerk-entry-1",
        "name": "Kraftwerk entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-2",
        "name": "Kraftwerk entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-3",
        "name": "Kraftwerk entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-4",
        "name": "Kraftwerk entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-5",
        "name": "Kraftwerk entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-6",
        "name": "Kraftwerk entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-7",
        "name": "Kraftwerk entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-8",
        "name": "Kraftwerk entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-9",
        "name": "Kraftwerk entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-10",
        "name": "Kraftwerk entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-11",
        "name": "Kraftwerk entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-12",
        "name": "Kraftwerk entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-13",
        "name": "Kraftwerk entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-14",
        "name": "Kraftwerk entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-15",
        "name": "Kraftwerk entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-16",
        "name": "Kraftwerk entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-17",
        "name": "Kraftwerk entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-18",
        "name": "Kraftwerk entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-19",
        "name": "Kraftwerk entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-20",
        "name": "Kraftwerk entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-21",
        "name": "Kraftwerk entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-22",
        "name": "Kraftwerk entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kraftwerk-entry-23",
        "name": "Kraftwerk entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kraftwerk.",
        "description": "A supporting encyclopedia entry in the Kraftwerk subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "kraftwerk",
        "kraftwerk-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "kraftwerk",
        "kraftwerk-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "kraftwerk",
        "kraftwerk-figures",
        "contains",
        "Kraftwerk figures is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-places",
        "contains",
        "Kraftwerk places is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-events",
        "contains",
        "Kraftwerk events is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-objects",
        "contains",
        "Kraftwerk objects & artifacts is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-factions",
        "contains",
        "Kraftwerk factions & groups is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-concepts",
        "contains",
        "Kraftwerk concepts is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-eras",
        "contains",
        "Kraftwerk eras is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-works",
        "contains",
        "Kraftwerk works & media is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-symbols",
        "contains",
        "Kraftwerk symbols is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-controversies",
        "contains",
        "Kraftwerk controversies is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-sources",
        "contains",
        "Kraftwerk sources is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-geography",
        "contains",
        "Kraftwerk geography is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-legacy",
        "contains",
        "Kraftwerk legacy is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-practices",
        "contains",
        "Kraftwerk practices is a primary trailhead under Kraftwerk.",
        0.88,
        0.82
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-1",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-2",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-3",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-4",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-5",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-6",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-7",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-8",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-9",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-10",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-11",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-12",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-13",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-14",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-15",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-16",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-17",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-18",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-19",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-20",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-21",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-22",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ],
    [
        "kraftwerk",
        "kraftwerk-entry-23",
        "contains",
        "Supporting entry under Kraftwerk.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
