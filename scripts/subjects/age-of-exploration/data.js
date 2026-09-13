/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "age-of-exploration",
        "name": "Age of Exploration",
        "type": "topic",
        "short_description": "Iberian voyages, new maps, contact zones, and the early modern scramble for oceans and empires.",
        "description": "Iberian voyages, new maps, contact zones, and the early modern scramble for oceans and empires. This Ton-o-Lore subject maps people, places, events, and ideas tied to Age of Exploration so readers can follow long-tail connections across history."
    },
    {
        "slug": "age-of-exploration-figures",
        "name": "Age of Exploration figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Age of Exploration.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Age of Exploration."
    },
    {
        "slug": "age-of-exploration-world",
        "name": "Age of Exploration world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Age of Exploration.",
        "description": "Geography, institutions, and periodization that give Age of Exploration its encyclopedia shape."
    },
    {
        "slug": "age-of-exploration-places",
        "name": "Age of Exploration places",
        "type": "place",
        "short_description": "Locations and geographies that frame Age of Exploration.",
        "description": "Places, regions, and built sites that give Age of Exploration its map — where events and figures concentrate."
    },
    {
        "slug": "age-of-exploration-events",
        "name": "Age of Exploration events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Age of Exploration.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Age of Exploration timeline."
    },
    {
        "slug": "age-of-exploration-objects",
        "name": "Age of Exploration objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Age of Exploration.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Age of Exploration."
    },
    {
        "slug": "age-of-exploration-factions",
        "name": "Age of Exploration factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Age of Exploration.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Age of Exploration."
    },
    {
        "slug": "age-of-exploration-concepts",
        "name": "Age of Exploration concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Age of Exploration.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Age of Exploration readable as a lore graph."
    },
    {
        "slug": "age-of-exploration-eras",
        "name": "Age of Exploration eras",
        "type": "event",
        "short_description": "Periodization for Age of Exploration.",
        "description": "Named eras and phases that help readers track how Age of Exploration changes across time."
    },
    {
        "slug": "age-of-exploration-works",
        "name": "Age of Exploration works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Age of Exploration.",
        "description": "Primary works and adaptations through which most audiences encounter Age of Exploration."
    },
    {
        "slug": "age-of-exploration-symbols",
        "name": "Age of Exploration symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Age of Exploration.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Age of Exploration."
    },
    {
        "slug": "age-of-exploration-controversies",
        "name": "Age of Exploration controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Age of Exploration.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Age of Exploration argumentative."
    },
    {
        "slug": "age-of-exploration-sources",
        "name": "Age of Exploration sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Age of Exploration.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Age of Exploration."
    },
    {
        "slug": "age-of-exploration-geography",
        "name": "Age of Exploration geography",
        "type": "place",
        "short_description": "Broader geographic framing for Age of Exploration.",
        "description": "Regions, routes, and spatial systems that situate Age of Exploration beyond single named places."
    },
    {
        "slug": "age-of-exploration-legacy",
        "name": "Age of Exploration legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Age of Exploration.",
        "description": "How Age of Exploration continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "age-of-exploration-practices",
        "name": "Age of Exploration practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Age of Exploration.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Age of Exploration."
    },
    {
        "slug": "age-of-exploration-entry-1",
        "name": "Age of Exploration entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-2",
        "name": "Age of Exploration entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-3",
        "name": "Age of Exploration entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-4",
        "name": "Age of Exploration entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-5",
        "name": "Age of Exploration entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-6",
        "name": "Age of Exploration entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-7",
        "name": "Age of Exploration entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-8",
        "name": "Age of Exploration entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-9",
        "name": "Age of Exploration entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-10",
        "name": "Age of Exploration entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-11",
        "name": "Age of Exploration entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-12",
        "name": "Age of Exploration entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-13",
        "name": "Age of Exploration entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-14",
        "name": "Age of Exploration entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-15",
        "name": "Age of Exploration entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-16",
        "name": "Age of Exploration entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-17",
        "name": "Age of Exploration entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-18",
        "name": "Age of Exploration entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-19",
        "name": "Age of Exploration entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-20",
        "name": "Age of Exploration entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-21",
        "name": "Age of Exploration entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-22",
        "name": "Age of Exploration entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-23",
        "name": "Age of Exploration entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "age-of-exploration-entry-24",
        "name": "Age of Exploration entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Age of Exploration.",
        "description": "A supporting encyclopedia entry in the Age of Exploration subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "age-of-exploration",
        "age-of-exploration-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "age-of-exploration",
        "age-of-exploration-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "age-of-exploration",
        "age-of-exploration-places",
        "contains",
        "Age of Exploration places is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-events",
        "contains",
        "Age of Exploration events is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-objects",
        "contains",
        "Age of Exploration objects & artifacts is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-factions",
        "contains",
        "Age of Exploration factions & groups is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-concepts",
        "contains",
        "Age of Exploration concepts is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-eras",
        "contains",
        "Age of Exploration eras is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-works",
        "contains",
        "Age of Exploration works & media is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-symbols",
        "contains",
        "Age of Exploration symbols is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-controversies",
        "contains",
        "Age of Exploration controversies is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-sources",
        "contains",
        "Age of Exploration sources is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-geography",
        "contains",
        "Age of Exploration geography is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-legacy",
        "contains",
        "Age of Exploration legacy is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-practices",
        "contains",
        "Age of Exploration practices is a primary trailhead under Age of Exploration.",
        0.88,
        0.82
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-1",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-2",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-3",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-4",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-5",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-6",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-7",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-8",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-9",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-10",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-11",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-12",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-13",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-14",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-15",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-16",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-17",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-18",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-19",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-20",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-21",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-22",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-23",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ],
    [
        "age-of-exploration",
        "age-of-exploration-entry-24",
        "contains",
        "Supporting entry under Age of Exploration.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
