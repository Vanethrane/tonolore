/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "transformers",
        "name": "Transformers",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Hasbro robots-in-disguise franchise of Autobots, Decepticons, and Cybertron.",
        "description": "Transformers is a multimedia franchise of transforming robots — primarily Autobots and Decepticons from Cybertron — spanning toys, cartoons, comics, and live-action films.",
        "aliases": []
    },
    {
        "slug": "hasbro",
        "name": "Hasbro",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "American toy company behind Transformers.",
        "description": "Hasbro developed and markets Transformers toys and media in partnership with Takara Tomy and other collaborators.",
        "aliases": []
    },
    {
        "slug": "takara-tomy",
        "name": "Takara Tomy",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Japanese partner whose Diaclone and Microman lines seeded Transformers.",
        "description": "Takara Tomy (formerly Takara) co-created Transformers from Diaclone and Microman toys and continues as a major partner on the brand.",
        "aliases": []
    },
    {
        "slug": "transformers-g1",
        "name": "The Transformers (G1)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "1980s cartoon and toy line that launched the franchise.",
        "description": "The Generation 1 Transformers cartoon and toys introduced Optimus Prime, Megatron, the Autobot–Decepticon war, and the AllSpark mythos for a generation of fans.",
        "aliases": []
    },
    {
        "slug": "transformers-film",
        "name": "Transformers (film series)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Live-action film saga beginning with the 2007 movie.",
        "description": "The live-action Transformers films bring Autobots and Decepticons to Earth in blockbuster spectacles, starting with Michael Bay's 2007 film.",
        "aliases": []
    },
    {
        "slug": "transformers-prime",
        "name": "Transformers: Prime",
        "type": "work",
        "evidence": "fiction",
        "short_description": "CGI series following Optimus, Bumblebee, and Team Prime.",
        "description": "Transformers: Prime follows Optimus Prime's Autobots protecting Earth from Megatron while mentoring human allies.",
        "aliases": []
    },
    {
        "slug": "transformers-war-for-cybertron",
        "name": "Transformers: War for Cybertron",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Games and lore focused on the Cybertronian civil war.",
        "description": "War for Cybertron depicts the Autobot–Decepticon conflict on Cybertron over Energon, leadership, and the planet's fate.",
        "aliases": []
    },
    {
        "slug": "cybertron",
        "name": "Cybertron",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Home planet of the Transformers.",
        "description": "Cybertron is the metallic homeworld of Autobots and Decepticons, scarred by civil war and often drained of Energon.",
        "aliases": []
    },
    {
        "slug": "earth",
        "name": "Earth",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Refuge and battleground for Transformers in exile.",
        "description": "Earth becomes a key battleground and hiding place when Transformers crash-land or pursue the AllSpark beyond Cybertron.",
        "aliases": []
    },
    {
        "slug": "autobot-city",
        "name": "Autobot City",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Autobot stronghold on Earth in G1 lore.",
        "description": "Autobot City is a major Autobot fortress on Earth, famously besieged in The Transformers: The Movie.",
        "aliases": []
    },
    {
        "slug": "autobots",
        "name": "Autobots",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Heroic Transformers led by Optimus Prime.",
        "description": "The Autobots are Transformers who fight for freedom and peace, typically led by Optimus Prime against the Decepticons.",
        "aliases": []
    },
    {
        "slug": "decepticons",
        "name": "Decepticons",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Conquering Transformers led by Megatron.",
        "description": "The Decepticons seek domination through force, usually commanded by Megatron and opposed by the Autobots.",
        "aliases": []
    },
    {
        "slug": "allspark",
        "name": "AllSpark",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Life-giving cube that can create Transformers.",
        "description": "The AllSpark is a powerful artifact capable of granting life to machines and reshaping the balance between Autobots and Decepticons.",
        "aliases": []
    },
    {
        "slug": "matrix-of-leadership",
        "name": "Matrix of Leadership",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Autobot relic carried by their chosen leader.",
        "description": "The Matrix of Leadership holds the wisdom of past Autobot leaders and is borne by Optimus Prime as a symbol of rightful command.",
        "aliases": []
    },
    {
        "slug": "energon",
        "name": "Energon",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Fuel and lifeblood of Transformer civilization.",
        "description": "Energon powers Transformers and their technology; scarcity of Energon drives wars on Cybertron and raids on Earth.",
        "aliases": []
    },
    {
        "slug": "transformation",
        "name": "Transformation",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Ability to convert between robot and alternate modes.",
        "description": "Transformation is the defining ability of Transformers, letting them shift between robot forms and vehicles, beasts, or other disguises.",
        "aliases": []
    },
    {
        "slug": "spark",
        "name": "Spark",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Living essence of a Transformer.",
        "description": "A Spark is a Transformer's life force; extinguishing it means death, and the AllSpark is mythically tied to creating Sparks.",
        "aliases": []
    },
    {
        "slug": "optimus-prime",
        "name": "Optimus Prime",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Autobot leader and bearer of the Matrix.",
        "description": "Optimus Prime is the noble Autobot commander who leads the fight for freedom against Megatron and carries the Matrix of Leadership.",
        "aliases": []
    },
    {
        "slug": "megatron",
        "name": "Megatron",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Decepticon warlord and Optimus Prime's nemesis.",
        "description": "Megatron founded and leads the Decepticons, waging war for Cybertron's control and clashing endlessly with Optimus Prime.",
        "aliases": []
    },
    {
        "slug": "bumblebee",
        "name": "Bumblebee",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Scout Autobot often close to humans.",
        "description": "Bumblebee is a nimble Autobot scout known for loyalty, stealth, and close bonds with human allies across cartoons and films.",
        "aliases": []
    },
    {
        "slug": "starscream",
        "name": "Starscream",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ambitious Decepticon Seekers commander.",
        "description": "Starscream is Megatron's treacherous air commander, forever scheming to seize Decepticon leadership.",
        "aliases": []
    },
    {
        "slug": "jazz",
        "name": "Jazz",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Stylish Autobot lieutenant and special-ops agent.",
        "description": "Jazz is an Autobot officer known for cool confidence, reconnaissance, and standing close to Optimus Prime's command.",
        "aliases": []
    },
    {
        "slug": "ironhide",
        "name": "Ironhide",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Tough Autobot weapons specialist.",
        "description": "Ironhide is a veteran Autobot fighter and weapons expert, often serving as Optimus Prime's rugged enforcer.",
        "aliases": []
    },
    {
        "slug": "ratchet",
        "name": "Ratchet",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Autobot medic.",
        "description": "Ratchet is the Autobot medical officer who repairs wounded comrades and keeps the team battle-ready.",
        "aliases": []
    },
    {
        "slug": "soundwave",
        "name": "Soundwave",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Loyal Decepticon communications officer.",
        "description": "Soundwave is Megatron's steadfast communications expert, deploying cassette minions like Laserbeak and Ravage.",
        "aliases": []
    },
    {
        "slug": "shockwave",
        "name": "Shockwave",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Cold Decepticon scientist and tactician.",
        "description": "Shockwave is a logic-driven Decepticon scientist who often governs Cybertron or advances Decepticon weapons research.",
        "aliases": []
    },
    {
        "slug": "optimus-primal",
        "name": "Optimus Primal",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Maximal leader from Beast Wars.",
        "description": "Optimus Primal leads the Maximals in Beast Wars, a descendant-era conflict echoing Optimus Prime's ideals.",
        "aliases": []
    },
    {
        "slug": "unicron",
        "name": "Unicron",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Planet-eating chaos god of Transformer lore.",
        "description": "Unicron is a planet-consuming entity of chaos who threatens Cybertron and all Transformers across multiple continuities.",
        "aliases": []
    },
    {
        "slug": "primus",
        "name": "Primus",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator-god of the Transformers, twin of Unicron.",
        "description": "Primus is the divine creator associated with Cybertron and the origin of Transformer life, opposed to Unicron.",
        "aliases": []
    },
    {
        "slug": "elita-one",
        "name": "Elita-1",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Autobot resistance leader and Optimus ally.",
        "description": "Elita-1 is a skilled Autobot commander often tied to Optimus Prime and the fight for Cybertron's freedom.",
        "aliases": []
    },
    {
        "slug": "ark",
        "name": "The Ark",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Autobot starship that crash-lands on Earth.",
        "description": "The Ark is the Autobot spacecraft that flees Cybertron and crashes on Earth, beginning many G1 stories.",
        "aliases": []
    },
    {
        "slug": "nemesis",
        "name": "The Nemesis",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Decepticon warship pursuing the Ark.",
        "description": "The Nemesis is the Decepticon vessel that chases the Ark from Cybertron, carrying Megatron's forces to Earth.",
        "aliases": []
    },
    {
        "slug": "transformers-figures",
        "name": "Transformers figures",
        "type": "topic",
        "short_description": "People and named forces central to Transformers.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Transformers."
    },
    {
        "slug": "transformers-places",
        "name": "Transformers places",
        "type": "place",
        "short_description": "Locations and geographies that frame Transformers.",
        "description": "Places, regions, and built sites that give Transformers its map — where events and figures concentrate."
    },
    {
        "slug": "transformers-events",
        "name": "Transformers events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Transformers.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Transformers timeline."
    },
    {
        "slug": "transformers-objects",
        "name": "Transformers objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Transformers.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Transformers."
    },
    {
        "slug": "transformers-factions",
        "name": "Transformers factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Transformers.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Transformers."
    },
    {
        "slug": "transformers-concepts",
        "name": "Transformers concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Transformers.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Transformers readable as a lore graph."
    },
    {
        "slug": "transformers-eras",
        "name": "Transformers eras",
        "type": "event",
        "short_description": "Periodization for Transformers.",
        "description": "Named eras and phases that help readers track how Transformers changes across time."
    },
    {
        "slug": "transformers-works",
        "name": "Transformers works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Transformers.",
        "description": "Primary works and adaptations through which most audiences encounter Transformers."
    }
];

const relationships = [
    [
        "hasbro",
        "transformers",
        "produced",
        "Hasbro markets and produces Transformers.",
        0.99,
        0.98
    ],
    [
        "takara-tomy",
        "transformers",
        "produced",
        "Takara Tomy co-created and partners on Transformers.",
        0.98,
        0.96
    ],
    [
        "transformers-g1",
        "transformers",
        "part_of",
        "G1 launched the Transformers franchise.",
        0.99,
        0.98
    ],
    [
        "transformers-film",
        "transformers",
        "part_of",
        "The films are a major Transformers continuity.",
        0.98,
        0.96
    ],
    [
        "transformers-prime",
        "transformers",
        "part_of",
        "Prime is a key modern Transformers series.",
        0.97,
        0.94
    ],
    [
        "transformers-war-for-cybertron",
        "transformers",
        "part_of",
        "War for Cybertron expands Cybertronian lore.",
        0.96,
        0.93
    ],
    [
        "autobots",
        "transformers",
        "part_of",
        "Autobots are a core Transformers faction.",
        0.99,
        0.98
    ],
    [
        "decepticons",
        "transformers",
        "part_of",
        "Decepticons are a core Transformers faction.",
        0.99,
        0.98
    ],
    [
        "autobots",
        "decepticons",
        "opposed_by",
        "Autobots and Decepticons are at war.",
        0.99,
        0.98
    ],
    [
        "cybertron",
        "transformers",
        "located_in",
        "Cybertron is the Transformers' homeworld.",
        0.99,
        0.97
    ],
    [
        "earth",
        "transformers",
        "located_in",
        "Earth is a major Transformers setting.",
        0.97,
        0.94
    ],
    [
        "autobot-city",
        "earth",
        "located_in",
        "Autobot City is established on Earth.",
        0.95,
        0.9
    ],
    [
        "optimus-prime",
        "autobots",
        "leads",
        "Optimus Prime leads the Autobots.",
        0.99,
        0.99
    ],
    [
        "megatron",
        "decepticons",
        "leads",
        "Megatron leads the Decepticons.",
        0.99,
        0.99
    ],
    [
        "optimus-prime",
        "megatron",
        "opposed_by",
        "Optimus Prime and Megatron are arch-enemies.",
        0.99,
        0.98
    ],
    [
        "bumblebee",
        "autobots",
        "member_of",
        "Bumblebee is an Autobot.",
        0.98,
        0.96
    ],
    [
        "starscream",
        "decepticons",
        "member_of",
        "Starscream is a Decepticon.",
        0.98,
        0.96
    ],
    [
        "jazz",
        "autobots",
        "member_of",
        "Jazz is an Autobot.",
        0.97,
        0.94
    ],
    [
        "ironhide",
        "autobots",
        "member_of",
        "Ironhide is an Autobot.",
        0.97,
        0.94
    ],
    [
        "ratchet",
        "autobots",
        "member_of",
        "Ratchet is an Autobot.",
        0.97,
        0.94
    ],
    [
        "soundwave",
        "decepticons",
        "member_of",
        "Soundwave is a Decepticon.",
        0.98,
        0.95
    ],
    [
        "shockwave",
        "decepticons",
        "member_of",
        "Shockwave is a Decepticon.",
        0.97,
        0.94
    ],
    [
        "elita-one",
        "autobots",
        "member_of",
        "Elita-1 is an Autobot.",
        0.96,
        0.92
    ],
    [
        "matrix-of-leadership",
        "optimus-prime",
        "uses",
        "Optimus Prime bears the Matrix of Leadership.",
        0.98,
        0.96
    ],
    [
        "allspark",
        "cybertron",
        "connected_to",
        "The AllSpark is tied to Cybertronian life.",
        0.96,
        0.93
    ],
    [
        "energon",
        "cybertron",
        "connected_to",
        "Energon sustains life and war on Cybertron.",
        0.97,
        0.94
    ],
    [
        "ark",
        "autobots",
        "uses",
        "The Autobots travel aboard the Ark.",
        0.97,
        0.94
    ],
    [
        "nemesis",
        "decepticons",
        "uses",
        "The Decepticons pursue aboard the Nemesis.",
        0.97,
        0.94
    ],
    [
        "unicron",
        "primus",
        "opposed_by",
        "Unicron and Primus are cosmic opposites.",
        0.97,
        0.93
    ],
    [
        "primus",
        "cybertron",
        "connected_to",
        "Primus is mythically bound to Cybertron.",
        0.95,
        0.9
    ],
    [
        "transformers",
        "transformers-figures",
        "contains",
        "Transformers figures is a primary trailhead under Transformers.",
        0.88,
        0.82
    ],
    [
        "transformers",
        "transformers-places",
        "contains",
        "Transformers places is a primary trailhead under Transformers.",
        0.88,
        0.82
    ],
    [
        "transformers",
        "transformers-events",
        "contains",
        "Transformers events is a primary trailhead under Transformers.",
        0.88,
        0.82
    ],
    [
        "transformers",
        "transformers-objects",
        "contains",
        "Transformers objects & artifacts is a primary trailhead under Transformers.",
        0.88,
        0.82
    ],
    [
        "transformers",
        "transformers-factions",
        "contains",
        "Transformers factions & groups is a primary trailhead under Transformers.",
        0.88,
        0.82
    ],
    [
        "transformers",
        "transformers-concepts",
        "contains",
        "Transformers concepts is a primary trailhead under Transformers.",
        0.88,
        0.82
    ],
    [
        "transformers",
        "transformers-eras",
        "contains",
        "Transformers eras is a primary trailhead under Transformers.",
        0.88,
        0.82
    ],
    [
        "transformers",
        "transformers-works",
        "contains",
        "Transformers works & media is a primary trailhead under Transformers.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
