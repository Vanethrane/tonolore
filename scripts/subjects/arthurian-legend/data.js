/*
 * Arthurian legend subject data — Camelot, the Round Table, and the Grail.
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
    "arthurian-legend",
    "Arthurian legend",
    "topic",
    "King Arthur, Camelot, and the Matter of Britain from chronicle to romance.",
    "Arthurian legend is the public-domain Matter of Britain: Arthur's kingship, the Round Table, Lancelot and Guinevere, Merlin, the Grail, and Camlann. Geoffrey of Monmouth, the French vulgate, and Malory fix the main English-language shape."
);

entity(
    "camelot",
    "Camelot",
    "place",
    "Arthur's court and the seat of the Round Table.",
    "Camelot is the legendary capital where Arthur holds court, knights take the Pentecost feast, and the fellowship of the Table gathers before it breaks over Guinevere and the Grail."
);

entity(
    "avalon",
    "Avalon",
    "place",
    "Isle of apples where the wounded Arthur is borne.",
    "Avalon is the otherworld island of Morgan and the queens. After Camlann, Arthur is taken there to be healed — and, in later hope, to return."
);

entity(
    "tintagel",
    "Tintagel",
    "place",
    "Cornish stronghold of Arthur's conception in Geoffrey and later romance.",
    "Tintagel is Uther's scene of deception and Arthur's traditional birthplace on the Cornish coast, a hinge between chronicle geography and castle romance."
);

entity(
    "corbenic",
    "Corbenic",
    "place",
    "Grail castle of the Fisher King in the later French and Malory cycles.",
    "Corbenic — Carbonek — is the hidden castle where the Holy Grail is kept, the Maimed King waits, and Galahad completes the quest the other knights cannot."
);

/* ---------- People ---------- */

entity(
    "king-arthur",
    "King Arthur",
    "person",
    "Once and future king of the Britons, lord of Camelot.",
    "Arthur draws the sword, founds the fellowship, wages the Roman and Saxon wars of the chronicles, and falls to Mordred at Camlann. His return from Avalon is the legend's open ending."
);

entity(
    "guinevere",
    "Guinevere",
    "person",
    "Arthur's queen whose love for Lancelot splits the Table.",
    "Guinevere is the sovereign lady of Camelot. In the French-derived tradition her affair with Lancelot gives Mordred and Agravain the scandal that ends the fellowship."
);

entity(
    "lancelot",
    "Lancelot",
    "person",
    "Best knight of the world, lover of the queen, father of Galahad.",
    "Lancelot of the Lake is the French cycle's peerless knight: raised by the Lady of the Lake, unmatched in arms, and the man whose love makes him fail the Grail and later war on Arthur."
);

entity(
    "merlin",
    "Merlin",
    "person",
    "Prophet-mage who engineers Arthur's birth and kingship.",
    "Merlin, grown from Welsh Myrddin and Geoffrey's Ambrosius, moves Uther, the sword, and the early court, then is lost to Nimue or a living grave before the Table's fall."
);

entity(
    "morgan-le-fay",
    "Morgan le Fay",
    "person",
    "Arthur's sister, enchantress, enemy and Avalon healer.",
    "Morgan le Fay shifts from healer-sister to sorceress rival and back. She plots against Arthur and Guinevere, yet she is among the queens who bear him to Avalon."
);

entity(
    "gawain",
    "Gawain",
    "person",
    "Arthur's nephew, sun-strength knight of Orkney.",
    "Gawain is the early romances' first hero — courteous, solar, and later the bitter foe of Lancelot after Gareth's death. The Green Knight tale is his most famous English test."
);

entity(
    "galahad",
    "Galahad",
    "person",
    "Grail knight of perfect chastity, son of Lancelot.",
    "Galahad sits in the Siege Perilous, achieves the Holy Grail at Corbenic, and is taken from the world. He completes what Lancelot's love makes impossible."
);

entity(
    "mordred",
    "Mordred",
    "person",
    "Arthur's kinsman who usurps the realm and dies with him.",
    "Mordred — nephew or son, depending on the teller — seizes the kingdom while Arthur is abroad, accuses the queen, and meets Arthur at Camlann, where both are struck down."
);

entity(
    "perceval",
    "Perceval",
    "person",
    "Innocent knight who first sees the Grail procession.",
    "Perceval, the Welsh Peredur grown into French romance, fails to ask the healing question at the Fisher King's court and later joins the Grail quest that Galahad finishes."
);

entity(
    "lady-of-the-lake",
    "Lady of the Lake",
    "person",
    "Water fay who fosters Lancelot and gives Excalibur.",
    "The Lady of the Lake — Viviane, Nimue, or a sisterhood of fays — raises Lancelot, bestows or reclaims Excalibur, and in some tellings binds Merlin."
);

entity(
    "uther-pendragon",
    "Uther Pendragon",
    "person",
    "Arthur's father, who took Igraine at Tintagel by Merlin's art.",
    "Uther Pendragon is the war-leader whose desire for Igraine, enabled by Merlin, begets Arthur and leaves the boy to be hidden until the sword test."
);

entity(
    "bedivere",
    "Bedivere",
    "person",
    "Last companion, who returns Excalibur to the water.",
    "Bedivere stays with the dying Arthur, twice hides the sword, and finally casts Excalibur to the hand that rises from the lake."
);

entity(
    "kay",
    "Kay",
    "person",
    "Arthur's foster-brother and sharp-tongued seneschal.",
    "Sir Kay is the household officer of Camelot: foster-brother from Ector's hall, a comic or bitter seneschal, and one of the earliest named companions."
);

/* ---------- Objects, institutions, works ---------- */

entity(
    "excalibur",
    "Excalibur",
    "object",
    "Sword of kingship, given or returned by the Lady of the Lake.",
    "Excalibur is Arthur's sword — sometimes the stone-sword, more often the lake-gift with a scabbard that stops bleeding. Bedivere's throw closes the reign."
);

entity(
    "round-table",
    "Round Table",
    "organization",
    "Fellowship in which no knight sits above another.",
    "The Round Table, said to have come from Leodegrance with Guinevere, is the institution of Arthur's court: equal seats, the Siege Perilous, and a brotherhood that the Grail and the queen's love undo."
);

entity(
    "holy-grail",
    "Holy Grail",
    "object",
    "Vessel of the Last Supper or Joseph of Arimathea's relic.",
    "The Holy Grail enters Arthurian story from French spiritual romance: a dish or cup that feeds, heals, and judges. Only Galahad, Perceval, and Bors see it fully."
);

entity(
    "siege-perilous",
    "Siege Perilous",
    "object",
    "Empty seat at the Table reserved for the Grail knight.",
    "The Siege Perilous kills any unworthy sitter. Galahad's safe sitting is the sign that the Grail quest has found its champion."
);

entity(
    "battle-of-camlann",
    "Battle of Camlann",
    "event",
    "Last battle, where Arthur and Mordred strike each other down.",
    "Camlann is the end of the earthly reign: civil war after the Lancelot rupture, Mordred's usurpation, and the wounding that sends Arthur to Avalon."
);

entity(
    "grail-quest",
    "Grail Quest",
    "event",
    "Pentecost departure that empties Camelot of its best knights.",
    "The Grail Quest begins when the vessel appears at Camelot. Most knights fail; Lancelot sees a partial vision; Galahad, Perceval, and Bors reach Corbenic."
);

entity(
    "le-morte-darthur",
    "Le Morte Darthur",
    "work",
    "Malory's English compilation of the whole Arthurian arc.",
    "Le Morte Darthur (printed 1485) gathers the French vulgate and English tales into the standard English book: sword, Table, Grail, adultery, and Camlann."
);

entity(
    "thomas-malory",
    "Thomas Malory",
    "person",
    "Fifteenth-century compiler of Le Morte Darthur.",
    "Sir Thomas Malory wrote or compiled Le Morte Darthur in prison, translating and tightening the French cycles into the English narrative most later retellings follow."
);

entity(
    "geoffrey-of-monmouth",
    "Geoffrey of Monmouth",
    "person",
    "Twelfth-century author who made Arthur a British high king.",
    "Geoffrey's Historia Regum Britanniae (c. 1136) gave Arthur a chronicle reign, Merlin, Mordred, and Avalon — the Latin frame romances later filled with Lancelot and the Grail."
);

entity(
    "historia-regum-britanniae",
    "Historia Regum Britanniae",
    "work",
    "Geoffrey's history that launched the medieval Arthur industry.",
    "The History of the Kings of Britain traces Britain from Brutus to Cadwallader and inserts Arthur as a conqueror-king, the seed of the later romance explosion."
);

entity(
    "pendragon",
    "Pendragon",
    "concept",
    "Dragon-head title of Uther and the royal line.",
    "Pendragon is the war-standard and surname of Uther and Arthur: a claim to British high kingship that later storytellers treat as the family name of Camelot."
);

/* ---------- Relationships ---------- */

rel("king-arthur", "camelot", "leads", "Arthur holds court at Camelot.", 0.99, 0.98);
rel("guinevere", "king-arthur", "supports", "Guinevere is Arthur's queen and lady of Camelot.", 0.97, 0.94);
rel("round-table", "camelot", "located_in", "The Round Table sits in Arthur's hall at Camelot.", 0.98, 0.96);
rel("king-arthur", "round-table", "leads", "Arthur is the head of the Round Table fellowship.", 0.98, 0.96);
rel("lancelot", "round-table", "member_of", "Lancelot is the Table's greatest knight.", 0.97, 0.95);
rel("gawain", "round-table", "member_of", "Gawain is Arthur's nephew among the Table.", 0.96, 0.93);
rel("galahad", "round-table", "member_of", "Galahad takes the Siege Perilous at the Table.", 0.96, 0.93);
rel("perceval", "round-table", "member_of", "Perceval rides from the Table toward the Grail.", 0.95, 0.91);
rel("kay", "round-table", "member_of", "Kay serves as seneschal of the Table.", 0.94, 0.9);
rel("bedivere", "round-table", "member_of", "Bedivere is among the last knights of the Table.", 0.94, 0.9);
rel("mordred", "round-table", "member_of", "Mordred sits at the Table before he breaks the realm.", 0.93, 0.89);

rel("merlin", "king-arthur", "created", "Merlin arranged Arthur's birth and rise to the sword.", 0.97, 0.95);
rel("uther-pendragon", "king-arthur", "created", "Uther Pendragon is Arthur's father.", 0.98, 0.96);
rel("uther-pendragon", "tintagel", "involved", "Uther begot Arthur at Tintagel through Merlin's disguise.", 0.96, 0.93);
rel("uther-pendragon", "pendragon", "uses", "Uther took the Pendragon name and standard.", 0.95, 0.92);
rel("king-arthur", "pendragon", "member_of", "Arthur inherits the Pendragon claim.", 0.95, 0.92);

rel("lady-of-the-lake", "excalibur", "created", "The Lady of the Lake gives Excalibur to Arthur.", 0.96, 0.93);
rel("king-arthur", "excalibur", "uses", "Arthur wields Excalibur as the sword of his reign.", 0.98, 0.96);
rel("bedivere", "excalibur", "involved", "Bedivere returns Excalibur to the water after Camlann.", 0.96, 0.93);
rel("lady-of-the-lake", "lancelot", "created", "The Lady of the Lake fostered Lancelot.", 0.95, 0.92);
rel("lancelot", "guinevere", "connected_to", "Lancelot's love for Guinevere is the court's fatal bond.", 0.98, 0.96);
rel("lancelot", "galahad", "created", "Lancelot is father of Galahad.", 0.97, 0.94);
rel("galahad", "siege-perilous", "uses", "Galahad alone may sit in the Siege Perilous.", 0.97, 0.95);
rel("siege-perilous", "round-table", "part_of", "The Siege Perilous is the reserved seat of the Round Table.", 0.97, 0.94);

rel("holy-grail", "corbenic", "located_in", "The Grail is kept at Corbenic until the chosen knights arrive.", 0.96, 0.93);
rel("grail-quest", "holy-grail", "involved", "The Grail Quest is the search for the Holy Grail.", 0.99, 0.97);
rel("galahad", "grail-quest", "leads", "Galahad is the knight who achieves the Grail.", 0.97, 0.95);
rel("perceval", "grail-quest", "involved", "Perceval is one of the three who see the Grail.", 0.95, 0.92);
rel("lancelot", "grail-quest", "involved", "Lancelot comes nearest of the sinful knights and still fails.", 0.95, 0.91);
rel("grail-quest", "camelot", "occurred_at", "The Quest is proclaimed when the Grail appears at Camelot.", 0.94, 0.9);

rel("mordred", "king-arthur", "opposed_by", "Mordred usurps Arthur and faces him at Camlann.", 0.98, 0.96);
rel("morgan-le-fay", "king-arthur", "opposed_by", "Morgan plots against Arthur even as she later bears him to Avalon.", 0.93, 0.89);
rel("morgan-le-fay", "avalon", "located_in", "Morgan is among the queens of Avalon.", 0.95, 0.92);
rel("battle-of-camlann", "mordred", "involved", "Mordred is slain at Camlann as he wounds Arthur.", 0.98, 0.96);
rel("battle-of-camlann", "king-arthur", "involved", "Arthur receives his mortal wound at Camlann.", 0.99, 0.97);
rel("king-arthur", "avalon", "located_in", "The wounded Arthur is taken to Avalon.", 0.96, 0.93);
rel("gawain", "lancelot", "opposed_by", "Gawain becomes Lancelot's enemy after the deaths at Guinevere's rescue.", 0.94, 0.9);

rel("geoffrey-of-monmouth", "historia-regum-britanniae", "produced", "Geoffrey wrote the Historia Regum Britanniae.", 0.99, 0.97);
rel("historia-regum-britanniae", "arthurian-legend", "inspired", "Geoffrey's history made Arthur a European literary king.", 0.97, 0.94);
rel("thomas-malory", "le-morte-darthur", "produced", "Malory compiled Le Morte Darthur.", 0.99, 0.97);
rel("le-morte-darthur", "arthurian-legend", "inspired", "Malory's book is the standard English telling of the whole arc.", 0.98, 0.96);
rel("historia-regum-britanniae", "le-morte-darthur", "preceded", "Geoffrey's Latin king stands behind the romance Malory later Englishing.", 0.92, 0.88);

module.exports = { entities, relationships };
