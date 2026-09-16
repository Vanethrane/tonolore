/*
 * The Witcher subject data — Sapkowski's saga and CD Projekt adaptations.
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
    "the-witcher",
    "The Witcher",
    "topic",
    "Sapkowski's dark fantasy of witchers, politics, and destiny on the Continent.",
    "The Witcher is Andrzej Sapkowski's fantasy saga of Geralt of Rivia, Ciri, and Yennefer, expanded by CD Projekt RED's games and later screen adaptations across the Continent's kingdoms and monsters."
);

entity(
    "andrzej-sapkowski",
    "Andrzej Sapkowski",
    "person",
    "Creator of The Witcher saga.",
    "Andrzej Sapkowski wrote the Witcher short stories and novels that introduced Geralt, Ciri, Yennefer, and the politics of the Continent."
);

entity(
    "cd-projekt",
    "CD Projekt",
    "organization",
    "Polish holding company behind The Witcher games.",
    "CD Projekt is the Polish company whose RED studio adapted Sapkowski's Witcher world into acclaimed video games."
);

entity(
    "cd-projekt-red",
    "CD Projekt RED",
    "organization",
    "Studio that developed The Witcher games.",
    "CD Projekt RED developed The Witcher, The Witcher 2, and The Witcher 3: Wild Hunt, defining the franchise for many players."
);

/* ---------- Works ---------- */

entity(
    "witcher-saga",
    "The Witcher saga (books)",
    "work",
    "Sapkowski's short stories and novels.",
    "The Witcher saga includes short-story collections and the novels that follow Geralt, Ciri, and the Northern Wars."
);

entity(
    "the-witcher-3",
    "The Witcher 3: Wild Hunt",
    "work",
    "Open-world RPG of Ciri and the Wild Hunt.",
    "The Witcher 3: Wild Hunt is CD Projekt RED's open-world RPG in which Geralt searches for Ciri while the Wild Hunt closes in."
);

entity(
    "the-witcher-netflix",
    "The Witcher (Netflix series)",
    "work",
    "Live-action series adaptation.",
    "The Netflix Witcher series adapts Sapkowski's characters and stories for television, centering Geralt, Ciri, and Yennefer."
);

/* ---------- Characters ---------- */

entity(
    "geralt-of-rivia",
    "Geralt of Rivia",
    "person",
    "Witcher known as the White Wolf.",
    "Geralt of Rivia is a School of the Wolf witcher who hunts monsters for coin, bound by destiny to Ciri and entangled with Yennefer and the Continent's wars."
);

entity(
    "ciri",
    "Ciri",
    "person",
    "Princess of Cintra; Child of Surprise; Elder Blood.",
    "Cirilla Fiona Elen Riannon — Ciri — is the princess of Cintra whose Elder Blood and Law of Surprise bond to Geralt draw empires and the Wild Hunt."
);

entity(
    "yennefer",
    "Yennefer of Vengerberg",
    "person",
    "Powerful sorceress bound to Geralt.",
    "Yennefer of Vengerberg is a formidable sorceress whose fraught love with Geralt and protectiveness toward Ciri shape the saga."
);

entity(
    "triss-merigold",
    "Triss Merigold",
    "person",
    "Sorceress ally of Geralt and the Lodge.",
    "Triss Merigold is a Northern sorceress close to Geralt, active in Temeria's politics and later among the Lodge of Sorceresses."
);

entity(
    "dandelion",
    "Dandelion",
    "person",
    "Bard and chronicler of Geralt's deeds.",
    "Dandelion (Jaskier) is a poet and Geralt's longtime friend who spreads songs of the White Wolf across the Continent."
);

entity(
    "vesemir",
    "Vesemir",
    "person",
    "Oldest witcher of Kaer Morhen.",
    "Vesemir is the veteran mentor of the School of the Wolf who trains young witchers at Kaer Morhen and guides Geralt as a father figure."
);

entity(
    "emhyr-var-emreis",
    "Emhyr var Emreis",
    "person",
    "Emperor of Nilfgaard; Ciri's father.",
    "Emhyr var Emreis rules Nilfgaard and seeks Ciri for dynasty and prophecy, driving much of the Continent's war."
);

entity(
    "eskel",
    "Eskel",
    "person",
    "Witcher of the School of the Wolf.",
    "Eskel is a scarred School of the Wolf witcher raised alongside Geralt at Kaer Morhen."
);

entity(
    "lambert",
    "Lambert",
    "person",
    "Cynical witcher of Kaer Morhen.",
    "Lambert is a sharp-tongued School of the Wolf witcher who winters at Kaer Morhen with Geralt and Vesemir."
);

entity(
    "regis",
    "Emiel Regis",
    "person",
    "Higher vampire companion of Geralt.",
    "Emiel Regis Rohellec Terzieff-Godefroy is a higher vampire who joins Geralt's company with wit, medicine, and hidden power."
);

entity(
    "philippa-eilhart",
    "Philippa Eilhart",
    "person",
    "Sorceress leader in Redanian intrigue.",
    "Philippa Eilhart is a shapeshifting sorceress central to Redania's politics and the Lodge of Sorceresses."
);

entity(
    "avallach",
    "Avallac'h",
    "person",
    "Aen Elle elf tied to Ciri and the Hunt.",
    "Avallac'h is an Aen Elle sage who guides and manipulates Ciri's path across worlds and against the Wild Hunt."
);

entity(
    "gaunter-odimm",
    "Gaunter O'Dimm",
    "person",
    "Mysterious entity of deals and debts.",
    "Gaunter O'Dimm, also called Master Mirror, is a supernatural bargainer encountered in The Witcher 3's Hearts of Stone story."
);

/* ---------- Places ---------- */

entity(
    "the-continent",
    "The Continent",
    "place",
    "Primary setting of The Witcher world.",
    "The Continent is the main landmass of Sapkowski's world, home to Northern Kingdoms, Nilfgaard, and countless monsters."
);

entity(
    "kaer-morhen",
    "Kaer Morhen",
    "place",
    "Keep of the School of the Wolf.",
    "Kaer Morhen is the ruined mountain fortress where School of the Wolf witchers train and winter."
);

entity(
    "nilfgaard",
    "Nilfgaard",
    "place",
    "Southern empire under Emhyr var Emreis.",
    "Nilfgaard is the expansive southern empire that invades the North, seeking power and Ciri."
);

entity(
    "redania",
    "Redania",
    "place",
    "Northern kingdom of spies and sorceresses.",
    "Redania is a powerful Northern Kingdom known for intelligence networks, Philippa's influence, and rivalry with Nilfgaard."
);

entity(
    "cintra",
    "Cintra",
    "place",
    "Ciri's homeland, overrun by Nilfgaard.",
    "Cintra is Ciri's royal home, shattered by Nilfgaard's invasion and central to her claim and destiny."
);

entity(
    "novigrad",
    "Novigrad",
    "place",
    "Free city of trade, crime, and faith.",
    "Novigrad is a wealthy free city of merchants, underworld bosses, and religious zeal on the Continent's coasts."
);

entity(
    "skellige",
    "Skellige",
    "place",
    "Island clans of warriors and jarls.",
    "Skellige is an archipelago of clan warriors whose politics and battles intertwine with Ciri and the Northern Wars."
);

/* ---------- Organizations / concepts ---------- */

entity(
    "school-of-the-wolf",
    "School of the Wolf",
    "organization",
    "Witcher school based at Kaer Morhen.",
    "The School of the Wolf trains mutant monster hunters at Kaer Morhen, including Geralt, Vesemir, Eskel, and Lambert."
);

entity(
    "wild-hunt",
    "Wild Hunt",
    "organization",
    "Spectral riders seeking Ciri.",
    "The Wild Hunt is a spectral cavalcade of Aen Elle warriors who hunt Ciri across worlds for her Elder Blood."
);

entity(
    "lodge-of-sorceresses",
    "Lodge of Sorceresses",
    "organization",
    "Secret circle of powerful mages.",
    "The Lodge of Sorceresses is a covert alliance of sorceresses, including Philippa and Triss, shaping politics after the wars."
);

entity(
    "witchers",
    "Witchers",
    "concept",
    "Mutated monster hunters for hire.",
    "Witchers are professionally trained mutants who take contracts against beasts, walking a lonely path between humans and monsters."
);

entity(
    "elder-blood",
    "Elder Blood",
    "concept",
    "Ancient elven lineage carried by Ciri.",
    "Elder Blood is the rare genetic legacy that grants Ciri world-walking power and makes her the prize of empires and the Wild Hunt."
);

entity(
    "law-of-surprise",
    "Law of Surprise",
    "concept",
    "Custom that binds Ciri to Geralt.",
    "The Law of Surprise awards a savior whatever the rescued does not yet expect — binding Ciri to Geralt as his Child of Surprise."
);

/* ---------- Relationships ---------- */

rel("andrzej-sapkowski", "the-witcher", "created", "Andrzej Sapkowski created The Witcher saga.", 0.99, 0.99);
rel("andrzej-sapkowski", "witcher-saga", "created", "Sapkowski wrote the Witcher books.", 0.99, 0.98);
rel("cd-projekt-red", "the-witcher-3", "produced", "CD Projekt RED developed The Witcher 3.", 0.98, 0.96);
rel("cd-projekt", "cd-projekt-red", "contains", "CD Projekt RED is part of CD Projekt.", 0.97, 0.94);
rel("witcher-saga", "the-witcher", "part_of", "The books are the foundation of The Witcher.", 0.99, 0.99);
rel("the-witcher-3", "the-witcher", "part_of", "The Witcher 3 is a major Witcher work.", 0.98, 0.96);
rel("the-witcher-netflix", "the-witcher", "part_of", "The Netflix series adapts The Witcher.", 0.97, 0.94);
rel("witcher-saga", "the-witcher-3", "adapted_into", "The books inspired CD Projekt RED's games.", 0.96, 0.93);
rel("witcher-saga", "the-witcher-netflix", "adapted_into", "The books were adapted for Netflix.", 0.96, 0.93);

rel("geralt-of-rivia", "school-of-the-wolf", "member_of", "Geralt is a School of the Wolf witcher.", 0.99, 0.98);
rel("vesemir", "school-of-the-wolf", "leads", "Vesemir is the elder of Kaer Morhen's wolves.", 0.96, 0.92);
rel("school-of-the-wolf", "witchers", "part_of", "The School of the Wolf is a witcher tradition.", 0.97, 0.94);
rel("kaer-morhen", "school-of-the-wolf", "located_in", "The School of the Wolf is based at Kaer Morhen.", 0.98, 0.96);

rel("ciri", "elder-blood", "connected_to", "Ciri carries the Elder Blood.", 0.99, 0.98);
rel("ciri", "law-of-surprise", "connected_to", "Ciri is Geralt's Child of Surprise.", 0.98, 0.97);
rel("geralt-of-rivia", "ciri", "connected_to", "Destiny binds Geralt and Ciri.", 0.99, 0.98);
rel("geralt-of-rivia", "yennefer", "connected_to", "Geralt and Yennefer share a turbulent bond.", 0.98, 0.96);
rel("yennefer", "ciri", "supports", "Yennefer protects and mentors Ciri.", 0.97, 0.95);
rel("dandelion", "geralt-of-rivia", "supports", "Dandelion is Geralt's loyal friend.", 0.97, 0.94);
rel("triss-merigold", "geralt-of-rivia", "supports", "Triss aids Geralt through wars and politics.", 0.96, 0.93);
rel("triss-merigold", "lodge-of-sorceresses", "member_of", "Triss joins the Lodge of Sorceresses.", 0.95, 0.91);
rel("philippa-eilhart", "lodge-of-sorceresses", "leads", "Philippa is central to the Lodge.", 0.96, 0.93);

rel("emhyr-var-emreis", "nilfgaard", "leads", "Emhyr rules the Nilfgaardian Empire.", 0.99, 0.98);
rel("emhyr-var-emreis", "ciri", "seeks", "Emhyr seeks Ciri for throne and prophecy.", 0.98, 0.96);
rel("wild-hunt", "ciri", "seeks", "The Wild Hunt hunts Ciri for Elder Blood.", 0.99, 0.98);
rel("avallach", "ciri", "supports", "Avallac'h guides Ciri against the Hunt.", 0.96, 0.93);
rel("avallach", "wild-hunt", "opposed_by", "Avallac'h works against the Wild Hunt's claim.", 0.95, 0.91);
rel("ciri", "cintra", "connected_to", "Ciri is heir of Cintra.", 0.98, 0.96);
rel("nilfgaard", "cintra", "opposed_by", "Nilfgaard conquers Cintra.", 0.97, 0.94);
rel("kaer-morhen", "the-continent", "located_in", "Kaer Morhen stands on the Continent.", 0.97, 0.93);
rel("novigrad", "the-continent", "located_in", "Novigrad lies on the Continent.", 0.97, 0.93);
rel("skellige", "the-continent", "located_in", "Skellige borders the Continent's seas.", 0.96, 0.92);
rel("philippa-eilhart", "redania", "located_in", "Philippa schemes within Redania.", 0.95, 0.9);
rel("regis", "geralt-of-rivia", "supports", "Regis journeys with Geralt's company.", 0.96, 0.92);
rel("gaunter-odimm", "the-witcher-3", "connected_to", "Gaunter O'Dimm appears in Witcher 3's Hearts of Stone.", 0.95, 0.9);

module.exports = { entities, relationships };
