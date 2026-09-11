/*
 * Wheel of Time subject data — Robert Jordan's epic fantasy series.
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
    "wheel-of-time",
    "The Wheel of Time",
    "topic",
    "Robert Jordan's epic fantasy of the Dragon Reborn and the Last Battle.",
    "The Wheel of Time is the fantasy series begun by Robert Jordan and completed by Brandon Sanderson, following Rand al'Thor, the Dragon Reborn, and companions Mat, Perrin, Egwene, and Nynaeve as the Pattern turns toward Tarmon Gai'don."
);

entity(
    "robert-jordan",
    "Robert Jordan",
    "person",
    "Creator of The Wheel of Time.",
    "Robert Jordan (James Oliver Rigney Jr.) created The Wheel of Time, writing from The Eye of the World through Knife of Dreams before his death; Brandon Sanderson later finished the final volumes from Jordan's notes."
);

entity(
    "harriet-mcdougal",
    "Harriet McDougal",
    "person",
    "Editor and widow of Robert Jordan; steward of the series.",
    "Harriet McDougal edited The Wheel of Time and helped guide the completion of A Memory of Light after Robert Jordan's death."
);

/* ---------- Works ---------- */

entity(
    "the-eye-of-the-world",
    "The Eye of the World",
    "work",
    "First novel of The Wheel of Time.",
    "The Eye of the World opens in the Two Rivers as Moiraine takes Rand, Mat, and Perrin toward destiny as Trollocs and the Dark One's touch reach Emond's Field."
);

entity(
    "the-great-hunt",
    "The Great Hunt",
    "work",
    "Second novel; the Horn of Valere.",
    "The Great Hunt follows the pursuit of the Horn of Valere and deepens Rand's path as the Dragon Reborn."
);

entity(
    "the-dragon-reborn",
    "The Dragon Reborn",
    "work",
    "Third novel; Rand claims the title.",
    "The Dragon Reborn centers on Rand accepting his role while Mat, Perrin, Egwene, and Nynaeve face their own turning points."
);

entity(
    "the-shadow-rising",
    "The Shadow Rising",
    "work",
    "Fourth novel; Aiel Waste and Two Rivers war.",
    "The Shadow Rising sends Rand into the Aiel Waste and Rhuidean while Perrin returns to defend the Two Rivers."
);

entity(
    "the-fires-of-heaven",
    "The Fires of Heaven",
    "work",
    "Fifth novel; Cairhien and the Forsaken.",
    "The Fires of Heaven follows Rand's campaigns and the struggle against Forsaken such as Rahvin and Lanfear."
);

entity(
    "lord-of-chaos",
    "Lord of Chaos",
    "work",
    "Sixth novel; Dumai's Wells.",
    "Lord of Chaos escalates Aes Sedai politics and culminates at Dumai's Wells, reshaping Rand's war against the Shadow."
);

entity(
    "a-crown-of-swords",
    "A Crown of Swords",
    "work",
    "Seventh novel; Illian and Sammael.",
    "A Crown of Swords continues Rand's campaign against the Forsaken and the scramble for power around the thrones of the Westlands."
);

entity(
    "the-path-of-daggers",
    "The Path of Daggers",
    "work",
    "Eighth novel; Seanchan and the Bowl of the Winds.",
    "The Path of Daggers follows the struggle to restore weather with the Bowl of the Winds and Rising Seanchan pressure."
);

entity(
    "winters-heart",
    "Winter's Heart",
    "work",
    "Ninth novel; cleansing saidin.",
    "Winter's Heart features Rand and Nynaeve's cleansing of saidin at Shadar Logoth, a turning point for male channelers."
);

entity(
    "crossroads-of-twilight",
    "Crossroads of Twilight",
    "work",
    "Tenth novel; aftermath and gathering forces.",
    "Crossroads of Twilight tracks the political and military aftermath across nations as the Last Battle draws nearer."
);

entity(
    "knife-of-dreams",
    "Knife of Dreams",
    "work",
    "Eleventh novel; last book finished by Jordan.",
    "Knife of Dreams was the final Wheel of Time novel completed by Robert Jordan, advancing Mat, Perrin, Egwene, and Rand toward Tarmon Gai'don."
);

entity(
    "the-gathering-storm",
    "The Gathering Storm",
    "work",
    "Twelfth novel; first completed by Sanderson.",
    "The Gathering Storm, completed by Brandon Sanderson from Jordan's notes, focuses on Rand's breaking point and Egwene's rise in the White Tower."
);

entity(
    "towers-of-midnight",
    "Towers of Midnight",
    "work",
    "Thirteenth novel; converging plots.",
    "Towers of Midnight weaves Mat, Perrin, Egwene, and Rand's arcs toward the Last Battle."
);

entity(
    "a-memory-of-light",
    "A Memory of Light",
    "work",
    "Final novel; Tarmon Gai'don.",
    "A Memory of Light concludes The Wheel of Time with the Last Battle at Shayol Ghul and the fate of the Dragon Reborn."
);

entity(
    "new-spring",
    "New Spring",
    "work",
    "Prequel novella/novel of Moiraine and Lan.",
    "New Spring tells of Moiraine Damodred and Lan Mandragoran in the years before The Eye of the World."
);

/* ---------- Concepts ---------- */

entity(
    "one-power",
    "One Power",
    "concept",
    "The energy drawn from the True Source.",
    "The One Power is drawn from the True Source as saidin and saidar, fueling channeling by Aes Sedai, Asha'man, and other channelers."
);

entity(
    "true-source",
    "True Source",
    "concept",
    "The wellspring of the One Power.",
    "The True Source drives the Wheel of Time; channelers touch it as saidin (male) or saidar (female)."
);

entity(
    "saidin",
    "Saidin",
    "concept",
    "Male half of the One Power.",
    "Saidin is the male half of the One Power, tainted by the Dark One until Rand and Nynaeve cleanse it in Winter's Heart."
);

entity(
    "saidar",
    "Saidar",
    "concept",
    "Female half of the One Power.",
    "Saidar is the female half of the One Power used by Aes Sedai, Wise Ones, Windfinders, and other women who can channel."
);

entity(
    "the-pattern",
    "The Pattern",
    "concept",
    "The weaving of ages spun by the Wheel.",
    "The Pattern is the design woven by the Wheel of Time from the lives of people; ta'veren bend its threads around them."
);

entity(
    "taveren",
    "Ta'veren",
    "concept",
    "People around whom the Pattern bends.",
    "Ta'veren such as Rand, Mat, and Perrin pull destiny and chance toward themselves as the Pattern drives the Age toward the Last Battle."
);

entity(
    "dragon-reborn",
    "Dragon Reborn",
    "concept",
    "Rebirth of Lews Therin Telamon to face the Dark One.",
    "The Dragon Reborn is the prophesied rebirth of Lews Therin Telamon — Rand al'Thor — destined to confront the Dark One at Tarmon Gai'don."
);

entity(
    "dark-one",
    "Dark One",
    "mystery",
    "Shai'tan; imprisoned enemy of the Light.",
    "The Dark One, called Shai'tan, is sealed outside the Pattern at Shayol Ghul and works through the Forsaken, Shadowspawn, and the Black Ajah."
);

entity(
    "tarmon-gaidon",
    "Tarmon Gai'don",
    "event",
    "The Last Battle.",
    "Tarmon Gai'don is the Last Battle between the Light and the Shadow, centered on Shayol Ghul and the fate of the Dragon Reborn."
);

entity(
    "channeling",
    "Channeling",
    "concept",
    "Using the One Power.",
    "Channeling is the act of drawing and weaving saidin or saidar; strength, skill, and linking shape battles from Tar Valon to Shayol Ghul."
);

entity(
    "angreal",
    "Angreal",
    "object",
    "Artifacts that amplify the One Power.",
    "Angreal, sa'angreal, and ter'angreal are Age of Legends artifacts that amplify or focus channeling."
);

entity(
    "horn-of-valere",
    "Horn of Valere",
    "object",
    "Horn that calls the Heroes of the Horn.",
    "The Horn of Valere summons the Heroes of the Horn to fight for the Light when blown by the right person in need."
);

/* ---------- Places ---------- */

entity(
    "two-rivers",
    "Two Rivers",
    "place",
    "Isolated homeland of Rand, Mat, and Perrin.",
    "The Two Rivers, including Emond's Field, is the quiet homeland from which Rand al'Thor, Mat Cauthon, and Perrin Aybara are drawn into the Pattern."
);

entity(
    "emonds-field",
    "Emond's Field",
    "place",
    "Village at the heart of the Two Rivers.",
    "Emond's Field is the village where the series begins, later defended by Perrin against Trollocs and Whitecloaks."
);

entity(
    "tar-valon",
    "Tar Valon",
    "place",
    "Island city of the Aes Sedai.",
    "Tar Valon is the city of the White Tower, seat of Aes Sedai power on the River Erinin."
);

entity(
    "white-tower",
    "White Tower",
    "place",
    "Aes Sedai headquarters in Tar Valon.",
    "The White Tower trains Aes Sedai, houses the Amyrlin Seat, and is torn by the schism and Black Ajah intrigue."
);

entity(
    "caemlyn",
    "Caemlyn",
    "place",
    "Capital of Andor.",
    "Caemlyn is the capital of Andor, home of Elayne Trakand and a major political center of the Westlands."
);

entity(
    "tear-city",
    "Tear",
    "place",
    "City and nation of the Stone of Tear.",
    "Tear holds the Stone of Tear and Callandor; Rand's taking of the Stone marks a major step as the Dragon Reborn."
);

entity(
    "cairhien",
    "Cairhien",
    "place",
    "Nation of the Rising Sun and Daes Dae'mar.",
    "Cairhien is known for the Game of Houses and becomes central to Rand's campaigns and Aiel involvement."
);

entity(
    "aiel-waste",
    "Aiel Waste",
    "place",
    "Desert homeland of the Aiel.",
    "The Aiel Waste, or Three-fold Land, is the harsh desert home of the Aiel clans and the path to Rhuidean."
);

entity(
    "rhuidean",
    "Rhuidean",
    "place",
    "Forbidden city of Aiel revelation.",
    "Rhuidean holds the history of the Aiel and the ter'angreal that reveal the past to clan chiefs and Wise Ones."
);

entity(
    "shayol-ghul",
    "Shayol Ghul",
    "place",
    "Mountain of the Dark One's prison.",
    "Shayol Ghul is the blighted mountain where the Dark One's prison can be touched and where the Last Battle reaches its climax."
);

entity(
    "shadar-logoth",
    "Shadar Logoth",
    "place",
    "Cursed dead city of Mashadar.",
    "Shadar Logoth is the ruined city tainted by Mashadar, later crucial to the cleansing of saidin."
);

entity(
    "illian",
    "Illian",
    "place",
    "Coastal nation claimed by Rand.",
    "Illian is a southern coastal nation where Rand confronts Sammael and takes a crown among his titles."
);

/* ---------- Organizations / peoples ---------- */

entity(
    "aes-sedai",
    "Aes Sedai",
    "organization",
    "Female channelers of the White Tower.",
    "Aes Sedai are women who can channel, organized by Ajah in the White Tower, wielding saidar and shaping politics across the Westlands."
);

entity(
    "ajah",
    "Ajah",
    "organization",
    "Color-coded societies within the Aes Sedai.",
    "The Ajahs — Blue, Red, Green, Yellow, Brown, Gray, White, and the secret Black — divide Aes Sedai by purpose and loyalty."
);

entity(
    "black-ajah",
    "Black Ajah",
    "organization",
    "Secret Aes Sedai sworn to the Dark One.",
    "The Black Ajah are Aes Sedai who serve the Dark One in secret, opposing the Tower from within."
);

entity(
    "ashaman",
    "Asha'man",
    "organization",
    "Male channelers trained at the Black Tower.",
    "Asha'man are men who can channel, trained under Rand's Black Tower after the taint on saidin begins to lift."
);

entity(
    "aiel",
    "Aiel",
    "organization",
    "Desert warriors of the Three-fold Land.",
    "The Aiel are clan-based warriors of the Waste, bound by ji'e'toh and prophecy around He Who Comes With the Dawn."
);

entity(
    "seanchan",
    "Seanchan",
    "organization",
    "Empire from across the Aryth Ocean.",
    "The Seanchan return from across the Aryth Ocean to reclaim the Westlands, using damane and the Ever Victorious Army."
);

entity(
    "children-of-the-light",
    "Children of the Light",
    "organization",
    "Whitecloaks who hunt Darkfriends and channelers.",
    "The Children of the Light, or Whitecloaks, are a militant order that persecutes suspected Darkfriends and Aes Sedai."
);

entity(
    "forsaken",
    "Forsaken",
    "organization",
    "Thirteen powerful channelers sworn to the Dark One.",
    "The Forsaken (Chosen) are the most powerful servants of the Dark One from the Age of Legends, including Ishamael, Lanfear, Demandred, and others."
);

entity(
    "darkfriends",
    "Darkfriends",
    "organization",
    "Mortals sworn to the Shadow.",
    "Darkfriends are people who secretly serve the Dark One, ranging from common spies to high-placed traitors."
);

/* ---------- Characters ---------- */

entity(
    "rand-althor",
    "Rand al'Thor",
    "person",
    "The Dragon Reborn.",
    "Rand al'Thor of the Two Rivers is the Dragon Reborn, a ta'veren and male channeler destined to face the Dark One at Tarmon Gai'don."
);

entity(
    "mat-cauthon",
    "Mat Cauthon",
    "person",
    "Ta'veren gambler and general.",
    "Matrim Cauthon is a ta'veren whose luck, memories of past generals, and the Horn of Valere pull him into command and the Last Battle."
);

entity(
    "perrin-aybara",
    "Perrin Aybara",
    "person",
    "Ta'veren wolfbrother and lord of the Two Rivers.",
    "Perrin Aybara is a ta'veren wolfbrother who becomes a leader in the Two Rivers and a key commander in the Last Battle."
);

entity(
    "egwene-alvere",
    "Egwene al'Vere",
    "person",
    "Amyrlin Seat from Emond's Field.",
    "Egwene al'Vere rises from Emond's Field novice to Amyrlin Seat, leading Aes Sedai through schism toward the Last Battle."
);

entity(
    "nynaeve-almeara",
    "Nynaeve al'Meara",
    "person",
    "Wisdom and one of the strongest channelers.",
    "Nynaeve al'Meara is the Wisdom of Emond's Field who becomes one of the most powerful channelers of the Age and helps cleanse saidin."
);

entity(
    "moiraine-damodred",
    "Moiraine Damodred",
    "person",
    "Aes Sedai who finds the Dragon Reborn.",
    "Moiraine Damodred of the Blue Ajah seeks the Dragon Reborn in the Two Rivers and guides Rand early on the road."
);

entity(
    "lan-mandragoran",
    "Lan Mandragoran",
    "person",
    "Uncrowned King of Malkier; Warder to Moiraine.",
    "al'Lan Mandragoran is the last king of fallen Malkier, Warder to Moiraine, and later a leader against the Shadow."
);

entity(
    "thom-merrilin",
    "Thom Merrilin",
    "person",
    "Gleeman and former Court Bard.",
    "Thom Merrilin is a gleeman and former Andoran Court Bard who aids the Emond's Fielders with lore, knives, and politics."
);

entity(
    "elayne-trakand",
    "Elayne Trakand",
    "person",
    "Daughter-Heir and Queen of Andor.",
    "Elayne Trakand is Daughter-Heir and later Queen of Andor, a skilled channeler and one of Rand's loves."
);

entity(
    "aviendha",
    "Aviendha",
    "person",
    "Aiel Wise One apprentice bound to Rand.",
    "Aviendha is an Aiel Maiden turned Wise One apprentice whose fate is tightly woven with Rand and Elayne."
);

entity(
    "min-farshaw",
    "Min Farshaw",
    "person",
    "Viewer of auras and one of Rand's three loves.",
    "Min Farshaw sees auras and viewings of the Pattern and becomes one of Rand al'Thor's three loves."
);

entity(
    "loial",
    "Loial",
    "person",
    "Ogir of Stedding Shangtai.",
    "Loial son of Arent son of Halan is an Ogier who joins Rand's company, records history, and fights for the groves."
);

entity(
    "faile-bashere",
    "Faile Bashere",
    "person",
    "Perrin's wife; Saldaean noble.",
    "Zarine 'Faile' Bashere is a Saldaean noble who marries Perrin and shares leadership in the Two Rivers and beyond."
);

entity(
    "tuon",
    "Tuon",
    "person",
    "Daughter of the Nine Moons; Seanchan empress.",
    "Tuon Athaem Kore Paendrag, later Fortuona, is the Seanchan Daughter of the Nine Moons who binds Mat into the empire's fate."
);

entity(
    "ishamael",
    "Ishamael",
    "person",
    "Foremost Forsaken; Ba'alzamon.",
    "Ishamael, also called Ba'alzamon and later Moridin, is the most powerful Forsaken and Rand's recurring Shadow counterpart."
);

entity(
    "lanfear",
    "Lanfear",
    "person",
    "Forsaken once loved by Lews Therin.",
    "Lanfear, formerly Mierin Eronaile, is a Forsaken obsessed with Lews Therin and Rand, among the strongest female channelers."
);

entity(
    "demandred",
    "Demandred",
    "person",
    "Forsaken general rival to Lews Therin.",
    "Demandred is a Forsaken war-leader whose rivalry with Lews Therin shapes Shadow strategy in the Last Battle."
);

entity(
    "lews-therin-telamon",
    "Lews Therin Telamon",
    "person",
    "The Dragon of the Age of Legends.",
    "Lews Therin Telamon was the Dragon of the Age of Legends whose struggle with the Dark One and the Breaking haunt Rand as the Dragon Reborn."
);

entity(
    "padan-fain",
    "Padan Fain",
    "person",
    "Darkfriend twisted by Shadar Logoth.",
    "Padan Fain is a Darkfriend peddler corrupted further by Shadar Logoth, becoming a unique threat beyond ordinary Shadow servants."
);

entity(
    "siuan-sanche",
    "Siuan Sanche",
    "person",
    "Amyrlin Seat who set Moiraine's search in motion.",
    "Siuan Sanche serves as Amyrlin Seat and conspires with Moiraine to find the Dragon Reborn before being deposed and later aiding Egwene."
);

entity(
    "cadsuane-melaidhrin",
    "Cadsuane Melaidhrin",
    "person",
    "Legendary Green Ajah Aes Sedai.",
    "Cadsuane Melaidhrin is a legendary Aes Sedai who forces her way into Rand's circle to harden him for the Last Battle."
);

entity(
    "verin-mathwin",
    "Verin Mathwin",
    "person",
    "Brown Ajah Aes Sedai with a hidden war on the Shadow.",
    "Verin Mathwin appears a mild Brown sister while waging a long, secret campaign against the Black Ajah and the Shadow."
);

/* ---------- Relationships ---------- */

rel("robert-jordan", "wheel-of-time", "created", "Robert Jordan created The Wheel of Time.", 0.99, 0.99);
rel("robert-jordan", "the-eye-of-the-world", "created", "Jordan wrote The Eye of the World.", 0.99, 0.98);
rel("robert-jordan", "knife-of-dreams", "created", "Knife of Dreams was the last novel Jordan completed.", 0.99, 0.96);
rel("robert-jordan", "new-spring", "created", "Jordan wrote New Spring.", 0.98, 0.94);
rel("harriet-mcdougal", "wheel-of-time", "influenced", "Harriet McDougal edited and stewarded The Wheel of Time.", 0.95, 0.9);

const books = [
    "the-eye-of-the-world",
    "the-great-hunt",
    "the-dragon-reborn",
    "the-shadow-rising",
    "the-fires-of-heaven",
    "lord-of-chaos",
    "a-crown-of-swords",
    "the-path-of-daggers",
    "winters-heart",
    "crossroads-of-twilight",
    "knife-of-dreams",
    "the-gathering-storm",
    "towers-of-midnight",
    "a-memory-of-light",
    "new-spring"
];
for (const book of books) {
    rel(book, "wheel-of-time", "part_of", `${book} is part of The Wheel of Time.`, 0.99, 0.95);
}

rel("the-eye-of-the-world", "the-great-hunt", "followed", "The Great Hunt follows The Eye of the World.", 0.99, 0.95);
rel("the-great-hunt", "the-dragon-reborn", "followed", "The Dragon Reborn follows The Great Hunt.", 0.99, 0.95);
rel("the-dragon-reborn", "the-shadow-rising", "followed", "The Shadow Rising follows The Dragon Reborn.", 0.99, 0.95);
rel("the-shadow-rising", "the-fires-of-heaven", "followed", "The Fires of Heaven follows The Shadow Rising.", 0.99, 0.95);
rel("the-fires-of-heaven", "lord-of-chaos", "followed", "Lord of Chaos follows The Fires of Heaven.", 0.99, 0.95);
rel("lord-of-chaos", "a-crown-of-swords", "followed", "A Crown of Swords follows Lord of Chaos.", 0.99, 0.95);
rel("a-crown-of-swords", "the-path-of-daggers", "followed", "The Path of Daggers follows A Crown of Swords.", 0.99, 0.95);
rel("the-path-of-daggers", "winters-heart", "followed", "Winter's Heart follows The Path of Daggers.", 0.99, 0.95);
rel("winters-heart", "crossroads-of-twilight", "followed", "Crossroads of Twilight follows Winter's Heart.", 0.99, 0.95);
rel("crossroads-of-twilight", "knife-of-dreams", "followed", "Knife of Dreams follows Crossroads of Twilight.", 0.99, 0.95);
rel("knife-of-dreams", "the-gathering-storm", "followed", "The Gathering Storm follows Knife of Dreams.", 0.99, 0.95);
rel("the-gathering-storm", "towers-of-midnight", "followed", "Towers of Midnight follows The Gathering Storm.", 0.99, 0.95);
rel("towers-of-midnight", "a-memory-of-light", "followed", "A Memory of Light follows Towers of Midnight.", 0.99, 0.95);

rel("one-power", "true-source", "part_of", "The One Power is drawn from the True Source.", 0.99, 0.97);
rel("saidin", "one-power", "part_of", "Saidin is the male half of the One Power.", 0.99, 0.97);
rel("saidar", "one-power", "part_of", "Saidar is the female half of the One Power.", 0.99, 0.97);
rel("channeling", "one-power", "uses", "Channeling uses the One Power.", 0.99, 0.96);
rel("taveren", "the-pattern", "part_of", "Ta'veren are foci of the Pattern.", 0.98, 0.95);
rel("dragon-reborn", "wheel-of-time", "part_of", "The Dragon Reborn is central to The Wheel of Time.", 0.99, 0.98);
rel("dark-one", "wheel-of-time", "opposed_by", "The Dark One is the Shadow opposing the Light.", 0.99, 0.98);
rel("tarmon-gaidon", "dark-one", "opposed_by", "Tarmon Gai'don is the Last Battle against the Dark One.", 0.99, 0.97);
rel("tarmon-gaidon", "a-memory-of-light", "occurred_at", "The Last Battle climaxes in A Memory of Light.", 0.98, 0.95);
rel("angreal", "one-power", "uses", "Angreal amplify the One Power.", 0.97, 0.93);
rel("horn-of-valere", "the-great-hunt", "involved", "The Horn of Valere drives The Great Hunt.", 0.97, 0.94);

rel("emonds-field", "two-rivers", "located_in", "Emond's Field is in the Two Rivers.", 0.99, 0.97);
rel("white-tower", "tar-valon", "located_in", "The White Tower stands in Tar Valon.", 0.99, 0.98);
rel("aes-sedai", "white-tower", "located_in", "Aes Sedai are based in the White Tower.", 0.98, 0.96);
rel("ajah", "aes-sedai", "part_of", "Ajahs organize the Aes Sedai.", 0.98, 0.95);
rel("black-ajah", "aes-sedai", "part_of", "The Black Ajah hides among Aes Sedai.", 0.98, 0.95);
rel("black-ajah", "dark-one", "member_of", "The Black Ajah serves the Dark One.", 0.97, 0.94);
rel("rhuidean", "aiel-waste", "located_in", "Rhuidean lies in the Aiel Waste.", 0.99, 0.96);
rel("aiel", "aiel-waste", "located_in", "The Aiel dwell in the Aiel Waste.", 0.99, 0.96);
rel("forsaken", "dark-one", "member_of", "The Forsaken serve the Dark One.", 0.99, 0.97);
rel("darkfriends", "dark-one", "member_of", "Darkfriends serve the Dark One.", 0.97, 0.93);
rel("ashaman", "rand-althor", "leads", "Rand founded the Asha'man.", 0.96, 0.92);
rel("shayol-ghul", "dark-one", "located_in", "Shayol Ghul is where the Dark One's prison is touched.", 0.98, 0.96);

rel("rand-althor", "dragon-reborn", "connected_to", "Rand al'Thor is the Dragon Reborn.", 0.99, 0.99);
rel("rand-althor", "taveren", "connected_to", "Rand is ta'veren.", 0.99, 0.97);
rel("mat-cauthon", "taveren", "connected_to", "Mat is ta'veren.", 0.99, 0.97);
rel("perrin-aybara", "taveren", "connected_to", "Perrin is ta'veren.", 0.99, 0.97);
rel("rand-althor", "two-rivers", "located_in", "Rand is from the Two Rivers.", 0.98, 0.95);
rel("mat-cauthon", "two-rivers", "located_in", "Mat is from the Two Rivers.", 0.98, 0.95);
rel("perrin-aybara", "two-rivers", "located_in", "Perrin is from the Two Rivers.", 0.98, 0.95);
rel("egwene-alvere", "two-rivers", "located_in", "Egwene is from Emond's Field.", 0.98, 0.95);
rel("nynaeve-almeara", "two-rivers", "located_in", "Nynaeve is Wisdom of Emond's Field.", 0.98, 0.95);

rel("rand-althor", "saidin", "uses", "Rand channels saidin.", 0.99, 0.96);
rel("nynaeve-almeara", "saidar", "uses", "Nynaeve channels saidar.", 0.99, 0.96);
rel("egwene-alvere", "saidar", "uses", "Egwene channels saidar.", 0.99, 0.96);
rel("moiraine-damodred", "aes-sedai", "member_of", "Moiraine is Aes Sedai of the Blue Ajah.", 0.99, 0.97);
rel("egwene-alvere", "aes-sedai", "leads", "Egwene becomes Amyrlin Seat.", 0.98, 0.96);
rel("siuan-sanche", "aes-sedai", "leads", "Siuan served as Amyrlin Seat.", 0.97, 0.94);
rel("lan-mandragoran", "moiraine-damodred", "supports", "Lan is Moiraine's Warder.", 0.99, 0.97);
rel("mat-cauthon", "horn-of-valere", "uses", "Mat is bound to the Horn of Valere.", 0.97, 0.94);
rel("mat-cauthon", "tuon", "connected_to", "Mat marries Tuon.", 0.97, 0.93);
rel("perrin-aybara", "faile-bashere", "connected_to", "Perrin marries Faile.", 0.97, 0.93);
rel("elayne-trakand", "caemlyn", "leads", "Elayne rules Andor from Caemlyn.", 0.97, 0.94);
rel("aviendha", "aiel", "member_of", "Aviendha is Aiel.", 0.98, 0.95);
rel("ishamael", "forsaken", "member_of", "Ishamael is chief among the Forsaken.", 0.99, 0.97);
rel("lanfear", "forsaken", "member_of", "Lanfear is one of the Forsaken.", 0.99, 0.97);
rel("demandred", "forsaken", "member_of", "Demandred is one of the Forsaken.", 0.99, 0.97);
rel("lews-therin-telamon", "dragon-reborn", "connected_to", "Lews Therin was the Dragon reborn as Rand.", 0.99, 0.98);
rel("rand-althor", "lews-therin-telamon", "connected_to", "Rand carries Lews Therin's legacy and voice.", 0.98, 0.96);
rel("padan-fain", "shadar-logoth", "connected_to", "Fain is twisted by Shadar Logoth.", 0.97, 0.93);
rel("rand-althor", "nynaeve-almeara", "involved", "Rand and Nynaeve cleanse saidin.", 0.96, 0.94);
rel("moiraine-damodred", "rand-althor", "supports", "Moiraine guides Rand toward his destiny.", 0.98, 0.96);
rel("cadsuane-melaidhrin", "rand-althor", "supports", "Cadsuane advises and challenges Rand.", 0.95, 0.9);
rel("verin-mathwin", "black-ajah", "opposed_by", "Verin works against the Black Ajah.", 0.96, 0.92);
rel("seanchan", "tuon", "leads", "Tuon leads the Seanchan.", 0.97, 0.93);
rel("children-of-the-light", "aes-sedai", "opposed_by", "Whitecloaks oppose Aes Sedai.", 0.95, 0.9);
rel("rand-althor", "tear-city", "reached", "Rand takes the Stone of Tear.", 0.96, 0.93);
rel("rand-althor", "shayol-ghul", "reached", "Rand faces the Dark One at Shayol Ghul.", 0.98, 0.96);
rel("loial", "rand-althor", "supports", "Loial journeys with Rand's company.", 0.95, 0.9);

module.exports = { entities, relationships };
