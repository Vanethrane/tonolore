/*
 * Robin Hood subject data — Sherwood, the Merry Men, and the greenwood feud.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "documented", extras = {}) {
    entities.push({
        slug,
        name,
        type,
        evidence,
        short_description,
        description,
        aliases: extras.aliases || [],
        parentSlug: extras.parentSlug || undefined
    });
}

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

/* ---------- Root / places ---------- */

entity(
    "robin-hood",
    "Robin Hood",
    "topic",
    "Outlaw of the greenwood who takes from the rich and tests the king's peace.",
    "Robin Hood is the public-domain English outlaw cycle: Sherwood and Barnsdale, the longbow, the Sheriff of Nottingham, and a band that later storytellers named the Merry Men. Early ballads already pit yeoman archery against abbots and sheriffs."
);

entity(
    "sherwood-forest",
    "Sherwood Forest",
    "place",
    "Royal forest of Nottinghamshire that became Robin's greenwood.",
    "Sherwood is the later tradition's home wood: oak cover, the king's deer, and the roads where the band stops clerks and knights. Earlier ballads also place Robin in Barnsdale."
);

entity(
    "barnsdale",
    "Barnsdale",
    "place",
    "Yorkshire woodland of the earliest surviving Robin Hood ballads.",
    "Barnsdale, between Doncaster and the Went, is the landscape of A Gest of Robyn Hode and other early poems — a reminder that the legend was not born only in Nottinghamshire."
);

entity(
    "nottingham",
    "Nottingham",
    "place",
    "County town whose sheriff is Robin's standing enemy.",
    "Nottingham is the urban pole of the legend: market, castle, and the sheriff's jurisdiction that the outlaws raid and mock."
);

entity(
    "nottingham-castle",
    "Nottingham Castle",
    "place",
    "Seat of the sheriff and the crown's hold on the shire.",
    "Nottingham Castle is the fortress from which the sheriff rides and to which later tales send Robin in disguise for archery contests and rescues."
);

entity(
    "kirklees-priory",
    "Kirklees Priory",
    "place",
    "Yorkshire house where late tradition has Robin bled to death.",
    "Kirklees Priory is the death-place of the later ballads: the prioress, kin or betrayer, lets Robin's blood, and he shoots a last arrow to mark his grave."
);

/* ---------- People ---------- */

entity(
    "robin-of-sherwood",
    "Robin of Sherwood",
    "person",
    "Yeoman outlaw, master of the longbow, leader of the band.",
    "Robin — Robyn Hode in the ballads, later Earl of Huntingdon or Robert of Locksley — is the archer-captain who robs churchmen and agents of bad law and keeps a rough hospitality in the wood."
);

entity(
    "maid-marian",
    "Maid Marian",
    "person",
    "Lady of the greenwood, added from May-game and later romance.",
    "Maid Marian is scarce in the earliest ballads and enters from May festivals and play-texts. She becomes Robin's beloved and, in some tellings, a courtly exile in Sherwood."
);

entity(
    "little-john",
    "Little John",
    "person",
    "Tall lieutenant who first meets Robin on a narrow bridge.",
    "Little John is the band's second: quarterstaff champion, sometimes a sheriff's man in disguise, and the companion who stays to the Kirklees ending."
);

entity(
    "friar-tuck",
    "Friar Tuck",
    "person",
    "Fighting hedgerow priest of the later band.",
    "Friar Tuck, a late but fixed companion, is the sword-and-staff cleric who eats, drinks, and fights with the outlaws — a parody of the abbots Robin otherwise robs."
);

entity(
    "will-scarlet",
    "Will Scarlet",
    "person",
    "Kinsman in scarlet cloth, hot-tempered bowman of the band.",
    "Will Scarlet — also Scathelock or Scarlock in early texts — is a young or cousinly Merry Man, often the third named after Robin and John."
);

entity(
    "much-the-millers-son",
    "Much the Miller's Son",
    "person",
    "Early companion who helps take the king's deer.",
    "Much appears in the oldest ballad cluster as a loyal yeoman of the band, a miller's son used to forest law and the risk of the gallows."
);

entity(
    "alan-a-dale",
    "Alan-a-Dale",
    "person",
    "Minstrel whose wedding the outlaws restore.",
    "Alan-a-Dale is the later ballad minstrel: Robin interrupts a forced marriage and returns the bride, adding a love-plot and a harper to the greenwood."
);

entity(
    "merry-men",
    "Merry Men",
    "organization",
    "Robin's fellowship of outlaws in Sherwood and Barnsdale.",
    "The Merry Men are the named and unnamed yeomen who eat the king's venison, keep watch on the road, and answer Robin's horn — a forest fellowship against sheriff and abbot."
);

entity(
    "sheriff-of-nottingham",
    "Sheriff of Nottingham",
    "person",
    "Local face of royal law and Robin's chief opponent.",
    "The Sheriff of Nottingham is less a biography than an office: he hunts the band, stages the archery contest, and embodies the corrupt shire government the ballads despise."
);

entity(
    "guy-of-gisborne",
    "Guy of Gisborne",
    "person",
    "Hired killer in horsehide who comes to take Robin.",
    "Guy of Gisborne is the bounty hunter of a savage early ballad. He and Robin fight in the wood; Robin wins and uses the horsehide disguise against the sheriff."
);

entity(
    "prince-john",
    "Prince John",
    "person",
    "Absentee-king's brother who becomes the legend's tyrant.",
    "Prince John enters mainly in later retellings as the usurping prince while Richard is on crusade. He raises taxes and shields the sheriff; the early ballads barely need him."
);

entity(
    "king-richard",
    "King Richard",
    "person",
    "Lionheart who pardons Robin in the later royal ending.",
    "Richard I is the good king of the Gest and many novels: he comes in disguise, tests the band, and restores Robin to the peace — a crown the sheriff cannot claim."
);

entity(
    "prioress-of-kirklees",
    "Prioress of Kirklees",
    "person",
    "Kinswoman who bleeds Robin to death in the late ballads.",
    "The Prioress of Kirklees is the domestic treachery at the cycle's end: under color of medicine she lets the outlaw's life. Little John would burn the house; Robin forbids it."
);

entity(
    "bishop-of-hereford",
    "Bishop of Hereford",
    "person",
    "Prelate the outlaws waylay and feast at his own cost.",
    "The Bishop of Hereford is a ballad victim of the road: captured, made to dance or dine, and stripped of coin — the church as fat mark rather than spiritual guide."
);

/* ---------- Objects, works, ideas ---------- */

entity(
    "longbow",
    "Longbow",
    "object",
    "Yeoman war-bow that is Robin's defining craft.",
    "The English longbow is the legend's tool and test: splitting the wand, the sheriff's contest, and the last arrow from Kirklees. It marks Robin as yeoman, not knight."
);

entity(
    "quarterstaff",
    "Quarterstaff",
    "object",
    "Staff Little John uses on the bridge and in the wood.",
    "The quarterstaff is the companion weapon of the ballads: John dunks Robin at their meeting, and later fights keep the band a foot-soldier fellowship, not only an archery club."
);

entity(
    "lincoln-green",
    "Lincoln green",
    "object",
    "Wool cloth that dresses the band as the forest itself.",
    "Lincoln green is the dyed cloth later tradition gives the Merry Men — camouflage and livery, the visual opposite of the sheriff's men and Guy's horsehide."
);

entity(
    "a-gest-of-robyn-hode",
    "A Gest of Robyn Hode",
    "work",
    "Longest early ballad compilation of the outlaw's career.",
    "A Gest of Robyn Hode (printed c. 1500 from older verse) is the central early text: the poor knight, the sheriff, the king in disguise, and Robin's service and death."
);

entity(
    "robin-hood-and-the-monk",
    "Robin Hood and the Monk",
    "work",
    "Early ballad of capture in Nottingham and rescue by the band.",
    "Robin Hood and the Monk is among the oldest surviving poems: Robin goes to mass, is taken, and Little John and Much break him from the sheriff's hold."
);

entity(
    "locksley",
    "Locksley",
    "place",
    "Village later tales name as Robin's home or earldom seat.",
    "Locksley — Loxley in Yorkshire or a Nottinghamshire fiction — is the later biographical hometown that turns the ballad yeoman into Robert of Locksley."
);

entity(
    "kings-deer",
    "King's deer",
    "concept",
    "Forest venison whose taking makes the band outlaws.",
    "The king's deer are the legal heart of the greenwood crime. Ballads treat poaching as justice against a forest law that starves the poor to feed the crown."
);

entity(
    "archery-contest",
    "Archery contest",
    "event",
    "Sheriff's trap in Nottingham that Robin wins in disguise.",
    "The archery contest is the set-piece of many tellings: a golden or silver arrow, the sheriff's ambush, and Robin's winning shot before the band must fight free."
);

entity(
    "death-of-robin-hood",
    "Death of Robin Hood",
    "event",
    "Last bleeding at Kirklees and the grave-arrow.",
    "The death of Robin Hood closes the Gest-derived cycle: sickness, the prioress's knife or basin, the horn for Little John, and the arrow that marks the grave."
);

/* ---------- Relationships ---------- */

rel("robin-of-sherwood", "merry-men", "leads", "Robin leads the Merry Men.", 0.99, 0.98);
rel("little-john", "merry-men", "member_of", "Little John is lieutenant of the Merry Men.", 0.98, 0.96);
rel("friar-tuck", "merry-men", "member_of", "Friar Tuck is the fighting priest of the band.", 0.96, 0.93);
rel("will-scarlet", "merry-men", "member_of", "Will Scarlet is a kinsman among the Merry Men.", 0.96, 0.93);
rel("much-the-millers-son", "merry-men", "member_of", "Much is an early named companion of the band.", 0.95, 0.92);
rel("alan-a-dale", "merry-men", "member_of", "Alan-a-Dale joins the band after the rescued wedding.", 0.94, 0.9);
rel("maid-marian", "merry-men", "member_of", "Marian becomes lady of the greenwood fellowship.", 0.93, 0.89);
rel("merry-men", "sherwood-forest", "located_in", "Later tradition stations the Merry Men in Sherwood Forest.", 0.97, 0.95);

rel("robin-of-sherwood", "longbow", "uses", "Robin is defined by mastery of the longbow.", 0.98, 0.96);
rel("little-john", "quarterstaff", "uses", "Little John meets Robin with the quarterstaff.", 0.96, 0.93);
rel("merry-men", "lincoln-green", "uses", "The band wears Lincoln green as forest livery.", 0.94, 0.9);
rel("merry-men", "kings-deer", "uses", "The outlaws live on the king's deer.", 0.95, 0.92);

rel("sheriff-of-nottingham", "nottingham", "located_in", "The sheriff's power is the town and shire of Nottingham.", 0.97, 0.94);
rel("nottingham-castle", "nottingham", "located_in", "Nottingham Castle is the crown fortress in the town.", 0.97, 0.95);
rel("sheriff-of-nottingham", "robin-of-sherwood", "opposed_by", "The Sheriff of Nottingham hunts Robin through the cycle.", 0.99, 0.97);
rel("guy-of-gisborne", "robin-of-sherwood", "opposed_by", "Guy of Gisborne is hired to take Robin and dies in the attempt.", 0.96, 0.93);
rel("guy-of-gisborne", "sheriff-of-nottingham", "supports", "Gisborne works as the sheriff's contracted killer.", 0.94, 0.9);
rel("bishop-of-hereford", "robin-of-sherwood", "opposed_by", "Robin waylays the Bishop of Hereford on the road.", 0.93, 0.89);

rel("prince-john", "sheriff-of-nottingham", "supports", "Later tales make Prince John the sheriff's royal cover.", 0.92, 0.88);
rel("king-richard", "prince-john", "opposed_by", "Richard's return undoes John's usurpation in the later plot.", 0.94, 0.9);
rel("king-richard", "robin-of-sherwood", "involved", "Richard pardons Robin after testing the band in disguise.", 0.95, 0.91);

rel("archery-contest", "nottingham", "occurred_at", "The sheriff's archery contest is staged in Nottingham.", 0.96, 0.93);
rel("archery-contest", "robin-of-sherwood", "involved", "Robin wins the contest in disguise.", 0.97, 0.94);
rel("archery-contest", "longbow", "uses", "The contest is a public trial of the longbow.", 0.95, 0.92);

rel("a-gest-of-robyn-hode", "robin-hood", "inspired", "The Gest is the main early narrative of the Robin Hood cycle.", 0.97, 0.94);
rel("robin-hood-and-the-monk", "nottingham", "occurred_at", "The Monk ballad turns on Robin's capture in Nottingham.", 0.94, 0.9);
rel("a-gest-of-robyn-hode", "barnsdale", "located_in", "The Gest still places much of Robin's action in Barnsdale.", 0.93, 0.89);
rel("robin-of-sherwood", "locksley", "located_in", "Later biography makes Robin a man of Locksley.", 0.9, 0.86);

rel("death-of-robin-hood", "kirklees-priory", "occurred_at", "Robin dies at Kirklees Priory.", 0.97, 0.95);
rel("prioress-of-kirklees", "death-of-robin-hood", "caused", "The prioress bleeds Robin to death under color of care.", 0.96, 0.93);
rel("little-john", "death-of-robin-hood", "involved", "Little John answers the last horn at Kirklees.", 0.95, 0.91);
rel("maid-marian", "robin-of-sherwood", "supports", "Marian is Robin's partner in the later greenwood household.", 0.94, 0.9);
rel("sherwood-forest", "robin-hood", "part_of", "Sherwood Forest is the legendary heart of the Robin Hood cycle.", 0.98, 0.96);

module.exports = { entities, relationships };
