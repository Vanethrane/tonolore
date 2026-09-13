/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "napster-file-sharing",
        "name": "Napster & file-sharing era",
        "type": "topic",
        "short_description": "Peer-to-peer music, lawsuits, and the download culture that remade media distribution.",
        "description": "Peer-to-peer music, lawsuits, and the download culture that remade media distribution. This Ton-o-Lore subject maps people, places, events, and ideas tied to Napster & file-sharing era so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "napster-file-sharing-figures",
        "name": "Napster & file-sharing era figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Napster & file-sharing era.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Napster & file-sharing era."
    },
    {
        "slug": "napster-file-sharing-world",
        "name": "Napster & file-sharing era world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Napster & file-sharing era.",
        "description": "Geography, institutions, and periodization that give Napster & file-sharing era its encyclopedia shape."
    },
    {
        "slug": "napster-file-sharing-places",
        "name": "Napster & file-sharing era places",
        "type": "place",
        "short_description": "Locations and geographies that frame Napster & file-sharing era.",
        "description": "Places, regions, and built sites that give Napster & file-sharing era its map — where events and figures concentrate."
    },
    {
        "slug": "napster-file-sharing-events",
        "name": "Napster & file-sharing era events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Napster & file-sharing era.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Napster & file-sharing era timeline."
    },
    {
        "slug": "napster-file-sharing-objects",
        "name": "Napster & file-sharing era objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Napster & file-sharing era.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Napster & file-sharing era."
    },
    {
        "slug": "napster-file-sharing-factions",
        "name": "Napster & file-sharing era factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Napster & file-sharing era.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Napster & file-sharing era."
    },
    {
        "slug": "napster-file-sharing-concepts",
        "name": "Napster & file-sharing era concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Napster & file-sharing era.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Napster & file-sharing era readable as a lore graph."
    },
    {
        "slug": "napster-file-sharing-eras",
        "name": "Napster & file-sharing era eras",
        "type": "event",
        "short_description": "Periodization for Napster & file-sharing era.",
        "description": "Named eras and phases that help readers track how Napster & file-sharing era changes across time."
    },
    {
        "slug": "napster-file-sharing-works",
        "name": "Napster & file-sharing era works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Napster & file-sharing era.",
        "description": "Primary works and adaptations through which most audiences encounter Napster & file-sharing era."
    },
    {
        "slug": "napster-file-sharing-symbols",
        "name": "Napster & file-sharing era symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Napster & file-sharing era.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Napster & file-sharing era."
    },
    {
        "slug": "napster-file-sharing-controversies",
        "name": "Napster & file-sharing era controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Napster & file-sharing era.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Napster & file-sharing era argumentative."
    },
    {
        "slug": "napster-file-sharing-sources",
        "name": "Napster & file-sharing era sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Napster & file-sharing era.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Napster & file-sharing era."
    },
    {
        "slug": "napster-file-sharing-geography",
        "name": "Napster & file-sharing era geography",
        "type": "place",
        "short_description": "Broader geographic framing for Napster & file-sharing era.",
        "description": "Regions, routes, and spatial systems that situate Napster & file-sharing era beyond single named places."
    },
    {
        "slug": "napster-file-sharing-legacy",
        "name": "Napster & file-sharing era legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Napster & file-sharing era.",
        "description": "How Napster & file-sharing era continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "napster-file-sharing-practices",
        "name": "Napster & file-sharing era practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Napster & file-sharing era.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Napster & file-sharing era."
    },
    {
        "slug": "napster-file-sharing-entry-1",
        "name": "Napster & file-sharing era entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-2",
        "name": "Napster & file-sharing era entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-3",
        "name": "Napster & file-sharing era entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-4",
        "name": "Napster & file-sharing era entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-5",
        "name": "Napster & file-sharing era entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-6",
        "name": "Napster & file-sharing era entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-7",
        "name": "Napster & file-sharing era entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-8",
        "name": "Napster & file-sharing era entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-9",
        "name": "Napster & file-sharing era entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-10",
        "name": "Napster & file-sharing era entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-11",
        "name": "Napster & file-sharing era entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-12",
        "name": "Napster & file-sharing era entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-13",
        "name": "Napster & file-sharing era entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-14",
        "name": "Napster & file-sharing era entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-15",
        "name": "Napster & file-sharing era entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-16",
        "name": "Napster & file-sharing era entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-17",
        "name": "Napster & file-sharing era entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-18",
        "name": "Napster & file-sharing era entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-19",
        "name": "Napster & file-sharing era entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-20",
        "name": "Napster & file-sharing era entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-21",
        "name": "Napster & file-sharing era entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-22",
        "name": "Napster & file-sharing era entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-23",
        "name": "Napster & file-sharing era entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napster-file-sharing-entry-24",
        "name": "Napster & file-sharing era entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napster & file-sharing era.",
        "description": "A supporting encyclopedia entry in the Napster & file-sharing era subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "napster-file-sharing",
        "napster-file-sharing-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-places",
        "contains",
        "Napster & file-sharing era places is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-events",
        "contains",
        "Napster & file-sharing era events is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-objects",
        "contains",
        "Napster & file-sharing era objects & artifacts is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-factions",
        "contains",
        "Napster & file-sharing era factions & groups is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-concepts",
        "contains",
        "Napster & file-sharing era concepts is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-eras",
        "contains",
        "Napster & file-sharing era eras is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-works",
        "contains",
        "Napster & file-sharing era works & media is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-symbols",
        "contains",
        "Napster & file-sharing era symbols is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-controversies",
        "contains",
        "Napster & file-sharing era controversies is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-sources",
        "contains",
        "Napster & file-sharing era sources is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-geography",
        "contains",
        "Napster & file-sharing era geography is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-legacy",
        "contains",
        "Napster & file-sharing era legacy is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-practices",
        "contains",
        "Napster & file-sharing era practices is a primary trailhead under Napster & file-sharing era.",
        0.88,
        0.82
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-1",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-2",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-3",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-4",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-5",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-6",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-7",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-8",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-9",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-10",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-11",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-12",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-13",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-14",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-15",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-16",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-17",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-18",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-19",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-20",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-21",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-22",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-23",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ],
    [
        "napster-file-sharing",
        "napster-file-sharing-entry-24",
        "contains",
        "Supporting entry under Napster & file-sharing era.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
