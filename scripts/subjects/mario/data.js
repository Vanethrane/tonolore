/*
 * Mario subject data — Nintendo Super Mario franchise.
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
    "mario",
    "Mario",
    "topic",
    "Nintendo's Super Mario franchise of platformers, karts, and the Mushroom Kingdom.",
    "Mario is Nintendo's flagship multimedia franchise starring the plumber Mario, his brother Luigi, Princess Peach, and rivals like Bowser across platformers, Mario Kart, Mario Odyssey, and more."
);

entity(
    "nintendo",
    "Nintendo",
    "organization",
    "Japanese company that created and publishes Mario.",
    "Nintendo created Mario and continues to develop and publish Super Mario games, spin-offs, and related media."
);

entity(
    "shigeru-miyamoto",
    "Shigeru Miyamoto",
    "person",
    "Creator of Mario and many Nintendo classics.",
    "Shigeru Miyamoto created Mario, Donkey Kong, and The Legend of Zelda, shaping Nintendo's character-driven game design."
);

/* ---------- Works ---------- */

entity(
    "super-mario-bros",
    "Super Mario Bros.",
    "work",
    "1985 NES classic that defined the 2D Mario platformer.",
    "Super Mario Bros. established side-scrolling levels, power-ups, Bowser's castles, and Mario's quest to rescue Princess Peach."
);

entity(
    "mario-kart",
    "Mario Kart",
    "work",
    "Kart-racing series with items, tracks, and the Mario cast.",
    "Mario Kart is Nintendo's racing spin-off where Mario, Luigi, Peach, Bowser, and others compete with bananas, shells, and power-ups."
);

entity(
    "mario-odyssey",
    "Super Mario Odyssey",
    "work",
    "3D adventure with Cappy, kingdoms, and Power Moons.",
    "Super Mario Odyssey sends Mario across open kingdoms with Cappy, capturing foes and collecting Power Moons to stop Bowser's wedding plans."
);

entity(
    "donkey-kong-arcade",
    "Donkey Kong (arcade)",
    "work",
    "1981 arcade game that introduced Jumpman, later Mario.",
    "Donkey Kong introduced Jumpman — soon renamed Mario — climbing girders to rescue Pauline from Donkey Kong."
);

/* ---------- Places ---------- */

entity(
    "mushroom-kingdom",
    "Mushroom Kingdom",
    "place",
    "Peach's realm of Toads, pipes, and Mario adventures.",
    "The Mushroom Kingdom is Princess Peach's domain, home to Toads and the setting for many Super Mario Bros. and related games."
);

entity(
    "peachs-castle",
    "Peach's Castle",
    "place",
    "Royal castle and hub of the Mushroom Kingdom.",
    "Peach's Castle is the Mushroom Kingdom's landmark castle, often a hub world and frequent target of Bowser's kidnappings."
);

entity(
    "bowsers-castle",
    "Bowser's Castle",
    "place",
    "Fire-and-lava fortress of the Koopa King.",
    "Bowser's Castle is the Koopa King's fortress of lava, traps, and final confrontations across Mario games."
);

entity(
    "new-donk-city",
    "New Donk City",
    "place",
    "Human city kingdom featured in Mario Odyssey.",
    "New Donk City is a bustling metropolitan kingdom in Super Mario Odyssey, echoing classic Donkey Kong with Pauline as mayor."
);

/* ---------- Organizations / groups ---------- */

entity(
    "koopa-troop",
    "Koopa Troop",
    "organization",
    "Bowser's army of Koopas, Goombas, and minions.",
    "The Koopa Troop is Bowser's force of Koopa Troopas, Goombas, and other minions opposing Mario and the Mushroom Kingdom."
);

/* ---------- Concepts / objects ---------- */

entity(
    "power-stars",
    "Power Stars",
    "object",
    "Star collectibles that open paths in 3D Mario games.",
    "Power Stars are crystalline collectibles in games like Super Mario 64 that unlock new courses and progress Mario's adventure."
);

entity(
    "super-mushroom",
    "Super Mushroom",
    "object",
    "Classic power-up that makes Mario grow.",
    "The Super Mushroom enlarges Mario into Super Mario, letting him take an extra hit and smash tougher blocks."
);

entity(
    "fire-flower",
    "Fire Flower",
    "object",
    "Power-up that grants fireball attacks.",
    "The Fire Flower turns Mario into Fire Mario, allowing him to throw fireballs at enemies."
);

entity(
    "power-moons",
    "Power Moons",
    "object",
    "Moon-shaped collectibles in Mario Odyssey.",
    "Power Moons fuel the Odyssey airship and mark objectives across kingdoms in Super Mario Odyssey."
);

/* ---------- Characters ---------- */

entity(
    "mario-character",
    "Mario",
    "person",
    "Nintendo's heroic plumber and franchise mascot.",
    "Mario is an Italian plumber from the Mushroom Kingdom who leaps through levels, Kart races, and Odyssey kingdoms to stop Bowser and save Princess Peach."
);

entity(
    "luigi",
    "Luigi",
    "person",
    "Mario's taller, timid brother.",
    "Luigi is Mario's brother, often the nervous co-hero in platformers, Luigi's Mansion, and Mario Kart."
);

entity(
    "princess-peach",
    "Princess Peach",
    "person",
    "Ruler of the Mushroom Kingdom.",
    "Princess Peach rules the Mushroom Kingdom from her castle and is frequently kidnapped by Bowser, while also appearing as a playable ally."
);

entity(
    "bowser",
    "Bowser",
    "person",
    "Koopa King and Mario's arch-rival.",
    "Bowser is the King of the Koopas who schemes to conquer the Mushroom Kingdom and marry or capture Princess Peach."
);

entity(
    "yoshi",
    "Yoshi",
    "person",
    "Dinosaur companion who eats enemies and flutters.",
    "Yoshi is a friendly dinosaur who carries Mario, eats foes, and stars in Yoshi's Island and other spin-offs."
);

entity(
    "toad",
    "Toad",
    "person",
    "Mushroom retainer of Peach's court.",
    "Toad is a loyal Mushroom Kingdom attendant who aids Mario with tips, items, and occasional playable adventures."
);

entity(
    "princess-daisy",
    "Princess Daisy",
    "person",
    "Princess of Sarasaland and Peach's friend.",
    "Princess Daisy rules Sarasaland, debuted in Super Mario Land, and appears as a spirited playable character in sports and Kart games."
);

entity(
    "wario",
    "Wario",
    "person",
    "Greedy anti-hero counterpart to Mario.",
    "Wario is Mario's greedy doppelgänger who seeks treasure in Wario Land and WarioWare while rivaling Mario in Kart and sports."
);

entity(
    "waluigi",
    "Waluigi",
    "person",
    "Lanky rival counterpart to Luigi.",
    "Waluigi is Luigi's tall, scheming rival who mainly appears in Mario Kart, tennis, and party games alongside Wario."
);

entity(
    "donkey-kong",
    "Donkey Kong",
    "person",
    "Ape who debuted opposing Jumpman and later allied in spin-offs.",
    "Donkey Kong began as Mario's arcade foe and later headlines his own games while racing and adventuring with the Mario cast."
);

entity(
    "rosalina",
    "Rosalina",
    "person",
    "Guardian of the Comet Observatory and Lumas.",
    "Rosalina watches over the cosmos from the Comet Observatory with her Lumas and became a fan-favorite playable character in Mario Kart and smash titles."
);

entity(
    "princess-pauline",
    "Pauline",
    "person",
    "Mayor of New Donk City; original damsel from Donkey Kong.",
    "Pauline was the woman Jumpman rescued in Donkey Kong and returns as mayor and singer of New Donk City in Super Mario Odyssey."
);

entity(
    "bowser-jr",
    "Bowser Jr.",
    "person",
    "Bowser's mischievous son.",
    "Bowser Jr. helps his father's schemes, pilots the Junior Clown Car, and challenges Mario in games from Sunshine onward."
);

entity(
    "toadette",
    "Toadette",
    "person",
    "Pink-spotted Toad and frequent co-star.",
    "Toadette is a pink-spotted Toad who appears in spin-offs and as a playable character, sometimes partnering with Toad."
);

/* ---------- Relationships ---------- */

rel("nintendo", "mario", "produced", "Nintendo creates and publishes the Mario franchise.", 0.99, 0.99);
rel("shigeru-miyamoto", "mario", "created", "Shigeru Miyamoto created Mario.", 0.99, 0.99);
rel("shigeru-miyamoto", "donkey-kong-arcade", "created", "Miyamoto created Donkey Kong.", 0.98, 0.96);
rel("nintendo", "super-mario-bros", "produced", "Nintendo published Super Mario Bros.", 0.99, 0.97);

rel("super-mario-bros", "mario", "part_of", "Super Mario Bros. is a cornerstone Mario game.", 0.99, 0.98);
rel("mario-kart", "mario", "part_of", "Mario Kart is a major Mario spin-off series.", 0.98, 0.96);
rel("mario-odyssey", "mario", "part_of", "Mario Odyssey is a flagship 3D Mario adventure.", 0.98, 0.96);
rel("donkey-kong-arcade", "mario", "part_of", "Donkey Kong introduced the character who became Mario.", 0.97, 0.94);

rel("peachs-castle", "mushroom-kingdom", "located_in", "Peach's Castle stands in the Mushroom Kingdom.", 0.99, 0.97);
rel("bowsers-castle", "koopa-troop", "located_in", "Bowser's Castle is the Koopa Troop's stronghold.", 0.96, 0.92);
rel("new-donk-city", "mario-odyssey", "connected_to", "New Donk City is a featured kingdom in Odyssey.", 0.97, 0.94);
rel("princess-peach", "mushroom-kingdom", "leads", "Princess Peach rules the Mushroom Kingdom.", 0.99, 0.97);
rel("bowser", "koopa-troop", "leads", "Bowser leads the Koopa Troop.", 0.99, 0.98);

rel("mario-character", "princess-peach", "supports", "Mario repeatedly rescues and aids Princess Peach.", 0.98, 0.96);
rel("mario-character", "luigi", "connected_to", "Mario and Luigi are brothers and partners.", 0.99, 0.98);
rel("mario-character", "bowser", "opposed_by", "Mario and Bowser are arch-rivals.", 0.99, 0.98);
rel("bowser", "princess-peach", "opposed_by", "Bowser targets Princess Peach and her kingdom.", 0.98, 0.96);
rel("mario-character", "yoshi", "supports", "Yoshi often carries and aids Mario.", 0.96, 0.93);
rel("toad", "princess-peach", "supports", "Toad serves Princess Peach and the kingdom.", 0.96, 0.92);
rel("bowser-jr", "bowser", "connected_to", "Bowser Jr. is Bowser's son and ally.", 0.98, 0.95);
rel("wario", "mario-character", "opposed_by", "Wario rivals Mario for glory and gold.", 0.96, 0.92);
rel("waluigi", "luigi", "opposed_by", "Waluigi is Luigi's sporting rival.", 0.95, 0.9);
rel("donkey-kong", "mario-character", "connected_to", "Donkey Kong's history is tied to Mario since the arcade.", 0.97, 0.94);
rel("rosalina", "power-stars", "connected_to", "Rosalina's cosmos is linked to stars and Lumas.", 0.94, 0.88);
rel("princess-pauline", "new-donk-city", "leads", "Pauline is mayor of New Donk City.", 0.97, 0.94);
rel("princess-pauline", "donkey-kong-arcade", "connected_to", "Pauline debuted as the damsel in Donkey Kong.", 0.97, 0.93);

rel("super-mushroom", "mario-character", "uses", "Mario uses Super Mushrooms to grow stronger.", 0.97, 0.94);
rel("fire-flower", "mario-character", "uses", "Mario uses Fire Flowers to throw fireballs.", 0.97, 0.94);
rel("power-stars", "mario-character", "uses", "Mario collects Power Stars to progress.", 0.96, 0.92);
rel("power-moons", "mario-odyssey", "connected_to", "Power Moons drive progress in Odyssey.", 0.98, 0.95);

module.exports = { entities, relationships };
