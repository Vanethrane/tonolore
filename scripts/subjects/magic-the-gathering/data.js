/*
 * Magic: The Gathering subject data — Wizards of the Coast's trading card game multiverse.
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
    "magic-the-gathering",
    "Magic: The Gathering",
    "topic",
    "Wizards of the Coast's multiverse trading card game.",
    "Magic: The Gathering is Wizards of the Coast's collectible card game set across a vast multiverse of planes, where planeswalkers wield magic through mana and color philosophies."
);

entity(
    "wizards-of-the-coast",
    "Wizards of the Coast",
    "organization",
    "Publisher of Magic: The Gathering.",
    "Wizards of the Coast designs and publishes Magic: The Gathering sets, organized play, and the lore of Dominaria, Ravnica, Phyrexia, and countless other planes."
);

/* ---------- Core concepts ---------- */

entity(
    "planeswalkers",
    "Planeswalkers",
    "concept",
    "Mages who can travel between planes.",
    "Planeswalkers are rare beings with a spark that lets them walk between planes of the Magic multiverse, shaping wars from Dominaria to Ravnica and beyond."
);

entity(
    "multiverse",
    "Magic multiverse",
    "concept",
    "Network of planes connected by the Blind Eternities.",
    "The Magic multiverse is the collection of infinite planes—each a self-contained world—linked by the Blind Eternities and traversed by planeswalkers."
);

entity(
    "mana",
    "Mana",
    "concept",
    "Magical energy drawn from lands and sources.",
    "Mana is the magical energy mages channel to cast spells, commonly expressed through five colors and the lands that produce them."
);

entity(
    "color-pie",
    "Color pie",
    "concept",
    "Philosophical framework of Magic's five colors.",
    "The color pie defines how white, blue, black, red, and green magic express distinct philosophies, strengths, and weaknesses across the game and its stories."
);

entity(
    "the-mending",
    "The Mending",
    "concept",
    "Event that weakened planeswalker sparks.",
    "The Mending was a multiversal healing that closed rifts in Dominaria but diminished planeswalker power, reshaping how walkers like Jace and Chandra operate."
);

/* ---------- Planes / places ---------- */

entity(
    "dominaria",
    "Dominaria",
    "place",
    "Magic's central hub world of ancient history.",
    "Dominaria is one of Magic's oldest and most storied planes, scarred by Phyrexian invasions, time rifts, and the birthplace of much of the game's foundational lore."
);

entity(
    "ravnica",
    "Ravnica",
    "place",
    "City-covered plane ruled by ten guilds.",
    "Ravnica is a vast urban plane where ten guilds—Azorius, Golgari, Dimir, and others—govern a labyrinthine city-world central to many Magic storylines."
);

entity(
    "phyrexia",
    "Phyrexia",
    "place",
    "Machine-horror plane of compleated perfection.",
    "Phyrexia is a nightmarish plane of oil, metal, and ideological corruption, seeking to compleat other worlds and spread its vision of perfect unity through invasion."
);

entity(
    "zendikar",
    "Zendikar",
    "place",
    "Adventure-rich plane of rising Eldrazi threat.",
    "Zendikar is a volatile plane of floating hedrons and dangerous landscapes, where ancient Eldrazi titans once slumbered before planeswalkers intervened."
);

/* ---------- Planeswalkers (light set + Gatewatch) ---------- */

entity(
    "jace-beleren",
    "Jace Beleren",
    "person",
    "Blue-minded planeswalker and mind mage.",
    "Jace Beleren is a brilliant but troubled planeswalker whose telepathy and memory magic made him a key strategist of the Gatewatch and a voice in Ravnica's crises."
);

entity(
    "chandra-nalaar",
    "Chandra Nalaar",
    "person",
    "Fiery red planeswalker pyromancer.",
    "Chandra Nalaar is an impulsive pyromancer planeswalker whose passion and combat magic drove her from rebellion on Kaladesh to the Gatewatch's battles."
);

entity(
    "liliana-vess",
    "Liliana Vess",
    "person",
    "Black-aligned necromancer planeswalker.",
    "Liliana Vess is a centuries-old necromancer planeswalker bound by demonic contracts, whose power and guilt shadowed Gatewatch campaigns and Phyrexian wars."
);

entity(
    "garruk-wildspeaker",
    "Garruk Wildspeaker",
    "person",
    "Green planeswalker hunter of great beasts.",
    "Garruk Wildspeaker is a towering hunter planeswalker who tracks monstrous prey across planes, later corrupted by black magic before seeking redemption."
);

entity(
    "nicol-bolas",
    "Nicol Bolas",
    "person",
    "Ancient dragon planeswalker schemer.",
    "Nicol Bolas is an elder dragon planeswalker whose millennia of schemes culminated in the War of the Spark on Ravnica, opposing the Gatewatch and mortal planes."
);

entity(
    "gideon-jura",
    "Gideon Jura",
    "person",
    "White-aligned soldier planeswalker of the Gatewatch.",
    "Gideon Jura is a steadfast warrior planeswalker who helped found the Gatewatch, sacrificing himself during the War of the Spark to protect Ravnica."
);

entity(
    "nissa-revane",
    "Nissa Revane",
    "person",
    "Green elf planeswalker attuned to Zendikar.",
    "Nissa Revane is an elf planeswalker whose bond with Zendikar's land and leylines made her a founding member of the Gatewatch against Eldrazi and later threats."
);

entity(
    "ajani-goldmane",
    "Ajani Goldmane",
    "person",
    "Leonin white planeswalker mentor.",
    "Ajani Goldmane is a leonin planeswalker who mentors others in justice and courage, joining Gatewatch efforts and confronting Nicol Bolas on multiple planes."
);

entity(
    "teferi",
    "Teferi",
    "person",
    "Time-magic planeswalker of Dominaria.",
    "Teferi is a Dominarian planeswalker master of temporal magic whose exile during the Phyrexian invasion and return after the Mending shaped the plane's recovery."
);

entity(
    "karn",
    "Karn",
    "person",
    "Silver golem planeswalker creator of Mirrodin.",
    "Karn is a silver golem planeswalker who created Mirrodin and later carried a Phyrexian oil curse, making him central to both Dominaria's history and Phyrexia's spread."
);

entity(
    "elspeth-tirel",
    "Elspeth Tirel",
    "person",
    "White knight planeswalker of Theros and beyond.",
    "Elspeth Tirel is a valorous planeswalker who fought on Theros and in the Multiverse against Phyrexia, embodying hope amid repeated cycles of death and return."
);

/* ---------- Organizations / factions ---------- */

entity(
    "gatewatch",
    "The Gatewatch",
    "organization",
    "Planeswalker coalition against multiversal threats.",
    "The Gatewatch is an alliance of planeswalkers—including Jace, Chandra, Gideon, Nissa, and Liliana—formed to oppose Nicol Bolas, Eldrazi, and later Phyrexian invasion."
);

entity(
    "phyrexians",
    "Phyrexians",
    "organization",
    "Compleated armies of Phyrexian ideology.",
    "Phyrexians are oil-twisted beings and machines who serve Phyrexia's gospel of perfection, invading planes from Mirrodin/New Phyrexia outward across the multiverse."
);

entity(
    "azorius-senate",
    "Azorius Senate",
    "organization",
    "Ravnica guild of law and bureaucracy.",
    "The Azorius Senate is Ravnica's guild of lawmakers and judges, enforcing order from the guildpact halls that Jace and the Gatewatch navigated during Bolas's schemes."
);

entity(
    "golgari-swarm",
    "Golgari Swarm",
    "organization",
    "Ravnica guild of rot and reclamation.",
    "The Golgari Swarm is Ravnica's guild of decay and renewal, ruling undercity networks whose spores and necromancy intersect with Ravnican politics and war."
);

entity(
    "dimir-guild",
    "House Dimir",
    "organization",
    "Secret Ravnica guild of espionage.",
    "House Dimir is Ravnica's hidden guild of spies and illusionists, manipulating information from the shadows while the plane's visible guilds govern above."
);

/* ---------- Events / works ---------- */

entity(
    "war-of-the-spark",
    "War of the Spark",
    "concept",
    "Ravnica battle where Bolas sought godhood.",
    "The War of the Spark was Nicol Bolas's attempt to ascend on Ravnica by harvesting planeswalker sparks, culminating in Gatewatch resistance and Gideon's sacrifice."
);

entity(
    "phyrexian-invasion",
    "Phyrexian invasion of the Multiverse",
    "concept",
    "Cross-plane assault by New Phyrexia.",
    "The Phyrexian invasion of the Multiverse is the coordinated campaign by New Phyrexia to compleat countless planes, drawing planeswalkers like Elspeth into a multiversal war."
);

entity(
    "magic-the-gathering-card-game",
    "Magic: The Gathering (card game)",
    "work",
    "Core tabletop and digital card game product.",
    "Magic: The Gathering the card game is the tabletop and digital product through which players encounter sets, formats, and storylines from Dominaria to Phyrexia."
);

entity(
    "commander-format",
    "Commander",
    "work",
    "Popular multiplayer Magic format.",
    "Commander is a multiplayer Magic format built around legendary creatures and 100-card decks, widely played in casual and organized communities worldwide."
);

/* ---------- Relationships ---------- */

rel("wizards-of-the-coast", "magic-the-gathering", "publishes", "Wizards publishes Magic: The Gathering.", 0.99, 0.99);
rel("wizards-of-the-coast", "magic-the-gathering-card-game", "produced", "Wizards produces the Magic card game.", 0.98, 0.97);
rel("magic-the-gathering-card-game", "magic-the-gathering", "part_of", "The card game is the primary Magic product.", 0.99, 0.98);
rel("commander-format", "magic-the-gathering-card-game", "part_of", "Commander is a Magic format.", 0.97, 0.94);

rel("planeswalkers", "multiverse", "connected_to", "Planeswalkers traverse the multiverse.", 0.99, 0.98);
rel("mana", "color-pie", "related_to", "Mana channels the philosophies of the color pie.", 0.97, 0.94);
rel("the-mending", "dominaria", "occurred_at", "The Mending healed Dominaria's time rifts.", 0.96, 0.93);
rel("the-mending", "planeswalkers", "influenced", "The Mending weakened planeswalker sparks.", 0.97, 0.95);

rel("jace-beleren", "planeswalkers", "member_of", "Jace is a planeswalker.", 0.99, 0.98);
rel("chandra-nalaar", "planeswalkers", "member_of", "Chandra is a planeswalker.", 0.99, 0.98);
rel("liliana-vess", "planeswalkers", "member_of", "Liliana is a planeswalker.", 0.99, 0.98);
rel("garruk-wildspeaker", "planeswalkers", "member_of", "Garruk is a planeswalker.", 0.99, 0.98);
rel("nicol-bolas", "planeswalkers", "member_of", "Nicol Bolas is an elder dragon planeswalker.", 0.99, 0.98);
rel("gideon-jura", "planeswalkers", "member_of", "Gideon is a planeswalker.", 0.98, 0.96);
rel("nissa-revane", "planeswalkers", "member_of", "Nissa is a planeswalker.", 0.98, 0.96);
rel("ajani-goldmane", "planeswalkers", "member_of", "Ajani is a planeswalker.", 0.98, 0.96);
rel("teferi", "planeswalkers", "member_of", "Teferi is a planeswalker.", 0.98, 0.96);
rel("karn", "planeswalkers", "member_of", "Karn is a planeswalker.", 0.98, 0.96);
rel("elspeth-tirel", "planeswalkers", "member_of", "Elspeth is a planeswalker.", 0.98, 0.96);

rel("jace-beleren", "gatewatch", "member_of", "Jace helped lead the Gatewatch.", 0.98, 0.96);
rel("chandra-nalaar", "gatewatch", "member_of", "Chandra fought with the Gatewatch.", 0.98, 0.96);
rel("liliana-vess", "gatewatch", "member_of", "Liliana served with the Gatewatch.", 0.97, 0.94);
rel("garruk-wildspeaker", "gatewatch", "related_to", "Garruk allied with Gatewatch efforts before his corruption.", 0.93, 0.88);
rel("gideon-jura", "gatewatch", "member_of", "Gideon co-founded the Gatewatch.", 0.99, 0.98);
rel("nissa-revane", "gatewatch", "member_of", "Nissa was a founding Gatewatch member.", 0.98, 0.96);
rel("ajani-goldmane", "gatewatch", "member_of", "Ajani joined Gatewatch battles.", 0.97, 0.94);
rel("gatewatch", "nicol-bolas", "opposed_by", "The Gatewatch formed to stop Nicol Bolas.", 0.98, 0.96);

rel("dominaria", "multiverse", "part_of", "Dominaria is a plane in the multiverse.", 0.99, 0.98);
rel("ravnica", "multiverse", "part_of", "Ravnica is a plane in the multiverse.", 0.99, 0.98);
rel("phyrexia", "multiverse", "part_of", "Phyrexia is a plane in the multiverse.", 0.99, 0.98);
rel("zendikar", "multiverse", "part_of", "Zendikar is a plane in the multiverse.", 0.98, 0.96);

rel("teferi", "dominaria", "located_in", "Teferi is closely tied to Dominaria.", 0.97, 0.94);
rel("karn", "dominaria", "related_to", "Karn's history spans Dominaria and Mirrodin.", 0.96, 0.93);
rel("karn", "phyrexia", "connected_to", "Karn's oil curse linked him to Phyrexia.", 0.97, 0.95);
rel("nissa-revane", "zendikar", "located_in", "Nissa's bond centers on Zendikar.", 0.97, 0.94);

rel("azorius-senate", "ravnica", "located_in", "The Azorius Senate governs on Ravnica.", 0.98, 0.96);
rel("golgari-swarm", "ravnica", "located_in", "The Golgari rule Ravnica's undercity.", 0.98, 0.96);
rel("dimir-guild", "ravnica", "located_in", "House Dimir operates secretly on Ravnica.", 0.98, 0.96);
rel("jace-beleren", "ravnica", "involved", "Jace became the Living Guildpact on Ravnica.", 0.96, 0.93);

rel("phyrexians", "phyrexia", "member_of", "Phyrexians serve Phyrexian ideology.", 0.99, 0.98);
rel("phyrexian-invasion", "phyrexia", "caused", "New Phyrexia launched the multiversal invasion.", 0.98, 0.96);
rel("phyrexian-invasion", "multiverse", "occurred_at", "The invasion struck planes across the multiverse.", 0.98, 0.96);
rel("elspeth-tirel", "phyrexian-invasion", "involved", "Elspeth fought in the Phyrexian war.", 0.97, 0.94);
rel("nicol-bolas", "war-of-the-spark", "involved", "Bolas orchestrated the War of the Spark.", 0.99, 0.98);
rel("war-of-the-spark", "ravnica", "occurred_at", "The War of the Spark was fought on Ravnica.", 0.99, 0.98);
rel("gideon-jura", "war-of-the-spark", "involved", "Gideon died during the War of the Spark.", 0.98, 0.96);
rel("gatewatch", "war-of-the-spark", "involved", "The Gatewatch fought in the War of the Spark.", 0.98, 0.96);

module.exports = { entities, relationships };
