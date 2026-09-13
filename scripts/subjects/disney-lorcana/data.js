/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "disney-lorcana",
        "name": "Disney Lorcana",
        "type": "topic",
        "short_description": "Illumineers, inks, and Disney storybook lore remixed as a collectible card game.",
        "description": "Illumineers, inks, and Disney storybook lore remixed as a collectible card game. This Ton-o-Lore subject maps people, places, products, and ideas tied to Disney Lorcana so readers can follow long-tail connections across the card game hobby."
    },
    {
        "slug": "disney-lorcana-rules",
        "name": "Disney Lorcana rules & formats",
        "type": "topic",
        "short_description": "How Disney Lorcana is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Disney Lorcana."
    },
    {
        "slug": "disney-lorcana-setting",
        "name": "Disney Lorcana setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Disney Lorcana.",
        "description": "The narrative frame around Disney Lorcana — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "disney-lorcana-figures",
        "name": "Disney Lorcana figures",
        "type": "topic",
        "short_description": "People and named forces central to Disney Lorcana.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Disney Lorcana."
    },
    {
        "slug": "disney-lorcana-places",
        "name": "Disney Lorcana places",
        "type": "place",
        "short_description": "Locations and geographies that frame Disney Lorcana.",
        "description": "Places, regions, and built sites that give Disney Lorcana its map — where events and figures concentrate."
    },
    {
        "slug": "disney-lorcana-events",
        "name": "Disney Lorcana events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Disney Lorcana.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Disney Lorcana timeline."
    },
    {
        "slug": "disney-lorcana-objects",
        "name": "Disney Lorcana objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Disney Lorcana.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Disney Lorcana."
    },
    {
        "slug": "disney-lorcana-factions",
        "name": "Disney Lorcana factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Disney Lorcana.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Disney Lorcana."
    },
    {
        "slug": "disney-lorcana-concepts",
        "name": "Disney Lorcana concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Disney Lorcana.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Disney Lorcana readable as a lore graph."
    },
    {
        "slug": "disney-lorcana-eras",
        "name": "Disney Lorcana eras",
        "type": "event",
        "short_description": "Periodization for Disney Lorcana.",
        "description": "Named eras and phases that help readers track how Disney Lorcana changes across time."
    },
    {
        "slug": "disney-lorcana-works",
        "name": "Disney Lorcana works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Disney Lorcana.",
        "description": "Primary works and adaptations through which most audiences encounter Disney Lorcana."
    },
    {
        "slug": "disney-lorcana-symbols",
        "name": "Disney Lorcana symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Disney Lorcana.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Disney Lorcana."
    },
    {
        "slug": "disney-lorcana-controversies",
        "name": "Disney Lorcana controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Disney Lorcana.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Disney Lorcana argumentative."
    },
    {
        "slug": "disney-lorcana-sources",
        "name": "Disney Lorcana sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Disney Lorcana.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Disney Lorcana."
    },
    {
        "slug": "disney-lorcana-geography",
        "name": "Disney Lorcana geography",
        "type": "place",
        "short_description": "Broader geographic framing for Disney Lorcana.",
        "description": "Regions, routes, and spatial systems that situate Disney Lorcana beyond single named places."
    },
    {
        "slug": "disney-lorcana-legacy",
        "name": "Disney Lorcana legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Disney Lorcana.",
        "description": "How Disney Lorcana continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "disney-lorcana-practices",
        "name": "Disney Lorcana practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Disney Lorcana.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Disney Lorcana."
    },
    {
        "slug": "disney-lorcana-entry-1",
        "name": "Disney Lorcana entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-2",
        "name": "Disney Lorcana entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-3",
        "name": "Disney Lorcana entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-4",
        "name": "Disney Lorcana entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-5",
        "name": "Disney Lorcana entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-6",
        "name": "Disney Lorcana entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-7",
        "name": "Disney Lorcana entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-8",
        "name": "Disney Lorcana entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-9",
        "name": "Disney Lorcana entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-10",
        "name": "Disney Lorcana entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-11",
        "name": "Disney Lorcana entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-12",
        "name": "Disney Lorcana entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-13",
        "name": "Disney Lorcana entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-14",
        "name": "Disney Lorcana entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-15",
        "name": "Disney Lorcana entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-16",
        "name": "Disney Lorcana entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-17",
        "name": "Disney Lorcana entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-18",
        "name": "Disney Lorcana entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-19",
        "name": "Disney Lorcana entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-20",
        "name": "Disney Lorcana entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-21",
        "name": "Disney Lorcana entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-22",
        "name": "Disney Lorcana entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "disney-lorcana-entry-23",
        "name": "Disney Lorcana entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Disney Lorcana.",
        "description": "A supporting encyclopedia entry in the Disney Lorcana subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "disney-lorcana",
        "disney-lorcana-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "disney-lorcana",
        "disney-lorcana-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "disney-lorcana",
        "disney-lorcana-figures",
        "contains",
        "Disney Lorcana figures is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-places",
        "contains",
        "Disney Lorcana places is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-events",
        "contains",
        "Disney Lorcana events is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-objects",
        "contains",
        "Disney Lorcana objects & artifacts is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-factions",
        "contains",
        "Disney Lorcana factions & groups is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-concepts",
        "contains",
        "Disney Lorcana concepts is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-eras",
        "contains",
        "Disney Lorcana eras is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-works",
        "contains",
        "Disney Lorcana works & media is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-symbols",
        "contains",
        "Disney Lorcana symbols is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-controversies",
        "contains",
        "Disney Lorcana controversies is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-sources",
        "contains",
        "Disney Lorcana sources is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-geography",
        "contains",
        "Disney Lorcana geography is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-legacy",
        "contains",
        "Disney Lorcana legacy is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-practices",
        "contains",
        "Disney Lorcana practices is a primary trailhead under Disney Lorcana.",
        0.88,
        0.82
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-1",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-2",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-3",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-4",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-5",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-6",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-7",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-8",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-9",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-10",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-11",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-12",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-13",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-14",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-15",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-16",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-17",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-18",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-19",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-20",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-21",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-22",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ],
    [
        "disney-lorcana",
        "disney-lorcana-entry-23",
        "contains",
        "Supporting entry under Disney Lorcana.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
