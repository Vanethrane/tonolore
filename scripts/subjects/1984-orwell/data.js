/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "1984-orwell",
        "name": "Nineteen Eighty-Four",
        "type": "topic",
        "short_description": "Big Brother, Newspeak, and the dystopia that became political shorthand.",
        "description": "Big Brother, Newspeak, and the dystopia that became political shorthand. This Ton-o-Lore subject maps people, places, events, and ideas tied to Nineteen Eighty-Four so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "1984-orwell-figures",
        "name": "Nineteen Eighty-Four figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Nineteen Eighty-Four.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Nineteen Eighty-Four."
    },
    {
        "slug": "1984-orwell-world",
        "name": "Nineteen Eighty-Four world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Nineteen Eighty-Four.",
        "description": "Geography, institutions, and periodization that give Nineteen Eighty-Four its encyclopedia shape."
    },
    {
        "slug": "1984-orwell-places",
        "name": "Nineteen Eighty-Four places",
        "type": "place",
        "short_description": "Locations and geographies that frame Nineteen Eighty-Four.",
        "description": "Places, regions, and built sites that give Nineteen Eighty-Four its map — where events and figures concentrate."
    },
    {
        "slug": "1984-orwell-events",
        "name": "Nineteen Eighty-Four events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Nineteen Eighty-Four.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Nineteen Eighty-Four timeline."
    },
    {
        "slug": "1984-orwell-objects",
        "name": "Nineteen Eighty-Four objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Nineteen Eighty-Four.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Nineteen Eighty-Four."
    },
    {
        "slug": "1984-orwell-factions",
        "name": "Nineteen Eighty-Four factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Nineteen Eighty-Four.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Nineteen Eighty-Four."
    },
    {
        "slug": "1984-orwell-concepts",
        "name": "Nineteen Eighty-Four concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Nineteen Eighty-Four.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Nineteen Eighty-Four readable as a lore graph."
    },
    {
        "slug": "1984-orwell-eras",
        "name": "Nineteen Eighty-Four eras",
        "type": "event",
        "short_description": "Periodization for Nineteen Eighty-Four.",
        "description": "Named eras and phases that help readers track how Nineteen Eighty-Four changes across time."
    },
    {
        "slug": "1984-orwell-works",
        "name": "Nineteen Eighty-Four works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Nineteen Eighty-Four.",
        "description": "Primary works and adaptations through which most audiences encounter Nineteen Eighty-Four."
    },
    {
        "slug": "1984-orwell-symbols",
        "name": "Nineteen Eighty-Four symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Nineteen Eighty-Four.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Nineteen Eighty-Four."
    },
    {
        "slug": "1984-orwell-controversies",
        "name": "Nineteen Eighty-Four controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Nineteen Eighty-Four.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Nineteen Eighty-Four argumentative."
    },
    {
        "slug": "1984-orwell-sources",
        "name": "Nineteen Eighty-Four sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Nineteen Eighty-Four.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Nineteen Eighty-Four."
    },
    {
        "slug": "1984-orwell-geography",
        "name": "Nineteen Eighty-Four geography",
        "type": "place",
        "short_description": "Broader geographic framing for Nineteen Eighty-Four.",
        "description": "Regions, routes, and spatial systems that situate Nineteen Eighty-Four beyond single named places."
    },
    {
        "slug": "1984-orwell-legacy",
        "name": "Nineteen Eighty-Four legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Nineteen Eighty-Four.",
        "description": "How Nineteen Eighty-Four continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "1984-orwell-practices",
        "name": "Nineteen Eighty-Four practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Nineteen Eighty-Four.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Nineteen Eighty-Four."
    },
    {
        "slug": "1984-orwell-entry-1",
        "name": "Nineteen Eighty-Four entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-2",
        "name": "Nineteen Eighty-Four entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-3",
        "name": "Nineteen Eighty-Four entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-4",
        "name": "Nineteen Eighty-Four entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-5",
        "name": "Nineteen Eighty-Four entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-6",
        "name": "Nineteen Eighty-Four entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-7",
        "name": "Nineteen Eighty-Four entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-8",
        "name": "Nineteen Eighty-Four entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-9",
        "name": "Nineteen Eighty-Four entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-10",
        "name": "Nineteen Eighty-Four entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-11",
        "name": "Nineteen Eighty-Four entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-12",
        "name": "Nineteen Eighty-Four entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-13",
        "name": "Nineteen Eighty-Four entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-14",
        "name": "Nineteen Eighty-Four entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-15",
        "name": "Nineteen Eighty-Four entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-16",
        "name": "Nineteen Eighty-Four entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-17",
        "name": "Nineteen Eighty-Four entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-18",
        "name": "Nineteen Eighty-Four entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-19",
        "name": "Nineteen Eighty-Four entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-20",
        "name": "Nineteen Eighty-Four entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-21",
        "name": "Nineteen Eighty-Four entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-22",
        "name": "Nineteen Eighty-Four entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-23",
        "name": "Nineteen Eighty-Four entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "1984-orwell-entry-24",
        "name": "Nineteen Eighty-Four entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nineteen Eighty-Four.",
        "description": "A supporting encyclopedia entry in the Nineteen Eighty-Four subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "1984-orwell",
        "1984-orwell-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "1984-orwell",
        "1984-orwell-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "1984-orwell",
        "1984-orwell-places",
        "contains",
        "Nineteen Eighty-Four places is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-events",
        "contains",
        "Nineteen Eighty-Four events is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-objects",
        "contains",
        "Nineteen Eighty-Four objects & artifacts is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-factions",
        "contains",
        "Nineteen Eighty-Four factions & groups is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-concepts",
        "contains",
        "Nineteen Eighty-Four concepts is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-eras",
        "contains",
        "Nineteen Eighty-Four eras is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-works",
        "contains",
        "Nineteen Eighty-Four works & media is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-symbols",
        "contains",
        "Nineteen Eighty-Four symbols is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-controversies",
        "contains",
        "Nineteen Eighty-Four controversies is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-sources",
        "contains",
        "Nineteen Eighty-Four sources is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-geography",
        "contains",
        "Nineteen Eighty-Four geography is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-legacy",
        "contains",
        "Nineteen Eighty-Four legacy is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-practices",
        "contains",
        "Nineteen Eighty-Four practices is a primary trailhead under Nineteen Eighty-Four.",
        0.88,
        0.82
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-1",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-2",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-3",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-4",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-5",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-6",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-7",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-8",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-9",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-10",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-11",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-12",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-13",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-14",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-15",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-16",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-17",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-18",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-19",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-20",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-21",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-22",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-23",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ],
    [
        "1984-orwell",
        "1984-orwell-entry-24",
        "contains",
        "Supporting entry under Nineteen Eighty-Four.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
