/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chemistry-elements",
        "name": "Chemistry & the elements",
        "type": "topic",
        "short_description": "Periodic table, reactions, and the elemental language of matter.",
        "description": "Periodic table, reactions, and the elemental language of matter. This Ton-o-Lore subject maps people, places, events, and ideas tied to Chemistry & the elements so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "chemistry-elements-figures",
        "name": "Chemistry & the elements figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Chemistry & the elements.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Chemistry & the elements."
    },
    {
        "slug": "chemistry-elements-world",
        "name": "Chemistry & the elements world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Chemistry & the elements.",
        "description": "Geography, institutions, and periodization that give Chemistry & the elements its encyclopedia shape."
    },
    {
        "slug": "chemistry-elements-places",
        "name": "Chemistry & the elements places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chemistry & the elements.",
        "description": "Places, regions, and built sites that give Chemistry & the elements its map — where events and figures concentrate."
    },
    {
        "slug": "chemistry-elements-events",
        "name": "Chemistry & the elements events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chemistry & the elements.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chemistry & the elements timeline."
    },
    {
        "slug": "chemistry-elements-objects",
        "name": "Chemistry & the elements objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chemistry & the elements.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chemistry & the elements."
    },
    {
        "slug": "chemistry-elements-factions",
        "name": "Chemistry & the elements factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chemistry & the elements.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chemistry & the elements."
    },
    {
        "slug": "chemistry-elements-concepts",
        "name": "Chemistry & the elements concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chemistry & the elements.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chemistry & the elements readable as a lore graph."
    },
    {
        "slug": "chemistry-elements-eras",
        "name": "Chemistry & the elements eras",
        "type": "event",
        "short_description": "Periodization for Chemistry & the elements.",
        "description": "Named eras and phases that help readers track how Chemistry & the elements changes across time."
    },
    {
        "slug": "chemistry-elements-works",
        "name": "Chemistry & the elements works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chemistry & the elements.",
        "description": "Primary works and adaptations through which most audiences encounter Chemistry & the elements."
    },
    {
        "slug": "chemistry-elements-symbols",
        "name": "Chemistry & the elements symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chemistry & the elements.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chemistry & the elements."
    },
    {
        "slug": "chemistry-elements-controversies",
        "name": "Chemistry & the elements controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chemistry & the elements.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chemistry & the elements argumentative."
    },
    {
        "slug": "chemistry-elements-sources",
        "name": "Chemistry & the elements sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chemistry & the elements.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chemistry & the elements."
    },
    {
        "slug": "chemistry-elements-geography",
        "name": "Chemistry & the elements geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chemistry & the elements.",
        "description": "Regions, routes, and spatial systems that situate Chemistry & the elements beyond single named places."
    },
    {
        "slug": "chemistry-elements-legacy",
        "name": "Chemistry & the elements legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Chemistry & the elements.",
        "description": "How Chemistry & the elements continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "chemistry-elements-practices",
        "name": "Chemistry & the elements practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Chemistry & the elements.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Chemistry & the elements."
    },
    {
        "slug": "chemistry-elements-entry-1",
        "name": "Chemistry & the elements entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-2",
        "name": "Chemistry & the elements entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-3",
        "name": "Chemistry & the elements entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-4",
        "name": "Chemistry & the elements entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-5",
        "name": "Chemistry & the elements entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-6",
        "name": "Chemistry & the elements entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-7",
        "name": "Chemistry & the elements entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-8",
        "name": "Chemistry & the elements entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-9",
        "name": "Chemistry & the elements entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-10",
        "name": "Chemistry & the elements entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-11",
        "name": "Chemistry & the elements entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-12",
        "name": "Chemistry & the elements entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-13",
        "name": "Chemistry & the elements entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-14",
        "name": "Chemistry & the elements entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-15",
        "name": "Chemistry & the elements entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-16",
        "name": "Chemistry & the elements entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-17",
        "name": "Chemistry & the elements entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-18",
        "name": "Chemistry & the elements entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-19",
        "name": "Chemistry & the elements entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-20",
        "name": "Chemistry & the elements entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-21",
        "name": "Chemistry & the elements entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-22",
        "name": "Chemistry & the elements entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-23",
        "name": "Chemistry & the elements entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chemistry-elements-entry-24",
        "name": "Chemistry & the elements entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chemistry & the elements.",
        "description": "A supporting encyclopedia entry in the Chemistry & the elements subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "chemistry-elements",
        "chemistry-elements-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "chemistry-elements",
        "chemistry-elements-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "chemistry-elements",
        "chemistry-elements-places",
        "contains",
        "Chemistry & the elements places is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-events",
        "contains",
        "Chemistry & the elements events is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-objects",
        "contains",
        "Chemistry & the elements objects & artifacts is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-factions",
        "contains",
        "Chemistry & the elements factions & groups is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-concepts",
        "contains",
        "Chemistry & the elements concepts is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-eras",
        "contains",
        "Chemistry & the elements eras is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-works",
        "contains",
        "Chemistry & the elements works & media is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-symbols",
        "contains",
        "Chemistry & the elements symbols is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-controversies",
        "contains",
        "Chemistry & the elements controversies is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-sources",
        "contains",
        "Chemistry & the elements sources is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-geography",
        "contains",
        "Chemistry & the elements geography is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-legacy",
        "contains",
        "Chemistry & the elements legacy is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-practices",
        "contains",
        "Chemistry & the elements practices is a primary trailhead under Chemistry & the elements.",
        0.88,
        0.82
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-1",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-2",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-3",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-4",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-5",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-6",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-7",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-8",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-9",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-10",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-11",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-12",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-13",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-14",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-15",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-16",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-17",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-18",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-19",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-20",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-21",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-22",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-23",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ],
    [
        "chemistry-elements",
        "chemistry-elements-entry-24",
        "contains",
        "Supporting entry under Chemistry & the elements.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
