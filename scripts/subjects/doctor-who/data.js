/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "doctor-who",
        "name": "Doctor Who",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "BBC time-travel series of the Doctor and the TARDIS.",
        "description": "Doctor Who is the long-running BBC science-fiction series about the Doctor, a Time Lord who travels in the TARDIS with companions, facing Daleks, Cybermen, and threats across time and space.",
        "aliases": []
    },
    {
        "slug": "bbc",
        "name": "BBC",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "British broadcaster behind Doctor Who.",
        "description": "The British Broadcasting Corporation (BBC) created and produces Doctor Who, the cornerstone of British televised science fiction.",
        "aliases": []
    },
    {
        "slug": "sydney-newman",
        "name": "Sydney Newman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "BBC executive who launched Doctor Who.",
        "description": "Sydney Newman helped create Doctor Who at the BBC in 1963 as Head of Drama, shaping its educational adventure premise.",
        "aliases": []
    },
    {
        "slug": "russell-t-davies",
        "name": "Russell T Davies",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Showrunner of the modern revival eras.",
        "description": "Russell T Davies revived Doctor Who in 2005 and later returned as showrunner, defining modern companions and storytelling tone.",
        "aliases": []
    },
    {
        "slug": "doctor-who-tv",
        "name": "Doctor Who (TV series)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "The ongoing television series since 1963.",
        "description": "The Doctor Who television series has aired since 1963 (with a long hiatus), following regenerations of the Doctor across classic and modern eras.",
        "aliases": []
    },
    {
        "slug": "the-doctor",
        "name": "The Doctor",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Renegade Time Lord traveler of the TARDIS.",
        "description": "The Doctor is a renegade Time Lord who steals a TARDIS, regenerates into new incarnations, and fights injustice across the universe with human companions.",
        "aliases": []
    },
    {
        "slug": "tardis",
        "name": "TARDIS",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Time-and-space ship disguised as a police box.",
        "description": "The TARDIS (Time And Relative Dimension In Space) is bigger on the inside and typically appears as a 1960s British police box while traveling anywhere in time and space.",
        "aliases": []
    },
    {
        "slug": "time-lords",
        "name": "Time Lords",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Gallifreyan civilization of time travelers.",
        "description": "The Time Lords are the Doctor's people of Gallifrey, a powerful civilization that polices time travel and once fought the Time War against the Daleks.",
        "aliases": []
    },
    {
        "slug": "gallifrey",
        "name": "Gallifrey",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Homeworld of the Time Lords.",
        "description": "Gallifrey is the orange-skied homeworld of the Time Lords, seat of the Citadel and the Eye of Harmony, long thought lost in the Time War.",
        "aliases": []
    },
    {
        "slug": "regeneration",
        "name": "Regeneration",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Time Lord rebirth into a new incarnation.",
        "description": "Regeneration is the Time Lord process of dying and being reborn in a new body and personality, allowing the Doctor to continue across decades of actors.",
        "aliases": []
    },
    {
        "slug": "companions",
        "name": "Companions",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Travelers who journey with the Doctor.",
        "description": "Companions are the friends and allies who travel with the Doctor in the TARDIS, grounding adventures and often becoming legends themselves.",
        "aliases": []
    },
    {
        "slug": "sonic-screwdriver",
        "name": "Sonic screwdriver",
        "type": "object",
        "evidence": "fiction",
        "short_description": "The Doctor's versatile sonic tool.",
        "description": "The sonic screwdriver is the Doctor's multipurpose tool for scanning, unlocking, and improvising solutions—except when a door needs a key.",
        "aliases": []
    },
    {
        "slug": "time-war",
        "name": "Last Great Time War",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "War between Time Lords and Daleks.",
        "description": "The Last Great Time War was a universe-shaking conflict between Time Lords and Daleks that haunted the modern Doctor's early revival years.",
        "aliases": []
    },
    {
        "slug": "rose-tyler",
        "name": "Rose Tyler",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Companion of the Ninth and Tenth Doctors.",
        "description": "Rose Tyler is a landmark modern companion who travels with the Ninth and Tenth Doctors and becomes deeply bound to Bad Wolf and the Doctor's fate.",
        "aliases": []
    },
    {
        "slug": "clara-oswald",
        "name": "Clara Oswald",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Impossible Girl companion of the Eleventh and Twelfth Doctors.",
        "description": "Clara Oswald is the 'Impossible Girl' who echoes through the Doctor's timeline and travels as a companion of the Eleventh and Twelfth Doctors.",
        "aliases": []
    },
    {
        "slug": "donna-noble",
        "name": "Donna Noble",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Tempestuous companion of the Tenth Doctor.",
        "description": "Donna Noble is a sharp-tongued companion of the Tenth Doctor whose partnership peaks in the DoctorDonna crisis and a heartbreaking farewell.",
        "aliases": []
    },
    {
        "slug": "sarah-jane-smith",
        "name": "Sarah Jane Smith",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Classic journalist companion and later heroine.",
        "description": "Sarah Jane Smith is a beloved classic companion who later starred in The Sarah Jane Adventures, remaining a touchstone of Doctor Who fandom.",
        "aliases": []
    },
    {
        "slug": "amy-pond",
        "name": "Amy Pond",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Scottish companion of the Eleventh Doctor.",
        "description": "Amelia 'Amy' Pond grows up waiting for the raggedy Doctor and later travels with him and Rory through cracks in time.",
        "aliases": []
    },
    {
        "slug": "martha-jones",
        "name": "Martha Jones",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Medical student companion of the Tenth Doctor.",
        "description": "Martha Jones is a medical student companion who walks the Earth in the Year That Never Was and later works with UNIT.",
        "aliases": []
    },
    {
        "slug": "daleks",
        "name": "Daleks",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Genocidal pepperpot mutants of Skaro.",
        "description": "Daleks are xenophobic mutants in armored travel machines, created by Davros on Skaro, forever chanting 'Exterminate' at the Doctor.",
        "aliases": []
    },
    {
        "slug": "davros",
        "name": "Davros",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of the Daleks.",
        "description": "Davros is the Kaled scientist who created the Daleks, repeatedly clashing with the Doctor across classic and modern stories.",
        "aliases": []
    },
    {
        "slug": "cybermen",
        "name": "Cybermen",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Emotionless cyborg converters of humanity.",
        "description": "Cybermen are cybernetically converted humanoids who seek to upgrade others, opposing the Doctor across Mondas, Pete's World, and beyond.",
        "aliases": []
    },
    {
        "slug": "the-master",
        "name": "The Master",
        "type": "person",
        "evidence": "fiction",
        "short_description": "The Doctor's Time Lord nemesis.",
        "description": "The Master is a renegade Time Lord and the Doctor's dark mirror, regenerating through many faces while scheming against Gallifrey and Earth.",
        "aliases": []
    },
    {
        "slug": "weeping-angels",
        "name": "Weeping Angels",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Quantum-locked predators that feed on time.",
        "description": "Weeping Angels are quantum-locked statues that move when unobserved, sending victims back in time to feed on potential lives.",
        "aliases": []
    },
    {
        "slug": "unit",
        "name": "UNIT",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Military force defending Earth from aliens.",
        "description": "UNIT (Unified Intelligence Taskforce) is the military-scientific organization that defends Earth and often allies with the Doctor.",
        "aliases": []
    },
    {
        "slug": "captain-jack-harkness",
        "name": "Captain Jack Harkness",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Immortal Time Agent and Torchwood leader.",
        "description": "Captain Jack Harkness is a flirtatious immortal Time Agent who travels with the Ninth Doctor and later leads Torchwood.",
        "aliases": []
    },
    {
        "slug": "river-song",
        "name": "River Song",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Archaeologist wife across tangled timelines.",
        "description": "River Song is an archaeologist whose timeline runs opposite the Doctor's, culminating in Spoiler and silence-bound secrets.",
        "aliases": []
    },
    {
        "slug": "skaro",
        "name": "Skaro",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Homeworld of the Daleks.",
        "description": "Skaro is the war-scarred home planet of the Daleks and Davros, repeatedly visited across Doctor Who history.",
        "aliases": []
    },
    {
        "slug": "earth",
        "name": "Earth",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Humanity's home and frequent battleground.",
        "description": "Earth is humanity's homeworld and the Doctor's frequent second home, defended by UNIT and threatened by countless invasions.",
        "aliases": []
    },
    {
        "slug": "torchwood",
        "name": "Torchwood",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Secret institute spun from Doctor Who.",
        "description": "Torchwood is a covert organization founded to deal with alien threats and Time Lord fallout, later led by Captain Jack.",
        "aliases": []
    },
    {
        "slug": "bad-wolf",
        "name": "Bad Wolf",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Time-scattered message and Rose's power.",
        "description": "Bad Wolf is the recurring phrase and power that culminates when Rose Tyler absorbs the Time Vortex to stop the Daleks.",
        "aliases": []
    },
    {
        "slug": "time-vortex",
        "name": "Time Vortex",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Chaotic stream through which TARDISes fly.",
        "description": "The Time Vortex is the turbulent medium of time travel through which the TARDIS flies between eras and worlds.",
        "aliases": []
    },
    {
        "slug": "doctor-who-figures",
        "name": "Doctor Who figures",
        "type": "topic",
        "short_description": "People and named forces central to Doctor Who.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Doctor Who."
    },
    {
        "slug": "doctor-who-places",
        "name": "Doctor Who places",
        "type": "place",
        "short_description": "Locations and geographies that frame Doctor Who.",
        "description": "Places, regions, and built sites that give Doctor Who its map — where events and figures concentrate."
    },
    {
        "slug": "doctor-who-events",
        "name": "Doctor Who events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Doctor Who.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Doctor Who timeline."
    },
    {
        "slug": "doctor-who-objects",
        "name": "Doctor Who objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Doctor Who.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Doctor Who."
    },
    {
        "slug": "doctor-who-factions",
        "name": "Doctor Who factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Doctor Who.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Doctor Who."
    },
    {
        "slug": "doctor-who-concepts",
        "name": "Doctor Who concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Doctor Who.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Doctor Who readable as a lore graph."
    },
    {
        "slug": "doctor-who-eras",
        "name": "Doctor Who eras",
        "type": "event",
        "short_description": "Periodization for Doctor Who.",
        "description": "Named eras and phases that help readers track how Doctor Who changes across time."
    },
    {
        "slug": "doctor-who-works",
        "name": "Doctor Who works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Doctor Who.",
        "description": "Primary works and adaptations through which most audiences encounter Doctor Who."
    }
];

const relationships = [
    [
        "sydney-newman",
        "doctor-who",
        "created",
        "Sydney Newman helped create Doctor Who.",
        0.97,
        0.94
    ],
    [
        "bbc",
        "doctor-who",
        "produced",
        "The BBC produces Doctor Who.",
        0.99,
        0.98
    ],
    [
        "bbc",
        "doctor-who-tv",
        "publishes",
        "The BBC broadcasts Doctor Who.",
        0.98,
        0.96
    ],
    [
        "russell-t-davies",
        "doctor-who-tv",
        "influenced",
        "Russell T Davies shaped the modern revival.",
        0.97,
        0.94
    ],
    [
        "doctor-who-tv",
        "doctor-who",
        "part_of",
        "The TV series is the heart of Doctor Who.",
        0.99,
        0.98
    ],
    [
        "the-doctor",
        "time-lords",
        "member_of",
        "The Doctor is a Time Lord.",
        0.99,
        0.98
    ],
    [
        "the-doctor",
        "tardis",
        "uses",
        "The Doctor travels in the TARDIS.",
        0.99,
        0.98
    ],
    [
        "the-doctor",
        "regeneration",
        "uses",
        "The Doctor regenerates into new incarnations.",
        0.98,
        0.96
    ],
    [
        "the-doctor",
        "sonic-screwdriver",
        "uses",
        "The Doctor wields the sonic screwdriver.",
        0.97,
        0.94
    ],
    [
        "time-lords",
        "gallifrey",
        "located_in",
        "Time Lords hail from Gallifrey.",
        0.98,
        0.96
    ],
    [
        "tardis",
        "time-vortex",
        "uses",
        "The TARDIS flies through the Time Vortex.",
        0.96,
        0.92
    ],
    [
        "rose-tyler",
        "companions",
        "member_of",
        "Rose is a companion of the Doctor.",
        0.98,
        0.95
    ],
    [
        "clara-oswald",
        "companions",
        "member_of",
        "Clara is a companion of the Doctor.",
        0.97,
        0.94
    ],
    [
        "donna-noble",
        "companions",
        "member_of",
        "Donna is a companion of the Doctor.",
        0.97,
        0.94
    ],
    [
        "sarah-jane-smith",
        "companions",
        "member_of",
        "Sarah Jane was a classic companion.",
        0.97,
        0.94
    ],
    [
        "amy-pond",
        "companions",
        "member_of",
        "Amy Pond is a companion of the Doctor.",
        0.96,
        0.93
    ],
    [
        "martha-jones",
        "companions",
        "member_of",
        "Martha Jones is a companion of the Doctor.",
        0.96,
        0.93
    ],
    [
        "rose-tyler",
        "the-doctor",
        "supports",
        "Rose travels with and supports the Doctor.",
        0.97,
        0.94
    ],
    [
        "donna-noble",
        "the-doctor",
        "supports",
        "Donna partners with the Tenth Doctor.",
        0.96,
        0.93
    ],
    [
        "daleks",
        "the-doctor",
        "opposed_by",
        "Daleks are sworn enemies of the Doctor.",
        0.99,
        0.97
    ],
    [
        "davros",
        "daleks",
        "created",
        "Davros created the Daleks.",
        0.98,
        0.96
    ],
    [
        "daleks",
        "skaro",
        "located_in",
        "Daleks originate from Skaro.",
        0.97,
        0.94
    ],
    [
        "cybermen",
        "the-doctor",
        "opposed_by",
        "Cybermen oppose the Doctor.",
        0.97,
        0.94
    ],
    [
        "the-master",
        "the-doctor",
        "opposed_by",
        "The Master is the Doctor's nemesis.",
        0.98,
        0.96
    ],
    [
        "the-master",
        "time-lords",
        "member_of",
        "The Master is a Time Lord.",
        0.97,
        0.94
    ],
    [
        "weeping-angels",
        "the-doctor",
        "opposed_by",
        "Weeping Angels prey across the Doctor's eras.",
        0.96,
        0.93
    ],
    [
        "unit",
        "earth",
        "located_in",
        "UNIT defends Earth.",
        0.97,
        0.94
    ],
    [
        "unit",
        "the-doctor",
        "supports",
        "UNIT often allies with the Doctor.",
        0.96,
        0.93
    ],
    [
        "martha-jones",
        "unit",
        "member_of",
        "Martha later works with UNIT.",
        0.94,
        0.88
    ],
    [
        "captain-jack-harkness",
        "torchwood",
        "leads",
        "Jack leads Torchwood.",
        0.96,
        0.92
    ],
    [
        "torchwood",
        "doctor-who",
        "connected_to",
        "Torchwood spun out of Doctor Who.",
        0.95,
        0.9
    ],
    [
        "time-war",
        "daleks",
        "connected_to",
        "Daleks fought the Time War.",
        0.97,
        0.94
    ],
    [
        "time-war",
        "time-lords",
        "connected_to",
        "Time Lords fought the Time War.",
        0.97,
        0.94
    ],
    [
        "bad-wolf",
        "rose-tyler",
        "connected_to",
        "Bad Wolf culminates in Rose's power.",
        0.96,
        0.93
    ],
    [
        "river-song",
        "the-doctor",
        "connected_to",
        "River Song's timeline entwines with the Doctor.",
        0.96,
        0.93
    ],
    [
        "doctor-who",
        "doctor-who-figures",
        "contains",
        "Doctor Who figures is a primary trailhead under Doctor Who.",
        0.88,
        0.82
    ],
    [
        "doctor-who",
        "doctor-who-places",
        "contains",
        "Doctor Who places is a primary trailhead under Doctor Who.",
        0.88,
        0.82
    ],
    [
        "doctor-who",
        "doctor-who-events",
        "contains",
        "Doctor Who events is a primary trailhead under Doctor Who.",
        0.88,
        0.82
    ],
    [
        "doctor-who",
        "doctor-who-objects",
        "contains",
        "Doctor Who objects & artifacts is a primary trailhead under Doctor Who.",
        0.88,
        0.82
    ],
    [
        "doctor-who",
        "doctor-who-factions",
        "contains",
        "Doctor Who factions & groups is a primary trailhead under Doctor Who.",
        0.88,
        0.82
    ],
    [
        "doctor-who",
        "doctor-who-concepts",
        "contains",
        "Doctor Who concepts is a primary trailhead under Doctor Who.",
        0.88,
        0.82
    ],
    [
        "doctor-who",
        "doctor-who-eras",
        "contains",
        "Doctor Who eras is a primary trailhead under Doctor Who.",
        0.88,
        0.82
    ],
    [
        "doctor-who",
        "doctor-who-works",
        "contains",
        "Doctor Who works & media is a primary trailhead under Doctor Who.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
