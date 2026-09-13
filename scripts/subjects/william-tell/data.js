/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "william-tell",
        "name": "William Tell",
        "type": "topic",
        "short_description": "Apple shot, Austrian tyranny, and the Swiss independence folk hero.",
        "description": "Apple shot, Austrian tyranny, and the Swiss independence folk hero. This Ton-o-Lore subject maps people, places, events, and ideas tied to William Tell so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "william-tell-figures",
        "name": "William Tell figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to William Tell.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring William Tell."
    },
    {
        "slug": "william-tell-world",
        "name": "William Tell world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame William Tell.",
        "description": "Geography, institutions, and periodization that give William Tell its encyclopedia shape."
    },
    {
        "slug": "william-tell-places",
        "name": "William Tell places",
        "type": "place",
        "short_description": "Locations and geographies that frame William Tell.",
        "description": "Places, regions, and built sites that give William Tell its map — where events and figures concentrate."
    },
    {
        "slug": "william-tell-events",
        "name": "William Tell events",
        "type": "event",
        "short_description": "Turning points and dated episodes in William Tell.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the William Tell timeline."
    },
    {
        "slug": "william-tell-objects",
        "name": "William Tell objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to William Tell.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through William Tell."
    },
    {
        "slug": "william-tell-factions",
        "name": "William Tell factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside William Tell.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in William Tell."
    },
    {
        "slug": "william-tell-concepts",
        "name": "William Tell concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize William Tell.",
        "description": "Keywords, doctrines, systems, and abstract forces that make William Tell readable as a lore graph."
    },
    {
        "slug": "william-tell-eras",
        "name": "William Tell eras",
        "type": "event",
        "short_description": "Periodization for William Tell.",
        "description": "Named eras and phases that help readers track how William Tell changes across time."
    },
    {
        "slug": "william-tell-works",
        "name": "William Tell works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry William Tell.",
        "description": "Primary works and adaptations through which most audiences encounter William Tell."
    },
    {
        "slug": "william-tell-symbols",
        "name": "William Tell symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with William Tell.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside William Tell."
    },
    {
        "slug": "william-tell-controversies",
        "name": "William Tell controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in William Tell.",
        "description": "Debates, rival canons, scandals, and contested facts that keep William Tell argumentative."
    },
    {
        "slug": "william-tell-sources",
        "name": "William Tell sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into William Tell.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify William Tell."
    },
    {
        "slug": "william-tell-geography",
        "name": "William Tell geography",
        "type": "place",
        "short_description": "Broader geographic framing for William Tell.",
        "description": "Regions, routes, and spatial systems that situate William Tell beyond single named places."
    },
    {
        "slug": "william-tell-legacy",
        "name": "William Tell legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of William Tell.",
        "description": "How William Tell continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "william-tell-practices",
        "name": "William Tell practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in William Tell.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in William Tell."
    },
    {
        "slug": "william-tell-entry-1",
        "name": "William Tell entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-2",
        "name": "William Tell entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-3",
        "name": "William Tell entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-4",
        "name": "William Tell entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-5",
        "name": "William Tell entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-6",
        "name": "William Tell entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-7",
        "name": "William Tell entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-8",
        "name": "William Tell entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-9",
        "name": "William Tell entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-10",
        "name": "William Tell entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-11",
        "name": "William Tell entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-12",
        "name": "William Tell entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-13",
        "name": "William Tell entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-14",
        "name": "William Tell entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-15",
        "name": "William Tell entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-16",
        "name": "William Tell entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-17",
        "name": "William Tell entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-18",
        "name": "William Tell entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-19",
        "name": "William Tell entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-20",
        "name": "William Tell entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-21",
        "name": "William Tell entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-22",
        "name": "William Tell entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-23",
        "name": "William Tell entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "william-tell-entry-24",
        "name": "William Tell entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside William Tell.",
        "description": "A supporting encyclopedia entry in the William Tell subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "william-tell",
        "william-tell-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "william-tell",
        "william-tell-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "william-tell",
        "william-tell-places",
        "contains",
        "William Tell places is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-events",
        "contains",
        "William Tell events is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-objects",
        "contains",
        "William Tell objects & artifacts is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-factions",
        "contains",
        "William Tell factions & groups is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-concepts",
        "contains",
        "William Tell concepts is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-eras",
        "contains",
        "William Tell eras is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-works",
        "contains",
        "William Tell works & media is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-symbols",
        "contains",
        "William Tell symbols is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-controversies",
        "contains",
        "William Tell controversies is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-sources",
        "contains",
        "William Tell sources is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-geography",
        "contains",
        "William Tell geography is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-legacy",
        "contains",
        "William Tell legacy is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-practices",
        "contains",
        "William Tell practices is a primary trailhead under William Tell.",
        0.88,
        0.82
    ],
    [
        "william-tell",
        "william-tell-entry-1",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-2",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-3",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-4",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-5",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-6",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-7",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-8",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-9",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-10",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-11",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-12",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-13",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-14",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-15",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-16",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-17",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-18",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-19",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-20",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-21",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-22",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-23",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ],
    [
        "william-tell",
        "william-tell-entry-24",
        "contains",
        "Supporting entry under William Tell.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
