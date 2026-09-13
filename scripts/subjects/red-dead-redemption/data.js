/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "red-dead-redemption",
        "name": "Red Dead Redemption",
        "type": "topic",
        "short_description": "Van der Linde gang, dying West, and Rockstar’s elegiac open-world outlaw saga.",
        "description": "Van der Linde gang, dying West, and Rockstar’s elegiac open-world outlaw saga. This Ton-o-Lore subject maps people, places, events, and ideas tied to Red Dead Redemption so readers can follow long-tail connections across video games."
    },
    {
        "slug": "red-dead-redemption-figures",
        "name": "Red Dead Redemption figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Red Dead Redemption.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Red Dead Redemption."
    },
    {
        "slug": "red-dead-redemption-world",
        "name": "Red Dead Redemption world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Red Dead Redemption.",
        "description": "Geography, institutions, and periodization that give Red Dead Redemption its encyclopedia shape."
    },
    {
        "slug": "red-dead-redemption-places",
        "name": "Red Dead Redemption places",
        "type": "place",
        "short_description": "Locations and geographies that frame Red Dead Redemption.",
        "description": "Places, regions, and built sites that give Red Dead Redemption its map — where events and figures concentrate."
    },
    {
        "slug": "red-dead-redemption-events",
        "name": "Red Dead Redemption events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Red Dead Redemption.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Red Dead Redemption timeline."
    },
    {
        "slug": "red-dead-redemption-objects",
        "name": "Red Dead Redemption objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Red Dead Redemption.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Red Dead Redemption."
    },
    {
        "slug": "red-dead-redemption-factions",
        "name": "Red Dead Redemption factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Red Dead Redemption.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Red Dead Redemption."
    },
    {
        "slug": "red-dead-redemption-concepts",
        "name": "Red Dead Redemption concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Red Dead Redemption.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Red Dead Redemption readable as a lore graph."
    },
    {
        "slug": "red-dead-redemption-eras",
        "name": "Red Dead Redemption eras",
        "type": "event",
        "short_description": "Periodization for Red Dead Redemption.",
        "description": "Named eras and phases that help readers track how Red Dead Redemption changes across time."
    },
    {
        "slug": "red-dead-redemption-works",
        "name": "Red Dead Redemption works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Red Dead Redemption.",
        "description": "Primary works and adaptations through which most audiences encounter Red Dead Redemption."
    },
    {
        "slug": "red-dead-redemption-symbols",
        "name": "Red Dead Redemption symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Red Dead Redemption.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Red Dead Redemption."
    },
    {
        "slug": "red-dead-redemption-controversies",
        "name": "Red Dead Redemption controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Red Dead Redemption.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Red Dead Redemption argumentative."
    },
    {
        "slug": "red-dead-redemption-sources",
        "name": "Red Dead Redemption sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Red Dead Redemption.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Red Dead Redemption."
    },
    {
        "slug": "red-dead-redemption-geography",
        "name": "Red Dead Redemption geography",
        "type": "place",
        "short_description": "Broader geographic framing for Red Dead Redemption.",
        "description": "Regions, routes, and spatial systems that situate Red Dead Redemption beyond single named places."
    },
    {
        "slug": "red-dead-redemption-legacy",
        "name": "Red Dead Redemption legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Red Dead Redemption.",
        "description": "How Red Dead Redemption continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "red-dead-redemption-practices",
        "name": "Red Dead Redemption practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Red Dead Redemption.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Red Dead Redemption."
    },
    {
        "slug": "red-dead-redemption-entry-1",
        "name": "Red Dead Redemption entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-2",
        "name": "Red Dead Redemption entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-3",
        "name": "Red Dead Redemption entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-4",
        "name": "Red Dead Redemption entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-5",
        "name": "Red Dead Redemption entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-6",
        "name": "Red Dead Redemption entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-7",
        "name": "Red Dead Redemption entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-8",
        "name": "Red Dead Redemption entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-9",
        "name": "Red Dead Redemption entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-10",
        "name": "Red Dead Redemption entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-11",
        "name": "Red Dead Redemption entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-12",
        "name": "Red Dead Redemption entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-13",
        "name": "Red Dead Redemption entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-14",
        "name": "Red Dead Redemption entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-15",
        "name": "Red Dead Redemption entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-16",
        "name": "Red Dead Redemption entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-17",
        "name": "Red Dead Redemption entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-18",
        "name": "Red Dead Redemption entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-19",
        "name": "Red Dead Redemption entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-20",
        "name": "Red Dead Redemption entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-21",
        "name": "Red Dead Redemption entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-22",
        "name": "Red Dead Redemption entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-23",
        "name": "Red Dead Redemption entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "red-dead-redemption-entry-24",
        "name": "Red Dead Redemption entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Red Dead Redemption.",
        "description": "A supporting encyclopedia entry in the Red Dead Redemption subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "red-dead-redemption",
        "red-dead-redemption-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-places",
        "contains",
        "Red Dead Redemption places is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-events",
        "contains",
        "Red Dead Redemption events is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-objects",
        "contains",
        "Red Dead Redemption objects & artifacts is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-factions",
        "contains",
        "Red Dead Redemption factions & groups is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-concepts",
        "contains",
        "Red Dead Redemption concepts is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-eras",
        "contains",
        "Red Dead Redemption eras is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-works",
        "contains",
        "Red Dead Redemption works & media is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-symbols",
        "contains",
        "Red Dead Redemption symbols is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-controversies",
        "contains",
        "Red Dead Redemption controversies is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-sources",
        "contains",
        "Red Dead Redemption sources is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-geography",
        "contains",
        "Red Dead Redemption geography is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-legacy",
        "contains",
        "Red Dead Redemption legacy is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-practices",
        "contains",
        "Red Dead Redemption practices is a primary trailhead under Red Dead Redemption.",
        0.88,
        0.82
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-1",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-2",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-3",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-4",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-5",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-6",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-7",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-8",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-9",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-10",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-11",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-12",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-13",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-14",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-15",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-16",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-17",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-18",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-19",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-20",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-21",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-22",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-23",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ],
    [
        "red-dead-redemption",
        "red-dead-redemption-entry-24",
        "contains",
        "Supporting entry under Red Dead Redemption.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
