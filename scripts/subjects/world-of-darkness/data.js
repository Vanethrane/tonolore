/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "world-of-darkness",
        "name": "World of Darkness",
        "type": "topic",
        "short_description": "Vampire to Werewolf to Mage — the shared gothic-punk RPG setting of personal horror.",
        "description": "Vampire to Werewolf to Mage — the shared gothic-punk RPG setting of personal horror. This Ton-o-Lore subject maps people, places, events, and ideas tied to World of Darkness so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "world-of-darkness-figures",
        "name": "World of Darkness figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to World of Darkness.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring World of Darkness."
    },
    {
        "slug": "world-of-darkness-world",
        "name": "World of Darkness world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame World of Darkness.",
        "description": "Geography, institutions, and periodization that give World of Darkness its encyclopedia shape."
    },
    {
        "slug": "world-of-darkness-places",
        "name": "World of Darkness places",
        "type": "place",
        "short_description": "Locations and geographies that frame World of Darkness.",
        "description": "Places, regions, and built sites that give World of Darkness its map — where events and figures concentrate."
    },
    {
        "slug": "world-of-darkness-events",
        "name": "World of Darkness events",
        "type": "event",
        "short_description": "Turning points and dated episodes in World of Darkness.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the World of Darkness timeline."
    },
    {
        "slug": "world-of-darkness-objects",
        "name": "World of Darkness objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to World of Darkness.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through World of Darkness."
    },
    {
        "slug": "world-of-darkness-factions",
        "name": "World of Darkness factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside World of Darkness.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in World of Darkness."
    },
    {
        "slug": "world-of-darkness-concepts",
        "name": "World of Darkness concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize World of Darkness.",
        "description": "Keywords, doctrines, systems, and abstract forces that make World of Darkness readable as a lore graph."
    },
    {
        "slug": "world-of-darkness-eras",
        "name": "World of Darkness eras",
        "type": "event",
        "short_description": "Periodization for World of Darkness.",
        "description": "Named eras and phases that help readers track how World of Darkness changes across time."
    },
    {
        "slug": "world-of-darkness-works",
        "name": "World of Darkness works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry World of Darkness.",
        "description": "Primary works and adaptations through which most audiences encounter World of Darkness."
    },
    {
        "slug": "world-of-darkness-symbols",
        "name": "World of Darkness symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with World of Darkness.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside World of Darkness."
    },
    {
        "slug": "world-of-darkness-controversies",
        "name": "World of Darkness controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in World of Darkness.",
        "description": "Debates, rival canons, scandals, and contested facts that keep World of Darkness argumentative."
    },
    {
        "slug": "world-of-darkness-sources",
        "name": "World of Darkness sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into World of Darkness.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify World of Darkness."
    },
    {
        "slug": "world-of-darkness-geography",
        "name": "World of Darkness geography",
        "type": "place",
        "short_description": "Broader geographic framing for World of Darkness.",
        "description": "Regions, routes, and spatial systems that situate World of Darkness beyond single named places."
    },
    {
        "slug": "world-of-darkness-legacy",
        "name": "World of Darkness legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of World of Darkness.",
        "description": "How World of Darkness continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "world-of-darkness-practices",
        "name": "World of Darkness practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in World of Darkness.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in World of Darkness."
    },
    {
        "slug": "world-of-darkness-entry-1",
        "name": "World of Darkness entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-2",
        "name": "World of Darkness entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-3",
        "name": "World of Darkness entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-4",
        "name": "World of Darkness entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-5",
        "name": "World of Darkness entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-6",
        "name": "World of Darkness entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-7",
        "name": "World of Darkness entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-8",
        "name": "World of Darkness entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-9",
        "name": "World of Darkness entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-10",
        "name": "World of Darkness entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-11",
        "name": "World of Darkness entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-12",
        "name": "World of Darkness entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-13",
        "name": "World of Darkness entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-14",
        "name": "World of Darkness entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-15",
        "name": "World of Darkness entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-16",
        "name": "World of Darkness entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-17",
        "name": "World of Darkness entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-18",
        "name": "World of Darkness entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-19",
        "name": "World of Darkness entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-20",
        "name": "World of Darkness entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-21",
        "name": "World of Darkness entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-22",
        "name": "World of Darkness entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-23",
        "name": "World of Darkness entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-darkness-entry-24",
        "name": "World of Darkness entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside World of Darkness.",
        "description": "A supporting encyclopedia entry in the World of Darkness subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "world-of-darkness",
        "world-of-darkness-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "world-of-darkness",
        "world-of-darkness-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "world-of-darkness",
        "world-of-darkness-places",
        "contains",
        "World of Darkness places is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-events",
        "contains",
        "World of Darkness events is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-objects",
        "contains",
        "World of Darkness objects & artifacts is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-factions",
        "contains",
        "World of Darkness factions & groups is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-concepts",
        "contains",
        "World of Darkness concepts is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-eras",
        "contains",
        "World of Darkness eras is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-works",
        "contains",
        "World of Darkness works & media is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-symbols",
        "contains",
        "World of Darkness symbols is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-controversies",
        "contains",
        "World of Darkness controversies is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-sources",
        "contains",
        "World of Darkness sources is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-geography",
        "contains",
        "World of Darkness geography is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-legacy",
        "contains",
        "World of Darkness legacy is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-practices",
        "contains",
        "World of Darkness practices is a primary trailhead under World of Darkness.",
        0.88,
        0.82
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-1",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-2",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-3",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-4",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-5",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-6",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-7",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-8",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-9",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-10",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-11",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-12",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-13",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-14",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-15",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-16",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-17",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-18",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-19",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-20",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-21",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-22",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-23",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ],
    [
        "world-of-darkness",
        "world-of-darkness-entry-24",
        "contains",
        "Supporting entry under World of Darkness.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
