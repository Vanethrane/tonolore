/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "he-man-motu",
        "name": "Masters of the Universe",
        "type": "topic",
        "short_description": "Eternia, Castle Grayskull, and the sword-and-sorcery toy myth of He-Man and Skeletor.",
        "description": "Eternia, Castle Grayskull, and the sword-and-sorcery toy myth of He-Man and Skeletor. This Ton-o-Lore subject maps people, places, events, and ideas tied to Masters of the Universe so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "he-man-motu-figures",
        "name": "Masters of the Universe figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Masters of the Universe.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Masters of the Universe."
    },
    {
        "slug": "he-man-motu-world",
        "name": "Masters of the Universe world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Masters of the Universe.",
        "description": "Geography, institutions, and periodization that give Masters of the Universe its encyclopedia shape."
    },
    {
        "slug": "he-man-motu-places",
        "name": "Masters of the Universe places",
        "type": "place",
        "short_description": "Locations and geographies that frame Masters of the Universe.",
        "description": "Places, regions, and built sites that give Masters of the Universe its map — where events and figures concentrate."
    },
    {
        "slug": "he-man-motu-events",
        "name": "Masters of the Universe events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Masters of the Universe.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Masters of the Universe timeline."
    },
    {
        "slug": "he-man-motu-objects",
        "name": "Masters of the Universe objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Masters of the Universe.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Masters of the Universe."
    },
    {
        "slug": "he-man-motu-factions",
        "name": "Masters of the Universe factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Masters of the Universe.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Masters of the Universe."
    },
    {
        "slug": "he-man-motu-concepts",
        "name": "Masters of the Universe concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Masters of the Universe.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Masters of the Universe readable as a lore graph."
    },
    {
        "slug": "he-man-motu-eras",
        "name": "Masters of the Universe eras",
        "type": "event",
        "short_description": "Periodization for Masters of the Universe.",
        "description": "Named eras and phases that help readers track how Masters of the Universe changes across time."
    },
    {
        "slug": "he-man-motu-works",
        "name": "Masters of the Universe works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Masters of the Universe.",
        "description": "Primary works and adaptations through which most audiences encounter Masters of the Universe."
    },
    {
        "slug": "he-man-motu-symbols",
        "name": "Masters of the Universe symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Masters of the Universe.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Masters of the Universe."
    },
    {
        "slug": "he-man-motu-controversies",
        "name": "Masters of the Universe controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Masters of the Universe.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Masters of the Universe argumentative."
    },
    {
        "slug": "he-man-motu-sources",
        "name": "Masters of the Universe sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Masters of the Universe.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Masters of the Universe."
    },
    {
        "slug": "he-man-motu-geography",
        "name": "Masters of the Universe geography",
        "type": "place",
        "short_description": "Broader geographic framing for Masters of the Universe.",
        "description": "Regions, routes, and spatial systems that situate Masters of the Universe beyond single named places."
    },
    {
        "slug": "he-man-motu-legacy",
        "name": "Masters of the Universe legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Masters of the Universe.",
        "description": "How Masters of the Universe continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "he-man-motu-practices",
        "name": "Masters of the Universe practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Masters of the Universe.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Masters of the Universe."
    },
    {
        "slug": "he-man-motu-entry-1",
        "name": "Masters of the Universe entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-2",
        "name": "Masters of the Universe entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-3",
        "name": "Masters of the Universe entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-4",
        "name": "Masters of the Universe entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-5",
        "name": "Masters of the Universe entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-6",
        "name": "Masters of the Universe entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-7",
        "name": "Masters of the Universe entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-8",
        "name": "Masters of the Universe entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-9",
        "name": "Masters of the Universe entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-10",
        "name": "Masters of the Universe entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-11",
        "name": "Masters of the Universe entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-12",
        "name": "Masters of the Universe entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-13",
        "name": "Masters of the Universe entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-14",
        "name": "Masters of the Universe entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-15",
        "name": "Masters of the Universe entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-16",
        "name": "Masters of the Universe entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-17",
        "name": "Masters of the Universe entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-18",
        "name": "Masters of the Universe entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-19",
        "name": "Masters of the Universe entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-20",
        "name": "Masters of the Universe entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-21",
        "name": "Masters of the Universe entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-22",
        "name": "Masters of the Universe entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-23",
        "name": "Masters of the Universe entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "he-man-motu-entry-24",
        "name": "Masters of the Universe entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Masters of the Universe.",
        "description": "A supporting encyclopedia entry in the Masters of the Universe subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "he-man-motu",
        "he-man-motu-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "he-man-motu",
        "he-man-motu-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "he-man-motu",
        "he-man-motu-places",
        "contains",
        "Masters of the Universe places is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-events",
        "contains",
        "Masters of the Universe events is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-objects",
        "contains",
        "Masters of the Universe objects & artifacts is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-factions",
        "contains",
        "Masters of the Universe factions & groups is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-concepts",
        "contains",
        "Masters of the Universe concepts is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-eras",
        "contains",
        "Masters of the Universe eras is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-works",
        "contains",
        "Masters of the Universe works & media is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-symbols",
        "contains",
        "Masters of the Universe symbols is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-controversies",
        "contains",
        "Masters of the Universe controversies is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-sources",
        "contains",
        "Masters of the Universe sources is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-geography",
        "contains",
        "Masters of the Universe geography is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-legacy",
        "contains",
        "Masters of the Universe legacy is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-practices",
        "contains",
        "Masters of the Universe practices is a primary trailhead under Masters of the Universe.",
        0.88,
        0.82
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-1",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-2",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-3",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-4",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-5",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-6",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-7",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-8",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-9",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-10",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-11",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-12",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-13",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-14",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-15",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-16",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-17",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-18",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-19",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-20",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-21",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-22",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-23",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ],
    [
        "he-man-motu",
        "he-man-motu-entry-24",
        "contains",
        "Supporting entry under Masters of the Universe.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
