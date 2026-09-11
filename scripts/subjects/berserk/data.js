/*
 * Berserk subject data — Kentaro Miura's dark fantasy manga.
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
    "berserk",
    "Berserk",
    "topic",
    "Kentaro Miura's dark fantasy manga of Guts and the Brand of Sacrifice.",
    "Berserk is the dark fantasy manga created by Kentaro Miura, following the mercenary Guts, Griffith and the Band of the Hawk, the God Hand, and a world of apostles, fate, and struggle against causality."
);

entity(
    "kentaro-miura",
    "Kentaro Miura",
    "person",
    "Creator of Berserk.",
    "Kentaro Miura (Kentarou Miura) created Berserk, drawing its chapters for decades until his death in 2021; Studio Gaga and Kouji Mori later continued the manga from his notes and guidance."
);

entity(
    "kouji-mori",
    "Kouji Mori",
    "person",
    "Close friend of Miura guiding Berserk's continuation.",
    "Kouji Mori, a lifelong friend of Kentaro Miura, helps supervise Berserk's continuation with Studio Gaga using Miura's plot notes and shared discussions."
);

entity(
    "studio-gaga",
    "Studio Gaga",
    "organization",
    "Miura's studio continuing Berserk.",
    "Studio Gaga is Kentaro Miura's studio of assistants that continues drawing Berserk under Kouji Mori's supervision after Miura's death."
);

/* ---------- Works / arcs ---------- */

entity(
    "berserk-manga",
    "Berserk (manga)",
    "work",
    "The original dark fantasy manga series.",
    "The Berserk manga serializes Guts's story from the Black Swordsman arc through the Golden Age, Conviction, Millennium Falcon, and Fantasia arcs."
);

entity(
    "black-swordsman-arc",
    "Black Swordsman Arc",
    "work",
    "Opening arc introducing Guts as the Black Swordsman.",
    "The Black Swordsman Arc introduces Guts hunting apostles after the Eclipse, establishing the Brand of Sacrifice and his war against Griffith's aftermath."
);

entity(
    "golden-age-arc",
    "Golden Age Arc",
    "work",
    "Origin of Guts, Griffith, and the Band of the Hawk.",
    "The Golden Age Arc tells how Guts joined Griffith's Band of the Hawk, rose through Midland's wars, and how the Eclipse shattered their fellowship."
);

entity(
    "conviction-arc",
    "Conviction Arc",
    "work",
    "Arc of the Tower of Conviction and the Incarnation Ceremony.",
    "The Conviction Arc follows refugees, the Holy See, and the Incarnation Ceremony that returns Griffith to the physical world."
);

entity(
    "millennium-falcon-arc",
    "Millennium Falcon Arc",
    "work",
    "Arc of Falconia and the Hawk of Light.",
    "The Millennium Falcon Arc (Hawk of the Millennium Empire) covers Griffith's new Band of the Falcon, Guts's journey, and the rise of Falconia."
);

entity(
    "fantasia-arc",
    "Fantasia Arc",
    "work",
    "Arc after the Great Roar of the Astral World.",
    "The Fantasia Arc begins after the worlds of physical and astral merge, sending Guts's party toward Elfhelm and new threats."
);

entity(
    "berserk-1997-anime",
    "Berserk (1997 anime)",
    "work",
    "Classic anime adaptation of the Golden Age.",
    "The 1997 Berserk anime adapts much of the Golden Age Arc, ending near the Eclipse."
);

entity(
    "berserk-movies",
    "Berserk: The Golden Age Arc (films)",
    "work",
    "Theatrical Golden Age film trilogy.",
    "The Golden Age Arc film trilogy retells Guts and Griffith's rise and the Eclipse in three movies."
);

/* ---------- Concepts / objects ---------- */

entity(
    "brand-of-sacrifice",
    "Brand of Sacrifice",
    "object",
    "Mark that draws apostles and spirits to the branded.",
    "The Brand of Sacrifice marks those offered to the God Hand; it bleeds near evil and binds Guts and Casca to a life hunted by apostles and the dead."
);

entity(
    "behelit",
    "Behelit",
    "object",
    "Egg-shaped fetish that summons the God Hand.",
    "A Behelit activates in a moment of despair to summon the God Hand, enabling an apostle transformation through sacrifice."
);

entity(
    "crimson-behelit",
    "Crimson Behelit",
    "object",
    "Egg of the King; Griffith's Behelit.",
    "The Crimson Behelit, called the Egg of the King, is the rare Behelit that led Griffith to become Femto of the God Hand."
);

entity(
    "berserker-armor",
    "Berserker Armor",
    "object",
    "Cursed armor that ignores pain and limits.",
    "The Berserker Armor amplifies Guts's strength by suppressing pain and human limits, at the cost of his mind and body."
);

entity(
    "dragonslayer",
    "Dragonslayer",
    "object",
    "Guts's enormous iron sword.",
    "The Dragonslayer is the massive sword forged by Godot that Guts wields against apostles, too heavy for ordinary men."
);

entity(
    "eclipse",
    "The Eclipse",
    "event",
    "Ceremony that created Femto and destroyed the Hawks.",
    "The Eclipse is the sacrificial ceremony in which Griffith offered the Band of the Hawk, ascended as Femto, and branded Guts and Casca."
);

entity(
    "causality",
    "Causality",
    "concept",
    "Fate-like flow guided by the Idea of Evil.",
    "Causality in Berserk is the interlocking flow of fate that the God Hand and Idea of Evil steer through sacrifice and coincidence."
);

entity(
    "apostle",
    "Apostle",
    "concept",
    "Human remade by sacrifice into a monster.",
    "Apostles are humans who used a Behelit to sacrifice what they love and become demonic servants of the God Hand."
);

entity(
    "astral-world",
    "Astral World",
    "concept",
    "Spirit realm overlapping the physical world.",
    "The Astral World is the realm of spirits, elves, and denser evil; after the Great Roar it floods into the physical world."
);

entity(
    "idea-of-evil",
    "Idea of Evil",
    "mystery",
    "God of the Abyss said to weave human desire into fate.",
    "The Idea of Evil is the godlike will in the Abyss that answers humanity's need for reasons, shaping causality and the God Hand."
);

/* ---------- Places ---------- */

entity(
    "midland",
    "Midland",
    "place",
    "Kingdom at the heart of the Golden Age wars.",
    "Midland is the kingdom where Griffith's Band of the Hawk fought for glory before the Eclipse and where Falconia later rises."
);

entity(
    "falconia",
    "Falconia",
    "place",
    "Griffith's radiant capital after the merger of worlds.",
    "Falconia is the utopian city Griffith founds as the Hawk of Light, a refuge and seat of his new order."
);

entity(
    "elfhelm",
    "Elfhelm",
    "place",
    "Island sanctuary of elves and witches.",
    "Elfhelm on Skellig is a haven of elves and magic where Guts seeks help for Casca's mind."
);

entity(
    "godots-hut",
    "Godot's hut",
    "place",
    "Mountain forge where Guts recovers and stores the Dragonslayer.",
    "Godot's remote forge shelters Guts after battles and is where the Dragonslayer waits between journeys."
);

entity(
    "tower-of-conviction",
    "Tower of Conviction",
    "place",
    "Site of the Incarnation Ceremony.",
    "The Tower of Conviction becomes the stage for Mozgus's inquisition and Griffith's rebirth in flesh."
);

entity(
    "albion",
    "Albion",
    "place",
    "Refugee city around the Tower of Conviction.",
    "Albion is the plague-ridden refugee city that gathers around the Tower of Conviction before the Incarnation Ceremony."
);

/* ---------- Organizations ---------- */

entity(
    "band-of-the-hawk",
    "Band of the Hawk",
    "organization",
    "Griffith's original mercenary company.",
    "The Band of the Hawk is Griffith's mercenary force that wins Midland's war, then is sacrificed at the Eclipse—save Guts and Casca."
);

entity(
    "new-band-of-the-falcon",
    "New Band of the Falcon",
    "organization",
    "Griffith's post-Incarnation army.",
    "The new Band of the Falcon gathers apostles and humans under Griffith after his return, conquering toward Falconia."
);

entity(
    "god-hand",
    "God Hand",
    "organization",
    "Five demonic angels of causality.",
    "The God Hand — Void, Slan, Ubik, Conrad, and Femto — oversee sacrifices and apostle births in service of the Idea of Evil."
);

entity(
    "holy-see",
    "Holy See",
    "organization",
    "Religious authority of the Holy Kingdom.",
    "The Holy See wields religious power across kingdoms, hunting heresy and shaping politics around the Hawk of Light."
);

entity(
    "guts-traveling-party",
    "Guts's traveling party",
    "organization",
    "Companions who journey with the Black Swordsman.",
    "Guts's party grows to include Puck, Isidro, Farnese, Serpico, Schierke, and others seeking safety and healing for Casca."
);

/* ---------- Characters ---------- */

entity(
    "guts",
    "Guts",
    "person",
    "The Black Swordsman; branded struggler.",
    "Guts is the Black Swordsman, a mercenary marked by the Brand of Sacrifice who fights apostles with the Dragonslayer while struggling against fate and Griffith."
);

entity(
    "griffith",
    "Griffith",
    "person",
    "Leader of the Hawks; later Femto of the God Hand.",
    "Griffith founds the Band of the Hawk, dreams of a kingdom, and at the Eclipse sacrifices his comrades to become Femto, returning later as the Hawk of Light."
);

entity(
    "femto",
    "Femto",
    "person",
    "Griffith's God Hand form.",
    "Femto is Griffith's form among the God Hand, born at the Eclipse through the sacrifice of the Band of the Hawk."
);

entity(
    "casca",
    "Casca",
    "person",
    "Commander in the Hawks; survivor of the Eclipse.",
    "Casca rises as a commander in the Band of the Hawk, survives the Eclipse branded beside Guts, and endures the long aftermath of trauma and recovery."
);

entity(
    "puck",
    "Puck",
    "person",
    "Elf companion to Guts.",
    "Puck is a wind eth elf who joins Guts, offering comic relief, healing dust, and a conscience on the Black Swordsman's road."
);

entity(
    "skull-knight",
    "Skull Knight",
    "person",
    "Ancient enemy of the God Hand.",
    "The Skull Knight is a mysterious armored warrior who opposes the God Hand, aids Guts at key moments, and is tied to ancient wars against causality."
);

entity(
    "isidro",
    "Isidro",
    "person",
    "Young thief aspiring to be a swordsman.",
    "Isidro tags along with Guts seeking strength and glory, learning under fire as the party travels."
);

entity(
    "farnese",
    "Farnese de Vandimion",
    "person",
    "Former Holy Iron Chain commander turned companion.",
    "Farnese begins as a noble leading the Holy Iron Chain Knights against Guts, then joins his party and studies magic under Schierke."
);

entity(
    "serpico",
    "Serpico",
    "person",
    "Farnese's attendant and skilled fencer.",
    "Serpico protects Farnese with quiet skill, first as her servant in the Holy See's service and later beside Guts's party."
);

entity(
    "schierke",
    "Schierke",
    "person",
    "Young witch who guides astral magic.",
    "Schierke is a witch trained by Flora who teaches the party to navigate the Astral World and helps control the Berserker Armor."
);

entity(
    "judeau",
    "Judeau",
    "person",
    "Hawk scout and friend to Guts and Casca.",
    "Judeau is a knifeman of the Band of the Hawk who supports Guts and Casca before dying in the Eclipse."
);

entity(
    "pippin",
    "Pippin",
    "person",
    "Powerful Hawk warrior.",
    "Pippin is a towering member of the Band of the Hawk whose strength and loyalty endure until the Eclipse."
);

entity(
    "corkus",
    "Corkus",
    "person",
    "Hawk veteran skeptical of Guts.",
    "Corkus is a long-serving Hawk who doubts Guts yet shares the company's fate at the Eclipse."
);

entity(
    "rickert",
    "Rickert",
    "person",
    "Young Hawk who survives outside the Eclipse.",
    "Rickert is spared the Eclipse by absence, later confronting Griffith and forging his own path after the Hawks' fall."
);

entity(
    "void",
    "Void",
    "person",
    "Leader of the God Hand.",
    "Void is the eldest-seeming member of the God Hand, a winged figure of reason who speaks for sacrifice and causality."
);

entity(
    "slan",
    "Slan",
    "person",
    "God Hand member tied to lust and sensation.",
    "Slan is a God Hand member associated with desire and cruelty, appearing around cults and carnage."
);

entity(
    "nosferatu-zodd",
    "Nosferatu Zodd",
    "person",
    "Immortal apostle warrior.",
    "Nosferatu Zodd is an ancient apostle who battles Guts and later serves Griffith's new Falcon forces."
);

entity(
    "grunbeld",
    "Grunbeld",
    "person",
    "Apostle knight of the new Falcon.",
    "Grunbeld is a flame-wreathed apostle warrior who fights for Griffith's Band of the Falcon."
);

entity(
    "gaston",
    "Gaston",
    "person",
    "Hawk member close to Guts's unit.",
    "Gaston serves in the Band of the Hawk and shares the company's tragic end at the Eclipse."
);

entity(
    "flora",
    "Flora",
    "person",
    "Witch of the Spirit Tree; Schierke's mistress.",
    "Flora is a witch who shelters Schierke and aids Guts's party with astral knowledge before apostles destroy her home."
);

entity(
    "mozgus",
    "Mozgus",
    "person",
    "Inquisitor at the Tower of Conviction.",
    "Mozgus is a Holy See inquisitor whose fanaticism drives the horrors at the Tower of Conviction."
);

entity(
    "wyald",
    "Wyald",
    "person",
    "Apostle leading the Black Dog Knights.",
    "Wyald is a sadistic apostle who commands the Black Dog Knights against the Band of the Hawk before the Eclipse."
);

/* ---------- Relationships ---------- */

rel("kentaro-miura", "berserk", "created", "Kentaro Miura created Berserk.", 0.99, 0.99);
rel("kentaro-miura", "berserk-manga", "created", "Miura wrote and drew the Berserk manga.", 0.99, 0.98);
rel("kouji-mori", "berserk-manga", "influenced", "Kouji Mori helps guide Berserk's continuation.", 0.95, 0.9);
rel("studio-gaga", "berserk-manga", "produced", "Studio Gaga draws continuing Berserk chapters.", 0.96, 0.92);

rel("berserk-manga", "berserk", "part_of", "The manga is the foundation of Berserk.", 0.99, 0.99);
rel("black-swordsman-arc", "berserk-manga", "part_of", "The Black Swordsman Arc opens the manga.", 0.98, 0.95);
rel("golden-age-arc", "berserk-manga", "part_of", "The Golden Age Arc is central to the manga.", 0.99, 0.97);
rel("conviction-arc", "berserk-manga", "part_of", "The Conviction Arc continues the manga.", 0.98, 0.95);
rel("millennium-falcon-arc", "berserk-manga", "part_of", "The Millennium Falcon Arc continues the manga.", 0.98, 0.95);
rel("fantasia-arc", "berserk-manga", "part_of", "The Fantasia Arc continues the manga.", 0.98, 0.95);
rel("berserk-1997-anime", "berserk", "part_of", "The 1997 anime adapts Berserk.", 0.97, 0.93);
rel("berserk-movies", "berserk", "part_of", "The Golden Age films adapt Berserk.", 0.97, 0.93);
rel("berserk-manga", "berserk-1997-anime", "adapted_into", "The manga was adapted as the 1997 anime.", 0.96, 0.92);
rel("golden-age-arc", "berserk-movies", "adapted_into", "The Golden Age Arc was adapted into films.", 0.96, 0.92);

rel("brand-of-sacrifice", "eclipse", "connected_to", "The Brand is carved during the Eclipse.", 0.99, 0.97);
rel("crimson-behelit", "behelit", "part_of", "The Crimson Behelit is a unique Behelit.", 0.98, 0.95);
rel("crimson-behelit", "griffith", "uses", "Griffith's Crimson Behelit opens his path to Femto.", 0.99, 0.97);
rel("behelit", "god-hand", "connected_to", "Behelits summon the God Hand.", 0.98, 0.95);
rel("eclipse", "god-hand", "involved", "The God Hand preside over the Eclipse.", 0.99, 0.97);
rel("eclipse", "band-of-the-hawk", "involved", "The Band of the Hawk is sacrificed at the Eclipse.", 0.99, 0.98);
rel("apostle", "god-hand", "connected_to", "Apostles serve the God Hand's order.", 0.97, 0.94);
rel("causality", "idea-of-evil", "part_of", "Causality is woven with the Idea of Evil.", 0.96, 0.92);
rel("god-hand", "idea-of-evil", "member_of", "The God Hand serve the Idea of Evil's design.", 0.95, 0.9);
rel("berserker-armor", "guts", "uses", "Guts wears the Berserker Armor.", 0.98, 0.95);
rel("dragonslayer", "guts", "uses", "Guts wields the Dragonslayer.", 0.99, 0.97);
rel("astral-world", "elfhelm", "located_in", "Elfhelm is tied to the Astral World.", 0.95, 0.9);

rel("falconia", "midland", "located_in", "Falconia rises in Midland's domain.", 0.96, 0.92);
rel("tower-of-conviction", "albion", "located_in", "The Tower of Conviction stands at Albion.", 0.98, 0.95);
rel("godots-hut", "guts", "located_in", "Guts returns to Godot's hut between journeys.", 0.94, 0.88);

rel("griffith", "band-of-the-hawk", "leads", "Griffith leads the Band of the Hawk.", 0.99, 0.98);
rel("griffith", "new-band-of-the-falcon", "leads", "Griffith leads the new Band of the Falcon.", 0.98, 0.96);
rel("griffith", "femto", "connected_to", "Griffith becomes Femto.", 0.99, 0.99);
rel("femto", "god-hand", "member_of", "Femto is one of the God Hand.", 0.99, 0.98);
rel("void", "god-hand", "member_of", "Void is of the God Hand.", 0.99, 0.97);
rel("slan", "god-hand", "member_of", "Slan is of the God Hand.", 0.99, 0.97);
rel("guts", "band-of-the-hawk", "member_of", "Guts fought in the Band of the Hawk.", 0.98, 0.96);
rel("casca", "band-of-the-hawk", "member_of", "Casca commanded in the Band of the Hawk.", 0.98, 0.96);
rel("judeau", "band-of-the-hawk", "member_of", "Judeau was a Hawk.", 0.97, 0.94);
rel("pippin", "band-of-the-hawk", "member_of", "Pippin was a Hawk.", 0.97, 0.94);
rel("corkus", "band-of-the-hawk", "member_of", "Corkus was a Hawk.", 0.97, 0.94);
rel("rickert", "band-of-the-hawk", "member_of", "Rickert was a Hawk.", 0.97, 0.94);
rel("gaston", "band-of-the-hawk", "member_of", "Gaston was a Hawk.", 0.96, 0.92);
rel("nosferatu-zodd", "apostle", "connected_to", "Zodd is an apostle.", 0.98, 0.95);
rel("grunbeld", "new-band-of-the-falcon", "member_of", "Grunbeld serves the new Falcon.", 0.96, 0.92);
rel("grunbeld", "apostle", "connected_to", "Grunbeld is an apostle.", 0.97, 0.93);
rel("wyald", "apostle", "connected_to", "Wyald is an apostle.", 0.97, 0.93);

rel("guts", "brand-of-sacrifice", "connected_to", "Guts bears the Brand of Sacrifice.", 0.99, 0.98);
rel("casca", "brand-of-sacrifice", "connected_to", "Casca bears the Brand of Sacrifice.", 0.99, 0.98);
rel("guts", "griffith", "opposed_by", "Guts's struggle is bound to Griffith.", 0.99, 0.98);
rel("guts", "casca", "connected_to", "Guts and Casca share love and the Brand's burden.", 0.98, 0.96);
rel("guts", "puck", "supports", "Puck travels with Guts.", 0.97, 0.93);
rel("guts", "skull-knight", "supports", "The Skull Knight aids Guts against the God Hand.", 0.96, 0.93);
rel("guts", "guts-traveling-party", "leads", "Guts leads his traveling companions.", 0.97, 0.94);
rel("puck", "guts-traveling-party", "member_of", "Puck is in Guts's party.", 0.96, 0.92);
rel("isidro", "guts-traveling-party", "member_of", "Isidro joins Guts's party.", 0.96, 0.92);
rel("farnese", "guts-traveling-party", "member_of", "Farnese joins Guts's party.", 0.96, 0.92);
rel("serpico", "guts-traveling-party", "member_of", "Serpico joins Guts's party.", 0.96, 0.92);
rel("schierke", "guts-traveling-party", "member_of", "Schierke joins Guts's party.", 0.97, 0.93);
rel("schierke", "flora", "connected_to", "Schierke is Flora's disciple.", 0.97, 0.94);
rel("farnese", "serpico", "supports", "Serpico protects Farnese.", 0.97, 0.93);
rel("mozgus", "holy-see", "member_of", "Mozgus serves the Holy See.", 0.97, 0.93);
rel("mozgus", "tower-of-conviction", "located_in", "Mozgus holds power at the Tower of Conviction.", 0.96, 0.92);
rel("griffith", "falconia", "leads", "Griffith rules from Falconia.", 0.97, 0.94);
rel("guts", "elfhelm", "reached", "Guts's party seeks Elfhelm for Casca.", 0.95, 0.9);
rel("skull-knight", "god-hand", "opposed_by", "The Skull Knight opposes the God Hand.", 0.97, 0.94);

module.exports = { entities, relationships };
