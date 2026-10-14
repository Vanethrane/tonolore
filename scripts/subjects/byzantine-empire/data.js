/*
 * Byzantine Empire subject data — people, places, and turning points
 * from Constantinople to 1453.
 */

const entities = [];
const relationships = [];

function entity(
    slug,
    name,
    type,
    short_description,
    description,
    evidence = "documented",
    extras = {}
) {
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

/* ---------- Root ---------- */

entity(
    "byzantine-empire",
    "Byzantine Empire",
    "topic",
    "The Roman Empire in the east — Constantinople, Orthodox rite, and a thousand years after Rome in the west fell.",
    "The Byzantine Empire is the eastern Roman state that ruled from Constantinople after the west fragmented. Its lore runs through Justinian and Theodora, Hagia Sophia, Greek fire, the theme system, the Komnenoi, the Fourth Crusade, and the 1453 fall to the Ottomans."
);

/* ---------- Places ---------- */

entity(
    "constantinople",
    "Constantinople",
    "place",
    "Imperial capital on the Bosporus, now Istanbul.",
    "Constantinople was Constantine the Great's New Rome: the walled capital on the Bosporus, seat of emperors, patriarchs, and the Hippodrome, until Mehmet II took the city in 1453."
);

entity(
    "hagia-sophia",
    "Hagia Sophia",
    "place",
    "Justinian's great church and the empire's architectural emblem.",
    "Hagia Sophia was rebuilt by Justinian I after the Nika riots as the patriarchal cathedral of Constantinople — a dome of imperial Orthodoxy later converted to a mosque after 1453."
);

entity(
    "hippodrome-of-constantinople",
    "Hippodrome of Constantinople",
    "place",
    "Chariot arena and political theatre of the capital.",
    "The Hippodrome sat beside the Great Palace and was where Blue and Green factions raced — and where the Nika riots of 532 exploded against Justinian."
);

entity(
    "theodosian-walls",
    "Theodosian Walls",
    "place",
    "Land walls that kept Constantinople for a millennium.",
    "The Theodosian Walls guarded the city's land approach. They held through sieges until Ottoman cannon and the 1453 assault finally broke the defense."
);

entity(
    "bosporus",
    "Bosporus",
    "place",
    "Strait that made the capital a hinge between Europe and Asia.",
    "The Bosporus is the waterway that made Constantinople wealthy and strategic — controlling Black Sea trade and the crossing between continents."
);

/* ---------- People ---------- */

entity(
    "constantine-the-great",
    "Constantine the Great",
    "person",
    "Emperor who founded Constantinople and legalized Christianity.",
    "Constantine I refounded Byzantium as Constantinople in 330 and aligned the Roman state with Christianity, setting the capital and religion the later empire would claim."
);

entity(
    "justinian-i",
    "Justinian I",
    "person",
    "Emperor of reconquest, the Code, and Hagia Sophia.",
    "Justinian I (r. 527–565) tried to restore a Mediterranean Rome: the Corpus Juris Civilis, the rebuilding of Hagia Sophia, Belisarius's wars, and the Nika crisis he survived with Theodora."
);

entity(
    "theodora",
    "Theodora",
    "person",
    "Empress and Justinian's political partner.",
    "Theodora rose from the Hippodrome world to empress. During the Nika riots she is remembered for urging Justinian to hold the palace rather than flee."
);

entity(
    "belisarius",
    "Belisarius",
    "person",
    "Justinian's general in Africa and Italy.",
    "Belisarius reconquered Vandal North Africa and fought the Gothic War in Italy for Justinian, the military arm of the sixth-century restoration."
);

entity(
    "heraclius",
    "Heraclius",
    "person",
    "Emperor who beat Persia, then lost Syria and Egypt to the Arabs.",
    "Heraclius (r. 610–641) ended the last great Roman–Sasanian war and recovered the True Cross, then watched the early caliphate take the Levant and Egypt."
);

entity(
    "basil-ii",
    "Basil II",
    "person",
    "The Bulgar-slayer — apex of the Macedonian dynasty.",
    "Basil II (r. 976–1025) broke the Bulgarian empire and left Byzantium at a territorial high point that later eleventh-century crises would undo."
);

entity(
    "alexios-i-komnenos",
    "Alexios I Komnenos",
    "person",
    "Emperor who asked the west for help and opened the First Crusade.",
    "Alexios I Komnenos (r. 1081–1118) restored the army after Manzikert, appealed to the papacy for mercenaries, and instead received the First Crusade through his capital."
);

entity(
    "constantine-xi",
    "Constantine XI Palaiologos",
    "person",
    "Last Byzantine emperor, killed in the 1453 defense.",
    "Constantine XI was the last emperor of the Romans. He died in the fighting when Ottoman forces entered Constantinople on 29 May 1453."
);

entity(
    "mehmed-ii",
    "Mehmed II",
    "person",
    "Ottoman sultan who took Constantinople in 1453.",
    "Mehmed II, the Conqueror, besieged Constantinople in 1453, breached the land walls, and made the city the Ottoman capital."
);

/* ---------- Events ---------- */

entity(
    "nika-riots",
    "Nika riots",
    "event",
    "532 Hippodrome uprising that nearly unseated Justinian.",
    "The Nika riots of 532 joined Blue and Green circus factions against Justinian. The Hippodrome burned; Belisarius and Mundus crushed the revolt; Hagia Sophia was rebuilt in the aftermath."
);

entity(
    "battle-of-manzikert",
    "Battle of Manzikert",
    "event",
    "1071 defeat that opened Anatolia to the Turks.",
    "At Manzikert in 1071, Seljuk forces defeated Romanos IV. The loss began the unraveling of Byzantine Anatolia and set up the Komnenian appeal to the west."
);

entity(
    "fourth-crusade",
    "Fourth Crusade",
    "event",
    "1204 sack of Constantinople by Latin crusaders.",
    "The Fourth Crusade diverted to Constantinople, sacked the city in 1204, and installed the Latin Empire — a wound the Palaiologoi only partly healed after 1261."
);

entity(
    "fall-of-constantinople",
    "Fall of Constantinople",
    "event",
    "29 May 1453 — end of the Byzantine state.",
    "The Fall of Constantinople in 1453 ended the Byzantine Empire. Mehmed II's guns and ships overcame the Theodosian Walls; Constantine XI died in the breach."
);

entity(
    "recapture-of-constantinople-1261",
    "Recapture of Constantinople (1261)",
    "event",
    "Michael VIII Palaiologos ends the Latin Empire.",
    "In 1261 Michael VIII Palaiologos recovered Constantinople from the Latin Empire, restoring a smaller Byzantine state that lasted until 1453."
);

/* ---------- Concepts / institutions ---------- */

entity(
    "eastern-orthodox-church",
    "Eastern Orthodox Church",
    "organization",
    "Imperial church of the patriarchate of Constantinople.",
    "The Eastern Orthodox Church, headed in the capital by the Ecumenical Patriarch, was the empire's ritual and political religion after the schism with Rome."
);

entity(
    "theme-system",
    "Theme system",
    "concept",
    "Military provinces that tied land to defense.",
    "The theme system organized Anatolia and the Balkans into military districts whose soldier-farmers were the middle-period army's backbone."
);

entity(
    "greek-fire",
    "Greek fire",
    "object",
    "Incendiary naval weapon that saved the city in early sieges.",
    "Greek fire was the Byzantines' petroleum-based naval weapon, decisive in seventh- and eighth-century defenses of Constantinople against Arab fleets."
);

entity(
    "corpus-juris-civilis",
    "Corpus Juris Civilis",
    "work",
    "Justinian's codification of Roman law.",
    "The Corpus Juris Civilis compiled Roman law under Justinian and became the legal ancestor later European codes would claim."
);

entity(
    "varangian-guard",
    "Varangian Guard",
    "organization",
    "Norse and later English axe-bearing imperial household troops.",
    "The Varangian Guard were foreign household troops — first Rus' and Scandinavians, later Anglo-Saxons — who guarded the emperor in Constantinople."
);

entity(
    "latin-empire",
    "Latin Empire",
    "organization",
    "Crusader state that occupied Constantinople from 1204 to 1261.",
    "The Latin Empire was the Frankish regime installed after the Fourth Crusade, ruling Constantinople until the Palaiologoi returned in 1261."
);

/* ---------- Relationships ---------- */

rel("constantine-the-great", "constantinople", "created", "Constantine founded Constantinople as New Rome.", 0.99, 0.98);
rel("constantinople", "byzantine-empire", "part_of", "Constantinople was the imperial capital.", 0.99, 0.99);
rel("constantinople", "bosporus", "located_in", "The capital sits on the Bosporus.", 0.97, 0.94);
rel("hagia-sophia", "constantinople", "located_in", "Hagia Sophia stands in Constantinople.", 0.99, 0.97);
rel("hippodrome-of-constantinople", "constantinople", "located_in", "The Hippodrome was the capital's public arena.", 0.98, 0.95);
rel("theodosian-walls", "constantinople", "part_of", "The Theodosian Walls guarded the city's land side.", 0.98, 0.96);

rel("justinian-i", "byzantine-empire", "leads", "Justinian I ruled the sixth-century empire at its reconquest peak.", 0.98, 0.96);
rel("justinian-i", "hagia-sophia", "created", "Justinian rebuilt Hagia Sophia after the Nika riots.", 0.99, 0.97);
rel("justinian-i", "corpus-juris-civilis", "created", "Justinian ordered the Corpus Juris Civilis.", 0.99, 0.97);
rel("theodora", "justinian-i", "supports", "Theodora was Justinian's empress and political partner.", 0.98, 0.96);
rel("theodora", "nika-riots", "involved", "Theodora urged Justinian to stay during the Nika riots.", 0.96, 0.93);
rel("belisarius", "justinian-i", "supports", "Belisarius was Justinian's chief general.", 0.97, 0.94);
rel("nika-riots", "hippodrome-of-constantinople", "occurred_at", "The Nika riots erupted in and around the Hippodrome.", 0.98, 0.95);
rel("nika-riots", "hagia-sophia", "caused", "The riots destroyed the earlier Hagia Sophia Justinian then rebuilt.", 0.95, 0.92);

rel("heraclius", "byzantine-empire", "leads", "Heraclius ruled through the last Persian war and the first Arab conquests.", 0.96, 0.93);
rel("basil-ii", "byzantine-empire", "leads", "Basil II brought the Macedonian-era empire to a territorial high.", 0.96, 0.93);
rel("alexios-i-komnenos", "byzantine-empire", "leads", "Alexios I restored the state after Manzikert and met the First Crusade.", 0.96, 0.93);
rel("battle-of-manzikert", "alexios-i-komnenos", "preceded", "Manzikert's aftermath is what Alexios I had to repair.", 0.94, 0.9);

rel("fourth-crusade", "constantinople", "involved", "The Fourth Crusade sacked Constantinople in 1204.", 0.99, 0.97);
rel("fourth-crusade", "latin-empire", "caused", "The crusade created the Latin Empire.", 0.98, 0.96);
rel("latin-empire", "constantinople", "located_in", "The Latin Empire occupied Constantinople.", 0.97, 0.94);
rel("recapture-of-constantinople-1261", "latin-empire", "caused", "The 1261 recapture ended the Latin Empire in the city.", 0.96, 0.93);
rel("recapture-of-constantinople-1261", "constantinople", "occurred_at", "Michael VIII recovered the capital in 1261.", 0.96, 0.93);

rel("fall-of-constantinople", "constantine-xi", "involved", "Constantine XI died defending the city in 1453.", 0.99, 0.97);
rel("fall-of-constantinople", "mehmed-ii", "involved", "Mehmed II took Constantinople in 1453.", 0.99, 0.97);
rel("fall-of-constantinople", "theodosian-walls", "involved", "Ottoman guns broke the Theodosian land walls.", 0.97, 0.94);
rel("fall-of-constantinople", "byzantine-empire", "caused", "The 1453 fall ended the Byzantine state.", 0.99, 0.98);
rel("constantine-xi", "byzantine-empire", "leads", "Constantine XI was the last Byzantine emperor.", 0.98, 0.96);

rel("eastern-orthodox-church", "constantinople", "located_in", "The Ecumenical Patriarchate sat in Constantinople.", 0.96, 0.93);
rel("eastern-orthodox-church", "hagia-sophia", "uses", "Hagia Sophia was the patriarchal cathedral.", 0.97, 0.94);
rel("theme-system", "byzantine-empire", "part_of", "Themes were the middle-period military geography of the empire.", 0.95, 0.91);
rel("greek-fire", "constantinople", "supports", "Greek fire helped defend the capital's waters.", 0.94, 0.9);
rel("varangian-guard", "constantinople", "located_in", "The Varangians guarded the emperor in the capital.", 0.94, 0.9);
rel("hagia-sophia", "byzantine-empire", "part_of", "Hagia Sophia is the empire's emblematic church.", 0.96, 0.93);

module.exports = { entities, relationships };
