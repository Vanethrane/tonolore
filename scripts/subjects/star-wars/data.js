/*
 * Star Wars subject data — entities + explicit relationships.
 * Mentions in descriptions expand automatically via expandMentions.
 */

const entities = [];

function entity(
    slug,
    name,
    type,
    short_description,
    description,
    evidence = "fiction",
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

const relationships = [];

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

/*
 * CORE / CREATION
 */

entity(
    "star-wars",
    "Star Wars",
    "work",
    "The epic space-fantasy franchise created by George Lucas.",
    "Star Wars is a space-fantasy franchise created by George Lucas. It follows the struggle between the light and dark sides of the Force across the Jedi Order, the Sith, the Galactic Empire, the Rebel Alliance, and later the Resistance and the First Order."
);

entity(
    "george-lucas",
    "George Lucas",
    "person",
    "Creator of Star Wars and founder of Lucasfilm.",
    "George Lucas created Star Wars and founded Lucasfilm. He wrote and directed the original film and later returned for the prequel trilogy."
);

entity(
    "lucasfilm",
    "Lucasfilm",
    "organization",
    "The production company behind Star Wars.",
    "Lucasfilm is the studio George Lucas founded to produce Star Wars and related films, series, and media."
);

entity(
    "disney",
    "The Walt Disney Company",
    "organization",
    "Parent company of Lucasfilm since 2012.",
    "Disney acquired Lucasfilm in 2012 and has since overseen new Star Wars films and series, including the sequel trilogy and streaming shows."
);

/*
 * SAGA FILMS
 */

entity(
    "a-new-hope",
    "A New Hope",
    "work",
    "The original 1977 Star Wars film.",
    "Star Wars: Episode IV — A New Hope introduced Luke Skywalker, Princess Leia, Han Solo, and Darth Vader, and launched the Rebel Alliance's fight against the Galactic Empire."
);

entity(
    "the-empire-strikes-back",
    "The Empire Strikes Back",
    "work",
    "The 1980 sequel that deepened the saga's mythology.",
    "The Empire Strikes Back follows the Rebel Alliance after the Battle of Yavin, revealing major truths about Darth Vader, Luke Skywalker, and the Force on Hoth, Dagobah, and Cloud City."
);

entity(
    "return-of-the-jedi",
    "Return of the Jedi",
    "work",
    "The 1983 conclusion of the original trilogy.",
    "Return of the Jedi brings Luke Skywalker face to face with Darth Vader and Emperor Palpatine while the Rebel Alliance strikes the second Death Star near Endor."
);

entity(
    "the-phantom-menace",
    "The Phantom Menace",
    "work",
    "The first prequel film, set during the late Republic.",
    "The Phantom Menace introduces young Anakin Skywalker, Qui-Gon Jinn, Obi-Wan Kenobi, Padmé Amidala, and the rising shadow of Darth Sidious."
);

entity(
    "attack-of-the-clones",
    "Attack of the Clones",
    "work",
    "The prequel covering the birth of the Clone Wars.",
    "Attack of the Clones follows Anakin Skywalker and Padmé Amidala as the Separatist crisis erupts and the Galactic Republic raises a clone army."
);

entity(
    "revenge-of-the-sith",
    "Revenge of the Sith",
    "work",
    "The prequel climax in which Anakin falls to the dark side.",
    "Revenge of the Sith depicts Order 66, the fall of the Jedi Order, Anakin Skywalker's transformation into Darth Vader, and the rise of the Galactic Empire."
);

entity(
    "the-force-awakens",
    "The Force Awakens",
    "work",
    "The first sequel-trilogy film.",
    "The Force Awakens introduces Rey, Finn, Poe Dameron, and Kylo Ren as the Resistance confronts the First Order a generation after Return of the Jedi."
);

entity(
    "the-last-jedi",
    "The Last Jedi",
    "work",
    "The middle chapter of the sequel trilogy.",
    "The Last Jedi follows Rey's training with Luke Skywalker and the Resistance's desperate flight from the First Order under Kylo Ren and Supreme Leader Snoke."
);

entity(
    "the-rise-of-skywalker",
    "The Rise of Skywalker",
    "work",
    "The finale of the Skywalker saga films.",
    "The Rise of Skywalker brings Rey, Finn, Poe, and the Resistance into a final confrontation with Emperor Palpatine and the Final Order on Exegol."
);

entity(
    "rogue-one",
    "Rogue One",
    "work",
    "A standalone film about stealing the Death Star plans.",
    "Rogue One follows Jyn Erso and a Rebel team racing to steal the Death Star plans that make A New Hope possible."
);

entity(
    "solo",
    "Solo: A Star Wars Story",
    "work",
    "An origin story for Han Solo and the Millennium Falcon.",
    "Solo explores young Han Solo, Chewbacca, Lando Calrissian, and the early history of the Millennium Falcon."
);

/*
 * CHARACTERS
 */

entity(
    "luke-skywalker",
    "Luke Skywalker",
    "person",
    "A Jedi of the Rebel Alliance and son of Anakin Skywalker.",
    "Luke Skywalker is raised on Tatooine, becomes a Jedi under Obi-Wan Kenobi and Yoda, confronts Darth Vader, and later trains Rey after years of exile."
);

entity(
    "leia-organa",
    "Leia Organa",
    "person",
    "Princess of Alderaan, Rebel leader, and twin sister of Luke.",
    "Leia Organa is a central leader of the Rebel Alliance and later the Resistance. She is the twin sister of Luke Skywalker and the mother of Ben Solo."
);

entity(
    "han-solo",
    "Han Solo",
    "person",
    "Smuggler captain of the Millennium Falcon.",
    "Han Solo is a smuggler who joins the Rebel Alliance alongside Luke Skywalker and Leia Organa. He is a lifelong partner to Chewbacca and later the father of Ben Solo."
);

entity(
    "chewbacca",
    "Chewbacca",
    "person",
    "Wookiee co-pilot of the Millennium Falcon.",
    "Chewbacca is a Wookiee warrior and co-pilot who fights beside Han Solo for the Rebel Alliance and later the Resistance."
);

entity(
    "obi-wan-kenobi",
    "Obi-Wan Kenobi",
    "person",
    "Jedi Master who trains Anakin and later Luke.",
    "Obi-Wan Kenobi is a Jedi Master who apprentices Anakin Skywalker, survives Order 66 in exile on Tatooine, and guides Luke Skywalker toward the Force."
);

entity(
    "yoda",
    "Yoda",
    "person",
    "Legendary Grand Master of the Jedi Order.",
    "Yoda is among the wisest Jedi Masters. He leads the Order during the Clone Wars, survives Order 66 on Dagobah, and trains Luke Skywalker."
);

entity(
    "anakin-skywalker",
    "Anakin Skywalker",
    "person",
    "The Chosen One who becomes Darth Vader.",
    "Anakin Skywalker is discovered on Tatooine as a child, trained by Obi-Wan Kenobi, married to Padmé Amidala, and ultimately seduced by Darth Sidious into becoming Darth Vader."
);

entity(
    "darth-vader",
    "Darth Vader",
    "person",
    "Sith Lord and enforcer of the Galactic Empire.",
    "Darth Vader is the Sith identity of Anakin Skywalker after his fall. He serves Emperor Palpatine until returning to the light to save Luke Skywalker."
);

entity(
    "emperor-palpatine",
    "Emperor Palpatine",
    "person",
    "Sith Lord also known as Darth Sidious.",
    "Emperor Palpatine, secretly Darth Sidious, engineers the Clone Wars, destroys the Jedi Order, rules the Galactic Empire, and later returns to threaten the galaxy from Exegol."
);

entity(
    "padme-amidala",
    "Padmé Amidala",
    "person",
    "Queen and senator of Naboo; mother of Luke and Leia.",
    "Padmé Amidala serves Naboo as queen and later senator. She loves Anakin Skywalker and is the mother of Luke Skywalker and Leia Organa."
);

entity(
    "rey",
    "Rey",
    "person",
    "A scavenger from Jakku who becomes a Jedi.",
    "Rey begins as a scavenger on Jakku, discovers a powerful connection to the Force, trains with Luke Skywalker and Leia Organa, and confronts Kylo Ren and Emperor Palpatine."
);

entity(
    "kylo-ren",
    "Kylo Ren",
    "person",
    "Dark warrior of the First Order; born Ben Solo.",
    "Kylo Ren is the dark-side persona of Ben Solo, son of Han Solo and Leia Organa. He leads the First Order's hunt for Rey while torn between light and dark."
);

entity(
    "finn",
    "Finn",
    "person",
    "Former First Order stormtrooper turned Resistance fighter.",
    "Finn deserts the First Order, joins Rey and Poe Dameron, and becomes a key fighter for the Resistance."
);

entity(
    "poe-dameron",
    "Poe Dameron",
    "person",
    "Resistance pilot and eventual Resistance leader.",
    "Poe Dameron is a skilled Resistance pilot who works closely with Leia Organa, Finn, and Rey against the First Order."
);

entity(
    "qui-gon-jinn",
    "Qui-Gon Jinn",
    "person",
    "Jedi Master who discovers Anakin Skywalker.",
    "Qui-Gon Jinn is a maverick Jedi Master who finds Anakin Skywalker on Tatooine and believes him to be the Chosen One."
);

entity(
    "darth-maul",
    "Darth Maul",
    "person",
    "Sith apprentice of Darth Sidious.",
    "Darth Maul is a Zabrak Sith Lord trained by Darth Sidious. He battles Qui-Gon Jinn and Obi-Wan Kenobi during the Naboo crisis."
);

entity(
    "count-dooku",
    "Count Dooku",
    "person",
    "Fallen Jedi who leads the Separatists as Darth Tyranus.",
    "Count Dooku leaves the Jedi Order, becomes Darth Tyranus under Darth Sidious, and leads the Confederacy of Independent Systems in the Clone Wars."
);

entity(
    "mace-windu",
    "Mace Windu",
    "person",
    "Jedi Master on the High Council during the Clone Wars.",
    "Mace Windu is a powerful Jedi Master who confronts Chancellor Palpatine near the end of the Clone Wars."
);

entity(
    "general-grievous",
    "General Grievous",
    "person",
    "Cyborg Separatist general and Jedi hunter.",
    "General Grievous commands Separatist droid armies during the Clone Wars and collects lightsabers from fallen Jedi."
);

entity(
    "boba-fett",
    "Boba Fett",
    "person",
    "Notorious bounty hunter cloned from Jango Fett.",
    "Boba Fett is a bounty hunter active in the age of the Galactic Empire, often associated with Darth Vader and Jabba the Hutt."
);

entity(
    "jango-fett",
    "Jango Fett",
    "person",
    "Bounty hunter whose genetic template creates the clone army.",
    "Jango Fett serves as the genetic template for the Republic's clone troopers and is the father of Boba Fett."
);

entity(
    "jabba-the-hutt",
    "Jabba the Hutt",
    "person",
    "Crime lord based on Tatooine.",
    "Jabba the Hutt rules a criminal empire from Tatooine and holds Han Solo captive before Luke Skywalker and allies free him."
);

entity(
    "r2-d2",
    "R2-D2",
    "person",
    "Astromech droid central to the Skywalker saga.",
    "R2-D2 carries critical messages and plans across the saga, serving Padmé Amidala, the Rebel Alliance, and later the Resistance."
);

entity(
    "c-3po",
    "C-3PO",
    "person",
    "Protocol droid and companion to R2-D2.",
    "C-3PO is a protocol droid built by Anakin Skywalker who accompanies R2-D2 through the Clone Wars, Rebellion, and Resistance eras."
);

entity(
    "lando-calrissian",
    "Lando Calrissian",
    "person",
    "Gambler, Cloud City administrator, and Rebel general.",
    "Lando Calrissian is an old associate of Han Solo who later joins the Rebel Alliance and helps destroy the second Death Star."
);

entity(
    "ahsoka-tano",
    "Ahsoka Tano",
    "person",
    "Former Jedi Padawan of Anakin Skywalker.",
    "Ahsoka Tano trains under Anakin Skywalker during the Clone Wars, leaves the Jedi Order, and later continues opposing Imperial and dark-side forces."
);

entity(
    "din-djarin",
    "Din Djarin",
    "person",
    "Mandalorian bounty hunter known as the Mandalorian.",
    "Din Djarin is a Mandalorian warrior whose journey intersects with Grogu, the Jedi, and the wider struggle after the Empire's fall."
);

entity(
    "grogu",
    "Grogu",
    "person",
    "Force-sensitive child of Yoda's species.",
    "Grogu is a young Force-sensitive foundling protected by Din Djarin and sought by remnants of the Empire."
);

/*
 * ORGANIZATIONS
 */

entity(
    "jedi-order",
    "Jedi Order",
    "organization",
    "Ancient order of Force users devoted to the light side.",
    "The Jedi Order protects the Galactic Republic for millennia before Order 66 nearly destroys it. Survivors include Obi-Wan Kenobi, Yoda, and later Luke Skywalker."
);

entity(
    "sith",
    "Sith",
    "organization",
    "Dark-side Force users opposed to the Jedi.",
    "The Sith pursue power through the dark side of the Force. Darth Sidious restores Sith dominance through the Clone Wars and the Galactic Empire."
);

entity(
    "galactic-republic",
    "Galactic Republic",
    "organization",
    "Democratic government of the prequel era.",
    "The Galactic Republic rules much of the galaxy before Chancellor Palpatine transforms it into the Galactic Empire."
);

entity(
    "galactic-empire",
    "Galactic Empire",
    "organization",
    "Authoritarian regime ruled by Emperor Palpatine.",
    "The Galactic Empire rises from the ashes of the Republic, hunts the Jedi, builds the Death Star, and is opposed by the Rebel Alliance."
);

entity(
    "rebel-alliance",
    "Rebel Alliance",
    "organization",
    "Coalition fighting to restore freedom from the Empire.",
    "The Rebel Alliance unites worlds and heroes including Leia Organa, Luke Skywalker, and Han Solo against the Galactic Empire."
);

entity(
    "separatists",
    "Confederacy of Independent Systems",
    "organization",
    "Separatist alliance in the Clone Wars.",
    "The Separatists, led publicly by Count Dooku, wage the Clone Wars against the Galactic Republic as part of Darth Sidious's design."
);

entity(
    "first-order",
    "First Order",
    "organization",
    "Imperial successor faction in the sequel era.",
    "The First Order rises from Imperial remnants and seeks to dominate the galaxy, opposed by the Resistance."
);

entity(
    "resistance",
    "Resistance",
    "organization",
    "Military force founded by Leia Organa against the First Order.",
    "The Resistance is a small private military force led by Leia Organa that fights the First Order with allies like Poe Dameron, Finn, and Rey."
);

entity(
    "clone-troopers",
    "Clone Troopers",
    "organization",
    "Genetically identical soldiers of the Republic.",
    "Clone troopers are created from Jango Fett's template to serve the Galactic Republic, then execute Order 66 against the Jedi."
);

/*
 * PLACES / OBJECTS / CONCEPTS
 */

entity(
    "the-force",
    "The Force",
    "concept",
    "The energy field binding the galaxy, with light and dark sides.",
    "The Force is the mystical energy field that grants power to Jedi and Sith. Its light and dark sides shape the destiny of Anakin Skywalker, Luke Skywalker, Rey, and the galaxy."
);

entity(
    "lightsaber",
    "Lightsaber",
    "object",
    "Signature weapon of Jedi and Sith.",
    "A lightsaber is a plasma-blade weapon used by Jedi and Sith. Different colors and forms reflect tradition, identity, and allegiance within the Force."
);

entity(
    "death-star",
    "Death Star",
    "object",
    "Imperial moon-sized battle station.",
    "The Death Star is an Imperial superweapon capable of destroying planets. The Rebel Alliance destroys the first at Yavin and the second at Endor."
);

entity(
    "millennium-falcon",
    "Millennium Falcon",
    "object",
    "Iconic freighter flown by Han Solo and Chewbacca.",
    "The Millennium Falcon is a heavily modified freighter central to the Rebel Alliance's victories and later flown again during the Resistance era."
);

entity(
    "tatooine",
    "Tatooine",
    "place",
    "Desert world and home of Anakin and Luke Skywalker.",
    "Tatooine is a harsh desert planet on the Outer Rim, home to moisture farmers, Hutts, and the early lives of Anakin Skywalker and Luke Skywalker."
);

entity(
    "alderaan",
    "Alderaan",
    "place",
    "Peaceful world destroyed by the Death Star.",
    "Alderaan is Leia Organa's adoptive homeworld, destroyed by the Death Star as a demonstration of Imperial power."
);

entity(
    "hoth",
    "Hoth",
    "place",
    "Frozen world hosting Echo Base.",
    "Hoth is an ice planet where the Rebel Alliance establishes Echo Base before being driven out by the Galactic Empire."
);

entity(
    "dagobah",
    "Dagobah",
    "place",
    "Swamp world where Yoda trains Luke.",
    "Dagobah is a remote swamp planet where Yoda lives in exile and trains Luke Skywalker in the ways of the Force."
);

entity(
    "endor",
    "Endor",
    "place",
    "Forest moon near the second Death Star.",
    "The forest moon of Endor is the site of the Rebel Alliance's ground assault that helps destroy the second Death Star."
);

entity(
    "coruscant",
    "Coruscant",
    "place",
    "City-covered capital of the Republic and Empire.",
    "Coruscant is the political heart of the galaxy, home to the Jedi Temple, the Senate, and later the Imperial Palace."
);

entity(
    "naboo",
    "Naboo",
    "place",
    "Homeworld of Padmé Amidala and Palpatine.",
    "Naboo is an elegant world caught in the Trade Federation invasion that begins the prequel crisis and shapes Padmé Amidala's rise."
);

entity(
    "mustafar",
    "Mustafar",
    "place",
    "Volcanic world of Anakin and Obi-Wan's duel.",
    "Mustafar is a volcanic planet where Obi-Wan Kenobi defeats Anakin Skywalker, leaving him to become Darth Vader."
);

entity(
    "jakku",
    "Jakku",
    "place",
    "Desert scrapyard world where Rey begins.",
    "Jakku is a remote desert world of wreckage from the Empire's fall and the starting point of Rey's journey."
);

entity(
    "exegol",
    "Exegol",
    "place",
    "Hidden Sith world of the Final Order.",
    "Exegol is a dark world in the Unknown Regions where Emperor Palpatine rebuilds Sith power and faces Rey."
);

entity(
    "mandalore",
    "Mandalore",
    "place",
    "Homeworld of the Mandalorians.",
    "Mandalore is the cultural home of Mandalorian warriors, scarred by wars involving Death Watch, the Empire, and later Din Djarin's people."
);

entity(
    "clone-wars",
    "Clone Wars",
    "event",
    "Galaxy-spanning war between Republic and Separatists.",
    "The Clone Wars pit the Galactic Republic and its clone troopers against the Separatists, while Darth Sidious manipulates both sides."
);

entity(
    "order-66",
    "Order 66",
    "event",
    "Command that turns clone troopers against the Jedi.",
    "Order 66 is the secret command that causes clone troopers to betray and nearly annihilate the Jedi Order."
);

entity(
    "battle-of-yavin",
    "Battle of Yavin",
    "event",
    "Rebel victory that destroys the first Death Star.",
    "The Battle of Yavin is the Rebel Alliance's assault that destroys the first Death Star, making Luke Skywalker a hero of the Rebellion."
);

entity(
    "battle-of-endor",
    "Battle of Endor",
    "event",
    "Battle that topples the Empire's second Death Star.",
    "The Battle of Endor unites the Rebel Alliance fleet and ground forces to destroy the second Death Star and break the Galactic Empire's grip."
);

/*
 * RELATIONSHIPS
 */

rel("george-lucas", "star-wars", "created", "George Lucas created Star Wars.", 0.99, 0.99);
rel("lucasfilm", "star-wars", "produced", "Lucasfilm produces Star Wars.", 0.99, 0.95);
rel("disney", "lucasfilm", "contains", "Disney owns Lucasfilm.", 0.98, 0.9);

rel("star-wars", "a-new-hope", "contains", "A New Hope is a core Star Wars film.", 0.99, 0.97);
rel("star-wars", "the-empire-strikes-back", "contains", "The Empire Strikes Back is a core Star Wars film.", 0.99, 0.97);
rel("star-wars", "return-of-the-jedi", "contains", "Return of the Jedi is a core Star Wars film.", 0.99, 0.97);
rel("star-wars", "the-phantom-menace", "contains", "The Phantom Menace opens the prequel trilogy.", 0.98, 0.94);
rel("star-wars", "attack-of-the-clones", "contains", "Attack of the Clones continues the prequel trilogy.", 0.98, 0.94);
rel("star-wars", "revenge-of-the-sith", "contains", "Revenge of the Sith concludes the prequel trilogy.", 0.98, 0.95);
rel("star-wars", "the-force-awakens", "contains", "The Force Awakens opens the sequel trilogy.", 0.98, 0.94);
rel("star-wars", "the-last-jedi", "contains", "The Last Jedi continues the sequel trilogy.", 0.98, 0.93);
rel("star-wars", "the-rise-of-skywalker", "contains", "The Rise of Skywalker concludes the Skywalker saga films.", 0.98, 0.94);
rel("star-wars", "rogue-one", "contains", "Rogue One is a Star Wars standalone film.", 0.97, 0.92);
rel("star-wars", "solo", "contains", "Solo is a Star Wars standalone film.", 0.96, 0.9);

rel("a-new-hope", "the-empire-strikes-back", "preceded", "A New Hope precedes The Empire Strikes Back.", 0.99, 0.9);
rel("the-empire-strikes-back", "return-of-the-jedi", "preceded", "The Empire Strikes Back precedes Return of the Jedi.", 0.99, 0.9);

rel("luke-skywalker", "rebel-alliance", "member_of", "Luke fights for the Rebel Alliance.", 0.99, 0.97);
rel("leia-organa", "rebel-alliance", "leads", "Leia is a principal Rebel leader.", 0.99, 0.98);
rel("han-solo", "rebel-alliance", "member_of", "Han joins the Rebel Alliance.", 0.98, 0.95);
rel("chewbacca", "han-solo", "connected_to", "Chewbacca is Han Solo's closest partner.", 0.99, 0.98);
rel("han-solo", "millennium-falcon", "uses", "Han captains the Millennium Falcon.", 0.99, 0.98);
rel("chewbacca", "millennium-falcon", "uses", "Chewbacca co-pilots the Millennium Falcon.", 0.98, 0.95);

rel("luke-skywalker", "obi-wan-kenobi", "connected_to", "Obi-Wan mentors Luke.", 0.99, 0.98);
rel("luke-skywalker", "yoda", "connected_to", "Yoda trains Luke on Dagobah.", 0.99, 0.98);
rel("luke-skywalker", "darth-vader", "connected_to", "Vader is Luke's father and rival.", 0.99, 0.99);
rel("luke-skywalker", "leia-organa", "connected_to", "Luke and Leia are twins.", 0.99, 0.99);
rel("luke-skywalker", "the-force", "uses", "Luke is a Jedi sensitive to the Force.", 0.99, 0.97);
rel("luke-skywalker", "tatooine", "located_in", "Luke is raised on Tatooine.", 0.98, 0.94);
rel("luke-skywalker", "rey", "connected_to", "Luke later trains Rey.", 0.97, 0.95);

rel("anakin-skywalker", "obi-wan-kenobi", "connected_to", "Obi-Wan trains Anakin.", 0.99, 0.98);
rel("anakin-skywalker", "padme-amidala", "connected_to", "Anakin and Padmé are secretly married.", 0.99, 0.98);
rel("anakin-skywalker", "darth-vader", "connected_to", "Anakin becomes Darth Vader.", 0.99, 0.99);
rel("anakin-skywalker", "emperor-palpatine", "opposed_by", "Palpatine seduces Anakin to the dark side.", 0.99, 0.98);
rel("anakin-skywalker", "ahsoka-tano", "connected_to", "Ahsoka is Anakin's Padawan.", 0.98, 0.96);
rel("anakin-skywalker", "jedi-order", "member_of", "Anakin serves as a Jedi Knight.", 0.98, 0.95);
rel("darth-vader", "sith", "member_of", "Vader is a Sith Lord.", 0.99, 0.97);
rel("darth-vader", "galactic-empire", "leads", "Vader enforces the Empire's will.", 0.99, 0.97);

rel("emperor-palpatine", "sith", "leads", "Palpatine is the reigning Sith Master.", 0.99, 0.98);
rel("emperor-palpatine", "galactic-empire", "leads", "Palpatine rules the Galactic Empire.", 0.99, 0.99);
rel("emperor-palpatine", "galactic-republic", "leads", "As Chancellor, Palpatine controls the Republic.", 0.98, 0.95);
rel("emperor-palpatine", "darth-maul", "connected_to", "Maul is Sidious's earlier apprentice.", 0.97, 0.93);
rel("emperor-palpatine", "count-dooku", "connected_to", "Dooku serves Sidious as Darth Tyranus.", 0.98, 0.95);
rel("emperor-palpatine", "exegol", "located_in", "Palpatine returns from Exegol.", 0.97, 0.96);

rel("obi-wan-kenobi", "jedi-order", "member_of", "Obi-Wan is a Jedi Master.", 0.99, 0.96);
rel("yoda", "jedi-order", "leads", "Yoda leads the Jedi Order.", 0.99, 0.97);
rel("qui-gon-jinn", "obi-wan-kenobi", "connected_to", "Qui-Gon trains Obi-Wan.", 0.98, 0.94);
rel("qui-gon-jinn", "anakin-skywalker", "connected_to", "Qui-Gon discovers Anakin.", 0.98, 0.95);
rel("mace-windu", "jedi-order", "member_of", "Mace Windu sits on the Jedi Council.", 0.98, 0.93);

rel("padme-amidala", "naboo", "located_in", "Padmé represents Naboo.", 0.99, 0.95);
rel("padme-amidala", "luke-skywalker", "connected_to", "Padmé is Luke's mother.", 0.99, 0.97);
rel("padme-amidala", "leia-organa", "connected_to", "Padmé is Leia's mother.", 0.99, 0.97);

rel("leia-organa", "alderaan", "located_in", "Leia is princess of Alderaan.", 0.99, 0.96);
rel("leia-organa", "resistance", "leads", "Leia founds and leads the Resistance.", 0.99, 0.97);
rel("leia-organa", "kylo-ren", "connected_to", "Ben Solo / Kylo Ren is Leia's son.", 0.99, 0.98);
rel("han-solo", "kylo-ren", "connected_to", "Ben Solo is Han's son.", 0.99, 0.98);

rel("rey", "jakku", "located_in", "Rey begins on Jakku.", 0.98, 0.95);
rel("rey", "the-force", "uses", "Rey is powerfully Force-sensitive.", 0.99, 0.97);
rel("rey", "kylo-ren", "opposed_by", "Rey and Kylo Ren are bound as rivals and dyad.", 0.99, 0.98);
rel("rey", "resistance", "member_of", "Rey fights with the Resistance.", 0.97, 0.94);
rel("finn", "first-order", "opposed_by", "Finn defects from the First Order.", 0.98, 0.95);
rel("finn", "resistance", "member_of", "Finn joins the Resistance.", 0.98, 0.95);
rel("poe-dameron", "resistance", "leads", "Poe becomes a Resistance leader.", 0.98, 0.94);

rel("galactic-empire", "death-star", "uses", "The Empire builds the Death Star.", 0.99, 0.97);
rel("rebel-alliance", "death-star", "opposed_by", "The Rebels seek to destroy the Death Star.", 0.99, 0.97);
rel("rebel-alliance", "galactic-empire", "opposed_by", "The Rebellion fights the Empire.", 0.99, 0.99);
rel("resistance", "first-order", "opposed_by", "The Resistance fights the First Order.", 0.99, 0.98);
rel("jedi-order", "sith", "opposed_by", "Jedi and Sith are ancient enemies.", 0.99, 0.98);
rel("jedi-order", "the-force", "uses", "Jedi serve the light side of the Force.", 0.99, 0.96);
rel("sith", "the-force", "uses", "Sith wield the dark side of the Force.", 0.99, 0.96);

rel("clone-wars", "galactic-republic", "involved", "The Republic fights the Clone Wars.", 0.99, 0.96);
rel("clone-wars", "separatists", "involved", "The Separatists fight the Clone Wars.", 0.99, 0.96);
rel("clone-wars", "clone-troopers", "involved", "Clone troopers are the Republic's army.", 0.99, 0.95);
rel("order-66", "clone-troopers", "involved", "Clone troopers carry out Order 66.", 0.99, 0.98);
rel("order-66", "jedi-order", "opposed_by", "Order 66 nearly destroys the Jedi.", 0.99, 0.99);
rel("order-66", "emperor-palpatine", "caused", "Palpatine issues Order 66.", 0.99, 0.98);

rel("jango-fett", "clone-troopers", "created", "Jango is the clones' genetic template.", 0.99, 0.96);
rel("jango-fett", "boba-fett", "connected_to", "Boba is Jango's clone son.", 0.99, 0.97);
rel("count-dooku", "separatists", "leads", "Dooku leads the Separatists.", 0.99, 0.96);
rel("general-grievous", "separatists", "leads", "Grievous commands Separatist forces.", 0.98, 0.94);

rel("battle-of-yavin", "death-star", "involved", "Yavin destroys the first Death Star.", 0.99, 0.97);
rel("battle-of-yavin", "luke-skywalker", "involved", "Luke fires the shot that destroys the Death Star.", 0.99, 0.97);
rel("battle-of-endor", "death-star", "involved", "Endor destroys the second Death Star.", 0.99, 0.96);
rel("battle-of-endor", "darth-vader", "involved", "Vader turns on Palpatine at Endor.", 0.98, 0.97);

rel("r2-d2", "c-3po", "connected_to", "R2-D2 and C-3PO travel together across eras.", 0.99, 0.95);
rel("r2-d2", "a-new-hope", "involved", "R2-D2 carries the Death Star plans.", 0.98, 0.95);
rel("jabba-the-hutt", "tatooine", "located_in", "Jabba rules from Tatooine.", 0.98, 0.93);
rel("jabba-the-hutt", "han-solo", "opposed_by", "Jabba holds Han prisoner.", 0.97, 0.94);

rel("din-djarin", "grogu", "connected_to", "Din protects Grogu.", 0.99, 0.97);
rel("din-djarin", "mandalore", "connected_to", "Din's creed is rooted in Mandalorian culture.", 0.97, 0.94);
rel("grogu", "the-force", "uses", "Grogu is Force-sensitive.", 0.98, 0.95);
rel("ahsoka-tano", "jedi-order", "member_of", "Ahsoka begins as a Jedi Padawan.", 0.96, 0.93);

rel("mustafar", "anakin-skywalker", "occurred_at", "Anakin falls on Mustafar.", 0.98, 0.96);
rel("dagobah", "yoda", "located_in", "Yoda lives in exile on Dagobah.", 0.99, 0.95);
rel("coruscant", "jedi-order", "located_in", "The Jedi Temple stands on Coruscant.", 0.98, 0.94);
rel("lightsaber", "jedi-order", "uses", "Jedi traditionally wield lightsabers.", 0.98, 0.92);
rel("lightsaber", "sith", "uses", "Sith wield lightsabers as well.", 0.97, 0.9);

rel("star-wars", "the-force", "connected_to", "The Force is central to Star Wars mythology.", 0.99, 0.99);
rel("star-wars", "jedi-order", "connected_to", "The Jedi are central to Star Wars.", 0.99, 0.98);
rel("star-wars", "galactic-empire", "connected_to", "The Empire defines the original saga conflict.", 0.98, 0.97);

module.exports = {
    entities,
    relationships
};
