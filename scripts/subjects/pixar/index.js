/**
 * Pixar — Western animation subject package.
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
        id: "pixar",
        name: "Pixar",
        rootSlug: "pixar",
        theme: "pixar",
        categories: ["western-animation"],
        copyright: {
            title: "Pixar is not owned by Ton-o-Lore.",
            body:
                "Pixar, related names, marks, and materials are the property of Pixar / Disney / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        pixar: ["Pixar Animation Studios", "Pixar Studios"],
        "john-lasseter": ["Lasseter"],
        "ed-catmull": ["Catmull", "Edwin Catmull"],
        "alvy-ray-smith": ["Alvy Smith", "Alvy"],
        "steve-jobs": ["Jobs"],
        "pete-docter": ["Docter"],
        "andrew-stanton": ["Stanton"],
        "walt-disney-company": ["Disney", "Disney Company", "The Walt Disney Company"],
        "pixar-braintrust": ["the Braintrust", "Braintrust"],
        "pixar-campus": ["Emeryville campus", "Pixar building"],
        renderman: ["PhotoRealistic RenderMan", "PRMan"],
        "disney-acquisition": ["Disney purchase", "2006 acquisition"],
        "luxo-jr": ["Luxo", "the Pixar lamp"],
        "toy-story": ["Toy Story (film)"],
        "finding-nemo": ["Nemo", "Finding Nemo (film)"],
        "monsters-inc": ["Monsters Inc", "Monsters, Inc."],
        "the-incredibles": ["Incredibles"],
        "inside-out": ["Inside Out (film)"],
        soul: ["Soul (film)"],
        "wall-e": ["WALL·E", "WALLE"],
        "andys-toys": ["Andy's toys", "the toys"],
        woody: ["Sheriff Woody"],
        "buzz-lightyear": ["Buzz"],
        "clownfish-family": ["Marlin's family"],
        marlin: ["Marlin the clownfish"],
        nemo: ["Nemo the clownfish"],
        dory: ["Dory the tang"],
        "monsters-inc-staff": ["scare floor", "Monsters Inc staff"],
        "james-sullivan": ["Sulley", "Sully", "James Sullivan"],
        "parr-family": ["the Incredibles", "the Parrs"],
        "bob-parr": ["Mr. Incredible", "Bob"],
        "riley-emotions": ["the emotions", "Headquarters"],
        joy: ["Joy (Inside Out)"],
        "joe-gardner": ["Joe", "Joe Gardner"]
    },
    parents: {
        woody: "andys-toys",
        "buzz-lightyear": "andys-toys",
        marlin: "clownfish-family",
        nemo: "clownfish-family",
        dory: "clownfish-family",
        "james-sullivan": "monsters-inc-staff",
        "bob-parr": "parr-family",
        joy: "riley-emotions",
        "john-lasseter": "pixar-braintrust",
        "pete-docter": "pixar-braintrust",
        "andrew-stanton": "pixar-braintrust",
        "ed-catmull": "pixar",
        "pixar-campus": "pixar",
        renderman: "pixar",
        "luxo-jr": "pixar",
        "toy-story": "pixar",
        "finding-nemo": "pixar",
        "monsters-inc": "pixar",
        "the-incredibles": "pixar",
        "inside-out": "pixar",
        soul: "pixar",
        "wall-e": "pixar"
    }
});
