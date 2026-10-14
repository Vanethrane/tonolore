/*
 * The Exorcist subject data — Blatty's novel and Friedkin's Georgetown possession film.
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
    "the-exorcist",
    "The Exorcist",
    "topic",
    "Georgetown possession, Jesuit priests, and Pazuzu — the possession film that became cultural weather.",
    "The Exorcist is William Peter Blatty's novel and William Friedkin's 1973 film: Regan MacNeil's possession in Georgetown, Fathers Karras and Merrin, and a demon the story names Pazuzu. Later sequels and new versions keep circling that house and those rites."
);

entity(
    "william-friedkin",
    "William Friedkin",
    "person",
    "Director of The Exorcist (1973).",
    "William Friedkin directed The Exorcist with documentary harshness — Georgetown locations, medical horror, and the stair-fall that made the film infamous.",
    "documented"
);

entity(
    "william-peter-blatty",
    "William Peter Blatty",
    "person",
    "Novelist and screenwriter of The Exorcist.",
    "William Peter Blatty wrote the 1971 novel and the film's screenplay, then later directed The Exorcist III from his Legion novel.",
    "documented"
);

entity(
    "linda-blair",
    "Linda Blair",
    "person",
    "Actress who played Regan MacNeil.",
    "Linda Blair played Regan, the possessed child whose makeup, voice work, and physical performance became the film's most quoted images.",
    "documented"
);

entity(
    "max-von-sydow",
    "Max von Sydow",
    "person",
    "Actor who played Father Lankester Merrin.",
    "Max von Sydow played the veteran exorcist Merrin, arriving from the Iraq prologue to the Georgetown rite.",
    "documented"
);

entity(
    "ellen-burstyn",
    "Ellen Burstyn",
    "person",
    "Actress who played Chris MacNeil.",
    "Ellen Burstyn played Chris MacNeil, the actress-mother who exhausts medicine and finally calls the Church.",
    "documented"
);

entity(
    "jason-miller",
    "Jason Miller",
    "person",
    "Actor who played Father Damien Karras.",
    "Jason Miller played Father Karras, the doubting Jesuit psychiatrist who takes the possession onto himself.",
    "documented"
);

/* ---------- Works ---------- */

entity(
    "the-exorcist-novel",
    "The Exorcist (novel)",
    "work",
    "Blatty's 1971 bestseller.",
    "The Exorcist novel follows Chris MacNeil in Georgetown as Regan's condition worsens and Fathers Karras and Merrin are drawn into an exorcism.",
    "documented"
);

entity(
    "the-exorcist-1973",
    "The Exorcist (1973)",
    "work",
    "Friedkin's film — still the possession standard.",
    "The 1973 film adapts Blatty's novel with the Iraq prologue, the MacNeil house, medical tests, and the final rite on Prospect Street.",
    "documented"
);

entity(
    "the-exorcist-iii",
    "The Exorcist III",
    "work",
    "Blatty's 1990 Gemini Killer sequel.",
    "The Exorcist III, directed by Blatty from Legion, follows Kinderman through a Georgetown hospital and the Gemini Killer's return.",
    "documented"
);

/* ---------- Places / groups ---------- */

entity(
    "georgetown",
    "Georgetown",
    "place",
    "Washington neighborhood of the MacNeil house and the steps.",
    "Georgetown is the real neighborhood whose steep stairs, brick houses, and Jesuit university ground the story's possession in a specific city.",
    "documented"
);

entity(
    "macneil-house",
    "MacNeil house",
    "place",
    "Prospect Street house of the possession.",
    "The MacNeil house is the Georgetown home where the Ouija contact begins and where the exorcism is finally staged."
);

entity(
    "nineveh",
    "Nineveh",
    "place",
    "Iraq dig site of Merrin's opening confrontation.",
    "Nineveh is the archaeological site of the film's prologue, where Merrin finds the Pazuzu amulet and feels the coming fight."
);

entity(
    "macneil-family",
    "MacNeil family",
    "organization",
    "Chris and Regan — actress mother and possessed daughter.",
    "The MacNeil family is the household the possession invades: Chris filming in Georgetown, Regan left with a Ouija board and a voice calling itself Captain Howdy."
);

entity(
    "jesuits",
    "Jesuits",
    "organization",
    "Order of Karras, Merrin, and Dyer.",
    "The Jesuits are the priests the film turns to — Karras the doubting psychiatrist, Merrin the veteran, Dyer the friend on the stairs."
);

/* ---------- Characters / objects / events ---------- */

entity(
    "regan-macneil",
    "Regan MacNeil",
    "person",
    "Child whose possession is the story's center.",
    "Regan MacNeil is the twelve-year-old whose personality, body, and voice are taken over, forcing medicine, then the Church, into the house."
);

entity(
    "chris-macneil",
    "Chris MacNeil",
    "person",
    "Actress-mother who refuses to stop looking for help.",
    "Chris MacNeil is Regan's mother, a film star in Georgetown who runs from doctors to priests when every test fails."
);

entity(
    "father-karras",
    "Father Damien Karras",
    "person",
    "Doubting Jesuit psychiatrist who finishes the rite.",
    "Father Damien Karras is the Georgetown Jesuit whose guilt over his mother and crisis of faith become the demon's leverage — and his sacrifice."
);

entity(
    "father-merrin",
    "Father Lankester Merrin",
    "person",
    "Veteran exorcist called back from the Iraq dig.",
    "Father Merrin is the old priest who has met this demon before and arrives in Georgetown to begin the formal exorcism."
);

entity(
    "father-dmyer",
    "Father Dyer",
    "person",
    "Karras's friend who finds him on the stairs.",
    "Father Dyer is Karras's fellow Jesuit, present for the aftermath on the Hitchcock Steps and for Kinderman's later questions."
);

entity(
    "pazuzu",
    "Pazuzu",
    "person",
    "Demon named in the film's Iraq and possession thread.",
    "Pazuzu is the ancient wind-demon the prologue and later lore attach to Regan's possession — the intelligence behind Captain Howdy."
);

entity(
    "captain-howdy",
    "Captain Howdy",
    "concept",
    "Name Regan gives the Ouija contact.",
    "Captain Howdy is the playful name Regan uses for the board's answers before the contact reveals itself as the possessing intelligence."
);

entity(
    "lieutenant-kinderman",
    "Lieutenant Kinderman",
    "person",
    "Georgetown detective who smells a crime in the house.",
    "Lieutenant Kinderman investigates Burke Dennings's death and stays in the story through The Exorcist III as the cop who cannot let Georgetown go."
);

entity(
    "burke-dennings",
    "Burke Dennings",
    "person",
    "Director found dead at the bottom of the stairs.",
    "Burke Dennings is Chris's director, drunk and present in the house, whose fall down the stone steps becomes Kinderman's case."
);

entity(
    "sharon-spencer",
    "Sharon Spencer",
    "person",
    "Chris's secretary who helps keep the household running.",
    "Sharon Spencer is Chris's assistant in the Georgetown house, a witness to Regan's decline and the arriving priests."
);

entity(
    "ouija-board",
    "Ouija board",
    "object",
    "Attic toy that opens the contact.",
    "The Ouija board is the attic game through which Regan first talks to Captain Howdy — the ordinary object that starts the possession."
);

entity(
    "the-exorcism",
    "The exorcism",
    "event",
    "Rite in Regan's bedroom that kills Merrin and costs Karras.",
    "The exorcism is the bedroom rite of holy water, the Roman ritual, and Karras's final challenge that ends on the Georgetown steps."
);

/* ---------- Relationships ---------- */

rel("william-peter-blatty", "the-exorcist", "created", "William Peter Blatty created The Exorcist as a novel and screenplay.", 0.99, 0.99);
rel("william-peter-blatty", "the-exorcist-novel", "created", "Blatty wrote the 1971 novel.", 0.99, 0.98);
rel("william-friedkin", "the-exorcist-1973", "created", "William Friedkin directed The Exorcist (1973).", 0.99, 0.98);
rel("william-peter-blatty", "the-exorcist-1973", "created", "Blatty wrote the screenplay for the 1973 film.", 0.98, 0.96);
rel("william-peter-blatty", "the-exorcist-iii", "created", "Blatty wrote and directed The Exorcist III.", 0.97, 0.94);
rel("linda-blair", "regan-macneil", "involved", "Linda Blair played Regan MacNeil.", 0.99, 0.97);
rel("ellen-burstyn", "chris-macneil", "involved", "Ellen Burstyn played Chris MacNeil.", 0.98, 0.96);
rel("jason-miller", "father-karras", "involved", "Jason Miller played Father Karras.", 0.98, 0.96);
rel("max-von-sydow", "father-merrin", "involved", "Max von Sydow played Father Merrin.", 0.98, 0.96);

rel("the-exorcist-novel", "the-exorcist", "part_of", "The novel is the source of The Exorcist.", 0.99, 0.98);
rel("the-exorcist-1973", "the-exorcist", "part_of", "The 1973 film is the central work of The Exorcist.", 0.99, 0.98);
rel("the-exorcist-iii", "the-exorcist", "part_of", "The Exorcist III continues Blatty's Georgetown story.", 0.96, 0.93);
rel("the-exorcist-novel", "the-exorcist-1973", "adapted_into", "Blatty's novel was adapted into the 1973 film.", 0.98, 0.96);
rel("the-exorcist-1973", "the-exorcist-novel", "adapted_from", "The 1973 film is adapted from Blatty's novel.", 0.98, 0.96);

rel("the-exorcist-1973", "regan-macneil", "involved", "The 1973 film is the story of Regan's possession.", 0.99, 0.97);
rel("the-exorcist-1973", "father-karras", "involved", "Father Karras is the doubting priest of the 1973 film.", 0.98, 0.96);
rel("the-exorcist-1973", "father-merrin", "involved", "Father Merrin arrives for the 1973 exorcism.", 0.98, 0.96);
rel("the-exorcist-1973", "pazuzu", "involved", "The 1973 film frames the demon through Pazuzu's image.", 0.96, 0.93);
rel("the-exorcist-iii", "lieutenant-kinderman", "involved", "Kinderman is the center of The Exorcist III.", 0.96, 0.93);

rel("regan-macneil", "macneil-family", "member_of", "Regan is the MacNeil daughter at the story's center.", 0.99, 0.97);
rel("chris-macneil", "macneil-family", "leads", "Chris is the mother holding the MacNeil household together.", 0.98, 0.96);
rel("sharon-spencer", "macneil-family", "supports", "Sharon helps Chris run the Georgetown house.", 0.94, 0.9);
rel("father-karras", "jesuits", "member_of", "Karras is a Jesuit priest and psychiatrist.", 0.98, 0.96);
rel("father-merrin", "jesuits", "member_of", "Merrin is the veteran Jesuit exorcist.", 0.98, 0.96);
rel("father-dmyer", "jesuits", "member_of", "Dyer is Karras's Jesuit friend.", 0.95, 0.91);
rel("captain-howdy", "pazuzu", "connected_to", "Captain Howdy is the name that precedes Pazuzu's reveal.", 0.96, 0.93);
rel("regan-macneil", "pazuzu", "opposed_by", "Regan's body is the site of Pazuzu's possession.", 0.98, 0.96);
rel("father-karras", "pazuzu", "opposed_by", "Karras takes the demon on in the final challenge.", 0.97, 0.94);
rel("father-merrin", "pazuzu", "opposed_by", "Merrin has faced this demon before Nineveh and Georgetown.", 0.97, 0.94);

rel("the-exorcism", "macneil-house", "occurred_at", "The exorcism is performed in Regan's bedroom.", 0.98, 0.96);
rel("the-exorcism", "father-merrin", "involved", "Merrin leads the formal rite.", 0.97, 0.94);
rel("the-exorcism", "father-karras", "involved", "Karras assists and then finishes the rite.", 0.97, 0.94);
rel("regan-macneil", "ouija-board", "uses", "Regan first contacts Captain Howdy through the Ouija board.", 0.96, 0.93);
rel("macneil-house", "georgetown", "located_in", "The MacNeil house stands in Georgetown.", 0.98, 0.96);
rel("macneil-family", "georgetown", "located_in", "The MacNeils are living in Georgetown during the film.", 0.96, 0.93);
rel("jesuits", "georgetown", "located_in", "Karras's Jesuit world is the Georgetown university parish.", 0.95, 0.91);
rel("lieutenant-kinderman", "georgetown", "located_in", "Kinderman is the Georgetown detective on Burke's death.", 0.95, 0.91);
rel("burke-dennings", "the-exorcism", "caused", "Burke's death on the steps is what the possession first costs outsiders.", 0.9, 0.86);
rel("the-exorcist-1973", "georgetown", "occurred_at", "The 1973 film is shot and set in Georgetown.", 0.97, 0.94);
rel("father-merrin", "nineveh", "located_in", "Merrin's prologue confrontation happens at the Nineveh dig.", 0.95, 0.91);
rel("pazuzu", "nineveh", "located_in", "The Pazuzu image is unearthed at Nineveh.", 0.94, 0.9);
rel("william-friedkin", "the-exorcist", "produced", "Friedkin's film made The Exorcist a lasting cultural object.", 0.95, 0.92);

module.exports = { entities, relationships };
