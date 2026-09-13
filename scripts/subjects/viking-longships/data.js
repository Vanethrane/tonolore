/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "viking-longships",
        "name": "Viking longships",
        "type": "topic",
        "short_description": "Clinker builds, raids, and the Norse vessels that carried warriors across the North Atlantic.",
        "description": "Clinker builds, raids, and the Norse vessels that carried warriors across the North Atlantic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Viking longships so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "viking-longships-figures",
        "name": "Viking longships figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Viking longships.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Viking longships."
    },
    {
        "slug": "viking-longships-world",
        "name": "Viking longships world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Viking longships.",
        "description": "Geography, institutions, and periodization that give Viking longships its encyclopedia shape."
    },
    {
        "slug": "viking-longships-places",
        "name": "Viking longships places",
        "type": "place",
        "short_description": "Locations and geographies that frame Viking longships.",
        "description": "Places, regions, and built sites that give Viking longships its map — where events and figures concentrate."
    },
    {
        "slug": "viking-longships-events",
        "name": "Viking longships events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Viking longships.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Viking longships timeline."
    },
    {
        "slug": "viking-longships-objects",
        "name": "Viking longships objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Viking longships.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Viking longships."
    },
    {
        "slug": "viking-longships-factions",
        "name": "Viking longships factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Viking longships.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Viking longships."
    },
    {
        "slug": "viking-longships-concepts",
        "name": "Viking longships concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Viking longships.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Viking longships readable as a lore graph."
    },
    {
        "slug": "viking-longships-eras",
        "name": "Viking longships eras",
        "type": "event",
        "short_description": "Periodization for Viking longships.",
        "description": "Named eras and phases that help readers track how Viking longships changes across time."
    },
    {
        "slug": "viking-longships-works",
        "name": "Viking longships works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Viking longships.",
        "description": "Primary works and adaptations through which most audiences encounter Viking longships."
    },
    {
        "slug": "viking-longships-symbols",
        "name": "Viking longships symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Viking longships.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Viking longships."
    },
    {
        "slug": "viking-longships-controversies",
        "name": "Viking longships controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Viking longships.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Viking longships argumentative."
    },
    {
        "slug": "viking-longships-sources",
        "name": "Viking longships sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Viking longships.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Viking longships."
    },
    {
        "slug": "viking-longships-geography",
        "name": "Viking longships geography",
        "type": "place",
        "short_description": "Broader geographic framing for Viking longships.",
        "description": "Regions, routes, and spatial systems that situate Viking longships beyond single named places."
    },
    {
        "slug": "viking-longships-legacy",
        "name": "Viking longships legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Viking longships.",
        "description": "How Viking longships continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "viking-longships-practices",
        "name": "Viking longships practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Viking longships.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Viking longships."
    },
    {
        "slug": "viking-longships-entry-1",
        "name": "Viking longships entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-2",
        "name": "Viking longships entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-3",
        "name": "Viking longships entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-4",
        "name": "Viking longships entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-5",
        "name": "Viking longships entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-6",
        "name": "Viking longships entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-7",
        "name": "Viking longships entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-8",
        "name": "Viking longships entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-9",
        "name": "Viking longships entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-10",
        "name": "Viking longships entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-11",
        "name": "Viking longships entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-12",
        "name": "Viking longships entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-13",
        "name": "Viking longships entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-14",
        "name": "Viking longships entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-15",
        "name": "Viking longships entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-16",
        "name": "Viking longships entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-17",
        "name": "Viking longships entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-18",
        "name": "Viking longships entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-19",
        "name": "Viking longships entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-20",
        "name": "Viking longships entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-21",
        "name": "Viking longships entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-22",
        "name": "Viking longships entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-23",
        "name": "Viking longships entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "viking-longships-entry-24",
        "name": "Viking longships entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Viking longships.",
        "description": "A supporting encyclopedia entry in the Viking longships subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "viking-longships",
        "viking-longships-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "viking-longships",
        "viking-longships-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "viking-longships",
        "viking-longships-places",
        "contains",
        "Viking longships places is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-events",
        "contains",
        "Viking longships events is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-objects",
        "contains",
        "Viking longships objects & artifacts is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-factions",
        "contains",
        "Viking longships factions & groups is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-concepts",
        "contains",
        "Viking longships concepts is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-eras",
        "contains",
        "Viking longships eras is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-works",
        "contains",
        "Viking longships works & media is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-symbols",
        "contains",
        "Viking longships symbols is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-controversies",
        "contains",
        "Viking longships controversies is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-sources",
        "contains",
        "Viking longships sources is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-geography",
        "contains",
        "Viking longships geography is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-legacy",
        "contains",
        "Viking longships legacy is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-practices",
        "contains",
        "Viking longships practices is a primary trailhead under Viking longships.",
        0.88,
        0.82
    ],
    [
        "viking-longships",
        "viking-longships-entry-1",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-2",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-3",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-4",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-5",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-6",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-7",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-8",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-9",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-10",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-11",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-12",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-13",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-14",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-15",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-16",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-17",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-18",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-19",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-20",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-21",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-22",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-23",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ],
    [
        "viking-longships",
        "viking-longships-entry-24",
        "contains",
        "Supporting entry under Viking longships.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
