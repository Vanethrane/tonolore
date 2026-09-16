/*
 * Warhammer 40,000 subject data — Games Workshop's grimdark science-fantasy setting.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "fiction", extras = {}) {
    entities.push({
        slug,
        name,
        type,
        evidence,
        short_description,
        description,
        aliases: extras.aliases || [],
        parentSlug: extras.parentSlug || undefined
    });
}

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

/* ---------- Root / creators ---------- */

entity(
    "warhammer-40k",
    "Warhammer 40,000",
    "topic",
    "Games Workshop's grimdark far-future war setting.",
    "Warhammer 40,000 is Games Workshop's science-fantasy setting of the Imperium of Man, Chaos, xenos empires, and endless war across a galaxy ruled by fear, faith, and the Warp."
);

entity(
    "games-workshop",
    "Games Workshop",
    "organization",
    "Publisher and rights holder of Warhammer 40,000.",
    "Games Workshop creates and publishes Warhammer 40,000 miniatures, rules, novels, and related media set in the far future of the Imperium and its enemies."
);

/* ---------- Core factions / powers ---------- */

entity(
    "imperium-of-man",
    "Imperium of Man",
    "organization",
    "Human galactic empire ruled in the Emperor's name.",
    "The Imperium of Man spans a million worlds under the Emperor of Mankind, held together by the Adeptus Terra, Space Marines, Imperial Guard, and ruthless faith against Chaos and xenos."
);

entity(
    "emperor-of-mankind",
    "Emperor of Mankind",
    "person",
    "Immortal master of humanity enthroned on Terra.",
    "The Emperor of Mankind unified Terra, created the Primarchs and Space Marines, and now sits as a psychic corpse-god on the Golden Throne, sustaining the Imperium through the Astronomican."
);

entity(
    "chaos",
    "Chaos",
    "concept",
    "Corrupting power of the Warp and the Chaos Gods.",
    "Chaos is the ruinous force of the Warp, embodied by the Chaos Gods and their daemons, cults, and Traitor Legions who wage the Long War against the Imperium."
);

entity(
    "chaos-gods",
    "Chaos Gods",
    "concept",
    "Four Ruinous Powers of the Warp.",
    "The Chaos Gods—Khorne, Tzeentch, Nurgle, and Slaanesh—are vast Warp entities fed by mortal emotion, commanding daemons and mortal servants across the galaxy."
);

entity(
    "space-marines",
    "Space Marines",
    "organization",
    "Genetically enhanced Adeptus Astartes warriors.",
    "Space Marines, or Adeptus Astartes, are transhuman warriors created from the Emperor's gene-craft, organized into Chapters that defend the Imperium of Man."
);

entity(
    "ultramarines",
    "Ultramarines",
    "organization",
    "Exemplary Chapter of Roboute Guilliman.",
    "The Ultramarines are a First Founding Chapter of Space Marines led in legend by Primarch Roboute Guilliman, famed for discipline, the Codex Astartes, and the realm of Ultramar."
);

entity(
    "blood-angels",
    "Blood Angels",
    "organization",
    "Noble yet cursed sons of Sanguinius.",
    "The Blood Angels are Space Marines of Primarch Sanguinius, renowned for artistry and fury, and haunted by the Red Thirst and Black Rage."
);

entity(
    "black-legion",
    "Black Legion",
    "organization",
    "Abaddon's Traitor Legion of Chaos Space Marines.",
    "The Black Legion is the Chaos Space Marine host forged from the Sons of Horus under Abaddon the Despoiler, spearheading Black Crusades from the Eye of Terror."
);

entity(
    "adeptus-mechanicus",
    "Adeptus Mechanicus",
    "organization",
    "Tech-priesthood of Mars.",
    "The Adeptus Mechanicus worships the Omnissiah and controls Imperial technology from Mars, binding the Imperium's forges, starships, and war engines to its Machine Cult."
);

entity(
    "adeptus-custodes",
    "Adeptus Custodes",
    "organization",
    "Golden guardians of the Emperor.",
    "The Adeptus Custodes are the Emperor's elite companions, guarding the Imperial Palace on Terra with unmatched skill and loyalty."
);

entity(
    "adepta-sororitas",
    "Adepta Sororitas",
    "organization",
    "Sisters of Battle; militant arm of the Ecclesiarchy.",
    "The Adepta Sororitas, or Sisters of Battle, are warrior-nuns of the Imperial Creed who purge heresy with bolter, flame, and faith."
);

entity(
    "astra-militarum",
    "Astra Militarum",
    "organization",
    "Imperial Guard; massed human armies of the Imperium.",
    "The Astra Militarum—the Imperial Guard—are the Imperium's countless mortal soldiers, holding worlds with tanks, artillery, and overwhelming numbers."
);

entity(
    "inquisition",
    "Inquisition",
    "organization",
    "Secret police of the Imperium against heresy and xenos.",
    "The Inquisition wields near-absolute authority to hunt Chaos, witches, and alien threats, operating through Ordo Malleus, Hereticus, and Xenos."
);

entity(
    "orks",
    "Orks",
    "organization",
    "Fungoid greenskin warriors of endless Waaagh!",
    "Orks are a savage, fungus-based species that thrives on war, building ramshackle technology and launching Waaagh! crusades across the galaxy."
);

entity(
    "aeldari",
    "Aeldari",
    "organization",
    "Ancient psychic species once called Eldar.",
    "The Aeldari (Eldar) are a dwindling psychic species whose empire fell to Slaanesh; Craftworlds, Drukhari, and Harlequins survive amid the ruins of their glory."
);

entity(
    "necrons",
    "Necrons",
    "organization",
    "Undying robotic dynasties of the ancient Necrontyr.",
    "Necrons are immortal machine-bodies of the Necrontyr, awakening from tomb worlds to reclaim the galaxy with gauss weapons and star-gods' leftovers."
);

entity(
    "tyranids",
    "Tyranids",
    "organization",
    "Extragalactic hive fleets that devour biomass.",
    "Tyranids are a ravenous alien swarm guided by the Hive Mind, stripping worlds of life to fuel further invasion of the galaxy."
);

entity(
    "tau-empire",
    "T'au Empire",
    "organization",
    "Young expansionist empire of the Greater Good.",
    "The T'au Empire expands through diplomacy and advanced firearms under the Ethereals' Greater Good, fielding battlesuits against Imperium and xenos alike."
);

/* ---------- People / legends ---------- */

entity(
    "primarchs",
    "Primarchs",
    "concept",
    "Demigod sons of the Emperor who led the Legions.",
    "The Primarchs are twenty demigod generals created by the Emperor; scattered by Chaos, they later led the Space Marine Legions in the Great Crusade and Horus Heresy."
);

entity(
    "horus",
    "Horus Lupercal",
    "person",
    "Warmaster who betrayed the Emperor.",
    "Horus Lupercal, favored Primarch and Warmaster, fell to Chaos and led half the Legions in the Horus Heresy against the Emperor of Mankind."
);

entity(
    "roboute-guilliman",
    "Roboute Guilliman",
    "person",
    "Primarch of the Ultramarines; Lord Commander of the Imperium.",
    "Roboute Guilliman, Primarch of the Ultramarines, authored the Codex Astartes and returned in the Era Indomitus as Lord Commander to stabilize the Imperium."
);

entity(
    "abaddon-the-despoiler",
    "Abaddon the Despoiler",
    "person",
    "Warmaster of Chaos; master of the Black Legion.",
    "Abaddon the Despoiler inherited Horus's mantle, leads the Black Legion, and launches Black Crusades to shatter Cadia and the Imperium."
);

entity(
    "sanguinius",
    "Sanguinius",
    "person",
    "Angelic Primarch of the Blood Angels.",
    "Sanguinius, Primarch of the Blood Angels, fought at Terra in the Horus Heresy and died confronting Horus aboard the Vengeful Spirit."
);

/* ---------- Places / concepts / events ---------- */

entity(
    "warp",
    "The Warp",
    "place",
    "Immaterium; psychic realm of Chaos and travel.",
    "The Warp, or Immaterium, is the parallel realm of psychic energy used for faster-than-light travel and home to daemons and the Chaos Gods."
);

entity(
    "terra",
    "Holy Terra",
    "place",
    "Throneworld of the Imperium.",
    "Holy Terra is humanity's homeworld and capital of the Imperium of Man, site of the Imperial Palace and the Golden Throne of the Emperor."
);

entity(
    "mars",
    "Mars",
    "place",
    "Forge World seat of the Adeptus Mechanicus.",
    "Mars is the Red Planet of the Machine Cult, greatest forge of the Adeptus Mechanicus and partner-world to Terra in the Sol System."
);

entity(
    "cadia",
    "Cadia",
    "place",
    "Fortress world guarding the Eye of Terror.",
    "Cadia was the Imperium's fortress gate against the Eye of Terror until Abaddon's Thirteenth Black Crusade broke the world and flooded the galaxy with Warp storms."
);

entity(
    "eye-of-terror",
    "Eye of Terror",
    "place",
    "Vast Warp rift and Traitor Legion refuge.",
    "The Eye of Terror is a colossal Warp–realspace wound where Chaos Space Marines and daemons hold court beyond Imperial law."
);

entity(
    "horus-heresy",
    "Horus Heresy",
    "event",
    "Civil war that nearly destroyed the Imperium.",
    "The Horus Heresy is the galaxy-spanning civil war in which Warmaster Horus and Traitor Legions rebelled against the Emperor, ending in the Siege of Terra."
);

entity(
    "great-crusade",
    "Great Crusade",
    "event",
    "Emperor's campaign to reunite humanity.",
    "The Great Crusade was the Emperor's drive to reclaim human worlds with Primarchs and Space Marine Legions before the Horus Heresy shattered that dream."
);

entity(
    "astronomican",
    "Astronomican",
    "concept",
    "Psychic beacon powered by the Emperor.",
    "The Astronomican is the psychic lighthouse projected from Terra that guides Imperial ships through the Warp, sustained by the Emperor and countless psykers."
);

/* ---------- Relationships ---------- */

rel("games-workshop", "warhammer-40k", "created", "Games Workshop publishes Warhammer 40,000.", 0.99, 0.99);
rel("imperium-of-man", "warhammer-40k", "part_of", "The Imperium is central to Warhammer 40,000.", 0.99, 0.98);
rel("emperor-of-mankind", "imperium-of-man", "leads", "The Emperor is master of the Imperium of Man.", 0.99, 0.98);
rel("emperor-of-mankind", "terra", "located_in", "The Emperor sits enthroned on Holy Terra.", 0.98, 0.96);
rel("chaos", "warp", "connected_to", "Chaos arises from and thrives in the Warp.", 0.99, 0.97);
rel("chaos-gods", "chaos", "part_of", "The Chaos Gods embody Chaos in the Warp.", 0.98, 0.96);
rel("chaos-gods", "warp", "located_in", "The Chaos Gods dwell in the Warp.", 0.97, 0.94);

rel("space-marines", "imperium-of-man", "member_of", "Space Marines defend the Imperium.", 0.98, 0.96);
rel("ultramarines", "space-marines", "part_of", "The Ultramarines are a Space Marine Chapter.", 0.99, 0.97);
rel("blood-angels", "space-marines", "part_of", "The Blood Angels are a Space Marine Chapter.", 0.98, 0.96);
rel("black-legion", "chaos", "member_of", "The Black Legion serves Chaos.", 0.98, 0.96);
rel("adeptus-mechanicus", "imperium-of-man", "member_of", "The Mechanicus is bound to the Imperium.", 0.97, 0.94);
rel("adeptus-mechanicus", "mars", "located_in", "The Adeptus Mechanicus is based on Mars.", 0.98, 0.95);
rel("adeptus-custodes", "emperor-of-mankind", "supports", "The Custodes guard the Emperor.", 0.98, 0.95);
rel("adepta-sororitas", "imperium-of-man", "member_of", "The Sisters serve the Imperial Creed.", 0.96, 0.92);
rel("astra-militarum", "imperium-of-man", "member_of", "The Imperial Guard fights for the Imperium.", 0.97, 0.94);
rel("inquisition", "imperium-of-man", "member_of", "The Inquisition polices the Imperium.", 0.97, 0.94);

rel("orks", "warhammer-40k", "part_of", "Orks are a major xenos threat in the setting.", 0.96, 0.92);
rel("aeldari", "warhammer-40k", "part_of", "The Aeldari are a major faction in the setting.", 0.96, 0.92);
rel("necrons", "warhammer-40k", "part_of", "Necrons are a major xenos faction.", 0.96, 0.92);

rel("primarchs", "emperor-of-mankind", "connected_to", "The Primarchs were created by the Emperor.", 0.99, 0.97);
rel("horus", "primarchs", "member_of", "Horus is a Primarch.", 0.99, 0.98);
rel("roboute-guilliman", "primarchs", "member_of", "Guilliman is a Primarch.", 0.99, 0.97);
rel("roboute-guilliman", "ultramarines", "leads", "Guilliman is Primarch of the Ultramarines.", 0.99, 0.98);
rel("sanguinius", "primarchs", "member_of", "Sanguinius is a Primarch.", 0.98, 0.96);
rel("sanguinius", "blood-angels", "leads", "Sanguinius led the Blood Angels.", 0.98, 0.96);
rel("abaddon-the-despoiler", "black-legion", "leads", "Abaddon leads the Black Legion.", 0.99, 0.97);
rel("abaddon-the-despoiler", "horus", "connected_to", "Abaddon was First Captain under Horus.", 0.97, 0.94);

rel("horus-heresy", "horus", "involved", "Horus led the rebellion of the Horus Heresy.", 0.99, 0.98);
rel("horus-heresy", "imperium-of-man", "involved", "The Heresy nearly destroyed the Imperium.", 0.98, 0.96);
rel("cadia", "eye-of-terror", "connected_to", "Cadia guarded the Cadian Gate to the Eye.", 0.98, 0.95);
rel("eye-of-terror", "warp", "part_of", "The Eye of Terror is a Warp rift.", 0.97, 0.94);
rel("astronomican", "emperor-of-mankind", "uses", "The Astronomican is powered through the Emperor.", 0.97, 0.94);
rel("terra", "imperium-of-man", "located_in", "Terra is the throneworld of the Imperium.", 0.99, 0.97);

module.exports = { entities, relationships };
