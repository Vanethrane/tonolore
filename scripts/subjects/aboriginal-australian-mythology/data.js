/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aboriginal-australian-mythology",
        "name": "Aboriginal Australian mythology",
        "type": "topic",
        "short_description": "Dreaming tracks, ancestral beings, and Country-centered cosmologies across Indigenous Australia.",
        "description": "Dreaming tracks, ancestral beings, and Country-centered cosmologies across Indigenous Australia. This Ton-o-Lore subject maps people, places, events, and ideas tied to Aboriginal Australian mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "aboriginal-australian-mythology-figures",
        "name": "Aboriginal Australian mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Aboriginal Australian mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Aboriginal Australian mythology."
    },
    {
        "slug": "aboriginal-australian-mythology-world",
        "name": "Aboriginal Australian mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Aboriginal Australian mythology.",
        "description": "Geography, institutions, and periodization that give Aboriginal Australian mythology its encyclopedia shape."
    },
    {
        "slug": "aboriginal-australian-mythology-places",
        "name": "Aboriginal Australian mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Aboriginal Australian mythology.",
        "description": "Places, regions, and built sites that give Aboriginal Australian mythology its map — where events and figures concentrate."
    },
    {
        "slug": "aboriginal-australian-mythology-events",
        "name": "Aboriginal Australian mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Aboriginal Australian mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Aboriginal Australian mythology timeline."
    },
    {
        "slug": "aboriginal-australian-mythology-objects",
        "name": "Aboriginal Australian mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Aboriginal Australian mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Aboriginal Australian mythology."
    },
    {
        "slug": "aboriginal-australian-mythology-factions",
        "name": "Aboriginal Australian mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Aboriginal Australian mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Aboriginal Australian mythology."
    },
    {
        "slug": "aboriginal-australian-mythology-concepts",
        "name": "Aboriginal Australian mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Aboriginal Australian mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Aboriginal Australian mythology readable as a lore graph."
    },
    {
        "slug": "aboriginal-australian-mythology-eras",
        "name": "Aboriginal Australian mythology eras",
        "type": "event",
        "short_description": "Periodization for Aboriginal Australian mythology.",
        "description": "Named eras and phases that help readers track how Aboriginal Australian mythology changes across time."
    },
    {
        "slug": "aboriginal-australian-mythology-works",
        "name": "Aboriginal Australian mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Aboriginal Australian mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Aboriginal Australian mythology."
    },
    {
        "slug": "aboriginal-australian-mythology-symbols",
        "name": "Aboriginal Australian mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Aboriginal Australian mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Aboriginal Australian mythology."
    },
    {
        "slug": "aboriginal-australian-mythology-controversies",
        "name": "Aboriginal Australian mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Aboriginal Australian mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Aboriginal Australian mythology argumentative."
    },
    {
        "slug": "aboriginal-australian-mythology-sources",
        "name": "Aboriginal Australian mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Aboriginal Australian mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Aboriginal Australian mythology."
    },
    {
        "slug": "aboriginal-australian-mythology-geography",
        "name": "Aboriginal Australian mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Aboriginal Australian mythology.",
        "description": "Regions, routes, and spatial systems that situate Aboriginal Australian mythology beyond single named places."
    },
    {
        "slug": "aboriginal-australian-mythology-legacy",
        "name": "Aboriginal Australian mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Aboriginal Australian mythology.",
        "description": "How Aboriginal Australian mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aboriginal-australian-mythology-practices",
        "name": "Aboriginal Australian mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Aboriginal Australian mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Aboriginal Australian mythology."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-1",
        "name": "Aboriginal Australian mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-2",
        "name": "Aboriginal Australian mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-3",
        "name": "Aboriginal Australian mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-4",
        "name": "Aboriginal Australian mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-5",
        "name": "Aboriginal Australian mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-6",
        "name": "Aboriginal Australian mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-7",
        "name": "Aboriginal Australian mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-8",
        "name": "Aboriginal Australian mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-9",
        "name": "Aboriginal Australian mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-10",
        "name": "Aboriginal Australian mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-11",
        "name": "Aboriginal Australian mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-12",
        "name": "Aboriginal Australian mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-13",
        "name": "Aboriginal Australian mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-14",
        "name": "Aboriginal Australian mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-15",
        "name": "Aboriginal Australian mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-16",
        "name": "Aboriginal Australian mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-17",
        "name": "Aboriginal Australian mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-18",
        "name": "Aboriginal Australian mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-19",
        "name": "Aboriginal Australian mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-20",
        "name": "Aboriginal Australian mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-21",
        "name": "Aboriginal Australian mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-22",
        "name": "Aboriginal Australian mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-23",
        "name": "Aboriginal Australian mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aboriginal-australian-mythology-entry-24",
        "name": "Aboriginal Australian mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aboriginal Australian mythology.",
        "description": "A supporting encyclopedia entry in the Aboriginal Australian mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-places",
        "contains",
        "Aboriginal Australian mythology places is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-events",
        "contains",
        "Aboriginal Australian mythology events is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-objects",
        "contains",
        "Aboriginal Australian mythology objects & artifacts is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-factions",
        "contains",
        "Aboriginal Australian mythology factions & groups is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-concepts",
        "contains",
        "Aboriginal Australian mythology concepts is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-eras",
        "contains",
        "Aboriginal Australian mythology eras is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-works",
        "contains",
        "Aboriginal Australian mythology works & media is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-symbols",
        "contains",
        "Aboriginal Australian mythology symbols is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-controversies",
        "contains",
        "Aboriginal Australian mythology controversies is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-sources",
        "contains",
        "Aboriginal Australian mythology sources is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-geography",
        "contains",
        "Aboriginal Australian mythology geography is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-legacy",
        "contains",
        "Aboriginal Australian mythology legacy is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-practices",
        "contains",
        "Aboriginal Australian mythology practices is a primary trailhead under Aboriginal Australian mythology.",
        0.88,
        0.82
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-1",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-2",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-3",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-4",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-5",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-6",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-7",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-8",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-9",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-10",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-11",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-12",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-13",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-14",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-15",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-16",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-17",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-18",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-19",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-20",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-21",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-22",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-23",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ],
    [
        "aboriginal-australian-mythology",
        "aboriginal-australian-mythology-entry-24",
        "contains",
        "Supporting entry under Aboriginal Australian mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
