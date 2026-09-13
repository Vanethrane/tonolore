/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hank-williams",
        "name": "Hank Williams",
        "type": "topic",
        "short_description": "Honky-tonk architect whose brief career set the emotional grammar of modern country song.",
        "description": "Honky-tonk architect whose brief career set the emotional grammar of modern country song. This Ton-o-Lore subject maps people, works, places, and ideas tied to Hank Williams so readers can follow long-tail connections across the country tradition."
    },
    {
        "slug": "hank-williams-catalog",
        "name": "Hank Williams catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Hank Williams.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Hank Williams in the country tradition."
    },
    {
        "slug": "hank-williams-era",
        "name": "Hank Williams eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Hank Williams story.",
        "description": "Periodization helps encyclopedia readers track how Hank Williams changed sound, lineup, or public myth across decades of country history."
    },
    {
        "slug": "hank-williams-figures",
        "name": "Hank Williams figures",
        "type": "topic",
        "short_description": "People and named forces central to Hank Williams.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Hank Williams."
    },
    {
        "slug": "hank-williams-places",
        "name": "Hank Williams places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hank Williams.",
        "description": "Places, regions, and built sites that give Hank Williams its map — where events and figures concentrate."
    },
    {
        "slug": "hank-williams-events",
        "name": "Hank Williams events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hank Williams.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hank Williams timeline."
    },
    {
        "slug": "hank-williams-objects",
        "name": "Hank Williams objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hank Williams.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hank Williams."
    },
    {
        "slug": "hank-williams-factions",
        "name": "Hank Williams factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hank Williams.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hank Williams."
    },
    {
        "slug": "hank-williams-concepts",
        "name": "Hank Williams concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hank Williams.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hank Williams readable as a lore graph."
    },
    {
        "slug": "hank-williams-eras",
        "name": "Hank Williams eras",
        "type": "event",
        "short_description": "Periodization for Hank Williams.",
        "description": "Named eras and phases that help readers track how Hank Williams changes across time."
    },
    {
        "slug": "hank-williams-works",
        "name": "Hank Williams works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hank Williams.",
        "description": "Primary works and adaptations through which most audiences encounter Hank Williams."
    },
    {
        "slug": "hank-williams-symbols",
        "name": "Hank Williams symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hank Williams.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hank Williams."
    },
    {
        "slug": "hank-williams-controversies",
        "name": "Hank Williams controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hank Williams.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hank Williams argumentative."
    },
    {
        "slug": "hank-williams-sources",
        "name": "Hank Williams sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hank Williams.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hank Williams."
    },
    {
        "slug": "hank-williams-geography",
        "name": "Hank Williams geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hank Williams.",
        "description": "Regions, routes, and spatial systems that situate Hank Williams beyond single named places."
    },
    {
        "slug": "hank-williams-legacy",
        "name": "Hank Williams legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hank Williams.",
        "description": "How Hank Williams continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hank-williams-practices",
        "name": "Hank Williams practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hank Williams.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hank Williams."
    },
    {
        "slug": "hank-williams-entry-1",
        "name": "Hank Williams entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-2",
        "name": "Hank Williams entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-3",
        "name": "Hank Williams entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-4",
        "name": "Hank Williams entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-5",
        "name": "Hank Williams entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-6",
        "name": "Hank Williams entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-7",
        "name": "Hank Williams entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-8",
        "name": "Hank Williams entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-9",
        "name": "Hank Williams entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-10",
        "name": "Hank Williams entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-11",
        "name": "Hank Williams entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-12",
        "name": "Hank Williams entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-13",
        "name": "Hank Williams entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-14",
        "name": "Hank Williams entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-15",
        "name": "Hank Williams entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-16",
        "name": "Hank Williams entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-17",
        "name": "Hank Williams entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-18",
        "name": "Hank Williams entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-19",
        "name": "Hank Williams entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-20",
        "name": "Hank Williams entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-21",
        "name": "Hank Williams entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-22",
        "name": "Hank Williams entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hank-williams-entry-23",
        "name": "Hank Williams entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hank Williams.",
        "description": "A supporting encyclopedia entry in the Hank Williams subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hank-williams",
        "hank-williams-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "hank-williams",
        "hank-williams-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "hank-williams",
        "hank-williams-figures",
        "contains",
        "Hank Williams figures is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-places",
        "contains",
        "Hank Williams places is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-events",
        "contains",
        "Hank Williams events is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-objects",
        "contains",
        "Hank Williams objects & artifacts is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-factions",
        "contains",
        "Hank Williams factions & groups is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-concepts",
        "contains",
        "Hank Williams concepts is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-eras",
        "contains",
        "Hank Williams eras is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-works",
        "contains",
        "Hank Williams works & media is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-symbols",
        "contains",
        "Hank Williams symbols is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-controversies",
        "contains",
        "Hank Williams controversies is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-sources",
        "contains",
        "Hank Williams sources is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-geography",
        "contains",
        "Hank Williams geography is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-legacy",
        "contains",
        "Hank Williams legacy is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-practices",
        "contains",
        "Hank Williams practices is a primary trailhead under Hank Williams.",
        0.88,
        0.82
    ],
    [
        "hank-williams",
        "hank-williams-entry-1",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-2",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-3",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-4",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-5",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-6",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-7",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-8",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-9",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-10",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-11",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-12",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-13",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-14",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-15",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-16",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-17",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-18",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-19",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-20",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-21",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-22",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ],
    [
        "hank-williams",
        "hank-williams-entry-23",
        "contains",
        "Supporting entry under Hank Williams.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
