/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "warhammer-40k",
        "name": "Warhammer 40,000",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Games Workshop's grimdark far-future war setting.",
        "description": "Warhammer 40,000 is Games Workshop's science-fantasy setting of the Imperium of Man, Chaos, xenos empires, and endless war across a galaxy ruled by fear, faith, and the Warp.",
        "aliases": []
    },
    {
        "slug": "games-workshop",
        "name": "Games Workshop",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher and rights holder of Warhammer 40,000.",
        "description": "Games Workshop creates and publishes Warhammer 40,000 miniatures, rules, novels, and related media set in the far future of the Imperium and its enemies.",
        "aliases": []
    },
    {
        "slug": "imperium-of-man",
        "name": "Imperium of Man",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Human galactic empire ruled in the Emperor's name.",
        "description": "The Imperium of Man spans a million worlds under the Emperor of Mankind, held together by the Adeptus Terra, Space Marines, Imperial Guard, and ruthless faith against Chaos and xenos.",
        "aliases": []
    },
    {
        "slug": "emperor-of-mankind",
        "name": "Emperor of Mankind",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Immortal master of humanity enthroned on Terra.",
        "description": "The Emperor of Mankind unified Terra, created the Primarchs and Space Marines, and now sits as a psychic corpse-god on the Golden Throne, sustaining the Imperium through the Astronomican.",
        "aliases": []
    },
    {
        "slug": "chaos",
        "name": "Chaos",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Corrupting power of the Warp and the Chaos Gods.",
        "description": "Chaos is the ruinous force of the Warp, embodied by the Chaos Gods and their daemons, cults, and Traitor Legions who wage the Long War against the Imperium.",
        "aliases": []
    },
    {
        "slug": "chaos-gods",
        "name": "Chaos Gods",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Four Ruinous Powers of the Warp.",
        "description": "The Chaos Gods—Khorne, Tzeentch, Nurgle, and Slaanesh—are vast Warp entities fed by mortal emotion, commanding daemons and mortal servants across the galaxy.",
        "aliases": []
    },
    {
        "slug": "space-marines",
        "name": "Space Marines",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Genetically enhanced Adeptus Astartes warriors.",
        "description": "Space Marines, or Adeptus Astartes, are transhuman warriors created from the Emperor's gene-craft, organized into Chapters that defend the Imperium of Man.",
        "aliases": []
    },
    {
        "slug": "ultramarines",
        "name": "Ultramarines",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Exemplary Chapter of Roboute Guilliman.",
        "description": "The Ultramarines are a First Founding Chapter of Space Marines led in legend by Primarch Roboute Guilliman, famed for discipline, the Codex Astartes, and the realm of Ultramar.",
        "aliases": []
    },
    {
        "slug": "blood-angels",
        "name": "Blood Angels",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Noble yet cursed sons of Sanguinius.",
        "description": "The Blood Angels are Space Marines of Primarch Sanguinius, renowned for artistry and fury, and haunted by the Red Thirst and Black Rage.",
        "aliases": []
    },
    {
        "slug": "black-legion",
        "name": "Black Legion",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Abaddon's Traitor Legion of Chaos Space Marines.",
        "description": "The Black Legion is the Chaos Space Marine host forged from the Sons of Horus under Abaddon the Despoiler, spearheading Black Crusades from the Eye of Terror.",
        "aliases": []
    },
    {
        "slug": "adeptus-mechanicus",
        "name": "Adeptus Mechanicus",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Tech-priesthood of Mars.",
        "description": "The Adeptus Mechanicus worships the Omnissiah and controls Imperial technology from Mars, binding the Imperium's forges, starships, and war engines to its Machine Cult.",
        "aliases": []
    },
    {
        "slug": "adeptus-custodes",
        "name": "Adeptus Custodes",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Golden guardians of the Emperor.",
        "description": "The Adeptus Custodes are the Emperor's elite companions, guarding the Imperial Palace on Terra with unmatched skill and loyalty.",
        "aliases": []
    },
    {
        "slug": "adepta-sororitas",
        "name": "Adepta Sororitas",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Sisters of Battle; militant arm of the Ecclesiarchy.",
        "description": "The Adepta Sororitas, or Sisters of Battle, are warrior-nuns of the Imperial Creed who purge heresy with bolter, flame, and faith.",
        "aliases": []
    },
    {
        "slug": "astra-militarum",
        "name": "Astra Militarum",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Imperial Guard; massed human armies of the Imperium.",
        "description": "The Astra Militarum—the Imperial Guard—are the Imperium's countless mortal soldiers, holding worlds with tanks, artillery, and overwhelming numbers.",
        "aliases": []
    },
    {
        "slug": "inquisition",
        "name": "Inquisition",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Secret police of the Imperium against heresy and xenos.",
        "description": "The Inquisition wields near-absolute authority to hunt Chaos, witches, and alien threats, operating through Ordo Malleus, Hereticus, and Xenos.",
        "aliases": []
    },
    {
        "slug": "orks",
        "name": "Orks",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Fungoid greenskin warriors of endless Waaagh!",
        "description": "Orks are a savage, fungus-based species that thrives on war, building ramshackle technology and launching Waaagh! crusades across the galaxy.",
        "aliases": []
    },
    {
        "slug": "aeldari",
        "name": "Aeldari",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Ancient psychic species once called Eldar.",
        "description": "The Aeldari (Eldar) are a dwindling psychic species whose empire fell to Slaanesh; Craftworlds, Drukhari, and Harlequins survive amid the ruins of their glory.",
        "aliases": []
    },
    {
        "slug": "necrons",
        "name": "Necrons",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Undying robotic dynasties of the ancient Necrontyr.",
        "description": "Necrons are immortal machine-bodies of the Necrontyr, awakening from tomb worlds to reclaim the galaxy with gauss weapons and star-gods' leftovers.",
        "aliases": []
    },
    {
        "slug": "tyranids",
        "name": "Tyranids",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Extragalactic hive fleets that devour biomass.",
        "description": "Tyranids are a ravenous alien swarm guided by the Hive Mind, stripping worlds of life to fuel further invasion of the galaxy.",
        "aliases": []
    },
    {
        "slug": "tau-empire",
        "name": "T'au Empire",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Young expansionist empire of the Greater Good.",
        "description": "The T'au Empire expands through diplomacy and advanced firearms under the Ethereals' Greater Good, fielding battlesuits against Imperium and xenos alike.",
        "aliases": []
    },
    {
        "slug": "primarchs",
        "name": "Primarchs",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Demigod sons of the Emperor who led the Legions.",
        "description": "The Primarchs are twenty demigod generals created by the Emperor; scattered by Chaos, they later led the Space Marine Legions in the Great Crusade and Horus Heresy.",
        "aliases": []
    },
    {
        "slug": "horus",
        "name": "Horus Lupercal",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Warmaster who betrayed the Emperor.",
        "description": "Horus Lupercal, favored Primarch and Warmaster, fell to Chaos and led half the Legions in the Horus Heresy against the Emperor of Mankind.",
        "aliases": []
    },
    {
        "slug": "roboute-guilliman",
        "name": "Roboute Guilliman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Primarch of the Ultramarines; Lord Commander of the Imperium.",
        "description": "Roboute Guilliman, Primarch of the Ultramarines, authored the Codex Astartes and returned in the Era Indomitus as Lord Commander to stabilize the Imperium.",
        "aliases": []
    },
    {
        "slug": "abaddon-the-despoiler",
        "name": "Abaddon the Despoiler",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Warmaster of Chaos; master of the Black Legion.",
        "description": "Abaddon the Despoiler inherited Horus's mantle, leads the Black Legion, and launches Black Crusades to shatter Cadia and the Imperium.",
        "aliases": []
    },
    {
        "slug": "sanguinius",
        "name": "Sanguinius",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Angelic Primarch of the Blood Angels.",
        "description": "Sanguinius, Primarch of the Blood Angels, fought at Terra in the Horus Heresy and died confronting Horus aboard the Vengeful Spirit.",
        "aliases": []
    },
    {
        "slug": "warp",
        "name": "The Warp",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Immaterium; psychic realm of Chaos and travel.",
        "description": "The Warp, or Immaterium, is the parallel realm of psychic energy used for faster-than-light travel and home to daemons and the Chaos Gods.",
        "aliases": []
    },
    {
        "slug": "terra",
        "name": "Holy Terra",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Throneworld of the Imperium.",
        "description": "Holy Terra is humanity's homeworld and capital of the Imperium of Man, site of the Imperial Palace and the Golden Throne of the Emperor.",
        "aliases": []
    },
    {
        "slug": "mars",
        "name": "Mars",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Forge World seat of the Adeptus Mechanicus.",
        "description": "Mars is the Red Planet of the Machine Cult, greatest forge of the Adeptus Mechanicus and partner-world to Terra in the Sol System.",
        "aliases": []
    },
    {
        "slug": "cadia",
        "name": "Cadia",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Fortress world guarding the Eye of Terror.",
        "description": "Cadia was the Imperium's fortress gate against the Eye of Terror until Abaddon's Thirteenth Black Crusade broke the world and flooded the galaxy with Warp storms.",
        "aliases": []
    },
    {
        "slug": "eye-of-terror",
        "name": "Eye of Terror",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Vast Warp rift and Traitor Legion refuge.",
        "description": "The Eye of Terror is a colossal Warp–realspace wound where Chaos Space Marines and daemons hold court beyond Imperial law.",
        "aliases": []
    },
    {
        "slug": "horus-heresy",
        "name": "Horus Heresy",
        "type": "event",
        "evidence": "fiction",
        "short_description": "Civil war that nearly destroyed the Imperium.",
        "description": "The Horus Heresy is the galaxy-spanning civil war in which Warmaster Horus and Traitor Legions rebelled against the Emperor, ending in the Siege of Terra.",
        "aliases": []
    },
    {
        "slug": "great-crusade",
        "name": "Great Crusade",
        "type": "event",
        "evidence": "fiction",
        "short_description": "Emperor's campaign to reunite humanity.",
        "description": "The Great Crusade was the Emperor's drive to reclaim human worlds with Primarchs and Space Marine Legions before the Horus Heresy shattered that dream.",
        "aliases": []
    },
    {
        "slug": "astronomican",
        "name": "Astronomican",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Psychic beacon powered by the Emperor.",
        "description": "The Astronomican is the psychic lighthouse projected from Terra that guides Imperial ships through the Warp, sustained by the Emperor and countless psykers.",
        "aliases": []
    },
    {
        "slug": "warhammer-40k-figures",
        "name": "Warhammer 40,000 figures",
        "type": "topic",
        "short_description": "People and named forces central to Warhammer 40,000.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Warhammer 40,000."
    },
    {
        "slug": "warhammer-40k-places",
        "name": "Warhammer 40,000 places",
        "type": "place",
        "short_description": "Locations and geographies that frame Warhammer 40,000.",
        "description": "Places, regions, and built sites that give Warhammer 40,000 its map — where events and figures concentrate."
    },
    {
        "slug": "warhammer-40k-events",
        "name": "Warhammer 40,000 events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Warhammer 40,000.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Warhammer 40,000 timeline."
    },
    {
        "slug": "warhammer-40k-objects",
        "name": "Warhammer 40,000 objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Warhammer 40,000.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Warhammer 40,000."
    },
    {
        "slug": "warhammer-40k-factions",
        "name": "Warhammer 40,000 factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Warhammer 40,000.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Warhammer 40,000."
    },
    {
        "slug": "warhammer-40k-concepts",
        "name": "Warhammer 40,000 concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Warhammer 40,000.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Warhammer 40,000 readable as a lore graph."
    },
    {
        "slug": "warhammer-40k-eras",
        "name": "Warhammer 40,000 eras",
        "type": "event",
        "short_description": "Periodization for Warhammer 40,000.",
        "description": "Named eras and phases that help readers track how Warhammer 40,000 changes across time."
    }
];

const relationships = [
    [
        "games-workshop",
        "warhammer-40k",
        "created",
        "Games Workshop publishes Warhammer 40,000.",
        0.99,
        0.99
    ],
    [
        "imperium-of-man",
        "warhammer-40k",
        "part_of",
        "The Imperium is central to Warhammer 40,000.",
        0.99,
        0.98
    ],
    [
        "emperor-of-mankind",
        "imperium-of-man",
        "leads",
        "The Emperor is master of the Imperium of Man.",
        0.99,
        0.98
    ],
    [
        "emperor-of-mankind",
        "terra",
        "located_in",
        "The Emperor sits enthroned on Holy Terra.",
        0.98,
        0.96
    ],
    [
        "chaos",
        "warp",
        "connected_to",
        "Chaos arises from and thrives in the Warp.",
        0.99,
        0.97
    ],
    [
        "chaos-gods",
        "chaos",
        "part_of",
        "The Chaos Gods embody Chaos in the Warp.",
        0.98,
        0.96
    ],
    [
        "chaos-gods",
        "warp",
        "located_in",
        "The Chaos Gods dwell in the Warp.",
        0.97,
        0.94
    ],
    [
        "space-marines",
        "imperium-of-man",
        "member_of",
        "Space Marines defend the Imperium.",
        0.98,
        0.96
    ],
    [
        "ultramarines",
        "space-marines",
        "part_of",
        "The Ultramarines are a Space Marine Chapter.",
        0.99,
        0.97
    ],
    [
        "blood-angels",
        "space-marines",
        "part_of",
        "The Blood Angels are a Space Marine Chapter.",
        0.98,
        0.96
    ],
    [
        "black-legion",
        "chaos",
        "member_of",
        "The Black Legion serves Chaos.",
        0.98,
        0.96
    ],
    [
        "adeptus-mechanicus",
        "imperium-of-man",
        "member_of",
        "The Mechanicus is bound to the Imperium.",
        0.97,
        0.94
    ],
    [
        "adeptus-mechanicus",
        "mars",
        "located_in",
        "The Adeptus Mechanicus is based on Mars.",
        0.98,
        0.95
    ],
    [
        "adeptus-custodes",
        "emperor-of-mankind",
        "supports",
        "The Custodes guard the Emperor.",
        0.98,
        0.95
    ],
    [
        "adepta-sororitas",
        "imperium-of-man",
        "member_of",
        "The Sisters serve the Imperial Creed.",
        0.96,
        0.92
    ],
    [
        "astra-militarum",
        "imperium-of-man",
        "member_of",
        "The Imperial Guard fights for the Imperium.",
        0.97,
        0.94
    ],
    [
        "inquisition",
        "imperium-of-man",
        "member_of",
        "The Inquisition polices the Imperium.",
        0.97,
        0.94
    ],
    [
        "orks",
        "warhammer-40k",
        "part_of",
        "Orks are a major xenos threat in the setting.",
        0.96,
        0.92
    ],
    [
        "aeldari",
        "warhammer-40k",
        "part_of",
        "The Aeldari are a major faction in the setting.",
        0.96,
        0.92
    ],
    [
        "necrons",
        "warhammer-40k",
        "part_of",
        "Necrons are a major xenos faction.",
        0.96,
        0.92
    ],
    [
        "primarchs",
        "emperor-of-mankind",
        "connected_to",
        "The Primarchs were created by the Emperor.",
        0.99,
        0.97
    ],
    [
        "horus",
        "primarchs",
        "member_of",
        "Horus is a Primarch.",
        0.99,
        0.98
    ],
    [
        "roboute-guilliman",
        "primarchs",
        "member_of",
        "Guilliman is a Primarch.",
        0.99,
        0.97
    ],
    [
        "roboute-guilliman",
        "ultramarines",
        "leads",
        "Guilliman is Primarch of the Ultramarines.",
        0.99,
        0.98
    ],
    [
        "sanguinius",
        "primarchs",
        "member_of",
        "Sanguinius is a Primarch.",
        0.98,
        0.96
    ],
    [
        "sanguinius",
        "blood-angels",
        "leads",
        "Sanguinius led the Blood Angels.",
        0.98,
        0.96
    ],
    [
        "abaddon-the-despoiler",
        "black-legion",
        "leads",
        "Abaddon leads the Black Legion.",
        0.99,
        0.97
    ],
    [
        "abaddon-the-despoiler",
        "horus",
        "connected_to",
        "Abaddon was First Captain under Horus.",
        0.97,
        0.94
    ],
    [
        "horus-heresy",
        "horus",
        "involved",
        "Horus led the rebellion of the Horus Heresy.",
        0.99,
        0.98
    ],
    [
        "horus-heresy",
        "imperium-of-man",
        "involved",
        "The Heresy nearly destroyed the Imperium.",
        0.98,
        0.96
    ],
    [
        "cadia",
        "eye-of-terror",
        "connected_to",
        "Cadia guarded the Cadian Gate to the Eye.",
        0.98,
        0.95
    ],
    [
        "eye-of-terror",
        "warp",
        "part_of",
        "The Eye of Terror is a Warp rift.",
        0.97,
        0.94
    ],
    [
        "astronomican",
        "emperor-of-mankind",
        "uses",
        "The Astronomican is powered through the Emperor.",
        0.97,
        0.94
    ],
    [
        "terra",
        "imperium-of-man",
        "located_in",
        "Terra is the throneworld of the Imperium.",
        0.99,
        0.97
    ],
    [
        "warhammer-40k",
        "warhammer-40k-figures",
        "contains",
        "Warhammer 40,000 figures is a primary trailhead under Warhammer 40,000.",
        0.88,
        0.82
    ],
    [
        "warhammer-40k",
        "warhammer-40k-places",
        "contains",
        "Warhammer 40,000 places is a primary trailhead under Warhammer 40,000.",
        0.88,
        0.82
    ],
    [
        "warhammer-40k",
        "warhammer-40k-events",
        "contains",
        "Warhammer 40,000 events is a primary trailhead under Warhammer 40,000.",
        0.88,
        0.82
    ],
    [
        "warhammer-40k",
        "warhammer-40k-objects",
        "contains",
        "Warhammer 40,000 objects & artifacts is a primary trailhead under Warhammer 40,000.",
        0.88,
        0.82
    ],
    [
        "warhammer-40k",
        "warhammer-40k-factions",
        "contains",
        "Warhammer 40,000 factions & groups is a primary trailhead under Warhammer 40,000.",
        0.88,
        0.82
    ],
    [
        "warhammer-40k",
        "warhammer-40k-concepts",
        "contains",
        "Warhammer 40,000 concepts is a primary trailhead under Warhammer 40,000.",
        0.88,
        0.82
    ],
    [
        "warhammer-40k",
        "warhammer-40k-eras",
        "contains",
        "Warhammer 40,000 eras is a primary trailhead under Warhammer 40,000.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
