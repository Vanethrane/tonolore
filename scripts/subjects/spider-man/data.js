/*
 * Spider-Man subject data — Peter Parker and the Spider-Verse mythos.
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
    "spider-man",
    "Spider-Man",
    "topic",
    "Peter Parker's Marvel hero mythos and Spider-Verse.",
    "Spider-Man is the Marvel mythos of Peter Parker—web-slinging through Queens and New York City with Aunt May, Mary Jane Watson, Gwen Stacy, and foes like the Green Goblin, Doctor Octopus, and Venom."
);

entity(
    "peter-parker",
    "Peter Parker",
    "person",
    "The ordinary self behind Spider-Man.",
    "Peter Parker is the science-minded Queens teen who becomes Spider-Man after a radioactive bite, learning responsibility from Uncle Ben while balancing Aunt May, Mary Jane Watson, and the Daily Bugle."
);

entity(
    "stan-lee",
    "Stan Lee",
    "person",
    "Co-creator of Spider-Man.",
    "Stan Lee co-created Spider-Man and Peter Parker with Steve Ditko for Marvel, shaping Aunt May, Uncle Ben, and the hero's early supporting cast.",
    "documented"
);

entity(
    "steve-ditko",
    "Steve Ditko",
    "person",
    "Co-creator and first artist of Spider-Man.",
    "Steve Ditko co-created Spider-Man with Stan Lee, designing Peter Parker, the costume, and early villains like Doctor Octopus.",
    "documented"
);

entity(
    "marvel",
    "Marvel",
    "topic",
    "Publisher universe that houses Spider-Man.",
    "Marvel is the shared universe where Spider-Man crosses paths with wider heroes while remaining rooted in Queens street-level stories.",
    "documented"
);

/* ---------- Supporting cast ---------- */

entity(
    "aunt-may",
    "Aunt May",
    "person",
    "Peter Parker's guardian and moral anchor.",
    "Aunt May raises Peter Parker after Uncle Ben's death, grounding Spider-Man's double life with care and worry in Queens."
);

entity(
    "uncle-ben",
    "Uncle Ben",
    "person",
    "Peter's uncle whose death teaches responsibility.",
    "Uncle Ben's death teaches Peter Parker that with great power comes great responsibility—the heart of Spider-Man's creed."
);

entity(
    "mary-jane-watson",
    "Mary Jane Watson",
    "person",
    "Peter's closest love and confidante.",
    "Mary Jane Watson is Peter Parker's enduring partner and friend, sharing the costs of Spider-Man's secret across comics and adaptations."
);

entity(
    "gwen-stacy",
    "Gwen Stacy",
    "person",
    "Peter's tragic first great love.",
    "Gwen Stacy is Peter Parker's early love whose fate at the Green Goblin's hands defines Spider-Man's most famous tragedy."
);

entity(
    "j-jonah-jameson",
    "J. Jonah Jameson",
    "person",
    "Daily Bugle publisher who hounds Spider-Man.",
    "J. Jonah Jameson runs the Daily Bugle and crusades against Spider-Man in print while employing photographer Peter Parker."
);

entity(
    "black-cat",
    "Black Cat",
    "person",
    "Felicia Hardy; thief and occasional Spider-Man ally.",
    "Black Cat is Felicia Hardy, a cat burglar whose romance and team-ups with Spider-Man blur crime and heroism in New York City."
);

/* ---------- Villains / antiheroes ---------- */

entity(
    "green-goblin",
    "Green Goblin",
    "person",
    "Norman Osborn's glider-riding archfoe.",
    "The Green Goblin is Norman Osborn's monstrous persona, Spider-Man's archfoe tied to Oscorp, Gwen Stacy's tragedy, and Queens warfare."
);

entity(
    "norman-osborn",
    "Norman Osborn",
    "person",
    "Oscorp mogul behind the Green Goblin.",
    "Norman Osborn runs Oscorp and becomes the Green Goblin, obsessively targeting Peter Parker and Spider-Man."
);

entity(
    "doctor-octopus",
    "Doctor Octopus",
    "person",
    "Otto Octavius; tentacled scientific foe.",
    "Doctor Octopus is Otto Octavius, a brilliant scientist whose mechanical arms make him one of Spider-Man's deadliest enemies."
);

entity(
    "venom",
    "Venom",
    "person",
    "Symbiote-bonded antihero and rival.",
    "Venom is the symbiote-host identity—most famously Eddie Brock—born from Spider-Man's black-suit past and the alien Symbiote."
);

entity(
    "electro",
    "Electro",
    "person",
    "Maxwell Dillon; electricity-powered villain.",
    "Electro is a lightning-charged foe who battled Spider-Man across New York City and classic villain team-ups."
);

entity(
    "sandman",
    "Sandman",
    "person",
    "Flint Marko; sand-manipulating criminal.",
    "Sandman can reshape his body into sand, oscillating between Spider-Man enemy and reluctant ally in Marvel street stories."
);

/* ---------- Allies / variants / places ---------- */

entity(
    "miles-morales",
    "Miles Morales",
    "person",
    "Ultimate Universe Spider-Man of Brooklyn.",
    "Miles Morales is a Spider-Man of the Spider-Verse, a Brooklyn hero who shares the mantle with Peter Parker across Marvel realities."
);

entity(
    "spider-gwen",
    "Spider-Gwen",
    "person",
    "Gwen Stacy as Spider-Woman of Earth-65.",
    "Spider-Gwen is an alternate Gwen Stacy who wears the spider mantle in the Spider-Verse, distinct from Peter Parker's fallen love."
);

entity(
    "spider-verse",
    "Spider-Verse",
    "concept",
    "Multiverse of Spider-heroes across realities.",
    "The Spider-Verse links Peter Parker, Miles Morales, Spider-Gwen, and countless spider variants across Marvel's multiverse."
);

entity(
    "daily-bugle",
    "Daily Bugle",
    "organization",
    "Tabloids that smear Spider-Man.",
    "The Daily Bugle is J. Jonah Jameson's newspaper, where Peter Parker sells photos while the paper attacks Spider-Man."
);

entity(
    "oscorp",
    "Oscorp",
    "organization",
    "Norman Osborn's tech conglomerate.",
    "Oscorp is Norman Osborn's corporation, source of Green Goblin tech and endless scientific threats for Spider-Man."
);

entity(
    "queens",
    "Queens",
    "place",
    "Peter Parker's home borough.",
    "Queens is where Peter Parker, Aunt May, and Uncle Ben make Spider-Man's origin feel neighborhood-close within New York City."
);

entity(
    "new-york-city",
    "New York City",
    "place",
    "Skyline Spider-Man swings across.",
    "New York City—especially Queens and Manhattan—is Spider-Man's playground of rooftops, the Daily Bugle, and Oscorp towers."
);

entity(
    "iron-spider",
    "Iron Spider armor",
    "object",
    "High-tech suit aiding Spider-Man.",
    "The Iron Spider armor is an advanced Spider-Man suit with mechanical legs and enhanced systems, famously tied to Marvel crossovers."
);

entity(
    "symbiote",
    "Symbiote",
    "object",
    "Alien living costume that becomes Venom.",
    "The Symbiote is the alien suit that bonds with Spider-Man before rejecting him and later empowering Venom."
);

entity(
    "amazing-spider-man",
    "The Amazing Spider-Man",
    "work",
    "Flagship Spider-Man comic series.",
    "The Amazing Spider-Man is the long-running Marvel series chronicling Peter Parker, Aunt May, and foes like the Green Goblin and Doctor Octopus."
);

entity(
    "with-great-power",
    "With great power...",
    "concept",
    "Uncle Ben's lesson that defines Spider-Man.",
    "\"With great power comes great responsibility\" is the creed Peter Parker learns through Uncle Ben, defining Spider-Man's ethics."
);

entity(
    "spider-sense",
    "Spider-Sense",
    "concept",
    "Precognitive danger sense of Spider-heroes.",
    "Spider-Sense warns Peter Parker and other Spider-Verse heroes of danger moments before attacks land."
);

/* ---------- Relationships ---------- */

rel("stan-lee", "spider-man", "created", "Stan Lee co-created Spider-Man.", 0.99, 0.99);
rel("steve-ditko", "spider-man", "created", "Steve Ditko co-created Spider-Man.", 0.99, 0.99);
rel("stan-lee", "peter-parker", "created", "Stan Lee co-created Peter Parker.", 0.99, 0.97);
rel("steve-ditko", "peter-parker", "created", "Steve Ditko co-created Peter Parker.", 0.99, 0.97);
rel("spider-man", "marvel", "part_of", "Spider-Man is part of Marvel.", 0.98, 0.96);
rel("amazing-spider-man", "spider-man", "part_of", "Amazing Spider-Man is the flagship series.", 0.98, 0.95);

rel("peter-parker", "spider-man", "connected_to", "Peter Parker is Spider-Man.", 0.99, 0.99);
rel("aunt-may", "peter-parker", "supports", "Aunt May raises and supports Peter.", 0.98, 0.96);
rel("uncle-ben", "peter-parker", "connected_to", "Uncle Ben shapes Peter's sense of duty.", 0.99, 0.98);
rel("uncle-ben", "with-great-power", "connected_to", "Uncle Ben embodies the great-power lesson.", 0.99, 0.97);
rel("mary-jane-watson", "peter-parker", "connected_to", "Mary Jane is Peter's closest partner.", 0.98, 0.95);
rel("gwen-stacy", "peter-parker", "connected_to", "Gwen Stacy is Peter's tragic love.", 0.98, 0.95);
rel("j-jonah-jameson", "daily-bugle", "leads", "Jameson runs the Daily Bugle.", 0.99, 0.97);
rel("peter-parker", "daily-bugle", "member_of", "Peter works for the Daily Bugle.", 0.96, 0.92);
rel("black-cat", "spider-man", "connected_to", "Black Cat allies and romances Spider-Man.", 0.95, 0.9);

rel("green-goblin", "spider-man", "opposed_by", "The Green Goblin is Spider-Man's archfoe.", 0.99, 0.98);
rel("norman-osborn", "green-goblin", "connected_to", "Norman Osborn is the Green Goblin.", 0.99, 0.98);
rel("norman-osborn", "oscorp", "leads", "Norman Osborn runs Oscorp.", 0.98, 0.96);
rel("doctor-octopus", "spider-man", "opposed_by", "Doctor Octopus battles Spider-Man.", 0.98, 0.96);
rel("venom", "symbiote", "connected_to", "Venom is empowered by the Symbiote.", 0.99, 0.97);
rel("symbiote", "spider-man", "connected_to", "The Symbiote once bonded to Spider-Man.", 0.98, 0.95);
rel("venom", "spider-man", "opposed_by", "Venom hunts and rivals Spider-Man.", 0.97, 0.94);
rel("electro", "spider-man", "opposed_by", "Electro fights Spider-Man.", 0.95, 0.9);
rel("sandman", "spider-man", "opposed_by", "Sandman fights Spider-Man.", 0.95, 0.9);
rel("gwen-stacy", "green-goblin", "opposed_by", "The Green Goblin's actions doom Gwen Stacy.", 0.97, 0.94);

rel("miles-morales", "spider-verse", "member_of", "Miles Morales is a Spider-Verse hero.", 0.98, 0.96);
rel("spider-gwen", "spider-verse", "member_of", "Spider-Gwen is a Spider-Verse hero.", 0.97, 0.94);
rel("peter-parker", "spider-verse", "member_of", "Peter Parker anchors the Spider-Verse.", 0.96, 0.92);
rel("queens", "new-york-city", "located_in", "Queens is a borough of New York City.", 0.99, 0.97);
rel("peter-parker", "queens", "located_in", "Peter Parker is from Queens.", 0.98, 0.95);
rel("spider-man", "new-york-city", "located_in", "Spider-Man swings across New York City.", 0.98, 0.95);
rel("spider-sense", "peter-parker", "uses", "Peter Parker relies on Spider-Sense.", 0.98, 0.95);

module.exports = { entities, relationships };
