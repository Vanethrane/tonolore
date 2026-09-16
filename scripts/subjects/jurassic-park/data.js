/*
 * Jurassic Park subject data — Crichton and Spielberg's dinosaur franchise.
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
    "jurassic-park",
    "Jurassic Park",
    "topic",
    "Crichton's cloned dinosaurs and Spielberg's blockbuster park.",
    "Jurassic Park is the franchise of cloned dinosaurs, beginning with Michael Crichton's novel and Steven Spielberg's film about InGen's park on Isla Nublar."
);

entity(
    "michael-crichton",
    "Michael Crichton",
    "person",
    "Author of the Jurassic Park novels.",
    "Michael Crichton wrote Jurassic Park and The Lost World, imagining InGen's genetic resurrection of dinosaurs and the chaos that follows."
);

entity(
    "steven-spielberg",
    "Steven Spielberg",
    "person",
    "Director of the original Jurassic Park films.",
    "Steven Spielberg directed Jurassic Park and The Lost World: Jurassic Park, defining the franchise's cinematic spectacle."
);

entity(
    "universal-pictures",
    "Universal Pictures",
    "organization",
    "Studio behind the Jurassic Park films.",
    "Universal Pictures produces and distributes the Jurassic Park and Jurassic World films."
);

/* ---------- Works ---------- */

entity(
    "jurassic-park-novel",
    "Jurassic Park (novel)",
    "work",
    "Crichton's original techno-thriller novel.",
    "The Jurassic Park novel follows InGen's dinosaur park on Isla Nublar as security fails and the animals take over."
);

entity(
    "jurassic-park-film",
    "Jurassic Park (1993 film)",
    "work",
    "Spielberg's landmark dinosaur adventure film.",
    "The 1993 Jurassic Park film adapts Crichton's novel with groundbreaking effects, following Grant, Sattler, and Malcolm through the park's collapse."
);

entity(
    "the-lost-world",
    "The Lost World: Jurassic Park",
    "work",
    "Sequel novel and film of Isla Sorna.",
    "The Lost World shifts focus to Site B on Isla Sorna, where dinosaurs live without tourist infrastructure."
);

entity(
    "jurassic-world",
    "Jurassic World",
    "work",
    "Reboot-era park film with Claire and Owen.",
    "Jurassic World depicts a functioning dinosaur resort on Isla Nublar undone by the hybrid Indominus rex."
);

entity(
    "jurassic-world-fallen-kingdom",
    "Jurassic World: Fallen Kingdom",
    "work",
    "Sequel of Nublar's eruption and mainland fallout.",
    "Fallen Kingdom follows the rescue of dinosaurs from a volcanic Isla Nublar and the consequences of bringing them to the mainland."
);

/* ---------- Characters ---------- */

entity(
    "john-hammond",
    "John Hammond",
    "person",
    "InGen founder who builds Jurassic Park.",
    "John Hammond is the visionary founder of InGen who creates Jurassic Park, insisting the park can be controlled until it cannot."
);

entity(
    "alan-grant",
    "Dr. Alan Grant",
    "person",
    "Paleontologist invited to endorse the park.",
    "Dr. Alan Grant is a paleontologist drawn into Jurassic Park's crisis, confronting living dinosaurs he once only excavated."
);

entity(
    "ellie-sattler",
    "Dr. Ellie Sattler",
    "person",
    "Paleobotanist and park consultant.",
    "Dr. Ellie Sattler is a paleobotanist who joins the park tour and helps survivors navigate the island's dangers."
);

entity(
    "ian-malcolm",
    "Dr. Ian Malcolm",
    "person",
    "Chaotician warning that life finds a way.",
    "Dr. Ian Malcolm is a chaotician who predicts Jurassic Park's failure and becomes the franchise's wry Cassandra."
);

entity(
    "robert-muldoon",
    "Robert Muldoon",
    "person",
    "Park game warden hunting raptors.",
    "Robert Muldoon is Jurassic Park's seasoned game warden, wary of Velociraptors until the hunt turns."
);

entity(
    "dennis-nedry",
    "Dennis Nedry",
    "person",
    "Saboteur who shuts down park security.",
    "Dennis Nedry is the park programmer who disables security to steal embryos, triggering the park's collapse."
);

entity(
    "claire-dearing",
    "Claire Dearing",
    "person",
    "Jurassic World operations manager turned activist.",
    "Claire Dearing runs Jurassic World operations and later fights to protect dinosaurs after the resort falls."
);

entity(
    "owen-grady",
    "Owen Grady",
    "person",
    "Raptor trainer and Jurassic World survivor.",
    "Owen Grady trains Velociraptors for InGen and partners with Claire through Jurassic World's disasters."
);

entity(
    "henry-wu",
    "Dr. Henry Wu",
    "person",
    "Chief geneticist behind InGen's dinosaurs.",
    "Dr. Henry Wu is InGen's chief geneticist who engineers park dinosaurs and later hybrids like the Indominus rex."
);

/* ---------- Dinosaurs ---------- */

entity(
    "tyrannosaurus-rex",
    "Tyrannosaurus rex",
    "person",
    "Apex predator icon of the park.",
    "The Tyrannosaurus rex is Jurassic Park's apex predator, from the classic breakout to later appearances across islands and films."
);

entity(
    "velociraptor",
    "Velociraptor",
    "person",
    "Pack hunters that outthink fences.",
    "Velociraptors are intelligent pack hunters central to the franchise's terror, from the kitchen sequence to Owen's trained pack."
);

entity(
    "brachiosaurus",
    "Brachiosaurus",
    "person",
    "Towering sauropod of the first wonder.",
    "The Brachiosaurus embodies the awe of Jurassic Park's first reveal as visitors see a living giant graze."
);

entity(
    "indominus-rex",
    "Indominus rex",
    "person",
    "Hybrid dinosaur that wrecks Jurassic World.",
    "The Indominus rex is a genetically hybridized apex predator whose escape destroys Jurassic World's illusion of control."
);

entity(
    "mosasaurus",
    "Mosasaurus",
    "person",
    "Marine reptile of the lagoon show.",
    "The Mosasaurus is Jurassic World's lagoon spectacle, a massive marine hunter feeding on sharks for crowds."
);

entity(
    "blue-raptor",
    "Blue",
    "person",
    "Lead raptor of Owen's pack.",
    "Blue is the alpha Velociraptor of Owen Grady's pack, surviving into later Jurassic World stories."
);

/* ---------- Places / orgs ---------- */

entity(
    "isla-nublar",
    "Isla Nublar",
    "place",
    "Island home of Jurassic Park and Jurassic World.",
    "Isla Nublar is the Central American island hosting Jurassic Park and later Jurassic World until disaster and eruption."
);

entity(
    "isla-sorna",
    "Isla Sorna",
    "place",
    "Site B manufacturing island.",
    "Isla Sorna is InGen's Site B, where dinosaurs were bred away from the tourist park and later roam wild."
);

entity(
    "ingen",
    "InGen",
    "organization",
    "International Genetic Technologies.",
    "InGen (International Genetic Technologies) clones dinosaurs for Jurassic Park under John Hammond's vision."
);

entity(
    "masrani-global",
    "Masrani Global Corporation",
    "organization",
    "Conglomerate that opens Jurassic World.",
    "Masrani Global acquires InGen's legacy and opens Jurassic World as a corporate theme-park empire."
);

entity(
    "control-room",
    "Park control room",
    "place",
    "Security hub of Jurassic Park.",
    "The park control room monitors fences, power, and systems until Nedry's sabotage and cascading failures."
);

entity(
    "visitor-center",
    "Visitor Center",
    "place",
    "Jurassic Park's main lodge and museum.",
    "The Visitor Center introduces guests to InGen's cloning story and becomes a refuge during the first film's chaos."
);

/* ---------- Relationships ---------- */

rel("michael-crichton", "jurassic-park", "created", "Michael Crichton created Jurassic Park.", 0.99, 0.99);
rel("michael-crichton", "jurassic-park-novel", "created", "Crichton wrote the Jurassic Park novel.", 0.99, 0.98);
rel("steven-spielberg", "jurassic-park-film", "created", "Spielberg directed the 1993 Jurassic Park film.", 0.99, 0.98);
rel("steven-spielberg", "the-lost-world", "created", "Spielberg directed The Lost World film.", 0.96, 0.92);
rel("universal-pictures", "jurassic-park-film", "produced", "Universal released Jurassic Park.", 0.97, 0.94);
rel("jurassic-park-novel", "jurassic-park", "part_of", "The novel begins the Jurassic Park franchise.", 0.99, 0.97);
rel("jurassic-park-film", "jurassic-park", "part_of", "The 1993 film defines Jurassic Park.", 0.99, 0.97);
rel("jurassic-park-novel", "jurassic-park-film", "adapted_into", "The novel was adapted into the 1993 film.", 0.98, 0.96);
rel("the-lost-world", "jurassic-park", "part_of", "The Lost World continues Jurassic Park.", 0.97, 0.94);
rel("jurassic-world", "jurassic-park", "part_of", "Jurassic World continues the franchise.", 0.98, 0.95);
rel("jurassic-world-fallen-kingdom", "jurassic-world", "connected_to", "Fallen Kingdom sequels Jurassic World.", 0.97, 0.94);

rel("john-hammond", "ingen", "leads", "Hammond founds and leads InGen's park vision.", 0.98, 0.96);
rel("john-hammond", "jurassic-park-film", "involved", "Hammond hosts the park endorsement tour.", 0.96, 0.92);
rel("alan-grant", "ellie-sattler", "supports", "Grant and Sattler work and survive together.", 0.96, 0.92);
rel("ian-malcolm", "jurassic-park-film", "involved", "Malcolm warns that the park will fail.", 0.97, 0.94);
rel("robert-muldoon", "velociraptor", "opposed_by", "Muldoon hunts and fears the raptors.", 0.97, 0.93);
rel("dennis-nedry", "control-room", "involved", "Nedry sabotages park systems from within.", 0.98, 0.95);
rel("claire-dearing", "jurassic-world", "involved", "Claire runs Jurassic World operations.", 0.97, 0.94);
rel("owen-grady", "blue-raptor", "supports", "Owen trains and bonds with Blue.", 0.98, 0.95);
rel("henry-wu", "indominus-rex", "created", "Wu engineers the Indominus rex.", 0.98, 0.96);
rel("henry-wu", "ingen", "member_of", "Wu is InGen's chief geneticist.", 0.97, 0.94);

rel("isla-nublar", "jurassic-park", "located_in", "Isla Nublar hosts the parks.", 0.99, 0.97);
rel("isla-sorna", "the-lost-world", "located_in", "Isla Sorna is Site B in The Lost World.", 0.98, 0.95);
rel("visitor-center", "isla-nublar", "located_in", "The Visitor Center stands on Isla Nublar.", 0.97, 0.93);
rel("control-room", "isla-nublar", "located_in", "The control room is on Isla Nublar.", 0.97, 0.93);
rel("tyrannosaurus-rex", "isla-nublar", "located_in", "The T. rex is the park's star predator.", 0.97, 0.94);
rel("velociraptor", "isla-nublar", "located_in", "Raptors escape containment on Nublar.", 0.97, 0.94);
rel("indominus-rex", "jurassic-world", "involved", "The Indominus destroys Jurassic World.", 0.98, 0.96);
rel("mosasaurus", "jurassic-world", "involved", "The Mosasaurus headlines Jurassic World's lagoon.", 0.96, 0.92);
rel("masrani-global", "jurassic-world", "produced", "Masrani opens Jurassic World.", 0.97, 0.94);
rel("ingen", "masrani-global", "connected_to", "Masrani inherits InGen's dinosaur technology.", 0.95, 0.9);

module.exports = { entities, relationships };
