/*
 * Game of Thrones subject data — A Song of Ice and Fire / HBO adaptation.
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
    "game-of-thrones",
    "Game of Thrones",
    "topic",
    "HBO fantasy saga of Westeros, adapted from A Song of Ice and Fire.",
    "Game of Thrones is the HBO television adaptation of George R.R. Martin's A Song of Ice and Fire, charting the struggle for the Iron Throne, the return of dragons, and the threat beyond the Wall."
);

entity(
    "a-song-of-ice-and-fire",
    "A Song of Ice and Fire",
    "work",
    "George R.R. Martin's epic fantasy novel series.",
    "A Song of Ice and Fire is George R.R. Martin's novel cycle that introduces Westeros, Essos, the great houses, and the looming conflict of ice and fire."
);

entity(
    "george-rr-martin",
    "George R.R. Martin",
    "person",
    "Author of A Song of Ice and Fire.",
    "George R.R. Martin created A Song of Ice and Fire and served as a producer and creative voice on the Game of Thrones television series."
);

entity(
    "hbo",
    "HBO",
    "organization",
    "Network that produced Game of Thrones.",
    "HBO produced and aired Game of Thrones, turning Martin's novels into a landmark fantasy television series."
);

/* ---------- Places ---------- */

entity(
    "westeros",
    "Westeros",
    "place",
    "Continent of the Seven Kingdoms and the Wall.",
    "Westeros is the western continent of the known world, home to the Seven Kingdoms, the Iron Throne, and the Wall that guards the realm."
);

entity(
    "essos",
    "Essos",
    "place",
    "Vast eastern continent of Free Cities and Dothraki seas.",
    "Essos stretches east of Westeros and holds Free Cities, Slaver's Bay, the Dothraki Sea, and Daenerys Targaryen's early rise."
);

entity(
    "kings-landing",
    "King's Landing",
    "place",
    "Capital of the Seven Kingdoms and seat of the Iron Throne.",
    "King's Landing is the capital city of the Seven Kingdoms, center of court intrigue and the Iron Throne's power."
);

entity(
    "winterfell",
    "Winterfell",
    "place",
    "Ancestral castle of House Stark in the North.",
    "Winterfell is the ancient seat of House Stark, heart of the North and home to Ned Stark's children."
);

entity(
    "the-wall",
    "The Wall",
    "place",
    "Ice fortification manned by the Night's Watch.",
    "The Wall is a colossal ice barrier in the far North, defended by the Night's Watch against wildlings and darker threats."
);

entity(
    "dragonstone",
    "Dragonstone",
    "place",
    "Targaryen island fortress and ancestral outpost.",
    "Dragonstone is the volcanic island castle of House Targaryen, later claimed by Stannis Baratheon and again by Daenerys."
);

entity(
    "iron-throne",
    "Iron Throne",
    "object",
    "Seat of the ruler of the Seven Kingdoms.",
    "The Iron Throne is forged from conquered swords and symbolizes rule over the Seven Kingdoms of Westeros."
);

/* ---------- Houses / factions ---------- */

entity(
    "house-stark",
    "House Stark",
    "organization",
    "Wardens of the North; direwolf sigil.",
    "House Stark of Winterfell rules the North with the words Winter is Coming, bound to honor, the old gods, and direwolves."
);

entity(
    "house-lannister",
    "House Lannister",
    "organization",
    "Lords of Casterly Rock; lion sigil.",
    "House Lannister of Casterly Rock is the wealthy western house whose words Hear Me Roar mask the motto A Lannister always pays his debts."
);

entity(
    "house-targaryen",
    "House Targaryen",
    "organization",
    "Dragonlords who once ruled Westeros.",
    "House Targaryen conquered Westeros with dragons, ruled from the Iron Throne for centuries, and seeks restoration through Daenerys and other heirs."
);

entity(
    "nights-watch",
    "Night's Watch",
    "organization",
    "Sworn brotherhood defending the Wall.",
    "The Night's Watch takes the black to guard the Wall and the realms of men from threats beyond, including wildlings and White Walkers."
);

entity(
    "white-walkers",
    "White Walkers",
    "organization",
    "Icy undead threat led by the Night King (show).",
    "White Walkers — the Others of the books — raise the dead and march from the Lands of Always Winter to end the living."
);

/* ---------- Characters ---------- */

entity(
    "jon-snow",
    "Jon Snow",
    "person",
    "Ned Stark's supposed bastard; later Lord Commander and claimant.",
    "Jon Snow is raised at Winterfell as Ned Stark's bastard, joins the Night's Watch, and becomes central to the war against the dead and the game of thrones."
);

entity(
    "daenerys-targaryen",
    "Daenerys Targaryen",
    "person",
    "Mother of Dragons and Targaryen claimant.",
    "Daenerys Targaryen survives exile in Essos, hatches three dragons, and sails to reclaim the Iron Throne for House Targaryen."
);

entity(
    "tyrion-lannister",
    "Tyrion Lannister",
    "person",
    "Witty youngest Lannister; Hand to kings and queens.",
    "Tyrion Lannister uses intellect and political skill to survive court hatred, serve as Hand, and navigate the wars of Westeros."
);

entity(
    "arya-stark",
    "Arya Stark",
    "person",
    "Youngest Stark daughter turned assassin.",
    "Arya Stark flees King's Landing after her father's fall, trains as a killer, and pursues a list of names across Westeros."
);

entity(
    "sansa-stark",
    "Sansa Stark",
    "person",
    "Elder Stark daughter shaped by court and the North.",
    "Sansa Stark endures captivity and political marriages before reclaiming power in the North as a hardened player of the game."
);

entity(
    "cersei-lannister",
    "Cersei Lannister",
    "person",
    "Queen and later ruler clinging to the Iron Throne.",
    "Cersei Lannister schemes to protect her children and power, ruling from King's Landing as a fierce Lannister queen."
);

entity(
    "jaime-lannister",
    "Jaime Lannister",
    "person",
    "Kingslayer and twin brother to Cersei.",
    "Jaime Lannister is the Kingsguard knight who killed Aerys Targaryen, bound to Cersei and slowly changed by war and captivity."
);

entity(
    "eddard-stark",
    "Eddard Stark",
    "person",
    "Lord of Winterfell and Hand of the King.",
    "Eddard Ned Stark is the honorable Warden of the North whose investigation of court secrets sparks the War of the Five Kings."
);

entity(
    "night-king",
    "Night King",
    "person",
    "Leader of the White Walkers in the television series.",
    "The Night King commands the White Walkers and the army of the dead, embodying the existential threat from beyond the Wall."
);

entity(
    "bran-stark",
    "Bran Stark",
    "person",
    "Stark son who becomes the Three-Eyed Raven.",
    "Bran Stark is crippled early in the saga and journeys north to become the Three-Eyed Raven, keeper of memory and greenseeing."
);

entity(
    "theon-greyjoy",
    "Theon Greyjoy",
    "person",
    "Ward of Winterfell torn between Greyjoy and Stark.",
    "Theon Greyjoy grows up at Winterfell as Ned Stark's ward, betrays the Starks, and endures captivity before seeking redemption."
);

entity(
    "samwell-tarly",
    "Samwell Tarly",
    "person",
    "Night's Watch steward and Jon Snow's friend.",
    "Samwell Tarly joins the Night's Watch, becomes Jon Snow's closest ally, and uncovers lore vital to fighting the dead."
);

entity(
    "brienne-of-tarth",
    "Brienne of Tarth",
    "person",
    "Sworn warrior loyal to the Starks' cause.",
    "Brienne of Tarth is a formidable knight who swears to protect Stark daughters and uphold honor in a ruthless realm."
);

entity(
    "petyr-baelish",
    "Petyr Baelish",
    "person",
    "Littlefinger; master of intrigue.",
    "Petyr Baelish rises through the court by chaos and lies, manipulating houses until the Stark sisters end his game."
);

/* ---------- Relationships ---------- */

rel("george-rr-martin", "a-song-of-ice-and-fire", "created", "George R.R. Martin wrote A Song of Ice and Fire.", 0.99, 0.99);
rel("george-rr-martin", "game-of-thrones", "created", "Martin created the world adapted as Game of Thrones.", 0.98, 0.97);
rel("a-song-of-ice-and-fire", "game-of-thrones", "adapted_into", "The novels were adapted into Game of Thrones.", 0.99, 0.98);
rel("hbo", "game-of-thrones", "produced", "HBO produced Game of Thrones.", 0.99, 0.98);

rel("westeros", "game-of-thrones", "located_in", "Westeros is the primary setting of Game of Thrones.", 0.99, 0.97);
rel("essos", "game-of-thrones", "located_in", "Essos is a major setting alongside Westeros.", 0.97, 0.94);
rel("kings-landing", "westeros", "located_in", "King's Landing is in Westeros.", 0.99, 0.97);
rel("winterfell", "westeros", "located_in", "Winterfell is in the North of Westeros.", 0.99, 0.97);
rel("the-wall", "westeros", "located_in", "The Wall stands at the northern edge of Westeros.", 0.99, 0.97);
rel("dragonstone", "westeros", "located_in", "Dragonstone lies off Westeros's coast.", 0.98, 0.95);
rel("iron-throne", "kings-landing", "located_in", "The Iron Throne sits in King's Landing.", 0.99, 0.97);

rel("house-stark", "winterfell", "located_in", "House Stark rules from Winterfell.", 0.99, 0.98);
rel("house-lannister", "westeros", "located_in", "House Lannister is a great house of Westeros.", 0.97, 0.94);
rel("house-targaryen", "dragonstone", "connected_to", "Dragonstone is the Targaryen ancestral seat.", 0.97, 0.94);
rel("nights-watch", "the-wall", "located_in", "The Night's Watch defends the Wall.", 0.99, 0.98);
rel("white-walkers", "the-wall", "opposed_by", "White Walkers threaten the realms south of the Wall.", 0.98, 0.96);

rel("eddard-stark", "house-stark", "leads", "Ned Stark is lord of House Stark.", 0.98, 0.96);
rel("jon-snow", "nights-watch", "member_of", "Jon Snow serves in the Night's Watch.", 0.98, 0.96);
rel("jon-snow", "house-stark", "connected_to", "Jon Snow is raised among the Starks.", 0.97, 0.95);
rel("daenerys-targaryen", "house-targaryen", "leads", "Daenerys claims leadership of House Targaryen.", 0.98, 0.96);
rel("tyrion-lannister", "house-lannister", "member_of", "Tyrion is a Lannister.", 0.99, 0.97);
rel("cersei-lannister", "house-lannister", "member_of", "Cersei is a Lannister.", 0.99, 0.97);
rel("jaime-lannister", "house-lannister", "member_of", "Jaime is a Lannister.", 0.99, 0.97);
rel("arya-stark", "house-stark", "member_of", "Arya is a Stark.", 0.99, 0.97);
rel("sansa-stark", "house-stark", "member_of", "Sansa is a Stark.", 0.99, 0.97);
rel("bran-stark", "house-stark", "member_of", "Bran is a Stark.", 0.99, 0.97);
rel("night-king", "white-walkers", "leads", "The Night King leads the White Walkers.", 0.98, 0.96);
rel("samwell-tarly", "nights-watch", "member_of", "Samwell serves the Night's Watch.", 0.97, 0.94);
rel("cersei-lannister", "jaime-lannister", "connected_to", "Cersei and Jaime are twins and co-conspirators.", 0.98, 0.96);
rel("daenerys-targaryen", "iron-throne", "connected_to", "Daenerys seeks the Iron Throne.", 0.97, 0.94);

module.exports = { entities, relationships };
