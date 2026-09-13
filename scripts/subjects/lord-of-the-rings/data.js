/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lord-of-the-rings",
        "name": "The Lord of the Rings",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Tolkien's epic of the One Ring and the War of the Ring.",
        "description": "The Lord of the Rings is J.R.R. Tolkien's epic following Frodo Baggins, the Fellowship, and the war to destroy the One Ring forged by Sauron.",
        "aliases": []
    },
    {
        "slug": "jrr-tolkien",
        "name": "J.R.R. Tolkien",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Author of The Hobbit and The Lord of the Rings.",
        "description": "J.R.R. Tolkien created Middle-earth, writing The Hobbit, The Lord of the Rings, and the wider legendarium later collected in The Silmarillion.",
        "aliases": []
    },
    {
        "slug": "the-hobbit",
        "name": "The Hobbit",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Prelude adventure of Bilbo Baggins and Smaug.",
        "description": "The Hobbit follows Bilbo Baggins on a quest with Thorin Oakenshield's company to reclaim Erebor from Smaug, during which Bilbo finds the One Ring.",
        "aliases": []
    },
    {
        "slug": "the-silmarillion",
        "name": "The Silmarillion",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Mythic history of the Elder Days.",
        "description": "The Silmarillion recounts the creation of Arda, the Silmarils, and the ancient wars that precede The Lord of the Rings.",
        "aliases": []
    },
    {
        "slug": "peter-jackson",
        "name": "Peter Jackson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Director of the LOTR and Hobbit film trilogies.",
        "description": "Peter Jackson adapted The Lord of the Rings and The Hobbit into major film trilogies that brought Middle-earth to a new global audience.",
        "aliases": []
    },
    {
        "slug": "frodo-baggins",
        "name": "Frodo Baggins",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hobbit Ring-bearer of the Quest.",
        "description": "Frodo Baggins inherits the One Ring from Bilbo and carries it toward Mount Doom with Samwise Gamgee.",
        "aliases": []
    },
    {
        "slug": "samwise-gamgee",
        "name": "Samwise Gamgee",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Frodo's gardener and steadfast companion.",
        "description": "Samwise Gamgee stays with Frodo Baggins through Mordor and is essential to the destruction of the One Ring.",
        "aliases": []
    },
    {
        "slug": "gandalf",
        "name": "Gandalf",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Wizard of the Istari; guide of the Fellowship.",
        "description": "Gandalf the Grey, later the White, guides the Free Peoples against Sauron and leads the Fellowship from Rivendell.",
        "aliases": []
    },
    {
        "slug": "aragorn",
        "name": "Aragorn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ranger heir of Isildur and king of Gondor.",
        "description": "Aragorn, son of Arathorn, protects the hobbits, fights in the War of the Ring, and reclaims the throne of Gondor.",
        "aliases": []
    },
    {
        "slug": "legolas",
        "name": "Legolas",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Elven prince of Mirkwood in the Fellowship.",
        "description": "Legolas joins the Fellowship of the Ring and fights beside Gimli and Aragorn through the War of the Ring.",
        "aliases": []
    },
    {
        "slug": "gimli",
        "name": "Gimli",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dwarf warrior of the Fellowship.",
        "description": "Gimli son of Glóin represents the Dwarves in the Fellowship and forms an unlikely friendship with Legolas.",
        "aliases": []
    },
    {
        "slug": "boromir",
        "name": "Boromir",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Son of Denethor; tempted by the Ring.",
        "description": "Boromir of Gondor joins the Fellowship, struggles with the One Ring's lure, and dies defending Merry and Pippin.",
        "aliases": []
    },
    {
        "slug": "merry-brandybuck",
        "name": "Merry Brandybuck",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hobbit of the Fellowship.",
        "description": "Meriadoc Brandybuck helps defeat the Witch-king with Éowyn and remains loyal through the War of the Ring.",
        "aliases": []
    },
    {
        "slug": "pippin-took",
        "name": "Pippin Took",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hobbit of the Fellowship and Guard of the Citadel.",
        "description": "Peregrin Took looks into the palantír, serves Gondor, and stands with Merry in the final war.",
        "aliases": []
    },
    {
        "slug": "gollum",
        "name": "Gollum",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Former Ring-bearer also called Sméagol.",
        "description": "Gollum is consumed by the One Ring for centuries and later guides Frodo and Sam into Mordor.",
        "aliases": []
    },
    {
        "slug": "sauron",
        "name": "Sauron",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dark Lord and forger of the One Ring.",
        "description": "Sauron forges the One Ring to dominate Middle-earth and wages the War of the Ring from Mordor.",
        "aliases": []
    },
    {
        "slug": "saruman",
        "name": "Saruman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fallen White Wizard of Isengard.",
        "description": "Saruman the White betrays the Istari, breeds Uruk-hai at Isengard, and wars on Rohan.",
        "aliases": []
    },
    {
        "slug": "galadriel",
        "name": "Galadriel",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lady of Lothlórien.",
        "description": "Galadriel rules Lothlórien with Celeborn, tests the Fellowship, and refuses the One Ring when Frodo offers it.",
        "aliases": []
    },
    {
        "slug": "elrond",
        "name": "Elrond",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lord of Rivendell who hosts the Council.",
        "description": "Elrond shelters Frodo in Rivendell and convenes the Council that forms the Fellowship of the Ring.",
        "aliases": []
    },
    {
        "slug": "bilbo-baggins",
        "name": "Bilbo Baggins",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hobbit who finds the Ring in The Hobbit.",
        "description": "Bilbo Baggins finds the One Ring beneath the Misty Mountains and later leaves it to Frodo.",
        "aliases": []
    },
    {
        "slug": "thorin-oakenshield",
        "name": "Thorin Oakenshield",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dwarf-king reclaiming Erebor.",
        "description": "Thorin Oakenshield leads the quest in The Hobbit to reclaim the Lonely Mountain from Smaug.",
        "aliases": []
    },
    {
        "slug": "smaug",
        "name": "Smaug",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dragon of Erebor.",
        "description": "Smaug the Golden seizes Erebor and is later slain after Bilbo's intrusion into the Lonely Mountain.",
        "aliases": []
    },
    {
        "slug": "eowyn",
        "name": "Éowyn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Shieldmaiden of Rohan who fells the Witch-king.",
        "description": "Éowyn defies prophecy with Merry to defeat the Witch-king of Angmar on the Pelennor Fields.",
        "aliases": []
    },
    {
        "slug": "one-ring",
        "name": "The One Ring",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Master Ring forged by Sauron.",
        "description": "The One Ring grants power and corruption, controlling the Rings of Power and driving the entire War of the Ring.",
        "aliases": []
    },
    {
        "slug": "fellowship-of-the-ring",
        "name": "Fellowship of the Ring",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Nine walkers set against Sauron.",
        "description": "The Fellowship of the Ring is formed in Rivendell to help Frodo destroy the One Ring.",
        "aliases": []
    },
    {
        "slug": "mordor",
        "name": "Mordor",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Black land of Sauron and Mount Doom.",
        "description": "Mordor is Sauron's realm, anchored by Barad-dûr and Mount Doom where the One Ring can be unmade.",
        "aliases": []
    },
    {
        "slug": "mount-doom",
        "name": "Mount Doom",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Volcano where the Ring was forged and must be destroyed.",
        "description": "Mount Doom, Orodruin, is the only fire that can destroy the One Ring.",
        "aliases": []
    },
    {
        "slug": "rivendell",
        "name": "Rivendell",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Elven refuge of Elrond.",
        "description": "Rivendell shelters Bilbo and Frodo and hosts the Council of Elrond.",
        "aliases": []
    },
    {
        "slug": "lothlorien",
        "name": "Lothlórien",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Golden wood ruled by Galadriel.",
        "description": "Lothlórien offers the Fellowship rest, gifts, and Galadriel's mirror.",
        "aliases": []
    },
    {
        "slug": "rohan",
        "name": "Rohan",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Horse-lords' kingdom of the Mark.",
        "description": "Rohan under Théoden rides to war against Saruman and later to Gondor's aid.",
        "aliases": []
    },
    {
        "slug": "gondor",
        "name": "Gondor",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Realm of Minas Tirith and the throne Aragorn claims.",
        "description": "Gondor stands as the chief kingdom of Men resisting Mordor in the War of the Ring.",
        "aliases": []
    },
    {
        "slug": "shire",
        "name": "The Shire",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Homeland of the Hobbits.",
        "description": "The Shire is the pastoral home of Bilbo, Frodo, Sam, Merry, and Pippin.",
        "aliases": []
    },
    {
        "slug": "isengard",
        "name": "Isengard",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Saruman's fortress of Orthanc.",
        "description": "Isengard becomes an industrial war machine under Saruman until the Ents flood it.",
        "aliases": []
    },
    {
        "slug": "erebor",
        "name": "Erebor",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Lonely Mountain of the Dwarves.",
        "description": "Erebor is the Dwarven kingdom seized by Smaug and reclaimed in The Hobbit.",
        "aliases": []
    },
    {
        "slug": "war-of-the-ring",
        "name": "War of the Ring",
        "type": "event",
        "evidence": "fiction",
        "short_description": "Final war against Sauron.",
        "description": "The War of the Ring encompasses Helm's Deep, Pelennor Fields, and the march on the Black Gate while Frodo enters Mordor.",
        "aliases": []
    },
    {
        "slug": "council-of-elrond",
        "name": "Council of Elrond",
        "type": "event",
        "evidence": "fiction",
        "short_description": "Meeting that forms the Fellowship.",
        "description": "The Council of Elrond in Rivendell decides that the One Ring must be destroyed and names the Fellowship.",
        "aliases": []
    },
    {
        "slug": "lord-of-the-rings-figures",
        "name": "The Lord of the Rings figures",
        "type": "topic",
        "short_description": "People and named forces central to The Lord of the Rings.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring The Lord of the Rings."
    },
    {
        "slug": "lord-of-the-rings-places",
        "name": "The Lord of the Rings places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Lord of the Rings.",
        "description": "Places, regions, and built sites that give The Lord of the Rings its map — where events and figures concentrate."
    },
    {
        "slug": "lord-of-the-rings-events",
        "name": "The Lord of the Rings events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Lord of the Rings.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Lord of the Rings timeline."
    },
    {
        "slug": "lord-of-the-rings-objects",
        "name": "The Lord of the Rings objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Lord of the Rings.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Lord of the Rings."
    }
];

const relationships = [
    [
        "jrr-tolkien",
        "lord-of-the-rings",
        "created",
        "Tolkien wrote The Lord of the Rings.",
        0.99,
        0.99
    ],
    [
        "jrr-tolkien",
        "the-hobbit",
        "created",
        "Tolkien wrote The Hobbit.",
        0.99,
        0.98
    ],
    [
        "jrr-tolkien",
        "the-silmarillion",
        "created",
        "Tolkien's legendarium fills The Silmarillion.",
        0.98,
        0.95
    ],
    [
        "peter-jackson",
        "lord-of-the-rings",
        "adapted_into",
        "Jackson adapted LOTR into films.",
        0.97,
        0.94
    ],
    [
        "the-hobbit",
        "lord-of-the-rings",
        "preceded",
        "The Hobbit precedes the War of the Ring.",
        0.98,
        0.95
    ],
    [
        "frodo-baggins",
        "one-ring",
        "uses",
        "Frodo bears the One Ring.",
        0.99,
        0.99
    ],
    [
        "frodo-baggins",
        "samwise-gamgee",
        "connected_to",
        "Sam never leaves Frodo.",
        0.99,
        0.99
    ],
    [
        "frodo-baggins",
        "fellowship-of-the-ring",
        "member_of",
        "Frodo is the Ring-bearer of the Fellowship.",
        0.99,
        0.97
    ],
    [
        "frodo-baggins",
        "shire",
        "located_in",
        "Frodo is a Hobbit of the Shire.",
        0.98,
        0.94
    ],
    [
        "bilbo-baggins",
        "one-ring",
        "found",
        "Bilbo finds the Ring under the mountains.",
        0.99,
        0.97
    ],
    [
        "bilbo-baggins",
        "frodo-baggins",
        "connected_to",
        "Bilbo leaves the Ring to Frodo.",
        0.99,
        0.97
    ],
    [
        "gollum",
        "one-ring",
        "seeks",
        "Gollum is enslaved by desire for the Ring.",
        0.99,
        0.98
    ],
    [
        "gollum",
        "frodo-baggins",
        "connected_to",
        "Gollum guides and betrays Frodo.",
        0.98,
        0.97
    ],
    [
        "sauron",
        "one-ring",
        "created",
        "Sauron forged the One Ring.",
        0.99,
        0.99
    ],
    [
        "sauron",
        "mordor",
        "leads",
        "Sauron rules from Mordor.",
        0.99,
        0.98
    ],
    [
        "one-ring",
        "mount-doom",
        "connected_to",
        "Only Mount Doom can unmake the Ring.",
        0.99,
        0.98
    ],
    [
        "gandalf",
        "fellowship-of-the-ring",
        "leads",
        "Gandalf leads the Fellowship.",
        0.99,
        0.97
    ],
    [
        "aragorn",
        "fellowship-of-the-ring",
        "member_of",
        "Aragorn is a Fellowship member.",
        0.99,
        0.96
    ],
    [
        "legolas",
        "fellowship-of-the-ring",
        "member_of",
        "Legolas is a Fellowship member.",
        0.98,
        0.94
    ],
    [
        "gimli",
        "fellowship-of-the-ring",
        "member_of",
        "Gimli is a Fellowship member.",
        0.98,
        0.94
    ],
    [
        "boromir",
        "fellowship-of-the-ring",
        "member_of",
        "Boromir is a Fellowship member.",
        0.98,
        0.94
    ],
    [
        "merry-brandybuck",
        "fellowship-of-the-ring",
        "member_of",
        "Merry is a Fellowship member.",
        0.98,
        0.93
    ],
    [
        "pippin-took",
        "fellowship-of-the-ring",
        "member_of",
        "Pippin is a Fellowship member.",
        0.98,
        0.93
    ],
    [
        "saruman",
        "isengard",
        "leads",
        "Saruman holds Isengard.",
        0.99,
        0.96
    ],
    [
        "saruman",
        "sauron",
        "connected_to",
        "Saruman becomes Sauron's rival-ally.",
        0.96,
        0.94
    ],
    [
        "galadriel",
        "lothlorien",
        "leads",
        "Galadriel rules Lothlórien.",
        0.99,
        0.95
    ],
    [
        "elrond",
        "rivendell",
        "leads",
        "Elrond rules Rivendell.",
        0.99,
        0.95
    ],
    [
        "elrond",
        "council-of-elrond",
        "involved",
        "Elrond hosts the Council.",
        0.99,
        0.96
    ],
    [
        "council-of-elrond",
        "fellowship-of-the-ring",
        "caused",
        "The Council forms the Fellowship.",
        0.99,
        0.97
    ],
    [
        "aragorn",
        "gondor",
        "leads",
        "Aragorn becomes King of Gondor.",
        0.98,
        0.96
    ],
    [
        "eowyn",
        "rohan",
        "member_of",
        "Éowyn is of Rohan's royal house.",
        0.98,
        0.94
    ],
    [
        "eowyn",
        "merry-brandybuck",
        "connected_to",
        "Éowyn and Merry fell the Witch-king together.",
        0.97,
        0.95
    ],
    [
        "thorin-oakenshield",
        "erebor",
        "seeks",
        "Thorin seeks to reclaim Erebor.",
        0.99,
        0.96
    ],
    [
        "smaug",
        "erebor",
        "located_in",
        "Smaug occupies Erebor.",
        0.99,
        0.96
    ],
    [
        "thorin-oakenshield",
        "bilbo-baggins",
        "connected_to",
        "Bilbo joins Thorin's company.",
        0.98,
        0.95
    ],
    [
        "war-of-the-ring",
        "lord-of-the-rings",
        "part_of",
        "The War of the Ring is the saga's climax.",
        0.99,
        0.97
    ],
    [
        "war-of-the-ring",
        "sauron",
        "opposed_by",
        "The Free Peoples war against Sauron.",
        0.99,
        0.97
    ],
    [
        "mordor",
        "mount-doom",
        "contains",
        "Mount Doom stands in Mordor.",
        0.99,
        0.96
    ],
    [
        "lord-of-the-rings",
        "one-ring",
        "connected_to",
        "The saga turns on the One Ring.",
        0.99,
        0.99
    ],
    [
        "lord-of-the-rings",
        "frodo-baggins",
        "connected_to",
        "Frodo is the story's Ring-bearer.",
        0.99,
        0.98
    ],
    [
        "lord-of-the-rings",
        "lord-of-the-rings-figures",
        "contains",
        "The Lord of the Rings figures is a primary trailhead under The Lord of the Rings.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings",
        "lord-of-the-rings-places",
        "contains",
        "The Lord of the Rings places is a primary trailhead under The Lord of the Rings.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings",
        "lord-of-the-rings-events",
        "contains",
        "The Lord of the Rings events is a primary trailhead under The Lord of the Rings.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings",
        "lord-of-the-rings-objects",
        "contains",
        "The Lord of the Rings objects & artifacts is a primary trailhead under The Lord of the Rings.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
