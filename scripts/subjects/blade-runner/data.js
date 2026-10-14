/*
 * Blade Runner subject data — Scott's 2019 Los Angeles and the 2049 return.
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
    "blade-runner",
    "Blade Runner",
    "topic",
    "Replicants, rain-soaked Los Angeles, and the question of who counts as human.",
    "Blade Runner is Ridley Scott's 1982 adaptation of Philip K. Dick's Do Androids Dream of Electric Sheep?: Deckard hunts Nexus-6 replicants in Los Angeles 2019, Roy Batty wants more life, and the Voight-Kampff test tries to tell people from products. Denis Villeneuve's 2049 returns to that city with K and Joi."
);

entity(
    "ridley-scott",
    "Ridley Scott",
    "person",
    "Director of Blade Runner (1982).",
    "Ridley Scott directed Blade Runner, building the neon-noir Los Angeles of 2019 and the Tyrell pyramid that later films still orbit.",
    "documented"
);

entity(
    "philip-k-dick",
    "Philip K. Dick",
    "person",
    "Author of Do Androids Dream of Electric Sheep?",
    "Philip K. Dick wrote the 1968 novel whose bounty hunters, androids, and empathy test became Blade Runner — even as Scott's film remade the mood.",
    "documented"
);

entity(
    "hampton-fancher",
    "Hampton Fancher",
    "person",
    "Screenwriter who first adapted Dick for the screen.",
    "Hampton Fancher wrote the early Blade Runner screenplays and later returned as a writer on Blade Runner 2049.",
    "documented"
);

entity(
    "denis-villeneuve",
    "Denis Villeneuve",
    "person",
    "Director of Blade Runner 2049.",
    "Denis Villeneuve directed Blade Runner 2049, extending Scott's city into a bleached sequel about K, memory, and whether a replicant can have a child.",
    "documented"
);

entity(
    "harrison-ford",
    "Harrison Ford",
    "person",
    "Actor who played Rick Deckard.",
    "Harrison Ford played Deckard in 1982 and returned in 2049, keeping the film's open question about whether the hunter is also a replicant.",
    "documented"
);

/* ---------- Works ---------- */

entity(
    "do-androids-dream",
    "Do Androids Dream of Electric Sheep?",
    "work",
    "Dick's 1968 novel of bounty hunters and empathy.",
    "Do Androids Dream of Electric Sheep? follows Rick Deckard hunting escaped androids in a ruined San Francisco of kipple, Mercerism, and the Voigt-Kampff test.",
    "documented"
);

entity(
    "blade-runner-1982",
    "Blade Runner (1982)",
    "work",
    "Scott's Los Angeles 2019 film.",
    "Blade Runner (1982) sends Deckard after Roy Batty's Nexus-6 group, through Tyrell's pyramid, Rachael's test, and the rain of a dying city.",
    "documented"
);

entity(
    "blade-runner-2049",
    "Blade Runner 2049",
    "work",
    "Villeneuve's sequel with K, Joi, and Wallace.",
    "Blade Runner 2049 follows Officer K, a replicant blade runner, through Wallace's new city, Joi's holographic companionship, and the secret of Deckard and Rachael's child.",
    "documented"
);

/* ---------- Groups / places ---------- */

entity(
    "tyrell-corporation",
    "Tyrell Corporation",
    "organization",
    "Maker of Nexus replicants and the 2019 pyramid.",
    "Tyrell Corporation builds Nexus-6 replicants, runs the Voight-Kampff protocol, and sits in a Mayan-modern pyramid above Los Angeles."
);

entity(
    "wallace-corporation",
    "Wallace Corporation",
    "organization",
    "Successor that revives replicant production after the Blackout.",
    "Wallace Corporation, under Niander Wallace, absorbs what remains of Tyrell and manufactures a new generation of obedient replicants — and Joi."
);

entity(
    "blade-runners",
    "Blade Runners",
    "organization",
    "LAPD unit that retires escaped replicants.",
    "Blade runners are the special police who hunt replicants: Deckard in 2019, Gaff beside him, and K in the Wallace era."
);

entity(
    "replicants",
    "Replicants",
    "organization",
    "Bioengineered people built for off-world labor.",
    "Replicants are manufactured humans — Nexus-6 and later models — used off-world, banned or regulated on Earth, and hunted when they run."
);

entity(
    "los-angeles-2019",
    "Los Angeles 2019",
    "place",
    "Rain, neon, and the Tyrell skyline of the first film.",
    "Los Angeles 2019 is Scott's overcrowded coastal megacity of Asian signage, constant rain, and police spinners over the Tyrell pyramid."
);

entity(
    "los-angeles-2049",
    "Los Angeles 2049",
    "place",
    "Walls, snow, and Wallace's city after the Blackout.",
    "Los Angeles 2049 is the sequelled city: sea walls, protein farms, a yellow haze, and a quieter terror than 2019's rain."
);

entity(
    "off-world-colonies",
    "Off-world colonies",
    "place",
    "Advertised new lives that replicants were built to work.",
    "The off-world colonies are the promised escape from Earth's ruin, staffed and fought over by replicant labor Deckard's targets fled."
);

/* ---------- Characters / objects ---------- */

entity(
    "rick-deckard",
    "Rick Deckard",
    "person",
    "Blade runner pulled back to retire Roy Batty's group.",
    "Rick Deckard is the tired hunter who tests Rachael, kills among Roy's circle, and later hides with the question of his own nature unanswered."
);

entity(
    "rachael",
    "Rachael",
    "person",
    "Experimental Tyrell replicant who believes she is human.",
    "Rachael is Tyrell's niece-that-isn't, a replicant given implanted memories who fails the Voight-Kampff slowly and leaves the city with Deckard."
);

entity(
    "roy-batty",
    "Roy Batty",
    "person",
    "Nexus-6 combat model who wants more life.",
    "Roy Batty is the leader of the escaped Nexus-6 group, the one who reaches Tyrell, quotes Blake, and dies in the rain after saving Deckard."
);

entity(
    "pris",
    "Pris",
    "person",
    "Pleasure-model Nexus-6 who hides with Sebastian.",
    "Pris is the Nexus-6 who befriends J. F. Sebastian and waits in the Bradbury rooms for Roy — a doll-posed trap for Deckard."
);

entity(
    "eldon-tyrell",
    "Eldon Tyrell",
    "person",
    "Genius founder who lives above the city.",
    "Eldon Tyrell is the corporate god of Nexus design, the man Roy calls father before killing him for a life span Tyrell cannot give."
);

entity(
    "j-f-sebastian",
    "J. F. Sebastian",
    "person",
    "Genetic designer who ages too fast and lives with toys.",
    "J. F. Sebastian is the lonely Tyrell geneticist with Methuselah Syndrome, the one Roy and Pris use as a door to the old man."
);

entity(
    "gaff",
    "Gaff",
    "person",
    "Origami-folding blade runner who watches Deckard.",
    "Gaff is the cop who speaks Cityspeak, leaves unicorns and matchstick men, and lets Deckard run at the end of 1982."
);

entity(
    "officer-k",
    "Officer K",
    "person",
    "Replicant blade runner of 2049.",
    "Officer K is a Wallace-era replicant who retires his own kind, lives with Joi, and follows a buried skeleton into Deckard's secret."
);

entity(
    "joi",
    "Joi",
    "person",
    "Holographic companion Wallace sells as love.",
    "Joi is the holographic product who shares K's apartment, projects into the world on an emanator, and may or may not be more than her program."
);

entity(
    "niander-wallace",
    "Niander Wallace",
    "person",
    "Blind industrialist who owns the new replicant age.",
    "Niander Wallace is the 2049 tycoon who wants reproductive replicants, treating Tyrell's miracle child as a design problem to steal."
);

entity(
    "ana-stelline",
    "Ana Stelline",
    "person",
    "Memory designer — and Deckard and Rachael's child.",
    "Ana Stelline is the quarantined artist who builds memories for replicants, including K's, and is the hidden child Wallace is hunting."
);

entity(
    "nexus-6",
    "Nexus-6",
    "concept",
    "Four-year-lifespan replicant generation of 2019.",
    "Nexus-6 is Tyrell's combat-and-labor generation with a built-in four-year life — Roy, Pris, Leon, Zhora — stronger and smarter than the hunters."
);

entity(
    "voight-kampff",
    "Voight-Kampff",
    "object",
    "Empathy machine that blade runners use as a test.",
    "The Voight-Kampff machine watches the eye for empathic response, the official way 2019 tells a human from a replicant — and the test Rachael nearly beats."
);

entity(
    "origami-unicorn",
    "Origami unicorn",
    "object",
    "Gaff's last fold — and Deckard's dream animal.",
    "The origami unicorn is Gaff's closing joke or warning, a paper animal that matches Deckard's dream and keeps the replicant question open."
);

/* ---------- Relationships ---------- */

rel("philip-k-dick", "do-androids-dream", "created", "Philip K. Dick wrote Do Androids Dream of Electric Sheep?", 0.99, 0.99);
rel("ridley-scott", "blade-runner-1982", "created", "Ridley Scott directed Blade Runner (1982).", 0.99, 0.98);
rel("hampton-fancher", "blade-runner-1982", "created", "Hampton Fancher wrote key drafts of the 1982 film.", 0.97, 0.94);
rel("denis-villeneuve", "blade-runner-2049", "created", "Denis Villeneuve directed Blade Runner 2049.", 0.98, 0.96);
rel("hampton-fancher", "blade-runner-2049", "created", "Fancher returned as a writer on 2049.", 0.95, 0.91);
rel("harrison-ford", "rick-deckard", "involved", "Harrison Ford played Rick Deckard.", 0.99, 0.97);
rel("philip-k-dick", "blade-runner", "inspired", "Dick's novel inspired the Blade Runner films.", 0.98, 0.96);
rel("ridley-scott", "blade-runner", "created", "Scott's 1982 film defined Blade Runner as a world.", 0.98, 0.96);

rel("do-androids-dream", "blade-runner", "part_of", "Dick's novel is the source work of Blade Runner.", 0.98, 0.96);
rel("blade-runner-1982", "blade-runner", "part_of", "The 1982 film is the central Blade Runner work.", 0.99, 0.98);
rel("blade-runner-2049", "blade-runner", "part_of", "2049 is the sequel that continues the city.", 0.97, 0.94);
rel("do-androids-dream", "blade-runner-1982", "adapted_into", "The novel was adapted into Blade Runner (1982).", 0.98, 0.96);
rel("blade-runner-1982", "do-androids-dream", "adapted_from", "The 1982 film is adapted from Dick's novel.", 0.98, 0.96);
rel("blade-runner-1982", "blade-runner-2049", "followed", "2049 follows decades after the 1982 film.", 0.96, 0.93);

rel("blade-runner-1982", "rick-deckard", "involved", "The 1982 film is Deckard's hunt through Los Angeles 2019.", 0.99, 0.97);
rel("blade-runner-1982", "roy-batty", "involved", "Roy Batty is the Nexus-6 leader of the 1982 film.", 0.98, 0.96);
rel("blade-runner-1982", "rachael", "involved", "Rachael's test and flight are central to 1982.", 0.97, 0.94);
rel("blade-runner-2049", "officer-k", "involved", "2049 is Officer K's investigation.", 0.98, 0.96);
rel("blade-runner-2049", "joi", "involved", "Joi is K's holographic companion in 2049.", 0.96, 0.93);

rel("rick-deckard", "blade-runners", "member_of", "Deckard is a blade runner pulled back onto the job.", 0.98, 0.96);
rel("officer-k", "blade-runners", "member_of", "K is a replicant blade runner of the Wallace era.", 0.98, 0.96);
rel("gaff", "blade-runners", "member_of", "Gaff is the origami-folding blade runner beside Deckard.", 0.96, 0.93);
rel("rachael", "tyrell-corporation", "member_of", "Rachael is Tyrell's experimental replicant.", 0.97, 0.94);
rel("eldon-tyrell", "tyrell-corporation", "leads", "Eldon Tyrell runs Tyrell Corporation.", 0.98, 0.96);
rel("j-f-sebastian", "tyrell-corporation", "member_of", "Sebastian is a Tyrell genetic designer.", 0.95, 0.91);
rel("roy-batty", "replicants", "leads", "Roy leads the escaped Nexus-6 group.", 0.97, 0.94);
rel("pris", "replicants", "member_of", "Pris is a Nexus-6 replicant in Roy's group.", 0.96, 0.93);
rel("officer-k", "replicants", "member_of", "K is himself a replicant.", 0.97, 0.94);
rel("niander-wallace", "wallace-corporation", "leads", "Wallace owns the corporation that replaced Tyrell.", 0.97, 0.94);
rel("joi", "wallace-corporation", "part_of", "Joi is a Wallace consumer product.", 0.95, 0.91);
rel("nexus-6", "replicants", "part_of", "Nexus-6 is Tyrell's four-year replicant generation.", 0.97, 0.94);
rel("roy-batty", "nexus-6", "member_of", "Roy is a Nexus-6 combat model.", 0.97, 0.94);

rel("blade-runners", "voight-kampff", "uses", "Blade runners use the Voight-Kampff test to identify replicants.", 0.97, 0.94);
rel("rick-deckard", "voight-kampff", "uses", "Deckard administers the Voight-Kampff to Rachael.", 0.96, 0.93);
rel("gaff", "origami-unicorn", "uses", "Gaff leaves the origami unicorn for Deckard.", 0.96, 0.93);
rel("rick-deckard", "roy-batty", "opposed_by", "Deckard's hunt ends in Roy's rooftop mercy.", 0.97, 0.94);
rel("roy-batty", "eldon-tyrell", "opposed_by", "Roy confronts Tyrell as a son who wants more life.", 0.96, 0.93);
rel("officer-k", "niander-wallace", "opposed_by", "K's case runs against Wallace's hunt for the child.", 0.94, 0.9);
rel("joi", "officer-k", "supports", "Joi stays with K as companion and witness.", 0.95, 0.91);
rel("ana-stelline", "rick-deckard", "connected_to", "Ana is Deckard and Rachael's hidden child.", 0.96, 0.93);
rel("ana-stelline", "rachael", "connected_to", "Ana is Rachael's daughter.", 0.96, 0.93);
rel("wallace-corporation", "tyrell-corporation", "followed", "Wallace Corporation succeeds the fallen Tyrell empire.", 0.94, 0.9);

rel("blade-runner-1982", "los-angeles-2019", "occurred_at", "The 1982 film is set in Los Angeles 2019.", 0.98, 0.96);
rel("blade-runner-2049", "los-angeles-2049", "occurred_at", "2049 is set in the later Los Angeles.", 0.97, 0.94);
rel("tyrell-corporation", "los-angeles-2019", "located_in", "Tyrell's pyramid dominates Los Angeles 2019.", 0.96, 0.93);
rel("replicants", "off-world-colonies", "located_in", "Replicants were built to labor in the off-world colonies.", 0.94, 0.9);
rel("rick-deckard", "rachael", "supports", "Deckard leaves the city with Rachael.", 0.95, 0.91);

module.exports = { entities, relationships };
