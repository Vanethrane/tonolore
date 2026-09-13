/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "duke-ellington",
        "name": "Duke Ellington",
        "type": "topic",
        "short_description": "Composer-bandleader who treated the orchestra as a lifelong instrument of American music.",
        "description": "Composer-bandleader who treated the orchestra as a lifelong instrument of American music. This Ton-o-Lore subject maps people, works, places, and ideas tied to Duke Ellington so readers can follow long-tail connections across the jazz tradition."
    },
    {
        "slug": "duke-ellington-catalog",
        "name": "Duke Ellington catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Duke Ellington.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Duke Ellington in the jazz tradition."
    },
    {
        "slug": "duke-ellington-era",
        "name": "Duke Ellington eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Duke Ellington story.",
        "description": "Periodization helps encyclopedia readers track how Duke Ellington changed sound, lineup, or public myth across decades of jazz history."
    },
    {
        "slug": "duke-ellington-figures",
        "name": "Duke Ellington figures",
        "type": "topic",
        "short_description": "People and named forces central to Duke Ellington.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Duke Ellington."
    },
    {
        "slug": "duke-ellington-places",
        "name": "Duke Ellington places",
        "type": "place",
        "short_description": "Locations and geographies that frame Duke Ellington.",
        "description": "Places, regions, and built sites that give Duke Ellington its map — where events and figures concentrate."
    },
    {
        "slug": "duke-ellington-events",
        "name": "Duke Ellington events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Duke Ellington.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Duke Ellington timeline."
    },
    {
        "slug": "duke-ellington-objects",
        "name": "Duke Ellington objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Duke Ellington.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Duke Ellington."
    },
    {
        "slug": "duke-ellington-factions",
        "name": "Duke Ellington factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Duke Ellington.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Duke Ellington."
    },
    {
        "slug": "duke-ellington-concepts",
        "name": "Duke Ellington concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Duke Ellington.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Duke Ellington readable as a lore graph."
    },
    {
        "slug": "duke-ellington-eras",
        "name": "Duke Ellington eras",
        "type": "event",
        "short_description": "Periodization for Duke Ellington.",
        "description": "Named eras and phases that help readers track how Duke Ellington changes across time."
    },
    {
        "slug": "duke-ellington-works",
        "name": "Duke Ellington works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Duke Ellington.",
        "description": "Primary works and adaptations through which most audiences encounter Duke Ellington."
    },
    {
        "slug": "duke-ellington-symbols",
        "name": "Duke Ellington symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Duke Ellington.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Duke Ellington."
    },
    {
        "slug": "duke-ellington-controversies",
        "name": "Duke Ellington controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Duke Ellington.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Duke Ellington argumentative."
    },
    {
        "slug": "duke-ellington-sources",
        "name": "Duke Ellington sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Duke Ellington.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Duke Ellington."
    },
    {
        "slug": "duke-ellington-geography",
        "name": "Duke Ellington geography",
        "type": "place",
        "short_description": "Broader geographic framing for Duke Ellington.",
        "description": "Regions, routes, and spatial systems that situate Duke Ellington beyond single named places."
    },
    {
        "slug": "duke-ellington-legacy",
        "name": "Duke Ellington legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Duke Ellington.",
        "description": "How Duke Ellington continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "duke-ellington-practices",
        "name": "Duke Ellington practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Duke Ellington.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Duke Ellington."
    },
    {
        "slug": "duke-ellington-entry-1",
        "name": "Duke Ellington entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-2",
        "name": "Duke Ellington entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-3",
        "name": "Duke Ellington entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-4",
        "name": "Duke Ellington entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-5",
        "name": "Duke Ellington entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-6",
        "name": "Duke Ellington entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-7",
        "name": "Duke Ellington entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-8",
        "name": "Duke Ellington entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-9",
        "name": "Duke Ellington entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-10",
        "name": "Duke Ellington entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-11",
        "name": "Duke Ellington entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-12",
        "name": "Duke Ellington entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-13",
        "name": "Duke Ellington entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-14",
        "name": "Duke Ellington entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-15",
        "name": "Duke Ellington entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-16",
        "name": "Duke Ellington entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-17",
        "name": "Duke Ellington entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-18",
        "name": "Duke Ellington entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-19",
        "name": "Duke Ellington entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-20",
        "name": "Duke Ellington entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-21",
        "name": "Duke Ellington entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-22",
        "name": "Duke Ellington entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "duke-ellington-entry-23",
        "name": "Duke Ellington entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Duke Ellington.",
        "description": "A supporting encyclopedia entry in the Duke Ellington subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "duke-ellington",
        "duke-ellington-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "duke-ellington",
        "duke-ellington-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "duke-ellington",
        "duke-ellington-figures",
        "contains",
        "Duke Ellington figures is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-places",
        "contains",
        "Duke Ellington places is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-events",
        "contains",
        "Duke Ellington events is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-objects",
        "contains",
        "Duke Ellington objects & artifacts is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-factions",
        "contains",
        "Duke Ellington factions & groups is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-concepts",
        "contains",
        "Duke Ellington concepts is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-eras",
        "contains",
        "Duke Ellington eras is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-works",
        "contains",
        "Duke Ellington works & media is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-symbols",
        "contains",
        "Duke Ellington symbols is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-controversies",
        "contains",
        "Duke Ellington controversies is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-sources",
        "contains",
        "Duke Ellington sources is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-geography",
        "contains",
        "Duke Ellington geography is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-legacy",
        "contains",
        "Duke Ellington legacy is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-practices",
        "contains",
        "Duke Ellington practices is a primary trailhead under Duke Ellington.",
        0.88,
        0.82
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-1",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-2",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-3",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-4",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-5",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-6",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-7",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-8",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-9",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-10",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-11",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-12",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-13",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-14",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-15",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-16",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-17",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-18",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-19",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-20",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-21",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-22",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ],
    [
        "duke-ellington",
        "duke-ellington-entry-23",
        "contains",
        "Supporting entry under Duke Ellington.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
