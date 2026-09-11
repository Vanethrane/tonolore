/*
 * The Elder Scrolls subject data — Bethesda Softworks' Tamriel fantasy franchise.
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
    "elder-scrolls",
    "The Elder Scrolls",
    "topic",
    "Bethesda Softworks' fantasy RPG series set on Tamriel.",
    "The Elder Scrolls is Bethesda Softworks' open-world fantasy franchise spanning Nirn and Tamriel, from Arena and Daggerfall through Morrowind, Oblivion, and Skyrim."
);

entity(
    "bethesda-softworks",
    "Bethesda Softworks",
    "organization",
    "Publisher and developer of The Elder Scrolls.",
    "Bethesda Softworks publishes The Elder Scrolls and related titles, with Bethesda Game Studios developing major single-player entries such as Morrowind, Oblivion, and Skyrim."
);

/* ---------- Cosmology / places ---------- */

entity(
    "nirn",
    "Nirn",
    "place",
    "Mortal planet of Mundus.",
    "Nirn is the mortal world of Mundus where Tamriel and other continents lie, shaped by divine creation myths of the Aedra and Daedra."
);

entity(
    "tamriel",
    "Tamriel",
    "place",
    "Main continent of Elder Scrolls games.",
    "Tamriel is the continent hosting Cyrodiil, Skyrim, Morrowind, and other provinces, long contested by empires, dragons, and divine intrigue."
);

entity(
    "cyrodiil",
    "Cyrodiil",
    "place",
    "Heartland province of the Empire.",
    "Cyrodiil is the Imperial heartland of Tamriel, centered on the Imperial City and White-Gold Tower, and the setting of The Elder Scrolls IV: Oblivion."
);

entity(
    "skyrim",
    "Skyrim",
    "place",
    "Northern province of the Nords.",
    "Skyrim is the cold homeland of the Nords, torn by civil war and the return of dragons in The Elder Scrolls V: Skyrim."
);

entity(
    "morrowind",
    "Morrowind",
    "place",
    "Eastern province of the Dunmer.",
    "Morrowind is the ash-swept homeland of the Dunmer, dominated by Red Mountain, the Tribunal, and the island of Vvardenfell."
);

entity(
    "vvardenfell",
    "Vvardenfell",
    "place",
    "Volcanic island setting of Morrowind the game.",
    "Vvardenfell is the great island of Morrowind around Red Mountain, where the Nerevarine confronts Dagoth Ur in The Elder Scrolls III."
);

entity(
    "imperial-city",
    "Imperial City",
    "place",
    "Capital of Cyrodiil on Lake Rumare.",
    "The Imperial City is Cyrodiil's capital, built around White-Gold Tower and a hub of Empire, intrigue, and the Oblivion Crisis."
);

entity(
    "white-gold-tower",
    "White-Gold Tower",
    "place",
    "Mythic tower at the heart of the Imperial City.",
    "White-Gold Tower is a metaphysical Tower anchoring Mundus, seat of Imperial power in the Imperial City of Cyrodiil."
);

entity(
    "whiterun",
    "Whiterun",
    "place",
    "Central hold city of Skyrim.",
    "Whiterun is a major hold of Skyrim under Jarl Balgruuf, often the Dragonborn's early ally against dragons and Alduin."
);

/* ---------- Divines / concepts ---------- */

entity(
    "aedra",
    "Aedra",
    "concept",
    "Divines who helped create Mundus.",
    "The Aedra are the ancestral spirits who sacrificed power to create Mundus; many are worshipped as the Eight or Nine Divines."
);

entity(
    "daedra",
    "Daedra",
    "concept",
    "Princes and spirits of Oblivion.",
    "Daedra are otherworldly beings who did not create Mundus; their Princes rule Oblivion realms and meddle constantly in mortal affairs."
);

entity(
    "nine-divines",
    "Nine Divines",
    "concept",
    "Imperial pantheon including Talos.",
    "The Nine Divines are the Empire's chief pantheon of Aedra plus Talos, contested by Thalmor doctrine that rejects Talos's divinity."
);

entity(
    "talos",
    "Talos",
    "person",
    "Tiber Septim ascended as a Divine.",
    "Talos is the divine aspect of Tiber Septim, conqueror who founded the Third Empire and whose worship defines Imperial identity in Skyrim."
);

entity(
    "akatosh",
    "Akatosh",
    "person",
    "Dragon God of Time; chief of the Divines.",
    "Akatosh is the chief Divine associated with time and dragons, linked to the Dragonborn and the mythic struggle against Alduin."
);

entity(
    "azura",
    "Azura",
    "person",
    "Daedric Prince of dusk and dawn.",
    "Azura is a Daedric Prince of prophecy and transition who guides the Nerevarine and curses the Tribunal after their betrayal."
);

entity(
    "sheogorath",
    "Sheogorath",
    "person",
    "Daedric Prince of Madness.",
    "Sheogorath rules the Shivering Isles as Prince of Madness, later tied to the Hero of Kvatch's Mantling in Oblivion's expansion."
);

entity(
    "mehrunes-dagon",
    "Mehrunes Dagon",
    "person",
    "Daedric Prince of destruction and change.",
    "Mehrunes Dagon is the Prince of Destruction whose invasion of Tamriel drives the Oblivion Crisis at the end of the Third Era."
);

entity(
    "alduin",
    "Alduin",
    "person",
    "World-Eater; firstborn of Akatosh.",
    "Alduin is the World-Eater dragon prophesied to consume the world, returning in Skyrim to be challenged by the Last Dragonborn."
);

entity(
    "dragonborn",
    "Dragonborn",
    "concept",
    "Mortals with the soul and Voice of dragons.",
    "Dragonborn are mortals blessed with dragon souls and the Thu'um; the Last Dragonborn rises in Skyrim to face Alduin."
);

/* ---------- Empires / people / works ---------- */

entity(
    "septim-empire",
    "Septim Empire",
    "organization",
    "Third Empire founded by Tiber Septim.",
    "The Septim Empire united Tamriel under Tiber Septim and his heirs until the Oblivion Crisis ended the Septim bloodline."
);

entity(
    "tiber-septim",
    "Tiber Septim",
    "person",
    "Conqueror who founded the Third Empire.",
    "Tiber Septim conquered Tamriel with the Numidium, founded the Third Empire, and is worshipped as the Divine Talos."
);

entity(
    "martin-septim",
    "Martin Septim",
    "person",
    "Last Septim emperor; ended the Oblivion Crisis.",
    "Martin Septim, illegitimate heir of Uriel VII, becomes emperor and sacrifices himself as Akatosh's avatar to close the Oblivion Crisis."
);

entity(
    "tribunal",
    "Tribunal",
    "organization",
    "Living god-kings of Morrowind: ALMSIVI.",
    "The Tribunal—Vivec, Almalexia, and Sotha Sil—ruled Morrowind as living gods after using the Heart of Lorkhan, until their power failed."
);

entity(
    "vivec",
    "Vivec",
    "person",
    "Warrior-poet of the Tribunal.",
    "Vivec is the poet-warrior Tribune of Morrowind, author of the Lessons, and a central figure of Dunmer faith and the Nerevarine prophecies."
);

entity(
    "nerevarine",
    "Nerevarine",
    "person",
    "Reborn champion of Morrowind prophecy.",
    "The Nerevarine is the prophesied reincarnation of Indoril Nerevar who defeats Dagoth Ur beneath Red Mountain in Morrowind."
);

entity(
    "nords",
    "Nords",
    "organization",
    "People of Skyrim.",
    "Nords are the hardy human people of Skyrim, heirs of Atmora and the Dragon War, divided by Empire and Stormcloak loyalties."
);

entity(
    "dunmer",
    "Dunmer",
    "organization",
    "Dark Elves of Morrowind.",
    "The Dunmer, or Dark Elves, inhabit Morrowind under Tribunal and later Imperial rule, shaped by Azura's curse and Red Mountain's ash."
);

entity(
    "elder-scrolls-iii-morrowind",
    "The Elder Scrolls III: Morrowind",
    "work",
    "2002 RPG set on Vvardenfell.",
    "Morrowind follows the Nerevarine on Vvardenfell against Dagoth Ur, the Sixth House, and the unraveling divinity of the Tribunal."
);

entity(
    "elder-scrolls-iv-oblivion",
    "The Elder Scrolls IV: Oblivion",
    "work",
    "2006 RPG of the Oblivion Crisis.",
    "Oblivion is set in Cyrodiil during Mehrunes Dagon's invasion, following the Hero of Kvatch and Martin Septim through the Oblivion Crisis."
);

entity(
    "elder-scrolls-v-skyrim",
    "The Elder Scrolls V: Skyrim",
    "work",
    "2011 RPG of dragons and civil war.",
    "Skyrim follows the Last Dragonborn through Skyrim's civil war, the return of dragons, and the prophesied defeat of Alduin."
);

entity(
    "oblivion-crisis",
    "Oblivion Crisis",
    "event",
    "Daedric invasion ending the Third Era.",
    "The Oblivion Crisis is Mehrunes Dagon's invasion of Tamriel after Uriel VII's assassination, ended by Martin Septim at the Imperial City."
);

/* ---------- Relationships ---------- */

rel("bethesda-softworks", "elder-scrolls", "created", "Bethesda Softworks publishes The Elder Scrolls.", 0.99, 0.99);
rel("nirn", "elder-scrolls", "part_of", "Nirn is the mortal world of the series.", 0.98, 0.96);
rel("tamriel", "nirn", "located_in", "Tamriel is a continent on Nirn.", 0.99, 0.97);
rel("cyrodiil", "tamriel", "located_in", "Cyrodiil is a province of Tamriel.", 0.98, 0.96);
rel("skyrim", "tamriel", "located_in", "Skyrim is a province of Tamriel.", 0.98, 0.96);
rel("morrowind", "tamriel", "located_in", "Morrowind is a province of Tamriel.", 0.98, 0.96);
rel("vvardenfell", "morrowind", "located_in", "Vvardenfell is an island of Morrowind.", 0.98, 0.95);
rel("imperial-city", "cyrodiil", "located_in", "The Imperial City is in Cyrodiil.", 0.98, 0.95);
rel("white-gold-tower", "imperial-city", "located_in", "White-Gold Tower stands in the Imperial City.", 0.97, 0.94);
rel("aedra", "nirn", "connected_to", "The Aedra helped create Mundus and Nirn.", 0.97, 0.94);
rel("daedra", "elder-scrolls", "part_of", "Daedra are central to Elder Scrolls cosmology.", 0.96, 0.92);
rel("talos", "nine-divines", "member_of", "Talos is worshipped among the Nine Divines.", 0.97, 0.94);
rel("talos", "tiber-septim", "connected_to", "Talos is the divine aspect of Tiber Septim.", 0.98, 0.96);
rel("akatosh", "aedra", "member_of", "Akatosh is chief among the Aedra Divines.", 0.97, 0.94);
rel("azura", "daedra", "member_of", "Azura is a Daedric Prince.", 0.98, 0.95);
rel("sheogorath", "daedra", "member_of", "Sheogorath is a Daedric Prince.", 0.98, 0.95);
rel("mehrunes-dagon", "daedra", "member_of", "Mehrunes Dagon is a Daedric Prince.", 0.98, 0.95);
rel("alduin", "akatosh", "connected_to", "Alduin is called firstborn of Akatosh.", 0.96, 0.93);
rel("septim-empire", "tamriel", "leads", "The Septim Empire ruled Tamriel.", 0.97, 0.94);
rel("tiber-septim", "septim-empire", "leads", "Tiber Septim founded the Third Empire.", 0.98, 0.96);
rel("martin-septim", "septim-empire", "member_of", "Martin was the last Septim emperor.", 0.97, 0.94);
rel("tribunal", "morrowind", "leads", "The Tribunal ruled Morrowind as living gods.", 0.97, 0.94);
rel("vivec", "tribunal", "member_of", "Vivec is one of the Tribunal.", 0.99, 0.97);
rel("nerevarine", "morrowind", "involved", "The Nerevarine's story unfolds in Morrowind.", 0.96, 0.93);
rel("nords", "skyrim", "located_in", "Nords are the people of Skyrim.", 0.97, 0.94);
rel("dunmer", "morrowind", "located_in", "Dunmer are the people of Morrowind.", 0.97, 0.94);

rel("elder-scrolls-iii-morrowind", "elder-scrolls", "part_of", "Morrowind is a mainline Elder Scrolls game.", 0.99, 0.97);
rel("elder-scrolls-iv-oblivion", "elder-scrolls", "part_of", "Oblivion is a mainline Elder Scrolls game.", 0.99, 0.97);
rel("elder-scrolls-v-skyrim", "elder-scrolls", "part_of", "Skyrim is a mainline Elder Scrolls game.", 0.99, 0.97);
rel("elder-scrolls-iii-morrowind", "vvardenfell", "located_in", "Morrowind is set primarily on Vvardenfell.", 0.97, 0.94);
rel("elder-scrolls-iv-oblivion", "cyrodiil", "located_in", "Oblivion is set in Cyrodiil.", 0.97, 0.94);
rel("elder-scrolls-v-skyrim", "skyrim", "located_in", "Skyrim is set in the province of Skyrim.", 0.98, 0.96);
rel("oblivion-crisis", "mehrunes-dagon", "involved", "Mehrunes Dagon drives the Oblivion Crisis.", 0.98, 0.96);
rel("oblivion-crisis", "martin-septim", "involved", "Martin Septim ends the Oblivion Crisis.", 0.97, 0.94);
module.exports = { entities, relationships };
