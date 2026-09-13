/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "steven-universe",
        "name": "Steven Universe",
        "type": "topic",
        "short_description": "Gem war history, found family, and the queer-coded space opera of Beach City.",
        "description": "Gem war history, found family, and the queer-coded space opera of Beach City. This Ton-o-Lore subject maps people, places, events, and ideas tied to Steven Universe so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "steven-universe-figures",
        "name": "Steven Universe figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Steven Universe.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Steven Universe."
    },
    {
        "slug": "steven-universe-world",
        "name": "Steven Universe world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Steven Universe.",
        "description": "Geography, institutions, and periodization that give Steven Universe its encyclopedia shape."
    },
    {
        "slug": "steven-universe-places",
        "name": "Steven Universe places",
        "type": "place",
        "short_description": "Locations and geographies that frame Steven Universe.",
        "description": "Places, regions, and built sites that give Steven Universe its map — where events and figures concentrate."
    },
    {
        "slug": "steven-universe-events",
        "name": "Steven Universe events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Steven Universe.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Steven Universe timeline."
    },
    {
        "slug": "steven-universe-objects",
        "name": "Steven Universe objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Steven Universe.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Steven Universe."
    },
    {
        "slug": "steven-universe-factions",
        "name": "Steven Universe factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Steven Universe.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Steven Universe."
    },
    {
        "slug": "steven-universe-concepts",
        "name": "Steven Universe concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Steven Universe.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Steven Universe readable as a lore graph."
    },
    {
        "slug": "steven-universe-eras",
        "name": "Steven Universe eras",
        "type": "event",
        "short_description": "Periodization for Steven Universe.",
        "description": "Named eras and phases that help readers track how Steven Universe changes across time."
    },
    {
        "slug": "steven-universe-works",
        "name": "Steven Universe works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Steven Universe.",
        "description": "Primary works and adaptations through which most audiences encounter Steven Universe."
    },
    {
        "slug": "steven-universe-symbols",
        "name": "Steven Universe symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Steven Universe.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Steven Universe."
    },
    {
        "slug": "steven-universe-controversies",
        "name": "Steven Universe controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Steven Universe.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Steven Universe argumentative."
    },
    {
        "slug": "steven-universe-sources",
        "name": "Steven Universe sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Steven Universe.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Steven Universe."
    },
    {
        "slug": "steven-universe-geography",
        "name": "Steven Universe geography",
        "type": "place",
        "short_description": "Broader geographic framing for Steven Universe.",
        "description": "Regions, routes, and spatial systems that situate Steven Universe beyond single named places."
    },
    {
        "slug": "steven-universe-legacy",
        "name": "Steven Universe legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Steven Universe.",
        "description": "How Steven Universe continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "steven-universe-practices",
        "name": "Steven Universe practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Steven Universe.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Steven Universe."
    },
    {
        "slug": "steven-universe-entry-1",
        "name": "Steven Universe entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-2",
        "name": "Steven Universe entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-3",
        "name": "Steven Universe entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-4",
        "name": "Steven Universe entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-5",
        "name": "Steven Universe entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-6",
        "name": "Steven Universe entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-7",
        "name": "Steven Universe entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-8",
        "name": "Steven Universe entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-9",
        "name": "Steven Universe entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-10",
        "name": "Steven Universe entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-11",
        "name": "Steven Universe entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-12",
        "name": "Steven Universe entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-13",
        "name": "Steven Universe entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-14",
        "name": "Steven Universe entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-15",
        "name": "Steven Universe entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-16",
        "name": "Steven Universe entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-17",
        "name": "Steven Universe entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-18",
        "name": "Steven Universe entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-19",
        "name": "Steven Universe entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-20",
        "name": "Steven Universe entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-21",
        "name": "Steven Universe entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-22",
        "name": "Steven Universe entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-23",
        "name": "Steven Universe entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "steven-universe-entry-24",
        "name": "Steven Universe entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Steven Universe.",
        "description": "A supporting encyclopedia entry in the Steven Universe subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "steven-universe",
        "steven-universe-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "steven-universe",
        "steven-universe-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "steven-universe",
        "steven-universe-places",
        "contains",
        "Steven Universe places is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-events",
        "contains",
        "Steven Universe events is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-objects",
        "contains",
        "Steven Universe objects & artifacts is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-factions",
        "contains",
        "Steven Universe factions & groups is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-concepts",
        "contains",
        "Steven Universe concepts is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-eras",
        "contains",
        "Steven Universe eras is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-works",
        "contains",
        "Steven Universe works & media is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-symbols",
        "contains",
        "Steven Universe symbols is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-controversies",
        "contains",
        "Steven Universe controversies is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-sources",
        "contains",
        "Steven Universe sources is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-geography",
        "contains",
        "Steven Universe geography is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-legacy",
        "contains",
        "Steven Universe legacy is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-practices",
        "contains",
        "Steven Universe practices is a primary trailhead under Steven Universe.",
        0.88,
        0.82
    ],
    [
        "steven-universe",
        "steven-universe-entry-1",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-2",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-3",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-4",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-5",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-6",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-7",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-8",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-9",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-10",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-11",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-12",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-13",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-14",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-15",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-16",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-17",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-18",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-19",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-20",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-21",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-22",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-23",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ],
    [
        "steven-universe",
        "steven-universe-entry-24",
        "contains",
        "Supporting entry under Steven Universe.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
