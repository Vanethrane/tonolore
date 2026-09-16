/*
 * Dungeons & Dragons subject data — Wizards of the Coast tabletop RPG franchise.
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

/* ---------- Root / publishers ---------- */

entity(
    "dungeons-and-dragons",
    "Dungeons & Dragons",
    "topic",
    "Wizards of the Coast's tabletop fantasy RPG of dice, classes, and shared worlds.",
    "Dungeons & Dragons is the tabletop role-playing game published by Wizards of the Coast, spanning editions from Gary Gygax and Dave Arneson's original rules through modern fifth edition play across the Forgotten Realms, Greyhawk, and countless homebrew campaigns."
);

entity(
    "wizards-of-the-coast",
    "Wizards of the Coast",
    "organization",
    "Publisher of Dungeons & Dragons and Magic: The Gathering.",
    "Wizards of the Coast (WotC) publishes Dungeons & Dragons, curates official settings such as the Forgotten Realms, and supports play through books, D&D Beyond, and organized play programs."
);

entity(
    "hasbro",
    "Hasbro",
    "organization",
    "Parent company of Wizards of the Coast.",
    "Hasbro owns Wizards of the Coast, placing Dungeons & Dragons within a broader portfolio of games and entertainment brands."
);

/* ---------- Creators ---------- */

entity(
    "gary-gygax",
    "Gary Gygax",
    "person",
    "Co-creator of Dungeons & Dragons.",
    "Gary Gygax co-designed Dungeons & Dragons with Dave Arneson, shaping its classes, monsters, and dungeon-delving structure that defined modern tabletop RPGs."
);

entity(
    "dave-arneson",
    "Dave Arneson",
    "person",
    "Co-creator who brought open-world play to D&D.",
    "Dave Arneson co-created Dungeons & Dragons, contributing the Blackmoor campaign's freeform exploration that helped birth the hobby."
);

entity(
    "ed-greenwood",
    "Ed Greenwood",
    "person",
    "Creator of the Forgotten Realms.",
    "Ed Greenwood created the Forgotten Realms setting, building Faerûn, Waterdeep, and the lore that became D&D's flagship world."
);

entity(
    "r-a-salvatore",
    "R. A. Salvatore",
    "person",
    "Novelist who popularized Drizzt Do'Urden.",
    "R. A. Salvatore's Forgotten Realms novels, especially the Icewind Dale and Legend of Drizzt series, made Drizzt Do'Urden one of D&D's most recognizable heroes."
);

/* ---------- Editions / core books ---------- */

entity(
    "original-dungeons-dragons",
    "Original Dungeons & Dragons (1974)",
    "work",
    "The first published D&D rules set.",
    "Original Dungeons & Dragons (1974) packaged Gygax and Arneson's fantasy wargame into a boxed RPG that launched the tabletop hobby."
);

entity(
    "advanced-dungeons-dragons",
    "Advanced Dungeons & Dragons",
    "work",
    "Expanded AD&D rules line of the 1970s–80s.",
    "Advanced Dungeons & Dragons refined classes, spells, and monsters into a structured rules line that dominated early D&D play."
);

entity(
    "dnd-fifth-edition",
    "Dungeons & Dragons 5th Edition",
    "work",
    "Current streamlined edition of D&D.",
    "Dungeons & Dragons 5th Edition emphasizes accessible rules, bounded accuracy, and modular play, supported by the Player's Handbook and ongoing adventure publications."
);

entity(
    "players-handbook",
    "Player's Handbook",
    "work",
    "Core player rules for character creation.",
    "The Player's Handbook defines D&D character classes, races, spells, and equipment—the foundation text for building adventurers in official play."
);

/* ---------- Settings ---------- */

entity(
    "forgotten-realms",
    "Forgotten Realms",
    "place",
    "Flagship D&D campaign setting of Faerûn.",
    "The Forgotten Realms is Wizards' primary D&D setting, a high-fantasy world of Faerûn where Waterdeep, the Sword Coast, and Baldur's Gate anchor countless adventures."
);

entity(
    "greyhawk",
    "Greyhawk",
    "place",
    "Classic Oerth-based setting of early D&D.",
    "Greyhawk is the campaign world on Oerth where Gygax's Castle Greyhawk and early D&D lore helped establish dungeons, deities, and iconic artifacts."
);

entity(
    "faerun",
    "Faerûn",
    "place",
    "Continent at the heart of the Forgotten Realms.",
    "Faerûn is the continental heart of the Forgotten Realms, home to Waterdeep, Candlekeep, the Sword Coast, and the cities that define modern D&D fiction."
);

entity(
    "waterdeep",
    "Waterdeep",
    "place",
    "City of Splendors on the Sword Coast.",
    "Waterdeep is the bustling City of Splendors on the Sword Coast, a hub of trade, intrigue, and adventuring guilds in the Forgotten Realms."
);

entity(
    "sword-coast",
    "Sword Coast",
    "place",
    "Western Faerûn frontier of coastal cities.",
    "The Sword Coast is the western Faerûn frontier of walled cities, wild frontiers, and famous adventure sites stretching from Luskan toward Baldur's Gate."
);

entity(
    "baldurs-gate",
    "Baldur's Gate",
    "place",
    "Coastal city and adventure hub on the Sword Coast.",
    "Baldur's Gate is a major Sword Coast city whose name anchors classic D&D adventures and video-game adaptations as a gateway to Faerûn intrigue."
);

entity(
    "dragonlance",
    "Dragonlance",
    "place",
    "Krynn setting of the War of the Lance.",
    "Dragonlance is the Krynn setting of the War of the Lance novels and modules, known for heroic companions, dragon armies, and the world-shaping Cataclysm."
);

entity(
    "planescape",
    "Planescape",
    "concept",
    "Multiverse setting of Sigil and the planes.",
    "Planescape explores D&D's Outer Planes and the city of Sigil, framing cosmology, factions, and adventures that cross worlds and philosophies."
);

entity(
    "ravenloft",
    "Ravenloft",
    "place",
    "Gothic horror Domains of Dread setting.",
    "Ravenloft is D&D's gothic horror setting of mist-shrouded Domains of Dread, where darklords such as Strahd rule isolated nightmare realms."
);

entity(
    "oerth",
    "Oerth",
    "place",
    "World of the Greyhawk setting.",
    "Oerth is the world of Greyhawk, where the Flanaess continent and Castle Greyhawk anchor early D&D history and deity lore."
);

entity(
    "candlekeep",
    "Candlekeep",
    "place",
    "Fortress-library of lore on the Sword Coast.",
    "Candlekeep is the great fortress-library on the Sword Coast, where sages preserve tomes and adventurers seek knowledge tied to Faerûn's deepest secrets."
);

/* ---------- Characters ---------- */

entity(
    "drizzt-do-urden",
    "Drizzt Do'Urden",
    "person",
    "Renegade drow ranger of the Forgotten Realms.",
    "Drizzt Do'Urden is a drow ranger who rejected Lolth's Underdark society, becoming a surface hero alongside Guenhwyvar in R. A. Salvatore's novels."
);

entity(
    "elminster",
    "Elminster",
    "person",
    "Sage of Shadowdale and iconic Realms archmage.",
    "Elminster of Shadowdale is the pipe-smoking archmage and Chosen of Mystra whose counsel and schemes weave through Forgotten Realms history."
);

/* ---------- Concepts / tools ---------- */

entity(
    "dungeon-master",
    "Dungeon Master",
    "concept",
    "Referee who runs a D&D game.",
    "The Dungeon Master (DM) narrates the world, adjudicates rules, and portrays NPCs and monsters so players can explore shared fantasy stories."
);

entity(
    "alignment-system",
    "Alignment",
    "concept",
    "Moral and ethical axes for characters.",
    "D&D's alignment system charts lawful–chaotic and good–evil axes, giving shorthand for character ethics across editions and settings."
);

entity(
    "character-class",
    "Character class",
    "concept",
    "Archetype defining abilities and role.",
    "Character classes such as fighter, wizard, and cleric define a PC's capabilities, progression, and party role in D&D adventures."
);

entity(
    "dnd-beyond",
    "D&D Beyond",
    "organization",
    "Official digital toolset for D&D.",
    "D&D Beyond is Wizards' digital platform for character sheets, rules lookup, and licensed content tied to fifth edition play."
);

entity(
    "drow",
    "Drow",
    "concept",
    "Underdark elves tied to Lolth's faith.",
    "Drow are dark elves of the Underdark whose matriarchal society worships Lolth, making Drizzt's exile a defining Realms story."
);

/* ---------- Deities ---------- */

entity(
    "lolth",
    "Lolth",
    "person",
    "Spider Queen goddess of the drow.",
    "Lolth, the Spider Queen, is the chaotic evil goddess of drow who demands betrayal and survival in the depths beneath Faerûn."
);

entity(
    "mystra",
    "Mystra",
    "person",
    "Goddess of the Weave and arcane magic.",
    "Mystra governs the Weave of arcane magic in the Forgotten Realms, choosing Chosen such as Elminster to safeguard spellcasting."
);

entity(
    "torm",
    "Torm",
    "person",
    "God of duty and righteous paladins.",
    "Torm is the god of duty and loyalty in Faerûn, patron of paladins who swear oaths against tyranny and corruption."
);

entity(
    "vecna",
    "Vecna",
    "person",
    "Lich-god of secrets and forbidden lore.",
    "Vecna is the undead arch-lich whose hand and eye artifacts embody betrayal and hidden knowledge across D&D's multiverse."
);

/* ---------- Relationships ---------- */

rel("gary-gygax", "dungeons-and-dragons", "created", "Gary Gygax co-created Dungeons & Dragons.", 0.99, 0.99);
rel("dave-arneson", "dungeons-and-dragons", "created", "Dave Arneson co-created Dungeons & Dragons.", 0.99, 0.99);
rel("gary-gygax", "greyhawk", "created", "Gygax developed Greyhawk as his home campaign.", 0.97, 0.95);
rel("ed-greenwood", "forgotten-realms", "created", "Ed Greenwood created the Forgotten Realms.", 0.99, 0.98);
rel("r-a-salvatore", "drizzt-do-urden", "created", "Salvatore's novels defined Drizzt Do'Urden.", 0.98, 0.97);

rel("wizards-of-the-coast", "dungeons-and-dragons", "publishes", "Wizards of the Coast publishes D&D.", 0.99, 0.99);
rel("hasbro", "wizards-of-the-coast", "contains", "Hasbro owns Wizards of the Coast.", 0.98, 0.96);
rel("wizards-of-the-coast", "dnd-beyond", "produced", "Wizards operates D&D Beyond.", 0.96, 0.93);
rel("wizards-of-the-coast", "forgotten-realms", "publishes", "WotC publishes Forgotten Realms material.", 0.97, 0.95);

rel("original-dungeons-dragons", "dungeons-and-dragons", "part_of", "The 1974 rules began the D&D line.", 0.99, 0.98);
rel("advanced-dungeons-dragons", "dungeons-and-dragons", "part_of", "AD&D is a major historical edition.", 0.98, 0.96);
rel("dnd-fifth-edition", "dungeons-and-dragons", "part_of", "5e is the current D&D edition.", 0.99, 0.99);
rel("players-handbook", "dnd-fifth-edition", "part_of", "The Player's Handbook is core to 5e.", 0.98, 0.97);

rel("forgotten-realms", "dungeons-and-dragons", "part_of", "The Realms are D&D's flagship setting.", 0.98, 0.97);
rel("greyhawk", "dungeons-and-dragons", "part_of", "Greyhawk is a classic D&D setting.", 0.97, 0.95);
rel("dragonlance", "dungeons-and-dragons", "part_of", "Dragonlance is an official D&D setting.", 0.96, 0.94);
rel("planescape", "dungeons-and-dragons", "part_of", "Planescape explores D&D's planes.", 0.95, 0.92);
rel("ravenloft", "dungeons-and-dragons", "part_of", "Ravenloft is D&D's horror setting.", 0.96, 0.93);

rel("faerun", "forgotten-realms", "located_in", "Faerûn is the Realms' main continent.", 0.99, 0.98);
rel("waterdeep", "sword-coast", "located_in", "Waterdeep lies on the Sword Coast.", 0.98, 0.96);
rel("baldurs-gate", "sword-coast", "located_in", "Baldur's Gate is a Sword Coast city.", 0.98, 0.96);
rel("candlekeep", "sword-coast", "located_in", "Candlekeep stands on the Sword Coast.", 0.97, 0.94);
rel("sword-coast", "faerun", "located_in", "The Sword Coast is western Faerûn.", 0.98, 0.96);
rel("oerth", "greyhawk", "located_in", "Greyhawk adventures take place on Oerth.", 0.97, 0.95);

rel("drizzt-do-urden", "drow", "member_of", "Drizzt was born a drow of Menzoberranzan.", 0.98, 0.96);
rel("drizzt-do-urden", "forgotten-realms", "located_in", "Drizzt's stories unfold in the Realms.", 0.98, 0.96);
rel("drizzt-do-urden", "lolth", "opposed_by", "Drizzt rejected Lolth's faith.", 0.97, 0.95);
rel("elminster", "forgotten-realms", "located_in", "Elminster operates across Faerûn.", 0.97, 0.95);
rel("elminster", "mystra", "connected_to", "Elminster is a Chosen of Mystra.", 0.96, 0.93);
rel("drow", "lolth", "connected_to", "Drow society centers on Lolth's church.", 0.97, 0.95);

rel("dungeon-master", "dungeons-and-dragons", "part_of", "The DM runs D&D sessions.", 0.99, 0.98);
rel("alignment-system", "dungeons-and-dragons", "part_of", "Alignment is a core D&D concept.", 0.96, 0.93);
rel("character-class", "players-handbook", "records", "The PHB defines official classes.", 0.97, 0.95);
rel("baldurs-gate", "forgotten-realms", "related_to", "Baldur's Gate anchors Realms adventures and adaptations.", 0.95, 0.92);
rel("vecna", "dungeons-and-dragons", "related_to", "Vecna's artifacts appear across D&D settings.", 0.94, 0.9);
rel("torm", "forgotten-realms", "related_to", "Torm is a major Faerûnian deity.", 0.95, 0.91);

module.exports = { entities, relationships };
