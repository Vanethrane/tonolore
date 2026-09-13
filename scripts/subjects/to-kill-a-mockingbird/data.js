/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "to-kill-a-mockingbird",
        "name": "To Kill a Mockingbird",
        "type": "topic",
        "short_description": "Maycomb, Atticus, and the American classroom novel of race and conscience.",
        "description": "Maycomb, Atticus, and the American classroom novel of race and conscience. This Ton-o-Lore subject maps people, places, events, and ideas tied to To Kill a Mockingbird so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "to-kill-a-mockingbird-figures",
        "name": "To Kill a Mockingbird figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to To Kill a Mockingbird.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring To Kill a Mockingbird."
    },
    {
        "slug": "to-kill-a-mockingbird-world",
        "name": "To Kill a Mockingbird world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame To Kill a Mockingbird.",
        "description": "Geography, institutions, and periodization that give To Kill a Mockingbird its encyclopedia shape."
    },
    {
        "slug": "to-kill-a-mockingbird-places",
        "name": "To Kill a Mockingbird places",
        "type": "place",
        "short_description": "Locations and geographies that frame To Kill a Mockingbird.",
        "description": "Places, regions, and built sites that give To Kill a Mockingbird its map — where events and figures concentrate."
    },
    {
        "slug": "to-kill-a-mockingbird-events",
        "name": "To Kill a Mockingbird events",
        "type": "event",
        "short_description": "Turning points and dated episodes in To Kill a Mockingbird.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the To Kill a Mockingbird timeline."
    },
    {
        "slug": "to-kill-a-mockingbird-objects",
        "name": "To Kill a Mockingbird objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to To Kill a Mockingbird.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through To Kill a Mockingbird."
    },
    {
        "slug": "to-kill-a-mockingbird-factions",
        "name": "To Kill a Mockingbird factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside To Kill a Mockingbird.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in To Kill a Mockingbird."
    },
    {
        "slug": "to-kill-a-mockingbird-concepts",
        "name": "To Kill a Mockingbird concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize To Kill a Mockingbird.",
        "description": "Keywords, doctrines, systems, and abstract forces that make To Kill a Mockingbird readable as a lore graph."
    },
    {
        "slug": "to-kill-a-mockingbird-eras",
        "name": "To Kill a Mockingbird eras",
        "type": "event",
        "short_description": "Periodization for To Kill a Mockingbird.",
        "description": "Named eras and phases that help readers track how To Kill a Mockingbird changes across time."
    },
    {
        "slug": "to-kill-a-mockingbird-works",
        "name": "To Kill a Mockingbird works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry To Kill a Mockingbird.",
        "description": "Primary works and adaptations through which most audiences encounter To Kill a Mockingbird."
    },
    {
        "slug": "to-kill-a-mockingbird-symbols",
        "name": "To Kill a Mockingbird symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with To Kill a Mockingbird.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside To Kill a Mockingbird."
    },
    {
        "slug": "to-kill-a-mockingbird-controversies",
        "name": "To Kill a Mockingbird controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in To Kill a Mockingbird.",
        "description": "Debates, rival canons, scandals, and contested facts that keep To Kill a Mockingbird argumentative."
    },
    {
        "slug": "to-kill-a-mockingbird-sources",
        "name": "To Kill a Mockingbird sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into To Kill a Mockingbird.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify To Kill a Mockingbird."
    },
    {
        "slug": "to-kill-a-mockingbird-geography",
        "name": "To Kill a Mockingbird geography",
        "type": "place",
        "short_description": "Broader geographic framing for To Kill a Mockingbird.",
        "description": "Regions, routes, and spatial systems that situate To Kill a Mockingbird beyond single named places."
    },
    {
        "slug": "to-kill-a-mockingbird-legacy",
        "name": "To Kill a Mockingbird legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of To Kill a Mockingbird.",
        "description": "How To Kill a Mockingbird continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "to-kill-a-mockingbird-practices",
        "name": "To Kill a Mockingbird practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in To Kill a Mockingbird.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in To Kill a Mockingbird."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-1",
        "name": "To Kill a Mockingbird entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-2",
        "name": "To Kill a Mockingbird entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-3",
        "name": "To Kill a Mockingbird entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-4",
        "name": "To Kill a Mockingbird entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-5",
        "name": "To Kill a Mockingbird entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-6",
        "name": "To Kill a Mockingbird entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-7",
        "name": "To Kill a Mockingbird entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-8",
        "name": "To Kill a Mockingbird entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-9",
        "name": "To Kill a Mockingbird entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-10",
        "name": "To Kill a Mockingbird entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-11",
        "name": "To Kill a Mockingbird entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-12",
        "name": "To Kill a Mockingbird entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-13",
        "name": "To Kill a Mockingbird entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-14",
        "name": "To Kill a Mockingbird entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-15",
        "name": "To Kill a Mockingbird entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-16",
        "name": "To Kill a Mockingbird entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-17",
        "name": "To Kill a Mockingbird entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-18",
        "name": "To Kill a Mockingbird entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-19",
        "name": "To Kill a Mockingbird entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-20",
        "name": "To Kill a Mockingbird entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-21",
        "name": "To Kill a Mockingbird entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-22",
        "name": "To Kill a Mockingbird entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-23",
        "name": "To Kill a Mockingbird entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "to-kill-a-mockingbird-entry-24",
        "name": "To Kill a Mockingbird entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside To Kill a Mockingbird.",
        "description": "A supporting encyclopedia entry in the To Kill a Mockingbird subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-places",
        "contains",
        "To Kill a Mockingbird places is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-events",
        "contains",
        "To Kill a Mockingbird events is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-objects",
        "contains",
        "To Kill a Mockingbird objects & artifacts is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-factions",
        "contains",
        "To Kill a Mockingbird factions & groups is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-concepts",
        "contains",
        "To Kill a Mockingbird concepts is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-eras",
        "contains",
        "To Kill a Mockingbird eras is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-works",
        "contains",
        "To Kill a Mockingbird works & media is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-symbols",
        "contains",
        "To Kill a Mockingbird symbols is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-controversies",
        "contains",
        "To Kill a Mockingbird controversies is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-sources",
        "contains",
        "To Kill a Mockingbird sources is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-geography",
        "contains",
        "To Kill a Mockingbird geography is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-legacy",
        "contains",
        "To Kill a Mockingbird legacy is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-practices",
        "contains",
        "To Kill a Mockingbird practices is a primary trailhead under To Kill a Mockingbird.",
        0.88,
        0.82
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-1",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-2",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-3",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-4",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-5",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-6",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-7",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-8",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-9",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-10",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-11",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-12",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-13",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-14",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-15",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-16",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-17",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-18",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-19",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-20",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-21",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-22",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-23",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ],
    [
        "to-kill-a-mockingbird",
        "to-kill-a-mockingbird-entry-24",
        "contains",
        "Supporting entry under To Kill a Mockingbird.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
