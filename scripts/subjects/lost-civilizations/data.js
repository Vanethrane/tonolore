/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lost-civilizations",
        "name": "Lost civilizations",
        "type": "topic",
        "short_description": "Atlantis myths, Maya, Indus Valley, Minoans, Göbekli Tepe, Cahokia, and other vanished or debated worlds.",
        "description": "Atlantis myths, Maya, Indus Valley, Minoans, Göbekli Tepe, Cahokia, and other vanished or debated worlds. This Ton-o-Lore subject maps people, places, events, and ideas tied to Lost civilizations so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "lost-civilizations-figures",
        "name": "Lost civilizations figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Lost civilizations.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Lost civilizations."
    },
    {
        "slug": "lost-civilizations-world",
        "name": "Lost civilizations world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Lost civilizations.",
        "description": "Geography, institutions, and periodization that give Lost civilizations its encyclopedia shape."
    },
    {
        "slug": "lost-civilizations-places",
        "name": "Lost civilizations places",
        "type": "place",
        "short_description": "Locations and geographies that frame Lost civilizations.",
        "description": "Places, regions, and built sites that give Lost civilizations its map — where events and figures concentrate."
    },
    {
        "slug": "lost-civilizations-events",
        "name": "Lost civilizations events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Lost civilizations.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Lost civilizations timeline."
    },
    {
        "slug": "lost-civilizations-objects",
        "name": "Lost civilizations objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Lost civilizations.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Lost civilizations."
    },
    {
        "slug": "lost-civilizations-factions",
        "name": "Lost civilizations factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Lost civilizations.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Lost civilizations."
    },
    {
        "slug": "lost-civilizations-concepts",
        "name": "Lost civilizations concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Lost civilizations.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Lost civilizations readable as a lore graph."
    },
    {
        "slug": "lost-civilizations-eras",
        "name": "Lost civilizations eras",
        "type": "event",
        "short_description": "Periodization for Lost civilizations.",
        "description": "Named eras and phases that help readers track how Lost civilizations changes across time."
    },
    {
        "slug": "lost-civilizations-works",
        "name": "Lost civilizations works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Lost civilizations.",
        "description": "Primary works and adaptations through which most audiences encounter Lost civilizations."
    },
    {
        "slug": "lost-civilizations-symbols",
        "name": "Lost civilizations symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Lost civilizations.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Lost civilizations."
    },
    {
        "slug": "lost-civilizations-controversies",
        "name": "Lost civilizations controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Lost civilizations.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Lost civilizations argumentative."
    },
    {
        "slug": "lost-civilizations-sources",
        "name": "Lost civilizations sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Lost civilizations.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Lost civilizations."
    },
    {
        "slug": "lost-civilizations-geography",
        "name": "Lost civilizations geography",
        "type": "place",
        "short_description": "Broader geographic framing for Lost civilizations.",
        "description": "Regions, routes, and spatial systems that situate Lost civilizations beyond single named places."
    },
    {
        "slug": "lost-civilizations-legacy",
        "name": "Lost civilizations legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Lost civilizations.",
        "description": "How Lost civilizations continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "lost-civilizations",
        "lost-civilizations-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lost-civilizations",
        "lost-civilizations-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "lost-civilizations",
        "lost-civilizations-places",
        "contains",
        "Lost civilizations places is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-events",
        "contains",
        "Lost civilizations events is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-objects",
        "contains",
        "Lost civilizations objects & artifacts is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-factions",
        "contains",
        "Lost civilizations factions & groups is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-concepts",
        "contains",
        "Lost civilizations concepts is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-eras",
        "contains",
        "Lost civilizations eras is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-works",
        "contains",
        "Lost civilizations works & media is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-symbols",
        "contains",
        "Lost civilizations symbols is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-controversies",
        "contains",
        "Lost civilizations controversies is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-sources",
        "contains",
        "Lost civilizations sources is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-geography",
        "contains",
        "Lost civilizations geography is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ],
    [
        "lost-civilizations",
        "lost-civilizations-legacy",
        "contains",
        "Lost civilizations legacy is a primary trailhead under Lost civilizations.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
