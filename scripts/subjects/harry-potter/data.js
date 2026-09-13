/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "harry-potter",
        "name": "Harry Potter",
        "type": "work",
        "evidence": "fiction",
        "short_description": "The wizarding saga of the Boy Who Lived.",
        "description": "Harry Potter is a fantasy franchise by J.K. Rowling following Harry Potter, Hermione Granger, and Ron Weasley through Hogwarts, Voldemort's return, and the Second Wizarding War.",
        "aliases": []
    },
    {
        "slug": "jk-rowling",
        "name": "J.K. Rowling",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Author of the Harry Potter books.",
        "description": "J.K. Rowling created the Harry Potter series, introducing Hogwarts, the Deathly Hallows, and the conflict with Lord Voldemort.",
        "aliases": []
    },
    {
        "slug": "warner-bros",
        "name": "Warner Bros.",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio behind the Harry Potter films.",
        "description": "Warner Bros. produced the Harry Potter film adaptations starring Daniel Radcliffe, Emma Watson, and Rupert Grint.",
        "aliases": []
    },
    {
        "slug": "philosophers-stone",
        "name": "Philosopher's Stone",
        "type": "work",
        "evidence": "fiction",
        "short_description": "The first novel and film of the series.",
        "description": "Harry Potter and the Philosopher's Stone introduces Harry's arrival at Hogwarts and the quest to protect the Philosopher's Stone from Voldemort.",
        "aliases": []
    },
    {
        "slug": "chamber-of-secrets",
        "name": "Chamber of Secrets",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Second year story of the basilisk and the Chamber.",
        "description": "The Chamber of Secrets reveals Salazar Slytherin's monster and Ginny Weasley's entanglement with Tom Riddle's diary.",
        "aliases": []
    },
    {
        "slug": "prisoner-of-azkaban",
        "name": "Prisoner of Azkaban",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Third year story of Sirius Black and the Marauders.",
        "description": "Prisoner of Azkaban reframes Harry's family history through Sirius Black, Remus Lupin, and Peter Pettigrew.",
        "aliases": []
    },
    {
        "slug": "goblet-of-fire",
        "name": "Goblet of Fire",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Triwizard Tournament and Voldemort's rebirth.",
        "description": "Goblet of Fire brings the Triwizard Tournament to Hogwarts and ends with Lord Voldemort's return to a body.",
        "aliases": []
    },
    {
        "slug": "order-of-the-phoenix",
        "name": "Order of the Phoenix",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Fifth year war against Ministry denial.",
        "description": "Order of the Phoenix follows Dumbledore's Army, Umbridge's regime, and the battle in the Department of Mysteries.",
        "aliases": []
    },
    {
        "slug": "half-blood-prince",
        "name": "Half-Blood Prince",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Sixth year study of Horcruxes.",
        "description": "Half-Blood Prince reveals Tom Riddle's past, the Half-Blood Prince's book, and Dumbledore's hunt for Horcruxes.",
        "aliases": []
    },
    {
        "slug": "deathly-hallows",
        "name": "Deathly Hallows",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Final hunt for Horcruxes and Hallows.",
        "description": "Deathly Hallows sends Harry, Ron, and Hermione on the run to destroy Horcruxes and understand the Deathly Hallows.",
        "aliases": []
    },
    {
        "slug": "harry-james-potter",
        "name": "Harry James Potter",
        "type": "person",
        "evidence": "fiction",
        "short_description": "The Boy Who Lived; protagonist of the series.",
        "description": "Harry Potter survives Voldemort as a baby, attends Hogwarts in Gryffindor, and leads the fight to destroy the Dark Lord's Horcruxes.",
        "aliases": []
    },
    {
        "slug": "hermione-granger",
        "name": "Hermione Granger",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Brilliant Muggle-born witch and Harry's closest ally.",
        "description": "Hermione Granger is a Gryffindor student whose intellect and courage are essential to every major victory beside Harry Potter and Ron Weasley.",
        "aliases": []
    },
    {
        "slug": "ron-weasley",
        "name": "Ron Weasley",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Harry's best friend from the Weasley family.",
        "description": "Ron Weasley is a Gryffindor from a large wizarding family who stands with Harry Potter through Hogwarts and the war.",
        "aliases": []
    },
    {
        "slug": "albus-dumbledore",
        "name": "Albus Dumbledore",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Headmaster of Hogwarts and leader against Voldemort.",
        "description": "Albus Dumbledore guides Harry Potter, leads the Order of the Phoenix, and orchestrates the campaign against Horcruxes.",
        "aliases": []
    },
    {
        "slug": "lord-voldemort",
        "name": "Lord Voldemort",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dark wizard also known as Tom Riddle.",
        "description": "Lord Voldemort, born Tom Marvolo Riddle, splits his soul into Horcruxes and wages war on Hogwarts and the wizarding world.",
        "aliases": []
    },
    {
        "slug": "severus-snape",
        "name": "Severus Snape",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Potions master whose loyalties define the war.",
        "description": "Severus Snape teaches at Hogwarts, serves as a double agent between Dumbledore and Voldemort, and protects Harry for Lily Potter's sake.",
        "aliases": []
    },
    {
        "slug": "sirius-black",
        "name": "Sirius Black",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Harry's godfather and escaped prisoner of Azkaban.",
        "description": "Sirius Black is wrongly imprisoned for betraying the Potters, escapes Azkaban, and becomes a vital link to Harry's parents.",
        "aliases": []
    },
    {
        "slug": "remus-lupin",
        "name": "Remus Lupin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Werewolf Marauder and Defense professor.",
        "description": "Remus Lupin teaches Defense Against the Dark Arts, joins the Order of the Phoenix, and shares the Marauders' past with James Potter.",
        "aliases": []
    },
    {
        "slug": "rubeus-hagrid",
        "name": "Rubeus Hagrid",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Keeper of Keys and friend to Harry.",
        "description": "Rubeus Hagrid brings Harry to Hogwarts, cares for magical creatures, and remains fiercely loyal to Dumbledore.",
        "aliases": []
    },
    {
        "slug": "draco-malfoy",
        "name": "Draco Malfoy",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Slytherin rival pulled into Death Eater plots.",
        "description": "Draco Malfoy antagonizes Harry at Hogwarts and is forced into Voldemort's plans during the Half-Blood Prince year.",
        "aliases": []
    },
    {
        "slug": "ginny-weasley",
        "name": "Ginny Weasley",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Youngest Weasley; opens the Chamber of Secrets.",
        "description": "Ginny Weasley becomes central from the Chamber of Secrets onward and later fights in the Battle of Hogwarts.",
        "aliases": []
    },
    {
        "slug": "luna-lovegood",
        "name": "Luna Lovegood",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ravenclaw ally of Dumbledore's Army.",
        "description": "Luna Lovegood joins Harry's circle through Dumbledore's Army and remains a steadfast friend through the war.",
        "aliases": []
    },
    {
        "slug": "neville-longbottom",
        "name": "Neville Longbottom",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gryffindor who destroys Nagini.",
        "description": "Neville Longbottom grows from uncertain student to hero of the Battle of Hogwarts, destroying Voldemort's final Horcrux snake.",
        "aliases": []
    },
    {
        "slug": "minerva-mcgonagall",
        "name": "Minerva McGonagall",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Transfiguration professor and Hogwarts leader.",
        "description": "Minerva McGonagall protects Hogwarts students and takes command during the final battle against Voldemort.",
        "aliases": []
    },
    {
        "slug": "hogwarts",
        "name": "Hogwarts",
        "type": "place",
        "evidence": "fiction",
        "short_description": "School of Witchcraft and Wizardry.",
        "description": "Hogwarts is the magical school where Harry Potter, Hermione Granger, and Ron Weasley train, fight, and ultimately confront Voldemort.",
        "aliases": []
    },
    {
        "slug": "gryffindor",
        "name": "Gryffindor",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Hogwarts house of courage.",
        "description": "Gryffindor houses Harry Potter, Hermione Granger, Ron Weasley, and many Order allies.",
        "aliases": []
    },
    {
        "slug": "slytherin",
        "name": "Slytherin",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Hogwarts house tied to Salazar Slytherin.",
        "description": "Slytherin is associated with ambition, pure-blood politics, and figures like Draco Malfoy and young Tom Riddle.",
        "aliases": []
    },
    {
        "slug": "death-eaters",
        "name": "Death Eaters",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Voldemort's followers.",
        "description": "Death Eaters serve Lord Voldemort through both wizarding wars, enforcing terror across the magical world.",
        "aliases": []
    },
    {
        "slug": "order-of-the-phoenix-group",
        "name": "Order of the Phoenix",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Secret society opposing Voldemort.",
        "description": "The Order of the Phoenix, led by Dumbledore, resists Voldemort with members like Sirius Black, Remus Lupin, and Mad-Eye Moody.",
        "aliases": []
    },
    {
        "slug": "ministry-of-magic",
        "name": "Ministry of Magic",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Wizarding government of Britain.",
        "description": "The Ministry of Magic governs magical Britain, often failing Harry Potter until Voldemort's return becomes undeniable.",
        "aliases": []
    },
    {
        "slug": "horcrux",
        "name": "Horcrux",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Object storing a fragment of a soul.",
        "description": "Horcruxes keep Voldemort immortal until Harry Potter, Ron Weasley, and Hermione Granger destroy each fragment.",
        "aliases": []
    },
    {
        "slug": "deathly-hallows-objects",
        "name": "Deathly Hallows",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Elder Wand, Resurrection Stone, and Cloak of Invisibility.",
        "description": "The Deathly Hallows are three legendary objects whose mastery shapes the endgame between Harry Potter and Voldemort.",
        "aliases": []
    },
    {
        "slug": "sorting-hat",
        "name": "Sorting Hat",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Sentient hat that sorts Hogwarts students.",
        "description": "The Sorting Hat places students into Gryffindor, Slytherin, Ravenclaw, or Hufflepuff and later aids Neville Longbottom.",
        "aliases": []
    },
    {
        "slug": "godrics-hollow",
        "name": "Godric's Hollow",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Village where Harry's parents died.",
        "description": "Godric's Hollow is where James and Lily Potter fell to Voldemort and where Harry Potter became the Boy Who Lived.",
        "aliases": []
    },
    {
        "slug": "azkaban",
        "name": "Azkaban",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Wizarding prison guarded by Dementors.",
        "description": "Azkaban holds Sirius Black and other prisoners under the watch of Dementors until the war reshapes everything.",
        "aliases": []
    },
    {
        "slug": "diagon-alley",
        "name": "Diagon Alley",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Magical shopping street in London.",
        "description": "Diagon Alley is where wizarding families buy wands, books, and school supplies before each Hogwarts year.",
        "aliases": []
    },
    {
        "slug": "battle-of-hogwarts",
        "name": "Battle of Hogwarts",
        "type": "event",
        "evidence": "fiction",
        "short_description": "Final battle against Voldemort.",
        "description": "The Battle of Hogwarts ends the Second Wizarding War as Harry Potter confronts Lord Voldemort in the school's ruins.",
        "aliases": []
    },
    {
        "slug": "second-wizarding-war",
        "name": "Second Wizarding War",
        "type": "event",
        "evidence": "fiction",
        "short_description": "Conflict after Voldemort's return.",
        "description": "The Second Wizarding War pits the Order of the Phoenix and Hogwarts against Voldemort and the Death Eaters.",
        "aliases": []
    },
    {
        "slug": "harry-potter-figures",
        "name": "Harry Potter figures",
        "type": "topic",
        "short_description": "People and named forces central to Harry Potter.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Harry Potter."
    },
    {
        "slug": "harry-potter-places",
        "name": "Harry Potter places",
        "type": "place",
        "short_description": "Locations and geographies that frame Harry Potter.",
        "description": "Places, regions, and built sites that give Harry Potter its map — where events and figures concentrate."
    }
];

const relationships = [
    [
        "jk-rowling",
        "harry-potter",
        "created",
        "J.K. Rowling created Harry Potter.",
        0.99,
        0.99
    ],
    [
        "warner-bros",
        "harry-potter",
        "produced",
        "Warner Bros. produced the films.",
        0.95,
        0.9
    ],
    [
        "harry-potter",
        "philosophers-stone",
        "contains",
        "The saga begins with the Philosopher's Stone.",
        0.99,
        0.96
    ],
    [
        "harry-potter",
        "chamber-of-secrets",
        "contains",
        "Chamber of Secrets continues the saga.",
        0.98,
        0.94
    ],
    [
        "harry-potter",
        "prisoner-of-azkaban",
        "contains",
        "Prisoner of Azkaban deepens the past.",
        0.98,
        0.94
    ],
    [
        "harry-potter",
        "goblet-of-fire",
        "contains",
        "Goblet of Fire marks Voldemort's return.",
        0.98,
        0.95
    ],
    [
        "harry-potter",
        "order-of-the-phoenix",
        "contains",
        "Order of the Phoenix escalates the war.",
        0.98,
        0.94
    ],
    [
        "harry-potter",
        "half-blood-prince",
        "contains",
        "Half-Blood Prince reveals Horcruxes.",
        0.98,
        0.95
    ],
    [
        "harry-potter",
        "deathly-hallows",
        "contains",
        "Deathly Hallows ends the war.",
        0.99,
        0.96
    ],
    [
        "harry-james-potter",
        "hogwarts",
        "located_in",
        "Harry attends Hogwarts.",
        0.99,
        0.97
    ],
    [
        "harry-james-potter",
        "gryffindor",
        "member_of",
        "Harry is sorted into Gryffindor.",
        0.99,
        0.96
    ],
    [
        "hermione-granger",
        "gryffindor",
        "member_of",
        "Hermione is a Gryffindor.",
        0.99,
        0.95
    ],
    [
        "ron-weasley",
        "gryffindor",
        "member_of",
        "Ron is a Gryffindor.",
        0.99,
        0.95
    ],
    [
        "harry-james-potter",
        "hermione-granger",
        "connected_to",
        "Harry and Hermione are closest allies.",
        0.99,
        0.98
    ],
    [
        "harry-james-potter",
        "ron-weasley",
        "connected_to",
        "Harry and Ron are best friends.",
        0.99,
        0.98
    ],
    [
        "harry-james-potter",
        "lord-voldemort",
        "opposed_by",
        "Harry is Voldemort's prophesied enemy.",
        0.99,
        0.99
    ],
    [
        "harry-james-potter",
        "albus-dumbledore",
        "connected_to",
        "Dumbledore mentors Harry.",
        0.99,
        0.97
    ],
    [
        "harry-james-potter",
        "severus-snape",
        "connected_to",
        "Snape's fate is bound to Harry's.",
        0.98,
        0.96
    ],
    [
        "harry-james-potter",
        "sirius-black",
        "connected_to",
        "Sirius is Harry's godfather.",
        0.99,
        0.97
    ],
    [
        "lord-voldemort",
        "death-eaters",
        "leads",
        "Voldemort commands the Death Eaters.",
        0.99,
        0.98
    ],
    [
        "lord-voldemort",
        "horcrux",
        "uses",
        "Voldemort creates multiple Horcruxes.",
        0.99,
        0.99
    ],
    [
        "lord-voldemort",
        "slytherin",
        "member_of",
        "Tom Riddle was a Slytherin.",
        0.97,
        0.93
    ],
    [
        "albus-dumbledore",
        "order-of-the-phoenix-group",
        "leads",
        "Dumbledore leads the Order.",
        0.99,
        0.97
    ],
    [
        "albus-dumbledore",
        "hogwarts",
        "leads",
        "Dumbledore is Hogwarts headmaster.",
        0.99,
        0.96
    ],
    [
        "severus-snape",
        "death-eaters",
        "member_of",
        "Snape once served as a Death Eater.",
        0.96,
        0.94
    ],
    [
        "severus-snape",
        "order-of-the-phoenix-group",
        "member_of",
        "Snape spies for the Order.",
        0.97,
        0.95
    ],
    [
        "draco-malfoy",
        "slytherin",
        "member_of",
        "Draco is a Slytherin.",
        0.99,
        0.94
    ],
    [
        "draco-malfoy",
        "death-eaters",
        "member_of",
        "Draco is pressed into the Death Eaters.",
        0.96,
        0.93
    ],
    [
        "sirius-black",
        "azkaban",
        "located_in",
        "Sirius was imprisoned in Azkaban.",
        0.98,
        0.94
    ],
    [
        "sirius-black",
        "remus-lupin",
        "connected_to",
        "Sirius and Lupin were Marauders together.",
        0.98,
        0.95
    ],
    [
        "ginny-weasley",
        "chamber-of-secrets",
        "involved",
        "Ginny opens the Chamber via the diary.",
        0.98,
        0.95
    ],
    [
        "neville-longbottom",
        "battle-of-hogwarts",
        "involved",
        "Neville kills Nagini at Hogwarts.",
        0.98,
        0.96
    ],
    [
        "luna-lovegood",
        "order-of-the-phoenix",
        "involved",
        "Luna joins Dumbledore's Army in OOTP.",
        0.95,
        0.9
    ],
    [
        "minerva-mcgonagall",
        "hogwarts",
        "leads",
        "McGonagall defends and leads Hogwarts.",
        0.97,
        0.93
    ],
    [
        "rubeus-hagrid",
        "hogwarts",
        "member_of",
        "Hagrid serves Hogwarts.",
        0.98,
        0.92
    ],
    [
        "horcrux",
        "deathly-hallows",
        "connected_to",
        "Horcruxes and Hallows define the endgame.",
        0.97,
        0.96
    ],
    [
        "deathly-hallows-objects",
        "deathly-hallows",
        "connected_to",
        "The objects are revealed in Deathly Hallows.",
        0.98,
        0.95
    ],
    [
        "battle-of-hogwarts",
        "second-wizarding-war",
        "part_of",
        "The battle ends the Second Wizarding War.",
        0.99,
        0.97
    ],
    [
        "battle-of-hogwarts",
        "hogwarts",
        "occurred_at",
        "The final battle is fought at Hogwarts.",
        0.99,
        0.97
    ],
    [
        "godrics-hollow",
        "harry-james-potter",
        "connected_to",
        "Harry's survival begins at Godric's Hollow.",
        0.98,
        0.95
    ],
    [
        "ministry-of-magic",
        "second-wizarding-war",
        "involved",
        "The Ministry is consumed by the war.",
        0.96,
        0.92
    ],
    [
        "harry-potter",
        "harry-james-potter",
        "contains",
        "Harry is the saga's central character.",
        0.99,
        0.98
    ],
    [
        "harry-potter",
        "hogwarts",
        "connected_to",
        "Hogwarts is the saga's heart.",
        0.99,
        0.98
    ],
    [
        "harry-potter",
        "harry-potter-figures",
        "contains",
        "Harry Potter figures is a primary trailhead under Harry Potter.",
        0.88,
        0.82
    ],
    [
        "harry-potter",
        "harry-potter-places",
        "contains",
        "Harry Potter places is a primary trailhead under Harry Potter.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
