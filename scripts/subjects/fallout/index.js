/**
 * Fallout subject package — post-apocalyptic RPG franchise.
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
        id: "fallout",
        name: "Fallout",
        rootSlug: "fallout",
        theme: "fallout",
        copyright: {
            title: "Fallout is not owned by Ton-o-Lore.",
            body:
                "Fallout, its characters, settings, logos, and related intellectual property are the property of their respective rights holders, including Bethesda Softworks, Bethesda Game Studios, ZeniMax Media, Interplay Entertainment, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        fallout: ["Fallout franchise", "FO"],
        "interplay-entertainment": ["Interplay"],
        "bethesda-softworks": ["Bethesda", "Bethesda Game Studios"],
        "tim-cain": ["Timothy Cain"],
        "fallout-1": ["Fallout 1", "Fallout 1997", "Original Fallout"],
        "fallout-2": ["FO2", "Fallout II"],
        "fallout-3": ["FO3"],
        "fallout-new-vegas": ["New Vegas", "FNV", "FONV"],
        "fallout-4": ["FO4"],
        "vault-tec": ["VaultTec", "Vault-Tec Corporation"],
        "brotherhood-of-steel": ["BoS", "Brotherhood"],
        enclave: ["The Enclave"],
        ncr: ["New California Republic", "N.C.R."],
        "caesars-legion": ["Caesar's Legion", "The Legion", "Legion"],
        institute: ["Institute"],
        railroad: ["Railroad"],
        minutemen: ["Minutemen", "Commonwealth Minutemen"],
        "capital-wasteland": ["DC Wasteland", "Capital"],
        mojave: ["Mojave Wasteland", "The Mojave"],
        commonwealth: ["Commonwealth", "Boston Wasteland"],
        "vault-13": ["Vault13"],
        "new-vegas": ["The Strip", "Vegas"],
        "vault-dweller": ["The Vault Dweller"],
        "lone-wanderer": ["The Lone Wanderer"],
        courier: ["Courier Six", "Courier 6"],
        "sole-survivor": ["The Sole Survivor", "Nate", "Nora"],
        "the-master": ["Master", "Unity"],
        "mr-house": ["Robert House", "House"],
        "liberty-prime": ["Liberty Prime"],
        "pip-boy": ["PipBoy", "Pip-Boy 3000"],
        ghouls: ["Ghoul", "Feral Ghouls"],
        "super-mutants": ["Super Mutant", "Supermutants"],
        fev: ["FEV", "Forced Evolutionary Virus"],
        deathclaws: ["Deathclaw", "Death Claw"]
    },
    parents: {
        "vault-dweller": "vault-13",
        "lone-wanderer": "capital-wasteland",
        courier: "mojave",
        "sole-survivor": "commonwealth",
        "the-master": "super-mutants",
        "mr-house": "new-vegas",
        "liberty-prime": "brotherhood-of-steel",
        "pip-boy": "vault-tec",
        "vault-13": "vault-tec",
        "new-vegas": "mojave",
        railroad: "commonwealth",
        minutemen: "commonwealth",
        institute: "commonwealth",
        "caesars-legion": "mojave",
        ncr: "mojave",
        "fallout-1": "fallout",
        "fallout-3": "fallout",
        "fallout-4": "fallout",
        "fallout-new-vegas": "fallout"
    }
});
