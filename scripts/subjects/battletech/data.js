/*
 * BattleTech subject data — Classic mech warfare in the Inner Sphere and Clan invasion era.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "fiction", extras = {}) {
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

/* ---------- Root / creators ---------- */

entity(
    "battletech",
    "BattleTech",
    "topic",
    "Classic mech warfare setting of the Inner Sphere and Clans.",
    "BattleTech is the science-fiction universe of BattleMechs, noble houses, and ComStar intrigue— spanning the Star League's fall, Succession Wars, Clan invasion, and decades of tabletop, novel, and MechWarrior game lore."
);

entity(
    "fasa",
    "FASA",
    "organization",
    "Original creator of BattleTech.",
    "FASA Corporation created BattleTech (originally BattleDroids) in 1984, establishing the Great Houses, BattleMechs, and early Inner Sphere lore later carried forward by successors."
);

entity(
    "catalyst-game-labs",
    "Catalyst Game Labs",
    "organization",
    "Current publisher of BattleTech tabletop products.",
    "Catalyst Game Labs publishes modern BattleTech rulebooks, miniatures, and fiction, continuing the Inner Sphere and Clan timelines for tabletop and organized play."
);

entity(
    "topps",
    "Topps",
    "organization",
    "Former holder of BattleTech rights after FASA.",
    "Topps held BattleTech intellectual property after FASA's closure, licensing MechWarrior games and fiction before Catalyst assumed ongoing tabletop publication."
);

/* ---------- Core concepts ---------- */

entity(
    "inner-sphere",
    "Inner Sphere",
    "concept",
    "Human region of Successor State great houses.",
    "The Inner Sphere is the core region of human space ruled by five Great Houses after the Star League's collapse, defined by Succession Wars, lostech, and feudal mech warfare."
);

entity(
    "clans",
    "Clans",
    "concept",
    "Warrior castes descended from Star League exiles.",
    "The Clans are genetically bred warrior societies descended from Kerensky's exodus, returning to the Inner Sphere with superior OmniMechs and a brutal trial-based culture during the Clan invasion."
);

entity(
    "battlemechs",
    "BattleMechs",
    "concept",
    "Humanoid war machines central to BattleTech warfare.",
    "BattleMechs are towering humanoid engines of war piloted by MechWarriors, dominating BattleTech battlefields through armor, weapons pods, and the prestige of noble and mercenary lords."
);

entity(
    "succession-wars",
    "Succession Wars",
    "concept",
    "Centuries of Great House conflict after the Star League.",
    "The Succession Wars are the devastating inter-house conflicts that followed the Star League's fall, erasing much advanced technology and shaping Inner Sphere politics for generations."
);

entity(
    "star-league",
    "Star League",
    "organization",
    "Unified human government before its collapse.",
    "The Star League was the golden age federation of Terra and the Great Houses, destroyed by civil war and Kerensky's exodus, leaving a power vacuum the Successor States fought to fill."
);

/* ---------- Great Houses / powers ---------- */

entity(
    "house-steiner",
    "House Steiner",
    "organization",
    "Lyran Commonwealth ruling house.",
    "House Steiner rules the wealthy Lyran Commonwealth from Tharkad, fielding heavy assault mechs and economic power while allying with House Davion through marriage and the Federated Commonwealth."
);

entity(
    "house-davion",
    "House Davion",
    "organization",
    "Federated Suns ruling house.",
    "House Davion leads the Federated Suns from New Avalon, emphasizing combined-arms doctrine and aggressive leadership that reshaped Inner Sphere alliances in the Fourth Succession War."
);

entity(
    "house-liao",
    "House Liao",
    "organization",
    "Capellan Confederation ruling house.",
    "House Liao governs the Capellan Confederation, a doctrinaire state of strategic finesse and political indoctrination centered on Capella and wary of Davion and Marik borders."
);

entity(
    "house-kurita",
    "House Kurita",
    "organization",
    "Draconis Combine ruling house.",
    "House Kurita rules the Draconis Combine from Luthien, blending Japanese-inspired feudal culture with ruthless military expansion against the Federated Suns and Lyran frontiers."
);

entity(
    "house-marik",
    "House Marik",
    "organization",
    "Free Worlds League ruling house.",
    "House Marik presides over the fractious Free Worlds League, a parliamentary federation of worlds whose internal divisions and mercantile strength shape Inner Sphere balance."
);

entity(
    "comstar",
    "ComStar",
    "organization",
    "Monopoly on interstellar communication and hidden agenda.",
    "ComStar controls the Hyperpulse Generator network that links Inner Sphere worlds, presenting as neutral communicators while guarding lost Star League technology and its own mystic Order."
);

/* ---------- Clans (representative) ---------- */

entity(
    "clan-wolf",
    "Clan Wolf",
    "organization",
    "Clan that led the invasion and split in civil war.",
    "Clan Wolf was among the invasion's leading Clans, producing ilKhan Ulric Kerensky and later splitting into Wolf and Crusader factions that reshaped Clan politics."
);

entity(
    "clan-jade-falcon",
    "Clan Jade Falcon",
    "organization",
    "Aggressive Crusader Clan of the invasion.",
    "Clan Jade Falcon is a proud Crusader Clan that seized Inner Sphere worlds during the invasion and remained a major power on the Clan frontier after Tukayyid."
);

entity(
    "clan-smoke-jaguar",
    "Clan Smoke Jaguar",
    "organization",
    "Clan destroyed after the Federated Commonwealth campaign.",
    "Clan Smoke Jaguar was a brutal invasion Clan annihilated during the Refusal War and later campaigns, erasing one of the most aggressive Crusader voices among the Clans."
);

entity(
    "clan-ghost-bear",
    "Clan Ghost Bear",
    "organization",
    "Clan that merged with Inner Sphere populations.",
    "Clan Ghost Bear eventually settled into the Inner Sphere as the Ghost Bear Dominion, blending Clan warrior culture with civilian governance on multiple worlds."
);

/* ---------- Characters ---------- */

entity(
    "hanse-davion",
    "Hanse Davion",
    "person",
    "Archon-prince who reshaped Inner Sphere alliances.",
    "Hanse Davion was the Federated Suns' cunning First Prince whose marriage to Melissa Steiner and Fourth Succession War strategies redrew the map against House Liao."
);

entity(
    "melissa-steiner-davion",
    "Melissa Steiner-Davion",
    "person",
    "Lyran princess who united Davion and Steiner.",
    "Melissa Steiner-Davion was the Lyran archon heir whose marriage to Hanse Davion forged the Federated Commonwealth, linking House Steiner and House Davion."
);

entity(
    "ulric-kerensky",
    "Ulric Kerensky",
    "person",
    "Clan Wolf ilKhan during the invasion era.",
    "Ulric Kerensky was ilKhan of the Clans and Khan of Clan Wolf, steering invasion politics and the bid that led to the Battle of Tukayyid's truce."
);

entity(
    "natasha-kerensky",
    "Natasha Kerensky",
    "person",
    "Legendary Wolf's Dragoons MechWarrior.",
    "Natasha Kerensky is the Black Widow, a famed MechWarrior of Wolf's Dragoons whose career spans mercenary legend, Clan trials, and Inner Sphere warfare."
);

entity(
    "myndo-waterly",
    "Myndo Waterly",
    "person",
    "ComStar primus who overreached against the Clans.",
    "Myndo Waterly was Primus of ComStar whose Operation Scorpion and miscalculation against the Clans exposed ComStar's hidden power plays and led to her downfall."
);

entity(
    "precentor-martial",
    "Precentor Martial",
    "person",
    "ComStar's supreme military commander title.",
    "The Precentor Martial commands ComStar's Com Guard, the secret army that fought the Clans at Tukayyid under the Precentor Martial's battle plan."
);

/* ---------- Places ---------- */

entity(
    "terra",
    "Terra",
    "place",
    "Birthworld of humanity and ComStar stronghold.",
    "Terra is Earth, seat of the Star League's legacy and ComStar's guarded headquarters, central to BattleTech politics and the Clans' ultimate objective."
);

entity(
    "tharkad",
    "Tharkad",
    "place",
    "Capital of the Lyran Commonwealth.",
    "Tharkad is the icy capital world of House Steiner and the Lyran Commonwealth, a political and industrial hub for Steiner diplomacy and mech production."
);

entity(
    "outreach",
    "Outreach",
    "place",
    "Mercenary hiring world near the Inner Sphere core.",
    "Outreach is the mercenary trade world of the Hiring Hall, where commands contract for Great House campaigns across Succession War battlefields."
);

/* ---------- Events / works ---------- */

entity(
    "clan-invasion",
    "Clan Invasion",
    "concept",
    "Return of Kerensky's descendants to the Inner Sphere.",
    "The Clan Invasion was the 3049–3052 assault when Clan fleets struck the Inner Sphere with advanced OmniMechs, shattering Successor State complacency until Tukayyid."
);

entity(
    "battle-of-tukayyid",
    "Battle of Tukayyid",
    "concept",
    "Com Guard stand that halted the Clan advance.",
    "The Battle of Tukayyid was ComStar's Com Guard victory that forced a fifteen-year truce with the Clans, brokered by Precentor Martial Focht after brutal planetary fighting."
);

entity(
    "fourth-succession-war",
    "Fourth Succession War",
    "concept",
    "Davion–Steiner campaign against the Confederation.",
    "The Fourth Succession War was Hanse Davion and Melissa Steiner's coordinated offensive that crippled House Liao and created the Federated Commonwealth alliance."
);

entity(
    "mechwarrior",
    "MechWarrior",
    "work",
    "Video game series adapted from BattleTech.",
    "MechWarrior is the action and simulation game franchise that puts players in BattleMech cockpits, adapting Inner Sphere and Clan mech combat for digital audiences."
);

/* ---------- Relationships ---------- */

rel("fasa", "battletech", "created", "FASA created BattleTech.", 0.99, 0.99);
rel("topps", "battletech", "published", "Topps held BattleTech rights after FASA.", 0.96, 0.93);
rel("catalyst-game-labs", "battletech", "publishes", "Catalyst publishes modern BattleTech.", 0.98, 0.96);
rel("catalyst-game-labs", "topps", "related_to", "Catalyst continues tabletop publication after Topps licensing.", 0.93, 0.88);

rel("inner-sphere", "battletech", "part_of", "The Inner Sphere is BattleTech's core region.", 0.99, 0.98);
rel("clans", "battletech", "part_of", "The Clans are a major BattleTech faction.", 0.99, 0.98);
rel("battlemechs", "battletech", "part_of", "BattleMechs define BattleTech warfare.", 0.99, 0.99);
rel("star-league", "battletech", "preceded", "The Star League preceded Succession Wars history.", 0.98, 0.96);
rel("succession-wars", "star-league", "followed", "Succession Wars followed the Star League's collapse.", 0.98, 0.96);
rel("succession-wars", "inner-sphere", "occurred_at", "Succession Wars ravaged the Inner Sphere.", 0.99, 0.98);

rel("house-steiner", "inner-sphere", "member_of", "House Steiner rules a Successor State.", 0.99, 0.98);
rel("house-davion", "inner-sphere", "member_of", "House Davion rules the Federated Suns.", 0.99, 0.98);
rel("house-liao", "inner-sphere", "member_of", "House Liao rules the Capellan Confederation.", 0.99, 0.98);
rel("house-kurita", "inner-sphere", "member_of", "House Kurita rules the Draconis Combine.", 0.99, 0.98);
rel("house-marik", "inner-sphere", "member_of", "House Marik leads the Free Worlds League.", 0.99, 0.98);
rel("star-league", "terra", "located_in", "The Star League governed from Terra.", 0.97, 0.94);

rel("hanse-davion", "house-davion", "leads", "Hanse Davion was First Prince of the Federated Suns.", 0.99, 0.98);
rel("melissa-steiner-davion", "house-steiner", "member_of", "Melissa was heir of House Steiner.", 0.98, 0.96);
rel("hanse-davion", "melissa-steiner-davion", "connected_to", "Hanse and Melissa's marriage united two houses.", 0.98, 0.96);
rel("fourth-succession-war", "hanse-davion", "involved", "Hanse Davion drove the Fourth Succession War.", 0.98, 0.96);
rel("fourth-succession-war", "house-liao", "opposed_by", "House Liao bore the war's main assault.", 0.97, 0.94);
rel("house-steiner", "house-davion", "supports", "Steiner and Davion formed the Federated Commonwealth.", 0.96, 0.93);

rel("tharkad", "house-steiner", "located_in", "Tharkad is the Lyran capital.", 0.99, 0.98);
rel("comstar", "terra", "located_in", "ComStar guards Terra and the HPG network.", 0.98, 0.96);
rel("comstar", "inner-sphere", "records", "ComStar maintains Inner Sphere communications.", 0.98, 0.96);
rel("myndo-waterly", "comstar", "leads", "Myndo Waterly served as ComStar Primus.", 0.98, 0.96);
rel("precentor-martial", "comstar", "member_of", "The Precentor Martial commands ComStar's military.", 0.98, 0.96);

rel("clan-wolf", "clans", "member_of", "Clan Wolf is a major invasion Clan.", 0.99, 0.98);
rel("clan-jade-falcon", "clans", "member_of", "Clan Jade Falcon is a Crusader Clan.", 0.99, 0.98);
rel("clan-smoke-jaguar", "clans", "member_of", "Clan Smoke Jaguar invaded the Inner Sphere.", 0.98, 0.96);
rel("clan-ghost-bear", "clans", "member_of", "Clan Ghost Bear is a powerful Clan.", 0.98, 0.96);
rel("ulric-kerensky", "clan-wolf", "leads", "Ulric Kerensky led Clan Wolf as Khan and ilKhan.", 0.98, 0.96);
rel("natasha-kerensky", "clan-wolf", "member_of", "Natasha Kerensky became a Clan Wolf warrior.", 0.97, 0.94);
rel("natasha-kerensky", "battlemechs", "uses", "Natasha Kerensky pilots legendary BattleMechs.", 0.97, 0.94);

rel("clan-invasion", "clans", "involved", "The Clans launched the invasion.", 0.99, 0.98);
rel("clan-invasion", "inner-sphere", "occurred_at", "The invasion struck Inner Sphere worlds.", 0.99, 0.98);
rel("clan-invasion", "battlemechs", "involved", "OmniMech assaults defined the invasion.", 0.98, 0.96);
rel("clan-invasion", "succession-wars", "followed", "The invasion followed centuries of Succession Wars.", 0.96, 0.93);
rel("battle-of-tukayyid", "clan-invasion", "followed", "Tukayyid halted the invasion's advance.", 0.98, 0.96);
rel("battle-of-tukayyid", "comstar", "involved", "ComStar's Com Guard fought at Tukayyid.", 0.99, 0.98);
rel("precentor-martial", "battle-of-tukayyid", "involved", "The Precentor Martial commanded at Tukayyid.", 0.98, 0.96);
rel("ulric-kerensky", "clan-invasion", "involved", "Ulric Kerensky shaped invasion politics.", 0.97, 0.94);
rel("clans", "inner-sphere", "opposed_by", "Successor States resisted the Clan invasion.", 0.98, 0.96);

rel("mechwarrior", "battletech", "adapted_from", "MechWarrior adapts BattleTech mech combat.", 0.98, 0.96);
rel("mechwarrior", "battlemechs", "involved", "MechWarrior games center on piloting BattleMechs.", 0.98, 0.96);
rel("outreach", "inner-sphere", "located_in", "Outreach serves mercenaries in the Inner Sphere.", 0.97, 0.94);
rel("battlemechs", "house-davion", "uses", "Great Houses field house BattleMechs.", 0.96, 0.93);

module.exports = { entities, relationships };
