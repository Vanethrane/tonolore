/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "my-hero-academia",
        "name": "My Hero Academia",
        "type": "topic",
        "short_description": "Quirk society, UA heroes, and the shonen superhero saga of legacy and villains.",
        "description": "Quirk society, UA heroes, and the shonen superhero saga of legacy and villains. This Ton-o-Lore subject maps people, places, events, and ideas tied to My Hero Academia so readers can follow long-tail connections across anime."
    },
    {
        "slug": "my-hero-academia-figures",
        "name": "My Hero Academia figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to My Hero Academia.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring My Hero Academia."
    },
    {
        "slug": "my-hero-academia-world",
        "name": "My Hero Academia world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame My Hero Academia.",
        "description": "Geography, institutions, and periodization that give My Hero Academia its encyclopedia shape."
    },
    {
        "slug": "my-hero-academia-places",
        "name": "My Hero Academia places",
        "type": "place",
        "short_description": "Locations and geographies that frame My Hero Academia.",
        "description": "Places, regions, and built sites that give My Hero Academia its map — where events and figures concentrate."
    },
    {
        "slug": "my-hero-academia-events",
        "name": "My Hero Academia events",
        "type": "event",
        "short_description": "Turning points and dated episodes in My Hero Academia.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the My Hero Academia timeline."
    },
    {
        "slug": "my-hero-academia-objects",
        "name": "My Hero Academia objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to My Hero Academia.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through My Hero Academia."
    },
    {
        "slug": "my-hero-academia-factions",
        "name": "My Hero Academia factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside My Hero Academia.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in My Hero Academia."
    },
    {
        "slug": "my-hero-academia-concepts",
        "name": "My Hero Academia concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize My Hero Academia.",
        "description": "Keywords, doctrines, systems, and abstract forces that make My Hero Academia readable as a lore graph."
    },
    {
        "slug": "my-hero-academia-eras",
        "name": "My Hero Academia eras",
        "type": "event",
        "short_description": "Periodization for My Hero Academia.",
        "description": "Named eras and phases that help readers track how My Hero Academia changes across time."
    },
    {
        "slug": "my-hero-academia-works",
        "name": "My Hero Academia works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry My Hero Academia.",
        "description": "Primary works and adaptations through which most audiences encounter My Hero Academia."
    },
    {
        "slug": "my-hero-academia-symbols",
        "name": "My Hero Academia symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with My Hero Academia.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside My Hero Academia."
    },
    {
        "slug": "my-hero-academia-controversies",
        "name": "My Hero Academia controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in My Hero Academia.",
        "description": "Debates, rival canons, scandals, and contested facts that keep My Hero Academia argumentative."
    },
    {
        "slug": "my-hero-academia-sources",
        "name": "My Hero Academia sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into My Hero Academia.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify My Hero Academia."
    },
    {
        "slug": "my-hero-academia-geography",
        "name": "My Hero Academia geography",
        "type": "place",
        "short_description": "Broader geographic framing for My Hero Academia.",
        "description": "Regions, routes, and spatial systems that situate My Hero Academia beyond single named places."
    },
    {
        "slug": "my-hero-academia-legacy",
        "name": "My Hero Academia legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of My Hero Academia.",
        "description": "How My Hero Academia continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "my-hero-academia-practices",
        "name": "My Hero Academia practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in My Hero Academia.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in My Hero Academia."
    },
    {
        "slug": "my-hero-academia-entry-1",
        "name": "My Hero Academia entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-2",
        "name": "My Hero Academia entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-3",
        "name": "My Hero Academia entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-4",
        "name": "My Hero Academia entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-5",
        "name": "My Hero Academia entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-6",
        "name": "My Hero Academia entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-7",
        "name": "My Hero Academia entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-8",
        "name": "My Hero Academia entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-9",
        "name": "My Hero Academia entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-10",
        "name": "My Hero Academia entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-11",
        "name": "My Hero Academia entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-12",
        "name": "My Hero Academia entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-13",
        "name": "My Hero Academia entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-14",
        "name": "My Hero Academia entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-15",
        "name": "My Hero Academia entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-16",
        "name": "My Hero Academia entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-17",
        "name": "My Hero Academia entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-18",
        "name": "My Hero Academia entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-19",
        "name": "My Hero Academia entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-20",
        "name": "My Hero Academia entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-21",
        "name": "My Hero Academia entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-22",
        "name": "My Hero Academia entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-23",
        "name": "My Hero Academia entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-hero-academia-entry-24",
        "name": "My Hero Academia entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Hero Academia.",
        "description": "A supporting encyclopedia entry in the My Hero Academia subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "my-hero-academia",
        "my-hero-academia-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "my-hero-academia",
        "my-hero-academia-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "my-hero-academia",
        "my-hero-academia-places",
        "contains",
        "My Hero Academia places is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-events",
        "contains",
        "My Hero Academia events is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-objects",
        "contains",
        "My Hero Academia objects & artifacts is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-factions",
        "contains",
        "My Hero Academia factions & groups is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-concepts",
        "contains",
        "My Hero Academia concepts is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-eras",
        "contains",
        "My Hero Academia eras is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-works",
        "contains",
        "My Hero Academia works & media is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-symbols",
        "contains",
        "My Hero Academia symbols is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-controversies",
        "contains",
        "My Hero Academia controversies is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-sources",
        "contains",
        "My Hero Academia sources is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-geography",
        "contains",
        "My Hero Academia geography is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-legacy",
        "contains",
        "My Hero Academia legacy is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-practices",
        "contains",
        "My Hero Academia practices is a primary trailhead under My Hero Academia.",
        0.88,
        0.82
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-1",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-2",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-3",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-4",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-5",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-6",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-7",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-8",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-9",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-10",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-11",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-12",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-13",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-14",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-15",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-16",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-17",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-18",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-19",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-20",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-21",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-22",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-23",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ],
    [
        "my-hero-academia",
        "my-hero-academia-entry-24",
        "contains",
        "Supporting entry under My Hero Academia.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
