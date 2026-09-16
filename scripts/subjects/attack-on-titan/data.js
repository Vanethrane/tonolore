/*
 * Attack on Titan subject data — Hajime Isayama's manga and anime.
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
    "attack-on-titan",
    "Attack on Titan",
    "topic",
    "Hajime Isayama's manga and anime of Titans, Walls, and Paradis.",
    "Attack on Titan (Shingeki no Kyojin) is Hajime Isayama's dark fantasy about humanity behind Walls Maria, Rose, and Sina, the Survey Corps' war against Titans, and the wider conflict between Paradis and Marley."
);

entity(
    "hajime-isayama",
    "Hajime Isayama",
    "person",
    "Creator of Attack on Titan.",
    "Hajime Isayama created Attack on Titan, writing and drawing the manga that follows Eren Yeager, the Survey Corps, and the mystery of the Titans."
);

entity(
    "kodansha",
    "Kodansha",
    "organization",
    "Publisher of the Attack on Titan manga.",
    "Kodansha published Attack on Titan in Bessatsu Shōnen Magazine and collected the series in tankōbon volumes."
);

/* ---------- Works ---------- */

entity(
    "attack-on-titan-manga",
    "Attack on Titan (manga)",
    "work",
    "The original manga series by Hajime Isayama.",
    "The Attack on Titan manga serializes the fall of Wall Maria, the Survey Corps' campaigns, the Founding Titan's power, and the war between Paradis and Marley."
);

entity(
    "attack-on-titan-anime",
    "Attack on Titan (anime)",
    "work",
    "Anime adaptation of Isayama's manga.",
    "The Attack on Titan anime adapts the manga across multiple seasons, covering the Walls, the Survey Corps, and the Marley conflict."
);

/* ---------- Characters ---------- */

entity(
    "eren-yeager",
    "Eren Yeager",
    "person",
    "Protagonist and holder of the Attack Titan.",
    "Eren Yeager is a youth from Shiganshina who vows to destroy the Titans after Wall Maria falls, later inheriting the Attack Titan and driving the story's darkest turns."
);

entity(
    "mikasa-ackerman",
    "Mikasa Ackerman",
    "person",
    "Elite soldier fiercely loyal to Eren.",
    "Mikasa Ackerman is Eren's adoptive sister and one of the Survey Corps' strongest fighters, bound by loyalty and the Ackerman lineage."
);

entity(
    "armin-arlert",
    "Armin Arlert",
    "person",
    "Strategist of the Survey Corps; later Colossal Titan.",
    "Armin Arlert is Eren and Mikasa's childhood friend whose intellect guides the Survey Corps and who later inherits the Colossal Titan."
);

entity(
    "levi-ackerman",
    "Levi Ackerman",
    "person",
    "Humanity's strongest soldier.",
    "Levi Ackerman is a Survey Corps captain renowned as humanity's strongest soldier, leading Special Operations against Titans and Marley."
);

entity(
    "erwin-smith",
    "Erwin Smith",
    "person",
    "Commander of the Survey Corps.",
    "Erwin Smith commands the Survey Corps with ruthless resolve, gambling lives to uncover the truth beyond the Walls."
);

entity(
    "hange-zoe",
    "Hange Zoë",
    "person",
    "Titan researcher and later Survey Corps commander.",
    "Hange Zoë studies Titans with obsessive curiosity and later succeeds Erwin as Survey Corps commander."
);

entity(
    "zeke-yeager",
    "Zeke Yeager",
    "person",
    "Beast Titan; Eren's half-brother.",
    "Zeke Yeager is the Beast Titan and Eren's half-brother from Marley, whose royal blood and plans reshape the war over the Founding Titan."
);

entity(
    "reiner-braun",
    "Reiner Braun",
    "person",
    "Armored Titan and Marley Warrior.",
    "Reiner Braun is a Marley Warrior who infiltrates Paradis as the Armored Titan while torn between identities."
);

entity(
    "annie-leonhart",
    "Annie Leonhart",
    "person",
    "Female Titan and Marley Warrior.",
    "Annie Leonhart is the Female Titan, a Marley Warrior sent to Paradis who clashes with the Survey Corps in Stohess and beyond."
);

entity(
    "bertholdt-hoover",
    "Bertholdt Hoover",
    "person",
    "Colossal Titan and Marley Warrior.",
    "Bertholdt Hoover is the Colossal Titan who breaches Wall Maria and later fights the Survey Corps alongside Reiner."
);

entity(
    "historia-reiss",
    "Historia Reiss",
    "person",
    "True heir of the Reiss royal line; later queen.",
    "Historia Reiss, once known as Christa Lenz, is the rightful heir of Wall Sina's royal blood and becomes queen of Paradis."
);

entity(
    "jean-kirschtein",
    "Jean Kirstein",
    "person",
    "Survey Corps soldier and reluctant leader.",
    "Jean Kirstein joins the Survey Corps after training, growing from self-preservation into a reliable field leader."
);

entity(
    "sasha-blouse",
    "Sasha Blouse",
    "person",
    "Survey Corps sharpshooter from a hunting village.",
    "Sasha Blouse is a Survey Corps soldier known for her hunting skill, appetite, and loyalty to her comrades."
);

entity(
    "connie-springer",
    "Connie Springer",
    "person",
    "Survey Corps soldier from Ragako.",
    "Connie Springer fights with the Survey Corps after discovering his village's fate tied to Titan transformations."
);

/* ---------- Titans / concepts ---------- */

entity(
    "titans",
    "Titans",
    "concept",
    "Giant humanoids that devour humans.",
    "Titans are giant humanoid creatures that prey on humans; many are transformed Eldians, while Nine Titans hold unique powers."
);

entity(
    "founding-titan",
    "Founding Titan",
    "concept",
    "Progenitor Titan able to command Subjects of Ymir.",
    "The Founding Titan can alter memories and bodies of Subjects of Ymir and command Titans when paired with royal blood."
);

entity(
    "attack-titan",
    "Attack Titan",
    "concept",
    "Titan that always moves forward; held by Eren.",
    "The Attack Titan is one of the Nine Titans, said to always strive for freedom, and is inherited by Eren Yeager."
);

entity(
    "paths",
    "Paths",
    "concept",
    "Metaphysical connection binding Subjects of Ymir.",
    "Paths link all Subjects of Ymir across time, enabling the Founding Titan's power and the inheritance of Titan abilities."
);

/* ---------- Places ---------- */

entity(
    "paradis",
    "Paradis Island",
    "place",
    "Island nation behind the Walls.",
    "Paradis Island holds the Walls and the Eldian remnant Marley calls island devils, central to the Founding Titan's history."
);

entity(
    "marley",
    "Marley",
    "place",
    "Continental power that oppresses Eldians.",
    "Marley is a militarized nation that uses Eldian Warriors as Titans and wages war to seize the Founding Titan from Paradis."
);

entity(
    "wall-maria",
    "Wall Maria",
    "place",
    "Outermost of the three Walls.",
    "Wall Maria is the outermost Wall; its breach by the Colossal Titan forces humanity into Wall Rose."
);

entity(
    "wall-rose",
    "Wall Rose",
    "place",
    "Middle Wall protecting inland districts.",
    "Wall Rose is the middle defensive Wall where survivors retreat after Wall Maria falls."
);

entity(
    "wall-sina",
    "Wall Sina",
    "place",
    "Innermost Wall around the royal capital.",
    "Wall Sina is the innermost Wall enclosing the capital and the privileged core of Paradis society."
);

entity(
    "shiganshina",
    "Shiganshina District",
    "place",
    "Southern district on Wall Maria; Eren's hometown.",
    "Shiganshina District on Wall Maria is where Eren, Mikasa, and Armin grow up, and where the Colossal Titan first breaches the Wall."
);

/* ---------- Organizations ---------- */

entity(
    "survey-corps",
    "Survey Corps",
    "organization",
    "Military branch that explores beyond the Walls.",
    "The Survey Corps (Scout Regiment) ventures beyond the Walls to study Titans and reclaim land, led by figures like Erwin, Hange, and Levi."
);

entity(
    "military-police",
    "Military Police Brigade",
    "organization",
    "Inner-Wall police protecting the monarchy.",
    "The Military Police Brigade polices Wall Sina and the royal order, often clashing with Survey Corps goals."
);

entity(
    "warrior-unit",
    "Marley Warrior Unit",
    "organization",
    "Eldian child soldiers given Titan powers.",
    "Marley's Warrior Unit trains Eldian children as Titan holders—including Reiner, Annie, Bertholdt, and Zeke—to seize Paradis."
);

/* ---------- Relationships ---------- */

rel("hajime-isayama", "attack-on-titan", "created", "Hajime Isayama created Attack on Titan.", 0.99, 0.99);
rel("hajime-isayama", "attack-on-titan-manga", "created", "Isayama wrote and drew the Attack on Titan manga.", 0.99, 0.98);
rel("kodansha", "attack-on-titan-manga", "produced", "Kodansha published the Attack on Titan manga.", 0.97, 0.94);
rel("attack-on-titan-manga", "attack-on-titan", "part_of", "The manga is the foundation of Attack on Titan.", 0.99, 0.99);
rel("attack-on-titan-anime", "attack-on-titan", "part_of", "The anime adapts Attack on Titan.", 0.98, 0.96);
rel("attack-on-titan-manga", "attack-on-titan-anime", "adapted_into", "The manga was adapted into the anime.", 0.97, 0.95);

rel("eren-yeager", "attack-titan", "uses", "Eren inherits and uses the Attack Titan.", 0.99, 0.97);
rel("eren-yeager", "founding-titan", "uses", "Eren later wields the Founding Titan.", 0.98, 0.96);
rel("eren-yeager", "survey-corps", "member_of", "Eren joins the Survey Corps.", 0.97, 0.94);
rel("mikasa-ackerman", "survey-corps", "member_of", "Mikasa serves in the Survey Corps.", 0.97, 0.94);
rel("armin-arlert", "survey-corps", "member_of", "Armin serves in the Survey Corps.", 0.97, 0.94);
rel("levi-ackerman", "survey-corps", "member_of", "Levi is a Survey Corps captain.", 0.99, 0.97);
rel("erwin-smith", "survey-corps", "leads", "Erwin commands the Survey Corps.", 0.99, 0.97);
rel("hange-zoe", "survey-corps", "leads", "Hange later commands the Survey Corps.", 0.97, 0.94);
rel("zeke-yeager", "warrior-unit", "member_of", "Zeke leads Marley's Warriors as Beast Titan.", 0.97, 0.94);
rel("reiner-braun", "warrior-unit", "member_of", "Reiner is a Marley Warrior.", 0.98, 0.95);
rel("annie-leonhart", "warrior-unit", "member_of", "Annie is a Marley Warrior.", 0.98, 0.95);
rel("bertholdt-hoover", "warrior-unit", "member_of", "Bertholdt is a Marley Warrior.", 0.98, 0.95);
rel("historia-reiss", "wall-sina", "connected_to", "Historia is heir to the royal line within Wall Sina.", 0.96, 0.92);

rel("titans", "attack-on-titan", "part_of", "Titans define Attack on Titan's threat.", 0.99, 0.97);
rel("founding-titan", "titans", "part_of", "The Founding Titan is among the Nine Titans.", 0.98, 0.95);
rel("attack-titan", "titans", "part_of", "The Attack Titan is one of the Nine Titans.", 0.98, 0.95);
rel("paths", "founding-titan", "connected_to", "Paths enable the Founding Titan's power.", 0.96, 0.92);

rel("wall-maria", "paradis", "located_in", "Wall Maria encircles outer Paradis.", 0.98, 0.95);
rel("wall-rose", "paradis", "located_in", "Wall Rose stands within Paradis.", 0.98, 0.95);
rel("wall-sina", "paradis", "located_in", "Wall Sina is the innermost Wall on Paradis.", 0.98, 0.95);
rel("shiganshina", "wall-maria", "located_in", "Shiganshina sits on Wall Maria.", 0.99, 0.97);
rel("survey-corps", "paradis", "located_in", "The Survey Corps operates from Paradis.", 0.96, 0.92);
rel("warrior-unit", "marley", "member_of", "The Warrior Unit serves Marley.", 0.97, 0.94);
rel("eren-yeager", "mikasa-ackerman", "supports", "Mikasa protects and stays beside Eren.", 0.97, 0.94);
rel("eren-yeager", "armin-arlert", "supports", "Armin and Eren share a lifelong bond.", 0.97, 0.94);
rel("eren-yeager", "zeke-yeager", "connected_to", "Eren and Zeke are half-brothers.", 0.98, 0.95);
rel("bertholdt-hoover", "wall-maria", "involved", "Bertholdt's Colossal Titan breaches Wall Maria.", 0.98, 0.96);

module.exports = { entities, relationships };
