/**
 * Oceanography — Science & nature subject package.
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
        id: "oceanography",
        name: "Oceanography",
        rootSlug: "oceanography",
        theme: "oceanography",
        categories: ["science-nature"],
        copyright: {
            title: "Oceanography is not owned by Ton-o-Lore.",
            body:
                "Oceanography, related names, marks, and materials are the property of Public-domain science / respective institutions and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        oceanography: ["Oceanography", "marine science"],
        "challenger-expedition": ["Challenger expedition", "HMS Challenger expedition"],
        "hms-challenger": ["Challenger", "HMS Challenger"],
        "charles-wyville-thomson": ["Wyville Thomson", "C. Wyville Thomson"],
        "john-murray": ["Sir John Murray"],
        "jacques-cousteau": ["Cousteau", "Jacques-Yves Cousteau"],
        calypso: ["RV Calypso"],
        "matthew-maury": ["Maury", "Pathfinder of the Seas"],
        "marie-tharp": ["Tharp"],
        "bruce-heezen": ["Heezen"],
        "robert-ballard": ["Ballard", "Bob Ballard"],
        "gulf-stream": ["Gulf Stream current"],
        "thermohaline-circulation": ["MOC", "overturning circulation", "global conveyor"],
        salinity: ["sea salt", "practical salinity"],
        "mariana-trench": ["Marianas Trench"],
        "challenger-deep": ["Challenger Deep"],
        "mid-atlantic-ridge": ["MAR", "Mid-Atlantic Ridge"],
        "seafloor-spreading": ["sea-floor spreading", "ocean-floor spreading"],
        "hydrothermal-vents": ["vents", "deep-sea vents"],
        "galapagos-rift": ["Galapagos Rift", "Galápagos spreading center"],
        "black-smokers": ["black smoker", "sulfide chimney"],
        "dsv-alvin": ["Alvin", "DSV Alvin"],
        "el-nino": ["El Nino", "ENSO warm phase"],
        "scripps-institution": ["Scripps", "SIO", "Scripps Institution of Oceanography"],
        "woods-hole": ["WHOI", "Woods Hole Oceanographic Institution"],
        "lamont-doherty": ["Lamont", "LDEO", "Lamont Geological Observatory"],
        "aqua-lung": ["Aqua-Lung", "Aqualung", "scuba"],
        "ctd-rosette": ["CTD", "CTD-rosette"]
    },
    parents: {
        "hms-challenger": "challenger-expedition",
        "charles-wyville-thomson": "challenger-expedition",
        "john-murray": "challenger-expedition",
        calypso: "jacques-cousteau",
        "aqua-lung": "jacques-cousteau",
        "challenger-deep": "mariana-trench",
        "marie-tharp": "lamont-doherty",
        "bruce-heezen": "lamont-doherty",
        "mid-atlantic-ridge": "seafloor-spreading",
        "galapagos-rift": "hydrothermal-vents",
        "black-smokers": "hydrothermal-vents",
        "dsv-alvin": "woods-hole",
        "gulf-stream": "thermohaline-circulation",
        salinity: "thermohaline-circulation"
    }
});
