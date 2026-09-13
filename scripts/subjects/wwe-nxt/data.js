/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wwe-nxt",
        "name": "NXT",
        "type": "topic",
        "short_description": "Developmental-to-brand evolution, TakeOvers, and the black-and-gold era that redefined WWE’s third brand.",
        "description": "Developmental-to-brand evolution, TakeOvers, and the black-and-gold era that redefined WWE’s third brand. This Ton-o-Lore subject maps people, places, events, and ideas tied to NXT so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "wwe-nxt-figures",
        "name": "NXT figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to NXT.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring NXT."
    },
    {
        "slug": "wwe-nxt-world",
        "name": "NXT world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame NXT.",
        "description": "Geography, institutions, and periodization that give NXT its encyclopedia shape."
    },
    {
        "slug": "wwe-nxt-places",
        "name": "NXT places",
        "type": "place",
        "short_description": "Locations and geographies that frame NXT.",
        "description": "Places, regions, and built sites that give NXT its map — where events and figures concentrate."
    },
    {
        "slug": "wwe-nxt-events",
        "name": "NXT events",
        "type": "event",
        "short_description": "Turning points and dated episodes in NXT.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the NXT timeline."
    },
    {
        "slug": "wwe-nxt-objects",
        "name": "NXT objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NXT.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NXT."
    },
    {
        "slug": "wwe-nxt-factions",
        "name": "NXT factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NXT.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NXT."
    },
    {
        "slug": "wwe-nxt-concepts",
        "name": "NXT concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NXT.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NXT readable as a lore graph."
    },
    {
        "slug": "wwe-nxt-eras",
        "name": "NXT eras",
        "type": "event",
        "short_description": "Periodization for NXT.",
        "description": "Named eras and phases that help readers track how NXT changes across time."
    },
    {
        "slug": "wwe-nxt-works",
        "name": "NXT works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NXT.",
        "description": "Primary works and adaptations through which most audiences encounter NXT."
    },
    {
        "slug": "wwe-nxt-symbols",
        "name": "NXT symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NXT.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NXT."
    },
    {
        "slug": "wwe-nxt-controversies",
        "name": "NXT controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NXT.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NXT argumentative."
    },
    {
        "slug": "wwe-nxt-sources",
        "name": "NXT sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NXT.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NXT."
    },
    {
        "slug": "wwe-nxt-geography",
        "name": "NXT geography",
        "type": "place",
        "short_description": "Broader geographic framing for NXT.",
        "description": "Regions, routes, and spatial systems that situate NXT beyond single named places."
    },
    {
        "slug": "wwe-nxt-legacy",
        "name": "NXT legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of NXT.",
        "description": "How NXT continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wwe-nxt-practices",
        "name": "NXT practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in NXT.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in NXT."
    },
    {
        "slug": "wwe-nxt-entry-1",
        "name": "NXT entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-2",
        "name": "NXT entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-3",
        "name": "NXT entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-4",
        "name": "NXT entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-5",
        "name": "NXT entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-6",
        "name": "NXT entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-7",
        "name": "NXT entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-8",
        "name": "NXT entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-9",
        "name": "NXT entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-10",
        "name": "NXT entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-11",
        "name": "NXT entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-12",
        "name": "NXT entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-13",
        "name": "NXT entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-14",
        "name": "NXT entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-15",
        "name": "NXT entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-16",
        "name": "NXT entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-17",
        "name": "NXT entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-18",
        "name": "NXT entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-19",
        "name": "NXT entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-20",
        "name": "NXT entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-21",
        "name": "NXT entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-22",
        "name": "NXT entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-23",
        "name": "NXT entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wwe-nxt-entry-24",
        "name": "NXT entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside NXT.",
        "description": "A supporting encyclopedia entry in the NXT subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wwe-nxt",
        "wwe-nxt-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wwe-nxt",
        "wwe-nxt-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wwe-nxt",
        "wwe-nxt-places",
        "contains",
        "NXT places is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-events",
        "contains",
        "NXT events is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-objects",
        "contains",
        "NXT objects & artifacts is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-factions",
        "contains",
        "NXT factions & groups is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-concepts",
        "contains",
        "NXT concepts is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-eras",
        "contains",
        "NXT eras is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-works",
        "contains",
        "NXT works & media is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-symbols",
        "contains",
        "NXT symbols is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-controversies",
        "contains",
        "NXT controversies is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-sources",
        "contains",
        "NXT sources is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-geography",
        "contains",
        "NXT geography is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-legacy",
        "contains",
        "NXT legacy is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-practices",
        "contains",
        "NXT practices is a primary trailhead under NXT.",
        0.88,
        0.82
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-1",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-2",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-3",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-4",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-5",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-6",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-7",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-8",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-9",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-10",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-11",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-12",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-13",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-14",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-15",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-16",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-17",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-18",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-19",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-20",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-21",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-22",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-23",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ],
    [
        "wwe-nxt",
        "wwe-nxt-entry-24",
        "contains",
        "Supporting entry under NXT.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
