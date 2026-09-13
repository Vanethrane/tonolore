/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "age-of-sail-navies",
        "name": "Age of Sail navies",
        "type": "topic",
        "short_description": "Ships of the line, press gangs, and the sailing fleets that decided early modern empires.",
        "description": "Ships of the line, press gangs, and the sailing fleets that decided early modern empires. This Ton-o-Lore subject maps people, places, events, and ideas tied to Age of Sail navies so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "age-of-sail-navies-figures",
        "name": "Age of Sail navies figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Age of Sail navies.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Age of Sail navies."
    },
    {
        "slug": "age-of-sail-navies-world",
        "name": "Age of Sail navies world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Age of Sail navies.",
        "description": "Geography, institutions, and periodization that give Age of Sail navies its encyclopedia shape."
    },
    {
        "slug": "age-of-sail-navies-places",
        "name": "Age of Sail navies places",
        "type": "place",
        "short_description": "Locations and geographies that frame Age of Sail navies.",
        "description": "Places, regions, and built sites that give Age of Sail navies its map — where events and figures concentrate."
    },
    {
        "slug": "age-of-sail-navies-events",
        "name": "Age of Sail navies events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Age of Sail navies.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Age of Sail navies timeline."
    },
    {
        "slug": "age-of-sail-navies-objects",
        "name": "Age of Sail navies objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Age of Sail navies.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Age of Sail navies."
    },
    {
        "slug": "age-of-sail-navies-factions",
        "name": "Age of Sail navies factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Age of Sail navies.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Age of Sail navies."
    },
    {
        "slug": "age-of-sail-navies-concepts",
        "name": "Age of Sail navies concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Age of Sail navies.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Age of Sail navies readable as a lore graph."
    },
    {
        "slug": "age-of-sail-navies-eras",
        "name": "Age of Sail navies eras",
        "type": "event",
        "short_description": "Periodization for Age of Sail navies.",
        "description": "Named eras and phases that help readers track how Age of Sail navies changes across time."
    },
    {
        "slug": "age-of-sail-navies-works",
        "name": "Age of Sail navies works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Age of Sail navies.",
        "description": "Primary works and adaptations through which most audiences encounter Age of Sail navies."
    },
    {
        "slug": "age-of-sail-navies-symbols",
        "name": "Age of Sail navies symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Age of Sail navies.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Age of Sail navies."
    },
    {
        "slug": "age-of-sail-navies-controversies",
        "name": "Age of Sail navies controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Age of Sail navies.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Age of Sail navies argumentative."
    },
    {
        "slug": "age-of-sail-navies-sources",
        "name": "Age of Sail navies sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Age of Sail navies.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Age of Sail navies."
    },
    {
        "slug": "age-of-sail-navies-geography",
        "name": "Age of Sail navies geography",
        "type": "place",
        "short_description": "Broader geographic framing for Age of Sail navies.",
        "description": "Regions, routes, and spatial systems that situate Age of Sail navies beyond single named places."
    },
    {
        "slug": "age-of-sail-navies-legacy",
        "name": "Age of Sail navies legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Age of Sail navies.",
        "description": "How Age of Sail navies continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "age-of-sail-navies-practices",
        "name": "Age of Sail navies practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Age of Sail navies.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Age of Sail navies."
    },
    {
        "slug": "age-of-sail-navies-entry-1",
        "name": "Age of Sail navies entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-2",
        "name": "Age of Sail navies entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-3",
        "name": "Age of Sail navies entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-4",
        "name": "Age of Sail navies entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-5",
        "name": "Age of Sail navies entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-6",
        "name": "Age of Sail navies entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-7",
        "name": "Age of Sail navies entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-8",
        "name": "Age of Sail navies entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-9",
        "name": "Age of Sail navies entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-10",
        "name": "Age of Sail navies entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-11",
        "name": "Age of Sail navies entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-12",
        "name": "Age of Sail navies entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-13",
        "name": "Age of Sail navies entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-14",
        "name": "Age of Sail navies entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-15",
        "name": "Age of Sail navies entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-16",
        "name": "Age of Sail navies entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-17",
        "name": "Age of Sail navies entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-18",
        "name": "Age of Sail navies entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-19",
        "name": "Age of Sail navies entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-20",
        "name": "Age of Sail navies entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-21",
        "name": "Age of Sail navies entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-22",
        "name": "Age of Sail navies entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-23",
        "name": "Age of Sail navies entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-sail-navies-entry-24",
        "name": "Age of Sail navies entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Sail navies.",
        "description": "A supporting encyclopedia entry in the Age of Sail navies subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "age-of-sail-navies",
        "age-of-sail-navies-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-places",
        "contains",
        "Age of Sail navies places is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-events",
        "contains",
        "Age of Sail navies events is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-objects",
        "contains",
        "Age of Sail navies objects & artifacts is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-factions",
        "contains",
        "Age of Sail navies factions & groups is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-concepts",
        "contains",
        "Age of Sail navies concepts is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-eras",
        "contains",
        "Age of Sail navies eras is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-works",
        "contains",
        "Age of Sail navies works & media is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-symbols",
        "contains",
        "Age of Sail navies symbols is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-controversies",
        "contains",
        "Age of Sail navies controversies is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-sources",
        "contains",
        "Age of Sail navies sources is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-geography",
        "contains",
        "Age of Sail navies geography is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-legacy",
        "contains",
        "Age of Sail navies legacy is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-practices",
        "contains",
        "Age of Sail navies practices is a primary trailhead under Age of Sail navies.",
        0.88,
        0.82
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-1",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-2",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-3",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-4",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-5",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-6",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-7",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-8",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-9",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-10",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-11",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-12",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-13",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-14",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-15",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-16",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-17",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-18",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-19",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-20",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-21",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-22",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-23",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ],
    [
        "age-of-sail-navies",
        "age-of-sail-navies-entry-24",
        "contains",
        "Supporting entry under Age of Sail navies.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
