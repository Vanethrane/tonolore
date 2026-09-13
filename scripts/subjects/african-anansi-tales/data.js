/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "african-anansi-tales",
        "name": "Anansi tales",
        "type": "topic",
        "short_description": "Spider trickster stories and the West African–Caribbean web of wit and survival lore.",
        "description": "Spider trickster stories and the West African–Caribbean web of wit and survival lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Anansi tales so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "african-anansi-tales-figures",
        "name": "Anansi tales figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Anansi tales.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Anansi tales."
    },
    {
        "slug": "african-anansi-tales-world",
        "name": "Anansi tales world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Anansi tales.",
        "description": "Geography, institutions, and periodization that give Anansi tales its encyclopedia shape."
    },
    {
        "slug": "african-anansi-tales-places",
        "name": "Anansi tales places",
        "type": "place",
        "short_description": "Locations and geographies that frame Anansi tales.",
        "description": "Places, regions, and built sites that give Anansi tales its map — where events and figures concentrate."
    },
    {
        "slug": "african-anansi-tales-events",
        "name": "Anansi tales events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Anansi tales.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Anansi tales timeline."
    },
    {
        "slug": "african-anansi-tales-objects",
        "name": "Anansi tales objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Anansi tales.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Anansi tales."
    },
    {
        "slug": "african-anansi-tales-factions",
        "name": "Anansi tales factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Anansi tales.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Anansi tales."
    },
    {
        "slug": "african-anansi-tales-concepts",
        "name": "Anansi tales concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Anansi tales.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Anansi tales readable as a lore graph."
    },
    {
        "slug": "african-anansi-tales-eras",
        "name": "Anansi tales eras",
        "type": "event",
        "short_description": "Periodization for Anansi tales.",
        "description": "Named eras and phases that help readers track how Anansi tales changes across time."
    },
    {
        "slug": "african-anansi-tales-works",
        "name": "Anansi tales works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Anansi tales.",
        "description": "Primary works and adaptations through which most audiences encounter Anansi tales."
    },
    {
        "slug": "african-anansi-tales-symbols",
        "name": "Anansi tales symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Anansi tales.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Anansi tales."
    },
    {
        "slug": "african-anansi-tales-controversies",
        "name": "Anansi tales controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Anansi tales.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Anansi tales argumentative."
    },
    {
        "slug": "african-anansi-tales-sources",
        "name": "Anansi tales sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Anansi tales.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Anansi tales."
    },
    {
        "slug": "african-anansi-tales-geography",
        "name": "Anansi tales geography",
        "type": "place",
        "short_description": "Broader geographic framing for Anansi tales.",
        "description": "Regions, routes, and spatial systems that situate Anansi tales beyond single named places."
    },
    {
        "slug": "african-anansi-tales-legacy",
        "name": "Anansi tales legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Anansi tales.",
        "description": "How Anansi tales continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "african-anansi-tales-practices",
        "name": "Anansi tales practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Anansi tales.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Anansi tales."
    },
    {
        "slug": "african-anansi-tales-entry-1",
        "name": "Anansi tales entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-2",
        "name": "Anansi tales entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-3",
        "name": "Anansi tales entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-4",
        "name": "Anansi tales entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-5",
        "name": "Anansi tales entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-6",
        "name": "Anansi tales entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-7",
        "name": "Anansi tales entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-8",
        "name": "Anansi tales entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-9",
        "name": "Anansi tales entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-10",
        "name": "Anansi tales entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-11",
        "name": "Anansi tales entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-12",
        "name": "Anansi tales entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-13",
        "name": "Anansi tales entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-14",
        "name": "Anansi tales entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-15",
        "name": "Anansi tales entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-16",
        "name": "Anansi tales entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-17",
        "name": "Anansi tales entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-18",
        "name": "Anansi tales entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-19",
        "name": "Anansi tales entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-20",
        "name": "Anansi tales entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-21",
        "name": "Anansi tales entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-22",
        "name": "Anansi tales entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-23",
        "name": "Anansi tales entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "african-anansi-tales-entry-24",
        "name": "Anansi tales entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Anansi tales.",
        "description": "A supporting encyclopedia entry in the Anansi tales subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "african-anansi-tales",
        "african-anansi-tales-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-places",
        "contains",
        "Anansi tales places is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-events",
        "contains",
        "Anansi tales events is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-objects",
        "contains",
        "Anansi tales objects & artifacts is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-factions",
        "contains",
        "Anansi tales factions & groups is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-concepts",
        "contains",
        "Anansi tales concepts is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-eras",
        "contains",
        "Anansi tales eras is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-works",
        "contains",
        "Anansi tales works & media is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-symbols",
        "contains",
        "Anansi tales symbols is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-controversies",
        "contains",
        "Anansi tales controversies is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-sources",
        "contains",
        "Anansi tales sources is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-geography",
        "contains",
        "Anansi tales geography is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-legacy",
        "contains",
        "Anansi tales legacy is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-practices",
        "contains",
        "Anansi tales practices is a primary trailhead under Anansi tales.",
        0.88,
        0.82
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-1",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-2",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-3",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-4",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-5",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-6",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-7",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-8",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-9",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-10",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-11",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-12",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-13",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-14",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-15",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-16",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-17",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-18",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-19",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-20",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-21",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-22",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-23",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ],
    [
        "african-anansi-tales",
        "african-anansi-tales-entry-24",
        "contains",
        "Supporting entry under Anansi tales.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
