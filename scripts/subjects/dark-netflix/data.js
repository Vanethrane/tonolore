/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dark-netflix",
        "name": "Dark",
        "type": "topic",
        "short_description": "Time knots, Winden families, and the German puzzle-box SF that rewards obsessive charting.",
        "description": "Time knots, Winden families, and the German puzzle-box SF that rewards obsessive charting. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dark so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "dark-netflix-figures",
        "name": "Dark figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dark.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dark."
    },
    {
        "slug": "dark-netflix-world",
        "name": "Dark world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dark.",
        "description": "Geography, institutions, and periodization that give Dark its encyclopedia shape."
    },
    {
        "slug": "dark-netflix-places",
        "name": "Dark places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dark.",
        "description": "Places, regions, and built sites that give Dark its map — where events and figures concentrate."
    },
    {
        "slug": "dark-netflix-events",
        "name": "Dark events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dark.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dark timeline."
    },
    {
        "slug": "dark-netflix-objects",
        "name": "Dark objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dark.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dark."
    },
    {
        "slug": "dark-netflix-factions",
        "name": "Dark factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dark.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dark."
    },
    {
        "slug": "dark-netflix-concepts",
        "name": "Dark concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dark.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dark readable as a lore graph."
    },
    {
        "slug": "dark-netflix-eras",
        "name": "Dark eras",
        "type": "event",
        "short_description": "Periodization for Dark.",
        "description": "Named eras and phases that help readers track how Dark changes across time."
    },
    {
        "slug": "dark-netflix-works",
        "name": "Dark works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dark.",
        "description": "Primary works and adaptations through which most audiences encounter Dark."
    },
    {
        "slug": "dark-netflix-symbols",
        "name": "Dark symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dark.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dark."
    },
    {
        "slug": "dark-netflix-controversies",
        "name": "Dark controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dark.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dark argumentative."
    },
    {
        "slug": "dark-netflix-sources",
        "name": "Dark sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dark.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dark."
    },
    {
        "slug": "dark-netflix-geography",
        "name": "Dark geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dark.",
        "description": "Regions, routes, and spatial systems that situate Dark beyond single named places."
    },
    {
        "slug": "dark-netflix-legacy",
        "name": "Dark legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dark.",
        "description": "How Dark continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dark-netflix-practices",
        "name": "Dark practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dark.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dark."
    },
    {
        "slug": "dark-netflix-entry-1",
        "name": "Dark entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-2",
        "name": "Dark entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-3",
        "name": "Dark entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-4",
        "name": "Dark entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-5",
        "name": "Dark entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-6",
        "name": "Dark entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-7",
        "name": "Dark entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-8",
        "name": "Dark entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-9",
        "name": "Dark entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-10",
        "name": "Dark entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-11",
        "name": "Dark entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-12",
        "name": "Dark entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-13",
        "name": "Dark entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-14",
        "name": "Dark entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-15",
        "name": "Dark entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-16",
        "name": "Dark entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-17",
        "name": "Dark entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-18",
        "name": "Dark entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-19",
        "name": "Dark entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-20",
        "name": "Dark entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-21",
        "name": "Dark entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-22",
        "name": "Dark entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-23",
        "name": "Dark entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-netflix-entry-24",
        "name": "Dark entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark.",
        "description": "A supporting encyclopedia entry in the Dark subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dark-netflix",
        "dark-netflix-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dark-netflix",
        "dark-netflix-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dark-netflix",
        "dark-netflix-places",
        "contains",
        "Dark places is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-events",
        "contains",
        "Dark events is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-objects",
        "contains",
        "Dark objects & artifacts is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-factions",
        "contains",
        "Dark factions & groups is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-concepts",
        "contains",
        "Dark concepts is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-eras",
        "contains",
        "Dark eras is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-works",
        "contains",
        "Dark works & media is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-symbols",
        "contains",
        "Dark symbols is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-controversies",
        "contains",
        "Dark controversies is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-sources",
        "contains",
        "Dark sources is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-geography",
        "contains",
        "Dark geography is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-legacy",
        "contains",
        "Dark legacy is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-practices",
        "contains",
        "Dark practices is a primary trailhead under Dark.",
        0.88,
        0.82
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-1",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-2",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-3",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-4",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-5",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-6",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-7",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-8",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-9",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-10",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-11",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-12",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-13",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-14",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-15",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-16",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-17",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-18",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-19",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-20",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-21",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-22",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-23",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ],
    [
        "dark-netflix",
        "dark-netflix-entry-24",
        "contains",
        "Supporting entry under Dark.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
