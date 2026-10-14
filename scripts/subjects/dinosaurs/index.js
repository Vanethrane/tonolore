/**
 * Dinosaurs — Science & nature subject package.
 */

const path = require("path");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "dinosaurs",
        name: "Dinosaurs",
        rootSlug: "dinosaurs",
        theme: "dinosaurs",
        categories: ["science-nature"],
        copyright: {
            title: "Dinosaurs is not owned by Ton-o-Lore.",
            body:
                "Dinosaurs, related names, marks, and materials are the property of Public-domain paleontology / respective museums and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        dinosaurs: ["Dinosaurs", "dinosaur"],
        dinosauria: ["Dinosauria"],
        saurischia: ["saurischians", "lizard-hipped dinosaurs"],
        ornithischia: ["ornithischians", "bird-hipped dinosaurs"],
        theropoda: ["theropods", "Theropoda"],
        sauropoda: ["sauropods", "Sauropoda"],
        ceratopsia: ["ceratopsians", "horned dinosaurs"],
        stegosauria: ["stegosaurs"],
        aves: ["birds", "avian dinosaurs", "Aves"],
        "tyrannosaurus-rex": ["T. rex", "T-rex", "Tyrannosaurus"],
        triceratops: ["Triceratops"],
        velociraptor: ["Velociraptor", "V. mongoliensis"],
        stegosaurus: ["Stegosaurus"],
        allosaurus: ["Allosaurus"],
        diplodocus: ["Diplodocus"],
        brachiosaurus: ["Brachiosaurus"],
        archaeopteryx: ["Archaeopteryx", "Urvogel"],
        iguanodon: ["Iguanodon"],
        sue: ["Sue the T. rex", "FMNH PR 2081"],
        "morrison-formation": ["Morrison", "Morrison Fm"],
        "hell-creek-formation": ["Hell Creek", "Hell Creek Fm"],
        solnhofen: ["Solnhofen limestone", "Solnhofen Plattenkalk"],
        "k-pg-extinction": ["K-T extinction", "end-Cretaceous extinction", "Cretaceous-Paleogene extinction"],
        "chicxulub-crater": ["Chicxulub", "Chicxulub impact"],
        "mary-anning": ["Anning"],
        "richard-owen": ["Owen", "Sir Richard Owen"],
        "barnum-brown": ["Brown", "Mr. Bones"],
        "gideon-mantell": ["Mantell"],
        "field-museum": ["Field Museum of Natural History", "FMNH"],
        "lyme-regis": ["Jurassic Coast", "Lyme"]
    },
    parents: {
        dinosauria: "dinosaurs",
        saurischia: "dinosauria",
        ornithischia: "dinosauria",
        theropoda: "saurischia",
        sauropoda: "saurischia",
        ceratopsia: "ornithischia",
        stegosauria: "ornithischia",
        aves: "theropoda",
        "tyrannosaurus-rex": "theropoda",
        velociraptor: "theropoda",
        allosaurus: "theropoda",
        archaeopteryx: "aves",
        diplodocus: "sauropoda",
        brachiosaurus: "sauropoda",
        triceratops: "ceratopsia",
        stegosaurus: "stegosauria",
        iguanodon: "ornithischia",
        sue: "tyrannosaurus-rex",
        "mary-anning": "lyme-regis",
        "chicxulub-crater": "k-pg-extinction"
    }
});
