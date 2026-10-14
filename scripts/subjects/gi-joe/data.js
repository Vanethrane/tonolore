/*
 * G.I. Joe subject data — A Real American Hero, Cobra, and the file-card universe.
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

/* ---------- Root / company / works ---------- */

entity(
    "gi-joe",
    "G.I. Joe",
    "topic",
    "Hasbro soldiers versus Cobra — file cards, Sunbow cartoons, and A Real American Hero.",
    "G.I. Joe is Hasbro's military toy line that became a shared universe in 1982: a Joe team led by Duke and Scarlett, a terrorist army under Cobra Commander, file-card dossiers on every figure, and Marvel and Sunbow stories that made Snake Eyes silent and Destro's mask famous.",
    "documented"
);

entity(
    "hasbro",
    "Hasbro",
    "organization",
    "Rhode Island toy company that owns G.I. Joe and launched the 3¾-inch line.",
    "Hasbro created the original 12-inch G.I. Joe in 1964 and rebuilt the brand in 1982 as A Real American Hero, pairing small figures with Marvel comics, file cards, and vehicles.",
    "documented"
);

entity(
    "larry-hama",
    "Larry Hama",
    "person",
    "Marvel writer who wrote the file cards and the long G.I. Joe comic.",
    "Larry Hama wrote Marvel's G.I. Joe: A Real American Hero and the dossier text on the figure packages, giving Duke, Snake Eyes, Scarlett, and Cobra Commander the personalities the toys still carry.",
    "documented"
);

entity(
    "original-gi-joe",
    "G.I. Joe (1964)",
    "work",
    "Twelve-inch articulated soldier that coined the action figure.",
    "The 1964 G.I. Joe was Hasbro's posable 12-inch fighting man — marketed as an action figure, not a doll — the toy that the later 3¾-inch Real American Hero line inherited in name.",
    "documented"
);

entity(
    "a-real-american-hero",
    "G.I. Joe: A Real American Hero",
    "work",
    "1982 relaunch of small figures, vehicles, file cards, and a shared Cobra war.",
    "A Real American Hero is the 1982 G.I. Joe continuity: swivel-arm figures, file-card bios, the Pit, Cobra, and the Marvel comic and Sunbow cartoon that made 'Yo Joe!' the team's shout."
);

entity(
    "marvel-gi-joe",
    "G.I. Joe (Marvel comic)",
    "work",
    "Larry Hama's comic that serialized the Joe–Cobra war for more than a decade.",
    "Marvel's G.I. Joe: A Real American Hero, written largely by Larry Hama, is the long comic in which Snake Eyes's silence, Storm Shadow's Arashikage tie, and Cobra's civil wars became canon."
);

entity(
    "sunbow-gi-joe",
    "G.I. Joe (Sunbow series)",
    "work",
    "1980s cartoon that opened with 'Yo Joe!' and sold the vehicles on Saturday mornings.",
    "The Sunbow G.I. Joe cartoon adapted A Real American Hero for television, with Duke in command on screen, Cobra Commander scheming, and a laser-heavy war that still quotes the toy bios."
);

entity(
    "gi-joe-1982-launch",
    "1982 G.I. Joe relaunch",
    "event",
    "Hasbro's 3¾-inch debut of the Joe team, Cobra, and the first file cards.",
    "The 1982 relaunch put swivel-arm Joes and Cobra troopers on pegs, packed a Marvel comic, and printed a file card on every blister — the event that created A Real American Hero.",
    "documented"
);

/* ---------- Joe team ---------- */

entity(
    "gi-joe-team",
    "G.I. Joe team",
    "organization",
    "Elite counter-terror unit that answers Cobra, led in the field by Duke.",
    "The G.I. Joe team is the commando force of A Real American Hero — Duke, Scarlett, Snake Eyes, Roadblock, Flint, and the rest — operating from the Pit against Cobra."
);

entity(
    "duke",
    "Duke",
    "person",
    "First sergeant and field commander of the Joe team.",
    "Duke is Conrad S. Hauser, the blond first sergeant who leads Joes in the field, argues with Hawk on paper, and became the cartoon's on-screen captain of A Real American Hero."
);

entity(
    "snake-eyes",
    "Snake Eyes",
    "person",
    "Silent commando in black whose visor and sword define the line.",
    "Snake Eyes is the mute ninja commando of the Joe team: a visor, a long sword, an Arashikage past with Storm Shadow, and a file card that made him the face of A Real American Hero."
);

entity(
    "scarlett",
    "Scarlett",
    "person",
    "Counter-intelligence officer and crossbow specialist close to Snake Eyes.",
    "Scarlett is Shana M. O'Hara, the Joe team's intel and martial-arts specialist whose file card and comic arc tie her to Snake Eyes and to the early command staff beside Duke."
);

entity(
    "roadblock",
    "Roadblock",
    "person",
    "Heavy machine-gunner who quotes poetry between bursts.",
    "Roadblock is Marvin F. Hinton, the Joe heavy-weapons specialist whose gourmet cooking and couplets sit beside an M2 Browning in Hama's dossiers and the Sunbow show."
);

entity(
    "flint",
    "Flint",
    "person",
    "Warrant officer in a beret who later commands field missions.",
    "Flint is Dashiell R. Faireborn, the airborne warrant officer whose beret, shotgun, and romance with Lady Jaye made him a second-wave field leader of the Joe team."
);

entity(
    "lady-jaye",
    "Lady Jaye",
    "person",
    "Covert-operations specialist and Flint's partner in the field.",
    "Lady Jaye is Alison R. Hart-Burnett, the Joe impersonator and javelin fighter whose file card and cartoon pairing with Flint sit in the team's second-wave command."
);

entity(
    "shipwreck",
    "Shipwreck",
    "person",
    "Navy sailor with a parrot and a habit of ignoring the chain of command.",
    "Shipwreck is Hector X. Delgado, the Joe sailor whose parrot Polly, sea stories, and insubordinate streak made him a Sunbow regular beside Duke and Flint."
);

entity(
    "the-pit",
    "The Pit",
    "place",
    "Underground Joe headquarters hidden beneath a motor-pool cover.",
    "The Pit is the Joe team's buried base — elevators under a fake motor pool in the comics — from which Duke and Scarlett launch missions against Cobra."
);

/* ---------- Cobra ---------- */

entity(
    "cobra",
    "Cobra",
    "organization",
    "Terror army of blue troopers led by Cobra Commander, Destro, and the Baroness.",
    "Cobra is the enemy organization of A Real American Hero: a cult of personality under Cobra Commander, funded by Destro's arms, infiltrated by the Baroness, and staffed by faceless blue troopers."
);

entity(
    "cobra-commander",
    "Cobra Commander",
    "person",
    "Hooded, later chrome-masked, founder who leads Cobra.",
    "Cobra Commander is the high-voiced tyrant of Cobra, first a hood and then a silver faceplate, whose schemes Duke's team spends the file-card war trying to stop."
);

entity(
    "baroness",
    "The Baroness",
    "person",
    "Cobra intelligence officer in glasses and a red sigil.",
    "The Baroness is Anastasia DeCobray, Cobra's director of intelligence, whose glasses, riding crop, and on-and-off alliance with Destro make her the face of Cobra's officer class."
);

entity(
    "destro",
    "Destro",
    "person",
    "Silver-masked arms dealer who supplies Cobra and answers to M.A.R.S.",
    "Destro is James McCullen Destro XXIV, the Scottish weapons merchant whose chrome mask and M.A.R.S. company arm Cobra while he treats Cobra Commander as a client, not a master."
);

entity(
    "storm-shadow",
    "Storm Shadow",
    "person",
    "Arashikage ninja who fights for Cobra and later beside Snake Eyes.",
    "Storm Shadow is Thomas S. Arashikage, the white-suited ninja whose clan bond with Snake Eyes, Cobra service, and later defection is the longest personal feud in A Real American Hero."
);

entity(
    "serpentor",
    "Serpentor",
    "person",
    "Genetically built emperor who seizes Cobra from Cobra Commander.",
    "Serpentor is the composite emperor Dr. Mindbender grows from the DNA of conquerors, a sun-disk tyrant who splits Cobra in a civil war against Cobra Commander."
);

entity(
    "zartan",
    "Zartan",
    "person",
    "Master of disguise who leads the Dreadnoks for Cobra.",
    "Zartan is Cobra's infiltrator and Dreadnok chief, a camouflaged biker whose face-changing and swamp base give Cobra a criminal militia beside the blue troopers."
);

entity(
    "dr-mindbender",
    "Dr. Mindbender",
    "person",
    "Cobra scientist who builds Serpentor and the Brain-wave Scanner.",
    "Dr. Mindbender is Cobra's mad dentist-turned-scientist, creator of Serpentor and of the mind-control gear that the Baroness and Cobra Commander keep turning on prisoners."
);

entity(
    "mars-armaments",
    "M.A.R.S.",
    "organization",
    "Destro's Military Armaments Research System, Cobra's favorite supplier.",
    "M.A.R.S. is Destro's family arms firm, the factory behind Cobra's tanks and lasers, and the reason the silver mask can walk into Cobra without swearing loyalty."
);

entity(
    "cobra-island",
    "Cobra Island",
    "place",
    "Sovereign island Cobra raises and rules as its capital.",
    "Cobra Island is the nation-state Cobra claims after a man-made (or accident-made) landmass appears, a capital from which Cobra Commander and later Serpentor run the organization."
);

entity(
    "springfield",
    "Springfield",
    "place",
    "Generic American town that hides a Cobra cell in the comics.",
    "Springfield is the anytown whose schools, factories, and quiet streets conceal a Cobra recruitment town — a Hama setting that makes the terror army a neighbor, not only an island fortress."
);

/* ---------- Objects / concepts ---------- */

entity(
    "file-cards",
    "File cards",
    "object",
    "Dossier on the back of every blister: code name, birthplace, and a Hama paragraph.",
    "File cards are the printed bios Hasbro packed with A Real American Hero figures — MOS, birthplace, and a short character essay, many written by Larry Hama — that turned toys into a readable roster."
);

entity(
    "yo-joe",
    "Yo Joe!",
    "concept",
    "Battle cry of the Joe team in the Sunbow cartoon and toy ads.",
    "Yo Joe! is the shout the team uses as they deploy, the audio trademark of A Real American Hero and the Sunbow open that still means G.I. Joe more than any single rank."
);

/* ---------- Relationships ---------- */

rel("hasbro", "gi-joe", "created", "Hasbro created G.I. Joe and still owns the line.", 0.99, 0.99);
rel("hasbro", "original-gi-joe", "created", "Hasbro launched the 12-inch G.I. Joe in 1964.", 0.98, 0.96);
rel("hasbro", "a-real-american-hero", "created", "Hasbro relaunched G.I. Joe as A Real American Hero in 1982.", 0.98, 0.97);
rel("original-gi-joe", "a-real-american-hero", "preceded", "The 12-inch soldier came before the 3¾-inch Real American Hero line.", 0.96, 0.93);
rel("gi-joe-1982-launch", "a-real-american-hero", "caused", "The 1982 relaunch created the A Real American Hero continuity.", 0.97, 0.95);
rel("a-real-american-hero", "gi-joe", "part_of", "A Real American Hero is the core modern continuity of G.I. Joe.", 0.98, 0.96);

rel("larry-hama", "marvel-gi-joe", "created", "Larry Hama wrote Marvel's long G.I. Joe comic.", 0.98, 0.96);
rel("larry-hama", "file-cards", "created", "Larry Hama wrote many of the file-card dossiers on the figure packages.", 0.97, 0.95);
rel("marvel-gi-joe", "a-real-american-hero", "adapted_from", "The Marvel comic adapts and extends A Real American Hero.", 0.96, 0.93);
rel("sunbow-gi-joe", "a-real-american-hero", "adapted_from", "The Sunbow series adapts A Real American Hero for television.", 0.96, 0.93);
rel("file-cards", "a-real-american-hero", "part_of", "File cards are the printed dossiers of the Real American Hero line.", 0.97, 0.94);

rel("gi-joe-team", "a-real-american-hero", "part_of", "The G.I. Joe team is the hero roster of A Real American Hero.", 0.98, 0.96);
rel("cobra", "a-real-american-hero", "part_of", "Cobra is the enemy organization of A Real American Hero.", 0.98, 0.96);
rel("gi-joe-team", "cobra", "opposed_by", "The Joe team exists to stop Cobra.", 0.97, 0.95);

rel("duke", "gi-joe-team", "leads", "Duke is the field commander of the G.I. Joe team.", 0.97, 0.95);
rel("snake-eyes", "gi-joe-team", "member_of", "Snake Eyes is the silent commando of the G.I. Joe team.", 0.98, 0.96);
rel("scarlett", "gi-joe-team", "member_of", "Scarlett is the counter-intelligence specialist of the G.I. Joe team.", 0.97, 0.94);
rel("roadblock", "gi-joe-team", "member_of", "Roadblock is the heavy machine-gunner of the G.I. Joe team.", 0.95, 0.92);
rel("flint", "gi-joe-team", "member_of", "Flint is a warrant officer and field leader of the G.I. Joe team.", 0.95, 0.92);
rel("lady-jaye", "gi-joe-team", "member_of", "Lady Jaye is a covert-operations specialist of the G.I. Joe team.", 0.94, 0.91);
rel("shipwreck", "gi-joe-team", "member_of", "Shipwreck is the Navy sailor of the G.I. Joe team.", 0.93, 0.9);

rel("cobra-commander", "cobra", "leads", "Cobra Commander founded and leads Cobra.", 0.99, 0.97);
rel("baroness", "cobra", "member_of", "The Baroness is Cobra's intelligence officer.", 0.97, 0.95);
rel("destro", "cobra", "supports", "Destro arms Cobra through M.A.R.S. while remaining a client, not a trooper.", 0.95, 0.92);
rel("storm-shadow", "cobra", "member_of", "Storm Shadow serves Cobra as an Arashikage ninja before later breaking away.", 0.95, 0.92);
rel("serpentor", "cobra", "leads", "Serpentor seizes Cobra from Cobra Commander as a genetically built emperor.", 0.94, 0.91);
rel("zartan", "cobra", "member_of", "Zartan leads the Dreadnoks in Cobra's service.", 0.94, 0.9);
rel("dr-mindbender", "cobra", "member_of", "Dr. Mindbender is Cobra's chief scientist.", 0.95, 0.92);
rel("dr-mindbender", "serpentor", "created", "Dr. Mindbender genetically builds Serpentor from the DNA of conquerors.", 0.96, 0.93);
rel("serpentor", "cobra-commander", "opposed_by", "Serpentor's coup splits Cobra against Cobra Commander.", 0.95, 0.92);
rel("destro", "mars-armaments", "leads", "Destro heads the M.A.R.S. arms company.", 0.97, 0.94);
rel("mars-armaments", "cobra", "supports", "M.A.R.S. supplies Cobra with vehicles and weapons.", 0.94, 0.9);

rel("snake-eyes", "storm-shadow", "opposed_by", "Snake Eyes and Storm Shadow are Arashikage brothers turned rivals.", 0.97, 0.95);
rel("scarlett", "snake-eyes", "supports", "Scarlett is Snake Eyes's closest partner on the Joe team.", 0.95, 0.92);
rel("duke", "cobra-commander", "opposed_by", "Duke's field command is aimed at Cobra Commander.", 0.95, 0.92);
rel("baroness", "destro", "connected_to", "The Baroness and Destro are Cobra's most durable officer pairing.", 0.94, 0.9);
rel("lady-jaye", "flint", "connected_to", "Lady Jaye and Flint are paired in the field and on the Sunbow show.", 0.93, 0.89);

rel("the-pit", "gi-joe-team", "located_in", "The Pit is the underground headquarters of the G.I. Joe team.", 0.96, 0.93);
rel("cobra-island", "cobra", "located_in", "Cobra Island is the sovereign capital Cobra claims.", 0.95, 0.92);
rel("springfield", "cobra", "located_in", "Springfield hides a Cobra recruitment town in the comics.", 0.93, 0.89);
rel("sunbow-gi-joe", "yo-joe", "uses", "The Sunbow series made Yo Joe! the team's on-screen battle cry.", 0.95, 0.91);
rel("gi-joe-team", "yo-joe", "uses", "The Joe team deploys under the shout Yo Joe!", 0.94, 0.9);
rel("duke", "sunbow-gi-joe", "involved", "Duke is the on-screen field leader of the Sunbow G.I. Joe series.", 0.94, 0.9);
rel("snake-eyes", "marvel-gi-joe", "involved", "Snake Eyes's silence and origin are central to the Marvel comic.", 0.95, 0.92);

module.exports = { entities, relationships };
