/*
 * Welcome to Night Vale subject data — the town, the radio show, and StrexCorp.
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

/* ---------- Root / creators / show ---------- */

entity(
    "welcome-to-night-vale",
    "Welcome to Night Vale",
    "topic",
    "Fink and Cranor's desert radio town of Cecil, Carlos, angels, and the Glow Cloud.",
    "Welcome to Night Vale is the twice-monthly podcast Joseph Fink and Jeffrey Cranor write: Cecil Palmer's community-radio voice from a desert town of forbidden dog parks, StrexCorp takeovers, angels in Old Woman Josie's yard, and a Glow Cloud the City Council asks you to hail.",
    "documented"
);

entity(
    "joseph-fink",
    "Joseph Fink",
    "person",
    "Co-creator who built Night Vale as a desert community-radio fiction.",
    "Joseph Fink co-created Welcome to Night Vale with Jeffrey Cranor, produces Night Vale Presents, and co-wrote the novels that take Cecil's town off the microphone.",
    "documented"
);

entity(
    "jeffrey-cranor",
    "Jeffrey Cranor",
    "person",
    "Co-creator and head writer of the Night Vale episodes.",
    "Jeffrey Cranor co-created Welcome to Night Vale, writes the bulk of the episode scripts with Fink, and helps run Night Vale Presents beside the mothership show.",
    "documented"
);

entity(
    "cecil-baldwin",
    "Cecil Baldwin",
    "person",
    "Actor who voices Cecil Palmer on the podcast.",
    "Cecil Baldwin is the performer whose measured baritone is Cecil Palmer, the Night Vale Community Radio host listeners have followed since the first weather.",
    "documented"
);

entity(
    "night-vale-presents",
    "Night Vale Presents",
    "organization",
    "Network Fink and Cranor built around the mothership show.",
    "Night Vale Presents is the podcast network and touring company Joseph Fink and Jeffrey Cranor run, with Welcome to Night Vale as the flagship beside later scripted shows.",
    "documented"
);

entity(
    "welcome-to-night-vale-show",
    "Welcome to Night Vale (show)",
    "work",
    "Community-radio podcast that reports Night Vale as if it were ordinary.",
    "Welcome to Night Vale the show is the episode feed: Cecil at the microphone, a weather slot that is a song, a proverb, and a town that treats hooded figures and StrexCorp as local news.",
    "documented"
);

entity(
    "welcome-to-night-vale-novel",
    "Welcome to Night Vale (novel)",
    "work",
    "2015 Fink and Cranor novel that follows Jackie and Diane through the town.",
    "The Welcome to Night Vale novel is the 2015 book in which Fink and Cranor leave Cecil's booth for Jackie Fierro and Diane Crayton, still inside the same desert town.",
    "documented"
);

entity(
    "a-story-about-you",
    "A Story About You",
    "work",
    "Second-person episode that makes the listener a Night Vale citizen for a night.",
    "A Story About You is the early episode told entirely in second person, a formal experiment that treats the listener as someone walking Night Vale after dark."
);

/* ---------- The town (durable container) ---------- */

entity(
    "night-vale",
    "Night Vale",
    "place",
    "Desert town of radio, angels, a forbidden dog park, and a glowing cloud.",
    "Night Vale is the American-southwest desert community Cecil reports on: a City Council that may be lizards, a Sheriff's Secret Police, a dog park no one may discuss, and weather that is not weather."
);

entity(
    "desert-bluffs",
    "Desert Bluffs",
    "place",
    "Smiling sister city across the sand, later a StrexCorp company town.",
    "Desert Bluffs is Night Vale's neighbor and rival, a brighter, bloodier town whose radio host Kevin and whose StrexCorp ownership make it the smiling double of Cecil's home."
);

entity(
    "night-vale-community-radio",
    "Night Vale Community Radio",
    "organization",
    "Station Cecil hosts, under Station Management, from a studio in town.",
    "Night Vale Community Radio is the station that employs Cecil Palmer, fears Station Management, and keeps broadcasting through Strex takeovers, intern disappearances, and the Glow Cloud."
);

entity(
    "cecil-palmer",
    "Cecil Palmer",
    "person",
    "Voice of Night Vale Community Radio and the town's unofficial narrator.",
    "Cecil Palmer is the radio host who loves Carlos, fears the dog park, reports the City Council's edicts, and treats angels and intern deaths as the evening's public-service announcements."
);

entity(
    "carlos-the-scientist",
    "Carlos the Scientist",
    "person",
    "Perfect-haired scientist who comes to study Night Vale and stays for Cecil.",
    "Carlos is the scientist whose hair Cecil cannot stop mentioning, who arrives with a team to measure the town and becomes Cecil's husband and the show's long-running love story."
);

entity(
    "old-woman-josie",
    "Old Woman Josie",
    "person",
    "Ranchette owner whose angels are legally not angels.",
    "Old Woman Josie lives outside town with beings the City Council insists are not angels, a quiet neighbor who keeps Night Vale's most official miracle in a yard."
);

entity(
    "intern-dana",
    "Intern Dana",
    "person",
    "Intern who survives the dog park and later becomes an ambassador.",
    "Dana Cardinal begins as a Night Vale Community Radio intern, is lost in the dog park, and returns as a diplomat the town has to take seriously — a rare intern who is not only a memorial."
);

entity(
    "tamika-flynn",
    "Tamika Flynn",
    "person",
    "Library-survivor and teen militia leader against StrexCorp.",
    "Tamika Flynn is the child who beats the library, founds a summer-reading militia, and later helps Night Vale fight the StrexCorp occupation."
);

entity(
    "steve-carlsberg",
    "Steve Carlsberg",
    "person",
    "Brother-in-law Cecil cannot stand and then, slowly, can.",
    "Steve Carlsberg is Cecil's brother-in-law, first a running gag of contempt and later a man who knows more about the town's secret sky than Cecil wanted to hear."
);

entity(
    "kevin",
    "Kevin",
    "person",
    "Desert Bluffs radio host with a permanent smile and a bloody studio.",
    "Kevin is Cecil's Desert Bluffs counterpart, a cheerful host in a red studio who speaks StrexCorp's language and treats Night Vale as a market to be opened."
);

entity(
    "station-management",
    "Station Management",
    "organization",
    "Unseen, possibly nonhuman bosses of Night Vale Community Radio.",
    "Station Management is the thing in the back office Cecil does not describe twice: the employer that hires interns, issues edicts, and is best not looked at directly."
);

entity(
    "city-council",
    "Night Vale City Council",
    "organization",
    "Municipal body that may be five, or one, or lizards in robes.",
    "The Night Vale City Council issues the day's bans — the dog park, the angels, the talking about the Glow Cloud — from a dais that is not always the same number of people."
);

entity(
    "sheriffs-secret-police",
    "Sheriff's Secret Police",
    "organization",
    "Hooded force that watches the town and reminds you they are secret.",
    "The Sheriff's Secret Police are Night Vale's hooded enforcers, a department that is both openly everywhere and officially a secret, always listening to the broadcast."
);

entity(
    "strexcorp",
    "StrexCorp Synernists Inc.",
    "organization",
    "Smiling desert conglomerate that buys Desert Bluffs and tries to buy Night Vale.",
    "StrexCorp is the yellow-logo company that owns Desert Bluffs, speaks in productivity parables, and occupies Night Vale Community Radio until Tamika Flynn and the town push it back."
);

entity(
    "angels-of-night-vale",
    "angels",
    "organization",
    "Winged beings at Josie's who are legally not to be called angels.",
    "The angels of Night Vale live with Old Woman Josie, glow, have names like Erikas, and exist in a town whose City Council has forbidden both their presence and the word for them."
);

entity(
    "glow-cloud",
    "the Glow Cloud",
    "concept",
    "All-powerful cloud that drops animals and holds a City Council seat.",
    "The Glow Cloud is the fluorescent, animal-dropping, civic entity Night Vale is instructed to hail; it later sits on the City Council and remains a weather report that is also a god."
);

entity(
    "the-dog-park",
    "the dog park",
    "place",
    "Fenced park no citizen may enter, see, or discuss, full of hooded figures.",
    "The dog park is the forbidden enclosure at the edge of Night Vale: no dogs, no citizens, hooded figures, and a hole Intern Dana falls through into another version of the town."
);

entity(
    "wheat-and-wheat-by-products",
    "wheat and wheat by-products",
    "concept",
    "Sponsor category and running joke of Night Vale's desert diet.",
    "Wheat and wheat by-products are the show's stand-in for every sponsor and every pantry: the desert town's staple, a blessing, and a warning in the same breath."
);

entity(
    "night-vale-interns",
    "Night Vale interns",
    "concept",
    "Radio-station job whose holders rarely survive the month.",
    "Night Vale interns are the expendable staff Cecil memorializes on air — Maureen, Rob, a long roll — the show's darkest running joke about who gets to keep talking."
);

/* ---------- Relationships ---------- */

rel("joseph-fink", "welcome-to-night-vale", "created", "Joseph Fink co-created Welcome to Night Vale.", 0.99, 0.98);
rel("jeffrey-cranor", "welcome-to-night-vale", "created", "Jeffrey Cranor co-created Welcome to Night Vale.", 0.99, 0.98);
rel("joseph-fink", "welcome-to-night-vale-show", "created", "Fink co-writes and produces the Welcome to Night Vale show.", 0.97, 0.95);
rel("jeffrey-cranor", "welcome-to-night-vale-show", "created", "Cranor co-writes the Welcome to Night Vale episodes.", 0.97, 0.95);
rel("joseph-fink", "night-vale-presents", "created", "Fink co-founded Night Vale Presents around the mothership show.", 0.96, 0.93);
rel("jeffrey-cranor", "night-vale-presents", "created", "Cranor co-founded Night Vale Presents around the mothership show.", 0.96, 0.93);
rel("night-vale-presents", "welcome-to-night-vale-show", "produced", "Night Vale Presents produces the Welcome to Night Vale feed.", 0.96, 0.93);
rel("welcome-to-night-vale-show", "welcome-to-night-vale", "part_of", "The show is the flagship work of Welcome to Night Vale.", 0.98, 0.97);
rel("welcome-to-night-vale-novel", "welcome-to-night-vale", "part_of", "The 2015 novel extends Welcome to Night Vale into prose.", 0.94, 0.9);
rel("welcome-to-night-vale-novel", "night-vale", "located_in", "The novel is still set in the town of Night Vale.", 0.93, 0.89);
rel("cecil-baldwin", "cecil-palmer", "involved", "Cecil Baldwin voices Cecil Palmer.", 0.98, 0.96);
rel("a-story-about-you", "welcome-to-night-vale-show", "part_of", "A Story About You is an early formal experiment inside the show.", 0.94, 0.9);

rel("welcome-to-night-vale-show", "night-vale", "occurred_at", "The show reports from, and is about, the town of Night Vale.", 0.98, 0.96);
rel("desert-bluffs", "night-vale", "connected_to", "Desert Bluffs is Night Vale's smiling sister city across the sand.", 0.95, 0.92);
rel("night-vale-community-radio", "night-vale", "located_in", "Night Vale Community Radio broadcasts from the town of Night Vale.", 0.97, 0.95);
rel("the-dog-park", "night-vale", "located_in", "The forbidden dog park sits inside Night Vale.", 0.96, 0.93);

rel("cecil-palmer", "night-vale-community-radio", "leads", "Cecil Palmer hosts Night Vale Community Radio.", 0.99, 0.97);
rel("cecil-palmer", "night-vale", "located_in", "Cecil Palmer lives in and narrates Night Vale.", 0.97, 0.95);
rel("carlos-the-scientist", "night-vale", "located_in", "Carlos comes to Night Vale to study the town and stays.", 0.96, 0.93);
rel("cecil-palmer", "carlos-the-scientist", "connected_to", "Cecil loves Carlos; they later marry.", 0.97, 0.95);
rel("station-management", "night-vale-community-radio", "leads", "Station Management is the unseen boss of Night Vale Community Radio.", 0.95, 0.92);
rel("cecil-palmer", "station-management", "opposed_by", "Cecil works under Station Management and tries not to look at it.", 0.93, 0.89);

rel("old-woman-josie", "night-vale", "located_in", "Old Woman Josie lives on a ranch outside Night Vale.", 0.94, 0.9);
rel("old-woman-josie", "angels-of-night-vale", "connected_to", "The angels live with Old Woman Josie.", 0.96, 0.93);
rel("angels-of-night-vale", "night-vale", "located_in", "The angels occupy Josie's land in Night Vale.", 0.94, 0.9);
rel("city-council", "night-vale", "leads", "The City Council issues the edicts that govern Night Vale.", 0.96, 0.93);
rel("city-council", "angels-of-night-vale", "opposed_by", "The City Council forbids both the angels and the word angel.", 0.94, 0.9);
rel("sheriffs-secret-police", "night-vale", "located_in", "The Sheriff's Secret Police watch Night Vale.", 0.95, 0.91);
rel("glow-cloud", "night-vale", "located_in", "The Glow Cloud hangs over Night Vale and later sits on its council.", 0.96, 0.93);
rel("glow-cloud", "city-council", "member_of", "The Glow Cloud holds a seat on the Night Vale City Council.", 0.94, 0.9);
rel("welcome-to-night-vale-show", "glow-cloud", "involved", "The show's community calendar includes hailing the Glow Cloud.", 0.95, 0.91);

rel("intern-dana", "night-vale-community-radio", "member_of", "Dana begins as an intern at Night Vale Community Radio.", 0.95, 0.92);
rel("intern-dana", "the-dog-park", "involved", "Dana is lost in the dog park and comes back changed.", 0.95, 0.91);
rel("night-vale-interns", "night-vale-community-radio", "part_of", "Interns are the expendable staff of Night Vale Community Radio.", 0.94, 0.9);
rel("tamika-flynn", "night-vale", "located_in", "Tamika Flynn is a Night Vale child who grows into a militia leader.", 0.94, 0.9);
rel("tamika-flynn", "strexcorp", "opposed_by", "Tamika Flynn leads the resistance to StrexCorp's occupation.", 0.95, 0.92);
rel("steve-carlsberg", "cecil-palmer", "connected_to", "Steve Carlsberg is Cecil's despised, then tolerated, brother-in-law.", 0.93, 0.89);

rel("strexcorp", "desert-bluffs", "leads", "StrexCorp owns Desert Bluffs as a company town.", 0.96, 0.93);
rel("strexcorp", "night-vale", "opposed_by", "Night Vale resists StrexCorp's attempt to buy the town and the station.", 0.95, 0.92);
rel("kevin", "desert-bluffs", "located_in", "Kevin hosts radio from Desert Bluffs.", 0.96, 0.93);
rel("kevin", "strexcorp", "supports", "Kevin speaks StrexCorp's smiling language on Desert Bluffs radio.", 0.95, 0.91);
rel("kevin", "cecil-palmer", "opposed_by", "Kevin is Cecil's Desert Bluffs double and rival host.", 0.94, 0.9);
rel("wheat-and-wheat-by-products", "night-vale", "part_of", "Wheat and wheat by-products are Night Vale's staple and running sponsor.", 0.9, 0.86);

module.exports = { entities, relationships };
