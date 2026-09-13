/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ghost-ships",
        "name": "Ghost ships",
        "type": "topic",
        "short_description": "Abandoned or vanished vessels, crews, voyages, sightings, theories, and the discoveries that reopen cold cases at sea.",
        "description": "Abandoned or vanished vessels, crews, voyages, sightings, theories, and the discoveries that reopen cold cases at sea. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ghost ships so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "ghost-ships-figures",
        "name": "Ghost ships figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ghost ships.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ghost ships."
    },
    {
        "slug": "ghost-ships-world",
        "name": "Ghost ships world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ghost ships.",
        "description": "Geography, institutions, and periodization that give Ghost ships its encyclopedia shape."
    },
    {
        "slug": "ghost-ships-places",
        "name": "Ghost ships places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ghost ships.",
        "description": "Places, regions, and built sites that give Ghost ships its map — where events and figures concentrate."
    },
    {
        "slug": "ghost-ships-events",
        "name": "Ghost ships events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ghost ships.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ghost ships timeline."
    },
    {
        "slug": "ghost-ships-objects",
        "name": "Ghost ships objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ghost ships.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ghost ships."
    },
    {
        "slug": "ghost-ships-factions",
        "name": "Ghost ships factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ghost ships.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ghost ships."
    },
    {
        "slug": "ghost-ships-concepts",
        "name": "Ghost ships concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ghost ships.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ghost ships readable as a lore graph."
    },
    {
        "slug": "ghost-ships-eras",
        "name": "Ghost ships eras",
        "type": "event",
        "short_description": "Periodization for Ghost ships.",
        "description": "Named eras and phases that help readers track how Ghost ships changes across time."
    },
    {
        "slug": "ghost-ships-works",
        "name": "Ghost ships works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ghost ships.",
        "description": "Primary works and adaptations through which most audiences encounter Ghost ships."
    },
    {
        "slug": "ghost-ships-symbols",
        "name": "Ghost ships symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ghost ships.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ghost ships."
    },
    {
        "slug": "ghost-ships-controversies",
        "name": "Ghost ships controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ghost ships.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ghost ships argumentative."
    },
    {
        "slug": "ghost-ships-sources",
        "name": "Ghost ships sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ghost ships.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ghost ships."
    },
    {
        "slug": "ghost-ships-geography",
        "name": "Ghost ships geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ghost ships.",
        "description": "Regions, routes, and spatial systems that situate Ghost ships beyond single named places."
    },
    {
        "slug": "ghost-ships-legacy",
        "name": "Ghost ships legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ghost ships.",
        "description": "How Ghost ships continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "ghost-ships",
        "ghost-ships-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ghost-ships",
        "ghost-ships-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ghost-ships",
        "ghost-ships-places",
        "contains",
        "Ghost ships places is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-events",
        "contains",
        "Ghost ships events is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-objects",
        "contains",
        "Ghost ships objects & artifacts is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-factions",
        "contains",
        "Ghost ships factions & groups is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-concepts",
        "contains",
        "Ghost ships concepts is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-eras",
        "contains",
        "Ghost ships eras is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-works",
        "contains",
        "Ghost ships works & media is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-symbols",
        "contains",
        "Ghost ships symbols is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-controversies",
        "contains",
        "Ghost ships controversies is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-sources",
        "contains",
        "Ghost ships sources is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-geography",
        "contains",
        "Ghost ships geography is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ],
    [
        "ghost-ships",
        "ghost-ships-legacy",
        "contains",
        "Ghost ships legacy is a primary trailhead under Ghost ships.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
