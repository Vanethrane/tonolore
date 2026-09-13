/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pokemon-tcg-competitive",
        "name": "Pokémon TCG competitive eras",
        "type": "topic",
        "short_description": "Formats, rotation, and the championship lore of the Pokémon Trading Card Game.",
        "description": "Formats, rotation, and the championship lore of the Pokémon Trading Card Game. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pokémon TCG competitive eras so readers can follow long-tail connections across card games."
    },
    {
        "slug": "pokemon-tcg-competitive-figures",
        "name": "Pokémon TCG competitive eras figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pokémon TCG competitive eras.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pokémon TCG competitive eras."
    },
    {
        "slug": "pokemon-tcg-competitive-world",
        "name": "Pokémon TCG competitive eras world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pokémon TCG competitive eras.",
        "description": "Geography, institutions, and periodization that give Pokémon TCG competitive eras its encyclopedia shape."
    },
    {
        "slug": "pokemon-tcg-competitive-places",
        "name": "Pokémon TCG competitive eras places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pokémon TCG competitive eras.",
        "description": "Places, regions, and built sites that give Pokémon TCG competitive eras its map — where events and figures concentrate."
    },
    {
        "slug": "pokemon-tcg-competitive-events",
        "name": "Pokémon TCG competitive eras events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pokémon TCG competitive eras.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pokémon TCG competitive eras timeline."
    },
    {
        "slug": "pokemon-tcg-competitive-objects",
        "name": "Pokémon TCG competitive eras objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pokémon TCG competitive eras.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pokémon TCG competitive eras."
    },
    {
        "slug": "pokemon-tcg-competitive-factions",
        "name": "Pokémon TCG competitive eras factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pokémon TCG competitive eras.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pokémon TCG competitive eras."
    },
    {
        "slug": "pokemon-tcg-competitive-concepts",
        "name": "Pokémon TCG competitive eras concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pokémon TCG competitive eras.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pokémon TCG competitive eras readable as a lore graph."
    },
    {
        "slug": "pokemon-tcg-competitive-eras",
        "name": "Pokémon TCG competitive eras eras",
        "type": "event",
        "short_description": "Periodization for Pokémon TCG competitive eras.",
        "description": "Named eras and phases that help readers track how Pokémon TCG competitive eras changes across time."
    },
    {
        "slug": "pokemon-tcg-competitive-works",
        "name": "Pokémon TCG competitive eras works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pokémon TCG competitive eras.",
        "description": "Primary works and adaptations through which most audiences encounter Pokémon TCG competitive eras."
    },
    {
        "slug": "pokemon-tcg-competitive-symbols",
        "name": "Pokémon TCG competitive eras symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pokémon TCG competitive eras.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pokémon TCG competitive eras."
    },
    {
        "slug": "pokemon-tcg-competitive-controversies",
        "name": "Pokémon TCG competitive eras controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pokémon TCG competitive eras.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pokémon TCG competitive eras argumentative."
    },
    {
        "slug": "pokemon-tcg-competitive-sources",
        "name": "Pokémon TCG competitive eras sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pokémon TCG competitive eras.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pokémon TCG competitive eras."
    },
    {
        "slug": "pokemon-tcg-competitive-geography",
        "name": "Pokémon TCG competitive eras geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pokémon TCG competitive eras.",
        "description": "Regions, routes, and spatial systems that situate Pokémon TCG competitive eras beyond single named places."
    },
    {
        "slug": "pokemon-tcg-competitive-legacy",
        "name": "Pokémon TCG competitive eras legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pokémon TCG competitive eras.",
        "description": "How Pokémon TCG competitive eras continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pokemon-tcg-competitive-practices",
        "name": "Pokémon TCG competitive eras practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pokémon TCG competitive eras.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pokémon TCG competitive eras."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-1",
        "name": "Pokémon TCG competitive eras entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-2",
        "name": "Pokémon TCG competitive eras entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-3",
        "name": "Pokémon TCG competitive eras entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-4",
        "name": "Pokémon TCG competitive eras entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-5",
        "name": "Pokémon TCG competitive eras entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-6",
        "name": "Pokémon TCG competitive eras entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-7",
        "name": "Pokémon TCG competitive eras entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-8",
        "name": "Pokémon TCG competitive eras entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-9",
        "name": "Pokémon TCG competitive eras entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-10",
        "name": "Pokémon TCG competitive eras entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-11",
        "name": "Pokémon TCG competitive eras entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-12",
        "name": "Pokémon TCG competitive eras entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-13",
        "name": "Pokémon TCG competitive eras entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-14",
        "name": "Pokémon TCG competitive eras entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-15",
        "name": "Pokémon TCG competitive eras entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-16",
        "name": "Pokémon TCG competitive eras entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-17",
        "name": "Pokémon TCG competitive eras entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-18",
        "name": "Pokémon TCG competitive eras entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-19",
        "name": "Pokémon TCG competitive eras entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-20",
        "name": "Pokémon TCG competitive eras entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-21",
        "name": "Pokémon TCG competitive eras entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-22",
        "name": "Pokémon TCG competitive eras entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-23",
        "name": "Pokémon TCG competitive eras entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pokemon-tcg-competitive-entry-24",
        "name": "Pokémon TCG competitive eras entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pokémon TCG competitive eras.",
        "description": "A supporting encyclopedia entry in the Pokémon TCG competitive eras subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-places",
        "contains",
        "Pokémon TCG competitive eras places is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-events",
        "contains",
        "Pokémon TCG competitive eras events is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-objects",
        "contains",
        "Pokémon TCG competitive eras objects & artifacts is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-factions",
        "contains",
        "Pokémon TCG competitive eras factions & groups is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-concepts",
        "contains",
        "Pokémon TCG competitive eras concepts is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-eras",
        "contains",
        "Pokémon TCG competitive eras eras is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-works",
        "contains",
        "Pokémon TCG competitive eras works & media is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-symbols",
        "contains",
        "Pokémon TCG competitive eras symbols is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-controversies",
        "contains",
        "Pokémon TCG competitive eras controversies is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-sources",
        "contains",
        "Pokémon TCG competitive eras sources is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-geography",
        "contains",
        "Pokémon TCG competitive eras geography is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-legacy",
        "contains",
        "Pokémon TCG competitive eras legacy is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-practices",
        "contains",
        "Pokémon TCG competitive eras practices is a primary trailhead under Pokémon TCG competitive eras.",
        0.88,
        0.82
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-1",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-2",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-3",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-4",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-5",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-6",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-7",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-8",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-9",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-10",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-11",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-12",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-13",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-14",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-15",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-16",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-17",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-18",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-19",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-20",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-21",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-22",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-23",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ],
    [
        "pokemon-tcg-competitive",
        "pokemon-tcg-competitive-entry-24",
        "contains",
        "Supporting entry under Pokémon TCG competitive eras.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
