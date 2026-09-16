/*
 * Final Fantasy subject data — Square Enix's long-running RPG franchise.
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
    "final-fantasy",
    "Final Fantasy",
    "topic",
    "Square Enix's landmark Japanese RPG franchise.",
    "Final Fantasy is Square Enix's long-running RPG series spanning standalone and connected worlds, crystals, chocobos, and iconic heroes from the first Warrior of Light to Cloud, Terra, Tidus, and Eorzea."
);

entity(
    "square-enix",
    "Square Enix",
    "organization",
    "Publisher of Final Fantasy.",
    "Square Enix publishes Final Fantasy, succeeding Square Soft after the Square–Enix merger and stewarding remakes, MMOs, and spin-offs."
);

entity(
    "hironobu-sakaguchi",
    "Hironobu Sakaguchi",
    "person",
    "Creator of Final Fantasy.",
    "Hironobu Sakaguchi created Final Fantasy at Square, directing early entries and shaping the series' identity before later founding Mistwalker."
);

entity(
    "nobuo-uematsu",
    "Nobuo Uematsu",
    "person",
    "Composer of classic Final Fantasy scores.",
    "Nobuo Uematsu composed many defining Final Fantasy soundtracks, from the original theme to Final Fantasy VII, X, and beyond."
);

/* ---------- Series motifs ---------- */

entity(
    "crystal-ff",
    "Crystals",
    "concept",
    "Elemental crystals recurring across the series.",
    "Crystals—often of earth, fire, water, and wind—anchor many Final Fantasy worlds as sources of balance, power, and prophecy."
);

entity(
    "chaos-ff",
    "Chaos",
    "concept",
    "Recurring force of disorder opposed to harmony.",
    "Chaos appears across Final Fantasy as an elemental antagonist or cosmic opposite to order, most famously as the final foe of the first game."
);

entity(
    "chocobo",
    "Chocobo",
    "concept",
    "Iconic riding bird of Final Fantasy.",
    "Chocobos are yellow riding birds used for travel, racing, and breeding minigames across nearly every Final Fantasy title."
);

entity(
    "moogle",
    "Moogle",
    "concept",
    "Cute companion creatures saying 'kupo'.",
    "Moogles are small winged creatures who serve as merchants, messengers, and mascots throughout the Final Fantasy series."
);

entity(
    "summons-ff",
    "Summons",
    "concept",
    "Eidolons, Espers, and Aeons called in battle.",
    "Summons—Espers, Eidolons, Aeons, Primals—are powerful beings called into battle, from Ifrit and Shiva to Knights of the Round."
);

entity(
    "airship-ff",
    "Airship",
    "object",
    "Flying ships that define late-game travel.",
    "Airships are signature vehicles of Final Fantasy, unlocking exploration and often tied to engineers named Cid."
);

entity(
    "cid-ff",
    "Cid",
    "person",
    "Recurring engineer and airship pioneer.",
    "Cid is a recurring Final Fantasy name for inventors and airship captains who enable the party's flight across each world."
);

entity(
    "warrior-of-light",
    "Warrior of Light",
    "person",
    "Archetypal heroes of early Final Fantasy.",
    "Warriors of Light are crystal-chosen heroes of early Final Fantasy tales, later echoed by nameless protagonists in Final Fantasy XIV."
);

/* ---------- Final Fantasy VII ---------- */

entity(
    "final-fantasy-vii",
    "Final Fantasy VII",
    "work",
    "1997 RPG of Avalanche, Shinra, and Sephiroth.",
    "Final Fantasy VII follows Cloud Strife and Avalanche against the Shinra Electric Power Company and Sephiroth in a world of mako, materia, and the Lifestream."
);

entity(
    "cloud-strife",
    "Cloud Strife",
    "person",
    "Protagonist of Final Fantasy VII.",
    "Cloud Strife is a mercenary ex-SOLDIER who joins Avalanche, wields the Buster Sword, and confronts Sephiroth over identity and Jenova."
);

entity(
    "sephiroth",
    "Sephiroth",
    "person",
    "Fallen SOLDIER and chief antagonist of VII.",
    "Sephiroth is Shinra's legendary SOLDIER who, after learning of Jenova, seeks to wound the planet and become a god via the Lifestream."
);

entity(
    "aerith-gainsborough",
    "Aerith Gainsborough",
    "person",
    "Last Cetra; flower girl of Midgar.",
    "Aerith Gainsborough is the last of the Cetra, a healer tied to the planet who allies with Cloud against Sephiroth and Shinra."
);

entity(
    "tifa-lockhart",
    "Tifa Lockhart",
    "person",
    "Avalanche fighter and Cloud's childhood friend.",
    "Tifa Lockhart runs Seventh Heaven, fights for Avalanche, and anchors Cloud's memories through the journey beyond Midgar."
);

entity(
    "midgar",
    "Midgar",
    "place",
    "Industrial mega-city of Shinra.",
    "Midgar is Shinra's plate city that drains mako from the planet, home to the slums, Avalanche's resistance, and the start of Final Fantasy VII."
);

entity(
    "shinra",
    "Shinra Electric Power Company",
    "organization",
    "Megacorporation ruling Midgar.",
    "Shinra dominates the world of Final Fantasy VII through mako reactors, SOLDIER, and political control centered on Midgar."
);

entity(
    "lifestream",
    "Lifestream",
    "concept",
    "Planet's spiritual energy and afterlife flow.",
    "The Lifestream is the planet's circulating spiritual energy in Final Fantasy VII, source of mako and the battlefield of Sephiroth's ambition."
);

entity(
    "materia",
    "Materia",
    "object",
    "Crystallized mako that grants magic and summons.",
    "Materia are crystallized condensations of the Lifestream that let characters cast magic, summon, and enhance abilities in Final Fantasy VII."
);

entity(
    "jenova",
    "Jenova",
    "person",
    "Calamity from the skies behind Sephiroth.",
    "Jenova is an extraterrestrial calamity whose cells drive Shinra experiments and Sephiroth's delusions of being the chosen one."
);

/* ---------- Final Fantasy VI ---------- */

entity(
    "final-fantasy-vi",
    "Final Fantasy VI",
    "work",
    "1994 RPG of Espers, the Empire, and Kefka.",
    "Final Fantasy VI follows Terra Branford and a large cast against the Gestahlian Empire and Kefka Palazzo in a world of magic and steampunk ruin."
);

entity(
    "terra-branford",
    "Terra Branford",
    "person",
    "Magically gifted heroine of Final Fantasy VI.",
    "Terra Branford is a half-Esper heroine who escapes Imperial control and helps decide the fate of magic in Final Fantasy VI."
);

entity(
    "kefka-palazzo",
    "Kefka Palazzo",
    "person",
    "Clownish mage who becomes the God of Magic.",
    "Kefka Palazzo rises from Imperial court mage to apocalyptic villain, draining the Warring Triad and remaking the world in Final Fantasy VI."
);

/* ---------- Final Fantasy X ---------- */

entity(
    "final-fantasy-x",
    "Final Fantasy X",
    "work",
    "2001 RPG of Spira, Yuna, and Sin.",
    "Final Fantasy X follows Tidus and summoner Yuna on a pilgrimage across Spira to defeat Sin, confronting faith, fayth, and cycles of sacrifice."
);

entity(
    "tidus",
    "Tidus",
    "person",
    "Blitzball star cast into Spira.",
    "Tidus is a Zanarkand blitzball player thrown a thousand years forward into Spira, joining Yuna's pilgrimage against Sin."
);

entity(
    "yuna",
    "Yuna",
    "person",
    "Summoner of Spira seeking to Calm Sin.",
    "Yuna is a summoner who travels Spira with her guardians to obtain the Final Aeon and bring the Calm, until she chooses another path."
);

entity(
    "sin-spira",
    "Sin",
    "person",
    "Colossal doom that cycles across Spira.",
    "Sin is the armored leviathan that endlessly destroys Spira's cities, born of Yu Yevon's spiral and confronted in Final Fantasy X."
);

entity(
    "spira",
    "Spira",
    "place",
    "World of Final Fantasy X.",
    "Spira is the ocean-ringed world of temples, aeons, and Yevon where Tidus and Yuna struggle against Sin's cycle."
);

/* ---------- Final Fantasy XIV ---------- */

entity(
    "final-fantasy-xiv",
    "Final Fantasy XIV",
    "work",
    "MMORPG of Eorzea and the Warrior of Light.",
    "Final Fantasy XIV is Square Enix's MMO set primarily in Eorzea, following Warriors of Light through primals, Ascians, and expanding realms."
);

entity(
    "eorzea",
    "Eorzea",
    "place",
    "Realm of city-states in Final Fantasy XIV.",
    "Eorzea is the realm of Gridania, Ul'dah, Limsa Lominsa, and Ishgard where Final Fantasy XIV's early sagas unfold."
);

entity(
    "primals-ffxiv",
    "Primals",
    "concept",
    "Summoned demigods of Eorzean faiths.",
    "Primals are aetherial demigods summoned by beast tribes and empires in Final Fantasy XIV, draining the land's aether when called."
);

/* ---------- Relationships ---------- */

rel("square-enix", "final-fantasy", "produced", "Square Enix publishes Final Fantasy.", 0.99, 0.99);
rel("hironobu-sakaguchi", "final-fantasy", "created", "Hironobu Sakaguchi created Final Fantasy.", 0.99, 0.98);
rel("nobuo-uematsu", "final-fantasy", "influenced", "Nobuo Uematsu scored many Final Fantasy games.", 0.97, 0.94);

rel("crystal-ff", "final-fantasy", "part_of", "Crystals are a series-wide motif.", 0.96, 0.92);
rel("chocobo", "final-fantasy", "part_of", "Chocobos appear across the franchise.", 0.97, 0.94);
rel("moogle", "final-fantasy", "part_of", "Moogles appear across the franchise.", 0.96, 0.92);
rel("summons-ff", "final-fantasy", "part_of", "Summons recur throughout Final Fantasy.", 0.96, 0.92);
rel("cid-ff", "airship-ff", "connected_to", "Characters named Cid often build airships.", 0.96, 0.92);

rel("final-fantasy-vii", "final-fantasy", "part_of", "Final Fantasy VII is a mainline entry.", 0.99, 0.97);
rel("cloud-strife", "final-fantasy-vii", "involved", "Cloud is the protagonist of Final Fantasy VII.", 0.99, 0.98);
rel("sephiroth", "final-fantasy-vii", "involved", "Sephiroth is the primary antagonist of VII.", 0.99, 0.97);
rel("aerith-gainsborough", "final-fantasy-vii", "involved", "Aerith is central to Final Fantasy VII.", 0.98, 0.95);
rel("tifa-lockhart", "final-fantasy-vii", "involved", "Tifa is a main party member in VII.", 0.97, 0.94);
rel("midgar", "final-fantasy-vii", "located_in", "Midgar is the opening setting of VII.", 0.98, 0.96);
rel("shinra", "midgar", "leads", "Shinra rules Midgar.", 0.98, 0.95);
rel("cloud-strife", "sephiroth", "opposed_by", "Cloud's journey centers on opposing Sephiroth.", 0.98, 0.96);
rel("sephiroth", "jenova", "connected_to", "Sephiroth's fate is bound to Jenova.", 0.97, 0.94);
rel("lifestream", "final-fantasy-vii", "part_of", "The Lifestream defines VII's cosmology.", 0.97, 0.94);
rel("materia", "lifestream", "part_of", "Materia crystallizes from the Lifestream.", 0.96, 0.92);

rel("final-fantasy-vi", "final-fantasy", "part_of", "Final Fantasy VI is a mainline entry.", 0.98, 0.96);
rel("terra-branford", "final-fantasy-vi", "involved", "Terra is a lead heroine of VI.", 0.98, 0.95);
rel("kefka-palazzo", "final-fantasy-vi", "involved", "Kefka is the chief villain of VI.", 0.98, 0.95);
rel("terra-branford", "kefka-palazzo", "opposed_by", "Terra and the party oppose Kefka.", 0.96, 0.92);

rel("final-fantasy-x", "final-fantasy", "part_of", "Final Fantasy X is a mainline entry.", 0.98, 0.96);
rel("tidus", "final-fantasy-x", "involved", "Tidus is the protagonist of X.", 0.98, 0.95);
rel("yuna", "final-fantasy-x", "involved", "Yuna is the summoner heroine of X.", 0.98, 0.95);
rel("sin-spira", "final-fantasy-x", "involved", "Sin is the central threat of X.", 0.97, 0.94);
rel("spira", "final-fantasy-x", "located_in", "Final Fantasy X is set in Spira.", 0.98, 0.95);
rel("tidus", "yuna", "supports", "Tidus joins Yuna's pilgrimage.", 0.97, 0.93);
rel("yuna", "sin-spira", "opposed_by", "Yuna's pilgrimage aims to defeat Sin.", 0.97, 0.94);

rel("final-fantasy-xiv", "final-fantasy", "part_of", "Final Fantasy XIV is a mainline MMO entry.", 0.98, 0.96);
rel("eorzea", "final-fantasy-xiv", "located_in", "Eorzea is the core realm of XIV.", 0.98, 0.95);
rel("warrior-of-light", "final-fantasy-xiv", "involved", "Warriors of Light are XIV's player heroes.", 0.96, 0.92);

module.exports = { entities, relationships };
