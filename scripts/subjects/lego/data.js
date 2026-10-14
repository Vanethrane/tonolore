/*
 * LEGO subject data — the brick company, System of Play, and theme worlds.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "documented", extras = {}) {
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

/* ---------- Root / company ---------- */

entity(
    "lego",
    "LEGO",
    "topic",
    "Danish brick system whose modular plastic pieces built City, Castle, Bionicle, and licensed worlds.",
    "LEGO is the toy system Ole Kirk Christiansen started in Billund and Godtfred Kirk Christiansen turned into the System of Play. Its lore runs through the stud-and-tube brick, the minifigure, theme lines from City and Castle to Star Wars and Bionicle, and films that put those bricks on screen."
);

entity(
    "the-lego-group",
    "The LEGO Group",
    "organization",
    "Family-controlled company in Billund that designs and sells LEGO sets.",
    "The LEGO Group is the Billund manufacturer that owns the brick, licenses themes, and still sits with the Kirk Kristiansen family after Ole Kirk's wooden-toy workshop became a global plastics house."
);

entity(
    "ole-kirk-christiansen",
    "Ole Kirk Christiansen",
    "person",
    "Carpenter who founded the Billund toy workshop and named it LEGO.",
    "Ole Kirk Christiansen opened a carpentry shop in Billund, moved from houses to wooden toys, and coined LEGO from the Danish 'leg godt' — play well — before the first plastic bricks."
);

entity(
    "godtfred-kirk-christiansen",
    "Godtfred Kirk Christiansen",
    "person",
    "Ole Kirk's son who invented the System of Play and the clutch-power brick.",
    "Godtfred Kirk Christiansen pushed the company from loose toys into a compatible system: stud-and-tube bricks that lock, themed sets that share parts, and the idea that every new box extends the last one."
);

entity(
    "kjeld-kirk-kristiansen",
    "Kjeld Kirk Kristiansen",
    "person",
    "Third-generation owner who scaled minifigures, Castle, Space, and licensed themes.",
    "Kjeld Kirk Kristiansen led The LEGO Group through the minifigure era, the 1980s theme explosion, and the later recovery that brought Bionicle, Star Wars, and The LEGO Movie."
);

/* ---------- Places ---------- */

entity(
    "billund",
    "Billund",
    "place",
    "Jutland town that is LEGO's hometown and factory seat.",
    "Billund, Denmark, is where Ole Kirk's workshop stood, where The LEGO Group still headquarters, and where Legoland Billund opened as a brick-built park beside the factory."
);

entity(
    "legoland-billund",
    "Legoland Billund",
    "place",
    "Original brick theme park beside the Billund factory.",
    "Legoland Billund opened in 1968 as a park of miniland cities and rides built from the same System of Play sold in boxes, turning the factory town into a destination."
);

/* ---------- Objects / concepts ---------- */

entity(
    "lego-brick",
    "LEGO brick",
    "object",
    "Stud-and-tube plastic brick whose clutch power makes the system work.",
    "The LEGO brick is the interlocking plastic unit — studs on top, tubes underneath — that Godtfred's 1958 patent turned into a compatible construction language still used in City, Castle, and Star Wars sets."
);

entity(
    "automatic-binding-bricks",
    "Automatic Binding Bricks",
    "object",
    "1949 slotted plastic bricks that preceded the modern clutch tube.",
    "Automatic Binding Bricks were The LEGO Group's first plastic building toys, copied from Kiddicraft and later redesigned with hollow tubes so bricks locked with reliable clutch power."
);

entity(
    "minifigure",
    "Minifigure",
    "object",
    "Yellow-headed posable figure that populated City, Castle, and licensed themes.",
    "The minifigure, introduced in 1978, is the standard LEGO person: C-shaped hands, peg legs, and a printed face that let Castle knights, City civilians, and Star Wars characters share the same scale."
);

entity(
    "system-of-play",
    "System of Play",
    "concept",
    "Godtfred's rule that every brick and set must connect to every other.",
    "The System of Play is the compatibility doctrine — shared stud pitch, themed boxes that interlock, and the promise that a 1960s brick still fits a Star Wars set — that turned LEGO from a toy line into a platform."
);

entity(
    "duplo",
    "DUPLO",
    "object",
    "Double-scale brick line for younger builders that still clutches onto System bricks.",
    "DUPLO is the oversized brick system whose studs are twice as wide as a standard brick, so early builders can stack big pieces that still lock onto the adult System of Play."
);

/* ---------- Works / themes ---------- */

entity(
    "lego-city",
    "LEGO City",
    "work",
    "Town-and-vehicles theme of police, fire, and harbor sets at minifigure scale.",
    "LEGO City is the evergreen town theme — police stations, fire trucks, trains, and harbor cranes — that inherited the old Town line and still teaches the System of Play through everyday vehicles."
);

entity(
    "lego-castle",
    "LEGO Castle",
    "work",
    "Knights, fortresses, and forest factions that defined 1980s fantasy bricks.",
    "LEGO Castle is the medieval theme of Lion Knights, Black Falcons, and Forestmen whose keeps, horses, and visored minifigures made fantasy a core System world beside City and Space."
);

entity(
    "lego-space",
    "LEGO Space",
    "work",
    "Classic astronauts, Classic Space logos, and later Spyrius and Ice Planet factions.",
    "LEGO Space put minifigures in trans-yellow visors and moon buggies, then splintered into Blacktron, Futuron, and Ice Planet as the System's first long-running science-fiction theme."
);

entity(
    "lego-star-wars",
    "LEGO Star Wars",
    "work",
    "Licensed theme that put minifigure Jedi and brick X-wings in official Star Wars scale.",
    "LEGO Star Wars, launched in 1999, was the first major media license on the System of Play: minifigure Luke and Vader, brick Millennium Falcons, and a line that proved licensed sets could sit beside City and Castle."
);

entity(
    "lego-technic",
    "LEGO Technic",
    "work",
    "Beam-and-pin engineering line of gears, pneumatics, and supercars.",
    "LEGO Technic uses beams, pins, and gears instead of only studs, letting builders make working steering, engines, and later motorized functions that sit beside the minifigure System."
);

entity(
    "bionicle",
    "BIONICLE",
    "work",
    "Toa, Mata Nui, and a serialized story that saved LEGO in the early 2000s.",
    "BIONICLE was a constructible-action line whose Toa, masks, and island of Mata Nui carried a monthly story — and a recovery hit — when The LEGO Group needed a new kind of set.",
    "fiction"
);

entity(
    "ninjago",
    "NINJAGO",
    "work",
    "Spinjitzu ninja theme with Lloyd, the four elemental ninja, and a long cartoon.",
    "NINJAGO is the ninja theme of Lloyd Garmadon, Kai, Cole, Jay, and Zane, backed by a television serial that made Spinjitzu and elemental powers a durable brick story world.",
    "fiction"
);

entity(
    "the-lego-movie",
    "The LEGO Movie",
    "work",
    "2014 film in which Emmet, Wyldstyle, and Vitruvius treat the brick world as a story.",
    "The LEGO Movie follows Emmet Brickowski through a Master Builder adventure opposite Lord Business, turning the System of Play, minifigures, and fan brickfilms into a feature that sent adults back to the brick.",
    "fiction"
);

entity(
    "lego-pirates",
    "LEGO Pirates",
    "work",
    "Imperial soldiers, islanders, and brick ships with cloth sails.",
    "LEGO Pirates launched in 1989 with galleons, palm-tree islands, and the first minifigure faces that were not the same simple smile, a swashbuckling sibling to Castle and Space."
);

/* ---------- Story figures (nested under themes) ---------- */

entity(
    "emmet-brickowski",
    "Emmet Brickowski",
    "person",
    "Ordinary construction minifigure who becomes the Special in The LEGO Movie.",
    "Emmet Brickowski is the everyman builder of Bricksburg whose instructions-following life breaks when he is mistaken for the Master Builder who can stop Lord Business.",
    "fiction"
);

entity(
    "wyldstyle",
    "Wyldstyle",
    "person",
    "Master Builder who pulls Emmet into the fight against Lord Business.",
    "Wyldstyle — Lucy — is the dyed-hair Master Builder who knows the hidden worlds beyond Bricksburg and teaches Emmet that the System can be rebuilt, not only followed.",
    "fiction"
);

entity(
    "lord-business",
    "Lord Business",
    "person",
    "President and villain who wants to Krazy Glue the LEGO world in place.",
    "Lord Business is the suited tyrant of The LEGO Movie who hoards the Kragle, forbids unofficial builds, and stands for the opposite of Godtfred's System: a world that can never be taken apart.",
    "fiction"
);

entity(
    "tahu",
    "Tahu",
    "person",
    "Hot-headed Toa of Fire and the first BIONICLE hero many kids built.",
    "Tahu is the Toa of Fire on Mata Nui, the red canister set whose mask, blades, and temper opened the BIONICLE story of six Toa gathering to wake the Great Spirit.",
    "fiction"
);

entity(
    "mata-nui",
    "Mata Nui",
    "place",
    "Tropical island — and sleeping Great Spirit — at the center of early BIONICLE.",
    "Mata Nui is both the island of beaches, jungle, and magma where the Toa first landed and the name of the Great Spirit whose waking is the early BIONICLE plot.",
    "fiction"
);

entity(
    "lloyd-garmadon",
    "Lloyd Garmadon",
    "person",
    "Green Ninja of NINJAGO and son of Lord Garmadon.",
    "Lloyd Garmadon is the Green Ninja whose elemental power, uneasy inheritance, and leadership of Kai, Cole, Jay, and Zane sit at the center of the NINJAGO serial.",
    "fiction"
);

entity(
    "brickfilm",
    "Brickfilm",
    "concept",
    "Stop-motion shorts built from minifigures that fed The LEGO Movie's look.",
    "Brickfilms are fan and studio stop-motion films shot with minifigures and real bricks; their homemade grammar — jerky walks, printed faces, tabletop sets — is what The LEGO Movie turned into a feature style.",
    "documented"
);

entity(
    "lego-ideas",
    "LEGO Ideas",
    "work",
    "Fan-submission line that turns community models into official boxed sets.",
    "LEGO Ideas is the crowdsourced theme in which fan models that hit a vote threshold can become official System sets, a modern extension of the idea that anyone can invent inside the brick language."
);

/* ---------- Relationships ---------- */

rel("ole-kirk-christiansen", "lego", "created", "Ole Kirk Christiansen founded the Billund workshop and named it LEGO.", 0.99, 0.99);
rel("ole-kirk-christiansen", "the-lego-group", "created", "Ole Kirk's toy shop became The LEGO Group.", 0.98, 0.97);
rel("godtfred-kirk-christiansen", "system-of-play", "created", "Godtfred Kirk Christiansen defined the System of Play.", 0.99, 0.98);
rel("godtfred-kirk-christiansen", "lego-brick", "created", "Godtfred's 1958 stud-and-tube brick is the modern LEGO brick.", 0.98, 0.97);
rel("kjeld-kirk-kristiansen", "the-lego-group", "leads", "Kjeld Kirk Kristiansen led The LEGO Group through the minifigure and license eras.", 0.95, 0.92);
rel("the-lego-group", "lego", "produced", "The LEGO Group designs and manufactures the LEGO system.", 0.99, 0.98);

rel("the-lego-group", "billund", "located_in", "The LEGO Group is headquartered in Billund.", 0.98, 0.96);
rel("ole-kirk-christiansen", "billund", "located_in", "Ole Kirk Christiansen built the first LEGO workshop in Billund.", 0.97, 0.94);
rel("legoland-billund", "billund", "located_in", "Legoland Billund stands in the same town as the factory.", 0.97, 0.94);
rel("legoland-billund", "lego", "part_of", "Legoland Billund is the original park built from the brick system.", 0.94, 0.9);

rel("automatic-binding-bricks", "lego-brick", "preceded", "Automatic Binding Bricks came before the 1958 clutch-power brick.", 0.96, 0.93);
rel("lego-brick", "system-of-play", "part_of", "The stud-and-tube brick is the hardware of the System of Play.", 0.98, 0.96);
rel("minifigure", "system-of-play", "part_of", "The minifigure is the standard character scale of the System of Play.", 0.97, 0.94);
rel("duplo", "lego-brick", "connected_to", "DUPLO studs are double-scale and still clutch onto System bricks.", 0.94, 0.9);
rel("the-lego-group", "minifigure", "created", "The LEGO Group introduced the minifigure in 1978.", 0.97, 0.94);

rel("lego-city", "lego", "part_of", "LEGO City is the evergreen town theme of the brick system.", 0.97, 0.94);
rel("lego-castle", "lego", "part_of", "LEGO Castle is the medieval fantasy theme of the brick system.", 0.96, 0.93);
rel("lego-space", "lego", "part_of", "LEGO Space is the classic science-fiction theme of the brick system.", 0.96, 0.93);
rel("lego-star-wars", "lego", "part_of", "LEGO Star Wars is the flagship licensed theme of the brick system.", 0.97, 0.94);
rel("lego-technic", "lego", "part_of", "LEGO Technic is the beam-and-pin engineering line beside the System sets.", 0.95, 0.92);
rel("bionicle", "lego", "part_of", "BIONICLE was The LEGO Group's early-2000s story-driven constructible line.", 0.96, 0.93);
rel("ninjago", "lego", "part_of", "NINJAGO is the long-running ninja theme of the brick system.", 0.96, 0.93);
rel("the-lego-movie", "lego", "part_of", "The LEGO Movie is the feature that put the brick world on screen.", 0.97, 0.94);
rel("lego-pirates", "lego", "part_of", "LEGO Pirates is the sailing-and-islands theme beside Castle and Space.", 0.94, 0.9);
rel("lego-ideas", "lego", "part_of", "LEGO Ideas is the fan-to-box theme of the official system.", 0.93, 0.89);

rel("lego-city", "minifigure", "uses", "LEGO City populates its streets and vehicles with minifigures.", 0.96, 0.93);
rel("lego-castle", "minifigure", "uses", "LEGO Castle knights and forest factions are minifigure-scale.", 0.95, 0.92);
rel("lego-star-wars", "minifigure", "uses", "LEGO Star Wars translates film characters into minifigures.", 0.96, 0.93);
rel("lego-star-wars", "system-of-play", "uses", "LEGO Star Wars sets are built on the same System of Play as City and Castle.", 0.95, 0.92);

rel("emmet-brickowski", "the-lego-movie", "involved", "Emmet Brickowski is the construction-worker hero of The LEGO Movie.", 0.98, 0.96);
rel("wyldstyle", "the-lego-movie", "involved", "Wyldstyle is the Master Builder who pulls Emmet into The LEGO Movie.", 0.97, 0.94);
rel("lord-business", "the-lego-movie", "involved", "Lord Business is the suited antagonist of The LEGO Movie.", 0.97, 0.94);
rel("lord-business", "emmet-brickowski", "opposed_by", "Emmet and the Master Builders stand against Lord Business and the Kragle.", 0.95, 0.92);
rel("wyldstyle", "emmet-brickowski", "supports", "Wyldstyle trains Emmet to build without instructions.", 0.94, 0.9);
rel("brickfilm", "the-lego-movie", "inspired", "Brickfilm grammar shaped how The LEGO Movie moves minifigures.", 0.93, 0.89);

rel("tahu", "bionicle", "involved", "Tahu is the Toa of Fire at the start of the BIONICLE story.", 0.97, 0.94);
rel("mata-nui", "bionicle", "part_of", "Mata Nui is the island and Great Spirit of early BIONICLE.", 0.97, 0.94);
rel("tahu", "mata-nui", "located_in", "Tahu first walks the island of Mata Nui as a Toa of Fire.", 0.94, 0.9);
rel("lloyd-garmadon", "ninjago", "leads", "Lloyd Garmadon leads the ninja of NINJAGO as the Green Ninja.", 0.96, 0.93);

rel("bionicle", "the-lego-group", "produced", "The LEGO Group launched BIONICLE as a recovery story line.", 0.95, 0.91);
rel("the-lego-movie", "the-lego-group", "produced", "The LEGO Group backed The LEGO Movie as a brick-world feature.", 0.94, 0.9);
rel("kjeld-kirk-kristiansen", "minifigure", "produced", "Kjeld's era is when the minifigure and classic themes scaled worldwide.", 0.92, 0.88);

module.exports = { entities, relationships };
