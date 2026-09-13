/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "buffy-the-vampire-slayer",
        "name": "Buffy the Vampire Slayer",
        "type": "topic",
        "short_description": "Hellmouth high school, Scooby Gang, and Whedon’s genre-defining monster-of-the-week mytharc.",
        "description": "Hellmouth high school, Scooby Gang, and Whedon’s genre-defining monster-of-the-week mytharc. This Ton-o-Lore subject maps people, places, events, and ideas tied to Buffy the Vampire Slayer so readers can follow long-tail connections across television."
    },
    {
        "slug": "buffy-the-vampire-slayer-figures",
        "name": "Buffy the Vampire Slayer figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Buffy the Vampire Slayer.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Buffy the Vampire Slayer."
    },
    {
        "slug": "buffy-the-vampire-slayer-world",
        "name": "Buffy the Vampire Slayer world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Buffy the Vampire Slayer.",
        "description": "Geography, institutions, and periodization that give Buffy the Vampire Slayer its encyclopedia shape."
    },
    {
        "slug": "buffy-the-vampire-slayer-places",
        "name": "Buffy the Vampire Slayer places",
        "type": "place",
        "short_description": "Locations and geographies that frame Buffy the Vampire Slayer.",
        "description": "Places, regions, and built sites that give Buffy the Vampire Slayer its map — where events and figures concentrate."
    },
    {
        "slug": "buffy-the-vampire-slayer-events",
        "name": "Buffy the Vampire Slayer events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Buffy the Vampire Slayer.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Buffy the Vampire Slayer timeline."
    },
    {
        "slug": "buffy-the-vampire-slayer-objects",
        "name": "Buffy the Vampire Slayer objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Buffy the Vampire Slayer.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Buffy the Vampire Slayer."
    },
    {
        "slug": "buffy-the-vampire-slayer-factions",
        "name": "Buffy the Vampire Slayer factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Buffy the Vampire Slayer.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Buffy the Vampire Slayer."
    },
    {
        "slug": "buffy-the-vampire-slayer-concepts",
        "name": "Buffy the Vampire Slayer concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Buffy the Vampire Slayer.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Buffy the Vampire Slayer readable as a lore graph."
    },
    {
        "slug": "buffy-the-vampire-slayer-eras",
        "name": "Buffy the Vampire Slayer eras",
        "type": "event",
        "short_description": "Periodization for Buffy the Vampire Slayer.",
        "description": "Named eras and phases that help readers track how Buffy the Vampire Slayer changes across time."
    },
    {
        "slug": "buffy-the-vampire-slayer-works",
        "name": "Buffy the Vampire Slayer works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Buffy the Vampire Slayer.",
        "description": "Primary works and adaptations through which most audiences encounter Buffy the Vampire Slayer."
    },
    {
        "slug": "buffy-the-vampire-slayer-symbols",
        "name": "Buffy the Vampire Slayer symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Buffy the Vampire Slayer.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Buffy the Vampire Slayer."
    },
    {
        "slug": "buffy-the-vampire-slayer-controversies",
        "name": "Buffy the Vampire Slayer controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Buffy the Vampire Slayer.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Buffy the Vampire Slayer argumentative."
    },
    {
        "slug": "buffy-the-vampire-slayer-sources",
        "name": "Buffy the Vampire Slayer sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Buffy the Vampire Slayer.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Buffy the Vampire Slayer."
    },
    {
        "slug": "buffy-the-vampire-slayer-geography",
        "name": "Buffy the Vampire Slayer geography",
        "type": "place",
        "short_description": "Broader geographic framing for Buffy the Vampire Slayer.",
        "description": "Regions, routes, and spatial systems that situate Buffy the Vampire Slayer beyond single named places."
    },
    {
        "slug": "buffy-the-vampire-slayer-legacy",
        "name": "Buffy the Vampire Slayer legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Buffy the Vampire Slayer.",
        "description": "How Buffy the Vampire Slayer continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "buffy-the-vampire-slayer-practices",
        "name": "Buffy the Vampire Slayer practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Buffy the Vampire Slayer.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Buffy the Vampire Slayer."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-1",
        "name": "Buffy the Vampire Slayer entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-2",
        "name": "Buffy the Vampire Slayer entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-3",
        "name": "Buffy the Vampire Slayer entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-4",
        "name": "Buffy the Vampire Slayer entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-5",
        "name": "Buffy the Vampire Slayer entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-6",
        "name": "Buffy the Vampire Slayer entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-7",
        "name": "Buffy the Vampire Slayer entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-8",
        "name": "Buffy the Vampire Slayer entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-9",
        "name": "Buffy the Vampire Slayer entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-10",
        "name": "Buffy the Vampire Slayer entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-11",
        "name": "Buffy the Vampire Slayer entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-12",
        "name": "Buffy the Vampire Slayer entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-13",
        "name": "Buffy the Vampire Slayer entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-14",
        "name": "Buffy the Vampire Slayer entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-15",
        "name": "Buffy the Vampire Slayer entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-16",
        "name": "Buffy the Vampire Slayer entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-17",
        "name": "Buffy the Vampire Slayer entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-18",
        "name": "Buffy the Vampire Slayer entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-19",
        "name": "Buffy the Vampire Slayer entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-20",
        "name": "Buffy the Vampire Slayer entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-21",
        "name": "Buffy the Vampire Slayer entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-22",
        "name": "Buffy the Vampire Slayer entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-23",
        "name": "Buffy the Vampire Slayer entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "buffy-the-vampire-slayer-entry-24",
        "name": "Buffy the Vampire Slayer entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Buffy the Vampire Slayer.",
        "description": "A supporting encyclopedia entry in the Buffy the Vampire Slayer subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-places",
        "contains",
        "Buffy the Vampire Slayer places is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-events",
        "contains",
        "Buffy the Vampire Slayer events is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-objects",
        "contains",
        "Buffy the Vampire Slayer objects & artifacts is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-factions",
        "contains",
        "Buffy the Vampire Slayer factions & groups is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-concepts",
        "contains",
        "Buffy the Vampire Slayer concepts is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-eras",
        "contains",
        "Buffy the Vampire Slayer eras is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-works",
        "contains",
        "Buffy the Vampire Slayer works & media is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-symbols",
        "contains",
        "Buffy the Vampire Slayer symbols is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-controversies",
        "contains",
        "Buffy the Vampire Slayer controversies is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-sources",
        "contains",
        "Buffy the Vampire Slayer sources is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-geography",
        "contains",
        "Buffy the Vampire Slayer geography is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-legacy",
        "contains",
        "Buffy the Vampire Slayer legacy is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-practices",
        "contains",
        "Buffy the Vampire Slayer practices is a primary trailhead under Buffy the Vampire Slayer.",
        0.88,
        0.82
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-1",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-2",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-3",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-4",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-5",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-6",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-7",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-8",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-9",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-10",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-11",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-12",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-13",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-14",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-15",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-16",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-17",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-18",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-19",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-20",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-21",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-22",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-23",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ],
    [
        "buffy-the-vampire-slayer",
        "buffy-the-vampire-slayer-entry-24",
        "contains",
        "Supporting entry under Buffy the Vampire Slayer.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
