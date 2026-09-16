/*
 * The Simpsons subject data — Matt Groening's animated sitcom.
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
    "the-simpsons",
    "The Simpsons",
    "topic",
    "Matt Groening's long-running animated sitcom about Springfield.",
    "The Simpsons is the animated comedy franchise created by Matt Groening, following Homer, Marge, Bart, Lisa, and Maggie Simpson in Springfield — with Mr. Burns, the Nuclear Plant, and decades of satire across TV and film."
);

entity(
    "matt-groening",
    "Matt Groening",
    "person",
    "Creator of The Simpsons.",
    "Matt Groening created The Simpsons, designing the Simpson family and Springfield's cast that later became Fox's flagship animated series and a Disney-owned property."
);

entity(
    "james-l-brooks",
    "James L. Brooks",
    "person",
    "Producer and co-developer of The Simpsons.",
    "James L. Brooks helped develop The Simpsons for television with Matt Groening and Sam Simon, shaping its early tone and longevity."
);

entity(
    "sam-simon",
    "Sam Simon",
    "person",
    "Co-developer who shaped early Simpsons writers' room.",
    "Sam Simon co-developed The Simpsons and helped build its classic writing staff and satirical voice in the early seasons."
);

/* ---------- Works ---------- */

entity(
    "the-simpsons-tv-series",
    "The Simpsons (TV series)",
    "work",
    "Prime-time animated series that began on Fox.",
    "The Simpsons TV series premiered on Fox in 1989, chronicling the Simpson family and Springfield across hundreds of episodes of comedy and cultural parody."
);

entity(
    "the-simpsons-movie",
    "The Simpsons Movie",
    "work",
    "2007 theatrical film featuring Springfield's crisis.",
    "The Simpsons Movie expands the TV series to the big screen, sending Homer and Springfield into a disaster comedy centered on environmental chaos."
);

entity(
    "simpsons-shorts",
    "The Simpsons shorts",
    "work",
    "Tracy Ullman Show shorts that launched the family.",
    "The Simpsons began as animated shorts on The Tracey Ullman Show before spinning off into the half-hour Fox series."
);

/* ---------- Places ---------- */

entity(
    "springfield",
    "Springfield",
    "place",
    "Hometown of the Simpsons; state deliberately vague.",
    "Springfield is the fictional American city where the Simpson family lives, home to the Nuclear Plant, Springfield Elementary, and Moe's Tavern."
);

entity(
    "742-evergreen-terrace",
    "742 Evergreen Terrace",
    "place",
    "The Simpson family's house.",
    "742 Evergreen Terrace is the Simpson family home in Springfield, the center of Homer, Marge, Bart, Lisa, and Maggie's daily life."
);

entity(
    "springfield-elementary",
    "Springfield Elementary",
    "place",
    "School attended by Bart, Lisa, and Milhouse.",
    "Springfield Elementary School is where Bart and Lisa Simpson study under Principal Skinner, with classmates like Milhouse and Nelson."
);

entity(
    "springfield-nuclear-power-plant",
    "Springfield Nuclear Power Plant",
    "place",
    "Mr. Burns's plant where Homer works.",
    "The Springfield Nuclear Power Plant is owned by Mr. Burns and employs Homer Simpson, often as a safety-averse sector worker."
);

entity(
    "moes-tavern",
    "Moe's Tavern",
    "place",
    "Bar run by Moe Szyslak.",
    "Moe's Tavern is the neighborhood bar where Homer drinks with Barney and friends under bartender Moe Szyslak."
);

entity(
    "kwik-e-mart",
    "Kwik-E-Mart",
    "place",
    "Convenience store run by Apu.",
    "The Kwik-E-Mart is Springfield's convenience store famously associated with Apu Nahasapeemapetilon."
);

/* ---------- Organizations / concepts ---------- */

entity(
    "simpson-family",
    "Simpson family",
    "organization",
    "Homer, Marge, and the kids at 742 Evergreen Terrace.",
    "The Simpson family — Homer, Marge, Bart, Lisa, and Maggie — is the core household of The Simpsons, living at 742 Evergreen Terrace in Springfield."
);

entity(
    "itchy-and-scratchy",
    "Itchy & Scratchy",
    "concept",
    "Violent cartoon-within-a-cartoon Bart and Lisa watch.",
    "Itchy & Scratchy is the ultra-violent cat-and-mouse cartoon beloved by Bart and Lisa Simpson on The Simpsons."
);

entity(
    "duff-beer",
    "Duff Beer",
    "object",
    "Homer's favorite beer brand.",
    "Duff Beer is the ubiquitous brew Homer Simpson drinks, a running gag and brand parody throughout Springfield."
);

entity(
    "radioactive-man",
    "Radioactive Man",
    "concept",
    "Comic-book hero idolized in Springfield.",
    "Radioactive Man is the comic-book superhero beloved by Bart Simpson and Comic Book Guy, with ties to Springfield pop culture."
);

/* ---------- Characters ---------- */

entity(
    "homer-simpson",
    "Homer Simpson",
    "person",
    "Safety-challenged Nuclear Plant worker and dad.",
    "Homer Simpson is the doughnut-loving patriarch of the Simpson family, a Springfield Nuclear Power Plant employee married to Marge."
);

entity(
    "marge-simpson",
    "Marge Simpson",
    "person",
    "Blue-haired matriarch of the Simpson family.",
    "Marge Simpson is the patient, blue-beehive-haired mother who holds the Simpson family together amid Homer and Bart's chaos."
);

entity(
    "bart-simpson",
    "Bart Simpson",
    "person",
    "Prankster son; student at Springfield Elementary.",
    "Bart Simpson is the rebellious oldest Simpson child, a skateboarding prankster at Springfield Elementary and foil to Principal Skinner."
);

entity(
    "lisa-simpson",
    "Lisa Simpson",
    "person",
    "Saxophone-playing, idealistic middle child.",
    "Lisa Simpson is the brilliant, activist middle child of the Simpson family, a saxophone prodigy and moral center at Springfield Elementary."
);

entity(
    "maggie-simpson",
    "Maggie Simpson",
    "person",
    "Pacifier-wielding baby of the family.",
    "Maggie Simpson is the largely silent baby of the Simpson family, known for her pacifier and surprising moments of competence."
);

entity(
    "abraham-simpson",
    "Abraham Simpson",
    "person",
    "Grampa Simpson; Homer's father.",
    "Abraham 'Grampa' Simpson is Homer's elderly father, a Springfield Retirement Castle resident full of tall war stories."
);

entity(
    "mr-burns",
    "Mr. Burns",
    "person",
    "Owner of the Springfield Nuclear Power Plant.",
    "Charles Montgomery Burns owns the Springfield Nuclear Power Plant, employs Homer Simpson, and schemes with aide Waylon Smithers."
);

entity(
    "waylon-smithers",
    "Waylon Smithers",
    "person",
    "Loyal assistant to Mr. Burns.",
    "Waylon Smithers is Mr. Burns's devoted executive assistant at the Springfield Nuclear Power Plant."
);

entity(
    "moe-szyslak",
    "Moe Szyslak",
    "person",
    "Bartender of Moe's Tavern.",
    "Moe Szyslak runs Moe's Tavern, serving Homer Simpson and nursing grudges, scams, and unrequited romantic hopes."
);

entity(
    "ned-flanders",
    "Ned Flanders",
    "person",
    "Cheerfully devout next-door neighbor.",
    "Ned Flanders is the Simpsons' overly wholesome neighbor, a churchgoing foil to Homer's vices."
);

entity(
    "krusty-the-clown",
    "Krusty the Clown",
    "person",
    "Cynical kids' TV star in Springfield.",
    "Krusty the Clown is Springfield's famous children's entertainer, a chain-smoking showbiz cynic idolized by Bart Simpson."
);

entity(
    "chief-wiggum",
    "Chief Wiggum",
    "person",
    "Inept police chief of Springfield.",
    "Clancy Wiggum is Springfield's doughnut-loving police chief, father of Ralph Wiggum and a frequent comic authority figure."
);

entity(
    "apu-nahasapeemapetilon",
    "Apu Nahasapeemapetilon",
    "person",
    "Operator of the Kwik-E-Mart.",
    "Apu Nahasapeemapetilon is the hardworking Kwik-E-Mart clerk and later owner figure in Springfield's convenience-store jokes."
);

entity(
    "comic-book-guy",
    "Comic Book Guy",
    "person",
    "Sarcastic owner of the Android's Dungeon.",
    "Comic Book Guy runs the Android's Dungeon comic shop in Springfield, dispensing snark about Radioactive Man and fandom."
);

entity(
    "milhouse-van-houten",
    "Milhouse Van Houten",
    "person",
    "Bart's best friend at Springfield Elementary.",
    "Milhouse Van Houten is Bart Simpson's bespectacled best friend and frequent accomplice at Springfield Elementary."
);

entity(
    "nelson-muntz",
    "Nelson Muntz",
    "person",
    "School bully known for 'Ha-ha!'",
    "Nelson Muntz is the Springfield Elementary bully whose laugh and tough exterior hide occasional softer storylines."
);

entity(
    "principal-skinner",
    "Principal Skinner",
    "person",
    "Principal of Springfield Elementary.",
    "Principal Seymour Skinner runs Springfield Elementary, forever clashing with Bart Simpson and answering to Superintendent Chalmers."
);

entity(
    "ralph-wiggum",
    "Ralph Wiggum",
    "person",
    "Chief Wiggum's oddly poetic son.",
    "Ralph Wiggum is Chief Wiggum's son, a sweetly bizarre Springfield Elementary student known for non sequiturs."
);

/* ---------- Relationships ---------- */

rel("matt-groening", "the-simpsons", "created", "Matt Groening created The Simpsons.", 0.99, 0.99);
rel("matt-groening", "the-simpsons-tv-series", "created", "Groening created the Simpsons TV series.", 0.99, 0.98);
rel("james-l-brooks", "the-simpsons-tv-series", "produced", "James L. Brooks produced and co-developed the series.", 0.96, 0.92);
rel("sam-simon", "the-simpsons-tv-series", "influenced", "Sam Simon co-developed early Simpsons seasons.", 0.95, 0.9);

rel("the-simpsons-tv-series", "the-simpsons", "part_of", "The TV series is the core of The Simpsons.", 0.99, 0.99);
rel("the-simpsons-movie", "the-simpsons", "part_of", "The movie is part of The Simpsons franchise.", 0.98, 0.95);
rel("simpsons-shorts", "the-simpsons-tv-series", "adapted_into", "The shorts grew into the half-hour series.", 0.96, 0.92);

rel("742-evergreen-terrace", "springfield", "located_in", "The Simpson house is in Springfield.", 0.99, 0.97);
rel("springfield-elementary", "springfield", "located_in", "Springfield Elementary is in Springfield.", 0.98, 0.95);
rel("springfield-nuclear-power-plant", "springfield", "located_in", "The Nuclear Plant is in Springfield.", 0.98, 0.95);
rel("moes-tavern", "springfield", "located_in", "Moe's Tavern is in Springfield.", 0.98, 0.95);
rel("kwik-e-mart", "springfield", "located_in", "The Kwik-E-Mart is in Springfield.", 0.97, 0.93);

rel("homer-simpson", "simpson-family", "member_of", "Homer is the Simpson family patriarch.", 0.99, 0.98);
rel("marge-simpson", "simpson-family", "member_of", "Marge is the Simpson family matriarch.", 0.99, 0.98);
rel("bart-simpson", "simpson-family", "member_of", "Bart is a Simpson child.", 0.99, 0.98);
rel("lisa-simpson", "simpson-family", "member_of", "Lisa is a Simpson child.", 0.99, 0.98);
rel("maggie-simpson", "simpson-family", "member_of", "Maggie is a Simpson child.", 0.99, 0.98);
rel("simpson-family", "742-evergreen-terrace", "located_in", "The family lives at 742 Evergreen Terrace.", 0.98, 0.96);

rel("homer-simpson", "springfield-nuclear-power-plant", "member_of", "Homer works at the Nuclear Plant.", 0.98, 0.96);
rel("mr-burns", "springfield-nuclear-power-plant", "leads", "Mr. Burns owns the Nuclear Plant.", 0.99, 0.97);
rel("waylon-smithers", "mr-burns", "supports", "Smithers assists Mr. Burns.", 0.98, 0.95);
rel("moe-szyslak", "moes-tavern", "leads", "Moe runs Moe's Tavern.", 0.98, 0.95);
rel("apu-nahasapeemapetilon", "kwik-e-mart", "leads", "Apu is tied to the Kwik-E-Mart.", 0.97, 0.94);
rel("bart-simpson", "springfield-elementary", "member_of", "Bart attends Springfield Elementary.", 0.98, 0.95);
rel("principal-skinner", "springfield-elementary", "leads", "Skinner is principal of Springfield Elementary.", 0.98, 0.95);
rel("ned-flanders", "homer-simpson", "connected_to", "Ned is Homer's next-door neighbor.", 0.96, 0.92);
rel("krusty-the-clown", "bart-simpson", "connected_to", "Bart idolizes Krusty the Clown.", 0.95, 0.9);
rel("ralph-wiggum", "chief-wiggum", "connected_to", "Ralph is Chief Wiggum's son.", 0.97, 0.93);
rel("duff-beer", "homer-simpson", "uses", "Homer drinks Duff Beer.", 0.96, 0.92);

module.exports = { entities, relationships };
