/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "warhammer-fantasy",
        "name": "Warhammer Fantasy",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Games Workshop's Old World high-fantasy wargame setting.",
        "description": "Warhammer Fantasy is Games Workshop's classic high-fantasy setting of the Old World—a continent of human empires, elven isles, dwarf holds, and Chaos incursions—distinct from Warhammer 40,000 and from the later Age of Sigmar reboot.",
        "aliases": []
    },
    {
        "slug": "games-workshop",
        "name": "Games Workshop",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Creator and publisher of Warhammer Fantasy.",
        "description": "Games Workshop created Warhammer Fantasy Battle, its army books, miniatures, and novels set in the Old World before the End Times and the transition to Age of Sigmar.",
        "aliases": []
    },
    {
        "slug": "old-world",
        "name": "The Old World",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Continental heartland of Warhammer Fantasy.",
        "description": "The Old World is the war-torn continent where the Empire, Bretonnia, Tilea, and border kingdoms stand against Chaos, greenskins, and skaven— the geographic and narrative core of classic Warhammer Fantasy.",
        "aliases": []
    },
    {
        "slug": "chaos-gods",
        "name": "Chaos Gods",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Ruinous deities of the Warhammer Fantasy Warp.",
        "description": "The Chaos Gods—Khorne, Tzeentch, Nurgle, and Slaanesh—are warp entities whose mortal cults and daemon hosts drive the eternal war against the Old World's civilizations.",
        "aliases": []
    },
    {
        "slug": "warpstone",
        "name": "Warpstone",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Mutating meteoric substance tied to Chaos.",
        "description": "Warpstone is a corrupting, radioactive material fallen from the skies, prized by skaven engineers and feared by sane nations for its mutation and Chaos taint.",
        "aliases": []
    },
    {
        "slug": "great-war-against-chaos",
        "name": "Great War Against Chaos",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Historic incursion when Chaos nearly broke the Empire.",
        "description": "The Great War Against Chaos was a pivotal struggle in Imperial history when daemonic armies and northern hordes threatened to overrun the Empire until Sigmar's heirs rallied the defenses.",
        "aliases": []
    },
    {
        "slug": "end-times",
        "name": "The End Times",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Apocalyptic finale of classic Warhammer Fantasy.",
        "description": "The End Times was the narrative cataclysm that destroyed the Old World setting, leading into Age of Sigmar—a separate reboot—not to be confused with ongoing Warhammer 40,000 lore.",
        "aliases": []
    },
    {
        "slug": "the-empire",
        "name": "The Empire",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Human nation founded in Sigmar's name.",
        "description": "The Empire is the central human realm of the Old World, ruled by an Emperor from Altdorf and defended by state troops, knights, gunpowder, and colleges of battle magic.",
        "aliases": []
    },
    {
        "slug": "chaos",
        "name": "Forces of Chaos",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Northern warbands and cults of the Chaos Gods.",
        "description": "The Forces of Chaos are marauding warriors, beastmen, and daemon hosts from the north and the Warp, led by champions like Archaon in endless assaults on the Old World.",
        "aliases": []
    },
    {
        "slug": "skaven",
        "name": "Skaven",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Ratmen under-empire beneath the Old World.",
        "description": "Skaven are a hidden ratman civilization of tunnels and warpstone engines, scheming from Under-Empire cities to undermine surface nations through plague, assassination, and overwhelming numbers.",
        "aliases": []
    },
    {
        "slug": "greenskins",
        "name": "Greenskins",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Orc and goblin war tribes of the Old World.",
        "description": "Greenskins are orc and goblin hordes driven by Waaagh! momentum, raiding frontiers from the Badlands and smashing into the Empire and dwarf holds when a strong warboss unites them.",
        "aliases": []
    },
    {
        "slug": "high-elves",
        "name": "High Elves",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Ancient elven civilization of Ulthuan.",
        "description": "High Elves are the proud, magical people of Ulthuan whose phoenix kings and loremasters guard the world against Chaos while navigating rivalry with dark kin and mortal allies.",
        "aliases": []
    },
    {
        "slug": "dwarfs",
        "name": "Dwarfs",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Mountain holds and rune-smith clans.",
        "description": "Dwarfs are stubborn hold-dwellers of the World's Edge Mountains, famed for rune weapons, grudges recorded in the Dammaz Kron, and alliance with the Empire against greenskins and Chaos.",
        "aliases": []
    },
    {
        "slug": "bretonnia",
        "name": "Bretonnia",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Chivalric human kingdom west of the Empire.",
        "description": "Bretonnia is a feudal realm of knights and peasant levies, where the Lady of the Lake inspires questing lords who ride beside Imperial allies against shared enemies.",
        "aliases": []
    },
    {
        "slug": "vampire-counts",
        "name": "Vampire Counts",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Undead realms of Sylvania and necromancers.",
        "description": "Vampire Counts are undead dynasties led by vampires such as the von Carsteins, raising skeletal legions in Sylvania and threatening the Empire from within its borders.",
        "aliases": []
    },
    {
        "slug": "lizardmen",
        "name": "Lizardmen",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Old Ones' servants in Lustria.",
        "description": "Lizardmen are cold-blooded temple-cities of saurian warriors and slann mage-priests in Lustria, executing ancient world-plans far from the Old World's central wars.",
        "aliases": []
    },
    {
        "slug": "kislev",
        "name": "Kislev",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Northern human realm against Chaos incursions.",
        "description": "Kislev is the icy eastern human nation of winged lancers and ice witches, forming the Empire's northern bulwark against Chaos warbands from the wastes.",
        "aliases": []
    },
    {
        "slug": "karl-franz",
        "name": "Karl Franz",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Emperor of the Empire and Elector Count of Reikland.",
        "description": "Karl Franz is the Emperor of the Empire, uniting elector counts and field armies while riding the griffon Deathclaw in defense of the Old World against Chaos and rebellion.",
        "aliases": []
    },
    {
        "slug": "sigmar",
        "name": "Sigmar",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Founder-god of the Empire.",
        "description": "Sigmar is the legendary unifier who forged the Empire from tribal humans and became its patron god, his hammer Ghal Maraz a symbol of Imperial faith and law.",
        "aliases": []
    },
    {
        "slug": "archaon-the-everchosen",
        "name": "Archaon the Everchosen",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Chaos champion destined to end the world.",
        "description": "Archaon the Everchosen is the thirteenth Everchosen of Chaos, bearer of the Crown of Domination, whose rise marked the End Times and the final assault on the Old World.",
        "aliases": []
    },
    {
        "slug": "grimgor-ironhide",
        "name": "Grimgor Ironhide",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Legendary orc warboss of the greenskins.",
        "description": "Grimgor Ironhide is a brutal black-orc warboss whose undefeated streak and Waaagh! campaigns smashed into Kislev, the Empire, and Chaos armies across the Old World.",
        "aliases": []
    },
    {
        "slug": "tyrion",
        "name": "Tyrion",
        "type": "person",
        "evidence": "fiction",
        "short_description": "High Elf Defender of Ulthuan.",
        "description": "Tyrion is the greatest living warrior of Ulthuan, Champion of the Everqueen, whose duels and battlefield leadership shield the high elves from daemonic invasion.",
        "aliases": []
    },
    {
        "slug": "teclis",
        "name": "Teclis",
        "type": "person",
        "evidence": "fiction",
        "short_description": "High Elf archmage and loremaster.",
        "description": "Teclis is Tyrion's twin and the most powerful living high elf wizard, who taught human battle magic at the Empire's colleges and advised kings against Chaos.",
        "aliases": []
    },
    {
        "slug": "thanquol",
        "name": "Thanquol",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Notorious skaven grey seer schemer.",
        "description": "Thanquol is a cowardly but cunning skaven grey seer whose plots, warpstone schemes, and bodyguard Boneripper embody skaven treachery beneath the Old World.",
        "aliases": []
    },
    {
        "slug": "ulthuan",
        "name": "Ulthuan",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Island continent homeland of the high elves.",
        "description": "Ulthuan is the ring-shaped elven homeland of towering cities and vortex magic, anchoring the world's defenses against Chaos while high elf fleets patrol the seas.",
        "aliases": []
    },
    {
        "slug": "altdorf",
        "name": "Altdorf",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Imperial capital on the River Reik.",
        "description": "Altdorf is the capital of the Empire and seat of the Emperor, home to the Colleges of Magic, engineer schools, and the political heart of Karl Franz's realm.",
        "aliases": []
    },
    {
        "slug": "middenheim",
        "name": "Middenheim",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Wolf-god city of the northern Empire.",
        "description": "Middenheim is the fortified city of Ulric worship in Middenland, a northern bastion whose white wolves and templars guard passes against Chaos and beastmen.",
        "aliases": []
    },
    {
        "slug": "sylvania",
        "name": "Sylvania",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Undead province of vampire counts.",
        "description": "Sylvania is the fog-shrouded Imperial province ruled by vampire counts, where necromantic towers and mass graves threaten the Empire from within its own borders.",
        "aliases": []
    },
    {
        "slug": "colleges-of-magic",
        "name": "Colleges of Magic",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Imperial schools of battle wizards.",
        "description": "The Colleges of Magic in Altdorf train battle wizards in eight sanctioned winds of magic, a fragile Imperial institution founded with high elf guidance against Chaos.",
        "aliases": []
    },
    {
        "slug": "witch-hunters",
        "name": "Witch Hunters",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Sigmarite inquisitors of the Empire.",
        "description": "Witch Hunters of the Sigmarite church root out heresy, necromancy, and Chaos cults across the Empire, feared by citizens and mutants alike for ruthless purges.",
        "aliases": []
    },
    {
        "slug": "warhammer-fantasy-figures",
        "name": "Warhammer Fantasy figures",
        "type": "topic",
        "short_description": "People and named forces central to Warhammer Fantasy.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Warhammer Fantasy."
    },
    {
        "slug": "warhammer-fantasy-places",
        "name": "Warhammer Fantasy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Warhammer Fantasy.",
        "description": "Places, regions, and built sites that give Warhammer Fantasy its map — where events and figures concentrate."
    },
    {
        "slug": "warhammer-fantasy-events",
        "name": "Warhammer Fantasy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Warhammer Fantasy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Warhammer Fantasy timeline."
    },
    {
        "slug": "warhammer-fantasy-objects",
        "name": "Warhammer Fantasy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Warhammer Fantasy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Warhammer Fantasy."
    },
    {
        "slug": "warhammer-fantasy-factions",
        "name": "Warhammer Fantasy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Warhammer Fantasy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Warhammer Fantasy."
    },
    {
        "slug": "warhammer-fantasy-concepts",
        "name": "Warhammer Fantasy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Warhammer Fantasy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Warhammer Fantasy readable as a lore graph."
    },
    {
        "slug": "warhammer-fantasy-eras",
        "name": "Warhammer Fantasy eras",
        "type": "event",
        "short_description": "Periodization for Warhammer Fantasy.",
        "description": "Named eras and phases that help readers track how Warhammer Fantasy changes across time."
    },
    {
        "slug": "warhammer-fantasy-works",
        "name": "Warhammer Fantasy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Warhammer Fantasy.",
        "description": "Primary works and adaptations through which most audiences encounter Warhammer Fantasy."
    },
    {
        "slug": "warhammer-fantasy-symbols",
        "name": "Warhammer Fantasy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Warhammer Fantasy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Warhammer Fantasy."
    },
    {
        "slug": "warhammer-fantasy-controversies",
        "name": "Warhammer Fantasy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Warhammer Fantasy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Warhammer Fantasy argumentative."
    }
];

const relationships = [
    [
        "games-workshop",
        "warhammer-fantasy",
        "created",
        "Games Workshop created Warhammer Fantasy.",
        0.99,
        0.99
    ],
    [
        "games-workshop",
        "warhammer-fantasy",
        "publishes",
        "Games Workshop publishes Warhammer Fantasy products.",
        0.98,
        0.97
    ],
    [
        "old-world",
        "warhammer-fantasy",
        "part_of",
        "The Old World is the core Warhammer Fantasy setting.",
        0.99,
        0.98
    ],
    [
        "end-times",
        "warhammer-fantasy",
        "part_of",
        "The End Times concluded classic Warhammer Fantasy.",
        0.97,
        0.94
    ],
    [
        "end-times",
        "old-world",
        "caused",
        "The End Times destroyed the Old World setting.",
        0.96,
        0.93
    ],
    [
        "the-empire",
        "old-world",
        "located_in",
        "The Empire dominates the Old World's heartland.",
        0.99,
        0.98
    ],
    [
        "bretonnia",
        "old-world",
        "located_in",
        "Bretonnia lies west of the Empire in the Old World.",
        0.98,
        0.96
    ],
    [
        "kislev",
        "old-world",
        "located_in",
        "Kislev guards the Old World's northeastern frontier.",
        0.98,
        0.96
    ],
    [
        "dwarfs",
        "old-world",
        "located_in",
        "Dwarf holds span the World's Edge Mountains.",
        0.98,
        0.96
    ],
    [
        "skaven",
        "old-world",
        "located_in",
        "Skaven tunnel beneath the entire Old World.",
        0.97,
        0.94
    ],
    [
        "greenskins",
        "old-world",
        "related_to",
        "Greenskin tribes raid across the Old World.",
        0.97,
        0.94
    ],
    [
        "lizardmen",
        "old-world",
        "related_to",
        "Lizardmen act from Lustria beyond the Old World's core.",
        0.93,
        0.88
    ],
    [
        "karl-franz",
        "the-empire",
        "leads",
        "Karl Franz is Emperor of the Empire.",
        0.99,
        0.98
    ],
    [
        "sigmar",
        "the-empire",
        "found",
        "Sigmar founded the Empire and became its god.",
        0.99,
        0.98
    ],
    [
        "karl-franz",
        "altdorf",
        "located_in",
        "Karl Franz rules from Altdorf.",
        0.97,
        0.94
    ],
    [
        "altdorf",
        "the-empire",
        "part_of",
        "Altdorf is the Imperial capital.",
        0.99,
        0.98
    ],
    [
        "middenheim",
        "the-empire",
        "part_of",
        "Middenheim is a major Imperial city-state.",
        0.98,
        0.96
    ],
    [
        "sylvania",
        "the-empire",
        "part_of",
        "Sylvania is an Imperial province.",
        0.98,
        0.96
    ],
    [
        "vampire-counts",
        "sylvania",
        "located_in",
        "Vampire counts rule Sylvania.",
        0.98,
        0.96
    ],
    [
        "vampire-counts",
        "the-empire",
        "opposed_by",
        "Vampire counts threaten the Empire from within.",
        0.97,
        0.94
    ],
    [
        "colleges-of-magic",
        "the-empire",
        "part_of",
        "The Colleges serve the Empire from Altdorf.",
        0.98,
        0.96
    ],
    [
        "colleges-of-magic",
        "altdorf",
        "located_in",
        "The Colleges of Magic stand in Altdorf.",
        0.98,
        0.96
    ],
    [
        "teclis",
        "colleges-of-magic",
        "influenced",
        "Teclis helped establish Imperial battle magic.",
        0.96,
        0.93
    ],
    [
        "witch-hunters",
        "the-empire",
        "part_of",
        "Witch Hunters serve Sigmarite authority in the Empire.",
        0.97,
        0.94
    ],
    [
        "witch-hunters",
        "chaos",
        "opposed_by",
        "Witch Hunters purge Chaos cults.",
        0.96,
        0.93
    ],
    [
        "high-elves",
        "ulthuan",
        "located_in",
        "High elves rule Ulthuan.",
        0.99,
        0.98
    ],
    [
        "tyrion",
        "high-elves",
        "member_of",
        "Tyrion is Ulthuan's greatest champion.",
        0.98,
        0.96
    ],
    [
        "teclis",
        "high-elves",
        "member_of",
        "Teclis is a high elf loremaster.",
        0.98,
        0.96
    ],
    [
        "tyrion",
        "ulthuan",
        "located_in",
        "Tyrion defends Ulthuan.",
        0.97,
        0.94
    ],
    [
        "the-empire",
        "high-elves",
        "supports",
        "The Empire and high elves ally against Chaos.",
        0.94,
        0.9
    ],
    [
        "chaos",
        "chaos-gods",
        "motivated_by",
        "Chaos warbands serve the Chaos Gods.",
        0.99,
        0.98
    ],
    [
        "archaon-the-everchosen",
        "chaos",
        "leads",
        "Archaon leads the Forces of Chaos.",
        0.99,
        0.98
    ],
    [
        "archaon-the-everchosen",
        "end-times",
        "involved",
        "Archaon's rise drove the End Times.",
        0.97,
        0.94
    ],
    [
        "great-war-against-chaos",
        "the-empire",
        "occurred_at",
        "The Great War threatened the Empire's survival.",
        0.96,
        0.93
    ],
    [
        "chaos",
        "the-empire",
        "opposed_by",
        "The Empire stands as Chaos's central foe.",
        0.98,
        0.96
    ],
    [
        "chaos",
        "kislev",
        "opposed_by",
        "Kislev bears the brunt of northern Chaos incursions.",
        0.97,
        0.94
    ],
    [
        "skaven",
        "warpstone",
        "uses",
        "Skaven technology runs on warpstone.",
        0.98,
        0.96
    ],
    [
        "thanquol",
        "skaven",
        "member_of",
        "Thanquol is a skaven grey seer.",
        0.98,
        0.96
    ],
    [
        "skaven",
        "the-empire",
        "opposed_by",
        "Skaven undermine the Empire from below.",
        0.97,
        0.94
    ],
    [
        "grimgor-ironhide",
        "greenskins",
        "leads",
        "Grimgor is the greatest greenskin warboss.",
        0.98,
        0.96
    ],
    [
        "greenskins",
        "the-empire",
        "opposed_by",
        "Greenskin Waaaghs! crash into Imperial lands.",
        0.97,
        0.94
    ],
    [
        "greenskins",
        "dwarfs",
        "opposed_by",
        "Orc wars grind against dwarf holds.",
        0.97,
        0.94
    ],
    [
        "dwarfs",
        "the-empire",
        "supports",
        "Dwarfs and the Empire share long alliances.",
        0.95,
        0.91
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-figures",
        "contains",
        "Warhammer Fantasy figures is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-places",
        "contains",
        "Warhammer Fantasy places is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-events",
        "contains",
        "Warhammer Fantasy events is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-objects",
        "contains",
        "Warhammer Fantasy objects & artifacts is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-factions",
        "contains",
        "Warhammer Fantasy factions & groups is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-concepts",
        "contains",
        "Warhammer Fantasy concepts is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-eras",
        "contains",
        "Warhammer Fantasy eras is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-works",
        "contains",
        "Warhammer Fantasy works & media is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-symbols",
        "contains",
        "Warhammer Fantasy symbols is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ],
    [
        "warhammer-fantasy",
        "warhammer-fantasy-controversies",
        "contains",
        "Warhammer Fantasy controversies is a primary trailhead under Warhammer Fantasy.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
