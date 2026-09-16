/*
 * DC / Batman subject data — DC Comics with Batman at the center.
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
    "dc",
    "DC / Batman",
    "topic",
    "DC Comics world centered on Batman, Gotham, and the Justice League.",
    "DC / Batman covers the DC Comics universe with Batman, Bruce Wayne, Gotham, the Bat-Family, and wider icons like Superman, Wonder Woman, and the Justice League."
);

entity(
    "bob-kane",
    "Bob Kane",
    "person",
    "Credited co-creator of Batman.",
    "Bob Kane is the long-credited co-creator of Batman and Bruce Wayne, working with Bill Finger on the early Gotham mythos published by DC Comics.",
    "documented"
);

entity(
    "bill-finger",
    "Bill Finger",
    "person",
    "Writer who shaped Batman's origin and world.",
    "Bill Finger co-created much of Batman's identity—the costume details, Gotham tone, and early villains—alongside Bob Kane for DC Comics.",
    "documented"
);

entity(
    "dc-comics",
    "DC Comics",
    "organization",
    "Publisher of Batman, Superman, and the Justice League.",
    "DC Comics publishes Batman, Superman, Wonder Woman, and the shared universe that includes Gotham, Metropolis, and the Justice League.",
    "documented"
);

/* ---------- Batman core ---------- */

entity(
    "batman",
    "Batman",
    "person",
    "Gotham's Dark Knight vigilante.",
    "Batman is Bruce Wayne's crusading alter ego, operating from the Batcave with Alfred Pennyworth, the Bat-Family, and the Batmobile against the Joker and Gotham's rogues."
);

entity(
    "bruce-wayne",
    "Bruce Wayne",
    "person",
    "Billionaire public face of Batman.",
    "Bruce Wayne is the orphaned Gotham industrialist who becomes Batman, funding the Batcave, Batmobile, and the Bat-Family's war on crime."
);

entity(
    "gotham",
    "Gotham City",
    "place",
    "Crime-shadowed city Batman protects.",
    "Gotham City is Batman's dark metropolis—home to the Batcave, Arkham Asylum, Jim Gordon's police work, and villains like the Joker, Penguin, and Riddler."
);

entity(
    "batcave",
    "Batcave",
    "place",
    "Batman's subterranean headquarters.",
    "The Batcave beneath Wayne property is Batman's base, housing the Batmobile, trophies, and the Bat-Family's operations in Gotham."
);

entity(
    "alfred-pennyworth",
    "Alfred Pennyworth",
    "person",
    "Butler, medic, and confidant to Batman.",
    "Alfred Pennyworth tends Bruce Wayne and Batman, keeping the Batcave running and anchoring the Bat-Family with dry wit and care."
);

entity(
    "bat-family",
    "Bat-Family",
    "organization",
    "Allies fighting crime under Batman's banner.",
    "The Bat-Family includes Nightwing, Robin, Batgirl, and others who share Batman's mission across Gotham under Alfred Pennyworth's watch."
);

entity(
    "nightwing",
    "Nightwing",
    "person",
    "Dick Grayson; former Robin turned hero.",
    "Nightwing is Dick Grayson, the first Robin who leaves Batman's shadow to lead as his own hero while remaining Bat-Family."
);

entity(
    "robin",
    "Robin",
    "person",
    "Batman's young partner mantle.",
    "Robin is the partner identity worn by Dick Grayson and later successors beside Batman in Gotham as part of the Bat-Family."
);

entity(
    "batgirl",
    "Batgirl",
    "person",
    "Gotham heroine of the Bat-Family.",
    "Batgirl—most famously Barbara Gordon—fights beside Batman and Nightwing, linking Jim Gordon's household to the Bat-Family."
);

entity(
    "batmobile",
    "Batmobile",
    "object",
    "Batman's signature combat vehicle.",
    "The Batmobile is Batman's armored car, launching from the Batcave into Gotham chases against the Penguin, Riddler, and other foes."
);

entity(
    "jim-gordon",
    "Jim Gordon",
    "person",
    "Gotham police commissioner and Batman ally.",
    "Jim Gordon is Gotham's steadfast commissioner who signals Batman from rooftops and fathers Batgirl Barbara Gordon."
);

/* ---------- Rogues / places ---------- */

entity(
    "joker",
    "Joker",
    "person",
    "Batman's clown prince of crime.",
    "The Joker is Batman's chaotic archfoe in Gotham, often tied to Harley Quinn and Arkham Asylum's revolving door."
);

entity(
    "harley-quinn",
    "Harley Quinn",
    "person",
    "Joker accomplice turned antihero.",
    "Harley Quinn begins as the Joker's partner in Gotham crime before carving her own path across DC stories."
);

entity(
    "catwoman",
    "Catwoman",
    "person",
    "Selina Kyle; thief and Batman's foil.",
    "Catwoman is Selina Kyle, a Gotham cat burglar whose romance and rivalry with Batman blur hero and outlaw lines."
);

entity(
    "penguin",
    "Penguin",
    "person",
    "Oswald Cobblepot; Gotham crime boss.",
    "The Penguin runs underworld clubs and schemes in Gotham, a perennial target of Batman and Jim Gordon."
);

entity(
    "riddler",
    "Riddler",
    "person",
    "Edward Nygma; puzzle-obsessed criminal.",
    "The Riddler taunts Batman with riddles and traps across Gotham, often cycling through Arkham Asylum."
);

entity(
    "two-face",
    "Two-Face",
    "person",
    "Harvey Dent; coin-flip crime lord.",
    "Two-Face is fallen DA Harvey Dent, whose dual nature haunts Batman and Gotham's justice system."
);

entity(
    "arkham-asylum",
    "Arkham Asylum",
    "place",
    "Gotham's notorious psychiatric prison.",
    "Arkham Asylum cages—or fails to hold—the Joker, Riddler, Two-Face, and Harley Quinn on the edge of Gotham."
);

/* ---------- Wider DC ---------- */

entity(
    "superman",
    "Superman",
    "person",
    "Clark Kent; Metropolis's Man of Steel.",
    "Superman protects Metropolis and co-founds the Justice League, often contrasting Batman's darkness with hope."
);

entity(
    "wonder-woman",
    "Wonder Woman",
    "person",
    "Diana of Themyscira; Amazon champion.",
    "Wonder Woman is Diana of Themyscira, a Justice League pillar who bridges Themyscira and the world of Superman and Batman."
);

entity(
    "justice-league",
    "Justice League",
    "organization",
    "DC's premier superhero team.",
    "The Justice League unites Batman, Superman, Wonder Woman, and other heroes against threats beyond any single city."
);

entity(
    "metropolis",
    "Metropolis",
    "place",
    "Superman's gleaming home city.",
    "Metropolis is Superman's city and Lex Luthor's corporate playground, a bright counterpart to Gotham."
);

entity(
    "themyscira",
    "Themyscira",
    "place",
    "Amazon island home of Wonder Woman.",
    "Themyscira is the hidden island that raises Wonder Woman before she joins the Justice League's wider world."
);

entity(
    "lex-luthor",
    "Lex Luthor",
    "person",
    "Metropolis tycoon and Superman's nemesis.",
    "Lex Luthor schemes against Superman from Metropolis boardrooms, sometimes brushing the Justice League and Batman's orbit."
);

entity(
    "detective-comics",
    "Detective Comics",
    "work",
    "Anthology that introduced Batman.",
    "Detective Comics is the DC Comics series that debuted Batman, anchoring Gotham's long publishing history."
);

entity(
    "gotham-city-police",
    "Gotham City Police Department",
    "organization",
    "GCPD under Commissioner Gordon.",
    "The Gotham City Police Department, led by Jim Gordon, is Batman's uneasy official ally against the Joker and organized crime."
);

entity(
    "wayne-enterprises",
    "Wayne Enterprises",
    "organization",
    "Bruce Wayne's company funding Batman.",
    "Wayne Enterprises is Bruce Wayne's corporate empire, quietly bankrolling Batman, the Batcave, and Batmobile technology."
);

/* ---------- Relationships ---------- */

rel("bob-kane", "batman", "created", "Bob Kane is credited with co-creating Batman.", 0.98, 0.96);
rel("bill-finger", "batman", "created", "Bill Finger shaped Batman's early mythos.", 0.99, 0.97);
rel("dc-comics", "dc", "produced", "DC Comics publishes the DC Universe.", 0.99, 0.98);
rel("batman", "dc", "part_of", "Batman is central to DC / Batman.", 0.99, 0.99);
rel("detective-comics", "batman", "part_of", "Detective Comics introduced Batman.", 0.98, 0.95);

rel("bruce-wayne", "batman", "connected_to", "Bruce Wayne is Batman.", 0.99, 0.99);
rel("batman", "gotham", "located_in", "Batman protects Gotham City.", 0.99, 0.98);
rel("batcave", "gotham", "located_in", "The Batcave lies beneath Gotham.", 0.98, 0.96);
rel("alfred-pennyworth", "batman", "supports", "Alfred supports Batman and Bruce Wayne.", 0.99, 0.97);
rel("batman", "bat-family", "leads", "Batman leads the Bat-Family.", 0.98, 0.96);
rel("nightwing", "bat-family", "member_of", "Nightwing is Bat-Family.", 0.98, 0.95);
rel("robin", "bat-family", "member_of", "Robin is Bat-Family.", 0.98, 0.95);
rel("batgirl", "bat-family", "member_of", "Batgirl is Bat-Family.", 0.98, 0.95);
rel("batmobile", "batman", "uses", "Batman drives the Batmobile.", 0.99, 0.97);
rel("jim-gordon", "gotham-city-police", "leads", "Jim Gordon leads the GCPD.", 0.98, 0.96);
rel("jim-gordon", "batman", "supports", "Gordon allies with Batman.", 0.97, 0.94);
rel("bruce-wayne", "wayne-enterprises", "leads", "Bruce Wayne runs Wayne Enterprises.", 0.97, 0.94);

rel("joker", "batman", "opposed_by", "The Joker is Batman's archenemy.", 0.99, 0.98);
rel("harley-quinn", "joker", "connected_to", "Harley Quinn is tied to the Joker.", 0.97, 0.94);
rel("catwoman", "batman", "connected_to", "Catwoman is Batman's romantic foil.", 0.96, 0.92);
rel("penguin", "batman", "opposed_by", "The Penguin wars with Batman.", 0.96, 0.92);
rel("riddler", "batman", "opposed_by", "The Riddler challenges Batman.", 0.96, 0.92);
rel("two-face", "batman", "opposed_by", "Two-Face opposes Batman.", 0.96, 0.92);
rel("arkham-asylum", "gotham", "located_in", "Arkham Asylum sits in Gotham.", 0.98, 0.95);
rel("joker", "arkham-asylum", "located_in", "The Joker is often held in Arkham.", 0.95, 0.9);

rel("superman", "justice-league", "member_of", "Superman co-founds the Justice League.", 0.98, 0.96);
rel("batman", "justice-league", "member_of", "Batman is a Justice League founder.", 0.98, 0.96);
rel("wonder-woman", "justice-league", "member_of", "Wonder Woman is a Justice League pillar.", 0.98, 0.96);
rel("superman", "metropolis", "located_in", "Superman protects Metropolis.", 0.99, 0.97);
rel("lex-luthor", "superman", "opposed_by", "Lex Luthor opposes Superman.", 0.99, 0.97);
rel("lex-luthor", "metropolis", "located_in", "Lex Luthor schemes from Metropolis.", 0.97, 0.93);
rel("wonder-woman", "themyscira", "located_in", "Wonder Woman hails from Themyscira.", 0.98, 0.96);

module.exports = { entities, relationships };
