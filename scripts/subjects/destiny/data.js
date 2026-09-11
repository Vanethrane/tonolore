/*
 * Destiny subject data — Bungie's shared-world sci-fi shooter universe.
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
    "destiny",
    "Destiny",
    "topic",
    "Bungie's shared-world shooter of Light, Darkness, and Guardians.",
    "Destiny is Bungie's shared-world science-fantasy franchise in which Guardians wield the Light—and later Darkness—against the Cabal, Vex, Hive, Fallen, and Taken around the Traveler and the Last City."
);

entity(
    "bungie",
    "Bungie",
    "organization",
    "Studio that created Destiny.",
    "Bungie developed Destiny and Destiny 2, expanding a living universe of raids, seasons, and conflicts between Light and Darkness."
);

entity(
    "destiny-1",
    "Destiny (2014)",
    "work",
    "Original Destiny shared-world shooter.",
    "Destiny (2014) introduced Guardians, the Traveler, the City, and campaigns against alien enemies culminating in the Taken King and later expansions."
);

entity(
    "destiny-2",
    "Destiny 2",
    "work",
    "Sequel era of the Red War and beyond.",
    "Destiny 2 continues Guardian warfare from the Red War through Darkness pyramids, the Witch Queen, and ongoing seasonal storytelling."
);

/* ---------- Cosmic forces ---------- */

entity(
    "traveler",
    "The Traveler",
    "concept",
    "White sphere that grants the Light.",
    "The Traveler is a mysterious white sphere that terraformed worlds, granted Guardians the Light, and hangs wounded above the Last City."
);

entity(
    "darkness",
    "The Darkness",
    "concept",
    "Cosmic force opposing the Traveler's Light.",
    "The Darkness is the cosmic counterpart to the Traveler's Light, arriving with pyramid ships and tempting Guardians with new powers."
);

entity(
    "light",
    "The Light",
    "concept",
    "Paracausal power of Guardians and Ghosts.",
    "The Light is the paracausal energy of the Traveler that lets Guardians resurrect, wield Solar, Arc, and Void, and defy death."
);

entity(
    "ghosts",
    "Ghosts",
    "concept",
    "Light-born companions that raise Guardians.",
    "Ghosts are small machines of Light that find and resurrect Guardians, serving as companions, scanners, and resurrection anchors."
);

/* ---------- Peoples / factions ---------- */

entity(
    "guardians",
    "Guardians",
    "concept",
    "Risen warriors defending the Last City.",
    "Guardians are Lightbearers—Hunters, Titans, and Warlocks—raised by Ghosts to defend humanity against cosmic threats."
);

entity(
    "vanguard",
    "The Vanguard",
    "organization",
    "Leadership of the City's Guardians.",
    "The Vanguard coordinates Guardian operations from the Tower, historically led by Zavala, Ikora Rey, and Cayde-6."
);

entity(
    "cabal",
    "Cabal",
    "organization",
    "Imperial warmachine of Dominus Ghaul and beyond.",
    "The Cabal are a militaristic empire that invaded the City in the Red War and later fractured across Sol's battlefronts."
);

entity(
    "vex",
    "Vex",
    "organization",
    "Time-spanning machine collective.",
    "The Vex are radiolarian machines that convert worlds into networked simulation engines spanning past and future."
);

entity(
    "hive",
    "Hive",
    "organization",
    "Sword Logic worshippers of the worm gods.",
    "The Hive are a death-worshipping species bound to worm gods, led by figures such as Oryx, Savathûn, and Xivu Arath."
);

entity(
    "fallen",
    "Fallen",
    "organization",
    "Eliksni scavenger houses of the Whirlwind.",
    "The Fallen (Eliksni) are multi-armed scavengers whose houses raid Guardians after losing the Traveler in the Whirlwind."
);

entity(
    "taken",
    "Taken",
    "concept",
    "Darkness-twisted thralls of Oryx.",
    "The Taken are beings stolen and remade by Darkness through Oryx's power, appearing as warped versions of other species."
);

entity(
    "awoken",
    "Awoken",
    "concept",
    "Blue-skinned people of the Reef and Distributary.",
    "The Awoken are a people born between Light and Darkness, ruling the Reef and tied to the Dreaming City's mysteries."
);

entity(
    "exo",
    "Exo",
    "concept",
    "Human minds in machine bodies.",
    "Exos are human consciousnesses housed in machine frames, created in the Golden Age and common among Guardians."
);

/* ---------- Characters ---------- */

entity(
    "savathun",
    "Savathûn",
    "person",
    "Hive Witch Queen of cunning and lies.",
    "Savathûn, the Witch Queen, is a Hive god of cunning who schemes across ages, later claiming Light in Destiny 2's Witch Queen saga."
);

entity(
    "oryx",
    "Oryx, the Taken King",
    "person",
    "Hive god-king who created the Taken.",
    "Oryx is the Taken King, a Hive deity who invaded Sol with his Dreadnaught and forged the Taken through communion with the Deep."
);

entity(
    "crota",
    "Crota",
    "person",
    "Oryx's son; god-knight of the Moon.",
    "Crota, Son of Oryx, is a Hive prince whose slaughter on the Moon and in his Oversoul Throne World defined early Destiny raids."
);

entity(
    "xivu-arath",
    "Xivu Arath",
    "person",
    "Hive god of war.",
    "Xivu Arath is the Hive god of war, sister to Savathûn and Oryx, spreading conquest through tribute and endless battle."
);

entity(
    "rasputin",
    "Rasputin",
    "person",
    "Golden Age Warmind AI.",
    "Rasputin is a Golden Age Warmind artificial intelligence that defended Earth with warsats and later resurfaced as a Destiny ally and mystery."
);

entity(
    "zavala",
    "Commander Zavala",
    "person",
    "Titan Vanguard of the Last City.",
    "Commander Zavala is the Titan Vanguard who leads the City's defense with stoic resolve through the Red War and beyond."
);

entity(
    "ikora-rey",
    "Ikora Rey",
    "person",
    "Warlock Vanguard and Hidden leader.",
    "Ikora Rey is the Warlock Vanguard, a formidable Lightbearer who runs the Hidden intelligence network."
);

entity(
    "cayde-6",
    "Cayde-6",
    "person",
    "Exo Hunter Vanguard of wry fame.",
    "Cayde-6 was the Exo Hunter Vanguard known for humor and daring, whose death drove the Forsaken era of Destiny 2."
);

entity(
    "eris-morn",
    "Eris Morn",
    "person",
    "Hive-scarred survivor and guide.",
    "Eris Morn survived the Moon's Hive nightmare and guides Guardians against Crota, Oryx, and later Darkness threats."
);

entity(
    "osiris",
    "Osiris",
    "person",
    "Exile Warlock studying the Vex.",
    "Osiris is a legendary Warlock exile obsessed with the Vex, the Infinite Forest, and prophecies of Light and Darkness."
);

/* ---------- Places ---------- */

entity(
    "the-city",
    "The Last City",
    "place",
    "Humanity's refuge beneath the Traveler.",
    "The Last City is humanity's great refuge under the Traveler, protected by Guardians from the Tower's walls."
);

entity(
    "tower",
    "The Tower",
    "place",
    "Guardian hub overlooking the City.",
    "The Tower is the social and operational hub where Guardians gather vendors, Vanguard leadership, and embark on missions."
);

entity(
    "reef",
    "The Reef",
    "place",
    "Awoken domain in the Asteroid Belt.",
    "The Reef is the Awoken realm among the Asteroid Belt, seat of the Queen and gateway to the Dreaming City."
);

entity(
    "dreaming-city",
    "The Dreaming City",
    "place",
    "Cursed Awoken city of Taken blight.",
    "The Dreaming City is a beautiful, curse-bound Awoken realm plagued by Taken cycles and Hive intrigue."
);

entity(
    "dreadnaught",
    "The Dreadnaught",
    "place",
    "Oryx's massive Hive flagship.",
    "The Dreadnaught is Oryx's throne-world ship in Saturn's rings, site of the Taken King's final confrontation."
);

entity(
    "pyramid-ships",
    "Pyramid ships",
    "object",
    "Darkness vessels entering the system.",
    "Pyramid ships are geometric Darkness vessels that enter Sol, heralding a new age of Darkness communion for Guardians."
);

/* ---------- Relationships ---------- */

rel("bungie", "destiny", "created", "Bungie created Destiny.", 0.99, 0.99);
rel("bungie", "destiny-1", "produced", "Bungie developed Destiny (2014).", 0.98, 0.96);
rel("bungie", "destiny-2", "produced", "Bungie developed Destiny 2.", 0.98, 0.96);
rel("destiny-1", "destiny", "part_of", "Destiny (2014) begins the franchise.", 0.99, 0.97);
rel("destiny-2", "destiny", "part_of", "Destiny 2 continues the franchise.", 0.99, 0.97);

rel("traveler", "light", "produced", "The Traveler grants the Light.", 0.98, 0.96);
rel("traveler", "guardians", "created", "The Traveler's Light raises Guardians.", 0.97, 0.94);
rel("ghosts", "guardians", "supports", "Ghosts resurrect and aid Guardians.", 0.98, 0.95);
rel("darkness", "light", "opposed_by", "Darkness stands against the Light.", 0.98, 0.96);
rel("darkness", "taken", "created", "Darkness power remakes the Taken.", 0.96, 0.93);
rel("pyramid-ships", "darkness", "connected_to", "Pyramid ships carry the Darkness.", 0.97, 0.94);

rel("vanguard", "guardians", "leads", "The Vanguard leads the Guardians.", 0.97, 0.94);
rel("zavala", "vanguard", "member_of", "Zavala is Titan Vanguard.", 0.98, 0.95);
rel("ikora-rey", "vanguard", "member_of", "Ikora is Warlock Vanguard.", 0.98, 0.95);
rel("cayde-6", "vanguard", "member_of", "Cayde-6 was Hunter Vanguard.", 0.97, 0.94);
rel("cayde-6", "exo", "connected_to", "Cayde-6 is an Exo.", 0.96, 0.92);

rel("oryx", "hive", "leads", "Oryx ruled as Taken King of the Hive.", 0.98, 0.96);
rel("oryx", "taken", "created", "Oryx created the Taken.", 0.98, 0.96);
rel("oryx", "dreadnaught", "uses", "Oryx commands the Dreadnaught.", 0.97, 0.94);
rel("crota", "oryx", "related_to", "Crota is Oryx's son.", 0.97, 0.94);
rel("savathun", "hive", "leads", "Savathûn leads Hive schemes as Witch Queen.", 0.97, 0.94);
rel("savathun", "oryx", "related_to", "Savathûn is Oryx's sister.", 0.96, 0.93);
rel("xivu-arath", "hive", "leads", "Xivu Arath wages Hive war.", 0.96, 0.92);

rel("the-city", "traveler", "located_in", "The Last City shelters beneath the Traveler.", 0.98, 0.96);
rel("tower", "the-city", "located_in", "The Tower overlooks the Last City.", 0.98, 0.95);
rel("reef", "awoken", "located_in", "The Reef is the Awoken domain.", 0.97, 0.94);
rel("dreaming-city", "reef", "part_of", "The Dreaming City belongs to the Reef's realm.", 0.96, 0.92);
rel("eris-morn", "hive", "opposed_by", "Eris guides Guardians against the Hive.", 0.96, 0.93);
rel("osiris", "vex", "seeks", "Osiris studies the Vex endlessly.", 0.96, 0.92);
rel("rasputin", "destiny", "connected_to", "Rasputin is a major Warmind figure in Destiny.", 0.95, 0.9);
rel("cabal", "the-city", "opposed_by", "The Cabal assaulted the Last City.", 0.96, 0.93);
rel("fallen", "traveler", "seeks", "The Fallen seek the Traveler they lost.", 0.95, 0.9);

module.exports = { entities, relationships };
