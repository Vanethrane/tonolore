/**
 * The Simpsons subject package — Matt Groening's animated sitcom.
 */

const path = require("path");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "the-simpsons",
        name: "The Simpsons",
        rootSlug: "the-simpsons",
        theme: "the-simpsons",
        copyright: {
            title: "The Simpsons is not owned by Ton-o-Lore.",
            body:
                "The Simpsons, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Matt Groening, 20th Century Studios, Fox Broadcasting Company, and The Walt Disney Company and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "the-simpsons": ["Simpsons", "The Simpsons TV show"],
        "matt-groening": ["Groening", "Matthew Abram Groening"],
        "homer-simpson": ["Homer", "Homer J. Simpson"],
        "marge-simpson": ["Marge", "Marjorie Simpson"],
        "bart-simpson": ["Bart", "Bartholomew Simpson", "El Barto"],
        "lisa-simpson": ["Lisa"],
        "maggie-simpson": ["Maggie"],
        "abraham-simpson": ["Grampa", "Abe Simpson", "Grampa Simpson"],
        "mr-burns": ["Burns", "C. Montgomery Burns", "Montgomery Burns", "Charles Montgomery Burns"],
        "waylon-smithers": ["Smithers"],
        "moe-szyslak": ["Moe", "Moe Szyslak"],
        "ned-flanders": ["Flanders", "Ned"],
        "krusty-the-clown": ["Krusty", "Herschel Krustofski"],
        "chief-wiggum": ["Wiggum", "Clancy Wiggum"],
        "apu-nahasapeemapetilon": ["Apu"],
        "comic-book-guy": ["CBG", "Jeff Albertson"],
        "springfield-nuclear-power-plant": ["Nuclear Plant", "SNPP", "Springfield Nuclear Plant"],
        "springfield-elementary": ["Springfield Elementary School"],
        "moes-tavern": ["Moe's", "Moes Tavern"],
        "itchy-and-scratchy": ["Itchy and Scratchy", "The Itchy & Scratchy Show"],
        "duff-beer": ["Duff"],
        "principal-skinner": ["Skinner", "Seymour Skinner"],
        "milhouse-van-houten": ["Milhouse"],
        "nelson-muntz": ["Nelson"],
        "ralph-wiggum": ["Ralph"]
    },
    parents: {
        "homer-simpson": "simpson-family",
        "marge-simpson": "simpson-family",
        "bart-simpson": "simpson-family",
        "lisa-simpson": "simpson-family",
        "maggie-simpson": "simpson-family",
        "abraham-simpson": "simpson-family",
        "742-evergreen-terrace": "springfield",
        "springfield-elementary": "springfield",
        "springfield-nuclear-power-plant": "springfield",
        "moes-tavern": "springfield",
        "kwik-e-mart": "springfield",
        "waylon-smithers": "springfield-nuclear-power-plant",
        "milhouse-van-houten": "springfield-elementary",
        "nelson-muntz": "springfield-elementary",
        "principal-skinner": "springfield-elementary",
        "moe-szyslak": "moes-tavern",
        "apu-nahasapeemapetilon": "kwik-e-mart",
        "ralph-wiggum": "chief-wiggum"
    }
});
