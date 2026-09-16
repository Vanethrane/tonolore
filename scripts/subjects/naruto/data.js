/*
 * Naruto subject data — Masashi Kishimoto's ninja adventure manga.
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
    "naruto",
    "Naruto",
    "topic",
    "Masashi Kishimoto's manga of ninjas, villages, and the Nine-Tails.",
    "Naruto is the shonen manga and anime franchise by Masashi Kishimoto following Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno of Konoha — spanning Team 7, the Akatsuki, Sharingan, Rasengan, and Naruto Shippuden through Boruto."
);

entity(
    "masashi-kishimoto",
    "Masashi Kishimoto",
    "person",
    "Creator of Naruto.",
    "Masashi Kishimoto created Naruto for Weekly Shonen Jump, writing and drawing the story of Naruto Uzumaki, Konohagakure, and the conflict of shinobi clans and tailed beasts."
);

/* ---------- Works ---------- */

entity(
    "naruto-manga",
    "Naruto (manga)",
    "work",
    "Original Kishimoto manga serialized in Jump.",
    "The Naruto manga follows Naruto Uzumaki from academy graduate to Hokage, covering the Chunin Exams, Sasuke's defection, and the Fourth Great Ninja War."
);

entity(
    "naruto-anime",
    "Naruto (anime)",
    "work",
    "First anime adaptation of Part I.",
    "The Naruto anime adapts Part I of the manga, covering Team 7's early missions, the Chunin Exams, and the search for Tsunade."
);

entity(
    "naruto-shippuden",
    "Naruto: Shippuden",
    "work",
    "Anime adapting Part II after the time skip.",
    "Naruto: Shippuden adapts Part II, with Naruto's return, the Akatsuki's hunts, Itachi's truth, and the war against Madara and Kaguya."
);

entity(
    "boruto-naruto-next-generations",
    "Boruto: Naruto Next Generations",
    "work",
    "Sequel focusing on Boruto Uzumaki.",
    "Boruto: Naruto Next Generations follows Boruto Uzumaki and the next generation of Konoha shinobi after Naruto becomes Hokage."
);

/* ---------- Places / organizations ---------- */

entity(
    "konohagakure",
    "Konohagakure",
    "place",
    "Hidden Leaf Village; home of Team 7.",
    "Konohagakure (the Hidden Leaf) is Naruto Uzumaki's village, seat of the Hokage and home to Team 7, the Uchiha, and the Nine-Tails' sealing history."
);

entity(
    "akatsuki",
    "Akatsuki",
    "organization",
    "Rogue ninja organization hunting tailed beasts.",
    "The Akatsuki is a cloaked criminal organization that hunts jinchuriki and bijuu, opposing Konoha and drawing in Itachi, Pain, and others."
);

entity(
    "team-7",
    "Team 7",
    "organization",
    "Kakashi's squad: Naruto, Sasuke, and Sakura.",
    "Team 7 is the Konoha genin cell led by Kakashi Hatake, uniting Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno."
);

entity(
    "uchiha-clan",
    "Uchiha clan",
    "organization",
    "Clan of the Sharingan; Sasuke and Itachi's lineage.",
    "The Uchiha clan of Konoha wields the Sharingan; its tragedy shapes Sasuke Uchiha, Itachi Uchiha, and Madara Uchiha."
);

entity(
    "senju-clan",
    "Senju clan",
    "organization",
    "Clan of Hashirama; founders alongside the Uchiha.",
    "The Senju clan, led historically by Hashirama Senju, helped found Konohagakure with the Uchiha and defined early Hokage lineage."
);

entity(
    "hokage",
    "Hokage",
    "concept",
    "Leader of Konohagakure.",
    "The Hokage is the Kage of the Hidden Leaf — a title held by Hashirama, Hiruzen, Minato, Tsunade, Kakashi, and later Naruto Uzumaki."
);

/* ---------- Concepts / powers ---------- */

entity(
    "chakra",
    "Chakra",
    "concept",
    "Life energy that fuels ninjutsu and genjutsu.",
    "Chakra is the energy shinobi mold for techniques, combining physical and spiritual energy in jutsu like the Rasengan and Sharingan arts."
);

entity(
    "rasengan",
    "Rasengan",
    "concept",
    "Spiraling chakra sphere created by Minato.",
    "The Rasengan is a formless spinning chakra orb taught to Naruto Uzumaki via Jiraiya, later evolving into Rasenshuriken variants."
);

entity(
    "sharingan",
    "Sharingan",
    "concept",
    "Uchiha dojutsu of copy and insight.",
    "The Sharingan is the Uchiha clan's eye technique, used by Sasuke, Itachi, and Madara for genjutsu, prediction, and evolving into Mangekyo forms."
);

entity(
    "nine-tails",
    "Nine-Tails",
    "person",
    "Kurama; the fox sealed in Naruto.",
    "The Nine-Tails (Kurama) is the most powerful tailed beast, sealed into Naruto Uzumaki and later allied with him against greater threats."
);

entity(
    "tailed-beasts",
    "Tailed beasts",
    "concept",
    "Bijuu hunted by the Akatsuki.",
    "The tailed beasts (bijuu) are chakra monsters from the Ten-Tails, including the Nine-Tails, central to Akatsuki's capture plans and the war."
);

entity(
    "jinchuriki",
    "Jinchuriki",
    "concept",
    "Hosts who seal tailed beasts within themselves.",
    "Jinchuriki are humans who host tailed beasts — Naruto with the Nine-Tails, Gaara with Shukaku — often feared by their villages."
);

/* ---------- Characters ---------- */

entity(
    "naruto-uzumaki",
    "Naruto Uzumaki",
    "person",
    "Jinchuriki hero who becomes Hokage.",
    "Naruto Uzumaki is the loud, determined host of the Nine-Tails who trains under Jiraiya and Kakashi, befriends Sasuke and Sakura, and rises toward Hokage."
);

entity(
    "sasuke-uchiha",
    "Sasuke Uchiha",
    "person",
    "Last loyal son of the Uchiha seeking power.",
    "Sasuke Uchiha is Naruto's rival on Team 7, an Uchiha avenger who leaves Konoha, masters the Sharingan, and confronts Itachi and Madara's legacy."
);

entity(
    "sakura-haruno",
    "Sakura Haruno",
    "person",
    "Team 7 kunoichi; medical ninja under Tsunade.",
    "Sakura Haruno is Team 7's kunoichi who trains with Tsunade, becoming a medical ninja and pillar beside Naruto and Sasuke."
);

entity(
    "kakashi-hatake",
    "Kakashi Hatake",
    "person",
    "Copy Ninja; sensei of Team 7.",
    "Kakashi Hatake is the Sharingan-bearing jonin who leads Team 7, teaches the Chidori lineage of tactics, and later serves as Hokage."
);

entity(
    "itachi-uchiha",
    "Itachi Uchiha",
    "person",
    "Akatsuki member; Sasuke's older brother.",
    "Itachi Uchiha massacres the Uchiha clan under hidden orders, joins the Akatsuki, and shapes Sasuke's path through sacrifice and truth."
);

entity(
    "madara-uchiha",
    "Madara Uchiha",
    "person",
    "Legendary Uchiha co-founder turned war architect.",
    "Madara Uchiha co-founds Konoha with Hashirama, later schemes through the Akatsuki and the Eye of the Moon plan against the shinobi world."
);

entity(
    "hashirama-senju",
    "Hashirama Senju",
    "person",
    "First Hokage; Senju founder of Konoha.",
    "Hashirama Senju is the First Hokage, a Senju of unmatched Wood Release who builds Konohagakure with and against Madara Uchiha."
);

entity(
    "jiraiya",
    "Jiraiya",
    "person",
    "Toad sage; Naruto's mentor among the Sannin.",
    "Jiraiya is one of the Legendary Sannin who trains Naruto Uzumaki, investigates the Akatsuki, and writes of the Child of Prophecy."
);

entity(
    "orochimaru",
    "Orochimaru",
    "person",
    "Sannin rogue obsessed with immortality and jutsu.",
    "Orochimaru is a Legendary Sannin who defects from Konoha, marks Sasuke, and pursues forbidden experiments across the shinobi world."
);

entity(
    "tsunade",
    "Tsunade",
    "person",
    "Fifth Hokage; medical ninja of the Sannin.",
    "Tsunade is a Legendary Sannin and Fifth Hokage who rebuilds Konoha's medical corps and trains Sakura Haruno."
);

entity(
    "minato-namikaze",
    "Minato Namikaze",
    "person",
    "Fourth Hokage; creator of the Rasengan.",
    "Minato Namikaze, the Yellow Flash, is Naruto's father, Fourth Hokage, and creator of the Rasengan who sealed the Nine-Tails."
);

entity(
    "gaara",
    "Gaara",
    "person",
    "Kazekage; former one-tail jinchuriki.",
    "Gaara of the Sand begins as a feared jinchuriki rival to Naruto, then becomes Kazekage and an ally of Konoha."
);

entity(
    "hinata-hyuga",
    "Hinata Hyuga",
    "person",
    "Hyuga heiress devoted to Naruto.",
    "Hinata Hyuga is a Byakugan user of Konoha's Hyuga clan who supports Naruto Uzumaki from the academy through the war."
);

entity(
    "pain",
    "Pain",
    "person",
    "Akatsuki leader who attacks Konoha.",
    "Pain (Nagato) leads the Akatsuki with the Rinnegan, destroys Konoha in a major assault, and confronts Naruto over cycles of hatred."
);

entity(
    "boruto-uzumaki",
    "Boruto Uzumaki",
    "person",
    "Naruto's son in the sequel era.",
    "Boruto Uzumaki is Naruto and Hinata's son, a new-generation shinobi at the center of Boruto: Naruto Next Generations."
);

entity(
    "shikamaru-nara",
    "Shikamaru Nara",
    "person",
    "Strategist of the Nara clan; Naruto's advisor.",
    "Shikamaru Nara is a shadow-jutsu genius of Konoha who becomes a key tactician and later aide in Naruto's Hokage era."
);

/* ---------- Relationships ---------- */

rel("masashi-kishimoto", "naruto", "created", "Masashi Kishimoto created Naruto.", 0.99, 0.99);
rel("masashi-kishimoto", "naruto-manga", "created", "Kishimoto wrote and drew the Naruto manga.", 0.99, 0.98);

rel("naruto-manga", "naruto", "part_of", "The manga is the foundation of Naruto.", 0.99, 0.99);
rel("naruto-anime", "naruto", "part_of", "The anime adapts Naruto.", 0.98, 0.95);
rel("naruto-shippuden", "naruto", "part_of", "Shippuden continues the Naruto anime.", 0.98, 0.96);
rel("boruto-naruto-next-generations", "naruto", "part_of", "Boruto continues the Naruto franchise.", 0.96, 0.92);
rel("naruto-manga", "naruto-shippuden", "adapted_into", "Part II was adapted as Naruto Shippuden.", 0.97, 0.94);

rel("team-7", "konohagakure", "located_in", "Team 7 is a Konoha squad.", 0.98, 0.95);
rel("hokage", "konohagakure", "located_in", "The Hokage leads Konohagakure.", 0.99, 0.97);
rel("uchiha-clan", "konohagakure", "located_in", "The Uchiha clan is of Konoha.", 0.97, 0.94);

rel("naruto-uzumaki", "team-7", "member_of", "Naruto is on Team 7.", 0.99, 0.98);
rel("sasuke-uchiha", "team-7", "member_of", "Sasuke is on Team 7.", 0.99, 0.98);
rel("sakura-haruno", "team-7", "member_of", "Sakura is on Team 7.", 0.99, 0.98);
rel("kakashi-hatake", "team-7", "leads", "Kakashi leads Team 7.", 0.99, 0.98);
rel("itachi-uchiha", "akatsuki", "member_of", "Itachi joins the Akatsuki.", 0.98, 0.96);
rel("pain", "akatsuki", "leads", "Pain leads the Akatsuki.", 0.97, 0.94);
rel("sasuke-uchiha", "uchiha-clan", "member_of", "Sasuke is an Uchiha.", 0.99, 0.97);
rel("madara-uchiha", "uchiha-clan", "member_of", "Madara is an Uchiha.", 0.98, 0.96);
rel("hashirama-senju", "senju-clan", "member_of", "Hashirama is a Senju.", 0.98, 0.95);
rel("hashirama-senju", "hokage", "connected_to", "Hashirama is the First Hokage.", 0.98, 0.96);
rel("minato-namikaze", "hokage", "connected_to", "Minato is the Fourth Hokage.", 0.98, 0.96);

rel("nine-tails", "naruto-uzumaki", "connected_to", "Kurama is sealed within Naruto.", 0.99, 0.98);
rel("naruto-uzumaki", "jinchuriki", "connected_to", "Naruto is a jinchuriki.", 0.99, 0.97);
rel("nine-tails", "tailed-beasts", "part_of", "The Nine-Tails is a tailed beast.", 0.98, 0.96);
rel("akatsuki", "tailed-beasts", "opposed_by", "The Akatsuki hunts the tailed beasts.", 0.97, 0.94);
rel("rasengan", "minato-namikaze", "created", "Minato created the Rasengan.", 0.98, 0.95);
rel("rasengan", "naruto-uzumaki", "uses", "Naruto masters the Rasengan.", 0.98, 0.96);
rel("sharingan", "uchiha-clan", "connected_to", "The Sharingan belongs to the Uchiha.", 0.99, 0.97);
rel("jiraiya", "naruto-uzumaki", "supports", "Jiraiya mentors Naruto.", 0.98, 0.95);
rel("naruto-uzumaki", "sasuke-uchiha", "connected_to", "Naruto and Sasuke are rivals and bonds.", 0.99, 0.98);
rel("boruto-uzumaki", "naruto-uzumaki", "connected_to", "Boruto is Naruto's son.", 0.97, 0.94);

module.exports = { entities, relationships };
