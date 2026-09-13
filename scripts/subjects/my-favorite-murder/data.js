/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "my-favorite-murder",
        "name": "My Favorite Murder",
        "type": "topic",
        "short_description": "True-crime comedy, SSDGM culture, and the fan community that grew around weekly cases.",
        "description": "True-crime comedy, SSDGM culture, and the fan community that grew around weekly cases. This Ton-o-Lore subject maps people, places, events, and ideas tied to My Favorite Murder so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "my-favorite-murder-figures",
        "name": "My Favorite Murder figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to My Favorite Murder.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring My Favorite Murder."
    },
    {
        "slug": "my-favorite-murder-world",
        "name": "My Favorite Murder world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame My Favorite Murder.",
        "description": "Geography, institutions, and periodization that give My Favorite Murder its encyclopedia shape."
    },
    {
        "slug": "my-favorite-murder-places",
        "name": "My Favorite Murder places",
        "type": "place",
        "short_description": "Locations and geographies that frame My Favorite Murder.",
        "description": "Places, regions, and built sites that give My Favorite Murder its map — where events and figures concentrate."
    },
    {
        "slug": "my-favorite-murder-events",
        "name": "My Favorite Murder events",
        "type": "event",
        "short_description": "Turning points and dated episodes in My Favorite Murder.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the My Favorite Murder timeline."
    },
    {
        "slug": "my-favorite-murder-objects",
        "name": "My Favorite Murder objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to My Favorite Murder.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through My Favorite Murder."
    },
    {
        "slug": "my-favorite-murder-factions",
        "name": "My Favorite Murder factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside My Favorite Murder.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in My Favorite Murder."
    },
    {
        "slug": "my-favorite-murder-concepts",
        "name": "My Favorite Murder concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize My Favorite Murder.",
        "description": "Keywords, doctrines, systems, and abstract forces that make My Favorite Murder readable as a lore graph."
    },
    {
        "slug": "my-favorite-murder-eras",
        "name": "My Favorite Murder eras",
        "type": "event",
        "short_description": "Periodization for My Favorite Murder.",
        "description": "Named eras and phases that help readers track how My Favorite Murder changes across time."
    },
    {
        "slug": "my-favorite-murder-works",
        "name": "My Favorite Murder works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry My Favorite Murder.",
        "description": "Primary works and adaptations through which most audiences encounter My Favorite Murder."
    },
    {
        "slug": "my-favorite-murder-symbols",
        "name": "My Favorite Murder symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with My Favorite Murder.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside My Favorite Murder."
    },
    {
        "slug": "my-favorite-murder-controversies",
        "name": "My Favorite Murder controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in My Favorite Murder.",
        "description": "Debates, rival canons, scandals, and contested facts that keep My Favorite Murder argumentative."
    },
    {
        "slug": "my-favorite-murder-sources",
        "name": "My Favorite Murder sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into My Favorite Murder.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify My Favorite Murder."
    },
    {
        "slug": "my-favorite-murder-geography",
        "name": "My Favorite Murder geography",
        "type": "place",
        "short_description": "Broader geographic framing for My Favorite Murder.",
        "description": "Regions, routes, and spatial systems that situate My Favorite Murder beyond single named places."
    },
    {
        "slug": "my-favorite-murder-legacy",
        "name": "My Favorite Murder legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of My Favorite Murder.",
        "description": "How My Favorite Murder continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "my-favorite-murder-practices",
        "name": "My Favorite Murder practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in My Favorite Murder.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in My Favorite Murder."
    },
    {
        "slug": "my-favorite-murder-entry-1",
        "name": "My Favorite Murder entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-2",
        "name": "My Favorite Murder entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-3",
        "name": "My Favorite Murder entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-4",
        "name": "My Favorite Murder entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-5",
        "name": "My Favorite Murder entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-6",
        "name": "My Favorite Murder entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-7",
        "name": "My Favorite Murder entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-8",
        "name": "My Favorite Murder entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-9",
        "name": "My Favorite Murder entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-10",
        "name": "My Favorite Murder entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-11",
        "name": "My Favorite Murder entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-12",
        "name": "My Favorite Murder entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-13",
        "name": "My Favorite Murder entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-14",
        "name": "My Favorite Murder entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-15",
        "name": "My Favorite Murder entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-16",
        "name": "My Favorite Murder entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-17",
        "name": "My Favorite Murder entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-18",
        "name": "My Favorite Murder entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-19",
        "name": "My Favorite Murder entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-20",
        "name": "My Favorite Murder entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-21",
        "name": "My Favorite Murder entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-22",
        "name": "My Favorite Murder entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-23",
        "name": "My Favorite Murder entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "my-favorite-murder-entry-24",
        "name": "My Favorite Murder entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside My Favorite Murder.",
        "description": "A supporting encyclopedia entry in the My Favorite Murder subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "my-favorite-murder",
        "my-favorite-murder-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-places",
        "contains",
        "My Favorite Murder places is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-events",
        "contains",
        "My Favorite Murder events is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-objects",
        "contains",
        "My Favorite Murder objects & artifacts is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-factions",
        "contains",
        "My Favorite Murder factions & groups is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-concepts",
        "contains",
        "My Favorite Murder concepts is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-eras",
        "contains",
        "My Favorite Murder eras is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-works",
        "contains",
        "My Favorite Murder works & media is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-symbols",
        "contains",
        "My Favorite Murder symbols is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-controversies",
        "contains",
        "My Favorite Murder controversies is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-sources",
        "contains",
        "My Favorite Murder sources is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-geography",
        "contains",
        "My Favorite Murder geography is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-legacy",
        "contains",
        "My Favorite Murder legacy is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-practices",
        "contains",
        "My Favorite Murder practices is a primary trailhead under My Favorite Murder.",
        0.88,
        0.82
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-1",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-2",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-3",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-4",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-5",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-6",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-7",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-8",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-9",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-10",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-11",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-12",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-13",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-14",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-15",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-16",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-17",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-18",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-19",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-20",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-21",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-22",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-23",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ],
    [
        "my-favorite-murder",
        "my-favorite-murder-entry-24",
        "contains",
        "Supporting entry under My Favorite Murder.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
