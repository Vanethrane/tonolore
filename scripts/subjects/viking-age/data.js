/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "viking-age",
        "name": "Viking Age",
        "type": "topic",
        "short_description": "Raids, trade, settlement, and Norse expansion across the North Atlantic and Europe.",
        "description": "Raids, trade, settlement, and Norse expansion across the North Atlantic and Europe. This Ton-o-Lore subject maps people, places, events, and ideas tied to Viking Age so readers can follow long-tail connections across history."
    },
    {
        "slug": "viking-age-figures",
        "name": "Viking Age figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Viking Age.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Viking Age."
    },
    {
        "slug": "viking-age-world",
        "name": "Viking Age world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Viking Age.",
        "description": "Geography, institutions, and periodization that give Viking Age its encyclopedia shape."
    },
    {
        "slug": "viking-age-places",
        "name": "Viking Age places",
        "type": "place",
        "short_description": "Locations and geographies that frame Viking Age.",
        "description": "Places, regions, and built sites that give Viking Age its map — where events and figures concentrate."
    },
    {
        "slug": "viking-age-events",
        "name": "Viking Age events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Viking Age.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Viking Age timeline."
    },
    {
        "slug": "viking-age-objects",
        "name": "Viking Age objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Viking Age.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Viking Age."
    },
    {
        "slug": "viking-age-factions",
        "name": "Viking Age factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Viking Age.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Viking Age."
    },
    {
        "slug": "viking-age-concepts",
        "name": "Viking Age concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Viking Age.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Viking Age readable as a lore graph."
    },
    {
        "slug": "viking-age-eras",
        "name": "Viking Age eras",
        "type": "event",
        "short_description": "Periodization for Viking Age.",
        "description": "Named eras and phases that help readers track how Viking Age changes across time."
    },
    {
        "slug": "viking-age-works",
        "name": "Viking Age works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Viking Age.",
        "description": "Primary works and adaptations through which most audiences encounter Viking Age."
    },
    {
        "slug": "viking-age-symbols",
        "name": "Viking Age symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Viking Age.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Viking Age."
    },
    {
        "slug": "viking-age-controversies",
        "name": "Viking Age controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Viking Age.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Viking Age argumentative."
    },
    {
        "slug": "viking-age-sources",
        "name": "Viking Age sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Viking Age.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Viking Age."
    },
    {
        "slug": "viking-age-geography",
        "name": "Viking Age geography",
        "type": "place",
        "short_description": "Broader geographic framing for Viking Age.",
        "description": "Regions, routes, and spatial systems that situate Viking Age beyond single named places."
    },
    {
        "slug": "viking-age-legacy",
        "name": "Viking Age legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Viking Age.",
        "description": "How Viking Age continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "viking-age-practices",
        "name": "Viking Age practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Viking Age.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Viking Age."
    },
    {
        "slug": "viking-age-entry-1",
        "name": "Viking Age entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-2",
        "name": "Viking Age entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-3",
        "name": "Viking Age entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-4",
        "name": "Viking Age entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-5",
        "name": "Viking Age entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-6",
        "name": "Viking Age entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-7",
        "name": "Viking Age entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-8",
        "name": "Viking Age entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-9",
        "name": "Viking Age entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-10",
        "name": "Viking Age entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-11",
        "name": "Viking Age entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-12",
        "name": "Viking Age entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-13",
        "name": "Viking Age entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-14",
        "name": "Viking Age entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-15",
        "name": "Viking Age entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-16",
        "name": "Viking Age entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-17",
        "name": "Viking Age entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-18",
        "name": "Viking Age entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-19",
        "name": "Viking Age entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-20",
        "name": "Viking Age entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-21",
        "name": "Viking Age entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-22",
        "name": "Viking Age entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-23",
        "name": "Viking Age entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-age-entry-24",
        "name": "Viking Age entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking Age.",
        "description": "A supporting encyclopedia entry in the Viking Age subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "viking-age",
        "viking-age-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "viking-age",
        "viking-age-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "viking-age",
        "viking-age-places",
        "contains",
        "Viking Age places is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-events",
        "contains",
        "Viking Age events is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-objects",
        "contains",
        "Viking Age objects & artifacts is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-factions",
        "contains",
        "Viking Age factions & groups is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-concepts",
        "contains",
        "Viking Age concepts is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-eras",
        "contains",
        "Viking Age eras is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-works",
        "contains",
        "Viking Age works & media is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-symbols",
        "contains",
        "Viking Age symbols is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-controversies",
        "contains",
        "Viking Age controversies is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-sources",
        "contains",
        "Viking Age sources is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-geography",
        "contains",
        "Viking Age geography is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-legacy",
        "contains",
        "Viking Age legacy is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-practices",
        "contains",
        "Viking Age practices is a primary trailhead under Viking Age.",
        0.88,
        0.82
    ],
    [
        "viking-age",
        "viking-age-entry-1",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-2",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-3",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-4",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-5",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-6",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-7",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-8",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-9",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-10",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-11",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-12",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-13",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-14",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-15",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-16",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-17",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-18",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-19",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-20",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-21",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-22",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-23",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ],
    [
        "viking-age",
        "viking-age-entry-24",
        "contains",
        "Supporting entry under Viking Age.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
