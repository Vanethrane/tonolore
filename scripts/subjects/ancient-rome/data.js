/*
 * Ancient Rome subject data — Republic, principate, and the city that ruled the Mediterranean.
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

/* ---------- Root / polities / city ---------- */

entity(
    "ancient-rome",
    "Ancient Rome",
    "topic",
    "City, Republic, and Empire that organized the Mediterranean for a millennium.",
    "Ancient Rome is the public-domain history of the city on the Tiber: kings, the Republic, the principate, and late imperial transformation. Its lore runs through Senate and Forum, legion and law, Carthage, Caesar, and Constantine."
);

entity(
    "rome",
    "Rome",
    "place",
    "City of the seven hills, Forum, and later the imperial capital of the west.",
    "Rome is the physical city: Palatine and Capitoline, the Forum's political floor, and the later marble of emperors. All Roman offices claimed it even when emperors lived elsewhere."
);

entity(
    "roman-republic",
    "Roman Republic",
    "organization",
    "Res publica of consuls, Senate, and assemblies, c. 509–27 BCE.",
    "The Roman Republic replaced the kings with annual magistrates and senatorial authority. It conquered Italy and the Mediterranean, then broke under civil war into the principate."
);

entity(
    "roman-empire",
    "Roman Empire",
    "organization",
    "The principate and dominate from Augustus through late antiquity.",
    "The Roman Empire is the autocracy Augustus built on Republican forms: provinces, standing legions, imperial cult, and, after crisis, Constantine's Christian monarchy."
);

entity(
    "roman-senate",
    "Roman Senate",
    "organization",
    "Council of elders that steered the Republic and lent the Empire its language.",
    "The Senate advised magistrates, assigned provinces, and embodied mos maiorum. Emperors packed and flattered it; SPQR still named the Senate and People as the state's fiction."
);

entity(
    "spqr",
    "SPQR",
    "concept",
    "Senatus Populusque Romanus — the Republic's surviving brand.",
    "SPQR is the formula of Senate and People on standards, coins, and monuments. It outlived free elections as the empire's claim to be still a public thing."
);

/* ---------- Places ---------- */

entity(
    "roman-forum",
    "Roman Forum",
    "place",
    "Civic valley between Palatine and Capitoline.",
    "The Forum Romanum was the Republic's open-air machine: Rostra, Curia, basilicas, and the path of triumphs. Speeches and funerals there could move the city."
);

entity(
    "colosseum",
    "Colosseum",
    "place",
    "Flavian amphitheatre for games in the heart of the city.",
    "The Colosseum, dedicated under Titus in 80 CE, staged beast hunts and gladiatorial munera as imperial gifts. It is the stone emblem of the city after the Republic."
);

entity(
    "pantheon",
    "Pantheon",
    "place",
    "Hadrian's domed temple to all the gods.",
    "The Pantheon, rebuilt under Hadrian on Agrippa's site, is the best-preserved great building of imperial Rome — a concrete dome and a political claim to universal cult."
);

entity(
    "carthage",
    "Carthage",
    "place",
    "Punic capital Rome destroyed and later refounded in Africa.",
    "Carthage was Rome's equal in the western Mediterranean until the Punic Wars. Its fall in 146 BCE and later Roman colony mark the Republic's overseas turn."
);

/* ---------- People ---------- */

entity(
    "romulus",
    "Romulus",
    "person",
    "Legendary founder who gave the city its name and first Senate.",
    "Romulus, twin of Remus, is the foundation hero: the wall, the asylum, the rape of the Sabine women, and the first king in the tradition Livy and others retell."
);

entity(
    "julius-caesar",
    "Julius Caesar",
    "person",
    "Dictator who crossed the Rubicon and died on the Ides of March.",
    "Gaius Julius Caesar conquered Gaul, broke Pompey, and made himself dictator perpetuo. His murder in 44 BCE did not restore the Republic; it opened the last civil wars."
);

entity(
    "cicero",
    "Cicero",
    "person",
    "Orator and consul who tried to save Republican speech.",
    "Marcus Tullius Cicero's consulship against Catiline, his Philippics against Antony, and his letters are the Republic's last great prose. Antony's proscription killed him in 43 BCE."
);

entity(
    "pompey",
    "Pompey",
    "person",
    "Magnus — the general who became Caesar's rival in the civil war.",
    "Pompey the Great cleared the seas, settled the east, and joined the First Triumvirate. He died in Egypt after Pharsalus, the Republic's military alternative to Caesar."
);

entity(
    "augustus",
    "Augustus",
    "person",
    "First emperor, who closed the civil wars and founded the principate.",
    "Octavian, Caesar's heir, defeated Antony and Cleopatra at Actium, took the name Augustus in 27 BCE, and ruled as princeps while leaving Senate and magistracies standing."
);

entity(
    "mark-antony",
    "Mark Antony",
    "person",
    "Caesar's lieutenant who split the east with Cleopatra and lost Actium.",
    "Marcus Antonius avenged Caesar, formed the Second Triumvirate, and ruled the east until Octavian's propaganda and Agrippa's fleet ended him in 31–30 BCE."
);

entity(
    "hannibal",
    "Hannibal",
    "person",
    "Carthaginian general who brought the war over the Alps.",
    "Hannibal Barca won Trebia, Trasimene, and Cannae in Italy, failed to take Rome, and was finally beaten by Scipio in Africa — the Republic's defining foreign enemy."
);

entity(
    "scipio-africanus",
    "Scipio Africanus",
    "person",
    "Republican general who defeated Hannibal at Zama.",
    "Publius Cornelius Scipio took the war to Spain and Africa, won Zama in 202 BCE, and earned the name Africanus — the Punic Wars' Roman counterpart to Hannibal."
);

entity(
    "constantine",
    "Constantine",
    "person",
    "Emperor who legalized Christianity and founded Constantinople.",
    "Constantine I won at the Milvian Bridge, issued the Edict of Milan, and moved the imperial center east. He is the hinge from pagan principate to Christian empire."
);

entity(
    "nero",
    "Nero",
    "person",
    "Last Julio-Claudian, remembered for the fire and the artist's principate.",
    "Nero's reign (54–68 CE) ended in revolt and suicide. Contemporary and later writers fixed him as the tyrant of the Great Fire, the Golden House, and the first imperial persecution stories."
);

entity(
    "trajan",
    "Trajan",
    "person",
    "Optimus Princeps, whose Dacian and Parthian wars marked the territorial high.",
    "Trajan (r. 98–117) brought the empire to its greatest extent and left the Forum and column that still advertise Dacia. Later senators treated him as the good emperor's pattern."
);

/* ---------- Events, institutions, works ---------- */

entity(
    "punic-wars",
    "Punic Wars",
    "event",
    "Three wars with Carthage that made Rome a Mediterranean power.",
    "The Punic Wars (264–146 BCE) ran from Sicily through Hannibal's invasion to the sack of Carthage. They created overseas provinces and a soldier-class the later Republic could not reabsorb."
);

entity(
    "battle-of-cannae",
    "Battle of Cannae",
    "event",
    "216 BCE encirclement, Rome's worst field defeat.",
    "At Cannae, Hannibal destroyed a double consular army. The Republic refused peace, raised new legions, and survived — the trauma behind later fear of one-man command."
);

entity(
    "crossing-the-rubicon",
    "Crossing the Rubicon",
    "event",
    "49 BCE, Caesar's illegal march on Italy.",
    "Caesar led Legio XIII across the Rubicon, the boundary of his province, and made civil war certain. Alea iacta est is the later tag for a step that cannot be undone."
);

entity(
    "assassination-of-caesar",
    "Assassination of Caesar",
    "event",
    "Ides of March, 44 BCE, in the Theatre of Pompey.",
    "The Liberators killed Caesar to restore the Republic. The funeral, Octavian's arrival, and the next civil war showed that the dictatorship had already remade politics."
);

entity(
    "battle-of-actium",
    "Battle of Actium",
    "event",
    "31 BCE naval victory that left Octavian alone.",
    "Actium, off western Greece, was Agrippa's defeat of Antony and Cleopatra. Within a year the principate had a single master."
);

entity(
    "pax-romana",
    "Pax Romana",
    "concept",
    "The long imperial peace advertised from Augustus through the Antonines.",
    "Pax Romana is the ideology and, in the Mediterranean core, the practice of reduced civil war and secured seas — paid for by frontier armies and provincial taxation."
);

entity(
    "roman-legion",
    "Roman legion",
    "organization",
    "Heavy infantry unit that built and held the empire.",
    "The legion — from manipular Republic to imperial cohort structure — was Rome's tool of conquest, engineering, and occupation. Loyalty to generals rather than Senate unmade the Republic."
);

entity(
    "twelve-tables",
    "Twelve Tables",
    "work",
    "Mid-fifth-century BCE law code, foundation of Roman law.",
    "The Twelve Tables were posted in the Forum as the Republic's first written law. Later jurists treated them as the ancestor of the civil law tradition."
);

entity(
    "commentarii-de-bello-gallico",
    "Commentarii de Bello Gallico",
    "work",
    "Caesar's third-person report on the Gallic War.",
    "The Gallic War commentaries are Caesar's political literature: clear Latin, a portrait of himself as Rome's necessary general, and a primary source for the late Republic."
);

entity(
    "edict-of-milan",
    "Edict of Milan",
    "event",
    "313 agreement that legalized Christianity in the empire.",
    "The Edict of Milan, associated with Constantine and Licinius, ended the Great Persecution's legal core and opened the Christian empire Constantine would further shape."
);

/* ---------- Relationships ---------- */

rel("rome", "ancient-rome", "part_of", "The city of Rome is the namesake and first capital of the Roman world.", 0.99, 0.98);
rel("roman-forum", "rome", "located_in", "The Forum sits in the civic heart of Rome.", 0.99, 0.97);
rel("colosseum", "rome", "located_in", "The Colosseum stands in Rome as the Flavian amphitheatre.", 0.98, 0.96);
rel("pantheon", "rome", "located_in", "The Pantheon is Hadrian's temple in the city of Rome.", 0.97, 0.94);
rel("romulus", "rome", "created", "Tradition names Romulus as the founder of Rome.", 0.95, 0.92);
rel("romulus", "roman-senate", "created", "Legend has Romulus choosing the first senators.", 0.9, 0.86);

rel("roman-republic", "ancient-rome", "part_of", "The Republic is Rome's classical political form.", 0.98, 0.96);
rel("roman-empire", "ancient-rome", "part_of", "The Empire is Rome after Augustus monopolized power.", 0.98, 0.96);
rel("roman-republic", "roman-empire", "preceded", "The Republic preceded and was transformed into the Empire.", 0.97, 0.95);
rel("roman-senate", "roman-republic", "leads", "The Senate was the steering council of the Republic.", 0.96, 0.93);
rel("spqr", "roman-senate", "connected_to", "SPQR names the Senate together with the Roman people.", 0.97, 0.94);
rel("twelve-tables", "roman-forum", "located_in", "The Twelve Tables were displayed in the Forum.", 0.94, 0.9);
rel("roman-legion", "roman-republic", "part_of", "The manipular legion was the Republic's army.", 0.95, 0.92);
rel("roman-legion", "roman-empire", "part_of", "The standing legion was the Empire's occupation force.", 0.95, 0.92);

rel("punic-wars", "carthage", "involved", "The Punic Wars were fought against Carthage.", 0.99, 0.97);
rel("punic-wars", "roman-republic", "involved", "The Republic became a Mediterranean empire through the Punic Wars.", 0.97, 0.95);
rel("hannibal", "punic-wars", "involved", "Hannibal was Carthage's general in the Second Punic War.", 0.98, 0.96);
rel("hannibal", "battle-of-cannae", "involved", "Hannibal destroyed the Roman army at Cannae.", 0.98, 0.96);
rel("battle-of-cannae", "punic-wars", "part_of", "Cannae was the nadir of the Second Punic War.", 0.97, 0.94);
rel("scipio-africanus", "hannibal", "opposed_by", "Scipio defeated Hannibal at Zama.", 0.97, 0.95);
rel("scipio-africanus", "punic-wars", "involved", "Scipio Africanus ended the Second Punic War in Africa.", 0.96, 0.93);

rel("julius-caesar", "commentarii-de-bello-gallico", "produced", "Caesar wrote the Gallic War commentaries.", 0.98, 0.96);
rel("julius-caesar", "crossing-the-rubicon", "caused", "Caesar's crossing of the Rubicon opened the civil war.", 0.98, 0.96);
rel("julius-caesar", "pompey", "opposed_by", "Caesar and Pompey fought the civil war that ended at Pharsalus.", 0.97, 0.94);
rel("cicero", "roman-senate", "member_of", "Cicero was a consular voice of the Senate.", 0.96, 0.93);
rel("cicero", "julius-caesar", "opposed_by", "Cicero defended Republican forms against Caesar's dictatorship and Antony's aftermath.", 0.93, 0.89);
rel("assassination-of-caesar", "julius-caesar", "involved", "The Ides of March killed Caesar.", 0.99, 0.98);
rel("assassination-of-caesar", "roman-forum", "connected_to", "Caesar's funeral in the Forum turned the city against the Liberators.", 0.94, 0.9);

rel("augustus", "roman-empire", "created", "Augustus founded the principate that became the Empire.", 0.99, 0.97);
rel("augustus", "julius-caesar", "followed", "Augustus was Caesar's adopted heir and avenger.", 0.97, 0.94);
rel("mark-antony", "julius-caesar", "supports", "Antony was Caesar's lieutenant and avenger.", 0.95, 0.92);
rel("augustus", "mark-antony", "opposed_by", "Octavian defeated Antony at Actium.", 0.97, 0.95);
rel("battle-of-actium", "augustus", "caused", "Actium left Octavian free to become Augustus.", 0.96, 0.93);
rel("augustus", "pax-romana", "created", "Augustus advertised the Pax Romana as the fruit of his settlement.", 0.96, 0.93);
rel("trajan", "pax-romana", "supports", "Trajan's reign is counted inside the high imperial peace.", 0.93, 0.89);
rel("nero", "roman-empire", "leads", "Nero ruled as a Julio-Claudian emperor of Rome.", 0.94, 0.9);
rel("colosseum", "roman-empire", "part_of", "The Colosseum is an imperial monument of the Flavian city.", 0.94, 0.91);

rel("constantine", "roman-empire", "leads", "Constantine remade the late empire as a Christian monarchy.", 0.96, 0.93);
rel("constantine", "edict-of-milan", "created", "Constantine joined Licinius in legalizing Christianity in 313.", 0.96, 0.93);
rel("julius-caesar", "roman-legion", "uses", "Caesar's loyalty-bound legions made the Rubicon possible.", 0.95, 0.92);

module.exports = { entities, relationships };
