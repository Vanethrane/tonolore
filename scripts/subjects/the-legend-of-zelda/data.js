/*
 * The Legend of Zelda subject data — Nintendo's adventure franchise.
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
    "the-legend-of-zelda",
    "The Legend of Zelda",
    "topic",
    "Nintendo's epic of Link, Zelda, and the Triforce.",
    "The Legend of Zelda is Nintendo's long-running adventure franchise following Link, Princess Zelda, and the struggle for the Triforce across eras of Hyrule."
);

entity(
    "shigeru-miyamoto",
    "Shigeru Miyamoto",
    "person",
    "Creator of The Legend of Zelda.",
    "Shigeru Miyamoto created The Legend of Zelda with Takashi Tezuka, shaping Link's exploration, dungeons, and the mythology of Hyrule."
);

entity(
    "takashi-tezuka",
    "Takashi Tezuka",
    "person",
    "Co-creator and longtime Zelda director/producer.",
    "Takashi Tezuka co-created The Legend of Zelda and remained a key creative force across classic and modern entries."
);

entity(
    "nintendo",
    "Nintendo",
    "organization",
    "Publisher and developer of The Legend of Zelda.",
    "Nintendo develops and publishes The Legend of Zelda across consoles, from the NES original through Breath of the Wild and Tears of the Kingdom."
);

/* ---------- Characters ---------- */

entity(
    "link",
    "Link",
    "person",
    "Hero of Hyrule across many eras.",
    "Link is the silent hero of The Legend of Zelda, wielding the Master Sword against Ganon and restoring balance to Hyrule in each incarnation."
);

entity(
    "zelda",
    "Princess Zelda",
    "person",
    "Princess of Hyrule and bearer of Wisdom.",
    "Princess Zelda rules or protects Hyrule, often holding the Triforce of Wisdom and guiding Link against Ganon's rise."
);

entity(
    "ganon",
    "Ganon",
    "person",
    "Beast form of the Demon King.",
    "Ganon is the monstrous Demon King form associated with the Triforce of Power, repeatedly threatening Hyrule."
);

entity(
    "ganondorf",
    "Ganondorf",
    "person",
    "Gerudo king who becomes Ganon.",
    "Ganondorf is the Gerudo king whose ambition for the Triforce transforms him into Ganon across multiple timelines."
);

entity(
    "navi",
    "Navi",
    "person",
    "Fairy companion in Ocarina of Time.",
    "Navi is Link's fairy companion in Ocarina of Time, guiding him through Hyrule with her signature Hey, Listen."
);

entity(
    "sheik",
    "Sheik",
    "person",
    "Mysterious Sheikah ally who is Zelda in disguise.",
    "Sheik appears in Ocarina of Time as a Sheikah warrior aiding Link; the identity is Princess Zelda in disguise."
);

entity(
    "impa",
    "Impa",
    "person",
    "Sheikah guardian of Princess Zelda.",
    "Impa is a Sheikah attendant and protector of Zelda across several games, tied to Kakariko and Sheikah lore."
);

entity(
    "epona",
    "Epona",
    "person",
    "Link's loyal horse.",
    "Epona is Link's horse companion, first iconic in Ocarina of Time and recurring as his mount across Hyrule."
);

entity(
    "midna",
    "Midna",
    "person",
    "Twilight Princess of the Twilight Realm.",
    "Midna is the Twilight Princess who allies with Link in Twilight Princess to reclaim her realm from usurpers."
);

/* ---------- Places / peoples ---------- */

entity(
    "hyrule",
    "Hyrule",
    "place",
    "Kingdom at the heart of the Zelda series.",
    "Hyrule is the kingdom where most Zelda adventures unfold, home to Hylians, temples, and the cycle of hero, princess, and demon king."
);

entity(
    "kakariko-village",
    "Kakariko Village",
    "place",
    "Sheikah-associated mountain village.",
    "Kakariko Village is a recurring settlement tied to the Sheikah, often near death mountain routes and royal history."
);

entity(
    "gerudo-desert",
    "Gerudo Desert",
    "place",
    "Homeland of the Gerudo people.",
    "The Gerudo Desert is the arid homeland of the Gerudo and the origin of Ganondorf in several eras."
);

entity(
    "hylians",
    "Hylians",
    "concept",
    "Pointed-eared people of Hyrule.",
    "Hylians are the people of Hyrule most often associated with Link and Zelda, marked by pointed ears and royal lineage myths."
);

entity(
    "zora",
    "Zora",
    "concept",
    "Aquatic people of rivers and domains.",
    "The Zora are an aquatic people living in river domains, allied with Hyrule in many eras including Breath of the Wild."
);

entity(
    "goron",
    "Goron",
    "concept",
    "Rocky mountain people who eat rocks.",
    "Gorons are durable mountain people who mine and eat rocks, recurring allies around Death Mountain."
);

entity(
    "koroks",
    "Koroks",
    "concept",
    "Leafy forest spirits descended from Kokiri.",
    "Koroks are forest spirits scattered across Hyrule in Breath of the Wild and Tears of the Kingdom, hiding puzzles for Link."
);

entity(
    "sheikah",
    "Sheikah",
    "concept",
    "Shadow folk sworn to the royal family.",
    "The Sheikah are a technologically gifted people devoted to Hyrule's royal family, creators of ancient tech and guardians."
);

/* ---------- Objects / concepts ---------- */

entity(
    "master-sword",
    "Master Sword",
    "object",
    "Blade of Evil's Bane.",
    "The Master Sword is the legendary Blade of Evil's Bane that only a worthy hero can wield against Ganon."
);

entity(
    "triforce",
    "Triforce",
    "object",
    "Golden relic of Power, Wisdom, and Courage.",
    "The Triforce is the golden relic left by the goddesses, split into Power, Wisdom, and Courage and sought across the series."
);

entity(
    "ocarina-of-time-item",
    "Ocarina of Time",
    "object",
    "Sacred instrument that manipulates time.",
    "The Ocarina of Time is a royal instrument that opens time travel and sacred songs central to its namesake game."
);

entity(
    "hylian-shield",
    "Hylian Shield",
    "object",
    "Iconic blue shield of the hero.",
    "The Hylian Shield is Link's durable crest-bearing shield, a staple of defense across many Zelda games."
);

/* ---------- Works ---------- */

entity(
    "ocarina-of-time",
    "The Legend of Zelda: Ocarina of Time",
    "work",
    "3D landmark of Link's childhood and adult quest.",
    "Ocarina of Time follows young Link across time against Ganondorf, defining 3D Zelda with Navi, Epona, and the Master Sword."
);

entity(
    "a-link-to-the-past",
    "The Legend of Zelda: A Link to the Past",
    "work",
    "SNES classic of Light and Dark Worlds.",
    "A Link to the Past sends Link between Light and Dark Worlds to free Zelda and stop Ganon's return."
);

entity(
    "breath-of-the-wild",
    "The Legend of Zelda: Breath of the Wild",
    "work",
    "Open-air rebirth of Hyrule exploration.",
    "Breath of the Wild casts Link across a vast ruined Hyrule, freeing Divine Beasts and confronting Calamity Ganon."
);

entity(
    "tears-of-the-kingdom",
    "The Legend of Zelda: Tears of the Kingdom",
    "work",
    "Sequel expanding skies, depths, and building.",
    "Tears of the Kingdom continues Breath of the Wild's Hyrule with sky islands, depths, zonai tech, and Ganondorf's return."
);

entity(
    "majoras-mask",
    "The Legend of Zelda: Majora's Mask",
    "work",
    "Three-day cycle adventure in Termina.",
    "Majora's Mask follows Link in Termina through a three-day loop to stop the moon and Majora's mask."
);

entity(
    "twilight-princess",
    "The Legend of Zelda: Twilight Princess",
    "work",
    "Twilight-shrouded quest with Midna.",
    "Twilight Princess pairs Link with Midna against Zant and Ganondorf as twilight covers Hyrule."
);

/* ---------- Relationships ---------- */

rel("shigeru-miyamoto", "the-legend-of-zelda", "created", "Miyamoto created The Legend of Zelda.", 0.99, 0.99);
rel("takashi-tezuka", "the-legend-of-zelda", "created", "Tezuka co-created The Legend of Zelda.", 0.98, 0.96);
rel("nintendo", "the-legend-of-zelda", "produced", "Nintendo develops and publishes Zelda.", 0.99, 0.98);

rel("ocarina-of-time", "the-legend-of-zelda", "part_of", "Ocarina of Time is a landmark Zelda game.", 0.99, 0.97);
rel("a-link-to-the-past", "the-legend-of-zelda", "part_of", "A Link to the Past is a classic Zelda game.", 0.98, 0.95);
rel("breath-of-the-wild", "the-legend-of-zelda", "part_of", "Breath of the Wild is a modern Zelda game.", 0.99, 0.97);
rel("tears-of-the-kingdom", "the-legend-of-zelda", "part_of", "Tears of the Kingdom continues the Wild era.", 0.99, 0.97);
rel("majoras-mask", "the-legend-of-zelda", "part_of", "Majora's Mask is a Zelda adventure in Termina.", 0.98, 0.95);
rel("twilight-princess", "the-legend-of-zelda", "part_of", "Twilight Princess is a Zelda game.", 0.98, 0.95);
rel("tears-of-the-kingdom", "breath-of-the-wild", "connected_to", "Tears of the Kingdom sequels Breath of the Wild.", 0.98, 0.96);

rel("link", "master-sword", "uses", "Link wields the Master Sword.", 0.99, 0.97);
rel("link", "hylian-shield", "uses", "Link carries the Hylian Shield.", 0.97, 0.94);
rel("link", "hyrule", "located_in", "Link's quests center on Hyrule.", 0.98, 0.95);
rel("zelda", "hyrule", "leads", "Zelda is princess of Hyrule.", 0.98, 0.95);
rel("zelda", "triforce", "uses", "Zelda often bears the Triforce of Wisdom.", 0.97, 0.94);
rel("ganondorf", "ganon", "connected_to", "Ganondorf becomes Ganon.", 0.99, 0.98);
rel("ganondorf", "triforce", "uses", "Ganondorf seeks the Triforce of Power.", 0.98, 0.96);
rel("ganon", "link", "opposed_by", "Link opposes Ganon across eras.", 0.99, 0.97);
rel("navi", "link", "supports", "Navi guides Link in Ocarina of Time.", 0.97, 0.94);
rel("sheik", "zelda", "connected_to", "Sheik is Zelda's disguise.", 0.98, 0.96);
rel("impa", "zelda", "supports", "Impa protects Zelda.", 0.96, 0.92);
rel("epona", "link", "supports", "Epona is Link's horse.", 0.97, 0.93);
rel("midna", "link", "supports", "Midna allies with Link in Twilight Princess.", 0.97, 0.93);

rel("zora", "hyrule", "located_in", "Zora domains lie within Hyrule.", 0.96, 0.92);
rel("goron", "hyrule", "located_in", "Gorons live in Hyrule's mountains.", 0.96, 0.92);
rel("koroks", "hyrule", "located_in", "Koroks hide across Hyrule.", 0.96, 0.92);
rel("sheikah", "hyrule", "located_in", "The Sheikah serve Hyrule's crown.", 0.96, 0.92);
rel("gerudo-desert", "hyrule", "located_in", "The Gerudo Desert is part of Hyrule.", 0.97, 0.94);
rel("kakariko-village", "hyrule", "located_in", "Kakariko Village is in Hyrule.", 0.97, 0.94);
rel("ocarina-of-time-item", "ocarina-of-time", "connected_to", "The Ocarina is central to Ocarina of Time.", 0.98, 0.95);
rel("master-sword", "triforce", "connected_to", "The Master Sword is bound to sealing evil tied to the Triforce cycle.", 0.95, 0.9);

module.exports = { entities, relationships };
