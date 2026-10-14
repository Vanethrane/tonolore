/**
 * Blade Runner — Science fiction subject package.
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
        id: "blade-runner",
        name: "Blade Runner",
        rootSlug: "blade-runner",
        theme: "blade-runner",
        categories: ["sci-fi"],
        copyright: {
            title: "Blade Runner is not owned by Ton-o-Lore.",
            body:
                "Blade Runner, related names, marks, and materials are the property of Warner Bros. / Alcon / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "blade-runner": ["BladeRunner", "Blade Runner franchise"],
        "ridley-scott": ["Scott"],
        "philip-k-dick": ["PKD", "Philip K Dick", "Dick"],
        "hampton-fancher": ["Fancher"],
        "denis-villeneuve": ["Villeneuve"],
        "harrison-ford": ["Ford"],
        "do-androids-dream": ["Do Androids Dream of Electric Sheep", "Androids Dream", "DADES"],
        "blade-runner-1982": ["Blade Runner 1982", "Blade Runner (film)"],
        "blade-runner-2049": ["2049", "BR2049"],
        "tyrell-corporation": ["Tyrell", "the Tyrell Corp"],
        "wallace-corporation": ["Wallace", "Wallace Corp"],
        "blade-runners": ["blade runner", "the blade runners"],
        replicants: ["replicant", "androids", "skin-jobs"],
        "los-angeles-2019": ["LA 2019", "Los Angeles 2019"],
        "los-angeles-2049": ["LA 2049", "Los Angeles 2049"],
        "off-world-colonies": ["off-world", "the colonies"],
        "rick-deckard": ["Deckard"],
        rachael: ["Rachael Tyrell"],
        "roy-batty": ["Roy", "Batty"],
        pris: ["Pris Stratton"],
        "eldon-tyrell": ["Tyrell", "Dr. Tyrell"],
        "j-f-sebastian": ["Sebastian", "J.F. Sebastian"],
        gaff: ["Gaff (Blade Runner)"],
        "officer-k": ["K", "KD6-3.7", "Joe"],
        joi: ["Joi hologram"],
        "niander-wallace": ["Wallace"],
        "ana-stelline": ["Stelline", "Dr. Ana Stelline"],
        "nexus-6": ["Nexus 6", "Nexus-6 replicants"],
        "voight-kampff": ["Voigt-Kampff", "VK test", "empathy test"],
        "origami-unicorn": ["unicorn", "Gaff's unicorn"]
    },
    parents: {
        "rick-deckard": "blade-runners",
        "officer-k": "blade-runners",
        gaff: "blade-runners",
        rachael: "tyrell-corporation",
        "eldon-tyrell": "tyrell-corporation",
        "j-f-sebastian": "tyrell-corporation",
        "roy-batty": "replicants",
        pris: "replicants",
        "nexus-6": "replicants",
        "niander-wallace": "wallace-corporation",
        joi: "wallace-corporation",
        "ana-stelline": "replicants",
        "do-androids-dream": "blade-runner",
        "blade-runner-1982": "blade-runner",
        "blade-runner-2049": "blade-runner"
    }
});
