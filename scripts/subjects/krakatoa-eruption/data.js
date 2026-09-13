/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "krakatoa-eruption",
        "name": "Krakatoa eruption",
        "type": "topic",
        "short_description": "1883 blast, global sunsets, and the volcanic disaster that entered world memory.",
        "description": "1883 blast, global sunsets, and the volcanic disaster that entered world memory. This Ton-o-Lore subject maps people, places, events, and ideas tied to Krakatoa eruption so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "krakatoa-eruption-figures",
        "name": "Krakatoa eruption figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Krakatoa eruption.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Krakatoa eruption."
    },
    {
        "slug": "krakatoa-eruption-world",
        "name": "Krakatoa eruption world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Krakatoa eruption.",
        "description": "Geography, institutions, and periodization that give Krakatoa eruption its encyclopedia shape."
    },
    {
        "slug": "krakatoa-eruption-places",
        "name": "Krakatoa eruption places",
        "type": "place",
        "short_description": "Locations and geographies that frame Krakatoa eruption.",
        "description": "Places, regions, and built sites that give Krakatoa eruption its map — where events and figures concentrate."
    },
    {
        "slug": "krakatoa-eruption-events",
        "name": "Krakatoa eruption events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Krakatoa eruption.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Krakatoa eruption timeline."
    },
    {
        "slug": "krakatoa-eruption-objects",
        "name": "Krakatoa eruption objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Krakatoa eruption.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Krakatoa eruption."
    },
    {
        "slug": "krakatoa-eruption-factions",
        "name": "Krakatoa eruption factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Krakatoa eruption.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Krakatoa eruption."
    },
    {
        "slug": "krakatoa-eruption-concepts",
        "name": "Krakatoa eruption concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Krakatoa eruption.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Krakatoa eruption readable as a lore graph."
    },
    {
        "slug": "krakatoa-eruption-eras",
        "name": "Krakatoa eruption eras",
        "type": "event",
        "short_description": "Periodization for Krakatoa eruption.",
        "description": "Named eras and phases that help readers track how Krakatoa eruption changes across time."
    },
    {
        "slug": "krakatoa-eruption-works",
        "name": "Krakatoa eruption works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Krakatoa eruption.",
        "description": "Primary works and adaptations through which most audiences encounter Krakatoa eruption."
    },
    {
        "slug": "krakatoa-eruption-symbols",
        "name": "Krakatoa eruption symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Krakatoa eruption.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Krakatoa eruption."
    },
    {
        "slug": "krakatoa-eruption-controversies",
        "name": "Krakatoa eruption controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Krakatoa eruption.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Krakatoa eruption argumentative."
    },
    {
        "slug": "krakatoa-eruption-sources",
        "name": "Krakatoa eruption sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Krakatoa eruption.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Krakatoa eruption."
    },
    {
        "slug": "krakatoa-eruption-geography",
        "name": "Krakatoa eruption geography",
        "type": "place",
        "short_description": "Broader geographic framing for Krakatoa eruption.",
        "description": "Regions, routes, and spatial systems that situate Krakatoa eruption beyond single named places."
    },
    {
        "slug": "krakatoa-eruption-legacy",
        "name": "Krakatoa eruption legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Krakatoa eruption.",
        "description": "How Krakatoa eruption continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "krakatoa-eruption-practices",
        "name": "Krakatoa eruption practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Krakatoa eruption.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Krakatoa eruption."
    },
    {
        "slug": "krakatoa-eruption-entry-1",
        "name": "Krakatoa eruption entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-2",
        "name": "Krakatoa eruption entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-3",
        "name": "Krakatoa eruption entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-4",
        "name": "Krakatoa eruption entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-5",
        "name": "Krakatoa eruption entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-6",
        "name": "Krakatoa eruption entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-7",
        "name": "Krakatoa eruption entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-8",
        "name": "Krakatoa eruption entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-9",
        "name": "Krakatoa eruption entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-10",
        "name": "Krakatoa eruption entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-11",
        "name": "Krakatoa eruption entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-12",
        "name": "Krakatoa eruption entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-13",
        "name": "Krakatoa eruption entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-14",
        "name": "Krakatoa eruption entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-15",
        "name": "Krakatoa eruption entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-16",
        "name": "Krakatoa eruption entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-17",
        "name": "Krakatoa eruption entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-18",
        "name": "Krakatoa eruption entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-19",
        "name": "Krakatoa eruption entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-20",
        "name": "Krakatoa eruption entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-21",
        "name": "Krakatoa eruption entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-22",
        "name": "Krakatoa eruption entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-23",
        "name": "Krakatoa eruption entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "krakatoa-eruption-entry-24",
        "name": "Krakatoa eruption entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Krakatoa eruption.",
        "description": "A supporting encyclopedia entry in the Krakatoa eruption subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "krakatoa-eruption",
        "krakatoa-eruption-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-places",
        "contains",
        "Krakatoa eruption places is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-events",
        "contains",
        "Krakatoa eruption events is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-objects",
        "contains",
        "Krakatoa eruption objects & artifacts is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-factions",
        "contains",
        "Krakatoa eruption factions & groups is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-concepts",
        "contains",
        "Krakatoa eruption concepts is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-eras",
        "contains",
        "Krakatoa eruption eras is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-works",
        "contains",
        "Krakatoa eruption works & media is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-symbols",
        "contains",
        "Krakatoa eruption symbols is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-controversies",
        "contains",
        "Krakatoa eruption controversies is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-sources",
        "contains",
        "Krakatoa eruption sources is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-geography",
        "contains",
        "Krakatoa eruption geography is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-legacy",
        "contains",
        "Krakatoa eruption legacy is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-practices",
        "contains",
        "Krakatoa eruption practices is a primary trailhead under Krakatoa eruption.",
        0.88,
        0.82
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-1",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-2",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-3",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-4",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-5",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-6",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-7",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-8",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-9",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-10",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-11",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-12",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-13",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-14",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-15",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-16",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-17",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-18",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-19",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-20",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-21",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-22",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-23",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ],
    [
        "krakatoa-eruption",
        "krakatoa-eruption-entry-24",
        "contains",
        "Supporting entry under Krakatoa eruption.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
