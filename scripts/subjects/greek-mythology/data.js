/*
 * Greek mythology subject data — Olympians, heroes, and underworld geography.
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

/* ---------- Root / cosmos ---------- */

entity(
    "greek-mythology",
    "Greek mythology",
    "topic",
    "Olympians, heroes, and underworld geography that seeded Western fantasy language.",
    "Greek mythology is the public-domain body of stories about the Olympian gods, Titans, heroes, and the geography of Olympus, the Underworld, and Troy. Its lore runs through Homer and Hesiod, the Trojan War cycle, and cult sites such as Delphi."
);

entity(
    "mount-olympus",
    "Mount Olympus",
    "place",
    "Home of the Olympian gods, above the mortal world.",
    "Mount Olympus is the divine mountain where Zeus holds court. The twelve Olympians feast there, and from it the sky-god hurls thunderbolts into the wars of heroes."
);

entity(
    "underworld",
    "Underworld",
    "place",
    "Realm of the dead ruled by Hades and Persephone.",
    "The Underworld is the land of the dead: the house of Hades, the fields of asphodel, and the gates guarded by Cerberus. Mortals descend only as shades unless a hero forces a living entry."
);

entity(
    "tartarus",
    "Tartarus",
    "place",
    "Abyss below the Underworld where Titans and the worst dead are bound.",
    "Tartarus is the pit beneath Hades' realm, a prison for the Titans after the Titanomachy and a place of punishment deeper than the halls of the dead."
);

entity(
    "delphi",
    "Delphi",
    "place",
    "Apollo's oracle on the slopes of Parnassus.",
    "Delphi was the navel of the world in Greek cult: the Pythia spoke Apollo's oracles there, and city-states sought the god's word before war and colonization."
);

entity(
    "troy",
    "Troy",
    "place",
    "Walled city of the Iliad, besieged for ten years.",
    "Troy — Ilium — is the Anatolian city of Priam and Hector, the prize of the Trojan War and the setting Homer gives to Achilles' wrath."
);

/* ---------- Olympians ---------- */

entity(
    "zeus",
    "Zeus",
    "person",
    "Sky-father, thunderer, and king of the Olympian gods.",
    "Zeus overthrew Cronus, divided the cosmos with his brothers, and rules from Olympus. His thunderbolt, many liaisons, and judgments shape both divine and heroic myth."
);

entity(
    "hera",
    "Hera",
    "person",
    "Queen of the gods and guardian of marriage.",
    "Hera is Zeus's sister-wife and the Olympian of marriage and queenship. Myths cast her as protector of legitimate order and as the implacable opponent of Zeus's mortal children, especially Heracles."
);

entity(
    "athena",
    "Athena",
    "person",
    "Goddess of wisdom, crafts, and the defensive city.",
    "Athena sprang from Zeus's head fully armed. She patronizes Athens, counsel, and weaving, and she guides Odysseus and other clever heroes rather than ruling by brute force."
);

entity(
    "poseidon",
    "Poseidon",
    "person",
    "Earth-shaker and lord of the sea.",
    "Poseidon received the sea when the brothers drew lots. He raises storms and earthquakes, fathers monsters and horses, and hounds Odysseus after the blinding of Polyphemus."
);

entity(
    "hades",
    "Hades",
    "person",
    "Unseen lord of the dead and of the earth's wealth.",
    "Hades drew the Underworld when the cosmos was divided. He rules the dead with Persephone, rarely leaves his halls, and is not death itself but the king of that country."
);

entity(
    "persephone",
    "Persephone",
    "person",
    "Kore who became queen of the Underworld.",
    "Persephone, daughter of Demeter, was taken by Hades and eats the pomegranate that binds her to spend part of each year below — the myth behind the seasons."
);

entity(
    "apollo",
    "Apollo",
    "person",
    "God of the lyre, plague, and prophetic light.",
    "Apollo is the far-shooter: music, healing, and the oracle at Delphi. He and Artemis are Leto's twins; he slays the Python and speaks through the Pythia."
);

entity(
    "artemis",
    "Artemis",
    "person",
    "Huntress, protector of the young, and twin of Apollo.",
    "Artemis ranges the wild with her bow. She is a virgin goddess of the hunt and childbirth's dangerous edge, and she punishes those who violate her groves."
);

entity(
    "demeter",
    "Demeter",
    "person",
    "Grain goddess whose grief explains the barren season.",
    "Demeter is the Olympian of grain and the Eleusinian rites. When Persephone is taken, she withdraws fertility from the earth until a portion of the year is restored."
);

entity(
    "hephaestus",
    "Hephaestus",
    "person",
    "Lame smith who forges the gods' weapons and Achilles' shield.",
    "Hephaestus is the craftsman of Olympus, thrown from the mountain and returned as the maker of thunderbolts, automata, and the armor Thetis begs for Achilles."
);

entity(
    "hermes",
    "Hermes",
    "person",
    "Guide of souls, thief, and messenger between worlds.",
    "Hermes crosses every boundary: he leads shades to Hades, carries Zeus's word, and invents the lyre. Travelers and heralds claimed him."
);

entity(
    "aphrodite",
    "Aphrodite",
    "person",
    "Goddess of desire whose gift starts the Trojan War.",
    "Aphrodite, born of sea-foam in one tradition, awards Helen to Paris and so sets the Trojan War in motion. Love and ruin travel together in her myths."
);

entity(
    "ares",
    "Ares",
    "person",
    "God of the battle-rage, little loved even on Olympus.",
    "Ares is the Olympian of war's frenzy rather than strategy. Homer shows him wounded and rebuked; cults in Thrace and Thebes treated him more seriously than Attic poets did."
);

/* ---------- Heroes, monsters, works ---------- */

entity(
    "heracles",
    "Heracles",
    "person",
    "Strongest of the heroes, driven through twelve labors by Hera's hatred.",
    "Heracles, son of Zeus and Alcmene, is forced into the twelve labors after Hera maddens him. He binds Cerberus, slays the Hydra, and is later received on Olympus."
);

entity(
    "odysseus",
    "Odysseus",
    "person",
    "King of Ithaca whose nostos is the Odyssey.",
    "Odysseus is the cunning hero of the Trojan Horse and the ten-year return. Athena favors him; Poseidon delays him; Penelope and the suitors wait in Ithaca."
);

entity(
    "achilles",
    "Achilles",
    "person",
    "Best of the Achaeans, whose wrath is the Iliad's subject.",
    "Achilles, son of Thetis, withdraws from battle over Briseis, returns to kill Hector, and dies before Troy falls — the mortal peak of the Trojan cycle."
);

entity(
    "prometheus",
    "Prometheus",
    "person",
    "Titan who stole fire for mortals and was chained for it.",
    "Prometheus tricked Zeus at the sacrifice, brought fire to humankind, and was bound on the rock until Heracles freed him. He stands with the Titans against Olympian order."
);

entity(
    "medusa",
    "Medusa",
    "person",
    "Gorgon whose gaze turns the living to stone.",
    "Medusa is the mortal Gorgon beheaded by Perseus. Athena later bears the head on the aegis; the blood and look remain a standing image of deadly sight."
);

entity(
    "pandora",
    "Pandora",
    "person",
    "First woman, fashioned as Zeus's answer to stolen fire.",
    "Pandora was made by Hephaestus and gifted by the gods; her jar released evils into the mortal world, leaving hope inside — Zeus's counterstroke after Prometheus."
);

entity(
    "theseus",
    "Theseus",
    "person",
    "Athenian hero who killed the Minotaur and tried to seize Persephone.",
    "Theseus is Athens' civic hero: the Labyrinth, Ariadne, and later a foolhardy descent with Pirithous into the Underworld, where Hades binds them."
);

entity(
    "cerberus",
    "Cerberus",
    "person",
    "Three-headed hound who guards the gates of Hades.",
    "Cerberus watches the Underworld so the dead cannot leave. Heracles' final labor is to drag the hound to the living world and return him."
);

entity(
    "titans",
    "Titans",
    "organization",
    "Elder gods whom Zeus overthrew and cast into Tartarus.",
    "The Titans, children of Uranus and Gaia and led by Cronus, ruled before the Olympians. After the Titanomachy most were imprisoned in Tartarus; Prometheus and a few others take other paths."
);

entity(
    "trojan-war",
    "Trojan War",
    "event",
    "Ten-year siege of Troy that ends in the horse and the sack.",
    "The Trojan War is the central heroic event of Greek epic: Helen, the oath of the suitors, Achilles' wrath, Hector's death, and Odysseus' device that opens the city."
);

entity(
    "iliad",
    "Iliad",
    "work",
    "Homeric epic of Achilles' wrath in the ninth year at Troy.",
    "The Iliad narrates a few weeks of the Trojan War: the quarrel of Achilles and Agamemnon, the death of Patroclus, and the ransoming of Hector's body."
);

entity(
    "odyssey",
    "Odyssey",
    "work",
    "Homeric epic of Odysseus' return and the slaughter of the suitors.",
    "The Odyssey follows Odysseus from Calypso and the Phaeacians through the wanderings — Cyclops, Circe, the Underworld — to the bow-contest in Ithaca."
);

entity(
    "homer",
    "Homer",
    "person",
    "Name given to the poet of the Iliad and the Odyssey.",
    "Homer is the traditional author of the two great epics. Ancient cities claimed him; the poems themselves are the main public-domain source for Trojan and nostos lore."
);

entity(
    "aegis",
    "Aegis",
    "object",
    "Divine shield-cloak that bears Medusa's head.",
    "The aegis is the terrifying mantle of Zeus and Athena, often shown with the Gorgoneion. It is a working emblem of Olympian protection and panic in battle."
);

/* ---------- Relationships ---------- */

rel("zeus", "mount-olympus", "leads", "Zeus rules the Olympian court on Mount Olympus.", 0.99, 0.98);
rel("hera", "zeus", "supports", "Hera is Zeus's queen and partner in Olympian rule.", 0.96, 0.93);
rel("athena", "zeus", "created", "Athena was born from Zeus's head.", 0.98, 0.96);
rel("apollo", "delphi", "located_in", "Apollo's chief oracle speaks at Delphi.", 0.98, 0.96);
rel("artemis", "apollo", "connected_to", "Artemis and Apollo are Leto's twin archers.", 0.97, 0.94);
rel("poseidon", "odysseus", "opposed_by", "Poseidon delays Odysseus' return after the Cyclops is blinded.", 0.97, 0.94);
rel("hades", "underworld", "leads", "Hades is lord of the Underworld.", 0.99, 0.98);
rel("persephone", "hades", "member_of", "Persephone reigns beside Hades as queen of the dead.", 0.97, 0.95);
rel("demeter", "persephone", "connected_to", "Demeter's search for Persephone explains the barren season.", 0.98, 0.96);
rel("hermes", "underworld", "involved", "Hermes guides shades into the house of Hades.", 0.95, 0.92);

rel("aphrodite", "trojan-war", "caused", "Aphrodite's gift of Helen to Paris sets the Trojan War in motion.", 0.96, 0.93);
rel("ares", "trojan-war", "involved", "Ares fights on the Trojan field in the Iliad.", 0.93, 0.89);
rel("hephaestus", "achilles", "produced", "Hephaestus forges the shield and armor Achilles wears back to battle.", 0.96, 0.93);
rel("hephaestus", "zeus", "supports", "Hephaestus smiths the thunderbolts Zeus hurls.", 0.94, 0.9);
rel("athena", "odysseus", "supports", "Athena is Odysseus' divine counselor through the war and the return.", 0.97, 0.94);
rel("athena", "aegis", "uses", "Athena bears the aegis with Medusa's head.", 0.95, 0.92);
rel("medusa", "aegis", "part_of", "Perseus' slaying of Medusa supplies the Gorgoneion on the aegis.", 0.94, 0.91);

rel("titans", "tartarus", "located_in", "Most Titans were imprisoned in Tartarus after the Titanomachy.", 0.97, 0.94);
rel("tartarus", "underworld", "part_of", "Tartarus lies beneath the halls of the dead.", 0.96, 0.93);
rel("zeus", "titans", "opposed_by", "Zeus overthrew the Titans and bound them below.", 0.98, 0.96);
rel("prometheus", "titans", "member_of", "Prometheus is a Titan who sided with mortals against Zeus.", 0.96, 0.93);
rel("prometheus", "zeus", "opposed_by", "Prometheus stole fire and was punished by Zeus.", 0.98, 0.96);
rel("pandora", "zeus", "created", "Zeus ordered Pandora made as the price of stolen fire.", 0.96, 0.93);
rel("hephaestus", "pandora", "created", "Hephaestus fashioned Pandora from earth.", 0.95, 0.92);

rel("heracles", "hera", "opposed_by", "Hera's hatred drives Heracles into the twelve labors.", 0.97, 0.94);
rel("heracles", "cerberus", "uses", "Heracles' last labor is to fetch Cerberus from Hades.", 0.96, 0.93);
rel("cerberus", "underworld", "located_in", "Cerberus guards the gates of the Underworld.", 0.98, 0.96);
rel("theseus", "underworld", "involved", "Theseus descended living into Hades and was bound there.", 0.93, 0.89);
rel("heracles", "prometheus", "involved", "Heracles later frees Prometheus from the rock.", 0.92, 0.88);

rel("trojan-war", "troy", "occurred_at", "The Trojan War is the siege of Troy.", 0.99, 0.98);
rel("achilles", "trojan-war", "involved", "Achilles' wrath is the central action of the war in the Iliad.", 0.98, 0.96);
rel("odysseus", "trojan-war", "involved", "Odysseus fights at Troy and devises the wooden horse.", 0.97, 0.95);
rel("homer", "iliad", "produced", "The Iliad is attributed to Homer.", 0.98, 0.96);
rel("homer", "odyssey", "produced", "The Odyssey is attributed to Homer.", 0.98, 0.96);
rel("iliad", "trojan-war", "inspired", "The Iliad recounts Achilles' portion of the Trojan War.", 0.99, 0.97);
rel("odyssey", "odysseus", "inspired", "The Odyssey is the epic of Odysseus' return from Troy.", 0.99, 0.97);
rel("odyssey", "iliad", "followed", "The Odyssey follows the Iliad as the nostos after Troy.", 0.95, 0.92);
rel("odysseus", "underworld", "involved", "Odysseus consults the dead in the Nekyia of the Odyssey.", 0.94, 0.91);

rel("mount-olympus", "greek-mythology", "part_of", "Olympus is the divine mountain of Greek myth.", 0.99, 0.97);
rel("underworld", "greek-mythology", "part_of", "The Underworld is the land of the dead in Greek myth.", 0.99, 0.97);
rel("zeus", "poseidon", "connected_to", "Zeus and Poseidon divided sky and sea after the Titans fell.", 0.95, 0.92);
rel("zeus", "hades", "connected_to", "Zeus and Hades divided sky and Underworld after the Titans fell.", 0.95, 0.92);

module.exports = { entities, relationships };
