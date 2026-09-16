/*
 * Doctor Who subject data — BBC's time-travel science fiction series.
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
    "doctor-who",
    "Doctor Who",
    "topic",
    "BBC time-travel series of the Doctor and the TARDIS.",
    "Doctor Who is the long-running BBC science-fiction series about the Doctor, a Time Lord who travels in the TARDIS with companions, facing Daleks, Cybermen, and threats across time and space."
);

entity(
    "bbc",
    "BBC",
    "organization",
    "British broadcaster behind Doctor Who.",
    "The British Broadcasting Corporation (BBC) created and produces Doctor Who, the cornerstone of British televised science fiction."
);

entity(
    "sydney-newman",
    "Sydney Newman",
    "person",
    "BBC executive who launched Doctor Who.",
    "Sydney Newman helped create Doctor Who at the BBC in 1963 as Head of Drama, shaping its educational adventure premise."
);

entity(
    "russell-t-davies",
    "Russell T Davies",
    "person",
    "Showrunner of the modern revival eras.",
    "Russell T Davies revived Doctor Who in 2005 and later returned as showrunner, defining modern companions and storytelling tone."
);

entity(
    "doctor-who-tv",
    "Doctor Who (TV series)",
    "work",
    "The ongoing television series since 1963.",
    "The Doctor Who television series has aired since 1963 (with a long hiatus), following regenerations of the Doctor across classic and modern eras."
);

/* ---------- Core characters / concepts ---------- */

entity(
    "the-doctor",
    "The Doctor",
    "person",
    "Renegade Time Lord traveler of the TARDIS.",
    "The Doctor is a renegade Time Lord who steals a TARDIS, regenerates into new incarnations, and fights injustice across the universe with human companions."
);

entity(
    "tardis",
    "TARDIS",
    "object",
    "Time-and-space ship disguised as a police box.",
    "The TARDIS (Time And Relative Dimension In Space) is bigger on the inside and typically appears as a 1960s British police box while traveling anywhere in time and space."
);

entity(
    "time-lords",
    "Time Lords",
    "concept",
    "Gallifreyan civilization of time travelers.",
    "The Time Lords are the Doctor's people of Gallifrey, a powerful civilization that polices time travel and once fought the Time War against the Daleks."
);

entity(
    "gallifrey",
    "Gallifrey",
    "place",
    "Homeworld of the Time Lords.",
    "Gallifrey is the orange-skied homeworld of the Time Lords, seat of the Citadel and the Eye of Harmony, long thought lost in the Time War."
);

entity(
    "regeneration",
    "Regeneration",
    "concept",
    "Time Lord rebirth into a new incarnation.",
    "Regeneration is the Time Lord process of dying and being reborn in a new body and personality, allowing the Doctor to continue across decades of actors."
);

entity(
    "companions",
    "Companions",
    "concept",
    "Travelers who journey with the Doctor.",
    "Companions are the friends and allies who travel with the Doctor in the TARDIS, grounding adventures and often becoming legends themselves."
);

entity(
    "sonic-screwdriver",
    "Sonic screwdriver",
    "object",
    "The Doctor's versatile sonic tool.",
    "The sonic screwdriver is the Doctor's multipurpose tool for scanning, unlocking, and improvising solutions—except when a door needs a key."
);

entity(
    "time-war",
    "Last Great Time War",
    "concept",
    "War between Time Lords and Daleks.",
    "The Last Great Time War was a universe-shaking conflict between Time Lords and Daleks that haunted the modern Doctor's early revival years."
);

/* ---------- Companions (light) ---------- */

entity(
    "rose-tyler",
    "Rose Tyler",
    "person",
    "Companion of the Ninth and Tenth Doctors.",
    "Rose Tyler is a landmark modern companion who travels with the Ninth and Tenth Doctors and becomes deeply bound to Bad Wolf and the Doctor's fate."
);

entity(
    "clara-oswald",
    "Clara Oswald",
    "person",
    "Impossible Girl companion of the Eleventh and Twelfth Doctors.",
    "Clara Oswald is the 'Impossible Girl' who echoes through the Doctor's timeline and travels as a companion of the Eleventh and Twelfth Doctors."
);

entity(
    "donna-noble",
    "Donna Noble",
    "person",
    "Tempestuous companion of the Tenth Doctor.",
    "Donna Noble is a sharp-tongued companion of the Tenth Doctor whose partnership peaks in the DoctorDonna crisis and a heartbreaking farewell."
);

entity(
    "sarah-jane-smith",
    "Sarah Jane Smith",
    "person",
    "Classic journalist companion and later heroine.",
    "Sarah Jane Smith is a beloved classic companion who later starred in The Sarah Jane Adventures, remaining a touchstone of Doctor Who fandom."
);

entity(
    "amy-pond",
    "Amy Pond",
    "person",
    "Scottish companion of the Eleventh Doctor.",
    "Amelia 'Amy' Pond grows up waiting for the raggedy Doctor and later travels with him and Rory through cracks in time."
);

entity(
    "martha-jones",
    "Martha Jones",
    "person",
    "Medical student companion of the Tenth Doctor.",
    "Martha Jones is a medical student companion who walks the Earth in the Year That Never Was and later works with UNIT."
);

/* ---------- Villains / allies ---------- */

entity(
    "daleks",
    "Daleks",
    "concept",
    "Genocidal pepperpot mutants of Skaro.",
    "Daleks are xenophobic mutants in armored travel machines, created by Davros on Skaro, forever chanting 'Exterminate' at the Doctor."
);

entity(
    "davros",
    "Davros",
    "person",
    "Creator of the Daleks.",
    "Davros is the Kaled scientist who created the Daleks, repeatedly clashing with the Doctor across classic and modern stories."
);

entity(
    "cybermen",
    "Cybermen",
    "concept",
    "Emotionless cyborg converters of humanity.",
    "Cybermen are cybernetically converted humanoids who seek to upgrade others, opposing the Doctor across Mondas, Pete's World, and beyond."
);

entity(
    "the-master",
    "The Master",
    "person",
    "The Doctor's Time Lord nemesis.",
    "The Master is a renegade Time Lord and the Doctor's dark mirror, regenerating through many faces while scheming against Gallifrey and Earth."
);

entity(
    "weeping-angels",
    "Weeping Angels",
    "concept",
    "Quantum-locked predators that feed on time.",
    "Weeping Angels are quantum-locked statues that move when unobserved, sending victims back in time to feed on potential lives."
);

entity(
    "unit",
    "UNIT",
    "organization",
    "Military force defending Earth from aliens.",
    "UNIT (Unified Intelligence Taskforce) is the military-scientific organization that defends Earth and often allies with the Doctor."
);

entity(
    "captain-jack-harkness",
    "Captain Jack Harkness",
    "person",
    "Immortal Time Agent and Torchwood leader.",
    "Captain Jack Harkness is a flirtatious immortal Time Agent who travels with the Ninth Doctor and later leads Torchwood."
);

entity(
    "river-song",
    "River Song",
    "person",
    "Archaeologist wife across tangled timelines.",
    "River Song is an archaeologist whose timeline runs opposite the Doctor's, culminating in Spoiler and silence-bound secrets."
);

/* ---------- Places / related ---------- */

entity(
    "skaro",
    "Skaro",
    "place",
    "Homeworld of the Daleks.",
    "Skaro is the war-scarred home planet of the Daleks and Davros, repeatedly visited across Doctor Who history."
);

entity(
    "earth",
    "Earth",
    "place",
    "Humanity's home and frequent battleground.",
    "Earth is humanity's homeworld and the Doctor's frequent second home, defended by UNIT and threatened by countless invasions."
);

entity(
    "torchwood",
    "Torchwood",
    "organization",
    "Secret institute spun from Doctor Who.",
    "Torchwood is a covert organization founded to deal with alien threats and Time Lord fallout, later led by Captain Jack."
);

entity(
    "bad-wolf",
    "Bad Wolf",
    "concept",
    "Time-scattered message and Rose's power.",
    "Bad Wolf is the recurring phrase and power that culminates when Rose Tyler absorbs the Time Vortex to stop the Daleks."
);

entity(
    "time-vortex",
    "Time Vortex",
    "concept",
    "Chaotic stream through which TARDISes fly.",
    "The Time Vortex is the turbulent medium of time travel through which the TARDIS flies between eras and worlds."
);

/* ---------- Relationships ---------- */

rel("sydney-newman", "doctor-who", "created", "Sydney Newman helped create Doctor Who.", 0.97, 0.94);
rel("bbc", "doctor-who", "produced", "The BBC produces Doctor Who.", 0.99, 0.98);
rel("bbc", "doctor-who-tv", "publishes", "The BBC broadcasts Doctor Who.", 0.98, 0.96);
rel("russell-t-davies", "doctor-who-tv", "influenced", "Russell T Davies shaped the modern revival.", 0.97, 0.94);
rel("doctor-who-tv", "doctor-who", "part_of", "The TV series is the heart of Doctor Who.", 0.99, 0.98);

rel("the-doctor", "time-lords", "member_of", "The Doctor is a Time Lord.", 0.99, 0.98);
rel("the-doctor", "tardis", "uses", "The Doctor travels in the TARDIS.", 0.99, 0.98);
rel("the-doctor", "regeneration", "uses", "The Doctor regenerates into new incarnations.", 0.98, 0.96);
rel("the-doctor", "sonic-screwdriver", "uses", "The Doctor wields the sonic screwdriver.", 0.97, 0.94);
rel("time-lords", "gallifrey", "located_in", "Time Lords hail from Gallifrey.", 0.98, 0.96);
rel("tardis", "time-vortex", "uses", "The TARDIS flies through the Time Vortex.", 0.96, 0.92);

rel("rose-tyler", "companions", "member_of", "Rose is a companion of the Doctor.", 0.98, 0.95);
rel("clara-oswald", "companions", "member_of", "Clara is a companion of the Doctor.", 0.97, 0.94);
rel("donna-noble", "companions", "member_of", "Donna is a companion of the Doctor.", 0.97, 0.94);
rel("sarah-jane-smith", "companions", "member_of", "Sarah Jane was a classic companion.", 0.97, 0.94);
rel("amy-pond", "companions", "member_of", "Amy Pond is a companion of the Doctor.", 0.96, 0.93);
rel("martha-jones", "companions", "member_of", "Martha Jones is a companion of the Doctor.", 0.96, 0.93);
rel("rose-tyler", "the-doctor", "supports", "Rose travels with and supports the Doctor.", 0.97, 0.94);
rel("donna-noble", "the-doctor", "supports", "Donna partners with the Tenth Doctor.", 0.96, 0.93);

rel("daleks", "the-doctor", "opposed_by", "Daleks are sworn enemies of the Doctor.", 0.99, 0.97);
rel("davros", "daleks", "created", "Davros created the Daleks.", 0.98, 0.96);
rel("daleks", "skaro", "located_in", "Daleks originate from Skaro.", 0.97, 0.94);
rel("cybermen", "the-doctor", "opposed_by", "Cybermen oppose the Doctor.", 0.97, 0.94);
rel("the-master", "the-doctor", "opposed_by", "The Master is the Doctor's nemesis.", 0.98, 0.96);
rel("the-master", "time-lords", "member_of", "The Master is a Time Lord.", 0.97, 0.94);
rel("weeping-angels", "the-doctor", "opposed_by", "Weeping Angels prey across the Doctor's eras.", 0.96, 0.93);

rel("unit", "earth", "located_in", "UNIT defends Earth.", 0.97, 0.94);
rel("unit", "the-doctor", "supports", "UNIT often allies with the Doctor.", 0.96, 0.93);
rel("martha-jones", "unit", "member_of", "Martha later works with UNIT.", 0.94, 0.88);
rel("captain-jack-harkness", "torchwood", "leads", "Jack leads Torchwood.", 0.96, 0.92);
rel("torchwood", "doctor-who", "connected_to", "Torchwood spun out of Doctor Who.", 0.95, 0.9);
rel("time-war", "daleks", "connected_to", "Daleks fought the Time War.", 0.97, 0.94);
rel("time-war", "time-lords", "connected_to", "Time Lords fought the Time War.", 0.97, 0.94);
rel("bad-wolf", "rose-tyler", "connected_to", "Bad Wolf culminates in Rose's power.", 0.96, 0.93);
rel("river-song", "the-doctor", "connected_to", "River Song's timeline entwines with the Doctor.", 0.96, 0.93);

module.exports = { entities, relationships };
