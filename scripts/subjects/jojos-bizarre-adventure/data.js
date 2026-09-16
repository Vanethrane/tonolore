/*
 * JoJo's Bizarre Adventure subject data — Hirohiko Araki's generational battle manga.
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
    "jojos-bizarre-adventure",
    "JoJo's Bizarre Adventure",
    "topic",
    "Hirohiko Araki's multi-generational battle manga and anime.",
    "JoJo's Bizarre Adventure is Hirohiko Araki's long-running manga and anime franchise following the Joestar bloodline across centuries, from Hamon and the Stone Mask to Stands, DIO, and battles in Egypt, Morioh, and Naples."
);

entity(
    "hirohiko-araki",
    "Hirohiko Araki",
    "person",
    "Creator of JoJo's Bizarre Adventure.",
    "Hirohiko Araki created JoJo's Bizarre Adventure for Weekly Shonen Jump, designing each part's JoJo protagonist, iconic poses, Stand battles, and the enduring rivalry with DIO."
);

entity(
    "shueisha",
    "Shueisha",
    "organization",
    "Publisher of JoJo's Bizarre Adventure manga.",
    "Shueisha publishes JoJo's Bizarre Adventure through Jump and Ultra Jump, serializing Araki's saga from Phantom Blood through ongoing parts."
);

entity(
    "david-production",
    "David Production",
    "organization",
    "Studio behind the JoJo anime adaptations.",
    "David Production animates JoJo's Bizarre Adventure, adapting Phantom Blood through Stone Ocean with distinctive color shifts and Stand battle choreography."
);

/* ---------- Works ---------- */

entity(
    "jojo-manga",
    "JoJo's Bizarre Adventure (manga)",
    "work",
    "Original Araki manga spanning multiple parts.",
    "The JoJo manga chronicles the Joestar family from Jonathan Joestar's fight against DIO through Jotaro's Stardust Crusaders, Giorno's Golden Wind, and later parts."
);

entity(
    "jojo-anime",
    "JoJo's Bizarre Adventure (anime)",
    "work",
    "David Production television adaptation.",
    "The JoJo anime by David Production adapts Araki's parts with stylized visuals, opening themes, and faithful Stand confrontations across the franchise."
);

entity(
    "phantom-blood",
    "Phantom Blood",
    "work",
    "Part 1 with Jonathan Joestar and DIO.",
    "Phantom Blood is JoJo Part 1, where Jonathan Joestar battles the vampire DIO using Hamon after the Stone Mask transforms his adoptive brother."
);

entity(
    "stardust-crusaders",
    "Stardust Crusaders",
    "work",
    "Part 3 with Jotaro Kujo against DIO in Egypt.",
    "Stardust Crusaders is JoJo Part 3, following Jotaro Kujo and allies across the world to Egypt to defeat DIO before his Stand The World stops time."
);

entity(
    "golden-wind",
    "Golden Wind",
    "work",
    "Part 5 with Giorno Giovanna in Naples.",
    "Golden Wind (Vento Aureo) is JoJo Part 5, where Giorno Giovanna joins Passione to overthrow the boss Diavolo and reform the Italian mafia."
);

entity(
    "battle-tendency",
    "Battle Tendency",
    "work",
    "Part 2 with Joseph Joestar against ancient beings.",
    "Battle Tendency is JoJo Part 2, starring young Joseph Joestar against the Pillar Men and their quest for the Super Aja in 1930s Europe and Mexico."
);

/* ---------- Concepts / objects ---------- */

entity(
    "stands",
    "Stands",
    "concept",
    "Supernatural manifestations of fighting spirit.",
    "Stands are psychic embodiments of life force, from Part 3 onward defining JoJo battles with unique abilities like Star Platinum, The World, and Gold Experience."
);

entity(
    "hamon",
    "Hamon",
    "concept",
    "Ripple energy used against vampires in early parts.",
    "Hamon (the Ripple) is breathing-based energy Jonathan and Joseph Joestar use against vampires and the Pillar Men before Stands dominate the series."
);

entity(
    "stone-mask",
    "Stone Mask",
    "object",
    "Aztec artifact that creates vampires.",
    "The Stone Mask is the ancient mask that awakens vampiric power when pierced by blood, transforming DIO and launching the Joestar-DIO conflict."
);

entity(
    "stand-arrow",
    "Stand Arrow",
    "object",
    "Arrow that awakens Stand users.",
    "The Stand Arrow is a meteoric artifact that pierces worthy individuals to awaken Stands, central to Passione's rise and many Part 4–6 conflicts."
);

entity(
    "star-platinum",
    "Star Platinum",
    "concept",
    "Jotaro Kujo's Stand of immense power.",
    "Star Platinum is Jotaro Kujo's Stand, possessing superhuman strength, precision, and eventually time stop to rival DIO's The World."
);

entity(
    "the-world",
    "The World",
    "concept",
    "DIO's Stand that stops time.",
    "The World is DIO's Stand, halting time for brief intervals and making him nearly unbeatable until Jotaro's Star Platinum learns the same power."
);

entity(
    "gold-experience",
    "Gold Experience",
    "concept",
    "Giorno Giovanna's Stand that gives life.",
    "Gold Experience is Giorno Giovanna's Stand, animating objects and later evolving into Gold Experience Requiem with reality-rewriting power."
);

/* ---------- Organizations ---------- */

entity(
    "passione",
    "Passione",
    "organization",
    "Italian mafia Giorno seeks to reform.",
    "Passione is the powerful Italian mafia in Golden Wind, ruled by the mysterious Boss Diavolo until Giorno Giovanna's rebellion reshapes the organization."
);

entity(
    "speedwagon-foundation",
    "Speedwagon Foundation",
    "organization",
    "Charitable organization aiding the Joestars.",
    "The Speedwagon Foundation, founded by Robert E. O. Speedwagon, funds research and supports Joestar allies from Hamon eras through Stand battles."
);

/* ---------- Places ---------- */

entity(
    "morioh",
    "Morioh",
    "place",
    "Japanese town setting of Diamond Is Unbreakable.",
    "Morioh is the fictional Japanese town in Part 4 where Josuke Higashikata and allies hunt the serial killer Yoshikage Kira amid Stand users."
);

entity(
    "egypt-dio",
    "Egypt (DIO's mansion)",
    "place",
    "Final battleground of Stardust Crusaders.",
    "Egypt hosts DIO's mansion and the climactic Stardust Crusaders confrontation where Jotaro defeats The World."
);

entity(
    "naples",
    "Naples",
    "place",
    "Italian city setting of Golden Wind.",
    "Naples and surrounding Italy serve as the backdrop for Giorno Giovanna's Passione ascent in Golden Wind."
);

/* ---------- Characters ---------- */

entity(
    "jonathan-joestar",
    "Jonathan Joestar",
    "person",
    "Gentleman JoJo of Phantom Blood.",
    "Jonathan Joestar is the noble first JoJo who masters Hamon to fight the vampire DIO, sacrificing himself to save his wife Erina and unborn child."
);

entity(
    "joseph-joestar",
    "Joseph Joestar",
    "person",
    "Cunning JoJo of Battle Tendency and Part 3 elder.",
    "Joseph Joestar is the trickster JoJo who defeats the Pillar Men with Hamon and later guides the Stardust Crusaders as Jotaro's grandfather."
);

entity(
    "jotaro-kujo",
    "Jotaro Kujo",
    "person",
    "Stoic JoJo with Star Platinum in Part 3.",
    "Jotaro Kujo is the delinquent JoJo who awakens Star Platinum, leads the Stardust Crusaders to Egypt, and becomes an enduring icon of the franchise."
);

entity(
    "giorno-giovanna",
    "Giorno Giovanna",
    "person",
    "DIO's son who dreams of reforming Passione.",
    "Giorno Giovanna is the protagonist of Golden Wind, son of DIO, who uses Gold Experience to climb Passione and defeat Diavolo."
);

entity(
    "dio-brando",
    "DIO",
    "person",
    "Vampire antagonist across early JoJo parts.",
    "DIO (Dio Brando) is Jonathan's adoptive brother turned vampire and Stand user whose ambition and The World haunt the Joestar line for generations."
);

entity(
    "kujo-jolyne",
    "Jolyne Cujoh",
    "person",
    "Jotaro's daughter imprisoned in Stone Ocean.",
    "Jolyne Cujoh is Jotaro's daughter in Stone Ocean, awakening Stone Free to survive Green Dolphin Street Prison and fight Pucci."
);

entity(
    "robert-e-o-speedwagon",
    "Robert E. O. Speedwagon",
    "person",
    "Jonathan's ally who founded the Speedwagon Foundation.",
    "Robert E. O. Speedwagon is Jonathan Joestar's loyal friend whose fortune later funds the Speedwagon Foundation's support of Joestar battles."
);

entity(
    "noriaki-kakyoin",
    "Noriaki Kakyoin",
    "person",
    "Stardust Crusader with Hierophant Green.",
    "Noriaki Kakyoin joins Jotaro's party in Stardust Crusaders, wielding the emerald-slinging Stand Hierophant Green against DIO's agents."
);

entity(
    "jean-pierre-polnareff",
    "Jean Pierre Polnareff",
    "person",
    "French Crusader with Silver Chariot.",
    "Jean Pierre Polnareff is a Stardust Crusader seeking his sister's killer, fighting with the rapier Stand Silver Chariot."
);

entity(
    "bruno-bucciarati",
    "Bruno Bucciarati",
    "person",
    "Passione capo who leads Giorno's team.",
    "Bruno Bucciarati is a Passione team leader who recruits Giorno Giovanna, using Sticky Fingers to unravel the Boss's identity in Golden Wind."
);

entity(
    "diavolo",
    "Diavolo",
    "person",
    "Secret Passione boss with King Crimson.",
    "Diavolo is Passione's hidden boss whose Stand King Crimson erases time, making him Giorno Giovanna's ultimate adversary in Golden Wind."
);

entity(
    "josuke-higashikata",
    "Josuke Higashikata",
    "person",
    "Morioh's pompadour JoJo of Part 4.",
    "Josuke Higashikata is the Part 4 JoJo with Crazy Diamond, healing and reconstructing matter while protecting Morioh from Yoshikage Kira."
);

/* ---------- Relationships ---------- */

rel("hirohiko-araki", "jojos-bizarre-adventure", "created", "Araki created JoJo's Bizarre Adventure.", 0.99, 0.99);
rel("hirohiko-araki", "jojo-manga", "created", "Araki writes the JoJo manga.", 0.99, 0.98);
rel("shueisha", "jojo-manga", "publishes", "Shueisha serializes JoJo in Jump.", 0.98, 0.96);
rel("david-production", "jojo-anime", "produced", "David Production animates JoJo.", 0.98, 0.96);
rel("jojo-manga", "jojos-bizarre-adventure", "part_of", "The manga is the core JoJo work.", 0.99, 0.99);
rel("jojo-anime", "jojos-bizarre-adventure", "part_of", "The anime adapts JoJo.", 0.98, 0.97);
rel("jojo-manga", "jojo-anime", "adapted_into", "The manga was adapted into anime.", 0.98, 0.96);

rel("phantom-blood", "jojo-manga", "part_of", "Phantom Blood is JoJo Part 1.", 0.99, 0.98);
rel("battle-tendency", "jojo-manga", "part_of", "Battle Tendency is JoJo Part 2.", 0.99, 0.98);
rel("stardust-crusaders", "jojo-manga", "part_of", "Stardust Crusaders is JoJo Part 3.", 0.99, 0.98);
rel("golden-wind", "jojo-manga", "part_of", "Golden Wind is JoJo Part 5.", 0.99, 0.98);
rel("phantom-blood", "battle-tendency", "preceded", "Part 1 precedes Battle Tendency.", 0.97, 0.94);
rel("battle-tendency", "stardust-crusaders", "preceded", "Part 2 precedes Stardust Crusaders.", 0.96, 0.93);
rel("stardust-crusaders", "golden-wind", "preceded", "Part 3 precedes later parts including Golden Wind.", 0.94, 0.9);

rel("jonathan-joestar", "phantom-blood", "involved", "Jonathan stars in Phantom Blood.", 0.99, 0.98);
rel("joseph-joestar", "battle-tendency", "involved", "Joseph stars in Battle Tendency.", 0.99, 0.98);
rel("jotaro-kujo", "stardust-crusaders", "involved", "Jotaro leads Stardust Crusaders.", 0.99, 0.99);
rel("giorno-giovanna", "golden-wind", "involved", "Giorno stars in Golden Wind.", 0.99, 0.98);
rel("jonathan-joestar", "hamon", "uses", "Jonathan fights with Hamon.", 0.98, 0.96);
rel("joseph-joestar", "hamon", "uses", "Joseph masters Hamon tricks.", 0.98, 0.96);
rel("dio-brando", "stone-mask", "uses", "DIO becomes a vampire via the Stone Mask.", 0.99, 0.98);
rel("jonathan-joestar", "dio-brando", "opposed_by", "Jonathan battles DIO in Part 1.", 0.99, 0.98);

rel("jotaro-kujo", "star-platinum", "uses", "Jotaro's Stand is Star Platinum.", 0.99, 0.99);
rel("dio-brando", "the-world", "uses", "DIO wields The World.", 0.99, 0.99);
rel("giorno-giovanna", "gold-experience", "uses", "Giorno's Stand is Gold Experience.", 0.99, 0.98);
rel("star-platinum", "stands", "part_of", "Star Platinum is a Stand.", 0.98, 0.96);
rel("the-world", "stands", "part_of", "The World is a Stand.", 0.98, 0.96);
rel("gold-experience", "stands", "part_of", "Gold Experience is a Stand.", 0.98, 0.96);
rel("stand-arrow", "stands", "caused", "The Stand Arrow awakens Stands.", 0.97, 0.95);

rel("jotaro-kujo", "dio-brando", "opposed_by", "Jotaro confronts DIO in Egypt.", 0.99, 0.98);
rel("stardust-crusaders", "egypt-dio", "occurred_at", "Part 3 culminates in Egypt.", 0.98, 0.96);
rel("noriaki-kakyoin", "jotaro-kujo", "supports", "Kakyoin joins Jotaro's Crusaders.", 0.97, 0.95);
rel("jean-pierre-polnareff", "jotaro-kujo", "supports", "Polnareff fights with the Crusaders.", 0.97, 0.95);
rel("joseph-joestar", "jotaro-kujo", "supports", "Joseph guides Jotaro in Part 3.", 0.96, 0.94);

rel("giorno-giovanna", "passione", "member_of", "Giorno joins Passione to reform it.", 0.98, 0.96);
rel("bruno-bucciarati", "passione", "member_of", "Bucciarati leads a Passione team.", 0.98, 0.96);
rel("diavolo", "passione", "leads", "Diavolo secretly rules Passione.", 0.99, 0.98);
rel("giorno-giovanna", "diavolo", "opposed_by", "Giorno rebels against Diavolo.", 0.99, 0.98);
rel("golden-wind", "naples", "occurred_at", "Golden Wind unfolds in Naples.", 0.98, 0.96);
rel("josuke-higashikata", "morioh", "located_in", "Josuke protects Morioh in Part 4.", 0.98, 0.96);

rel("robert-e-o-speedwagon", "speedwagon-foundation", "created", "Speedwagon created his foundation.", 0.98, 0.96);
rel("speedwagon-foundation", "jotaro-kujo", "supports", "The Foundation aids the Crusaders.", 0.95, 0.92);
rel("kujo-jolyne", "jotaro-kujo", "related_to", "Jolyne is Jotaro's daughter.", 0.98, 0.96);
rel("giorno-giovanna", "dio-brando", "related_to", "Giorno is DIO's son.", 0.97, 0.95);
rel("joseph-joestar", "jonathan-joestar", "related_to", "Joseph is Jonathan's grandson.", 0.97, 0.95);

module.exports = { entities, relationships };
