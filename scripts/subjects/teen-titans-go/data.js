/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "teen-titans-go",
        "name": "Teen Titans Go!",
        "type": "topic",
        "short_description": "Irreverent Titans shorts energy, meme pacing, and DC kids’ comedy that outran its source tone.",
        "description": "Irreverent Titans shorts energy, meme pacing, and DC kids’ comedy that outran its source tone. This Ton-o-Lore subject maps people, places, events, and ideas tied to Teen Titans Go! so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "teen-titans-go-figures",
        "name": "Teen Titans Go! figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Teen Titans Go!.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Teen Titans Go!."
    },
    {
        "slug": "teen-titans-go-world",
        "name": "Teen Titans Go! world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Teen Titans Go!.",
        "description": "Geography, institutions, and periodization that give Teen Titans Go! its encyclopedia shape."
    },
    {
        "slug": "teen-titans-go-places",
        "name": "Teen Titans Go! places",
        "type": "place",
        "short_description": "Locations and geographies that frame Teen Titans Go!.",
        "description": "Places, regions, and built sites that give Teen Titans Go! its map — where events and figures concentrate."
    },
    {
        "slug": "teen-titans-go-events",
        "name": "Teen Titans Go! events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Teen Titans Go!.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Teen Titans Go! timeline."
    },
    {
        "slug": "teen-titans-go-objects",
        "name": "Teen Titans Go! objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Teen Titans Go!.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Teen Titans Go!."
    },
    {
        "slug": "teen-titans-go-factions",
        "name": "Teen Titans Go! factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Teen Titans Go!.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Teen Titans Go!."
    },
    {
        "slug": "teen-titans-go-concepts",
        "name": "Teen Titans Go! concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Teen Titans Go!.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Teen Titans Go! readable as a lore graph."
    },
    {
        "slug": "teen-titans-go-eras",
        "name": "Teen Titans Go! eras",
        "type": "event",
        "short_description": "Periodization for Teen Titans Go!.",
        "description": "Named eras and phases that help readers track how Teen Titans Go! changes across time."
    },
    {
        "slug": "teen-titans-go-works",
        "name": "Teen Titans Go! works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Teen Titans Go!.",
        "description": "Primary works and adaptations through which most audiences encounter Teen Titans Go!."
    },
    {
        "slug": "teen-titans-go-symbols",
        "name": "Teen Titans Go! symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Teen Titans Go!.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Teen Titans Go!."
    },
    {
        "slug": "teen-titans-go-controversies",
        "name": "Teen Titans Go! controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Teen Titans Go!.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Teen Titans Go! argumentative."
    },
    {
        "slug": "teen-titans-go-sources",
        "name": "Teen Titans Go! sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Teen Titans Go!.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Teen Titans Go!."
    },
    {
        "slug": "teen-titans-go-geography",
        "name": "Teen Titans Go! geography",
        "type": "place",
        "short_description": "Broader geographic framing for Teen Titans Go!.",
        "description": "Regions, routes, and spatial systems that situate Teen Titans Go! beyond single named places."
    },
    {
        "slug": "teen-titans-go-legacy",
        "name": "Teen Titans Go! legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Teen Titans Go!.",
        "description": "How Teen Titans Go! continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "teen-titans-go-practices",
        "name": "Teen Titans Go! practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Teen Titans Go!.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Teen Titans Go!."
    },
    {
        "slug": "teen-titans-go-entry-1",
        "name": "Teen Titans Go! entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-2",
        "name": "Teen Titans Go! entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-3",
        "name": "Teen Titans Go! entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-4",
        "name": "Teen Titans Go! entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-5",
        "name": "Teen Titans Go! entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-6",
        "name": "Teen Titans Go! entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-7",
        "name": "Teen Titans Go! entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-8",
        "name": "Teen Titans Go! entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-9",
        "name": "Teen Titans Go! entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-10",
        "name": "Teen Titans Go! entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-11",
        "name": "Teen Titans Go! entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-12",
        "name": "Teen Titans Go! entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-13",
        "name": "Teen Titans Go! entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-14",
        "name": "Teen Titans Go! entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-15",
        "name": "Teen Titans Go! entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-16",
        "name": "Teen Titans Go! entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-17",
        "name": "Teen Titans Go! entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-18",
        "name": "Teen Titans Go! entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-19",
        "name": "Teen Titans Go! entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-20",
        "name": "Teen Titans Go! entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-21",
        "name": "Teen Titans Go! entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-22",
        "name": "Teen Titans Go! entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-23",
        "name": "Teen Titans Go! entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teen-titans-go-entry-24",
        "name": "Teen Titans Go! entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Teen Titans Go!.",
        "description": "A supporting encyclopedia entry in the Teen Titans Go! subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "teen-titans-go",
        "teen-titans-go-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "teen-titans-go",
        "teen-titans-go-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "teen-titans-go",
        "teen-titans-go-places",
        "contains",
        "Teen Titans Go! places is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-events",
        "contains",
        "Teen Titans Go! events is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-objects",
        "contains",
        "Teen Titans Go! objects & artifacts is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-factions",
        "contains",
        "Teen Titans Go! factions & groups is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-concepts",
        "contains",
        "Teen Titans Go! concepts is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-eras",
        "contains",
        "Teen Titans Go! eras is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-works",
        "contains",
        "Teen Titans Go! works & media is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-symbols",
        "contains",
        "Teen Titans Go! symbols is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-controversies",
        "contains",
        "Teen Titans Go! controversies is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-sources",
        "contains",
        "Teen Titans Go! sources is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-geography",
        "contains",
        "Teen Titans Go! geography is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-legacy",
        "contains",
        "Teen Titans Go! legacy is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-practices",
        "contains",
        "Teen Titans Go! practices is a primary trailhead under Teen Titans Go!.",
        0.88,
        0.82
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-1",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-2",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-3",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-4",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-5",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-6",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-7",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-8",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-9",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-10",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-11",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-12",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-13",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-14",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-15",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-16",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-17",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-18",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-19",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-20",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-21",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-22",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-23",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ],
    [
        "teen-titans-go",
        "teen-titans-go-entry-24",
        "contains",
        "Supporting entry under Teen Titans Go!.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
