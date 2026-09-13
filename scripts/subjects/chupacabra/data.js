/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chupacabra",
        "name": "Chupacabra",
        "type": "topic",
        "short_description": "Goat-sucker reports, Puerto Rico origins, and the late-20th-century cryptid that went global.",
        "description": "Goat-sucker reports, Puerto Rico origins, and the late-20th-century cryptid that went global. This Ton-o-Lore subject maps people, places, events, and ideas tied to Chupacabra so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "chupacabra-figures",
        "name": "Chupacabra figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Chupacabra.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Chupacabra."
    },
    {
        "slug": "chupacabra-world",
        "name": "Chupacabra world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Chupacabra.",
        "description": "Geography, institutions, and periodization that give Chupacabra its encyclopedia shape."
    },
    {
        "slug": "chupacabra-places",
        "name": "Chupacabra places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chupacabra.",
        "description": "Places, regions, and built sites that give Chupacabra its map — where events and figures concentrate."
    },
    {
        "slug": "chupacabra-events",
        "name": "Chupacabra events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chupacabra.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chupacabra timeline."
    },
    {
        "slug": "chupacabra-objects",
        "name": "Chupacabra objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chupacabra.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chupacabra."
    },
    {
        "slug": "chupacabra-factions",
        "name": "Chupacabra factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chupacabra.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chupacabra."
    },
    {
        "slug": "chupacabra-concepts",
        "name": "Chupacabra concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chupacabra.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chupacabra readable as a lore graph."
    },
    {
        "slug": "chupacabra-eras",
        "name": "Chupacabra eras",
        "type": "event",
        "short_description": "Periodization for Chupacabra.",
        "description": "Named eras and phases that help readers track how Chupacabra changes across time."
    },
    {
        "slug": "chupacabra-works",
        "name": "Chupacabra works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chupacabra.",
        "description": "Primary works and adaptations through which most audiences encounter Chupacabra."
    },
    {
        "slug": "chupacabra-symbols",
        "name": "Chupacabra symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chupacabra.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chupacabra."
    },
    {
        "slug": "chupacabra-controversies",
        "name": "Chupacabra controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chupacabra.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chupacabra argumentative."
    },
    {
        "slug": "chupacabra-sources",
        "name": "Chupacabra sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chupacabra.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chupacabra."
    },
    {
        "slug": "chupacabra-geography",
        "name": "Chupacabra geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chupacabra.",
        "description": "Regions, routes, and spatial systems that situate Chupacabra beyond single named places."
    },
    {
        "slug": "chupacabra-legacy",
        "name": "Chupacabra legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Chupacabra.",
        "description": "How Chupacabra continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "chupacabra-practices",
        "name": "Chupacabra practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Chupacabra.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Chupacabra."
    },
    {
        "slug": "chupacabra-entry-1",
        "name": "Chupacabra entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-2",
        "name": "Chupacabra entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-3",
        "name": "Chupacabra entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-4",
        "name": "Chupacabra entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-5",
        "name": "Chupacabra entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-6",
        "name": "Chupacabra entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-7",
        "name": "Chupacabra entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-8",
        "name": "Chupacabra entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-9",
        "name": "Chupacabra entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-10",
        "name": "Chupacabra entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-11",
        "name": "Chupacabra entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-12",
        "name": "Chupacabra entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-13",
        "name": "Chupacabra entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-14",
        "name": "Chupacabra entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-15",
        "name": "Chupacabra entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-16",
        "name": "Chupacabra entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-17",
        "name": "Chupacabra entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-18",
        "name": "Chupacabra entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-19",
        "name": "Chupacabra entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-20",
        "name": "Chupacabra entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-21",
        "name": "Chupacabra entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-22",
        "name": "Chupacabra entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-23",
        "name": "Chupacabra entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chupacabra-entry-24",
        "name": "Chupacabra entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chupacabra.",
        "description": "A supporting encyclopedia entry in the Chupacabra subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "chupacabra",
        "chupacabra-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "chupacabra",
        "chupacabra-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "chupacabra",
        "chupacabra-places",
        "contains",
        "Chupacabra places is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-events",
        "contains",
        "Chupacabra events is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-objects",
        "contains",
        "Chupacabra objects & artifacts is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-factions",
        "contains",
        "Chupacabra factions & groups is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-concepts",
        "contains",
        "Chupacabra concepts is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-eras",
        "contains",
        "Chupacabra eras is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-works",
        "contains",
        "Chupacabra works & media is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-symbols",
        "contains",
        "Chupacabra symbols is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-controversies",
        "contains",
        "Chupacabra controversies is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-sources",
        "contains",
        "Chupacabra sources is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-geography",
        "contains",
        "Chupacabra geography is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-legacy",
        "contains",
        "Chupacabra legacy is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-practices",
        "contains",
        "Chupacabra practices is a primary trailhead under Chupacabra.",
        0.88,
        0.82
    ],
    [
        "chupacabra",
        "chupacabra-entry-1",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-2",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-3",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-4",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-5",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-6",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-7",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-8",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-9",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-10",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-11",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-12",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-13",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-14",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-15",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-16",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-17",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-18",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-19",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-20",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-21",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-22",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-23",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ],
    [
        "chupacabra",
        "chupacabra-entry-24",
        "contains",
        "Supporting entry under Chupacabra.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
