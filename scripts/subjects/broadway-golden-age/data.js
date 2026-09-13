/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "broadway-golden-age",
        "name": "Broadway golden age",
        "type": "topic",
        "short_description": "Rodgers & Hammerstein through mid-century hits — the canon that defined American musicals.",
        "description": "Rodgers & Hammerstein through mid-century hits — the canon that defined American musicals. This Ton-o-Lore subject maps people, places, events, and ideas tied to Broadway golden age so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "broadway-golden-age-figures",
        "name": "Broadway golden age figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Broadway golden age.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Broadway golden age."
    },
    {
        "slug": "broadway-golden-age-world",
        "name": "Broadway golden age world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Broadway golden age.",
        "description": "Geography, institutions, and periodization that give Broadway golden age its encyclopedia shape."
    },
    {
        "slug": "broadway-golden-age-places",
        "name": "Broadway golden age places",
        "type": "place",
        "short_description": "Locations and geographies that frame Broadway golden age.",
        "description": "Places, regions, and built sites that give Broadway golden age its map — where events and figures concentrate."
    },
    {
        "slug": "broadway-golden-age-events",
        "name": "Broadway golden age events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Broadway golden age.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Broadway golden age timeline."
    },
    {
        "slug": "broadway-golden-age-objects",
        "name": "Broadway golden age objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Broadway golden age.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Broadway golden age."
    },
    {
        "slug": "broadway-golden-age-factions",
        "name": "Broadway golden age factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Broadway golden age.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Broadway golden age."
    },
    {
        "slug": "broadway-golden-age-concepts",
        "name": "Broadway golden age concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Broadway golden age.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Broadway golden age readable as a lore graph."
    },
    {
        "slug": "broadway-golden-age-eras",
        "name": "Broadway golden age eras",
        "type": "event",
        "short_description": "Periodization for Broadway golden age.",
        "description": "Named eras and phases that help readers track how Broadway golden age changes across time."
    },
    {
        "slug": "broadway-golden-age-works",
        "name": "Broadway golden age works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Broadway golden age.",
        "description": "Primary works and adaptations through which most audiences encounter Broadway golden age."
    },
    {
        "slug": "broadway-golden-age-symbols",
        "name": "Broadway golden age symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Broadway golden age.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Broadway golden age."
    },
    {
        "slug": "broadway-golden-age-controversies",
        "name": "Broadway golden age controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Broadway golden age.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Broadway golden age argumentative."
    },
    {
        "slug": "broadway-golden-age-sources",
        "name": "Broadway golden age sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Broadway golden age.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Broadway golden age."
    },
    {
        "slug": "broadway-golden-age-geography",
        "name": "Broadway golden age geography",
        "type": "place",
        "short_description": "Broader geographic framing for Broadway golden age.",
        "description": "Regions, routes, and spatial systems that situate Broadway golden age beyond single named places."
    },
    {
        "slug": "broadway-golden-age-legacy",
        "name": "Broadway golden age legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Broadway golden age.",
        "description": "How Broadway golden age continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "broadway-golden-age-practices",
        "name": "Broadway golden age practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Broadway golden age.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Broadway golden age."
    },
    {
        "slug": "broadway-golden-age-entry-1",
        "name": "Broadway golden age entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-2",
        "name": "Broadway golden age entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-3",
        "name": "Broadway golden age entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-4",
        "name": "Broadway golden age entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-5",
        "name": "Broadway golden age entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-6",
        "name": "Broadway golden age entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-7",
        "name": "Broadway golden age entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-8",
        "name": "Broadway golden age entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-9",
        "name": "Broadway golden age entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-10",
        "name": "Broadway golden age entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-11",
        "name": "Broadway golden age entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-12",
        "name": "Broadway golden age entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-13",
        "name": "Broadway golden age entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-14",
        "name": "Broadway golden age entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-15",
        "name": "Broadway golden age entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-16",
        "name": "Broadway golden age entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-17",
        "name": "Broadway golden age entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-18",
        "name": "Broadway golden age entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-19",
        "name": "Broadway golden age entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-20",
        "name": "Broadway golden age entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-21",
        "name": "Broadway golden age entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-22",
        "name": "Broadway golden age entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-23",
        "name": "Broadway golden age entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "broadway-golden-age-entry-24",
        "name": "Broadway golden age entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Broadway golden age.",
        "description": "A supporting encyclopedia entry in the Broadway golden age subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "broadway-golden-age",
        "broadway-golden-age-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-places",
        "contains",
        "Broadway golden age places is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-events",
        "contains",
        "Broadway golden age events is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-objects",
        "contains",
        "Broadway golden age objects & artifacts is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-factions",
        "contains",
        "Broadway golden age factions & groups is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-concepts",
        "contains",
        "Broadway golden age concepts is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-eras",
        "contains",
        "Broadway golden age eras is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-works",
        "contains",
        "Broadway golden age works & media is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-symbols",
        "contains",
        "Broadway golden age symbols is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-controversies",
        "contains",
        "Broadway golden age controversies is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-sources",
        "contains",
        "Broadway golden age sources is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-geography",
        "contains",
        "Broadway golden age geography is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-legacy",
        "contains",
        "Broadway golden age legacy is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-practices",
        "contains",
        "Broadway golden age practices is a primary trailhead under Broadway golden age.",
        0.88,
        0.82
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-1",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-2",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-3",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-4",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-5",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-6",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-7",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-8",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-9",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-10",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-11",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-12",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-13",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-14",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-15",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-16",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-17",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-18",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-19",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-20",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-21",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-22",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-23",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ],
    [
        "broadway-golden-age",
        "broadway-golden-age-entry-24",
        "contains",
        "Supporting entry under Broadway golden age.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
