/*
 * One Piece subject data — entities + explicit relationships.
 *
 * Mentions inside descriptions are expanded automatically by
 * scripts/lib/expandMentions.js into additional connected_to edges
 * without creating duplicate entities.
 */

const entities = [];

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

/*
 * ============================================================
 * CORE / CREATION / PUBLICATION
 * ============================================================
 */

entity(
    "one-piece",
    "One Piece",
    "work",
    "The legendary treasure and the manga and anime franchise built around the search for it.",
    "One Piece is the central treasure and mystery around which Eiichiro Oda's story is built. The series follows Monkey D. Luffy and his crew as they travel through the Grand Line searching for the treasure and uncovering the hidden history of the world."
);

entity(
    "eiichiro-oda",
    "Eiichiro Oda",
    "person",
    "The creator, writer and illustrator of One Piece.",
    "Eiichiro Oda is the creator, writer and illustrator of the One Piece manga."
);

entity(
    "weekly-shonen-jump",
    "Weekly Shonen Jump",
    "work",
    "The manga magazine in which One Piece began serialization.",
    "Weekly Shonen Jump is the Japanese manga magazine published by Shueisha in which One Piece began serialization in 1997."
);

entity(
    "shueisha",
    "Shueisha",
    "organization",
    "The Japanese publishing company associated with One Piece and Weekly Shonen Jump.",
    "Shueisha is the Japanese publisher behind Weekly Shonen Jump and the One Piece manga."
);

entity(
    "romance-dawn",
    "Romance Dawn",
    "work",
    "Prototype stories created by Eiichiro Oda before One Piece.",
    "Romance Dawn refers to prototype stories created by Eiichiro Oda before the serialization of One Piece."
);

entity(
    "one-piece-anime",
    "One Piece Anime",
    "work",
    "The long-running television anime adaptation of One Piece.",
    "The One Piece television anime began broadcasting in Japan in 1999 and adapts Eiichiro Oda's manga."
);

entity(
    "toei-animation",
    "Toei Animation",
    "organization",
    "The animation studio responsible for the One Piece television anime.",
    "Toei Animation produces the long-running One Piece television anime."
);

entity(
    "one-piece-live-action",
    "One Piece Live-Action",
    "work",
    "The live-action television adaptation of One Piece.",
    "The live-action One Piece television series adapts the early adventures of Monkey D. Luffy and the Straw Hat Pirates."
);

entity(
    "netflix",
    "Netflix",
    "organization",
    "The streaming company associated with the One Piece live-action adaptation.",
    "Netflix distributes and is associated with the production of the live-action One Piece series."
);

entity(
    "one-piece-manga",
    "One Piece Manga",
    "work",
    "The original serialized manga created by Eiichiro Oda.",
    "The One Piece manga is the original source work created and illustrated by Eiichiro Oda."
);

/*
 * ============================================================
 * STRAW HAT PIRATES
 * ============================================================
 */

entity(
    "monkey-d-luffy",
    "Monkey D. Luffy",
    "person",
    "Captain of the Straw Hat Pirates and protagonist of One Piece.",
    "Monkey D. Luffy is the captain of the Straw Hat Pirates. His dream is to become the Pirate King and find the legendary One Piece."
);

entity(
    "roronoa-zoro",
    "Roronoa Zoro",
    "person",
    "The swordsman of the Straw Hat Pirates.",
    "Roronoa Zoro is one of Luffy's earliest crewmates and the swordsman of the Straw Hat Pirates. He seeks to become the world's greatest swordsman."
);

entity(
    "nami",
    "Nami",
    "person",
    "The navigator of the Straw Hat Pirates.",
    "Nami is the navigator of the Straw Hat Pirates and has an extraordinary talent for navigation and cartography."
);

entity(
    "usopp",
    "Usopp",
    "person",
    "The sniper and storyteller of the Straw Hat Pirates.",
    "Usopp is the Straw Hat Pirates' sniper and a character whose exaggerated stories gradually become intertwined with genuine acts of courage."
);

entity(
    "sanji",
    "Sanji",
    "person",
    "The cook of the Straw Hat Pirates.",
    "Sanji is the cook of the Straw Hat Pirates and a powerful fighter who dreams of finding the legendary All Blue."
);

entity(
    "tony-tony-chopper",
    "Tony Tony Chopper",
    "person",
    "The doctor of the Straw Hat Pirates.",
    "Tony Tony Chopper is a reindeer who gained human-like abilities after eating a Devil Fruit and became the Straw Hat Pirates' doctor."
);

entity(
    "nico-robin",
    "Nico Robin",
    "person",
    "An archaeologist whose ability to read Poneglyphs makes her central to the world's lost history.",
    "Nico Robin is an archaeologist and member of the Straw Hat Pirates. Her ability to read Poneglyphs makes her uniquely important to uncovering the Void Century."
);

entity(
    "franky",
    "Franky",
    "person",
    "The shipwright of the Straw Hat Pirates.",
    "Franky is the shipwright of the Straw Hat Pirates and the builder of the Thousand Sunny."
);

entity(
    "brook",
    "Brook",
    "person",
    "The musician of the Straw Hat Pirates.",
    "Brook is a musician and swordsman who joined the Straw Hat Pirates after returning from death through the powers of his Devil Fruit."
);

entity(
    "jinbe",
    "Jinbe",
    "person",
    "A fish-man helmsman and member of the Straw Hat Pirates.",
    "Jinbe is a fish-man martial artist and helmsman who eventually becomes a member of the Straw Hat Pirates."
);

entity(
    "thousand-sunny",
    "Thousand Sunny",
    "object",
    "The second major ship of the Straw Hat Pirates.",
    "The Thousand Sunny is the ship built by Franky for the Straw Hat Pirates after the Going Merry."
);

entity(
    "going-merry",
    "Going Merry",
    "object",
    "The first major ship of the Straw Hat Pirates.",
    "The Going Merry was the first major ship of the Straw Hat Pirates and became deeply associated with the crew's early adventures."
);

/*
 * ============================================================
 * ROGER / OLD ERA
 * ============================================================
 */

entity(
    "gol-d-roger",
    "Gol D. Roger",
    "person",
    "The Pirate King whose final voyage reached Laugh Tale.",
    "Gol D. Roger was the Pirate King. His execution and final words helped begin the Great Pirate Era, while his crew's voyage to Laugh Tale became central to the mystery of One Piece."
);

entity(
    "roger-pirates",
    "Roger Pirates",
    "organization",
    "The pirate crew led by Gol D. Roger.",
    "The Roger Pirates were the crew that sailed with Gol D. Roger and ultimately reached Laugh Tale."
);

entity(
    "silvers-rayleigh",
    "Silvers Rayleigh",
    "person",
    "Roger's first mate and one of the legendary figures of the previous pirate era.",
    "Silvers Rayleigh was the first mate of the Roger Pirates and later became an important mentor to Monkey D. Luffy."
);

entity(
    "shanks",
    "Shanks",
    "person",
    "A Yonko and former apprentice aboard the Roger Pirates.",
    "Shanks is one of the Four Emperors and was once an apprentice aboard the Roger Pirates."
);

entity(
    "whitebeard",
    "Edward Newgate",
    "person",
    "The pirate known as Whitebeard and one of the strongest figures of the Great Pirate Era.",
    "Edward Newgate, known as Whitebeard, was one of the world's most powerful pirates and a major rival of Roger."
);

entity(
    "whitebeard-pirates",
    "Whitebeard Pirates",
    "organization",
    "The pirate crew and extended family commanded by Whitebeard.",
    "The Whitebeard Pirates were commanded by Edward Newgate and operated more like a family than a conventional pirate organization."
);

entity(
    "portgas-d-ace",
    "Portgas D. Ace",
    "person",
    "Luffy's sworn brother and the biological son of Gol D. Roger.",
    "Portgas D. Ace was the adopted brother of Monkey D. Luffy and Sabo and the biological son of Gol D. Roger."
);

entity(
    "great-pirate-era",
    "Great Pirate Era",
    "event",
    "The age of piracy triggered by Gol D. Roger's final declaration.",
    "The Great Pirate Era began after Gol D. Roger revealed that his treasure was waiting to be found, inspiring countless pirates to sail toward the Grand Line."
);

entity(
    "marineford-war",
    "Marineford War",
    "event",
    "The massive war fought over the execution of Portgas D. Ace.",
    "The Marineford War brought the Whitebeard Pirates into direct conflict with the World Government and Marines over the execution of Portgas D. Ace."
);

entity(
    "god-valley",
    "God Valley Incident",
    "event",
    "A mysterious historical incident involving Rocks, Roger and Garp.",
    "The God Valley Incident was a major event from the previous era involving the Rocks Pirates, Gol D. Roger and Monkey D. Garp."
);

entity(
    "rocks-d-xebec",
    "Rocks D. Xebec",
    "person",
    "The notorious pirate captain associated with the Rocks Pirates.",
    "Rocks D. Xebec was the captain of the Rocks Pirates and a major threat during the era before Roger became Pirate King."
);

entity(
    "rocks-pirates",
    "Rocks Pirates",
    "organization",
    "A notorious pirate crew that included several future legends.",
    "The Rocks Pirates were an exceptionally powerful pirate crew active before the rise of Gol D. Roger."
);

/*
 * ============================================================
 * LUFFY FAMILY / REVOLUTION
 * ============================================================
 */

entity(
    "monkey-d-dragon",
    "Monkey D. Dragon",
    "person",
    "Leader of the Revolutionary Army and Luffy's father.",
    "Monkey D. Dragon is the leader of the Revolutionary Army and the father of Monkey D. Luffy."
);

entity(
    "monkey-d-garp",
    "Monkey D. Garp",
    "person",
    "Legendary Marine hero and grandfather of Luffy.",
    "Monkey D. Garp is a legendary Marine hero and the grandfather of Monkey D. Luffy."
);

entity(
    "revolutionary-army",
    "Revolutionary Army",
    "organization",
    "The organization seeking to overthrow the World Government.",
    "The Revolutionary Army opposes the World Government and is led by Monkey D. Dragon."
);

entity(
    "sabo",
    "Sabo",
    "person",
    "Luffy's sworn brother and chief of staff of the Revolutionary Army.",
    "Sabo is one of Monkey D. Luffy's sworn brothers and serves as chief of staff of the Revolutionary Army."
);

/*
 * ============================================================
 * MAJOR PIRATES / RIVALS
 * ============================================================
 */

entity(
    "marshall-d-teach",
    "Marshall D. Teach",
    "person",
    "The pirate known as Blackbeard and one of the central antagonistic figures.",
    "Marshall D. Teach, known as Blackbeard, is a powerful pirate whose rise intersects with the history of Whitebeard, Devil Fruits and the struggle for the One Piece."
);

entity(
    "blackbeard-pirates",
    "Blackbeard Pirates",
    "organization",
    "The pirate crew led by Marshall D. Teach.",
    "The Blackbeard Pirates are led by Marshall D. Teach and have become one of the major powers in the New World."
);

entity(
    "kaido",
    "Kaido",
    "person",
    "A former Yonko whose rule over Wano became central to the New World era.",
    "Kaido was one of the Four Emperors and controlled Wano through an alliance with Orochi."
);

entity(
    "big-mom",
    "Charlotte Linlin",
    "person",
    "The pirate known as Big Mom and former Yonko.",
    "Charlotte Linlin, known as Big Mom, was one of the Four Emperors and ruled a vast territory from Totto Land."
);

entity(
    "trafalgar-law",
    "Trafalgar D. Water Law",
    "person",
    "A pirate captain and ally of Luffy during major New World conflicts.",
    "Trafalgar Law is a pirate captain whose alliance with Luffy played an important role in the downfall of major New World powers."
);

entity(
    "eustass-kid",
    "Eustass Kid",
    "person",
    "A rival pirate captain from the Worst Generation.",
    "Eustass Kid is a powerful pirate captain and member of the Worst Generation."
);

/*
 * ============================================================
 * WORLD GOVERNMENT / MARINES
 * ============================================================
 */

entity(
    "world-government",
    "World Government",
    "organization",
    "The dominant global political organization in the One Piece world.",
    "The World Government controls much of the known world and is deeply connected to the suppression of historical knowledge."
);

entity(
    "marines",
    "Marines",
    "organization",
    "The military force serving the World Government.",
    "The Marines are the primary military organization enforcing the authority of the World Government."
);

entity(
    "celestial-dragons",
    "Celestial Dragons",
    "organization",
    "The hereditary nobles at the top of the World Government's social order.",
    "The Celestial Dragons are descendants of the founders of the World Government and occupy an extraordinary position of privilege."
);

entity(
    "five-elders",
    "Five Elders",
    "organization",
    "The highest-ranking public leaders of the World Government.",
    "The Five Elders are the highest-ranking known public authorities within the World Government."
);

entity(
    "imu",
    "Imu",
    "person",
    "A mysterious figure associated with the hidden highest level of World Government power.",
    "Imu is a mysterious figure connected to the deepest secrets of the World Government and the hidden history of the world."
);

entity(
    "cipher-pol",
    "Cipher Pol",
    "organization",
    "A collection of intelligence agencies operating for the World Government.",
    "Cipher Pol is a group of World Government intelligence organizations responsible for covert operations."
);

entity(
    "cp9",
    "CP9",
    "organization",
    "A secret Cipher Pol assassination unit.",
    "CP9 is a secret World Government intelligence and assassination organization that becomes central during the Water 7 and Enies Lobby storyline."
);

entity(
    "cp0",
    "CP0",
    "organization",
    "The strongest known Cipher Pol intelligence organization.",
    "CP0 is an elite World Government intelligence organization operating directly under the authority of the highest levels of the government."
);

entity(
    "akainu",
    "Sakazuki",
    "person",
    "The Marine admiral who became Fleet Admiral.",
    "Sakazuki, known as Akainu, is a powerful Marine whose absolute interpretation of justice places him in direct conflict with pirates."
);

entity(
    "kuzan",
    "Kuzan",
    "person",
    "The former Marine admiral known as Aokiji.",
    "Kuzan, formerly known as Admiral Aokiji, left the Marines after losing the Fleet Admiral position to Sakazuki."
);

entity(
    "smoker",
    "Smoker",
    "person",
    "A Marine officer who repeatedly pursues Luffy.",
    "Smoker is a Marine officer who repeatedly crosses paths with Monkey D. Luffy."
);

/*
 * ============================================================
 * LOST HISTORY / ANCIENT WORLD
 * ============================================================
 */

entity(
    "void-century",
    "Void Century",
    "event",
    "A hundred-year period of history largely erased from the world's records.",
    "The Void Century is a mysterious hundred-year period whose history has been deliberately obscured and whose events appear central to the origins of the modern world."
);

entity(
    "ancient-kingdom",
    "Ancient Kingdom",
    "organization",
    "The mysterious civilization associated with the Void Century.",
    "The Ancient Kingdom was a powerful civilization that existed during the Void Century and became an enemy of the coalition that eventually formed the World Government."
);

entity(
    "joy-boy",
    "Joy Boy",
    "person",
    "A mysterious figure from the Void Century whose legacy reaches into the present.",
    "Joy Boy was a major figure from the Void Century whose promises, failures and legacy are connected to the world's deepest mysteries."
);

entity(
    "nika",
    "Nika",
    "person",
    "The legendary figure associated with the Sun God tradition.",
    "Nika is a legendary figure associated with the idea of a liberating warrior and with the history of the Devil Fruit later connected to Luffy."
);

entity(
    "will-of-d",
    "Will of D.",
    "concept",
    "The mysterious inherited initial carried by several important figures.",
    "The Will of D. is a recurring mystery associated with several major characters and with conflicts against the world's established order."
);

entity(
    "poneglyphs",
    "Poneglyphs",
    "object",
    "Ancient indestructible stones preserving fragments of lost history.",
    "Poneglyphs are ancient stone inscriptions created to preserve information that survived the suppression of the Void Century."
);

entity(
    "road-poneglyphs",
    "Road Poneglyphs",
    "object",
    "Special Poneglyphs that provide clues to reaching Laugh Tale.",
    "Road Poneglyphs are a special group of red Poneglyphs whose information can be combined to determine the location of Laugh Tale."
);

entity(
    "rio-poneglyph",
    "Rio Poneglyph",
    "object",
    "The name associated with the complete historical record reconstructed from Poneglyphs.",
    "The Rio Poneglyph represents the complete historical truth that can be reconstructed from the world's scattered Poneglyph inscriptions."
);

entity(
    "voice-of-all-things",
    "Voice of All Things",
    "concept",
    "A mysterious ability allowing certain individuals to perceive or understand voices beyond ordinary speech.",
    "The Voice of All Things is a rare ability associated with several figures who can perceive information contained in unusual beings or objects."
);

entity(
    "ancient-weapons",
    "Ancient Weapons",
    "object",
    "Three legendary weapons connected to the world's ancient history.",
    "The Ancient Weapons are legendary powers known as Pluton, Poseidon and Uranus."
);

entity(
    "pluton",
    "Pluton",
    "object",
    "A legendary Ancient Weapon associated with enormous destructive power.",
    "Pluton is one of the three Ancient Weapons and is associated with the history of Wano and the lost civilization."
);

entity(
    "poseidon",
    "Poseidon",
    "object",
    "An Ancient Weapon embodied by the ability to communicate with Sea Kings.",
    "Poseidon is one of the Ancient Weapons and is connected to the mermaid princess who can command Sea Kings."
);

entity(
    "uranus",
    "Uranus",
    "object",
    "The least clearly explained of the three Ancient Weapons.",
    "Uranus is named as one of the three Ancient Weapons, but its full nature remains one of the major mysteries of the story."
);

entity(
    "mermaid-princess-shirahoshi",
    "Shirahoshi",
    "person",
    "The mermaid princess whose power is connected to Poseidon.",
    "Shirahoshi is the mermaid princess of Fish-Man Island and possesses the power identified with the Ancient Weapon Poseidon."
);

entity(
    "fish-man-island",
    "Fish-Man Island",
    "place",
    "The underwater civilization located beneath the Red Line.",
    "Fish-Man Island is an underwater kingdom beneath the Red Line and an important location in the history of Joy Boy and Poseidon."
);

/*
 * ============================================================
 * DEVIL FRUITS / HAKI
 * ============================================================
 */

entity(
    "devil-fruits",
    "Devil Fruits",
    "object",
    "Mysterious fruits that grant supernatural abilities.",
    "Devil Fruits grant extraordinary abilities to their users while imposing the well-known weakness associated with the sea."
);

entity(
    "gomu-gomu-no-mi",
    "Gum-Gum Fruit",
    "object",
    "The Devil Fruit long believed to be responsible for Luffy's rubber-like abilities.",
    "The fruit known publicly as the Gum-Gum Fruit is later revealed to have a far more significant identity and history."
);

entity(
    "hito-hito-no-mi-model-nika",
    "Human-Human Fruit, Model: Nika",
    "object",
    "The Devil Fruit connected to the legendary figure Nika.",
    "The Human-Human Fruit, Model: Nika is the true identity associated with the fruit whose powers were long understood as the Gum-Gum Fruit."
);

entity(
    "haki",
    "Haki",
    "concept",
    "A supernatural willpower system used by powerful fighters.",
    "Haki is a power system based on spiritual force and includes Observation, Armament and Conqueror's Haki."
);

entity(
    "observation-haki",
    "Observation Haki",
    "concept",
    "A form of Haki associated with sensing presence and intent.",
    "Observation Haki allows users to sense living beings and, at advanced levels, perceive aspects of events before they occur."
);

entity(
    "armament-haki",
    "Armament Haki",
    "concept",
    "A form of Haki used to strengthen attacks and defense.",
    "Armament Haki allows users to harden themselves or their attacks with spiritual force."
);

entity(
    "conquerors-haki",
    "Conqueror's Haki",
    "concept",
    "A rare form of Haki associated with overwhelming willpower.",
    "Conqueror's Haki is an exceptionally rare ability associated with individuals possessing qualities of a supreme leader."
);

/*
 * ============================================================
 * PLACES
 * ============================================================
 */

entity(
    "grand-line",
    "Grand Line",
    "place",
    "The dangerous sea route running through the One Piece world.",
    "The Grand Line is the central ocean route through which pirates travel toward the New World and ultimately toward Laugh Tale."
);

entity(
    "red-line",
    "Red Line",
    "place",
    "The massive continental structure dividing the world's seas.",
    "The Red Line is a gigantic landmass that circles the planet and intersects the Grand Line."
);

entity(
    "reverse-mountain",
    "Reverse Mountain",
    "place",
    "The unusual mountain route used to enter the Grand Line.",
    "Reverse Mountain is one of the principal entrances to the Grand Line."
);

entity(
    "wano-country",
    "Wano Country",
    "place",
    "An isolated country deeply connected to Poneglyphs and the Ancient Weapons.",
    "Wano Country is an isolated nation with a long history connected to Poneglyphs, the Kozuki family and Pluton."
);

entity(
    "egghead",
    "Egghead",
    "place",
    "The futuristic island associated with Dr. Vegapunk.",
    "Egghead is the futuristic island where Dr. Vegapunk's research facility is located."
);

entity(
    "ohara",
    "Ohara",
    "place",
    "The island home of scholars who researched the Void Century.",
    "Ohara was an island of archaeologists whose investigation into the Void Century brought the island into conflict with the World Government."
);

entity(
    "water-seven",
    "Water 7",
    "place",
    "A major shipbuilding city visited by the Straw Hat Pirates.",
    "Water 7 is a shipbuilding city that becomes central to the story of the Going Merry, Franky and the World Government's pursuit of Robin."
);

entity(
    "enies-lobby",
    "Enies Lobby",
    "place",
    "A World Government judicial stronghold.",
    "Enies Lobby is a World Government judicial island and the site of the Straw Hat Pirates' declaration of war against the World Government."
);

entity(
    "marineford",
    "Marineford",
    "place",
    "The Marine headquarters and battlefield of the Paramount War.",
    "Marineford is the Marine stronghold where the war over Portgas D. Ace became one of the defining events of the era."
);

entity(
    "sabaody-archipelago",
    "Sabaody Archipelago",
    "place",
    "An island chain near the Red Line where pirates prepare to enter the New World.",
    "The Sabaody Archipelago is located near the Red Line and serves as a major crossroads for pirates."
);

entity(
    "dressrosa",
    "Dressrosa",
    "place",
    "A kingdom ruled by Donquixote Doflamingo.",
    "Dressrosa is the kingdom where Luffy and Law confront Donquixote Doflamingo and expose a major part of the World Government's underworld."
);

entity(
    "whole-cake-island",
    "Whole Cake Island",
    "place",
    "The central island of Big Mom's territory.",
    "Whole Cake Island is the center of Big Mom's territory and the setting of the Straw Hats' attempt to retrieve Sanji."
);

entity(
    "alabasta",
    "Alabasta",
    "place",
    "A desert kingdom caught in a conflict engineered by Crocodile.",
    "Alabasta is a desert kingdom whose civil war becomes one of the Straw Hat Pirates' earliest major confrontations with a Warlord."
);

/*
 * ============================================================
 * MAJOR EVENTS / ARCS
 * ============================================================
 */

entity(
    "ohara-buster-call",
    "Destruction of Ohara",
    "event",
    "The World Government's destruction of Ohara after scholars investigated forbidden history.",
    "The destruction of Ohara became a defining event in Nico Robin's life and demonstrated the World Government's determination to suppress Void Century research."
);

entity(
    "enies-lobby-conflict",
    "Enies Lobby Conflict",
    "event",
    "The Straw Hat Pirates' assault on Enies Lobby to rescue Nico Robin.",
    "The Enies Lobby conflict culminated in the Straw Hat Pirates openly declaring war against the World Government to rescue Nico Robin."
);

entity(
    "water-seven-conflict",
    "Water 7 Conflict",
    "event",
    "The conflict surrounding Robin, CP9 and the Going Merry.",
    "The Water 7 conflict transformed the Straw Hat Pirates' relationship with the World Government and led directly into the Enies Lobby confrontation."
);

entity(
    "alabasta-conflict",
    "Alabasta Conflict",
    "event",
    "The Straw Hats' struggle against Crocodile and Baroque Works.",
    "The Alabasta conflict involved a planned civil war, Baroque Works and the attempt to seize control of an ancient kingdom."
);

entity(
    "dressrosa-conflict",
    "Dressrosa Conflict",
    "event",
    "Luffy and Law's confrontation with Donquixote Doflamingo.",
    "The Dressrosa conflict exposed the political and criminal networks connecting Doflamingo to the World Government and the New World."
);

entity(
    "whole-cake-conflict",
    "Whole Cake Island Conflict",
    "event",
    "The Straw Hats' attempt to retrieve Sanji from Big Mom's territory.",
    "The Whole Cake Island conflict brought the Straw Hats into direct confrontation with Big Mom and her enormous pirate empire."
);

entity(
    "wano-conflict",
    "Wano Conflict",
    "event",
    "The massive alliance war against Kaido and the forces occupying Wano.",
    "The Wano conflict united pirates, samurai and other forces against Kaido and Orochi and became central to Luffy's transformation."
);

entity(
    "egghead-incident",
    "Egghead Incident",
    "event",
    "A major confrontation involving the Straw Hats, Vegapunk and the World Government.",
    "The Egghead Incident brings the Straw Hat Pirates into direct conflict with major World Government forces while revealing important information about the ancient world."
);

/*
 * ============================================================
 * OTHER IMPORTANT FIGURES
 * ============================================================
 */

entity(
    "donquixote-doflamingo",
    "Donquixote Doflamingo",
    "person",
    "A former Warlord and ruler of Dressrosa.",
    "Donquixote Doflamingo was a former Warlord of the Sea and the ruler of Dressrosa whose criminal network reached deep into the New World."
);

entity(
    "crocodile",
    "Crocodile",
    "person",
    "A former Warlord who attempted to seize Alabasta.",
    "Crocodile was a former Warlord of the Sea and the leader of Baroque Works."
);

entity(
    "dr-vegapunk",
    "Dr. Vegapunk",
    "person",
    "The world's foremost scientific genius.",
    "Dr. Vegapunk is the world's foremost scientist and a key figure in research into Devil Fruits, technology and the history of the world."
);

entity(
    "kozuki-oden",
    "Kozuki Oden",
    "person",
    "A legendary samurai who sailed with both Whitebeard and Roger.",
    "Kozuki Oden was a samurai of Wano who joined Whitebeard and later Roger, ultimately reaching Laugh Tale."
);

entity(
    "kozuki-family",
    "Kozuki Family",
    "organization",
    "The ruling family of Wano and creators of the Poneglyph writing tradition.",
    "The Kozuki family ruled Wano and is historically associated with the creation of Poneglyphs."
);

entity(
    "nefertari-vivi",
    "Nefertari Vivi",
    "person",
    "Princess of Alabasta and a political ally of the Straw Hats.",
    "Nefertari Vivi is the princess of Alabasta and a close ally of the Straw Hat Pirates."
);

entity(
    "boa-hancock",
    "Boa Hancock",
    "person",
    "A former Warlord and ruler of Amazon Lily.",
    "Boa Hancock is a former Warlord of the Sea and ruler of Amazon Lily who develops strong feelings for Luffy."
);

entity(
    "bartholomew-kuma",
    "Bartholomew Kuma",
    "person",
    "A former Warlord whose history connects the Revolutionary Army, the World Government and Bonney.",
    "Bartholomew Kuma was a former Warlord and member of the Revolutionary Army whose life became deeply entangled with the World Government."
);

entity(
    "bonney",
    "Jewelry Bonney",
    "person",
    "A Worst Generation pirate whose story connects to Kuma and the World Government.",
    "Jewelry Bonney is a pirate of the Worst Generation whose history becomes closely connected to Bartholomew Kuma and the World Government."
);

entity(
    "kozuki-momonosuke",
    "Kozuki Momonosuke",
    "person",
    "The heir of Wano and a key figure in its liberation.",
    "Kozuki Momonosuke is the son of Kozuki Oden and becomes central to the struggle for Wano."
);

/*
 * ============================================================
 * ORGANIZATIONS / GROUPS
 * ============================================================
 */

entity(
    "four-emperors",
    "Four Emperors",
    "organization",
    "The group of pirate powers dominating the New World.",
    "The Four Emperors are the most powerful pirate captains whose influence shapes the New World."
);

entity(
    "seven-warlords",
    "Seven Warlords of the Sea",
    "organization",
    "A former system of powerful pirates sanctioned by the World Government.",
    "The Seven Warlords of the Sea were powerful pirates granted government authority in exchange for cooperation with the World Government."
);

entity(
    "worst-generation",
    "Worst Generation",
    "organization",
    "A group of notorious young pirates whose rise threatens the established order.",
    "The Worst Generation includes the Eleven Supernovas and Blackbeard and represents a major shift in the balance of power."
);

entity(
    "baroque-works",
    "Baroque Works",
    "organization",
    "A secret criminal organization led by Crocodile.",
    "Baroque Works was a criminal organization secretly controlled by Crocodile during the Alabasta storyline."
);

entity(
    "kozuki-clan",
    "Kozuki Clan",
    "organization",
    "The clan associated with Wano's ancient stone inscriptions.",
    "The Kozuki clan of Wano is historically connected to the creation and preservation of the Poneglyphs."
);

/*
 * ============================================================
 * MORE MYSTERIES / CONCEPTS
 * ============================================================
 */

entity(
    "one-piece-mystery",
    "The Mystery of One Piece",
    "mystery",
    "The unanswered question of what Roger's treasure actually is.",
    "The nature and meaning of the One Piece treasure remain the central mystery driving the story."
);

entity(
    "pirate-king",
    "Pirate King",
    "concept",
    "The title achieved by the pirate who stands at the center of the world's greatest voyage.",
    "Pirate King is the title associated with the person who reaches the end of the Grand Line and becomes the greatest pirate."
);

entity(
    "all-blue",
    "All Blue",
    "place",
    "The legendary sea said to contain fish from every ocean.",
    "The All Blue is Sanji's dream destination and a legendary sea said to contain species from all four major oceans."
);

entity(
    "one-piece-world",
    "One Piece World",
    "place",
    "The fictional world containing the Four Blues, Grand Line and Red Line.",
    "The One Piece world is structured around four major oceans, the Grand Line and the enormous Red Line."
);

/*
 * ============================================================
 * CREW / FINAL ISLAND / ANCIENT FIGURES (canonical defs)
 * ============================================================
 */

entity(
    "straw-hat-pirates",
    "Straw Hat Pirates",
    "organization",
    "A pirate crew led by Monkey D. Luffy whose members pursue the One Piece and their individual dreams.",
    "The Straw Hat Pirates are the central pirate crew of One Piece. Led by Monkey D. Luffy, the crew travels through the Grand Line and becomes increasingly entangled with the World Government, Emperors, ancient history, and the mysteries surrounding the One Piece."
);

entity(
    "laugh-tale",
    "Laugh Tale",
    "place",
    "The mysterious final island at the end of the Grand Line and the destination reached by Gol D. Roger.",
    "Laugh Tale is the island at the end of the Grand Line that holds the truth discovered by Gol D. Roger and his crew. Reaching it is one of the central mysteries of One Piece and is directly connected to the history of the world and the One Piece itself.",
    "documented",
    { aliases: ["Laugh Tale", "Raftel"] }
);

entity(
    "nefertari-d-lili",
    "Nefertari D. Lili",
    "person",
    "The ancient queen of Alabasta associated with the founding era of the World Government and the mysterious Will of D.",
    "Nefertari D. Lili was the ruler of Alabasta during the era surrounding the founding of the World Government. Her disappearance and actions involving the Poneglyphs and the name D. connect her to the mysteries of the Void Century and the true history of the world.",
    "documented",
    { aliases: ["Nefertari D. Lily", "Queen Lili"] }
);

/*
 * ============================================================
 * RELATIONSHIPS
 * ============================================================
 */

const relationships = [];

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.90) {
    relationships.push([
        from,
        to,
        relationship,
        title,
        strength,
        discoveryScore
    ]);
}

/*
 * ------------------------------------------------------------
 * CREATION / PUBLICATION
 * ------------------------------------------------------------
 */

rel("eiichiro-oda", "one-piece", "created",
    "Eiichiro Oda created One Piece.", 0.99, 0.99);

rel("one-piece", "one-piece-manga", "contains",
    "The original One Piece story exists as a serialized manga.", 0.99, 0.95);

rel("one-piece-manga", "weekly-shonen-jump", "serialized_in",
    "The One Piece manga was serialized in Weekly Shonen Jump.", 0.99, 0.98);

rel("shueisha", "weekly-shonen-jump", "publishes",
    "Shueisha publishes Weekly Shonen Jump.", 0.99, 0.90);

rel("shueisha", "one-piece-manga", "publishes",
    "Shueisha publishes the One Piece manga.", 0.99, 0.94);

rel("eiichiro-oda", "romance-dawn", "created",
    "Eiichiro Oda created the Romance Dawn prototypes.", 0.98, 0.91);

rel("romance-dawn", "one-piece", "preceded",
    "Romance Dawn preceded the serialized One Piece story.", 0.98, 0.95);

rel("one-piece", "one-piece-anime", "adapted_into",
    "The manga was adapted into the One Piece television anime.", 0.99, 0.98);

rel("toei-animation", "one-piece-anime", "produced",
    "Toei Animation produces the One Piece television anime.", 0.99, 0.97);

rel("one-piece-anime", "one-piece", "adapted_from",
    "The television anime is adapted from the manga.", 0.99, 0.95);

rel("one-piece", "one-piece-live-action", "adapted_into",
    "The manga was adapted into a live-action television series.", 0.99, 0.97);

rel("netflix", "one-piece-live-action", "produced",
    "Netflix is associated with the live-action adaptation.", 0.99, 0.94);

rel("one-piece-live-action", "one-piece", "adapted_from",
    "The live-action series is adapted from One Piece.", 0.99, 0.95);

/*
 * ------------------------------------------------------------
 * STRAW HATS
 * ------------------------------------------------------------
 */

rel("monkey-d-luffy", "straw-hat-pirates", "leads",
    "Luffy leads the Straw Hat Pirates.", 0.99, 0.99);

rel("roronoa-zoro", "straw-hat-pirates", "member_of",
    "Zoro is a member of the Straw Hat Pirates.", 0.99, 0.94);

rel("nami", "straw-hat-pirates", "member_of",
    "Nami is a member of the Straw Hat Pirates.", 0.99, 0.94);

rel("usopp", "straw-hat-pirates", "member_of",
    "Usopp is a member of the Straw Hat Pirates.", 0.99, 0.94);

rel("sanji", "straw-hat-pirates", "member_of",
    "Sanji is a member of the Straw Hat Pirates.", 0.99, 0.94);

rel("tony-tony-chopper", "straw-hat-pirates", "member_of",
    "Chopper is a member of the Straw Hat Pirates.", 0.99, 0.94);

rel("nico-robin", "straw-hat-pirates", "member_of",
    "Robin is a member of the Straw Hat Pirates.", 0.99, 0.97);

rel("franky", "straw-hat-pirates", "member_of",
    "Franky is a member of the Straw Hat Pirates.", 0.99, 0.94);

rel("brook", "straw-hat-pirates", "member_of",
    "Brook is a member of the Straw Hat Pirates.", 0.99, 0.94);

rel("jinbe", "straw-hat-pirates", "member_of",
    "Jinbe is a member of the Straw Hat Pirates.", 0.99, 0.95);

rel("franky", "thousand-sunny", "created",
    "Franky built the Thousand Sunny.", 0.99, 0.96);

rel("thousand-sunny", "straw-hat-pirates", "member_of",
    "The Thousand Sunny serves as the Straw Hat Pirates' ship.", 0.90, 0.82);

rel("going-merry", "straw-hat-pirates", "member_of",
    "The Going Merry served as the Straw Hat Pirates' first major ship.", 0.90, 0.84);

rel("sanji", "all-blue", "seeks",
    "Sanji dreams of finding the All Blue.", 0.99, 0.93);

rel("monkey-d-luffy", "pirate-king", "seeks",
    "Luffy seeks to become the Pirate King.", 0.99, 0.98);

rel("monkey-d-luffy", "one-piece", "seeks",
    "Luffy seeks the One Piece treasure.", 0.99, 0.99);

/*
 * ------------------------------------------------------------
 * ROGER / PIRATE ERA
 * ------------------------------------------------------------
 */

rel("gol-d-roger", "roger-pirates", "leads",
    "Gol D. Roger led the Roger Pirates.", 0.99, 0.96);

rel("silvers-rayleigh", "roger-pirates", "member_of",
    "Rayleigh was Roger's first mate.", 0.99, 0.94);

rel("shanks", "roger-pirates", "member_of",
    "Shanks was an apprentice aboard the Roger Pirates.", 0.99, 0.95);

rel("kozuki-oden", "roger-pirates", "member_of",
    "Kozuki Oden sailed with the Roger Pirates.", 0.99, 0.98);

rel("gol-d-roger", "laugh-tale", "reached",
    "Roger's crew reached Laugh Tale.", 0.99, 0.99);

rel("gol-d-roger", "one-piece", "found",
    "Roger's crew discovered the truth surrounding One Piece.", 0.98, 0.99);

rel("gol-d-roger", "great-pirate-era", "caused",
    "Roger's final declaration triggered the Great Pirate Era.", 0.99, 0.99);

rel("great-pirate-era", "one-piece", "motivated_by",
    "The search for One Piece drives the Great Pirate Era.", 0.99, 0.98);

rel("laugh-tale", "one-piece", "contains",
    "Laugh Tale is directly connected to the final mystery of One Piece.", 0.97, 0.99);

rel("silvers-rayleigh", "monkey-d-luffy", "influenced",
    "Rayleigh became an important mentor to Luffy.", 0.98, 0.94);

rel("shanks", "monkey-d-luffy", "influenced",
    "Shanks became an early inspiration for Luffy's pirate journey.", 0.99, 0.98);

rel("whitebeard", "whitebeard-pirates", "leads",
    "Whitebeard commanded the Whitebeard Pirates.", 0.99, 0.94);

rel("portgas-d-ace", "whitebeard-pirates", "member_of",
    "Ace served as a commander of the Whitebeard Pirates.", 0.99, 0.95);

rel("portgas-d-ace", "monkey-d-luffy", "influenced",
    "Ace is Luffy's sworn brother and a defining figure in his life.", 0.99, 0.97);

rel("portgas-d-ace", "gol-d-roger", "created_by",
    "Ace is the biological son of Gol D. Roger.", 0.99, 0.98);

rel("whitebeard", "gol-d-roger", "opposed_by",
    "Whitebeard was one of Roger's greatest rivals.", 0.95, 0.94);

rel("rocks-d-xebec", "rocks-pirates", "leads",
    "Rocks D. Xebec led the Rocks Pirates.", 0.99, 0.95);

rel("rocks-pirates", "god-valley", "involved",
    "The Rocks Pirates were involved in the God Valley Incident.", 0.98, 0.99);

rel("gol-d-roger", "god-valley", "involved",
    "Roger was involved in the God Valley Incident.", 0.98, 0.99);

rel("monkey-d-garp", "god-valley", "involved",
    "Garp was involved in the God Valley Incident.", 0.98, 0.99);

rel("marineford-war", "portgas-d-ace", "involved",
    "The Marineford War centered on Ace's execution.", 0.99, 0.99);

rel("whitebeard-pirates", "marineford-war", "involved",
    "The Whitebeard Pirates fought at Marineford.", 0.99, 0.98);

/*
 * ------------------------------------------------------------
 * LUFFY FAMILY / REVOLUTION
 * ------------------------------------------------------------
 */

rel("monkey-d-dragon", "monkey-d-luffy", "connected_to",
    "Dragon is Luffy's father.", 0.99, 0.96);

rel("monkey-d-garp", "monkey-d-luffy", "connected_to",
    "Garp is Luffy's grandfather.", 0.99, 0.94);

rel("monkey-d-dragon", "revolutionary-army", "leads",
    "Dragon leads the Revolutionary Army.", 0.99, 0.98);

rel("sabo", "revolutionary-army", "member_of",
    "Sabo is a senior member of the Revolutionary Army.", 0.99, 0.96);

rel("sabo", "monkey-d-luffy", "influenced",
    "Sabo is one of Luffy's sworn brothers.", 0.99, 0.97);

rel("revolutionary-army", "world-government", "opposed_by",
    "The Revolutionary Army opposes the World Government.", 0.99, 0.99);

rel("monkey-d-dragon", "world-government", "opposed_by",
    "Dragon is the leader of the movement opposing the World Government.", 0.98, 0.96);

/*
 * ------------------------------------------------------------
 * BLACKBEARD / RIVALS / NEW WORLD
 * ------------------------------------------------------------
 */

rel("marshall-d-teach", "blackbeard-pirates", "leads",
    "Marshall D. Teach leads the Blackbeard Pirates.", 0.99, 0.97);

rel("marshall-d-teach", "whitebeard-pirates", "member_of",
    "Teach began his rise as a member of the Whitebeard Pirates.", 0.97, 0.96);

rel("marshall-d-teach", "devil-fruits", "uses",
    "Teach's powers are deeply connected to Devil Fruits.", 0.98, 0.98);

rel("kaido", "four-emperors", "member_of",
    "Kaido was one of the Four Emperors.", 0.99, 0.94);

rel("big-mom", "four-emperors", "member_of",
    "Big Mom was one of the Four Emperors.", 0.99, 0.94);

rel("whitebeard", "four-emperors", "member_of",
    "Whitebeard was one of the Four Emperors.", 0.99, 0.94);

rel("shanks", "four-emperors", "member_of",
    "Shanks is one of the Four Emperors.", 0.99, 0.96);

rel("monkey-d-luffy", "four-emperors", "member_of",
    "Luffy eventually becomes recognized among the Four Emperors.", 0.99, 0.96);

rel("trafalgar-law", "worst-generation", "member_of",
    "Law is a member of the Worst Generation.", 0.99, 0.95);

rel("eustass-kid", "worst-generation", "member_of",
    "Kid is a member of the Worst Generation.", 0.99, 0.95);

rel("monkey-d-luffy", "worst-generation", "member_of",
    "Luffy is one of the most prominent members of the Worst Generation.", 0.99, 0.97);

rel("marshall-d-teach", "worst-generation", "member_of",
    "Blackbeard is associated with the Worst Generation.", 0.95, 0.95);

rel("trafalgar-law", "monkey-d-luffy", "connected_to",
    "Law and Luffy form a major alliance during the New World saga.", 0.98, 0.98);

rel("eustass-kid", "monkey-d-luffy", "opposed_by",
    "Kid is both a rival and fellow member of the new pirate generation.", 0.92, 0.91);

/*
 * ------------------------------------------------------------
 * WORLD GOVERNMENT
 * ------------------------------------------------------------
 */

rel("world-government", "marines", "leads",
    "The Marines enforce the authority of the World Government.", 0.99, 0.95);

rel("world-government", "celestial-dragons", "contains",
    "The World Government's political order is built around the Celestial Dragons.", 0.96, 0.93);

rel("five-elders", "world-government", "member_of",
    "The Five Elders occupy the highest public leadership level of the World Government.", 0.99, 0.96);

rel("imu", "world-government", "leads",
    "Imu is associated with the hidden highest level of World Government authority.", 0.96, 0.99);

rel("cipher-pol", "world-government", "member_of",
    "Cipher Pol operates as the World Government's intelligence apparatus.", 0.99, 0.93);

rel("cp9", "cipher-pol", "member_of",
    "CP9 is one of the Cipher Pol organizations.", 0.99, 0.91);

rel("cp0", "cipher-pol", "member_of",
    "CP0 is an elite Cipher Pol organization.", 0.99, 0.94);

rel("akainu", "marines", "leads",
    "Sakazuki serves as Fleet Admiral of the Marines.", 0.99, 0.94);

rel("kuzan", "marines", "member_of",
    "Kuzan was formerly one of the Marines' admirals.", 0.99, 0.91);

rel("smoker", "marines", "member_of",
    "Smoker is a Marine officer.", 0.99, 0.89);

rel("akainu", "kuzan", "opposed_by",
    "Akainu and Kuzan fought over the position of Fleet Admiral.", 0.99, 0.97);

rel("cp9", "nico-robin", "seeks",
    "CP9 was tasked with capturing Nico Robin.", 0.99, 0.98);

rel("world-government", "nico-robin", "suppressed",
    "The World Government pursued Robin because of her archaeological knowledge.", 0.99, 0.99);

rel("world-government", "ohara", "suppressed",
    "The World Government destroyed Ohara after its scholars investigated forbidden history.", 0.99, 0.99);

/*
 * ------------------------------------------------------------
 * VOID CENTURY / JOY BOY
 * ------------------------------------------------------------
 */

rel("joy-boy", "void-century", "part_of",
    "Joy Boy lived during the Void Century.", 0.99, 0.99);

rel("ancient-kingdom", "void-century", "part_of",
    "The Ancient Kingdom existed during the Void Century.", 0.99, 0.99);

rel("world-government", "void-century", "suppressed",
    "The World Government suppresses knowledge of the Void Century.", 0.99, 0.99);

rel("poneglyphs", "void-century", "records",
    "Poneglyphs preserve information about the Void Century.", 0.99, 0.99);

rel("nico-robin", "poneglyphs", "can_read",
    "Robin can decipher Poneglyph inscriptions.", 0.99, 0.99);

rel("kozuki-clan", "poneglyphs", "created",
    "The Kozuki clan is associated with the creation of Poneglyphs.", 0.98, 0.98);

rel("kozuki-family", "poneglyphs", "created",
    "The Kozuki family preserved the tradition of creating Poneglyphs.", 0.98, 0.96);

rel("road-poneglyphs", "poneglyphs", "part_of",
    "Road Poneglyphs are a special class of Poneglyphs.", 0.99, 0.98);

rel("road-poneglyphs", "laugh-tale", "reached",
    "The Road Poneglyphs provide the route to Laugh Tale.", 0.99, 0.99);

rel("rio-poneglyph", "poneglyphs", "derived_from",
    "The Rio Poneglyph represents the complete history reconstructed from Poneglyphs.", 0.94, 0.96);

rel("joy-boy", "one-piece", "connected_to",
    "Joy Boy's legacy is deeply connected to the central mystery of One Piece.", 0.98, 0.99);

rel("joy-boy", "laugh-tale", "connected_to",
    "Joy Boy's history is connected to the truth discovered at Laugh Tale.", 0.96, 0.99);

rel("joy-boy", "ancient-kingdom", "connected_to",
    "Joy Boy is historically connected to the Ancient Kingdom.", 0.97, 0.99);

rel("joy-boy", "world-government", "opposed_by",
    "Joy Boy's era is connected to the ancient conflict behind the World Government.", 0.95, 0.99);

rel("will-of-d", "joy-boy", "connected_to",
    "The Will of D. is connected to the historical mystery surrounding Joy Boy.", 0.92, 0.99);

rel("will-of-d", "monkey-d-luffy", "connected_to",
    "Luffy carries the mysterious initial D.", 0.99, 0.98);

rel("will-of-d", "gol-d-roger", "connected_to",
    "Roger carried the mysterious initial D.", 0.99, 0.98);

rel("will-of-d", "marshall-d-teach", "connected_to",
    "Teach carries the mysterious initial D.", 0.99, 0.97);

rel("will-of-d", "monkey-d-dragon", "connected_to",
    "Dragon carries the mysterious initial D.", 0.99, 0.96);

rel("will-of-d", "monkey-d-garp", "connected_to",
    "Garp belongs to the family line carrying the initial D.", 0.99, 0.94);

rel("nefertari-d-lili", "will-of-d", "connected_to",
    "Nefertari D. Lili is associated with the mysterious initial D.", 0.95, 0.98);

rel("nefertari-d-lili", "world-government", "member_of",
    "Lili was one of the rulers associated with the founding of the World Government.", 0.96, 0.98);

rel("nefertari-d-lili", "poneglyphs", "connected_to",
    "Lili is connected to the scattering of the Poneglyphs.", 0.94, 0.99);

/*
 * ------------------------------------------------------------
 * NIKA / DEVIL FRUIT
 * ------------------------------------------------------------
 */

rel("devil-fruits", "gomu-gomu-no-mi", "contains",
    "The fruit publicly known as the Gum-Gum Fruit is a Devil Fruit.", 0.99, 0.95);

rel("gomu-gomu-no-mi", "hito-hito-no-mi-model-nika", "adapted_from",
    "The Gum-Gum Fruit identity is later revealed to conceal the fruit's true nature.", 0.98, 0.99);

rel("hito-hito-no-mi-model-nika", "nika", "connected_to",
    "The fruit is associated with the legendary figure Nika.", 0.99, 0.99);

rel("monkey-d-luffy", "hito-hito-no-mi-model-nika", "uses",
    "Luffy possesses the Devil Fruit later identified as the Human-Human Fruit, Model: Nika.", 0.99, 0.99);

rel("nika", "joy-boy", "connected_to",
    "The Nika legend is deeply connected to Joy Boy's legacy.", 0.98, 0.99);

rel("joy-boy", "hito-hito-no-mi-model-nika", "connected_to",
    "Joy Boy's legacy is connected to the Devil Fruit's hidden identity.", 0.98, 0.99);

rel("world-government", "hito-hito-no-mi-model-nika", "suppressed",
    "The World Government attempted to suppress knowledge of the fruit's true identity.", 0.98, 0.99);

rel("devil-fruits", "dr-vegapunk", "influenced",
    "Vegapunk's scientific research includes the mysteries of Devil Fruits.", 0.98, 0.96);

rel("haki", "monkey-d-luffy", "uses",
    "Luffy becomes a powerful user of Haki.", 0.99, 0.98);

rel("observation-haki", "monkey-d-luffy", "uses",
    "Luffy develops advanced Observation Haki.", 0.99, 0.95);

rel("armament-haki", "monkey-d-luffy", "uses",
    "Luffy develops advanced Armament Haki.", 0.99, 0.96);

rel("conquerors-haki", "monkey-d-luffy", "uses",
    "Luffy possesses Conqueror's Haki.", 0.99, 0.99);

rel("conquerors-haki", "shanks", "uses",
    "Shanks is a renowned user of Conqueror's Haki.", 0.99, 0.96);

rel("conquerors-haki", "gol-d-roger", "uses",
    "Roger possessed Conqueror's Haki.", 0.98, 0.96);

rel("conquerors-haki", "whitebeard", "uses",
    "Whitebeard possessed Conqueror's Haki.", 0.98, 0.94);

rel("conquerors-haki", "kaido", "uses",
    "Kaido possessed Conqueror's Haki.", 0.98, 0.95);

/*
 * ------------------------------------------------------------
 * ANCIENT WEAPONS
 * ------------------------------------------------------------
 */

rel("ancient-weapons", "pluton", "contains",
    "Pluton is one of the Ancient Weapons.", 0.99, 0.98);

rel("ancient-weapons", "poseidon", "contains",
    "Poseidon is one of the Ancient Weapons.", 0.99, 0.98);

rel("ancient-weapons", "uranus", "contains",
    "Uranus is one of the Ancient Weapons.", 0.99, 0.99);

rel("pluton", "wano-country", "located_in",
    "The history of Pluton is connected to Wano.", 0.96, 0.99);

rel("poseidon", "mermaid-princess-shirahoshi", "connected_to",
    "Shirahoshi possesses the power identified as Poseidon.", 0.99, 0.99);

rel("mermaid-princess-shirahoshi", "fish-man-island", "located_in",
    "Shirahoshi is the princess of Fish-Man Island.", 0.99, 0.94);

rel("joy-boy", "fish-man-island", "connected_to",
    "Joy Boy's history is connected to Fish-Man Island.", 0.98, 0.99);

rel("poneglyphs", "wano-country", "located_in",
    "Wano has an important historical connection to the Poneglyphs.", 0.97, 0.97);

rel("kozuki-oden", "wano-country", "located_in",
    "Oden was a legendary samurai of Wano.", 0.99, 0.96);

rel("kozuki-oden", "whitebeard-pirates", "member_of",
    "Oden sailed with the Whitebeard Pirates.", 0.99, 0.98);

rel("kozuki-oden", "roger-pirates", "member_of",
    "Oden later sailed with the Roger Pirates.", 0.99, 0.99);

rel("kozuki-momonosuke", "wano-country", "located_in",
    "Momonosuke is the heir of Wano.", 0.99, 0.95);

rel("kozuki-momonosuke", "kozuki-family", "member_of",
    "Momonosuke belongs to the Kozuki family.", 0.99, 0.94);

/*
 * ------------------------------------------------------------
 * LOCATIONS / GEOGRAPHY
 * ------------------------------------------------------------
 */

rel("grand-line", "one-piece-world", "part_of",
    "The Grand Line is a central geographical feature of the One Piece world.", 0.99, 0.93);

rel("red-line", "one-piece-world", "part_of",
    "The Red Line is a defining geographical feature of the One Piece world.", 0.99, 0.92);

rel("reverse-mountain", "grand-line", "leads",
    "Reverse Mountain provides an entrance to the Grand Line.", 0.99, 0.94);

rel("grand-line", "red-line", "connected_to",
    "The Grand Line intersects the Red Line.", 0.99, 0.92);

rel("laugh-tale", "grand-line", "part_of",
    "Laugh Tale is the final island associated with the Grand Line.", 0.99, 0.99);

rel("wano-country", "grand-line", "located_in",
    "Wano is located within the New World portion of the Grand Line.", 0.99, 0.94);

rel("egghead", "grand-line", "located_in",
    "Egghead is an island in the New World.", 0.99, 0.94);

rel("ohara", "one-piece-world", "part_of",
    "Ohara is an island in the One Piece world.", 0.99, 0.86);

rel("water-seven", "grand-line", "located_in",
    "Water 7 lies along the Grand Line route.", 0.99, 0.91);

rel("enies-lobby", "world-government", "contains",
    "Enies Lobby is a World Government judicial stronghold.", 0.99, 0.94);

rel("marineford", "marines", "contains",
    "Marineford is a major Marine headquarters and battlefield.", 0.99, 0.94);

rel("sabaody-archipelago", "red-line", "connected_to",
    "Sabaody lies near the Red Line and the entrance to the New World.", 0.99, 0.94);

rel("dressrosa", "grand-line", "located_in",
    "Dressrosa is located in the New World.", 0.99, 0.90);

rel("whole-cake-island", "grand-line", "located_in",
    "Whole Cake Island lies within the New World.", 0.99, 0.90);

rel("alabasta", "grand-line", "located_in",
    "Alabasta is a kingdom encountered during the Grand Line journey.", 0.99, 0.91);

rel("all-blue", "one-piece-world", "part_of",
    "The All Blue is a legendary sea within the One Piece world.", 0.90, 0.92);

/*
 * ------------------------------------------------------------
 * OHARA / ROBIN / FORBIDDEN HISTORY
 * ------------------------------------------------------------
 */

rel("nico-robin", "ohara", "located_in",
    "Robin was born on Ohara.", 0.99, 0.97);

rel("ohara-buster-call", "ohara", "caused",
    "The Buster Call destroyed Ohara.", 0.99, 0.99);

rel("world-government", "ohara-buster-call", "caused",
    "The World Government authorized the destruction of Ohara.", 0.99, 0.99);

rel("nico-robin", "ohara-buster-call", "involved",
    "Robin survived the destruction of Ohara.", 0.99, 0.99);

rel("ohara-buster-call", "void-century", "motivated_by",
    "The destruction of Ohara was motivated by the scholars' forbidden research.", 0.99, 0.99);

rel("ohara", "poneglyphs", "can_read",
    "Ohara's scholars studied Poneglyphs and the world's forbidden history.", 0.96, 0.98);

rel("nico-robin", "void-century", "seeks",
    "Robin seeks to uncover the true history.", 0.99, 0.99);

rel("nico-robin", "rio-poneglyph", "seeks",
    "Robin seeks the complete historical record represented by the Rio Poneglyph.", 0.95, 0.98);

/*
 * ------------------------------------------------------------
 * WATER 7 / ENIES LOBBY
 * ------------------------------------------------------------
 */

rel("water-seven-conflict", "water-seven", "occurred_at",
    "The Water 7 conflict occurred in Water 7.", 0.99, 0.94);

rel("water-seven-conflict", "nico-robin", "involved",
    "Robin's disappearance was central to the Water 7 conflict.", 0.99, 0.98);

rel("water-seven-conflict", "going-merry", "involved",
    "The fate of the Going Merry was central to the Water 7 conflict.", 0.99, 0.96);

rel("water-seven-conflict", "cp9", "involved",
    "CP9 operated at the center of the Water 7 conflict.", 0.99, 0.97);

rel("enies-lobby-conflict", "enies-lobby", "occurred_at",
    "The Straw Hats attacked Enies Lobby.", 0.99, 0.98);

rel("enies-lobby-conflict", "nico-robin", "involved",
    "The Straw Hats attacked Enies Lobby to rescue Robin.", 0.99, 0.99);

rel("enies-lobby-conflict", "world-government", "opposed_by",
    "The Straw Hat Pirates openly declared war on the World Government.", 0.99, 0.99);

rel("monkey-d-luffy", "enies-lobby-conflict", "involved",
    "Luffy led the Straw Hats during the Enies Lobby conflict.", 0.99, 0.98);

rel("franky", "water-seven", "located_in",
    "Franky is deeply connected to Water 7 and its shipbuilding culture.", 0.99, 0.93);

/*
 * ------------------------------------------------------------
 * ALABASTA / DRESSROSA / WHOLE CAKE / WANO
 * ------------------------------------------------------------
 */

rel("alabasta-conflict", "alabasta", "occurred_at",
    "The Alabasta conflict occurred in the kingdom of Alabasta.", 0.99, 0.95);

rel("crocodile", "baroque-works", "leads",
    "Crocodile secretly led Baroque Works.", 0.99, 0.97);

rel("baroque-works", "alabasta", "opposed_by",
    "Baroque Works attempted to take control of Alabasta.", 0.99, 0.97);

rel("nefertari-vivi", "alabasta", "located_in",
    "Vivi is the princess of Alabasta.", 0.99, 0.94);

rel("nefertari-vivi", "monkey-d-luffy", "connected_to",
    "Vivi became a close ally of Luffy and the Straw Hats.", 0.99, 0.96);

rel("dressrosa-conflict", "dressrosa", "occurred_at",
    "The Dressrosa conflict occurred in Dressrosa.", 0.99, 0.95);

rel("donquixote-doflamingo", "dressrosa", "leads",
    "Doflamingo ruled Dressrosa.", 0.99, 0.98);

rel("trafalgar-law", "dressrosa-conflict", "involved",
    "Law played a central role in the Dressrosa conflict.", 0.99, 0.98);

rel("monkey-d-luffy", "dressrosa-conflict", "involved",
    "Luffy fought Doflamingo in Dressrosa.", 0.99, 0.98);

rel("donquixote-doflamingo", "world-government", "member_of",
    "Doflamingo was formerly a Warlord under the World Government.", 0.99, 0.95);

rel("seven-warlords", "world-government", "member_of",
    "The Seven Warlords operated under a government-sanctioned system.", 0.99, 0.93);

rel("crocodile", "seven-warlords", "member_of",
    "Crocodile was formerly a Warlord.", 0.99, 0.91);

rel("donquixote-doflamingo", "seven-warlords", "member_of",
    "Doflamingo was formerly a Warlord.", 0.99, 0.93);

rel("boa-hancock", "seven-warlords", "member_of",
    "Boa Hancock was formerly a Warlord.", 0.99, 0.91);

rel("whole-cake-conflict", "whole-cake-island", "occurred_at",
    "The Whole Cake Island conflict occurred in Big Mom's territory.", 0.99, 0.95);

rel("sanji", "whole-cake-conflict", "involved",
    "Sanji's family conflict drove the Straw Hats to Whole Cake Island.", 0.99, 0.97);

rel("big-mom", "whole-cake-island", "leads",
    "Big Mom ruled from Whole Cake Island.", 0.99, 0.95);

rel("wano-conflict", "wano-country", "occurred_at",
    "The Wano conflict occurred in Wano Country.", 0.99, 0.98);

rel("kaido", "wano-conflict", "involved",
    "Kaido was the central enemy of the Wano conflict.", 0.99, 0.99);

rel("monkey-d-luffy", "wano-conflict", "involved",
    "Luffy led the alliance against Kaido.", 0.99, 0.99);

rel("trafalgar-law", "wano-conflict", "involved",
    "Law fought alongside Luffy's alliance in Wano.", 0.99, 0.97);

rel("eustass-kid", "wano-conflict", "involved",
    "Kid participated in the conflict against the forces ruling Wano.", 0.99, 0.96);

rel("kozuki-momonosuke", "wano-conflict", "involved",
    "Momonosuke's claim to Wano was central to the conflict.", 0.99, 0.97);

rel("wano-conflict", "joy-boy", "connected_to",
    "The Wano conflict becomes connected to the legacy of Joy Boy.", 0.97, 0.99);

rel("wano-conflict", "nika", "connected_to",
    "Luffy's transformation in Wano connects the conflict to the Nika legend.", 0.98, 0.99);

/*
 * ------------------------------------------------------------
 * EGGHEAD / VEGAPUNK
 * ------------------------------------------------------------
 */

rel("dr-vegapunk", "egghead", "located_in",
    "Vegapunk's major research facility is located on Egghead.", 0.99, 0.95);

rel("egghead-incident", "egghead", "occurred_at",
    "The Egghead Incident occurred on Egghead.", 0.99, 0.96);

rel("egghead-incident", "world-government", "opposed_by",
    "The Egghead Incident brought the Straw Hats into conflict with the World Government.", 0.99, 0.99);

rel("dr-vegapunk", "void-century", "seeks",
    "Vegapunk's research becomes connected to discovering the truth of the Void Century.", 0.96, 0.99);

rel("dr-vegapunk", "poneglyphs", "connected_to",
    "Vegapunk's research intersects with knowledge preserved from the ancient world.", 0.91, 0.96);

rel("bartholomew-kuma", "revolutionary-army", "member_of",
    "Kuma was associated with the Revolutionary Army.", 0.99, 0.96);

rel("bartholomew-kuma", "world-government", "member_of",
    "Kuma became a government-controlled cyborg and former Warlord.", 0.96, 0.97);

rel("bonney", "bartholomew-kuma", "connected_to",
    "Bonney's story is deeply connected to Kuma.", 0.99, 0.99);

rel("egghead-incident", "bonney", "involved",
    "Bonney becomes central to the Egghead storyline.", 0.99, 0.98);

/*
 * ------------------------------------------------------------
 * THEMATIC / META CONNECTIONS
 * ------------------------------------------------------------
 */

rel("one-piece", "grand-line", "connected_to",
    "The search for One Piece takes place across the Grand Line.", 0.99, 0.99);

rel("one-piece", "poneglyphs", "connected_to",
    "The One Piece mystery is inseparable from the Poneglyphs and lost history.", 0.99, 0.99);

rel("one-piece", "void-century", "connected_to",
    "The ultimate mystery of One Piece is connected to the lost history of the world.", 0.98, 0.99);

rel("one-piece", "joy-boy", "connected_to",
    "Joy Boy is one of the deepest historical connections to One Piece.", 0.98, 0.99);

rel("one-piece", "laugh-tale", "connected_to",
    "Laugh Tale is the destination where Roger's crew reached the end of the journey.", 0.99, 0.99);

rel("pirate-king", "laugh-tale", "reached",
    "The Pirate King is defined by reaching the end of the Grand Line.", 0.96, 0.96);

rel("monkey-d-luffy", "laugh-tale", "seeks",
    "Luffy's journey ultimately points toward Laugh Tale.", 0.99, 0.99);

rel("gol-d-roger", "pirate-king", "created",
    "Roger became known as the Pirate King.", 0.99, 0.98);

rel("one-piece-mystery", "one-piece", "connected_to",
    "The identity and meaning of the One Piece form the central mystery.", 0.99, 0.99);

rel("one-piece-mystery", "laugh-tale", "connected_to",
    "The mystery of One Piece is tied to Laugh Tale.", 0.99, 0.99);

rel("one-piece-mystery", "void-century", "connected_to",
    "The One Piece mystery appears connected to the world's erased history.", 0.97, 0.99);

rel("one-piece-mystery", "joy-boy", "connected_to",
    "Joy Boy is one of the central historical figures surrounding the mystery.", 0.97, 0.99);

rel("one-piece-mystery", "road-poneglyphs", "connected_to",
    "The Road Poneglyphs provide the route toward the final mystery.", 0.99, 0.99);

/*
 * ============================================================
 * EXPORT
 * ============================================================
 */

module.exports = {
    entities,
    relationships
};