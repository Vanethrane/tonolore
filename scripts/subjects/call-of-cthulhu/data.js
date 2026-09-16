/*
 * Call of Cthulhu subject data — Chaosium's Mythos RPG and Lovecraftian horror.
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
    "call-of-cthulhu",
    "Call of Cthulhu",
    "topic",
    "Chaosium's investigative horror RPG of sanity, Mythos, and the 1920s.",
    "Call of Cthulhu is Chaosium's tabletop RPG where investigators uncover Lovecraftian horrors, lose Sanity confronting the Mythos, and face cosmic entities while the Keeper narrates doom-laden mysteries."
);

entity(
    "chaosium",
    "Chaosium",
    "organization",
    "Publisher of Call of Cthulhu and Basic Role-Playing.",
    "Chaosium publishes Call of Cthulhu, Basic Role-Playing, and licensed Mythos supplements, stewarding decades of investigative horror RPG design."
);

entity(
    "sandy-petersen",
    "Sandy Petersen",
    "person",
    "Designer who created Call of Cthulhu.",
    "Sandy Petersen designed Call of Cthulhu, translating H. P. Lovecraft's cosmic horror into percentile skills, Sanity rules, and Mythos tomes."
);

entity(
    "h-p-lovecraft",
    "H. P. Lovecraft",
    "person",
    "Author whose Mythos inspires the RPG.",
    "H. P. Lovecraft wrote the Cthulhu Mythos tales—Arkham, Miskatonic, and cosmic entities—that Call of Cthulhu adapts into playable horror."
);

/* ---------- RPG works / systems ---------- */

entity(
    "call-of-cthulhu-seventh-edition",
    "Call of Cthulhu 7th Edition",
    "work",
    "Current core rules for investigators and Keepers.",
    "Call of Cthulhu 7th Edition refines percentile tests, chase rules, and Sanity mechanics for modern and classic-era investigations."
);

entity(
    "basic-roleplaying",
    "Basic Role-Playing",
    "concept",
    "Percentile system underlying Call of Cthulhu.",
    "Basic Role-Playing (BRP) is Chaosium's d100 skill system powering Call of Cthulhu, emphasizing opposed rolls and gradual character improvement."
);

entity(
    "investigator",
    "Investigator",
    "concept",
    "Player character role in Call of Cthulhu.",
    "Investigators are ordinary scholars, detectives, and dilettantes who stumble into Mythos cases, risking Sanity and lives for terrible truths."
);

entity(
    "keeper",
    "Keeper",
    "concept",
    "Referee who runs Mythos scenarios.",
    "The Keeper narrates Call of Cthulhu, hiding Mythos truths, adjudicating Sanity loss, and orchestrating the slow revelation of cosmic horror."
);

entity(
    "sanity",
    "Sanity",
    "concept",
    "Mental stability eroded by Mythos encounters.",
    "Sanity (SAN) measures an investigator's grip on reality; Mythos shocks, spells, and revelations can inflict temporary or indefinite insanity."
);

entity(
    "mythos-tomes",
    "Mythos Tomes",
    "concept",
    "Forbidden books that teach spells and lore.",
    "Mythos Tomes such as the Necronomicon grant dreadful knowledge, Cthulhu Mythos skill, and spells at the cost of Sanity and attention from cultists."
);

/* ---------- Mythos umbrella ---------- */

entity(
    "lovecraft-mythos",
    "Cthulhu Mythos",
    "concept",
    "Shared cosmic horror cosmology of Lovecraft and successors.",
    "The Cthulhu Mythos is the shared universe of Great Old Ones, cults, and sanity-shattering truths that Lovecraft pioneered and Chaosium games explore."
);

entity(
    "great-old-ones",
    "Great Old Ones",
    "concept",
    "Cosmic entities sleeping or imprisoned on Earth.",
    "Great Old Ones are alien gods—Cthulhu, Yog-Sothoth, and others—whose dreams and cults warp history while they wait to rise."
);

entity(
    "outer-gods",
    "Outer Gods",
    "concept",
    "Ultimate cosmic powers beyond Earth's pantheon.",
    "Outer Gods such as Azathoth and Nyarlathotep embody mindless chaos and cruel purpose, dwarfing even the Great Old Ones in Mythos cosmology."
);

/* ---------- Great entities ---------- */

entity(
    "cthulhu",
    "Cthulhu",
    "person",
    "Sleeping god-dreamer of R'lyeh.",
    "Cthulhu is the octopoid Great Old One entombed in sunken R'lyeh, whose dreams reach sensitive minds and whose cult chants: \"Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.\""
);

entity(
    "nyarlathotep",
    "Nyarlathotep",
    "person",
    "Crawling Chaos and messenger of the Outer Gods.",
    "Nyarlathotep walks among humanity in countless masks, spreading madness and serving the Outer Gods with cruel, personal malice."
);

entity(
    "azathoth",
    "Azathoth",
    "person",
    "Blind idiot god at the center of chaos.",
    "Azathoth is the nuclear chaos at the Mythos center, mindless piping surrounded by fluting servitors—a cosmological doom if roused."
);

entity(
    "yog-sothoth",
    "Yog-Sothoth",
    "person",
    "Gate and key to all time and space.",
    "Yog-Sothoth exists coterminous with all times and places, a bubbling presence whose cults seek breaches between dimensions."
);

entity(
    "shub-niggurath",
    "Shub-Niggurath",
    "person",
    "Black Goat of the Woods with a Thousand Young.",
    "Shub-Niggurath is a fecund Outer God of dark woods and spawning horror, mother of countless monstrous offspring."
);

/* ---------- Places ---------- */

entity(
    "arkham",
    "Arkham",
    "place",
    "Fictional New England town of Mythos tales.",
    "Arkham is Lovecraft's cursed Massachusetts town of witch-cursed hills, Miskatonic University, and gateways to buried horrors."
);

entity(
    "innsmouth",
    "Innsmouth",
    "place",
    "Decaying port of the Deep One pact.",
    "Innsmouth is a rotting Massachusetts fishing town whose people bear the Mark of Dagon after a pact with Deep Ones beneath the sea."
);

entity(
    "dunwich",
    "Dunwich",
    "place",
    "Isolated village of whippoorwill horror.",
    "Dunwich is a backwoods hamlet where Yog-Sothoth's spawn and family curses birth catastrophes on the slopes of Sentinel Hill."
);

entity(
    "miskatonic-university",
    "Miskatonic University",
    "place",
    "Arkham institution of occult scholarship.",
    "Miskatonic University houses restricted tomes, Antarctic expedition records, and professors who meddle in Mythos lore investigators later uncover."
);

entity(
    "rlyeh",
    "R'lyeh",
    "place",
    "Sunken corpse-city of Cthulhu.",
    "R'lyeh is the non-Euclidean sunken city where Cthulhu lies dreaming, its geometry warping sailors who stumble upon rising ruins."
);

entity(
    "antarctica",
    "At the Mountains of Madness",
    "place",
    "Polar wasteland of ancient alien cities.",
    "Lovecraft's Antarctic plateau hides pre-human cities and shoggoth-haunted ruins explored in At the Mountains of Madness—fertile ground for RPG expeditions."
);

/* ---------- Creatures / cult concepts ---------- */

entity(
    "deep-ones",
    "Deep Ones",
    "concept",
    "Amphibious servitors of Father Dagon.",
    "Deep Ones are fish-frog humanoids from undersea cities who trade gold for breeding pacts, corrupting coastal towns like Innsmouth."
);

entity(
    "mi-go",
    "Mi-go",
    "concept",
    "Fungoid aliens who harvest brains.",
    "Mi-go are crab-like fungoid beings from Yuggoth who mine Earth for resources and ferry living brains across interstellar voids."
);

entity(
    "shoggoths",
    "Shoggoths",
    "concept",
    "Protoplasmic slaves of the Elder Things.",
    "Shoggoths are amorphous, eye-studded masses bred as labor, now rebellious horrors lurking in Antarctic and deep places."
);

entity(
    "cult-of-cthulhu",
    "Cult of Cthulhu",
    "organization",
    "Worshipers awaiting the Great Old One's rise.",
    "The Cult of Cthulhu chants at hidden rites, dreams of R'lyeh's surfacing, and opposes investigators who threaten their prophet's awakening."
);

/* ---------- Objects / works ---------- */

entity(
    "necronomicon",
    "Necronomicon",
    "object",
    "Forbidden grimoire of Abdul Alhazred.",
    "The Necronomicon, penned by the Mad Arab Abdul Alhazred, is the archetypal Mythos tome whose pages teach spells and erode Sanity."
);

entity(
    "elder-sign",
    "Elder Sign",
    "object",
    "Warding sigil against Mythos powers.",
    "The Elder Sign is a protective symbol—carved, drawn, or worn—that can repel Mythos entities and mark those who know desperate warding lore."
);

entity(
    "the-call-of-cthulhu-story",
    "The Call of Cthulhu (story)",
    "work",
    "Lovecraft's foundational Mythos tale.",
    "The Call of Cthulhu is Lovecraft's 1928 story framing the Mythos through found documents, a cult in the bayous, and sailors who glimpse risen R'lyeh."
);

entity(
    "shadow-over-innsmouth",
    "The Shadow over Innsmouth",
    "work",
    "Novella of Deep One corruption.",
    "The Shadow over Innsmouth reveals a town's fish-frog heritage and Dagon cult, a cornerstone scenario seed for RPG investigations."
);

entity(
    "mountains-of-madness",
    "At the Mountains of Madness",
    "work",
    "Antarctic expedition novella of Elder Things.",
    "At the Mountains of Madness chronicles Miskatonic's doomed polar expedition and the alien history beneath the ice."
);

/* ---------- Relationships ---------- */

rel("sandy-petersen", "call-of-cthulhu", "created", "Petersen designed Call of Cthulhu.", 0.99, 0.99);
rel("chaosium", "call-of-cthulhu", "publishes", "Chaosium publishes Call of Cthulhu.", 0.99, 0.99);
rel("h-p-lovecraft", "lovecraft-mythos", "created", "Lovecraft originated the Cthulhu Mythos.", 0.99, 0.99);
rel("call-of-cthulhu", "lovecraft-mythos", "adapted_from", "The RPG adapts Lovecraft's Mythos.", 0.98, 0.97);
rel("call-of-cthulhu-seventh-edition", "call-of-cthulhu", "part_of", "7th Edition is the current core rules.", 0.98, 0.97);
rel("basic-roleplaying", "call-of-cthulhu", "part_of", "CoC uses Basic Role-Playing mechanics.", 0.97, 0.95);

rel("investigator", "call-of-cthulhu", "part_of", "Players take the role of investigators.", 0.99, 0.98);
rel("keeper", "call-of-cthulhu", "part_of", "The Keeper runs Call of Cthulhu games.", 0.98, 0.97);
rel("sanity", "call-of-cthulhu", "part_of", "Sanity rules define CoC horror.", 0.98, 0.97);
rel("mythos-tomes", "call-of-cthulhu", "part_of", "Forbidden books are core CoC props.", 0.96, 0.94);

rel("great-old-ones", "lovecraft-mythos", "part_of", "Great Old Ones anchor Mythos cosmology.", 0.98, 0.96);
rel("outer-gods", "lovecraft-mythos", "part_of", "Outer Gods tower over earthly cults.", 0.97, 0.95);
rel("cthulhu", "great-old-ones", "member_of", "Cthulhu is a Great Old One.", 0.99, 0.98);
rel("yog-sothoth", "outer-gods", "member_of", "Yog-Sothoth is an Outer God.", 0.97, 0.95);
rel("azathoth", "outer-gods", "member_of", "Azathoth is an Outer God.", 0.97, 0.95);
rel("shub-niggurath", "outer-gods", "member_of", "Shub-Niggurath is an Outer God.", 0.97, 0.95);
rel("nyarlathotep", "outer-gods", "member_of", "Nyarlathotep serves the Outer Gods.", 0.96, 0.94);

rel("cthulhu", "rlyeh", "located_in", "Cthulhu lies entombed in R'lyeh.", 0.98, 0.96);
rel("rlyeh", "lovecraft-mythos", "located_in", "R'lyeh is a Mythos location in the Pacific.", 0.96, 0.93);
rel("arkham", "lovecraft-mythos", "located_in", "Arkham is a classic Mythos town.", 0.97, 0.95);
rel("innsmouth", "lovecraft-mythos", "located_in", "Innsmouth belongs to Lovecraft's New England.", 0.97, 0.95);
rel("dunwich", "lovecraft-mythos", "located_in", "Dunwich is a Mythos backwoods site.", 0.96, 0.93);
rel("miskatonic-university", "arkham", "located_in", "Miskatonic University stands in Arkham.", 0.98, 0.96);
rel("antarctica", "lovecraft-mythos", "located_in", "Antarctic horrors extend the Mythos.", 0.95, 0.92);

rel("deep-ones", "innsmouth", "connected_to", "Deep Ones corrupt Innsmouth through breeding pacts.", 0.97, 0.95);
rel("cult-of-cthulhu", "cthulhu", "connected_to", "The cult worships dreaming Cthulhu.", 0.98, 0.96);
rel("cult-of-cthulhu", "investigator", "opposed_by", "Investigators thwart Mythos cults.", 0.96, 0.93);
rel("necronomicon", "mythos-tomes", "part_of", "The Necronomicon is the archetypal Mythos tome.", 0.98, 0.97);
rel("necronomicon", "miskatonic-university", "records", "Miskatonic holds restricted copies.", 0.94, 0.9);
rel("elder-sign", "lovecraft-mythos", "related_to", "The Elder Sign wards against Mythos powers.", 0.93, 0.88);

rel("the-call-of-cthulhu-story", "h-p-lovecraft", "created", "Lovecraft wrote The Call of Cthulhu.", 0.99, 0.98);
rel("shadow-over-innsmouth", "h-p-lovecraft", "created", "Lovecraft wrote Shadow over Innsmouth.", 0.99, 0.98);
rel("mountains-of-madness", "h-p-lovecraft", "created", "Lovecraft wrote At the Mountains of Madness.", 0.99, 0.98);
rel("the-call-of-cthulhu-story", "cthulhu", "records", "The story introduces Cthulhu and R'lyeh.", 0.98, 0.96);
rel("shadow-over-innsmouth", "innsmouth", "occurred_at", "The novella is set in Innsmouth.", 0.98, 0.96);
rel("shadow-over-innsmouth", "deep-ones", "records", "The tale reveals Deep One corruption.", 0.97, 0.95);
rel("mountains-of-madness", "antarctica", "occurred_at", "The expedition probes Antarctic ruins.", 0.98, 0.96);
rel("mountains-of-madness", "shoggoths", "records", "The novella describes shoggoth horrors.", 0.97, 0.95);
rel("mi-go", "lovecraft-mythos", "related_to", "Mi-go appear across Mythos tales and RPG scenarios.", 0.94, 0.9);

rel("sanity", "great-old-ones", "related_to", "Seeing Mythos beings costs Sanity.", 0.96, 0.93);
rel("investigator", "miskatonic-university", "connected_to", "Many investigators are Miskatonic affiliates.", 0.92, 0.87);
rel("keeper", "lovecraft-mythos", "uses", "Keepers deploy Mythos lore in scenarios.", 0.95, 0.91);
rel("nyarlathotep", "investigator", "opposed_by", "Nyarlathotep's schemes target humanity.", 0.94, 0.9);

module.exports = { entities, relationships };
