/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "super-smash-bros",
        "name": "Super Smash Bros.",
        "type": "topic",
        "short_description": "Crossover fighters, stage hazards, and Nintendo’s party-to-competitive platform fighter mythology.",
        "description": "Crossover fighters, stage hazards, and Nintendo’s party-to-competitive platform fighter mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Super Smash Bros. so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "super-smash-bros-figures",
        "name": "Super Smash Bros. figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Super Smash Bros..",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Super Smash Bros.."
    },
    {
        "slug": "super-smash-bros-world",
        "name": "Super Smash Bros. world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Super Smash Bros..",
        "description": "Geography, institutions, and periodization that give Super Smash Bros. its encyclopedia shape."
    },
    {
        "slug": "super-smash-bros-places",
        "name": "Super Smash Bros. places",
        "type": "place",
        "short_description": "Locations and geographies that frame Super Smash Bros..",
        "description": "Places, regions, and built sites that give Super Smash Bros. its map — where events and figures concentrate."
    },
    {
        "slug": "super-smash-bros-events",
        "name": "Super Smash Bros. events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Super Smash Bros..",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Super Smash Bros. timeline."
    },
    {
        "slug": "super-smash-bros-objects",
        "name": "Super Smash Bros. objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Super Smash Bros..",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Super Smash Bros.."
    },
    {
        "slug": "super-smash-bros-factions",
        "name": "Super Smash Bros. factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Super Smash Bros..",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Super Smash Bros.."
    },
    {
        "slug": "super-smash-bros-concepts",
        "name": "Super Smash Bros. concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Super Smash Bros..",
        "description": "Keywords, doctrines, systems, and abstract forces that make Super Smash Bros. readable as a lore graph."
    },
    {
        "slug": "super-smash-bros-eras",
        "name": "Super Smash Bros. eras",
        "type": "event",
        "short_description": "Periodization for Super Smash Bros..",
        "description": "Named eras and phases that help readers track how Super Smash Bros. changes across time."
    },
    {
        "slug": "super-smash-bros-works",
        "name": "Super Smash Bros. works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Super Smash Bros..",
        "description": "Primary works and adaptations through which most audiences encounter Super Smash Bros.."
    },
    {
        "slug": "super-smash-bros-symbols",
        "name": "Super Smash Bros. symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Super Smash Bros..",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Super Smash Bros.."
    },
    {
        "slug": "super-smash-bros-controversies",
        "name": "Super Smash Bros. controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Super Smash Bros..",
        "description": "Debates, rival canons, scandals, and contested facts that keep Super Smash Bros. argumentative."
    },
    {
        "slug": "super-smash-bros-sources",
        "name": "Super Smash Bros. sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Super Smash Bros..",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Super Smash Bros.."
    },
    {
        "slug": "super-smash-bros-geography",
        "name": "Super Smash Bros. geography",
        "type": "place",
        "short_description": "Broader geographic framing for Super Smash Bros..",
        "description": "Regions, routes, and spatial systems that situate Super Smash Bros. beyond single named places."
    },
    {
        "slug": "super-smash-bros-legacy",
        "name": "Super Smash Bros. legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Super Smash Bros..",
        "description": "How Super Smash Bros. continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "super-smash-bros-practices",
        "name": "Super Smash Bros. practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Super Smash Bros..",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Super Smash Bros.."
    },
    {
        "slug": "super-smash-bros-entry-1",
        "name": "Super Smash Bros. entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-2",
        "name": "Super Smash Bros. entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-3",
        "name": "Super Smash Bros. entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-4",
        "name": "Super Smash Bros. entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-5",
        "name": "Super Smash Bros. entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-6",
        "name": "Super Smash Bros. entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-7",
        "name": "Super Smash Bros. entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-8",
        "name": "Super Smash Bros. entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-9",
        "name": "Super Smash Bros. entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-10",
        "name": "Super Smash Bros. entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-11",
        "name": "Super Smash Bros. entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-12",
        "name": "Super Smash Bros. entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-13",
        "name": "Super Smash Bros. entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-14",
        "name": "Super Smash Bros. entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-15",
        "name": "Super Smash Bros. entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-16",
        "name": "Super Smash Bros. entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-17",
        "name": "Super Smash Bros. entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-18",
        "name": "Super Smash Bros. entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-19",
        "name": "Super Smash Bros. entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-20",
        "name": "Super Smash Bros. entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-21",
        "name": "Super Smash Bros. entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-22",
        "name": "Super Smash Bros. entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-23",
        "name": "Super Smash Bros. entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-smash-bros-entry-24",
        "name": "Super Smash Bros. entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Smash Bros..",
        "description": "A supporting encyclopedia entry in the Super Smash Bros. subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "super-smash-bros",
        "super-smash-bros-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "super-smash-bros",
        "super-smash-bros-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "super-smash-bros",
        "super-smash-bros-places",
        "contains",
        "Super Smash Bros. places is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-events",
        "contains",
        "Super Smash Bros. events is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-objects",
        "contains",
        "Super Smash Bros. objects & artifacts is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-factions",
        "contains",
        "Super Smash Bros. factions & groups is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-concepts",
        "contains",
        "Super Smash Bros. concepts is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-eras",
        "contains",
        "Super Smash Bros. eras is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-works",
        "contains",
        "Super Smash Bros. works & media is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-symbols",
        "contains",
        "Super Smash Bros. symbols is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-controversies",
        "contains",
        "Super Smash Bros. controversies is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-sources",
        "contains",
        "Super Smash Bros. sources is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-geography",
        "contains",
        "Super Smash Bros. geography is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-legacy",
        "contains",
        "Super Smash Bros. legacy is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-practices",
        "contains",
        "Super Smash Bros. practices is a primary trailhead under Super Smash Bros..",
        0.88,
        0.82
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-1",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-2",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-3",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-4",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-5",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-6",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-7",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-8",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-9",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-10",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-11",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-12",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-13",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-14",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-15",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-16",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-17",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-18",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-19",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-20",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-21",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-22",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-23",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ],
    [
        "super-smash-bros",
        "super-smash-bros-entry-24",
        "contains",
        "Supporting entry under Super Smash Bros..",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
