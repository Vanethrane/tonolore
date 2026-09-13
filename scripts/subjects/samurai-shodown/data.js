/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "samurai-shodown",
        "name": "Samurai Shodown",
        "type": "topic",
        "short_description": "Weapon clashes, one-slash drama, and SNK’s feudal Japan fighter aesthetic.",
        "description": "Weapon clashes, one-slash drama, and SNK’s feudal Japan fighter aesthetic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Samurai Shodown so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "samurai-shodown-figures",
        "name": "Samurai Shodown figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Samurai Shodown.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Samurai Shodown."
    },
    {
        "slug": "samurai-shodown-world",
        "name": "Samurai Shodown world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Samurai Shodown.",
        "description": "Geography, institutions, and periodization that give Samurai Shodown its encyclopedia shape."
    },
    {
        "slug": "samurai-shodown-places",
        "name": "Samurai Shodown places",
        "type": "place",
        "short_description": "Locations and geographies that frame Samurai Shodown.",
        "description": "Places, regions, and built sites that give Samurai Shodown its map — where events and figures concentrate."
    },
    {
        "slug": "samurai-shodown-events",
        "name": "Samurai Shodown events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Samurai Shodown.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Samurai Shodown timeline."
    },
    {
        "slug": "samurai-shodown-objects",
        "name": "Samurai Shodown objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Samurai Shodown.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Samurai Shodown."
    },
    {
        "slug": "samurai-shodown-factions",
        "name": "Samurai Shodown factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Samurai Shodown.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Samurai Shodown."
    },
    {
        "slug": "samurai-shodown-concepts",
        "name": "Samurai Shodown concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Samurai Shodown.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Samurai Shodown readable as a lore graph."
    },
    {
        "slug": "samurai-shodown-eras",
        "name": "Samurai Shodown eras",
        "type": "event",
        "short_description": "Periodization for Samurai Shodown.",
        "description": "Named eras and phases that help readers track how Samurai Shodown changes across time."
    },
    {
        "slug": "samurai-shodown-works",
        "name": "Samurai Shodown works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Samurai Shodown.",
        "description": "Primary works and adaptations through which most audiences encounter Samurai Shodown."
    },
    {
        "slug": "samurai-shodown-symbols",
        "name": "Samurai Shodown symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Samurai Shodown.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Samurai Shodown."
    },
    {
        "slug": "samurai-shodown-controversies",
        "name": "Samurai Shodown controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Samurai Shodown.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Samurai Shodown argumentative."
    },
    {
        "slug": "samurai-shodown-sources",
        "name": "Samurai Shodown sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Samurai Shodown.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Samurai Shodown."
    },
    {
        "slug": "samurai-shodown-geography",
        "name": "Samurai Shodown geography",
        "type": "place",
        "short_description": "Broader geographic framing for Samurai Shodown.",
        "description": "Regions, routes, and spatial systems that situate Samurai Shodown beyond single named places."
    },
    {
        "slug": "samurai-shodown-legacy",
        "name": "Samurai Shodown legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Samurai Shodown.",
        "description": "How Samurai Shodown continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "samurai-shodown-practices",
        "name": "Samurai Shodown practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Samurai Shodown.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Samurai Shodown."
    },
    {
        "slug": "samurai-shodown-entry-1",
        "name": "Samurai Shodown entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-2",
        "name": "Samurai Shodown entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-3",
        "name": "Samurai Shodown entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-4",
        "name": "Samurai Shodown entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-5",
        "name": "Samurai Shodown entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-6",
        "name": "Samurai Shodown entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-7",
        "name": "Samurai Shodown entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-8",
        "name": "Samurai Shodown entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-9",
        "name": "Samurai Shodown entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-10",
        "name": "Samurai Shodown entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-11",
        "name": "Samurai Shodown entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-12",
        "name": "Samurai Shodown entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-13",
        "name": "Samurai Shodown entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-14",
        "name": "Samurai Shodown entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-15",
        "name": "Samurai Shodown entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-16",
        "name": "Samurai Shodown entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-17",
        "name": "Samurai Shodown entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-18",
        "name": "Samurai Shodown entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-19",
        "name": "Samurai Shodown entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-20",
        "name": "Samurai Shodown entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-21",
        "name": "Samurai Shodown entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-22",
        "name": "Samurai Shodown entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-23",
        "name": "Samurai Shodown entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-shodown-entry-24",
        "name": "Samurai Shodown entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai Shodown.",
        "description": "A supporting encyclopedia entry in the Samurai Shodown subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "samurai-shodown",
        "samurai-shodown-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "samurai-shodown",
        "samurai-shodown-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "samurai-shodown",
        "samurai-shodown-places",
        "contains",
        "Samurai Shodown places is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-events",
        "contains",
        "Samurai Shodown events is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-objects",
        "contains",
        "Samurai Shodown objects & artifacts is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-factions",
        "contains",
        "Samurai Shodown factions & groups is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-concepts",
        "contains",
        "Samurai Shodown concepts is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-eras",
        "contains",
        "Samurai Shodown eras is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-works",
        "contains",
        "Samurai Shodown works & media is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-symbols",
        "contains",
        "Samurai Shodown symbols is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-controversies",
        "contains",
        "Samurai Shodown controversies is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-sources",
        "contains",
        "Samurai Shodown sources is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-geography",
        "contains",
        "Samurai Shodown geography is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-legacy",
        "contains",
        "Samurai Shodown legacy is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-practices",
        "contains",
        "Samurai Shodown practices is a primary trailhead under Samurai Shodown.",
        0.88,
        0.82
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-1",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-2",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-3",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-4",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-5",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-6",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-7",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-8",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-9",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-10",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-11",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-12",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-13",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-14",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-15",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-16",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-17",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-18",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-19",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-20",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-21",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-22",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-23",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ],
    [
        "samurai-shodown",
        "samurai-shodown-entry-24",
        "contains",
        "Supporting entry under Samurai Shodown.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
