/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "archaeological-mysteries",
        "name": "Archaeological mysteries",
        "type": "topic",
        "short_description": "Lost cities, undeciphered scripts, disputed artifacts, and discoveries that refuse neat consensus.",
        "description": "Lost cities, undeciphered scripts, disputed artifacts, and discoveries that refuse neat consensus. This Ton-o-Lore subject maps people, places, events, and ideas tied to Archaeological mysteries so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "archaeological-mysteries-figures",
        "name": "Archaeological mysteries figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Archaeological mysteries.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Archaeological mysteries."
    },
    {
        "slug": "archaeological-mysteries-world",
        "name": "Archaeological mysteries world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Archaeological mysteries.",
        "description": "Geography, institutions, and periodization that give Archaeological mysteries its encyclopedia shape."
    },
    {
        "slug": "archaeological-mysteries-places",
        "name": "Archaeological mysteries places",
        "type": "place",
        "short_description": "Locations and geographies that frame Archaeological mysteries.",
        "description": "Places, regions, and built sites that give Archaeological mysteries its map — where events and figures concentrate."
    },
    {
        "slug": "archaeological-mysteries-events",
        "name": "Archaeological mysteries events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Archaeological mysteries.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Archaeological mysteries timeline."
    },
    {
        "slug": "archaeological-mysteries-objects",
        "name": "Archaeological mysteries objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Archaeological mysteries.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Archaeological mysteries."
    },
    {
        "slug": "archaeological-mysteries-factions",
        "name": "Archaeological mysteries factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Archaeological mysteries.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Archaeological mysteries."
    },
    {
        "slug": "archaeological-mysteries-concepts",
        "name": "Archaeological mysteries concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Archaeological mysteries.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Archaeological mysteries readable as a lore graph."
    },
    {
        "slug": "archaeological-mysteries-eras",
        "name": "Archaeological mysteries eras",
        "type": "event",
        "short_description": "Periodization for Archaeological mysteries.",
        "description": "Named eras and phases that help readers track how Archaeological mysteries changes across time."
    },
    {
        "slug": "archaeological-mysteries-works",
        "name": "Archaeological mysteries works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Archaeological mysteries.",
        "description": "Primary works and adaptations through which most audiences encounter Archaeological mysteries."
    },
    {
        "slug": "archaeological-mysteries-symbols",
        "name": "Archaeological mysteries symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Archaeological mysteries.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Archaeological mysteries."
    },
    {
        "slug": "archaeological-mysteries-controversies",
        "name": "Archaeological mysteries controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Archaeological mysteries.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Archaeological mysteries argumentative."
    },
    {
        "slug": "archaeological-mysteries-sources",
        "name": "Archaeological mysteries sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Archaeological mysteries.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Archaeological mysteries."
    },
    {
        "slug": "archaeological-mysteries-geography",
        "name": "Archaeological mysteries geography",
        "type": "place",
        "short_description": "Broader geographic framing for Archaeological mysteries.",
        "description": "Regions, routes, and spatial systems that situate Archaeological mysteries beyond single named places."
    },
    {
        "slug": "archaeological-mysteries-legacy",
        "name": "Archaeological mysteries legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Archaeological mysteries.",
        "description": "How Archaeological mysteries continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "archaeological-mysteries",
        "archaeological-mysteries-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-places",
        "contains",
        "Archaeological mysteries places is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-events",
        "contains",
        "Archaeological mysteries events is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-objects",
        "contains",
        "Archaeological mysteries objects & artifacts is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-factions",
        "contains",
        "Archaeological mysteries factions & groups is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-concepts",
        "contains",
        "Archaeological mysteries concepts is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-eras",
        "contains",
        "Archaeological mysteries eras is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-works",
        "contains",
        "Archaeological mysteries works & media is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-symbols",
        "contains",
        "Archaeological mysteries symbols is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-controversies",
        "contains",
        "Archaeological mysteries controversies is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-sources",
        "contains",
        "Archaeological mysteries sources is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-geography",
        "contains",
        "Archaeological mysteries geography is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ],
    [
        "archaeological-mysteries",
        "archaeological-mysteries-legacy",
        "contains",
        "Archaeological mysteries legacy is a primary trailhead under Archaeological mysteries.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
