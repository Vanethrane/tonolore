/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pride-and-prejudice",
        "name": "Pride and Prejudice",
        "type": "topic",
        "short_description": "Bennet sisters, Regency manners, and Austen’s marriage-plot novel that never stops adapting.",
        "description": "Bennet sisters, Regency manners, and Austen’s marriage-plot novel that never stops adapting. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pride and Prejudice so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "pride-and-prejudice-figures",
        "name": "Pride and Prejudice figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pride and Prejudice.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pride and Prejudice."
    },
    {
        "slug": "pride-and-prejudice-world",
        "name": "Pride and Prejudice world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pride and Prejudice.",
        "description": "Geography, institutions, and periodization that give Pride and Prejudice its encyclopedia shape."
    },
    {
        "slug": "pride-and-prejudice-places",
        "name": "Pride and Prejudice places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pride and Prejudice.",
        "description": "Places, regions, and built sites that give Pride and Prejudice its map — where events and figures concentrate."
    },
    {
        "slug": "pride-and-prejudice-events",
        "name": "Pride and Prejudice events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pride and Prejudice.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pride and Prejudice timeline."
    },
    {
        "slug": "pride-and-prejudice-objects",
        "name": "Pride and Prejudice objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pride and Prejudice.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pride and Prejudice."
    },
    {
        "slug": "pride-and-prejudice-factions",
        "name": "Pride and Prejudice factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pride and Prejudice.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pride and Prejudice."
    },
    {
        "slug": "pride-and-prejudice-concepts",
        "name": "Pride and Prejudice concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pride and Prejudice.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pride and Prejudice readable as a lore graph."
    },
    {
        "slug": "pride-and-prejudice-eras",
        "name": "Pride and Prejudice eras",
        "type": "event",
        "short_description": "Periodization for Pride and Prejudice.",
        "description": "Named eras and phases that help readers track how Pride and Prejudice changes across time."
    },
    {
        "slug": "pride-and-prejudice-works",
        "name": "Pride and Prejudice works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pride and Prejudice.",
        "description": "Primary works and adaptations through which most audiences encounter Pride and Prejudice."
    },
    {
        "slug": "pride-and-prejudice-symbols",
        "name": "Pride and Prejudice symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pride and Prejudice.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pride and Prejudice."
    },
    {
        "slug": "pride-and-prejudice-controversies",
        "name": "Pride and Prejudice controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pride and Prejudice.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pride and Prejudice argumentative."
    },
    {
        "slug": "pride-and-prejudice-sources",
        "name": "Pride and Prejudice sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pride and Prejudice.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pride and Prejudice."
    },
    {
        "slug": "pride-and-prejudice-geography",
        "name": "Pride and Prejudice geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pride and Prejudice.",
        "description": "Regions, routes, and spatial systems that situate Pride and Prejudice beyond single named places."
    },
    {
        "slug": "pride-and-prejudice-legacy",
        "name": "Pride and Prejudice legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pride and Prejudice.",
        "description": "How Pride and Prejudice continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pride-and-prejudice-practices",
        "name": "Pride and Prejudice practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pride and Prejudice.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pride and Prejudice."
    },
    {
        "slug": "pride-and-prejudice-entry-1",
        "name": "Pride and Prejudice entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-2",
        "name": "Pride and Prejudice entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-3",
        "name": "Pride and Prejudice entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-4",
        "name": "Pride and Prejudice entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-5",
        "name": "Pride and Prejudice entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-6",
        "name": "Pride and Prejudice entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-7",
        "name": "Pride and Prejudice entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-8",
        "name": "Pride and Prejudice entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-9",
        "name": "Pride and Prejudice entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-10",
        "name": "Pride and Prejudice entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-11",
        "name": "Pride and Prejudice entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-12",
        "name": "Pride and Prejudice entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-13",
        "name": "Pride and Prejudice entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-14",
        "name": "Pride and Prejudice entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-15",
        "name": "Pride and Prejudice entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-16",
        "name": "Pride and Prejudice entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-17",
        "name": "Pride and Prejudice entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-18",
        "name": "Pride and Prejudice entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-19",
        "name": "Pride and Prejudice entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-20",
        "name": "Pride and Prejudice entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-21",
        "name": "Pride and Prejudice entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-22",
        "name": "Pride and Prejudice entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-23",
        "name": "Pride and Prejudice entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pride-and-prejudice-entry-24",
        "name": "Pride and Prejudice entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pride and Prejudice.",
        "description": "A supporting encyclopedia entry in the Pride and Prejudice subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pride-and-prejudice",
        "pride-and-prejudice-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-places",
        "contains",
        "Pride and Prejudice places is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-events",
        "contains",
        "Pride and Prejudice events is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-objects",
        "contains",
        "Pride and Prejudice objects & artifacts is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-factions",
        "contains",
        "Pride and Prejudice factions & groups is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-concepts",
        "contains",
        "Pride and Prejudice concepts is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-eras",
        "contains",
        "Pride and Prejudice eras is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-works",
        "contains",
        "Pride and Prejudice works & media is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-symbols",
        "contains",
        "Pride and Prejudice symbols is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-controversies",
        "contains",
        "Pride and Prejudice controversies is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-sources",
        "contains",
        "Pride and Prejudice sources is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-geography",
        "contains",
        "Pride and Prejudice geography is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-legacy",
        "contains",
        "Pride and Prejudice legacy is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-practices",
        "contains",
        "Pride and Prejudice practices is a primary trailhead under Pride and Prejudice.",
        0.88,
        0.82
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-1",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-2",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-3",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-4",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-5",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-6",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-7",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-8",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-9",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-10",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-11",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-12",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-13",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-14",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-15",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-16",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-17",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-18",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-19",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-20",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-21",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-22",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-23",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ],
    [
        "pride-and-prejudice",
        "pride-and-prejudice-entry-24",
        "contains",
        "Supporting entry under Pride and Prejudice.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
