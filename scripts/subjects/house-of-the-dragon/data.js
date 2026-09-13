/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "house-of-the-dragon",
        "name": "House of the Dragon",
        "type": "topic",
        "short_description": "Targaryen civil war, dragons returned, and the Game of Thrones prequel of fire and succession.",
        "description": "Targaryen civil war, dragons returned, and the Game of Thrones prequel of fire and succession. This Ton-o-Lore subject maps people, places, events, and ideas tied to House of the Dragon so readers can follow long-tail connections across television."
    },
    {
        "slug": "house-of-the-dragon-figures",
        "name": "House of the Dragon figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to House of the Dragon.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring House of the Dragon."
    },
    {
        "slug": "house-of-the-dragon-world",
        "name": "House of the Dragon world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame House of the Dragon.",
        "description": "Geography, institutions, and periodization that give House of the Dragon its encyclopedia shape."
    },
    {
        "slug": "house-of-the-dragon-places",
        "name": "House of the Dragon places",
        "type": "place",
        "short_description": "Locations and geographies that frame House of the Dragon.",
        "description": "Places, regions, and built sites that give House of the Dragon its map — where events and figures concentrate."
    },
    {
        "slug": "house-of-the-dragon-events",
        "name": "House of the Dragon events",
        "type": "event",
        "short_description": "Turning points and dated episodes in House of the Dragon.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the House of the Dragon timeline."
    },
    {
        "slug": "house-of-the-dragon-objects",
        "name": "House of the Dragon objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to House of the Dragon.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through House of the Dragon."
    },
    {
        "slug": "house-of-the-dragon-factions",
        "name": "House of the Dragon factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside House of the Dragon.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in House of the Dragon."
    },
    {
        "slug": "house-of-the-dragon-concepts",
        "name": "House of the Dragon concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize House of the Dragon.",
        "description": "Keywords, doctrines, systems, and abstract forces that make House of the Dragon readable as a lore graph."
    },
    {
        "slug": "house-of-the-dragon-eras",
        "name": "House of the Dragon eras",
        "type": "event",
        "short_description": "Periodization for House of the Dragon.",
        "description": "Named eras and phases that help readers track how House of the Dragon changes across time."
    },
    {
        "slug": "house-of-the-dragon-works",
        "name": "House of the Dragon works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry House of the Dragon.",
        "description": "Primary works and adaptations through which most audiences encounter House of the Dragon."
    },
    {
        "slug": "house-of-the-dragon-symbols",
        "name": "House of the Dragon symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with House of the Dragon.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside House of the Dragon."
    },
    {
        "slug": "house-of-the-dragon-controversies",
        "name": "House of the Dragon controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in House of the Dragon.",
        "description": "Debates, rival canons, scandals, and contested facts that keep House of the Dragon argumentative."
    },
    {
        "slug": "house-of-the-dragon-sources",
        "name": "House of the Dragon sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into House of the Dragon.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify House of the Dragon."
    },
    {
        "slug": "house-of-the-dragon-geography",
        "name": "House of the Dragon geography",
        "type": "place",
        "short_description": "Broader geographic framing for House of the Dragon.",
        "description": "Regions, routes, and spatial systems that situate House of the Dragon beyond single named places."
    },
    {
        "slug": "house-of-the-dragon-legacy",
        "name": "House of the Dragon legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of House of the Dragon.",
        "description": "How House of the Dragon continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "house-of-the-dragon-practices",
        "name": "House of the Dragon practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in House of the Dragon.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in House of the Dragon."
    },
    {
        "slug": "house-of-the-dragon-entry-1",
        "name": "House of the Dragon entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-2",
        "name": "House of the Dragon entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-3",
        "name": "House of the Dragon entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-4",
        "name": "House of the Dragon entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-5",
        "name": "House of the Dragon entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-6",
        "name": "House of the Dragon entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-7",
        "name": "House of the Dragon entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-8",
        "name": "House of the Dragon entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-9",
        "name": "House of the Dragon entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-10",
        "name": "House of the Dragon entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-11",
        "name": "House of the Dragon entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-12",
        "name": "House of the Dragon entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-13",
        "name": "House of the Dragon entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-14",
        "name": "House of the Dragon entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-15",
        "name": "House of the Dragon entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-16",
        "name": "House of the Dragon entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-17",
        "name": "House of the Dragon entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-18",
        "name": "House of the Dragon entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-19",
        "name": "House of the Dragon entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-20",
        "name": "House of the Dragon entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-21",
        "name": "House of the Dragon entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-22",
        "name": "House of the Dragon entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-23",
        "name": "House of the Dragon entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "house-of-the-dragon-entry-24",
        "name": "House of the Dragon entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside House of the Dragon.",
        "description": "A supporting encyclopedia entry in the House of the Dragon subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "house-of-the-dragon",
        "house-of-the-dragon-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-places",
        "contains",
        "House of the Dragon places is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-events",
        "contains",
        "House of the Dragon events is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-objects",
        "contains",
        "House of the Dragon objects & artifacts is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-factions",
        "contains",
        "House of the Dragon factions & groups is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-concepts",
        "contains",
        "House of the Dragon concepts is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-eras",
        "contains",
        "House of the Dragon eras is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-works",
        "contains",
        "House of the Dragon works & media is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-symbols",
        "contains",
        "House of the Dragon symbols is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-controversies",
        "contains",
        "House of the Dragon controversies is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-sources",
        "contains",
        "House of the Dragon sources is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-geography",
        "contains",
        "House of the Dragon geography is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-legacy",
        "contains",
        "House of the Dragon legacy is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-practices",
        "contains",
        "House of the Dragon practices is a primary trailhead under House of the Dragon.",
        0.88,
        0.82
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-1",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-2",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-3",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-4",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-5",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-6",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-7",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-8",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-9",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-10",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-11",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-12",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-13",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-14",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-15",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-16",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-17",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-18",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-19",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-20",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-21",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-22",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-23",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ],
    [
        "house-of-the-dragon",
        "house-of-the-dragon-entry-24",
        "contains",
        "Supporting entry under House of the Dragon.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
