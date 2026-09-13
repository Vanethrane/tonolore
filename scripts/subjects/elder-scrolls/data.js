/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "elder-scrolls",
        "name": "The Elder Scrolls",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Bethesda Softworks' fantasy RPG series set on Tamriel.",
        "description": "The Elder Scrolls is Bethesda Softworks' open-world fantasy franchise spanning Nirn and Tamriel, from Arena and Daggerfall through Morrowind, Oblivion, and Skyrim.",
        "aliases": []
    },
    {
        "slug": "bethesda-softworks",
        "name": "Bethesda Softworks",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher and developer of The Elder Scrolls.",
        "description": "Bethesda Softworks publishes The Elder Scrolls and related titles, with Bethesda Game Studios developing major single-player entries such as Morrowind, Oblivion, and Skyrim.",
        "aliases": []
    },
    {
        "slug": "nirn",
        "name": "Nirn",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Mortal planet of Mundus.",
        "description": "Nirn is the mortal world of Mundus where Tamriel and other continents lie, shaped by divine creation myths of the Aedra and Daedra.",
        "aliases": []
    },
    {
        "slug": "tamriel",
        "name": "Tamriel",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Main continent of Elder Scrolls games.",
        "description": "Tamriel is the continent hosting Cyrodiil, Skyrim, Morrowind, and other provinces, long contested by empires, dragons, and divine intrigue.",
        "aliases": []
    },
    {
        "slug": "cyrodiil",
        "name": "Cyrodiil",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Heartland province of the Empire.",
        "description": "Cyrodiil is the Imperial heartland of Tamriel, centered on the Imperial City and White-Gold Tower, and the setting of The Elder Scrolls IV: Oblivion.",
        "aliases": []
    },
    {
        "slug": "skyrim",
        "name": "Skyrim",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Northern province of the Nords.",
        "description": "Skyrim is the cold homeland of the Nords, torn by civil war and the return of dragons in The Elder Scrolls V: Skyrim.",
        "aliases": []
    },
    {
        "slug": "morrowind",
        "name": "Morrowind",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Eastern province of the Dunmer.",
        "description": "Morrowind is the ash-swept homeland of the Dunmer, dominated by Red Mountain, the Tribunal, and the island of Vvardenfell.",
        "aliases": []
    },
    {
        "slug": "vvardenfell",
        "name": "Vvardenfell",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Volcanic island setting of Morrowind the game.",
        "description": "Vvardenfell is the great island of Morrowind around Red Mountain, where the Nerevarine confronts Dagoth Ur in The Elder Scrolls III.",
        "aliases": []
    },
    {
        "slug": "imperial-city",
        "name": "Imperial City",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Capital of Cyrodiil on Lake Rumare.",
        "description": "The Imperial City is Cyrodiil's capital, built around White-Gold Tower and a hub of Empire, intrigue, and the Oblivion Crisis.",
        "aliases": []
    },
    {
        "slug": "white-gold-tower",
        "name": "White-Gold Tower",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Mythic tower at the heart of the Imperial City.",
        "description": "White-Gold Tower is a metaphysical Tower anchoring Mundus, seat of Imperial power in the Imperial City of Cyrodiil.",
        "aliases": []
    },
    {
        "slug": "whiterun",
        "name": "Whiterun",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Central hold city of Skyrim.",
        "description": "Whiterun is a major hold of Skyrim under Jarl Balgruuf, often the Dragonborn's early ally against dragons and Alduin.",
        "aliases": []
    },
    {
        "slug": "aedra",
        "name": "Aedra",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Divines who helped create Mundus.",
        "description": "The Aedra are the ancestral spirits who sacrificed power to create Mundus; many are worshipped as the Eight or Nine Divines.",
        "aliases": []
    },
    {
        "slug": "daedra",
        "name": "Daedra",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Princes and spirits of Oblivion.",
        "description": "Daedra are otherworldly beings who did not create Mundus; their Princes rule Oblivion realms and meddle constantly in mortal affairs.",
        "aliases": []
    },
    {
        "slug": "nine-divines",
        "name": "Nine Divines",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Imperial pantheon including Talos.",
        "description": "The Nine Divines are the Empire's chief pantheon of Aedra plus Talos, contested by Thalmor doctrine that rejects Talos's divinity.",
        "aliases": []
    },
    {
        "slug": "talos",
        "name": "Talos",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Tiber Septim ascended as a Divine.",
        "description": "Talos is the divine aspect of Tiber Septim, conqueror who founded the Third Empire and whose worship defines Imperial identity in Skyrim.",
        "aliases": []
    },
    {
        "slug": "akatosh",
        "name": "Akatosh",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dragon God of Time; chief of the Divines.",
        "description": "Akatosh is the chief Divine associated with time and dragons, linked to the Dragonborn and the mythic struggle against Alduin.",
        "aliases": []
    },
    {
        "slug": "azura",
        "name": "Azura",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Daedric Prince of dusk and dawn.",
        "description": "Azura is a Daedric Prince of prophecy and transition who guides the Nerevarine and curses the Tribunal after their betrayal.",
        "aliases": []
    },
    {
        "slug": "sheogorath",
        "name": "Sheogorath",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Daedric Prince of Madness.",
        "description": "Sheogorath rules the Shivering Isles as Prince of Madness, later tied to the Hero of Kvatch's Mantling in Oblivion's expansion.",
        "aliases": []
    },
    {
        "slug": "mehrunes-dagon",
        "name": "Mehrunes Dagon",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Daedric Prince of destruction and change.",
        "description": "Mehrunes Dagon is the Prince of Destruction whose invasion of Tamriel drives the Oblivion Crisis at the end of the Third Era.",
        "aliases": []
    },
    {
        "slug": "alduin",
        "name": "Alduin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "World-Eater; firstborn of Akatosh.",
        "description": "Alduin is the World-Eater dragon prophesied to consume the world, returning in Skyrim to be challenged by the Last Dragonborn.",
        "aliases": []
    },
    {
        "slug": "dragonborn",
        "name": "Dragonborn",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Mortals with the soul and Voice of dragons.",
        "description": "Dragonborn are mortals blessed with dragon souls and the Thu'um; the Last Dragonborn rises in Skyrim to face Alduin.",
        "aliases": []
    },
    {
        "slug": "septim-empire",
        "name": "Septim Empire",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Third Empire founded by Tiber Septim.",
        "description": "The Septim Empire united Tamriel under Tiber Septim and his heirs until the Oblivion Crisis ended the Septim bloodline.",
        "aliases": []
    },
    {
        "slug": "tiber-septim",
        "name": "Tiber Septim",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Conqueror who founded the Third Empire.",
        "description": "Tiber Septim conquered Tamriel with the Numidium, founded the Third Empire, and is worshipped as the Divine Talos.",
        "aliases": []
    },
    {
        "slug": "martin-septim",
        "name": "Martin Septim",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Last Septim emperor; ended the Oblivion Crisis.",
        "description": "Martin Septim, illegitimate heir of Uriel VII, becomes emperor and sacrifices himself as Akatosh's avatar to close the Oblivion Crisis.",
        "aliases": []
    },
    {
        "slug": "tribunal",
        "name": "Tribunal",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Living god-kings of Morrowind: ALMSIVI.",
        "description": "The Tribunal—Vivec, Almalexia, and Sotha Sil—ruled Morrowind as living gods after using the Heart of Lorkhan, until their power failed.",
        "aliases": []
    },
    {
        "slug": "vivec",
        "name": "Vivec",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Warrior-poet of the Tribunal.",
        "description": "Vivec is the poet-warrior Tribune of Morrowind, author of the Lessons, and a central figure of Dunmer faith and the Nerevarine prophecies.",
        "aliases": []
    },
    {
        "slug": "nerevarine",
        "name": "Nerevarine",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Reborn champion of Morrowind prophecy.",
        "description": "The Nerevarine is the prophesied reincarnation of Indoril Nerevar who defeats Dagoth Ur beneath Red Mountain in Morrowind.",
        "aliases": []
    },
    {
        "slug": "nords",
        "name": "Nords",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "People of Skyrim.",
        "description": "Nords are the hardy human people of Skyrim, heirs of Atmora and the Dragon War, divided by Empire and Stormcloak loyalties.",
        "aliases": []
    },
    {
        "slug": "dunmer",
        "name": "Dunmer",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Dark Elves of Morrowind.",
        "description": "The Dunmer, or Dark Elves, inhabit Morrowind under Tribunal and later Imperial rule, shaped by Azura's curse and Red Mountain's ash.",
        "aliases": []
    },
    {
        "slug": "elder-scrolls-iii-morrowind",
        "name": "The Elder Scrolls III: Morrowind",
        "type": "work",
        "evidence": "fiction",
        "short_description": "2002 RPG set on Vvardenfell.",
        "description": "Morrowind follows the Nerevarine on Vvardenfell against Dagoth Ur, the Sixth House, and the unraveling divinity of the Tribunal.",
        "aliases": []
    },
    {
        "slug": "elder-scrolls-iv-oblivion",
        "name": "The Elder Scrolls IV: Oblivion",
        "type": "work",
        "evidence": "fiction",
        "short_description": "2006 RPG of the Oblivion Crisis.",
        "description": "Oblivion is set in Cyrodiil during Mehrunes Dagon's invasion, following the Hero of Kvatch and Martin Septim through the Oblivion Crisis.",
        "aliases": []
    },
    {
        "slug": "elder-scrolls-v-skyrim",
        "name": "The Elder Scrolls V: Skyrim",
        "type": "work",
        "evidence": "fiction",
        "short_description": "2011 RPG of dragons and civil war.",
        "description": "Skyrim follows the Last Dragonborn through Skyrim's civil war, the return of dragons, and the prophesied defeat of Alduin.",
        "aliases": []
    },
    {
        "slug": "oblivion-crisis",
        "name": "Oblivion Crisis",
        "type": "event",
        "evidence": "fiction",
        "short_description": "Daedric invasion ending the Third Era.",
        "description": "The Oblivion Crisis is Mehrunes Dagon's invasion of Tamriel after Uriel VII's assassination, ended by Martin Septim at the Imperial City.",
        "aliases": []
    },
    {
        "slug": "elder-scrolls-figures",
        "name": "The Elder Scrolls figures",
        "type": "topic",
        "short_description": "People and named forces central to The Elder Scrolls.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring The Elder Scrolls."
    },
    {
        "slug": "elder-scrolls-places",
        "name": "The Elder Scrolls places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Elder Scrolls.",
        "description": "Places, regions, and built sites that give The Elder Scrolls its map — where events and figures concentrate."
    },
    {
        "slug": "elder-scrolls-events",
        "name": "The Elder Scrolls events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Elder Scrolls.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Elder Scrolls timeline."
    },
    {
        "slug": "elder-scrolls-objects",
        "name": "The Elder Scrolls objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Elder Scrolls.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Elder Scrolls."
    },
    {
        "slug": "elder-scrolls-factions",
        "name": "The Elder Scrolls factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Elder Scrolls.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Elder Scrolls."
    },
    {
        "slug": "elder-scrolls-concepts",
        "name": "The Elder Scrolls concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Elder Scrolls.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Elder Scrolls readable as a lore graph."
    },
    {
        "slug": "elder-scrolls-eras",
        "name": "The Elder Scrolls eras",
        "type": "event",
        "short_description": "Periodization for The Elder Scrolls.",
        "description": "Named eras and phases that help readers track how The Elder Scrolls changes across time."
    }
];

const relationships = [
    [
        "bethesda-softworks",
        "elder-scrolls",
        "created",
        "Bethesda Softworks publishes The Elder Scrolls.",
        0.99,
        0.99
    ],
    [
        "nirn",
        "elder-scrolls",
        "part_of",
        "Nirn is the mortal world of the series.",
        0.98,
        0.96
    ],
    [
        "tamriel",
        "nirn",
        "located_in",
        "Tamriel is a continent on Nirn.",
        0.99,
        0.97
    ],
    [
        "cyrodiil",
        "tamriel",
        "located_in",
        "Cyrodiil is a province of Tamriel.",
        0.98,
        0.96
    ],
    [
        "skyrim",
        "tamriel",
        "located_in",
        "Skyrim is a province of Tamriel.",
        0.98,
        0.96
    ],
    [
        "morrowind",
        "tamriel",
        "located_in",
        "Morrowind is a province of Tamriel.",
        0.98,
        0.96
    ],
    [
        "vvardenfell",
        "morrowind",
        "located_in",
        "Vvardenfell is an island of Morrowind.",
        0.98,
        0.95
    ],
    [
        "imperial-city",
        "cyrodiil",
        "located_in",
        "The Imperial City is in Cyrodiil.",
        0.98,
        0.95
    ],
    [
        "white-gold-tower",
        "imperial-city",
        "located_in",
        "White-Gold Tower stands in the Imperial City.",
        0.97,
        0.94
    ],
    [
        "aedra",
        "nirn",
        "connected_to",
        "The Aedra helped create Mundus and Nirn.",
        0.97,
        0.94
    ],
    [
        "daedra",
        "elder-scrolls",
        "part_of",
        "Daedra are central to Elder Scrolls cosmology.",
        0.96,
        0.92
    ],
    [
        "talos",
        "nine-divines",
        "member_of",
        "Talos is worshipped among the Nine Divines.",
        0.97,
        0.94
    ],
    [
        "talos",
        "tiber-septim",
        "connected_to",
        "Talos is the divine aspect of Tiber Septim.",
        0.98,
        0.96
    ],
    [
        "akatosh",
        "aedra",
        "member_of",
        "Akatosh is chief among the Aedra Divines.",
        0.97,
        0.94
    ],
    [
        "azura",
        "daedra",
        "member_of",
        "Azura is a Daedric Prince.",
        0.98,
        0.95
    ],
    [
        "sheogorath",
        "daedra",
        "member_of",
        "Sheogorath is a Daedric Prince.",
        0.98,
        0.95
    ],
    [
        "mehrunes-dagon",
        "daedra",
        "member_of",
        "Mehrunes Dagon is a Daedric Prince.",
        0.98,
        0.95
    ],
    [
        "alduin",
        "akatosh",
        "connected_to",
        "Alduin is called firstborn of Akatosh.",
        0.96,
        0.93
    ],
    [
        "septim-empire",
        "tamriel",
        "leads",
        "The Septim Empire ruled Tamriel.",
        0.97,
        0.94
    ],
    [
        "tiber-septim",
        "septim-empire",
        "leads",
        "Tiber Septim founded the Third Empire.",
        0.98,
        0.96
    ],
    [
        "martin-septim",
        "septim-empire",
        "member_of",
        "Martin was the last Septim emperor.",
        0.97,
        0.94
    ],
    [
        "tribunal",
        "morrowind",
        "leads",
        "The Tribunal ruled Morrowind as living gods.",
        0.97,
        0.94
    ],
    [
        "vivec",
        "tribunal",
        "member_of",
        "Vivec is one of the Tribunal.",
        0.99,
        0.97
    ],
    [
        "nerevarine",
        "morrowind",
        "involved",
        "The Nerevarine's story unfolds in Morrowind.",
        0.96,
        0.93
    ],
    [
        "nords",
        "skyrim",
        "located_in",
        "Nords are the people of Skyrim.",
        0.97,
        0.94
    ],
    [
        "dunmer",
        "morrowind",
        "located_in",
        "Dunmer are the people of Morrowind.",
        0.97,
        0.94
    ],
    [
        "elder-scrolls-iii-morrowind",
        "elder-scrolls",
        "part_of",
        "Morrowind is a mainline Elder Scrolls game.",
        0.99,
        0.97
    ],
    [
        "elder-scrolls-iv-oblivion",
        "elder-scrolls",
        "part_of",
        "Oblivion is a mainline Elder Scrolls game.",
        0.99,
        0.97
    ],
    [
        "elder-scrolls-v-skyrim",
        "elder-scrolls",
        "part_of",
        "Skyrim is a mainline Elder Scrolls game.",
        0.99,
        0.97
    ],
    [
        "elder-scrolls-iii-morrowind",
        "vvardenfell",
        "located_in",
        "Morrowind is set primarily on Vvardenfell.",
        0.97,
        0.94
    ],
    [
        "elder-scrolls-iv-oblivion",
        "cyrodiil",
        "located_in",
        "Oblivion is set in Cyrodiil.",
        0.97,
        0.94
    ],
    [
        "elder-scrolls-v-skyrim",
        "skyrim",
        "located_in",
        "Skyrim is set in the province of Skyrim.",
        0.98,
        0.96
    ],
    [
        "oblivion-crisis",
        "mehrunes-dagon",
        "involved",
        "Mehrunes Dagon drives the Oblivion Crisis.",
        0.98,
        0.96
    ],
    [
        "oblivion-crisis",
        "martin-septim",
        "involved",
        "Martin Septim ends the Oblivion Crisis.",
        0.97,
        0.94
    ],
    [
        "elder-scrolls",
        "elder-scrolls-figures",
        "contains",
        "The Elder Scrolls figures is a primary trailhead under The Elder Scrolls.",
        0.88,
        0.82
    ],
    [
        "elder-scrolls",
        "elder-scrolls-places",
        "contains",
        "The Elder Scrolls places is a primary trailhead under The Elder Scrolls.",
        0.88,
        0.82
    ],
    [
        "elder-scrolls",
        "elder-scrolls-events",
        "contains",
        "The Elder Scrolls events is a primary trailhead under The Elder Scrolls.",
        0.88,
        0.82
    ],
    [
        "elder-scrolls",
        "elder-scrolls-objects",
        "contains",
        "The Elder Scrolls objects & artifacts is a primary trailhead under The Elder Scrolls.",
        0.88,
        0.82
    ],
    [
        "elder-scrolls",
        "elder-scrolls-factions",
        "contains",
        "The Elder Scrolls factions & groups is a primary trailhead under The Elder Scrolls.",
        0.88,
        0.82
    ],
    [
        "elder-scrolls",
        "elder-scrolls-concepts",
        "contains",
        "The Elder Scrolls concepts is a primary trailhead under The Elder Scrolls.",
        0.88,
        0.82
    ],
    [
        "elder-scrolls",
        "elder-scrolls-eras",
        "contains",
        "The Elder Scrolls eras is a primary trailhead under The Elder Scrolls.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
