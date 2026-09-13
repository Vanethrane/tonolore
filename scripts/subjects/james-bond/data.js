/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "james-bond",
        "name": "James Bond",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Ian Fleming's 007 spy franchise across books and film.",
        "description": "James Bond is the espionage franchise begun by Ian Fleming's novels and continued in Eon Productions films starring 007, MI6's best-known double-O agent.",
        "aliases": []
    },
    {
        "slug": "ian-fleming",
        "name": "Ian Fleming",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of James Bond.",
        "description": "Ian Fleming created James Bond in the 1950s novels and short stories that established 007, SPECTRE, and the tone of the spy thriller.",
        "aliases": []
    },
    {
        "slug": "eon-productions",
        "name": "Eon Productions",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Primary producer of Bond films.",
        "description": "Eon Productions, founded by Albert R. Broccoli and Harry Saltzman, produces the official James Bond film series.",
        "aliases": []
    },
    {
        "slug": "albert-r-broccoli",
        "name": "Albert R. Broccoli",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Producer who launched the Bond films.",
        "description": "Albert R. 'Cubby' Broccoli co-founded Eon Productions and shaped the James Bond film franchise for decades.",
        "aliases": []
    },
    {
        "slug": "bond-007",
        "name": "James Bond (007)",
        "type": "person",
        "evidence": "fiction",
        "short_description": "MI6 double-O agent with a licence to kill.",
        "description": "James Bond, agent 007, is MI6's suave operative who confronts global villains, gadgets from Q Branch, and assignments from M.",
        "aliases": []
    },
    {
        "slug": "m",
        "name": "M",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Head of MI6 who assigns Bond's missions.",
        "description": "M is the code name for MI6's chief, the authority who briefs Bond and authorizes his most dangerous operations.",
        "aliases": []
    },
    {
        "slug": "q",
        "name": "Q",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Quartermaster of Q Branch gadgets.",
        "description": "Q is MI6's quartermaster, supplying Bond with cars, gadgets, and dry warnings about bringing the equipment back in one piece.",
        "aliases": []
    },
    {
        "slug": "moneypenny",
        "name": "Miss Moneypenny",
        "type": "person",
        "evidence": "fiction",
        "short_description": "M's secretary and Bond's flirtatious ally.",
        "description": "Miss Moneypenny works for M, trading banter with Bond between briefings and holding the office together.",
        "aliases": []
    },
    {
        "slug": "blofeld",
        "name": "Ernst Stavro Blofeld",
        "type": "person",
        "evidence": "fiction",
        "short_description": "SPECTRE's criminal mastermind.",
        "description": "Ernst Stavro Blofeld is the cat-stroking mastermind of SPECTRE and Bond's most enduring nemesis across novels and films.",
        "aliases": []
    },
    {
        "slug": "goldfinger-character",
        "name": "Auric Goldfinger",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gold-obsessed villain of Goldfinger.",
        "description": "Auric Goldfinger is the wealthy smuggler whose plot against Fort Knox defines one of Bond's classic film showdowns.",
        "aliases": []
    },
    {
        "slug": "oddjob",
        "name": "Oddjob",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Goldfinger's deadly bowler-hatted henchman.",
        "description": "Oddjob is Auric Goldfinger's silent henchman, infamous for a steel-brimmed bowler hat used as a lethal weapon.",
        "aliases": []
    },
    {
        "slug": "felix-leiter",
        "name": "Felix Leiter",
        "type": "person",
        "evidence": "fiction",
        "short_description": "CIA ally who aids Bond.",
        "description": "Felix Leiter is Bond's recurring CIA friend and ally across novels and multiple film eras.",
        "aliases": []
    },
    {
        "slug": "jaws",
        "name": "Jaws",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Steel-toothed henchman of The Spy Who Loved Me.",
        "description": "Jaws is a towering henchman with metal teeth who battles Bond in The Spy Who Loved Me and Moonraker.",
        "aliases": []
    },
    {
        "slug": "sean-connery",
        "name": "Sean Connery",
        "type": "person",
        "evidence": "fiction",
        "short_description": "First major film Bond.",
        "description": "Sean Connery originated the screen James Bond in Dr. No and defined the role's early swagger for Eon Productions.",
        "aliases": []
    },
    {
        "slug": "daniel-craig",
        "name": "Daniel Craig",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bond of Casino Royale through No Time to Die.",
        "description": "Daniel Craig portrayed James Bond from Casino Royale through No Time to Die, grounding the series in a grittier continuity.",
        "aliases": []
    },
    {
        "slug": "roger-moore",
        "name": "Roger Moore",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bond of the 1970s–80s lighter era.",
        "description": "Roger Moore played James Bond across seven films, favoring wit and spectacle in the franchise's mid-classic run.",
        "aliases": []
    },
    {
        "slug": "mi6",
        "name": "MI6",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "British Secret Intelligence Service.",
        "description": "MI6 (Secret Intelligence Service) employs Bond as a double-O agent under M, with Q Branch and Moneypenny in support.",
        "aliases": []
    },
    {
        "slug": "spectre",
        "name": "SPECTRE",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Special Executive for Counter-intelligence, Terrorism, Revenge and Extortion.",
        "description": "SPECTRE is Blofeld's global criminal organization opposing Bond across novels and multiple films.",
        "aliases": []
    },
    {
        "slug": "double-o",
        "name": "00 Section",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Elite MI6 agents with a licence to kill.",
        "description": "The 00 Section designates MI6 agents licensed to kill in the field; Bond's number is 007.",
        "aliases": []
    },
    {
        "slug": "aston-martin",
        "name": "Aston Martin",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Bond's signature sports car marque.",
        "description": "Aston Martin cars, especially the DB5, are James Bond's most iconic vehicles across the film series.",
        "aliases": []
    },
    {
        "slug": "walther-ppk",
        "name": "Walther PPK",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Bond's classic sidearm.",
        "description": "The Walther PPK is James Bond's signature pistol for much of the film series, replacing his earlier Beretta.",
        "aliases": []
    },
    {
        "slug": "licence-to-kill",
        "name": "Licence to kill",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Authority granted to double-O agents.",
        "description": "A licence to kill is the lethal-force authority that defines Bond's 00 status within MI6.",
        "aliases": []
    },
    {
        "slug": "casino-royale",
        "name": "Casino Royale",
        "type": "work",
        "evidence": "fiction",
        "short_description": "First Bond novel; Craig-era film reboot.",
        "description": "Casino Royale introduces Bond in Fleming's first novel and later relaunches Daniel Craig's film era at the baccarat table.",
        "aliases": []
    },
    {
        "slug": "dr-no",
        "name": "Dr. No",
        "type": "work",
        "evidence": "fiction",
        "short_description": "First Eon Bond film starring Sean Connery.",
        "description": "Dr. No launched the Eon Bond films in 1962 with Sean Connery, establishing the series' tone, music, and style.",
        "aliases": []
    },
    {
        "slug": "goldfinger-film",
        "name": "Goldfinger",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Classic film of gold, Oddjob, and the Aston Martin.",
        "description": "Goldfinger is a defining Bond film featuring Auric Goldfinger, Oddjob, and the gadget-laden Aston Martin DB5.",
        "aliases": []
    },
    {
        "slug": "skyfall",
        "name": "Skyfall",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Craig-era film centered on M and Bond's past.",
        "description": "Skyfall follows Bond defending MI6 and M from a vengeful former agent, becoming one of the series' highest-acclaimed entries.",
        "aliases": []
    },
    {
        "slug": "from-russia-with-love",
        "name": "From Russia with Love",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Early Connery film of SPECTRE intrigue.",
        "description": "From Russia with Love sends Bond into a SPECTRE plot involving a Lektor decoder and Cold War romance.",
        "aliases": []
    },
    {
        "slug": "no-time-to-die",
        "name": "No Time to Die",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Craig's final Bond film.",
        "description": "No Time to Die concludes Daniel Craig's Bond arc with Spectre remnants, personal stakes, and a definitive ending.",
        "aliases": []
    },
    {
        "slug": "thunderball",
        "name": "Thunderball",
        "type": "work",
        "evidence": "fiction",
        "short_description": "SPECTRE underwater nuclear blackmail plot.",
        "description": "Thunderball pits Bond against SPECTRE's nuclear extortion scheme in a landmark underwater adventure.",
        "aliases": []
    },
    {
        "slug": "bond-theme",
        "name": "James Bond Theme",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Iconic surf-rock theme of the films.",
        "description": "The James Bond Theme, associated with Monty Norman and John Barry's arrangements, announces 007 across decades of film.",
        "aliases": []
    },
    {
        "slug": "james-bond-figures",
        "name": "James Bond figures",
        "type": "topic",
        "short_description": "People and named forces central to James Bond.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring James Bond."
    },
    {
        "slug": "james-bond-places",
        "name": "James Bond places",
        "type": "place",
        "short_description": "Locations and geographies that frame James Bond.",
        "description": "Places, regions, and built sites that give James Bond its map — where events and figures concentrate."
    },
    {
        "slug": "james-bond-events",
        "name": "James Bond events",
        "type": "event",
        "short_description": "Turning points and dated episodes in James Bond.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the James Bond timeline."
    },
    {
        "slug": "james-bond-objects",
        "name": "James Bond objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to James Bond.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through James Bond."
    },
    {
        "slug": "james-bond-factions",
        "name": "James Bond factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside James Bond.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in James Bond."
    },
    {
        "slug": "james-bond-concepts",
        "name": "James Bond concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize James Bond.",
        "description": "Keywords, doctrines, systems, and abstract forces that make James Bond readable as a lore graph."
    },
    {
        "slug": "james-bond-eras",
        "name": "James Bond eras",
        "type": "event",
        "short_description": "Periodization for James Bond.",
        "description": "Named eras and phases that help readers track how James Bond changes across time."
    },
    {
        "slug": "james-bond-works",
        "name": "James Bond works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry James Bond.",
        "description": "Primary works and adaptations through which most audiences encounter James Bond."
    },
    {
        "slug": "james-bond-symbols",
        "name": "James Bond symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with James Bond.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside James Bond."
    },
    {
        "slug": "james-bond-controversies",
        "name": "James Bond controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in James Bond.",
        "description": "Debates, rival canons, scandals, and contested facts that keep James Bond argumentative."
    }
];

const relationships = [
    [
        "ian-fleming",
        "james-bond",
        "created",
        "Ian Fleming created James Bond.",
        0.99,
        0.99
    ],
    [
        "ian-fleming",
        "casino-royale",
        "created",
        "Fleming wrote Casino Royale, the first Bond novel.",
        0.99,
        0.97
    ],
    [
        "eon-productions",
        "james-bond",
        "produced",
        "Eon Productions produces the Bond films.",
        0.99,
        0.98
    ],
    [
        "albert-r-broccoli",
        "eon-productions",
        "leads",
        "Broccoli co-founded and led Eon Productions.",
        0.98,
        0.95
    ],
    [
        "albert-r-broccoli",
        "dr-no",
        "produced",
        "Broccoli produced Dr. No.",
        0.97,
        0.93
    ],
    [
        "bond-007",
        "james-bond",
        "connected_to",
        "007 is the central figure of James Bond.",
        0.99,
        0.99
    ],
    [
        "bond-007",
        "mi6",
        "member_of",
        "Bond serves MI6.",
        0.99,
        0.98
    ],
    [
        "bond-007",
        "double-o",
        "member_of",
        "Bond is a 00 agent.",
        0.99,
        0.97
    ],
    [
        "m",
        "mi6",
        "leads",
        "M heads MI6.",
        0.98,
        0.96
    ],
    [
        "q",
        "mi6",
        "member_of",
        "Q runs Q Branch for MI6.",
        0.97,
        0.94
    ],
    [
        "moneypenny",
        "mi6",
        "member_of",
        "Moneypenny works for M at MI6.",
        0.97,
        0.94
    ],
    [
        "blofeld",
        "spectre",
        "leads",
        "Blofeld leads SPECTRE.",
        0.99,
        0.97
    ],
    [
        "bond-007",
        "blofeld",
        "opposed_by",
        "Bond repeatedly opposes Blofeld.",
        0.98,
        0.96
    ],
    [
        "goldfinger-character",
        "oddjob",
        "supports",
        "Oddjob serves Goldfinger.",
        0.98,
        0.95
    ],
    [
        "bond-007",
        "goldfinger-character",
        "opposed_by",
        "Bond confronts Goldfinger.",
        0.97,
        0.94
    ],
    [
        "felix-leiter",
        "bond-007",
        "supports",
        "Felix Leiter aids Bond.",
        0.96,
        0.92
    ],
    [
        "sean-connery",
        "bond-007",
        "connected_to",
        "Sean Connery portrayed Bond.",
        0.98,
        0.96
    ],
    [
        "daniel-craig",
        "bond-007",
        "connected_to",
        "Daniel Craig portrayed Bond.",
        0.98,
        0.96
    ],
    [
        "roger-moore",
        "bond-007",
        "connected_to",
        "Roger Moore portrayed Bond.",
        0.97,
        0.94
    ],
    [
        "dr-no",
        "james-bond",
        "part_of",
        "Dr. No begins the Eon film series.",
        0.99,
        0.97
    ],
    [
        "casino-royale",
        "james-bond",
        "part_of",
        "Casino Royale is foundational Bond.",
        0.99,
        0.97
    ],
    [
        "goldfinger-film",
        "james-bond",
        "part_of",
        "Goldfinger is a classic Bond film.",
        0.98,
        0.95
    ],
    [
        "skyfall",
        "james-bond",
        "part_of",
        "Skyfall is a major Craig-era Bond film.",
        0.98,
        0.95
    ],
    [
        "from-russia-with-love",
        "james-bond",
        "part_of",
        "From Russia with Love is an early Bond film.",
        0.97,
        0.94
    ],
    [
        "no-time-to-die",
        "james-bond",
        "part_of",
        "No Time to Die closes Craig's Bond era.",
        0.97,
        0.94
    ],
    [
        "thunderball",
        "james-bond",
        "part_of",
        "Thunderball is a SPECTRE Bond film.",
        0.96,
        0.92
    ],
    [
        "sean-connery",
        "dr-no",
        "involved",
        "Connery stars in Dr. No.",
        0.98,
        0.95
    ],
    [
        "daniel-craig",
        "casino-royale",
        "involved",
        "Craig debuts as Bond in Casino Royale.",
        0.98,
        0.95
    ],
    [
        "daniel-craig",
        "skyfall",
        "involved",
        "Craig stars in Skyfall.",
        0.97,
        0.94
    ],
    [
        "aston-martin",
        "bond-007",
        "uses",
        "Bond drives Aston Martins.",
        0.98,
        0.95
    ],
    [
        "walther-ppk",
        "bond-007",
        "uses",
        "Bond carries a Walther PPK.",
        0.97,
        0.93
    ],
    [
        "licence-to-kill",
        "double-o",
        "part_of",
        "A licence to kill defines 00 status.",
        0.97,
        0.94
    ],
    [
        "bond-theme",
        "james-bond",
        "connected_to",
        "The Bond Theme identifies the franchise.",
        0.96,
        0.92
    ],
    [
        "spectre",
        "thunderball",
        "involved",
        "SPECTRE drives Thunderball's plot.",
        0.95,
        0.9
    ],
    [
        "james-bond",
        "james-bond-figures",
        "contains",
        "James Bond figures is a primary trailhead under James Bond.",
        0.88,
        0.82
    ],
    [
        "james-bond",
        "james-bond-places",
        "contains",
        "James Bond places is a primary trailhead under James Bond.",
        0.88,
        0.82
    ],
    [
        "james-bond",
        "james-bond-events",
        "contains",
        "James Bond events is a primary trailhead under James Bond.",
        0.88,
        0.82
    ],
    [
        "james-bond",
        "james-bond-objects",
        "contains",
        "James Bond objects & artifacts is a primary trailhead under James Bond.",
        0.88,
        0.82
    ],
    [
        "james-bond",
        "james-bond-factions",
        "contains",
        "James Bond factions & groups is a primary trailhead under James Bond.",
        0.88,
        0.82
    ],
    [
        "james-bond",
        "james-bond-concepts",
        "contains",
        "James Bond concepts is a primary trailhead under James Bond.",
        0.88,
        0.82
    ],
    [
        "james-bond",
        "james-bond-eras",
        "contains",
        "James Bond eras is a primary trailhead under James Bond.",
        0.88,
        0.82
    ],
    [
        "james-bond",
        "james-bond-works",
        "contains",
        "James Bond works & media is a primary trailhead under James Bond.",
        0.88,
        0.82
    ],
    [
        "james-bond",
        "james-bond-symbols",
        "contains",
        "James Bond symbols is a primary trailhead under James Bond.",
        0.88,
        0.82
    ],
    [
        "james-bond",
        "james-bond-controversies",
        "contains",
        "James Bond controversies is a primary trailhead under James Bond.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
