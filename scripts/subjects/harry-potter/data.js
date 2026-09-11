/*
 * Harry Potter subject data.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "fiction", extras = {}) {
    entities.push({
        slug, name, type, evidence, short_description, description,
        aliases: extras.aliases || [],
        parentSlug: extras.parentSlug || undefined
    });
}

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

entity("harry-potter", "Harry Potter", "work",
    "The wizarding saga of the Boy Who Lived.",
    "Harry Potter is a fantasy franchise by J.K. Rowling following Harry Potter, Hermione Granger, and Ron Weasley through Hogwarts, Voldemort's return, and the Second Wizarding War.");

entity("jk-rowling", "J.K. Rowling", "person",
    "Author of the Harry Potter books.",
    "J.K. Rowling created the Harry Potter series, introducing Hogwarts, the Deathly Hallows, and the conflict with Lord Voldemort.");

entity("warner-bros", "Warner Bros.", "organization",
    "Studio behind the Harry Potter films.",
    "Warner Bros. produced the Harry Potter film adaptations starring Daniel Radcliffe, Emma Watson, and Rupert Grint.");

entity("philosophers-stone", "Philosopher's Stone", "work",
    "The first novel and film of the series.",
    "Harry Potter and the Philosopher's Stone introduces Harry's arrival at Hogwarts and the quest to protect the Philosopher's Stone from Voldemort.");

entity("chamber-of-secrets", "Chamber of Secrets", "work",
    "Second year story of the basilisk and the Chamber.",
    "The Chamber of Secrets reveals Salazar Slytherin's monster and Ginny Weasley's entanglement with Tom Riddle's diary.");

entity("prisoner-of-azkaban", "Prisoner of Azkaban", "work",
    "Third year story of Sirius Black and the Marauders.",
    "Prisoner of Azkaban reframes Harry's family history through Sirius Black, Remus Lupin, and Peter Pettigrew.");

entity("goblet-of-fire", "Goblet of Fire", "work",
    "Triwizard Tournament and Voldemort's rebirth.",
    "Goblet of Fire brings the Triwizard Tournament to Hogwarts and ends with Lord Voldemort's return to a body.");

entity("order-of-the-phoenix", "Order of the Phoenix", "work",
    "Fifth year war against Ministry denial.",
    "Order of the Phoenix follows Dumbledore's Army, Umbridge's regime, and the battle in the Department of Mysteries.");

entity("half-blood-prince", "Half-Blood Prince", "work",
    "Sixth year study of Horcruxes.",
    "Half-Blood Prince reveals Tom Riddle's past, the Half-Blood Prince's book, and Dumbledore's hunt for Horcruxes.");

entity("deathly-hallows", "Deathly Hallows", "work",
    "Final hunt for Horcruxes and Hallows.",
    "Deathly Hallows sends Harry, Ron, and Hermione on the run to destroy Horcruxes and understand the Deathly Hallows.");

entity("harry-james-potter", "Harry James Potter", "person",
    "The Boy Who Lived; protagonist of the series.",
    "Harry Potter survives Voldemort as a baby, attends Hogwarts in Gryffindor, and leads the fight to destroy the Dark Lord's Horcruxes.");

entity("hermione-granger", "Hermione Granger", "person",
    "Brilliant Muggle-born witch and Harry's closest ally.",
    "Hermione Granger is a Gryffindor student whose intellect and courage are essential to every major victory beside Harry Potter and Ron Weasley.");

entity("ron-weasley", "Ron Weasley", "person",
    "Harry's best friend from the Weasley family.",
    "Ron Weasley is a Gryffindor from a large wizarding family who stands with Harry Potter through Hogwarts and the war.");

entity("albus-dumbledore", "Albus Dumbledore", "person",
    "Headmaster of Hogwarts and leader against Voldemort.",
    "Albus Dumbledore guides Harry Potter, leads the Order of the Phoenix, and orchestrates the campaign against Horcruxes.");

entity("lord-voldemort", "Lord Voldemort", "person",
    "Dark wizard also known as Tom Riddle.",
    "Lord Voldemort, born Tom Marvolo Riddle, splits his soul into Horcruxes and wages war on Hogwarts and the wizarding world.");

entity("severus-snape", "Severus Snape", "person",
    "Potions master whose loyalties define the war.",
    "Severus Snape teaches at Hogwarts, serves as a double agent between Dumbledore and Voldemort, and protects Harry for Lily Potter's sake.");

entity("sirius-black", "Sirius Black", "person",
    "Harry's godfather and escaped prisoner of Azkaban.",
    "Sirius Black is wrongly imprisoned for betraying the Potters, escapes Azkaban, and becomes a vital link to Harry's parents.");

entity("remus-lupin", "Remus Lupin", "person",
    "Werewolf Marauder and Defense professor.",
    "Remus Lupin teaches Defense Against the Dark Arts, joins the Order of the Phoenix, and shares the Marauders' past with James Potter.");

entity("rubeus-hagrid", "Rubeus Hagrid", "person",
    "Keeper of Keys and friend to Harry.",
    "Rubeus Hagrid brings Harry to Hogwarts, cares for magical creatures, and remains fiercely loyal to Dumbledore.");

entity("draco-malfoy", "Draco Malfoy", "person",
    "Slytherin rival pulled into Death Eater plots.",
    "Draco Malfoy antagonizes Harry at Hogwarts and is forced into Voldemort's plans during the Half-Blood Prince year.");

entity("ginny-weasley", "Ginny Weasley", "person",
    "Youngest Weasley; opens the Chamber of Secrets.",
    "Ginny Weasley becomes central from the Chamber of Secrets onward and later fights in the Battle of Hogwarts.");

entity("luna-lovegood", "Luna Lovegood", "person",
    "Ravenclaw ally of Dumbledore's Army.",
    "Luna Lovegood joins Harry's circle through Dumbledore's Army and remains a steadfast friend through the war.");

entity("neville-longbottom", "Neville Longbottom", "person",
    "Gryffindor who destroys Nagini.",
    "Neville Longbottom grows from uncertain student to hero of the Battle of Hogwarts, destroying Voldemort's final Horcrux snake.");

entity("minerva-mcgonagall", "Minerva McGonagall", "person",
    "Transfiguration professor and Hogwarts leader.",
    "Minerva McGonagall protects Hogwarts students and takes command during the final battle against Voldemort.");

entity("hogwarts", "Hogwarts", "place",
    "School of Witchcraft and Wizardry.",
    "Hogwarts is the magical school where Harry Potter, Hermione Granger, and Ron Weasley train, fight, and ultimately confront Voldemort.");

entity("gryffindor", "Gryffindor", "organization",
    "Hogwarts house of courage.",
    "Gryffindor houses Harry Potter, Hermione Granger, Ron Weasley, and many Order allies.");

entity("slytherin", "Slytherin", "organization",
    "Hogwarts house tied to Salazar Slytherin.",
    "Slytherin is associated with ambition, pure-blood politics, and figures like Draco Malfoy and young Tom Riddle.");

entity("death-eaters", "Death Eaters", "organization",
    "Voldemort's followers.",
    "Death Eaters serve Lord Voldemort through both wizarding wars, enforcing terror across the magical world.");

entity("order-of-the-phoenix-group", "Order of the Phoenix", "organization",
    "Secret society opposing Voldemort.",
    "The Order of the Phoenix, led by Dumbledore, resists Voldemort with members like Sirius Black, Remus Lupin, and Mad-Eye Moody.");

entity("ministry-of-magic", "Ministry of Magic", "organization",
    "Wizarding government of Britain.",
    "The Ministry of Magic governs magical Britain, often failing Harry Potter until Voldemort's return becomes undeniable.");

entity("horcrux", "Horcrux", "object",
    "Object storing a fragment of a soul.",
    "Horcruxes keep Voldemort immortal until Harry Potter, Ron Weasley, and Hermione Granger destroy each fragment.");

entity("deathly-hallows-objects", "Deathly Hallows", "object",
    "Elder Wand, Resurrection Stone, and Cloak of Invisibility.",
    "The Deathly Hallows are three legendary objects whose mastery shapes the endgame between Harry Potter and Voldemort.");

entity("sorting-hat", "Sorting Hat", "object",
    "Sentient hat that sorts Hogwarts students.",
    "The Sorting Hat places students into Gryffindor, Slytherin, Ravenclaw, or Hufflepuff and later aids Neville Longbottom.");

entity("godrics-hollow", "Godric's Hollow", "place",
    "Village where Harry's parents died.",
    "Godric's Hollow is where James and Lily Potter fell to Voldemort and where Harry Potter became the Boy Who Lived.");

entity("azkaban", "Azkaban", "place",
    "Wizarding prison guarded by Dementors.",
    "Azkaban holds Sirius Black and other prisoners under the watch of Dementors until the war reshapes everything.");

entity("diagon-alley", "Diagon Alley", "place",
    "Magical shopping street in London.",
    "Diagon Alley is where wizarding families buy wands, books, and school supplies before each Hogwarts year.");

entity("battle-of-hogwarts", "Battle of Hogwarts", "event",
    "Final battle against Voldemort.",
    "The Battle of Hogwarts ends the Second Wizarding War as Harry Potter confronts Lord Voldemort in the school's ruins.");

entity("second-wizarding-war", "Second Wizarding War", "event",
    "Conflict after Voldemort's return.",
    "The Second Wizarding War pits the Order of the Phoenix and Hogwarts against Voldemort and the Death Eaters.");

rel("jk-rowling", "harry-potter", "created", "J.K. Rowling created Harry Potter.", 0.99, 0.99);
rel("warner-bros", "harry-potter", "produced", "Warner Bros. produced the films.", 0.95, 0.9);
rel("harry-potter", "philosophers-stone", "contains", "The saga begins with the Philosopher's Stone.", 0.99, 0.96);
rel("harry-potter", "chamber-of-secrets", "contains", "Chamber of Secrets continues the saga.", 0.98, 0.94);
rel("harry-potter", "prisoner-of-azkaban", "contains", "Prisoner of Azkaban deepens the past.", 0.98, 0.94);
rel("harry-potter", "goblet-of-fire", "contains", "Goblet of Fire marks Voldemort's return.", 0.98, 0.95);
rel("harry-potter", "order-of-the-phoenix", "contains", "Order of the Phoenix escalates the war.", 0.98, 0.94);
rel("harry-potter", "half-blood-prince", "contains", "Half-Blood Prince reveals Horcruxes.", 0.98, 0.95);
rel("harry-potter", "deathly-hallows", "contains", "Deathly Hallows ends the war.", 0.99, 0.96);

rel("harry-james-potter", "hogwarts", "located_in", "Harry attends Hogwarts.", 0.99, 0.97);
rel("harry-james-potter", "gryffindor", "member_of", "Harry is sorted into Gryffindor.", 0.99, 0.96);
rel("hermione-granger", "gryffindor", "member_of", "Hermione is a Gryffindor.", 0.99, 0.95);
rel("ron-weasley", "gryffindor", "member_of", "Ron is a Gryffindor.", 0.99, 0.95);
rel("harry-james-potter", "hermione-granger", "connected_to", "Harry and Hermione are closest allies.", 0.99, 0.98);
rel("harry-james-potter", "ron-weasley", "connected_to", "Harry and Ron are best friends.", 0.99, 0.98);
rel("harry-james-potter", "lord-voldemort", "opposed_by", "Harry is Voldemort's prophesied enemy.", 0.99, 0.99);
rel("harry-james-potter", "albus-dumbledore", "connected_to", "Dumbledore mentors Harry.", 0.99, 0.97);
rel("harry-james-potter", "severus-snape", "connected_to", "Snape's fate is bound to Harry's.", 0.98, 0.96);
rel("harry-james-potter", "sirius-black", "connected_to", "Sirius is Harry's godfather.", 0.99, 0.97);

rel("lord-voldemort", "death-eaters", "leads", "Voldemort commands the Death Eaters.", 0.99, 0.98);
rel("lord-voldemort", "horcrux", "uses", "Voldemort creates multiple Horcruxes.", 0.99, 0.99);
rel("lord-voldemort", "slytherin", "member_of", "Tom Riddle was a Slytherin.", 0.97, 0.93);
rel("albus-dumbledore", "order-of-the-phoenix-group", "leads", "Dumbledore leads the Order.", 0.99, 0.97);
rel("albus-dumbledore", "hogwarts", "leads", "Dumbledore is Hogwarts headmaster.", 0.99, 0.96);
rel("severus-snape", "death-eaters", "member_of", "Snape once served as a Death Eater.", 0.96, 0.94);
rel("severus-snape", "order-of-the-phoenix-group", "member_of", "Snape spies for the Order.", 0.97, 0.95);
rel("draco-malfoy", "slytherin", "member_of", "Draco is a Slytherin.", 0.99, 0.94);
rel("draco-malfoy", "death-eaters", "member_of", "Draco is pressed into the Death Eaters.", 0.96, 0.93);

rel("sirius-black", "azkaban", "located_in", "Sirius was imprisoned in Azkaban.", 0.98, 0.94);
rel("sirius-black", "remus-lupin", "connected_to", "Sirius and Lupin were Marauders together.", 0.98, 0.95);
rel("ginny-weasley", "chamber-of-secrets", "involved", "Ginny opens the Chamber via the diary.", 0.98, 0.95);
rel("neville-longbottom", "battle-of-hogwarts", "involved", "Neville kills Nagini at Hogwarts.", 0.98, 0.96);
rel("luna-lovegood", "order-of-the-phoenix", "involved", "Luna joins Dumbledore's Army in OOTP.", 0.95, 0.9);
rel("minerva-mcgonagall", "hogwarts", "leads", "McGonagall defends and leads Hogwarts.", 0.97, 0.93);
rel("rubeus-hagrid", "hogwarts", "member_of", "Hagrid serves Hogwarts.", 0.98, 0.92);

rel("horcrux", "deathly-hallows", "connected_to", "Horcruxes and Hallows define the endgame.", 0.97, 0.96);
rel("deathly-hallows-objects", "deathly-hallows", "connected_to", "The objects are revealed in Deathly Hallows.", 0.98, 0.95);
rel("battle-of-hogwarts", "second-wizarding-war", "part_of", "The battle ends the Second Wizarding War.", 0.99, 0.97);
rel("battle-of-hogwarts", "hogwarts", "occurred_at", "The final battle is fought at Hogwarts.", 0.99, 0.97);
rel("godrics-hollow", "harry-james-potter", "connected_to", "Harry's survival begins at Godric's Hollow.", 0.98, 0.95);
rel("ministry-of-magic", "second-wizarding-war", "involved", "The Ministry is consumed by the war.", 0.96, 0.92);
rel("harry-potter", "harry-james-potter", "contains", "Harry is the saga's central character.", 0.99, 0.98);
rel("harry-potter", "hogwarts", "connected_to", "Hogwarts is the saga's heart.", 0.99, 0.98);

module.exports = { entities, relationships };
