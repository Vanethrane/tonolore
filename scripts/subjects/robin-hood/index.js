/**
 * Robin Hood — Folklore & legend subject package.
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
        id: "robin-hood",
        name: "Robin Hood",
        rootSlug: "robin-hood",
        theme: "robin-hood",
        categories: ["folklore"],
        copyright: {
            title: "Robin Hood is not owned by Ton-o-Lore.",
            body:
                "Robin Hood, related names, marks, and materials are the property of Public-domain traditions / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "robin-hood": ["Robin Hood", "Robin Hood legend", "the greenwood cycle"],
        "robin-of-sherwood": ["Robin Hood", "Robyn Hode", "Robert of Locksley", "Earl of Huntingdon"],
        "sherwood-forest": ["Sherwood", "the greenwood"],
        barnsdale: ["Barnsdale Forest", "Barnisdale"],
        nottingham: ["Nottingham town"],
        "nottingham-castle": ["Castle of Nottingham"],
        "kirklees-priory": ["Kirklees", "Kirkley"],
        "maid-marian": ["Marian", "Maid Marion"],
        "little-john": ["John Little"],
        "friar-tuck": ["Tuck", "the friar"],
        "will-scarlet": ["Will Scathelock", "Scarlock", "Will Scarlett"],
        "much-the-millers-son": ["Much", "Midge the Miller's son"],
        "alan-a-dale": ["Allan-a-Dale", "Allen a Dale"],
        "merry-men": ["Merry Men", "the band"],
        "sheriff-of-nottingham": ["the Sheriff", "High Sheriff of Nottinghamshire"],
        "guy-of-gisborne": ["Guy of Gisborne", "Sir Guy"],
        "prince-john": ["John Lackland", "Prince John"],
        "king-richard": ["Richard I", "Richard the Lionheart", "Lionheart"],
        "prioress-of-kirklees": ["the Prioress"],
        "bishop-of-hereford": ["Bishop of Hereford"],
        longbow: ["English longbow", "yew bow"],
        quarterstaff: ["staff"],
        "lincoln-green": ["Lincoln green cloth"],
        "a-gest-of-robyn-hode": ["A Gest of Robin Hood", "the Gest"],
        "robin-hood-and-the-monk": ["Robin Hood and the Monk"],
        locksley: ["Loxley"],
        "kings-deer": ["the king's venison", "forest deer"],
        "archery-contest": ["sheriff's archery contest"],
        "death-of-robin-hood": ["Robin's death", "last arrow"]
    },
    parents: {
        "robin-of-sherwood": "merry-men",
        "little-john": "merry-men",
        "friar-tuck": "merry-men",
        "will-scarlet": "merry-men",
        "much-the-millers-son": "merry-men",
        "alan-a-dale": "merry-men",
        "maid-marian": "merry-men",
        "merry-men": "sherwood-forest",
        "nottingham-castle": "nottingham",
        "sheriff-of-nottingham": "nottingham",
        "prioress-of-kirklees": "kirklees-priory",
        "death-of-robin-hood": "kirklees-priory",
        "archery-contest": "nottingham",
        longbow: "robin-of-sherwood"
    }
});
