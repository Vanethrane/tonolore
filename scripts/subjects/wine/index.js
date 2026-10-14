/**
 * Wine — Food & drink subject package.
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
        id: "wine",
        name: "Wine",
        rootSlug: "wine",
        theme: "wine",
        categories: ["culinary"],
        copyright: {
            title: "Wine is not owned by Ton-o-Lore.",
            body:
                "Wine, related names, marks, and materials are the property of Public viticultural tradition / respective estates and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        wine: ["Wine", "vin"],
        "vitis-vinifera": ["vinifera", "wine grape"],
        "old-world-wine": ["Old World", "European wine"],
        "new-world-wine": ["New World"],
        terroir: ["terroir", "goût de terroir"],
        aoc: ["AOC", "AOP", "appellation d'origine contrôlée"],
        inao: ["INAO", "Institut national de l'origine et de la qualité"],
        bordeaux: ["Bordeaux", "Gironde"],
        burgundy: ["Burgundy", "Bourgogne", "Côte d'Or"],
        champagne: ["Champagne"],
        "napa-valley": ["Napa", "Napa Valley AVA"],
        rioja: ["Rioja", "DOCa Rioja"],
        piedmont: ["Piedmont", "Piemonte", "Langhe"],
        "barossa-valley": ["Barossa", "Barossa Shiraz"],
        mendoza: ["Mendoza", "Mendoza wine"],
        "cabernet-sauvignon": ["Cabernet", "Cab Sauv"],
        "pinot-noir": ["Pinot", "Pinot Noir"],
        chardonnay: ["Chardonnay"],
        riesling: ["Riesling"],
        malbec: ["Malbec", "Côt"],
        "champagne-method": ["méthode champenoise", "traditional method", "méthode traditionnelle"],
        phylloxera: ["grape phylloxera", "Daktulosphaira vitifoliae"],
        "judgment-of-paris": ["Paris tasting", "Judgment of Paris 1976"],
        "classification-of-1855": ["1855 Classification", "Grands Crus Classés"],
        sommelier: ["sommeliers", "wine steward"],
        "tasting-notes": ["tasting note", "wine notes", "100-point scale"],
        "robert-parker": ["Parker", "Wine Advocate"],
        "master-sommelier": ["MS", "Master Sommelier diploma"],
        "oak-aging": ["barrel aging", "oak", "barrique"],
        vintage: ["vintage year", "millésime"]
    },
    parents: {
        "vitis-vinifera": "wine",
        "old-world-wine": "wine",
        "new-world-wine": "wine",
        terroir: "wine",
        aoc: "old-world-wine",
        inao: "aoc",
        bordeaux: "old-world-wine",
        burgundy: "old-world-wine",
        champagne: "old-world-wine",
        rioja: "old-world-wine",
        piedmont: "old-world-wine",
        "napa-valley": "new-world-wine",
        "barossa-valley": "new-world-wine",
        mendoza: "new-world-wine",
        "cabernet-sauvignon": "vitis-vinifera",
        "pinot-noir": "vitis-vinifera",
        chardonnay: "vitis-vinifera",
        riesling: "vitis-vinifera",
        malbec: "vitis-vinifera",
        "champagne-method": "champagne",
        "classification-of-1855": "bordeaux",
        "judgment-of-paris": "napa-valley",
        "master-sommelier": "sommelier",
        "tasting-notes": "sommelier",
        "robert-parker": "tasting-notes"
    }
});
