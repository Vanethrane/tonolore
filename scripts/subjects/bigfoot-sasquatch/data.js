/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bigfoot-sasquatch",
        "name": "Bigfoot / Sasquatch",
        "type": "topic",
        "short_description": "Pacific Northwest footprints, Patterson film debates, and North America’s ape-man legend.",
        "description": "Pacific Northwest footprints, Patterson film debates, and North America’s ape-man legend. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bigfoot / Sasquatch so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "bigfoot-sasquatch-figures",
        "name": "Bigfoot / Sasquatch figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bigfoot / Sasquatch.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bigfoot / Sasquatch."
    },
    {
        "slug": "bigfoot-sasquatch-world",
        "name": "Bigfoot / Sasquatch world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bigfoot / Sasquatch.",
        "description": "Geography, institutions, and periodization that give Bigfoot / Sasquatch its encyclopedia shape."
    },
    {
        "slug": "bigfoot-sasquatch-places",
        "name": "Bigfoot / Sasquatch places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bigfoot / Sasquatch.",
        "description": "Places, regions, and built sites that give Bigfoot / Sasquatch its map — where events and figures concentrate."
    },
    {
        "slug": "bigfoot-sasquatch-events",
        "name": "Bigfoot / Sasquatch events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bigfoot / Sasquatch.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bigfoot / Sasquatch timeline."
    },
    {
        "slug": "bigfoot-sasquatch-objects",
        "name": "Bigfoot / Sasquatch objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bigfoot / Sasquatch.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bigfoot / Sasquatch."
    },
    {
        "slug": "bigfoot-sasquatch-factions",
        "name": "Bigfoot / Sasquatch factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bigfoot / Sasquatch.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bigfoot / Sasquatch."
    },
    {
        "slug": "bigfoot-sasquatch-concepts",
        "name": "Bigfoot / Sasquatch concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bigfoot / Sasquatch.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bigfoot / Sasquatch readable as a lore graph."
    },
    {
        "slug": "bigfoot-sasquatch-eras",
        "name": "Bigfoot / Sasquatch eras",
        "type": "event",
        "short_description": "Periodization for Bigfoot / Sasquatch.",
        "description": "Named eras and phases that help readers track how Bigfoot / Sasquatch changes across time."
    },
    {
        "slug": "bigfoot-sasquatch-works",
        "name": "Bigfoot / Sasquatch works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bigfoot / Sasquatch.",
        "description": "Primary works and adaptations through which most audiences encounter Bigfoot / Sasquatch."
    },
    {
        "slug": "bigfoot-sasquatch-symbols",
        "name": "Bigfoot / Sasquatch symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bigfoot / Sasquatch.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bigfoot / Sasquatch."
    },
    {
        "slug": "bigfoot-sasquatch-controversies",
        "name": "Bigfoot / Sasquatch controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bigfoot / Sasquatch.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bigfoot / Sasquatch argumentative."
    },
    {
        "slug": "bigfoot-sasquatch-sources",
        "name": "Bigfoot / Sasquatch sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bigfoot / Sasquatch.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bigfoot / Sasquatch."
    },
    {
        "slug": "bigfoot-sasquatch-geography",
        "name": "Bigfoot / Sasquatch geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bigfoot / Sasquatch.",
        "description": "Regions, routes, and spatial systems that situate Bigfoot / Sasquatch beyond single named places."
    },
    {
        "slug": "bigfoot-sasquatch-legacy",
        "name": "Bigfoot / Sasquatch legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bigfoot / Sasquatch.",
        "description": "How Bigfoot / Sasquatch continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bigfoot-sasquatch-practices",
        "name": "Bigfoot / Sasquatch practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bigfoot / Sasquatch.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bigfoot / Sasquatch."
    },
    {
        "slug": "bigfoot-sasquatch-entry-1",
        "name": "Bigfoot / Sasquatch entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-2",
        "name": "Bigfoot / Sasquatch entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-3",
        "name": "Bigfoot / Sasquatch entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-4",
        "name": "Bigfoot / Sasquatch entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-5",
        "name": "Bigfoot / Sasquatch entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-6",
        "name": "Bigfoot / Sasquatch entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-7",
        "name": "Bigfoot / Sasquatch entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-8",
        "name": "Bigfoot / Sasquatch entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-9",
        "name": "Bigfoot / Sasquatch entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-10",
        "name": "Bigfoot / Sasquatch entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-11",
        "name": "Bigfoot / Sasquatch entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-12",
        "name": "Bigfoot / Sasquatch entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-13",
        "name": "Bigfoot / Sasquatch entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-14",
        "name": "Bigfoot / Sasquatch entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-15",
        "name": "Bigfoot / Sasquatch entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-16",
        "name": "Bigfoot / Sasquatch entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-17",
        "name": "Bigfoot / Sasquatch entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-18",
        "name": "Bigfoot / Sasquatch entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-19",
        "name": "Bigfoot / Sasquatch entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-20",
        "name": "Bigfoot / Sasquatch entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-21",
        "name": "Bigfoot / Sasquatch entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-22",
        "name": "Bigfoot / Sasquatch entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-23",
        "name": "Bigfoot / Sasquatch entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bigfoot-sasquatch-entry-24",
        "name": "Bigfoot / Sasquatch entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bigfoot / Sasquatch.",
        "description": "A supporting encyclopedia entry in the Bigfoot / Sasquatch subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-places",
        "contains",
        "Bigfoot / Sasquatch places is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-events",
        "contains",
        "Bigfoot / Sasquatch events is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-objects",
        "contains",
        "Bigfoot / Sasquatch objects & artifacts is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-factions",
        "contains",
        "Bigfoot / Sasquatch factions & groups is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-concepts",
        "contains",
        "Bigfoot / Sasquatch concepts is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-eras",
        "contains",
        "Bigfoot / Sasquatch eras is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-works",
        "contains",
        "Bigfoot / Sasquatch works & media is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-symbols",
        "contains",
        "Bigfoot / Sasquatch symbols is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-controversies",
        "contains",
        "Bigfoot / Sasquatch controversies is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-sources",
        "contains",
        "Bigfoot / Sasquatch sources is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-geography",
        "contains",
        "Bigfoot / Sasquatch geography is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-legacy",
        "contains",
        "Bigfoot / Sasquatch legacy is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-practices",
        "contains",
        "Bigfoot / Sasquatch practices is a primary trailhead under Bigfoot / Sasquatch.",
        0.88,
        0.82
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-1",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-2",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-3",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-4",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-5",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-6",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-7",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-8",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-9",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-10",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-11",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-12",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-13",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-14",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-15",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-16",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-17",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-18",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-19",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-20",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-21",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-22",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-23",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ],
    [
        "bigfoot-sasquatch",
        "bigfoot-sasquatch-entry-24",
        "contains",
        "Supporting entry under Bigfoot / Sasquatch.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
