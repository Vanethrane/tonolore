/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "papal-states-power",
        "name": "Papal temporal power",
        "type": "topic",
        "short_description": "Pope-kings, Rome’s worldly rule, and the Vatican’s pre-1870 territorial sovereignty.",
        "description": "Pope-kings, Rome’s worldly rule, and the Vatican’s pre-1870 territorial sovereignty. This Ton-o-Lore subject maps people, places, events, and ideas tied to Papal temporal power so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "papal-states-power-figures",
        "name": "Papal temporal power figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Papal temporal power.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Papal temporal power."
    },
    {
        "slug": "papal-states-power-world",
        "name": "Papal temporal power world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Papal temporal power.",
        "description": "Geography, institutions, and periodization that give Papal temporal power its encyclopedia shape."
    },
    {
        "slug": "papal-states-power-places",
        "name": "Papal temporal power places",
        "type": "place",
        "short_description": "Locations and geographies that frame Papal temporal power.",
        "description": "Places, regions, and built sites that give Papal temporal power its map — where events and figures concentrate."
    },
    {
        "slug": "papal-states-power-events",
        "name": "Papal temporal power events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Papal temporal power.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Papal temporal power timeline."
    },
    {
        "slug": "papal-states-power-objects",
        "name": "Papal temporal power objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Papal temporal power.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Papal temporal power."
    },
    {
        "slug": "papal-states-power-factions",
        "name": "Papal temporal power factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Papal temporal power.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Papal temporal power."
    },
    {
        "slug": "papal-states-power-concepts",
        "name": "Papal temporal power concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Papal temporal power.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Papal temporal power readable as a lore graph."
    },
    {
        "slug": "papal-states-power-eras",
        "name": "Papal temporal power eras",
        "type": "event",
        "short_description": "Periodization for Papal temporal power.",
        "description": "Named eras and phases that help readers track how Papal temporal power changes across time."
    },
    {
        "slug": "papal-states-power-works",
        "name": "Papal temporal power works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Papal temporal power.",
        "description": "Primary works and adaptations through which most audiences encounter Papal temporal power."
    },
    {
        "slug": "papal-states-power-symbols",
        "name": "Papal temporal power symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Papal temporal power.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Papal temporal power."
    },
    {
        "slug": "papal-states-power-controversies",
        "name": "Papal temporal power controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Papal temporal power.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Papal temporal power argumentative."
    },
    {
        "slug": "papal-states-power-sources",
        "name": "Papal temporal power sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Papal temporal power.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Papal temporal power."
    },
    {
        "slug": "papal-states-power-geography",
        "name": "Papal temporal power geography",
        "type": "place",
        "short_description": "Broader geographic framing for Papal temporal power.",
        "description": "Regions, routes, and spatial systems that situate Papal temporal power beyond single named places."
    },
    {
        "slug": "papal-states-power-legacy",
        "name": "Papal temporal power legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Papal temporal power.",
        "description": "How Papal temporal power continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "papal-states-power-practices",
        "name": "Papal temporal power practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Papal temporal power.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Papal temporal power."
    },
    {
        "slug": "papal-states-power-entry-1",
        "name": "Papal temporal power entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-2",
        "name": "Papal temporal power entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-3",
        "name": "Papal temporal power entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-4",
        "name": "Papal temporal power entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-5",
        "name": "Papal temporal power entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-6",
        "name": "Papal temporal power entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-7",
        "name": "Papal temporal power entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-8",
        "name": "Papal temporal power entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-9",
        "name": "Papal temporal power entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-10",
        "name": "Papal temporal power entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-11",
        "name": "Papal temporal power entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-12",
        "name": "Papal temporal power entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-13",
        "name": "Papal temporal power entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-14",
        "name": "Papal temporal power entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-15",
        "name": "Papal temporal power entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-16",
        "name": "Papal temporal power entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-17",
        "name": "Papal temporal power entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-18",
        "name": "Papal temporal power entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-19",
        "name": "Papal temporal power entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-20",
        "name": "Papal temporal power entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-21",
        "name": "Papal temporal power entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-22",
        "name": "Papal temporal power entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-23",
        "name": "Papal temporal power entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "papal-states-power-entry-24",
        "name": "Papal temporal power entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Papal temporal power.",
        "description": "A supporting encyclopedia entry in the Papal temporal power subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "papal-states-power",
        "papal-states-power-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "papal-states-power",
        "papal-states-power-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "papal-states-power",
        "papal-states-power-places",
        "contains",
        "Papal temporal power places is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-events",
        "contains",
        "Papal temporal power events is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-objects",
        "contains",
        "Papal temporal power objects & artifacts is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-factions",
        "contains",
        "Papal temporal power factions & groups is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-concepts",
        "contains",
        "Papal temporal power concepts is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-eras",
        "contains",
        "Papal temporal power eras is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-works",
        "contains",
        "Papal temporal power works & media is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-symbols",
        "contains",
        "Papal temporal power symbols is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-controversies",
        "contains",
        "Papal temporal power controversies is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-sources",
        "contains",
        "Papal temporal power sources is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-geography",
        "contains",
        "Papal temporal power geography is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-legacy",
        "contains",
        "Papal temporal power legacy is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-practices",
        "contains",
        "Papal temporal power practices is a primary trailhead under Papal temporal power.",
        0.88,
        0.82
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-1",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-2",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-3",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-4",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-5",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-6",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-7",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-8",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-9",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-10",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-11",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-12",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-13",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-14",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-15",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-16",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-17",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-18",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-19",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-20",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-21",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-22",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-23",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ],
    [
        "papal-states-power",
        "papal-states-power-entry-24",
        "contains",
        "Supporting entry under Papal temporal power.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
