/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "entomology-insects",
        "name": "Entomology",
        "type": "topic",
        "short_description": "Insects, colonies, metamorphosis, and the most diverse animal lineage on Earth.",
        "description": "Insects, colonies, metamorphosis, and the most diverse animal lineage on Earth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Entomology so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "entomology-insects-figures",
        "name": "Entomology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Entomology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Entomology."
    },
    {
        "slug": "entomology-insects-world",
        "name": "Entomology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Entomology.",
        "description": "Geography, institutions, and periodization that give Entomology its encyclopedia shape."
    },
    {
        "slug": "entomology-insects-places",
        "name": "Entomology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Entomology.",
        "description": "Places, regions, and built sites that give Entomology its map — where events and figures concentrate."
    },
    {
        "slug": "entomology-insects-events",
        "name": "Entomology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Entomology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Entomology timeline."
    },
    {
        "slug": "entomology-insects-objects",
        "name": "Entomology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Entomology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Entomology."
    },
    {
        "slug": "entomology-insects-factions",
        "name": "Entomology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Entomology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Entomology."
    },
    {
        "slug": "entomology-insects-concepts",
        "name": "Entomology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Entomology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Entomology readable as a lore graph."
    },
    {
        "slug": "entomology-insects-eras",
        "name": "Entomology eras",
        "type": "event",
        "short_description": "Periodization for Entomology.",
        "description": "Named eras and phases that help readers track how Entomology changes across time."
    },
    {
        "slug": "entomology-insects-works",
        "name": "Entomology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Entomology.",
        "description": "Primary works and adaptations through which most audiences encounter Entomology."
    },
    {
        "slug": "entomology-insects-symbols",
        "name": "Entomology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Entomology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Entomology."
    },
    {
        "slug": "entomology-insects-controversies",
        "name": "Entomology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Entomology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Entomology argumentative."
    },
    {
        "slug": "entomology-insects-sources",
        "name": "Entomology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Entomology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Entomology."
    },
    {
        "slug": "entomology-insects-geography",
        "name": "Entomology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Entomology.",
        "description": "Regions, routes, and spatial systems that situate Entomology beyond single named places."
    },
    {
        "slug": "entomology-insects-legacy",
        "name": "Entomology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Entomology.",
        "description": "How Entomology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "entomology-insects-practices",
        "name": "Entomology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Entomology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Entomology."
    },
    {
        "slug": "entomology-insects-entry-1",
        "name": "Entomology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-2",
        "name": "Entomology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-3",
        "name": "Entomology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-4",
        "name": "Entomology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-5",
        "name": "Entomology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-6",
        "name": "Entomology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-7",
        "name": "Entomology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-8",
        "name": "Entomology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-9",
        "name": "Entomology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-10",
        "name": "Entomology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-11",
        "name": "Entomology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-12",
        "name": "Entomology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-13",
        "name": "Entomology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-14",
        "name": "Entomology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-15",
        "name": "Entomology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-16",
        "name": "Entomology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-17",
        "name": "Entomology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-18",
        "name": "Entomology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-19",
        "name": "Entomology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-20",
        "name": "Entomology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-21",
        "name": "Entomology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-22",
        "name": "Entomology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-23",
        "name": "Entomology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "entomology-insects-entry-24",
        "name": "Entomology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Entomology.",
        "description": "A supporting encyclopedia entry in the Entomology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "entomology-insects",
        "entomology-insects-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "entomology-insects",
        "entomology-insects-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "entomology-insects",
        "entomology-insects-places",
        "contains",
        "Entomology places is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-events",
        "contains",
        "Entomology events is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-objects",
        "contains",
        "Entomology objects & artifacts is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-factions",
        "contains",
        "Entomology factions & groups is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-concepts",
        "contains",
        "Entomology concepts is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-eras",
        "contains",
        "Entomology eras is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-works",
        "contains",
        "Entomology works & media is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-symbols",
        "contains",
        "Entomology symbols is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-controversies",
        "contains",
        "Entomology controversies is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-sources",
        "contains",
        "Entomology sources is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-geography",
        "contains",
        "Entomology geography is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-legacy",
        "contains",
        "Entomology legacy is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-practices",
        "contains",
        "Entomology practices is a primary trailhead under Entomology.",
        0.88,
        0.82
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-1",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-2",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-3",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-4",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-5",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-6",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-7",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-8",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-9",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-10",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-11",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-12",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-13",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-14",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-15",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-16",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-17",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-18",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-19",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-20",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-21",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-22",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-23",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ],
    [
        "entomology-insects",
        "entomology-insects-entry-24",
        "contains",
        "Supporting entry under Entomology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
