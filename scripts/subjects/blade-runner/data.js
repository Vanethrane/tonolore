/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "blade-runner",
        "name": "Blade Runner",
        "type": "topic",
        "short_description": "Replicants, neon noir, and Philip K. Dick-rooted futures of memory and personhood.",
        "description": "Replicants, neon noir, and Philip K. Dick-rooted futures of memory and personhood. This Ton-o-Lore subject maps people, places, events, and ideas tied to Blade Runner so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "blade-runner-figures",
        "name": "Blade Runner figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Blade Runner.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Blade Runner."
    },
    {
        "slug": "blade-runner-world",
        "name": "Blade Runner world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Blade Runner.",
        "description": "Geography, institutions, and periodization that give Blade Runner its encyclopedia shape."
    },
    {
        "slug": "blade-runner-places",
        "name": "Blade Runner places",
        "type": "place",
        "short_description": "Locations and geographies that frame Blade Runner.",
        "description": "Places, regions, and built sites that give Blade Runner its map — where events and figures concentrate."
    },
    {
        "slug": "blade-runner-events",
        "name": "Blade Runner events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Blade Runner.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Blade Runner timeline."
    },
    {
        "slug": "blade-runner-objects",
        "name": "Blade Runner objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Blade Runner.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Blade Runner."
    },
    {
        "slug": "blade-runner-factions",
        "name": "Blade Runner factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Blade Runner.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Blade Runner."
    },
    {
        "slug": "blade-runner-concepts",
        "name": "Blade Runner concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Blade Runner.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Blade Runner readable as a lore graph."
    },
    {
        "slug": "blade-runner-eras",
        "name": "Blade Runner eras",
        "type": "event",
        "short_description": "Periodization for Blade Runner.",
        "description": "Named eras and phases that help readers track how Blade Runner changes across time."
    },
    {
        "slug": "blade-runner-works",
        "name": "Blade Runner works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Blade Runner.",
        "description": "Primary works and adaptations through which most audiences encounter Blade Runner."
    },
    {
        "slug": "blade-runner-symbols",
        "name": "Blade Runner symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Blade Runner.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Blade Runner."
    },
    {
        "slug": "blade-runner-controversies",
        "name": "Blade Runner controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Blade Runner.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Blade Runner argumentative."
    },
    {
        "slug": "blade-runner-sources",
        "name": "Blade Runner sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Blade Runner.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Blade Runner."
    },
    {
        "slug": "blade-runner-geography",
        "name": "Blade Runner geography",
        "type": "place",
        "short_description": "Broader geographic framing for Blade Runner.",
        "description": "Regions, routes, and spatial systems that situate Blade Runner beyond single named places."
    },
    {
        "slug": "blade-runner-legacy",
        "name": "Blade Runner legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Blade Runner.",
        "description": "How Blade Runner continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "blade-runner-practices",
        "name": "Blade Runner practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Blade Runner.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Blade Runner."
    },
    {
        "slug": "blade-runner-entry-1",
        "name": "Blade Runner entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-2",
        "name": "Blade Runner entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-3",
        "name": "Blade Runner entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-4",
        "name": "Blade Runner entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-5",
        "name": "Blade Runner entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-6",
        "name": "Blade Runner entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-7",
        "name": "Blade Runner entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-8",
        "name": "Blade Runner entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-9",
        "name": "Blade Runner entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-10",
        "name": "Blade Runner entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-11",
        "name": "Blade Runner entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-12",
        "name": "Blade Runner entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-13",
        "name": "Blade Runner entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-14",
        "name": "Blade Runner entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-15",
        "name": "Blade Runner entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-16",
        "name": "Blade Runner entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-17",
        "name": "Blade Runner entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-18",
        "name": "Blade Runner entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-19",
        "name": "Blade Runner entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-20",
        "name": "Blade Runner entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-21",
        "name": "Blade Runner entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-22",
        "name": "Blade Runner entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-23",
        "name": "Blade Runner entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blade-runner-entry-24",
        "name": "Blade Runner entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Blade Runner.",
        "description": "A supporting encyclopedia entry in the Blade Runner subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "blade-runner",
        "blade-runner-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "blade-runner",
        "blade-runner-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "blade-runner",
        "blade-runner-places",
        "contains",
        "Blade Runner places is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-events",
        "contains",
        "Blade Runner events is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-objects",
        "contains",
        "Blade Runner objects & artifacts is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-factions",
        "contains",
        "Blade Runner factions & groups is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-concepts",
        "contains",
        "Blade Runner concepts is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-eras",
        "contains",
        "Blade Runner eras is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-works",
        "contains",
        "Blade Runner works & media is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-symbols",
        "contains",
        "Blade Runner symbols is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-controversies",
        "contains",
        "Blade Runner controversies is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-sources",
        "contains",
        "Blade Runner sources is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-geography",
        "contains",
        "Blade Runner geography is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-legacy",
        "contains",
        "Blade Runner legacy is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-practices",
        "contains",
        "Blade Runner practices is a primary trailhead under Blade Runner.",
        0.88,
        0.82
    ],
    [
        "blade-runner",
        "blade-runner-entry-1",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-2",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-3",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-4",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-5",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-6",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-7",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-8",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-9",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-10",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-11",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-12",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-13",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-14",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-15",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-16",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-17",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-18",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-19",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-20",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-21",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-22",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-23",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ],
    [
        "blade-runner",
        "blade-runner-entry-24",
        "contains",
        "Supporting entry under Blade Runner.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
