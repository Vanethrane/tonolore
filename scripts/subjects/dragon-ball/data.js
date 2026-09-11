/*
 * Dragon Ball subject data.
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
    "dragon-ball",
    "Dragon Ball",
    "topic",
    "Akira Toriyama's martial-arts adventure franchise.",
    "Dragon Ball is the manga and anime franchise by Akira Toriyama following Son Goku, the Dragon Balls, and escalating battles from Earth to other worlds. It spans Dragon Ball, Dragon Ball Z, Dragon Ball Super, and related films and games."
);

entity(
    "akira-toriyama",
    "Akira Toriyama",
    "person",
    "Creator of Dragon Ball.",
    "Akira Toriyama created Dragon Ball for Weekly Shonen Jump, designing Son Goku, the Z Fighters, and the wish-granting Dragon Balls later adapted by Toei Animation and published by Shueisha."
);

/* ---------- Works ---------- */

entity(
    "dragon-ball-manga",
    "Dragon Ball (manga)",
    "work",
    "Original Toriyama manga.",
    "The Dragon Ball manga follows Goku from childhood through the Cell and Buu conflicts, introducing the Dragon Balls, martial arts tournaments, and Saiyan heritage."
);

entity(
    "dragon-ball-anime",
    "Dragon Ball (anime)",
    "work",
    "First anime adaptation of the early manga.",
    "The original Dragon Ball anime adapts Goku's childhood, the Red Ribbon Army, and early tournaments before Dragon Ball Z."
);

entity(
    "dragon-ball-z",
    "Dragon Ball Z",
    "work",
    "Anime covering Saiyan through Buu sagas.",
    "Dragon Ball Z adapts the later manga arcs: Saiyans, Frieza, Cell, and Majin Buu, with Goku, Vegeta, and Gohan at the center."
);

entity(
    "dragon-ball-super",
    "Dragon Ball Super",
    "work",
    "Post-Buu series of gods and multiverses.",
    "Dragon Ball Super continues after Buu with Beerus, Golden Frieza, the Tournament of Power, and new forms for Goku and Vegeta."
);

entity(
    "dragon-ball-gt",
    "Dragon Ball GT",
    "work",
    "Non-manga sequel with Baby and Super 17.",
    "Dragon Ball GT is a Toei-original continuation featuring adult Goku turned into a child, Baby, and the Shadow Dragons."
);

entity(
    "dragon-ball-super-broly",
    "Dragon Ball Super: Broly",
    "work",
    "Film reintroducing Broly in Super continuity.",
    "Dragon Ball Super: Broly redefines Broly's origin and pits him against Goku and Vegeta."
);

entity(
    "dragon-ball-super-super-hero",
    "Dragon Ball Super: Super Hero",
    "work",
    "Film centered on Gohan and Piccolo vs. Cell Max.",
    "Dragon Ball Super: Super Hero focuses on Gohan, Piccolo, and the Red Ribbon Army's return with Cell Max."
);

/* ---------- Concepts ---------- */

entity(
    "dragon-balls",
    "Dragon Balls",
    "object",
    "Seven orbs that summon a wish dragon.",
    "The Dragon Balls are scattered orbs that, when gathered, summon Shenron or Porunga to grant wishes — the franchise's namesake treasure."
);

entity(
    "shenron",
    "Shenron",
    "person",
    "Eternal Dragon of Earth's Dragon Balls.",
    "Shenron is the wish-granting dragon summoned by Earth's Dragon Balls, created through Kami and later Dende's guardianship."
);

entity(
    "porunga",
    "Porunga",
    "person",
    "Namekian Eternal Dragon.",
    "Porunga is Namek's wish dragon, often more powerful than Shenron and central to the Frieza saga."
);

entity(
    "ki",
    "Ki",
    "concept",
    "Life energy used for flight, blasts, and sensing.",
    "Ki is the energy fighters like Goku and Vegeta cultivate for flight, beams such as the Kamehameha, and sensing power levels."
);

entity(
    "kamehameha",
    "Kamehameha",
    "concept",
    "Signature ki wave taught by Master Roshi.",
    "The Kamehameha is Master Roshi's technique, mastered by Goku and passed through the Z Fighters."
);

entity(
    "super-saiyan",
    "Super Saiyan",
    "concept",
    "Legendary Saiyan transformation.",
    "Super Saiyan is the golden-haired transformation first achieved by Goku against Frieza, later refined by Vegeta, Gohan, and Gotenks."
);

entity(
    "ultra-instinct",
    "Ultra Instinct",
    "concept",
    "Angelic autonomous combat state.",
    "Ultra Instinct is a divine technique Goku approaches in Dragon Ball Super, separating movement from conscious thought."
);

entity(
    "power-level",
    "Power level",
    "concept",
    "Scouter-era measure of combat strength.",
    "Power levels are readings used especially in the Saiyan and Frieza sagas, though heart and transformations often overturn them."
);

entity(
    "fusion",
    "Fusion",
    "concept",
    "Techniques that merge two fighters.",
    "Fusion includes the Potara earrings and the Fusion Dance, creating warriors like Vegito and Gotenks."
);

entity(
    "instant-transmission",
    "Instant Transmission",
    "concept",
    "Teleportation via ki sensing.",
    "Instant Transmission lets Goku lock onto a ki signature and vanish across planets."
);

/* ---------- Places ---------- */

entity(
    "earth-dragon-ball",
    "Earth",
    "place",
    "Home world of Goku's friends and the Dragon Balls.",
    "Earth is the main stage of Dragon Ball, home to Capsule Corporation, Kami's Lookout, and countless martial arts tournaments."
);

entity(
    "namek",
    "Namek",
    "place",
    "Home planet of Piccolo's people.",
    "Namek is the green world of the Namekians, Porunga, and the Frieza saga's climactic battles."
);

entity(
    "planet-vegeta",
    "Planet Vegeta",
    "place",
    "Destroyed Saiyan homeworld.",
    "Planet Vegeta was the Saiyan homeworld, destroyed by Frieza and remembered by Vegeta and Goku."
);

entity(
    "kami-lookout",
    "Kami's Lookout",
    "place",
    "Floating fortress of Earth's guardian.",
    "Kami's Lookout (later Dende's) watches over Earth and hosts the Hyperbolic Time Chamber."
);

entity(
    "capsule-corporation",
    "Capsule Corporation",
    "organization",
    "Brief's tech empire in West City.",
    "Capsule Corporation, run by Dr. Brief and Bulma, invents capsules, ships, and support for the Z Fighters."
);

entity(
    "hyperbolic-time-chamber",
    "Hyperbolic Time Chamber",
    "place",
    "Room where a day outside is a year inside.",
    "The Hyperbolic Time Chamber on Kami's Lookout trains Goku, Gohan, Vegeta, and others under extreme gravity and time dilation."
);

entity(
    "other-world",
    "Other World",
    "place",
    "Afterlife realm of Kaio and the Grand Kai.",
    "Other World is where fallen fighters train with King Kai and where tournaments continue beyond death."
);

entity(
    "universe-7",
    "Universe 7",
    "place",
    "Home universe of Goku and Beerus.",
    "Universe 7 is overseen by Beerus and Whis, containing Earth, Namek, and the heroes of Dragon Ball Super."
);

/* ---------- Organizations / races ---------- */

entity(
    "z-fighters",
    "Z Fighters",
    "organization",
    "Earth's defenders around Goku.",
    "The Z Fighters — Goku, Vegeta, Piccolo, Gohan, and allies — defend Earth from Saiyans, androids, and cosmic threats."
);

entity(
    "saiyans",
    "Saiyans",
    "organization",
    "Warrior race of Planet Vegeta.",
    "Saiyans are a fighting race including Goku, Vegeta, Broly, and Gohan, famed for transformations and battle instincts."
);

entity(
    "namekians",
    "Namekians",
    "organization",
    "Slug-like people who create Dragon Balls.",
    "Namekians such as Piccolo, Kami, and Dende create Dragon Balls and excel at regeneration and magic."
);

entity(
    "red-ribbon-army",
    "Red Ribbon Army",
    "organization",
    "Military seeking the Dragon Balls.",
    "The Red Ribbon Army hunts the Dragon Balls in early Dragon Ball and returns in Super Hero with Cell Max."
);

entity(
    "ginyu-force",
    "Ginyu Force",
    "organization",
    "Frieza's flamboyant elite squad.",
    "The Ginyu Force serves Frieza on Namek, clashing with Goku, Vegeta, and the others in theatrical combat."
);

entity(
    "frieza-force",
    "Frieza Force",
    "organization",
    "Galactic empire of Frieza.",
    "The Frieza Force conquers planets for Frieza, including the destruction of Planet Vegeta."
);

/* ---------- People ---------- */

entity(
    "son-goku",
    "Son Goku",
    "person",
    "Saiyan raised on Earth; protagonist.",
    "Son Goku (Kakarot) grows from a martial arts child into Earth's greatest defender, mastering the Kamehameha, Super Saiyan forms, and Ultra Instinct."
);

entity(
    "vegeta",
    "Vegeta",
    "person",
    "Prince of all Saiyans.",
    "Vegeta begins as Goku's rival conqueror and becomes a protector of Earth, chasing strength through Super Saiyan grades and beyond."
);

entity(
    "son-gohan",
    "Son Gohan",
    "person",
    "Goku's scholar-warrior son.",
    "Son Gohan defeats Cell as a Super Saiyan 2 and later returns to the forefront against Cell Max in Super Hero."
);

entity(
    "piccolo",
    "Piccolo",
    "person",
    "Namekian warrior and Gohan's mentor.",
    "Piccolo evolves from Demon King heir to Z Fighter, mentoring Gohan and fusing with Nail and Kami."
);

entity(
    "bulma",
    "Bulma",
    "person",
    "Genius inventor who starts the Dragon Ball quest.",
    "Bulma Brief meets young Goku searching for the Dragon Balls and remains the tech backbone of Capsule Corporation."
);

entity(
    "krillin",
    "Krillin",
    "person",
    "Goku's closest human friend.",
    "Krillin trains under Master Roshi, fights beside the Z Fighters, and survives battles far above ordinary human scale."
);

entity(
    "master-roshi",
    "Master Roshi",
    "person",
    "Turtle Hermit who teaches the Kamehameha.",
    "Master Roshi trains Goku and Krillin, invents the Kamehameha, and remains a comic yet formidable master."
);

entity(
    "trunks",
    "Trunks",
    "person",
    "Vegeta and Bulma's son; future warrior.",
    "Trunks includes the time-traveling Future Trunks who warns of the androids and the younger fusion partner of Goten."
);

entity(
    "goten",
    "Goten",
    "person",
    "Goku's younger son; fuses into Gotenks.",
    "Goten is a playful Super Saiyan who forms Gotenks with Trunks via the Fusion Dance."
);

entity(
    "frieza",
    "Frieza",
    "person",
    "Galactic tyrant who killed Planet Vegeta.",
    "Frieza destroys Planet Vegeta, battles Goku on Namek, and returns in Dragon Ball Super with a golden form."
);

entity(
    "cell",
    "Cell",
    "person",
    "Bio-android seeking perfection.",
    "Cell is Dr. Gero's creation who absorbs androids to reach Perfect form and hosts the Cell Games against Gohan."
);

entity(
    "majin-buu",
    "Majin Buu",
    "person",
    "Ancient magical destroyer.",
    "Majin Buu is an ancient force of destruction whose forms clash with Goku, Vegeta, and the Z Fighters in the Buu saga."
);

entity(
    "beerus",
    "Beerus",
    "person",
    "God of Destruction of Universe 7.",
    "Beerus is Universe 7's God of Destruction, attended by Whis, whose arrival sparks Dragon Ball Super."
);

entity(
    "whis",
    "Whis",
    "person",
    "Angel attendant and martial arts mentor.",
    "Whis serves Beerus, trains Goku and Vegeta, and guides them toward techniques like Ultra Instinct."
);

entity(
    "jiren",
    "Jiren",
    "person",
    "Pride Trooper rival in the Tournament of Power.",
    "Jiren is the silent powerhouse of Universe 11 who pushes Goku toward Ultra Instinct."
);

entity(
    "broly",
    "Broly",
    "person",
    "Legendary Saiyan of uncontrollable power.",
    "Broly is reimagined in Dragon Ball Super: Broly as an exile whose power overwhelms Goku and Vegeta."
);

entity(
    "android-18",
    "Android 18",
    "person",
    "Cybernetic fighter; Krillin's partner.",
    "Android 18 is a Red Ribbon creation who joins the Z Fighters after the Cell Games and fights in the Tournament of Power."
);

entity(
    "android-17",
    "Android 17",
    "person",
    "Ranger and Tournament of Power MVP.",
    "Android 17 becomes a wildlife ranger and a decisive fighter for Universe 7 in the Tournament of Power."
);

entity(
    "tien-shinhan",
    "Tien Shinhan",
    "person",
    "Three-eyed rival turned ally.",
    "Tien Shinhan graduates from Crane School rival to steadfast Z Fighter."
);

entity(
    "yamcha",
    "Yamcha",
    "person",
    "Desert bandit turned early ally.",
    "Yamcha joins Goku's circle early, fighting in tournaments and supporting the Z Fighters."
);

entity(
    "chi-chi",
    "Chi-Chi",
    "person",
    "Goku's wife and Gohan's mother.",
    "Chi-Chi marries Goku and fiercely pushes education and responsibility for Gohan and Goten."
);

entity(
    "dende",
    "Dende",
    "person",
    "Namekian guardian of Earth.",
    "Dende becomes Earth's guardian after Kami, restoring the Dragon Balls and healing allies."
);

entity(
    "king-kai",
    "King Kai",
    "person",
    "Other World mentor of Goku.",
    "King Kai trains Goku in Other World, teaching the Kaio-ken and Spirit Bomb."
);

entity(
    "dr-gero",
    "Dr. Gero",
    "person",
    "Red Ribbon scientist behind the androids.",
    "Dr. Gero creates Androids 17, 18, and Cell in a vendetta against Goku."
);

entity(
    "freezer-saga",
    "Frieza Saga",
    "event",
    "Namek conflict culminating in Super Saiyan.",
    "The Frieza Saga on Namek ends with Goku's first Super Saiyan transformation against Frieza."
);

entity(
    "cell-games",
    "Cell Games",
    "event",
    "Tournament where Gohan defeats Cell.",
    "The Cell Games are Cell's televised tournament, won when Gohan unleashes Super Saiyan 2."
);

entity(
    "tournament-of-power",
    "Tournament of Power",
    "event",
    "Multiversal survival tournament.",
    "The Tournament of Power gathers Universe 7's team against other universes, crowning Ultra Instinct's debut."
);

/* ---------- Relationships ---------- */

rel("akira-toriyama", "dragon-ball", "created", "Akira Toriyama created Dragon Ball.", 0.99, 0.99);
rel("akira-toriyama", "dragon-ball-manga", "created", "Toriyama wrote and drew the Dragon Ball manga.", 0.99, 0.98);
rel("akira-toriyama", "dragon-ball-anime", "influenced", "Toriyama's manga was adapted into the Dragon Ball anime by Toei Animation.", 0.95, 0.9);
rel("akira-toriyama", "dragon-ball-z", "influenced", "Dragon Ball Z adapts Toriyama's later manga arcs.", 0.95, 0.9);
rel("akira-toriyama", "dragon-ball-super", "influenced", "Dragon Ball Super continues Toriyama's world after Z.", 0.94, 0.88);

rel("dragon-ball-manga", "dragon-ball", "part_of", "The manga is the foundation of Dragon Ball.", 0.99, 0.99);
rel("dragon-ball-anime", "dragon-ball", "part_of", "The first anime is part of Dragon Ball.", 0.99, 0.97);
rel("dragon-ball-z", "dragon-ball", "part_of", "Dragon Ball Z continues the franchise.", 0.99, 0.98);
rel("dragon-ball-super", "dragon-ball", "part_of", "Dragon Ball Super continues after Z.", 0.99, 0.97);
rel("dragon-ball-gt", "dragon-ball", "part_of", "Dragon Ball GT is a Toei sequel series.", 0.95, 0.92);

rel("dragon-balls", "dragon-ball", "part_of", "The Dragon Balls name the franchise.", 0.99, 0.99);
rel("dragon-balls", "shenron", "connected_to", "Earth's balls summon Shenron.", 0.99, 0.98);
rel("dragon-balls", "porunga", "connected_to", "Namek's balls summon Porunga.", 0.98, 0.96);
rel("son-goku", "dragon-balls", "seeks", "Goku's earliest adventures chase the Dragon Balls.", 0.97, 0.95);
rel("bulma", "dragon-balls", "seeks", "Bulma begins the quest for the Dragon Balls.", 0.98, 0.96);

rel("son-goku", "dragon-ball", "involved", "Goku is the protagonist of Dragon Ball.", 0.99, 0.99);
rel("son-goku", "vegeta", "connected_to", "Goku and Vegeta are rivals turned allies.", 0.99, 0.98);
rel("son-goku", "kamehameha", "uses", "Goku's signature technique is the Kamehameha.", 0.99, 0.97);
rel("son-goku", "super-saiyan", "uses", "Goku achieves Super Saiyan against Frieza.", 0.99, 0.98);
rel("son-goku", "ultra-instinct", "uses", "Goku reaches Ultra Instinct in Super.", 0.98, 0.96);
rel("son-goku", "instant-transmission", "uses", "Goku learns Instant Transmission on Yardrat.", 0.97, 0.95);
rel("son-goku", "ki", "uses", "Goku fights by refining ki.", 0.99, 0.96);
rel("son-goku", "saiyans", "member_of", "Goku is a Saiyan raised on Earth.", 0.99, 0.98);
rel("son-goku", "z-fighters", "member_of", "Goku leads Earth's defenders.", 0.98, 0.96);
rel("son-goku", "earth-dragon-ball", "located_in", "Goku makes Earth his home.", 0.98, 0.95);
rel("son-goku", "chi-chi", "connected_to", "Goku marries Chi-Chi.", 0.97, 0.94);
rel("son-goku", "son-gohan", "connected_to", "Gohan is Goku's elder son.", 0.99, 0.97);
rel("son-goku", "goten", "connected_to", "Goten is Goku's younger son.", 0.98, 0.95);
rel("son-goku", "master-roshi", "connected_to", "Roshi trains young Goku.", 0.98, 0.96);
rel("son-goku", "king-kai", "connected_to", "King Kai trains Goku in Other World.", 0.97, 0.95);
rel("son-goku", "frieza", "opposed_by", "Goku battles Frieza on Namek and beyond.", 0.99, 0.98);
rel("son-goku", "freezer-saga", "involved", "Goku's Super Saiyan debut ends the Frieza Saga.", 0.98, 0.97);

rel("vegeta", "saiyans", "member_of", "Vegeta is prince of the Saiyans.", 0.99, 0.99);
rel("vegeta", "z-fighters", "member_of", "Vegeta fights for Earth with the Z Fighters.", 0.97, 0.95);
rel("vegeta", "bulma", "connected_to", "Vegeta builds a life with Bulma.", 0.98, 0.96);
rel("vegeta", "trunks", "connected_to", "Trunks is Vegeta's son.", 0.99, 0.97);
rel("vegeta", "super-saiyan", "uses", "Vegeta unlocks Super Saiyan through pride and rage.", 0.98, 0.96);
rel("vegeta", "planet-vegeta", "connected_to", "Vegeta is named for the Saiyan homeworld.", 0.97, 0.95);
rel("vegeta", "frieza", "opposed_by", "Vegeta hates Frieza for destroying his people.", 0.99, 0.97);

rel("son-gohan", "cell", "opposed_by", "Gohan defeats Cell at the Cell Games.", 0.99, 0.98);
rel("son-gohan", "cell-games", "involved", "Gohan wins the Cell Games.", 0.99, 0.97);
rel("son-gohan", "piccolo", "connected_to", "Piccolo mentors Gohan.", 0.98, 0.96);
rel("son-gohan", "super-saiyan", "uses", "Gohan's Super Saiyan 2 turns the Cell Games.", 0.98, 0.96);
rel("son-gohan", "z-fighters", "member_of", "Gohan is a core Z Fighter.", 0.97, 0.94);

rel("piccolo", "namekians", "member_of", "Piccolo is Namekian.", 0.99, 0.98);
rel("piccolo", "z-fighters", "member_of", "Piccolo fights beside the Z Fighters.", 0.98, 0.96);
rel("piccolo", "namek", "connected_to", "Piccolo's people hail from Namek.", 0.97, 0.95);
rel("piccolo", "dende", "connected_to", "Dende and Piccolo share Namekian ties to Earth's guardian role.", 0.94, 0.9);

rel("bulma", "capsule-corporation", "member_of", "Bulma is heir of Capsule Corporation.", 0.99, 0.97);
rel("krillin", "z-fighters", "member_of", "Krillin is a steadfast Z Fighter.", 0.98, 0.95);
rel("krillin", "android-18", "connected_to", "Krillin marries Android 18.", 0.97, 0.94);
rel("master-roshi", "kamehameha", "created", "Roshi invented the Kamehameha.", 0.99, 0.97);
rel("trunks", "goten", "connected_to", "Trunks and Goten fuse into Gotenks.", 0.97, 0.95);
rel("trunks", "fusion", "uses", "Trunks performs the Fusion Dance with Goten.", 0.96, 0.94);

rel("frieza", "frieza-force", "leads", "Frieza commands the Frieza Force.", 0.99, 0.98);
rel("frieza", "planet-vegeta", "caused", "Frieza destroys Planet Vegeta.", 0.99, 0.98);
rel("frieza", "namek", "involved", "Frieza invades Namek for the Dragon Balls.", 0.98, 0.97);
rel("frieza", "ginyu-force", "leads", "The Ginyu Force serves Frieza.", 0.97, 0.94);
rel("cell", "dr-gero", "created_by", "Cell was created from Dr. Gero's designs.", 0.99, 0.97);
rel("cell", "android-17", "connected_to", "Cell absorbs Android 17 toward perfection.", 0.96, 0.94);
rel("cell", "android-18", "connected_to", "Cell absorbs Android 18 to reach Perfect form.", 0.96, 0.94);
rel("dr-gero", "red-ribbon-army", "member_of", "Dr. Gero is a Red Ribbon scientist.", 0.98, 0.95);
rel("dr-gero", "android-17", "created", "Dr. Gero created Android 17.", 0.98, 0.95);
rel("dr-gero", "android-18", "created", "Dr. Gero created Android 18.", 0.98, 0.95);
rel("majin-buu", "dragon-ball-z", "involved", "Buu is the final antagonist of Z.", 0.98, 0.96);

rel("beerus", "universe-7", "connected_to", "Beerus is God of Destruction of Universe 7.", 0.99, 0.97);
rel("beerus", "whis", "connected_to", "Whis attends and trains Beerus.", 0.99, 0.97);
rel("whis", "son-goku", "influenced", "Whis trains Goku toward divine techniques.", 0.97, 0.95);
rel("whis", "vegeta", "influenced", "Whis trains Vegeta toward divine techniques.", 0.97, 0.95);
rel("jiren", "tournament-of-power", "involved", "Jiren is Universe 11's ace in the Tournament of Power.", 0.98, 0.96);
rel("son-goku", "tournament-of-power", "involved", "Goku's Ultra Instinct debuts in the Tournament of Power.", 0.98, 0.96);
rel("broly", "dragon-ball-super-broly", "involved", "Broly is the focus of Super: Broly.", 0.99, 0.97);
rel("broly", "saiyans", "member_of", "Broly is a Legendary Saiyan.", 0.98, 0.96);

rel("z-fighters", "earth-dragon-ball", "located_in", "The Z Fighters defend Earth.", 0.98, 0.95);
rel("kami-lookout", "earth-dragon-ball", "located_in", "The Lookout floats above Earth.", 0.97, 0.94);
rel("hyperbolic-time-chamber", "kami-lookout", "located_in", "The Time Chamber is on the Lookout.", 0.98, 0.95);
rel("capsule-corporation", "earth-dragon-ball", "located_in", "Capsule Corp is based on Earth.", 0.97, 0.93);
rel("namekians", "namek", "located_in", "Namekians originate from Namek.", 0.99, 0.96);
rel("saiyans", "planet-vegeta", "located_in", "Saiyans hail from Planet Vegeta.", 0.98, 0.96);
rel("shenron", "earth-dragon-ball", "located_in", "Shenron is tied to Earth's Dragon Balls.", 0.97, 0.94);
rel("porunga", "namek", "located_in", "Porunga is Namek's Eternal Dragon.", 0.98, 0.95);

module.exports = { entities, relationships };
