/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "madonna",
        "name": "Madonna",
        "type": "topic",
        "short_description": "Reinvention as method: pop authorship, image cycles, and cultural provocation across decades.",
        "description": "Reinvention as method: pop authorship, image cycles, and cultural provocation across decades. This Ton-o-Lore subject maps people, works, places, and ideas tied to Madonna so readers can follow long-tail connections across the pop tradition."
    },
    {
        "slug": "madonna-catalog",
        "name": "Madonna catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Madonna.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Madonna in the pop tradition."
    },
    {
        "slug": "madonna-era",
        "name": "Madonna eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Madonna story.",
        "description": "Periodization helps encyclopedia readers track how Madonna changed sound, lineup, or public myth across decades of pop history."
    },
    {
        "slug": "madonna-figures",
        "name": "Madonna figures",
        "type": "topic",
        "short_description": "People and named forces central to Madonna.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Madonna."
    },
    {
        "slug": "madonna-places",
        "name": "Madonna places",
        "type": "place",
        "short_description": "Locations and geographies that frame Madonna.",
        "description": "Places, regions, and built sites that give Madonna its map — where events and figures concentrate."
    },
    {
        "slug": "madonna-events",
        "name": "Madonna events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Madonna.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Madonna timeline."
    },
    {
        "slug": "madonna-objects",
        "name": "Madonna objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Madonna.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Madonna."
    },
    {
        "slug": "madonna-factions",
        "name": "Madonna factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Madonna.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Madonna."
    },
    {
        "slug": "madonna-concepts",
        "name": "Madonna concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Madonna.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Madonna readable as a lore graph."
    },
    {
        "slug": "madonna-eras",
        "name": "Madonna eras",
        "type": "event",
        "short_description": "Periodization for Madonna.",
        "description": "Named eras and phases that help readers track how Madonna changes across time."
    },
    {
        "slug": "madonna-works",
        "name": "Madonna works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Madonna.",
        "description": "Primary works and adaptations through which most audiences encounter Madonna."
    },
    {
        "slug": "madonna-symbols",
        "name": "Madonna symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Madonna.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Madonna."
    },
    {
        "slug": "madonna-controversies",
        "name": "Madonna controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Madonna.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Madonna argumentative."
    },
    {
        "slug": "madonna-sources",
        "name": "Madonna sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Madonna.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Madonna."
    },
    {
        "slug": "madonna-geography",
        "name": "Madonna geography",
        "type": "place",
        "short_description": "Broader geographic framing for Madonna.",
        "description": "Regions, routes, and spatial systems that situate Madonna beyond single named places."
    },
    {
        "slug": "madonna-legacy",
        "name": "Madonna legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Madonna.",
        "description": "How Madonna continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "madonna-practices",
        "name": "Madonna practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Madonna.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Madonna."
    },
    {
        "slug": "madonna-entry-1",
        "name": "Madonna entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-2",
        "name": "Madonna entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-3",
        "name": "Madonna entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-4",
        "name": "Madonna entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-5",
        "name": "Madonna entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-6",
        "name": "Madonna entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-7",
        "name": "Madonna entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-8",
        "name": "Madonna entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-9",
        "name": "Madonna entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-10",
        "name": "Madonna entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-11",
        "name": "Madonna entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-12",
        "name": "Madonna entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-13",
        "name": "Madonna entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-14",
        "name": "Madonna entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-15",
        "name": "Madonna entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-16",
        "name": "Madonna entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-17",
        "name": "Madonna entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-18",
        "name": "Madonna entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-19",
        "name": "Madonna entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-20",
        "name": "Madonna entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-21",
        "name": "Madonna entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-22",
        "name": "Madonna entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "madonna-entry-23",
        "name": "Madonna entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Madonna.",
        "description": "A supporting encyclopedia entry in the Madonna subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "madonna",
        "madonna-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "madonna",
        "madonna-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "madonna",
        "madonna-figures",
        "contains",
        "Madonna figures is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-places",
        "contains",
        "Madonna places is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-events",
        "contains",
        "Madonna events is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-objects",
        "contains",
        "Madonna objects & artifacts is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-factions",
        "contains",
        "Madonna factions & groups is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-concepts",
        "contains",
        "Madonna concepts is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-eras",
        "contains",
        "Madonna eras is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-works",
        "contains",
        "Madonna works & media is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-symbols",
        "contains",
        "Madonna symbols is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-controversies",
        "contains",
        "Madonna controversies is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-sources",
        "contains",
        "Madonna sources is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-geography",
        "contains",
        "Madonna geography is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-legacy",
        "contains",
        "Madonna legacy is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-practices",
        "contains",
        "Madonna practices is a primary trailhead under Madonna.",
        0.88,
        0.82
    ],
    [
        "madonna",
        "madonna-entry-1",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-2",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-3",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-4",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-5",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-6",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-7",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-8",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-9",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-10",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-11",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-12",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-13",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-14",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-15",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-16",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-17",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-18",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-19",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-20",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-21",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-22",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ],
    [
        "madonna",
        "madonna-entry-23",
        "contains",
        "Supporting entry under Madonna.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
