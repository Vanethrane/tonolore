/*
 * Mass Effect subject data — BioWare's space RPG trilogy and related works.
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
    "mass-effect",
    "Mass Effect",
    "topic",
    "BioWare's space RPG of Shepard, the Citadel, and the Reapers.",
    "Mass Effect is BioWare's science-fiction franchise about Commander Shepard, the Normandy, Spectres, and a galaxy threatened by the Reapers across Citadel space and beyond."
);

entity(
    "bioware",
    "BioWare",
    "organization",
    "Studio that created Mass Effect.",
    "BioWare developed the Mass Effect trilogy and Andromeda, defining Shepard's war against the Reapers and the politics of the Citadel Council."
);

entity(
    "electronic-arts",
    "Electronic Arts",
    "organization",
    "Publisher of Mass Effect titles.",
    "Electronic Arts (EA) publishes Mass Effect and owns BioWare, releasing the trilogy, Legendary Edition, and later entries."
);

/* ---------- Works ---------- */

entity(
    "mass-effect-trilogy",
    "Mass Effect trilogy",
    "work",
    "Original three games following Shepard.",
    "The Mass Effect trilogy follows Commander Shepard from Eden Prime through the Reaper War across Mass Effect, Mass Effect 2, and Mass Effect 3."
);

entity(
    "mass-effect-legendary-edition",
    "Mass Effect Legendary Edition",
    "work",
    "Remastered collection of the trilogy.",
    "Mass Effect Legendary Edition remasters the original trilogy with updated visuals and consolidated single-player content."
);

entity(
    "mass-effect-andromeda",
    "Mass Effect: Andromeda",
    "work",
    "Andromeda Initiative spin-off RPG.",
    "Mass Effect: Andromeda shifts the setting to the Andromeda galaxy and the Initiative's search for a new home."
);

/* ---------- Characters ---------- */

entity(
    "commander-shepard",
    "Commander Shepard",
    "person",
    "Spectre protagonist of the trilogy.",
    "Commander Shepard is the Alliance officer and Citadel Spectre who uncovers the Reaper threat and rallies the galaxy aboard the Normandy."
);

entity(
    "garrus-vakarian",
    "Garrus Vakarian",
    "person",
    "Turian sharpshooter and Normandy crewmate.",
    "Garrus Vakarian is a turian C-Sec investigator turned vigilante who becomes one of Shepard's closest allies."
);

entity(
    "liara-tsoni",
    "Liara T'Soni",
    "person",
    "Asari archaeologist and Prothean expert.",
    "Liara T'Soni is an asari scientist whose Prothean research and later information network aid Shepard against the Reapers."
);

entity(
    "tali-zorah",
    "Tali'Zorah",
    "person",
    "Quarian engineer of the Migrant Fleet.",
    "Tali'Zorah nar Rayya is a quarian engineer who joins Shepard, bridging the geth conflict and her people's exile."
);

entity(
    "illusive-man",
    "The Illusive Man",
    "person",
    "Leader of Cerberus.",
    "The Illusive Man directs Cerberus from the shadows, funding Shepard's return while pursuing human dominance and Reaper tech."
);

entity(
    "david-anderson",
    "David Anderson",
    "person",
    "Alliance admiral and Shepard's mentor.",
    "David Anderson is an Alliance officer who champions Shepard's Spectre candidacy and later leads Earth's resistance."
);

entity(
    "saren-arterius",
    "Saren Arterius",
    "person",
    "Rogue Spectre serving Sovereign.",
    "Saren Arterius is a turian Spectre corrupted by Sovereign, sparking Shepard's first campaign against the Reapers."
);

entity(
    "mordin-solus",
    "Mordin Solus",
    "person",
    "Salarian scientist on the Normandy.",
    "Mordin Solus is a salarian geneticist whose work on the genophage and loyalty to Shepard define key trilogy choices."
);

entity(
    "jeff-moreau",
    "Jeff \"Joker\" Moreau",
    "person",
    "Normandy's ace pilot.",
    "Jeff \"Joker\" Moreau pilots the Normandy with unmatched skill despite brittle bone disease, staying with Shepard through the war."
);

entity(
    "udina",
    "Donnel Udina",
    "person",
    "Human diplomat on the Citadel Council.",
    "Donnel Udina is humanity's ambitious Citadel representative, often clashing with Anderson and Shepard over politics."
);

/* ---------- Ships / places / objects ---------- */

entity(
    "normandy",
    "SSV Normandy",
    "object",
    "Stealth frigate of Shepard's crew.",
    "The SSV Normandy (later Normandy SR-2) is the stealth frigate that carries Shepard's squad across the galaxy."
);

entity(
    "citadel",
    "The Citadel",
    "place",
    "Massive station seat of galactic politics.",
    "The Citadel is a vast deep-space station housing the Council, C-Sec, and the diplomatic heart of Citadel space."
);

entity(
    "mass-relay",
    "Mass relay",
    "object",
    "Prothean FTL network between star systems.",
    "Mass relays are enormous Prothean devices that fling ships across the galaxy and form the backbone of interstellar travel."
);

entity(
    "omega",
    "Omega",
    "place",
    "Lawless station in the Terminus Systems.",
    "Omega is a brutal Terminus station of mercenaries and crime, ruled in part by Aria T'Loak and visited by Shepard's crew."
);

entity(
    "thessia",
    "Thessia",
    "place",
    "Asari homeworld.",
    "Thessia is the asari homeworld, rich in culture and eezo, and a major front in the Reaper War."
);

entity(
    "eden-prime",
    "Eden Prime",
    "place",
    "Human colony where the trilogy begins.",
    "Eden Prime is the human colony attacked by geth and Saren at the opening of Mass Effect."
);

/* ---------- Organizations / species / concepts ---------- */

entity(
    "spectres",
    "Spectres",
    "organization",
    "Council special operatives above local law.",
    "Spectres are elite agents of the Citadel Council granted extraordinary authority to preserve galactic stability."
);

entity(
    "reapers",
    "Reapers",
    "organization",
    "Ancient machine race that harvests civilizations.",
    "The Reapers are enormous synthetic-organic warships that cull advanced life in cyclic harvests across galactic history."
);

entity(
    "geth",
    "Geth",
    "organization",
    "Networked AIs who rebelled against the quarians.",
    "The geth are networked synthetic intelligences created by the quarians, later split between heretic followers of the Reapers and true geth."
);

entity(
    "quarians",
    "Quarians",
    "concept",
    "Nomadic creators of the geth.",
    "Quarians are a suited, ship-bound people of the Migrant Fleet, exiled after the geth uprising."
);

entity(
    "turians",
    "Turians",
    "concept",
    "Militaristic Council species.",
    "Turians are a disciplined Council species known for military service, including Spectres like Saren and allies like Garrus."
);

entity(
    "asari",
    "Asari",
    "concept",
    "Long-lived Council species of biotics.",
    "Asari are a long-lived, biotic-strong Council species whose culture and diplomacy shape Citadel politics; Liara is among them."
);

entity(
    "krogan",
    "Krogan",
    "concept",
    "Hardy warriors constrained by the genophage.",
    "Krogan are resilient warriors whose population was limited by the salarian genophage after the Krogan Rebellions."
);

entity(
    "cerberus",
    "Cerberus",
    "organization",
    "Pro-human black-ops network.",
    "Cerberus is a covert pro-human organization led by the Illusive Man, rebuilding the Normandy and clashing with Shepard's ideals."
);

entity(
    "systems-alliance",
    "Systems Alliance",
    "organization",
    "Human military and government in space.",
    "The Systems Alliance is humanity's interstellar military and political body, fielding Shepard and the original Normandy."
);

entity(
    "citadel-council",
    "Citadel Council",
    "organization",
    "Ruling body of Citadel space.",
    "The Citadel Council is the asari-, turian-, and salarian-led government that grants Spectre status and arbitrates galactic law."
);

entity(
    "protheans",
    "Protheans",
    "concept",
    "Fallen civilization that left the relays and Citadel.",
    "The Protheans were an ancient empire wiped out by the Reapers, leaving ruins, beacons, and the mass-relay network."
);

entity(
    "sovereign",
    "Sovereign",
    "person",
    "Reaper who corrupts Saren.",
    "Sovereign is a Reaper vanguard that manipulates Saren and assaults the Citadel in the first Mass Effect game."
);

/* ---------- Relationships ---------- */

rel("bioware", "mass-effect", "created", "BioWare created Mass Effect.", 0.99, 0.99);
rel("bioware", "mass-effect-trilogy", "produced", "BioWare developed the Mass Effect trilogy.", 0.99, 0.98);
rel("electronic-arts", "mass-effect", "publishes", "EA publishes Mass Effect.", 0.97, 0.94);
rel("electronic-arts", "bioware", "contains", "BioWare is an EA studio.", 0.96, 0.93);
rel("mass-effect-trilogy", "mass-effect", "part_of", "The trilogy is the core of Mass Effect.", 0.99, 0.99);
rel("mass-effect-legendary-edition", "mass-effect", "part_of", "Legendary Edition collects the trilogy.", 0.97, 0.95);
rel("mass-effect-trilogy", "mass-effect-legendary-edition", "adapted_into", "The trilogy was remastered as Legendary Edition.", 0.95, 0.91);

rel("commander-shepard", "spectres", "member_of", "Shepard is a Citadel Spectre.", 0.99, 0.98);
rel("commander-shepard", "systems-alliance", "member_of", "Shepard serves the Systems Alliance.", 0.98, 0.96);
rel("commander-shepard", "normandy", "leads", "Shepard commands the Normandy's missions.", 0.98, 0.97);
rel("commander-shepard", "reapers", "opposed_by", "Shepard leads the fight against the Reapers.", 0.99, 0.98);
rel("saren-arterius", "spectres", "member_of", "Saren was a Spectre before going rogue.", 0.97, 0.94);
rel("saren-arterius", "sovereign", "supports", "Saren serves Sovereign's agenda.", 0.98, 0.96);
rel("sovereign", "reapers", "member_of", "Sovereign is a Reaper.", 0.99, 0.98);
rel("commander-shepard", "saren-arterius", "opposed_by", "Shepard hunts the rogue Spectre Saren.", 0.98, 0.96);

rel("garrus-vakarian", "turians", "member_of", "Garrus is turian.", 0.98, 0.95);
rel("garrus-vakarian", "commander-shepard", "supports", "Garrus fights beside Shepard.", 0.98, 0.96);
rel("liara-tsoni", "asari", "member_of", "Liara is asari.", 0.98, 0.95);
rel("liara-tsoni", "commander-shepard", "supports", "Liara aids Shepard against the Reapers.", 0.98, 0.96);
rel("tali-zorah", "quarians", "member_of", "Tali is quarian.", 0.99, 0.97);
rel("tali-zorah", "commander-shepard", "supports", "Tali joins Shepard's crew.", 0.98, 0.96);
rel("jeff-moreau", "normandy", "uses", "Joker pilots the Normandy.", 0.99, 0.97);

rel("illusive-man", "cerberus", "leads", "The Illusive Man leads Cerberus.", 0.99, 0.98);
rel("david-anderson", "systems-alliance", "member_of", "Anderson is an Alliance officer.", 0.98, 0.95);
rel("david-anderson", "commander-shepard", "supports", "Anderson mentors and backs Shepard.", 0.97, 0.94);

rel("spectres", "citadel-council", "part_of", "Spectres answer to the Citadel Council.", 0.97, 0.94);
rel("citadel-council", "citadel", "located_in", "The Council governs from the Citadel.", 0.98, 0.96);
rel("mass-relay", "protheans", "created_by", "Mass relays are Prothean (Reaper-influenced) infrastructure.", 0.96, 0.93);
rel("geth", "quarians", "opposed_by", "The geth rebelled against their quarian creators.", 0.97, 0.95);
rel("reapers", "protheans", "opposed_by", "The Reapers destroyed the Prothean empire.", 0.98, 0.96);
rel("liara-tsoni", "protheans", "seeks", "Liara studies Prothean ruins and beacons.", 0.96, 0.93);
rel("thessia", "asari", "located_in", "Thessia is the asari homeworld.", 0.98, 0.95);
rel("eden-prime", "systems-alliance", "located_in", "Eden Prime is an Alliance colony.", 0.96, 0.92);
rel("omega", "citadel", "related_to", "Omega lies outside Citadel control in the Terminus.", 0.93, 0.88);
rel("krogan", "citadel-council", "related_to", "Krogan history is bound to Council wars and the genophage.", 0.94, 0.9);

module.exports = { entities, relationships };
