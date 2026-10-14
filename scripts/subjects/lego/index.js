/**
 * LEGO — Toys & collectibles subject package.
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
        id: "lego",
        name: "LEGO",
        rootSlug: "lego",
        theme: "lego",
        categories: ["toys"],
        copyright: {
            title: "LEGO is not owned by Ton-o-Lore.",
            body:
                "LEGO, related names, marks, and materials are the property of The LEGO Group / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        lego: ["LEGO", "LEGO System", "Legos"],
        "the-lego-group": ["LEGO Group", "LEGO A/S"],
        "ole-kirk-christiansen": ["Ole Kirk", "OKC"],
        "godtfred-kirk-christiansen": ["Godtfred", "GKC", "Godtfred Kirk"],
        "kjeld-kirk-kristiansen": ["Kjeld Kirk", "KKK"],
        billund: ["Billund, Denmark"],
        "legoland-billund": ["Legoland", "LEGOLAND Billund"],
        "lego-brick": ["brick", "LEGO bricks", "stud-and-tube brick"],
        "automatic-binding-bricks": ["Automatic Binding Brick"],
        minifigure: ["minifig", "LEGO minifigure", "mini-figure"],
        "system-of-play": ["System", "LEGO System of Play"],
        duplo: ["LEGO DUPLO", "Duplo"],
        "lego-city": ["City", "LEGO Town", "Town"],
        "lego-castle": ["Castle", "LEGO Knights"],
        "lego-space": ["Classic Space", "Space"],
        "lego-star-wars": ["Star Wars LEGO", "LEGO SW"],
        "lego-technic": ["Technic"],
        bionicle: ["Bionicle", "BIO"],
        ninjago: ["LEGO NINJAGO", "Ninjago"],
        "the-lego-movie": ["LEGO Movie", "Emmet movie"],
        "lego-pirates": ["Pirates", "LEGO Pirates theme"],
        "emmet-brickowski": ["Emmet", "The Special"],
        wyldstyle: ["Lucy", "Wyldstyle Lucy"],
        "lord-business": ["President Business", "Lord Business"],
        tahu: ["Toa Tahu", "Toa of Fire"],
        "mata-nui": ["Mata Nui island", "Great Spirit Mata Nui"],
        "lloyd-garmadon": ["Lloyd", "Green Ninja"],
        brickfilm: ["brickfilms", "LEGO stop-motion"],
        "lego-ideas": ["CUUSOO", "LEGO CUUSOO"]
    },
    parents: {
        "ole-kirk-christiansen": "the-lego-group",
        "godtfred-kirk-christiansen": "the-lego-group",
        "kjeld-kirk-kristiansen": "the-lego-group",
        "legoland-billund": "billund",
        "lego-brick": "system-of-play",
        minifigure: "system-of-play",
        "automatic-binding-bricks": "lego",
        duplo: "lego",
        "lego-city": "lego",
        "lego-castle": "lego",
        "lego-space": "lego",
        "lego-star-wars": "lego",
        "lego-technic": "lego",
        bionicle: "lego",
        ninjago: "lego",
        "the-lego-movie": "lego",
        "lego-pirates": "lego",
        "lego-ideas": "lego",
        "emmet-brickowski": "the-lego-movie",
        wyldstyle: "the-lego-movie",
        "lord-business": "the-lego-movie",
        tahu: "bionicle",
        "mata-nui": "bionicle",
        "lloyd-garmadon": "ninjago",
        brickfilm: "lego"
    }
});
