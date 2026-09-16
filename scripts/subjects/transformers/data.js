/*
 * Transformers subject data — Hasbro / Takara Tomy Transformers franchise.
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
    "transformers",
    "Transformers",
    "topic",
    "Hasbro robots-in-disguise franchise of Autobots, Decepticons, and Cybertron.",
    "Transformers is a multimedia franchise of transforming robots — primarily Autobots and Decepticons from Cybertron — spanning toys, cartoons, comics, and live-action films."
);

entity(
    "hasbro",
    "Hasbro",
    "organization",
    "American toy company behind Transformers.",
    "Hasbro developed and markets Transformers toys and media in partnership with Takara Tomy and other collaborators."
);

entity(
    "takara-tomy",
    "Takara Tomy",
    "organization",
    "Japanese partner whose Diaclone and Microman lines seeded Transformers.",
    "Takara Tomy (formerly Takara) co-created Transformers from Diaclone and Microman toys and continues as a major partner on the brand."
);

/* ---------- Works ---------- */

entity(
    "transformers-g1",
    "The Transformers (G1)",
    "work",
    "1980s cartoon and toy line that launched the franchise.",
    "The Generation 1 Transformers cartoon and toys introduced Optimus Prime, Megatron, the Autobot–Decepticon war, and the AllSpark mythos for a generation of fans."
);

entity(
    "transformers-film",
    "Transformers (film series)",
    "work",
    "Live-action film saga beginning with the 2007 movie.",
    "The live-action Transformers films bring Autobots and Decepticons to Earth in blockbuster spectacles, starting with Michael Bay's 2007 film."
);

entity(
    "transformers-prime",
    "Transformers: Prime",
    "work",
    "CGI series following Optimus, Bumblebee, and Team Prime.",
    "Transformers: Prime follows Optimus Prime's Autobots protecting Earth from Megatron while mentoring human allies."
);

entity(
    "transformers-war-for-cybertron",
    "Transformers: War for Cybertron",
    "work",
    "Games and lore focused on the Cybertronian civil war.",
    "War for Cybertron depicts the Autobot–Decepticon conflict on Cybertron over Energon, leadership, and the planet's fate."
);

/* ---------- Places ---------- */

entity(
    "cybertron",
    "Cybertron",
    "place",
    "Home planet of the Transformers.",
    "Cybertron is the metallic homeworld of Autobots and Decepticons, scarred by civil war and often drained of Energon."
);

entity(
    "earth",
    "Earth",
    "place",
    "Refuge and battleground for Transformers in exile.",
    "Earth becomes a key battleground and hiding place when Transformers crash-land or pursue the AllSpark beyond Cybertron."
);

entity(
    "autobot-city",
    "Autobot City",
    "place",
    "Autobot stronghold on Earth in G1 lore.",
    "Autobot City is a major Autobot fortress on Earth, famously besieged in The Transformers: The Movie."
);

/* ---------- Factions ---------- */

entity(
    "autobots",
    "Autobots",
    "organization",
    "Heroic Transformers led by Optimus Prime.",
    "The Autobots are Transformers who fight for freedom and peace, typically led by Optimus Prime against the Decepticons."
);

entity(
    "decepticons",
    "Decepticons",
    "organization",
    "Conquering Transformers led by Megatron.",
    "The Decepticons seek domination through force, usually commanded by Megatron and opposed by the Autobots."
);

/* ---------- Concepts / objects ---------- */

entity(
    "allspark",
    "AllSpark",
    "object",
    "Life-giving cube that can create Transformers.",
    "The AllSpark is a powerful artifact capable of granting life to machines and reshaping the balance between Autobots and Decepticons."
);

entity(
    "matrix-of-leadership",
    "Matrix of Leadership",
    "object",
    "Autobot relic carried by their chosen leader.",
    "The Matrix of Leadership holds the wisdom of past Autobot leaders and is borne by Optimus Prime as a symbol of rightful command."
);

entity(
    "energon",
    "Energon",
    "concept",
    "Fuel and lifeblood of Transformer civilization.",
    "Energon powers Transformers and their technology; scarcity of Energon drives wars on Cybertron and raids on Earth."
);

entity(
    "transformation",
    "Transformation",
    "concept",
    "Ability to convert between robot and alternate modes.",
    "Transformation is the defining ability of Transformers, letting them shift between robot forms and vehicles, beasts, or other disguises."
);

entity(
    "spark",
    "Spark",
    "concept",
    "Living essence of a Transformer.",
    "A Spark is a Transformer's life force; extinguishing it means death, and the AllSpark is mythically tied to creating Sparks."
);

/* ---------- Characters ---------- */

entity(
    "optimus-prime",
    "Optimus Prime",
    "person",
    "Autobot leader and bearer of the Matrix.",
    "Optimus Prime is the noble Autobot commander who leads the fight for freedom against Megatron and carries the Matrix of Leadership."
);

entity(
    "megatron",
    "Megatron",
    "person",
    "Decepticon warlord and Optimus Prime's nemesis.",
    "Megatron founded and leads the Decepticons, waging war for Cybertron's control and clashing endlessly with Optimus Prime."
);

entity(
    "bumblebee",
    "Bumblebee",
    "person",
    "Scout Autobot often close to humans.",
    "Bumblebee is a nimble Autobot scout known for loyalty, stealth, and close bonds with human allies across cartoons and films."
);

entity(
    "starscream",
    "Starscream",
    "person",
    "Ambitious Decepticon Seekers commander.",
    "Starscream is Megatron's treacherous air commander, forever scheming to seize Decepticon leadership."
);

entity(
    "jazz",
    "Jazz",
    "person",
    "Stylish Autobot lieutenant and special-ops agent.",
    "Jazz is an Autobot officer known for cool confidence, reconnaissance, and standing close to Optimus Prime's command."
);

entity(
    "ironhide",
    "Ironhide",
    "person",
    "Tough Autobot weapons specialist.",
    "Ironhide is a veteran Autobot fighter and weapons expert, often serving as Optimus Prime's rugged enforcer."
);

entity(
    "ratchet",
    "Ratchet",
    "person",
    "Autobot medic.",
    "Ratchet is the Autobot medical officer who repairs wounded comrades and keeps the team battle-ready."
);

entity(
    "soundwave",
    "Soundwave",
    "person",
    "Loyal Decepticon communications officer.",
    "Soundwave is Megatron's steadfast communications expert, deploying cassette minions like Laserbeak and Ravage."
);

entity(
    "shockwave",
    "Shockwave",
    "person",
    "Cold Decepticon scientist and tactician.",
    "Shockwave is a logic-driven Decepticon scientist who often governs Cybertron or advances Decepticon weapons research."
);

entity(
    "optimus-primal",
    "Optimus Primal",
    "person",
    "Maximal leader from Beast Wars.",
    "Optimus Primal leads the Maximals in Beast Wars, a descendant-era conflict echoing Optimus Prime's ideals."
);

entity(
    "unicron",
    "Unicron",
    "person",
    "Planet-eating chaos god of Transformer lore.",
    "Unicron is a planet-consuming entity of chaos who threatens Cybertron and all Transformers across multiple continuities."
);

entity(
    "primus",
    "Primus",
    "person",
    "Creator-god of the Transformers, twin of Unicron.",
    "Primus is the divine creator associated with Cybertron and the origin of Transformer life, opposed to Unicron."
);

entity(
    "elita-one",
    "Elita-1",
    "person",
    "Autobot resistance leader and Optimus ally.",
    "Elita-1 is a skilled Autobot commander often tied to Optimus Prime and the fight for Cybertron's freedom."
);

entity(
    "ark",
    "The Ark",
    "object",
    "Autobot starship that crash-lands on Earth.",
    "The Ark is the Autobot spacecraft that flees Cybertron and crashes on Earth, beginning many G1 stories."
);

entity(
    "nemesis",
    "The Nemesis",
    "object",
    "Decepticon warship pursuing the Ark.",
    "The Nemesis is the Decepticon vessel that chases the Ark from Cybertron, carrying Megatron's forces to Earth."
);

/* ---------- Relationships ---------- */

rel("hasbro", "transformers", "produced", "Hasbro markets and produces Transformers.", 0.99, 0.98);
rel("takara-tomy", "transformers", "produced", "Takara Tomy co-created and partners on Transformers.", 0.98, 0.96);

rel("transformers-g1", "transformers", "part_of", "G1 launched the Transformers franchise.", 0.99, 0.98);
rel("transformers-film", "transformers", "part_of", "The films are a major Transformers continuity.", 0.98, 0.96);
rel("transformers-prime", "transformers", "part_of", "Prime is a key modern Transformers series.", 0.97, 0.94);
rel("transformers-war-for-cybertron", "transformers", "part_of", "War for Cybertron expands Cybertronian lore.", 0.96, 0.93);

rel("autobots", "transformers", "part_of", "Autobots are a core Transformers faction.", 0.99, 0.98);
rel("decepticons", "transformers", "part_of", "Decepticons are a core Transformers faction.", 0.99, 0.98);
rel("autobots", "decepticons", "opposed_by", "Autobots and Decepticons are at war.", 0.99, 0.98);

rel("cybertron", "transformers", "located_in", "Cybertron is the Transformers' homeworld.", 0.99, 0.97);
rel("earth", "transformers", "located_in", "Earth is a major Transformers setting.", 0.97, 0.94);
rel("autobot-city", "earth", "located_in", "Autobot City is established on Earth.", 0.95, 0.9);

rel("optimus-prime", "autobots", "leads", "Optimus Prime leads the Autobots.", 0.99, 0.99);
rel("megatron", "decepticons", "leads", "Megatron leads the Decepticons.", 0.99, 0.99);
rel("optimus-prime", "megatron", "opposed_by", "Optimus Prime and Megatron are arch-enemies.", 0.99, 0.98);
rel("bumblebee", "autobots", "member_of", "Bumblebee is an Autobot.", 0.98, 0.96);
rel("starscream", "decepticons", "member_of", "Starscream is a Decepticon.", 0.98, 0.96);
rel("jazz", "autobots", "member_of", "Jazz is an Autobot.", 0.97, 0.94);
rel("ironhide", "autobots", "member_of", "Ironhide is an Autobot.", 0.97, 0.94);
rel("ratchet", "autobots", "member_of", "Ratchet is an Autobot.", 0.97, 0.94);
rel("soundwave", "decepticons", "member_of", "Soundwave is a Decepticon.", 0.98, 0.95);
rel("shockwave", "decepticons", "member_of", "Shockwave is a Decepticon.", 0.97, 0.94);
rel("elita-one", "autobots", "member_of", "Elita-1 is an Autobot.", 0.96, 0.92);

rel("matrix-of-leadership", "optimus-prime", "uses", "Optimus Prime bears the Matrix of Leadership.", 0.98, 0.96);
rel("allspark", "cybertron", "connected_to", "The AllSpark is tied to Cybertronian life.", 0.96, 0.93);
rel("energon", "cybertron", "connected_to", "Energon sustains life and war on Cybertron.", 0.97, 0.94);
rel("ark", "autobots", "uses", "The Autobots travel aboard the Ark.", 0.97, 0.94);
rel("nemesis", "decepticons", "uses", "The Decepticons pursue aboard the Nemesis.", 0.97, 0.94);
rel("unicron", "primus", "opposed_by", "Unicron and Primus are cosmic opposites.", 0.97, 0.93);
rel("primus", "cybertron", "connected_to", "Primus is mythically bound to Cybertron.", 0.95, 0.9);

module.exports = { entities, relationships };
