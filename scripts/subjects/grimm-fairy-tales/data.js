/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "grimm-fairy-tales",
        "name": "Grimm fairy tales",
        "type": "topic",
        "short_description": "Collected German Märchen, dark morals, and the sibling folklorists who shaped children’s canon.",
        "description": "Collected German Märchen, dark morals, and the sibling folklorists who shaped children’s canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Grimm fairy tales so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "grimm-fairy-tales-figures",
        "name": "Grimm fairy tales figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Grimm fairy tales.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Grimm fairy tales."
    },
    {
        "slug": "grimm-fairy-tales-world",
        "name": "Grimm fairy tales world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Grimm fairy tales.",
        "description": "Geography, institutions, and periodization that give Grimm fairy tales its encyclopedia shape."
    },
    {
        "slug": "grimm-fairy-tales-places",
        "name": "Grimm fairy tales places",
        "type": "place",
        "short_description": "Locations and geographies that frame Grimm fairy tales.",
        "description": "Places, regions, and built sites that give Grimm fairy tales its map — where events and figures concentrate."
    },
    {
        "slug": "grimm-fairy-tales-events",
        "name": "Grimm fairy tales events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Grimm fairy tales.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Grimm fairy tales timeline."
    },
    {
        "slug": "grimm-fairy-tales-objects",
        "name": "Grimm fairy tales objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Grimm fairy tales.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Grimm fairy tales."
    },
    {
        "slug": "grimm-fairy-tales-factions",
        "name": "Grimm fairy tales factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Grimm fairy tales.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Grimm fairy tales."
    },
    {
        "slug": "grimm-fairy-tales-concepts",
        "name": "Grimm fairy tales concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Grimm fairy tales.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Grimm fairy tales readable as a lore graph."
    },
    {
        "slug": "grimm-fairy-tales-eras",
        "name": "Grimm fairy tales eras",
        "type": "event",
        "short_description": "Periodization for Grimm fairy tales.",
        "description": "Named eras and phases that help readers track how Grimm fairy tales changes across time."
    },
    {
        "slug": "grimm-fairy-tales-works",
        "name": "Grimm fairy tales works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Grimm fairy tales.",
        "description": "Primary works and adaptations through which most audiences encounter Grimm fairy tales."
    },
    {
        "slug": "grimm-fairy-tales-symbols",
        "name": "Grimm fairy tales symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Grimm fairy tales.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Grimm fairy tales."
    },
    {
        "slug": "grimm-fairy-tales-controversies",
        "name": "Grimm fairy tales controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Grimm fairy tales.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Grimm fairy tales argumentative."
    },
    {
        "slug": "grimm-fairy-tales-sources",
        "name": "Grimm fairy tales sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Grimm fairy tales.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Grimm fairy tales."
    },
    {
        "slug": "grimm-fairy-tales-geography",
        "name": "Grimm fairy tales geography",
        "type": "place",
        "short_description": "Broader geographic framing for Grimm fairy tales.",
        "description": "Regions, routes, and spatial systems that situate Grimm fairy tales beyond single named places."
    },
    {
        "slug": "grimm-fairy-tales-legacy",
        "name": "Grimm fairy tales legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Grimm fairy tales.",
        "description": "How Grimm fairy tales continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "grimm-fairy-tales-practices",
        "name": "Grimm fairy tales practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Grimm fairy tales.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Grimm fairy tales."
    },
    {
        "slug": "grimm-fairy-tales-entry-1",
        "name": "Grimm fairy tales entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-2",
        "name": "Grimm fairy tales entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-3",
        "name": "Grimm fairy tales entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-4",
        "name": "Grimm fairy tales entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-5",
        "name": "Grimm fairy tales entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-6",
        "name": "Grimm fairy tales entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-7",
        "name": "Grimm fairy tales entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-8",
        "name": "Grimm fairy tales entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-9",
        "name": "Grimm fairy tales entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-10",
        "name": "Grimm fairy tales entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-11",
        "name": "Grimm fairy tales entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-12",
        "name": "Grimm fairy tales entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-13",
        "name": "Grimm fairy tales entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-14",
        "name": "Grimm fairy tales entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-15",
        "name": "Grimm fairy tales entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-16",
        "name": "Grimm fairy tales entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-17",
        "name": "Grimm fairy tales entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-18",
        "name": "Grimm fairy tales entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-19",
        "name": "Grimm fairy tales entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-20",
        "name": "Grimm fairy tales entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-21",
        "name": "Grimm fairy tales entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-22",
        "name": "Grimm fairy tales entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-23",
        "name": "Grimm fairy tales entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "grimm-fairy-tales-entry-24",
        "name": "Grimm fairy tales entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Grimm fairy tales.",
        "description": "A supporting encyclopedia entry in the Grimm fairy tales subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-places",
        "contains",
        "Grimm fairy tales places is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-events",
        "contains",
        "Grimm fairy tales events is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-objects",
        "contains",
        "Grimm fairy tales objects & artifacts is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-factions",
        "contains",
        "Grimm fairy tales factions & groups is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-concepts",
        "contains",
        "Grimm fairy tales concepts is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-eras",
        "contains",
        "Grimm fairy tales eras is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-works",
        "contains",
        "Grimm fairy tales works & media is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-symbols",
        "contains",
        "Grimm fairy tales symbols is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-controversies",
        "contains",
        "Grimm fairy tales controversies is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-sources",
        "contains",
        "Grimm fairy tales sources is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-geography",
        "contains",
        "Grimm fairy tales geography is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-legacy",
        "contains",
        "Grimm fairy tales legacy is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-practices",
        "contains",
        "Grimm fairy tales practices is a primary trailhead under Grimm fairy tales.",
        0.88,
        0.82
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-1",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-2",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-3",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-4",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-5",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-6",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-7",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-8",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-9",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-10",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-11",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-12",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-13",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-14",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-15",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-16",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-17",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-18",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-19",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-20",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-21",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-22",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-23",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ],
    [
        "grimm-fairy-tales",
        "grimm-fairy-tales-entry-24",
        "contains",
        "Supporting entry under Grimm fairy tales.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
