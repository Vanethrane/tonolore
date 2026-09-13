/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "saudi-royal-family",
        "name": "Saudi royal family",
        "type": "topic",
        "short_description": "House of Saud, oil statecraft, and the modern kingdom’s dynastic politics.",
        "description": "House of Saud, oil statecraft, and the modern kingdom’s dynastic politics. This Ton-o-Lore subject maps people, places, events, and ideas tied to Saudi royal family so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "saudi-royal-family-figures",
        "name": "Saudi royal family figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Saudi royal family.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Saudi royal family."
    },
    {
        "slug": "saudi-royal-family-world",
        "name": "Saudi royal family world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Saudi royal family.",
        "description": "Geography, institutions, and periodization that give Saudi royal family its encyclopedia shape."
    },
    {
        "slug": "saudi-royal-family-places",
        "name": "Saudi royal family places",
        "type": "place",
        "short_description": "Locations and geographies that frame Saudi royal family.",
        "description": "Places, regions, and built sites that give Saudi royal family its map — where events and figures concentrate."
    },
    {
        "slug": "saudi-royal-family-events",
        "name": "Saudi royal family events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Saudi royal family.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Saudi royal family timeline."
    },
    {
        "slug": "saudi-royal-family-objects",
        "name": "Saudi royal family objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Saudi royal family.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Saudi royal family."
    },
    {
        "slug": "saudi-royal-family-factions",
        "name": "Saudi royal family factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Saudi royal family.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Saudi royal family."
    },
    {
        "slug": "saudi-royal-family-concepts",
        "name": "Saudi royal family concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Saudi royal family.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Saudi royal family readable as a lore graph."
    },
    {
        "slug": "saudi-royal-family-eras",
        "name": "Saudi royal family eras",
        "type": "event",
        "short_description": "Periodization for Saudi royal family.",
        "description": "Named eras and phases that help readers track how Saudi royal family changes across time."
    },
    {
        "slug": "saudi-royal-family-works",
        "name": "Saudi royal family works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Saudi royal family.",
        "description": "Primary works and adaptations through which most audiences encounter Saudi royal family."
    },
    {
        "slug": "saudi-royal-family-symbols",
        "name": "Saudi royal family symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Saudi royal family.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Saudi royal family."
    },
    {
        "slug": "saudi-royal-family-controversies",
        "name": "Saudi royal family controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Saudi royal family.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Saudi royal family argumentative."
    },
    {
        "slug": "saudi-royal-family-sources",
        "name": "Saudi royal family sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Saudi royal family.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Saudi royal family."
    },
    {
        "slug": "saudi-royal-family-geography",
        "name": "Saudi royal family geography",
        "type": "place",
        "short_description": "Broader geographic framing for Saudi royal family.",
        "description": "Regions, routes, and spatial systems that situate Saudi royal family beyond single named places."
    },
    {
        "slug": "saudi-royal-family-legacy",
        "name": "Saudi royal family legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Saudi royal family.",
        "description": "How Saudi royal family continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "saudi-royal-family-practices",
        "name": "Saudi royal family practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Saudi royal family.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Saudi royal family."
    },
    {
        "slug": "saudi-royal-family-entry-1",
        "name": "Saudi royal family entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-2",
        "name": "Saudi royal family entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-3",
        "name": "Saudi royal family entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-4",
        "name": "Saudi royal family entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-5",
        "name": "Saudi royal family entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-6",
        "name": "Saudi royal family entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-7",
        "name": "Saudi royal family entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-8",
        "name": "Saudi royal family entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-9",
        "name": "Saudi royal family entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-10",
        "name": "Saudi royal family entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-11",
        "name": "Saudi royal family entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-12",
        "name": "Saudi royal family entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-13",
        "name": "Saudi royal family entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-14",
        "name": "Saudi royal family entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-15",
        "name": "Saudi royal family entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-16",
        "name": "Saudi royal family entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-17",
        "name": "Saudi royal family entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-18",
        "name": "Saudi royal family entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-19",
        "name": "Saudi royal family entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-20",
        "name": "Saudi royal family entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-21",
        "name": "Saudi royal family entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-22",
        "name": "Saudi royal family entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-23",
        "name": "Saudi royal family entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saudi-royal-family-entry-24",
        "name": "Saudi royal family entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saudi royal family.",
        "description": "A supporting encyclopedia entry in the Saudi royal family subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "saudi-royal-family",
        "saudi-royal-family-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-places",
        "contains",
        "Saudi royal family places is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-events",
        "contains",
        "Saudi royal family events is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-objects",
        "contains",
        "Saudi royal family objects & artifacts is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-factions",
        "contains",
        "Saudi royal family factions & groups is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-concepts",
        "contains",
        "Saudi royal family concepts is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-eras",
        "contains",
        "Saudi royal family eras is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-works",
        "contains",
        "Saudi royal family works & media is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-symbols",
        "contains",
        "Saudi royal family symbols is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-controversies",
        "contains",
        "Saudi royal family controversies is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-sources",
        "contains",
        "Saudi royal family sources is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-geography",
        "contains",
        "Saudi royal family geography is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-legacy",
        "contains",
        "Saudi royal family legacy is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-practices",
        "contains",
        "Saudi royal family practices is a primary trailhead under Saudi royal family.",
        0.88,
        0.82
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-1",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-2",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-3",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-4",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-5",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-6",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-7",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-8",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-9",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-10",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-11",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-12",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-13",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-14",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-15",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-16",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-17",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-18",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-19",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-20",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-21",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-22",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-23",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ],
    [
        "saudi-royal-family",
        "saudi-royal-family-entry-24",
        "contains",
        "Supporting entry under Saudi royal family.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
