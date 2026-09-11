/*
 * Teenage Mutant Ninja Turtles subject data — Mirage Studios' ninja turtle heroes.
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
    "teenage-mutant-ninja-turtles",
    "Teenage Mutant Ninja Turtles",
    "topic",
    "Mirage Studios' mutant ninja turtle heroes across comics and screen.",
    "Teenage Mutant Ninja Turtles (TMNT) is the franchise created by Kevin Eastman and Peter Laird about four turtle brothers trained by Splinter who battle Shredder and the Foot Clan from New York sewers — spanning Mirage comics, Nickelodeon series, and Paramount films."
);

entity(
    "kevin-eastman",
    "Kevin Eastman",
    "person",
    "Co-creator of Teenage Mutant Ninja Turtles.",
    "Kevin Eastman co-created Teenage Mutant Ninja Turtles with Peter Laird in 1984, designing the turtles, Shredder, and the gritty Mirage comic that launched a global phenomenon."
);

entity(
    "peter-laird",
    "Peter Laird",
    "person",
    "Co-creator of Teenage Mutant Ninja Turtles.",
    "Peter Laird co-created TMNT with Kevin Eastman, writing early Mirage stories of Leonardo, Raphael, Donatello, and Michelangelo against the Foot Clan."
);

entity(
    "mirage-studios",
    "Mirage Studios",
    "organization",
    "Original publisher of TMNT comics.",
    "Mirage Studios published the original black-and-white Teenage Mutant Ninja Turtles comic that defined the turtles' origins, Splinter, and Shredder."
);

entity(
    "nickelodeon",
    "Nickelodeon",
    "organization",
    "Current owner and producer of TMNT media.",
    "Nickelodeon owns Teenage Mutant Ninja Turtles and produces animated series including the 2012 and Rise of the TMNT iterations."
);

entity(
    "paramount-pictures",
    "Paramount Pictures",
    "organization",
    "Studio behind TMNT feature films.",
    "Paramount Pictures releases Teenage Mutant Ninja Turtles films, including live-action and animated features like Mutant Mayhem."
);

/* ---------- Works ---------- */

entity(
    "tmnt-mirage-comic",
    "Teenage Mutant Ninja Turtles (Mirage comic)",
    "work",
    "Original 1984 Eastman and Laird comic.",
    "The Mirage TMNT comic is the gritty origin story where four turtles mutate, train under Splinter, and face Oroku Saki the Shredder in New York."
);

entity(
    "tmnt-1987-cartoon",
    "Teenage Mutant Ninja Turtles (1987 cartoon)",
    "work",
    "Classic animated series that popularized TMNT.",
    "The 1987 TMNT cartoon introduced pizza-loving turtles, Krang, Bebop, and Rocksteady to a generation, softening the Mirage tone for mainstream audiences."
);

entity(
    "tmnt-2012-series",
    "Teenage Mutant Ninja Turtles (2012 series)",
    "work",
    "Nickelodeon CGI animated series.",
    "The 2012 TMNT series by Nickelodeon blends humor and serialized storytelling, deepening Shredder, Kraang, and the turtles' brotherhood."
);

entity(
    "tmnt-mutant-mayhem",
    "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    "work",
    "Paramount animated feature film.",
    "Teenage Mutant Ninja Turtles: Mutant Mayhem is a Paramount animated film reimagining the turtles as teenagers facing Superfly and a new mutant threat."
);

/* ---------- Organizations ---------- */

entity(
    "foot-clan",
    "Foot Clan",
    "organization",
    "Ninja clan led by Shredder.",
    "The Foot Clan is the criminal ninja organization commanded by Shredder, deploying foot soldiers, mutants, and mystic allies against the turtles."
);

entity(
    "kraang",
    "Kraang",
    "organization",
    "Alien brain-creatures from Dimension X.",
    "The Kraang are extradimensional brain-like aliens who infiltrate Earth with robot bodies, seeking mutagen and clashing with the turtles in several continuities."
);

/* ---------- Places ---------- */

entity(
    "new-york-city",
    "New York City",
    "place",
    "Urban home of the Teenage Mutant Ninja Turtles.",
    "New York City is the turtles' territory — rooftops, alleys, and streets where they battle the Foot Clan while hiding their existence from most humans."
);

entity(
    "turtle-lair",
    "Turtle Lair",
    "place",
    "Sewer home base of the ninja turtles.",
    "The Turtle Lair is the turtles' sewer headquarters beneath New York, containing their training room, living space, and access to the surface."
);

entity(
    "dimension-x",
    "Dimension X",
    "place",
    "Alien dimension home of Krang and allies.",
    "Dimension X is the bizarre extradimensional realm connected to Earth through portals, housing Krang and other TMNT cosmic threats."
);

/* ---------- Concepts / objects ---------- */

entity(
    "mutagen",
    "Mutagen",
    "object",
    "Ooze that causes mutation in TMNT lore.",
    "Mutagen is the transformative substance that created the turtles and Splinter, and fuels countless villains' schemes across TMNT continuities."
);

entity(
    "ninjutsu",
    "Ninjutsu",
    "concept",
    "Martial art taught to the turtles by Splinter.",
    "Ninjutsu is the ninja discipline Master Splinter teaches Leonardo, Raphael, Donatello, and Michelangelo for stealth, combat, and teamwork."
);

entity(
    "turtle-power",
    "Turtle Power",
    "concept",
    "Franchise ethos of brotherhood and heroism.",
    "Turtle Power is the TMNT franchise's catchphrase and spirit — four brothers combining ninja skill, humor, and loyalty to protect New York."
);

/* ---------- Characters ---------- */

entity(
    "leonardo",
    "Leonardo",
    "person",
    "Leader turtle wielding twin katanas.",
    "Leonardo is the disciplined leader of the ninja turtles, wielding twin katanas and bearing the blue mask while striving to live up to Splinter's teachings."
);

entity(
    "raphael",
    "Raphael",
    "person",
    "Hot-headed turtle with sai weapons.",
    "Raphael is the aggressive turtle in red who fights with sai, often clashing with Leonardo while fiercely protecting his brothers."
);

entity(
    "donatello",
    "Donatello",
    "person",
    "Inventor turtle with a bo staff.",
    "Donatello is the purple-masked genius who builds gadgets and fights with a bo staff, providing tech solutions for the team's missions."
);

entity(
    "michelangelo",
    "Michelangelo",
    "person",
    "Fun-loving turtle with nunchaku.",
    "Michelangelo is the orange-masked party dude who loves pizza and nunchaku, bringing humor and heart to the turtle team."
);

entity(
    "master-splinter",
    "Master Splinter",
    "person",
    "Mutated rat sensei of the turtles.",
    "Master Splinter is the mutated rat who raised the four turtles, teaching them ninjutsu and guiding their moral path against Shredder."
);

entity(
    "shredder",
    "Shredder",
    "person",
    "Armored leader of the Foot Clan.",
    "Shredder (Oroku Saki) is the turtles' archenemy, clad in bladed armor and leading the Foot Clan in a vendetta tied to Splinter's past."
);

entity(
    "april-oneil",
    "April O'Neil",
    "person",
    "Human ally and reporter of the turtles.",
    "April O'Neil is the turtles' closest human friend, often a reporter or scientist who aids their fights and keeps their secret."
);

entity(
    "casey-jones",
    "Casey Jones",
    "person",
    "Hockey-mask vigilante ally of the turtles.",
    "Casey Jones is a street vigilante in a hockey mask who fights crime alongside Raphael and the turtles with sports-themed weapons."
);

entity(
    "krang",
    "Krang",
    "person",
    "Brain-like warlord from Dimension X.",
    "Krang is the disembodied brain warlord from Dimension X who pilots a powerful android body and allies with Shredder in the 1987 continuity."
);

entity(
    "bebop",
    "Bebop",
    "person",
    "Mutant warthog enforcer of the Foot Clan.",
    "Bebop is a dim-witted mutant warthog created by the Foot Clan, often paired with Rocksteady as comic relief muscle."
);

entity(
    "rocksteady",
    "Rocksteady",
    "person",
    "Mutant rhino enforcer of the Foot Clan.",
    "Rocksteady is a brutish mutant rhinoceros serving Shredder alongside Bebop, smashing through turtle defenses with raw strength."
);

entity(
    "karai",
    "Karai",
    "person",
    "Shredder's disciple and complex turtle adversary.",
    "Karai is a skilled Foot Clan warrior, often Shredder's adopted daughter or lieutenant, whose loyalty to the turtles versus the Foot shifts by continuity."
);

entity(
    "leatherhead",
    "Leatherhead",
    "person",
    "Mutant alligator ally or foe of the turtles.",
    "Leatherhead is a mutant alligator whose role ranges from enemy to friend across TMNT stories, bringing swamp-born power to New York conflicts."
);

entity(
    "baxter-stockman",
    "Baxter Stockman",
    "person",
    "Mad scientist who serves Shredder.",
    "Baxter Stockman is a brilliant inventor who builds mouser robots and mutagen devices for Shredder, often suffering humiliating defeats."
);

/* ---------- Relationships ---------- */

rel("kevin-eastman", "teenage-mutant-ninja-turtles", "created", "Eastman co-created TMNT.", 0.99, 0.99);
rel("peter-laird", "teenage-mutant-ninja-turtles", "created", "Laird co-created TMNT.", 0.99, 0.99);
rel("kevin-eastman", "tmnt-mirage-comic", "created", "Eastman drew the Mirage comic.", 0.99, 0.98);
rel("peter-laird", "tmnt-mirage-comic", "created", "Laird wrote the Mirage comic.", 0.99, 0.98);
rel("mirage-studios", "tmnt-mirage-comic", "publishes", "Mirage published the original comic.", 0.98, 0.96);
rel("nickelodeon", "teenage-mutant-ninja-turtles", "produced", "Nickelodeon produces modern TMNT media.", 0.97, 0.94);
rel("paramount-pictures", "tmnt-mutant-mayhem", "produced", "Paramount produced Mutant Mayhem.", 0.98, 0.96);

rel("tmnt-mirage-comic", "teenage-mutant-ninja-turtles", "part_of", "The Mirage comic is TMNT's origin.", 0.99, 0.99);
rel("tmnt-1987-cartoon", "teenage-mutant-ninja-turtles", "part_of", "The 1987 cartoon is a major TMNT work.", 0.98, 0.97);
rel("tmnt-2012-series", "teenage-mutant-ninja-turtles", "part_of", "The 2012 series is Nickelodeon TMNT.", 0.98, 0.96);
rel("tmnt-mutant-mayhem", "teenage-mutant-ninja-turtles", "part_of", "Mutant Mayhem is a TMNT film.", 0.98, 0.96);
rel("tmnt-mirage-comic", "tmnt-1987-cartoon", "adapted_into", "The comic inspired the 1987 cartoon.", 0.96, 0.93);
rel("tmnt-mirage-comic", "tmnt-2012-series", "adapted_into", "Mirage origins inform Nickelodeon TMNT.", 0.94, 0.9);
rel("tmnt-mirage-comic", "tmnt-mutant-mayhem", "inspired", "Mutant Mayhem draws on turtle origins.", 0.93, 0.88);

rel("leonardo", "master-splinter", "supports", "Leonardo leads the team for Splinter.", 0.98, 0.96);
rel("raphael", "master-splinter", "supports", "Raphael fights for Splinter's honor.", 0.97, 0.95);
rel("donatello", "master-splinter", "supports", "Donatello serves Splinter with inventions.", 0.97, 0.95);
rel("michelangelo", "master-splinter", "supports", "Michelangelo trains under Splinter.", 0.97, 0.95);
rel("master-splinter", "ninjutsu", "uses", "Splinter teaches ninjutsu.", 0.99, 0.98);
rel("leonardo", "ninjutsu", "uses", "Leonardo masters ninja leadership.", 0.98, 0.96);
rel("raphael", "ninjutsu", "uses", "Raphael fights with ninja aggression.", 0.98, 0.96);
rel("donatello", "ninjutsu", "uses", "Donatello applies ninjutsu with tech.", 0.97, 0.95);
rel("michelangelo", "ninjutsu", "uses", "Michelangelo practices ninjutsu playfully.", 0.97, 0.95);

rel("leonardo", "raphael", "related_to", "Leonardo and Raphael are turtle brothers.", 0.98, 0.96);
rel("leonardo", "donatello", "related_to", "Leonardo and Donatello are brothers.", 0.98, 0.96);
rel("leonardo", "michelangelo", "related_to", "Leonardo and Michelangelo are brothers.", 0.98, 0.96);
rel("master-splinter", "leonardo", "supports", "Splinter raised and trains Leonardo.", 0.99, 0.98);
rel("master-splinter", "mutagen", "caused", "Mutagen transformed Splinter and the turtles.", 0.98, 0.96);

rel("leonardo", "turtle-lair", "located_in", "The turtles live in the sewer lair.", 0.98, 0.96);
rel("turtle-lair", "new-york-city", "located_in", "The lair is beneath New York.", 0.99, 0.98);
rel("foot-clan", "new-york-city", "located_in", "The Foot Clan operates in New York.", 0.98, 0.96);
rel("shredder", "foot-clan", "leads", "Shredder commands the Foot Clan.", 0.99, 0.99);
rel("karai", "foot-clan", "member_of", "Karai serves the Foot Clan.", 0.97, 0.95);
rel("bebop", "foot-clan", "member_of", "Bebop works for the Foot.", 0.97, 0.95);
rel("rocksteady", "foot-clan", "member_of", "Rocksteady serves Shredder.", 0.97, 0.95);
rel("baxter-stockman", "foot-clan", "supports", "Stockman builds tech for Shredder.", 0.96, 0.94);

rel("shredder", "master-splinter", "opposed_by", "Shredder wars with Splinter and the turtles.", 0.99, 0.98);
rel("leonardo", "shredder", "opposed_by", "Leonardo leads the fight against Shredder.", 0.99, 0.98);
rel("raphael", "shredder", "opposed_by", "Raphael battles Shredder fiercely.", 0.98, 0.96);
rel("april-oneil", "leonardo", "supports", "April aids the turtles.", 0.97, 0.95);
rel("casey-jones", "raphael", "supports", "Casey fights alongside Raphael.", 0.97, 0.95);

rel("krang", "dimension-x", "located_in", "Krang originates from Dimension X.", 0.98, 0.96);
rel("krang", "shredder", "supports", "Krang allies with Shredder in 1987 canon.", 0.96, 0.93);
rel("kraang", "dimension-x", "related_to", "The Kraang hail from Dimension X.", 0.97, 0.95);
rel("kraang", "leonardo", "opposed_by", "The Kraang threaten the turtles.", 0.95, 0.92);
rel("mutagen", "leonardo", "caused", "Mutagen created the ninja turtles.", 0.99, 0.98);
rel("turtle-power", "leonardo", "motivated_by", "The turtles fight with Turtle Power spirit.", 0.94, 0.9);
rel("leatherhead", "new-york-city", "located_in", "Leatherhead appears in NYC stories.", 0.93, 0.88);

module.exports = { entities, relationships };
