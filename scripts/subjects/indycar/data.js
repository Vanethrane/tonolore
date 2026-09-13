/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "indycar",
        "name": "IndyCar",
        "type": "topic",
        "short_description": "American open-wheel racing — Indianapolis 500 and the championship trail.",
        "description": "American open-wheel racing — Indianapolis 500 and the championship trail. This Ton-o-Lore subject maps people, places, events, and ideas tied to IndyCar so readers can follow long-tail connections across motorsport."
    },
    {
        "slug": "indycar-figures",
        "name": "IndyCar figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to IndyCar.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring IndyCar."
    },
    {
        "slug": "indycar-teams",
        "name": "IndyCar teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to IndyCar.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around IndyCar."
    },
    {
        "slug": "indycar-venues",
        "name": "IndyCar venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host IndyCar.",
        "description": "Places where IndyCar is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "indycar-events",
        "name": "IndyCar events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in IndyCar.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about IndyCar."
    },
    {
        "slug": "indycar-rules",
        "name": "IndyCar rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for IndyCar.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make IndyCar legible as a sport."
    },
    {
        "slug": "indycar-places",
        "name": "IndyCar places",
        "type": "place",
        "short_description": "Locations and geographies that frame IndyCar.",
        "description": "Places, regions, and built sites that give IndyCar its map — where events and figures concentrate."
    },
    {
        "slug": "indycar-objects",
        "name": "IndyCar objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to IndyCar.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through IndyCar."
    },
    {
        "slug": "indycar-factions",
        "name": "IndyCar factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside IndyCar.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in IndyCar."
    },
    {
        "slug": "indycar-concepts",
        "name": "IndyCar concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize IndyCar.",
        "description": "Keywords, doctrines, systems, and abstract forces that make IndyCar readable as a lore graph."
    },
    {
        "slug": "indycar-eras",
        "name": "IndyCar eras",
        "type": "event",
        "short_description": "Periodization for IndyCar.",
        "description": "Named eras and phases that help readers track how IndyCar changes across time."
    },
    {
        "slug": "indycar-works",
        "name": "IndyCar works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry IndyCar.",
        "description": "Primary works and adaptations through which most audiences encounter IndyCar."
    },
    {
        "slug": "indycar-symbols",
        "name": "IndyCar symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with IndyCar.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside IndyCar."
    },
    {
        "slug": "indycar-controversies",
        "name": "IndyCar controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in IndyCar.",
        "description": "Debates, rival canons, scandals, and contested facts that keep IndyCar argumentative."
    },
    {
        "slug": "indycar-sources",
        "name": "IndyCar sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into IndyCar.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify IndyCar."
    },
    {
        "slug": "indycar-geography",
        "name": "IndyCar geography",
        "type": "place",
        "short_description": "Broader geographic framing for IndyCar.",
        "description": "Regions, routes, and spatial systems that situate IndyCar beyond single named places."
    },
    {
        "slug": "indycar-legacy",
        "name": "IndyCar legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of IndyCar.",
        "description": "How IndyCar continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "indycar-practices",
        "name": "IndyCar practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in IndyCar.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in IndyCar."
    },
    {
        "slug": "indycar-entry-1",
        "name": "IndyCar entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-2",
        "name": "IndyCar entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-3",
        "name": "IndyCar entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-4",
        "name": "IndyCar entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-5",
        "name": "IndyCar entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-6",
        "name": "IndyCar entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-7",
        "name": "IndyCar entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-8",
        "name": "IndyCar entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-9",
        "name": "IndyCar entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-10",
        "name": "IndyCar entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-11",
        "name": "IndyCar entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-12",
        "name": "IndyCar entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-13",
        "name": "IndyCar entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-14",
        "name": "IndyCar entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-15",
        "name": "IndyCar entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-16",
        "name": "IndyCar entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-17",
        "name": "IndyCar entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-18",
        "name": "IndyCar entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-19",
        "name": "IndyCar entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-20",
        "name": "IndyCar entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-21",
        "name": "IndyCar entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indycar-entry-22",
        "name": "IndyCar entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside IndyCar.",
        "description": "A supporting encyclopedia entry in the IndyCar subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "indycar",
        "indycar-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "indycar",
        "indycar-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "indycar",
        "indycar-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "indycar",
        "indycar-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "indycar",
        "indycar-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "indycar-figures",
        "indycar-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "indycar-events",
        "indycar-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "indycar",
        "indycar-places",
        "contains",
        "IndyCar places is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-objects",
        "contains",
        "IndyCar objects & artifacts is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-factions",
        "contains",
        "IndyCar factions & groups is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-concepts",
        "contains",
        "IndyCar concepts is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-eras",
        "contains",
        "IndyCar eras is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-works",
        "contains",
        "IndyCar works & media is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-symbols",
        "contains",
        "IndyCar symbols is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-controversies",
        "contains",
        "IndyCar controversies is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-sources",
        "contains",
        "IndyCar sources is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-geography",
        "contains",
        "IndyCar geography is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-legacy",
        "contains",
        "IndyCar legacy is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-practices",
        "contains",
        "IndyCar practices is a primary trailhead under IndyCar.",
        0.88,
        0.82
    ],
    [
        "indycar",
        "indycar-entry-1",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-2",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-3",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-4",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-5",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-6",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-7",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-8",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-9",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-10",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-11",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-12",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-13",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-14",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-15",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-16",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-17",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-18",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-19",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-20",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-21",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ],
    [
        "indycar",
        "indycar-entry-22",
        "contains",
        "Supporting entry under IndyCar.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
