/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "warhammer-age-of-sigmar",
        "name": "Warhammer Age of Sigmar",
        "type": "topic",
        "short_description": "Realms of magic, endless war, and GW’s fantasy reboot of the Old World continuum.",
        "description": "Realms of magic, endless war, and GW’s fantasy reboot of the Old World continuum. This Ton-o-Lore subject maps people, places, events, and ideas tied to Warhammer Age of Sigmar so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "warhammer-age-of-sigmar-figures",
        "name": "Warhammer Age of Sigmar figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Warhammer Age of Sigmar.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Warhammer Age of Sigmar."
    },
    {
        "slug": "warhammer-age-of-sigmar-world",
        "name": "Warhammer Age of Sigmar world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Warhammer Age of Sigmar.",
        "description": "Geography, institutions, and periodization that give Warhammer Age of Sigmar its encyclopedia shape."
    },
    {
        "slug": "warhammer-age-of-sigmar-places",
        "name": "Warhammer Age of Sigmar places",
        "type": "place",
        "short_description": "Locations and geographies that frame Warhammer Age of Sigmar.",
        "description": "Places, regions, and built sites that give Warhammer Age of Sigmar its map — where events and figures concentrate."
    },
    {
        "slug": "warhammer-age-of-sigmar-events",
        "name": "Warhammer Age of Sigmar events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Warhammer Age of Sigmar.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Warhammer Age of Sigmar timeline."
    },
    {
        "slug": "warhammer-age-of-sigmar-objects",
        "name": "Warhammer Age of Sigmar objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Warhammer Age of Sigmar.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Warhammer Age of Sigmar."
    },
    {
        "slug": "warhammer-age-of-sigmar-factions",
        "name": "Warhammer Age of Sigmar factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Warhammer Age of Sigmar.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Warhammer Age of Sigmar."
    },
    {
        "slug": "warhammer-age-of-sigmar-concepts",
        "name": "Warhammer Age of Sigmar concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Warhammer Age of Sigmar.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Warhammer Age of Sigmar readable as a lore graph."
    },
    {
        "slug": "warhammer-age-of-sigmar-eras",
        "name": "Warhammer Age of Sigmar eras",
        "type": "event",
        "short_description": "Periodization for Warhammer Age of Sigmar.",
        "description": "Named eras and phases that help readers track how Warhammer Age of Sigmar changes across time."
    },
    {
        "slug": "warhammer-age-of-sigmar-works",
        "name": "Warhammer Age of Sigmar works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Warhammer Age of Sigmar.",
        "description": "Primary works and adaptations through which most audiences encounter Warhammer Age of Sigmar."
    },
    {
        "slug": "warhammer-age-of-sigmar-symbols",
        "name": "Warhammer Age of Sigmar symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Warhammer Age of Sigmar.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Warhammer Age of Sigmar."
    },
    {
        "slug": "warhammer-age-of-sigmar-controversies",
        "name": "Warhammer Age of Sigmar controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Warhammer Age of Sigmar.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Warhammer Age of Sigmar argumentative."
    },
    {
        "slug": "warhammer-age-of-sigmar-sources",
        "name": "Warhammer Age of Sigmar sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Warhammer Age of Sigmar.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Warhammer Age of Sigmar."
    },
    {
        "slug": "warhammer-age-of-sigmar-geography",
        "name": "Warhammer Age of Sigmar geography",
        "type": "place",
        "short_description": "Broader geographic framing for Warhammer Age of Sigmar.",
        "description": "Regions, routes, and spatial systems that situate Warhammer Age of Sigmar beyond single named places."
    },
    {
        "slug": "warhammer-age-of-sigmar-legacy",
        "name": "Warhammer Age of Sigmar legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Warhammer Age of Sigmar.",
        "description": "How Warhammer Age of Sigmar continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "warhammer-age-of-sigmar-practices",
        "name": "Warhammer Age of Sigmar practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Warhammer Age of Sigmar.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Warhammer Age of Sigmar."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-1",
        "name": "Warhammer Age of Sigmar entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-2",
        "name": "Warhammer Age of Sigmar entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-3",
        "name": "Warhammer Age of Sigmar entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-4",
        "name": "Warhammer Age of Sigmar entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-5",
        "name": "Warhammer Age of Sigmar entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-6",
        "name": "Warhammer Age of Sigmar entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-7",
        "name": "Warhammer Age of Sigmar entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-8",
        "name": "Warhammer Age of Sigmar entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-9",
        "name": "Warhammer Age of Sigmar entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-10",
        "name": "Warhammer Age of Sigmar entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-11",
        "name": "Warhammer Age of Sigmar entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-12",
        "name": "Warhammer Age of Sigmar entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-13",
        "name": "Warhammer Age of Sigmar entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-14",
        "name": "Warhammer Age of Sigmar entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-15",
        "name": "Warhammer Age of Sigmar entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-16",
        "name": "Warhammer Age of Sigmar entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-17",
        "name": "Warhammer Age of Sigmar entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-18",
        "name": "Warhammer Age of Sigmar entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-19",
        "name": "Warhammer Age of Sigmar entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-20",
        "name": "Warhammer Age of Sigmar entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-21",
        "name": "Warhammer Age of Sigmar entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-22",
        "name": "Warhammer Age of Sigmar entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-23",
        "name": "Warhammer Age of Sigmar entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "warhammer-age-of-sigmar-entry-24",
        "name": "Warhammer Age of Sigmar entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Warhammer Age of Sigmar.",
        "description": "A supporting encyclopedia entry in the Warhammer Age of Sigmar subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-places",
        "contains",
        "Warhammer Age of Sigmar places is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-events",
        "contains",
        "Warhammer Age of Sigmar events is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-objects",
        "contains",
        "Warhammer Age of Sigmar objects & artifacts is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-factions",
        "contains",
        "Warhammer Age of Sigmar factions & groups is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-concepts",
        "contains",
        "Warhammer Age of Sigmar concepts is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-eras",
        "contains",
        "Warhammer Age of Sigmar eras is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-works",
        "contains",
        "Warhammer Age of Sigmar works & media is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-symbols",
        "contains",
        "Warhammer Age of Sigmar symbols is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-controversies",
        "contains",
        "Warhammer Age of Sigmar controversies is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-sources",
        "contains",
        "Warhammer Age of Sigmar sources is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-geography",
        "contains",
        "Warhammer Age of Sigmar geography is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-legacy",
        "contains",
        "Warhammer Age of Sigmar legacy is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-practices",
        "contains",
        "Warhammer Age of Sigmar practices is a primary trailhead under Warhammer Age of Sigmar.",
        0.88,
        0.82
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-1",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-2",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-3",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-4",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-5",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-6",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-7",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-8",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-9",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-10",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-11",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-12",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-13",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-14",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-15",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-16",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-17",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-18",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-19",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-20",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-21",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-22",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-23",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ],
    [
        "warhammer-age-of-sigmar",
        "warhammer-age-of-sigmar-entry-24",
        "contains",
        "Supporting entry under Warhammer Age of Sigmar.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
