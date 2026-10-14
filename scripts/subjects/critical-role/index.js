/**
 * Critical Role — Podcasts & audio subject package.
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
        id: "critical-role",
        name: "Critical Role",
        rootSlug: "critical-role",
        theme: "critical-role",
        categories: ["podcasts"],
        copyright: {
            title: "Critical Role is not owned by Ton-o-Lore.",
            body:
                "Critical Role, related names, marks, and materials are the property of Critical Role / respective rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "critical-role": ["CR", "CritRole"],
        "matthew-mercer": ["Mercer", "Matt Mercer", "Matt"],
        "critical-role-productions": ["CR Productions", "Critical Role studio"],
        "laura-bailey": ["Bailey"],
        "liam-obrien": ["Liam", "O'Brien"],
        "taliesin-jaffe": ["Taliesin", "Tal"],
        "marisha-ray": ["Marisha"],
        "travis-willingham": ["Travis"],
        "ashley-johnson": ["Ashley"],
        "sam-riegel": ["Sam", "Riegel"],
        "campaign-one": ["C1", "Campaign 1", "the first campaign"],
        "campaign-two": ["C2", "Campaign 2"],
        "campaign-three": ["C3", "Campaign 3"],
        "the-legend-of-vox-machina": ["LOVM", "TLOVM", "Legend of Vox Machina"],
        exandria: ["the world of Exandria"],
        "tal-dorei": ["TalDorei", "Tal Dorei"],
        wildemount: ["Wildemount, Exandria"],
        whitestone: ["Whitestone, Tal'Dorei"],
        "vox-machina": ["VM", "the VM"],
        "vex-ahlia": ["Vex", "Lady Vex'ahlia", "Vex'ahlia de Rolo"],
        "percy-de-rolo": ["Percy", "Percival", "Percival de Rolo"],
        vaxildan: ["Vax", "Vax'ildan"],
        "pike-trickfoot": ["Pike"],
        keyleth: ["Keyleth of the Air Ashari", "Voice of the Tempest"],
        "grog-strongjaw": ["Grog"],
        "scanlan-shorthalt": ["Scanlan"],
        "mighty-nein": ["MN", "the Nein", "M9"],
        "jester-lavorre": ["Jester"],
        "caleb-widogast": ["Caleb", "Bren"],
        "fjord-stone": ["Fjord"],
        "bells-hells": ["BH", "the Hells"],
        "imogen-temult": ["Imogen"],
        laudna: ["Laudna of Whitestone"]
    },
    parents: {
        "campaign-one": "critical-role",
        "campaign-two": "critical-role",
        "campaign-three": "critical-role",
        "the-legend-of-vox-machina": "critical-role",
        "tal-dorei": "exandria",
        wildemount: "exandria",
        whitestone: "tal-dorei",
        "vex-ahlia": "vox-machina",
        "percy-de-rolo": "vox-machina",
        vaxildan: "vox-machina",
        "pike-trickfoot": "vox-machina",
        keyleth: "vox-machina",
        "grog-strongjaw": "vox-machina",
        "scanlan-shorthalt": "vox-machina",
        "jester-lavorre": "mighty-nein",
        "caleb-widogast": "mighty-nein",
        "fjord-stone": "mighty-nein",
        "imogen-temult": "bells-hells",
        laudna: "bells-hells"
    }
});
