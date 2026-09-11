/*
 * Marvel subject data — Marvel Comics universe and MCU.
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
    "marvel",
    "Marvel",
    "topic",
    "Marvel Comics universe of heroes, villains, and the MCU.",
    "Marvel is the shared comic and screen universe built around Stan Lee, Jack Kirby, and Steve Ditko creations—the Avengers, X-Men, Fantastic Four, Guardians of the Galaxy, Spider-Man, and the Marvel Cinematic Universe."
);

entity(
    "stan-lee",
    "Stan Lee",
    "person",
    "Co-creator of many Marvel icons.",
    "Stan Lee co-created Spider-Man, the Fantastic Four, the X-Men, Iron Man, Thor, the Hulk, Doctor Strange, and countless other Marvel characters with artists including Jack Kirby and Steve Ditko.",
    "documented"
);

entity(
    "jack-kirby",
    "Jack Kirby",
    "person",
    "Artist-writer who co-created core Marvel mythos.",
    "Jack Kirby co-created the Fantastic Four, the X-Men, the Avengers' founding cast, Black Panther, and much of Asgard and cosmic Marvel with Stan Lee.",
    "documented"
);

entity(
    "steve-ditko",
    "Steve Ditko",
    "person",
    "Co-creator of Spider-Man and Doctor Strange.",
    "Steve Ditko co-created Spider-Man and Doctor Strange with Stan Lee, defining their early looks, supporting casts, and mystical tone.",
    "documented"
);

entity(
    "marvel-comics",
    "Marvel Comics",
    "organization",
    "Publisher of the Marvel Universe.",
    "Marvel Comics publishes the shared universe of the Avengers, X-Men, Fantastic Four, Guardians of the Galaxy, and Spider-Man that feeds the MCU.",
    "documented"
);

/* ---------- Works / teams ---------- */

entity(
    "mcu",
    "Marvel Cinematic Universe",
    "work",
    "Interconnected live-action Marvel film and TV franchise.",
    "The Marvel Cinematic Universe (MCU) adapts Iron Man, Captain America, Thor, the Hulk, Black Panther, Doctor Strange, the Guardians of the Galaxy, and the Avengers into one shared screen saga."
);

entity(
    "avengers",
    "Avengers",
    "organization",
    "Earth's mightiest heroes team.",
    "The Avengers unite Iron Man, Captain America, Thor, the Hulk, and later heroes against threats like Loki and Thanos, central to both comics and the MCU."
);

entity(
    "x-men",
    "X-Men",
    "organization",
    "Mutant team led from Xavier's school.",
    "The X-Men are mutants who fight for coexistence, including Wolverine, while facing Magneto and anti-mutant prejudice across Marvel comics and adaptations."
);

entity(
    "fantastic-four",
    "Fantastic Four",
    "organization",
    "Marvel's first family of heroes.",
    "The Fantastic Four—Reed, Sue, Johnny, and Ben—launch modern Marvel with cosmic powers and ties to New York City, the Silver Surfer, and cosmic threats."
);

entity(
    "guardians-of-the-galaxy",
    "Guardians of the Galaxy",
    "organization",
    "Cosmic misfit team of space heroes.",
    "The Guardians of the Galaxy are a ragtag cosmic crew who clash with Thanos, Infinity Stones plots, and galactic empires in comics and the MCU."
);

/* ---------- Characters ---------- */

entity(
    "spider-man",
    "Spider-Man",
    "person",
    "Peter Parker's web-slinging Marvel hero.",
    "Spider-Man is Peter Parker's alter ego, a New York City hero tied to Stan Lee and Steve Ditko's creation and often allied with the Avengers."
);

entity(
    "iron-man",
    "Iron Man",
    "person",
    "Tony Stark in powered armor.",
    "Iron Man is genius industrialist Tony Stark, a founding Avenger whose armor and MCU arc lead into Infinity Stones conflicts with Thanos."
);

entity(
    "captain-america",
    "Captain America",
    "person",
    "Steve Rogers, super-soldier and Avenger.",
    "Captain America is Steve Rogers, a World War II super-soldier who leads the Avengers and often partners with Iron Man and SHIELD."
);

entity(
    "thor",
    "Thor",
    "person",
    "Asgardian god of thunder and Avenger.",
    "Thor is the Asgardian prince who wields storm power, protects Midgard with the Avengers, and is bound to Loki and Asgard."
);

entity(
    "hulk",
    "Hulk",
    "person",
    "Bruce Banner's rage-powered alter ego.",
    "The Hulk is Bruce Banner's gamma-spawned form, a founding Avenger whose strength reshapes battles from New York City to cosmic wars."
);

entity(
    "doctor-strange",
    "Doctor Strange",
    "person",
    "Sorcerer Supreme of Marvel Earth.",
    "Doctor Strange is Stephen Strange, mystic guardian against dimensional threats, co-created by Stan Lee and Steve Ditko and key to MCU multiverse stories."
);

entity(
    "black-panther",
    "Black Panther",
    "person",
    "King and protector of Wakanda.",
    "Black Panther is the mantle of Wakanda's ruler—most famously T'Challa—who defends the nation and joins the Avengers on the world stage."
);

entity(
    "wolverine",
    "Wolverine",
    "person",
    "Adamantium-clawed X-Men mutant.",
    "Wolverine is Logan, a regenerative mutant and X-Men mainstay whose claws and past define much of Marvel's mutant mythos."
);

entity(
    "thanos",
    "Thanos",
    "person",
    "Titan obsessed with the Infinity Stones.",
    "Thanos is the cosmic warlord who seeks the Infinity Stones to remake reality, opposing the Avengers and Guardians of the Galaxy."
);

entity(
    "loki",
    "Loki",
    "person",
    "Asgardian trickster and Thor's brother.",
    "Loki is the god of mischief from Asgard, rival and occasional ally to Thor, and a major Avengers antagonist in comics and the MCU."
);

entity(
    "magneto",
    "Magneto",
    "person",
    "Master of magnetism; mutant ideologue.",
    "Magneto is Erik Lehnsherr, a magnetic mutant whose war for mutant survival repeatedly pits him against the X-Men and Wolverine."
);

entity(
    "nick-fury",
    "Nick Fury",
    "person",
    "Director of SHIELD and Avengers recruiter.",
    "Nick Fury runs SHIELD, recruits Iron Man, Captain America, and others into the Avengers Initiative, and anchors Marvel's espionage side."
);

entity(
    "deadpool",
    "Deadpool",
    "person",
    "Merc with a Mouth; regenerative antihero.",
    "Deadpool is Wade Wilson, a fourth-wall-breaking mercenary tied to Marvel's mutant and X-Men adjacent stories."
);

/* ---------- Places / objects / concepts ---------- */

entity(
    "wakanda",
    "Wakanda",
    "place",
    "Technologically advanced African nation of the Black Panther.",
    "Wakanda is the vibranium-rich kingdom protected by Black Panther, a center of Marvel geopolitics and MCU spectacle."
);

entity(
    "asgard",
    "Asgard",
    "place",
    "Realm of Thor, Loki, and the Norse-inspired gods.",
    "Asgard is the shining home of Thor and Loki, a cornerstone of Marvel's cosmic and mythic geography."
);

entity(
    "new-york-city",
    "New York City",
    "place",
    "Hub for Spider-Man, Avengers, and Fantastic Four.",
    "New York City is Marvel's primary street-level stage—home turf for Spider-Man, the Fantastic Four, and many Avengers battles."
);

entity(
    "infinity-stones",
    "Infinity Stones",
    "object",
    "Six gems of near-absolute power.",
    "The Infinity Stones are cosmic artifacts Thanos seeks; gathering them reshapes the Avengers, Guardians of the Galaxy, and MCU climax arcs."
);

entity(
    "shield",
    "S.H.I.E.L.D.",
    "organization",
    "Espionage agency behind the Avengers Initiative.",
    "S.H.I.E.L.D. is the intelligence network led by Nick Fury that monitors enhanced threats and midwifes the Avengers."
);

entity(
    "mutants",
    "Mutants",
    "concept",
    "Homo superior; the X-Men's people.",
    "Mutants are Marvel humans born with the X-gene—central to the X-Men, Wolverine, Magneto, and debates over coexistence."
);

entity(
    "multiverse",
    "Multiverse",
    "concept",
    "Branching realities across Marvel comics and MCU.",
    "The Marvel Multiverse links alternate Earths, Spider-Man variants, Doctor Strange magic, and MCU crossover storytelling."
);

/* ---------- Relationships ---------- */

rel("stan-lee", "marvel", "created", "Stan Lee helped create the Marvel Universe.", 0.99, 0.99);
rel("jack-kirby", "marvel", "created", "Jack Kirby co-created core Marvel mythos.", 0.99, 0.98);
rel("steve-ditko", "spider-man", "created", "Steve Ditko co-created Spider-Man.", 0.99, 0.98);
rel("steve-ditko", "doctor-strange", "created", "Steve Ditko co-created Doctor Strange.", 0.98, 0.96);
rel("stan-lee", "spider-man", "created", "Stan Lee co-created Spider-Man.", 0.99, 0.98);
rel("marvel-comics", "marvel", "produced", "Marvel Comics publishes the Marvel Universe.", 0.99, 0.97);

rel("mcu", "marvel", "part_of", "The MCU adapts the Marvel Universe.", 0.99, 0.98);
rel("avengers", "marvel", "part_of", "The Avengers are central to Marvel.", 0.99, 0.97);
rel("x-men", "marvel", "part_of", "The X-Men are central to Marvel.", 0.98, 0.96);
rel("fantastic-four", "marvel", "part_of", "The Fantastic Four launched modern Marvel.", 0.98, 0.96);
rel("guardians-of-the-galaxy", "marvel", "part_of", "The Guardians are Marvel's cosmic team.", 0.97, 0.94);

rel("iron-man", "avengers", "member_of", "Iron Man is a founding Avenger.", 0.99, 0.97);
rel("captain-america", "avengers", "member_of", "Captain America leads and serves the Avengers.", 0.99, 0.97);
rel("thor", "avengers", "member_of", "Thor fights with the Avengers.", 0.98, 0.96);
rel("hulk", "avengers", "member_of", "The Hulk is a founding Avenger.", 0.98, 0.96);
rel("black-panther", "avengers", "member_of", "Black Panther allies with the Avengers.", 0.96, 0.92);
rel("spider-man", "avengers", "member_of", "Spider-Man has served with the Avengers.", 0.95, 0.9);
rel("wolverine", "x-men", "member_of", "Wolverine is an X-Men mainstay.", 0.99, 0.97);
rel("magneto", "mutants", "connected_to", "Magneto champions mutant survival.", 0.98, 0.95);
rel("x-men", "mutants", "connected_to", "The X-Men defend mutantkind.", 0.99, 0.97);

rel("black-panther", "wakanda", "leads", "Black Panther rules and protects Wakanda.", 0.99, 0.97);
rel("thor", "asgard", "located_in", "Thor is prince of Asgard.", 0.98, 0.96);
rel("loki", "asgard", "located_in", "Loki is of Asgard.", 0.98, 0.95);
rel("loki", "thor", "opposed_by", "Loki and Thor are rival brothers.", 0.97, 0.94);
rel("spider-man", "new-york-city", "located_in", "Spider-Man protects New York City.", 0.98, 0.95);
rel("fantastic-four", "new-york-city", "located_in", "The Fantastic Four are based in New York City.", 0.97, 0.93);

rel("thanos", "infinity-stones", "uses", "Thanos seeks the Infinity Stones.", 0.99, 0.98);
rel("thanos", "avengers", "opposed_by", "Thanos wars against the Avengers.", 0.99, 0.97);
rel("nick-fury", "shield", "leads", "Nick Fury directs S.H.I.E.L.D.", 0.99, 0.97);
rel("shield", "avengers", "supports", "S.H.I.E.L.D. midwifes the Avengers.", 0.97, 0.94);
rel("doctor-strange", "multiverse", "connected_to", "Doctor Strange guards multiversal threats.", 0.96, 0.92);

module.exports = { entities, relationships };
