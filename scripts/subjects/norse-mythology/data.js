/*
 * Norse mythology subject data — Aesir, worlds of Yggdrasil, and Ragnarok.
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
    "norse-mythology",
    "Norse mythology",
    "topic",
    "Aesir and Vanir, the nine worlds on Yggdrasil, and the twilight of the gods.",
    "Norse mythology is the public-domain corpus preserved mainly in the Poetic Edda and Snorri's Prose Edda: Odin, Thor, Loki, the worlds hanging on Yggdrasil, and the foretold battle of Ragnarok."
);

entity(
    "yggdrasil",
    "Yggdrasil",
    "place",
    "World-tree that holds Asgard, Midgard, and the other realms.",
    "Yggdrasil is the ash whose roots and branches bind the nine worlds. Gods and creatures meet at its well; it shudders when Ragnarok nears."
);

entity(
    "asgard",
    "Asgard",
    "place",
    "Fortified home of the Aesir, reached by the Bifrost.",
    "Asgard is the gods' enclosure: Valhalla, Odin's high seat, and the halls of Thor and the other Aesir, linked to Midgard by the rainbow bridge."
);

entity(
    "midgard",
    "Midgard",
    "place",
    "Middle enclosure — the world of humans.",
    "Midgard is the human world, girdled by the ocean where Jormungandr lies. The gods built it from the body of Ymir and set it under Asgard's watch."
);

entity(
    "jotunheim",
    "Jotunheim",
    "place",
    "Land of the jotnar, rivals and in-laws of the Aesir.",
    "Jotunheim is the giant-country from which Utgarda-Loki, Thrym, and other jotnar test Thor and the gods — a neighbor-world, not a distant hell."
);

entity(
    "helheim",
    "Helheim",
    "place",
    "Hall of Hel, where many who die of sickness or age go.",
    "Helheim, in the north of the dead worlds, is Hel's cold hall. Baldur rides there after Loki's trick; Hermod fails to win him back."
);

entity(
    "valhalla",
    "Valhalla",
    "place",
    "Odin's hall of the slain, who will fight at Ragnarok.",
    "Valhalla receives warriors chosen by the Valkyries. They feast and train until Odin leads them out at the last battle."
);

entity(
    "bifrost",
    "Bifrost",
    "place",
    "Rainbow bridge Heimdall guards between Asgard and Midgard.",
    "Bifrost is the burning bridge the gods ride. Heimdall watches it; at Ragnarok the sons of Muspell will cross and the bridge will break."
);

/* ---------- Gods and beings ---------- */

entity(
    "aesir",
    "Aesir",
    "organization",
    "The principal tribe of gods: Odin, Thor, Frigg, and their kin.",
    "The Aesir are the warlike gods of Asgard. They warred with the Vanir, exchanged hostages, and remain the central divine household of the Eddas."
);

entity(
    "vanir",
    "Vanir",
    "organization",
    "Gods of wealth and fertility, kin to Freyja and Freyr.",
    "The Vanir, associated with Vanaheim, include Njord, Freyr, and Freyja. After the Aesir–Vanir war they live among the Aesir as exchanged kin."
);

entity(
    "odin",
    "Odin",
    "person",
    "One-eyed Allfather, seeker of runes, lord of the slain.",
    "Odin hung on Yggdrasil for the runes, gave an eye at Mimir's well, and gathers the einherjar. He is a god of poetry, kingship, and a doomed wisdom that sees Ragnarok coming."
);

entity(
    "thor",
    "Thor",
    "person",
    "Thunderer who defends Asgard and Midgard with Mjolnir.",
    "Thor, son of Odin and Jord, is the hammer-god who rides to Jotunheim and will face Jormungandr at Ragnarok. Farmers and sailors invoked him more often than they invoked Odin."
);

entity(
    "freyja",
    "Freyja",
    "person",
    "Vanir goddess of love, seiðr, and a share of the slain.",
    "Freyja weeps gold, practices seiðr, and takes half the battle-dead into Folkvangr while Odin takes the rest into Valhalla. She is among the Vanir who dwell with the Aesir."
);

entity(
    "freyr",
    "Freyr",
    "person",
    "Vanir lord of harvest and peace, who dies without his sword.",
    "Freyr, brother of Freyja, rules rain and good seasons. He gives away his sword for Gerd and so meets Surtr unarmed at Ragnarok."
);

entity(
    "loki",
    "Loki",
    "person",
    "Blood-brother of Odin, trickster, and father of the world's ending.",
    "Loki moves among the Aesir as helper and traitor. He sires Fenrir, Jormungandr, and Hel; he engineers Baldur's death; he is bound until Ragnarok, when he breaks free."
);

entity(
    "baldur",
    "Baldur",
    "person",
    "Shining son of Odin whose death begins the last winter.",
    "Baldur is so bright that Frigg exacts oaths from all things not to harm him — except mistletoe. Loki guides Hod's shot; Baldur goes to Hel and will return after Ragnarok."
);

entity(
    "frigg",
    "Frigg",
    "person",
    "Odin's wife, who almost made Baldur invulnerable.",
    "Frigg sits in Fensalir and knows many fates she does not speak. Her failed warding of Baldur is the turning of the late mythic age."
);

entity(
    "hel",
    "Hel",
    "person",
    "Loki's daughter who keeps the hall of the ordinary dead.",
    "Hel was cast into the dead-world by Odin and given authority there. She receives Baldur and will not release him unless all things weep."
);

entity(
    "heimdall",
    "Heimdall",
    "person",
    "White watchman of the Bifrost, foe of Loki at the end.",
    "Heimdall sees and hears across the worlds and will blow Gjallarhorn when Ragnarok starts. He and Loki slay one another in the last fight."
);

entity(
    "tyr",
    "Tyr",
    "person",
    "One-handed god of assemblies who bound Fenrir.",
    "Tyr placed his hand in Fenrir's mouth as pledge when the gods bound the wolf with Gleipnir. He loses the hand and remains the Aesir's old god of law and war."
);

entity(
    "valkyries",
    "Valkyries",
    "organization",
    "Chooser-maidens who bring the slain to Odin and Freyja.",
    "The Valkyries ride over battlefields, allot death, and serve mead in Valhalla. Named figures such as Brynhild and Sigrdrifa stand at the edge of heroic legend."
);

entity(
    "fenrir",
    "Fenrir",
    "person",
    "Wolf raised in Asgard, bound until he kills Odin.",
    "Fenrir grows too large for the gods, bites off Tyr's hand, and waits bound on the islet. At Ragnarok he swallows Odin and is killed by Vidar."
);

entity(
    "jormungandr",
    "Jormungandr",
    "person",
    "World-serpent who encircles Midgard and will poison Thor.",
    "Jormungandr, cast into the ocean by Odin, grows until he grips his own tail. Thor fishes for him and will kill him at Ragnarok, walking nine paces before falling to the venom."
);

entity(
    "surtr",
    "Surtr",
    "person",
    "Fire-giant who will burn the world at Ragnarok.",
    "Surtr waits at the edge of Muspell with a bright sword. He leads the fire-host over Bifrost and fells Freyr; flame follows him across the earth."
);

/* ---------- Objects, works, events ---------- */

entity(
    "mjolnir",
    "Mjolnir",
    "object",
    "Thor's hammer, short-hafted, that returns when thrown.",
    "Mjolnir was forged by the dwarfs Brokkr and Eitri after Loki's wager. Thor hallows and destroys with it; giants fear the hammer more than any other Aesir weapon."
);

entity(
    "poetic-edda",
    "Poetic Edda",
    "work",
    "Codex Regius poems: Voluspa, Havamal, and the heroic lays.",
    "The Poetic Edda is the chief verse source for Norse myth: the seeress's prophecy of Ragnarok, Odin's sayings, and the lays of Sigurd. It is public-domain medieval tradition."
);

entity(
    "prose-edda",
    "Prose Edda",
    "work",
    "Snorri Sturluson's handbook that retells the myths in prose.",
    "The Prose Edda, written in thirteenth-century Iceland, organizes the gods, kennings, and Ragnarok narrative that later readers treat as a continuous story."
);

entity(
    "snorri-sturluson",
    "Snorri Sturluson",
    "person",
    "Icelandic chieftain who compiled the Prose Edda.",
    "Snorri Sturluson (1179–1241) wrote the Prose Edda as a poetics manual and thereby preserved systematic retellings of the Aesir, Vanir, and the last battle."
);

entity(
    "ragnarok",
    "Ragnarok",
    "event",
    "Doom of the gods: Fenrir, the serpent, Surtr, and the world's drowning.",
    "Ragnarok is the foretold collapse — Fimbulwinter, the unbinding of Loki and Fenrir, the deaths of Odin, Thor, Freyr, Heimdall, and Loki, and a green earth that rises afterward."
);

entity(
    "death-of-baldur",
    "Death of Baldur",
    "event",
    "Mistletoe killing that sets the path to Ragnarok.",
    "The death of Baldur — Hod's blind shot, Loki's guidance, Hel's refusal — is the crime the Aesir cannot undo and the grief that darkens the last age."
);

/* ---------- Relationships ---------- */

rel("yggdrasil", "norse-mythology", "part_of", "Yggdrasil is the world-tree of Norse myth.", 0.99, 0.97);
rel("asgard", "yggdrasil", "located_in", "Asgard is one of the worlds held in Yggdrasil.", 0.97, 0.94);
rel("midgard", "yggdrasil", "located_in", "Midgard hangs on Yggdrasil as the human enclosure.", 0.97, 0.94);
rel("jotunheim", "yggdrasil", "located_in", "Jotunheim is the giant-world on the tree.", 0.95, 0.91);
rel("helheim", "yggdrasil", "located_in", "Helheim lies among the dead-worlds of the tree.", 0.95, 0.91);
rel("asgard", "aesir", "contains", "Asgard is the fortified home of the Aesir.", 0.98, 0.96);
rel("valhalla", "asgard", "located_in", "Valhalla stands in Asgard as Odin's hall of the slain.", 0.98, 0.96);
rel("bifrost", "asgard", "connected_to", "Bifrost joins Asgard to Midgard.", 0.97, 0.94);
rel("heimdall", "bifrost", "uses", "Heimdall watches the Bifrost.", 0.98, 0.95);

rel("odin", "aesir", "leads", "Odin is chief of the Aesir.", 0.99, 0.98);
rel("thor", "aesir", "member_of", "Thor is the Aesir thunderer who guards Midgard.", 0.98, 0.96);
rel("frigg", "aesir", "member_of", "Frigg is Odin's wife among the Aesir.", 0.97, 0.94);
rel("baldur", "aesir", "member_of", "Baldur is the shining son of the Aesir.", 0.97, 0.94);
rel("tyr", "aesir", "member_of", "Tyr is the one-handed Aesir of law and war.", 0.96, 0.93);
rel("heimdall", "aesir", "member_of", "Heimdall is the Aesir watchman of the bridge.", 0.96, 0.93);
rel("freyja", "vanir", "member_of", "Freyja is a Vanir goddess dwelling with the Aesir.", 0.97, 0.94);
rel("freyr", "vanir", "member_of", "Freyr is a Vanir lord of harvest who lives in Asgard's circle.", 0.96, 0.93);
rel("vanir", "aesir", "connected_to", "The Vanir and Aesir made peace by exchanging hostages.", 0.95, 0.92);

rel("loki", "odin", "connected_to", "Loki is Odin's blood-brother and the Aesir's most dangerous guest.", 0.96, 0.93);
rel("loki", "fenrir", "created", "Loki is father of Fenrir.", 0.98, 0.96);
rel("loki", "jormungandr", "created", "Loki is father of Jormungandr.", 0.98, 0.96);
rel("loki", "hel", "created", "Loki is father of Hel.", 0.98, 0.96);
rel("hel", "helheim", "leads", "Hel rules the hall of Helheim.", 0.98, 0.96);
rel("jormungandr", "midgard", "located_in", "Jormungandr encircles Midgard in the outer ocean.", 0.97, 0.94);
rel("tyr", "fenrir", "involved", "Tyr lost his hand binding Fenrir.", 0.97, 0.95);
rel("thor", "mjolnir", "uses", "Thor wields Mjolnir against giants and the world-serpent.", 0.99, 0.97);
rel("thor", "jormungandr", "opposed_by", "Thor and Jormungandr are fated to kill one another.", 0.97, 0.95);

rel("valkyries", "valhalla", "supports", "Valkyries bring the slain into Valhalla.", 0.96, 0.93);
rel("odin", "valhalla", "leads", "Odin hosts the einherjar in Valhalla.", 0.97, 0.94);
rel("freyja", "valkyries", "connected_to", "Freyja claims half the slain the Valkyries choose.", 0.93, 0.89);

rel("loki", "death-of-baldur", "caused", "Loki guided the mistletoe that killed Baldur.", 0.98, 0.96);
rel("baldur", "death-of-baldur", "involved", "Baldur dies and goes to Helheim.", 0.99, 0.97);
rel("frigg", "death-of-baldur", "involved", "Frigg's missed oath on mistletoe makes Baldur's death possible.", 0.96, 0.93);
rel("death-of-baldur", "ragnarok", "preceded", "Baldur's death darkens the age that ends at Ragnarok.", 0.95, 0.92);
rel("ragnarok", "fenrir", "involved", "Fenrir breaks free and swallows Odin at Ragnarok.", 0.97, 0.95);
rel("ragnarok", "surtr", "involved", "Surtr fires the world at Ragnarok.", 0.96, 0.93);
rel("ragnarok", "thor", "involved", "Thor kills the serpent and dies of its venom at Ragnarok.", 0.96, 0.93);
rel("odin", "ragnarok", "involved", "Odin falls to Fenrir in the last battle.", 0.96, 0.93);

rel("snorri-sturluson", "prose-edda", "produced", "Snorri compiled the Prose Edda.", 0.99, 0.97);
rel("poetic-edda", "ragnarok", "inspired", "Voluspa in the Poetic Edda prophesies Ragnarok.", 0.97, 0.94);
rel("prose-edda", "poetic-edda", "influenced", "Snorri's handbook retells and organizes the older eddic poems.", 0.94, 0.9);
rel("poetic-edda", "norse-mythology", "part_of", "The Poetic Edda is a primary source for Norse myth.", 0.98, 0.96);

module.exports = { entities, relationships };
