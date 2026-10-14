/*
 * Egyptian mythology subject data — Ennead, Duat, Nile kingship, and the dead.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "documented", extras = {}) {
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

/* ---------- Root / places ---------- */

entity(
    "egyptian-mythology",
    "Egyptian mythology",
    "topic",
    "Ra's voyage, Osiris' kingship of the dead, and maat along the Nile.",
    "Egyptian mythology is the public-domain religious narrative of the Nile valley: solar creation, the Osiris cycle, the Duat, and the pharaoh as living Horus. Pyramid Texts, Coffin Texts, and the Book of the Dead fix much of the lore."
);

entity(
    "nile",
    "Nile",
    "place",
    "River whose flood was the first fact of Egyptian cosmos and kingship.",
    "The Nile is the geographic and mythical spine of Egypt: inundation, papyrus, and the northward flow the sun and the dead also travel in ritual language."
);

entity(
    "thebes",
    "Thebes",
    "place",
    "Upper Egyptian capital of Amun's great temples.",
    "Thebes — Waset — was the New Kingdom religious capital, home of Karnak and Luxor, and the west-bank necropolis that faces the valley of the kings."
);

entity(
    "memphis",
    "Memphis",
    "place",
    "Old Kingdom capital and cult city of Ptah.",
    "Memphis stood at the Nile's fork as the early dynastic capital. Its theology made Ptah the craftsman-creator; the pyramids of Giza rise just north of its hinterland."
);

entity(
    "duat",
    "Duat",
    "place",
    "Underworld the sun-boat and the dead must cross by night.",
    "The Duat is the nocturnal otherworld: gates, demons, the judgment hall of Osiris, and the path Ra takes from dusk to dawn. Funerary books map it as a geography, not a metaphor only."
);

entity(
    "karnak",
    "Karnak",
    "place",
    "Temple complex of Amun-Ra at Thebes.",
    "Karnak is the vast precinct of Amun at Thebes, expanded by dynasty after dynasty as the earthly house of the hidden god fused with Ra."
);

entity(
    "pyramids-of-giza",
    "Pyramids of Giza",
    "place",
    "Fourth-dynasty royal tombs on the Giza plateau.",
    "The pyramids of Giza — Khufu, Khafre, Menkaure — are Old Kingdom machines for the king's ascent, aligned with solar and stellar ideology beside Memphis."
);

entity(
    "valley-of-the-kings",
    "Valley of the Kings",
    "place",
    "Hidden royal tombs on Thebes' west bank.",
    "The Valley of the Kings replaced pyramid display with hidden rock-cut tombs. Its walls copy Books of the Netherworld that guide the dead king through the Duat."
);

/* ---------- Gods ---------- */

entity(
    "ennead",
    "Ennead",
    "organization",
    "Heliopolitan nine: Atum's line through Osiris and Set.",
    "The Ennead of Heliopolis is the nine-god genealogy — Atum (or Ra-Atum), Shu, Tefnut, Geb, Nut, Osiris, Isis, Set, and Nephthys — that frames creation and the kingship quarrel."
);

entity(
    "ra",
    "Ra",
    "person",
    "Sun god whose boat crosses sky by day and Duat by night.",
    "Ra is the solar creator who merges with Atum and later Amun. Each night he dies and is reborn in the Duat; the pharaoh claimed descent from his circuit."
);

entity(
    "atum",
    "Atum",
    "person",
    "Self-created closer of the Ennead, often one with Ra.",
    "Atum rose from the primeval waters and produced the first pair. In solar theology he is the evening and completed form of Ra."
);

entity(
    "osiris",
    "Osiris",
    "person",
    "Murdered king who becomes lord of the justified dead.",
    "Osiris was slain and dismembered by Set, reassembled by Isis, and made ruler of the Duat. Every justified dead person hoped to become 'an Osiris.'"
);

entity(
    "isis",
    "Isis",
    "person",
    "Great magician who restored Osiris and hid Horus.",
    "Isis gathers Osiris' body, conceives Horus, and outwits Set by cunning and names. Her cult later traveled far beyond the Nile."
);

entity(
    "set",
    "Set",
    "person",
    "Storm and desert god who killed Osiris and contended with Horus.",
    "Set is the necessary violent god: murderer of Osiris, usurper, and also the defender who spears the serpent Apep in Ra's night boat. Order needs him and must limit him."
);

entity(
    "horus",
    "Horus",
    "person",
    "Falcon king whose living image is the pharaoh.",
    "Horus, son of Isis and Osiris, avenges his father and wins the kingship from Set. The reigning pharaoh is Horus in the palace and Osiris only after death."
);

entity(
    "anubis",
    "Anubis",
    "person",
    "Jackal god of embalming who attends the weighing of the heart.",
    "Anubis wraps the dead, guards the necropolis, and conducts the heart to Maat's balance. Early royal tombs already show his jackal on the western desert."
);

entity(
    "thoth",
    "Thoth",
    "person",
    "Ibis scribe of the gods who records the judgment.",
    "Thoth invented writing and magic, mediates between Horus and Set, and stands by the scales to write whether the dead has spoken truly."
);

entity(
    "maat",
    "Maat",
    "concept",
    "Truth, balance, and the feather against which the heart is weighed.",
    "Maat is both a goddess and the order the pharaoh must maintain: right speech, the Nile's measure, and the opposite of isfet. The dead declare they have not offended her."
);

entity(
    "amun",
    "Amun",
    "person",
    "Hidden god of Thebes who fused with Ra as Amun-Ra.",
    "Amun rose with Theban kingship to become king of the gods. Syncretized as Amun-Ra, he received the wealth of Karnak and the theology of a hidden sun."
);

entity(
    "hathor",
    "Hathor",
    "person",
    "Cow-goddess of joy, music, and the western necropolis.",
    "Hathor is lady of turquoise and drunkenness, a solar daughter who can become the Eye of Ra, and a greeter of the dead in Theban tombs."
);

entity(
    "apep",
    "Apep",
    "person",
    "Serpent of chaos who attacks Ra's boat in the Duat.",
    "Apep — Apophis — is the enemy Ra must defeat each night so the sun can rise. Set and other gods spear him in the solar barque."
);

/* ---------- Kingship, works, rites ---------- */

entity(
    "pharaoh",
    "Pharaoh",
    "concept",
    "Living Horus and dead Osiris — the office that holds maat.",
    "Pharaoh is the dual king of Upper and Lower Egypt, son of Ra, who builds temples, leads ritual, and must keep maat. The office, not only the person, is the mythic hinge."
);

entity(
    "book-of-the-dead",
    "Book of the Dead",
    "work",
    "New Kingdom spells for leaving the tomb and passing the Duat.",
    "The Book of the Dead is a modern name for the 'Book of Coming Forth by Day': illustrated papyri of spells, maps, and the weighing of the heart placed with the elite dead."
);

entity(
    "weighing-of-the-heart",
    "Weighing of the heart",
    "event",
    "Judgment before Osiris: heart against the feather of Maat.",
    "In the Hall of Two Truths, Anubis adjusts the scale, Thoth records, and Ammit waits. A heart heavy with isfet is eaten; a balanced heart becomes an Osiris."
);

entity(
    "osiris-myth",
    "Osiris myth",
    "event",
    "Murder, mourning, and Horus' lawsuit against Set.",
    "The Osiris myth is the succession drama of Egyptian religion: Set's crime, Isis' search, Horus' childhood in the marshes, and the divine tribunal that restores kingship."
);

entity(
    "solar-barque",
    "Solar barque",
    "object",
    "Boat in which Ra crosses sky and the twelve night hours.",
    "The solar barque — Mandjet by day, Mesektet by night — carries Ra, defending gods, and sometimes the justified dead through the Duat's gates."
);

entity(
    "ammit",
    "Ammit",
    "person",
    "Devourer who eats the heart that fails Maat's feather.",
    "Ammit, part crocodile, lion, and hippopotamus, sits by the scales. She is not a devil-king but the end of an unjustified name."
);

entity(
    "ptah",
    "Ptah",
    "person",
    "Memphite craftsman-creator who speaks the world into being.",
    "Ptah of Memphis creates through heart and tongue in the Memphite theology. Artisans claimed him; the city's identity sits beside the Giza necropolis."
);

entity(
    "nephthys",
    "Nephthys",
    "person",
    "Sister of Isis who mourns Osiris and guards the dead.",
    "Nephthys, paired with Set yet allied to Isis in the mourning, stands at the head or foot of coffins and helps reassemble Osiris."
);

entity(
    "eye-of-horus",
    "Eye of Horus",
    "object",
    "Wedjat — the restored eye that becomes a healing amulet.",
    "The Eye of Horus was wounded by Set and healed by Thoth. As the wedjat it is the most common protective sign in tombs and jewelry."
);

entity(
    "pyramid-texts",
    "Pyramid Texts",
    "work",
    "Old Kingdom spells carved in royal burial chambers.",
    "The Pyramid Texts are the oldest large body of Egyptian religious writing, meant to send the dead king to the sky and the company of Ra and Osiris."
);

/* ---------- Relationships ---------- */

rel("ennead", "egyptian-mythology", "part_of", "The Heliopolitan Ennead is a core divine genealogy of Egyptian myth.", 0.97, 0.94);
rel("atum", "ennead", "created", "Atum generated the first gods of the Ennead.", 0.97, 0.95);
rel("ra", "atum", "connected_to", "Ra and Atum fuse as the solar creator of Heliopolis.", 0.96, 0.93);
rel("osiris", "ennead", "member_of", "Osiris is one of the nine of Heliopolis.", 0.97, 0.94);
rel("isis", "ennead", "member_of", "Isis is one of the nine of Heliopolis.", 0.97, 0.94);
rel("set", "ennead", "member_of", "Set is one of the nine of Heliopolis.", 0.97, 0.94);
rel("nephthys", "ennead", "member_of", "Nephthys is one of the nine of Heliopolis.", 0.95, 0.92);

rel("set", "osiris", "opposed_by", "Set murdered Osiris and seized the kingship.", 0.99, 0.97);
rel("isis", "osiris", "supports", "Isis reassembled Osiris and made him king of the dead.", 0.98, 0.96);
rel("osiris-myth", "osiris", "involved", "The Osiris myth is the murder and restoration of Osiris.", 0.99, 0.97);
rel("osiris-myth", "horus", "caused", "The myth ends in Horus' claim to the living throne.", 0.96, 0.93);
rel("horus", "set", "opposed_by", "Horus contended with Set for Egypt's kingship.", 0.98, 0.96);
rel("thoth", "eye-of-horus", "created", "Thoth restored the Eye of Horus after Set wounded it.", 0.95, 0.92);
rel("horus", "pharaoh", "inspired", "The living pharaoh is the earthly Horus.", 0.98, 0.96);
rel("osiris", "pharaoh", "inspired", "The dead pharaoh becomes Osiris in the tomb.", 0.97, 0.94);
rel("pharaoh", "maat", "supports", "The pharaoh's office is to maintain maat on the Nile.", 0.97, 0.94);

rel("ra", "solar-barque", "uses", "Ra crosses sky and Duat in the solar barque.", 0.98, 0.96);
rel("ra", "duat", "located_in", "Ra travels the Duat each night to be reborn at dawn.", 0.97, 0.95);
rel("apep", "ra", "opposed_by", "Apep attacks Ra's boat so the sun might fail to rise.", 0.97, 0.94);
rel("set", "apep", "opposed_by", "Set spears Apep in the night boat even while he wars with Horus.", 0.93, 0.89);
rel("osiris", "duat", "leads", "Osiris judges and rules in the Duat.", 0.98, 0.96);

rel("weighing-of-the-heart", "duat", "occurred_at", "The heart is weighed in Osiris' hall in the Duat.", 0.98, 0.96);
rel("anubis", "weighing-of-the-heart", "involved", "Anubis tends the scale at the weighing of the heart.", 0.97, 0.95);
rel("thoth", "weighing-of-the-heart", "involved", "Thoth records the outcome of the weighing.", 0.97, 0.94);
rel("maat", "weighing-of-the-heart", "involved", "The heart is weighed against Maat's feather.", 0.98, 0.96);
rel("ammit", "weighing-of-the-heart", "involved", "Ammit waits to devour the heart that fails the test.", 0.96, 0.93);
rel("book-of-the-dead", "weighing-of-the-heart", "contains", "The Book of the Dead illustrates the weighing of the heart.", 0.96, 0.93);
rel("book-of-the-dead", "duat", "inspired", "The Book of the Dead maps spells for passing the Duat.", 0.95, 0.92);

rel("amun", "karnak", "located_in", "Amun's chief house is the temple of Karnak.", 0.97, 0.94);
rel("karnak", "thebes", "located_in", "Karnak stands in Thebes.", 0.98, 0.96);
rel("valley-of-the-kings", "thebes", "located_in", "The Valley of the Kings is on Thebes' west bank.", 0.97, 0.95);
rel("hathor", "thebes", "located_in", "Hathor greets the Theban dead on the western mountain.", 0.92, 0.88);
rel("ptah", "memphis", "located_in", "Ptah is the creator-god of Memphis.", 0.97, 0.94);
rel("pyramids-of-giza", "memphis", "located_in", "The Giza pyramids belong to Memphis' Old Kingdom hinterland.", 0.95, 0.92);
rel("pyramid-texts", "pyramids-of-giza", "connected_to", "Pyramid Texts developed in Old Kingdom royal pyramids, the ideology Giza embodies.", 0.9, 0.86);
rel("nile", "egyptian-mythology", "part_of", "The Nile is the earthly setting of Egyptian myth and kingship.", 0.98, 0.96);
rel("isis", "horus", "created", "Isis conceived and hid the child Horus.", 0.97, 0.94);
rel("nephthys", "osiris", "supports", "Nephthys mourns Osiris and helps Isis restore him.", 0.94, 0.91);

module.exports = { entities, relationships };
