/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "paranormal-activity",
        "name": "Paranormal Activity",
        "type": "topic",
        "short_description": "Found-footage hauntings, Blumhouse scale, and the domestic demon that launched a franchise.",
        "description": "Found-footage hauntings, Blumhouse scale, and the domestic demon that launched a franchise. This Ton-o-Lore subject maps people, places, events, and ideas tied to Paranormal Activity so readers can follow long-tail connections across horror."
    },
    {
        "slug": "paranormal-activity-figures",
        "name": "Paranormal Activity figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Paranormal Activity.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Paranormal Activity."
    },
    {
        "slug": "paranormal-activity-world",
        "name": "Paranormal Activity world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Paranormal Activity.",
        "description": "Geography, institutions, and periodization that give Paranormal Activity its encyclopedia shape."
    },
    {
        "slug": "paranormal-activity-places",
        "name": "Paranormal Activity places",
        "type": "place",
        "short_description": "Locations and geographies that frame Paranormal Activity.",
        "description": "Places, regions, and built sites that give Paranormal Activity its map — where events and figures concentrate."
    },
    {
        "slug": "paranormal-activity-events",
        "name": "Paranormal Activity events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Paranormal Activity.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Paranormal Activity timeline."
    },
    {
        "slug": "paranormal-activity-objects",
        "name": "Paranormal Activity objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Paranormal Activity.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Paranormal Activity."
    },
    {
        "slug": "paranormal-activity-factions",
        "name": "Paranormal Activity factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Paranormal Activity.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Paranormal Activity."
    },
    {
        "slug": "paranormal-activity-concepts",
        "name": "Paranormal Activity concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Paranormal Activity.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Paranormal Activity readable as a lore graph."
    },
    {
        "slug": "paranormal-activity-eras",
        "name": "Paranormal Activity eras",
        "type": "event",
        "short_description": "Periodization for Paranormal Activity.",
        "description": "Named eras and phases that help readers track how Paranormal Activity changes across time."
    },
    {
        "slug": "paranormal-activity-works",
        "name": "Paranormal Activity works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Paranormal Activity.",
        "description": "Primary works and adaptations through which most audiences encounter Paranormal Activity."
    },
    {
        "slug": "paranormal-activity-symbols",
        "name": "Paranormal Activity symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Paranormal Activity.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Paranormal Activity."
    },
    {
        "slug": "paranormal-activity-controversies",
        "name": "Paranormal Activity controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Paranormal Activity.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Paranormal Activity argumentative."
    },
    {
        "slug": "paranormal-activity-sources",
        "name": "Paranormal Activity sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Paranormal Activity.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Paranormal Activity."
    },
    {
        "slug": "paranormal-activity-geography",
        "name": "Paranormal Activity geography",
        "type": "place",
        "short_description": "Broader geographic framing for Paranormal Activity.",
        "description": "Regions, routes, and spatial systems that situate Paranormal Activity beyond single named places."
    },
    {
        "slug": "paranormal-activity-legacy",
        "name": "Paranormal Activity legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Paranormal Activity.",
        "description": "How Paranormal Activity continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "paranormal-activity-practices",
        "name": "Paranormal Activity practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Paranormal Activity.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Paranormal Activity."
    },
    {
        "slug": "paranormal-activity-entry-1",
        "name": "Paranormal Activity entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-2",
        "name": "Paranormal Activity entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-3",
        "name": "Paranormal Activity entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-4",
        "name": "Paranormal Activity entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-5",
        "name": "Paranormal Activity entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-6",
        "name": "Paranormal Activity entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-7",
        "name": "Paranormal Activity entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-8",
        "name": "Paranormal Activity entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-9",
        "name": "Paranormal Activity entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-10",
        "name": "Paranormal Activity entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-11",
        "name": "Paranormal Activity entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-12",
        "name": "Paranormal Activity entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-13",
        "name": "Paranormal Activity entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-14",
        "name": "Paranormal Activity entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-15",
        "name": "Paranormal Activity entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-16",
        "name": "Paranormal Activity entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-17",
        "name": "Paranormal Activity entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-18",
        "name": "Paranormal Activity entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-19",
        "name": "Paranormal Activity entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-20",
        "name": "Paranormal Activity entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-21",
        "name": "Paranormal Activity entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-22",
        "name": "Paranormal Activity entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-23",
        "name": "Paranormal Activity entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paranormal-activity-entry-24",
        "name": "Paranormal Activity entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paranormal Activity.",
        "description": "A supporting encyclopedia entry in the Paranormal Activity subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "paranormal-activity",
        "paranormal-activity-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "paranormal-activity",
        "paranormal-activity-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "paranormal-activity",
        "paranormal-activity-places",
        "contains",
        "Paranormal Activity places is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-events",
        "contains",
        "Paranormal Activity events is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-objects",
        "contains",
        "Paranormal Activity objects & artifacts is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-factions",
        "contains",
        "Paranormal Activity factions & groups is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-concepts",
        "contains",
        "Paranormal Activity concepts is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-eras",
        "contains",
        "Paranormal Activity eras is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-works",
        "contains",
        "Paranormal Activity works & media is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-symbols",
        "contains",
        "Paranormal Activity symbols is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-controversies",
        "contains",
        "Paranormal Activity controversies is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-sources",
        "contains",
        "Paranormal Activity sources is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-geography",
        "contains",
        "Paranormal Activity geography is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-legacy",
        "contains",
        "Paranormal Activity legacy is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-practices",
        "contains",
        "Paranormal Activity practices is a primary trailhead under Paranormal Activity.",
        0.88,
        0.82
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-1",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-2",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-3",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-4",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-5",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-6",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-7",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-8",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-9",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-10",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-11",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-12",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-13",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-14",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-15",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-16",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-17",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-18",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-19",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-20",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-21",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-22",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-23",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ],
    [
        "paranormal-activity",
        "paranormal-activity-entry-24",
        "contains",
        "Supporting entry under Paranormal Activity.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
