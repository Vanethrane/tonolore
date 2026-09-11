/*
 * Invincible subject data — Robert Kirkman's superhero comic and Amazon series.
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
    "invincible",
    "Invincible",
    "topic",
    "Robert Kirkman's brutal superhero comic and Amazon series.",
    "Invincible is Robert Kirkman's Image Comics superhero saga and Amazon Prime Video adaptation about Mark Grayson, a Viltrumite hero who discovers his father Omni-Man's genocidal mission and faces cosmic war, betrayal, and moral compromise."
);

entity(
    "robert-kirkman",
    "Robert Kirkman",
    "person",
    "Creator of Invincible.",
    "Robert Kirkman co-created Invincible with Cory Walker for Image Comics, writing Mark Grayson's coming-of-age amid Viltrumite conquest and subverting superhero tropes with graphic violence."
);

entity(
    "image-comics",
    "Image Comics",
    "organization",
    "Publisher of the Invincible comic.",
    "Image Comics publishes Invincible and Kirkman's other creator-owned titles, distributing the long-running comic that inspired the Amazon adaptation."
);

entity(
    "amazon-studios",
    "Amazon Studios",
    "organization",
    "Producer of the Invincible animated series.",
    "Amazon Studios produces Invincible for Prime Video, adapting Kirkman's comic with animated brutality and expanding the Guardians of the Globe and Viltrumite mythology."
);

/* ---------- Works ---------- */

entity(
    "invincible-comic",
    "Invincible (comic)",
    "work",
    "Original Kirkman Image Comics series.",
    "The Invincible comic follows Mark Grayson from power discovery through Viltrumite war, the Guardians massacre, Thragg's rebellion, and Mark's efforts to build a better world."
);

entity(
    "invincible-tv-series",
    "Invincible (TV series)",
    "work",
    "Amazon Prime Video animated adaptation.",
    "The Invincible TV series adapts Kirkman's early arcs for Prime Video, dramatizing Omni-Man's betrayal, the Guardians battle, and Mark's struggle to become a true hero."
);

entity(
    "guardians-massacre-arc",
    "Guardians Massacre Arc",
    "work",
    "Storyline where Omni-Man slaughters the Guardians.",
    "The Guardians Massacre Arc is Invincible's shocking turning point when Nolan Grayson reveals his Viltrumite mission by killing the Guardians of the Globe."
);

/* ---------- Organizations ---------- */

entity(
    "viltrumite-empire",
    "Viltrumite Empire",
    "organization",
    "Interstellar empire of conquering superhumans.",
    "The Viltrumite Empire sends warriors like Omni-Man to infiltrate and conquer planets, enforcing a doctrine of genetic purity and galactic domination."
);

entity(
    "viltrumites",
    "Viltrumites",
    "concept",
    "Alien race of nearly invulnerable conquerors.",
    "Viltrumites are a powerful alien species with flight, strength, and longevity, bred as planetary conquerors serving the Viltrumite Empire."
);

entity(
    "global-defense-agency",
    "Global Defense Agency",
    "organization",
    "Secret organization monitoring superhuman threats.",
    "The Global Defense Agency (GDA), led by Cecil Stedman, coordinates Earth's defense, funds the Guardians, and manipulates events to contain Viltrumite and superhuman crises."
);

entity(
    "guardians-of-the-globe",
    "Guardians of the Globe",
    "organization",
    "Earth's premier superhero team.",
    "The Guardians of the Globe are Earth's flagship hero team — including Immortal, Red Rush, and others — destroyed by Omni-Man in Invincible's defining massacre."
);

entity(
    "coalition-of-planets",
    "Coalition of Planets",
    "organization",
    "Alliance opposing Viltrumite expansion.",
    "The Coalition of Planets unites worlds resisting Viltrumite conquest, with allies like Allen the Alien supporting Mark Grayson against Thragg."
);

/* ---------- Places ---------- */

entity(
    "earth-invincible",
    "Earth (Invincible)",
    "place",
    "Primary setting of Mark Grayson's hero career.",
    "Earth in Invincible is the planet Omni-Man was sent to conquer, home to the GDA, Guardians, and Mark Grayson's struggle to protect humanity."
);

entity(
    "viltrum",
    "Viltrum",
    "place",
    "Homeworld of the Viltrumite Empire.",
    "Viltrum is the Viltrumite homeworld and seat of their empire, where Thragg and the ruling council direct conquest across the galaxy."
);

entity(
    "gda-headquarters",
    "GDA Headquarters",
    "place",
    "Secret base of the Global Defense Agency.",
    "GDA Headquarters is Cecil Stedman's command center for monitoring superhumans, deploying the Guardians, and managing crises like the Omni-Man revelation."
);

/* ---------- Concepts ---------- */

entity(
    "viltrumite-powers",
    "Viltrumite Powers",
    "concept",
    "Flight, strength, and durability of Viltrumites.",
    "Viltrumite powers include superhuman strength, flight, near-invulnerability, and extended lifespan — shared by Omni-Man, Mark Grayson, and their kind."
);

entity(
    "sequids",
    "Sequids",
    "concept",
    "Hive-mind parasites threatening allied worlds.",
    "Sequids are a hive-minded species that attach to hosts and multiply, becoming a major Coalition threat separate from the Viltrumite war."
);

/* ---------- Characters ---------- */

entity(
    "mark-grayson",
    "Mark Grayson",
    "person",
    "Teen hero Invincible and Omni-Man's son.",
    "Mark Grayson is the teenage son of Omni-Man who develops Viltrumite powers, adopts the name Invincible, and fights to stop his father's conquest while forging his own heroic path."
);

entity(
    "omni-man",
    "Omni-Man",
    "person",
    "Viltrumite conqueror disguised as Earth's greatest hero.",
    "Omni-Man (Nolan Grayson) poses as Earth's premier superhero while secretly advancing Viltrumite conquest, culminating in the Guardians massacre before his conflict with Mark."
);

entity(
    "atom-eve",
    "Atom Eve",
    "person",
    "Matter-manipulating hero and Mark's ally.",
    "Atom Eve (Samantha Eve Wilkins) can restructure matter at the atomic level, partnering with Mark Grayson and resisting GDA manipulation."
);

entity(
    "cecil-stedman",
    "Cecil Stedman",
    "person",
    "Ruthless director of the Global Defense Agency.",
    "Cecil Stedman runs the GDA with pragmatic brutality, recruiting Mark, reviving Immortal, and making morally gray choices to defend Earth from Viltrumites."
);

entity(
    "immortal",
    "Immortal",
    "person",
    "Resurrecting Guardian and veteran hero.",
    "Immortal is a long-lived Guardian of the Globe who repeatedly returns from death, surviving Omni-Man's attack and continuing to fight for Earth."
);

entity(
    "red-rush",
    "Red Rush",
    "person",
    "Speedster Guardian killed by Omni-Man.",
    "Red Rush is the Guardians' super-speed member whose desperate fight against Omni-Man highlights the Viltrumite's overwhelming power in the massacre."
);

entity(
    "thragg",
    "Thragg",
    "person",
    "Grand Regent of the Viltrumite Empire.",
    "Thragg is the Viltrumite Grand Regent who leads the empire's conquest, clashes with Omni-Man and Mark, and embodies Viltrumite supremacy."
);

entity(
    "allen-the-alien",
    "Allen the Alien",
    "person",
    "Coalition evaluator who befriends Mark.",
    "Allen the Alien tests Earth's heroes for the Coalition of Planets and becomes one of Mark Grayson's closest allies in the war against Viltrum."
);

entity(
    "robot",
    "Robot",
    "person",
    "Genius Guardian who transfers his mind to clones.",
    "Robot (Rudy Connors) is the Guardians' brilliant strategist who inhabits successive clone bodies, pursuing utopian plans with unsettling determination."
);

entity(
    "battle-beast",
    "Battle Beast",
    "person",
    "Warrior who fought Omni-Man to a standstill.",
    "Battle Beast is an intergalactic warrior of immense strength who battles Omni-Man and later allies with Mark against greater threats."
);

entity(
    "conquest",
    "Conquest",
    "person",
    "Viltrumite enforcer sent to kill Mark.",
    "Conquest is a scarred Viltrumite veteran dispatched to eliminate Mark Grayson, delivering one of Invincible's most brutal confrontations."
);

entity(
    "anissa",
    "Anissa",
    "person",
    "Viltrumite sent to breed with Mark.",
    "Anissa is a Viltrumite warrior assigned to mate with Mark Grayson for the empire's breeding program, forcing traumatic conflict."
);

entity(
    "monster-girl",
    "Monster Girl",
    "person",
    "Guardian who ages backward when transforming.",
    "Monster Girl (Amanda) is a Guardian who becomes a powerful monster form at the cost of reversed aging, surviving the team's darkest battles."
);

entity(
    "darkwing",
    "Darkwing",
    "person",
    "Batman-like Guardian of the Globe.",
    "Darkwing is a Gotham-style Guardian who patrols his city until Omni-Man's massacre, representing Earth's street-level hero tradition."
);

entity(
    "debbie-grayson",
    "Debbie Grayson",
    "person",
    "Mark's mother and Nolan's wife.",
    "Debbie Grayson is Mark's mother who must reconcile her love for Nolan with the horror of his Viltrumite mission after the truth emerges."
);

entity(
    "mauler-twins",
    "Mauler Twins",
    "person",
    "Duplicating villains who harass heroes.",
    "The Mauler Twins are duplicate supervillains whose endless cloning and bickering make them recurring nuisances for Mark and the GDA."
);

/* ---------- Relationships ---------- */

rel("robert-kirkman", "invincible", "created", "Kirkman created Invincible.", 0.99, 0.99);
rel("robert-kirkman", "invincible-comic", "created", "Kirkman writes the Invincible comic.", 0.99, 0.98);
rel("image-comics", "invincible-comic", "publishes", "Image Comics publishes Invincible.", 0.98, 0.96);
rel("amazon-studios", "invincible-tv-series", "produced", "Amazon Studios produces Invincible.", 0.98, 0.96);
rel("invincible-comic", "invincible", "part_of", "The comic is the core Invincible work.", 0.99, 0.99);
rel("invincible-tv-series", "invincible", "part_of", "The TV series adapts Invincible.", 0.98, 0.97);
rel("invincible-comic", "invincible-tv-series", "adapted_into", "The comic was adapted for Prime Video.", 0.98, 0.96);
rel("guardians-massacre-arc", "invincible-comic", "part_of", "The massacre arc is a pivotal comic storyline.", 0.98, 0.96);
rel("guardians-massacre-arc", "invincible-tv-series", "part_of", "Season 1 adapts the Guardians massacre.", 0.97, 0.95);

rel("mark-grayson", "viltrumites", "member_of", "Mark is half-Viltrumite.", 0.99, 0.98);
rel("omni-man", "viltrumites", "member_of", "Omni-Man is a Viltrumite warrior.", 0.99, 0.98);
rel("thragg", "viltrumite-empire", "leads", "Thragg leads the Viltrumite Empire.", 0.99, 0.98);
rel("viltrumite-empire", "viltrum", "located_in", "The empire is based on Viltrum.", 0.98, 0.96);
rel("viltrumites", "viltrumite-powers", "uses", "Viltrumites wield superhuman abilities.", 0.99, 0.98);
rel("mark-grayson", "viltrumite-powers", "uses", "Mark flies and fights with Viltrumite power.", 0.99, 0.98);
rel("omni-man", "viltrumite-powers", "uses", "Omni-Man demonstrates peak Viltrumite strength.", 0.99, 0.98);

rel("mark-grayson", "omni-man", "related_to", "Mark is Omni-Man's son.", 0.99, 0.99);
rel("debbie-grayson", "mark-grayson", "related_to", "Debbie is Mark's mother.", 0.98, 0.96);
rel("debbie-grayson", "omni-man", "related_to", "Debbie was married to Nolan Grayson.", 0.97, 0.95);
rel("mark-grayson", "omni-man", "opposed_by", "Mark fights his father after the massacre.", 0.99, 0.98);
rel("omni-man", "guardians-of-the-globe", "opposed_by", "Omni-Man slaughters the Guardians.", 0.99, 0.99);
rel("guardians-massacre-arc", "guardians-of-the-globe", "involved", "The arc destroys the Guardians team.", 0.99, 0.98);

rel("immortal", "guardians-of-the-globe", "member_of", "Immortal is a Guardian.", 0.98, 0.96);
rel("red-rush", "guardians-of-the-globe", "member_of", "Red Rush served on the Guardians.", 0.98, 0.96);
rel("robot", "guardians-of-the-globe", "member_of", "Robot strategized for the Guardians.", 0.98, 0.96);
rel("monster-girl", "guardians-of-the-globe", "member_of", "Monster Girl is a Guardian.", 0.97, 0.95);
rel("darkwing", "guardians-of-the-globe", "member_of", "Darkwing was a Guardian.", 0.97, 0.95);
rel("guardians-of-the-globe", "global-defense-agency", "part_of", "The GDA funds and directs the Guardians.", 0.97, 0.95);
rel("cecil-stedman", "global-defense-agency", "leads", "Cecil directs the GDA.", 0.99, 0.98);
rel("global-defense-agency", "gda-headquarters", "located_in", "The GDA operates from its headquarters.", 0.97, 0.95);
rel("global-defense-agency", "earth-invincible", "located_in", "The GDA defends Earth.", 0.98, 0.96);

rel("mark-grayson", "atom-eve", "supports", "Mark and Atom Eve fight together.", 0.97, 0.95);
rel("cecil-stedman", "mark-grayson", "supports", "Cecil recruits and backs Mark.", 0.96, 0.94);
rel("allen-the-alien", "mark-grayson", "supports", "Allen allies with Mark against Viltrum.", 0.97, 0.95);
rel("allen-the-alien", "coalition-of-planets", "member_of", "Allen serves the Coalition.", 0.97, 0.95);
rel("coalition-of-planets", "viltrumite-empire", "opposed_by", "The Coalition resists Viltrumite conquest.", 0.98, 0.96);

rel("conquest", "mark-grayson", "opposed_by", "Conquest is sent to kill Mark.", 0.98, 0.96);
rel("thragg", "mark-grayson", "opposed_by", "Thragg wars against Mark and Earth.", 0.99, 0.98);
rel("anissa", "mark-grayson", "connected_to", "Anissa is assigned to Mark by Viltrum.", 0.96, 0.93);
rel("battle-beast", "omni-man", "opposed_by", "Battle Beast fights Omni-Man.", 0.97, 0.95);
rel("sequids", "coalition-of-planets", "opposed_by", "Sequids threaten Coalition worlds.", 0.95, 0.92);
rel("mauler-twins", "mark-grayson", "opposed_by", "The Mauler Twins harass Invincible.", 0.94, 0.9);

module.exports = { entities, relationships };
