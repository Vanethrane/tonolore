/*
 * Critical Role subject data — Mercer, Exandria, and the parties of each campaign.
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

/* ---------- Root / company / table ---------- */

entity(
    "critical-role",
    "Critical Role",
    "topic",
    "Live D&D actual-play of Vox Machina, the Mighty Nein, and Bells Hells in Exandria.",
    "Critical Role is the streamed table where Matthew Mercer runs Exandria for a cast of voice actors: Campaign 1's Vox Machina, Campaign 2's Mighty Nein, Campaign 3's Bells Hells, and the Amazon adaptation The Legend of Vox Machina.",
    "documented"
);

entity(
    "matthew-mercer",
    "Matthew Mercer",
    "person",
    "Dungeon Master of Exandria and creative lead of Critical Role.",
    "Matthew Mercer is the Dungeon Master who built Exandria, runs every main campaign at the Critical Role table, and voices a rotating cast of NPCs from Whitestone to the Ruby Vanguard.",
    "documented"
);

entity(
    "critical-role-productions",
    "Critical Role Productions",
    "organization",
    "Studio that produces the streams, books, and The Legend of Vox Machina.",
    "Critical Role Productions is the company around the cast — the Twitch and Beacon streams, the publishing line, and the deal that turned Campaign 1 into The Legend of Vox Machina.",
    "documented"
);

entity(
    "laura-bailey",
    "Laura Bailey",
    "person",
    "Player of Vex'ahlia, Jester Lavorre, and Imogen Temult.",
    "Laura Bailey is a founding Critical Role player whose characters include Vex'ahlia of Vox Machina, Jester of the Mighty Nein, and Imogen of Bells Hells.",
    "documented"
);

entity(
    "liam-obrien",
    "Liam O'Brien",
    "person",
    "Player of Vax'ildan, Caleb Widogast, and Orym.",
    "Liam O'Brien plays Vax'ildan in Campaign 1, Caleb Widogast in Campaign 2, and Orym of the Air Ashari in Campaign 3, a through-line of quieter, grief-heavy leads.",
    "documented"
);

entity(
    "taliesin-jaffe",
    "Taliesin Jaffe",
    "person",
    "Player of Percy, Molly/Kingsley, Caduceus, and Ashton.",
    "Taliesin Jaffe originated Percival de Rolo for Vox Machina, then Mollymauk and Caduceus for the Mighty Nein, and Ashton Greymoore for Bells Hells.",
    "documented"
);

entity(
    "marisha-ray",
    "Marisha Ray",
    "person",
    "Creative officer and player of Keyleth, Beauregard, and Laudna.",
    "Marisha Ray is Critical Role's creative officer and the player of Keyleth of the Air Ashari, Beauregard Lionett, and Laudna of Bells Hells.",
    "documented"
);

entity(
    "travis-willingham",
    "Travis Willingham",
    "person",
    "CEO and player of Grog, Fjord, and Chetney.",
    "Travis Willingham is the company's CEO and the player of Grog Strongjaw, Fjord Stone, and later Chetney Pock O'Pea at the Critical Role table.",
    "documented"
);

entity(
    "ashley-johnson",
    "Ashley Johnson",
    "person",
    "Player of Pike Trickfoot, Yasha, and Fearne Calloway.",
    "Ashley Johnson plays Pike Trickfoot in Vox Machina, Yasha Nydoorin in the Mighty Nein, and Fearne Calloway in Bells Hells, often remote in the early campaigns.",
    "documented"
);

entity(
    "sam-riegel",
    "Sam Riegel",
    "person",
    "Player of Scanlan, Tary, Nott/Veth, and Fresh Cut Grass.",
    "Sam Riegel plays Scanlan Shorthalt and later Taryon Darrington in Campaign 1, Nott the Brave — Veth Brenatto — in Campaign 2, and Fresh Cut Grass in Campaign 3.",
    "documented"
);

/* ---------- Works ---------- */

entity(
    "campaign-one",
    "Campaign 1",
    "work",
    "First streamed campaign: Vox Machina across Tal'Dorei and beyond.",
    "Campaign 1 is the Vox Machina game that moved from a home table onto Geek & Sundry and then Critical Role's own channel: Whitestone, the Chroma Conclave, and Vecna.",
    "documented"
);

entity(
    "campaign-two",
    "Campaign 2",
    "work",
    "Wildemount campaign of the Mighty Nein, from Trostenwald to the Assembly.",
    "Campaign 2 follows the Mighty Nein through Wildemount: the Empire–Dynasty war, the Angel of Irons, and the Assembly, with Jester, Caleb, and Fjord at the party's center.",
    "documented"
);

entity(
    "campaign-three",
    "Campaign 3",
    "work",
    "Marquet campaign of Bells Hells and the Predathos arc.",
    "Campaign 3 is the Bells Hells game set largely in Marquet, the campaign of Imogen, Laudna, and the Ruidus / Predathos plot that pulls in faces from the earlier parties.",
    "documented"
);

entity(
    "the-legend-of-vox-machina",
    "The Legend of Vox Machina",
    "work",
    "Amazon animated series adapted from Campaign 1.",
    "The Legend of Vox Machina is the Prime Video series that adapts Vox Machina's Whitestone and dragon arcs, with the cast voicing their Campaign 1 characters.",
    "documented"
);

/* ---------- World ---------- */

entity(
    "exandria",
    "Exandria",
    "place",
    "Mercer's world of Tal'Dorei, Wildemount, Marquet, and the gods.",
    "Exandria is the campaign world Matthew Mercer built: Tal'Dorei for Vox Machina, Wildemount for the Mighty Nein, Marquet for Bells Hells, and a shared pantheon and Calamity history."
);

entity(
    "tal-dorei",
    "Tal'Dorei",
    "place",
    "Continent of Emon, Whitestone, and Vox Machina's first roads.",
    "Tal'Dorei is the continent of Campaign 1: Emon under the Cloud and then the Conclave, Whitestone of the de Rolos, and the Ashari at Zephrah."
);

entity(
    "wildemount",
    "Wildemount",
    "place",
    "Continent of the Dwendalian Empire, Xhorhas, and the Mighty Nein.",
    "Wildemount is the Campaign 2 map: the Dwendalian Empire, the Kryn Dynasty of Xhorhas, the coast of the Menagerie, and the roads the Mighty Nein wander."
);

entity(
    "whitestone",
    "Whitestone",
    "place",
    "de Rolo city Vox Machina frees from the Briarwoods.",
    "Whitestone is Percy's home city in Tal'Dorei, occupied by the Briarwoods and retaken by Vox Machina in the arc The Legend of Vox Machina later puts on screen."
);

/* ---------- Parties and members ---------- */

entity(
    "vox-machina",
    "Vox Machina",
    "organization",
    "Campaign 1 party: Vex, Vax, Percy, Pike, Keyleth, Grog, Scanlan.",
    "Vox Machina is the adventuring party of Campaign 1 — twins Vex and Vax, Percival de Rolo, Pike Trickfoot, Keyleth, Grog, and Scanlan — who save Whitestone and later face Vecna."
);

entity(
    "vex-ahlia",
    "Vex'ahlia",
    "person",
    "Half-elf ranger-rogue of Vox Machina, twin of Vax, later Baroness of the Third House.",
    "Vex'ahlia is Laura Bailey's Campaign 1 ranger, twin of Vax'ildan, Trinket's companion, and later Lady Vex'ahlia de Rolo of Whitestone."
);

entity(
    "percy-de-rolo",
    "Percival de Rolo",
    "person",
    "Whitestone gunslinger whose pepperbox and vengeance open Campaign 1.",
    "Percival Fredrickstein von Musel Klossowski de Rolo III is Taliesin Jaffe's gunslinger, the Whitestone heir whose barrels and Orthax haunt Vox Machina's early arc."
);

entity(
    "vaxildan",
    "Vax'ildan",
    "person",
    "Half-elf rogue who becomes the Champion of the Raven Queen.",
    "Vax'ildan is Liam O'Brien's Campaign 1 rogue, twin of Vex, who takes the Raven Queen's champion mantle and does not walk out of the Vecna fight the same way."
);

entity(
    "pike-trickfoot",
    "Pike Trickfoot",
    "person",
    "Gnome cleric of Sarenrae and the party's conscience.",
    "Pike Trickfoot is Ashley Johnson's holy gnome, the Sarenrae cleric who pulls Vox Machina back from the dead and from Grog's worst ideas."
);

entity(
    "keyleth",
    "Keyleth",
    "person",
    "Air Ashari druid who is working through her Aramenté.",
    "Keyleth of the Air Ashari is Marisha Ray's Campaign 1 druid, a hesitant leader whose tree-and-volcano magic and later Voice of the Tempest rank outlast the campaign."
);

entity(
    "grog-strongjaw",
    "Grog Strongjaw",
    "person",
    "Goliath barbarian of the Herd of Storms, Pike's best friend.",
    "Grog Strongjaw is Travis Willingham's Campaign 1 barbarian, a goliath whose Craven Edge, Titanstone Knuckles, and loyalty to Pike define Vox Machina's muscle."
);

entity(
    "scanlan-shorthalt",
    "Scanlan Shorthalt",
    "person",
    "Gnome bard of Scanlan's Hand and the party's filthy inspiration.",
    "Scanlan Shorthalt is Sam Riegel's Campaign 1 bard, the gnome whose songs, mansion, and later departure-and-return sit beside Pike and Kaylie in Vox Machina's heart."
);

entity(
    "mighty-nein",
    "Mighty Nein",
    "organization",
    "Campaign 2 party: Jester, Caleb, Fjord, Beau, Nott, Yasha, Caduceus.",
    "The Mighty Nein are the misfit party of Campaign 2 — Jester, Fjord, Caleb, Beau, Nott, Yasha, Molly then Caduceus — who stumble from Trostenwald into a war and a god-plot."
);

entity(
    "jester-lavorre",
    "Jester Lavorre",
    "person",
    "Tiefling cleric of the Traveler and the Nein's bright chaos.",
    "Jester Lavorre is Laura Bailey's Campaign 2 cleric, the sapphire tiefling from Nicodranas whose Traveler faith, pastries, and sketches pull the Mighty Nein together."
);

entity(
    "caleb-widogast",
    "Caleb Widogast",
    "person",
    "Empire wizard who used to be Bren Aldric Ermendrud.",
    "Caleb Widogast is Liam O'Brien's Campaign 2 wizard, a filthy-coat transmuter fleeing the Soltryce Academy and Trent Ikithon while the Mighty Nein become his second family."
);

entity(
    "fjord-stone",
    "Fjord",
    "person",
    "Half-orc warlock-paladin who captains the Nein Heroez.",
    "Fjord is Travis Willingham's Campaign 2 lead, a coastal half-orc who takes a uk'otoa pact, then the Wildmother, and a ship the Mighty Nein keep almost sinking."
);

entity(
    "bells-hells",
    "Bells Hells",
    "organization",
    "Campaign 3 party of Imogen, Laudna, Orym, Fearne, and the Jrusar crew.",
    "Bells Hells are the Campaign 3 party gathered in Jrusar — Imogen Temult, Laudna, Orym, Fearne, Ashton, Fresh Cut Grass, and later Chetney — who walk into the Ruidus crisis."
);

entity(
    "imogen-temult",
    "Imogen Temult",
    "person",
    "Psionic sorcerer of Gelvaan whose dreams pull Bells Hells toward Ruidus.",
    "Imogen Temult is Laura Bailey's Campaign 3 sorcerer, a telepath from Gelvaan whose red-storm dreams and Laudna bond sit at the center of Bells Hells."
);

entity(
    "laudna",
    "Laudna",
    "person",
    "Hollow-one warlock-sorcerer hung in Whitestone and walked back.",
    "Laudna is Marisha Ray's Campaign 3 warlock, a Whitestone hanging victim carrying Delilah Briarwood's shadow, Imogen's partner, and Bells Hells' longest ghost."
);

/* ---------- Relationships ---------- */

rel("matthew-mercer", "critical-role", "created", "Matthew Mercer is the Dungeon Master who made Critical Role's Exandria table.", 0.99, 0.99);
rel("matthew-mercer", "exandria", "created", "Matthew Mercer created the world of Exandria.", 0.98, 0.97);
rel("critical-role-productions", "critical-role", "produced", "Critical Role Productions produces the streams and spin-off series.", 0.97, 0.95);
rel("matthew-mercer", "campaign-one", "produced", "Mercer DMs Campaign 1 for Vox Machina.", 0.97, 0.95);
rel("matthew-mercer", "campaign-two", "produced", "Mercer DMs Campaign 2 for the Mighty Nein.", 0.97, 0.95);
rel("matthew-mercer", "campaign-three", "produced", "Mercer DMs Campaign 3 for Bells Hells.", 0.97, 0.95);

rel("campaign-one", "critical-role", "part_of", "Campaign 1 is Critical Role's first streamed campaign.", 0.98, 0.97);
rel("campaign-two", "critical-role", "part_of", "Campaign 2 is Critical Role's Wildemount campaign.", 0.98, 0.96);
rel("campaign-three", "critical-role", "part_of", "Campaign 3 is Critical Role's Marquet campaign.", 0.97, 0.95);
rel("campaign-one", "campaign-two", "preceded", "Campaign 1 ended before Campaign 2 began.", 0.96, 0.93);
rel("campaign-two", "campaign-three", "preceded", "Campaign 2 ended before Campaign 3 began.", 0.96, 0.93);
rel("the-legend-of-vox-machina", "campaign-one", "adapted_from", "The Legend of Vox Machina adapts Campaign 1.", 0.97, 0.95);
rel("campaign-one", "the-legend-of-vox-machina", "adapted_into", "Campaign 1 was adapted into The Legend of Vox Machina.", 0.97, 0.95);
rel("critical-role-productions", "the-legend-of-vox-machina", "produced", "Critical Role Productions made The Legend of Vox Machina with Amazon.", 0.95, 0.92);

rel("tal-dorei", "exandria", "located_in", "Tal'Dorei is a continent of Exandria.", 0.97, 0.95);
rel("wildemount", "exandria", "located_in", "Wildemount is a continent of Exandria.", 0.97, 0.95);
rel("whitestone", "tal-dorei", "located_in", "Whitestone stands in Tal'Dorei.", 0.96, 0.93);
rel("campaign-one", "tal-dorei", "occurred_at", "Campaign 1 is set largely on Tal'Dorei.", 0.95, 0.92);
rel("campaign-two", "wildemount", "occurred_at", "Campaign 2 is set largely in Wildemount.", 0.95, 0.92);
rel("vox-machina", "whitestone", "located_in", "Vox Machina retakes and later calls Whitestone home.", 0.94, 0.9);

rel("vox-machina", "campaign-one", "involved", "Vox Machina is the player party of Campaign 1.", 0.99, 0.98);
rel("mighty-nein", "campaign-two", "involved", "The Mighty Nein are the player party of Campaign 2.", 0.99, 0.98);
rel("bells-hells", "campaign-three", "involved", "Bells Hells are the player party of Campaign 3.", 0.99, 0.97);
rel("vox-machina", "the-legend-of-vox-machina", "involved", "Vox Machina is the adventuring party of the animated series.", 0.96, 0.93);

rel("vex-ahlia", "vox-machina", "member_of", "Vex'ahlia is the ranger of Vox Machina.", 0.98, 0.96);
rel("percy-de-rolo", "vox-machina", "member_of", "Percy is the gunslinger of Vox Machina.", 0.98, 0.96);
rel("vaxildan", "vox-machina", "member_of", "Vax'ildan is the rogue of Vox Machina.", 0.98, 0.96);
rel("pike-trickfoot", "vox-machina", "member_of", "Pike Trickfoot is the cleric of Vox Machina.", 0.97, 0.95);
rel("keyleth", "vox-machina", "member_of", "Keyleth is the druid of Vox Machina.", 0.97, 0.95);
rel("grog-strongjaw", "vox-machina", "member_of", "Grog Strongjaw is the barbarian of Vox Machina.", 0.97, 0.95);
rel("scanlan-shorthalt", "vox-machina", "member_of", "Scanlan Shorthalt is the bard of Vox Machina.", 0.97, 0.95);
rel("percy-de-rolo", "whitestone", "located_in", "Percy is the de Rolo heir of Whitestone.", 0.96, 0.93);
rel("vex-ahlia", "vaxildan", "connected_to", "Vex'ahlia and Vax'ildan are twins in Vox Machina.", 0.97, 0.94);
rel("vex-ahlia", "percy-de-rolo", "connected_to", "Vex later marries Percy and rules Whitestone with him.", 0.95, 0.91);

rel("jester-lavorre", "mighty-nein", "member_of", "Jester Lavorre is the Traveler cleric of the Mighty Nein.", 0.98, 0.96);
rel("caleb-widogast", "mighty-nein", "member_of", "Caleb Widogast is the wizard of the Mighty Nein.", 0.98, 0.96);
rel("fjord-stone", "mighty-nein", "leads", "Fjord often captains the Mighty Nein on land and sea.", 0.95, 0.92);
rel("imogen-temult", "bells-hells", "member_of", "Imogen Temult is the psionic sorcerer of Bells Hells.", 0.97, 0.95);
rel("laudna", "bells-hells", "member_of", "Laudna is the hollow-one warlock of Bells Hells.", 0.97, 0.95);
rel("imogen-temult", "laudna", "supports", "Imogen and Laudna are the paired heart of Bells Hells.", 0.95, 0.92);
rel("laudna", "whitestone", "connected_to", "Laudna was hanged in Whitestone and still carries that city's ghost.", 0.93, 0.89);

rel("laura-bailey", "vex-ahlia", "created", "Laura Bailey plays Vex'ahlia.", 0.98, 0.96);
rel("laura-bailey", "jester-lavorre", "created", "Laura Bailey plays Jester Lavorre.", 0.97, 0.95);
rel("laura-bailey", "imogen-temult", "created", "Laura Bailey plays Imogen Temult.", 0.96, 0.93);
rel("liam-obrien", "vaxildan", "created", "Liam O'Brien plays Vax'ildan.", 0.97, 0.95);
rel("liam-obrien", "caleb-widogast", "created", "Liam O'Brien plays Caleb Widogast.", 0.97, 0.95);
rel("taliesin-jaffe", "percy-de-rolo", "created", "Taliesin Jaffe plays Percival de Rolo.", 0.97, 0.95);
rel("marisha-ray", "keyleth", "created", "Marisha Ray plays Keyleth.", 0.96, 0.93);
rel("marisha-ray", "laudna", "created", "Marisha Ray plays Laudna.", 0.96, 0.93);
rel("travis-willingham", "grog-strongjaw", "created", "Travis Willingham plays Grog Strongjaw.", 0.96, 0.93);
rel("travis-willingham", "fjord-stone", "created", "Travis Willingham plays Fjord.", 0.96, 0.93);
rel("ashley-johnson", "pike-trickfoot", "created", "Ashley Johnson plays Pike Trickfoot.", 0.96, 0.93);
rel("sam-riegel", "scanlan-shorthalt", "created", "Sam Riegel plays Scanlan Shorthalt.", 0.96, 0.93);

rel("laura-bailey", "critical-role", "member_of", "Laura Bailey is a founding player at the Critical Role table.", 0.96, 0.93);
rel("marisha-ray", "critical-role-productions", "leads", "Marisha Ray is creative officer of Critical Role Productions.", 0.94, 0.9);
rel("travis-willingham", "critical-role-productions", "leads", "Travis Willingham is CEO of Critical Role Productions.", 0.94, 0.9);

module.exports = { entities, relationships };
