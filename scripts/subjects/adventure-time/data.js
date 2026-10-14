/*
 * Adventure Time subject data — Finn, Jake, and the kingdoms of Ooo.
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
    "adventure-time",
    "Adventure Time",
    "topic",
    "Finn, Jake, and the post-war kingdoms of the Land of Ooo.",
    "Adventure Time is Pendleton Ward's Cartoon Network saga of Finn the Human and Jake the Dog in the Land of Ooo — Candy Kingdom, Ice King, Marceline, and a world still scarred by the Mushroom War. Later seasons reveal Simon Petrikov, the Lich, and Farmworld; Fionna and Cake is a sibling series."
);

entity(
    "pendleton-ward",
    "Pendleton Ward",
    "person",
    "Creator of Adventure Time.",
    "Pendleton Ward created Adventure Time from a short, then showran early seasons that set Finn, Jake, and Ooo's candy-bright, post-apocalyptic tone.",
    "documented"
);

/* ---------- Works ---------- */

entity(
    "adventure-time-series",
    "Adventure Time (series)",
    "work",
    "2010–18 Cartoon Network series in the Land of Ooo.",
    "The original series follows Finn and Jake from short dungeon crawls into the long myths of Bubblegum, Marceline, Simon, the Lich, and the Mushroom War.",
    "documented"
);

entity(
    "fionna-and-cake",
    "Fionna and Cake",
    "work",
    "2023 sibling series from the Ice King's fanfiction world.",
    "Fionna and Cake takes the gender-swapped stories Ice King wrote and makes them a multiverse series, still tied to Simon Petrikov and Ooo.",
    "documented"
);

/* ---------- Places / groups ---------- */

entity(
    "land-of-ooo",
    "Land of Ooo",
    "place",
    "Post-Mushroom War continent of candy, fire, ice, and ruins.",
    "The Land of Ooo is the colorful continent after the Mushroom War, mapped into kingdoms and wastelands where Finn and Jake adventure."
);

entity(
    "candy-kingdom",
    "Candy Kingdom",
    "organization",
    "Princess Bubblegum's confectionery state.",
    "The Candy Kingdom is the pink monarchy of candy people, banana guards, and Princess Bubblegum's science — Finn and Jake's most frequent ally-state."
);

entity(
    "ice-kingdom",
    "Ice Kingdom",
    "organization",
    "Ice King's isolated mountain of ice and penguins.",
    "The Ice Kingdom is the frozen realm of the Ice King and Gunter, a kidnap-the-princess joke that later becomes Simon Petrikov's prison."
);

entity(
    "fire-kingdom",
    "Fire Kingdom",
    "organization",
    "Volcanic monarchy of Flame Princess and the Flame King.",
    "The Fire Kingdom is the magma nation whose princess Finn loves and whose politics burn hotter than candy diplomacy."
);

entity(
    "heroes-of-ooo",
    "Heroes of Ooo",
    "organization",
    "Finn, Jake, and BMO — the Tree Fort adventurers.",
    "The Heroes of Ooo are the Tree Fort trio: Finn the Human, Jake the Dog, and BMO, who answer princess calls and stumble into the world's oldest wars."
);

entity(
    "nightosphere",
    "Nightosphere",
    "place",
    "Chaotic demon realm of Hunson Abadeer.",
    "The Nightosphere is the red demon dimension Hunson rules, Marceline's other home, entered through a portal and a cursed shirt."
);

entity(
    "tree-fort",
    "Tree Fort",
    "place",
    "Finn and Jake's house in the Grass Lands.",
    "The Tree Fort is the crooked house in a huge tree where Finn, Jake, and BMO live between quests."
);

entity(
    "farmworld",
    "Farmworld",
    "place",
    "Wish-altered timeline where the Lich never rose — and Finn has a farm.",
    "Farmworld is the alternate Ooo Prismo's wish creates, where a mundane Finn lives on a farm until the Lich's wish-logic still finds a way."
);

/* ---------- Characters / objects / events ---------- */

entity(
    "finn-the-human",
    "Finn the Human",
    "person",
    "Last of the humans (at first) and Ooo's enthusiastic hero.",
    "Finn the Human is the boy with the bear hat who wants to be a hero, grows up across the series, and keeps choosing Jake and the Tree Fort."
);

entity(
    "jake-the-dog",
    "Jake the Dog",
    "person",
    "Stretchy magical dog and Finn's brother.",
    "Jake the Dog is the stretchy older brother who treats adventure as a hang, plays viola, and still shows up when Finn's heroism gets heavy."
);

entity(
    "princess-bubblegum",
    "Princess Bubblegum",
    "person",
    "Scientist-sovereign of the Candy Kingdom.",
    "Princess Bubblegum is the candy monarch and biochemist who built her people, spies on threats, and carries the moral gray of ruling Ooo's sweetest state."
);

entity(
    "marceline",
    "Marceline",
    "person",
    "Vampire Queen, rock bass, and daughter of the Nightosphere.",
    "Marceline the Vampire Queen is the thousand-year-old bass player who survived the Mushroom War as a child, feuds and reconciles with Bubblegum, and is Hunson's daughter."
);

entity(
    "ice-king",
    "Ice King",
    "person",
    "Crown-mad wizard who kidnaps princesses and writes fanfiction.",
    "The Ice King is the lonely wizard of ice magic, comic villain and tragic husk, later revealed as Simon Petrikov worn down by the crown."
);

entity(
    "simon-petrikov",
    "Simon Petrikov",
    "person",
    "Antiquarian who became the Ice King.",
    "Simon Petrikov is the pre-war scholar who bought a cursed crown to save Betty, protected young Marceline, and lost himself to Ice King."
);

entity(
    "betty-grof",
    "Betty Grof",
    "person",
    "Simon's fiancée who follows him across magic and time.",
    "Betty Grof is the brilliant, desperate partner who keeps trying to save Simon from the crown, even when the cure becomes another curse."
);

entity(
    "the-lich",
    "The Lich",
    "person",
    "Undead incarnation of the Mushroom War's extinction wish.",
    "The Lich is the skeletal enemy who wants all life gone, born from the bomb, wearing a well, a snail, and later a smiling Billy suit."
);

entity(
    "bmo",
    "BMO",
    "person",
    "Living game console of the Tree Fort.",
    "BMO is the little console who is housemate, game, and sometimes parent to Finn and Jake, with an inner life larger than the Fort."
);

entity(
    "peppermint-butler",
    "Peppermint Butler",
    "person",
    "Bubblegum's steward with a necromantic side life.",
    "Peppermint Butler is the Candy Kingdom's unflappable servant, loyal to Bonnibel and quietly terrible in ways the Lich would recognize."
);

entity(
    "gunter",
    "Gunter",
    "person",
    "Ice King's penguin — and sometimes an ancient god in a tuxedo.",
    "Gunter is the Ice King's favorite penguin, comic sidekick and, in later lore, a vessel for something older than Ooo."
);

entity(
    "flame-princess",
    "Flame Princess",
    "person",
    "Fire elemental princess Finn loves and then has to leave.",
    "Flame Princess is the Fire Kingdom heir whose heat Finn cannot safely hold, a ruler who outgrows being anyone's adventure crush."
);

entity(
    "hunson-abadeer",
    "Hunson Abadeer",
    "person",
    "Lord of the Nightosphere and Marceline's father.",
    "Hunson Abadeer is the soul-sucking demon king who wants Marceline to take his throne and keeps failing at ordinary fatherhood."
);

entity(
    "lumpy-space-princess",
    "Lumpy Space Princess",
    "person",
    "Lumpy exile who crashes on Finn and Jake's couch.",
    "Lumpy Space Princess is the dramatic, floating noble of Lumpy Space who treats Ooo as her stage and the Tree Fort as backup housing."
);

entity(
    "banana-guards",
    "Banana Guards",
    "organization",
    "Candy Kingdom's dim, loyal watch.",
    "The Banana Guards are Princess Bubblegum's security force — yellow, earnest, and rarely equal to the threats they salute."
);

entity(
    "mushroom-war",
    "Mushroom War",
    "event",
    "Nuclear war that ended the old world and made Ooo.",
    "The Mushroom War is the human apocalypse whose craters, mutants, and bomb-birth of the Lich sit under every candy kingdom."
);

entity(
    "enchiridion",
    "Enchiridion",
    "object",
    "Hero's handbook that later becomes a key to worlds.",
    "The Enchiridion is the hero manual Finn seeks early on, later revealed as a lock-book that can open paths the Lich wants."
);

entity(
    "ice-crown",
    "Ice Crown",
    "object",
    "Wish-magic crown that turns Simon into the Ice King.",
    "The Ice Crown grants ice power and immortality at the price of the wearer's mind — the object that made Simon Petrikov the Ice King."
);

/* ---------- Relationships ---------- */

rel("pendleton-ward", "adventure-time", "created", "Pendleton Ward created Adventure Time.", 0.99, 0.99);
rel("pendleton-ward", "adventure-time-series", "created", "Ward created and early-showran the Adventure Time series.", 0.98, 0.96);

rel("adventure-time-series", "adventure-time", "part_of", "The 2010 series is the core Adventure Time work.", 0.99, 0.98);
rel("fionna-and-cake", "adventure-time", "part_of", "Fionna and Cake is a sibling series in the Adventure Time world.", 0.96, 0.93);
rel("adventure-time-series", "fionna-and-cake", "followed", "Fionna and Cake follows years after the original series.", 0.94, 0.9);

rel("adventure-time-series", "finn-the-human", "involved", "The series is Finn's coming-of-age in Ooo.", 0.99, 0.97);
rel("adventure-time-series", "jake-the-dog", "involved", "Jake is Finn's brother through the original series.", 0.98, 0.96);
rel("adventure-time-series", "princess-bubblegum", "involved", "Princess Bubblegum is a central sovereign of the series.", 0.97, 0.94);
rel("adventure-time-series", "the-lich", "involved", "The Lich is the series' oldest extinction threat.", 0.96, 0.93);
rel("fionna-and-cake", "simon-petrikov", "involved", "The sibling series returns to Simon after the crown.", 0.95, 0.91);
rel("fionna-and-cake", "ice-king", "inspired", "Fionna and Cake began as the Ice King's fanfiction.", 0.95, 0.91);

rel("finn-the-human", "heroes-of-ooo", "leads", "Finn is the hero at the center of the Tree Fort trio.", 0.98, 0.96);
rel("jake-the-dog", "heroes-of-ooo", "member_of", "Jake adventures with Finn as brother and partner.", 0.98, 0.96);
rel("bmo", "heroes-of-ooo", "member_of", "BMO lives in the Tree Fort with Finn and Jake.", 0.96, 0.93);
rel("princess-bubblegum", "candy-kingdom", "leads", "Princess Bubblegum rules the Candy Kingdom.", 0.99, 0.97);
rel("peppermint-butler", "candy-kingdom", "member_of", "Peppermint Butler serves the Candy Kingdom.", 0.96, 0.93);
rel("banana-guards", "candy-kingdom", "part_of", "The Banana Guards are the Candy Kingdom's watch.", 0.95, 0.91);
rel("ice-king", "ice-kingdom", "leads", "The Ice King rules the Ice Kingdom.", 0.98, 0.96);
rel("gunter", "ice-kingdom", "member_of", "Gunter lives in the Ice Kingdom with the Ice King.", 0.95, 0.91);
rel("simon-petrikov", "ice-king", "connected_to", "Simon Petrikov is the man the Ice King used to be.", 0.99, 0.97);
rel("flame-princess", "fire-kingdom", "leads", "Flame Princess becomes ruler of the Fire Kingdom.", 0.96, 0.93);
rel("marceline", "nightosphere", "located_in", "Marceline is a daughter of the Nightosphere.", 0.95, 0.91);
rel("hunson-abadeer", "nightosphere", "leads", "Hunson Abadeer rules the Nightosphere.", 0.97, 0.94);
rel("hunson-abadeer", "marceline", "connected_to", "Hunson is Marceline's father.", 0.97, 0.94);

rel("finn-the-human", "jake-the-dog", "supports", "Finn and Jake are brothers who adventure together.", 0.98, 0.96);
rel("betty-grof", "simon-petrikov", "supports", "Betty spends the later story trying to save Simon.", 0.96, 0.93);
rel("simon-petrikov", "marceline", "supports", "Simon protected Marceline after the Mushroom War.", 0.96, 0.93);
rel("marceline", "princess-bubblegum", "connected_to", "Marceline and Bubblegum share a long, repaired history.", 0.95, 0.91);
rel("the-lich", "heroes-of-ooo", "opposed_by", "The Lich is the extinction Finn and Jake have to stop.", 0.97, 0.94);
rel("the-lich", "mushroom-war", "caused", "The Lich is born from the Mushroom War's bomb.", 0.96, 0.93);
rel("ice-king", "ice-crown", "uses", "The Ice King is the crown's worn-down wearer.", 0.98, 0.96);
rel("simon-petrikov", "ice-crown", "uses", "Simon put on the Ice Crown and began to lose himself.", 0.97, 0.94);
rel("finn-the-human", "enchiridion", "uses", "Finn seeks and later carries the Enchiridion.", 0.94, 0.9);
rel("the-lich", "enchiridion", "uses", "The Lich wants the Enchiridion as a key.", 0.93, 0.88);

rel("candy-kingdom", "land-of-ooo", "located_in", "The Candy Kingdom stands in the Land of Ooo.", 0.97, 0.94);
rel("ice-kingdom", "land-of-ooo", "located_in", "The Ice Kingdom stands in the Land of Ooo.", 0.96, 0.93);
rel("fire-kingdom", "land-of-ooo", "located_in", "The Fire Kingdom stands in the Land of Ooo.", 0.96, 0.93);
rel("tree-fort", "land-of-ooo", "located_in", "The Tree Fort stands in the Grass Lands of Ooo.", 0.96, 0.93);
rel("heroes-of-ooo", "tree-fort", "located_in", "Finn, Jake, and BMO live in the Tree Fort.", 0.97, 0.94);
rel("mushroom-war", "land-of-ooo", "caused", "The Mushroom War is what left the world that became Ooo.", 0.96, 0.93);
rel("farmworld", "the-lich", "connected_to", "Farmworld is a wish-timeline the Lich still infects.", 0.94, 0.9);
rel("adventure-time-series", "land-of-ooo", "occurred_at", "The original series is set in the Land of Ooo.", 0.98, 0.96);
rel("lumpy-space-princess", "land-of-ooo", "located_in", "LSP drifts through Ooo between Lumpy Space and the Fort.", 0.9, 0.86);
rel("ice-king", "princess-bubblegum", "opposed_by", "The Ice King's early bit is kidnapping princesses, especially Bubblegum.", 0.92, 0.87);

module.exports = { entities, relationships };
