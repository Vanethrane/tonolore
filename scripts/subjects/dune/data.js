/*
 * Dune subject data — Frank Herbert's desert-planet saga and adaptations.
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
    "dune",
    "Dune",
    "topic",
    "Herbert's Arrakis saga of spice, Fremen, and empire.",
    "Dune is Frank Herbert's epic of Arrakis, the spice melange, House Atreides and Harkonnen, the Fremen, and Paul Muad'Dib's rise amid sandworms and galactic politics."
);

entity(
    "frank-herbert",
    "Frank Herbert",
    "person",
    "Author of the original Dune novels.",
    "Frank Herbert wrote Dune (1965) and its sequels, defining Arrakis, the Bene Gesserit, and ecological-political science fiction."
);

entity(
    "brian-herbert",
    "Brian Herbert",
    "person",
    "Frank Herbert's son; co-author of expanded Dune books.",
    "Brian Herbert, with Kevin J. Anderson, expanded the Dune universe in prequels and sequels drawn partly from his father's notes."
);

entity(
    "legendary-pictures",
    "Legendary Pictures",
    "organization",
    "Studio behind the modern Dune films.",
    "Legendary Pictures produced Denis Villeneuve's Dune film adaptations, bringing Arrakis to a new cinematic generation."
);

entity(
    "denis-villeneuve",
    "Denis Villeneuve",
    "person",
    "Director of the modern Dune films.",
    "Denis Villeneuve directed Dune (2021) and Dune: Part Two, adapting Herbert's novel with monumental desert imagery."
);

/* ---------- Works ---------- */

entity(
    "dune-novel",
    "Dune (novel)",
    "work",
    "Herbert's 1965 foundational novel.",
    "The novel Dune follows Paul Atreides as House Atreides takes Arrakis, meets the Fremen, and confronts Harkonnen treachery and prophetic destiny."
);

entity(
    "dune-messiah",
    "Dune Messiah",
    "work",
    "Sequel novel of Paul's empire.",
    "Dune Messiah continues Paul's story as Emperor Muad'Dib, examining the costs of messianic power and conspiracy."
);

entity(
    "dune-2021",
    "Dune (2021 film)",
    "work",
    "Villeneuve's first Dune film adaptation.",
    "Dune (2021) adapts the first half of Herbert's novel, following House Atreides to Arrakis and Paul's path toward the Fremen."
);

entity(
    "dune-part-two",
    "Dune: Part Two",
    "work",
    "Villeneuve's concluding Atreides film.",
    "Dune: Part Two completes Paul's Fremen rise, the holy war foreshadowed in the novel, and the clash with House Harkonnen."
);

/* ---------- Houses / orgs ---------- */

entity(
    "house-atreides",
    "House Atreides",
    "organization",
    "Noble house of Caladan and Arrakis.",
    "House Atreides is the noble house of Duke Leto, Lady Jessica, and Paul, famed for honor and targeted by imperial intrigue on Arrakis."
);

entity(
    "house-harkonnen",
    "House Harkonnen",
    "organization",
    "Brutal rivals of the Atreides.",
    "House Harkonnen rules through cruelty from Giedi Prime, long exploiting Arrakis before plotting the Atreides' fall."
);

entity(
    "bene-gesserit",
    "Bene Gesserit",
    "organization",
    "Sisterhood of politics, voice, and breeding.",
    "The Bene Gesserit are a secretive sisterhood training body-mind control, the Voice, and a millennia-long breeding program toward the Kwisatz Haderach."
);

entity(
    "spacing-guild",
    "Spacing Guild",
    "organization",
    "Monopoly of foldspace Navigators.",
    "The Spacing Guild monopolizes interstellar travel through spice-mutated Navigators who fold space between stars."
);

entity(
    "fremen",
    "Fremen",
    "concept",
    "Desert people of Arrakis.",
    "The Fremen are the fierce desert inhabitants of Arrakis who conserve water, ride sandworms, and await a prophesied leader."
);

entity(
    "mentats",
    "Mentats",
    "concept",
    "Human computers banned of thinking machines.",
    "Mentats are humans trained as living computers after the Butlerian Jihad outlawed thinking machines, advising Great Houses."
);

/* ---------- People ---------- */

entity(
    "paul-atreides",
    "Paul Atreides",
    "person",
    "Heir of Atreides who becomes Muad'Dib.",
    "Paul Atreides is the Atreides heir trained by Bene Gesserit and Mentat arts who rises among the Fremen as Muad'Dib."
);

entity(
    "leto-atreides",
    "Duke Leto Atreides",
    "person",
    "Father of Paul; ruler sent to Arrakis.",
    "Duke Leto Atreides leads House Atreides with honor, accepting stewardship of Arrakis and dying in Harkonnen betrayal."
);

entity(
    "lady-jessica",
    "Lady Jessica",
    "person",
    "Bene Gesserit concubine and Paul's mother.",
    "Lady Jessica is a Bene Gesserit who bears Paul against orders, training him in the Way and surviving Arrakis with him."
);

entity(
    "chani",
    "Chani",
    "person",
    "Fremen warrior and Paul's beloved.",
    "Chani Kynes is a Fremen fighter and sayyadina-linked figure who becomes Paul's partner in the desert and in prophecy."
);

entity(
    "baron-harkonnen",
    "Baron Vladimir Harkonnen",
    "person",
    "Scheming patriarch of House Harkonnen.",
    "Baron Vladimir Harkonnen is the corpulent, ruthless leader of House Harkonnen who engineers the fall of House Atreides."
);

entity(
    "duncan-idaho",
    "Duncan Idaho",
    "person",
    "Swordmaster loyal to House Atreides.",
    "Duncan Idaho is the Atreides swordmaster whose loyalty and later ghola rebirths echo across the Dune saga."
);

entity(
    "stilgar",
    "Stilgar",
    "person",
    "Naib of Sietch Tabr.",
    "Stilgar is the Fremen naib of Sietch Tabr who accepts Paul and Jessica into desert ways and later follows Muad'Dib."
);

entity(
    "gurney-halleck",
    "Gurney Halleck",
    "person",
    "Troubadour-warrior of House Atreides.",
    "Gurney Halleck is the scarred warmaster and musician who trains Paul and survives to fight for Atreides vengeance."
);

entity(
    "thufir-hawat",
    "Thufir Hawat",
    "person",
    "Mentat Master of Assassins for Atreides.",
    "Thufir Hawat is the Mentat Master of Assassins serving House Atreides with ruthless loyalty and strategic brilliance."
);

entity(
    "feyd-rautha",
    "Feyd-Rautha Harkonnen",
    "person",
    "Harkonnen heir and gladiatorial killer.",
    "Feyd-Rautha is the Baron's nephew and designated heir, a charismatic killer groomed as a counter to Paul."
);

entity(
    "alia-atreides",
    "Alia Atreides",
    "person",
    "Pre-born sister of Paul.",
    "Alia Atreides is Jessica's pre-born daughter, aware in the womb, who becomes a terrifying figure of Abomination and power."
);

/* ---------- Places / concepts / creatures ---------- */

entity(
    "arrakis",
    "Arrakis",
    "place",
    "Desert planet also called Dune.",
    "Arrakis, known as Dune, is the only source of the spice melange, home of Fremen and sandworms under a brutal desert ecology."
);

entity(
    "caladan",
    "Caladan",
    "place",
    "Ocean homeworld of House Atreides.",
    "Caladan is the rainy ocean world of House Atreides before their fateful transfer to Arrakis."
);

entity(
    "giedi-prime",
    "Giedi Prime",
    "place",
    "Industrial homeworld of House Harkonnen.",
    "Giedi Prime is the polluted industrial world of House Harkonnen, reflecting their oppressive culture."
);

entity(
    "spice-melange",
    "Spice melange",
    "concept",
    "Geriatric spice that enables foldspace and visions.",
    "The spice melange prolongs life, unlocks prescience, and enables Guild Navigators to fold space—making Arrakis the empire's prize."
);

entity(
    "sandworms",
    "Sandworms",
    "concept",
    "Colossal worms of the Arrakis deserts.",
    "Sandworms are enormous desert creatures of Arrakis, sacred and deadly, whose life cycle is bound to the spice."
);

entity(
    "shai-hulud",
    "Shai-Hulud",
    "concept",
    "Fremen name for the sandworm makers.",
    "Shai-Hulud is the Fremen sacred name for the sandworm, the Maker of the desert and center of Fremen religion."
);

entity(
    "muad-dib",
    "Muad'Dib",
    "concept",
    "Paul's Fremen name and messianic mantle.",
    "Muad'Dib is the Fremen name Paul takes from the desert mouse, becoming the title of his prophetic leadership."
);

entity(
    "kwisatz-haderach",
    "Kwisatz Haderach",
    "concept",
    "Bene Gesserit prophesied male adept.",
    "The Kwisatz Haderach is the Bene Gesserit's prophesied male who can bridge space-time awareness—a role Paul fulfills early."
);

entity(
    "stillsuits",
    "Stillsuits",
    "object",
    "Fremen garments that recycle body water.",
    "Stillsuits are Fremen-engineered body suits that reclaim sweat and moisture, enabling survival on Arrakis."
);

/* ---------- Relationships ---------- */

rel("frank-herbert", "dune", "created", "Frank Herbert created Dune.", 0.99, 0.99);
rel("frank-herbert", "dune-novel", "created", "Herbert wrote the novel Dune.", 0.99, 0.98);
rel("frank-herbert", "dune-messiah", "created", "Herbert wrote Dune Messiah.", 0.97, 0.94);
rel("denis-villeneuve", "dune-2021", "created", "Villeneuve directed Dune (2021).", 0.98, 0.96);
rel("denis-villeneuve", "dune-part-two", "created", "Villeneuve directed Dune: Part Two.", 0.98, 0.96);
rel("legendary-pictures", "dune-2021", "produced", "Legendary produced the 2021 Dune film.", 0.97, 0.94);

rel("dune-novel", "dune", "part_of", "The novel is the foundation of Dune.", 0.99, 0.98);
rel("dune-messiah", "dune", "part_of", "Dune Messiah continues the saga.", 0.97, 0.94);
rel("dune-novel", "dune-2021", "adapted_into", "The novel was adapted into the 2021 film.", 0.97, 0.94);
rel("dune-2021", "dune", "part_of", "The 2021 film is part of Dune.", 0.97, 0.94);
rel("dune-part-two", "dune", "part_of", "Part Two continues the film adaptation.", 0.97, 0.94);

rel("paul-atreides", "house-atreides", "member_of", "Paul is heir of House Atreides.", 0.99, 0.97);
rel("leto-atreides", "house-atreides", "leads", "Leto leads House Atreides.", 0.98, 0.96);
rel("lady-jessica", "bene-gesserit", "member_of", "Jessica is Bene Gesserit-trained.", 0.98, 0.95);
rel("lady-jessica", "paul-atreides", "related_to", "Jessica is Paul's mother.", 0.99, 0.97);
rel("leto-atreides", "paul-atreides", "related_to", "Leto is Paul's father.", 0.99, 0.97);
rel("baron-harkonnen", "house-harkonnen", "leads", "The Baron leads House Harkonnen.", 0.98, 0.96);
rel("feyd-rautha", "house-harkonnen", "member_of", "Feyd-Rautha is a Harkonnen heir.", 0.97, 0.94);
rel("house-atreides", "house-harkonnen", "opposed_by", "Atreides and Harkonnen are bitter rivals.", 0.98, 0.96);

rel("paul-atreides", "fremen", "member_of", "Paul joins the Fremen as Muad'Dib.", 0.97, 0.94);
rel("paul-atreides", "muad-dib", "connected_to", "Paul takes the name Muad'Dib.", 0.98, 0.96);
rel("paul-atreides", "kwisatz-haderach", "connected_to", "Paul fulfills the Kwisatz Haderach prophecy.", 0.97, 0.94);
rel("chani", "fremen", "member_of", "Chani is Fremen.", 0.97, 0.94);
rel("chani", "paul-atreides", "supports", "Chani stands with Paul in the desert.", 0.96, 0.93);
rel("stilgar", "fremen", "leads", "Stilgar leads Sietch Tabr.", 0.96, 0.93);
rel("duncan-idaho", "house-atreides", "member_of", "Duncan serves House Atreides.", 0.96, 0.92);
rel("thufir-hawat", "mentats", "member_of", "Thufir is a Mentat.", 0.97, 0.94);

rel("arrakis", "spice-melange", "contains", "Arrakis is the sole source of spice.", 0.99, 0.97);
rel("spice-melange", "spacing-guild", "uses", "Guild Navigators depend on spice.", 0.98, 0.95);
rel("sandworms", "arrakis", "located_in", "Sandworms inhabit Arrakis.", 0.98, 0.96);
rel("shai-hulud", "sandworms", "connected_to", "Shai-Hulud is the Fremen name for sandworms.", 0.98, 0.96);
rel("fremen", "arrakis", "located_in", "Fremen live on Arrakis.", 0.98, 0.95);
rel("fremen", "stillsuits", "uses", "Fremen wear stillsuits to survive.", 0.96, 0.92);
rel("house-atreides", "caladan", "located_in", "House Atreides rules from Caladan.", 0.96, 0.92);
rel("alia-atreides", "paul-atreides", "related_to", "Alia is Paul's sister.", 0.97, 0.94);

module.exports = { entities, relationships };
