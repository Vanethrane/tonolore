/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "coast-guard-history",
        "name": "Coast Guard history",
        "type": "topic",
        "short_description": "Rescue, enforcement, and the service traditions that police and save at the shore.",
        "description": "Rescue, enforcement, and the service traditions that police and save at the shore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Coast Guard history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "coast-guard-history-figures",
        "name": "Coast Guard history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Coast Guard history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Coast Guard history."
    },
    {
        "slug": "coast-guard-history-world",
        "name": "Coast Guard history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Coast Guard history.",
        "description": "Geography, institutions, and periodization that give Coast Guard history its encyclopedia shape."
    },
    {
        "slug": "coast-guard-history-places",
        "name": "Coast Guard history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Coast Guard history.",
        "description": "Places, regions, and built sites that give Coast Guard history its map — where events and figures concentrate."
    },
    {
        "slug": "coast-guard-history-events",
        "name": "Coast Guard history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Coast Guard history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Coast Guard history timeline."
    },
    {
        "slug": "coast-guard-history-objects",
        "name": "Coast Guard history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Coast Guard history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Coast Guard history."
    },
    {
        "slug": "coast-guard-history-factions",
        "name": "Coast Guard history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Coast Guard history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Coast Guard history."
    },
    {
        "slug": "coast-guard-history-concepts",
        "name": "Coast Guard history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Coast Guard history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Coast Guard history readable as a lore graph."
    },
    {
        "slug": "coast-guard-history-eras",
        "name": "Coast Guard history eras",
        "type": "event",
        "short_description": "Periodization for Coast Guard history.",
        "description": "Named eras and phases that help readers track how Coast Guard history changes across time."
    },
    {
        "slug": "coast-guard-history-works",
        "name": "Coast Guard history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Coast Guard history.",
        "description": "Primary works and adaptations through which most audiences encounter Coast Guard history."
    },
    {
        "slug": "coast-guard-history-symbols",
        "name": "Coast Guard history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Coast Guard history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Coast Guard history."
    },
    {
        "slug": "coast-guard-history-controversies",
        "name": "Coast Guard history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Coast Guard history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Coast Guard history argumentative."
    },
    {
        "slug": "coast-guard-history-sources",
        "name": "Coast Guard history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Coast Guard history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Coast Guard history."
    },
    {
        "slug": "coast-guard-history-geography",
        "name": "Coast Guard history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Coast Guard history.",
        "description": "Regions, routes, and spatial systems that situate Coast Guard history beyond single named places."
    },
    {
        "slug": "coast-guard-history-legacy",
        "name": "Coast Guard history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Coast Guard history.",
        "description": "How Coast Guard history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "coast-guard-history-practices",
        "name": "Coast Guard history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Coast Guard history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Coast Guard history."
    },
    {
        "slug": "coast-guard-history-entry-1",
        "name": "Coast Guard history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-2",
        "name": "Coast Guard history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-3",
        "name": "Coast Guard history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-4",
        "name": "Coast Guard history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-5",
        "name": "Coast Guard history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-6",
        "name": "Coast Guard history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-7",
        "name": "Coast Guard history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-8",
        "name": "Coast Guard history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-9",
        "name": "Coast Guard history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-10",
        "name": "Coast Guard history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-11",
        "name": "Coast Guard history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-12",
        "name": "Coast Guard history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-13",
        "name": "Coast Guard history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-14",
        "name": "Coast Guard history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-15",
        "name": "Coast Guard history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-16",
        "name": "Coast Guard history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-17",
        "name": "Coast Guard history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-18",
        "name": "Coast Guard history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-19",
        "name": "Coast Guard history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-20",
        "name": "Coast Guard history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-21",
        "name": "Coast Guard history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-22",
        "name": "Coast Guard history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-23",
        "name": "Coast Guard history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coast-guard-history-entry-24",
        "name": "Coast Guard history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coast Guard history.",
        "description": "A supporting encyclopedia entry in the Coast Guard history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "coast-guard-history",
        "coast-guard-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "coast-guard-history",
        "coast-guard-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "coast-guard-history",
        "coast-guard-history-places",
        "contains",
        "Coast Guard history places is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-events",
        "contains",
        "Coast Guard history events is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-objects",
        "contains",
        "Coast Guard history objects & artifacts is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-factions",
        "contains",
        "Coast Guard history factions & groups is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-concepts",
        "contains",
        "Coast Guard history concepts is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-eras",
        "contains",
        "Coast Guard history eras is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-works",
        "contains",
        "Coast Guard history works & media is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-symbols",
        "contains",
        "Coast Guard history symbols is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-controversies",
        "contains",
        "Coast Guard history controversies is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-sources",
        "contains",
        "Coast Guard history sources is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-geography",
        "contains",
        "Coast Guard history geography is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-legacy",
        "contains",
        "Coast Guard history legacy is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-practices",
        "contains",
        "Coast Guard history practices is a primary trailhead under Coast Guard history.",
        0.88,
        0.82
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-1",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-2",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-3",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-4",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-5",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-6",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-7",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-8",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-9",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-10",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-11",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-12",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-13",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-14",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-15",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-16",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-17",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-18",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-19",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-20",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-21",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-22",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-23",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ],
    [
        "coast-guard-history",
        "coast-guard-history-entry-24",
        "contains",
        "Supporting entry under Coast Guard history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
