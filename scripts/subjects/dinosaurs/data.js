/*
 * Dinosaurs subject data — clades, formations, and the people who named the bones.
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

/* ---------- Root / major clades ---------- */

entity(
    "dinosaurs",
    "Dinosaurs",
    "topic",
    "Clades, formations, and discoveries that keep rewriting deep-time life.",
    "Dinosaurs are the Mesozoic archosaurs whose fossils, from Morrison sauropods to Hell Creek tyrannosaurs, still reorganize family trees. Living birds are their surviving lineage; the rest ended at the K–Pg extinction."
);

entity(
    "dinosauria",
    "Dinosauria",
    "topic",
    "The clade Richard Owen named in 1842 for the 'fearfully great reptiles.'",
    "Dinosauria is the formal clade that unites ornithischians and saurischians — later refined so that birds sit inside theropod dinosaurs rather than beside them."
);

entity(
    "saurischia",
    "Saurischia",
    "topic",
    "Lizard-hipped branch that includes theropods and sauropodomorphs.",
    "Saurischia is the traditional hip-based division that holds meat-eating theropods and the long-necked sauropods, the two most public dinosaur body plans."
);

entity(
    "ornithischia",
    "Ornithischia",
    "topic",
    "Bird-hipped herbivores — ceratopsians, stegosaurs, ankylosaurs, and duckbills.",
    "Ornithischia gathers the beaked plant-eaters whose pubis points backward. Triceratops, Stegosaurus, and the hadrosaurs are its familiar faces, not the ancestors of birds."
);

entity(
    "theropoda",
    "Theropoda",
    "topic",
    "Bipedal mostly carnivorous dinosaurs, including birds.",
    "Theropoda is the saurischian clade of hollow-boned bipeds: Allosaurus, Velociraptor, Tyrannosaurus, and the line that becomes Aves."
);

entity(
    "sauropoda",
    "Sauropoda",
    "topic",
    "Long-necked, pillar-limbed giants of the Jurassic and Cretaceous.",
    "Sauropoda includes Diplodocus, Brachiosaurus, and their kin — the largest land animals, abundant in the Morrison Formation and later southern continents."
);

entity(
    "ceratopsia",
    "Ceratopsia",
    "topic",
    "Horned, frilled ornithischians culminating in Triceratops.",
    "Ceratopsia runs from small Asian protoceratopsids to the huge chasmosaurines and centrosaurines of the Late Cretaceous American West."
);

entity(
    "stegosauria",
    "Stegosauria",
    "topic",
    "Plated, spiked ornithischians of the Jurassic.",
    "Stegosauria is the plate-backed clade whose type, Stegosaurus, defines the Morrison's odd-armored herbivores."
);

entity(
    "aves",
    "Birds",
    "topic",
    "Living dinosaurs — the surviving theropod lineage.",
    "Modern birds are nested theropod dinosaurs, a result built from Archaeopteryx, Chinese feathered fossils, and the shared wrists, wishbones, and hollow bones of maniraptorans."
);

/* ---------- Species / specimens ---------- */

entity(
    "tyrannosaurus-rex",
    "Tyrannosaurus rex",
    "object",
    "Late Cretaceous apex theropod of western North America.",
    "Tyrannosaurus rex is the huge two-fingered predator of the Hell Creek and equivalent beds, known from skeletons such as Sue and from bite-marked bones of Triceratops and hadrosaurs."
);

entity(
    "triceratops",
    "Triceratops",
    "object",
    "Three-horned ceratopsian that shared Hell Creek with T. rex.",
    "Triceratops is the common large herbivore of the latest Cretaceous northern plains, its frill and brow horns the counterpart to tyrannosaur bonebeds in the same formations."
);

entity(
    "velociraptor",
    "Velociraptor",
    "object",
    "Man-sized dromaeosaur from the Djadochta of Mongolia.",
    "Velociraptor mongoliensis is a lightly built, feathered dromaeosaur, famous from the Fighting Dinosaurs specimen locked with Protoceratops — smaller than its movie image."
);

entity(
    "stegosaurus",
    "Stegosaurus",
    "object",
    "Jurassic plated dinosaur of the Morrison Formation.",
    "Stegosaurus carried two rows of plates and a thagomizer tail. It is the public face of Stegosauria and a staple of Colorado and Utah Morrison quarries."
);

entity(
    "allosaurus",
    "Allosaurus",
    "object",
    "Common large Morrison theropod, hunter of Jurassic floodplains.",
    "Allosaurus is the abundant apex predator of the Morrison Formation, known from Cleveland-Lloyd and Dinosaur National Monument bonebeds."
);

entity(
    "diplodocus",
    "Diplodocus",
    "object",
    "Whip-tailed Morrison sauropod with a long, low skull.",
    "Diplodocus is the slender sauropod whose mounted skeletons defined public sauropods for a century, a Morrison genus of riverine floodplains."
);

entity(
    "brachiosaurus",
    "Brachiosaurus",
    "object",
    "High-shouldered Morrison sauropod with longer forelimbs than hind.",
    "Brachiosaurus altithorax browsed higher than diplodocids. Its Giraffatitan African relatives later filled museum halls under a related name."
);

entity(
    "archaeopteryx",
    "Archaeopteryx",
    "object",
    "Jurassic Solnhofen fossil that first tied birds to dinosaurs.",
    "Archaeopteryx, from Bavarian lagoon limestones, has flight feathers and teeth, a transitional fossil Owen's successors used to argue that birds are dinosaurs."
);

entity(
    "iguanodon",
    "Iguanodon",
    "object",
    "Early Cretaceous ornithopod that helped found Dinosauria.",
    "Iguanodon, named from English Wealden teeth and later Belgian coal-mine skeletons, was one of the three genera Richard Owen bundled as Dinosauria."
);

entity(
    "sue",
    "Sue",
    "object",
    "Most complete T. rex, now at the Field Museum in Chicago.",
    "Sue (FMNH PR 2081) was collected on the Cheyenne River Reservation in 1990, later auctioned, and mounted as the Field Museum's flagship Tyrannosaurus."
);

/* ---------- Places / events / people ---------- */

entity(
    "morrison-formation",
    "Morrison Formation",
    "place",
    "Late Jurassic beds of the American West that yield Allosaurus and sauropods.",
    "The Morrison Formation, from Montana to New Mexico, is the classic Jurassic dinosaur graveyard: Stegosaurus, Allosaurus, Diplodocus, and Brachiosaurus in floodplain mudstones."
);

entity(
    "hell-creek-formation",
    "Hell Creek Formation",
    "place",
    "Latest Cretaceous Montana–Dakotas unit of T. rex and Triceratops.",
    "Hell Creek records the last inland-sea dinosaurs of Laramidia and the K–Pg boundary clay that ends them, the formation that produced Sue."
);

entity(
    "solnhofen",
    "Solnhofen",
    "place",
    "Bavarian lithographic limestone that preserved Archaeopteryx.",
    "The Solnhofen lagoons trapped jellyfish, insects, and the first Archaeopteryx, giving paleontology its cleanest early bird–dinosaur fossils."
);

entity(
    "k-pg-extinction",
    "K–Pg extinction",
    "event",
    "End-Cretaceous mass extinction that killed non-avian dinosaurs.",
    "The Cretaceous–Paleogene extinction, about 66 million years ago, ended non-avian dinosaurs worldwide. An asteroid impact at Chicxulub is the leading documented cause."
);

entity(
    "chicxulub-crater",
    "Chicxulub crater",
    "place",
    "Impact structure under the Yucatán tied to the K–Pg boundary.",
    "Chicxulub is the buried crater whose iridium, shocked quartz, and tsunami beds match the K–Pg clay, the physical scar of the extinction."
);

entity(
    "mary-anning",
    "Mary Anning",
    "person",
    "Lyme Regis fossilist whose marine reptiles trained Victorian paleontology.",
    "Mary Anning collected ichthyosaurs, plesiosaurs, and a pterosaur on the Jurassic Coast. She was not a dinosaur specialist, but her trade made the science that later named Dinosauria."
);

entity(
    "richard-owen",
    "Richard Owen",
    "person",
    "Anatomist who coined Dinosauria in 1842.",
    "Richard Owen grouped Iguanodon, Megalosaurus, and Hylaeosaurus as Dinosauria, founding the clade name still used for the group."
);

entity(
    "barnum-brown",
    "Barnum Brown",
    "person",
    "AMNH collector who found the first documented T. rex.",
    "Barnum Brown collected the Hell Creek tyrannosaur that Henry Fairfield Osborn named Tyrannosaurus rex in 1905, and he filled American Museum halls with Morrison and Cretaceous bones."
);

entity(
    "gideon-mantell",
    "Gideon Mantell",
    "person",
    "Sussex surgeon who named Iguanodon from Wealden teeth.",
    "Gideon Mantell described Iguanodon in 1825 from teeth his household found in Tilgate Forest, one of the first dinosaurs named and later one of Owen's three."
);

entity(
    "field-museum",
    "Field Museum",
    "place",
    "Chicago natural-history museum that mounts Sue.",
    "The Field Museum of Natural History bought Sue at auction in 1997 and made the skeleton the centerpiece of its dinosaur hall."
);

entity(
    "lyme-regis",
    "Lyme Regis",
    "place",
    "Dorset town on the Jurassic Coast where Anning worked the ledges.",
    "Lyme Regis is the shoreline of Blue Lias cliffs that yielded Anning's marine reptiles, the commercial fossil town of early British paleontology."
);

/* ---------- Relationships ---------- */

rel("dinosauria", "dinosaurs", "part_of", "Dinosauria is the formal clade behind the public subject of dinosaurs.", 0.99, 0.98);
rel("saurischia", "dinosauria", "part_of", "Saurischia is one of the two great branches of Dinosauria.", 0.98, 0.96);
rel("ornithischia", "dinosauria", "part_of", "Ornithischia is the bird-hipped branch of Dinosauria.", 0.98, 0.96);
rel("theropoda", "saurischia", "part_of", "Theropods are the bipedal predators and birds inside Saurischia.", 0.98, 0.96);
rel("sauropoda", "saurischia", "part_of", "Sauropods are the long-necked giants inside Saurischia.", 0.98, 0.96);
rel("ceratopsia", "ornithischia", "part_of", "Ceratopsians are the horned frilled ornithischians.", 0.97, 0.94);
rel("stegosauria", "ornithischia", "part_of", "Stegosaurs are the plated ornithischians of the Jurassic.", 0.97, 0.94);
rel("aves", "theropoda", "part_of", "Living birds are nested inside Theropoda.", 0.98, 0.96);

rel("tyrannosaurus-rex", "theropoda", "member_of", "Tyrannosaurus rex is a large coelurosaur theropod.", 0.99, 0.97);
rel("velociraptor", "theropoda", "member_of", "Velociraptor is a dromaeosaurid theropod.", 0.98, 0.96);
rel("allosaurus", "theropoda", "member_of", "Allosaurus is the common large theropod of the Morrison.", 0.97, 0.94);
rel("triceratops", "ceratopsia", "member_of", "Triceratops is the latest Cretaceous giant ceratopsian.", 0.98, 0.96);
rel("stegosaurus", "stegosauria", "member_of", "Stegosaurus is the type genus of Stegosauria.", 0.98, 0.96);
rel("diplodocus", "sauropoda", "member_of", "Diplodocus is a slender Morrison sauropod.", 0.97, 0.94);
rel("brachiosaurus", "sauropoda", "member_of", "Brachiosaurus is a high-shouldered Morrison sauropod.", 0.97, 0.94);
rel("iguanodon", "ornithischia", "member_of", "Iguanodon is an early-named ornithopod inside Ornithischia.", 0.96, 0.93);
rel("archaeopteryx", "aves", "member_of", "Archaeopteryx is the first well-known stem bird.", 0.95, 0.92);
rel("archaeopteryx", "theropoda", "member_of", "Archaeopteryx also sits on the theropod line that becomes birds.", 0.96, 0.93);
rel("sue", "tyrannosaurus-rex", "part_of", "Sue is a particular Tyrannosaurus rex skeleton, FMNH PR 2081.", 0.99, 0.97);

rel("richard-owen", "dinosauria", "created", "Richard Owen coined the name Dinosauria in 1842.", 0.99, 0.97);
rel("gideon-mantell", "iguanodon", "created", "Gideon Mantell named Iguanodon from Wealden teeth.", 0.97, 0.94);
rel("barnum-brown", "tyrannosaurus-rex", "involved", "Barnum Brown collected the first recognized T. rex remains.", 0.96, 0.93);
rel("iguanodon", "dinosauria", "supports", "Iguanodon was one of the three genera Owen used to define Dinosauria.", 0.95, 0.92);
rel("mary-anning", "lyme-regis", "located_in", "Mary Anning worked the fossil ledges at Lyme Regis.", 0.97, 0.94);
rel("mary-anning", "dinosaurs", "influenced", "Anning's Jurassic Coast trade trained the paleontology that later framed dinosaurs.", 0.9, 0.86);

rel("allosaurus", "morrison-formation", "located_in", "Allosaurus is the abundant large theropod of the Morrison Formation.", 0.96, 0.93);
rel("stegosaurus", "morrison-formation", "located_in", "Stegosaurus is a signature plated dinosaur of the Morrison.", 0.96, 0.93);
rel("diplodocus", "morrison-formation", "located_in", "Diplodocus is a classic Morrison sauropod.", 0.96, 0.93);
rel("brachiosaurus", "morrison-formation", "located_in", "Brachiosaurus was described from Morrison rocks of Colorado.", 0.95, 0.91);
rel("tyrannosaurus-rex", "hell-creek-formation", "located_in", "T. rex is the apex predator of the Hell Creek Formation.", 0.97, 0.94);
rel("triceratops", "hell-creek-formation", "located_in", "Triceratops is the common large herbivore of Hell Creek.", 0.97, 0.94);
rel("sue", "hell-creek-formation", "located_in", "Sue was collected from Hell Creek beds in South Dakota.", 0.96, 0.93);
rel("sue", "field-museum", "located_in", "Sue is mounted at the Field Museum in Chicago.", 0.98, 0.95);
rel("archaeopteryx", "solnhofen", "located_in", "Archaeopteryx fossils come from the Solnhofen limestone.", 0.97, 0.94);

rel("k-pg-extinction", "dinosauria", "opposed_by", "The K–Pg extinction ended non-avian members of Dinosauria.", 0.97, 0.94);
rel("chicxulub-crater", "k-pg-extinction", "caused", "The Chicxulub impact is the leading cause of the K–Pg extinction.", 0.96, 0.93);
rel("k-pg-extinction", "hell-creek-formation", "occurred_at", "Hell Creek records the K–Pg boundary that ends its dinosaurs.", 0.95, 0.91);
rel("aves", "k-pg-extinction", "opposed_by", "Avian dinosaurs survived the K–Pg event that killed the rest.", 0.94, 0.9);
rel("tyrannosaurus-rex", "triceratops", "opposed_by", "T. rex and Triceratops are documented predator and prey in Hell Creek.", 0.93, 0.89);
rel("velociraptor", "aves", "connected_to", "Velociraptor's feathers and wrists sit close to the bird line among maniraptorans.", 0.92, 0.88);

module.exports = { entities, relationships };
