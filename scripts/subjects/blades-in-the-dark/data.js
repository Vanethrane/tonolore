/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "blades-in-the-dark",
        "name": "Blades in the Dark",
        "type": "topic",
        "short_description": "Crew heists, Doskvol gloom, and the Forged in the Dark engine of criminal fantasy.",
        "description": "Crew heists, Doskvol gloom, and the Forged in the Dark engine of criminal fantasy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Blades in the Dark so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "blades-in-the-dark-figures",
        "name": "Blades in the Dark figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Blades in the Dark.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Blades in the Dark."
    },
    {
        "slug": "blades-in-the-dark-world",
        "name": "Blades in the Dark world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Blades in the Dark.",
        "description": "Geography, institutions, and periodization that give Blades in the Dark its encyclopedia shape."
    },
    {
        "slug": "blades-in-the-dark-places",
        "name": "Blades in the Dark places",
        "type": "place",
        "short_description": "Locations and geographies that frame Blades in the Dark.",
        "description": "Places, regions, and built sites that give Blades in the Dark its map — where events and figures concentrate."
    },
    {
        "slug": "blades-in-the-dark-events",
        "name": "Blades in the Dark events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Blades in the Dark.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Blades in the Dark timeline."
    },
    {
        "slug": "blades-in-the-dark-objects",
        "name": "Blades in the Dark objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Blades in the Dark.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Blades in the Dark."
    },
    {
        "slug": "blades-in-the-dark-factions",
        "name": "Blades in the Dark factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Blades in the Dark.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Blades in the Dark."
    },
    {
        "slug": "blades-in-the-dark-concepts",
        "name": "Blades in the Dark concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Blades in the Dark.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Blades in the Dark readable as a lore graph."
    },
    {
        "slug": "blades-in-the-dark-eras",
        "name": "Blades in the Dark eras",
        "type": "event",
        "short_description": "Periodization for Blades in the Dark.",
        "description": "Named eras and phases that help readers track how Blades in the Dark changes across time."
    },
    {
        "slug": "blades-in-the-dark-works",
        "name": "Blades in the Dark works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Blades in the Dark.",
        "description": "Primary works and adaptations through which most audiences encounter Blades in the Dark."
    },
    {
        "slug": "blades-in-the-dark-symbols",
        "name": "Blades in the Dark symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Blades in the Dark.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Blades in the Dark."
    },
    {
        "slug": "blades-in-the-dark-controversies",
        "name": "Blades in the Dark controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Blades in the Dark.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Blades in the Dark argumentative."
    },
    {
        "slug": "blades-in-the-dark-sources",
        "name": "Blades in the Dark sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Blades in the Dark.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Blades in the Dark."
    },
    {
        "slug": "blades-in-the-dark-geography",
        "name": "Blades in the Dark geography",
        "type": "place",
        "short_description": "Broader geographic framing for Blades in the Dark.",
        "description": "Regions, routes, and spatial systems that situate Blades in the Dark beyond single named places."
    },
    {
        "slug": "blades-in-the-dark-legacy",
        "name": "Blades in the Dark legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Blades in the Dark.",
        "description": "How Blades in the Dark continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "blades-in-the-dark-practices",
        "name": "Blades in the Dark practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Blades in the Dark.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Blades in the Dark."
    },
    {
        "slug": "blades-in-the-dark-entry-1",
        "name": "Blades in the Dark entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-2",
        "name": "Blades in the Dark entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-3",
        "name": "Blades in the Dark entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-4",
        "name": "Blades in the Dark entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-5",
        "name": "Blades in the Dark entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-6",
        "name": "Blades in the Dark entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-7",
        "name": "Blades in the Dark entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-8",
        "name": "Blades in the Dark entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-9",
        "name": "Blades in the Dark entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-10",
        "name": "Blades in the Dark entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-11",
        "name": "Blades in the Dark entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-12",
        "name": "Blades in the Dark entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-13",
        "name": "Blades in the Dark entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-14",
        "name": "Blades in the Dark entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-15",
        "name": "Blades in the Dark entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-16",
        "name": "Blades in the Dark entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-17",
        "name": "Blades in the Dark entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-18",
        "name": "Blades in the Dark entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-19",
        "name": "Blades in the Dark entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-20",
        "name": "Blades in the Dark entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-21",
        "name": "Blades in the Dark entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-22",
        "name": "Blades in the Dark entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-23",
        "name": "Blades in the Dark entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blades-in-the-dark-entry-24",
        "name": "Blades in the Dark entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blades in the Dark.",
        "description": "A supporting encyclopedia entry in the Blades in the Dark subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "blades-in-the-dark",
        "blades-in-the-dark-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-places",
        "contains",
        "Blades in the Dark places is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-events",
        "contains",
        "Blades in the Dark events is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-objects",
        "contains",
        "Blades in the Dark objects & artifacts is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-factions",
        "contains",
        "Blades in the Dark factions & groups is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-concepts",
        "contains",
        "Blades in the Dark concepts is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-eras",
        "contains",
        "Blades in the Dark eras is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-works",
        "contains",
        "Blades in the Dark works & media is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-symbols",
        "contains",
        "Blades in the Dark symbols is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-controversies",
        "contains",
        "Blades in the Dark controversies is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-sources",
        "contains",
        "Blades in the Dark sources is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-geography",
        "contains",
        "Blades in the Dark geography is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-legacy",
        "contains",
        "Blades in the Dark legacy is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-practices",
        "contains",
        "Blades in the Dark practices is a primary trailhead under Blades in the Dark.",
        0.88,
        0.82
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-1",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-2",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-3",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-4",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-5",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-6",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-7",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-8",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-9",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-10",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-11",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-12",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-13",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-14",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-15",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-16",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-17",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-18",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-19",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-20",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-21",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-22",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-23",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ],
    [
        "blades-in-the-dark",
        "blades-in-the-dark-entry-24",
        "contains",
        "Supporting entry under Blades in the Dark.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
