/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "destiny",
        "name": "Destiny",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Bungie's shared-world shooter of Light, Darkness, and Guardians.",
        "description": "Destiny is Bungie's shared-world science-fantasy franchise in which Guardians wield the Light—and later Darkness—against the Cabal, Vex, Hive, Fallen, and Taken around the Traveler and the Last City.",
        "aliases": []
    },
    {
        "slug": "bungie",
        "name": "Bungie",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio that created Destiny.",
        "description": "Bungie developed Destiny and Destiny 2, expanding a living universe of raids, seasons, and conflicts between Light and Darkness.",
        "aliases": []
    },
    {
        "slug": "destiny-1",
        "name": "Destiny (2014)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original Destiny shared-world shooter.",
        "description": "Destiny (2014) introduced Guardians, the Traveler, the City, and campaigns against alien enemies culminating in the Taken King and later expansions.",
        "aliases": []
    },
    {
        "slug": "destiny-2",
        "name": "Destiny 2",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Sequel era of the Red War and beyond.",
        "description": "Destiny 2 continues Guardian warfare from the Red War through Darkness pyramids, the Witch Queen, and ongoing seasonal storytelling.",
        "aliases": []
    },
    {
        "slug": "traveler",
        "name": "The Traveler",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "White sphere that grants the Light.",
        "description": "The Traveler is a mysterious white sphere that terraformed worlds, granted Guardians the Light, and hangs wounded above the Last City.",
        "aliases": []
    },
    {
        "slug": "darkness",
        "name": "The Darkness",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Cosmic force opposing the Traveler's Light.",
        "description": "The Darkness is the cosmic counterpart to the Traveler's Light, arriving with pyramid ships and tempting Guardians with new powers.",
        "aliases": []
    },
    {
        "slug": "light",
        "name": "The Light",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Paracausal power of Guardians and Ghosts.",
        "description": "The Light is the paracausal energy of the Traveler that lets Guardians resurrect, wield Solar, Arc, and Void, and defy death.",
        "aliases": []
    },
    {
        "slug": "ghosts",
        "name": "Ghosts",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Light-born companions that raise Guardians.",
        "description": "Ghosts are small machines of Light that find and resurrect Guardians, serving as companions, scanners, and resurrection anchors.",
        "aliases": []
    },
    {
        "slug": "guardians",
        "name": "Guardians",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Risen warriors defending the Last City.",
        "description": "Guardians are Lightbearers—Hunters, Titans, and Warlocks—raised by Ghosts to defend humanity against cosmic threats.",
        "aliases": []
    },
    {
        "slug": "vanguard",
        "name": "The Vanguard",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Leadership of the City's Guardians.",
        "description": "The Vanguard coordinates Guardian operations from the Tower, historically led by Zavala, Ikora Rey, and Cayde-6.",
        "aliases": []
    },
    {
        "slug": "cabal",
        "name": "Cabal",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Imperial warmachine of Dominus Ghaul and beyond.",
        "description": "The Cabal are a militaristic empire that invaded the City in the Red War and later fractured across Sol's battlefronts.",
        "aliases": []
    },
    {
        "slug": "vex",
        "name": "Vex",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Time-spanning machine collective.",
        "description": "The Vex are radiolarian machines that convert worlds into networked simulation engines spanning past and future.",
        "aliases": []
    },
    {
        "slug": "hive",
        "name": "Hive",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Sword Logic worshippers of the worm gods.",
        "description": "The Hive are a death-worshipping species bound to worm gods, led by figures such as Oryx, Savathûn, and Xivu Arath.",
        "aliases": []
    },
    {
        "slug": "fallen",
        "name": "Fallen",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Eliksni scavenger houses of the Whirlwind.",
        "description": "The Fallen (Eliksni) are multi-armed scavengers whose houses raid Guardians after losing the Traveler in the Whirlwind.",
        "aliases": []
    },
    {
        "slug": "taken",
        "name": "Taken",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Darkness-twisted thralls of Oryx.",
        "description": "The Taken are beings stolen and remade by Darkness through Oryx's power, appearing as warped versions of other species.",
        "aliases": []
    },
    {
        "slug": "awoken",
        "name": "Awoken",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Blue-skinned people of the Reef and Distributary.",
        "description": "The Awoken are a people born between Light and Darkness, ruling the Reef and tied to the Dreaming City's mysteries.",
        "aliases": []
    },
    {
        "slug": "exo",
        "name": "Exo",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Human minds in machine bodies.",
        "description": "Exos are human consciousnesses housed in machine frames, created in the Golden Age and common among Guardians.",
        "aliases": []
    },
    {
        "slug": "savathun",
        "name": "Savathûn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hive Witch Queen of cunning and lies.",
        "description": "Savathûn, the Witch Queen, is a Hive god of cunning who schemes across ages, later claiming Light in Destiny 2's Witch Queen saga.",
        "aliases": []
    },
    {
        "slug": "oryx",
        "name": "Oryx, the Taken King",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hive god-king who created the Taken.",
        "description": "Oryx is the Taken King, a Hive deity who invaded Sol with his Dreadnaught and forged the Taken through communion with the Deep.",
        "aliases": []
    },
    {
        "slug": "crota",
        "name": "Crota",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Oryx's son; god-knight of the Moon.",
        "description": "Crota, Son of Oryx, is a Hive prince whose slaughter on the Moon and in his Oversoul Throne World defined early Destiny raids.",
        "aliases": []
    },
    {
        "slug": "xivu-arath",
        "name": "Xivu Arath",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hive god of war.",
        "description": "Xivu Arath is the Hive god of war, sister to Savathûn and Oryx, spreading conquest through tribute and endless battle.",
        "aliases": []
    },
    {
        "slug": "rasputin",
        "name": "Rasputin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Golden Age Warmind AI.",
        "description": "Rasputin is a Golden Age Warmind artificial intelligence that defended Earth with warsats and later resurfaced as a Destiny ally and mystery.",
        "aliases": []
    },
    {
        "slug": "zavala",
        "name": "Commander Zavala",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Titan Vanguard of the Last City.",
        "description": "Commander Zavala is the Titan Vanguard who leads the City's defense with stoic resolve through the Red War and beyond.",
        "aliases": []
    },
    {
        "slug": "ikora-rey",
        "name": "Ikora Rey",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Warlock Vanguard and Hidden leader.",
        "description": "Ikora Rey is the Warlock Vanguard, a formidable Lightbearer who runs the Hidden intelligence network.",
        "aliases": []
    },
    {
        "slug": "cayde-6",
        "name": "Cayde-6",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Exo Hunter Vanguard of wry fame.",
        "description": "Cayde-6 was the Exo Hunter Vanguard known for humor and daring, whose death drove the Forsaken era of Destiny 2.",
        "aliases": []
    },
    {
        "slug": "eris-morn",
        "name": "Eris Morn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hive-scarred survivor and guide.",
        "description": "Eris Morn survived the Moon's Hive nightmare and guides Guardians against Crota, Oryx, and later Darkness threats.",
        "aliases": []
    },
    {
        "slug": "osiris",
        "name": "Osiris",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Exile Warlock studying the Vex.",
        "description": "Osiris is a legendary Warlock exile obsessed with the Vex, the Infinite Forest, and prophecies of Light and Darkness.",
        "aliases": []
    },
    {
        "slug": "the-city",
        "name": "The Last City",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Humanity's refuge beneath the Traveler.",
        "description": "The Last City is humanity's great refuge under the Traveler, protected by Guardians from the Tower's walls.",
        "aliases": []
    },
    {
        "slug": "tower",
        "name": "The Tower",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Guardian hub overlooking the City.",
        "description": "The Tower is the social and operational hub where Guardians gather vendors, Vanguard leadership, and embark on missions.",
        "aliases": []
    },
    {
        "slug": "reef",
        "name": "The Reef",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Awoken domain in the Asteroid Belt.",
        "description": "The Reef is the Awoken realm among the Asteroid Belt, seat of the Queen and gateway to the Dreaming City.",
        "aliases": []
    },
    {
        "slug": "dreaming-city",
        "name": "The Dreaming City",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Cursed Awoken city of Taken blight.",
        "description": "The Dreaming City is a beautiful, curse-bound Awoken realm plagued by Taken cycles and Hive intrigue.",
        "aliases": []
    },
    {
        "slug": "dreadnaught",
        "name": "The Dreadnaught",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Oryx's massive Hive flagship.",
        "description": "The Dreadnaught is Oryx's throne-world ship in Saturn's rings, site of the Taken King's final confrontation.",
        "aliases": []
    },
    {
        "slug": "pyramid-ships",
        "name": "Pyramid ships",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Darkness vessels entering the system.",
        "description": "Pyramid ships are geometric Darkness vessels that enter Sol, heralding a new age of Darkness communion for Guardians.",
        "aliases": []
    },
    {
        "slug": "destiny-figures",
        "name": "Destiny figures",
        "type": "topic",
        "short_description": "People and named forces central to Destiny.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Destiny."
    },
    {
        "slug": "destiny-places",
        "name": "Destiny places",
        "type": "place",
        "short_description": "Locations and geographies that frame Destiny.",
        "description": "Places, regions, and built sites that give Destiny its map — where events and figures concentrate."
    },
    {
        "slug": "destiny-events",
        "name": "Destiny events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Destiny.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Destiny timeline."
    },
    {
        "slug": "destiny-objects",
        "name": "Destiny objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Destiny.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Destiny."
    },
    {
        "slug": "destiny-factions",
        "name": "Destiny factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Destiny.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Destiny."
    },
    {
        "slug": "destiny-concepts",
        "name": "Destiny concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Destiny.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Destiny readable as a lore graph."
    },
    {
        "slug": "destiny-eras",
        "name": "Destiny eras",
        "type": "event",
        "short_description": "Periodization for Destiny.",
        "description": "Named eras and phases that help readers track how Destiny changes across time."
    }
];

const relationships = [
    [
        "bungie",
        "destiny",
        "created",
        "Bungie created Destiny.",
        0.99,
        0.99
    ],
    [
        "bungie",
        "destiny-1",
        "produced",
        "Bungie developed Destiny (2014).",
        0.98,
        0.96
    ],
    [
        "bungie",
        "destiny-2",
        "produced",
        "Bungie developed Destiny 2.",
        0.98,
        0.96
    ],
    [
        "destiny-1",
        "destiny",
        "part_of",
        "Destiny (2014) begins the franchise.",
        0.99,
        0.97
    ],
    [
        "destiny-2",
        "destiny",
        "part_of",
        "Destiny 2 continues the franchise.",
        0.99,
        0.97
    ],
    [
        "traveler",
        "light",
        "produced",
        "The Traveler grants the Light.",
        0.98,
        0.96
    ],
    [
        "traveler",
        "guardians",
        "created",
        "The Traveler's Light raises Guardians.",
        0.97,
        0.94
    ],
    [
        "ghosts",
        "guardians",
        "supports",
        "Ghosts resurrect and aid Guardians.",
        0.98,
        0.95
    ],
    [
        "darkness",
        "light",
        "opposed_by",
        "Darkness stands against the Light.",
        0.98,
        0.96
    ],
    [
        "darkness",
        "taken",
        "created",
        "Darkness power remakes the Taken.",
        0.96,
        0.93
    ],
    [
        "pyramid-ships",
        "darkness",
        "connected_to",
        "Pyramid ships carry the Darkness.",
        0.97,
        0.94
    ],
    [
        "vanguard",
        "guardians",
        "leads",
        "The Vanguard leads the Guardians.",
        0.97,
        0.94
    ],
    [
        "zavala",
        "vanguard",
        "member_of",
        "Zavala is Titan Vanguard.",
        0.98,
        0.95
    ],
    [
        "ikora-rey",
        "vanguard",
        "member_of",
        "Ikora is Warlock Vanguard.",
        0.98,
        0.95
    ],
    [
        "cayde-6",
        "vanguard",
        "member_of",
        "Cayde-6 was Hunter Vanguard.",
        0.97,
        0.94
    ],
    [
        "cayde-6",
        "exo",
        "connected_to",
        "Cayde-6 is an Exo.",
        0.96,
        0.92
    ],
    [
        "oryx",
        "hive",
        "leads",
        "Oryx ruled as Taken King of the Hive.",
        0.98,
        0.96
    ],
    [
        "oryx",
        "taken",
        "created",
        "Oryx created the Taken.",
        0.98,
        0.96
    ],
    [
        "oryx",
        "dreadnaught",
        "uses",
        "Oryx commands the Dreadnaught.",
        0.97,
        0.94
    ],
    [
        "crota",
        "oryx",
        "related_to",
        "Crota is Oryx's son.",
        0.97,
        0.94
    ],
    [
        "savathun",
        "hive",
        "leads",
        "Savathûn leads Hive schemes as Witch Queen.",
        0.97,
        0.94
    ],
    [
        "savathun",
        "oryx",
        "related_to",
        "Savathûn is Oryx's sister.",
        0.96,
        0.93
    ],
    [
        "xivu-arath",
        "hive",
        "leads",
        "Xivu Arath wages Hive war.",
        0.96,
        0.92
    ],
    [
        "the-city",
        "traveler",
        "located_in",
        "The Last City shelters beneath the Traveler.",
        0.98,
        0.96
    ],
    [
        "tower",
        "the-city",
        "located_in",
        "The Tower overlooks the Last City.",
        0.98,
        0.95
    ],
    [
        "reef",
        "awoken",
        "located_in",
        "The Reef is the Awoken domain.",
        0.97,
        0.94
    ],
    [
        "dreaming-city",
        "reef",
        "part_of",
        "The Dreaming City belongs to the Reef's realm.",
        0.96,
        0.92
    ],
    [
        "eris-morn",
        "hive",
        "opposed_by",
        "Eris guides Guardians against the Hive.",
        0.96,
        0.93
    ],
    [
        "osiris",
        "vex",
        "seeks",
        "Osiris studies the Vex endlessly.",
        0.96,
        0.92
    ],
    [
        "rasputin",
        "destiny",
        "connected_to",
        "Rasputin is a major Warmind figure in Destiny.",
        0.95,
        0.9
    ],
    [
        "cabal",
        "the-city",
        "opposed_by",
        "The Cabal assaulted the Last City.",
        0.96,
        0.93
    ],
    [
        "fallen",
        "traveler",
        "seeks",
        "The Fallen seek the Traveler they lost.",
        0.95,
        0.9
    ],
    [
        "destiny",
        "destiny-figures",
        "contains",
        "Destiny figures is a primary trailhead under Destiny.",
        0.88,
        0.82
    ],
    [
        "destiny",
        "destiny-places",
        "contains",
        "Destiny places is a primary trailhead under Destiny.",
        0.88,
        0.82
    ],
    [
        "destiny",
        "destiny-events",
        "contains",
        "Destiny events is a primary trailhead under Destiny.",
        0.88,
        0.82
    ],
    [
        "destiny",
        "destiny-objects",
        "contains",
        "Destiny objects & artifacts is a primary trailhead under Destiny.",
        0.88,
        0.82
    ],
    [
        "destiny",
        "destiny-factions",
        "contains",
        "Destiny factions & groups is a primary trailhead under Destiny.",
        0.88,
        0.82
    ],
    [
        "destiny",
        "destiny-concepts",
        "contains",
        "Destiny concepts is a primary trailhead under Destiny.",
        0.88,
        0.82
    ],
    [
        "destiny",
        "destiny-eras",
        "contains",
        "Destiny eras is a primary trailhead under Destiny.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
