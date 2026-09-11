/*
 * Chainsaw Man subject data — Tatsuki Fujimoto's devil-hunting manga.
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
    "chainsaw-man",
    "Chainsaw Man",
    "topic",
    "Tatsuki Fujimoto's brutal devil-hunting manga and anime.",
    "Chainsaw Man is Tatsuki Fujimoto's manga and anime franchise about Denji, a debt-ridden teen who merges with the Chainsaw Devil Pochita and joins Public Safety devil hunters in a world where fears manifest as devils."
);

entity(
    "tatsuki-fujimoto",
    "Tatsuki Fujimoto",
    "person",
    "Creator of Chainsaw Man.",
    "Tatsuki Fujimoto created Chainsaw Man for Weekly Shonen Jump, writing Denji's contract with Pochita, Makima's control devil schemes, and Part 2's Asa Mitaka arc."
);

entity(
    "shueisha",
    "Shueisha",
    "organization",
    "Publisher of Chainsaw Man manga.",
    "Shueisha publishes Chainsaw Man through Weekly Shonen Jump and Jump Comics, distributing Fujimoto's original manga in Japan and licensing it worldwide."
);

entity(
    "mappa",
    "MAPPA",
    "organization",
    "Studio behind the Chainsaw Man anime.",
    "MAPPA animates the Chainsaw Man television series, adapting Fujimoto's Public Safety arc with stylized action and the franchise's signature gore and dark humor."
);

/* ---------- Works ---------- */

entity(
    "chainsaw-man-manga",
    "Chainsaw Man (manga)",
    "work",
    "Original Fujimoto manga in Weekly Shonen Jump.",
    "The Chainsaw Man manga follows Denji from his life with Pochita through Public Safety missions, Makima's manipulation, and Part 2's Devil Hunter Academy with Asa Mitaka and Yoru."
);

entity(
    "chainsaw-man-anime",
    "Chainsaw Man (anime)",
    "work",
    "MAPPA television adaptation of Part 1.",
    "The Chainsaw Man anime by MAPPA adapts the Public Safety arc, covering Denji's recruitment, Power and Aki's squad, and confrontations with devils like the Eternity Devil and Gun Devil."
);

entity(
    "public-safety-arc",
    "Public Safety Arc",
    "work",
    "Part 1 storyline of devil hunters in Tokyo.",
    "The Public Safety Arc is Chainsaw Man Part 1, following Denji, Power, and Aki Hayakawa under Makima and Kishibe as they hunt devils and uncover the Gun Devil conspiracy."
);

entity(
    "chainsaw-man-part-2",
    "Chainsaw Man Part 2",
    "work",
    "Academy arc starring Asa Mitaka and Yoru.",
    "Chainsaw Man Part 2 shifts to high school devil hunter Asa Mitaka, who contracts with the War Devil Yoru while navigating Fujimoto's reimagined Public Safety world."
);

/* ---------- Organizations ---------- */

entity(
    "public-safety-devil-hunters",
    "Public Safety Devil Hunters",
    "organization",
    "Japanese government devil-hunting division.",
    "Public Safety Devil Hunters are Japan's state-backed devil hunters, deploying squads like Denji's under Makima and veteran Kishibe to suppress devil threats in Tokyo."
);

entity(
    "devil-hunters",
    "Devil Hunters",
    "organization",
    "Broader profession of humans who hunt devils.",
    "Devil hunters are humans who fight devils through contracts, weapons, or fiend hosts, ranging from Public Safety agents to independent operators like Quanxi's squad."
);

entity(
    "fiends",
    "Fiends",
    "concept",
    "Devils possessing human corpses.",
    "Fiends are devils that inhabit dead human bodies, retaining devil powers while often displaying erratic personalities, as seen with Power and other Public Safety assets."
);

/* ---------- Places ---------- */

entity(
    "tokyo-devil-hunting",
    "Tokyo (devil hunting)",
    "place",
    "Urban setting of Public Safety operations.",
    "Tokyo is the primary setting of Chainsaw Man Part 1, where Public Safety squads respond to devil outbreaks in hotels, schools, and city streets."
);

entity(
    "hell",
    "Hell",
    "place",
    "Realm where devils originate and return.",
    "Hell is the dimension devils emerge from and revert to upon death, central to Fujimoto's cosmology and the Eternity Devil's trapped hotel nightmare."
);

entity(
    "devil-hunter-academy",
    "Devil Hunter Academy",
    "place",
    "School setting of Chainsaw Man Part 2.",
    "The Devil Hunter Academy is the high school in Part 2 where Asa Mitaka trains as a devil hunter while Yoru the War Devil inhabits her body."
);

/* ---------- Concepts / objects ---------- */

entity(
    "devil-contracts",
    "Devil Contracts",
    "concept",
    "Pacts trading something for devil power.",
    "Devil contracts let humans bargain with devils for abilities at a price — Denji's heart with Pochita, Aki's lifespan with the Curse Devil, and countless hunter tactics."
);

entity(
    "chainsaw-devil",
    "Chainsaw Devil",
    "concept",
    "Devil of chainsaws feared even by other devils.",
    "The Chainsaw Devil is the entity Pochita embodies, capable of erasing devils from existence and central to Denji's transformation and the Gun Devil war."
);

entity(
    "control-devil",
    "Control Devil",
    "concept",
    "Devil embodying domination and obedience.",
    "The Control Devil is Makima's true nature, allowing her to command anyone she deems inferior and driving Public Safety's hidden agenda in Part 1."
);

entity(
    "gun-devil",
    "Gun Devil",
    "concept",
    "Devil of firearms that devastated nations.",
    "The Gun Devil is a cataclysmic devil whose body parts are hunted worldwide; its power and fragments shape global politics and Public Safety's deepest mission."
);

/* ---------- Characters ---------- */

entity(
    "denji",
    "Denji",
    "person",
    "Chainsaw-headed devil hunter and Pochita's host.",
    "Denji is a poor teen who merges with Pochita to become Chainsaw Man, joining Public Safety for food and normal life while surviving Makima's schemes and devil battles."
);

entity(
    "pochita",
    "Pochita",
    "person",
    "Chainsaw Devil companion who becomes Denji's heart.",
    "Pochita is the Chainsaw Devil who bonds with Denji, sacrificing himself to revive the boy as Chainsaw Man and later reappearing in altered forms across the story."
);

entity(
    "power",
    "Power",
    "person",
    "Blood Fiend and Denji's chaotic squadmate.",
    "Power is the Blood Fiend devil hunter who partners with Denji and Aki, boasting arrogance and loyalty in equal measure through Public Safety missions."
);

entity(
    "aki-hayakawa",
    "Aki Hayakawa",
    "person",
    "Sword-wielding devil hunter leading Denji's squad.",
    "Aki Hayakawa is a Public Safety devil hunter who contracts with multiple devils, mentors Denji and Power, and seeks revenge against the Gun Devil for his family's death."
);

entity(
    "makima",
    "Makima",
    "person",
    "Enigmatic Public Safety superior and Control Devil.",
    "Makima leads Public Safety's Tokyo division as the Control Devil, manipulating Denji, Aki, and global powers while pursuing the Chainsaw Devil for her own ends."
);

entity(
    "kishibe",
    "Kishibe",
    "person",
    "Veteran devil hunter who trains Denji's squad.",
    "Kishibe is Public Safety's grizzled master devil hunter who survived countless contracts, training Denji, Power, and Aki while distrusting Makima's authority."
);

entity(
    "reze",
    "Reze",
    "person",
    "Bomb Devil operative who infiltrates Denji's life.",
    "Reze is the Bomb Devil who poses as a café worker to get close to Denji, sparking one of Part 1's most tragic arcs on the beach and in the city."
);

entity(
    "quanxi",
    "Quanxi",
    "person",
    "Legendary hybrid devil hunter from China.",
    "Quanxi is a renowned devil hunter leading a squad of fiends, contracted by global powers and clashing with Public Safety over devil parts and the Gun Devil."
);

entity(
    "asa-mitaka",
    "Asa Mitaka",
    "person",
    "Part 2 protagonist hosting the War Devil Yoru.",
    "Asa Mitaka is the awkward high school student in Part 2 who becomes host to Yoru the War Devil, transforming into Chainsaw Man's new central hunter."
);

entity(
    "yoru",
    "Yoru",
    "person",
    "War Devil possessing Asa Mitaka in Part 2.",
    "Yoru is the War Devil who inhabits Asa Mitaka, granting weapon-creation powers and driving Part 2's conflicts at the Devil Hunter Academy."
);

entity(
    "angel-devil",
    "Angel Devil",
    "person",
    "Public Safety fiend who drains lifespan with touch.",
    "Angel Devil is a fiend on Aki's squad whose touch steals human lifespan, forming a quiet bond with Aki amid Public Safety's brutal assignments."
);

entity(
    "beam",
    "Beam",
    "person",
    "Shark Fiend obsessed with Chainsaw Man.",
    "Beam is the Shark Fiend who idolizes Chainsaw Man, joining battles with aquatic ferocity and comic devotion to Denji's chainsaw form."
);

entity(
    "kobeni-higashiyama",
    "Kobeni Higashiyama",
    "person",
    "Anxious Public Safety devil hunter.",
    "Kobeni Higashiyama is a perpetually terrified Public Safety hunter whose knife skills and survival instincts emerge in the squad's deadliest encounters."
);

/* ---------- Relationships ---------- */

rel("tatsuki-fujimoto", "chainsaw-man", "created", "Fujimoto created Chainsaw Man.", 0.99, 0.99);
rel("tatsuki-fujimoto", "chainsaw-man-manga", "created", "Fujimoto writes the Chainsaw Man manga.", 0.99, 0.98);
rel("shueisha", "chainsaw-man-manga", "publishes", "Shueisha publishes Chainsaw Man in Jump.", 0.98, 0.96);
rel("shueisha", "chainsaw-man", "publishes", "Shueisha publishes the Chainsaw Man franchise.", 0.97, 0.94);
rel("mappa", "chainsaw-man-anime", "produced", "MAPPA produced the Chainsaw Man anime.", 0.98, 0.96);
rel("chainsaw-man-manga", "chainsaw-man", "part_of", "The manga is the core Chainsaw Man work.", 0.99, 0.99);
rel("chainsaw-man-anime", "chainsaw-man", "part_of", "The anime adapts Chainsaw Man.", 0.98, 0.97);
rel("chainsaw-man-manga", "chainsaw-man-anime", "adapted_into", "The manga was adapted into the MAPPA anime.", 0.98, 0.96);
rel("public-safety-arc", "chainsaw-man-manga", "part_of", "The Public Safety Arc is Part 1 of the manga.", 0.98, 0.96);
rel("chainsaw-man-part-2", "chainsaw-man-manga", "followed", "Part 2 continues the manga after Part 1.", 0.97, 0.94);
rel("public-safety-arc", "chainsaw-man-part-2", "preceded", "Part 1 precedes the Academy arc.", 0.96, 0.93);

rel("denji", "public-safety-devil-hunters", "member_of", "Denji joins Public Safety as Chainsaw Man.", 0.99, 0.98);
rel("power", "public-safety-devil-hunters", "member_of", "Power serves on a Public Safety squad.", 0.98, 0.96);
rel("aki-hayakawa", "public-safety-devil-hunters", "member_of", "Aki is a Public Safety devil hunter.", 0.99, 0.98);
rel("makima", "public-safety-devil-hunters", "leads", "Makima commands Public Safety's Tokyo division.", 0.99, 0.98);
rel("kishibe", "public-safety-devil-hunters", "member_of", "Kishibe is Public Safety's veteran hunter.", 0.98, 0.96);
rel("public-safety-devil-hunters", "devil-hunters", "part_of", "Public Safety is a state devil-hunting arm.", 0.97, 0.94);
rel("public-safety-devil-hunters", "tokyo-devil-hunting", "located_in", "Public Safety operates primarily in Tokyo.", 0.97, 0.95);

rel("denji", "pochita", "connected_to", "Denji's heart is Pochita the Chainsaw Devil.", 0.99, 0.98);
rel("pochita", "chainsaw-devil", "related_to", "Pochita embodies the Chainsaw Devil.", 0.99, 0.98);
rel("denji", "chainsaw-devil", "uses", "Denji transforms using Chainsaw Devil power.", 0.98, 0.97);
rel("denji", "devil-contracts", "uses", "Denji's bond with Pochita is a devil contract.", 0.97, 0.95);
rel("aki-hayakawa", "devil-contracts", "uses", "Aki contracts with Curse, Future, and other devils.", 0.97, 0.95);
rel("power", "fiends", "member_of", "Power is a Blood Fiend.", 0.98, 0.96);
rel("angel-devil", "fiends", "member_of", "Angel Devil is a fiend on Aki's squad.", 0.97, 0.94);
rel("beam", "fiends", "member_of", "Beam is a Shark Fiend.", 0.97, 0.94);

rel("aki-hayakawa", "denji", "supports", "Aki leads and protects Denji's squad.", 0.97, 0.95);
rel("power", "denji", "supports", "Power fights alongside Denji.", 0.96, 0.94);
rel("kishibe", "denji", "supports", "Kishibe trains Denji for survival.", 0.96, 0.93);
rel("makima", "denji", "motivated_by", "Makima manipulates Denji for her goals.", 0.98, 0.96);
rel("makima", "control-devil", "related_to", "Makima is the Control Devil.", 0.99, 0.98);
rel("reze", "denji", "connected_to", "Reze infiltrates Denji's life as the Bomb Devil.", 0.97, 0.95);
rel("aki-hayakawa", "gun-devil", "seeks", "Aki hunts the Gun Devil for revenge.", 0.98, 0.96);
rel("public-safety-devil-hunters", "gun-devil", "seeks", "Public Safety pursues Gun Devil fragments.", 0.97, 0.94);
rel("quanxi", "gun-devil", "seeks", "Quanxi is contracted to obtain devil parts.", 0.95, 0.92);

rel("asa-mitaka", "yoru", "connected_to", "Yoru possesses Asa Mitaka.", 0.99, 0.98);
rel("asa-mitaka", "devil-hunter-academy", "located_in", "Asa attends the Devil Hunter Academy.", 0.98, 0.96);
rel("chainsaw-man-part-2", "devil-hunter-academy", "occurred_at", "Part 2 unfolds at the Academy.", 0.97, 0.95);
rel("hell", "devil-contracts", "related_to", "Devils from Hell enable contracts.", 0.94, 0.9);
rel("kobeni-higashiyama", "public-safety-devil-hunters", "member_of", "Kobeni serves in Public Safety.", 0.96, 0.93);

module.exports = { entities, relationships };
