/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "family-guy",
        "name": "Family Guy",
        "type": "topic",
        "short_description": "Cutaway gags, Quahog chaos, and the long-running adult animation that defined 2000s Fox comedy.",
        "description": "Cutaway gags, Quahog chaos, and the long-running adult animation that defined 2000s Fox comedy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Family Guy so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "family-guy-figures",
        "name": "Family Guy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Family Guy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Family Guy."
    },
    {
        "slug": "family-guy-world",
        "name": "Family Guy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Family Guy.",
        "description": "Geography, institutions, and periodization that give Family Guy its encyclopedia shape."
    },
    {
        "slug": "family-guy-places",
        "name": "Family Guy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Family Guy.",
        "description": "Places, regions, and built sites that give Family Guy its map — where events and figures concentrate."
    },
    {
        "slug": "family-guy-events",
        "name": "Family Guy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Family Guy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Family Guy timeline."
    },
    {
        "slug": "family-guy-objects",
        "name": "Family Guy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Family Guy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Family Guy."
    },
    {
        "slug": "family-guy-factions",
        "name": "Family Guy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Family Guy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Family Guy."
    },
    {
        "slug": "family-guy-concepts",
        "name": "Family Guy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Family Guy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Family Guy readable as a lore graph."
    },
    {
        "slug": "family-guy-eras",
        "name": "Family Guy eras",
        "type": "event",
        "short_description": "Periodization for Family Guy.",
        "description": "Named eras and phases that help readers track how Family Guy changes across time."
    },
    {
        "slug": "family-guy-works",
        "name": "Family Guy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Family Guy.",
        "description": "Primary works and adaptations through which most audiences encounter Family Guy."
    },
    {
        "slug": "family-guy-symbols",
        "name": "Family Guy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Family Guy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Family Guy."
    },
    {
        "slug": "family-guy-controversies",
        "name": "Family Guy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Family Guy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Family Guy argumentative."
    },
    {
        "slug": "family-guy-sources",
        "name": "Family Guy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Family Guy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Family Guy."
    },
    {
        "slug": "family-guy-geography",
        "name": "Family Guy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Family Guy.",
        "description": "Regions, routes, and spatial systems that situate Family Guy beyond single named places."
    },
    {
        "slug": "family-guy-legacy",
        "name": "Family Guy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Family Guy.",
        "description": "How Family Guy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "family-guy-practices",
        "name": "Family Guy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Family Guy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Family Guy."
    },
    {
        "slug": "family-guy-entry-1",
        "name": "Family Guy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-2",
        "name": "Family Guy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-3",
        "name": "Family Guy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-4",
        "name": "Family Guy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-5",
        "name": "Family Guy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-6",
        "name": "Family Guy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-7",
        "name": "Family Guy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-8",
        "name": "Family Guy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-9",
        "name": "Family Guy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-10",
        "name": "Family Guy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-11",
        "name": "Family Guy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-12",
        "name": "Family Guy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-13",
        "name": "Family Guy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-14",
        "name": "Family Guy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-15",
        "name": "Family Guy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-16",
        "name": "Family Guy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-17",
        "name": "Family Guy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-18",
        "name": "Family Guy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-19",
        "name": "Family Guy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-20",
        "name": "Family Guy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-21",
        "name": "Family Guy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-22",
        "name": "Family Guy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-23",
        "name": "Family Guy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "family-guy-entry-24",
        "name": "Family Guy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Family Guy.",
        "description": "A supporting encyclopedia entry in the Family Guy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "family-guy",
        "family-guy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "family-guy",
        "family-guy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "family-guy",
        "family-guy-places",
        "contains",
        "Family Guy places is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-events",
        "contains",
        "Family Guy events is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-objects",
        "contains",
        "Family Guy objects & artifacts is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-factions",
        "contains",
        "Family Guy factions & groups is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-concepts",
        "contains",
        "Family Guy concepts is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-eras",
        "contains",
        "Family Guy eras is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-works",
        "contains",
        "Family Guy works & media is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-symbols",
        "contains",
        "Family Guy symbols is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-controversies",
        "contains",
        "Family Guy controversies is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-sources",
        "contains",
        "Family Guy sources is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-geography",
        "contains",
        "Family Guy geography is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-legacy",
        "contains",
        "Family Guy legacy is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-practices",
        "contains",
        "Family Guy practices is a primary trailhead under Family Guy.",
        0.88,
        0.82
    ],
    [
        "family-guy",
        "family-guy-entry-1",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-2",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-3",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-4",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-5",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-6",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-7",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-8",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-9",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-10",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-11",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-12",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-13",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-14",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-15",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-16",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-17",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-18",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-19",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-20",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-21",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-22",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-23",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ],
    [
        "family-guy",
        "family-guy-entry-24",
        "contains",
        "Supporting entry under Family Guy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
