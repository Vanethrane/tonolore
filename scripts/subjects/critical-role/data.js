/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "critical-role",
        "name": "Critical Role",
        "type": "topic",
        "short_description": "Actual-play campaigns that became a multimedia fantasy franchise.",
        "description": "Actual-play campaigns that became a multimedia fantasy franchise. This Ton-o-Lore subject maps people, places, events, and ideas tied to Critical Role so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "critical-role-figures",
        "name": "Critical Role figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Critical Role.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Critical Role."
    },
    {
        "slug": "critical-role-world",
        "name": "Critical Role world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Critical Role.",
        "description": "Geography, institutions, and periodization that give Critical Role its encyclopedia shape."
    },
    {
        "slug": "critical-role-places",
        "name": "Critical Role places",
        "type": "place",
        "short_description": "Locations and geographies that frame Critical Role.",
        "description": "Places, regions, and built sites that give Critical Role its map — where events and figures concentrate."
    },
    {
        "slug": "critical-role-events",
        "name": "Critical Role events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Critical Role.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Critical Role timeline."
    },
    {
        "slug": "critical-role-objects",
        "name": "Critical Role objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Critical Role.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Critical Role."
    },
    {
        "slug": "critical-role-factions",
        "name": "Critical Role factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Critical Role.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Critical Role."
    },
    {
        "slug": "critical-role-concepts",
        "name": "Critical Role concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Critical Role.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Critical Role readable as a lore graph."
    },
    {
        "slug": "critical-role-eras",
        "name": "Critical Role eras",
        "type": "event",
        "short_description": "Periodization for Critical Role.",
        "description": "Named eras and phases that help readers track how Critical Role changes across time."
    },
    {
        "slug": "critical-role-works",
        "name": "Critical Role works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Critical Role.",
        "description": "Primary works and adaptations through which most audiences encounter Critical Role."
    },
    {
        "slug": "critical-role-symbols",
        "name": "Critical Role symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Critical Role.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Critical Role."
    },
    {
        "slug": "critical-role-controversies",
        "name": "Critical Role controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Critical Role.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Critical Role argumentative."
    },
    {
        "slug": "critical-role-sources",
        "name": "Critical Role sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Critical Role.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Critical Role."
    },
    {
        "slug": "critical-role-geography",
        "name": "Critical Role geography",
        "type": "place",
        "short_description": "Broader geographic framing for Critical Role.",
        "description": "Regions, routes, and spatial systems that situate Critical Role beyond single named places."
    },
    {
        "slug": "critical-role-legacy",
        "name": "Critical Role legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Critical Role.",
        "description": "How Critical Role continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "critical-role",
        "critical-role-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "critical-role",
        "critical-role-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "critical-role",
        "critical-role-places",
        "contains",
        "Critical Role places is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-events",
        "contains",
        "Critical Role events is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-objects",
        "contains",
        "Critical Role objects & artifacts is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-factions",
        "contains",
        "Critical Role factions & groups is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-concepts",
        "contains",
        "Critical Role concepts is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-eras",
        "contains",
        "Critical Role eras is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-works",
        "contains",
        "Critical Role works & media is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-symbols",
        "contains",
        "Critical Role symbols is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-controversies",
        "contains",
        "Critical Role controversies is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-sources",
        "contains",
        "Critical Role sources is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-geography",
        "contains",
        "Critical Role geography is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ],
    [
        "critical-role",
        "critical-role-legacy",
        "contains",
        "Critical Role legacy is a primary trailhead under Critical Role.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
