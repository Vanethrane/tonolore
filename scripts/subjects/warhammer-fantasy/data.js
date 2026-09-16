/*
 * Warhammer Fantasy subject data — Games Workshop's Old World fantasy setting.
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
    "warhammer-fantasy",
    "Warhammer Fantasy",
    "topic",
    "Games Workshop's Old World high-fantasy wargame setting.",
    "Warhammer Fantasy is Games Workshop's classic high-fantasy setting of the Old World—a continent of human empires, elven isles, dwarf holds, and Chaos incursions—distinct from Warhammer 40,000 and from the later Age of Sigmar reboot."
);

entity(
    "games-workshop",
    "Games Workshop",
    "organization",
    "Creator and publisher of Warhammer Fantasy.",
    "Games Workshop created Warhammer Fantasy Battle, its army books, miniatures, and novels set in the Old World before the End Times and the transition to Age of Sigmar."
);

/* ---------- Setting / concepts ---------- */

entity(
    "old-world",
    "The Old World",
    "concept",
    "Continental heartland of Warhammer Fantasy.",
    "The Old World is the war-torn continent where the Empire, Bretonnia, Tilea, and border kingdoms stand against Chaos, greenskins, and skaven— the geographic and narrative core of classic Warhammer Fantasy."
);

entity(
    "chaos-gods",
    "Chaos Gods",
    "concept",
    "Ruinous deities of the Warhammer Fantasy Warp.",
    "The Chaos Gods—Khorne, Tzeentch, Nurgle, and Slaanesh—are warp entities whose mortal cults and daemon hosts drive the eternal war against the Old World's civilizations."
);

entity(
    "warpstone",
    "Warpstone",
    "concept",
    "Mutating meteoric substance tied to Chaos.",
    "Warpstone is a corrupting, radioactive material fallen from the skies, prized by skaven engineers and feared by sane nations for its mutation and Chaos taint."
);

entity(
    "great-war-against-chaos",
    "Great War Against Chaos",
    "concept",
    "Historic incursion when Chaos nearly broke the Empire.",
    "The Great War Against Chaos was a pivotal struggle in Imperial history when daemonic armies and northern hordes threatened to overrun the Empire until Sigmar's heirs rallied the defenses."
);

entity(
    "end-times",
    "The End Times",
    "concept",
    "Apocalyptic finale of classic Warhammer Fantasy.",
    "The End Times was the narrative cataclysm that destroyed the Old World setting, leading into Age of Sigmar—a separate reboot—not to be confused with ongoing Warhammer 40,000 lore."
);

/* ---------- Major factions ---------- */

entity(
    "the-empire",
    "The Empire",
    "organization",
    "Human nation founded in Sigmar's name.",
    "The Empire is the central human realm of the Old World, ruled by an Emperor from Altdorf and defended by state troops, knights, gunpowder, and colleges of battle magic."
);

entity(
    "chaos",
    "Forces of Chaos",
    "organization",
    "Northern warbands and cults of the Chaos Gods.",
    "The Forces of Chaos are marauding warriors, beastmen, and daemon hosts from the north and the Warp, led by champions like Archaon in endless assaults on the Old World."
);

entity(
    "skaven",
    "Skaven",
    "organization",
    "Ratmen under-empire beneath the Old World.",
    "Skaven are a hidden ratman civilization of tunnels and warpstone engines, scheming from Under-Empire cities to undermine surface nations through plague, assassination, and overwhelming numbers."
);

entity(
    "greenskins",
    "Greenskins",
    "organization",
    "Orc and goblin war tribes of the Old World.",
    "Greenskins are orc and goblin hordes driven by Waaagh! momentum, raiding frontiers from the Badlands and smashing into the Empire and dwarf holds when a strong warboss unites them."
);

entity(
    "high-elves",
    "High Elves",
    "organization",
    "Ancient elven civilization of Ulthuan.",
    "High Elves are the proud, magical people of Ulthuan whose phoenix kings and loremasters guard the world against Chaos while navigating rivalry with dark kin and mortal allies."
);

entity(
    "dwarfs",
    "Dwarfs",
    "organization",
    "Mountain holds and rune-smith clans.",
    "Dwarfs are stubborn hold-dwellers of the World's Edge Mountains, famed for rune weapons, grudges recorded in the Dammaz Kron, and alliance with the Empire against greenskins and Chaos."
);

entity(
    "bretonnia",
    "Bretonnia",
    "organization",
    "Chivalric human kingdom west of the Empire.",
    "Bretonnia is a feudal realm of knights and peasant levies, where the Lady of the Lake inspires questing lords who ride beside Imperial allies against shared enemies."
);

entity(
    "vampire-counts",
    "Vampire Counts",
    "organization",
    "Undead realms of Sylvania and necromancers.",
    "Vampire Counts are undead dynasties led by vampires such as the von Carsteins, raising skeletal legions in Sylvania and threatening the Empire from within its borders."
);

entity(
    "lizardmen",
    "Lizardmen",
    "organization",
    "Old Ones' servants in Lustria.",
    "Lizardmen are cold-blooded temple-cities of saurian warriors and slann mage-priests in Lustria, executing ancient world-plans far from the Old World's central wars."
);

entity(
    "kislev",
    "Kislev",
    "organization",
    "Northern human realm against Chaos incursions.",
    "Kislev is the icy eastern human nation of winged lancers and ice witches, forming the Empire's northern bulwark against Chaos warbands from the wastes."
);

/* ---------- Characters ---------- */

entity(
    "karl-franz",
    "Karl Franz",
    "person",
    "Emperor of the Empire and Elector Count of Reikland.",
    "Karl Franz is the Emperor of the Empire, uniting elector counts and field armies while riding the griffon Deathclaw in defense of the Old World against Chaos and rebellion."
);

entity(
    "sigmar",
    "Sigmar",
    "person",
    "Founder-god of the Empire.",
    "Sigmar is the legendary unifier who forged the Empire from tribal humans and became its patron god, his hammer Ghal Maraz a symbol of Imperial faith and law."
);

entity(
    "archaon-the-everchosen",
    "Archaon the Everchosen",
    "person",
    "Chaos champion destined to end the world.",
    "Archaon the Everchosen is the thirteenth Everchosen of Chaos, bearer of the Crown of Domination, whose rise marked the End Times and the final assault on the Old World."
);

entity(
    "grimgor-ironhide",
    "Grimgor Ironhide",
    "person",
    "Legendary orc warboss of the greenskins.",
    "Grimgor Ironhide is a brutal black-orc warboss whose undefeated streak and Waaagh! campaigns smashed into Kislev, the Empire, and Chaos armies across the Old World."
);

entity(
    "tyrion",
    "Tyrion",
    "person",
    "High Elf Defender of Ulthuan.",
    "Tyrion is the greatest living warrior of Ulthuan, Champion of the Everqueen, whose duels and battlefield leadership shield the high elves from daemonic invasion."
);

entity(
    "teclis",
    "Teclis",
    "person",
    "High Elf archmage and loremaster.",
    "Teclis is Tyrion's twin and the most powerful living high elf wizard, who taught human battle magic at the Empire's colleges and advised kings against Chaos."
);

entity(
    "thanquol",
    "Thanquol",
    "person",
    "Notorious skaven grey seer schemer.",
    "Thanquol is a cowardly but cunning skaven grey seer whose plots, warpstone schemes, and bodyguard Boneripper embody skaven treachery beneath the Old World."
);

/* ---------- Places ---------- */

entity(
    "ulthuan",
    "Ulthuan",
    "place",
    "Island continent homeland of the high elves.",
    "Ulthuan is the ring-shaped elven homeland of towering cities and vortex magic, anchoring the world's defenses against Chaos while high elf fleets patrol the seas."
);

entity(
    "altdorf",
    "Altdorf",
    "place",
    "Imperial capital on the River Reik.",
    "Altdorf is the capital of the Empire and seat of the Emperor, home to the Colleges of Magic, engineer schools, and the political heart of Karl Franz's realm."
);

entity(
    "middenheim",
    "Middenheim",
    "place",
    "Wolf-god city of the northern Empire.",
    "Middenheim is the fortified city of Ulric worship in Middenland, a northern bastion whose white wolves and templars guard passes against Chaos and beastmen."
);

entity(
    "sylvania",
    "Sylvania",
    "place",
    "Undead province of vampire counts.",
    "Sylvania is the fog-shrouded Imperial province ruled by vampire counts, where necromantic towers and mass graves threaten the Empire from within its own borders."
);

/* ---------- Imperial institutions ---------- */

entity(
    "colleges-of-magic",
    "Colleges of Magic",
    "organization",
    "Imperial schools of battle wizards.",
    "The Colleges of Magic in Altdorf train battle wizards in eight sanctioned winds of magic, a fragile Imperial institution founded with high elf guidance against Chaos."
);

entity(
    "witch-hunters",
    "Witch Hunters",
    "organization",
    "Sigmarite inquisitors of the Empire.",
    "Witch Hunters of the Sigmarite church root out heresy, necromancy, and Chaos cults across the Empire, feared by citizens and mutants alike for ruthless purges."
);

/* ---------- Relationships ---------- */

rel("games-workshop", "warhammer-fantasy", "created", "Games Workshop created Warhammer Fantasy.", 0.99, 0.99);
rel("games-workshop", "warhammer-fantasy", "publishes", "Games Workshop publishes Warhammer Fantasy products.", 0.98, 0.97);
rel("old-world", "warhammer-fantasy", "part_of", "The Old World is the core Warhammer Fantasy setting.", 0.99, 0.98);
rel("end-times", "warhammer-fantasy", "part_of", "The End Times concluded classic Warhammer Fantasy.", 0.97, 0.94);
rel("end-times", "old-world", "caused", "The End Times destroyed the Old World setting.", 0.96, 0.93);

rel("the-empire", "old-world", "located_in", "The Empire dominates the Old World's heartland.", 0.99, 0.98);
rel("bretonnia", "old-world", "located_in", "Bretonnia lies west of the Empire in the Old World.", 0.98, 0.96);
rel("kislev", "old-world", "located_in", "Kislev guards the Old World's northeastern frontier.", 0.98, 0.96);
rel("dwarfs", "old-world", "located_in", "Dwarf holds span the World's Edge Mountains.", 0.98, 0.96);
rel("skaven", "old-world", "located_in", "Skaven tunnel beneath the entire Old World.", 0.97, 0.94);
rel("greenskins", "old-world", "related_to", "Greenskin tribes raid across the Old World.", 0.97, 0.94);
rel("lizardmen", "old-world", "related_to", "Lizardmen act from Lustria beyond the Old World's core.", 0.93, 0.88);

rel("karl-franz", "the-empire", "leads", "Karl Franz is Emperor of the Empire.", 0.99, 0.98);
rel("sigmar", "the-empire", "found", "Sigmar founded the Empire and became its god.", 0.99, 0.98);
rel("karl-franz", "altdorf", "located_in", "Karl Franz rules from Altdorf.", 0.97, 0.94);
rel("altdorf", "the-empire", "part_of", "Altdorf is the Imperial capital.", 0.99, 0.98);
rel("middenheim", "the-empire", "part_of", "Middenheim is a major Imperial city-state.", 0.98, 0.96);
rel("sylvania", "the-empire", "part_of", "Sylvania is an Imperial province.", 0.98, 0.96);
rel("vampire-counts", "sylvania", "located_in", "Vampire counts rule Sylvania.", 0.98, 0.96);
rel("vampire-counts", "the-empire", "opposed_by", "Vampire counts threaten the Empire from within.", 0.97, 0.94);

rel("colleges-of-magic", "the-empire", "part_of", "The Colleges serve the Empire from Altdorf.", 0.98, 0.96);
rel("colleges-of-magic", "altdorf", "located_in", "The Colleges of Magic stand in Altdorf.", 0.98, 0.96);
rel("teclis", "colleges-of-magic", "influenced", "Teclis helped establish Imperial battle magic.", 0.96, 0.93);
rel("witch-hunters", "the-empire", "part_of", "Witch Hunters serve Sigmarite authority in the Empire.", 0.97, 0.94);
rel("witch-hunters", "chaos", "opposed_by", "Witch Hunters purge Chaos cults.", 0.96, 0.93);

rel("high-elves", "ulthuan", "located_in", "High elves rule Ulthuan.", 0.99, 0.98);
rel("tyrion", "high-elves", "member_of", "Tyrion is Ulthuan's greatest champion.", 0.98, 0.96);
rel("teclis", "high-elves", "member_of", "Teclis is a high elf loremaster.", 0.98, 0.96);
rel("tyrion", "ulthuan", "located_in", "Tyrion defends Ulthuan.", 0.97, 0.94);
rel("the-empire", "high-elves", "supports", "The Empire and high elves ally against Chaos.", 0.94, 0.9);

rel("chaos", "chaos-gods", "motivated_by", "Chaos warbands serve the Chaos Gods.", 0.99, 0.98);
rel("archaon-the-everchosen", "chaos", "leads", "Archaon leads the Forces of Chaos.", 0.99, 0.98);
rel("archaon-the-everchosen", "end-times", "involved", "Archaon's rise drove the End Times.", 0.97, 0.94);
rel("great-war-against-chaos", "the-empire", "occurred_at", "The Great War threatened the Empire's survival.", 0.96, 0.93);
rel("chaos", "the-empire", "opposed_by", "The Empire stands as Chaos's central foe.", 0.98, 0.96);
rel("chaos", "kislev", "opposed_by", "Kislev bears the brunt of northern Chaos incursions.", 0.97, 0.94);

rel("skaven", "warpstone", "uses", "Skaven technology runs on warpstone.", 0.98, 0.96);
rel("thanquol", "skaven", "member_of", "Thanquol is a skaven grey seer.", 0.98, 0.96);
rel("skaven", "the-empire", "opposed_by", "Skaven undermine the Empire from below.", 0.97, 0.94);

rel("grimgor-ironhide", "greenskins", "leads", "Grimgor is the greatest greenskin warboss.", 0.98, 0.96);
rel("greenskins", "the-empire", "opposed_by", "Greenskin Waaaghs! crash into Imperial lands.", 0.97, 0.94);
rel("greenskins", "dwarfs", "opposed_by", "Orc wars grind against dwarf holds.", 0.97, 0.94);
rel("dwarfs", "the-empire", "supports", "Dwarfs and the Empire share long alliances.", 0.95, 0.91);

module.exports = { entities, relationships };
