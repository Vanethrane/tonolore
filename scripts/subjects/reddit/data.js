/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "reddit",
        "name": "Reddit",
        "type": "topic",
        "short_description": "Subreddits, AMAs, upvote culture, and the forum graph that midwifed a decade of memes.",
        "description": "Subreddits, AMAs, upvote culture, and the forum graph that midwifed a decade of memes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Reddit so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "reddit-figures",
        "name": "Reddit figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Reddit.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Reddit."
    },
    {
        "slug": "reddit-world",
        "name": "Reddit world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Reddit.",
        "description": "Geography, institutions, and periodization that give Reddit its encyclopedia shape."
    },
    {
        "slug": "reddit-places",
        "name": "Reddit places",
        "type": "place",
        "short_description": "Locations and geographies that frame Reddit.",
        "description": "Places, regions, and built sites that give Reddit its map — where events and figures concentrate."
    },
    {
        "slug": "reddit-events",
        "name": "Reddit events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Reddit.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Reddit timeline."
    },
    {
        "slug": "reddit-objects",
        "name": "Reddit objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Reddit.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Reddit."
    },
    {
        "slug": "reddit-factions",
        "name": "Reddit factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Reddit.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Reddit."
    },
    {
        "slug": "reddit-concepts",
        "name": "Reddit concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Reddit.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Reddit readable as a lore graph."
    },
    {
        "slug": "reddit-eras",
        "name": "Reddit eras",
        "type": "event",
        "short_description": "Periodization for Reddit.",
        "description": "Named eras and phases that help readers track how Reddit changes across time."
    },
    {
        "slug": "reddit-works",
        "name": "Reddit works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Reddit.",
        "description": "Primary works and adaptations through which most audiences encounter Reddit."
    },
    {
        "slug": "reddit-symbols",
        "name": "Reddit symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Reddit.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Reddit."
    },
    {
        "slug": "reddit-controversies",
        "name": "Reddit controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Reddit.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Reddit argumentative."
    },
    {
        "slug": "reddit-sources",
        "name": "Reddit sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Reddit.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Reddit."
    },
    {
        "slug": "reddit-geography",
        "name": "Reddit geography",
        "type": "place",
        "short_description": "Broader geographic framing for Reddit.",
        "description": "Regions, routes, and spatial systems that situate Reddit beyond single named places."
    },
    {
        "slug": "reddit-legacy",
        "name": "Reddit legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Reddit.",
        "description": "How Reddit continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "reddit",
        "reddit-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "reddit",
        "reddit-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "reddit",
        "reddit-places",
        "contains",
        "Reddit places is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-events",
        "contains",
        "Reddit events is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-objects",
        "contains",
        "Reddit objects & artifacts is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-factions",
        "contains",
        "Reddit factions & groups is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-concepts",
        "contains",
        "Reddit concepts is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-eras",
        "contains",
        "Reddit eras is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-works",
        "contains",
        "Reddit works & media is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-symbols",
        "contains",
        "Reddit symbols is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-controversies",
        "contains",
        "Reddit controversies is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-sources",
        "contains",
        "Reddit sources is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-geography",
        "contains",
        "Reddit geography is a primary trailhead under Reddit.",
        0.88,
        0.82
    ],
    [
        "reddit",
        "reddit-legacy",
        "contains",
        "Reddit legacy is a primary trailhead under Reddit.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
