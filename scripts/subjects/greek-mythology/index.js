/**
 * Greek mythology — Mythology subject package.
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
        id: "greek-mythology",
        name: "Greek mythology",
        rootSlug: "greek-mythology",
        theme: "greek-mythology",
        categories: ["mythology"],
        copyright: {
            title: "Greek mythology is not owned by Ton-o-Lore.",
            body:
                "Greek mythology, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "greek-mythology": ["Greek mythology", "Hellenic mythology", "Olympian mythology"],
        "mount-olympus": ["Olympus", "Olympos"],
        underworld: ["Hades", "House of Hades", "realm of the dead"],
        tartarus: ["Tartaros"],
        zeus: ["Jupiter", "Dias"],
        hera: ["Here", "Juno"],
        athena: ["Athene", "Pallas Athena", "Minerva"],
        poseidon: ["Neptune", "Earth-shaker"],
        hades: ["Pluto", "Aidoneus"],
        persephone: ["Kore", "Proserpina"],
        apollo: ["Phoebus", "Phoebus Apollo"],
        artemis: ["Diana"],
        demeter: ["Ceres"],
        hephaestus: ["Hephaistos", "Vulcan"],
        hermes: ["Mercury"],
        aphrodite: ["Venus", "Cytherea"],
        ares: ["Mars"],
        heracles: ["Hercules", "Herakles"],
        odysseus: ["Ulysses", "Ulixes"],
        achilles: ["Akhilleus"],
        prometheus: ["Forethought"],
        medusa: ["Gorgo", "the Gorgon"],
        cerberus: ["Kerberos"],
        titans: ["Titanes", "the Titans"],
        "trojan-war": ["Siege of Troy", "Trojan cycle"],
        iliad: ["The Iliad"],
        odyssey: ["The Odyssey"],
        troy: ["Ilium", "Ilion", "Wilusa"],
        delphi: ["Pytho", "Oracle of Delphi"],
        aegis: ["aigis", "Gorgoneion"]
    },
    parents: {
        zeus: "mount-olympus",
        hera: "mount-olympus",
        athena: "mount-olympus",
        apollo: "mount-olympus",
        artemis: "mount-olympus",
        hephaestus: "mount-olympus",
        hermes: "mount-olympus",
        aphrodite: "mount-olympus",
        ares: "mount-olympus",
        hades: "underworld",
        persephone: "underworld",
        cerberus: "underworld",
        tartarus: "underworld",
        prometheus: "titans",
        iliad: "trojan-war",
        odyssey: "odysseus",
        delphi: "apollo"
    }
});
